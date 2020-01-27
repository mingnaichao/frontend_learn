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
    public name: string; // 公有属性
    constructor(name: string) { // 构造函数 实例化类的时候触发的方法
        this.name = name;
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

class Web extends Person {
    public age: number;
    constructor(name: string, age: number) {
        super(name);  // 初始化父类的构造函数
        this.age = age;
    };

    run(): void {
        alert(`$(this.name)在活动`)
    };

    work(): void {
        alert(`$(this.name)在工作`)
    };
    static print(): void { //静态方法
        alert('haha')
    }
}
var b = new Web('lisi', 66)
Web.print() //调用静态方法

/*
三种修饰符
public公有 在类里面、子类、类外面都可访问
protected 保护类 在类里面、子类可以访问，在类外部没法访问
private 私有 在类里面可以访问，子类、类外部无法访问

属性不加修饰符默认公有
*/
/*
static 定义静态属性、方法
*/

// 接口
interface FullName {
    firstName: string;
    secondName?: string;
}

function printName(name: FullName): void {
    console.log(name.firstName + name.secondName);
}

printName({ firstName: '1', secondName: '2' });

// 泛型
function getData<T>(value: T): T {
    return value
}

getData<number>(111)
getData<string>('111')

// 泛型接口
interface config {
    <T>(key: T, value: T): T
}

var getData2: config = function <T>(key: T, value: T): T {
    return key
}

getData2<string>('111', '222')

interface config2<T> {
    (value: T): T
}

function getData3<T>(value: T): T {
    return value
}

let myGetData: config2<string> = getData3;