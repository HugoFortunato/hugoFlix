import React from 'react'

function ButtonLink(props) {
    // props => {é o classname: "o que alguém quer passar", href: "/"}
    console.log(props)
    return (
        <a href ="/" className={props.className}>
            {props.children}
        </a>
    )
}

export default ButtonLink