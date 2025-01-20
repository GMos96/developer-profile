import {PropsWithChildren} from "react";
import {VerticalStack} from "../stack";

export const Hero = ({ children }: PropsWithChildren) => {
    return (
        <VerticalStack gap={5}>
            {children}
        </VerticalStack>
    );
}

export const HeroHeader = ({ children }: PropsWithChildren) => {
    return (
        <h1 className="text-4xl font-bold text-center">
            {children}
        </h1>
    )
}

export const HeroContent = ({ children }: PropsWithChildren) => {
    return (
        <div className="text-center text-xl">
            {children}
        </div>
    )
}

export const HeroActions = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex flex-grow justify-center gap-5">
            {children}
        </div>
    )
}