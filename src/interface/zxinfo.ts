export interface ZXInfoSearchResult {
    hits: {
        hits: ZXInfoSearchResultHit[],
    },
    timed_out: boolean,
    took: number,
    _shards: {
        total: number,
        successful: number,
        skipped: number,
        failed: number
    }
}

export interface ZXInfoSearchResultHit {
    sort: ZXInfoSearchResultHitSort;
    _id: string;
    _index: string;
    _score: number;
    _source: ZXInfoSearchResultHitSource;
}

export interface ZXInfoSearchResultHitSort {
    0: number;
    1: string;
}

export interface ZXInfoSearchResultHitSource {
    additionalDownloads: any;
    authors: ZXInfoSearchResultHitSourceAuthor[];
    availability: string | null;
    contentType: string | null;
    genre: string | null;
    genreSubType: string | null;
    genreType: string | null;
    isbn: string | null;
    machineType: string | null;
    originalDayOfRelease: number | null;
    originalMonthOfRelease: number | null;
    originalYearOfRelease: number | null;
    publishers: ZXInfoSearchResultHitSourcePublisher[];
    releases: ZXInfoSearchResultHitRelease[];
    score: {
        score: number;
        votes: number;
    },
    screens: ZXInfoSearchResultHitScreen[];
    title: string;
    xrated: number;
    zxinfoVersion: string;
}

export interface ZXInfoSearchResultHitSourceAuthor {
    country: string | null,
    groupName: string | null,
    groupType: string | null,
    notes: [],
    groupCountry: string | null,
    authorSeq: number | null,
    role: [],
    name: string | null,
    labelType: string | null,
    type: string | null
}

export interface ZXInfoSearchResultHitSourcePublisher {
    country: string | null,
    notes: [],
    name: string | null,
    labelType: string | null,
    publisherSeq: number | null
}

export interface ZXInfoSearchResultHitRelease {
    files: {
        path: string | null;
        comments: string | null;
        size: number | null
    },
    publishers:
    {
        country: string | null,
        name: string | null,
        labelType: string | null,
        publisherSeq: number | null

    }
}

export interface ZXInfoSearchResultHitScreen {
    filename: string | null,
    size: number | null,
    scrUrl: string | null,
    format: string | null,
    release_seq: string | null,
    type: string | null,
    title: string | null,
    entry_id: number | null,
    url: string | null,
}