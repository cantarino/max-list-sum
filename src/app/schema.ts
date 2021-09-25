import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { MaxSumResolver } from "../app/maxSum/resolver";

export async function buildGraphQLSchema() {
  return buildSchema({
    resolvers: [MaxSumResolver],
    validate: false,
  });
}
