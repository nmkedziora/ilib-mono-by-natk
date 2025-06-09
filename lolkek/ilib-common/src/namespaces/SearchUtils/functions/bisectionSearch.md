[**ilib-mono**](../../../../../README.md) • **Docs**

***

[ilib-mono](../../../../../modules.md) / [ilib-common/src](../../../README.md) / [SearchUtils](../README.md) / bisectionSearch

# Function: bisectionSearch()

> **bisectionSearch**(`target`, `low`, `high`, `precision`, `func`): `number`

Do a bisection search of a function for a particular target value.<p>

The function to search is a function that takes a numeric parameter,
does calculations, and returns gives a numeric result. The
function should should be smooth and not have any discontinuities
between the low and high values of the parameter.

## Parameters

• **target**: `number`

value being sought

• **low**: `number`

the lower bounds to start searching

• **high**: `number`

the upper bounds to start searching

• **precision**: `number`

minimum precision to support. Use 0 if you want to use the default.

• **func**

function to search

## Returns

`number`

an approximation of the input value to the function that gives the desired
target output value, correct to within the error range of Javascript floating point
arithmetic, or NaN if there was some error

## Static

## Defined in

[packages/ilib-common/src/SearchUtils.js:108](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/SearchUtils.js#L108)
