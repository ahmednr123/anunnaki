const express = require('express')
const app = express()

const port = process.env.PORT || 8080

const oneMonth = 60 * 1000 * 60 * 24;

app.use(express.static('public', {maxAge: oneMonth}))

app.get('*', (req, res) => {
	res.set('Content-Type', 'text/html');
	res.end('[DOM LIBRARY] - <a href="http://lib.qett.in/dom/vanilla.js">http://lib.qett.in/dom/vanilla.js</a> (v1.0)')

})

app.listen(port, function(){
	console.log('Serving js libraries to save the world!')
})
