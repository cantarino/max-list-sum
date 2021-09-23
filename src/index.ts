import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import { buildGraphQLSchema } from "./config/schema";

const main = async () => {
  const app = express();
  app.use(
    cors({
      origin: process.env.ORIGIN,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildGraphQLSchema(),
    context: ({ req, res }) => ({ req, res }),
    introspection: true,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`server on, running on http://localhost:${port}`);
  });
};

main().catch((err) => {
  console.log("error: ", err);
});
