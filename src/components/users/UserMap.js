import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
import GoogleMapReact from 'google-map-react';
import CampsiteMapItem from './CampsiteMapItem';

const UserMap = ({
  center = {
    lat: 47.6,
    lng: -122.33,
  },
  zoom = 11,
}) => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  let apiKey = process.env.GOOGLE_API_KEY;

  //   this is not working
  UserMap.defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return loading ? (
    <Spinner />
  ) : (
    githubContext.users.length > 0 && (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ apiKey }}
          defaultZoom={zoom}
          defaultCenter={center}>
          {users.map((campsite) => (
            <CampsiteMapItem
              lat={campsite.campsite.lat}
              lng={campsite.campsite.lng}
              text={campsite.campsite.name}
              campsite={campsite}
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
