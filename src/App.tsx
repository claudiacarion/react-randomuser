import React, { useEffect, useState } from 'react';
import UserAddress from './components/UserAddress';
import UserAge from './components/UserAge';
import UserName from './components/UserName';
import UserNameChange from './components/UserNameChange';
import UserPic from './components/UserPic';
import { UserData } from './types';

function App() {
  const [user, setUser] = useState<UserData>({
    name: '',
    age: 0,
    address: '',
    pic: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.currentTarget;
    setUser({ ...user, name: value });
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://randomuser.me/api/');
      const data = await res.json();
      const fetchedUser = data.results[0];
      setUser(prev => ({
        ...prev,
        name: fetchedUser.name.first,
        age: fetchedUser.dob.age,
        address: fetchedUser.location.street.name,
        pic: fetchedUser.picture.large,
      }));
    };
    getData();
  }, []);

  return (
    <main>
      <UserName user={user} />
      <UserPic user={user} />
      <UserAge user={user} />
      <UserAddress user={user} />
      <UserNameChange user={user} nameChange={handleChange} />
    </main>
  );
}

export default App;
