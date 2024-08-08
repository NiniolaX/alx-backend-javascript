import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi0', 'bonaparte', 'bonappetit', 'banana']), 'bon')); // non-empty string
console.log(cleanSet(new Set(['bonjovi1', 'bonaparte', 'bonappetit', 'banana']), '')); // empty string
console.log(cleanSet(new Set(['id-test', 'id-chicken', 'id-user', , 'id-id-']), 'id-')); // non-empty string
console.log(cleanSet(new Set(['bonjovi2', 'bonaparte', 'bonappetit', 'banana']))); // empty string
console.log(cleanSet(new Set(['bonjovi3', 'bonaparte', 'bonappetit', 'banana']), [])); // empty string
