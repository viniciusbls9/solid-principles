import Circle from "../Circle/circle";
import Square from "../Square/square";
import AreaCalculator from "./area-calculator";

describe('Circle Class', () => {
  test('should calculate the area of the circle', () => {
    const square = new Square(2);
    const circle = new Circle(2);

    const areaCalculator = new AreaCalculator([square, circle]);

    expect(Math.floor(areaCalculator.sum())).toBe(16)
  })
})
