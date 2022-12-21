import React from 'react'
import { observable, autorun, computed, action ,makeAutoObservable } from 'mobx';


class Store {
   todoitem=[];
   itemvalue="";

   constructor(){
    makeAutoObservable(this,{
            todoitem:observable,
            addtodo:action,
            itemvalue:observable,
            updateinput:action,
        })
    
   }

   addtodo =()=>{
    this.todoitem.push(this.itemvalue)
   }

   updateinput =(val)=>{
        this.itemvalue=val
   }

  }

export default Store