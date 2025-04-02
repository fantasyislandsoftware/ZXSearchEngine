import { useQuery } from '@tanstack/react-query';

const fetchSearch = async (query: string) => {
    const response = await fetch(`https://api.zxinfo.dk/v3/search?query=glider%20rider&titlesonly=true&mode=compact&size=25&offset=0&sort=rel_desc`);
    return response.json();
}

export const useSearch = (query: string) => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['search', query],
        queryFn: () => fetchSearch(query),
        enabled: !!query,
        refetchOnWindowFocus: false,
    });

    return { data, isLoading, isError };


}