const { Client } = require('@elastic/elasticsearch')
const client = new Client({
    node: 'https://localhost:9200',
  auth: {
    username: 'elastic',
    password: 'gE5KOzIBNwv=4My9R_6B'
  }
})