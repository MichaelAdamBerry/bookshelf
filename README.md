# bookshelf


This project pulls data from the google books api and creates a user interface to search for books by title. Users can select a book from the results to view more specific information about each title. If a free e-book is available, those titles are highlighted in the list and the user will be able to navigate to the online e-reader from the volume details view.

The App basically consists of three primary independent views or Routes.

![home component](https://github.com/MichaelAdamBerry/free_the_book/blob/master/readMe-assets/home.png)

The Home component renders the form and handles state for the user's title query. When submitted the url is updated to /views?=QUERY rendering the List component.

![list component](https://github.com/MichaelAdamBerry/free_the_book/blob/master/readMe-assets/list.png)

The list component pulls data from the url and React Router to make query the google api data base for a list of results. By default we are returned a list of ten book titles. Each book in the list contains specific volume data like an id and a VolumeInfo object as well as an onClick function which will route from /list?q=Query to /volume id?id=ID. Volume Id makes a separate api call to google books to fetch specific volume information.

![volume component](https://github.com/MichaelAdamBerry/free_the_book/blob/master/readMe-assets/volume.png)

The project was bootstrapped using Create-React-App

## Dependencies

React, React Router, Jest, React Testing Library, React Spring,

## Available Scripts

To run locally: 

From the root directory "npm run dev" 
This will open server on port 5000 with the client running on port 3000. 

To run tests :

from root directory cd into the client directory and run "npm run test" 

This application is deployed through Heroku at https://nameless-temple-40466.herokuapp.com/


## open issues: 

Testing: 

Recent updates to several dependecies for react hooks have broken some of the tests. I have chosen to keep some of those in while I identify the issue and update the tests. 

## next steps: 

Authenticated routes to manage and display a users personal bookshelf. 


