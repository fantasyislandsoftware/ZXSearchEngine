import { useSearch } from "../api/UseSearch";

const SearchEngine = () => {

    const x = useSearch('glider rider');

    console.log(x);

    return <>
        test
    </>
}

export default SearchEngine