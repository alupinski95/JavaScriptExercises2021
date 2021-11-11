const fs = require('fs');
const moment = require('moment');
const data = fs.readFileSync('./Homework_4/data.json');

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

    let moneySPentInYear = moneySpentInFromArary(2014,payments);
    console.log(moneySPentInYear);

}

let moneySpentInFromArary = function(year,array){
    let moneySpent = 0;
    
    array.forEach(element =>{
        if(element.DetailsOfPayent.Date.year() == year) moneySpent+= element.Cost;
    });
    
    return moneySpent;
}

let sumOfEarnFOrCompanies = function(array){
    
}
main();