import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { MaxSumResolver } from "../resolvers/maxSumResolver";

export async function buildGraphQLSchema() {
  return buildSchema({
    resolvers: [MaxSumResolver],
    validate: false,
  });
}
