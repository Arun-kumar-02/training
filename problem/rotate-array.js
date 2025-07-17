const matrix = [[1,2,3],[4,5,6],[7,8,9]];

const len = matrix.length;

// for(let i=0; i<len; i++)
// {
//     let row = "";
//     for(let j=len-1; j>=0; j--)
//     {
//         row+= matrix[j][i] + " ";
//     }
//     console.log(row);
    
// }

let result = [];
for(let i=0; i<len; i++)
    {
        let arr = [];
        for(let j=len-1; j>=0; j--)
        {
            arr += matrix[j][i];
        }
        result[i] = arr.spl;
    }

console.log(result);
