// components/AdminLogin.js
'use client'
import { useState } from 'react';
import styles from '../Styles/login.module.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login submitted:', username, password);
  };
  return (
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
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;