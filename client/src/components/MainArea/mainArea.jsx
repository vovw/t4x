import React from "react";
import "./mainArea.css";
// import algoliasearch from 'algoliasearch/lite';
// import { InstantSearch } from 'react-instantsearch';
// import { SearchBox } from 'react-instantsearch';

// const searchClient = algoliasearch('01VEFWS334', 'cbf6acef6b856fb219f01b4d451d10d8');

export default function MainArea() {
  return (
    <>
      <section
        id="main"
        className="h-screen flex justify-center items-center flex-col"
      >
        <h1 className="text-3xl font-bold">Music song generator >_</h1>
        <div className="w-1/2">
          <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
          </form>
        </div>

        {/* <InstantSearch searchClient={searchClient} indexName="instant_search">
        <SearchBox/>
    </InstantSearch> */}
      </section>
    </>
  );
}
