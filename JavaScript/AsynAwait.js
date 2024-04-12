

async function random(){
    raw=await fetch('https://randomuser.me/api/')
    let data= await raw.json()
    console.log(data)
}

random()