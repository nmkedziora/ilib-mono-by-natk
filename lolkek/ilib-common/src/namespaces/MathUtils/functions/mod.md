[**ilib-mono**](../../../../../README.md) • **Docs**

***

[ilib-mono](../../../../../modules.md) / [ilib-common/src](../../../README.md) / [MathUtils](../README.md) / mod

# Function: mod()

> **mod**(`dividend`, `modulus`): `number`

Do a proper modulo function. The Javascript % operator will give the truncated
division algorithm, but for calendrical calculations, we need the Euclidean
division algorithm where the remainder of any division, whether the dividend
is negative or not, is always a positive number in the range [0, modulus).<p>

## Parameters

• **dividend**: `number`

the number being divided

• **modulus**: `number`

the number dividing the dividend. This should always be a positive number.

## Returns

`number`

the remainder of dividing the dividend by the modulus.

## Defined in

[packages/ilib-common/src/MathUtils.js:133](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/MathUtils.js#L133)
