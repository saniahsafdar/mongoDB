  
// List all people. (200)
db.people.find()

// Count all people. (200)
db.people.find().count()

// List all people in Arizona. (6)
db.people.find({state:'Arizona'})

// List all males in Arizona. (2)
db.people.find({state:"Arizona"},{gender: "Male"})

// List all people in Arizona plus New Mexico. (8)
db.people.find( { $or: [
    {state: "Arizona"},
    {state: "New Mexico"}
    ]}).count()
// List all people under age 40. (90)
db.people.find({age: {$lt:40}})
// List all females in Florida between the ages of 40 and 45 (inclusive). (4)
db.people.find( { $and: [
    {gender: "Female"},
    {state: "Florida"},
    {age: {$lte: 45} },
    {age: {$gt: 40} },
    ]})

// List people whose first name starts with "H". (2)
db.people.find({first_name: /^H/})

// List all people in Michigan, sorted by first name. (6)

db.people.find({state: "Michigan"}).sort({first_name:1})

// List all people who live in Virginia or are named Virginia.

db.people.find({$or:[
    {state:"Virginia"},
    {first_name:"Virginia"}
]})
// List the names of people under age 30. Only display their first and last name. (38)
db.people.find({age:{$lte:30}},{first_name:1, last_name:1})

// List all people in Montana. Display all information except age. (2)


db.people.find({state: "Montana"}, {age: 0})

// List the email addresses of people with a ".edu" email. Only display the email. (12)

db.people.find({email: /.edu$/} , {email: 1})