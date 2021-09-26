import request from "supertest";
import { buildApp } from "../../src/app/app";

const MAX_SUM_MUTATION = `
    mutation MaxSumMutation($list: [Float!]!){
        maxsum(list: $list) {
            sum
            positions
        }
    }`;

describe("Max Sum Resolver", () => {
  test("Should run max sum mutation request", async () => {
    const list = [-2, 3, 5, -1, 4, -5];
    const sum = 11;
    const positions = [2, 3, 4, 5];

    const app = await buildApp();
    const response = await request(app)
      .post("/graphql")
      .send({
        query: MAX_SUM_MUTATION,
        variables: {
          list,
        },
      })
      .set("Accept", "application/json");

    const maxSumResponse = response.body?.data?.maxsum;
    expect(response.statusCode).toBe(200);
    expect(maxSumResponse?.sum).toBe(sum);
    expect(positions).toEqual(
      expect.arrayContaining(maxSumResponse?.positions)
    );
  });
});
