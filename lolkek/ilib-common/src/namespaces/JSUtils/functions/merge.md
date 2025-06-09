[**ilib-mono**](../../../../../README.md) • **Docs**

***

[ilib-mono](../../../../../modules.md) / [ilib-common/src](../../../README.md) / [JSUtils](../README.md) / merge

# Function: merge()

> **merge**(`object1`, `object2`, `replace`, `name1`, `name2`): `any`

Merge the properties of object2 into object1 in a deep manner and return a merged
object. If the property exists in both objects, the value in object2 will overwrite
the value in object1. If a property exists in object1, but not in object2, its value
will not be touched. If a property exists in object2, but not in object1, it will be
added to the merged result.<p>

Name1 and name2 are for creating debug output only. They are not necessary.<p>

## Parameters

• **object1**: `any`

the object to merge into

• **object2**: `any`

the object to merge

• **replace**: `boolean`

if true, replace the array elements in object1 with those in object2.
If false, concatenate array elements in object1 with items in object2.

• **name1**: `string`

name of the object being merged into

• **name2**: `string`

name of the object being merged in

## Returns

`any`

the merged object

## Static

## Defined in

[packages/ilib-common/src/JSUtils.js:235](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/JSUtils.js#L235)
