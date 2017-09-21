# Frogger!!


## Introduction

This a clone of the classinc arcade game frogger, developed as a part of the Front-End 
Nanodegree program by Udacity.


## Instructions

The player has to cross the road successfully without colliding with the oncoming bugs. 
Use the arrow keys to navigate the player through the canvas without hitting the horizontally 
moving bugs. 
We **do not** like bugs.

  ### GameRules:
     *A _successful_ move is made when the player crosses over to the water *without* hitting 
     any of the bugs. If the player does manage to make a successful cross the player _scores_ a point.
     
     *5 points and the player wins the game.
     
     *Collision with the bugs will cause the player to start over at the initial position.
     *The player will also start at the initial position after making a successful move, to start
     his/her next move.
     
     * Collision with a bug will cause the player to lose a point. That's right, _negative marking_.
     
     
  ### Player Instructions:
     *Use the arrow keys to move the player avatar around the canvas.
     *Have Fun.
     

## Technical Specifications:

   #### App.js
      *Contains the main logic behind the collison detection, player/enemy movements.
      
   #### Engine.js
      *This file provides the game loop functionality (update entities and render),
         draws the initial game board on the screen, and then calls the update and
         render methods on your player and enemy objects (defined in app.js).
 
      *A game engine works by drawing the entire game screen over and over, kind of
        like a flipbook you may have created as a kid. When your player moves across
        the screen, it may look like just that image/character is moving or being
        drawn but that is not the case. What's really happening is the entire "scene"
        is being drawn over and over, presenting the illusion of animation.

      * This engine makes the canvas' context (ctx) object globally available to make 
        writing app.js a little simpler to work with.
        
   #### Resources.js
      *This is simply an image loading utility. It eases the process of loading
        image files so that they can be used within the game. It also includes
        a simple "caching" layer so it will reuse cached images they are loaded 
        multiple times.
          
    
 # Enjoy!
