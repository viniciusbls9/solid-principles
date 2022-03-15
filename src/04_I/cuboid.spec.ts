import AreaCalculator from "../01_S/AreaCalculator/area-calculator";
import Circle from "../01_S/Circle/circle";
import Square from "../01_S/Square/square";
import Triangle from "../02_O/triangle/triangle";
import Cuboid from "./cuboid";

describe("Cuboid Class", () => {
  test("", () => {
    const square = new Square(2);
    const circle = new Circle(3);
    const triangle = new Triangle(10, 3);
    const cuboid = new Cuboid(5);
    const areaCalculator = new AreaCalculator([
      square,
      circle,
      triangle,
      cuboid,
    ]);

    expect(Math.floor(areaCalculator.sum())).toBe(172);
  });
});
