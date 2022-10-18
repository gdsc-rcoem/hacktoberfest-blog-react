import React from "react";
import UserCard from "./Components/UserCard";

function UserCards({contributors}) {
    return ( <section>
        <div className="title">
            <h2>Our Contributors</h2>
            <div className="underline"></div>
        </div>
        <div style={{padding: "20px 0"}}>
            {contributors.map((contribution) => {
                return <UserCard key={contribution.id} {...contribution}></UserCard>;
            },)}
        </div>
        </section>
    )
}

export default UserCards;