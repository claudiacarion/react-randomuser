import React from 'react';
import { UserData } from '../types';

interface IUserAddressProps {
  user : UserData
}

const UserAddress = ({ user: { address }, user: { name } } : IUserAddressProps) => (
    <div>{name} lives on {address}.</div>
);

export default UserAddress;
