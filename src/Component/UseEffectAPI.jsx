import React, {useState, useEffect } from 'react'
import './useEffectAPI.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const UseEffectAPI = () => {

  const [users,setUsers]=useState([]);

  const getUsers= async()=>{

    const response = await fetch('https://api.github.com/users')
console.log(response);
setUsers(await response.json());
  }

  useEffect(()=>{

    getUsers();

  },[]);
  return (
    <>
    <h2>List of Github Users</h2>
    <div className='container-fluid mt-5 '></div>
    <div className="row text-center">

{
  users.map( (curElem)=>{

    return(
      <div className="col-10 col-md-4 mt-5">

      <div class="card p-2">

<div className="d-flex align-items-center">

<div className="image"> <img src={curElem.avatar_url} class="rounded" width='155'/>  </div>
<div className="ml-3 w-100">

<h4 class="mb-0 mt-0 textLeft">{curElem.login}</h4>
<span className="textleft">{curElem.title}</span>
<div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats" >

<div className="d-flex flex-column">

<span class="articles">Articles</span>
<span class="number1">38</span>

</div>
<div className="d-flex flex-column">

<span class="articles">Followers</span>
<span class="number1">980</span>

</div>
<div className="d-flex flex-column">

<span class="articles">Rating</span>
<span class="number1">8.9</span>

</div>

</div>

</div>

</div>

        </div>

      </div>
    )

  } )
}


    </div>
    </>
  )
}

export default UseEffectAPI