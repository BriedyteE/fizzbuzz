export const getFizzBuzzValue = (number) => {
  if (number === 0) {
    return 0;
  }

  const fizzOrEmpty = number % 3 === 0 ? "Fizz" : "";
  const buzzOrEmpty = number % 5 === 0 ? "Buzz" : "";

  return fizzOrEmpty + buzzOrEmpty || number;
};

export const solveFizzBuzz = (countOfValues) => {
  if (!countOfValues) {
    return "";
  }
  const fizBuzz = [];

  for (let i = 0; i <= countOfValues; i++) {
    fizBuzz[i] = getFizzBuzzValue(i);
  }

  return fizBuzz.join("");
};
