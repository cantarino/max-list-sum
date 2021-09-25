import { buildApolloServer } from "../../src/app/app";
const MAX_SUM_MUTATION = `
    mutation MaxSumMutation($list: [Float!]!){
        maxsum(list: $list) {
            sum
            positions
        }
    }`;
describe("Max Sum Resolver", () => {
  test("Should run max sum mutation", async () => {
    const list = [-2, 3, 5, -1, 4, -5];
    const sum = 11;
    const positions = [2, 3, 4, 5];
    const server = await buildApolloServer();
    const { data } = await server.executeOperation({
      query: MAX_SUM_MUTATION,
      variables: {
        list,
      },
    });
    const maxSumResponse = data?.maxsum;
    expect(maxSumResponse?.sum).toBe(sum);
    expect(positions).toEqual(
      expect.arrayContaining(maxSumResponse?.positions)
    );
  });
});
