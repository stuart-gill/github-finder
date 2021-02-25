import React, { useContext, useState } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
import GoogleMapReact from 'google-map-react';
import CampsiteMapItem from './CampsiteMapItem';
import './map.css';

const UserMap = () => {
  const [center, setCenter] = useState({
    lat: 47.6,
    lng: -122.33,
  });
  const [zoom, setZoom] = useState(8);
  const githubContext = useContext(GithubContext);

  const { loading, campsites } = githubContext;

  let key = process.env.REACT_APP_GOOGLE_API_KEY;

  // only display CampsiteMapItems that have at least one forecast period with temp above user's min temp
  // perhaps this functionality should be done in a reducer, which sets an "acceptable campsites" state array
  return loading ? (
    <Spinner />
  ) : (
    campsites.length > 0 && (
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultZoom={zoom}
          defaultCenter={center}
          google
          m>
          {campsites
            .filter((campsite) =>
              campsite.campsite.forecasts.some(
                (forecast) => forecast.temperature > githubContext.minTemp
              )
            )
            .map((filteredCampsite) => (
              <CampsiteMapItem
                lat={filteredCampsite.campsite.lat}
                lng={filteredCampsite.campsite.lng}
                text={filteredCampsite.campsite.name}
                campsite={filteredCampsite}
                key={filteredCampsite.campsite.id}
              />
            ))}
          {/* {campsites.map((campsite) => (
            <CampsiteMapItem
              lat={campsite.campsite.lat}
              lng={campsite.campsite.lng}
              text={campsite.campsite.name}
              campsite={campsite}
              key={campsite.campsite.id}
            />
          ))} */}
        </GoogleMapReact>
      </div>
    )
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};
export default UserMap;
