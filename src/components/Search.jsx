import axios from "axios";
import { createClient } from "pexels";
import React, { useEffect, useState } from "react";

const Search = () => {
  const client = createClient(
    "563492ad6f91700001000001bfa6d5e7575041759a1b4114d6ac0c3b"
  );
  const query = "nature";
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const toto = client.photos
    .search({ query, per_page: 1 })
    .then((photos) => console.log(photos));
  /* useEffect(() => {
    axios
      .get(client.photos.search({ search, per_page: 1 }))
      .then((res) => setSearchResult(res.data));
  }, [search]);
  console.log(searchResult); */
  return (
    <div>
      <form action="">
        <input
          className="bg-slate-500"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
      </form>
      <button type="submit">Valider</button>
    </div>
  );
};

export default Search;
