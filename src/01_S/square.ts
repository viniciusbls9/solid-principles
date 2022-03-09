class Square {
  private readonly length: number

  constructor (length: number) {
    this.length = length
  }

  getArea (): number {
    return Math.pow(this.length, 2)
  }
}

export default Square
