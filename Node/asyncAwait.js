async function getApi(){
 const pr=await fetch('https://api.github.com/users/sarthaksemwal')
  const data=await pr.json()
  console.log(data)
}

getApi();