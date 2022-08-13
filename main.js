function calc(operator, a, b) {
    switch(operator) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multi':
            return a * b;
    }
}

calc('add', 1, 2); // 3
calc('subtract', 1, 2); // -1
calc('multi', 1, 2); // 2