const express = require('express')
const app = express()

const port = process.env.PORT || 8080

app.use(express.static('public'))

app.get('/', (req, res) => {

	res.end('[LIB] - http://lib.qett.in/mvc/vanilla.js (v1.0)')

})

app.listen(port, function(){
	console.log('Serving js libraries to save the world!')
})
