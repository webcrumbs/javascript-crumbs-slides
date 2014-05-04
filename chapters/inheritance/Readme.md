
# Inheritance

- - -

# Inheritance

## Define a "Class"

Define a "class" using a constructor function

```js
function Shape (x, y) {
  this.x = x;
  this.y = y;
}
```

- - -

# Inheritance

## Define a "Class"

Define the instance methods augmenting the constructor `prototype`

```js
function Shape (x, y) {
  this.x = x;
  this.y = y;
}
```

```
Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
};

Shape.prototype.info = function () {
  console.log('x: ', x, ', y: ', y);
};
```

- - -

# Inheritance

## Define a "Class"

Instantiate the defined "class" using the operator `new`

```js
var shape = new Shape(0, 0);

shape instanceof Shape; //true

shape.move(3, 4);
shape.info(); //x: 3, y: 4
```

- - - 

# Inheritance

## Define a sub-"Class"

Define a sub-"Class" using a constructor function  
calling the "super" constructor and linking the prototype chain

```js
function Rectangle (x, y, width, height) {
  Shape.call(this, x, y); // call "super" constructor
  this.width = width;
  this.height = height;
}
```

```js
var rect = new Rectangle(0, 0, 3, 4);
rect.info(); //TypeError: undefined is not a function
```

```js
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
```

```js
var rect = new Rectangle(0, 0, 3, 4);
rect.info(); //x: 0, y: 0
```

- - -

# Inheritance

## Define a sub-"Class"

Define the instance methods augmenting the constructor `prototype`  

```js
Rectangle.prototype.area = function () {
  return this.width * this.height;
};

//overriding
Rectangle.prototype.info = function () {
  Shape.prototype.info.call(this);
  console.log('width: ', this.width, ', height: ', this.height);
}
```

- - -

# Inheritance

## Define a sub-"Class"

Instantiate the defined sub-"class" using the operator `new`

```js
var rect = new Rectangle(0, 0, 4, 3);

rect instanceof Rectangle; //true
rect instanceof Shape; //true

rect.move(1, 2);
rect.area(); //12
rect.info(); //x: 1, y: 2 width: 4, height: 3

var shape = new Shape();
shape.area(); //TypeError: undefined is not a function

shape instanceof Shape; //true
rect instanceof Rectangle; //false
```

- - - 

# Inheritance

## `Object.create`

```js
Object.create = function (obj) {
  function F () {}
  F.prototype = obj;
  return new F();
};
```
