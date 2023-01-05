import React from 'react';
import { UserData } from '../types';

interface IUserAgeProps {
  user : UserData
}

const UserAge = ({ user: { age }, user: { name } } : IUserAgeProps) => (
    <div>{name} is {age} years old.</div>
);

export default UserAge;
