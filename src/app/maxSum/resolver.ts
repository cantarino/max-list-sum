import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { getMaxSum } from "./data";
import { MaxSumResponse } from "./response";

@Resolver()
export class MaxSumResolver {
  @Query(() => MaxSumResponse)
  @Mutation(() => MaxSumResponse)
  maxsum(@Arg("list", () => [Number]) list: number[]): MaxSumResponse {
    return getMaxSum(list);
  }
}
