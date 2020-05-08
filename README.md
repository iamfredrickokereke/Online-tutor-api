# Deployed heroku link is https://online-tutor-api.herokuapp.com/api/v1/auth/login

# Online Tutor Api

> First API attempt for Startng. 

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![Dependency Status](http://img.shields.io/gemnasium/badges/badgerbadgerbadger.svg?style=flat-square)](https://gemnasium.com/badges/badgerbadgerbadger) [![Coverage Status]


## Installation

This is node.js API. Installation is done using npm install command:

```
$ npm install
```

All the packages needed for this API to works will be installed with this above command.

### Clone

- Clone this repo to your local machine using `https://github.com/iamfredrickokereke/online-tutor-api/`

### The HTTP verbs used

- GET: To retrive resources
- POST: TO create resources
- PUT: To Update resources
- DELETE: To delete resources

  ### Version

This is version 1. 


## Handling unhandle routes

```
app.all("*", (req, res, next) => {
  next(
    new AppError(
      `Routes not found on this server`,
      404
    )
  );
});

```

-Response is
-status code is 200 Ok

{
    "status": "success",
    "user": {
        "active": true,
        "subjects": [],
        "_id": "0589892931345f258500aa7",
        "firstname": "emma",
        "surname": "eddif",
        "email": "ohboy@gmail.com"
        "role": "admin",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjNmODkyOTMxZmI0MTI1ODUwMGFhNyIsImlhdCI6MTU4ODkzNDU5NSwiZXhwIjoxNTg5MzY2NTk1fQ.sbpaIsMWZdH1uVu7Q-Jw9ijTf2sDhHC9Bey7sOrumuk"
}
```

