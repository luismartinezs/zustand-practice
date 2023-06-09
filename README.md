# Zustand practice

## Easy Exercises:

- [x] Create a simple counter store using Zustand that stores a count value and has methods to increment and decrement the count.
- [x] Create a store using Zustand that stores a boolean value indicating whether a modal is open or closed. Add methods to the store to toggle the value of this boolean.
- [x] Create a store using Zustand that stores an array of strings. Add methods to the store to add and remove strings from the array.

## Moderate Exercises:

- [x] Create a store using Zustand that stores an array of objects representing tasks. Each task object should have a title, description, and a completed property. Add methods to the store to add, remove, and toggle the completed property of tasks.
- [x] Create a store using Zustand that stores an object representing a user's authentication state. The object should have properties for the user's email, password, and a boolean indicating whether the user is logged in or not. Add methods to the store to log in and log out the user.
- [x] Create a store using Zustand that stores an object representing a shopping cart. The object should have properties for the items in the cart, as well as methods to add and remove items, update the quantity of items, and calculate the total cost of the items in the cart.

## Difficult Exercises:

- [x] Create a store using Zustand that stores an object representing a game board. The object should have properties for the state of each cell on the board (e.g. empty, player1, player2) as well as methods to update the state of cells and check for a win condition.
- [x] Create a store using Zustand that stores an array of objects representing chat messages. Each message object should have properties for the sender, timestamp, and message text. Add methods to the store to add new messages and fetch previous messages from a server.
- [ ] Create a store using Zustand that stores an object representing a music player. The object should have properties for the currently playing song, the current position in the song, and the playback state (e.g. playing, paused, stopped). Add methods to the store to play, pause, and stop the current song, as well as skip to the next or previous song in a playlist.
  - I tried to do this with Spotify API but it is a pain to get a new access token every few minutes
