import React, { useContext, useState } from 'react';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
import GoogleMapReact from 'google-map-react';
import CampsiteMapPin from './CampsiteMapPin';
import './map.css';

const CampsiteMap = () => {
  const [center] = useState({
    lat: 47.6,
    lng: -122.33,
  });
  const [zoom] = useState(8);
  const githubContext = useContext(GithubContext);

  const { loading, campsites } = githubContext;

  let key = process.env.REACT_APP_GOOGLE_API_KEY;

  // only display CampsiteMapPins that have at least one forecast period with temp above user's min temp
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
              <CampsiteMapPin
                lat={filteredCampsite.campsite.lat}
                lng={filteredCampsite.campsite.lng}
                text={filteredCampsite.campsite.name}
                campsite={filteredCampsite}
                key={filteredCampsite.campsite.id}
              />
            ))}
          {/* {campsites.map((campsite) => (
            <CampsiteMapPin
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

export default CampsiteMap;
