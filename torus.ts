export class Torus {
    private torus: any[]
    private _dimension: number
    private _dimensions: number[]

    constructor(firstDimension: number, ...otherDimensions: number[]) {
        this.validateDimensions(firstDimension, ...otherDimensions)

        this._dimension = 1 + otherDimensions.length

        this._dimensions = new Array()
        this._dimensions.push(firstDimension, ...otherDimensions)

        let otherDimensionsProduct = 1
        for (let i = 0; i < otherDimensions.length; i++) {
            otherDimensionsProduct *= otherDimensions[i]
        }
        this.torus = new Array(firstDimension * otherDimensionsProduct)
    }

    public get dimension() {
        return this._dimension
    }

    public get dimensions() {
        return this._dimensions
    }

    private validateDimensions(...dimensions: number[]) {
        for (let i = 0; i < dimensions.length; i++) {
            if (dimensions[i] <= 0) {
                throw TypeError(`Arguments must be larger than 0`);
            }
        }
    }

    private validateNumberOfCoordinates(coordinates: number[]) {
        if (coordinates.length !== this._dimension) {
            throw TypeError(`${this._dimension} arguments required (dimension of torus), but ${coordinates.length} passed`);
        }
    }

    private validateDimensionIndex(indexOfDimension: number) {
        if (indexOfDimension >= this.dimension || indexOfDimension < 0) {
            throw RangeError(`Index of dimension must be in range: [0 .. ${this._dimension - 1}] (dimension indexes of torus)`);
        }
    }

    private validateDimensionSize(size: number) {
        if (size <= 1) {
            throw TypeError(`Dimension size must be larger than 1`);
        }
    }

    private normalizeValue(value: number, modulo: number) {
        value = ((value % modulo) + modulo) % modulo;
        return value
    }

    private normalizeCoordinates(coordinates: number[]) {
        for (let i = 0; i < this._dimension; i++) {
            coordinates[i] = this.normalizeValue(coordinates[i], this._dimensions[i])
        }
        return coordinates
    }

    private coordinatesToIndex(coordinates: number[]) {
        coordinates = this.normalizeCoordinates(coordinates)
        let index = 0
        for (let i = 0; i < this._dimension; i++) {
            let dimensionsProduct = 1
            for (let j = 1 + i; j < this._dimension; j++) {
                dimensionsProduct *= this.dimensions[j]
            }
            index += (coordinates[i]) * dimensionsProduct
        }
        return index
    }

    private buildArray(values: any[], dimension: number, dimensions: number[]) {
        let currentArray = new Array(dimension)
        for (let i = 0; i < dimension; i++) {
            if (dimensions.length == 0) {
                currentArray[i] = values[i]
            }
            else {
                const subValuesLength = values.length / dimension
                currentArray[i] = this.buildArray(
                    values.slice(i * subValuesLength, (i + 1) * subValuesLength),
                    dimensions[0],
                    dimensions.slice(1)
                )
            }
        }
        return currentArray
    }

    private indexToCoordinates(index: number) {
        let coordinates: number[] = []
        for (let i = 0; i < this._dimension; i++) {
            let dimensionsProduct = 1
            for (let j = 1 + i; j < this._dimension; j++) {
                dimensionsProduct *= this._dimensions[j]
            }
            const quotient = Math.floor(index / dimensionsProduct)
            coordinates.push(quotient)
            index -= quotient * dimensionsProduct
        }
        return coordinates
    }

    at(...coordinates: number[]) {
        this.validateNumberOfCoordinates(coordinates)
        return this.torus[this.coordinatesToIndex(coordinates)]
    }

    set(value: any, ...coordinates: number[]) {
        this.validateNumberOfCoordinates(coordinates)
        this.torus[this.coordinatesToIndex(coordinates)] = value
    }

    toArray() {
        return this.buildArray(this.torus, this.dimensions[0], this._dimensions.slice(1))
    }

    findCoordinates(predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any) {
        const findIndexResult = this.torus.findIndex(predicate)
        if (findIndexResult === -1) {
            return -1
        }
        return this.indexToCoordinates(findIndexResult)
    }

    shrink(indexOfDimension: number, position: number) {
        this.validateDimensionIndex(indexOfDimension)
        this.validateDimensionSize(this._dimensions[indexOfDimension])
        const normalizedPosition = this.normalizeValue(position, this._dimensions[indexOfDimension])
        let dimensionsProduct = 1
        for (let j = indexOfDimension; j < this._dimension; j++) {
            dimensionsProduct *= this.dimensions[j]
        }

        let lowerDimensionsProduct = 1
        for (let j = 1 + indexOfDimension; j < this._dimension; j++) {
            lowerDimensionsProduct *= this.dimensions[j]
        }

        let i = normalizedPosition * lowerDimensionsProduct;
        while (i < this.torus.length) {
            this.torus.splice(i, lowerDimensionsProduct);
            i += dimensionsProduct - lowerDimensionsProduct
        }

        this._dimensions[indexOfDimension]--
    }

    expand(indexOfDimension: number, position: number, fillValue: any = undefined) {
        this.validateDimensionIndex(indexOfDimension)
        const normalizedPosition = this.normalizeValue(position, this._dimensions[indexOfDimension])
        let dimensionsProduct = 1
        for (let j = indexOfDimension; j < this._dimension; j++) {
            dimensionsProduct *= this.dimensions[j]
        }

        let lowerDimensionsProduct = 1
        for (let j = 1 + indexOfDimension; j < this._dimension; j++) {
            lowerDimensionsProduct *= this.dimensions[j]
        }

        let i = normalizedPosition * lowerDimensionsProduct
        while (i < this.torus.length) {
            this.torus.splice(i, 0, ...new Array(lowerDimensionsProduct).fill(fillValue));
            i += dimensionsProduct + lowerDimensionsProduct
        }

        this._dimensions[indexOfDimension]++
    }
}