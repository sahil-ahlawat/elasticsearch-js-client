const { Client } = require('@elastic/elasticsearch')
var fs = require('fs');
const client = new Client({
    node: 'https://localhost:9200',
  auth: {
    username: 'elastic',
    password: 'gE5KOzIBNwv=4My9R_6B'
  },
  tls: {
    // ca: fs.readFileSync('./http_ca.crt'),
    rejectUnauthorized: false
  }
})

async function test(){
  try{
    let result = await client.info();
  console.log(result);
  }
  catch(e){
    console.log("error");
    console.log(e);
  }
  
} 
test();