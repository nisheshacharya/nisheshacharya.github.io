/*
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}
let user = makeUser();
alert( user.ref.name );
*/

//Corrected: 

/**
 * 
 * @returns {String} name.
 */
function makeUser() {
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
    read: function() {
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
  
  calculator.read(); // Prompts for values of a and b
  alert( calculator.sum() ); // Returns the sum of a and b
  alert( calculator.mul() ); // Returns the multiplication of a and b


/*
Chaining ladder
*/  

  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
  
  ladder.up().up().down().showStep().down().showStep();

  

