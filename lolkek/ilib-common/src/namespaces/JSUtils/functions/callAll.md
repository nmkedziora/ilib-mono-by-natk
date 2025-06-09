[**ilib-mono**](../../../../../README.md) • **Docs**

***

[ilib-mono](../../../../../modules.md) / [ilib-common/src](../../../README.md) / [JSUtils](../README.md) / callAll

# Function: callAll()

> **callAll**(`arr`, `action`, `callback`, `results`): `void`

Calls the given action function on each element in the given
array arr asynchronously and in order and finally call the given callback when they are
all done. The action function should take the array to
process as its parameter, and a callback function. It should
process the first element in the array and then call its callback
function with the result of processing that element (if any).

## Parameters

• **arr**: `any`[]

the array to process

• **action**: `any`

the action
to perform on each element of the array

• **callback**: `any`

the callback function to call
with the results of processing each element of the array.

• **results**: `any`

## Returns

`void`

## Defined in

[packages/ilib-common/src/JSUtils.js:365](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/JSUtils.js#L365)
