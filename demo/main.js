import link from '../index'
import mockData from './mock'

console.log(link(mockData))

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
const result = link(data)
console.log(result)
