## Operators

- - -

# Operators

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

#### pre-increment

`++value` increments `value` by `1` before the statement is evaluated

#### post-increment

`value++` increments `value` by `1` after the statement is evaluated

#### pre-decrement

`--value` decremented `value` by `1` before the statement is evaluated

#### post-decrement

`value--` decremented `value` by `1` after the statement is evaluated

- - -

## Operators

### Logical Operators

#### Logical NOT

`!value` negate the boolean value.

### Logical AND

`a && b` returns the logical AND of `a` and `b`.

#### Logical OR

`a || b` returns the logical OR of `a` and `b`

#### Operators precedence

`!` is executed first, then comes `&&` and finally `||`

Use parentheses instead of relying on operator precedence,
in order to make your code easier to read and understand.

```js
false && false || true && true;     //true
(false && false) || (true && true); //true
```

- - -

## Operators

### Basic operation


* `+` returns the sum of its operands
* `-` returns the difference of its operands
* `*` multiply two numbers
* `/` divides the first operand by the second operand
* `%` returns the remainder of the division

- - -

## Operators

### Relational Operators

* less-than `<`
* greater-than `>`
* less-than-or-equal-to `<=`
* greater-than-or-equal-to `>=`

- - -

## Operators

### Equality operators

#### Strict Equal and Not Equal

`a === b` returns `true` if `a` is equals to `b`

`a !== b` returns `true` if `a` is not equals to `b`

- - -

# Operators

## Equality operators

### Conditional Operator

```js
conditional_expression ? true_case : false_case;
```

if `conditional_expression` is `true`
then returns `true_case` value
else returns `false_case` value

```js
var max = (a > b) ? a : b;
```

- - -

# Operators

## Assignment Operators

### Simple assignment

`=` assigns the value on the right to the variable on the left

```js
var variable = value;
```

- - -

# Operators

## Assignment Operators

### Compound assignment

* `+=` add/assign
* `-=` subtract/assign
* `*=` multiply/assign
* `/=` divide/assign
* `%=` modulus/assign

