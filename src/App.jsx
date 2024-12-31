import { useState } from "react";
import SabziContainer from "./SabziContainer";
import SearchBar from "./SearchBar";
import { ToastContainer, Bounce, toast } from "react-toastify";

function App() {
  const [sabziList, setSabziList] = useState([]);

  const addItem = (item) => {
    setSabziList([...sabziList, item]);
    toast.success("grocery added Successfully");
  };
  console.log(sabziList);

  const removeItem = (itemId) => {
    const filteredSabziList = sabziList.filter((item) => item.id !== itemId);
    setSabziList(filteredSabziList);
    toast.warn("nikal diya bhai");
  };

  const updateStatus = (itemId) => {
    const updatedArr = sabziList.map((item) => {
        if(item.id === itemId){
          return {...item, completed: !item.completed}
        }else{
          return item
        }
    })
    setSabziList(updatedArr);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center  bg-slate-900">
      <div className="flex flex-col justify-center items-center w-[800px] h-auto mx-auto bg-lime-200 rounded-xl">
        <h1 className="text-4xl text-blue-800 select-none p-8 font-extrabold">
          Sabzi list
        </h1>
        <SearchBar addItem={addItem} />

        {sabziList.length === 0 ? (
          <h1 className="text-center font-bold text-5xl p-8">
            Jhola Khali ho gya!{" "}
          </h1>
        ) : (
          <SabziContainer sabziList={sabziList} removeItem={removeItem} updateStatus={updateStatus} />
        )}
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
