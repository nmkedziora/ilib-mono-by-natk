## Modules

<dl>
<dt><a href="#module_JSUtils">JSUtils</a></dt>
<dd></dd>
<dt><a href="#module_MathUtils">MathUtils</a></dt>
<dd></dd>
<dt><a href="#module_Path">Path</a></dt>
<dd></dd>
<dt><a href="#module_SearchUtils">SearchUtils</a></dt>
<dd></dd>
<dt><a href="#module_Utils">Utils</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#ISet">ISet</a></dt>
<dd><p>A polyfill for Set in older browsers.</p></dd>
</dl>

<a name="module_JSUtils"></a>

## JSUtils

* [JSUtils](#module_JSUtils)
    * [.isArray(object)](#module_JSUtils.isArray) ⇒ <code>boolean</code>
    * [.shallowCopy(source, target)](#module_JSUtils.shallowCopy)
    * [.deepCopy(from, to)](#module_JSUtils.deepCopy) ⇒ <code>Object</code>
    * [.mapString(str, map)](#module_JSUtils.mapString) ⇒ <code>string</code>
    * [.indexOf(array, obj)](#module_JSUtils.indexOf) ⇒ <code>number</code>
    * [.pad(str, length, [right])](#module_JSUtils.pad)
    * [.toHexString(string, [limit])](#module_JSUtils.toHexString) ⇒ <code>string</code>
    * [.isDate(object)](#module_JSUtils.isDate) ⇒ <code>boolean</code>
    * [.merge(object1, object2, [replace], [name1], [name2])](#module_JSUtils.merge) ⇒ <code>Object</code>
    * [.isEmpty(obj)](#module_JSUtils.isEmpty) ⇒ <code>boolean</code>
    * [.hashCode()](#module_JSUtils.hashCode)
    * [.callAll(arr, action, callback)](#module_JSUtils.callAll)
    * [.extend(object1, [object2])](#module_JSUtils.extend) ⇒ <code>Object</code>
    * [.fromCodePoint(codepoint)](#module_JSUtils.fromCodePoint) ⇒ <code>string</code>
    * [.toCodePoint(str, index)](#module_JSUtils.toCodePoint) ⇒ <code>number</code>

<a name="module_JSUtils.isArray"></a>

### JSUtils.isArray(object) ⇒ <code>boolean</code>
<p>Polyfill to test whether an object is an javascript array.</p>

**Kind**: static method of [<code>JSUtils</code>](#module_JSUtils)  
**Returns**: <code>boolean</code> - <p>return true if the object is an array
and false otherwise</p>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>\*</code> | <p>The object to test</p> |

<a name="module_JSUtils.shallowCopy"></a>

### JSUtils.shallowCopy(source, target)
<p>Perform a shallow copy of the source object to the target object. This only
copies the assignments of the source properties to the target properties,
but not recursively from there.<p></p>

**Kind**: static method of [<code>JSUtils</code>](#module_JSUtils)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Object</code> | <p>the source object to copy properties from</p> |
| target | <code>Object</code> | <p>the target object to copy properties into</p> |

<a name="module_JSUtils.deepCopy"></a>

### JSUtils.deepCopy(from, to) ⇒ <code>Object</code>
<p>Perform a recursive deep copy from the &quot;from&quot; object to the &quot;deep&quot; object.</p>

**Kind**: static method of [<code>JSUtils</code>](#module_JSUtils)  
**Returns**: <code>Object</code> - <p>a reference to the the &quot;to&quot; object</p>  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>Object</code> | <p>the object to copy from</p> |
| to | <code>Object</code> | <p>the object to copy to</p> |

<a name="module_JSUtils.mapString"></a>

### JSUtils.mapString(str, map) ⇒ <code>string</code>
<p>Map a string to the given set of alternate characters. If the target set
does not contain a particular character in the input string, then that
character will be copied to the output unmapped.</p>

**Kind**: static method of [<code>JSUtils</code>](#module_JSUtils)  
**Returns**: <code>string</code> - <p>the source string where each character is mapped to alternate characters</p>  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | <p>a string to map to an alternate set of characters</p> |
| map | <code>Array.&lt;string&gt;</code> \| <code>Object</code> | <p>a mapping to alternate characters</p> |

<a name="module_JSUtils.indexOf"></a>

### JSUtils.indexOf(array, obj) ⇒ <code>number</code>
<p>Check if an object is a member of the given array. This is a polyfill for
Array.indexOf. If this javascript engine
support indexOf, it is used directly. Otherwise, this function implements it
itself. The idea is to make sure that you can use the quick indexOf if it is
available, but use a slower implementation in older engines as well.</p>

**Kind**: static method of [<code>JSUtils</code>](#module_JSUtils)  
**Returns**: <code>number</code> - <p>index of the object in the array, or -1 if it is not in the array.</p>  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;(Object\|string\|number)&gt;</code> | <p>array to search</p> |
| obj | <code>Object</code> \| <code>string</code> \| <code>number</code> | <p>object being sought. This should be of the same type as the members of the array being searched. If not, this function will not return any results.</p> |

<a name="module_JSUtils.pad"></a>

### JSUtils.pad(str, length, [right])
<p>Pad the str with zeros to the given length of digits.</p>

**Kind**: static method of [<code>JSUtils</code>](#module_JSUtils)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> \| <code>number</code> | <p>the string or number to pad</p> |
| length | <code>number</code> | <p>the desired total length of the output string, padded</p> |
| [right] | <code>boolean</code> | <p>if true, pad on the right side of the number rather than the left. Default is false.</p> |

<a name="module_JSUtils.toHexString"></a>

### JSUtils.toHexString(string, [limit]) ⇒ <code>string</code>
<p>Convert a string into the hexadecimal representation
of the Unicode characters in that string.</p>

**Kind**: static method of [<code>JSUtils</code>](#module_JSUtils)  
**Returns**: <code>string</code> - <p>a hexadecimal representation of the
Unicode characters in the input string</p>  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | <p>The string to convert</p> |
| [limit] | <code>number</code> | <p>the number of digits to use to represent the character (1 to 8)</p> |

<a name="module_JSUtils.isDate"></a>

### JSUtils.isDate(object) ⇒ <code>boolean</code>
<p>Test whether an object in a Javascript Date.</p>

**Kind**: static method of [<code>JSUtils</code>](#module_JSUtils)  
**Returns**: <code>boolean</code> - <p>return true if the object is a Date
and false otherwise</p>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> \| <code>null</code> \| <code>undefined</code> | <p>The object to test</p> |

<a name="module_JSUtils.merge"></a>

### JSUtils.merge(object1, object2, [replace], [name1], [name2]) ⇒ <code>Object</code>
<p>Merge the properties of object2 into object1 in a deep manner and return a merged
object. If the property exists in both objects, the value in object2 will overwrite
the value in object1. If a property exists in object1, but not in object2, its value
will not be touched. If a property exists in object2, but not in object1, it will be
added to the merged result.<p></p>
<p>Name1 and name2 are for creating debug output only. They are not necessary.<p></p>

**Kind**: static method of [<code>JSUtils</code>](#module_JSUtils)  
**Returns**: <code>Object</code> - <p>the merged object</p>  

| Param | Type | Description |
| --- | --- | --- |
| object1 | <code>\*</code> | <p>the object to merge into</p> |
| object2 | <code>\*</code> | <p>the object to merge</p> |
| [replace] | <code>boolean</code> | <p>if true, replace the array elements in object1 with those in object2. If false, concatenate array elements in object1 with items in object2.</p> |
| [name1] | <code>string</code> | <p>name of the object being merged into</p> |
| [name2] | <code>string</code> | <p>name of the object being merged in</p> |

<a name="module_JSUtils.isEmpty"></a>

### JSUtils.isEmpty(obj) ⇒ <code>boolean</code>
<p>Return true if the given object has no properties.<p></p>

**Kind**: static method of [<code>JSUtils</code>](#module_JSUtils)  
**Returns**: <code>boolean</code> - <p>true if the given object has no properties, false otherwise</p>  

| Param | Type | Description |
| --- | ---