import {dotMultiply, Matrix, matrix, randomInt, range, subset, index } from "mathjs";
import { shuffle } from "./utils";

class SGD {
    X: Matrix
    y: Array<number>
    lr: number
    batchSize: number
    objective: any
    cost: any
    gradient: any
    subSetX: Matrix
    subsetY: Array<number>

    constructor(X: Matrix, y: Array<number>, lr: number, objective: any, batchSize: any, cost: any, gradient: any) {
        this.X = X;
        this.y = y;
        this.lr = lr;
        this.objective = objective;
        this.batchSize = batchSize;
        this.cost = cost;
        this.gradient = gradient;
    }

    selectSubSet() {
        [this.X, this.y] = shuffle(this.X, this.y);

        const numRows = this.X.size()[0];
        const numCols = this.X.size()[1];

        const randValue = randomInt(0, numRows - this.batchSize);

        this.subSetX = subset(this.X, index(range(randValue, randValue + this.batchSize), range(0, numCols)));
        this.subsetY = this.y.slice(randValue, randValue + this.batchSize)

    }


}