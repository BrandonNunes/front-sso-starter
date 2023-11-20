import React from "react";

type Props = {
    children?: React.ReactNode
}
export default function ContainerApp({ children }: Props) {
    return(
        <div className="h-full w-full flex flex-row">
            {children}
        </div>
    )
}