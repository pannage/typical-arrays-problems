
exports.min = function min (array) {
  if (array != undefined && array.length >0) {
    return Math.min.apply(null, array);
  } else {
    return 0
  }

}

exports.max = function max (array) {
  if (array != undefined && array.length >0) {
    return Math.max.apply(null, array);
  } else {
    return 0
  }
}

exports.avg = function avg (array) {
  if (array != undefined && array.length >0) {
    let sum = 0;
    for (let i=0; i<array.length; i++) {
      sum = sum + array[i]
    }
    let avg = sum/array.length
    return avg
    } else {
      return 0
  }
}
