const React = require('react')

function Show({pokemon}) {

    const headingStyle = {
        color: 'red',
        fontFamily: 'sans-serif'
    }

  return (
    <div>
        <h1 style={headingStyle}>Gotta catch 'em all!</h1>
        <img src={pokemon.img+".jpg"} alt="" />
        <br />
        <a href="/">Back</a>
    </div>
  )
}

module.exports = Show

/*
    git add .
    git commit -m "added show and index routes"
    git push origin main
*/