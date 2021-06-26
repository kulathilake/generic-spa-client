import React from "react";
import { ColumnedPageProps, ColumnProps, RowProps } from "../../types/layout.props";

export function Column(props: React.PropsWithChildren<ColumnProps>){
    return (
        <div>
            {props.children}
        </div>
    );
};

export function Row(props: React.PropsWithChildren<RowProps>){
    return (
        <div>
            {props.children}
        </div>
    )
}

export default function ColumnedPage(props: React.PropsWithChildren<ColumnedPageProps>){
    
    return <div>
        {props.children}
    </div>

}
