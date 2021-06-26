import React from "react";

type AsynActionButtonProps = {
    isRunning?: boolean;
    type: "submit" | "reset",
    
}

export default function AsyncActionButton(props: React.PropsWithChildren<AsynActionButtonProps>){
    return (
        <button {...props}>{props.children}{props.isRunning&&<p>...</p>}</button>
    )
}