type ContainerProps = {
    children: React.ReactNode
}
export function Container({children}: ContainerProps){
    return(
        <div className="max-w-7xl mx-auto">
            <div className="m-12">{children}</div>
        </div>
    )
}