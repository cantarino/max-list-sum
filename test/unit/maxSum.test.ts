import { getMaxSum } from "../../src/app/maxSum/data";

describe("Max Sum", () => {
  test("Should get only the first element", async () => {
    const list = [-1, -1, -1, -1, -1];
    const sum = -1;
    const positions = [1];
    const { sum: sumResponse, positions: positionsResponse } = getMaxSum(list);
    expect(sum).toBe(sumResponse);
    expect(positions).toEqual(expect.arrayContaining(positionsResponse));
  });

  test("Should get only the second element", async () => {
    const list = [-200, -1, -1, -1, -1000];
    const sum = -1;
    const positions = [2];
    const { sum: sumResponse, positions: positionsResponse } = getMaxSum(list);
    expect(sum).toBe(sumResponse);
    expect(positions).toEqual(expect.arrayContaining(positionsResponse));
  });

  test("Should get all elements but the first and last", async () => {
    const list = [-321, 2, -1, 2, -123];
    const sum = 3;
    const positions = [2, 3, 4];
    const { sum: sumResponse, positions: positionsResponse } = getMaxSum(list);
    expect(sum).toBe(sumResponse);
    expect(positions).toEqual(expect.arrayContaining(positionsResponse));
  });

  test("Should get all elements but the first", async () => {
    const list = [-321, 1, 2, 3, 4];
    const sum = 10;
    const positions = [2, 3, 4, 5];
    const { sum: sumResponse, positions: positionsResponse } = getMaxSum(list);
    expect(sum).toBe(sumResponse);
    expect(positions).toEqual(expect.arrayContaining(positionsResponse));
  });

  test("Should get all elements", async () => {
    const list = [1, 2, 3, 4, 5];
    const sum = 15;
    const positions = [1, 2, 3, 4, 5];
    const { sum: sumResponse, positions: positionsResponse } = getMaxSum(list);
    expect(sum).toBe(sumResponse);
    expect(positions).toEqual(expect.arrayContaining(positionsResponse));
  });

  test("Should get all elements but the last", async () => {
    const list = [1, 2, 3, 4, -456];
    const sum = 10;
    const positions = [1, 2, 3, 4];
    const { sum: sumResponse, positions: positionsResponse } = getMaxSum(list);
    expect(sum).toBe(sumResponse);
    expect(positions).toEqual(expect.arrayContaining(positionsResponse));
  });

  test("Should get only the third element", async () => {
    const list = [-1, -1, 200, -1, -1];
    const sum = 200;
    const positions = [3];
    const { sum: sumResponse, positions: positionsResponse } = getMaxSum(list);
    expect(sum).toBe(sumResponse);
    expect(positions).toEqual(expect.arrayContaining(positionsResponse));
  });

  test("Should get the only element", async () => {
    const list = [-1];
    const sum = -1;
    const positions = [1];
    const { sum: sumResponse, positions: positionsResponse } = getMaxSum(list);
    expect(sum).toBe(sumResponse);
    expect(positions).toEqual(expect.arrayContaining(positionsResponse));
  });

  test("Should get elements 4, -1, 2, 1", async () => {
    const list = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const sum = 6;
    const positions = [4, 5, 6, 7];
    const { sum: sumResponse, positions: positionsResponse } = getMaxSum(list);
    expect(sum).toBe(sumResponse);
    expect(positions).toEqual(expect.arrayContaining(positionsResponse));
  });
});
