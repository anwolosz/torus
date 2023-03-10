import { describe, it, expect, test } from "vitest";
import { Torus } from "./torus"

describe("#Constructor", () => {
    //TODO: #0D
    describe("#1D", () => {
        describe("#Product: 0", () => {
            it.fails("0 dimension error", () => {
                let testTorus = new Torus(0)
            })
        })

        describe("#Product: 1", () => {
            let testTorus = new Torus(1)

            it("1D representation", () => {
                expect(testTorus['torus']).toEqual([undefined])
            })
            it("dimension", () => {
                expect(testTorus.dimension).toBe(1)
            })
            it("dimensions", () => {
                expect(testTorus.dimensions).toEqual([1])
            })
        })

        describe("#Product: 5", () => {
            let testTorus = new Torus(5)

            it("1D representation", () => {
                expect(testTorus['torus']).toEqual([undefined, undefined, undefined, undefined, undefined])
            })
            it("dimension", () => {
                expect(testTorus.dimension).toBe(1)
            })
            it("dimensions", () => {
                expect(testTorus.dimensions).toEqual([5])
            })
        })

        describe("#Product: 100000", () => {
            let testTorus = new Torus(100000)

            it("1D representation", () => {
                expect(testTorus['torus']).toEqual(new Array(100000))
            })
            it("dimension", () => {
                expect(testTorus.dimension).toBe(1)
            })
            it("dimensions", () => {
                expect(testTorus.dimensions).toEqual([100000])
            })
        })
    })

    describe("#2D", () => {
        describe("#Product: 0x0", () => {
            it.fails("0 dimension error", () => {
                let testTorus = new Torus(0, 0)
            })
        })

        describe("#Product: 0x1", () => {
            it.fails("0 dimension error", () => {
                let testTorus = new Torus(0, 1)
            })
        })

        describe("#Product: 1x0", () => {
            it.fails("0 dimension error", () => {
                let testTorus = new Torus(1, 0)
            })
        })

        describe("#Product: 1x5", () => {
            let testTorus = new Torus(1, 5)

            it("1D representation", () => {
                expect(testTorus['torus']).toEqual(new Array(1 * 5))
            })
            it("dimension", () => {
                expect(testTorus.dimension).toBe(2)
            })
            it("dimensions", () => {
                expect(testTorus.dimensions).toEqual([1, 5])
            })
        })

        describe("#Product: 5x1", () => {
            let testTorus = new Torus(5, 1)

            it("1D representation", () => {
                expect(testTorus['torus']).toEqual(new Array(5 * 1))
            })
            it("dimension", () => {
                expect(testTorus.dimension).toBe(2)
            })
            it("dimensions", () => {
                expect(testTorus.dimensions).toEqual([5, 1])
            })
        })

        describe("#Product: 2x5", () => {
            let testTorus = new Torus(2, 5)

            it("1D representation", () => {
                expect(testTorus['torus']).toEqual(new Array(2 * 5))
            })
            it("dimension", () => {
                expect(testTorus.dimension).toBe(2)
            })
            it("dimensions", () => {
                expect(testTorus.dimensions).toEqual([2, 5])
            })
        })

        describe("#Product: 5x2", () => {
            let testTorus = new Torus(5, 2)

            it("1D representation", () => {
                expect(testTorus['torus']).toEqual(new Array(5 * 2))
            })
            it("dimension", () => {
                expect(testTorus.dimension).toBe(2)
            })
            it("dimensions", () => {
                expect(testTorus.dimensions).toEqual([5, 2])
            })
        })

        describe("#Product: 5x100000", () => {
            let testTorus = new Torus(5, 100000)

            it("1D representation", () => {
                expect(testTorus['torus']).toEqual(new Array(5 * 100000))
            })
            it("dimension", () => {
                expect(testTorus.dimension).toBe(2)
            })
            it("dimensions", () => {
                expect(testTorus.dimensions).toEqual([5, 100000])
            })
        })

        describe("#Product: 100000x5", () => {
            let testTorus = new Torus(100000, 5)

            it("1D representation", () => {
                expect(testTorus['torus']).toEqual(new Array(100000 * 5))
            })
            it("dimension", () => {
                expect(testTorus.dimension).toBe(2)
            })
            it("dimensions", () => {
                expect(testTorus.dimensions).toEqual([100000, 5])
            })
        })
    })

    describe("#3D", () => {
        describe("#Product: 0x0x0", () => {
            it.fails("0 dimension error", () => {
                let testTorus = new Torus(0, 0, 0)
            })
        })

        describe("#Product: 0x1x0", () => {
            it.fails("0 dimension error", () => {
                let testTorus = new Torus(0, 1, 0)
            })
        })

        describe("#Product: 1x0x0", () => {
            it.fails("0 dimension error", () => {
                let testTorus = new Torus(1, 0, 0)
            })
        })

        describe("#Product: 1x5x2", () => {
            let testTorus = new Torus(1, 5, 2)

            it("1D representation", () => {
                expect(testTorus['torus']).toEqual(new Array(1 * 5 * 2))
            })
            it("dimension", () => {
                expect(testTorus.dimension).toBe(3)
            })
            it("dimensions", () => {
                expect(testTorus.dimensions).toEqual([1, 5, 2])
            })
        })

        describe("#Product: 5x1x2", () => {
            let testTorus = new Torus(5, 1, 2)

            it("1D representation", () => {
                expect(testTorus['torus']).toEqual(new Array(5 * 1 * 2))
            })
            it("dimension", () => {
                expect(testTorus.dimension).toBe(3)
            })
            it("dimensions", () => {
                expect(testTorus.dimensions).toEqual([5, 1, 2])
            })
        })


        describe("#Product: 2x3x5", () => {
            let testTorus = new Torus(2, 3, 5)

            it("1D representation", () => {
                expect(testTorus['torus']).toEqual(new Array(2 * 3 * 5))
            })
            it("dimension", () => {
                expect(testTorus.dimension).toBe(3)
            })
            it("dimensions", () => {
                expect(testTorus.dimensions).toEqual([2, 3, 5])
            })
        })

        describe("#Product: 3x5x2", () => {
            let testTorus = new Torus(3, 5, 2)

            it("1D representation", () => {
                expect(testTorus['torus']).toEqual(new Array(3 * 5 * 2))
            })
            it("dimension", () => {
                expect(testTorus.dimension).toBe(3)
            })
            it("dimensions", () => {
                expect(testTorus.dimensions).toEqual([3, 5, 2])
            })
        })

        describe("#Product: 5x3x2", () => {
            let testTorus = new Torus(5, 3, 2)

            it("1D representation", () => {
                expect(testTorus['torus']).toEqual(new Array(5 * 3 * 2))
            })
            it("dimension", () => {
                expect(testTorus.dimension).toBe(3)
            })
            it("dimensions", () => {
                expect(testTorus.dimensions).toEqual([5, 3, 2])
            })
        })

        describe("#Product: 5x100000x3", () => {
            let testTorus = new Torus(5, 100000, 3)

            it("1D representation", () => {
                expect(testTorus['torus']).toEqual(new Array(5 * 100000 * 3))
            })
            it("dimension", () => {
                expect(testTorus.dimension).toBe(3)
            })
            it("dimensions", () => {
                expect(testTorus.dimensions).toEqual([5, 100000, 3])
            })
        })

        describe("#Product: 100000x5x3", () => {
            let testTorus = new Torus(100000, 5, 3)

            it("1D representation", () => {
                expect(testTorus['torus']).toEqual(new Array(100000 * 5 * 3))
            })
            it("dimension", () => {
                expect(testTorus.dimension).toBe(3)
            })
            it("dimensions", () => {
                expect(testTorus.dimensions).toEqual([100000, 5, 3])
            })
        })
    })
})

describe("#set(...) and at(...)", () => {
    describe("#1D", () => {
        describe("#Product: 1", () => {
            let testTorus = new Torus(1)

            it.fails("Too few coordinates", () => {
                testTorus.set("A")
            })
            it.fails("Too much coordinates", () => {
                testTorus.set("A", 1, 2)
            })

            testTorus.set("A", 0)
            it("Coordinates: (0)", () => {
                expect(testTorus.at(0)).toBe("A")
            })
            it("Coordinates: (1)", () => {
                expect(testTorus.at(1)).toEqual("A")
            })
            it("Coordinates: (-1)", () => {
                expect(testTorus.at(-1)).toEqual("A")
            })
            it("Coordinates: (100000)", () => {
                expect(testTorus.at(100000)).toEqual("A")
            })

        })

        describe("#Product: 5", () => {
            let testTorus = new Torus(5)

            it.fails("Too few coordinates", () => {
                testTorus.set("A", 1, 2, 100, -5)
            })
            it.fails("Too much coordinates", () => {
                testTorus.set("A", 1, 2, 100, -5, 6, 8)
            })

            testTorus.set("A", 0)
            testTorus.set("B", 6)
            testTorus.set("C", -3)
            testTorus.set("D", 23)
            testTorus.set("E", -16)
            it("Coordinates: (-5)", () => {
                expect(testTorus.at(-5)).toBe("A")
            })
            it("Coordinates: (1)", () => {
                expect(testTorus.at(1)).toBe("B")
            })
            it("Coordinates: (7)", () => {
                expect(testTorus.at(7)).toBe("C")
            })
            it("Coordinates: (-7)", () => {
                expect(testTorus.at(-7)).toBe("D")
            })
            it("Coordinates: (14)", () => {
                expect(testTorus.at(14)).toBe("E")
            })
        })

        describe("#Product: 100000", () => {
            let testTorus = new Torus(100000)
            for (let i = 0; i < 100000; i++) {
                testTorus.set(i, i)
            }

            it("Coordinates: (0)", () => {
                expect(testTorus.at(0)).toBe(0)
            })
            it("Coordinates: (-1)", () => {
                expect(testTorus.at(-1)).toBe(99999)
            })
            it("Coordinates: (1000)", () => {
                expect(testTorus.at(1000)).toBe(1000)
            })
            it("Coordinates: (100000)", () => {
                expect(testTorus.at(100000)).toBe(0)
            })
            it("Coordinates: (100001)", () => {
                expect(testTorus.at(100001)).toBe(1)
            })

        })
    })

    describe("#2D", () => {
        describe("#Product: 1x5", () => {
            let testTorus = new Torus(1, 5)
            testTorus.set("A", 0, 0)
            testTorus.set("B", 1, 6)
            testTorus.set("C", 100, -3)
            testTorus.set("D", 666, 3)
            testTorus.set("E", 0, 14)

            it("Coordinates: (4, -10)", () => {
                expect(testTorus.at(4, -10)).toBe("A")
            })
            it("Coordinates: (-100, 1)", () => {
                expect(testTorus.at(-100, 1)).toBe("B")
            })
            it("Coordinates: (9, -8)", () => {
                expect(testTorus.at(9, -8)).toBe("C")
            })
            it("Coordinates: (0, 8)", () => {
                expect(testTorus.at(0, 8)).toBe("D")
            })
            it("Coordinates: (123, 4)", () => {
                expect(testTorus.at(123, 4)).toBe("E")
            })
        })

        describe("#Product: 5x1", () => {
            let testTorus = new Torus(5, 1)
            testTorus.set("A", 0, 0)
            testTorus.set("B", 6, 1)
            testTorus.set("C", -3, 100)
            testTorus.set("D", 3, 666)
            testTorus.set("E", 14, 0)

            it("Coordinates: (-10, 4)", () => {
                expect(testTorus.at(-10, 4)).toBe("A")
            })
            it("Coordinates: (1, -100)", () => {
                expect(testTorus.at(1, -100)).toBe("B")
            })
            it("Coordinates: (-8, 9)", () => {
                expect(testTorus.at(-8, 9)).toBe("C")
            })
            it("Coordinates: (8, 0)", () => {
                expect(testTorus.at(8, 0)).toBe("D")
            })
            it("Coordinates: (4, 123)", () => {
                expect(testTorus.at(4, 123)).toBe("E")
            })
        })

        describe("#Product: 2x3", () => {
            let testTorus = new Torus(2, 3)
            testTorus.set("A", 10, 0)
            testTorus.set("B", -88, 7)
            testTorus.set("C", 22, 8)
            testTorus.set("D", 23, -3)
            testTorus.set("E", 57, -5)
            testTorus.set("F", 3, 2)


            it("Coordinates: (-2, -3)", () => {
                expect(testTorus.at(-2, -3)).toBe("A")
            })
            it("Coordinates: (0, -5)", () => {
                expect(testTorus.at(0, -5)).toBe("B")
            })
            it("Coordinates: (-8, 8)", () => {
                expect(testTorus.at(-8, 8)).toBe("C")
            })
            it("Coordinates: (-67, 3)", () => {
                expect(testTorus.at(-67, 3)).toBe("D")
            })
            it("Coordinates: (1, 1)", () => {
                expect(testTorus.at(1, 1)).toBe("E")
            })
            it("Coordinates: (1, 2)", () => {
                expect(testTorus.at(1, 2)).toBe("F")
            })
        })

        describe("#Product: 3x2", () => {
            let testTorus = new Torus(3, 2)
            testTorus.set("A", 0, 10)
            testTorus.set("B", 7, -88)
            testTorus.set("C", 8, 22)
            testTorus.set("D", -3, 23)
            testTorus.set("E", -5, 57)
            testTorus.set("F", 2, 3)


            it("Coordinates: (-3, -2)", () => {
                expect(testTorus.at(-3, -2)).toBe("A")
            })
            it("Coordinates: (-5, 0)", () => {
                expect(testTorus.at(-5, 0)).toBe("B")
            })
            it("Coordinates: (8, -8)", () => {
                expect(testTorus.at(8, -8)).toBe("C")
            })
            it("Coordinates: (3, -67)", () => {
                expect(testTorus.at(3, -67)).toBe("D")
            })
            it("Coordinates: (1, 1)", () => {
                expect(testTorus.at(1, 1)).toBe("E")
            })
            it("Coordinates: (2, 1)", () => {
                expect(testTorus.at(2, 1)).toBe("F")
            })
        })

        describe("#Product: 5x100000", () => {
            let testTorus = new Torus(5, 100000)
            for (let i = 0; i < testTorus.dimensions[0]; i++) {
                for (let j = 0; j < testTorus.dimensions[1]; j++) {
                    testTorus.set(`(${i}, ${j})`, i, j)
                }
            }

            it("Coordinates: (-5, -100000)", () => {
                expect(testTorus.at(-5, -100000)).toBe("(0, 0)")
            })
            it("Coordinates: (4, 99999)", () => {
                expect(testTorus.at(4, 99999)).toBe("(4, 99999)")
            })
            it("Coordinates: (-2, 1234)", () => {
                expect(testTorus.at(-2, 1234)).toBe("(3, 1234)")
            })
        })

        describe("#Product: 100000x5", () => {
            let testTorus = new Torus(100000, 5)
            for (let i = 0; i < testTorus.dimensions[0]; i++) {
                for (let j = 0; j < testTorus.dimensions[1]; j++) {
                    testTorus.set(`(${i}, ${j})`, i, j)
                }
            }

            it("Coordinates: (-100000, -5)", () => {
                expect(testTorus.at(-100000, -5)).toBe("(0, 0)")
            })
            it("Coordinates: (99999, 4)", () => {
                expect(testTorus.at(99999, 4)).toBe("(99999, 4)")
            })
            it("Coordinates: (1234, -2)", () => {
                expect(testTorus.at(1234, -2)).toBe("(1234, 3)")
            })
        })
    })

    describe("#3D", () => {
        describe("#Product: 2x3x4", () => {
            let testTorus = new Torus(2, 3, 4)
            for (let i = 0; i < testTorus.dimensions[0]; i++) {
                for (let j = 0; j < testTorus.dimensions[1]; j++) {
                    for (let k = 0; k < testTorus.dimensions[2]; k++) {
                        testTorus.set(`(${i}, ${j}, ${k})`, i, j, k)
                    }
                }
            }

            it("All normalized coordinates", () => {
                let generatedValues: string[] = []
                let readFromTorusValues: string[] = []
                for (let i = 0; i < testTorus.dimensions[0]; i++) {
                    for (let j = 0; j < testTorus.dimensions[1]; j++) {
                        for (let k = 0; k < testTorus.dimensions[2]; k++) {
                            generatedValues.push(`(${i}, ${j}, ${k})`)
                            readFromTorusValues.push(testTorus.at(i, j, k))
                        }
                    }
                }
                expect(generatedValues).toEqual(readFromTorusValues)
            })

            it("Coordinates: (24, -5, -1)", () => {
                expect(testTorus.at(24, -5, -1)).toBe("(0, 1, 3)")
            })
            it("Coordinates: (77, 40, -3)", () => {
                expect(testTorus.at(77, 40, -3)).toBe("(1, 1, 1)")
            })
            it("Coordinates: (-53, -2, 50)", () => {
                expect(testTorus.at(-53, -2, 50)).toBe("(1, 1, 2)")
            })
        })

        describe("#Product: 13x23x7", () => {
            let testTorus = new Torus(13, 23, 7)
            for (let i = 0; i < testTorus.dimensions[0]; i++) {
                for (let j = 0; j < testTorus.dimensions[1]; j++) {
                    for (let k = 0; k < testTorus.dimensions[2]; k++) {
                        testTorus.set(`(${i}, ${j}, ${k})`, i, j, k)
                    }
                }
            }

            it("All normalized coordinates", () => {
                let generatedValues: string[] = []
                let readFromTorusValues: string[] = []
                for (let i = 0; i < testTorus.dimensions[0]; i++) {
                    for (let j = 0; j < testTorus.dimensions[1]; j++) {
                        for (let k = 0; k < testTorus.dimensions[2]; k++) {
                            generatedValues.push(`(${i}, ${j}, ${k})`)
                            readFromTorusValues.push(testTorus.at(i, j, k))
                        }
                    }
                }
                expect(generatedValues).toEqual(readFromTorusValues)
            })

            it("Coordinates: (24, -5, -1)", () => {
                expect(testTorus.at(24, -5, -1)).toBe("(11, 18, 6)")
            })
            it("Coordinates: (77, 40, -3)", () => {
                expect(testTorus.at(77, 40, -3)).toBe("(12, 17, 4)")
            })
            it("Coordinates: (-53, -2, 50)", () => {
                expect(testTorus.at(-53, -2, 50)).toBe("(12, 21, 1)")
            })
        })

    })
})

describe("#toArray()", () => {
    describe("#1D", () => {
        describe("#Product: 1", () => {
            let testTorus = new Torus(1)

            it("As array", () => {
                expect(testTorus.toArray()).toEqual([undefined])
            })
        })

        describe("#Product: 5", () => {
            let testTorus = new Torus(5)
            testTorus.set("A", 0)
            testTorus.set("B", 1)
            testTorus.set("C", 2)
            testTorus.set("D", 3)
            testTorus.set("E", 4)

            it("As array", () => {
                expect(testTorus.toArray()).toEqual(["A", "B", "C", "D", "E"])
            })
        })

        describe("#Product: 100000", () => {
            let testTorus = new Torus(100000)
            for (let i = 0; i < 100000; i++) {
                testTorus.set(i, i)
            }

            it("As array", () => {
                expect(testTorus.toArray()).toEqual([...Array(100000).keys()])
            })
        })
    })

    describe("#2D", () => {
        describe("#Product: 1x5", () => {
            let testTorus = new Torus(1, 5)
            testTorus.set("A", 0, 0)
            testTorus.set("B", 1, 1)
            testTorus.set("C", 0, 2)
            testTorus.set("D", 0, 3)
            testTorus.set("E", 1, 4)

            it("As array", () => {
                expect(testTorus.toArray()).toEqual([["A", "B", "C", "D", "E"]])
            })
        })

        describe("#Product: 5x1", () => {
            let testTorus = new Torus(5, 1)
            testTorus.set("A", 0, 0)
            testTorus.set("B", 1, 1)
            testTorus.set("C", 2, 0)
            testTorus.set("D", 3, 1)
            testTorus.set("E", 4, 0)

            it("As array", () => {
                expect(testTorus.toArray()).toEqual([["A"], ["B"], ["C"], ["D"], ["E"]])
            })
        })

        describe("#Product: 2x3", () => {
            let testTorus = new Torus(2, 3)
            testTorus.set("A", 0, 0)
            testTorus.set("B", 0, 1)
            testTorus.set("C", 0, 2)
            testTorus.set("D", 1, 0)
            testTorus.set("E", 1, 1)
            testTorus.set("F", 1, 2)


            it("As array", () => {
                expect(testTorus.toArray()).toEqual([["A", "B", "C"], ["D", "E", "F"]])
            })
        })

        describe("#Product: 3x2", () => {
            let testTorus = new Torus(3, 2)
            testTorus.set("A", 0, 0)
            testTorus.set("B", 0, 1)
            testTorus.set("C", 1, 0)
            testTorus.set("D", 1, 1)
            testTorus.set("E", 2, 0)
            testTorus.set("F", 2, 1)


            it("As array", () => {
                expect(testTorus.toArray()).toEqual([["A", "B"], ["C", "D"], ["E", "F"]])
            })
        })
    })

    describe("#3D", () => {
        describe("#Product: 2x2x3", () => {
            let testTorus = new Torus(2, 2, 3)
            testTorus.set("A", 0, 0, 0)
            testTorus.set("B", 0, 0, 1)
            testTorus.set("C", 0, 0, 2)
            testTorus.set("D", 0, 1, 0)
            testTorus.set("E", 0, 1, 1)
            testTorus.set("F", 0, 1, 2)
            testTorus.set("G", 1, 0, 0)
            testTorus.set("H", 1, 0, 1)
            testTorus.set("I", 1, 0, 2)
            testTorus.set("J", 1, 1, 0)
            testTorus.set("K", 1, 1, 1)
            testTorus.set("L", 1, 1, 2)

            it("As array", () => {
                expect(testTorus.toArray()).toEqual(
                    [
                        [
                            ["A", "B", "C"],
                            ["D", "E", "F"]
                        ],
                        [
                            ["G", "H", "I"],
                            ["J", "K", "L"]
                        ]
                    ]
                )
            })
        })

        describe("#Product: 2x3x2", () => {
            let testTorus = new Torus(2, 3, 2)
            testTorus.set("A", 0, 0, 0)
            testTorus.set("B", 0, 0, 1)
            testTorus.set("C", 0, 1, 0)
            testTorus.set("D", 0, 1, 1)
            testTorus.set("E", 0, 2, 0)
            testTorus.set("F", 0, 2, 1)
            testTorus.set("G", 1, 0, 0)
            testTorus.set("H", 1, 0, 1)
            testTorus.set("I", 1, 1, 0)
            testTorus.set("J", 1, 1, 1)
            testTorus.set("K", 1, 2, 0)
            testTorus.set("L", 1, 2, 1)

            it("As array", () => {
                expect(testTorus.toArray()).toEqual(
                    [
                        [
                            ["A", "B"],
                            ["C", "D"],
                            ["E", "F"]
                        ],
                        [
                            ["G", "H"],
                            ["I", "J"],
                            ["K", "L"]
                        ]
                    ]
                )
            })
        })

        describe("#Product: 3x2x2", () => {
            let testTorus = new Torus(3, 2, 2)
            testTorus.set("A", 0, 0, 0)
            testTorus.set("B", 0, 0, 1)
            testTorus.set("C", 0, 1, 0)
            testTorus.set("D", 0, 1, 1)
            testTorus.set("E", 1, 0, 0)
            testTorus.set("F", 1, 0, 1)
            testTorus.set("G", 1, 1, 0)
            testTorus.set("H", 1, 1, 1)
            testTorus.set("I", 2, 0, 0)
            testTorus.set("J", 2, 0, 1)
            testTorus.set("K", 2, 1, 0)
            testTorus.set("L", 2, 1, 1)

            it("As array", () => {
                expect(testTorus.toArray()).toEqual(
                    [
                        [
                            ["A", "B"],
                            ["C", "D"]
                        ],
                        [
                            ["E", "F"],
                            ["G", "H"]
                        ],
                        [
                            ["I", "J"],
                            ["K", "L"]
                        ]
                    ]
                )
            })
        })

    })
})

describe("#expand(...)", () => {
    describe("#1D", () => {
        describe("#Product: 1", () => {
            let testTorus1 = new Torus(1)
            it.fails("validate dimension argument", () => {
                testTorus1.expand(1, 0)
            })

            testTorus1.expand(0, 0, "!")
            it("expand on position: 0", () => {
                expect(testTorus1.toArray()).toEqual(["!", undefined])
            })

            let testTorus2 = new Torus(1)
            testTorus2.expand(0, 1, "!")
            it("expand on position: 1", () => {
                expect(testTorus2.toArray()).toEqual(["!", undefined])
            })
        })

        describe("#Product: 3", () => {
            let testTorus1 = new Torus(3)
            testTorus1.set("A", 0)
            testTorus1.set("B", 1)
            testTorus1.set("C", 2)
            testTorus1.expand(0, 0, "!")
            it("expand on position: 0", () => {
                expect(testTorus1.toArray()).toEqual(["!", "A", "B", "C"])
            })

            let testTorus2 = new Torus(3)
            testTorus2.set("A", 0)
            testTorus2.set("B", 1)
            testTorus2.set("C", 2)
            testTorus2.expand(0, 1, "!")
            it("expand on position: 1", () => {
                expect(testTorus2.toArray()).toEqual(["A", "!", "B", "C"])
            })

            let testTorus3 = new Torus(3)
            testTorus3.set("A", 0)
            testTorus3.set("B", 1)
            testTorus3.set("C", 2)
            testTorus3.expand(0, 2, "!")
            it("expand on position: 2", () => {
                expect(testTorus3.toArray()).toEqual(["A", "B", "!", "C"])
            })

            let testTorus4 = new Torus(3)
            testTorus4.set("A", 0)
            testTorus4.set("B", 1)
            testTorus4.set("C", 2)
            testTorus4.expand(0, 3, "!")
            it("expand on position: 3", () => {
                expect(testTorus4.toArray()).toEqual(["!", "A", "B", "C"])
            })

            let testTorus5 = new Torus(3)
            testTorus5.set("A", 0)
            testTorus5.set("B", 1)
            testTorus5.set("C", 2)
            testTorus5.expand(0, -1, "!")
            it("expand on position: -1", () => {
                expect(testTorus5.toArray()).toEqual(["A", "B", "!", "C"])
            })
        })
    })

    describe("#2D", () => {
        describe("#Product: 1x3", () => {
            let testTorus1 = new Torus(1, 3)
            testTorus1.set("A", 0, 0)
            testTorus1.set("B", 0, 1)
            testTorus1.set("C", 0, 2)
            testTorus1.expand(0, 0, "!")
            it("expand on position: 0, and in dimension index: 0", () => {
                expect(testTorus1.toArray()).toEqual([["!", "!", "!"], ["A", "B", "C"]])
            })

            let testTorus2 = new Torus(1, 3)
            testTorus2.set("A", 0, 0)
            testTorus2.set("B", 0, 1)
            testTorus2.set("C", 0, 2)
            testTorus2.expand(0, 42, "!")
            it("expand on position: 42, and in dimension index: 0", () => {
                expect(testTorus2.toArray()).toEqual([["!", "!", "!"], ["A", "B", "C"]])
            })

            let testTorus3 = new Torus(1, 3)
            testTorus3.set("A", 0, 0)
            testTorus3.set("B", 0, 1)
            testTorus3.set("C", 0, 2)
            testTorus3.expand(1, 0, "!")
            it("expand on position: 0, and in dimension index: 1", () => {
                expect(testTorus3.toArray()).toEqual([["!", "A", "B", "C"]])
            })

            let testTorus4 = new Torus(1, 3)
            testTorus4.set("A", 0, 0)
            testTorus4.set("B", 0, 1)
            testTorus4.set("C", 0, 2)
            testTorus4.expand(1, 1, "!")
            it("expand on position: 1, and in dimension index: 1", () => {
                expect(testTorus4.toArray()).toEqual([["A", "!", "B", "C"]])
            })

            let testTorus5 = new Torus(1, 3)
            testTorus5.set("A", 0, 0)
            testTorus5.set("B", 0, 1)
            testTorus5.set("C", 0, 2)
            testTorus5.expand(1, 2, "!")
            it("expand on position: 2, and in dimension index: 1", () => {
                expect(testTorus5.toArray()).toEqual([["A", "B", "!", "C"]])
            })

            let testTorus6 = new Torus(1, 3)
            testTorus6.set("A", 0, 0)
            testTorus6.set("B", 0, 1)
            testTorus6.set("C", 0, 2)
            testTorus6.expand(1, 3, "!")
            it("expand on position: 3, and in dimension index: 1", () => {
                expect(testTorus6.toArray()).toEqual([["!", "A", "B", "C"]])
            })

            let testTorus7 = new Torus(1, 3)
            testTorus7.set("A", 0, 0)
            testTorus7.set("B", 0, 1)
            testTorus7.set("C", 0, 2)
            testTorus7.expand(1, -2, "!")
            it("expand on position: -2, and in dimension index: 1", () => {
                expect(testTorus7.toArray()).toEqual([["A", "!", "B", "C"]])
            })
        })

        describe("#Product: 3x1", () => {
            let testTorus1 = new Torus(3, 1)
            testTorus1.set("A", 0, 0)
            testTorus1.set("B", 1, 0)
            testTorus1.set("C", 2, 0)
            testTorus1.expand(0, 0, "!")
            it("expand on position: 0, and in dimension index: 0", () => {
                expect(testTorus1.toArray()).toEqual([["!"], ["A"], ["B"], ["C"]])
            })

            let testTorus2 = new Torus(3, 1)
            testTorus2.set("A", 0, 0)
            testTorus2.set("B", 1, 0)
            testTorus2.set("C", 2, 0)
            testTorus2.expand(0, 1, "!")
            it("expand on position: 1, and in dimension index: 0", () => {
                expect(testTorus2.toArray()).toEqual([["A"], ["!"], ["B"], ["C"]])
            })

            let testTorus3 = new Torus(3, 1)
            testTorus3.set("A", 0, 0)
            testTorus3.set("B", 1, 0)
            testTorus3.set("C", 2, 0)
            testTorus3.expand(0, 2, "!")
            it("expand on position: 2, and in dimension index: 0", () => {
                expect(testTorus3.toArray()).toEqual([["A"], ["B"], ["!"], ["C"]])
            })

            let testTorus4 = new Torus(3, 1)
            testTorus4.set("A", 0, 0)
            testTorus4.set("B", 1, 0)
            testTorus4.set("C", 2, 0)
            testTorus4.expand(0, 3, "!")
            it("expand on position: 3, and in dimension index: 0", () => {
                expect(testTorus4.toArray()).toEqual([["!"], ["A"], ["B"], ["C"]])
            })

            let testTorus5 = new Torus(3, 1)
            testTorus5.set("A", 0, 0)
            testTorus5.set("B", 1, 0)
            testTorus5.set("C", 2, 0)
            testTorus5.expand(0, -1, "!")
            it("expand on position: -1, and in dimension index: 0", () => {
                expect(testTorus5.toArray()).toEqual([["A"], ["B"], ["!"], ["C"]])
            })

            let testTorus6 = new Torus(3, 1)
            testTorus6.set("A", 0, 0)
            testTorus6.set("B", 1, 0)
            testTorus6.set("C", 2, 0)
            testTorus6.expand(1, 0, "!")
            it("expand on position: 0, and in dimension index: 1", () => {
                expect(testTorus6.toArray()).toEqual([["!", "A"], ["!", "B"], ["!", "C"]])
            })

            let testTorus7 = new Torus(3, 1)
            testTorus7.set("A", 0, 0)
            testTorus7.set("B", 1, 0)
            testTorus7.set("C", 2, 0)
            testTorus7.expand(1, 42, "!")
            it("expand on position: 42, and in dimension index: 1", () => {
                expect(testTorus7.toArray()).toEqual([["!", "A"], ["!", "B"], ["!", "C"]])
            })


        })

        describe("#Product: 2x3", () => {
            let testTorus1 = new Torus(2, 3)
            testTorus1.set("A", 0, 0)
            testTorus1.set("B", 0, 1)
            testTorus1.set("C", 0, 2)
            testTorus1.set("D", 1, 0)
            testTorus1.set("E", 1, 1)
            testTorus1.set("F", 1, 2)
            testTorus1.expand(0, 0, "!")
            it("expand on position: 0, and in dimension index: 0", () => {
                expect(testTorus1.toArray()).toEqual(
                    [
                        ["!", "!", "!"], ["A", "B", "C"], ["D", "E", "F"]
                    ]
                )
            })

            let testTorus2 = new Torus(2, 3)
            testTorus2.set("A", 0, 0)
            testTorus2.set("B", 0, 1)
            testTorus2.set("C", 0, 2)
            testTorus2.set("D", 1, 0)
            testTorus2.set("E", 1, 1)
            testTorus2.set("F", 1, 2)
            testTorus2.expand(0, 1, "!")
            it("expand on position: 1, and in dimension index: 0", () => {
                expect(testTorus2.toArray()).toEqual(
                    [
                        ["A", "B", "C"], ["!", "!", "!"], ["D", "E", "F"]
                    ]
                )
            })

            let testTorus3 = new Torus(2, 3)
            testTorus3.set("A", 0, 0)
            testTorus3.set("B", 0, 1)
            testTorus3.set("C", 0, 2)
            testTorus3.set("D", 1, 0)
            testTorus3.set("E", 1, 1)
            testTorus3.set("F", 1, 2)
            testTorus3.expand(0, 2, "!")
            it("expand on position: 2, and in dimension index: 0", () => {
                expect(testTorus3.toArray()).toEqual(
                    [
                        ["!", "!", "!"], ["A", "B", "C"], ["D", "E", "F"]
                    ]
                )
            })

            let testTorus4 = new Torus(2, 3)
            testTorus4.set("A", 0, 0)
            testTorus4.set("B", 0, 1)
            testTorus4.set("C", 0, 2)
            testTorus4.set("D", 1, 0)
            testTorus4.set("E", 1, 1)
            testTorus4.set("F", 1, 2)
            testTorus4.expand(0, -1, "!")
            it("expand on position: -1, and in dimension index: 0", () => {
                expect(testTorus4.toArray()).toEqual(
                    [
                        ["A", "B", "C"], ["!", "!", "!"], ["D", "E", "F"]
                    ]
                )
            })

            let testTorus5 = new Torus(2, 3)
            testTorus5.set("A", 0, 0)
            testTorus5.set("B", 0, 1)
            testTorus5.set("C", 0, 2)
            testTorus5.set("D", 1, 0)
            testTorus5.set("E", 1, 1)
            testTorus5.set("F", 1, 2)
            testTorus5.expand(1, 0, "!")
            it("expand on position: 0, and in dimension index: 1", () => {
                expect(testTorus5.toArray()).toEqual(
                    [
                        ["!", "A", "B", "C"], ["!", "D", "E", "F"]
                    ]
                )
            })

            let testTorus6 = new Torus(2, 3)
            testTorus6.set("A", 0, 0)
            testTorus6.set("B", 0, 1)
            testTorus6.set("C", 0, 2)
            testTorus6.set("D", 1, 0)
            testTorus6.set("E", 1, 1)
            testTorus6.set("F", 1, 2)
            testTorus6.expand(1, 1, "!")
            it("expand on position: 1, and in dimension index: 1", () => {
                expect(testTorus6.toArray()).toEqual(
                    [
                        ["A", "!", "B", "C"], ["D", "!", "E", "F"]
                    ]
                )
            })

            let testTorus7 = new Torus(2, 3)
            testTorus7.set("A", 0, 0)
            testTorus7.set("B", 0, 1)
            testTorus7.set("C", 0, 2)
            testTorus7.set("D", 1, 0)
            testTorus7.set("E", 1, 1)
            testTorus7.set("F", 1, 2)
            testTorus7.expand(1, 2, "!")
            it("expand on position: 2, and in dimension index: 1", () => {
                expect(testTorus7.toArray()).toEqual(
                    [
                        ["A", "B", "!", "C"], ["D", "E", "!", "F"]
                    ]
                )
            })

            let testTorus8 = new Torus(2, 3)
            testTorus8.set("A", 0, 0)
            testTorus8.set("B", 0, 1)
            testTorus8.set("C", 0, 2)
            testTorus8.set("D", 1, 0)
            testTorus8.set("E", 1, 1)
            testTorus8.set("F", 1, 2)
            testTorus8.expand(1, 3, "!")
            it("expand on position: 3, and in dimension index: 1", () => {
                expect(testTorus8.toArray()).toEqual(
                    [
                        ["!", "A", "B", "C"], ["!", "D", "E", "F"]
                    ]
                )
            })

            let testTorus9 = new Torus(2, 3)
            testTorus9.set("A", 0, 0)
            testTorus9.set("B", 0, 1)
            testTorus9.set("C", 0, 2)
            testTorus9.set("D", 1, 0)
            testTorus9.set("E", 1, 1)
            testTorus9.set("F", 1, 2)
            testTorus9.expand(1, -1, "!")
            it("expand on position: -1, and in dimension index: 1", () => {
                expect(testTorus9.toArray()).toEqual(
                    [
                        ["A", "B", "!", "C"], ["D", "E", "!", "F"]
                    ]
                )
            })

        })

    })

    describe("#3D", () => {
        describe("#Product: 2x2x3", () => {
            let testTorus1 = new Torus(2, 2, 3)
            testTorus1.set("A", 0, 0, 0)
            testTorus1.set("B", 0, 0, 1)
            testTorus1.set("C", 0, 0, 2)
            testTorus1.set("D", 0, 1, 0)
            testTorus1.set("E", 0, 1, 1)
            testTorus1.set("F", 0, 1, 2)
            testTorus1.set("G", 1, 0, 0)
            testTorus1.set("H", 1, 0, 1)
            testTorus1.set("I", 1, 0, 2)
            testTorus1.set("J", 1, 1, 0)
            testTorus1.set("K", 1, 1, 1)
            testTorus1.set("L", 1, 1, 2)
            testTorus1.expand(0, 0, "!")
            it("expand on position: 0, and in dimension index: 0", () => {
                expect(testTorus1.toArray()).toEqual(
                    [
                        [
                            ["!", "!", "!"],
                            ["!", "!", "!"]
                        ],
                        [
                            ["A", "B", "C"],
                            ["D", "E", "F"]
                        ],
                        [
                            ["G", "H", "I"],
                            ["J", "K", "L"]
                        ]
                    ]
                )
            })

            let testTorus2 = new Torus(2, 2, 3)
            testTorus2.set("A", 0, 0, 0)
            testTorus2.set("B", 0, 0, 1)
            testTorus2.set("C", 0, 0, 2)
            testTorus2.set("D", 0, 1, 0)
            testTorus2.set("E", 0, 1, 1)
            testTorus2.set("F", 0, 1, 2)
            testTorus2.set("G", 1, 0, 0)
            testTorus2.set("H", 1, 0, 1)
            testTorus2.set("I", 1, 0, 2)
            testTorus2.set("J", 1, 1, 0)
            testTorus2.set("K", 1, 1, 1)
            testTorus2.set("L", 1, 1, 2)
            testTorus2.expand(0, 31, "!")
            it("expand on position: 31, and in dimension index: 0", () => {
                expect(testTorus2.toArray()).toEqual(
                    [
                        [
                            ["A", "B", "C"],
                            ["D", "E", "F"]
                        ],
                        [
                            ["!", "!", "!"],
                            ["!", "!", "!"]
                        ],
                        [
                            ["G", "H", "I"],
                            ["J", "K", "L"]
                        ]
                    ]
                )
            })

            let testTorus3 = new Torus(2, 2, 3)
            testTorus3.set("A", 0, 0, 0)
            testTorus3.set("B", 0, 0, 1)
            testTorus3.set("C", 0, 0, 2)
            testTorus3.set("D", 0, 1, 0)
            testTorus3.set("E", 0, 1, 1)
            testTorus3.set("F", 0, 1, 2)
            testTorus3.set("G", 1, 0, 0)
            testTorus3.set("H", 1, 0, 1)
            testTorus3.set("I", 1, 0, 2)
            testTorus3.set("J", 1, 1, 0)
            testTorus3.set("K", 1, 1, 1)
            testTorus3.set("L", 1, 1, 2)
            testTorus3.expand(1, -2, "!")
            it("expand on position: -2, and in dimension index: 1", () => {
                expect(testTorus3.toArray()).toEqual(
                    [
                        [
                            ["!", "!", "!"],
                            ["A", "B", "C"],
                            ["D", "E", "F"],
                        ],
                        [
                            ["!", "!", "!"],
                            ["G", "H", "I"],
                            ["J", "K", "L"],
                        ]
                    ]
                )
            })

            let testTorus4 = new Torus(2, 2, 3)
            testTorus4.set("A", 0, 0, 0)
            testTorus4.set("B", 0, 0, 1)
            testTorus4.set("C", 0, 0, 2)
            testTorus4.set("D", 0, 1, 0)
            testTorus4.set("E", 0, 1, 1)
            testTorus4.set("F", 0, 1, 2)
            testTorus4.set("G", 1, 0, 0)
            testTorus4.set("H", 1, 0, 1)
            testTorus4.set("I", 1, 0, 2)
            testTorus4.set("J", 1, 1, 0)
            testTorus4.set("K", 1, 1, 1)
            testTorus4.set("L", 1, 1, 2)
            testTorus4.expand(1, -17, "!")
            it("expand on position: -17, and in dimension index: 1", () => {
                expect(testTorus4.toArray()).toEqual(
                    [
                        [
                            ["A", "B", "C"],
                            ["!", "!", "!"],
                            ["D", "E", "F"],
                        ],
                        [
                            ["G", "H", "I"],
                            ["!", "!", "!"],
                            ["J", "K", "L"],
                        ]
                    ]
                )
            })


            let testTorus5 = new Torus(2, 2, 3)
            testTorus5.set("A", 0, 0, 0)
            testTorus5.set("B", 0, 0, 1)
            testTorus5.set("C", 0, 0, 2)
            testTorus5.set("D", 0, 1, 0)
            testTorus5.set("E", 0, 1, 1)
            testTorus5.set("F", 0, 1, 2)
            testTorus5.set("G", 1, 0, 0)
            testTorus5.set("H", 1, 0, 1)
            testTorus5.set("I", 1, 0, 2)
            testTorus5.set("J", 1, 1, 0)
            testTorus5.set("K", 1, 1, 1)
            testTorus5.set("L", 1, 1, 2)
            testTorus5.expand(2, 100, "!")
            it("expand on position: 100, and in dimension index: 2", () => {
                expect(testTorus5.toArray()).toEqual(
                    [
                        [
                            ["A", "!", "B", "C"],
                            ["D", "!", "E", "F"],
                        ],
                        [
                            ["G", "!", "H", "I"],
                            ["J", "!", "K", "L"],
                        ]
                    ]
                )
            })

            let testTorus6 = new Torus(2, 2, 3)
            testTorus6.set("A", 0, 0, 0)
            testTorus6.set("B", 0, 0, 1)
            testTorus6.set("C", 0, 0, 2)
            testTorus6.set("D", 0, 1, 0)
            testTorus6.set("E", 0, 1, 1)
            testTorus6.set("F", 0, 1, 2)
            testTorus6.set("G", 1, 0, 0)
            testTorus6.set("H", 1, 0, 1)
            testTorus6.set("I", 1, 0, 2)
            testTorus6.set("J", 1, 1, 0)
            testTorus6.set("K", 1, 1, 1)
            testTorus6.set("L", 1, 1, 2)
            testTorus6.expand(2, -4, "!")
            it("expand on position: -4, and in dimension index: 2", () => {
                expect(testTorus6.toArray()).toEqual(
                    [
                        [
                            ["A", "B", "!", "C"],
                            ["D", "E", "!", "F"],
                        ],
                        [
                            ["G", "H", "!", "I"],
                            ["J", "K", "!", "L"],
                        ]
                    ]
                )
            })
        })
    })
})

describe("#shrink(...)", () => {
    describe("#1D", () => {
        describe("#Product: 1", () => {
            let testTorus1 = new Torus(1)
            it.fails("validate dimension index argument", () => {
                testTorus1.shrink(1, 0)
            })
            it.fails("validate dimension size argument", () => {
                testTorus1.shrink(0, 0)
            })
        })

        describe("#Product: 3", () => {
            let testTorus1 = new Torus(3)
            testTorus1.set("A", 0)
            testTorus1.set("B", 1)
            testTorus1.set("C", 2)
            testTorus1.shrink(0, 0)
            it("shrink on position: 0", () => {
                expect(testTorus1.toArray()).toEqual(["B", "C"])
            })

            let testTorus2 = new Torus(3)
            testTorus2.set("A", 0)
            testTorus2.set("B", 1)
            testTorus2.set("C", 2)
            testTorus2.shrink(0, 1)
            it("shrink on position: 1", () => {
                expect(testTorus2.toArray()).toEqual(["A", "C"])
            })

            let testTorus3 = new Torus(3)
            testTorus3.set("A", 0)
            testTorus3.set("B", 1)
            testTorus3.set("C", 2)
            testTorus3.shrink(0, 2)
            it("shrink on position: 2", () => {
                expect(testTorus3.toArray()).toEqual(["A", "B"])
            })

            let testTorus4 = new Torus(3)
            testTorus4.set("A", 0)
            testTorus4.set("B", 1)
            testTorus4.set("C", 2)
            testTorus4.shrink(0, 3)
            it("shrink on position: 3", () => {
                expect(testTorus4.toArray()).toEqual(["B", "C"])
            })

            let testTorus5 = new Torus(3)
            testTorus5.set("A", 0)
            testTorus5.set("B", 1)
            testTorus5.set("C", 2)
            testTorus5.shrink(0, -1)
            it("shrink on position: -1", () => {
                expect(testTorus5.toArray()).toEqual(["A", "B"])
            })
        })
    })

    describe("#2D", () => {
        describe("#Product: 1x3", () => {
            let testTorus1 = new Torus(1, 3)
            testTorus1.set("A", 0, 0)
            testTorus1.set("B", 0, 1)
            testTorus1.set("C", 0, 2)
            it.fails("validate dimension index argument", () => {
                testTorus1.shrink(0, 0)
            })

            let testTorus2 = new Torus(1, 3)
            testTorus2.set("A", 0, 0)
            testTorus2.set("B", 0, 1)
            testTorus2.set("C", 0, 2)
            it.fails("validate dimension index argument", () => {
                testTorus2.shrink(0, 42)
            })

            let testTorus3 = new Torus(1, 3)
            testTorus3.set("A", 0, 0)
            testTorus3.set("B", 0, 1)
            testTorus3.set("C", 0, 2)
            testTorus3.shrink(1, 0)
            it("shrink on position: 0, and in dimension index: 1", () => {
                expect(testTorus3.toArray()).toEqual([["B", "C"]])
            })

            let testTorus4 = new Torus(1, 3)
            testTorus4.set("A", 0, 0)
            testTorus4.set("B", 0, 1)
            testTorus4.set("C", 0, 2)
            testTorus4.shrink(1, 1)
            it("shrink on position: 1, and in dimension index: 1", () => {
                expect(testTorus4.toArray()).toEqual([["A", "C"]])
            })

            let testTorus5 = new Torus(1, 3)
            testTorus5.set("A", 0, 0)
            testTorus5.set("B", 0, 1)
            testTorus5.set("C", 0, 2)
            testTorus5.shrink(1, 2)
            it("shrink on position: 2, and in dimension index: 1", () => {
                expect(testTorus5.toArray()).toEqual([["A", "B"]])
            })

            let testTorus6 = new Torus(1, 3)
            testTorus6.set("A", 0, 0)
            testTorus6.set("B", 0, 1)
            testTorus6.set("C", 0, 2)
            testTorus6.shrink(1, 3)
            it("shrink on position: 3, and in dimension index: 1", () => {
                expect(testTorus6.toArray()).toEqual([["B", "C"]])
            })

            let testTorus7 = new Torus(1, 3)
            testTorus7.set("A", 0, 0)
            testTorus7.set("B", 0, 1)
            testTorus7.set("C", 0, 2)
            testTorus7.shrink(1, -2)
            it("shrink on position: -2, and in dimension index: 1", () => {
                expect(testTorus7.toArray()).toEqual([["A", "C"]])
            })
        })

        describe("#Product: 3x1", () => {
            let testTorus1 = new Torus(3, 1)
            testTorus1.set("A", 0, 0)
            testTorus1.set("B", 1, 0)
            testTorus1.set("C", 2, 0)
            testTorus1.shrink(0, 0)
            it("shrink on position: 0, and in dimension index: 0", () => {
                expect(testTorus1.toArray()).toEqual([["B"], ["C"]])
            })

            let testTorus2 = new Torus(3, 1)
            testTorus2.set("A", 0, 0)
            testTorus2.set("B", 1, 0)
            testTorus2.set("C", 2, 0)
            testTorus2.shrink(0, 1)
            it("shrink on position: 1, and in dimension index: 0", () => {
                expect(testTorus2.toArray()).toEqual([["A"], ["C"]])
            })

            let testTorus3 = new Torus(3, 1)
            testTorus3.set("A", 0, 0)
            testTorus3.set("B", 1, 0)
            testTorus3.set("C", 2, 0)
            testTorus3.shrink(0, 2)
            it("shrink on position: 2, and in dimension index: 0", () => {
                expect(testTorus3.toArray()).toEqual([["A"], ["B"]])
            })

            let testTorus4 = new Torus(3, 1)
            testTorus4.set("A", 0, 0)
            testTorus4.set("B", 1, 0)
            testTorus4.set("C", 2, 0)
            testTorus4.shrink(0, 3)
            it("shrink on position: 3, and in dimension index: 0", () => {
                expect(testTorus4.toArray()).toEqual([["B"], ["C"]])
            })

            let testTorus5 = new Torus(3, 1)
            testTorus5.set("A", 0, 0)
            testTorus5.set("B", 1, 0)
            testTorus5.set("C", 2, 0)
            testTorus5.shrink(0, -1)
            it("shrink on position: -1, and in dimension index: 0", () => {
                expect(testTorus5.toArray()).toEqual([["A"], ["B"]])
            })

            let testTorus6 = new Torus(3, 1)
            testTorus6.set("A", 0, 0)
            testTorus6.set("B", 1, 0)
            testTorus6.set("C", 2, 0)
            it.fails("validate dimension index argument", () => {
                testTorus6.shrink(1, 0)
            })

            let testTorus7 = new Torus(3, 1)
            testTorus7.set("A", 0, 0)
            testTorus7.set("B", 1, 0)
            testTorus7.set("C", 2, 0)
            it.fails("validate dimension index argument", () => {
                testTorus7.shrink(1, 42)
            })
        })

        describe("#Product: 2x3", () => {
            let testTorus1 = new Torus(2, 3)
            testTorus1.set("A", 0, 0)
            testTorus1.set("B", 0, 1)
            testTorus1.set("C", 0, 2)
            testTorus1.set("D", 1, 0)
            testTorus1.set("E", 1, 1)
            testTorus1.set("F", 1, 2)
            testTorus1.shrink(0, 0)
            it("shrink on position: 0, and in dimension index: 0", () => {
                expect(testTorus1.toArray()).toEqual(
                    [
                        ["D", "E", "F"]
                    ]
                )
            })

            let testTorus2 = new Torus(2, 3)
            testTorus2.set("A", 0, 0)
            testTorus2.set("B", 0, 1)
            testTorus2.set("C", 0, 2)
            testTorus2.set("D", 1, 0)
            testTorus2.set("E", 1, 1)
            testTorus2.set("F", 1, 2)
            testTorus2.shrink(0, 1)
            it("shrink on position: 1, and in dimension index: 0", () => {
                expect(testTorus2.toArray()).toEqual(
                    [
                        ["A", "B", "C"]
                    ]
                )
            })

            let testTorus3 = new Torus(2, 3)
            testTorus3.set("A", 0, 0)
            testTorus3.set("B", 0, 1)
            testTorus3.set("C", 0, 2)
            testTorus3.set("D", 1, 0)
            testTorus3.set("E", 1, 1)
            testTorus3.set("F", 1, 2)
            testTorus3.shrink(0, 2)
            it("shrink on position: 2, and in dimension index: 0", () => {
                expect(testTorus3.toArray()).toEqual(
                    [
                        ["D", "E", "F"]
                    ]
                )
            })

            let testTorus4 = new Torus(2, 3)
            testTorus4.set("A", 0, 0)
            testTorus4.set("B", 0, 1)
            testTorus4.set("C", 0, 2)
            testTorus4.set("D", 1, 0)
            testTorus4.set("E", 1, 1)
            testTorus4.set("F", 1, 2)
            testTorus4.shrink(0, -1)
            it("shrink on position: -1, and in dimension index: 0", () => {
                expect(testTorus4.toArray()).toEqual(
                    [
                        ["A", "B", "C"]
                    ]
                )
            })

            let testTorus5 = new Torus(2, 3)
            testTorus5.set("A", 0, 0)
            testTorus5.set("B", 0, 1)
            testTorus5.set("C", 0, 2)
            testTorus5.set("D", 1, 0)
            testTorus5.set("E", 1, 1)
            testTorus5.set("F", 1, 2)
            testTorus5.shrink(1, 0)
            it("shrink on position: 0, and in dimension index: 1", () => {
                expect(testTorus5.toArray()).toEqual(
                    [
                        ["B", "C"], ["E", "F"]
                    ]
                )
            })

            let testTorus6 = new Torus(2, 3)
            testTorus6.set("A", 0, 0)
            testTorus6.set("B", 0, 1)
            testTorus6.set("C", 0, 2)
            testTorus6.set("D", 1, 0)
            testTorus6.set("E", 1, 1)
            testTorus6.set("F", 1, 2)
            testTorus6.shrink(1, 1)
            it("shrink on position: 1, and in dimension index: 1", () => {
                expect(testTorus6.toArray()).toEqual(
                    [
                        ["A", "C"], ["D", "F"]
                    ]
                )
            })

            let testTorus7 = new Torus(2, 3)
            testTorus7.set("A", 0, 0)
            testTorus7.set("B", 0, 1)
            testTorus7.set("C", 0, 2)
            testTorus7.set("D", 1, 0)
            testTorus7.set("E", 1, 1)
            testTorus7.set("F", 1, 2)
            testTorus7.shrink(1, 2)
            it("shrink on position: 2, and in dimension index: 1", () => {
                expect(testTorus7.toArray()).toEqual(
                    [
                        ["A", "B"], ["D", "E"]
                    ]
                )
            })

            let testTorus8 = new Torus(2, 3)
            testTorus8.set("A", 0, 0)
            testTorus8.set("B", 0, 1)
            testTorus8.set("C", 0, 2)
            testTorus8.set("D", 1, 0)
            testTorus8.set("E", 1, 1)
            testTorus8.set("F", 1, 2)
            testTorus8.shrink(1, 3)
            it("shrink on position: 3, and in dimension index: 1", () => {
                expect(testTorus8.toArray()).toEqual(
                    [
                        ["B", "C"], ["E", "F"]
                    ]
                )
            })

            let testTorus9 = new Torus(2, 3)
            testTorus9.set("A", 0, 0)
            testTorus9.set("B", 0, 1)
            testTorus9.set("C", 0, 2)
            testTorus9.set("D", 1, 0)
            testTorus9.set("E", 1, 1)
            testTorus9.set("F", 1, 2)
            testTorus9.shrink(1, -1)
            it("shrink on position: -1, and in dimension index: 1", () => {
                expect(testTorus9.toArray()).toEqual(
                    [
                        ["A", "B"], ["D", "E"]
                    ]
                )
            })

        })

    })

    describe("#3D", () => {
        describe("#Product: 2x2x3", () => {
            let testTorus1 = new Torus(2, 2, 3)
            testTorus1.set("A", 0, 0, 0)
            testTorus1.set("B", 0, 0, 1)
            testTorus1.set("C", 0, 0, 2)
            testTorus1.set("D", 0, 1, 0)
            testTorus1.set("E", 0, 1, 1)
            testTorus1.set("F", 0, 1, 2)
            testTorus1.set("G", 1, 0, 0)
            testTorus1.set("H", 1, 0, 1)
            testTorus1.set("I", 1, 0, 2)
            testTorus1.set("J", 1, 1, 0)
            testTorus1.set("K", 1, 1, 1)
            testTorus1.set("L", 1, 1, 2)
            testTorus1.shrink(0, 0)
            it("shrink on position: 0, and in dimension index: 0", () => {
                expect(testTorus1.toArray()).toEqual(
                    [
                        [
                            ["G", "H", "I"],
                            ["J", "K", "L"]
                        ]
                    ]
                )
            })

            let testTorus2 = new Torus(2, 2, 3)
            testTorus2.set("A", 0, 0, 0)
            testTorus2.set("B", 0, 0, 1)
            testTorus2.set("C", 0, 0, 2)
            testTorus2.set("D", 0, 1, 0)
            testTorus2.set("E", 0, 1, 1)
            testTorus2.set("F", 0, 1, 2)
            testTorus2.set("G", 1, 0, 0)
            testTorus2.set("H", 1, 0, 1)
            testTorus2.set("I", 1, 0, 2)
            testTorus2.set("J", 1, 1, 0)
            testTorus2.set("K", 1, 1, 1)
            testTorus2.set("L", 1, 1, 2)
            testTorus2.shrink(0, 31)
            it("shrink on position: 31, and in dimension index: 0", () => {
                expect(testTorus2.toArray()).toEqual(
                    [
                        [
                            ["A", "B", "C"],
                            ["D", "E", "F"]
                        ]
                    ]
                )
            })

            let testTorus3 = new Torus(2, 2, 3)
            testTorus3.set("A", 0, 0, 0)
            testTorus3.set("B", 0, 0, 1)
            testTorus3.set("C", 0, 0, 2)
            testTorus3.set("D", 0, 1, 0)
            testTorus3.set("E", 0, 1, 1)
            testTorus3.set("F", 0, 1, 2)
            testTorus3.set("G", 1, 0, 0)
            testTorus3.set("H", 1, 0, 1)
            testTorus3.set("I", 1, 0, 2)
            testTorus3.set("J", 1, 1, 0)
            testTorus3.set("K", 1, 1, 1)
            testTorus3.set("L", 1, 1, 2)
            testTorus3.shrink(1, -2)
            it("shrink on position: -2, and in dimension index: 1", () => {
                expect(testTorus3.toArray()).toEqual(
                    [
                        [
                            ["D", "E", "F"],
                        ],
                        [
                            ["J", "K", "L"],
                        ]
                    ]
                )
            })

            let testTorus4 = new Torus(2, 2, 3)
            testTorus4.set("A", 0, 0, 0)
            testTorus4.set("B", 0, 0, 1)
            testTorus4.set("C", 0, 0, 2)
            testTorus4.set("D", 0, 1, 0)
            testTorus4.set("E", 0, 1, 1)
            testTorus4.set("F", 0, 1, 2)
            testTorus4.set("G", 1, 0, 0)
            testTorus4.set("H", 1, 0, 1)
            testTorus4.set("I", 1, 0, 2)
            testTorus4.set("J", 1, 1, 0)
            testTorus4.set("K", 1, 1, 1)
            testTorus4.set("L", 1, 1, 2)
            testTorus4.shrink(1, -17)
            it("shrink on position: -17, and in dimension index: 1", () => {
                expect(testTorus4.toArray()).toEqual(
                    [
                        [
                            ["A", "B", "C"]
                        ],
                        [
                            ["G", "H", "I"]
                        ]
                    ]
                )
            })


            let testTorus5 = new Torus(2, 2, 3)
            testTorus5.set("A", 0, 0, 0)
            testTorus5.set("B", 0, 0, 1)
            testTorus5.set("C", 0, 0, 2)
            testTorus5.set("D", 0, 1, 0)
            testTorus5.set("E", 0, 1, 1)
            testTorus5.set("F", 0, 1, 2)
            testTorus5.set("G", 1, 0, 0)
            testTorus5.set("H", 1, 0, 1)
            testTorus5.set("I", 1, 0, 2)
            testTorus5.set("J", 1, 1, 0)
            testTorus5.set("K", 1, 1, 1)
            testTorus5.set("L", 1, 1, 2)
            testTorus5.shrink(2, 100)
            it("shrink on position: 100, and in dimension index: 2", () => {
                expect(testTorus5.toArray()).toEqual(
                    [
                        [
                            ["A", "C"],
                            ["D", "F"],
                        ],
                        [
                            ["G", "I"],
                            ["J", "L"],
                        ]
                    ]
                )
            })

            let testTorus6 = new Torus(2, 2, 3)
            testTorus6.set("A", 0, 0, 0)
            testTorus6.set("B", 0, 0, 1)
            testTorus6.set("C", 0, 0, 2)
            testTorus6.set("D", 0, 1, 0)
            testTorus6.set("E", 0, 1, 1)
            testTorus6.set("F", 0, 1, 2)
            testTorus6.set("G", 1, 0, 0)
            testTorus6.set("H", 1, 0, 1)
            testTorus6.set("I", 1, 0, 2)
            testTorus6.set("J", 1, 1, 0)
            testTorus6.set("K", 1, 1, 1)
            testTorus6.set("L", 1, 1, 2)
            testTorus6.shrink(2, -4)
            it("shrink on position: -4, and in dimension index: 2", () => {
                expect(testTorus6.toArray()).toEqual(
                    [
                        [
                            ["A", "B"],
                            ["D", "E"],
                        ],
                        [
                            ["G", "H"],
                            ["J", "K"],
                        ]
                    ]
                )
            })
        })
    })
})