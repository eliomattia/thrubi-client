import React from 'react';
import Channel from "../classes/Channel";

const _ActionButton = ({columnSize,color,activeFilter,checkedFilter,action,elements}) =>
    <div data-toggle="buttons" className="btn btn-block btn-group btn-group-toggle border-0 row p-0 m-0 my-2">
        {
            elements.map((element,key) =>
                <button
                    key={element.key}
                    id={element.key}
                    onClick={(event) => {event.preventDefault();action(element.key);}}
                    defaultChecked={checkedFilter === element.key}
                    disabled={false} //should be using disabledFilter, but having CSS issues
                    className={"btn btn-sm btn-block small rounded-0 p-0 m-0 py-2 "+element.color+" "+columnSize+"" + (activeFilter === element.key ? " active" : "")}
                >
                    <div className={"container row p-0 m-0"+(element.channel?"":" fullWidth")}>
                        <div className={(element.channel?"":"fullWidth")}>
                            {
                                !element.channel ? "" :
                                    <img className="p-0 my-0 mx-2" alt={element.channel} height="32" width="32" src={process.env.PUBLIC_URL+"/png/"+Channel.channelColor(element.channel)+".png"} />
                            }
                            <div className={(element.channel?"ml-4":"fullWidth")+" displayInlineBlock text-"+(element.channel?"left":"center")}>{element.text}</div>
                        </div>
                    </div>
                </button>
            )
        }
    </div>
;

export default _ActionButton;

