# nawm
Not A Weird Machine

### Usage
```sh
npm i
npm start
```

### [HTTPie](https://github.com/jakubroztocil/httpie) or cURL
Login:
```sh
╭leiko@kevtop2 ~
╰➤ http POST localhost:8080/login login=admin pass=admin                                                                                                                                                                                  1 ↵
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 52
Content-Type: application/json; charset=utf-8
Date: Thu, 07 Dec 2017 16:41:02 GMT
ETag: W/"34-krbIPgMHqa+eHQ7DJSQeoWHXy6I"
X-Powered-By: Express

{
    "token": "80233eddd3dce2df7de684921cba5389a3322f64"
}
```

Compute:
```sh
╭leiko@kevtop2 ~
╰➤ http POST localhost:8080/compute token=80233eddd3dce2df7de684921cba5389a3322f64 expression=2+42-2==42  
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 15
Content-Type: application/json; charset=utf-8
Date: Thu, 07 Dec 2017 16:41:44 GMT
ETag: W/"f-ayLlCL3PuzXSThdu78iReSEjl6Y"
X-Powered-By: Express

{
    "result": true
}
```
