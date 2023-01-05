import React from 'react';
import { UserData } from '../types';

interface IUserNameProps {
  user : UserData
}

const UserName = ({ user: { name } } : IUserNameProps) => (
    <h1>{name}</h1>
);

export default UserName;
