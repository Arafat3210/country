fetch(' https://restcountries.com/v3.1/all ')
.then(res=> res.json())
.then(data=>showUser(data))

const showUser = data=>{
    const mainId = document.getElementById('main-id')
    for(const show of data){
        console.log(data)
        const makediv = document.createElement('div')
        makediv.classList.add('findDiv')
        makediv.innerHTML=`
        <img src="${show.flags.png}"> 
        <h1>country:${show.name.common}</h1>
        <h3>time:${show.timezones}</h3>
        <h3>population:${show.population}</h3>
        `
        
        mainId.appendChild(makediv)
    }

}

