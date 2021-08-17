const api = {
    key: '20c15b5bdaea58fb0dc458b42b5f1450',
    base: 'https://api.openweathermap.org/data/2.5/'
  }
  
  const btn = document.getElementById('btn')
  btn.addEventListener('click', inputValue);
  
  function inputValue() {
    let cityTarget = document.getElementById('input').value;
    getResults(cityTarget)
    document.getElementById('input').value = ""
  }
  
  function getResults (cityTarget) {
    fetch(`${api.base}weather?q=${cityTarget}&appid=${api.key}`)
    .then(response => response.json())
    .then(displayResults)
  }
  
  function displayResults(response){
    const { main, name, sys, weather } = response
    // localStorage.setItem('city', JSON.stringify(response))
    const tempCity = Math.round((response.main.temp)-273.15)
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
  
    const list = document.getElementById('str');
    const li = document.createElement('div');
    li.classList.add("itemCity");
    const cityItem = `
      <div class="city"><h2>${name}</h2><p class="log">${sys.country}</p></div>
      <div class="temp">${tempCity}<sup>°C</sup></div>
      <figure>
      <img class="icon" src=${icon} alt=${weather[0]["main"]}>
      <figcaption class="description">${weather[0]["description"]}</figcaption>
      </figure>
      `
    li.innerHTML = cityItem;
    list.appendChild(li);
  }