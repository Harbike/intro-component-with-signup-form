# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty.
  - The email address is not formatted correctly.

### Screenshot

![mobile-view](./images/Sign%20up%20form-mobileView.png)
![desktop-view](./images/Sign%20up%20form-desktopView.png)

### Links

- Live Site URL: [GitHub Pages](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

```css
span.break::after{
    content: '\a';
    white-space: pre;
}
```
```js
function verifyAll(event){
    event.preventDefault();

    for(i=0; i < userResponse.length; i++){
        if(userResponse[i].value){
            result.push(userResponse[i].value);
            console.log(result);
        }
        else if(userResponse[i].value === '' || userResponse[i].value === null){
            //alert user to input field
            alert('Kindly complete the form');
            //stop submission
            return false;
        }
    }
    return true;
}
```
