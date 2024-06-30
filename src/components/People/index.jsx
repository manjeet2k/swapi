import { useEffect, useState } from "react";

const People = () => {
  const [details, setDetails] = useState();
  const [page, setPage] = useState(1);

  function handleLoadMore() {
    if(page * 10 < details.count) {
        setPage((prev) => prev + 1);
    }
    
    
  }
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://swapi.dev/api/people/?page=${page}`
      );
      const peopleApiJson = await response.json();

      setDetails((prev) => {
        console.log("Processing... ")

        return {
          count: peopleApiJson.count,
          results: prev?.results
            ? [...prev.results, ...peopleApiJson.results]
            : peopleApiJson.results,
        };
      });
    }

    fetchData();
  }, [page]);

  return (
    <div>
      {details ? (
        details.results.map((people) => (
          <div className="card" key={people.name}>
            <div className="people-details">
              <h1 className="people-name">{people.name}</h1>
              <h3 className="people-birthYear">{people.birth_year}</h3>
              <h3 className="">{people.gender}</h3>
            </div>
          </div>
        ))
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
      <button type="button" onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default People;
