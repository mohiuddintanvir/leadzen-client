import React from "react";

const Data = ({ data,setgivedata }) => {
  const { name, username, address, phone, email, company } = data;
  return (
    <tr>
      <td className="">{name}</td>
      <td className="">{username}</td>
      <td className="">{address.city}</td>
      <td className="">{address.street}</td>
      <td>
        {/* The button to open modal */}
        <>
          <label htmlFor="viewdetails" onClick={()=>setgivedata(data)} className="btn btn-secondary text-white">
            View Details
          </label>
        </>

        {/* Put this part before </body> tag */}
        
      </td>
    </tr>
  );
};

export default Data;
