var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {
  var output =  {};
  for(var i = 0; i < salesData.length; i++){
    var salesObject = salesData[i];
    if (!output.hasOwnProperty(salesObject.name)){
      output[salesObject.name] = {totalSales: 0, totalTaxes: 0};
    }
// set total sales and total taxes to appropriate numbers
// what are those numbers based on?
    var sumOfSales = salesObject.sales.reduce(function(accumulator, currentValue){
      return accumulator + currentValue;
    });
    output[salesObject.name].totalSales += sumOfSales;
// didn't need a for loop
    var sumOfTaxes = sumOfSales * taxRates[salesObject.province];
    output[salesObject.name].totalTaxes += sumOfTaxes;
  }
  return output;
}



var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/