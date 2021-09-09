// create your App component here
import React, { useState, useEffect } from "react";

function App () {
    const [fetching, setFetching] = useState(true);
    const [Dog, setDog] = useState ([])

    useEffect (() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(
            (data) => {
            setDog(data);
            setFetching(!fetching)
        })
    }, [])

    if(fetching){
        return(
            <p>Loading...</p>
        )
    }

    return (
        <div className="App">
           <img src={Dog.message} alt="A Random Dog"></img>
        </div>
    )

}

export default App;