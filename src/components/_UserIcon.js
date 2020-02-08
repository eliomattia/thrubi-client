import React from 'react';

const _UserIcon = ({role,deactivated}) =>
    <img className="mt-3 rounded-lg" alt={role+deactivated} height="128" width="128" src={process.env.PUBLIC_URL+"/jpg/elio.jpg"}/> /* +"/icons/"+role+deactivated+".png" */
;

export default _UserIcon;