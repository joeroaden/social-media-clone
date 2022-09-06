import React from "react";
import Account from "./Account";



const accountFeed = [
  {
    name: "Rusty Shackleford",
  },
  {
    name: "Rex Scott",
  },
  {
    name: "Jason Smith",
  }
];

function RecommendedAccounts(){
  return (
    <div className="about">
      <h2>People you may know</h2>
      <hr/>
      {accountFeed.map((post, index) =>
      <Account name={post.name}
      key={index}/>
      )}
    </div>
  );
}

export default RecommendedAccounts;