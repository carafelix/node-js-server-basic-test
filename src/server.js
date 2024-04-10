const http = require('node:http')
const pages = require('./pages/pages')

const server = http.createServer().listen(8080)

server.on('request', (req, res) => {
    const page = resolvePathtoPage(req.url)
    
    if(!existURLinSite(req.url)){
        res.writeHead(302, { location: 'e404' }) // redirect does not update the search bar
            .end();
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
            .end(page);
    }
})

function resolvePathtoPage(url){
    switch(url.toLowerCase()){
        case '/':
            return pages.index
        case '/about':
            return pages.about
        case '/contact':
            return pages.contact
        default:
            return pages.e404
    }
}
function existURLinSite(url){
    return (url === '/' || url === '/about' || url === '/contact' || '/e404')
}