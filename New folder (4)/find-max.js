console.log("-------FIND MAX------");

function isLetter(char) {
	return char.length === 1 && char.match(/[a-z]/i);
}

function findMax(list) {
	let max=[0];
	for(let i=0;i<list.length;i++){
	if(Number(list[i])){
		list[i]=list[i];
	}
	else list[i]=list[i].length;
	let num=+list[i];
	if(num>max){
		max=num;
	}

}
return max;
}


console.log(findMax(["alic","bob","3","4","00000"])===5);
console.log(findMax(["bobur", "22", "15", "arslonbek good boy"])===22);
console.log(findMax(["pdp", "pdp22", "14"]) === 14);
console.log(findMax(["03", "02", "pdp8"]) === 4);
console.log(findMax(["abc", "cccc", "6"]) === 6);
console.log(findMax(["abc", "bbb", "cccc"]) === 4);
console.log(findMax(["0000", "01", "10"]) === 10);

