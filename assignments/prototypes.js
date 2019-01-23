/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject (attr){
  this.createdAt = attr.createdAt;
  this.dimensions = attr.dimensions;
};

GameObject.prototype.destroy = function(){
    return Object `Object was removed from the game.`
  }

/*
  === CharacterStats ===
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(statAttr){
  this.healthPoints = statAttr.healthPoints;
  this.name = statAttr.name;
  GameObject.call(this, statAttr);
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`
}


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
function Humanoid (humanAttr){
this.team = humanAttr.team;
this.weapons = humanAttr.weapons;
this.language = humanAttr.language;
CharacterStats.call(this, humanAttr);
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.gone = function(){
  return `${this.name} died due to unforseen tragic circumstances.`
}

Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}`;
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  // const mage = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 1,
  //     height: 1,
  //   },
  //   healthPoints: 5,
  //   name: 'Bruce',
  //   team: 'Mage Guild',
  //   weapons: [
  //     'Staff of Shamalama',
  //   ],
  //   language: 'Common Tongue',
  // });

  // const swordsman = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 2,
  //     height: 2,
  //   },
  //   healthPoints: 15,
  //   name: 'Sir Mustachio',
  //   team: 'The Round Table',
  //   weapons: [
  //     'Giant Sword',
  //     'Shield',
  //   ],
  //   language: 'Common Tongue',
  // });

  // const archer = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 1,
  //     width: 2,
  //     height: 4,
  //   },
  //   healthPoints: 10,
  //   name: 'Lilith',
  //   team: 'Forest Kingdom',
  //   weapons: [
  //     'Bow',
  //     'Dagger',
  //   ],
  //   language: 'Elvish',
  // });

  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  function Villain (villAttr){
    this.status = villAttr.status;
    this.damage = villAttr.damage;
    Humanoid.call(this,villAttr);
  }
  
  Villain.prototype = Object.create(Humanoid.prototype);
  
  Villain.prototype.deceive = function(victim){
    victim.healthPoints = victim.healthPoints - victim.healthPoints;
    return `I am the Jesus you are looking for. *victims of deceive follow fake Jesus into martyrdom.*\\n Soon after ${victim.gone()}`
  }

  const fakeJesus  = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 5,
      width: 5,
      height: 10,
    },
    healthPoints: 9001,
    name: 'Fake Jesus',
    team: 'The Apostles',
    weapons: [
      'Words of Deceit',
    ],
    language: 'omnilingual',
    status: 'Drunk with wine',
    damage: 9001,
  });



//HERO CONSTRUCTOR AND OBJECT

function Hero (heroAttr){
  this.justiceSpeech = heroAttr.justiceSpeeech
  this.damage = heroAttr.damage;
  Humanoid.call(this,heroAttr );
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.charge = function(){
  return `${this.name} is too lazy to fight right now. Try again later.`
}



  const wannabe  = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 5,
      height: 2,
    },
    healthPoints: 1,
    name: 'Jim',
    team: 'Solo Player',
    weapons: [
      'fists',
    ],
    language: 'Sign Language',
    justiceSpeech: 'Justice is good, not-Justice is bad.',
    damage: 9000,
  });


Humanoid.prototype.hurts = function(victim, attacker){
  victim.healthPoints = victim.healthPoints - attacker.damage;
  if(victim === fakeJesus){
    return fakeJesus.deceive(attacker);
  }
  else if (victim.healthPoints <= 0) {
    return victim.gone()
  } else if (
    victim.healthPoints > 0){
  return `${victim.name} stumbles in pain taking ${attacker.damage} damage.`;
}

}

console.log(wannabe.hurts(fakeJesus, wannabe));
console.log(fakeJesus.deceive(wannabe));
console.log(fakeJesus.hurts(wannabe, fakeJesus))