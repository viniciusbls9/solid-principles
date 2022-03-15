import { ShapesInterface } from 'models/shapesInterface'

class AreaCalculator {
  private readonly shapes;

  constructor(shapes: ShapesInterface) {
    this.shapes = shapes;
  }

  sum(): string {
    let areaShapes = 0;
    this.shapes.forEach((shape) => {
      areaShapes += shape.getArea();
    });
    return `Sum of all areas are ${areaShapes}`;
  }
}

export default AreaCalculator;
