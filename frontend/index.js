const fetchAllProducts=async()=>{
    let agent = navigator.userAgent
    console.log(agent)
    await fetch('http://localhost:5001/products/all',{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>res.json()).then((data)=>console.log(data))
}

fetchAllProducts()