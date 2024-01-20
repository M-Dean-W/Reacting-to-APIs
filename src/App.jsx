import React, { useEffect, useState } from "react";

const App = () => {
    const [gFilms, setGFilms] = useState([])
    const [gPeeps, setGPeeps] = useState([])
    const [component, setComponent] = useState('')


    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/films')
            .then((res) => res.json())
            .then((data) => setGFilms(data))

    }, [])

    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/people')
            .then((res) => res.json())
            .then((data) => setGPeeps(data))

    }, [])

    return (
        <main>
            <div>
                <button onClick={() => setComponent('Films')}>Load Films</button>
                <button onClick={() => setComponent('People')}>Load People</button>
            </div>
            {component === 'Films' && (
                <div>
                    {gFilms.map((films) => (
                        <div key={`${films.id}-card`}>
                            <h1 >{films.title}</h1>
                            <h3>{films.description}</h3>
                        </div>
                    ))}
                </div>
            )}

            {component === 'People' && (
                <div>
                    {gPeeps.map((people) => (
                        <div key={`${people.id}-card`}>
                            <h1 >{people.name}</h1>
                            <p>
                                Age: {people.age}
                            </p>
                            <p>
                                Gender: {people.gender}
                            </p>
                            <p>
                                <a href={people.url}>{people.url}</a> 
                            </p>
                        </div>
                    ))}
                </div>
            )}

        </main>
    );
};

export default App;

