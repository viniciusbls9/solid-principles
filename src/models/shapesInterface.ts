import Square from '../01_S/Square/square'
import Circle from '../01_S/Circle/circle';
import Triangle from '../02_O/triangle/triangle';
import Cuboid from '../04_I/cuboid';

export interface ShapesInterface {
  [index:number]: Square|Circle|Triangle|Cuboid;
}
