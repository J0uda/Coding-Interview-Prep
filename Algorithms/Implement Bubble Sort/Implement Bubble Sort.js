function bubbleSort(array) {
    var temp;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j-1] > array[j]) {
                temp = array[j-1]
                array[j-1] = array[j]
                array[j] = temp
            }
        } 
    }
    console.log(array)
    return array;
  }