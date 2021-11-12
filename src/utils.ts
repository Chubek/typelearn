import { matrix, Matrix, randomInt, range, subset } from "mathjs";
import math = require("mathjs");

export const shuffle = (X: Matrix): Matrix => {
    let newMatrix: Array<Array<number>> = [];
    let alreadyAdded: Array<number> = [];
    const numRows = X.size()[0];

    let indRange = range(0, numRows);

    indRange.forEach(function (_value, index, _matrix) {
        let randValue = randomInt(0, numRows);

        while (alreadyAdded.includes(randValue)) {
            randValue = randomInt(0, numRows);
        }

        let subSet = subset(X, math.index(1));
        
        let sub:Array<number> = [];

        subSet.forEach((value, _index, _matrix) => {
            sub.push(value);
        })

        newMatrix.push(sub);
        alreadyAdded.push(randValue);
    }) 

    return matrix(newMatrix)
}