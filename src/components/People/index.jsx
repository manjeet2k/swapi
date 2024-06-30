import { useEffect } from "react";

const People = () => {
 
    useEffect(()=>{
        async function fetchData() {
            const response = await fetch("https://swapi.dev/api/people/");
            const peopleApiJson = await response.json();
            console.log(peopleApiJson);
        }

        fetchData();
    },[])
    return (
        <div>
        <h1>People</h1>
        </div>
    );
}

export default People;