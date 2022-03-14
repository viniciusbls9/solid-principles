import Circle from "01_S/Circle/circle";
import Square from "01_S/Square/square";
import AreaCalculator from "./area-calculator";

describe('AreaCalculator Class', () => {
  test('should calculate the area of the circle', () => {
    const square = new Square(2);
    const circle = new Circle(2);
    const areaCalculator = new AreaCalculator([circle, square]);

    expect(Math.floor(areaCalculator.sum())).toBe(16)
  })
})
