

/**
 * 
 * @returns {String} name.
 */
export function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
  }
  
  let user = makeUser();
  
 alert(user.ref().name );


  //Solution for Calculator

  let calculator = {
    setValues: function() {
      this.a = Number(prompt("Enter the first value:"));
      this.b = Number(prompt("Enter the second value:"));
    },
    
    sum: function() {
      return this.a + this.b;
    },
    
    mul: function() {
      return this.a * this.b;
    }
  };
  
  calculator.setValues(); // Prompts for values of a and b
  alert( calculator.sum() ); // Returns the sum of a and b
  alert( calculator.mul() ); // Returns the multiplication of a and b
