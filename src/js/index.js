import Search from './models/Search';

/* Global State of the app 
   * - Search object 
   * - Current recipe object
   * - Shopping list object
   * - Liked recipies 
 */
const state = {};

const controlSearch = async () => {
    // 1) Get the query from the view 
    const query = 'sushi'; // TODO

    if(query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results

        // 4) Search for recipies
        await state.search.getResults();

        // 5) Render results on UI 
        console.log(state.search.results);
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();   //it prevents the form to be submitted
    controlSearch();
})

