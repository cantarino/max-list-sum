import { MaxSumResponse } from "./response";

export function getMaxSum(list: number[]): MaxSumResponse {
  /* Kadane's algorithm implementation
  Local maximum at index i is the maximum between the current element
  and the sum the current element and the local maximum at index i - 1 */
  let positions = [1],
    localPositions: number[] = [];
  let sum = list[0],
    localMax = list[0];

  //Iterate through list
  for (let i = 1; i < list.length; i++) {
    let localNumber = list[i];
    localMax += localNumber;

    //Test if the current number is higher than the sum so far
    localMax = Math.max(localMax, localNumber);
    localPositions = [...localPositions, i + 1];
    //Update sum if local max exceeds it
    if (localMax > sum) {
      sum = localMax;

      //Update positions array, if sum is equal to local max subarray sum is reset
      positions =
        sum == localNumber ? [i + 1] : [...positions, ...localPositions];
      localPositions = [];
    }
  }
  return { sum, positions };
}
