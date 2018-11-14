
function getObj (num){
	let obj;
	obj = {};
	if ( num < 0 || num > 999){
		console.log ("Введите число от 0 до 999");
		return obj;
	}
	else{
		obj['единицы'] = num % 10;
		obj['десятки'] = (num - obj['единицы']) % 100/10;
		obj['сотни'] = (num - obj['единицы'] -obj['десятки']*10) % 1000/100;
		return obj;
}
console.log(getObj(123)); 
