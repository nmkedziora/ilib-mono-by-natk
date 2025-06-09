[**ilib-mono**](../../../../../README.md) • **Docs**

***

[ilib-mono](../../../../../modules.md) / [ilib-common/src](../../../README.md) / [MathUtils](../README.md) / log10

# Function: log10()

> **log10**(`num`): `number`

Returns the base 10 logarithm of a number. For platforms that support
Math.log10() it is used directly. For plaforms that do not, such as Qt/QML,
it will be calculated using a polyfill.

## Parameters

• **num**: `number`

the number to take the logarithm of

## Returns

`number`

the base-10 logarithm of the given number

## Defined in

[packages/ilib-common/src/MathUtils.js:185](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/MathUtils.js#L185)
