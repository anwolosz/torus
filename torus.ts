class Torus {
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

    private validateDimensions(...dimensions: number[]) {
        for (let i = 0; i < dimensions.length; i++) {
            if (dimensions[i] <= 0) {
                throw TypeError(`Arguments must be larger than 0`);
            }
        }
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

    private normalizeCoordinates(coordinates: number[]) {
        for (let i = 0; i < this._dimension; i++) {
            coordinates[i] = ((coordinates[i] % this._dimensions[i]) + this._dimensions[i]) % this._dimensions[i];
        }
        return coordinates
    }

    private checkNumberOfCoordinates(coordinates: number[]) {
        if (coordinates.length !== this._dimension) {
            throw TypeError(`${this._dimension} arguments required (dimension of torus), but ${coordinates.length} passed`);
        }
    }

    at(...coordinates: number[]) {
        this.checkNumberOfCoordinates(coordinates)
        return this.torus[this.coordinatesToIndex(coordinates)]
    }

    set(value: any, ...coordinates: number[]) {
        this.checkNumberOfCoordinates(coordinates)
        this.torus[this.coordinatesToIndex(coordinates)] = value
    }

    toArray() {
        return this.buildArray(this.torus, this.dimensions[0], this._dimensions.slice(1))
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

    public get dimension() {
        return this._dimension
    }

    public get dimensions() {
        return this._dimensions
    }
}