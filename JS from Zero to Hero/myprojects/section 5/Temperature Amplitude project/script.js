let temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

let tempFiltered = temperatures.filter(function (temperature) {
  if (temperature != "error") {
    //on filtre (supprime) la valeur "error" pour effectuer le calcul
    return temperature;
  }
});

console.log("Filtered temperatures array is " + tempFiltered);
console.log(
  "Temperature amplitude is " +
    (Math.max(...tempFiltered) - Math.min(...tempFiltered))
);
