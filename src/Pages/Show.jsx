import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {getShowsByID} from '../api/tvmaze'
import ShowMainData from "../components/shows/ShowMainData";
import Details from "../components/shows/Details";
import Seasons from "../components/shows/Seasons";
import Cast from "../components/shows/Cast";
import styled from "styled-components";
import { TextCenter } from "../components/common/TextCenter";

const Show = () => {
    const {showId} = useParams();
    
    //const {showData, showDataError} = useShowById(showId)
    const {data : showData, error : showDataError} = useQuery({ 
        queryKey: ['show', showId],
        queryFn: () => getShowsByID(showId),
        refetchOnWindowFocus: false
    })




    if(showDataError){
        return <TextCenter>Error {showDataError.message}</TextCenter>
    }
    if(showData)
        return (
        <ShowPageWrapper>
            <div>
                <BackHomeWrapper>
                    <Link to="/">Home</Link>
                </BackHomeWrapper>

                <ShowMainData 
                    image={showData.image}
                    name={showData.name}
                    rating={showData.rating}
                    summary={showData.summary}
                    genres={showData.genres}
                />
                <InfoBlock>
                <h2>Details</h2>
                    <Details 
                        status={showData.status}
                        premiered={showData.premiered}
                        network={showData.network}
                    />

                </InfoBlock>
                    <div>                
                        <h2>Cast</h2>
                        <Cast cast={showData._embedded.cast} />
                    </div>
                <InfoBlock>
                    
                </InfoBlock>

                <InfoBlock>
                    <div>
                        <h2>Seasons</h2>
                        <Seasons seasons={showData._embedded.seasons}/>

                    </div>
                </InfoBlock>
            </div>
        </ShowPageWrapper>
        )
    

    return <TextCenter>hello from Show loading screen</TextCenter>
}

export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;