import Triangle from "./triangle"

describe('Triangle Class', () => {
  test('ensure calculate area of the triangle', () => {
    const triangle = new Triangle(2, 2);

    expect(triangle.getArea()).toBe(2)
  })
})
