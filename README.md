## Eindopdracht Lil' Playlist 

### Got the following features working
- As a user I would like to fill in the following information about my song: title, artist, genre, rating (dropdown menu is not required).
  - *State form field managed in component, because is local state.*
- As a user I want to be able to click on one button so that my entered song will be added to my playlist.
  - *Change in state implemented through post request to JSONbox.io api and dispatch to Redux reducer*
- As a user I want to be able to see my songs in an overview (my playlist), where all entered data is visible.
  - *Components get rerendered when the state of the songlist changes*
- 1 POINT - Sort the songs by name (a-z or z-a) or artist (a-z or z-a), sort by stars (5-1 or 1-5)
  - *Realized by clicking on the table headers. In the genres view it is managed by each table seperate because of the local state management for the song list table*
- 1 POINT - Delete button: delete songs from the state
  -  *When deleting a row it first gets deleted from the API, then from the state with a dispatch to Redux from within the table component*
- 1 POINT - Categorize: each genre gets its own list and the song you add ends up with the respective genre
  - *The songs get renderd in diverent tables, one for each genre. The tables are displayed alphabeticaly on the genre name*
- 2 POINTS - Filter songs by
  - genre (select which genres you want) in the UI you see either a dropdown with which you can select 1 genre, or you can make a checkbox per genre, if that checkbox is checked: show the genre (this can also be several or none. to be)
    - *Click on checkboxes to display the songs in the genre you checked. It alters a state of the unique genres. Works in both views*
  - stars (sort which results with x stars you want to see) in the UI you see either a dropdown with which you can select 1 rating, or you make a checkbox per rating, if that checkbox is checked: show all songs of that rating (this can so there are also several or none)
    - *Click the dropdown button and select a rating. The state altered and the list gets rerenderd. Works in both views*
- 2 PUNTEN – REDUX
  - *Moved state that needs to be shared with multiple components to Redux.*
- **Own addidion**
  - Wanted the data to presist. The Firebase assignment was removed, but it was possible to save the songs to a JSONbox.io.
