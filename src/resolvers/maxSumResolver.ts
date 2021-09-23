import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { SumResponse } from "../entities/sumResponse";

@Resolver()
export class MaxSumResolver {
  @Query(() => SumResponse)
  @Mutation(() => SumResponse)
  maxsum(@Arg("list", () => [Number]) list: number[]): SumResponse {
    console.log(list);
    return {
      sum: 1,
      positions: [1, 2, 3],
    };
  }
}
