<<<<<<< HEAD
=======
import React from "react";
import "./mainArea.css";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits, Highlight, Configure} from "react-instantsearch";

const algoliaAppId = "01VEFWS334";
const algoliaApiKey = "cbf6acef6b856fb219f01b4d451d10d8";
const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);

function Hit({ hit }) {
  return (
    <article>
        <h1><Highlight attribute="Genre" hit={hit} /></h1>
        <p>{hit.Description}</p>
    </article>
  );
}

export default function MainArea() {
  return (
    <>
      <section
        id="main"
        className="h-screen flex justify-center items-center flex-col text-white"
      >
        <h1 className="text-3xl font-bold">Music song generator_</h1>
        <div className="w-1/2">

        <InstantSearch searchClient={searchClient} indexName="Genre">
          <SearchBox className="container" />
          <Hits hitComponent={Hit} />
          <Configure hitsPerPage={4} />
        </InstantSearch>




          {/* <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <input
                className="shadow appearance-none bg-black border rounded w-full py-4 px-8 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="flex w-100 items-center justify-center">
              <div className="musicModBtn mx-4">lreom</div>
              <div className="musicModBtn mx-4">dff</div>
              <div className="musicModBtn mx-4">grgr</div>
              <div className="musicModBtn mx-4">rgrgrgr</div>
              <div className="musicModBtn mx-4">rgrgrgr</div>
            </div>
          </form> */}
        </div>

        
      </section>
    </>
  );
}
>>>>>>> fdd2e596bbb16e2265c93fe1b3f8d3550cb70a60
