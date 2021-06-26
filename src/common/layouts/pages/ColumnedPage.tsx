import React from "react";
import { ColumnedPageProps, ColumnProps, RowProps } from "../../types/layout.props";

export function Column<T extends ColumnProps>(props: React.PropsWithChildren<T>){
    return (
        <div>
            {props.children}
        </div>
    );
};

export function Row<T extends RowProps>(props: React.PropsWithChildren<T>){
    return (
        <div {...props}>
            {props.children}
        </div>
    )
}

export default function ColumnedPage<T extends ColumnedPageProps>(props: React.PropsWithChildren<T>){

    return <div {...props}>
        {props.children}
    </div>

}
