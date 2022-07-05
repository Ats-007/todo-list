import React from 'react'


export const Footer = () => { 
    const myStyle={
        TextDecoder: "none",
        color: "inherit"
    }
    const heart={
        color: "#e03e6f"
    }
    return (
        <footer className="bg-dark text-light py-3">
            <p className="text-center">
                Created with <span style={heart}>&#10084;</span> by<span> </span>
                <a style={myStyle} href="https://www.linkedin.com/in/atash-mandal-32b002217" target="_blank">
                Atash Mandal              
                </a>
            </p>
        </footer>
    )
}

