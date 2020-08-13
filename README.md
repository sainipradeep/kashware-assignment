# Kashware assigenment

# Running with Express
  -  Run `npm install`
  -  server: `npm start`

# Swagger URL
 - http://127.0.0.1:3000/swagger.json


# REST API

All responses have:
-   a JSON body
-   a "success" boolean property that is either "true" or "false"
-   if "success" if false, there is an "error" property with a string message

If the request is a POST, then the request body is JSON.

The REST API commands follow.
## login
 **Request Format**

 -   Method: `POST`
 -   URI path: `/v1/users/login`

 **JSON Request Body**

 ```JSON
 {
   "username": "username",
   "password":"password"
  }
 ```

 **JSON Response**

 ```JSON
 {
   "error": false,
   "result": {},
   "token": "token"
 }
 ```

 ## Patch value


 **Request Format**

 -   Method: `POST`
 -   Header
        - Authorization : "token" // required
 -   URI path: `/v1/patch`


 **JSON Request Body**

 ```JSON
 {
   "doc": {
     "baz": "qux",
     "foo": "bar"
   },
   "patch": [{
       "op": "replace",
       "path": "/baz",
       "value": "boo"
     },
     {
       "op": "add",
       "path": "/hello",
       "value": ["world"]
     },
     {
       "op": "remove",
       "path": "/foo"
     }
   ]
 }
```
 **JSON Response**

 ```JSON
 {
     "error": false,
     "result": {
         "baz": "boo",
         "hello": [
             "world"
         ]
     }
 }
 ```

  **Request Format**

  -   Method: `POST`
  -   Header
         - Authorization : "token" // required
  -   URI path: `/v1/image/thumbnail`


  **JSON Request Body**

  ```JSON
  {
    "image_url":"https://cdn.miraah.me/xyz.png"
  }
 ```
  **JSON Response**

  ```JSON
  image
  ```
