// src/pages/Contacts.jsx
import { useState } from 'react'
import styles from './Contacts.module.css' // 아직 없으면 나중에 만들면 됨

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error('Failed to send')
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section className={styles.contactPage}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.subtitle}>
          아래에 연락처와 메시지를 남겨주시면 메일로 바로 도착한다.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            Message
            <textarea
              className={styles.textarea}
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button
            className={styles.button}
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>

          {status === 'success' && (
            <p className={styles.success}>메시지가 전송되었다. 확인 후 답장하겠다.</p>
          )}
          {status === 'error' && (
            <p className={styles.error}>
              전송 중 오류가 발생했다. 잠시 후 다시 시도해 달라.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contacts
