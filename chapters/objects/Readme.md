# Objects

- - -

## Object

### Declaration

```js
var hero = {
  breed: "Turtle",
  occupation: "Ninja",
  'finger count':  3
};
```

- - -

## Object

### Get properties

```js
hero.occupation; // "Ninja" - dot notation
```

```js
hero["breed"]; // "Turtle" - square bracket notation
```

```js
hero["finger count"]; // 3
```

```js
var key = "occupation";
hero[key]; // "Ninja"
```

```js
hero.height; // "undefined"
```

### Set properties

```js
hero.name = "Michelangelo";
hero.name; // "Michelangelo"
```

```js
hero["height"] = 1.5;
hero.height; // 1.5
```

```js
var key = "occupation";
hero[key] = "Pizza eater";
hero.occupation; // "Pizza eater"
```

- - -

## Objects

### Passing objects by reference

```js
var original = { howmany: 1 };
var copy = original;
copy.howmany; // 1
copy.howmany = 100;
original.howmany; // 100
```

- - -

## Objects

### Comparing objects

When you compare objects,  
you'll get `true` only if you compare  
two references to the same object.

```js
var fido  = {breed: 'dog'};
var benji = {breed: 'dog'};

benji === fido // false
```

```js
var mydog = benji;
mydog === benji // true
mydog === fido  // false
```
