const express = require('express')
const app = express()

const port = process.env.PORT || 8080

const oneMonth = 60 * 1000 * 60 * 24;

app.use(express.static('public', {maxAge: oneMonth}))

app.get('/', (req, res) => {

	res.end('[LIB] - http://lib.qett.in/mvc/vanilla.js (v1.0)')

})

app.listen(port, function(){
	console.log('Serving js libraries to save the world!')
})
