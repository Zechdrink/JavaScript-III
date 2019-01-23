/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Principle 1: Window Binding - Basically, the "this" keyword by default looks to/ tries to bind to the console.
     This is something we don't want to happen.

* 2. Principle 2: Implicit Binding - When dot notation is used to call a function. The object before the dot is "this.

* 3. Principle 3: Explicit Binding - This happens when the built in methods of call(), apply(), or bind() are used on a 
     function. The "this" context gets explicitly passed through the call sign in these methods.

* 4. Principle 4: New Binding - A constructor function is used(a generic function), that is then used as an outline to 
     create specific instances based on the aforementioned outline. It is basically used to create "common objects."

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowBinding(){
    console.log(this);
}
windowBinding();

// Principle 2

// code example for Implicit Binding

const Punisher = {
    name: 'Frank',
    weapon: 'Everything',
    mood: 'always angry',
    talkMood: function(){
        console.log(`me ${this.name}, me ${this.mood}`);
    }
}
Punisher.talkMood();
// Principle 3

// code example for New Binding

 function Person (attributes) {
    this.name = attributes.name;
    this.phrase = attributes.phrase;
    this.ship = attributes.ship;
    this.crew = attributes.crew;
    this.ability = attributes.ability;
    this.personality = attributes.personality;
    this.attack = function(){
       console.log(`${this.phrase}. ${this.ability}!`);
    }
}

const luffy = new Person ({
    name: 'Luffy',
    phrase: "I'm going to be the King of Pirates",
    ship: "The Sunny",
    crew: "Mostly incapable",
    ability: "Hawk Rifle",
    personality: "annoyingly optimistic",
})

console.log(luffy.name);
console.log(luffy.ship);
luffy.attack();

// Principle 4

// code example for Explicit Binding

const criminal = {
    name: "Hannibal"
}

const skills = ["cooking", "eating","therapeutical advice"];

function introduce(skills1, skills2, skills3){
    console.log(`Hello, I am ${this.name}, I am fantastic at ${skills3} and ${skills2} people!`);
}

introduce.apply(criminal, skills);