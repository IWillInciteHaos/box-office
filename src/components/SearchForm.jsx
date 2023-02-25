import  {useState} from 'react'

const SearchForm =({onSearch}) =>{
    const [searchOptions, setSearchOptions] = useState('shows');
    const [searchStr, setsearchStr] = useState('');

    
    const onRadioChange = (ev) => {
        setSearchOptions(ev.target.value);
    }

    const onSearchInputChange = (ev) => {
        setsearchStr(ev.target.value);
    };

    const onSubmit = (ev) => {
        ev.preventDefault();

        const stuff = {
            q: searchStr,
            searchOptions
        }

        onSearch(stuff);
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input type='text' value={searchStr} onChange={onSearchInputChange} />

            <label>
                Shows
                <input type="radio" name="search-opt" value="shows" checked={searchOptions === 'shows'} onChange={onRadioChange} />
            </label>
            
            <label>
                Actors
                <input type="radio" name="search-opt" value="actors" checked={searchOptions === 'actors'} onChange={onRadioChange} />
            </label>

            <button type='submit' >Search</button>
        </form>
    </div>
}

export default SearchForm;