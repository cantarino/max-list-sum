import { getMaxSum } from "../service/maxSumService";

test("Should get only the first element", async () => {
  let list = [-1, -1, -1, -1, -1];
  let sum = -1;
  let positions = [1];
  let { sum: sumResponse, positions: positionsResponse } = getMaxSum(list);
  expect(sum).toBe(sumResponse);
  expect(positions).toEqual(expect.arrayContaining(positionsResponse));
});

test("Should get only the second element", async () => {
  let list = [-200, -1, -1, -1, -1000];
  let sum = -1;
  let positions = [2];
  let { sum: sumResponse, positions: positionsResponse } = getMaxSum(list);
  expect(sum).toBe(sumResponse);
  expect(positions).toEqual(expect.arrayContaining(positionsResponse));
});

test("Should get all elements but the first and last", async () => {
  let list = [-321, 2, -1, 2, -123];
  let sum = 3;
  let positions = [2, 3, 4];
  let { sum: sumResponse, positions: positionsResponse } = getMaxSum(list);
  expect(sum).toBe(sumResponse);
  expect(positions).toEqual(expect.arrayContaining(positionsResponse));
});

test("Should get all elements but the first", async () => {
  let list = [-321, 1, 2, 3, 4];
  let sum = 10;
  let positions = [2, 3, 4, 5];
  let { sum: sumResponse, positions: positionsResponse } = getMaxSum(list);
  expect(sum).toBe(sumResponse);
  expect(positions).toEqual(expect.arrayContaining(positionsResponse));
});

test("Should get all elements", async () => {
  let list = [1, 2, 3, 4, 5];
  let sum = 15;
  let positions = [1, 2, 3, 4, 5];
  let { sum: sumResponse, positions: positionsResponse } = getMaxSum(list);
  expect(sum).toBe(sumResponse);
  expect(positions).toEqual(expect.arrayContaining(positionsResponse));
});

test("Should get all elements but the last", async () => {
  let list = [1, 2, 3, 4, -456];
  let sum = 10;
  let positions = [1, 2, 3, 4];
  let { sum: sumResponse, positions: positionsResponse } = getMaxSum(list);
  expect(sum).toBe(sumResponse);
  expect(positions).toEqual(expect.arrayContaining(positionsResponse));
});

test("Should get only the third element", async () => {
  let list = [-1, -1, 200, -1, -1];
  let sum = 200;
  let positions = [3];
  let { sum: sumResponse, positions: positionsResponse } = getMaxSum(list);
  expect(sum).toBe(sumResponse);
  expect(positions).toEqual(expect.arrayContaining(positionsResponse));
});
