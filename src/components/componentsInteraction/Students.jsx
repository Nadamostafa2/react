import React from 'react';

const Students = ({stds}) => {
    return (
        <div>
            <h1>Students</h1>
            {stds.map((std)=><div key={std.id}>{std.name}</div>)}
        </div>
    );
}

export default Students;
