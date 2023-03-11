# n-torus

n-torus is an n-dimensional circular torus data structure.

## The structure
Every Torus is stored in a _d<sub>1</sub>×d<sub>2</sub>× ... ×d<sub>n</sub>_ form, where _n_ is the dimension of the space ( _n > 0_ ) and  _d<sub>x</sub>_ is the size of the Torus in the _x_-th dimension ( _d<sub>x</sub> > 0_ ).

A given coordinate cannot be out of range, because it is circulating over. Negative indexing is possible too. 


## Install
```
$ npm i n-torus
```

## Example
```typescript
import { Torus } from "n-torus"

// Create a new Torus
const myTorus = new Torus(2, 3, 4)

// Iterate over every element of myTorus
for (let z = 0; z < myTorus.dimensions[0]; ++z) {
    for (let y = 0; y < myTorus.dimensions[1]; ++y) {
        for (let x = 0; x < myTorus.dimensions[2]; ++x) {
            const value = z + y + x
            // Set a value with coordinates
            myTorus.set(value, z, y, x)
        }
    }
}

// Get an element of myTorus by circular coordinates
myTorus.at(0,    0,   0) // 0
myTorus.at(-1,  -1,  -1) // 6
myTorus.at(0,  999,   0) // 0
myTorus.at(0, -999,   0) // 0
myTorus.at(42,  99, -12) // 0
```

## Documentation

### Constructor
Constructs an n-dimensional Torus.

**Warning:**
The arguments define the size of the Torus for each direction. Otherwise `TypeError` is thrown.

```typescript
new Torus(2, 0, 4) // TypeError ❌
new Torus(2, 3, 4) // constructs a 2×3×4 Torus ✅
```

**Note**
After construction every element of the Torus is undefined.

### `.dimension`
Returns the dimension of the Torus.
```typescript
const myTorus = new Torus(2, 3, 4)
myTorus.dimension // 3
```

### `.dimensions`
Returns the shape of the Torus as an array.
```typescript
const myTorus = new Torus(2, 3, 4)
myTorus.dimensions // [2, 3, 4]
```

### `.at(...coordinates)`
Returns the value of the Torus on the given coordinates.

**Warning**
The number of arguments must be equal to the dimension of the space. Otherwise `TypeError` is thrown.

Any integer is a valid coordinate because of circular indexing.
``` typescript
const myTorus = new Torus(2, 3, 4)
myTorus.at(0, 0) // TypeError ❌
myTorus.at(0, 0, 0) // undefined ✅
```

### `.set(value, ...coordinates)`
Sets the value of the Torus on the given coordinates.

First argument is any type value to be set.

**Warning**
The number of the coordinate arguments must be equal to the dimension of the Torus. Otherwise `TypeError` is thrown.

Any integer is a valid coordinate because of circular indexing.
```typescript
const myTorus = new Torus(2, 3, 4)
myTorus.set("A", 0, 0) // TypeError ❌
myTorus.set("A", 0, 0, 0) // ✅
```

### `.toArray()`
Returns the nested array form of the Torus.
```typescript
const myTorus = new Torus(3, 2)
myTorus.toArray()
// [
//   [ undefined, undefined ],
//   [ undefined, undefined ],
//   [ undefined, undefined ]
// ]
```

### `.expand(indexOfDimension, position, fillValue = undefined)`
Expands the Torus size in the given dimension index.

First argument is the index of the dimension to expand on.

**Warning**
The index of dimension must be in range of the dimension of the Torus. Otherwise `RangeError` is thrown.

Second argument is the index of the position of expansion.

Any integer is a valid position for expansion because of circular indexing.

Third argument is the filling value of the expanded elements. By default it is undefined.

```typescript
const myTorus = new Torus(5, 3)
myTorus.expand(2, 2, "!") // RangeError ❌
myTorus.expand(1, 2, "!") // ✅
myTorus.toArray()
// [
//     [undefined, undefined, '!', undefined],
//     [undefined, undefined, '!', undefined],
//     [undefined, undefined, '!', undefined],
//     [undefined, undefined, '!', undefined],
//     [undefined, undefined, '!', undefined]
// ]
```

### `.shrink(indexOfDimension, position)`
Shrinks the Torus size in the given dimension index.

First argument is the index of the dimension to shrink.  
**Warning**
The index of dimension must be in range of the dimension of the Torus. Otherwise `RangeError` is thrown.

**Warning**
In the given dimension index the size of the Torus must be at least two to execute shrink. Otherwise `TypeError` is thrown.

Second argument is the index of the position of shrinking.

Any integer is a valid position for shrinking because of circular indexing.


```typescript
const myTorus = new Torus(3, 1)
myTorus.shrink(1, 0) // TypeError ❌
```

```typescript
const myTorus = new Torus(3, 2)
myTorus.set("A", 0, 0)
myTorus.set("B", 0, 1)
myTorus.set("C", 1, 0)
myTorus.set("D", 1, 1)
myTorus.set("E", 2, 0)
myTorus.set("F", 2, 1)
myTorus.shrink(2, 1) // RangeError ❌
myTorus.shrink(0, 1) // ✅
myTorus.toArray()
// [
//     [ 'A', 'B' ],
//     [ 'E', 'F' ]
// ]
```