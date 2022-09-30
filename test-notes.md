# Tests for Movie Database:

- App renders correctly

### Movie Details
- Click 'View' button for a movie + it directs you to that movie's detail page
   - Click on 'delete' button to delete that movie from the database
      - it should redirect you to the new database
   - The "favorite" button appears when you click on the "Show Favorites" button
      - The "Favorite" button disappears when you click on the "Show Favorites" button
   - When the "Favorite" button is clicked, the movie gets added to the "Favorite Movies" list to the left hand side of the screen
      - IF that movie is already in the list, it will not add it again
   - "View all Movies" button takes the user to the (possibly altered) movie database

### Add a Movie
- "Add New Movie" button takes user to a form with input boxes and two buttons:
   Input Boxes:
      - a title (string)
      - a director (string)
      - a genre (string)
      - a metascore (number)
      - a description (string)
   
   Buttons:
      - Add
         - Adds whatever is inputted into the form as a movie in the database
      - cancel 
         - redirects the user to the movie database page
         - does not add a movie to the database (or lack thereof)

- All input boxes allows the user to input (type) into them
   - the metascore only allows a number to be typed in

### Favorite Movies List
- The list shows on the left hand side
- The list shows the current movies selected as a favorite
- When the circular button with a "-" gets clicked, that movie gets deleted from the "Favorite Movies" list
- A particular movie cannot be added more than once
- Clicking on a movie in the favorites list allows the user to go to that movies detail page
   