# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
puts "start seed"
Question.create([
  {
    tag: "Ruby",
    title: "First Tittle",
    body: "first tile description is here"
  },
  {
    tag: "Ruby",
    title: "First Tittle",
    body: "first tile description is here"
  },
  {
    tag: "Rails",
    title: "First Tittle",
    body: "first tile description is here"
  },
  {
    tag: "Ruby",
    title: "First Tittle",
    body: "first tile description is here"
  },
  {
    tag: "React",
    title: "First Tittle",
    body: "first tile description is here"
  },
  {
    tag: "Rails",
    title: "First Tittle",
    body: "first tile description is here"
  }
])
puts "END PROCESS"
