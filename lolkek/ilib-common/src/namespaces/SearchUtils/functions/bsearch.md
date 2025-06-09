[**ilib-mono**](../../../../../README.md) • **Docs**

***

[ilib-mono](../../../../../modules.md) / [ilib-common/src](../../../README.md) / [SearchUtils](../README.md) / bsearch

# Function: bsearch()

> **bsearch**(`target`, `arr`, `comparator`): `number`

Binary search a sorted array for a particular target value.
If the exact value is not found, it returns the index of the smallest
entry that is greater than the given target value.<p>

The comparator
parameter is a function that knows how to compare elements of the
array and the target. The function should return a value greater than 0
if the array element is greater than the target, a value less than 0 if
the array element is less than the target, and 0 if the array element
and the target are equivalent.<p>

If the comparator function is not specified, this function assumes
the array and the target are numeric values and should be compared
as such.<p>

## Parameters

• **target**: `any`

element being sought

• **arr**: `any`[]

the array being searched

• **comparator**

a comparator that is appropriate for comparing two entries
in the array

## Returns

`number`

the index of the array into which the value would fit if
inserted, or -1 if given array is not an array or the target is not
a number

## Static

## Defined in

[packages/ilib-common/src/SearchUtils.js:50](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/SearchUtils.js#L50)
