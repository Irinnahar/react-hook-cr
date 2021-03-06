import React from 'react';

const UserTable = ({ users, onDelete, onEdit }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.length > 0 ? (
        users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button className="btn btn-danger" onClick={() => onEdit(user)}>
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No User Found</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
