import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import App from '../App'
import PokedexDetails from '../components/PokedexDetails/index'

const Root = () => {
    return (
        <Router>
            <Routes>
                <Route 
                  path="/pokedex/"
                  element={<PokedexDetails />}
                />
                <Route 
                  path="/pokemon/:id"
                  element={<PokedexDetails />}
                />
                <Route 
                  path="/"
                  element={<App />}
                />
            </Routes>
        </Router>
    )
} 

export default Root