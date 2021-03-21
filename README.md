# packhacks-2021

StudyVille aims to increase engagement and improve learning in online classes by providing a streamlined environment for students to learn and study.

## Inspiration

Doing college classes online can often feel like juggling a long list of different websites and technologies that change for each class. Furthermore, it is difficult to stay motivated to study and attend classes in the virtual setting. With StudyVille, we are aiming to fix these problems by creating a single place where all of your classes can take place. We wanted to create an application that incentivized and gamified studying for class to make it more fun and engaging.

## What it does

StudyVille is a “Virtual Campus” where students can attend lectures and study for tests alongside their peers. There is built-in messaging, video chat, and screen-sharing functionality so that all your online college classes can be hosted on the same application, instead of having using different technologies for each class. There is also a study-time tracking, with a ranking system and a leaderboard to encourage studying and to shine a spotlight on hardworking students.

## How we built it

StudyVille was built on the MERN stack. The front-end was built using React. The back-end is an Express server running on Node.js. MongoDB was used as the database. The site is hosted as a web application on Heroku.

## Challenges we ran into

Using Socket.io to create separate rooms for messaging proved to be quite difficult. The websockets connection would not work locally with the development proxy that we configured, which caused a lot of strange errors and headaches. Express, websockets, and MongoDB were new technologies to all of us, so working with all three for the first time was quite a steep learning curve.

## Accomplishments that we're proud of

For everyone on our team, it was our first time creating a full-stack application from scratch. We are proud that we were able to create a fully functional API and database. It was really exciting to use these technologies all together for the first time and actually be able to create a fully functional application.

## What we learned

One of the biggest things we learned was how to use websockets to create functional chat rooms for groups of users. Creating the APIs for authentication, rooms, and the leaderboard was also an important learning experience.

## What's next for StudyVille

In the future, we would like to add a greater degree of interactivity between users by rendering 2D rooms and avatars that users can use to interact with each other in the virtual space, in a manner similar to Club Penguin or RuneScape. We would also like to more fully flesh out the rooms by adding scheduling for classes and specific user roles with different permissions, such as teachers or administrators.
