# syntax = docker/dockerfile:1

FROM node:18-alpine as base

ARG PORT=3000

ENV NODE_ENV=production
ENV ENDPOINT=https://cloud.appwrite.io/v1
ENV PROJECT=6705446b0011038f27f7
ENV API_KEY=standard_1e3f72ff9f214d83d166bd2a1e9c21bd7a536f57b48d0205e697e994c06e06f884df6f25ea387d077109c00db2ac1497cc1f02f24cf0578de20ead25c816b019f729046274b6a2f72f5a682f29ad46db3e82056026bac80bb3820423cd501caf9f64231addcf8f45fadee6343521f15126c734d3b94b35e20a2f681c351e6bb9
ENV DATABASE=670546a9001d85dcc600
ENV BUCKET=67afa044002bb70d41a2
ENV CLIENTS_COLLECTION=67af989e003ab525c3c2
ENV PROJECTS_COLLECTION=67af98ea0001a14fe1c4
ENV TESTIMONIES_COLLECTION=67af922b00375a5f1a1d

WORKDIR /src

# Build
FROM base as build

COPY --link package*.json ./
RUN npm install --production=false

COPY --link . .

RUN npm run build
RUN npm prune

# Run
FROM base

ENV PORT=$PORT

COPY --from=build /src/.output /src/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules

CMD [ "node", ".output/server/index.mjs" ]