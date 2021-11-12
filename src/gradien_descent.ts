import {cos, dotMultiply, Matrix, matrix} from "mathjs"


class SGD {
    X: Matrix
    y: Matrix
    lr: number
    batchSize: number
    objective: any
    cost: any
    gradient: any

    constructor(X: Matrix, y: Matrix, lr: number, objective: any, batchSize: any, cost: any, gradient: any) {
        this.X = X;
        this.y = y;
        this.lr = lr;
        this.objective = objective;
        this.batchSize = batchSize;
        this.cost = cost;
        this.gradient = gradient
    }
}