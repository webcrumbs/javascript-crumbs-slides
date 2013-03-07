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
capitalize the first letter of your constructor functions

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

Constructor functions can accept parameters,  
which can be used when creating new objects.

```js
function Hero (name) {
  this.name = name;
  this.occupation = "Ninja";
  this.greets = function () {
    return "Hi! I'm " + this.name + " and I'm a " + this.occupation;
  }
}

var h1 = new Hero("Michelangelo");
var h2 = new Hero("Donatello");
h1.greets(); // "Hi! I'm Michelangelo and I'm a Ninja"
h2.greets(); // "Hi! I'm Donatello and I'm a Ninja"
```

- - -

## Object Oriented JavaScript

### Constructor functions

#### Warning
calling a function that is designed to be a constructor but  
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
that refer to its constructor function.

```js
function Cat (name) { 
  this.name = name; 
}

var c1 = new Cat("Felix");
c1.constructor; // function Cat(name) {...}

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

# Prototype

## Function's `prototype` property


Every function has a property called `prototype`

`prototype` is an object shared by every object instantiated by the function

`protottype` is initially an empty object

```js
function foo(a, b) { return a * b; }
typeof foo.prototype // "object"
```

# Prototype

## Function's `prototype` property

### Augmenting `prototype`

`prototype` object can be augmented with properties and methods  

```js
function Circle (r) {
  this.r = r;
}
```

```js
Circle.prototype.name = 'circle';
Circle.prototype.getArea = function () {
  return Math.PI * this.r * this.r;
};
```

- - -
# Prototype

## Function's `prototype` property

### 

Methods and properties added to the `prototype` of the function `f`  
are available to every object created by function `f`  

```js
var c = new Circle(4);
c.r;          //4
c.name;       // "circle"
c.getArea();  //50.26548245743669
```

```js
var d = new Circle(2);
d.r;          //2
d.name;       //"circle"
d.getArea();  //12.566370614359172
```

- - -
# Prototype

## Function's `prototype` property

### The prototype is "live"  

Objects are passed by reference:  
the prototype is not copied with every new object instance  

```js
Circle.prototype.getCircumference = function () {
  return 2 * Math.PI * this.r;
};
```

```js
var d = new Circle(5);

c.getCircumference(); //25.132741228718345
d.getCircumference(); //31.41592653589793
```

- - -
## The prototype chain

- - -
# Prototype

## The prototype chain

### Accessing a property of an object

When you access a property `p` of an object `o` JavaScript:

1. looks for `p` in the properties of `o`
2. if it finds `p`, returns its value
3. else it looks in the prototype of `o`
4. if it finds `p`, it returns its value
5. else it look in the prototype of the prototype of `o`
6. ...

- - -
# Prototype

## The prototype chain

### Accessing a property of an object

```js
c.r; //4 - found in the properties of c
c.name; //"circle" - found in the prototype of c
```

- - -
# Prototype

## The prototype chain

### Understanding the chain

Every object `o` has a `constructor` property:  
the function which creates the object `o`

Every function `f` has a `prototype` property:  
the object shared by instances created by the function `f`

A constructor is a function, so it has a `prototype`  
A prototype is an object so it has a `constructor`

- - -
# Prototype

## The prototype chain

### Understanding the chain
  
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
# Prototype

## The prototype chain

### Understanding the chain

The built-in `Object` object is the highest-level parent,  
the end of the so called **prototype chain**.  

```js
c.toString();  // "[object Object]"
```

`c` doesn't have an own `toString()` method  
`c.prototype` doesn't have an own `toString()` method  
`Object.prototype` has it!

- - -
# Prototype

## The prototype chain

### Overwriting prototype's property with own property

The own property takes precedence over the prototype's.

```js
function Circle (r) {
  this.r = r;
  this.color = 'red';
}

Circle.prototype.color = 'green';
```

```js
var c = new Circle(5);

c.color; // "red"
```

```js
delete c.color;
c.color; // "green"
```

```js
c.color = 'blue';
c.color; // "blue"
```

- - -
## Useful methods

- - -
# Prototype

## Useful methods

### `hasOwnProperty(prop)`

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

//r
//color
```

- - -
# Prototype

## Useful methods

### `hasOwnProperty(prop)`

Use `hasOwnProperty()` to test if a property belongs to an object.

```js
var c = new Circle(3);

for (var p in c) {
  if (c.hasOwnProperty(p)) {
    console.log(p);
  }
}

//r
```

- - -
# Prototype

## Useful methods

### `isPrototypeOf(obj)`
 
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
## Some prototype gotchas

- - -
# Prototype

## Some prototype gotchas

### `prototype.constructor` is not reliable

It could be simply overwritten  
JavaScript access object's prototype through a secret link  
Some engines expose this link as a `__proto__` properties  

> #### Forbidden!
>
> Even when exposed never use secret `__proto__` property.  
> It's no standard: think it's there only for learning purpose.

- - -
# Prototype

## Some prototype gotchas

### `prototype.constructor` is not reliable

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

c.color; //"green"
// JavaScript uses immutable __proto__ secret link
```

- - -
# Prototype

## Some prototype gotchas

### `prototype.constructor` is not reliable

`__proto__` and `prototype` refer to the same object but:

* `__proto__` is a property of the instances
* `prototype` is a property of the constructor functions

```js
typeof c.__proto__   // "object"
typeof c.prototype   // "undefifined"
```
