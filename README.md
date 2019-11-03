# Nodejs Test

This is an application use nodejs.

To run the examples in your development environment:

1. Clone this repo

2. Access folder, Run `npm install`

3. From the root of your repository, start the development server with
   `npm start` or you can use npm script command `npm run start:dev`.

4. To run unit test, use npm script command `npm run test`

## API Route

We can use Postman app to test api: 

1. Rotate picture

You can call this api by use this: 

```
[POST] http://localhost:2023/api/rotate-picture
```

with params

```
{
	"grid": [[1,2,3],[1,2,3],[1,2,3]],
	"k":2
}
```

this will return the result 

```
{
    "result": [[3,2,1],[3,2,1],[3,2,1]]
}
```

2. Hotel Reservation

You can call this api by use this: 

```
[POST] http://localhost:2023/api/hotel-booking
```

with params

```
{
	"arrivals": [1, 3, 5],
	"departures": [2, 6, 10],
	"k": 2
}
```

this will return the result 

```
{
    "result": true or false
}
```

3. Product Recommendation

You can call this api by use this: 

```
[POST] http://localhost:2023/api/product-recomment
```

with params

```
{
	"age": 18,
	"student": false,
	"income":25000
}
```

this will return the result 

```
{
    "bundle": 2 (0, 1, 2 or 3)
}
```