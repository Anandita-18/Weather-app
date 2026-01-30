let searchQuery = " Learn JavaScript Functions Arrow IIFE ";



let cleanedQuery = searchQuery.trim();
console.log("Cleaned String:", cleanedQuery);
console.log("Length:", cleanedQuery.length);

console.log("Lowercase:", cleanedQuery.toLowerCase());
console.log("Uppercase:", cleanedQuery.toUpperCase());

let jsStart = cleanedQuery.indexOf("JavaScript");
let jsWord = cleanedQuery.substring(jsStart,jsStart+10)
console.log(jsWord);

let lowerQuery = cleanedQuery.toLowerCase();
console.log( lowerQuery.includes("functions"));
console.log( lowerQuery.includes("arrow"));
console.log( lowerQuery.includes("iife"));

let a = cleanedQuery.charAt(6);
let value = cleanedQuery.charCodeAt(0);
console.log(a);
console.log(value);


