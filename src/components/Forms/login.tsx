import { FormEvent } from "react";

interface IProps {
    onSubmit(event: FormEvent<HTMLFormElement>): void,
    className?: string,
    children: React.ReactNode,
}

export default function Form({ onSubmit, className, children }: IProps) {
    return (
        <form onSubmit={onSubmit} className={className ? className : ""}>
            {children}
        </form>
    )
}
