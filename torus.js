"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Torus = void 0;
class Torus {
    constructor(firstDimension, ...otherDimensions) {
        this.validateDimensions(firstDimension, ...otherDimensions);
        this._dimension = 1 + otherDimensions.length;
        this._dimensions = new Array();
        this._dimensions.push(firstDimension, ...otherDimensions);
        let otherDimensionsProduct = 1;
        for (let i = 0; i < otherDimensions.length; i++) {
            otherDimensionsProduct *= otherDimensions[i];
        }
        this.torus = new Array(firstDimension * otherDimensionsProduct);
    }
    get dimension() {
        return this._dimension;
    }
    get dimensions() {
        return this._dimensions;
    }
    validateDimensions(...dimensions) {
        for (let i = 0; i < dimensions.length; i++) {
            if (dimensions[i] <= 0) {
                throw TypeError(`Arguments must be larger than 0`);
            }
        }
    }
    validateNumberOfCoordinates(coordinates) {
        if (coordinates.length !== this._dimension) {
            throw TypeError(`${this._dimension} arguments required (dimension of torus), but ${coordinates.length} passed`);
        }
    }
    validateDimensionIndex(indexOfDimension) {
        if (indexOfDimension >= this.dimension || indexOfDimension < 0) {
            throw RangeError(`Index of dimension must be in range: [0 .. ${this._dimension - 1}] (dimension indexes of torus)`);
        }
    }
    validateDimensionSize(size) {
        if (size <= 1) {
            throw RangeError(`Dimension size must be larger than 1`);
        }
    }
    normalizeValue(value, modulo) {
        value = ((value % modulo) + modulo) % modulo;
        return value;
    }
    normalizeCoordinates(coordinates) {
        for (let i = 0; i < this._dimension; i++) {
            coordinates[i] = this.normalizeValue(coordinates[i], this._dimensions[i]);
        }
        return coordinates;
    }
    coordinatesToIndex(coordinates) {
        coordinates = this.normalizeCoordinates(coordinates);
        let index = 0;
        for (let i = 0; i < this._dimension; i++) {
            let dimensionsProduct = 1;
            for (let j = 1 + i; j < this._dimension; j++) {
                dimensionsProduct *= this.dimensions[j];
            }
            index += (coordinates[i]) * dimensionsProduct;
        }
        return index;
    }
    buildArray(values, dimension, dimensions) {
        let currentArray = new Array(dimension);
        for (let i = 0; i < dimension; i++) {
            if (dimensions.length == 0) {
                currentArray[i] = values[i];
            }
            else {
                const subValuesLength = values.length / dimension;
                currentArray[i] = this.buildArray(values.slice(i * subValuesLength, (i + 1) * subValuesLength), dimensions[0], dimensions.slice(1));
            }
        }
        return currentArray;
    }
    indexToCoordinates(index) {
        let coordinates = [];
        for (let i = 0; i < this._dimension; i++) {
            let dimensionsProduct = 1;
            for (let j = 1 + i; j < this._dimension; j++) {
                dimensionsProduct *= this._dimensions[j];
            }
            const quotient = Math.floor(index / dimensionsProduct);
            coordinates.push(quotient);
            index -= quotient * dimensionsProduct;
        }
        return coordinates;
    }
    at(...coordinates) {
        this.validateNumberOfCoordinates(coordinates);
        return this.torus[this.coordinatesToIndex(coordinates)];
    }
    set(value, ...coordinates) {
        this.validateNumberOfCoordinates(coordinates);
        this.torus[this.coordinatesToIndex(coordinates)] = value;
    }
    toArray() {
        return this.buildArray(this.torus, this.dimensions[0], this._dimensions.slice(1));
    }
    findCoordinates(predicate, thisArg) {
        const findIndexResult = this.torus.findIndex(predicate);
        if (findIndexResult === -1) {
            return -1;
        }
        return this.indexToCoordinates(findIndexResult);
    }
    shrink(indexOfDimension, position) {
        this.validateDimensionIndex(indexOfDimension);
        this.validateDimensionSize(this._dimensions[indexOfDimension]);
        const normalizedPosition = this.normalizeValue(position, this._dimensions[indexOfDimension]);
        let dimensionsProduct = 1;
        for (let j = indexOfDimension; j < this._dimension; j++) {
            dimensionsProduct *= this.dimensions[j];
        }
        let lowerDimensionsProduct = 1;
        for (let j = 1 + indexOfDimension; j < this._dimension; j++) {
            lowerDimensionsProduct *= this.dimensions[j];
        }
        let i = normalizedPosition * lowerDimensionsProduct;
        while (i < this.torus.length) {
            this.torus.splice(i, lowerDimensionsProduct);
            i += dimensionsProduct - lowerDimensionsProduct;
        }
        this._dimensions[indexOfDimension]--;
    }
    expand(indexOfDimension, position, fillValue = undefined) {
        this.validateDimensionIndex(indexOfDimension);
        const normalizedPosition = this.normalizeValue(position, this._dimensions[indexOfDimension]);
        let dimensionsProduct = 1;
        for (let j = indexOfDimension; j < this._dimension; j++) {
            dimensionsProduct *= this.dimensions[j];
        }
        let lowerDimensionsProduct = 1;
        for (let j = 1 + indexOfDimension; j < this._dimension; j++) {
            lowerDimensionsProduct *= this.dimensions[j];
        }
        let i = normalizedPosition * lowerDimensionsProduct;
        while (i < this.torus.length) {
            this.torus.splice(i, 0, ...new Array(lowerDimensionsProduct).fill(fillValue));
            i += dimensionsProduct + lowerDimensionsProduct;
        }
        this._dimensions[indexOfDimension]++;
    }
}
exports.Torus = Torus;
