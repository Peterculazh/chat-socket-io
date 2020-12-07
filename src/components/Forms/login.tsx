import { ChangeEvent, FormEvent } from "react";

interface IProps {
    onSubmit(event: FormEvent<HTMLFormElement>): void,
    onChange(e: ChangeEvent<HTMLInputElement>) : void,
    error: String | null,
    value: string,
}

// This component can be splitted to more smaller components
export default function Form({ onSubmit, onChange, error, value }: IProps) {
    return (
        <>
            <form onSubmit={onSubmit} className="form-login">
                <label>Please enter your name to join chat:</label>
                <input type="text" value={value} onChange={onChange} />
                <small>{error}</small>
                <button type="submit">Join</button>
            </form>
        </>
    )
}
