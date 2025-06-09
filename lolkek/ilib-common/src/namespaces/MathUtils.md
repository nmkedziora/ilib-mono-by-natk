[**ilib-mono**](../../../README.md) • **Docs**

***

## Functions

### amod()

```ts
function amod(dividend, modulus): number
```

Do a proper adjusted modulo function. The Javascript % operator will give the truncated
division algorithm, but for calendrical calculations, we need the Euclidean
division algorithm where the remainder of any division, whether the dividend
is negative or not, is always a positive number in the range (0, modulus]. The adjusted
modulo function differs from the regular modulo function in that when the remainder is
zero, the modulus should be returned instead.<p>

#### Parameters

• **dividend**: `number`

the number being divided

• **modulus**: `number`

the number dividing the dividend. This should always be a positive number.

#### Returns

`number`

the remainder of dividing the dividend by the modulus.

***

### ceiling()

```ts
function protected ceiling(num): number
```

#### Parameters

• **num**: `number`

number to round

#### Returns

`number`

rounded number

#### Static

***

### down()

```ts
function down(num): number
```

Round a number towards 0.

#### Parameters

• **num**: `number`

number to round

#### Returns

`number`

rounded number

***

### floor()

```ts
function protected floor(num): number
```

#### Parameters

• **num**: `number`

number to round

#### Returns

`number`

rounded number

#### Static

***

### halfdown()

```ts
function halfdown(num): number
```

Round a number down towards 0 if it is half way or smaller, otherwise
round up.

#### Parameters

• **num**: `number`

number to round

#### Returns

`number`

rounded number

***

### halfeven()

```ts
function halfeven(num): number
```

Round numbers up to the closest even number.

#### Parameters

• **num**: `number`

number to round

#### Returns

`number`

rounded number

***

### halfodd()

```ts
function halfodd(num): number
```

Round numbers up to the closest odd number.

#### Parameters

• **num**: `number`

number to round

#### Returns

`number`

rounded number

***

### halfup()

```ts
function halfup(num): number
```

Round a number up away from 0 if it is half way or larger, otherwise
round down.

#### Parameters

• **num**: `number`

number to round

#### Returns

`number`

rounded number

***

### log10()

```ts
function log10(num): number
```

Returns the base 10 logarithm of a number. For platforms that support
Math.log10() it is used directly. For plaforms that do not, such as Qt/QML,
it will be calculated using a polyfill.

#### Parameters

• **num**: `number`

the number to take the logarithm of

#### Returns

`number`

the base-10 logarithm of the given number

***

### mod()

```ts
function mod(dividend, modulus): number
```

Do a proper modulo function. The Javascript % operator will give the truncated
division algorithm, but for calendrical calculations, we need the Euclidean
division algorithm where the remainder of any division, whether the dividend
is negative or not, is always a positive number in the range [0, modulus).<p>

#### Parameters

• **dividend**: `number`

the number being divided

• **modulus**: `number`

the number dividing the dividend. This should always be a positive number.

#### Returns

`number`

the remainder of dividing the dividend by the modulus.

***

### shiftDecimal()

```ts
function shiftDecimal(number, precision): number
```

Return the number with the decimal shifted by the given precision.
Positive precisions shift the decimal to the right giving larger
numbers, and negative ones shift the decimal to the left giving
smaller numbers.

#### Parameters

• **number**: `number`

the number to shift

• **precision**: `number`

the number of places to move the decimal point

#### Returns

`number`

the number with the decimal point shifted by the
given number of decimals

***

### significant()

```ts
function significant(
   number, 
   digits, 
   round): number
```

Return the given number with only the given number of significant digits.
The number of significant digits can start with the digits greater than
1 and straddle the decimal point, or it may start after the decimal point.
If the number of digits requested is less than 1, the original number
will be returned unchanged.

#### Parameters

• **number**: `number`

the number to return with only significant digits

• **digits**: `number`

the number of significant digits to include in the
returned number

• **round**

a rounding function to use

#### Returns

`number`

the given number with only the requested number of
significant digits

#### Static

***

### signum()

```ts
function signum(num): number
```

Return the sign of the given number. If the sign is negative, this function
returns -1. If the sign is positive or zero, this function returns 1.

#### Parameters

• **num**: `number`

the number to test

#### Returns

`number`

-1 if the number is negative, and 1 otherwise

#### Static

***

### up()

```ts
function up(num): number
```

Round a number away from 0.

#### Parameters

• **num**: `number`

number to round

#### Returns

`number`

rounded number
