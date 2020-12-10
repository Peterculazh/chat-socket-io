import { useEffect, useRef, useState } from 'react';
import { IMessage } from '../../interfaces/message';
import { io } from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
import ChatInput from './input';

interface IProps {
    username: string | null,
}

export default function Chat({ username }: IProps) {

    const [messages, setMessage] = useState<IMessage[]>([]);
    const [userMessage, setUserMessage] = useState("");
    const [socket, setSocket] = useState<any>(null);

    const messageContainer: any = useRef(null);

    useEffect(() => {
        if (username && username.length > 2 && username.length < 15) {
            setSocket(io());
        }
    }, [username]);

    useEffect(() => {
        if (socket) {
            socket.on('connected', (data: IMessage) => {
                setMessage(currentMessages => [...currentMessages, data]);
            });
            socket.on('chat message', (data: IMessage) => {
                setMessage(currentMessages => [...currentMessages, data]);
            });
        }
    }, [socket]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        if (messageContainer && messageContainer.current) {
            messageContainer.current.scrollTop = messageContainer?.current?.scrollHeight;
        }
    }

    const handleSubmitMessage = (e: any) => {
        e.preventDefault();
        if (userMessage.length < 3) {
            return false;
        }
        if (socket) {
            socket.emit('user message', {
                author: username,
                message: userMessage
            });
            setUserMessage("");
        }
    }

    return (
        <div className="chat">
            <ul className="chat-messages" ref={messageContainer}>
                {messages.map((value) =>
                    <li className="item" key={uuidv4()}>
                        <div className="item-info">
                            <div className="item-info-name">
                                {value.author}
                            </div>
                            <div className="item-info-time">
                                {new Date(value.time).toLocaleTimeString()}
                            </div>
                        </div>
                        <div className="item-message">
                            {value.message}
                        </div>
                    </li>
                )}
            </ul>
            <ChatInput
                onChange={e => setUserMessage(e.target.value)}
                value={userMessage}
                onSubmit={handleSubmitMessage}
            />

        </div>
    )
}
