[**ilib-mono**](../../../README.md) • **Docs**

***

## Functions

### callAll()

```ts
function callAll(
   arr, 
   action, 
   callback, 
   results): void
```

Calls the given action function on each element in the given
array arr asynchronously and in order and finally call the given callback when they are
all done. The action function should take the array to
process as its parameter, and a callback function. It should
process the first element in the array and then call its callback
function with the result of processing that element (if any).

#### Parameters

• **arr**: `any`[]

the array to process

• **action**: `any`

the action
to perform on each element of the array

• **callback**: `any`

the callback function to call
with the results of processing each element of the array.

• **results**: `any`

#### Returns

`void`

***

### deepCopy()

```ts
function deepCopy(from, to): any
```

Perform a recursive deep copy from the "from" object to the "deep" object.

#### Parameters

• **from**: `any`

the object to copy from

• **to**: `any`

the object to copy to

#### Returns

`any`

a reference to the the "to" object

#### Static

***

### extend()

```ts
function extend(object1, object2): any
```

Extend object1 by mixing in everything from object2 into it. The objects
are deeply extended, meaning that this method recursively descends the
tree in the objects and mixes them in at each level. Arrays are extended
by concatenating the elements of object2 onto those of object1.

#### Parameters

• **object1**: `any`

the target object to extend

• **object2**: `any`

the object to mix in to object1

#### Returns

`any`

returns object1

#### Static

***

### extend2()

```ts
function extend2(object1, object2): any
```

#### Parameters

• **object1**: `any`

• **object2**: `any`

#### Returns

`any`

***

### fromCodePoint()

```ts
function fromCodePoint(codepoint): string
```

Convert a UCS-4 code point to a Javascript string. The codepoint can be any valid
UCS-4 Unicode character, including supplementary characters. Standard Javascript
only supports supplementary characters using the UTF-16 encoding, which has
values in the range 0x0000-0xFFFF. String.fromCharCode() will only
give you a string containing 16-bit characters, and will not properly convert
the code point for a supplementary character (which has a value > 0xFFFF) into
two UTF-16 surrogate characters. Instead, it will just just give you whatever
single character happens to be the same as your code point modulo 0x10000, which
is almost never what you want.<p>

Similarly, that means if you use String.charCodeAt()
you will only retrieve a 16-bit value, which may possibly be a single
surrogate character that is part of a surrogate pair representing a character
in the supplementary plane. It will not give you a code point. Use
IString.codePointAt() to access code points in a string, or use
an iterator to walk through the code points in a string.

#### Parameters

• **codepoint**: `number`

UCS-4 code point to convert to a character

#### Returns

`string`

a string containing the character represented by the codepoint

#### Static

***

### hashCode()

```ts
function hashCode(obj): number
```

#### Parameters

• **obj**: `any`

#### Returns

`number`

#### Static

***

### indexOf()

```ts
function indexOf(array, obj): number
```

Check if an object is a member of the given array. This is a polyfill for
Array.indexOf. If this javascript engine
support indexOf, it is used directly. Otherwise, this function implements it
itself. The idea is to make sure that you can use the quick indexOf if it is
available, but use a slower implementation in older engines as well.

#### Parameters

• **array**: `any`[]

array to search

• **obj**: `any`

object being sought. This should be of the same type as the
members of the array being searched. If not, this function will not return
any results.

#### Returns

`number`

index of the object in the array, or -1 if it is not in the array.

#### Static

***

### isArray()

```ts
function isArray(object): boolean
```

Polyfill to test whether an object is an javascript array.

#### Parameters

• **object**: `any`

The object to test

#### Returns

`boolean`

return true if the object is an array
and false otherwise

#### Static

***

### isDate()

```ts
function isDate(object): boolean
```

Test whether an object in a Javascript Date.

#### Parameters

• **object**: `any`

The object to test

#### Returns

`boolean`

return true if the object is a Date
and false otherwise

#### Static

***

### isEmpty()

```ts
function isEmpty(obj): boolean
```

Return true if the given object has no properties.<p>

#### Parameters

• **obj**: `any`

the object to check

#### Returns

`boolean`

true if the given object has no properties, false otherwise

#### Static

***

### mapString()

```ts
function mapString(str, map): string
```

Map a string to the given set of alternate characters. If the target set
does not contain a particular character in the input string, then that
character will be copied to the output unmapped.

#### Parameters

• **str**: `string`

a string to map to an alternate set of characters

• **map**: `any`

a mapping to alternate characters

#### Returns

`string`

the source string where each character is mapped to alternate characters

#### Static

***

### merge()

```ts
function merge(
   object1, 
   object2, 
   replace, 
   name1, 
   name2): any
```

Merge the properties of object2 into object1 in a deep manner and return a merged
object. If the property exists in both objects, the value in object2 will overwrite
the value in object1. If a property exists in object1, but not in object2, its value
will not be touched. If a property exists in object2, but not in object1, it will be
added to the merged result.<p>

Name1 and name2 are for creating debug output only. They are not necessary.<p>

#### Parameters

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

#### Returns

`any`

the merged object

#### Static

***

### pad()

```ts
function pad(
   str, 
   length, 
   right): string
```

Pad the str with zeros to the given length of digits.

#### Parameters

• **str**: `string` \| `number`

the string or number to pad

• **length**: `number`

the desired total length of the output string, padded

• **right**: `boolean`

if true, pad on the right side of the number rather than the left.
Default is false.

#### Returns

`string`

#### Static

***

### shallowCopy()

```ts
function shallowCopy(source, target): any
```

Perform a shallow copy of the source object to the target object. This only
copies the assignments of the source properties to the target properties,
but not recursively from there.<p>

#### Parameters

• **source**: `any`

the source object to copy properties from

• **target**: `any`

the target object to copy properties into

#### Returns

`any`

#### Static

***

### toCodePoint()

```ts
function toCodePoint(str, index): number
```

Convert the character or the surrogate pair at the given
index into the intrinsic Javascript string to a Unicode
UCS-4 code point.

#### Parameters

• **str**: `string`

string to get the code point from

• **index**: `number`

index into the string

#### Returns

`number`

code point of the character at the
given index into the string

#### Static

***

### toHexString()

```ts
function toHexString(string, limit): string
```

Convert a string into the hexadecimal representation
of the Unicode characters in that string.

#### Parameters

• **string**: `string`

The string to convert

• **limit**: `number`

the number of digits to use to represent the character (1 to 8)

#### Returns

`string`

a hexadecimal representation of the
Unicode characters in the input string

#### Static
