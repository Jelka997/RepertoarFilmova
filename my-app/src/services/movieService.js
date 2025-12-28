import AxiosConfig from "./axiosConfig";

const RESOURCE = '/movies';

export async function getAllMovies(){
    const response = await AxiosConfig.get(RESOURCE);
    return response.data;
}

export async function getMovieById(id) {
    const response = await AxiosConfig.get(`${RESOURCE}/${id}`);
    return response.data;
}

export async function createMovie(movieData) {
    const response = await AxiosConfig.post(RESOURCE, movieData);
    return response.data;
}

export async function updateMovie(id, movieData){ 
    const response = await AxiosConfig.put(`${RESOURCE}/${id}`, movieData);
    return response.data
}

export async function deleteMovie(id) {
    const response = await AxiosConfi.delete(`${RESOURCE}/${id}`);
    return response.data;
}

export async function addMovieLike(id) {
    const response = await AxiosConfig.put(`${RESOURCE}/${id}/like`);
    return response.data;
}

export async function addMovieDislike(id) {
    const response = await AxiosConfig.put(`${RESOURCE}/${id}/dislike`);
    return response.data;
}