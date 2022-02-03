import React from "react";
import s from './users.module.css'
let Users = (props) =>{
if (props.users.length === 0  ) { 
 props.setUsers( [
 {id:1, photoUrl: 'https://www.eg.ru/wp-content/uploads/2021/10/igor-nikolaev2112017.jpg', followed: true, fullName: 'Sergey', status: 'I am a sinior developer ', location:{city:'Halytsa', country:'Ukraine'} },
 {id:2, photoUrl: 'https://teleportal.ua/storage/editor/fotos/igor-rubashkin.jpeg', followed: false,  fullName: 'Igor', status: 'I am a builder', location:{city:'Chernivtsi', country:'Ukraine'}},
 {id:3, photoUrl: 'https://im.kommersant.ru/CorpImages/Authors/!gulin_igor_10.jpg', followed: true,  fullName: 'Mykola', status: 'I am a midle fulstack developer', location:{city:'Delyatun', country:'Ukraine'}},
 {id:4, photoUrl: 'https://s1.cdn.teleprogramma.pro/wp-content/uploads/2019/10/ac7c6dc4b095625d2c320a1546c4c356.jpg', followed: false, fullName: 'Chrystya', status: 'I am a cookies baker', location:{city:'Novoselytsa', country:'Ukraine'}},
]
)
};

  return <div>
     { 
     props.users.map( u =>  <div kay = {u.id}  >
        <span>
          <div> <img src={u.photoUrl} className = {s.userPhoto}/> </div>
          <div> 
            { u.followed
            ? <button onClick={ () => {props.unFollow(u.id)} } > unFollow </button> 
            : <button onClick={ () => {props.follow(u.id)} } > Follow </button> 
            }
            
            </div>
        </span>
        <span>
          <span> 
            <div> {u.fullName} </div>
            <div> {u.status} </div>
          </span>
          <span>
            <div> {u.location.country} </div>
            <div> {u.location.city} </div>
            </span>
        </span>
      </div>

      )
    }
  </div>
}

export default Users;