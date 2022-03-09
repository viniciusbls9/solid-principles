import Square from './square'
import Circle from './circle'

type ShapeProps = {
  getArea(): number
}

class AreaCalculator {
  private readonly shapes: ShapeProps[]

  constructor (shapes: Array<Square | Circle>) {
    this.shapes = shapes
  }

  sum (): string {
    let areaShapes = 0
    this.shapes.forEach((shape: ShapeProps) => {
      areaShapes += shape.getArea()
    })
    return `Sum of all areas are ${areaShapes}`
  }
}

export default AreaCalculator
