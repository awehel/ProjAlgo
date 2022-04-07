const nums = [2, 4, 6, 8, 10]

//Reverse
const reverse = function (arr){

    for(var i = 0; i<Math.floor(arr.length/2); i++){
        var temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    
    return arr
}

var y = reverse(nums)
console.log(y)

Rotate


//Filter Range

const filter = function (arr, min, max){

    var count

    for(var i=0; i<arr.length; i++){
        if(arr[i] < min || arr[i] > max){
            for(var j = i+1; j<arr.length; j++){
                arr[j-1] = arr[j]
            }
            arr.length--
        }
    }
    

    return arr
}

var z = filter(nums, 4, 8)
console.log(z)

//Concat

const abc = ['a', 'b', 'c', 'd']

const concat = function(arr1, arr2){

    const newArr = []

    for(var i =0; i<arr1.length; i++){
        newArr.push(arr1[i])
    }

    for(var j=0; j<arr2.length; j++){
        newArr.push(arr2[j])
    }

    return newArr

}

var zz = concat(nums, abc)

console.log (zz)