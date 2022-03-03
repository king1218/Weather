const Api_key = `5fb4212bdcd13d4494c8f5dbebc45e9e`;
const Showtemp= ()=>{
    const city = document.getElementById('City-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5fb4212bdcd13d4494c8f5dbebc45e9e&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data =>displayResult(data));
}
const Show_city=(id, city_name )=>{
    document.getElementById(id).innerText = city_name;
}
const displayResult = Teampareture =>{
  Show_city('city_name',Teampareture.name);
  Show_city('Teampareture',Teampareture.main.temp);
  Show_city('Situation',Teampareture.weather[0].main);

  const urlicon = `http://openweathermap.org/img/wn/${Teampareture.weather[0].icon}@2x.png`
  console.log(Teampareture);
  const seticon = document.getElementById('Weather_icon');
  seticon.setAttribute('src',urlicon);
}