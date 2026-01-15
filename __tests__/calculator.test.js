import { divide } from "../src/calculator"
 
describe('Division calculation',() => {
    it("Divide with correct numbers",() => {
        expect(divide(6,2)).toBe(3)
    })

    it("Throw an error if divisible is not a number",() => {
        expect(() => divide('1',2)).toThrow("Both arguments must be numbers")
    })

    it("Throw an error if divider is not a number",() => {
        expect(() => divide(1,"2")).toThrow("Both arguments must be numbers")
    })

    it("Throw an error if divider is NaN",() => {
        expect(() => divide(1,NaN)).toThrow("Arguments cannot be NaN")
    })

    it("Throw an error if divider is zero",() => {
        expect(() => divide(1,0)).toThrow("Division by zero is not allowed")
    })



})