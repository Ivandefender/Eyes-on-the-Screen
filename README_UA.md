<h1 align="center">Keyboard - Eyes on the Screen</h1>

<div align="center">
    <a href="">View Project |</a>
    <a href="">View Code</a>
</div>

<p align="center">
<img src="https://img.shields.io/badge/HTML-orange?style=for-the-badge&logo=html&logoColor=orange">
<img src="https://img.shields.io/badge/css-blue?style=for-the-badge&logo=css&logoColor=blue">
<img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=JavaScript&logoColor=yellow&labelColor=black">
</p>

### **Цей проект покращує навички написання тексту не дивлячись на клавіатуру**

## Структура сайту:

### HTML:

`Index.html` - сторінка з тегами-контейнерами для кнопок.

### CSS:

`Style.css` - файл стилів, який примінюється для сторінки.

### JavaScript: 

`Script.js` - файл, в якому логіка перемикання клавіші на іншу після натискання на неї на реальній клавіатурі

Вибір рандомної клавіші на сторінці

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

Класу jiggle та його анімація

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

### Розробив: [Ivan Krysak (github: Ivandefender)](https://github.com/Ivandefender);