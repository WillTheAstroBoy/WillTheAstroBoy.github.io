import{C as o}from"./vendor-271a6b41.js";const r=typeof localStorage!="undefined"&&JSON.parse(localStorage.getItem("user")),t=o(r);typeof localStorage!="undefined"&&t.subscribe(e=>{localStorage.setItem("user",JSON.stringify(e))});export{t as userStore};