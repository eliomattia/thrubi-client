import React from 'react';

const _UserDetails = ({user}) => { return (
    <div className="text-center mb-2">
        <div className="text-primary displayInlineBlock p-0"><b>{(user.name||user.surname) ? (user.name?user.name:"") + " " + (user.surname?user.surname:"") : "No user data"}</b>&nbsp;</div><div className="text-secondary displayInlineBlock small">uid#{user.id}</div>
        <div className="text-secondary small">email: {user.email ? user.email : "not found"}&nbsp;<span className="badge badge-info">Verified</span></div>
        <div className="text-secondary small">passport#{user.passport ? user.passport : "not found"}&nbsp;<span className="badge badge-danger">Pending verification</span></div>
    </div>
)};

export default _UserDetails;