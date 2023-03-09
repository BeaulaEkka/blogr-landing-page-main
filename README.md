# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./myscreenshots/Animation.gif)
![](./myscreenshots/Screen%20Shot%20desktop.png)
![](./myscreenshots/Screen%20Shot%20mobile.png)

### Links

- Solution URL: [www.blogr.com](https://beaulaekkablogrpublishingwebsite.netlify.app/)
- Live Site URL: [www.blogr.com](https://beaulaekkablogrpublishingwebsite.netlify.app/)

## My process

### Built with

- Responsive Principles
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- clamp()
- toggle()
- background Images
- background gradients
- min(max(x,y)z)
- Mobile-first workflow
- Javascript toggle
- querySelectorAll
- querySelector
- forEach()

### What I learned

I really enjoyed this challenge. It has brushed up my CSS selector, responsive workframes, background image set ups and javasctipt DOM.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.hero {
  background-image: url(/images/bg-pattern-intro-mobile.svg), linear-gradient(var(--Very-light-red), var(--Light-red));
  object-fit: cover;
  background-position: 35% 35%;
  background-repeat: no-repeat;
  width: 100%;
  padding: 2rem;
  border-bottom-left-radius: 6.5rem;
}
p {
  font-family: "overpass", sans-serif;
  font-size: 1rem;
  font-size: clamp(1rem, 0.636rem + 1.553vw, 2.5rem);
}
```

```js
const navMenuConnect = document.querySelector(".nav-menu-connect");
const navSubMenuConnect = document.querySelectorAll(".nav-submenu-connect");
const faNavMenuConnect = document.querySelector("#fa-nav-menu-connect");

navMenuConnect.addEventListener("click", () => {
  for (const subMenuconnect of navSubMenuConnect) {
    subMenuconnect.classList.toggle("hide");
  }
  faNavMenuConnect.classList.toggle("turn");
});
```

### Continued development

I will be working with Javasctipt extensively.

### Useful resources

- [clamp Calculator](https://www.marcbacon.com/tools/clamp-calculator/) - This helped me calculate the font size with the use of clamp. I think its a life saver !
- [Fluid Responsive Design](https://utopia.fyi/space/calculator?c=320,18,1.2,1240,20,1.25,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l&g=s,l,xl,12)-This website not only offers clamp calculations for font, but for everything- space, width grid etc.

## Author

- Linkedin - [Beaula Ekka-linkedin](https://www.linkedin.com/in/beaula-ekka-favejee-97316558/)
- Frontend Mentor - [@BeaulaEkka](https://www.frontendmentor.io/profile/BeaulaEkka)
