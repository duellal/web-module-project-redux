import React from 'react'
import {render, screen} from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App'
import reducers from './reducers/index'
import {movies as mockMovieDatabase} from './data'

jest.mock('./data')

describe('App renders correctly using a store', () => {
   let store 

   beforeEach(() => {
      store = configureStore({reducer: reducers})
   })
   
   test('Renders the app w/o errors', () => {
      render(
         <Provider store={store}>
            <Router>
               <App/>
            </Router>
         </Provider>
      )
   })   

   test('Renders movie list when app loads', async () => {
      mockMovieDatabase.mockResolveValueOnce({
         data: [
            {
               id: 0,
               title: "The Godfather",
               director: "Francis Ford Coppola",
               metascore: 100,
               genre: "Drama",
               description: "War hero Michael is the prodigal son of aging but fearsome crime patriarch Don Vito Corleone. When Michael returns home only to be thrust into an all-too-familiar world of hitmen, corrupt cops, and simmering mafia rivalries, he is forced to choose between his own path and the Corleone family legacy."
             },
             {
               id: 1,
               title: "Star Wars",
               director: "George Lucas",
               metascore: 92,
               genre: "Scifi",
               description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
             },
             {
               id: 2,
               title: "The Lord of the Rings: The Fellowship of the Ring",
               director: "Peter Jackson",
               metascore: 92,
               genre: "Fantasy",
               description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
             }
         ]
      })

      render(
         <Provider store={store}>
            <Router>
               <App/>
            </Router>
         </Provider>
      )

      await waitFor(() => {
         expect(screen.getByRole('button').toHaveLength(3))
      })
   })
})
