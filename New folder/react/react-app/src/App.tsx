import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useFriends } from "./hooks";
import Modal from "./Modal";
import React from "react";

function App() {
  const {
    show,
    setShow,
    listOfFriends,
    name,
    age,
    addFriend,
    handleNameChange,
    handleAgeChange,
    deleteFriend,
    updateFriends,
    updateFriend,
    handlenameToEditChange,
    handleageToEditChange,
    nameToEdit,
    ageToEdit,
  } = useFriends();

  return (
    <div className="App">
      <div className="inputs">
        <input
          type="text"
          value={name}
          placeholder="Friend name"
          onChange={handleNameChange}
        />
        <input
          type="number"
          value={age}
          placeholder="Friend age"
          onChange={handleAgeChange}
        />
        <button onClick={addFriend}>add Friend</button>
      </div>
      <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th> <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listOfFriends.map((friend: any) => {
            return (
              <tr key={friend._id}>
                <td>{friend.name}</td>
                <td>{friend.age}</td>
                <td>
                  <button onClick={() => updateFriend(friend)}>update</button>

                  <button onClick={() => deleteFriend(friend._id)}>
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal show={show} onClose={() => setShow(false)}>
        <div className="inputs">
          <p style={{color:'black' }}>UPDATE</p>
          <input
            type="text"
            value={nameToEdit}
            placeholder="Friend name"
            onChange={handlenameToEditChange}
          />

          <input
            type="number"
            value={ageToEdit}
            placeholder="Friend age"
            onChange={handleageToEditChange}
          />
          <button className="inputs" onClick={updateFriends}>update Friend</button>
        </div>
      </Modal>
     
      </div>
  );
}

export default App;
