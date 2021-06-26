import React from "react";

type AsynActionButtonProps = {
    isRunning: boolean;
}

export default function AsyncActionButton(props: React.PropsWithChildren<AsynActionButtonProps>){
    return (
        <button>{props.children}{props.isRunning&&<p>...</p>}</button>
    )
}