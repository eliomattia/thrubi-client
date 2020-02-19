import React from 'react';
import Channel from "../classes/Channel";

const _ActionButton = ({action,payload,text,buttonType,disabled=false,channel=false,noMargin=false}) => (
    <button disabled={disabled}
            onClick={(event) => {event.preventDefault(); action(payload); }}
            className={"btn btn-sm btn-block rounded-0 "+(noMargin?noMargin:("my-2 py-"+(channel?"2 ":"2 ")))+buttonType+(channel?Channel.channelColor(channel):"")}>
        <div className={"container-fluid row p-0 m-0"+(noMargin?" small":"")+(channel?"":" fullWidth")}>
            <div className={(channel?"":"fullWidth")}>
                {
                    !channel ? "" :
                        <img className="p-0 my-0 mx-2" alt={channel} height="32" width="32" src={process.env.PUBLIC_URL+"/png/"+Channel.channelColor(channel)+".png"} />
                }
                <div className={(channel?"ml-4":"fullWidth")+" displayInlineBlock text-"+(channel?"left":"center")}>{text}</div>
            </div>
        </div>
    </button>
);

export default _ActionButton;
