import Circle from "../Circle/circle";

describe('Circle Class', () => {
  test('should calculate the area of the circle', () => {
    const circle = new Circle(2);

    expect(Math.floor(circle.getArea())).toBe(12)
  })
})
