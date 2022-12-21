import React from 'react'
import { observable, autorun, computed, action ,makeAutoObservable } from 'mobx';


 export class Authstore {
 
    issignup=false;
    isauthenticated=false;

   constructor(){
    makeAutoObservable(this,{
        issignup:observable,
        isauthenticated:observable,
        gotosignin:action,
        gototodo:action,
        })
    
   }

   gotosignin =()=>{
        this.issignup=true;
   }

   gototodo =()=>{
        this.isauthenticated=true
   }

  }

export default Authstore ;