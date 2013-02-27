# Syntax

- - -

## Syntax

### C-like syntax

JavaScript syntax borrows heavily from C  
and other C-like languages such as Java and Perl.

### Case-sensitivity

In JavaScript, everything is case-sensitive  
*variables*, *function names*, and *operators* are case-sensitive

- - - 

## Syntax

### Identifiers

An **identifier** is the name of a *variable*, *function*, *property*, or *argument*

* may be one or more characters
* starts with a letter or `_` or `$`
* can contains letters, numbers, `_`, `$`


```js
var Name;     // OK
var name;     // OK
var _;        // OK
var _name1;   // OK
var $;        // OK
var $name2;   // OK
var π;        // OK
var Åmstrong; // OK
var 1name;    // SyntaxError: Unexpected token ILLEGAL
```

#### Note 
Letters can be in extended ASCII or Unicode

- - -

## Syntax

### Comments

#### single-line comment

```js
//single line comment
```

#### block comment

```js
/*
 * This is a multi-line
 * Comment
 */
```

#### Convention
for readability each line of block comment starts with `*`

- - - 

## Syntax

### Statements

Statements are terminated by a semicolon `;`

```js
var diff = a - b; //valid - preferred
var sum = a + b   //valid - not recommended - use semicolon!
```

Statements can be combined into a code block between curly braces `{` and `}`

```js
{
  test = false;
  alert('hello!');
}
```

- - - 

## Syntax

### Keywords

```js
break        case         catch        continue     do          
debugger     default      delete       else         finally     
for          function     instanceof   if           in          
new          return       switch       this         throws      
try          typeof       var          void         while       
with
```

### Reserved words

```js
abstract     boolean      byte         char         class       
const        debugger     double       enum         export      
extends      final        float        goto         implements  
import       int          interface    long         native      
package      private      protected    public       short       
static       super        synchronized throws       transient   
volatile
```
