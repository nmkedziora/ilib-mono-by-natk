[**ilib-mono**](../../../../../README.md) • **Docs**

***

[ilib-mono](../../../../../modules.md) / [ilib-common/src](../../../README.md) / [JSUtils](../README.md) / fromCodePoint

# Function: fromCodePoint()

> **fromCodePoint**(`codepoint`): `string`

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

## Parameters

• **codepoint**: `number`

UCS-4 code point to convert to a character

## Returns

`string`

a string containing the character represented by the codepoint

## Static

## Defined in

[packages/ilib-common/src/JSUtils.js:461](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/JSUtils.js#L461)
