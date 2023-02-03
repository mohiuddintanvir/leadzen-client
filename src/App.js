import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Data from './component/Data';
import ViewDetails from './component/ViewDetails';

function App() {
  const[datas,setdata]=useState([]);
  const [givedata,setgivedata]=useState([])


useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setdata(data))
},[])




  return (
    <div className="App">
<div className="overflow-x-auto ">
  <table className="table w-full">
  
    <thead className=''>
      <tr b>
        <th></th>
     
        <th>Contact</th>
        <th>City</th>
        <th>State</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
    
  {
    datas.map(data=><Data 
      data={data}
      setgivedata={setgivedata}
    ></Data>)
  }
       
     
      
      
    </tbody>
  </table>
</div>
{givedata &&
  <ViewDetails givedata={givedata}></ViewDetails>
}

    </div>
  );
}

export default App;
