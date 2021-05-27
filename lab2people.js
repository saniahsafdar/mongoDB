// Average age
// Expected Result: 41.41

db.people.aggregate([
    {$group:{
        _id:null ,
        averageAge: {$avg: "$age" }
    }}
])

// Average age by gender

db.people.aggregate([
    {$group:{
        _id: "$gender" ,
        averageAge: {$avg: "$age" }
    }}
])

// Expected Result: Female: 42.04, Male: 40.60
// Number of people by gender
// Expected Result: Female: 113, Male: 87

db.people.aggregate([
    {$group:{
        _id: "$gender",
        count: {$sum:1}
    }}
])

// 3 oldest people
// Expected Result: Phyllis Gray 81, Melissa Banks 79, Walter Bishop 76


db.people.aggregate([
    { $sort: {age: -1} },
    { $limit: 3 },
    {$project: {name:1}},
  ])

// 5 youngest people, display only their names as one value (first + " " + last) and their ages

db.people.aggregate([
    
])

// Expected Result: Nicholas Hunter 17, Kenneth Burns 18, Kathy Hayes 19, Edward Hayes 21, Steve Vasquez 21)
// Average number of children
// Expected Result: 2.34

db.people.aggregate([
    {$group:{
        _id: "$type",
        averageAge: {$avg: "$age"}
    }}
])

// Name and age of children in Michigan who are under age ten
// Expected Result: Adam 0, Janice 1, Judith 3, Beverly 4, Antonio 6, Jeremy 7


// Average age of child by state, sorted with oldest first
// Expected Result: Rhode Island 20, Idaho 20, Louisiana 15.7, Kentucky 13.1, Indiana 12.6, ...


// -- 5. Get all customers that live in the postal codes 1010, 3012, 12209, and 05023.
// SELECT * FROM customers WHERE postal_code='1010' OR postal_code='3012' OR postal_code='12209' OR postal_code='05023';

db.customers.find( {$or: [
    {postal_code: 1010},
    {postal_code: 3012},
]})

// -- 3. Get all the records from the table Customers where the Customer’s ID starts with “BL”.
// -- 6. Get all customers where the ShipRegion is not equal to NULL.

db.customers.find( {$and: [
    {customer_ID : /$BL/},
    {$not: [{ship_region: null}]}
]})

// Delete everyone who does not have an email address specified. (expect 37 matches)
db.people.deleteMany({email: null})

// Increment postal code by one where customer Id starts with BL?

db.customer.updateOne({customer_id: /$BL/},
    {$inc: {postal_code: 1}}
)

// slides to remember 
// 122 - limits
// 133 comparion operators
// 134 - 138 logical operaters
//140-141 projection - what you want to display
//149 - update Operators
//193 - Group stages
//197