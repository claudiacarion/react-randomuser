import React from 'react';
import { UserData } from '../types';

interface IUserAgeProps {
  user : UserData
}

const UserAge = ({ user: { age } } : IUserAgeProps) => (
    <div>{age}</div>
);

export default UserAge;
