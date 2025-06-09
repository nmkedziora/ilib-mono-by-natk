[**ilib-mono**](../../../README.md) • **Docs**

***

## Functions

### bisectionSearch()

```ts
function bisectionSearch(
   target, 
   low, 
   high, 
   precision, 
   func): number
```

Do a bisection search of a function for a particular target value. 

The function to search is a function that takes a numeric parameter,
does calculations, and returns gives a numeric result. The
function should should be smooth and not have any discontinuities
between the low and high values of the parameter.

#### Parameters

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

#### Returns

`number`

an approximation of the input value to the function that gives the desired
target output value, correct to within the error range of Javascript floating point
arithmetic, or NaN if there was some error

#### Static

***

### bsearch()

```ts
function bsearch(
   target, 
   arr, 
   comparator): number
```

Binary search a sorted array for a particular target value.
If the exact value is not found, it returns the index of the smallest
entry that is greater than the given target value. 

The comparator
parameter is a function that knows how to compare elements of the
array and the target. The function should return a value greater than 0
if the array element is greater than the target, a value less than 0 if
the array element is less than the target, and 0 if the array element
and the target are equivalent. 

If the comparator function is not specified, this function assumes
the array and the target are numeric values and should be compared
as such. 

#### Parameters

• **target**: `any`

element being sought

• **arr**: `any`[]

the array being searched

• **comparator**

a comparator that is appropriate for comparing two entries
in the array

#### Returns

`number`

the index of the array into which the value would fit if
inserted, or -1 if given array is not an array or the target is not
a number

#### Static
