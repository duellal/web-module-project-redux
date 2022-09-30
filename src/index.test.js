import React from 'react'
import {render, screen} from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App'
import reducers from './reducers/index'


describe('App renders correctly using a store', () => {
   let store 

   beforeEach(() => {
      store = configureStore({reducer: reducers})
   })
   
   test('Renders the app w/o errors', async () => {
      const {findByText} = render(
         <Provider store={store}>
            <Router>
               <App/>
            </Router>
         </Provider>
      )

      test('Renders movie list when app loads', () => {
         mockMovieDatabase.mockResolveValueOnce({
            
         })
      })

   })   
})



//Ask Jess about connect store error for this test
// How can I pass that error?
   // The example from the video does not have a Provider with a store, so I cannot look at that to see
   //Neither does the Stranger Things assignment meant for this module