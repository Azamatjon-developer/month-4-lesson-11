// 17 task || 1 task 


// let mergeTwoLists = function (list1, list2) {

//     const result = [...list1, ...list2]

//     result.sort((a,b) => a - b)


//     return result 

    
// }

// let list1 = [1,2,4]
// let list2 = [1,3,4]

// console.log(mergeTwoLists(list1, list2));


// 18 task || 2 task 


// let arr = [1,2,3,4,3,1,2,3,2,1,2]

// const result = arr.filter((item, index) => arr.indexOf(item) !== index) ;



// console.log(result);




// 19 task || 3 task 


// function reverseNUm (x) {
//     let arr = Array.from(String(x),Number).reverse()    
    
//     let num = Number(arr.join(""))

//     console.log(num);

// }

// reverseNUm (123)



// 20 task || 4 task 

let arr = [1,2,3,4,5] 
function findMiddleNumber (param) {

    let length = arr.length


    if (length % 2 == 0) {

        const middleIndex = length / 2 
        return (array[middleIndex - 1] + array[middleIndex]) / 2

       

    }

}

findMiddleNumber(arr)

