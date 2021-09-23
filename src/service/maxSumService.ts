import { MaxSumResponse } from "../entities/maxSumResponse";

export function getMaxSum(list: number[]): MaxSumResponse {
  //Kadane algorithm implementation
  let positions = [1],
    currentPositions: number[] = [];
  let sum = list[0],
    currentMax = list[0];

  //Iterate through list
  for (let i = 1; i < list.length; i++) {
    let currentNumber = list[i];
    currentMax += currentNumber;

    //Test if the current number is higher than the sum so far
    currentMax = Math.max(currentMax, currentNumber);
    currentPositions = [...currentPositions, i + 1];
    //Update sum if needed
    if (currentMax > sum) {
      sum = currentMax;

      //Update positions array, if sum is equal to current number subarray sum is reset
      positions =
        sum == currentNumber ? [i + 1] : [...positions, ...currentPositions];
      currentPositions = [];
    }
  }
  return { sum, positions };
}
