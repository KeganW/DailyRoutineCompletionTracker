import React from 'react';
import {Link} from "react-router-dom";

const styleHeader = {
    fontSize: '60px',
    fontFamily: 'Century Schoolbook',
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '20px',
    backgroundColor: 'black',
    color: '#ffffff'
}

const styleAbout = {
    fontSize: '40px',
    fontFamily:'cursive',
    textAlign: 'center',
    padding: '55px',
    lineHeight: '55px'
}

const styleDiv = {
    height: '100vh',
    backgroundColor: '#f2f2f2'
}

const styleButton = {
    display: 'block',
    border: 'solid 2px black',
    height: '65px',
    margin: 'auto',
    width: '20%',
    fontSize: '30px'


}

export const Information = (props) => {
    return (
      <div style={styleDiv}>
          <h2 style={styleHeader}> About </h2>

          <p style={styleAbout}>Hello. My name is Kegan, and I am a student at UCSD. This was
          just a side project of mine, as my personal goal was to learn and get comfortable
          with ReactJS. The purpose of this project was just to keep track of my
          daily tasks. I recommend that you type all the tasks you need to get done
          at the start of your day, and check them off throughout. I hope you find
          this project useful.
          </p>

          <Link to="/" >
            <button style={styleButton}> Home </button>
          </Link>
      </div>
    );
}