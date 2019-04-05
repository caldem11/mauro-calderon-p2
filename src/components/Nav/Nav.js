import React  from "react";
import './nav.css'
import styled from 'styled-components'
import { Link } from "gatsby"

const Home = styled.button`
    background-color: white;
    color: black;
    font-size: 1em;
    margin: 1em;
    padding-top: .5em;
    padding: 0.25em 1em;
    border: 2px solid white;
    border-radius: 3px;
    :hover{
        
        color: Black;
        font-size: 105%;
        border: 2px solid red;
    }
`
const TodoList = styled(Home)`
    :hover{
        border: 2px solid blue;
    }
`
const Game = styled(Home)`
:hover{
    border: 2px solid green;
}
`

const Snav = () => (
    <div>
        <ul>
            <Home><Link to="/">Home</Link></Home>
            <TodoList><Link to="/todo/"> To-Do List </Link> </TodoList>
            <Game>Game</Game>
        </ul>
    </div>
)

export default Snav;