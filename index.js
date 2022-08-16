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

async function info(){
  try{
  let result = await client.info();
  console.log(result);
  }
  catch(e){
    console.log("error");
    console.log(e);
  }
  
} 
// info();

async function search(query){
  try{
  let result = await client.search(
    {
      index: 'game-of-thrones*'
    }, {
      ignore: [404],
      maxRetries: 3
    }
  );
  console.log(result.hits);
  }
  catch(e){
    console.log("error");
    console.log(e);
  }
  
} 
 search();


async function createindex(query){
  try{
    let result = await client.indices.create({
      index: "aname",
      body: {
          
      }
    }, function (err, resp, respcode) {
      console.log(err, resp, respcode);
    });
  console.log(result);
  }
  catch(e){
    console.log("error");
    console.log(e);
  }
  
} 
// createindex();


// create got indices

async function run() {
  await client.index({
    index: 'game-of-thrones',
    type:"character",
    id:1,
    body: {
      character: 'Ned Stark',
    quote: 'Winter is coming.'
    }
  })

  await client.index({
    index: 'game-of-thrones',
    type:"character",
    id:2,
    body: {
      character: 'Daenerys Targaryen',
    quote: 'I am the blood of the dragon.'
    }
  })

  await client.index({
    index: 'game-of-thrones',
    type:"character",
    id:3,
    body: {
      character: 'Tyrion Lannister',
    quote: 'A mind needs books like a sword needs whetstone.'
    }
  })

  let indices = await client.indices.refresh({index: 'game-of-thrones'})
  console.log(indices);
}

//  run().catch(console.log)

// deleting an index

/* Delete index */
// client.indices.delete({
//   index: '.kibana-event-log-8.3.3-000001',
// }).then(function(resp) {
//   console.log("Successful query!");
//   console.log(JSON.stringify(resp, null, 4));
// }, function(err) {
//   console.trace(err.message);
// });
// client.indices.delete({
//   index: '.kibana_8.3.3_001',
// }).then(function(resp) {
//   console.log("Successful query!");
//   console.log(JSON.stringify(resp, null, 4));
// }, function(err) {
//   console.trace(err.message);
// });

// hits: [
//   {
//     _index: '.kibana-event-log-8.3.3-000001',
//     _id: 'sqoJiYIBD57tGKfuQdSE',
//     _score: 1,
//     _source: [Object]
//   },
//   {
//     _index: '.kibana-event-log-8.3.3-000001',
//     _id: 'LwI0hIIBAiRIeywRfUiT',
//     _score: 1,
//     _source: [Object]
//   },
//   {
//     _index: '.kibana_8.3.3_001',
//     _id: 'usage-counters:ebt_counters.client:10082022:sent_to_shipper_OK:kibana_started',
//     _score: 1,
//     _source: [Object]
//   },
//   {
//     _index: '.kibana_8.3.3_001',
//     _id: 'canvas-workpad-template:workpad-template-6181471b-147d-4397-a0d3-1c0f1600fa12',
//     _score: 1,
//     _source: [Object]
//   },
//   {
//     _index: '.kibana_8.3.3_001',
//     _id: 'canvas-workpad-template:workpad-template-029bdeb3-40a6-4c90-9320-a5566abaf427',
//     _score: 1,
//     _source: [Object]
//   },
//   {
//     _index: '.kibana_8.3.3_001',
//     _id: 'canvas-workpad-template:workpad-template-aefa8b2b-24ec-4093-8a59-f2cbc5f7c947',
//     _score: 1,
//     _source: [Object]
//   },
//   {
//     _index: '.kibana_8.3.3_001',
//     _id: 'ingest-outputs:a09a5397-7b9a-5a73-a622-e29f4c635658',
//     _score: 1,
//     _source: [Object]
//   },
//   {
//     _index: '.kibana_8.3.3_001',
//     _id: 'exception-list-agnostic:endpoint_trusted_apps',
//     _score: 1,
//     _source: [Object]
//   },
//   {
//     _index: '.kibana_8.3.3_001',
//     _id: 'exception-list-agnostic:endpoint_list',
//     _score: 1,
//     _source: [Object]
//   },
//   {
//     _index: '.kibana_8.3.3_001',
//     _id: 'usage-counters:ebt_counters.client:10082022:enqueued_enqueued:kibana_started',
//     _score: 1,
//     _source: [Object]
//   }
// ]
async function getdata(){
  // const document = await client.get({
  //   body: {
  //     character: 'rion'
  //   }
  // })
  const result = await client.search({
    index: 'game-of-thrones',
    query: {
      match: { hello: 'world' }
    }
  })
  console.log(result);
}

getdata();