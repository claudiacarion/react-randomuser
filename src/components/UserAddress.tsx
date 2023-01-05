import React from 'react';
import { UserData } from '../types';

interface IUserAddressProps {
  user : UserData
}

const UserAddress = ({ user: { address } } : IUserAddressProps) => (
    <div>{address}</div>
);

export default UserAddress;
