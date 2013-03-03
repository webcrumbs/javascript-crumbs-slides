# Operators

- - -

## Operators

## The `typeof` Operator

```js
typeof 42;              // "number"
typeof 1.4142135;       // "number"
typeof 'hello';         // "string"
typeof 'false';         // "string"
typeof false;           // "boolean"
typeof true;            // "boolean"
typeof {key: 'value' }; // "object"
typeof function () {};  // "function"
typeof Math.sin;        // "function"
typeof null;            // "object"
typeof undefined;       // "undefined"
```

- - -

## Operators

### Unary Operators

```js
++value  /* increments value by 1 before the statement is evaluated */
```

```js
value++  /* increments value by 1 after the statement is evaluated */
```

```js
--value  /* decremented value by 1 before the statement is evaluated */
```

```js
value--  /* decremented value by 1 after the statement is evaluated */
```

- - -

## Operators

### Logical Operators

```js
!value  /* negate the boolean value */
```

```js
a && b  /* returns the logical AND of a and b */
```

```js
a || b  /* returns the logical OR of a and b */
```

#### Operators precedence

`!` is executed first, then comes `&&` and finally `||`

Use parentheses instead of relying on operator precedence,
in order to make your code easier to read and understand.

```js
false && false || true && true;     // true
(false && false) || (true && true); // true
```

- - -

## Operators

### Basic operation

```js
+  /* returns the sum of its operands */
```

```js
-  /* returns the difference of its operands */
```

```js
*  /* multiply two numbers */
```

```js
/  /* divides the first operand by the second operand */
```

```js
%  /* returns the remainder of the division */
```

- - -

## Operators

### Relational Operators

```js
<  /* less-than */
```

```js
>  /* greater-than */
```

```js
<=  /* less-than-or-equal-to */
```

```js
>=  /* greater-than-or-equal-to */
```

- - -

## Operators

### Equality operators


```js
a === b  /* returns true if a is equals to b */
```

```js
a !== b  /* returns true if a is not equals to b */
```

- - -

## Operators

#### Conditional Operator

```js
conditional_expression ? true_case : false_case;
```

if `conditional_expression` is `true`
then returns `true_case` value
else returns `false_case` value

```js
var a = 5;
var b = 6;
var max = (a > b) ? a : b; // max is 6
```

- - -

## Operators

### Assignment Operators

```js
=  /* assigns the value on the right to the variable on the left */
```

#### example

```js
var variable = value;
```

- - -

## Operators

### Assignment Operators

```js
+=  /* add/assign */
```

```js
-=  /* subtract/assign */
```

```js
*=  /* multiply/assign */
```

```js
/=  /* divide/assign */
```

```js
%=  /* modulus/assign */
```

