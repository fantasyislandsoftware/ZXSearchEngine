import { useSearch } from "../api/useSearch";
import NavBar from "./NavBar";
import SearchResults from "./SearchResults";

const SearchEngine = () => {

    const { isLoading, data } = useSearch('glider rider');

    return <>
        <NavBar />
        {!isLoading ? <SearchResults data={data} /> : <div>Loading</div>}

    </>
}

export default SearchEngine