[**ilib-mono**](../../../../../README.md) • **Docs**

***

[ilib-mono](../../../../../modules.md) / [ilib-common/src](../../../README.md) / [JSUtils](../README.md) / indexOf

# Function: indexOf()

> **indexOf**(`array`, `obj`): `number`

Check if an object is a member of the given array. This is a polyfill for
Array.indexOf. If this javascript engine
support indexOf, it is used directly. Otherwise, this function implements it
itself. The idea is to make sure that you can use the quick indexOf if it is
available, but use a slower implementation in older engines as well.

## Parameters

• **array**: `any`[]

array to search

• **obj**: `any`

object being sought. This should be of the same type as the
members of the array being searched. If not, this function will not return
any results.

## Returns

`number`

index of the object in the array, or -1 if it is not in the array.

## Static

## Defined in

[packages/ilib-common/src/JSUtils.js:132](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/JSUtils.js#L132)
