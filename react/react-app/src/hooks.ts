import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast"; 

export function useFriends() {
  const [show, setShow] = useState(false);
  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [listOfFriends, setListOfFriends] = useState<any[]>([]);
  const [nameToEdit, setnameToEdit] = useState("");
  const [ageToEdit, setageToEdit] = useState(0);
  const [idToEdit, setIdToEdit] = useState(0);
  const addFriend = () => {
    axios
      .post("http://localhost:5000/addfriend", {
        name: name,
        age: age,
      })
      .then(function (response) {
        setListOfFriends([...listOfFriends, response.data]);
        setname("");
        setage(0);
        toast.success("Friend Added Successfully");
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/read")
      .then((response) => {
        setListOfFriends(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  const deleteFriend = (id: number) => {
    axios
      .delete(`http://localhost:5000/deletefriend/${id}`)
      .then((response) => {
        setListOfFriends(listOfFriends.filter((friend) => friend._id !== id));
      })
      .catch(() => {
        console.log("error");
      });
  };

  const updateFriends = () => {
    axios
      .put(`http://localhost:5000/updatefriend/${idToEdit}`, {
        name: nameToEdit,
        age: ageToEdit,
      })
      .then((response) => {
        setListOfFriends(
          listOfFriends.map((friend) => {
            if (friend._id === idToEdit) {
              return response.data;
            }
            return friend;
          })
        );
        setnameToEdit("");
        setageToEdit(0);
        setIdToEdit(0);
      });
  };

  const updateFriend = (friend: any) => {
    setnameToEdit(friend.name);
    setageToEdit(friend.age);
    setIdToEdit(friend._id);
    setShow(true);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setname(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setage(Number(event.target.value));
  };
  const handlenameToEditChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setnameToEdit(event.target.value);
  };

  const handleageToEditChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setageToEdit(Number(event.target.value));
  };

  return {
    show,
    setShow,
    name,
    setname,
    age,
    setage,
    listOfFriends,
    setListOfFriends,
    nameToEdit,
    setnameToEdit,
    ageToEdit,
    setageToEdit,
    idToEdit,
    setIdToEdit,
    addFriend,
    deleteFriend,
    updateFriends,
    updateFriend,
    handleNameChange,
    handleAgeChange,
    handlenameToEditChange,
    handleageToEditChange,

  }
}

