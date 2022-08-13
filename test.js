function input(){
    let first = prompt('Введите первое число', );
    let second = prompt('Введите второе число', );
    let operand = prompt('Введите математической действие между числами', );
    return calculate(first, second, operand);
}
function calculate(first, second, operand) {
    // alert(first, second, operand);
    // alert(typeof(operand));
    // alert(typeof(+second));
    if (operand == "-") return +first - +second;
    else if (operand == '+') return +first + +second;
    else if (operand == "*") return +first * +second;
    return "Не корректно введенные данные";
}
let result = input();
alert(result);


