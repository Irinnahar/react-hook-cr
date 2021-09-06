import React, { useState } from 'react';

const AddUserForm = ({ addUser, showEdit }) => {
  const initialFormState = { id: null, name: '', username: '' };
  const [user, setUser] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.username) return;
    addUser(user);
    setUser(initialFormState);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
      />

      <button type="submit" className="btn btn-primary">
        Add new user
      </button>
    </form>
  );
};

export default AddUserForm;
