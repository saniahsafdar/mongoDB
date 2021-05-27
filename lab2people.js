// Average age
// Expected Result: 41.41

db.people.aggregate([
    {$group:{
        _id:null ,
        averageAge: {$avg: "$age" }
    }}
])

// Average age by gender
// Expected Result: Female: 42.04, Male: 40.60

db.people.aggregate([
    {$group:{
        _id: "$gender" ,
        averageAge: {$avg: "$age" }
    }}
])
// Number of people by gender
// Expected Result: Female: 113, Male: 87
// 3 oldest people
// Expected Result: Phyllis Gray 81, Melissa Banks 79, Walter Bishop 76
// 5 youngest people, display only their names as one value (first + " " + last) and their ages
// Expected Result: Nicholas Hunter 17, Kenneth Burns 18, Kathy Hayes 19, Edward Hayes 21, Steve Vasquez 21)
// Average number of children
// Expected Result: 2.34
// Name and age of children in Michigan who are under age ten
// Expected Result: Adam 0, Janice 1, Judith 3, Beverly 4, Antonio 6, Jeremy 7
// Average age of child by state, sorted with oldest first
// Expected Result: Rhode Island 20, Idaho 20, Louisiana 15.7, Kentucky 13.1, Indiana 12.6, ...
