function hello(){
    let city = document.getElementById("cityName").value
    let country = document.getElementById("cunteryName").value
    
axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=1`)
.then((response) => {
    console.log("respone" , response.data)
    let short = response.data.data;
    document.getElementById("item1").innerText = `Fajr: ${short.timings.Fajr}`
    document.getElementById("item2").innerText = `Dhuhr: ${short.timings.Dhuhr}`
    document.getElementById("item3").innerText = `Asr: ${short.timings.Asr}`
    document.getElementById("item4").innerText = `Maghrib: ${short.timings.Maghrib}`
    document.getElementById("item5").innerText = `Isha: ${short.timings.Isha}`
    document.getElementById("item6").innerText = `Date: ${short.date.readable}`

    
    })
    .catch((err) => {
        console.log(err);
    })

}
