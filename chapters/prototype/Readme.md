# Object Oriented JavaScript

- - -

## Object Oriented JavaScript

### Constructor functions

Function can be used to instantiate objects,  
using the `new` operator.

```js
function Hero () {
  this.occupation = "Ninja";
}

var hero = new Hero();
hero.occupation; // "Ninja"
```

#### Convention
Capitalize the first letter of your constructor functions

- - - 

## Object Oriented JavaScript

### Constructor functions

#### `this` special value

In a constructor function (a function called via the `new` operator)  
`this` refers to the new object instatiated.

```js
function Cat (name) {
  this.name = name;
}

var felix = new Cat("Felix");
felix.name;      // "Felix"
```

In general, `this` is the context where the function is invoked,  
and corresponds to the object the function belongs to.

```js
var o = {
  f: function () {
    return this;
  }
};

obj.f();      // Object o
```

```js
var cat = {
  name: "Tom",
  greets: function () {
    return "Hi! I'm " + this.name + "!";
  }
};

cat.name;     // "Tom"
cat.greets(); // "Hi! I'm Tom!"
```

```js
function f() {
  return this;
}

f();          // Object window
```

- - -

## Object Oriented JavaScript

### Constructor functions

#### Warning

Calling a function that is designed to be a constructor but  
omitting the `new` operator may result in a behaviour you could not expect.

```js
function Hero (name) {
  this.name = name;
  this.occupation = "Ninja";
}

// invoking Hero without new
var h = Hero("Leonardo");
typeof h;          // "undefifined"
h.name;            // TypeError: Cannot read property "name" of undefined

window.name;       // "Leonardo"
window.occupation; // "Ninja"
```

- - -

## Object Oriented JavaScript

### `constructor` property

Every object has a special property called `constructor`  
that refers to constructor function.

```js
function Cat (name) { 
  this.name = name; 
}

var c1 = new Cat("Felix");
c1.constructor; // function Cat(name) { ... }

var c2 = new c1.constructor("Tom");
c2.name;        // "Tom"
```

If an object is created via the object literal notation  
its constructor is the built-in `Object` function.

```js
var o = {};
o.constructor; // funciton Object () { [native code] };
```

- - -

## Object Oriented JavaScript

### `instanceof` operator

`instanceof` operator tests if an object is created by a constructor function.

```js
function Hero () {}

var h = new Hero();
var o = {};

h instanceof Hero;   //true
h instanceof Object; //true
o instanceof Object; //true
o instanceof Hero;   //false
```

- - -

## Object Oriented JavaScript

### Prototype

Every function has a special property called `prototype`

`prototype` is an object shared by every object instantiated by the function

`prototype` is initially an empty object

```js
function Circle (r) { 
  this.r = r; 
}

Circle.prototype; // {}
```

- - -

## Object Oriented JavaScript

### Prototype

#### Augmenting the `prototype` object

`prototype` object can be augmented with properties and methods  

```js
function Circle (r) {
  this.r = r;
}
```

```js
Circle.prototype.name = "circle";
Circle.prototype.area = function () {
  return Math.PI * this.r * this.r;
};
```

Properties and methods added to the `prototype` of a function  
are available to every object instantiated by that function

```js
var c1 = new Circle(4);
c1.r;       //4
c1.name;    // "circle"
c1.area();  //50.26548245743669

var c2 = new Circle(2);
c2.r;       //2
c2.name;    //"circle"
c2.area();  //12.566370614359172
```

- - -

## Object Oriented JavaScript

### Prototype

#### Augmenting the `prototype` object

Objects are passed by reference:  
the prototype is not copied with every new object instance  

```js
Circle.prototype.circumference = function () {
  return 2 * Math.PI * this.r;
};

c2.circumference();   //25.132741228718345
```

- - -

## Object Oriented JavaScript

### The prototype chain

#### Accessing a property of an object

When accessing a property `p` of an object `o` JavaScript:

1. looks for `p` in the properties of `o`
2. if it finds `p` then returns its value
3. else it looks in the prototype of `o`
4. if it finds `p` then it returns its value
5. else it looks in the prototype of the prototype of `o`
6. ...

- - -

## Object Oriented JavaScript

### The prototype chain

#### Accessing a property of an object

```js
c.r;    //4 - found in the properties of c
c.name; //"circle" - found in the prototype of c
```

- - -

## Object Oriented JavaScript

### The prototype chain

Every object `o` has a `constructor` property:  
the function which creates the object `o`

Every function `f` has a `prototype` property:  
the object shared by instances created by the function `f`

A constructor is a function, so it has a `prototype`  
A prototype is an object so it has a `constructor`

- - -

## Object Oriented JavaScript

### The prototype chain
  
```js
c = new Circle(4);
```

```js
typeof c; //"object"
c.constructor; //function Circle(r) {...}
c.constructor === Circle; //true
```

```js
typeof c.constructor; //"function"
c.constructor.ptototype; //"object"
```

- - -

## Object Oriented JavaScript

### The prototype chain

The built-in `Object` object is the highest-level parent,  
the end of the so called **prototype chain**.  

```js
c.toString();  // "[object Object]"
```

`c` doesn't have an own `toString()` method  
`c.prototype` doesn't have an own `toString()` method  
`Object.prototype` has it!

- - -

## Object Oriented JavaScript

### The prototype chain

#### Overwriting prototype's property with own property

The own property takes precedence over the prototype's

```js
function Circle (r) {
  this.r = r;
  this.color = "red";
}

Circle.prototype.color = "green";
```

```js
var c = new Circle(5);

c.color;                       // "red"
c.constructor.prototype.color; // "green"

delete c.color;
c.color;                       // "green"

c.color = 'blue';
c.color;                       // "blue"
c.constructor.prototype.color; // "green"
```

- - -

## Object Oriented JavaScript

### The prototype chain

#### `hasOwnProperty(prop)`

A `for-in` loop iterates over all properties including those of the prototype.

```js
function Circle (r) {
  this.r = r;
}

Circle.prototype.color = 'green';
```

```js
var c = new Circle(3);

for (var p in c) {
  console.log(p);
}

// r
// color
```

- - -

## Object Oriented JavaScript

### The prototype chain

#### `hasOwnProperty(prop)`

Use `hasOwnProperty()` to test if a property belongs to an object.

```js
var c = new Circle(3);

for (var p in c) {
  if (c.hasOwnProperty(p)) {
    console.log(p);
  }
}

// r
```

- - -

## Object Oriented JavaScript

### The prototype chain

#### `isPrototypeOf(obj)`
 
This method tells whether that specific object is used as a prototype of another object.

```js
function Circle (r) {
  this.r = r;
}

Circle.prototype.color = 'green';
```

```js
var c = new Circle(4);
Circle.prototype.isPrototypeOf(c); //true
Object.prototype.isPrototypeOf(c); //true
Array.prototype.isPrototypeOf(c);  //false
```

- - -

## Object Oriented JavaScript

### The prototype chain

#### `__proto__` special property

`prototype.constructor` is not reliable  
since it could be simply overwritten  

JavaScript access object's prototype through a secret link  
some engines expose this link as a `__proto__` properties  

> #### Warning!
>
> `__proto__` property is not in the standard  


```js
function Circle (r) {
  this.r = r;
}

Circle.prototype.color = 'green';
```

```js
var c = new Circle(4);

c.constructor = 'junk'

typeof c.constructor.prototype // "undefined"
// a string object hasn't a prototype property

c.color;                       //"green"
// JavaScript uses immutable __proto__ secret link :)
```

`__proto__` and `prototype` refer to the same object but:

* `__proto__` is a property of the instances
* `prototype` is a property of the constructor functions

```js
typeof c.__proto__;                      // "object"
typeof c.prototype;                      // "undefifined"
c.constructor.prototype === c.__proto__; // true
```
