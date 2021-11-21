import { matrix, Matrix, randomInt, range, subset } from "mathjs";
import math = require("mathjs");

export const shuffle = (X: Matrix, y: Array<number>): [Matrix, Array<number>] => {
    let newMatrixX: Array<Array<number>>
    let newMatrixY: Array<number>
    let alreadyAdded: Array<number> = [];
    const numRows = X.size()[0];
    const numCols = X.size()[1];
    let indRange = range(0, numRows);

    indRange.forEach(function (_value, index, _matrix) {
        let randValue = randomInt(0, numRows);

        while (alreadyAdded.includes(randValue)) {
            randValue = randomInt(0, numRows);
        }

        let subSetX = subset(X, math.index(randValue, range(0, numCols)));
        let subsetY = y[randValue];
        
        let subX:Array<number> = [];

        subSetX.forEach((value, _index, _matrix) => {
            subX.push(value);
        })

        newMatrixX.push(subX);
        newMatrixY.push(subsetY);
        alreadyAdded.push(randValue);
    }) 

    return [matrix(newMatrixX), newMatrixY]
}

export const randomMatrix = (shape: Array<number> | number): Matrix | number[][] => {
    let newMatrix = math.ones(shape);

    newMatrix.forEach((_value: any, index: any, _matrix: any) => {
        newMatrix = math.subset(newMatrix, math.index(index), math.random(0, 1));
    })
    

    return newMatrix as Matrix | number[][]

}