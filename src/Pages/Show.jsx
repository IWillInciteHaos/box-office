import { useParams } from "react-router-dom";

const Show = () => {
    const {showId} = useParams();
    

    return <div>hello from Show page {showId}</div>
}

export default Show;