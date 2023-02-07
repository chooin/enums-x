# enums-x

```typescript
import enums from 'enums-x'

enum NumericEnums {
  A,
  B,
  C
}

enums.keys(NumericEnums)
// ['A', 'B', 'C']

enums.values(NumericEnums)
// [0, 1, 2]

enums.entries(NumericEnums)
// [['A', 0], ['B', 1], ['C', 2]]

enums.length(NumericEnums)
// 3

enums.key(NumericEnums, NumericEnums.A)
// A

enums.key(NumericEnums, 10)
// undefined
```
