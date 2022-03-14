import Square from "../Square/square";

describe('Square Class', () => {
  test('should calculate the area of the square', () => {
    const square = new Square(2);

    expect(square.getArea()).toBe(4)
  })
})
