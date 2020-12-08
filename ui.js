const backGround = document.querySelector('html')
let c = document.querySelector('.center-content-container').children
let form = document.querySelector('.searchform').children
const time = document.getElementById('time')
const date = document.getElementById('date')
const quotesContainer = document.querySelector('.quotes-container')
const quotes = [
    'Eat Sleep Code Repeat!', 'Practice Practice Practice!', 
    'The way to get started is to quit talking and begin doing.',
    "If you set your goals ridiculously high and it's a failure , you will fail above everyone else's success.",
    'The future belongs to those who believe in the beauty of their dreams.',
    'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    'It is during our darkest moments that we must focus to see the light.',
    'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    'Success usually comes to those who are too busy to be looking for it.',
    'There are no secrets to success. It is the result of preparation, hard work, and learning from failure.',
    'If you are not willing to risk the usual, you will have to settle for the ordinary.'
]
const randomNum = Math.floor(Math.random()*10 + 1)

//Main Event
document.addEventListener('DOMContentLoaded',()=>{
    getWeather()
    showDateAndTime()
    getRandomQuote()
    console.log(randomNum)
    if(randomNum === 1){
        backGround.style.backgroundImage = "url('./backgroundimages/bg1.jpg')"
    }else if(randomNum === 2){
        backGround.style.backgroundImage = "url('./backgroundimages/bg2.jpg')" 
    }else if(randomNum === 3){
        backGround.style.backgroundImage = "url('./backgroundimages/bg3.jpg')"
    }else if(randomNum === 4){
        backGround.style.backgroundImage = "url('./backgroundimages/bg4.jpg')"
    }else if(randomNum === 5){
        backGround.style.backgroundImage = "url('./backgroundimages/bg5.jpg')"
        for(let i = 0 ; i < c.length; i++){
            c[i].style.color = 'black'
        }
        for(let j = 0; j<form.length;j++){
            form[j].style.borderColor = 'black'
            form[j].style.color = 'black'
        }
    }else if(randomNum === 6){
        backGround.style.backgroundImage = "url('./backgroundimages/bg6.jpg')"
    }else if(randomNum === 7){
        backGround.style.backgroundImage = "url('./backgroundimages/bg7.jpg')"
    
    }else if(randomNum === 8){
        backGround.style.backgroundImage = "url('./backgroundimages/bg8.jpg')"
    }else if(randomNum === 9){
        backGround.style.backgroundImage = "url('./backgroundimages/bg9.jpg')"
    }else{
        backGround.style.backgroundImage = "url('./backgroundimages/bg10.jpg')"
    }
 })

// Calls Time and Date
 function showDateAndTime(){
    startTime();
    checkDate();
}
// Get Time
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(()=> {
      startTime()
    }, 500);
  }
  //Get Date
function checkDate(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const dateObject = new Date();
    const month = monthNames[dateObject.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const output = month  + '\n'+ day  + '\n' + year;
    document.getElementById('date').textContent = output; 
    
}

//Quotes Function
 function getRandomQuote(){
     let p = document.createElement('p')
    p.classList.add('white')
    
    quotesContainer.appendChild(p)
    p.innerHTML = `<i>${quotes[randomNum]}</i>`
    
    }


