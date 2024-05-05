import React, { useState } from "react";
import ListData from "../components/pocedex.List/ListData";
import Navbar from "../layout/navbar/Navbar";
import Searched from "../components/search/Searched";

function Home() {
  const [search, setSearch] = useState(null);
  const [query, setQuery] = useState("");
  return (
    <div>
      <Navbar query={query} setQuery={setQuery} setSearch={setSearch} />
      {search ? (
        <Searched pokemon={search} setQuery={setQuery} setSearch={setSearch} />
      ) : (
        <ListData />
      )}
    </div>
  );
}

export default Home;
