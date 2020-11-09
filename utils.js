// const reader = require('./readline-sync');







//Problem 1**********************************************/

function matrixProduct(mat1, mat2){
    let result = [];
    for(let i = 0; i < mat1.length; i++){
        result[i] = [];
        for(let j = 0; j < mat2.length; j++){
            let sum = 0;
            for(let k = 0; k < mat1.length; k++){
                sum += mat1[i][k] * mat2[k][j];
            }
            result[i][j] = sum;
        }
    }
    for(let index = 0; index < result.length ; index++){
        console.log(`[${result[index]}]` + "\n");
    }
}

//******************************************************/


//Problem 2*********************************************/
function sumOfMatrices(mat1,mat2){
    let newMatrix = [];
    for(let i = 0; i < mat1.length; i++){
        newMatrix[i] = [];
        newMatrix.push([]);
        for(let j = 0; j < mat1[i].length; j++){
            newMatrix[i][j] = mat1[i][j] + mat2[i][j];
        }
        console.log(newMatrix[i]);
    }

}

//*******************************************************/


// Problem 3 ********************************************


function sumOfEachRow(matrix){
    let arr = [];
    let sum = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){  
            sum += matrix[i][j]
        }
        arr.push(sum);
        sum = 0;
    }
    console.log(arr);
}


//****************************************************/
module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow
}