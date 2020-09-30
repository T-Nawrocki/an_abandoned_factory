# An Abandoned Factory

An Abandoned Factory is an incremental game with minor horror elements, inspired by Universal Paperclips and the SCP universe, which was initially developed over five days as my final project for the CodeClan Professional Software Development Course. The game is currently a prototype, but additional features and gameplay are planned (see below). The game is built in React with SCSS styles. An Express/MongoDB back-end for save games is currently in development but not yet fully implemented.

Like many other incremental games, An Abandoned Factory begins with minimal interaction—after an introductory sequence, the player has a single button to press which rewards a resource (Parts). As the player gathers this resource, they quickly unlock the ability to buy autoclickers which collect the resource for them, and from this point the game is about resource management and upgrade paths. The game is completed by purchasing upgrades which lead the player through the story of the game.

---

## Prerequisites

Install Node.js and MongoDB with Homebrew:

```
brew install node
brew install mongodb-community
```

---

## Running the App

### Client

Navigate to the `client` directory and then:

```
npm install
npm start
```

The client runs on `localhost:3000`.

### Server

Not yet implemented.

---

## Learning Points/Key Features

An Abandoned Factory was developed initially as my final project on conclusion of the CodeClan Professional Software Development course. It was therefore intended to be a representation of my learning on the course, but also provided an opportunity to explore beyond the course material in a few areas. As such, this project was (and continues to be) a fantastic learning experience. Key learning points and features I'm proud of include:

* the use of hooks in place of class components in React;

* using SCSS for styling;

* exponential cost scaling for upgrades;

* the typewriter effect on the story display monitor; and

* handling multiple timers and asynchronous behaviours.

---

## Planned Features/Additions

I intend to continue developing this game for some time. In addition to padding out and rebalancing the gameplay to be a longer and more engaging experience, I am planning the following changes/additions:

* refactoring the game to use Redux for global state management;

* autosave to a MongoDB database at regular intervals;

* multiple save slots with a selection modal when the game first loads up;

* additional resource types and autoclicker trees to make resource management more difficult;

* upgrade paths which can affect existing gameplay (eg upgrades to increase the gametick speed, or increase efficiency of owned autoclickers); 

* upgrades which unlock elements of the UI (eg a graph of resource production over time); and

* improved styling and visual effects.
