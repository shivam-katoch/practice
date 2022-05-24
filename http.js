const http=module.require('http');
const server=http.createServer((req,res)=>{ 
if(req.url==='/')
{
    res.end('welcome to home page');
}
if(req.url === '/about')
{
    res.end('mar gaya maderchod')
}
res.end(`
<h1>Oops somthing went wrong</h1>
<p> page not found</p>
<a href='/'/>
`)
})
server.listen(5000);