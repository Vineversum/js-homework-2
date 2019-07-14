var userObj = {
    firstName: 'Vasiliy',
    lastName: 'Ivanov',
    age: 25,
    fullName: function(){
        return(this.firstName + ' ' + this.lastName);
    }
};

function defUpperStr(text) {
    try {
        text = text.toUpperCase();
    }
    catch {};
    return (text) || ('DEFAULT TEXT');
}

function evenFn(n) {
    var arr = [];
    for(var i = 2, j = 0; i <= n; i+=2){
        arr[j++] = i;
    }
    return arr;
}

function weekFn(n) {
    var day;
    switch(n) {
        case 1: day = 'Понедельник'; break;
        case 2: day = 'Вторник'; break;
        case 3: day = 'Среда'; break;
        case 4: day = 'Четверг'; break;
        case 5: day = 'Пятница'; break;
        case 6: day = 'Суббота'; break;
        case 7: day = 'Воскресенье'; break;
        default: day = null;
    }
    return day;
}

console.log(weekFn(2));


function ageClassification(n) {
    var age;
    n < 0 ? age = null : n >= 0 && n <= 24 ? age = 'детский возраст' : n > 24 && n <= 44 ?  age = 'молодой возраст' : n > 44 && n <= 65 ? age = 'средний возраст' : n > 65 && n <= 75 ? age = 'пожилой возраст' : n > 75 && n <= 90 ? age = 'старческий возраст' : n > 90 && n <= 122 ? age = 'долгожители' :  age = null;
    return age;
}

function oddFn(n) {
    var i = 1, j = 0, arr = [];
    while(i <= n){
        arr[j++] = i;
        i += 2;
    }
    return arr;
}


function mainFunc(a, b, f) {
    if (typeof(f) === "function")
        return f(a, b);
        else return false;
}

function cbRandom(a, b){
    return Math.round(a + (b - a) * Math.random());
}
function cbPow(a, b){
    return Math.pow(a, b);
}
function cbAdd(a, b){
    return a + b;
}

