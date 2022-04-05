const nums = [1, 2, 3, 4, 5]

const val = 9

const index = 2
//Push to Front
const pushToFront = function(arr, val){
    
    const newArr = []
    newArr.push(val)

    for (var i = 0; i<arr.length; i++){
        // console.log(arr[i])
        newArr[i+1] = arr[i]
    }
    arr = newArr
    return arr
}

console.log(pushToFront(nums, val))

//Pop Front
const popFront = function(arr){
    const newArr = []

    for(var i =1; i<arr.length; i++){
        newArr[i-1] = arr[i]
    }

    arr = newArr
    return arr
}

console.log(popFront(nums))

//Insert at

const insertAt = function(arr, index, val){
    const newArr = []

    for (var i =0; i<index; i++){
        newArr[i] = arr[i] 
    }
    newArr.push(val)

    for(var i=index; i<arr.length; i++){
        newArr.push(arr[i])
    }

    arr = newArr
    return arr
}

console.log(insertAt(nums, index, val))

//Remove at


