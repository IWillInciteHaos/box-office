import {useState} from 'react'
import {searchForShows, searchForPeople} from '../api/tvmaze';
import ActorsGrid from '../components/actors/ActorsGrid';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';

const Home = () => {
    const [apiData, setApiData] = useState(null);
    const [apiDataError, setApiDataError] = useState(null);


    const onSearch = async ({q, searchOptions}) => {
        try {
            setApiDataError(null);

            let result;
//retult = await searchOptions === 'shows' ? searchForShows(q) : searchForPeople(q);
            if(searchOptions === 'shows'){
                result = await searchForShows(q);
            }
            else{
                result = await searchForPeople(q);
            }
            setApiData(result);
            
        } catch (error) {
            setApiDataError(error);
        }
    }


    const renderApiData = () => {
        if(apiDataError){
            return <div> Error occured: {apiDataError.message}</div>
        }

        if(apiData?.length === 0){
            return<div>No results!</div>;
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


    return (<div>
        <SearchForm onSearch={onSearch} />      

        <div>
            {renderApiData()}
        </div>
        
    </div>
    );
}

export default Home;