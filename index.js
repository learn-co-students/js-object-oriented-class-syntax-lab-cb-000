// build an ES2015 BoardMember class with the following properties set by the constructor: name, homeState, and training
// add methods to the prototype using the class syntax: veto, approve, doCharity, releasePressStatement, sayHi

class BoardMember {
  constructor (name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }

  veto() {
    return 'No, I must disagree';
  }

  approve() {
    return 'You can do that!';
  }

  doCharity () {
    return "I like to help people.";
  }

  releasePressStatement () {
    return "You will see great things from Scuber.";
  }

  sayHi () {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  }
}


// build an ES2015 Ceo class with the following properties: name, training, and homeState
// use inheritance: a Ceo should have all of the methods that a boardMember has
// the Ceo would have one new method: hireEmployee
class Ceo extends BoardMember {
  hireEmployee () {
    return 'Welcome aboard!';
  }
}
