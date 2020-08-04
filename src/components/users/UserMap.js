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

  const { loading, users } = githubContext;

  let key = process.env.GOOGLE_API_KEY;

  return loading ? (
    <Spinner />
  ) : (
    githubContext.users.length > 0 && (
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={key}
          defaultZoom={zoom}
          defaultCenter={center}>
          {users.map((campsite) => (
            <CampsiteMapItem
              lat={campsite.campsite.lat}
              lng={campsite.campsite.lng}
              text={campsite.campsite.name}
              campsite={campsite}
              key={campsite.campsite.id}
            />
          ))}
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
