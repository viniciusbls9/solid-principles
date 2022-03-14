import Square from '../Square/square'
import Circle from '../Circle/circle'

type ShapeProps = {
  getArea(): number
}

class AreaCalculator {
  private readonly shapes: ShapeProps[]

  constructor (shapes: Array<Square | Circle>) {
    this.shapes = shapes
  }

  sum (): number {
    let areaShapes = 0
    this.shapes.forEach((shape: ShapeProps) => {
      areaShapes += shape.getArea()
    })
    return areaShapes
  }
}

export default AreaCalculator
