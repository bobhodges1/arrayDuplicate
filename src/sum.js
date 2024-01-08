function duplicate2(arr) {
    let finalArray =[];
    for (let i=0; i<arr.length; i++){
        finalArray.push(arr[i]);
        finalArray.push(arr[i])
    }

    return finalArray;
}

export {duplicate2}