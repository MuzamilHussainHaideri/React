import { useState } from "react";

export const Form = () => {
    const [username, setUsername] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Form submitted with username: ${username}`);
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
}