import { FC } from "react";
import { ZXInfoSearchResult } from "../interface/zxinfo";
import NoResults from "./NoResults";
import { getThumbnailUrl } from "../functions/thumbnails";

interface SearchResultsProps {
    data: ZXInfoSearchResult
}

const SearchResults: FC<SearchResultsProps> = ({ data }) => {

    if (!data || !data.hits) {
        return <NoResults />
    }

    const { hits } = data.hits;

    return <div className="max-w-screen-lg mx-auto p-4">
        <div className="grid grid-cols-4 gap-4 mt-12">
            {hits.map((hit, index) => {

                const { _source } = hit;
                const { title, screens } = _source;

                const thumbnail = getThumbnailUrl(screens);

                return (
                    <div key={index} className="p-4 w-full h-0 shadow-lg pb-full rounded-xl bg-blue-200" style={{ overflow: "hidden" }}>
                        {title}
                        <img style={{ maxHeight: '150px' }} src={thumbnail}></img>

                    </div>
                );

            })}
        </div>
    </div>

}

export default SearchResults;