import { ChangeEvent, FormEvent, useState, MouseEvent } from 'react';

interface IProps {
    value: string,
    onChange(e: ChangeEvent<HTMLInputElement>): void,
    onSubmit(event: FormEvent<HTMLFormElement>): void,
}

export default function ChatInput({ value, onChange, onSubmit }: IProps) {
    return (
        <form onSubmit={onSubmit} className="chat-input">
            <input type="text" value={value} onChange={onChange}/>
            <button type="submit">Send</button>
        </form>
    )
}
