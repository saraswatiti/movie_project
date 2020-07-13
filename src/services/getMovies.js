import axios from 'axios';
import { tmdb_api_url, tmdb_api_key } from '../config';

export const getMovie = async () => {
    try {
        const datas = await axios.all([
            axios.get(
                `${tmdb_api_url}/movie/now_playing?api_key=${tmdb_api_key}&language=en-US&page=1`
            ),
            axios.get(
                `${tmdb_api_url}/movie/popular?api_key=${tmdb_api_key}&language=en-US&page=1`
            ),
            axios.get(
                `${tmdb_api_url}/movie/top_rated?api_key=${tmdb_api_key}&language=en-US&page=1`
            ),
        ]);

        return datas.data.results;

    } catch (error) {

        throw new Error(error.message);
    }

}