import React, { useEffect, useState } from 'react';

function Crudapp() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  function handleClick() {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        website,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser([...user, data]);
      });
  }

  function handleChange(id, key, value) {
    setUser((puser) => {
      return puser.map((u) =>
        u.id === id ? { ...u, [key]: value } : u
      );
    });
  }

  function handleDelete(e) {
    fetch(`https://jsonplaceholder.typicode.com/users/${e}`, {
      method: 'DELETE',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then(() => {
        setUser(() => user.filter((u) => u.id !== e));
      });
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold mb-2 bg-blue-400 w-full py-3 text-center text-white'>
        CRUD OPERATION
      </h1>
      <div className='my-3 flex flex-wrap '>
        <input
          className='border-2 w-72 border-gray-500 rounded-md outline-none py-1 pl-1 mb-2'
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className='border-2 w-72 border-gray-500 rounded-md outline-none ml-2 py-1 pl-1 mb-2'
          type='text'
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='border-2 w-72 py-2 border-gray-500 rounded-md outline-none mx-2 py-1 pl-1 mb-2'
          type='text'
          value={website}
          placeholder='website'
          onChange={(e) => setWebsite(e.target.value)}
        />
        <button className='text-white bg-green-400 px-2 py-1 rounded-md mb-2' onClick={handleClick}>
          Add User
        </button>
      </div>

      <div className='mb-8 bg-gray-100 px-3 pt-3 w-full overflow-hidden rounded-lg'>
        <table className='table-auto w-full'>
          <thead className='border-b-2 bg-gray-200'>
            <th>ID</th>
            <th className='md:px-6 px-3'>NAME</th>
            <th>EMAIL</th>
            <th className='md:pl-10 pl-3'>WEBSITE</th>
            <th>ACTIONS</th>
          </thead>
          <tbody className='mt-3'>
            {user.map((e) => (
              <tr className='border-b-2 max-w-full m-auto ml-5' key={e.id}>
                <td>{e.id}</td>
                <td className='px-6'>{e.name}</td>
                <td
                  className='px-3'
                  onInput={(event) => handleChange(e.id, 'email', event.target.innerText)}
                  contentEditable
                >
                  {e.email}
                </td>
                <td className='md:pl-10 pl-3'>{e.website}</td>
                <td>
                  <button className='mx-2 text-white bg-blue-400 px-2 py-1 mt-2'>Update</button>
                  <button onClick={() => handleDelete(e.id)} className='text-white bg-red-400 px-2 py-1 mb-2'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='w-full text-center text-white '>
        <p className='w-full bg-slate-400'>Made by Sathiyapriyan 💓 </p>
      </div>
    </div>
  );
}

export default Crudapp;
