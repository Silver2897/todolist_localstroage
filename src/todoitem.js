import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import "react-toggle/style.css";
import { Input,Row,Col } from 'antd';
const { Search } = Input;
import {
    DeleteOutlined,
    CheckCircleOutlined
  } from '@ant-design/icons';
  

let todoList = localStorage.getItem('todoList');
try{
    todoList = JSON.parse(todoList);
}catch(e){}

if(!todoList){
    localStorage.setItem('todoList', '[]')
}

const ToDoitem = ({ onItemSelection}) => {
    const[localStorageVal,setLocalStorageVal]= useState([...todoList]);
    const[value,setvalue]= useState();

    function onDelete (filteredData,key){
        localStorageVal.splice(key,1);
        localStorage.setItem('todoList',JSON.stringify(localStorageVal));
        setLocalStorageVal(JSON.parse(localStorage.getItem('todoList')))

    }

    useEffect(() => {
    });

const Onchange = value => {
    setvalue(value);
}

    const onSearch = value => {
        if(value.length!=0){
        localStorageVal.push({"title":value,"classname":"image-item"})
        localStorage.setItem('todoList',JSON.stringify(localStorageVal));
        setLocalStorageVal(JSON.parse(localStorage.getItem('todoList')));
        // document.getElementById('inputId').value='';
        }
    }

    const localItemList = JSON.parse(localStorage.getItem('todoList'));
    const tododata = localItemList.map((filteredData,key)=>
        <div key={key} className={filteredData.classname}> 
            <Row>
            <Col span={20} xs={20} sm={16} md={12} lg={16} xl={20}><p className="title-text">{filteredData.title}</p></Col>
            <Col span={4}  xs={4} sm={4} md={6} lg={8} xl={4}><p className="delete-tag" onClick={() => onDelete(filteredData,key)}><CheckCircleOutlined /></p></Col>
            </Row> 
        </div>
    );

    return(
        <div className="site-card-border-less-wrapper">
            <br />
            <Search
                placeholder="Add a New ToDo Item"
                allowClear
                enterButton="ADD"
                size="large"
                onSearch={onSearch}
                value={value}
            />   
            <div className="thumbnail-container">
                <br ></br>
                {tododata}
            </div>
        </div>
    )
}

export default ToDoitem;