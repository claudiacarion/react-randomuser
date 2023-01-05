import React from 'react';
import { UserData } from '../types';

interface IUserNameChangeProps {
  user : UserData,
  nameChange(e: React.ChangeEvent<HTMLInputElement>): void
}

const UserNameChange = ({ user: { name }, nameChange } : IUserNameChangeProps) => (
    <div>
      <p>You can change the username here:</p>
      <input type="text" value={name} onChange={nameChange}/>
    </div>
);

export default UserNameChange;
