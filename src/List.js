// import React from 'react';
import data from './data';
import React,{useState} from 'react';
const List = () => {
  const [old,newVal]=useState(data)

  return (
<div>
<h3>{old .length} BirthDays Today</h3>

{
    old.map((p)=>{

      const{id,name,age,image}=p;
      return(
        <div>
        
          <div className='person' key={id}>
            <img src={image} alt={name}></img>
            <div><h4>{name}</h4>
            <p>{age}</p>
            </div>
          </div>
          
        </div>
      )
    })
}
<button onClick={()=>newVal([])}>Clear All</button>

</div>
    );
};

export default List;
