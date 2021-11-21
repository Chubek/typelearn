import {
    dotMultiply,
    Matrix,
    matrix,
    randomInt,
    range,
    subset,
    index,
    number,
    multiply
} from "mathjs";
import math = require("mathjs");
import {
    Gradient,
    LossCost,
    Objective
} from "..";
import {
    shuffle,
    randomMatrix
} from "./utils";

class SGD {
    X: Matrix
    y: Array < number >
        W: Matrix | Array<Array<number>>
    momentum: number
    lr: number
    batchSize: number
    objective: Objective
    cost: LossCost
    gradient: Gradient
    subSetX: Matrix
    subsetY: Array < number >
        maxIter: number
    thresh: number
    gradMult: number

    constructor(X: Matrix, y: Array < number > , lr: number, objective: Objective, 
         batchSize: number, cost: LossCost, gradient: Gradient,
         momentum: number, maxIter: number, thresh: number, gradMult: number) {
        this.X = X;
        this.y = y;
        this.lr = lr;
        this.objective = objective;
        this.batchSize = batchSize;
        this.cost = cost;
        this.gradient = gradient;
        this.momentum = momentum;
        this.maxIter = maxIter;
        this.thresh = thresh;
        this.gradMult = gradMult
    }

    initiateWeights() {
        const numRows = this.X.size()[1]
        const numCols = this.X.size()[0]

        this.W = randomMatrix([numRows, numCols])
    }

    selectSubSet() {
        [this.X, this.y] = shuffle(this.X, this.y);

        const numRows = this.X.size()[0];
        const numCols = this.X.size()[1];

        const randValue = randomInt(0, numRows - this.batchSize);

        this.subSetX = subset(this.X, index(range(randValue, randValue + this.batchSize), range(0, numCols)));
        this.subsetY = this.y.slice(randValue, randValue + this.batchSize)

    }

    descent() {
        this.initiateWeights();

        let i = 0;
        let diff = 0.000001;
        let w0 = 0.0001;
        let wHistory: Array<Matrix | number[][] > = [];
        let fHistory: Array<Matrix | number[][] > = []; 

        while (i < this.maxIter &&  diff > this.thresh) {
            this.selectSubSet();

            this.W = multiply(this.gradient(this.W, this.gradMult), this.lr) as any  - multiply(this.W as any, this.momentum as any) as any
            wHistory.push(this.W);

            const y = this.objective(this.subSetX, this.W, w0);
            fHistory.push(y);

        }
    }



}