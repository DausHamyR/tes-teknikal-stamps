let api = 'https://api.openweathermap.org/data/3.0/onecall?lat=-6.1753942&lon=106.827183&appid=d1efae84ef16448c0ab078f518032206&lang=id';
fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log(`Thu, 24 Aug 2023: ${Math.round(data.daily[0].temp.day * 10) / 100}°C`)
        console.log(`Fri, 25 Aug 2023: ${Math.round(data.daily[1].temp.day * 10) / 100}°C`)
        console.log(`Sat, 26 Aug 2023: ${Math.round(data.daily[2].temp.day * 10) / 100}°C`)
        console.log(`Sun, 27 Aug 2023: ${Math.round(data.daily[3].temp.day * 10) / 100}°C`)
        console.log(`Mon, 28 Aug 2023: ${Math.round(data.daily[4].temp.day * 10) / 100}°C`)
    }
    )
    .catch(error => console.log(error));