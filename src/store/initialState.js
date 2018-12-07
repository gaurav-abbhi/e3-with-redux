const initialState = {
    auth: {
        status: "ANONYMOUS",
        email: null,
        displayName: null,
        photoURL: null,
        uid: null
    },
    recommendation: {},
    genres: [],
    selectedGenres: [],
    categories: ["movie", "shows", "trailers"],
    selectedCategory: null,
    selection: ["popularity", "discover", "upcoming", "in theatre"],
    selectedSelection: null,
    catalog: {
        movie: {
            results: {},
            activePage: null,
        },
        tv: {
            results: {},
            activePage: null,
        }
    },
    selectedCatalogItem: null,
    search: {
        history: {},
        results: {}
    },
    bookmarks: {},
    favourite: {}
};

export default initialState;
