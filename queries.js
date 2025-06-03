// queries.js

// 1. Find all books
db.books.find()

// 2. Find books with rating greater than 4
db.books.find({ rating: { $gt: 4 } })

// 3. Find books by Chinua Achebe
db.books.find({ author: "Chinua Achebe" })

// 4. Insert a new book
db.books.insertOne({
  title: "Learning MongoDB",
  author: "Student Dev",
  genre: "Education",
  rating: 4.7,
  year: 2025
})

// 5. Update rating of "Learning MongoDB"
db.books.updateOne(
  { title: "Learning MongoDB" },
  { $set: { rating: 4.9 } }
)

// 6. Delete the inserted book
db.books.deleteOne({ title: "Learning MongoDB" })

// 7. Find books in genres "Fiction" or "Science"
db.books.find({ genre: { $in: ["Fiction", "Science"] } })

// 8. Project only title and author
db.books.find({}, { title: 1, author: 1, _id: 0 })

// 9. Sort books by rating descending
db.books.find().sort({ rating: -1 })

// 10. Aggregation: Average rating by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgRating: { $avg: "$rating" } } },
  { $sort: { avgRating: -1 } }
])

// 11. Create index on title
db.books.createIndex({ title: 1 })

// 12. Explain query performance for title search
db.books.find({ title: "Things Fall Apart" }).explain("executionStats")
