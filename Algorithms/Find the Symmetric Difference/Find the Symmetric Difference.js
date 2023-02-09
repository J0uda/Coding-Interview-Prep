function sym() {
    var args = [...arguments]
     
    function diff(arrayOne, arrayTwo) {
        var result = []
        arrayOne.forEach(item => {
          if ((arrayTwo.indexOf(item) < 0) && result.indexOf(item) < 0)   result.push(item)
        })
    
        arrayTwo.forEach(item => {
          if ((arrayOne.indexOf(item)) < 0 && (result.indexOf(item) < 0)) result.push(item)
        })
        return result
      }
      return args.reduce(diff)
    }

sym([1, 2, 3], [5, 2, 1, 4]);