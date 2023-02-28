import {useState} from 'react'
import {searchForShows, searchForPeople} from '../api/tvmaze';
import ActorsGrid from '../components/actors/ActorsGrid';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import { useQuery } from '@tanstack/react-query';
import { TextCenter } from '../components/common/TextCenter';


const Home = () => {

    const [filter, setFilter] = useState(null)

    const { data : apiData, error : apiDataError} = useQuery({
        queryKey: ['search', filter],
        queryFn: () => filter.searchOptions === 'shows'
            ? searchForShows(filter.q)
            : searchForPeople(filter.q),
        // ⬇️ disabled as long as the filter is empty
        enabled: !!filter, 
        refetchOnWindowFocus: false
    });


    const onSearch = async ({q, searchOptions}) => {
        setFilter({q, searchOptions})
    };

    const renderApiData = () => {
        if(apiDataError){
            return <TextCenter> Error occured: {apiDataError.message}</TextCenter>
        }

        if(apiData?.length === 0){
            return<TextCenter>No results!</TextCenter>;
        }

        if(apiData ){
            return apiData[0].show 
            ? <ShowGrid shows={apiData}/>
            //apiData.map(data=> <div key={data.show.id}>{data.show.name}</div>)
            : <ActorsGrid actors={apiData}/>
            //apiData.map(data=> <div key={data.person.id}>{data.person.name}</div>)
        }
        return
    }


    return (
    <div>
        <SearchForm onSearch={onSearch} />      

        <div>
            {renderApiData()}
        </div>
        
    </div>
    );
}

export default Home;