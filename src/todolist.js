import React,{useEffect} from 'react';
import data from './data.json';
import './App.css';
import ToDoitem from './todoitem';

const ToDolist = () => {
  const [imgUrl,setimgUrl] = React.useState('');

   function onItemSelection(data){
    setimgUrl(data.name);
    setdataContent(data);
  }

    return(
      <div className="gallery">
        <ToDoitem onItemSelection={onItemSelection}></ToDoitem>
      </div>
    )
}

export default ToDolist;