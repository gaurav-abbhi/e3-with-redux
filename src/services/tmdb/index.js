const API_KEY = process.env.REACT_APP_TMDB_MEDIA_DATA_API_KEY_V3;
const BASE_URL = process.env.REACT_APP_TMDB_MEDIA_DATA_URL;
const IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_DATA_URL;


// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

export const popular = (type = 'movie', page = 1, language, region) => {

    let url = `${BASE_URL}/3/${type}/popular?api_key=${API_KEY}`;

    if (language && region) {
        url = `${url}&language=${language}&region=${region}&page=${page}`;
    } else {
        url = `${url}&page=${page}`;
    }
    return url;
};


// Image
// "http://image.tmdb.org/t/p/xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg"//Images
// // Fetch poster https://image.tmdb.org/t/p/w300_and_h450_bestv2/fki3kBlwJzFp8QohL43g9ReV455.jpg   size:w300_and_h450_bestv2
// //Fetch backdrop  http://image.tmdb.org/t/p/w1400_and_h450_face/xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg   size:w1400_and_h450_face
// //Fetch People https://image.tmdb.org/t/p/w138_and_h175_face/kshIWLAwqVXi3Ex2hSD3OUWOpBv.jpg      size:w138_and_h175_face

export const image = (name, size) => {
    const small = "w138_and_h175_face";
    const regular = "w300_and_h450_bestv2";
    const large = "w1400_and_h450_face";

    if (size === 'small') {
        return `${IMAGE_URL}/${small}/${name}`;
    } else if (size === 'large') {
        return `${IMAGE_URL}/${large}/${name}`;
    } else {
        return `${IMAGE_URL}/${regular}/${name}`;
    }
};

export const search = (parms) => {
    return console.log(parms);
};





