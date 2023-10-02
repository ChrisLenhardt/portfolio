console.log("Run Bun fo Fun");

const server = Bun.serve({
    port: 3000,
    fetch(req){
        if(req.url == "http://localhost:3000/hw"){
            return new Response("hello world");
        }
        console.log(req.url)
        return new Response(req.body);
    }
});

console.log(`Listening on port ${server.port}`);

