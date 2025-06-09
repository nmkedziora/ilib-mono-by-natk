[**ilib-mono**](../../../../../README.md) • **Docs**

***

[ilib-mono](../../../../../modules.md) / [ilib-common/src](../../../README.md) / [JSUtils](../README.md) / extend

# Function: extend()

> **extend**(`object1`, `object2`): `any`

Extend object1 by mixing in everything from object2 into it. The objects
are deeply extended, meaning that this method recursively descends the
tree in the objects and mixes them in at each level. Arrays are extended
by concatenating the elements of object2 onto those of object1.

## Parameters

• **object1**: `any`

the target object to extend

• **object2**: `any`

the object to mix in to object1

## Returns

`any`

returns object1

## Static

## Defined in

[packages/ilib-common/src/JSUtils.js:389](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/JSUtils.js#L389)
