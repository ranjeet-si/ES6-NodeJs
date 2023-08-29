const fs = require("node:fs");
let fileContent = JSON.parse( fs.readFileSync("herolist.json", "utf-8"));

let heronames = ["Ironman", "Thor"]
let herocities = ["Pune", "Mumbai"]

let count =0;


let si = setInterval(function(){
    let hero = {
        title : heronames[Math.ceil(Math.random()* heronames.length-1)],
        power: Math.round(Math.random()* 10),
        city : herocities[Math.ceil(Math.random()* herocities.length-1)]
    }
    if(count <=100){
        fileContent.heroeslist.push(hero);
        fs.writeFile("herolist.json", JSON.stringify(fileContent), "utf-8",function(){
            count++;
            console.log("hero added")
        })
    }
    else{
        clearInterval(si)
    }
});

// fs.appendFile("temp.txt", "New Hero is Created \n",{
//     encoding : "utf-8"
// },function(e){
//     if(e){
//         console.log("Error",e)
//     }
//     else{
//         console.log("File updated")
//     }
//   },1000 )