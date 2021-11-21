import { Matrix } from "mathjs";

type Objective = (X: Matrix | number[][], W: Matrix | number[][], W0: number) => number[]
type Gradient = (X: Matrix | number[][], error: number | number[]) => Matrix | Array<Array<number>>
type LossCost = (y: number[], yHat: number[]) => number | number[]