'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal{

    say(){
       return 'Hello, ' + this.name + '!';
    }
}


// 测试:
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');


// console.log(kitty.say());
// console.log(kitty.say() === 'Hello, Kitty!');


if ((new Cat('x') instanceof Animal)
    && kitty 
    && kitty.name === 'Kitty'
    && kitty.say
    && typeof kitty.say === 'function'
    && kitty.say() === 'Hello, Kitty!'
    && kitty.say === doraemon.say)
{
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}

