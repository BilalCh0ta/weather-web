
let weather  = document.querySelector(".weather")
let city = document.querySelector(".city")
let temp = document.querySelector(".temp")


function getData(){
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=6ded885d2b011a5823848c4d12e1dabf`)

    .then((res)=>{
        console.log(res.data);
   weather.innerHTML = `
   
   <div class="cit-con d-flex justify-content-around gap-3">


<div class="country text-white"><h3>${res.data.sys.country}</h3></div>


  <input type="text" placeholder="Enter city" class="city">
    <br><br> 
    <button onclick="getData()">enter</button>



</div>
   `
    
    })
    
}





