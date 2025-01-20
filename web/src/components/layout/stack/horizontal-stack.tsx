import {PropsWithChildren} from "react";

export const HorizontalStack = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex flex-row gap-3 flex-grow">
            {children}
        </div>
    )
}