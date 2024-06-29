const body = document.querySelector('body');
const keyBtns = [...document.querySelectorAll('.key')];
const keys = keyBtns.map(keyBtn => keyBtn.dataset.key);
const keyToBtnMap = keyBtns.reduce((acc,cur)=>{
    const curKey = cur.dataset.key;
    acc[curKey] = cur;
    return acc;
},{});

let currentKey;

body.addEventListener('keyup',(e)=>{
    const typedKey = e.key;
    checkKey(typedKey);
});
keyBtns.forEach((keyButton)=>{
    keyButton.addEventListener('click',(e)=>{
        const clickedKey = e.target.dataset.key;
        checkKey(clickedKey);
    })
})
const checkKey = (inputKey)=>{
    if(inputKey.toUpperCase() === currentKey){
        setRandomKey();
    }
}
const setRandomKey = ()=>{
    if(currentKey){
        keyToBtnMap[currentKey].classList.remove('jiggle');
    }
    const randomIndex = Math.floor(Math.random()*keys.length);
    currentKey = keys[randomIndex];
    keyToBtnMap[currentKey].classList.add('jiggle');
}

setRandomKey();