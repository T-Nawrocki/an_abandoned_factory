export const scaled = (base, iterations) => {

  let result = base;
  const modifier = 1.2;  // cost will increase by this amount for each iteration

  for (let count = 0; count < iterations; count++) {
    result *= modifier;
  }

  return Math.round(result);

}
