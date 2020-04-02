/*let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);*/
let num = 0;

if (num < 49) {
	console.log('неверно!')
} else if (num > 100) {
	console.log('много!')
} else  {
	console.log('верно!')
};

(num == 100) ? console.log('верно!') :  console.log('неверно!');

switch (num) {
	case num < 49:
	 	console.log('неверно');
	 	break;
	case num > 100:
		console.log('много!');
		break;
	case num > 80:
		console.log('Еще многовато!');
		break;
	case   50:
		console.log('верно!');
		break;
	default :
		console.log('Что то пошло не так!');
		break;
}