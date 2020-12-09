import Link from 'next/link'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Header from 'src/components/Header'
import Login from '../components/Forms/login';

export const getServerSideProps = async (context: any) => {
    return {
        props: {
            ...context.query
        }
    }
}

export default function Home() {
    let socket = null;

    const [name, setName] = useState("");
    const [error, setError] = useState<String | null>(null);

    const handleSubmitName = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (name.length < 2) {
            setError("Name can't be smaller than 3 symbols");
        } else if (name.length > 15) {
            setError("Name can't be such long");
        } else {
            socket = io();
            socket.on('connected', (data: any) => {
                console.log(data);
            });
            setError(null);
        }
    }

    return (
        <>
            <Header />
            {socket ?
                <div>
                    Welcome to chat
                </div>
                :
                <>
                    <Login onSubmit={handleSubmitName} className="form-login">
                        <label>Please enter your name to join chat:</label>
                        <div className={`form-login-input ${error ? "form-login-input-error" : ""}`}>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} />
                            <small>{error}</small>
                        </div>
                        <button type="submit" className="form-login-submit">Join</button>
                    </Login>
                </>
            }
        </>
    )
}
