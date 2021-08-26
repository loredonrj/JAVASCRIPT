//Number to String: String()
let val;
val = String(true);
console.log(
  "val value is " + val,
  ", its type is " + typeof val,
  ", its length is " + val.length
);

//toString() method
val = 555;
val = val.toString();
console.log(
  "val value is " + val,
  ", type is " + typeof val,
  ", length is " + val.length
);

//Number(): String to Number
val = "555";
val = Number(val).toFixed(2); //toFixed(numOfDecimals) : specify num of decimals, if blank => no decimals

console.log(
  "val value is " + val,
  ", type is " + typeof val,
  ", length is " + val.length
);

val = Number(true);
console.log(
  "val value is " + val,
  ", type is " + typeof val,
  ", length is " + val.length
);

val = Number(false);
console.log(
  "val value is " + val,
  ", type is " + typeof val,
  ", length is " + val.length
);

val = Number(null);
console.log(
  "val value is " + val,
  ", type is " + typeof val,
  ", length is " + val.length
);

val = Number("hello");
console.log(
  "val value is " + val,
  ", type is " + typeof val,
  ", length is " + val.length
);

val = parseInt("125");
console.log(
  "val value is " + val,
  ", type is " + typeof val,
  ", length is " + val.length
);

val = parseInt("125.30"); // !Still returns 125 with no decimals => use parseFloat
console.log(
  "val value is " + val,
  ", type is " + typeof val,
  ", length is " + val.length
);

val = parseFloat("125.30").toFixed(2);
console.log(
  "val value is " + val,
  ", type is " + typeof val,
  ", length is " + val.length
);
