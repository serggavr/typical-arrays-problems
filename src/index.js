
exports.min = function min (array) {
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  let x;
  for (let i = 0; i < array.length; i++) {
    x += array[i]
  }
  return (x / array.length);
}
