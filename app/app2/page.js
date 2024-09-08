// components/AdminLogin.js
'use client'
import { useRouter} from 'next/navigation';
import { useState } from 'react';
import styles from "@/app/Styles/login.module.css"

function AdminLoginpage() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'
    const [messageClass, setMess] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Trim whitespace from the username and password
        const trimmedUsername = username.trim();
        const trimmedPassword = password.trim();
        // Define the correct username and password
        const correctUsername = 'admin';
        const correctPassword = 'admin@isrp';

        // Validate input
        if (trimmedUsername === '' || trimmedPassword === '') {
            setMessageType('error');
            setMessage('Username and password cannot be empty.');
            setMess(styles.error)
            return;
        }
        // Check if the username and password match the correct values
        if (trimmedUsername === correctUsername && trimmedPassword === correctPassword) {
            setMessageType('success');
            setMessage('Login successful!');
            setMess(styles.success)
            // You can add further processing here, such as redirecting to another page
            setTimeout(() => {
                setMessage(); // Clear message after success
                setMessageType(''); // Reset message type
                router.push("/app2/admin")
            }, 2000);
        } 
        else {
            setMessageType('error'); setTimeout(() => {
                setMessage(null); // Clear message after success
                setMessageType(''); // Reset message type
            }, 2000);
            setMessage('Invalid username or password.');
            setMess(styles.error)
         }
    };

    const Message = ({ message}) => {
         return (
            <div className={`${styles.message } ${messageClass}`}>
                {message}
            </div>
        )
}
    return (
        <section>
            {message && <Message message={message}/>}
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h2 className={styles.title}>Admin Login</h2>
                    <label className={styles.label} htmlFor="username">
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input}
                    />
                    <label className={styles.label} htmlFor="password">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                    />
                    <button type="submit" className={styles.button} onClick={handleSubmit}>
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
}
export default (AdminLoginpage);