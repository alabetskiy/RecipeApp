
import axios from 'axios';

const API_KEY = 'YOUR KEY CODE';
const PROXY = 'https://cors-anywhere.herokuapp.com/'; // because food2fork doesn't support CROSS ORIGIN support
const API_SEARCH = 'http://food2fork.com/api/search';


export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults() {
        try {
            const res = await axios(`${PROXY}${API_SEARCH}?key=${API_KEY}&q=${this.query}`);
            this.results = res.data.recipes;
            }
        catch (error) {
            alert(error);
        }
    }
}

