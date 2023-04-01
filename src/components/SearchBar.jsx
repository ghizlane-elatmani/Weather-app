import { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";

const SearchBar = () => {
  const [fullSearch, setFullSearch] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => setFullSearch(!fullSearch)}
          className="bg-neutral-500 hover:bg-neutral-600 duration p-2 px-4 rounded-lg"
        >
          Search for places
        </button>
        <button className="bg-neutral-500 hover:bg-neutral-600 duration w-10 h-10 rounded-full flex justify-center items-center">
          <BiCurrentLocation />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
