import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class MaxSumResponse {
  @Field(() => Number)
  sum: number;

  @Field(() => [Number])
  positions: number[];
}
