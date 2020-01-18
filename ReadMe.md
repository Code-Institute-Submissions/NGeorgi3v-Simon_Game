<h1 align="center">
Interactive Frontend - Milestone Project 2 -Simon Game
</h1>

<h1 align="center">

![alt text](https://i.imgur.com/mRVxwVx.png "Mockup")

</h1>


<div align="center"> 

[Simon Game](https://en.wikipedia.org/wiki/Simon_(game)) is a very popular memory game dating back as far as 1978. It's a game fit for all ages
to test memory and skill. This particular game features a strict option to make the game more challenging yet rewarding and a winning feature is also included
to give the player a goal to achieve. In addition to friendly colours & sounds. You will have many hours of fun playing!
<br><br>
[**Live demo on the Simon game here!**](https://ngeorgi3v.github.io/Simon_Game/)

</div>


## Contents Table

1. [**UX**](#ux)
    - [**Project Purpose**](#project-purpose)
    - [**Player Experience**](#player-experience)
    - [**User Stories**](#user-stories)
    - [**Design Ideas**](#design-ideas)
    - [**Wireframes**](#wireframes)
    - [**Developer and Business Purpose**](#developer-and-business-purpose)

2. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features Left to Implement**](#features-left-to-implement)

3. [**Technologies Used**](#technologies-used)

4. [**Testing**](#testing)

5. [**Deployment**](#deployment)

6. [**Credits**](#credits)
    - [**Contents**](#contents)
    - [**Media**](#media)
    - [**Acknowledgements**](#acknowledgements)

7. [**Disclaimer**](#disclaimer)


## UX

### Project Purpose

The main goal of the Simon game is to provide a fun, challenging yet rewarding experience to users of all ages.

### Player Experience

- Players immediately experience a clear, easy and intuitive feel for the game right away. Simple controls which allow the player to have an easy understanding of how to play the game. 
- Just in case the player feels confused at any point, a 'Game-Info' box has been provided to give an informative description of what features the game has to offer.

- Inviting sounds & bright colours have been added to each pad to give the player a clear distinction between each pad.
Winning & losing features have also been included with modal pop-ups to provide the player with additional challenges and goals to achieve.

- The player has no need for a back button or to reload the page. Easy and informative buttons have been provided at all times to ensure the
the player has an easy way around the game.

### User Stories

- #### As a player, I'd like to see:
    - A professional and strong looking game to draw the player into playing.
    - Simple and easy to use controls to ensure that the game is not difficult to control.
    - Different coloured pads which have a different sound for each pad as a clear distinction between each pad.
    - An information window showing clear information about how the game is played to avoid confusion.
    - A sense of achievement and a goal to strive for whilst playing the game.
    - Professional sounds which give a nice feel to their specific purpose.
    - Different settings of play so the player can play to a level they are comfortable with.

### Design Ideas

The design of the game is intended to replicate the original 1978 Simon Game with a slightly modernized touch to it.

- #### Fonts

    - The font [Ubuntu](https://fonts.google.com/specimen/Ubuntu)  was chosen as the primary font of the application.

- #### Colours

    - **Main Heading and Footer -** A white font was chosen to contrast nicely with the background of the webpage.
    A dark grey background colour was chosen to indicate the header & footer fields, and there is opacity of 85% on the footer simply for esthetic purposes.

    - **Game controls-** A light black color was choosen for the game controls background to contrast with the background of the application and make them pop-out.

    - **Start button-** Bright green in order to match the original start game button color.

    - **Score text-** Light blue so some sort of conception is being maintained in the application.

    - **Game pads-** As the original game follows the colors are green, red, yellow and blue with slight modifications.
    

- #### Styling

    Styles have been incorporated to give the game as much of a 'real life' experience as possible. `box-shadow`'s
    have been included to provide a professional and innovative look as well as keeping to the original design of the game. 
    `cursor`'s have been added to each active clickable item for a better indication of where & when you can click.
    
    **Special styles include:**
    
    - **Poping pads -** Poping pads have been designed to show the user the game sequence visually, with the use of
    CSS trasformations provided from Animate.css , the effect has been achieved.
    
    
    - **Strict Slider** The strict slider's original state was a checkbox, the use of a `checkbox`, however, didn't look very appealing. After the help of a w3schools article the effect was achieved.
    [How the effect was achieved!](https://www.w3schools.com/howto/howto_css_switch.asp).
    
    - **Buttons -** All buttons are styled to slightly darken up in color when each of them is clicked. 

    - **Game shake-** The whole game element shakes whenever the user makes a mistake in the sequence. It's achieved thanks to animate.css
    
- #### Backgrounds

    All background images have been requested by the developer and been granted permission to use them for educational purposes.
 
    - The main background of the Simon board game is an image of a sequence of kids bricks in order to match with the conception of the application.

    - A 'Monopolly' game image is being used for the 'Game info' modal of the application.
    
    - A Celebratory background has been applied to the 'Win' modal to give a nice sense of achievement and reward.
    
### Wireframes

   Wireframes were made using Photoshop CS6 for a clean looking design layout.

   - Mobile version: [link to image](https://github.com/NGeorgi3v/Simon_Game/blob/master/user%20design%20experience/Skeleton%20plane/PSD_Template_mobile.jpg) or [link to the Photoshop project](https://drive.google.com/drive/folders/1MwpkeH3jEGBeL0KSm7GLwthJ386-sIwO)
   - Dekstop version: [link to image](https://github.com/NGeorgi3v/Simon_Game/blob/master/user%20design%20experience/Skeleton%20plane/PSD_Template.jpg) or [link to the Photoshop project](https://drive.google.com/drive/folders/1MwpkeH3jEGBeL0KSm7GLwthJ386-sIwO)
   - **Please note that the designs shown are just for demonstration and might not match exactly the actual look of the website!**
    



## Features

### Existing Features

1. #### Dashboard 

    - When you arrive at the page for the very first time, you will be presented with a header, footer, a 'Game-Info'
    button & the Simon Board. 
    
    - Each of the coloured pads will not be active at first and if you click them, they will not do anything.
    
    - The number display will show a '0' . It has been programmed
    to show '0' every time a new game is started.
    
    - Strict mode will have a default setting of being 'unactive' until the user desides to turn in on.
    
2. #### Coloured Pads 

    - The coloured pads are the paramount components of the board. This is where you interact with the game being played.
    
    - When you start a game, you will get an animation of one of the coloured pads with a different sound generated for each of the pads. When the sequence has finished being generated by the computer,
    it will then become 'active' for the player to click each pad in the correct order.
    
    - You will not be able to click on the pads whilst the computer sequence is running, when a game is not being played or when you win or lose the game. 
    The game has been carefully programmed to be active and not active at relevant points in the game.  
    
3. #### 'Game-Info' Modal

    - When you click on the 'Game-Info' button, you're presented with a modal with information about how the game is played.
     The Game-Info modal has been implemented
    to ensure that the user is not at all confused with how to play the game.
    
        **The sections:**
        
        - **Objectives** - To give a description of how the game is played and to inform the user of the goal.
        - **Rules** - To inform the user of how they can win the game. This has been provided in case the user is confused about how they can achieve a win.
        - **Buttons** - The 'Buttons' section is added to give a full understanding of how each button works & uses for the buttons.

4. #### Lose Modal

    - When a sequence is wrong in strict mode, a 'Lose' modal will appear with your score showing that it's 'Game Over!'.
    
5. #### Win Modal

    - When you get 20 sequences correct in strict mode without making a single mistake, there will be a win modal which will appear with a
    celebratory image.
    
6. #### Start Button

    - When 'Start' is clicked, the game begins & the computer will begin its first sequence for the player to follow.
    every time that the button is pressed, it will begin a brand new sequence.
    
7. #### Strict Slider

    - The 'Strict' slider has been included to add different options of playing. When strict mode is active (blue), 
    if at anytime the player get a sequence wrong, it will be game over. If strict mode is not active (grey), the 
    player will be able to repeat a sequence over & over until they manage to get it right, strict mode not being 
    active will not be limited and the player can play for however long he likes. However, the player will not have 
    the option to win unless strict mode is active.
    
    - If strict mode is not active and the player clicks it to become active. Any games that were being played
    will be lost and the game will begin at '0' again.
    
    - Strict mode has been implemented into the game for those with different levels of capabilities.
    
8. #### Score label

    - When the page is loaded, the number display will display '0'. With each sequence followed correctly
    the number display will increment by 1. The number display will show the number of sequences guessed correctly, not which level
    the player is currently on.

### Features Left to Implement

1. #### Limitless Strict mode

    - An option where the player can stay in strict mode and not be limited to 20 moves until they win. 
    It would carry on playing until the player loses. This would allow the player to really test themselves to 
    see how far they would be able to go in strict mode.

2. #### Player Data Storage and High Score Modal

    - An option where a player can enter their name and it will be stored in data as their username.
    
    - A high score modal can be incorporated so that a player can them play against themselves in order to beat 
    their previous score. This will give the players extra goals to beat their previous scores.
    
3. #### Difficulty options

    - A feature where you can select a difficulty, ranging from Beginner, Intermediate & Expert.
    
    - The difficulty will be the speed in which the sequence is generated, Beginner will be slow,
    Intermediate will be medium speed and Expert will be fast. This would then spread out the capability levels 
    of players and give them extra challenges to overcome.

  
## Technologies Used
- HTML 5
- CSS 3
- Javascript ( ES6 )
- BOOTSTRAP 4
- Google Fonts
- Git
- Github
- Google Chrome developer tools
- Visual Studio Code
- Photoshop CS6
    - Designing both the mobile and the desktop version of the website.


## Testing
### UX
Fulfil what users need:
   - Able to deside whether they want to play in strict mode or not.
   - Able to win or lose the game while in strict mode.
   - Able to switch between game modes at any given time.
   - Able to check how the game should be play thanks to 'Game information' section.
   - Able to try and replicate the sequence as many times as he wants while not in 'strict' mode.
   - Able to hear each sound attached to the buttons.
   - Able to start a brand new game at any given time.
   - Able to play the game on almost every device
   <br/>
    **Disclaimer!** Please note that all the test are done manually by the developer, since non of the JS functions are returning results back therefore no need for testing framework was needed!

### Code
This site was checked with W3C HTML and CSS validators, no issues were found in any of them.

### Browsers and devices
This site was tested across diffrent browsers and on different devices to ensure that its responsive and compatible. During testing I noticed that the font-sizes of the text and the size of some of the images has to changed to be seen better from the users, also a few of the elements were resized in order for them to look better.

Devices:
- Chrome / Android 7 / Huawei P8 Lite
- Chrome / Android 7 / Sony Xperia XA
- Safari / iOS 12 / iPhone SE
- Safari / iOS 12 / iPhone 6s Plus
- Safari / iOS 12 / iPhone XS
- Safari / iOS 12 / iPad Air 2
- Opera / iOS 12 / MacBook Pro
- Firefox / Windows 10 / MSI Notebook
- Edge / Windows 10 / Dell Notebook
- Safari / macOS Mojave / iMac

## Deployment

The project was built using [Visual Studio Code](https://code.visualstudio.com/), through a built-in function called 'Source Control', I could commit the project & push it up to [GitHub](https://github.com/).


## Credits

### Contents

- All Content has been thought of and written by the Developer. 

### Media

- #### Images
    - The Main background image for the webpage, 'Game-Info' modal & 'Lose' was taken from [**Google images**](https://images.google.com/).

- #### Sounds
    
    - Sounds include 4 pad sounds. The sounds are all taken from a [**freeCodeCamp**](https://www.freecodecamp.org/) Simon game tutorial.

### Acknowledgements

Any code written in this application is written by the developer, ideas were taken from a variety of youtube videos, but none were copied in no way.

## Disclaimer

All content on the website, including images, are used for educational purposes only.