# geojson-linestring-concat

Concatenate GeoJSON LineStrings as much as possible.

## Install

-   Install with npm: `npm install geojson-linestring-concat`.
-   Install with yarn: `yarn add geojson-linestring-concat`.
-   Use CDN: `https://cdn.jsdelivr.net/npm/geojson-linestring-concat`

## Usage

```javascript
import lineConcat from 'geojson-linestring-concat'
const data = [
    {
        type: 'LineString',
        coordinates: [
            [0.0, 0.0],
            [1.0, 1.0],
            [2.0, 2.0],
        ],
    },
    {
        type: 'LineString',
        coordinates: [
            [2.0, 2.0],
            [3.0, 3.0],
        ],
    },
]
const result = lineConcat(data)
console.log(result)
```

outputs

```javascript
{
    type: 'LineString',
    coordinates: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
    ],
}
```
