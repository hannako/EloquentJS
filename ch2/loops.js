// 1
var number = 0;
while (number < 10) {
  console.log(number);
  number += 2;
}

// 2
const number = 10;
if (number > 20)
  console.log('big');
else {
  console.log('small')
}

//3
const result = 1;
for (let counter = 0; counter < 10; counter += counter)
  result = result + 1;
  console.log('result', result);
  console.log('counter', counter);

//4
for (var current = 21; ;current++) {
  if (current % 10 === 0)
    break;
}
console.log(current);
