import { Client, Databases, Query } from "node-appwrite";
import {
  IClientDocument,
  IClientTestimony,
  ILanguageItem,
  ITestimonyDocument,
} from "~/types";

const config = useRuntimeConfig();

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
      testimonies: parsedClientsTestimonies,
    };
  } catch (error: unknown) {
    console.log(error);
    throw createError({
      statusCode: 400,
      statusMessage: "ID should be an integer",
    });
  }
});
