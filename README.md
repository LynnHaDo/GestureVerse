<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


<!-- PROJECT LOGO -->
<br />
<div align="center">

<img align="center" src="logo.png" width="40px"/>

<h3 align="center">GestureVerse</h3>

<p align="center">Choose-your-own-adventure Game using Hand Gesture Classification and Detection</p>

  <p align="center">
    <br />
    <a href="https://drive.google.com/file/d/1F3Nh6uCjEazwcf4wDj3azgG2ffsYEzAq/view?usp=sharing">View Demo</a>
    ·
    <a href="https://github.com/LynnHaDo/Storytelling/issues">Report Bug</a>
    ·
    <a href="https://github.com/LynnHaDo/Storytelling/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#wireframes">Wireframes</a>
    </li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#works-cited">Works Cited</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## Disclaimer

I do not own the stories included in this project--this is the gesture-driven version of the original Twine/hyperlink-based stories. The sources for the original stories are included in the reference section at the end of the stories. 

<!-- UPDATES -->
## Wireframes

Link to the [wireframes](https://www.figma.com/design/YQvqcC4Nai3QUIconlEFeb/Storytelling?node-id=0-1&t=OQhAFbBnOXiOuGFn-1) for the website.

<!-- ABOUT THE PROJECT -->
## About The Project

This is Next.js application that guides users through a choose-your-own-adventure game using Windrift. During the game, instead of inputting text or clicking on buttons to proceed like usual, users can interact using hand movements through the devices’ web camera to answer questions prompted on the screen. For example, a thumbs-up gesture would mean “yes”, and a thumbs-down gesture would mean “no”. Handedness (i.e. left or right hand) can also be used to provide input to questions, depending on the story chosen.

Included in this project are 2 stories: <em>a beach walk</em> and <em>procrastinate</em>. Two stories are rather text-based (though <em>a beach walk</em> includes more visual materials than the other). 

Through this project, I also want to introduce additional advanced features compared to the original Windrift JS framework:

- [x] `ChoiceBlock` component that involves making choice based on user's gesture
    - [x] Navigate based on Google MediaPipe model's classification classes (gestures are accepted only if the prediction confidence score is > 0.6):
        - "None": "No action", 
        - "Closed_Fist": "Close your fist ✊", 
        - "Open_Palm": "Show your palm 🖐️", 
        - "Pointing_Up": "Point your (index) finger upwards ☝️", 
        - "Thumb_Down": "Put your thumb down 👎", 
        - "Thumb_Up": "Put your thumb up 👍", 
        - "Victory": "Make a V sign ✌️", 
        - "ILoveYou": "Do the I Love You sign 🤟 (you can try doing 🫶 to see what happens)"
    - [x] Navigate based on handedness
    - [x] Display category, confidence score, and handedness in real-time
    - [x] Adjust the number of hands the model can predict for.

- [x] Additional configuration to the original `Choice`, `Nav` classes to allow custom handling, add custom styling, ...

- [x] A variable management system that allows keeping track of variables within the story. 
    - [x] Score keeping feature
    - [x] Update/access the variables any time during the story


<p align="right">(<a href="#top">back to top</a>)</p>

### Progress

- [x] Wireframes
- [x] Set up game in Windrift
- [x] Integrate MediaPipe
    - [x] Set up MediaPipe component to listen to events of the story
    - [x] Refactor instructions and camera into a component (called game block)
    - [x] Set up game blocks to listen to each other
    - [x] Enhance the UI
        - [x] Add animations 
        - [x] Add gradient background config setup
- [x] Finish story (edit UI, texts, citations, ...)
    - [x] A beach walk (View [demo](https://drive.google.com/file/d/1F3Nh6uCjEazwcf4wDj3azgG2ffsYEzAq/view?usp=sharing))
    - [x] Procrastinate (View [demo](https://drive.google.com/file/d/1sSbgktSOBnkgGuw0SVtz1korQ8Cks_9z/view?usp=sharing))
    - [x] Congee (View [demo](https://drive.google.com/file/d/1CjH5T0aX4iGS7d_ALgiiTBas0e3XNX94/view?usp=sharing))
- [x] Add background music widget

See the [open issues](https://github.com/LynnHaDo/Storytelling/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [NodeJS](https://nodejs.org/en)
- [React v18.3.1](https://react.dev/reference/react)
- [MediaPipe (Tasks-vision: v0.10.14)](https://ai.google.dev/edge/mediapipe/solutions/guide)
    - [Gesture Recognition](https://ai.google.dev/edge/mediapipe/solutions/vision/gesture_recognizer/web_js)
    - [Hand landmark detection](https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker/web_js)
- [Next.js v13.5.6](https://nextjs.org/)
- [React Bootstrap v2.10.4](https://react-bootstrap.netlify.app/)
- [Ionic React v8.2.6](https://ionicframework.com/docs/intro/cdn#ionic--react)

For complete list, please view the package tree in `requirements.txt`.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

### Prerequisites

- Node 18.20.3
- react@18.3.1
- redux@4.2.1
- @mediapipe/tasks-vision@0.10.14
- next@13.5.6
- sass@1.77.7
- bootstrap@5.3.3
- react-bootstrap@2.10.4
- @ionic/react@8.2.6
- @ionic/react-router@8.2.6

For complete list, please view the package tree in `requirements.txt`.

<p align="right">(<a href="#top">back to top</a>)</p>

### Installation

1. Clone the repo

```
git clone https://github.com/LynnHaDo/GestureVerse.git
```

According to the [Windrift repo](https://github.com/lizadaly/windrift?tab=readme-ov-file):

2. Install a fully-compaticble version of Node:

```
nvm install 18
nvm use 18
```

3. Install packages

```
npm install
```

4. Run the local development environment

```
npm run dev
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Works cited -->
## Works cited

1. interstellar-bird (n.d.). Beach Walk by interstellar-bird. [online] itch.io. Available at: https://interstellar-bird.itch.io/beach-walk [Accessed 16 Jul. 2024].
2. j-mo (2024). Procrastinate. [online] itch.io. Available at: https://j-mo.itch.io/procrastinate [Accessed 6 Aug. 2024].
3. Becci (2020). Congee. [online] itch.io. Available at: https://becciness.itch.io/congee [Accessed 12 Aug. 2024]. 

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Contact -->
## Contact

Email: <a href="mailto:do24l@mtholyoke.edu">do24l@mtholyoke.edu</a>



