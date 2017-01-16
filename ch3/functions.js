powerOf = function (base, exponent) {
  if (exponent === undefined) {
    exponent = 2;
  }
  let result = 1;
  for (let counter = 0; counter < exponent; counter += 1) {
    result *= base;
  }
  return result;
};

// demostration of var key word versus let
// old way:

calculateMonthlyPayment = function (principal, years, rate) {
  if (rate) {
    var monthlyRate = rate / 100 / 12;
  }
  var monthlyPayment = principal * monthlyRate /
                       (1 - (Math.pow(1/(1 + monthlyRate), years * 12)));
  return monthlyPayment;
};

// // ES6 way
calculateMonthlyPayment = function (principal, years, rate) {
  let monthlyRate = 0;
  if (rate) {
    monthlyRate = rate / 100 / 12;
  }
  let monthlyPayment = principal * monthlyRate /
                       (1 - (Math.pow(1/(1 + monthlyRate), years * 12)));
  return monthlyPayment;
};

landscape = function () {
  let result = '';
  let flat = function (size) {
    for (let count = 0; count < size; count += 1) {
      result += '_';
    }
  };
  let mountain = function(size) {
    result += '/';
    for (let count = 0; count < size; count += 1) {
      result += "'";
    }
    result += '\\';
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape())
