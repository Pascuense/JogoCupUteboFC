'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Hook de navegación
import { FaRegUserCircle } from 'react-icons/fa';
import styles from './login.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // para mostrar error
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación simple
    if (email === 'admin' && password === '12345') {
        localStorage.setItem('admin', 'true');
        router.push('/'); // redirige a la página principal
    } else {
        setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className={styles['login-page']}>
      <div className={styles['login-panel']}>
        <h1 className={styles['gradient-text']}>Acceder como administrador</h1>
        <form onSubmit={handleSubmit} className={styles['login-form']}>
          <input
            type="text"
            placeholder="Usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Clave administrador"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      </div>
    </div>
  );
}
