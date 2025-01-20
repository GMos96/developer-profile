import {PropsWithChildren} from "react";

type Props = {
    gap?: number;
} & PropsWithChildren;

export const VerticalStack = ({ children, gap = 3 }: Props) => {
    const gapClassName = `gap-${ gap }`;
    const className = `flex gap-3 flex-col flex-grow ${gapClassName}`;

    return (
        <div className={className}>
            { children }
        </div>
    )
}