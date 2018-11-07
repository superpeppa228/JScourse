/*
//задание1. Почему код даёт именно такие результаты?
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 - т.к. префиксный инкремент, после него a приобретет значение 2
d = b++; alert(d); // 1 - т.к. постфиксный инкремент, после него выводится старое значение b, т.е.1
c = (2+ ++a); alert(c); // 5 -т.к. ++a приняло значение 3, т.к.a=2
d = (2+ b++); alert(d); // 4 - т.к. b=2
alert(a); // 3 -т.к. a приняло значение 3 после префиксного инкремента (за весь код переменная увеличилась на 2)
alert(b); // 3 - т.к. b было 2, а после постфиксного инкремента стало 3 (за весь код переменная увеличилась на 2)
*/

/*
//задание2.Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); // 5 , т.к. a*2=4, 4+1=5
*/

/*
//задание3//
let a=-8;
let b=-2;
if (a>=0 && b>=0){
	alert (a - b);
}else if (a<0 && b<0){
	alert (a * b);
}else{
	alert (a + b);
}
*/

/*
//Задание5. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
var a=prompt(' Введите число от 1 до 15: ');
switch (a) {
		case "0":
			alert (a++);
		case "1":
			alert (a++);
		case "2":
			alert (a++);
		case "3":
			alert (a++);
		case "4":
			alert (a++);
		case "5":
			alert (a++);
		case "6":
			alert (a++);
		case "7":
			alert (a++);
		case "8":
			alert (a++);
		case "9":
			alert (a++);
		case "10":
			alert (a++);
		case "11":
			alert (a++);
		case "12":
			alert (a++);
		case "13":
			alert (a++);
		case "14":
			alert (a++);
		case "15":
			alert (a);
			break;
		default:
			alert ('Неверное значение');
			break;
		}
*/
//Задание5
/*
function sum (a,b) {
	let result=a+b;
	return result;
}
	let result=sum(4,2);
	alert(result);
*/
/*
function sub (a,b) {
	let result=a-b;
	return result;
}
	let result=sub(4,2);
	alert(result);
*/
/*
function mul (a,b) {
	let result=a*b;
	return result;
}
	let result=mul(4,2);
	alert(result);
*/
/*
function div (a,b) {
	let result=a/b;
	return result;
}
	let result=div(4,2);
	alert(result);
*/



