

/**
 * A Bank Account class
 * 
 * Provides the basic functionality that every account should have
 */
export class Account {
    #balance;
    #number;

    /**
     * Constructor for creating a new Account object
     * 
     * @param {number} number the number for this account
     */
    constructor(number) {
        this.#number = number; // the account number
        this.#balance = 0.0;
    }
    /**
     * Getter for the 'private' number field
     * 
     * @returns {number} the account number
     */
    getNumber() {
        return this.#number;
    }
    setNumber(accNum){
        this.#number=accNum;
    }

    /**
     * Accessor for the 'private' balance field
     * 
     * @returns {number} balance for this account
     */
    getBalance() {
        return this.#balance;
    }

    setBalance(amount){
        return this.#balance+=amount;
    }
    /**
     * Method to add money into the account
     * 
     * @param {number} amount money to be deposited into the account 
     * @returns {undefined}
     * @throws {RangeError} when amount is less than or equal to zero
     */
    deposit(amount) {
        if (amount <= 0) {
            throw new RangeError("Deposit amount has to be greater than zero");
        }
        this.#balance += amount;
    }
    getDeposit(){
        return this.deposit;
    }
    /**
     * Method to take money out of the account
     * 
     * @param {number} amount money to be taken out of the account
     * @returns {undefined}
     * @throws {RangeError} when amount is less than or equal to zero
     * @throws {Error} when the account has insufficient funds (balance)
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this.#balance) {
            throw Error("Insufficient funds");
        }
        this.#balance -= amount;
    }
    setBalance(amount) {
        this.#balance = amount;
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Account " + this.#number + ": balance " + this.#balance;
    }

    /**
     * Performs needed actions at the end of the month
     * 
     * @returns {undefined}
     */
    endOfMonth() {
        return ""; // does nothing
    }

}