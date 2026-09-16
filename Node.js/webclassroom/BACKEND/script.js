/*let n = 5;
for(let i=0;i<n;i++){
    console.log("hello,",i);
}

console.log("bye!");
*/
let args = process.argv;

for(let i=2;i<args.length;i++){
    console.log("hello & welcome  ",args[i]);
}
/*
const math = require("./math");
console.log(math.sum(2,3));
console.log(math.PI);

const info = require("./Friuts");

console.log(info);

figlet("shradha",function (err,data){
    if(err){
        console.log("Something went wrong");    
    console.dir(err);
    return;
    }
    console.log(data);
});
import {sum,PI} from "./math.js";
import {generate } from "random-words";
//console.log(sum(1,2));
console.log(generate());*/