import  {useState} from 'react'
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './CustomRadio';

const SearchForm =({onSearch}) =>{
    const [searchOptions, setSearchOptions] = useState('shows');
    const [searchStr, setsearchStr] = useSearchStr();

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

            <CustomRadio
                label="Shows"
                name="search-opt" 
                value="shows" 
                checked={searchOptions === 'shows'} 
                onChange={onRadioChange}             
            />
            
            <CustomRadio
                label="Actors"
                name="search-opt" 
                value="actors" 
                checked={searchOptions === 'actors'} 
                onChange={onRadioChange}             
            />

            <button type='submit' >Search</button>
        </form>
    </div>
}

export default SearchForm;