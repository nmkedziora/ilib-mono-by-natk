[**ilib-mono**](../../../../../README.md) • **Docs**

***

[ilib-mono](../../../../../modules.md) / [ilib-common/src](../../../README.md) / [MathUtils](../README.md) / significant

# Function: significant()

> **significant**(`number`, `digits`, `round`): `number`

Return the given number with only the given number of significant digits.
The number of significant digits can start with the digits greater than
1 and straddle the decimal point, or it may start after the decimal point.
If the number of digits requested is less than 1, the original number
will be returned unchanged.

## Parameters

• **number**: `number`

the number to return with only significant digits

• **digits**: `number`

the number of significant digits to include in the
returned number

• **round**

a rounding function to use

## Returns

`number`

the given number with only the requested number of
significant digits

## Static

## Defined in

[packages/ilib-common/src/MathUtils.js:208](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/MathUtils.js#L208)
