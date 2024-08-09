const fetchAllProducts = async () => {
    let agent = navigator.userAgent
    let client = ""
    agent = "MyApp/1.0.0 (iPhone; iOS 16.6; Scale/3.00)"
    if (agent.toLocaleLowerCase().includes('android') || agent.toLocaleLowerCase().includes('ios')) { client = "mobile" }
    else { client = "web" }
    console.log(`http://localhost:5001/api/v1/bff/${client}`)
    await fetch(`http://localhost:5001/api/v1/bff/${client}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json()).then((data) => console.log(data))
}

fetchAllProducts()