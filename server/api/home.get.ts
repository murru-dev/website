import {
  AppwriteException,
  Client,
  Databases,
  Models,
  Query,
} from "node-appwrite";
import {
  IClientDocument,
  IClientTestimony,
  ILanguageItem,
  ITestimonyDocument,
} from "~/types";

interface IHomeContent {
  presentation: ILanguageItem;
  intro: {
    title: ILanguageItem;
    body: ILanguageItem;
  };
}

const config = useRuntimeConfig();

const parseHomeContent = (data: Models.Document): IHomeContent => {
  const jsonData = JSON.parse(data.content);
  return {
    presentation: {
      en: jsonData.presentation.en,
      es: jsonData.presentation.es,
    },
    intro: {
      title: {
        en: jsonData.intro.title.en,
        es: jsonData.intro.title.es,
      },
      body: {
        en: jsonData.intro.body.en,
        es: jsonData.intro.body.es,
      },
    },
  };
};

const parseClientTestimony = (
  client: IClientDocument,
  testimonies: ITestimonyDocument[]
): IClientTestimony => {
  const parsedPosition: ILanguageItem = JSON.parse(client.position);
  const testimony = testimonies.find((t) => t.client_id === client.$id);
  const parsedTestimony: ILanguageItem = JSON.parse(testimony!.comment);
  return {
    name: client.name,
    company: client.company,
    position: {
      en: parsedPosition.en,
      es: parsedPosition.es,
    },
    avatar: `${config.endpoint}/storage/buckets/${config.bucket}/files/${client.avatar}/view?project=${config.project}&mode=admin`,
    testimony: {
      en: parsedTestimony.en,
      es: parsedTestimony.es,
    },
    date: testimony!.$updatedAt,
  };
};

export default defineEventHandler(async () => {
  const client = new Client()
    .setProject(config.project)
    .setEndpoint(config.endpoint)
    .setKey(config.apiKey);
  const databases = new Databases(client);

  try {
    // Query home content
    const homeContentRes = await databases.listDocuments(
      config.database,
      config.homeContentCollection
    );
    const parsedHomeConteng = parseHomeContent(homeContentRes.documents[0]);
    // Query testimonies
    const testimoniesRes = await databases.listDocuments(
      config.database,
      config.testimoniesCollection,
      [Query.orderDesc("$createdAt")]
    );

    let parsedClientsTestimonies: IClientTestimony[] = [];
    if (testimoniesRes.total > 0) {
      // Query the clients of the testimonies
      const clientIds: string[] = testimoniesRes.documents.map(
        (document) => document.client_id
      );
      const clientsRes = await databases.listDocuments(
        config.database,
        config.clientsCollection,
        [Query.contains("$id", clientIds)]
      );

      // Create the object to return
      parsedClientsTestimonies = clientsRes.documents.map((document) =>
        parseClientTestimony(
          document as IClientDocument,
          testimoniesRes.documents as ITestimonyDocument[]
        )
      );
    }

    return {
      status: "success",
      pageContent: parsedHomeConteng,
      testimonies: parsedClientsTestimonies,
    };
  } catch (error: unknown) {
    let code: number = 0;
    let message: string = "";
    if (error instanceof AppwriteException) {
      code = error.code;
      message = error.message;
      console.log("name ", error.name);
      console.log("code ", error.code);
      console.log("type ", error.type);
      console.log("message ", error.message);
    } else if (error instanceof Error) {
      code = 501;
      message = error.message;
    } else {
      console.log(error);
      code = 590;
      message = "Check logs";
    }

    return {
      status: "fail",
      code,
      message,
    };
  }
});
