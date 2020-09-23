import React from 'react'

export default function Header(props: any): JSX.Element {
    const counter = props.count ? <span onClick={props.clickHandler}>- ({props.count}) &lt;toggle&gt;</span> : null

    return (
        <header>
            <h1>Breaking Bad</h1>
            <h6>Pick Your Favorite Episodes {counter}</h6>
        </header>
    )
}
