<h1 align="center">Keyboard - Eyes on the Screen</h1>

<div align="center">
 <a href="https://ivandefender.github.io/Eyes-on-the-Screen/">View Project |</a>
 <a href="https://github.com/Ivandefender/Eyes-on-the-Screen">View Code</a>
</div>

<p align="center">
<img src="https://img.shields.io/badge/HTML-orange?style=for-the-badge&logo=html&logoColor=orange">
<img src="https://img.shields.io/badge/css-blue?style=for-the-badge&logo=css&logoColor=blue">
<img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=JavaScript&logoColor=yellow&labelColor=black">
</p>

### **This project improves typing skills without looking at the keyboard**

## Site structure:

### HTML:

`Index.html` is a page with container tags for buttons.

### CSS:

`Style.css` is a style file that is applied to the page.

### JavaScript:

`Script.js` - a file in which the logic of switching a key to another after pressing it on a real keyboard

Selection of a random key on the page

```javascript
const setRandomKey = ()=>{
 if(currentKey){
 keyToBtnMap[currentKey].classList.remove('jiggle');
 }
 const randomIndex = Math.floor(Math.random()*keys.length);
 currentKey = keys[randomIndex];
 keyToBtnMap[currentKey].classList.add('jiggle');
}
```

The jiggle class and its animation

```css
.jiggle{
 animation: jiggle 1s;
 animation-iteration-count: infinite;
 background-color: rgb(96, 199, 247);
 color: #fff;
}

@keyframes jiggle{
 0%{transform: translate(1px, 1px) rotate(0deg);}
 10%{transform: translate(-1px, -2px) rotate(-1deg);}
 20%{transform: translate(-3px, 0px) rotate(1deg);}
 30%{transform: translate(3px, 2px) rotate(0deg);}
 40%{transform: translate(1px, -1px) rotate(1deg);}
 50%{transform: translate(-1px, 2px) rotate(-1deg);}
 60%{transform: translate(-3px, 1px) rotate(0deg);}
 70%{transform: translate(3px, 1px) rotate(-1deg);}
 80%{transform: translate(-1px, -1px) rotate(1deg);}
 90%{transform: translate(1px, 2px) rotate(0deg);}
 100%{transform: translate(1px, -2px) rotate(-1deg);}
}
```

### Developed by: [Ivan Krysak (github: Ivandefender)](https://github.com/Ivandefender);
