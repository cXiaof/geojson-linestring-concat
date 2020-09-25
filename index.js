class LineConcat {
    constructor(attr) {
        this.attr = attr
    }

    concatenate() {
        if (!Array.isArray(this.attr)) throw new Error('Not An Array')

        this.saveLinesByAttr()
        if (this.lines.length === 1)
            return { type: 'LineString', coordinates: this.lines[0] }

        return this.getResult()
    }

    saveLinesByAttr() {
        this.lines = this.attr.reduce((target, geo) => {
            const coords = this.getGeoCoords(geo)
            if (!coords) return target

            switch (geo.type) {
                case 'LineString':
                    target.push(coords)
                    break
                case 'MultiLineString':
                    target = [...target, ...coords]
                    break
                default:
                    break
            }
            return target
        }, [])
    }

    getGeoCoords(geo) {
        if (geo.type === 'Feature') geo = geo.geometry
        return geo?.coordinates
    }

    getResult() {
        this.doConcatenate()
        return this.result.length === 1
            ? { type: 'LineString', coordinates: this.result[0].coords }
            : {
                  type: 'MultiLineString',
                  coordinates: this.result.map(({ coords }) => coords),
              }
    }

    doConcatenate() {
        this.data = this.lines.map(this.setDataStartEnd)
        this.result = [this.data.shift()]
        this.recursion()
    }

    setDataStartEnd(coords) {
        const start = coords[0]
        const end = coords[coords.length - 1]
        const [startX, startY] = start
        const [endX, endY] = end
        return { coords, startX, startY, endX, endY }
    }

    recursion() {
        if (this.data.length === 0) return
        let { coords, startX, startY, endX, endY } = this.data[0]
        let concatenated = false
        for (let i = 0; i < this.result.length; i++) {
            let resItem = this.result[i]
            if (resItem.endX === startX && resItem.endY === startY) {
                concatenated = true
                coords.shift()
                coords = resItem.coords.concat(coords)
            } else if (resItem.startX === endX && resItem.startY === endY) {
                concatenated = true
                coords.pop()
                coords = coords.concat(resItem.coords).reverse()
            } else if (resItem.startX === startX && resItem.startY === startY) {
                concatenated = true
                coords.reverse().pop()
                coords = coords.concat(resItem.coords).reverse()
            } else if (resItem.endX === endX && resItem.endY === endY) {
                concatenated = true
                coords.reverse().shift()
                coords = resItem.coords.concat(coords)
            }

            if (concatenated) {
                const [result, index] = this.concatenateResult(coords)
                coords = result
                this.result[i] = this.setDataStartEnd(coords)
                if (index >= 0) this.result.splice(index, 1)
                break
            }
        }
        if (!concatenated) this.result.push(this.data[0])
        this.data.shift()
        this.recursion()
    }

    concatenateResult(coords) {
        const [checkX, checkY] = coords[coords.length - 1]

        let index = this.result.findIndex(
            ({ startX, startY }) => startX === checkX && startY === checkY
        )
        if (index >= 0) {
            let target = this.result[index]
            coords.pop()
            coords = coords.concat(target.coords)
            return [coords, index]
        }

        index = this.result.findIndex(
            ({ endX, endY }) => endX === checkX && endY === checkY
        )
        if (index >= 0) {
            let target = this.result[index]
            coords.reverse().shift()
            coords = target.coords.concat(coords)
        }
        return [coords, index]
    }
}

export default (attr) => {
    const lineConcat = new LineConcat(attr)
    return lineConcat.concatenate()
}
