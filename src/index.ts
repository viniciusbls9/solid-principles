import AreaCalculator from "./01_S/AreaCalculator/area-calculator";
import Square from "./01_S/Square/square";
import Circle from "./01_S/Circle/circle";
import Triangle from "./02_O/Triangle/triangle";
import VolumeCalculator from "./03_L/volume-calculator";
import Cuboid from "./04_I/cuboid";
import MysqlDb from "./05_D/mysql-db";
import PostgresDb from "./05_D/postgres-db";

(() => {
  const square = new Square(2);
  const circle = new Circle(2);
  const areaCalculator = new AreaCalculator([square, circle]);
  console.log("O1_S principle: ", areaCalculator.sum());

  const triangle = new Triangle(10, 2);
  const areaCalculatorWithOpenClosed = new AreaCalculator([
    square,
    circle,
    triangle,
  ]);
  console.log("O2_O principle: ", areaCalculatorWithOpenClosed.sum());

  const volumeCalculator = new VolumeCalculator([square, circle, triangle]);
  console.log("03_L principle: ", volumeCalculator.sum());

  const cuboid = new Cuboid(3);
  const principle_04_sample = new AreaCalculator([
    square,
    circle,
    triangle,
    cuboid,
  ]);
  console.log("04_I principle: ", principle_04_sample.sum());

  const mySqlDb = new MysqlDb();
  const postgresDb = new PostgresDb();
  console.log("05_D principle: ", mySqlDb.connect(), postgresDb.connect());
})();
