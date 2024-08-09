<h1>BFF (backend for frontend)</h1>
<ul>
  <li>"/api/v1/bff" is the common route in which all the request from client will come</li>
  <li>after that it will be routed towards the route based on the "/web" and "/mobile"</li>
  <li>"api/v1/bff/web" will call the "getAllProductsForWeb" controller whereas "api/v1/bff/mobile" will call the "getAllProductsForMobile" controller</li>
  <li>"getAllProducts" method is fetching the all products from the db and returning it to the respective bff-controller</li>
  <li>the filtering of the products is happening on the bff layer.</li>
  <li>using user-agent to find out the source(client) of the request</li>
</ul>
