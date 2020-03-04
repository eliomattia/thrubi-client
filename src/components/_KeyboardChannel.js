import React from "react";
import _ActionButton from "./_ActionButton";

const _KeyboardChannel = ({text,action,abandonAction,buttonType,abandonButtonType}) => {
    let refs = {username:null,password:null};
    return(
        <div className="my-2">
            <span><b>Your credentials:</b></span>
            <input id="username" ref={input => refs.username = input} type="text" className="form-control form-control-sm rounded-0 my-2" placeholder="username" required />
            <input id="password" ref={input => refs.password = input} type="text" className="form-control form-control-sm rounded-0 my-2" placeholder="password" required />
            <_ActionButton text={text} action={() => {action(refs.username.value,refs.password.value);}} buttonType={buttonType}/>
            <_ActionButton text="Back" action={abandonAction} buttonType={abandonButtonType}/>
            <span className="small"><i>Your password will be encrypted. We do not store plain text passwords on our servers. Verify your email address to make your account more secure.</i></span>
        </div>
    );
};

export default _KeyboardChannel;