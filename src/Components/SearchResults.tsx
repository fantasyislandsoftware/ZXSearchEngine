import { FC } from "react";
import { ZXInfoSearchResult } from "../interface/zxinfo";

interface SearchResultsProps {
    data: ZXInfoSearchResult
}

const SearchResults: FC<SearchResultsProps> = ({ data }) => {

    const { hits } = data.hits;

    return <div className="max-w-screen-lg mx-auto p-4">
        <div className="grid grid-cols-4 gap-4 mt-12">
            {hits.map((hit, index) => {

                const { _source } = hit;

                return (
                    <div key={index} className="w-full h-0 shadow-lg pb-full rounded-xl bg-green-300">
                        {_source.title}
                    </div>
                );

            })}
        </div>
    </div>

}

export default SearchResults;