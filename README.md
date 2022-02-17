# gitFinder

gitFinder is a web application to search GitHub users and show information about the selected user.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to and development challenge :

### User

- View the optimal layout depending on their device's .screen size (desktop, Tablet and Mobile).
- View light and dark theme.
- Interact with the site and input the specific username.

### Development

- Understand and apply the GitHub API.
- Catch errors and display to the user.
- Deploy a local server using node.js with express.
- Program 2 theme for the web app (dark and light).
- Manipulate the DOM.

### Screenshot

![screenshot of the website](/public/images/READMEPhoto.jpg)

### Links

- Live Site URL: [Click to See the Site](https://gitfinderapp.herokuapp.com/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox and Grid
- Vanilla JavaScript
- nodeJs - express, body-parser
- GitHub API
- Mobile-first workflow

### What I learned

the project was very insightful for me i've learned:

- how to work with nodeJS for backend
- how to work with local server (express)
- work with color pallette.
- how to program light and dark theme switch
- The fetch function

```JavaScript
searchBtnGrabber.addEventListener('click',() => {
    let url =  `https://api.github.com/users/${searchValue}`; 
    getData(url);

})
```

```JavaScript
async function getData(url){
    const res = await fetch(url);
    const data = await res.json();
}
```

```SCSS
$lightModeVividBlue: #0079ff;
$lightModeGray: #697c9a;
$lightModeDarkBlue: #4b6a9b;
$lightModeBlack: #2b3442;
$lightModeLightGray: #f6f8ff;
$lightModeWhite: #fefefe;

```

### Continued development

I will continue to focus on:

- more organized code and clean code.
- deeper understanding of nodeJS and server side.
- deeper understanding of front end subjects like SCSS and JavaScript.
- explore new projects,concepts and libraries.

### Useful resources

- [https://sass-lang.com/](https://sass-lang.com/) - this site help me understand the Scss semantics
- [https://www.w3schools.com/](https://www.w3schools.com/) - this site is my defult site to aquire knowlage about html, css and javascript
- [https://developer.mozilla.org/en-US/](https://developer.mozilla.org/en-US/) - this site if amazing if i and to take a deeper dive to understand properties bout html, css and javascript

## Author

- Website - [Ori Guy](https://github.com/origuy)
