const fs = require('fs');

const fileName = "Data.json";



function Cost(index,_id,cost,detailsOfPayent){
        this.index = index;
        this._id = _id;
        this.cost = Number(cost),
        this.detailsOfPayent = detailsOfPayent;
      }
function detailsOfPayent(Type,company,date){
        this.Type=Type;
        this.company=company;
        this.date = date;
}

const getJSONData = (fileName)=>{
        return fs.readFileSync(fileName);
}

const originalData = JSON.parse(getJSONData(fileName));

//c. Map data from function a to structure from b.

const mainArr = originalData.map((cost)=>new Cost(cost.index,cost._id,cost.cost,cost.detailsOfPayent));



// /i. How much money was spend in 2014

const cost2014 = mainArr.filter((cost)=>{
        let year = 2014;
        if(year === new Date(cost.detailsOfPayent.date).getFullYear()){
                return cost;
        }
});


 const howMuchMoanySpend = cost2014.reduce((prev,next)=>prev+next.cost,0);

console.log("How much many was spend in 2014: ",howMuchMoanySpend.toFixed(2));

//ii. What company was earning how much

let companies = [];

mainArr.forEach(cost=>{
        if(!(companies.indexOf(cost.detailsOfPayent.company) >-1)){
                companies.push(cost.detailsOfPayent.company);
        }
});
console.log(companies);

companies.forEach(company=>{
        let howMuchManyCompSpend =0;
        mainArr.forEach(cost=>{
                if(cost.detailsOfPayent.company == company){
                        howMuchManyCompSpend+=cost.cost;
                }
        });
        console.log(company+" was earning: "+howMuchManyCompSpend.toFixed(2));
});


//iii. What type on transaction was having what spending’s.

let transactions = [];

mainArr.forEach(cost=>{
        if(!(transactions.indexOf(cost.detailsOfPayent.Type) >-1)){
                transactions.push(cost.detailsOfPayent.Type);
        }
});

console.log(transactions.sort());

transactions.forEach(transaction=>{
        let howMuchManyWasEarning =0;
        mainArr.forEach(cost=>{
                if(cost.detailsOfPayent.Type === transaction ){
                        howMuchManyWasEarning+=cost.cost;
                }
        });

        console.log("Type of transaction:"+transaction+" was earning: "+howMuchManyWasEarning.toFixed(2));
});

//iv. Values of the spending in each month

mainArr.forEach(cost=>{
        let time = cost.detailsOfPayent.date.split('-');
        let correctTime = [];
        correctTime.push(time[1]);
        correctTime.push(time[0]);
        correctTime.push(time[2]);
        cost.detailsOfPayent.date = correctTime.join('-');
})


console.log(mainArr);
//console.log(mainArrDate[0].detailsOfPayent.date);