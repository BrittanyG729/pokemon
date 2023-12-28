const React = require('react')

function Index({pokemon}) {
    return (
        <>
            <h1>Welcome to my pokemon API!</h1>
            <nav>
                <ul>
                    {pokemon.map((p, i) => {

                        return (
                            <li>
                                <a href={`/pokemon/${i}`}>{p.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

module.exports = Index