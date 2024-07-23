# 90s Cartoons Collection

This is a web application built with Node.js, Express, and PostgreSQL to manage a collection of 90s cartoon characters. Users can add, view, edit, and delete cartoon characters.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. **Clone the repository**

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Set up the PostgreSQL database:**

   - Ensure PostgreSQL is installed and running on your machine.
   - Create a new PostgreSQL database.
   - Update the database configuration in `dal.js` with your database credentials.

4. **Create the `cartoons` table:**

   Run the following SQL commands to create the `cartoons` table:

   ```
   CREATE TABLE cartoons (
       id SERIAL PRIMARY KEY,
       name VARCHAR(100) NOT NULL,
       show VARCHAR(100) NOT NULL,
       year INTEGER NOT NULL,
       description TEXT
   );
   ```

5. **Insert sample data:**

   Optionally, you can insert some sample data into the `cartoons` table:

   ```
   INSERT INTO cartoons (name, show, year, description) 
   VALUES 
   ('Tommy Pickles', 'Rugrats', 1991, 'The adventurous baby leader of the Rugrats.'),
   ('SpongeBob SquarePants', 'SpongeBob SquarePants', 1999, 'A friendly sea sponge who lives in a pineapple under the sea.'),
   ('Bugs Bunny', 'Looney Tunes', 1940, 'A clever rabbit known for outsmarting his enemies.'),
   ('Dexter', 'Dexter''s Laboratory', 1996, 'A boy genius who has a secret laboratory.'),
   ('Arnold', 'Hey Arnold!', 1996, 'A fourth grader with a football-shaped head and a kind heart.'),
   ('Doug Funnie', 'Doug', 1991, 'An imaginative young boy who journals his experiences.'),
   ('Daria Morgendorffer', 'Daria', 1997, 'A smart, acerbic, and somewhat cynical teenager.'),
   ('Helga Pataki', 'Hey Arnold!', 1996, 'A tough girl who secretly loves Arnold.'),
   ('Pinky', 'Pinky and the Brain', 1995, 'A dim-witted lab mouse who is friends with Brain.'),
   ('Brain', 'Pinky and the Brain', 1995, 'A super-intelligent lab mouse who plans to take over the world.'),
   ('Yakko Warner', 'Animaniacs', 1993, 'The eldest of the Warner siblings, known for his wit and charm.'),
   ('Wakko Warner', 'Animaniacs', 1993, 'The middle Warner sibling, known for his zaniness.'),
   ('Dot Warner', 'Animaniacs', 1993, 'The youngest Warner sibling, known for her cuteness.'),
   ('Johnny Bravo', 'Johnny Bravo', 1997, 'A muscular and narcissistic young man who believes he is a gift to women.'),
   ('Rocko', 'Rocko''s Modern Life', 1993, 'A wallaby who navigates the challenges of everyday life.');
   ```

6. **Start the server:**

   ```
   node index.js
   ```

7. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```

## Usage

- **Add a Cartoon:** Click on "Add New Cartoon" to add a new cartoon character to the collection.
- **View Cartoons:** The main page displays a list of all cartoon characters in the collection.
- **Edit a Cartoon:** Click on "Edit" next to a cartoon character to update its details.
- **Delete a Cartoon:** Click on "Delete" next to a cartoon character to remove it from the collection. A confirmation dialog will appear before deletion.

## Features

- **CRUD Operations:** Create, read, update, and delete cartoon characters.
- **Search:** Filter cartoons by name, show, or year using the search bar.
- **Confirmation Dialog:** Ensure safe deletion with a confirmation dialog.

## Technologies Used

- **Node.js**
- **Express**
- **PostgreSQL**
- **EJS (Embedded JavaScript Templates)**
- **HTML/CSS**

## Project Structure

```
QAP3-90sCartoons/
├── public/
│   ├── images/
│   │   └── logo.png
│   └── styles.css
├── routes/
│   ├── ui.js
│   └── api.js
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   └── show.ejs
├── sql/
│   ├── create.sql
│   ├── insert.sql
│   ├── select.sql
│   ├── update.sql
│   └── delete.sql
├── tests/
├── index.js
├── dal.js
└── package.json
```

## API Endpoints

- **GET /api/cartoons**: Retrieve all cartoons.
- **POST /api/cartoons**: Add a new cartoon.
- **PUT /api/cartoons/:id**: Update an existing cartoon.
- **PATCH /api/cartoons/:id**: Partially update an existing cartoon.
- **DELETE /api/cartoons/:id**: Delete a cartoon.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
