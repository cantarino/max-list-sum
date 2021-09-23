import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SumResponse {
  @Field(() => Number)
  sum: number;

  @Field(() => [Number])
  positions: number[];
}
