import {
    dotMultiply,
    Matrix,
    matrix,
    randomInt,
    range,
    subset,
    subtract,
    index,
    abs,
    number,
    sum,
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
        W: Matrix | number[][]
        momentum: number
    lr: number
    batchSize: number
    objective: Objective
    cost: LossCost
    gradient: Gradient
    subSetX: Matrix
    subsetY: number[]
        maxIter: number
    thresh: number
    gradMult: number
    W0: number

    constructor(X: Matrix, y: number[] , lr: number, objective: Objective,
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
        let diff = 0;
        let w0 = 0.0001;


        while (i < this.maxIter && diff > this.thresh) {
            this.selectSubSet();

            const yHat = this.objective(this.X, this.W, w0);
            const loss = this.cost(this.subsetY, yHat);

            const grad = this.gradient(this.X, loss);

            const newWeights = this.W as any - multiply(this.gradient as any, this.lr) as any;

            diff = sum(subtract(this.W as any, newWeights as any));
            i += 1;

            this.W = newWeights;


        }

        this.W0 = w0;
    }



}