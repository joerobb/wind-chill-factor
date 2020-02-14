const temp = document.getElementById('temp');
const wind = document.getElementById('wind');
const btn = document.getElementById('btn');
const measure = document.getElementById('measure');
const result = document.getElementById('result');
const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');

celsius.onchange = (e) => {
    measure.innerHTML = `degrees ${e.target.value}`; 
    result.innerHTML = `degrees ${e.target.value}`; 
    temp.value = '';
    wind.value = '';
    wcf.value = '';  
}

fahrenheit.onchange = (e) => {
    measure.innerHTML = `degrees ${e.target.value}`; 
    result.innerHTML = `degrees ${e.target.value}`; 
    temp.value = '';
    wind.value = '';
    wcf.value = '';     
}

btn.addEventListener('click', () => {

    if (temp.value === '') {
        alert("Please enter a temperature value");
    }
    if (wind.value === '') {
        alert("Please enter a wind speed value");
    }
    else {
     let wcf = document.getElementById('wcf');
     const celsiusCalc = (temp, wind) => {
         let velocity = Math.pow(wind, 0.16);
         return Math.round(13.12 + (.6215 * temp) - (11.37 * velocity) + (.3965 * temp * velocity));              
     }
    if(document.getElementById('celsius').checked) {
        wcf.value = celsiusCalc(temp.value, wind.value)
 
      } else if(document.getElementById('fahrenheit').checked) {
        wcf.value = celsiusCalc(temp.value * 9/5 + 32, wind.value)
      }
    }
})

