// Add a person to the collection. You pick the data, but they should have an empty array for children.
db.people.insertOne({ first_name: "Mary", last_name: "Smith", email: "maryu@gmail.edu", gender:"Female", age: 17, state: "Ohio", "children": [] })

// Add another person. They should have at least two children.
db.people.insertOne({ first_name: "Suni", last_name: "Shia", email: "fake@rocketmail.com", gender:"Female", age: 34, state: "Washington", "children": [{name: "Dahlia", age: 4}, {name: "Sufiyan", age: 7}] })
// Update one person named Clarence. He moved from North Dakota to South Dakota.
db.people.updateOne({first_name: "Clarence"},
{ $set:{state: "South Dakota"}})
// Update Rebecca Hayes. Remove her email address.
db.people.updateOne({first_name: "Rebecca", last_name: "Hayes"},
{ $unset:{email: 1}})

// Update everyone from Missouri. They all had a birthday today, so add one to their age. (expect 4 matches)

// Jerry Baker has updated information. Replace with a new document:
// { first_name: "Jerry", last_name: "Baker-Mendez", email: "jerry@classic.ly", gender:"Male", age: 28, state: "Vermont", "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] }
// Delete Wanda Bowman.
// Delete everyone who does not have an email address specified. (expect 37 matches)

// In submissions collection
// Add several documents to a new submissions collection. Do it all in one command. (Remember, MongoDB will create the collection for you. Just start adding documents.)
// title: "The River Bend", upvotes: 10, downvotes: 2, artist: <ID of Anna Howard>
// title: "Nine Lives", upvotes: 7, downvotes: 0, artist: <ID of Scott Henderson>
// title: "Star Bright", upvotes: 19, downvotes: 3, artist: <ID of Andrea Burke>
// title: "Why Like This?", upvotes: 1, downvotes: 5, artist: <ID of Steven Marshall>
// title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: <ID of Gerald Bailey>
// Add 2 upvotes for "The River Bend".
// Add a field round2 = true to all submissions with at least 10 upvotes. (expect 3 matches)

// Extended Challenges:
// Update Helen Clark. She had a baby! Add a child, name: Melanie, age: 0.
// Joan Bishop has a child named Catherine. She just had a birthday and prefers to go by "Cat". In one query update the child's name to "Cat" and increment her age by one.
// List all submissions that have more downvotes than upvotes.

