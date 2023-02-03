import React from "react";

const ViewDetails = ({ givedata }) => {
  const { name, username, email, website, phone } = givedata;

  return (
    <>
      <input type="checkbox" id="viewdetails" className="modal-toggle" />
      <label htmlFor="viewdetails" className="modal cursor-pointer">
        <label className="modal-box " htmlFor="">
          <div className="flex gap-20 pr-30">
            <div className="card w-96 bg-primary text-primary-content">
              <div className="card-body">
                <p>Name: {name}</p>
                <h1></h1>
                <p>Username: {username}</p>
                <h1></h1>
                <p>Email Address: {email}</p>
                <h1></h1>
                <p>Company Website:{website}</p>
                <h1></h1>
                <p>Phone Number: {phone}</p>
              </div>
            </div>
            
          </div>
        </label>
      </label>
    </>
  );
};

export default ViewDetails;
