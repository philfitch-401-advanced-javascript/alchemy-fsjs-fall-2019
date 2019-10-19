Mongo Aggregation
===

Import sample datasets and design aggregations. Add to API server as routes

All the data can be found here:

https://github.com/ozlerhakan/mongodb-json-files

Import using `mongoimport`:

```sh
$ mongoimport --db test-data --collection restaurants --file restaurants.json 
```

## Details

For each challenge:
1. Import the data to your local mongodb
1. Design the Aggregation using Compass or Robo3T
1. Create a Model for accessing the collection (you don't actually have to
define any properties for the model)
1. Add a route for returning the specified aggregation

You do not need to add tests for today's lab, but you should try hitting your route from Postman.

## Challenges

### Zips

Data: `zips`

1. Top 10 most populous states (according to this data)

### Students

Data `students`

1. Average, min and max score by score type ("exam", "quiz", etc.)

### Trades

Data: `trades`

Filter these to a specific ticker symbol:

1. Top 10 hours with most trades
1. Top 10 hours with least trades

### Grades

Data `grades` (different data than `students`)

1. Average score by score type for each class

### Books

Data `books`

1. Average page count by author


## Rubric:

Each aggregation in server route: **2pts** each
