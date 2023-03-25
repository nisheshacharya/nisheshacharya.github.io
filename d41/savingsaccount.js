/**
 * A Savings Account class that extends Account
 *
 * Provides additional functionality for savings accounts
 */
export class SavingsAccount extends Account {
    /**
     * Constructor for creating a new SavingsAccount object
     *
     * @param {number} number the number for this account
     * @param {number} interest the interest rate for this account
     */
    constructor(number, interest) {
      super(number);
      this._interest = interest;
    }
  
    /**
     * Getter for the 'private' interest field
     *
     * @returns {number} the interest rate for this account
     */
    getInterest() {
      return this._interest;
    }
  
    /**
     * Setter for the 'private' interest field
     *
     * @param {number} interest the new interest rate for this account
     * @throws {RangeError} when interest is less than or equal to zero
     */
    setInterest(interest) {
      if (interest <= 0) {
        throw new RangeError('Interest rate has to be greater than zero');
      }
      this
  