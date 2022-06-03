const { request } = require('express')
const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 Savage': {
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    },
    'Chance the Rapper': {
        'age': 29,
        'birthName': 'name',
        'birthLocation': 'location'
    },
    'unknown': {
        'age': 21,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase()
    if (rappers[rapperName]) {
        res.json(rappers[rapperName].birthName)
    } else {
        res.json(rappers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})