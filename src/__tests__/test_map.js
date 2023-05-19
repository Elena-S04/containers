import ErrorRepository from "../index";

test("should show description of the error", () => {
  const errorsList = new ErrorRepository();

  expect(errorsList.translate(400)).toBe("Bad Request");
});

test('should show "Unknown error"', () => {
  const errorsList = new ErrorRepository();

  expect(errorsList.translate(520)).toBe("Unknown error");
});
