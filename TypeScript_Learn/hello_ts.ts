/* 
const hello: string = 'hello world!'
console.log(hello)

class Site {
    name(): void {
        console.log('hello')
    }
}
var obj = new Site();
obj.name()

let arr: number[] = [1, 2];
let x: [string, number];
x = ['hello', 1];

var uname: string = 'Runoob';
var uname: string;
var uname = 'Runoob';

var global_num = 2; //全局变量
class Numbers {
    num_val = 13; //实例变量
    static sval = 10; //静态变量

    storeNum(): void {
        var local_num = 14; //局部变量
    }
}

function greet(): string {
    return 'hello world'
}

function add(x: number, y: number): number {
    return x + y
}
add(1, 2);

class Car {
    engine: string;
    constructor(engine: string) {
        this.engine = engine;
    };
    disp(): void {
        console.log("发动机为：" + this.engine)
    }
}

*/

let isDone: boolean = false;
class Person {
    name: string; // 属性
    constructor(n: string) { // 构造函数 实例化类的时候触发的方法
        this.name = n
    };
    run(): void {
        alert(this.name)
    };

    getName(): string {
        return this.name
    };

    setName(name: string): void {
        this.name = name;
    }
}

var a = new Person('zhangsan');
a.run();
a.getName();
a.setName('lisi');

