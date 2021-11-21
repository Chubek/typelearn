import { Matrix } from "mathjs";

type Objective = (X: Matrix | Array<Array<Number>>, W: Matrix | Array<Array<Number>>, W0: number) => Matrix | Array<Array<number>>
type Gradient = (W: Matrix | Array<Array<Number>>, multiplier: number, X?: Matrix | Array<Array<Number>>) => Matrix | Array<Array<number>>
type LossCost = (y: Matrix | Array<Array<Number>>, yHat: Matrix | Array<Array<Number>>, n: number) => number | Array<number>