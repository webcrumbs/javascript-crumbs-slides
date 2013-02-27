# Types

- - -

## Types

### Variables

#### Loosely typing

A **variable** is a named placeholder for a value of *any type*.

#### definition

To define a variable, use the `var` operator followed by the variable name.

```js
var variable_name;
```

#### initialization

It’s possible to define the variable and set its value at the same time.

```js
var message = 'hello!';
```

It's possible to change the value stored in the variable and also its type.

```js
var response = 'bye!';
response = 100;
```

Without initialization, a variable holds the special value `undefined`.

```js
var uninitializated;
uninitializated; // undefined
```

- - -

## Types

### Data types

There are five *simple data types* (or *primitive types*):

* `null`  
* `undefined`  
* `boolean`  
* `number`  
* `string`  

and one *complex data type*:

* `object`

- - -

## Types

### Null

`null` is a special value that all variables are considered to have  
if they have been defined but have not been assigned a value. 

`null` is a reserved word and cannot be used for anything,  
but to check that a variable does not have an assigned value.

- - -

## Types

### Undefined

`undefined` is a special value treated like `null`,  
but `null` is a reserved word while `undefined` is not. 

```js
var undefined = 'hello'; // legal, but not reccomended
```

- - -

## Types

### Booleans

Boolean data type has only two values:  
`true` and `false`, used without quotes.

```js
var t = true;
var f = false;
```

- - -

## Types

### Numbers

```js
var int = 1;
var float = 3.14;

var float1 = .07;  //missing decimal - interpreted as 0.07 preferred
var float2 = 1.;   //missing digit after decimal - interpreted as integer 1
var float3 = 10.0; //whole number - interpreted as integer 10
```

```js
var octal1 = 070;  //octal for 56
var octal2 = 079;  //invalid octal - interpreted as 79
var octal3 = 008;  //invalid octal - interpreted as 8

var hex1 = 0x0;    //hexadecimal for 0
var hex2 = 0xA;    //hexadecimal for 10
var hex3 = 0X1F;   //hexedecimal for 31

var exp1 = 1e+1;   //1 * 10^1 = 10
var exp2 = 2e+3;   //2 * 10^3 = 2000
var exp3 = 123e-3; //123 * 10^-3 = 0.123
```

- - -

# Types

## Data types

### Numbers

#### Range of Values

```js
Number.MIN_VALUE;          // 5e-324 is the smallest representable number    
Number.MAX_VALUE;          //1.7976931348623157e+308 is the largest representable number
Number.POSITIVE_INIFINITY; //Infinity represent the positive inifinity
Number.NEGATIVE_INFINITY;  //Infinity represent the negative infinity  
```

```js
Infinity - 1e307;          //Infinity 
Infinity - Infinity;       //NaN
-Infinity * -1;            //Infinity
Infinity * -1;             //-Infinity
```

To determine if a value is finite there is the `isFinite()` function.

```js
isFinite(0);                        //true
isFinite(1.7e308);                  //true
isFinite(1.8e308);                  //false
isFinite(Infinite);                 //false
isFinite(-Infinite);                //false
isFinite(Number.MAX_VALUE + 1);     //false
isFinite(Number.POSITIVE_INFINITE); //false
isFinite(Number.NEGATIVE_INFINITE); //false
```

- - -

## Types

### Numbers

#### NaN

is the value that represent Not a Number,  

The value `NaN` has a couple of unique properties:

* `NaN` is contagious, any operation involving `NaN` always returns `NaN`
* `NaN` is not equal to any value, including `NaN`

```js
Nan + 1 * 2 / 3; //NaN
NaN == NaN;      //false
```

- - -

## Types

### Numbers

#### Testing if a value is not a number

To determine if a value is "not a number" there is the `isNaN()` function.  

```js
isNaN(NaN);    //true  - NaN is NaN :)
isNaN(10);     //false - 10 is a number
isNaN("10");   //false - can be converted to number 10
isNaN("blue"); //true  - cannot be converted to a number
isNaN(true);   //false - can be converted to number 1
```

- - -

## Types

### Strings

A string is a sequence of character placed between single or double quotes.

```js
"some characters";
'some characters and numbers 123 5.87';
'1';
"";
"'hello'";
'"hello"';
'hello"; //syntax error - quotes must match
```

#### Character Literals

nonprintable or otherwise useful characters

* `\n` new line
* `\t` tab
* `\b` backspace
* `\r` carriage return
* `\f` form feed
* `\\` backslash (`\`)
* `\'` single quote (`'`)
* `\"` double quote (`"`)
* \xnn character in hexadecimal code `nn` (`n` is a hexadecimal digit).
* \unnnn unicode character in hexadecimal code `nnnn` (`n` is a hexadecimal digit).

```js
'he said \'hello\''; //"he said 'hello'"
"he said \"hello\""; //"he said "hello""
'\u03a3';            //"Σ"
'\x41';              //"A"
```

- - -

## Types

### Object

An object is an unordered collection of *key*/*value* pairs,  
separated by commas `,`, placed within curly braces `{` and `}`.

The *keys* are strings, the values can be of *any type*.

```js
var obj1 = {
  s: "string value", 
  n: 123,
  b: true,
  o: { k: 2 }
};
```

The *keys* can optionally be placed in quotation marks.  

```js
var obj2 = {
  "s": 'string value',
  'key': 'another value',
  "name with spaces": true
}; 
