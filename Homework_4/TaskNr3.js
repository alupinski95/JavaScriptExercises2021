const fs = require('fs');
const moment = require('moment');
const data = fs.readFileSync('./Homework_4/data.json');

function Payments(paymantsData){
    this.data= paymantsData
}

Payments.prototype.moneySpentInFromArary = function(year){
    let moneySpent = 0;
    
    this.data.forEach(element =>{
        if(element.DetailsOfPayent.Date.year() == year) moneySpent+= element.Cost;
    });
    
    return moneySpent;
}

Payments.prototype.sumOfEarnFOrCompanies = function(){
    let sumArray =[];
    this.data.forEach(element =>{
        let company =element.DetailsOfPayent.Company;
        (sumArray[company])? sumArray[company] += element.Cost : sumArray[company] = element.Cost;
    });
    return sumArray;
}

Payments.prototype.sumOfSpentByType = function(){
    let sumArray =[];
    this.data.forEach(element =>{
        let type ="Type"+element.DetailsOfPayent.Type;
        (sumArray[type])? sumArray[type] += element.Cost : sumArray[type] = element.Cost;
    });
    return sumArray;
}


Payments.prototype.sumOfSpentByMonth = function(){
    let sumArray =[];
    this.data.forEach(element =>{
        let yearWithMonth =element.DetailsOfPayent.Date.month().toString() + "-" + element.DetailsOfPayent.Date.year().toString();
        (sumArray[yearWithMonth])? sumArray[yearWithMonth] += element.Cost : sumArray[yearWithMonth] = element.Cost;
    });
    return sumArray;
}
Payments.prototype.sumOfSpentByDay = function(){
    let sumArray =[];
    this.data.forEach(element =>{
        let dayOfTheWeek = element.DetailsOfPayent.Date.format('dddd');
        (sumArray[dayOfTheWeek])? sumArray[dayOfTheWeek] += element.Cost : sumArray[dayOfTheWeek] = element.Cost;
    });
    return sumArray;
}

function Payment(index,id,cost,detailsOfPayent){
    this.Index = index;
    this.Id=id;
    this.Cost = Number.parseFloat(cost);
    this.DetailsOfPayent = detailsOfPayent;
  }

function DetailsOfPayent(type,company,date){
    this.Type = type;
    this.Company = company;
    this.Date = moment(date,"DD-MM-YYYY");
}





function main(){
    let json = JSON.parse(data);

    let payments = json.map(element => {
        let detailsOfPayent = new DetailsOfPayent(element.detailsOfPayent.Type,
            element.detailsOfPayent.company,
            element.detailsOfPayent.date)
        return new Payment(element.index,element._id,element.cost,detailsOfPayent)
    });
    console.log(payments);
     
    let paymentsObject = new Payments(payments);// new Payments(payments);
    
    console.log("money spent in 2014: "  + paymentsObject.moneySpentInFromArary(2014));

    console.log("money spent by company:");
    console.log(paymentsObject.sumOfEarnFOrCompanies());
    console.log("money spent by type of transaction:");
    console.log(paymentsObject.sumOfSpentByType());
    console.log("Values of the spending in each month:" );
    console.log( paymentsObject.sumOfSpentByMonth());
    console.log("Values of the spending in each day of the week:" );
    console.log( paymentsObject.sumOfSpentByDay());
}

main();





