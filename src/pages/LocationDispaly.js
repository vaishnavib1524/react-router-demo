import {useLocation} from 'react-router-dom';

const LocationDisplay=()=>
{
    const location = useLocation();
    return(
        <div>
            <h2>
                Current Location
            </h2>
            <p><b>Pathname:</b> {location.pathname}</p>
            <p><b>Search:</b> {location.search}</p>
            <p><b>Hash:</b> {location.hash}</p>
            <p><b>State:</b> {JSON.stringify(location.state)}</p>
        </div>
    );
};
export default LocationDisplay;