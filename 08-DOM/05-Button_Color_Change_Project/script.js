const btn = document.getElementById('btn');
const randomColor = () => {
    let val = '0123456789ABCDEF';
    let cons = '#';
    for(let i = 0; i < 6; i++) {
        cons += val[Math.floor(Math.random() * 16)];
    }
    return cons;
 }
btn.addEventListener('click',()=>{
    document.body.style.backgroundColor = randomColor();
})