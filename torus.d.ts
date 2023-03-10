export declare class Torus {
    private torus;
    private _dimension;
    private _dimensions;
    constructor(firstDimension: number, ...otherDimensions: number[]);
    get dimension(): number;
    get dimensions(): number[];
    private validateDimensions;
    private validateNumberOfCoordinates;
    private validateDimensionIndex;
    private validateDimensionSize;
    private normalizeValue;
    private normalizeCoordinates;
    private coordinatesToIndex;
    private buildArray;
    private indexToCoordinates;
    at(...coordinates: number[]): any;
    set(value: any, ...coordinates: number[]): void;
    toArray(): any[];
    findCoordinates(predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any): number[] | -1;
    shrink(indexOfDimension: number, position: number): void;
    expand(indexOfDimension: number, position: number, fillValue?: any): void;
}
