import React from 'react';
import { UserData } from '../types';

interface IUserNameChangeProps {
  user : UserData,
  nameChange(e: React.ChangeEvent<HTMLInputElement>): void
}

const UserNameChange = ({ user: { name }, nameChange } : IUserNameChangeProps) => (
    <div>
      <input type="text" value={name} onChange={nameChange} placeholder={'change name'}/>
    </div>
);

export default UserNameChange;
