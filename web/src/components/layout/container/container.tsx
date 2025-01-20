import {PropsWithChildren} from "react";

export const Container = ({ children }: PropsWithChildren) => {
    return (
        <div className={'container flex'}>
            { children }
        </div>
    );
}