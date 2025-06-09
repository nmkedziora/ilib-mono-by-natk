[**ilib-mono**](../../../../../README.md) • **Docs**

***

[ilib-mono](../../../../../modules.md) / [ilib-common/src](../../../README.md) / [MathUtils](../README.md) / shiftDecimal

# Function: shiftDecimal()

> **shiftDecimal**(`number`, `precision`): `number`

Return the number with the decimal shifted by the given precision.
Positive precisions shift the decimal to the right giving larger
numbers, and negative ones shift the decimal to the left giving
smaller numbers.

## Parameters

• **number**: `number`

the number to shift

• **precision**: `number`

the number of places to move the decimal point

## Returns

`number`

the number with the decimal point shifted by the
given number of decimals

## Defined in

[packages/ilib-common/src/MathUtils.js:172](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/MathUtils.js#L172)
