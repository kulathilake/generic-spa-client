
export function DashboardFeatureView<T extends object>(props: React.PropsWithChildren<T>){
    return (
        <div>
            {/* Display Feature Views */}
            {props.children}
        </div>
    )
}