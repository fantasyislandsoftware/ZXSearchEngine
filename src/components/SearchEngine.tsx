import { useState } from "react";
import { useSearch } from "../api/useSearch";
import NavBar from "./NavBar";
import SearchResults from "./SearchResults";
import Loading from "./Loading";

const SearchEngine = () => {

    const [searchText, setSearchText] = useState('');
    const { isLoading, data } = useSearch(searchText);

    return <>
        <NavBar setSearchText={setSearchText} />
        {!isLoading ? <SearchResults data={data} /> : <Loading />}
    </>
}

export default SearchEngine