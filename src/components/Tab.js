import React from "react";

function Tab(props) {

    return (
        <div className="tab" >
            <a href="" id={`${props.tabName}-Tab`}>{props.tabName}</a>
        </div>
    )
}

export default Tab;