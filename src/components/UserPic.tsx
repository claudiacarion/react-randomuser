import React from 'react';
import { UserData } from '../types';

interface IUserPicProps {
  user : UserData
}

const UserAge = ({ user: { pic } } : IUserPicProps) => (
    <img src={pic} alt="user pic" />
);

export default UserAge;
