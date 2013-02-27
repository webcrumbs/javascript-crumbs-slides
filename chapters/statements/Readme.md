## Statements

- - -

## Statements

### Code block statement

```js
{
  //code block
  {
    //nested code block
    //use indentation
  }
}
```
- - -

## Statements

### `if` statement

```js
if (condition) statement1 else statement2
```
```js
if (condition1) statement1 else if (condition2) statement2 else statement3
```
```js
if (condition1) {
  statement1 
} else if (condition2) {
  statement2 
} else {
  statement3
}
```

- - -

## Statements

### `switch` statement

```js
switch (expression) {
  case value1: statement1; break;
  case value2: statement2; break;
  //...
  case valueN: statementN; break;
  default: statement
}
```

- - -

## Statements

### `do-while` statement

```js
do {
  statement
} while (expression);
```

#### example

```js
var i = 0;
do {
  i += 1;
} while (i < 10);

console.log(i); //?
```
- - -

## Statements

### `while` statement

```js
while (expression) statement
```

- - - 

## Statements

### `while` statement

#### example

```js
var i = 0;
while (i < 10) {
  i += 2;
}
```
- - -

## Statements

### `for` statement

```js
for (initialization; expression; post-loop-expression) statement
```

#### example

```js
for (var i = 0; i < 10; i +=1) {
  console.log(i);
}
```

#### infinite loop

```js
for (;;) { //don't try this at home!
  doSomething();
}
```
- - -

## Statements

### `for in` statement

```js
for (property in object) statement
```

#### Example

```js
var obj = {a: 1, b: 2, c: 3};
var s = '';
for (var key in obj) {
   s += key + ' ';
}
console.log(s); //?;
```
