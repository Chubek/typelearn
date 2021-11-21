import { add, dotMultiply, Matrix, number } from "mathjs";
import { Objective } from "..";

export const linearObjective: Objective = (X: Matrix | number[][], W: Matrix | number[][], W0: number): Matrix | number[] => {
    return add(dotMultiply(X as any,W as any) as any, W0) as Matrix | number[]
}