## API Documentation

This sample project will give you a small RESTful API to build your template against. It is built using JavaScript/Node.js (our language of choice), ExpressJS (a small, lightweight web MVC framework) & Mongoose (a MongoDB object modelling library).


**List Users**
----
Returns a list of Users

* **URL**

  `/users`

* **Method:**

  `GET`

*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
    {
        "status": 200,
        "errors": [
           null
        ],
        "content": [
           {
               "_id": "59d2c1bc17cb7e8a8f01c372",
               "gender": "female",
               "name": {
                   "title": "miss",
                   "first": "allie",
                   "last": "willis"
               },
               "location": {
                   "street": "7135 the crescent",
                   "city": "Leixlip",
                   "state": "colorado",
                   "zip": 37191
               },
               "email": "allie.willis@example.com",
               "username": "crazybear293",
               "password": "3232",
               "salt": "UVMKO1Tj",
               "md5": "b7441c556f250fe6ebb3367ba708d4b6",
               "sha1": "fc79c95d01ca351efdf283331f39f2384db1dd78",
               "sha256": "999afe92c680c6d74412ff438c8d0901028805caf66aeff536e0eed52e758d55",
               "registered": 1216643814,
               "dob": 253903290,
               "phone": "041-379-5675",
               "cell": "081-471-3648",
               "PPS": "9408385T",
               "picture": {
                   "large": "https://randomuser.me/api/portraits/women/19.jpg",
                   "medium": "https://randomuser.me/api/portraits/med/women/19.jpg",
                   "thumbnail": "https://randomuser.me/api/portraits/thumb/women/19.jpg"
               },
               "__v": 0
           },
           {
               "_id": "59d2c1bd17cb7e8a8f01c3d5",
               "gender": "female",
               "name": {
                   "title": "miss",
                   "first": "allie",
                   "last": "willis"
               },
               "location": {
                   "street": "7135 the crescent",
                   "city": "Leixlip",
                   "state": "colorado",
                   "zip": 37191
               },
               "email": "allie.willis@example.com",
               "username": "crazybear293",
               "password": "3232",
               "salt": "UVMKO1Tj",
               "md5": "b7441c556f250fe6ebb3367ba708d4b6",
               "sha1": "fc79c95d01ca351efdf283331f39f2384db1dd78",
               "sha256": "999afe92c680c6d74412ff438c8d0901028805caf66aeff536e0eed52e758d55",
               "registered": 1216643814,
               "dob": 253903290,
               "phone": "041-379-5675",
               "cell": "081-471-3648",
               "PPS": "9408385T",
               "picture": {
                   "large": "https://randomuser.me/api/portraits/women/19.jpg",
                   "medium": "https://randomuser.me/api/portraits/med/women/19.jpg",
                   "thumbnail": "https://randomuser.me/api/portraits/thumb/women/19.jpg"
               },
               "__v": 0
           },
           {
               "_id": "59d2c1bd17cb7e8a8f01c3d6",
               "email": "allie.willis@example.com",
               "password": "3232",
               "__v": 0
           }
        ]
    }
  ```
* **Error Response:**

* **Code:** 500 INTERNAL SERVER ERROR <br />
  **Content:**

  ```javascript
    {
        "status": 500,
        "message": "Error listing user.",
        "errors": [
            null
        ]
    }
  ```

* **Sample Call:**

  ```javascript
  $.ajax({
    url: "/users",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });
  ```


**Show User**
----
  Returns JSON data about a single user.

* **URL**

  `/users/:id`

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   `id=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
    {
        "status": 200,
        "errors": [
            null
        ],
        "content": {
            "_id": "59d2c1bc17cb7e8a8f01c372",
            "gender": "female",
            "name": {
                "title": "miss",
                "first": "allie",
                "last": "willis"
            },
            "location": {
                "street": "7135 the crescent",
                "city": "Leixlip",
                "state": "colorado",
                "zip": 37191
            },
            "email": "allie.willis@example.com",
            "username": "crazybear293",
            "password": "3232",
            "salt": "UVMKO1Tj",
            "md5": "b7441c556f250fe6ebb3367ba708d4b6",
            "sha1": "fc79c95d01ca351efdf283331f39f2384db1dd78",
            "sha256": "999afe92c680c6d74412ff438c8d0901028805caf66aeff536e0eed52e758d55",
            "registered": 1216643814,
            "dob": 253903290,
            "phone": "041-379-5675",
            "cell": "081-471-3648",
            "PPS": "9408385T",
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/19.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/19.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/19.jpg"
            },
            "__v": 0
        }
    }
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
     {
         "status": 500,
         "message": "Error finding user.",
         "errors": [
             null
         ]
     }
    ```

  * **Code:** 404 DATA NOT FOUND <br />
    **Content:**

    ```javascript
    {
        "status": 404,
        "message": "User not found!",
        "errors": [
            null
        ]
    }
    ```

* **Sample Call:**

  ```javascript
  $.ajax({
    url: "/users/1",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });
  ```

**Delete User**
----
  Returns JSON data about a result of this operation.

* **URL**

  `/users/:id`

* **Method:**

  `DELETE`

*  **URL Params**

   **Required:**

   `id=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
    {
        "status": 200,
        "message": "User deleted successfully",
        "errors": [
            null
        ]
    }
    ```

* **Error Response:**

  * **Code:** 404 DATA NOT FOUND <br />
    **Content:**

    ```javascript
      {
          "status": 404,
          "message": "User not found!",
          "errors": [
              null
          ]
      }
    ```

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
     {
         "status": 500,
         "message": "Error deleting user.",
         "errors": [
             null
         ]
     }
    ```

* **Sample Call:**

  ```javascript
  $.ajax({
    url: "/users/1",
    dataType: "json",
    type : "DELETE",
    success : function(r) {
      console.log(r);
    }
  });
  ```

**Update User**
----
  Returns JSON data about a result of this operation.

* **URL**

  `/users/:id`

* **Method:**

  `PUT`

*  **URL Params**

   **Required:**

   `id=[string]`

* **Data Params**

   `{user}=[JSON]`

    ```javascript
        {
           "_id": "59d2c1bc17cb7e8a8f01c372",
           "gender": "female",
           "name": {
               "title": "miss",
               "first": "allie",
               "last": "willis"
           },
           "location": {
               "street": "7135 the crescent",
               "city": "Leixlip",
               "state": "colorado",
               "zip": 37191
           },
           "email": "allie.willis@example.com",
           "username": "crazybear293",
           "password": "3232",
           "salt": "UVMKO1Tj",
           "md5": "b7441c556f250fe6ebb3367ba708d4b6",
           "sha1": "fc79c95d01ca351efdf283331f39f2384db1dd78",
           "sha256": "999afe92c680c6d74412ff438c8d0901028805caf66aeff536e0eed52e758d55",
           "registered": 1216643814,
           "dob": 253903290,
           "phone": "041-379-5675",
           "cell": "081-471-3648",
           "PPS": "9408385T",
           "picture": {
               "large": "https://randomuser.me/api/portraits/women/19.jpg",
               "medium": "https://randomuser.me/api/portraits/med/women/19.jpg",
               "thumbnail": "https://randomuser.me/api/portraits/thumb/women/19.jpg"
           },
           "__v": 0
       }
    ```
* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
        {
            "status": 200,
            "message": "User updated successfully",
            "errors": [
                null
            ]
        }
    ```

* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:**

    ```javascript
    {
        "status": 400,
        "message": "Validation error",
        "errors": [
            {
                "location": "body",
                "param": "email",
                "msg": "Invalid email"
            }
        ]
    }
    ```

  * **Code:** 404 DATA NOT FOUND <br />
    **Content:**

    ```javascript
        {
            "status": 404,
            "message": "User not found!",
            "errors": [
                null
            ]
        }
    ```

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    {
        "status": 500,
        "message": "Error updating user.",
        "errors": [
            null
        ]
    }
    ```

* **Sample Call:**

  ```javascript
    $.ajax({
        url: "/users/1",
        type: "PUT",
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(data)
    });
  ```

**Create User**
----
  Returns JSON data with the user created and message with the result of this operation.

* **URL**

  `/users/`

* **Method:**

  `POST`

*  **URL Params**

    None

* **Data Params**

   `{user}=[JSON]`

    ```javascript
       {
           "gender": "female",
           "name": {
               "title": "miss",
               "first": "allie",
               "last": "willis"
           },
           "location": {
               "street": "7135 the crescent",
               "city": "Leixlip",
               "state": "colorado",
               "zip": 37191
           },
           "email": "allie.willis@example.com",
           "username": "crazybear293",
           "password": "3232",
           "salt": "UVMKO1Tj",
           "md5": "b7441c556f250fe6ebb3367ba708d4b6",
           "sha1": "fc79c95d01ca351efdf283331f39f2384db1dd78",
           "sha256": "999afe92c680c6d74412ff438c8d0901028805caf66aeff536e0eed52e758d55",
           "registered": 1216643814,
           "dob": 253903290,
           "phone": "041-379-5675",
           "cell": "081-471-3648",
           "PPS": "9408385T",
           "picture": {
               "large": "https://randomuser.me/api/portraits/women/19.jpg",
               "medium": "https://randomuser.me/api/portraits/med/women/19.jpg",
               "thumbnail": "https://randomuser.me/api/portraits/thumb/women/19.jpg"
           },
           "__v": 0
       }
    ```
* **Success Response:**

  * **Code:** 201 <br />
    **Content:**

    ```javascript
       {
           "status": 201,
           "message": "User created successfully",
           "errors": [
               null
           ],
           "content": {
               "gender": "female",
               "name": {
                   "last": "willis",
                   "first": "allie",
                   "title": "miss"
               },
               "location": {
                   "zip": 37191,
                   "state": "colorado",
                   "city": "Leixlip",
                   "street": "7135 the crescent"
               },
               "email": "allie.willis@example.com",
               "username": "crazybear293",
               "password": "3232",
               "salt": "UVMKO1Tj",
               "md5": "b7441c556f250fe6ebb3367ba708d4b6",
               "sha1": "fc79c95d01ca351efdf283331f39f2384db1dd78",
               "sha256": "999afe92c680c6d74412ff438c8d0901028805caf66aeff536e0eed52e758d55",
               "registered": 1216643814,
               "dob": 253903290,
               "phone": "041-379-5675",
               "cell": "081-471-3648",
               "PPS": "9408385T",
               "picture": {
                   "thumbnail": "https://randomuser.me/api/portraits/thumb/women/19.jpg",
                   "medium": "https://randomuser.me/api/portraits/med/women/19.jpg",
                   "large": "https://randomuser.me/api/portraits/women/19.jpg"
               },
               "__v": 0,
               "_id": "59d2c9af9bc7618c2469332f"
           }
       }
    ```

* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:**

    ```javascript
    {
        "status": 400,
        "message": "Validation error",
        "errors": [
            {
                "location": "body",
                "param": "email",
                "msg": "Invalid email"
            }
        ]
    }
    ```

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
        {
            "status": 500,
            "message": "Error creating user.",
            "errors": [
                null
            ]
        }
    ```

* **Sample Call:**

  ```javascript
    $.ajax({
        url: "/users/1",
        type: "POST",
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(data)
    });
  ```

Inspired by https://gist.github.com/iros/3426278
