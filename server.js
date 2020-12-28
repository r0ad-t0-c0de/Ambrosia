const http = require('http');
const fs = require('fs');
const con = require("./db"); 

const hostname = '127.0.0.1'
const port = '3000'

//var connect=con.getConnection();

function serveStaticFile(res, path, contentType, responseCode) {
    if(!responseCode) responseCode = 200;

    //console.log(__dirname + path);

    fs.readFile(__dirname + path, function(err, data) {
        if(err) {
            res.writeHead(500, { 'Content-Type' : 'text/plain' });
            res.end('500 - Internal Error');
        } 
        else {
            res.writeHead( responseCode, { 'Content-Type' : contentType });
            res.end(data);
        }
    });
}

http.createServer( function (req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '':
            serveStaticFile(res, '/home.html', 'text/html');
            break;
        case '/home.html':
            serveStaticFile(res, '/home.html', 'text/html');
            break;
        case '/about-us.html':
            serveStaticFile(res, '/about-us.html', 'text/html');
            break;
        case '/faqs.html':
            serveStaticFile(res, '/faqs.html', 'text/html');
            break;
        case '/ambulance.html':
            
            if(req.method == "POST" && req.url == "/ambulance.html")
                {
                    //res.statusCode = 200;
                    //res.setHeader('Content-Type', 'text/html');

                    var content = '';
                    req.on('data', function(data){
                        content += data;

                        var obj = JSON.parse(content);

                        console.log("The UserName is: "+ obj.name);
                        console.log("The contact is: "+ obj.contact);
                        //console.log("The date is: "+ obj.date);
                        var conn = con.getConnection();

                        conn.query('INSERT INTO ambrosia.ambulance_booking (ambulance_booking.name, ambulance_booking.contact) VALUES (?,?)',[obj.name,obj.contact], function(error, results, fields){
                        if(error) throw error;
                        console.log("Success!");
                            
                    });
                        //alerting();
                        
                    conn.end();
                    res.end("Success!");
                    
                    });
                }
            //window.alert("ok");
            serveStaticFile(res, '/ambulance.html', 'text/html');
            break;
        case '/contact-us.html':
            if(req.method == "POST" && req.url == "/contact-us.html")
                {
                    //res.statusCode = 200;
                    //res.setHeader('Content-Type', 'text/html');

                    var content = '';
                    req.on('data', function(data){
                        content += data;

                        var obj = JSON.parse(content);

                        console.log("The UserName is: "+ obj.name);
                        console.log("The contact is: "+ obj.email);
                        console.log("The contact is: "+ obj.query);
                        var conn = con.getConnection();

                        conn.query('INSERT INTO ambrosia.query_form (query_form.first, query_form.email, query_form.query) VALUES (?,?,?)',[obj.name,obj.email,obj.query], function(error, results, fields){
                        if(error) throw error;
                        console.log("Success!");
                    });
                        //alerting();
                    conn.end();
                    res.end("Success!");
                    
                    });
                }
            serveStaticFile(res, '/contact-us.html', 'text/html');
            break;    
        case '/hospitals.html':
            serveStaticFile(res, '/hospitals.html', 'text/html');
            break;
        case '/index.html':
            serveStaticFile(res, '/index.html', 'text/html');
            break;
        case '/stylesheets/ambulance.css':
            serveStaticFile(res, '/stylesheets/ambulance.css', 'text/css');
            break;
        case '/stylesheets/contact-us.css':
            serveStaticFile(res, '/stylesheets/contact-us.css', 'text/css');
            break;
        case '/stylesheets/carousel.css':
            serveStaticFile(res, '/stylesheets/carousel.css', 'text/css');
            break;
        case '/stylesheets/styles.css':
            serveStaticFile(res, '/stylesheets/styles.css', 'text/css');
            break;
        case '/images/logo.jpg':
            serveStaticFile(res, '/images/logo.jpg', 'image/jpg');
            break;
        case '/images/gif.gif':
            serveStaticFile(res, '/images/gif.gif', 'image/gif');
            break;
        case '/images/hands.jpeg':
            serveStaticFile(res, '/images/hands.jpeg', 'image/jpeg');
            break;
        case '/images/advance.jpg':
            serveStaticFile(res, '/images/advance.jpg', 'image/jpg');
            break;
        case '/images/avoid.jpeg':
            serveStaticFile(res, '/images/avoid.jpeg', 'image/jpeg');
            break;
        case '/images/basic.png':
            serveStaticFile(res, '/images/basic.png', 'image/png');
            break;
        case '/images/bg2.jpg':
            serveStaticFile(res, '/images/bg2.jpg', 'image/jpg');
            break;
        case '/images/madhuraj.jpg':
            serveStaticFile(res, '/images/madhuraj.jpg', 'image/jpg');
            break;
        case '/images/doctors.jpg':
            serveStaticFile(res, '/images/doctors.jpg', 'image/jpg');
            break;
        case '/images/color.jpg':
            serveStaticFile(res, '/images/color.jpg', 'image/jpg');
            break;
        case '/images/regency.jpg':
            serveStaticFile(res, '/images/regency.jpg', 'image/jpg');
            break;
        case '/images/llr.webp':
            serveStaticFile(res, '/images/llr.webp', 'image/webp');
            break;
        case '/images/mask.jpeg':
            serveStaticFile(res, '/images/mask.jpeg', 'image/jpeg');
            break;
        case '/images/mortuary.jpg':
            serveStaticFile(res, '/images/mortuary.jpg', 'image/jpg');
            break;
        case '/images/covid10.jpg':
            serveStaticFile(res, '/images/covid10.jpg', 'image/jpg');
            break;
        case '/functions.js':
            serveStaticFile(res, '/functions.js', 'text/js');
            break;
        case '/3d.js':
            serveStaticFile(res, '/3d.js', 'text/js');
            break;
        case '/covid_query.js':
            serveStaticFile(res, '/covid_query.js', 'text/js');
            break;
        case '/fetchdata.js':
            serveStaticFile(res, '/fetchdata.js', 'text/js');
            break;
        case '/countup.js':
            serveStaticFile(res, '/countup.js', 'text/js');
            break;
        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }
}).listen(3000);

/*const server = http.createServer((req, res) => {
    if(req.method == 'GET' && req.url == '/')
    {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./home.html').pipe(res);
        var conn=con.getConnection();
        conn.end();
        console.log("ok");
        
    }
    else if(req.method == 'GET' && req.url == '/stylesheets/styles.css')
    {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./stylesheets/styles.css').pipe(res);
    }
     else if(req.method == "GET" && req.url == '/hospitals.html')
    {
        res.statusCode == 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./hospitals.html').pipe(res);
        
        console.log("ok1");
        //conn.end(); 
        
    }
    
    else if(req.method == "GET" && req.url == '/ambulance.html')
    {
        res.statusCode == 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./ambulance.html').pipe(res);
        
        console.log("ok1");
        //conn.end(); 
        
    }
    /*else if(req.method == "GET" && req.url == '/images')
    {
        res.statusCode == 200;
        res.setHeader('Content-Type', 'image/png');
        fs.createReadStream('./logo.png').pipe(res);   
    }
    else if(req.url.match("\.png$"))
    {
        var img_path=path.join(__dirname,'images',req.url);
        var fstream=fs.createReadStream(img_path);
        res.setHeader('Content-Type', 'image/png');
        res.statusCode == 200;
        fstream.pipe(res);   
    }
    else if(req.method == "GET" && req.url == '/booking.html')
    {
        res.statusCode == 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./booking.html').pipe(res);
        
        console.log("ok1");
        //conn.end(); 
        
    }
    else if(req.method == 'GET' && req.url == '/stylesheets/ambulance.css')
    {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./stylesheets/ambulance.css').pipe(res);
    }
     
    
    else if(req.method == "POST" && req.url == "/phpmyadmin")
    {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');

        var content = '';
        req.on('data', function(data){
            content += data;

            var obj = JSON.parse(content);

            console.log("The UserName is: "+ obj.name);
            console.log("The contact is: "+ obj.contact);
            var conn = con.getConnection();

            conn.query('INSERT INTO ambrosia.ambulance_booking (ambulance_booking.name, ambulance_booking.contact) VALUES (?,?)',[obj.name,obj.contact], function(error, results, fields){
            if(error) throw error;
            console.log("Success!");
        });

        conn.end();
        res.end("Success!");
        });
    }
    else if(req.method == "GET" && req.url == '/functions.js')
    {
        res.writeHead(200, {"Content-Type":"text/javascript"});
        fs.createReadStream("./functions.js").pipe(res);
    }
});

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`)
});*/