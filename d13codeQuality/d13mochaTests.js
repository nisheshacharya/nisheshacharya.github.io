"use strict";
import assert from "node:assert/strict";
import computeSalesCommission from "./SalesCommission.js";
import compoundInterest from "./compoundInterest.js";
import { getSum } from "./SumAndProductOfNumbers.js";
import { getProduct } from "./SumAndProductOfNumbers.js";


describe("test of ComputSalesCommission", function () {
    it("tests salaried and 200 sales", function () { assert.strictEqual(computeSalesCommission(true, 200), 0); });
    it("tests not salaried and 200 sales", function () { assert.strictEqual(computeSalesCommission(false, 200), 0); });
    it("tests salaried and 300 sales", function () { assert.strictEqual(computeSalesCommission(true, 300), 3); });
    it("tests not salaried and 300 sales", function () { assert.strictEqual(computeSalesCommission(false, 300), 6); });
    it("tests salaried and 3500 sales", function () { assert.strictEqual(computeSalesCommission(true, 3500), 65); });
    it("tests not salaried and 3500 sales", function () { assert.strictEqual(computeSalesCommission(false, 3500), 100); });
});


describe("test of compoundInterest", function () {
    it("tests total balance 110.47", function () { assert.strictEqual(compoundInterest(100, 10, 1), 110.47); });
    it("tests total balance 16470.09", function () { assert.strictEqual(compoundInterest(10000, 5, 10), 16470.09); });
});

describe("test of sumOfNumbers", function () {
    it("tests if sum of numbers is 6", function () { assert.strictEqual(getSum(123), 6); });
});
describe("test of productOfNumbers", function () {
    it("tests if product of numbers is 6", function () { assert.strictEqual(getProduct(123), 6); }); 
});

