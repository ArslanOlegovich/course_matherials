
import PostModel from '../database/models/Posts';
let data = {
    '/postData' : {
        'GET': {
            handler: (req, res) => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
               
                let data = (new PostModel).getAll() ;
                res.end(JSON.stringify({ data: Object.values(data)}));
            },
        },
        'POST': {
            handler: (req, res) => {  
                res.writeHead(200, { 'Content-Type': 'application/json' });
                
                res.end(JSON.stringify({ data: (new PostModel).create(req.parsedBody) }));
            },
        },
    },

    '/postData/:userId' : {
        'GET': {
            handler: (req, res) => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                
                res.end(JSON.stringify({ data: (new PostModel).getOne(req.queryParams?.userId) }));
            },
        },
        'PATCH': {
            handler: (req, res) => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                let data = (new PostModel).update(req.queryParams?.userId, req.parsedBody);
                res.end(JSON.stringify({ data}));
            },
        },
        'DELETE': {
            handler: (req, res) => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ result: (new PostModel).delete(  req.queryParams?.userId) }));
            },
        },
    },
}

export default data;