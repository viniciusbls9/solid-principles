import { ShapesInterface } from 'models/shapesInterface'

class AreaCalculator {
  private readonly shapes;

  constructor(shapes: ShapesInterface) {
    this.shapes = shapes;
  }

  sum(): number {
    let areaShapes = 0;
    this.shapes.forEach((shape) => {
      areaShapes += shape.getArea();
    });
    return areaShapes;
  }
}

export default AreaCalculator;
