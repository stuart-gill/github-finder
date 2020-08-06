import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, campsites } = githubContext;

  return loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {campsites.map((campsite) => (
        <UserItem key={campsite.campsite.id} campsite={campsite} />
      ))}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};
export default Users;
