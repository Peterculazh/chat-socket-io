import Link from 'next/link'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Header from 'src/components/Header'
import Login from '../components/Forms/login';
import Chat from '../components/Chat';

export const getServerSideProps = async (context: any) => {
    return {
        props: {
            ...context.query
        }
    }
}

export default function Home() {

    const [value, setValue] = useState("");
    const [username, setUsername] = useState<string | null>(null);
    const [error, setError] = useState<String | null>(null);

    const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (value.length < 2) {
            setError("Name can't be smaller than 3 symbols");
        } else if (value.length > 15) {
            setError("Name can't be such long");
        } else {
            setUsername(value);
            setError(null);
        }
    }

    return (
        <>
            <Header />
            {username ?
                <Chat username={username} />
                :
                <>
                    <Login onSubmit={handleSubmitForm} className="form-login">
                        <label>Please enter your name to join chat:</label>
                        <div className={`form-login-input ${error ? "form-login-input-error" : ""}`}>
                            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                            <small>{error}</small>
                        </div>
                        <button type="submit" className="form-login-submit">Join</button>
                    </Login>
                </>
            }
        </>
    )
}
