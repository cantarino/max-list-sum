import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { MaxSumResponse } from "../entities/maxSumResponse";
import { getMaxSum } from "../service/maxSumService";

@Resolver()
export class MaxSumResolver {
  @Query(() => MaxSumResponse)
  @Mutation(() => MaxSumResponse)
  maxsum(@Arg("list", () => [Number]) list: number[]): MaxSumResponse {
    return getMaxSum(list);
  }
}
