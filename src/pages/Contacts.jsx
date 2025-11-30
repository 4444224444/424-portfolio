// src/pages/Contacts.jsx
import { useState } from 'react'
import styles from './Contacts.module.css'

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
        {/* 왼쪽 영역 */}
        <div className={styles.left}>
          <h1 className={styles.title}>contact</h1>
          <p className={styles.description}>
            texttexttexttexttext
            texttexttexttexttext
            texttexttexttexttext
          </p>

          <div className={styles.linkGroups}>
            <ul className={styles.linkList}>
              <li><a href="#me">ME !</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">INSTAGRAM</a></li>
              <li><a href="#resume">RESUME</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer">GITHUB</a></li>
            </ul>
            <ul className={`${styles.linkList} ${styles.linkListLight}`}>
              <li>@4444.22.4444</li>
              <li>DOWNLOAD</li>
              <li>대충주소</li>
            </ul>
          </div>
        </div>

        {/* 오른쪽 폼 영역 */}
        <div className={styles.right}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label className={styles.label}>
                name
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
                e-mail
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label className={styles.label}>
              message
              <textarea
                className={styles.textarea}
                name="message"
                rows={6}
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
              {status === 'sending' ? 'sending…' : 'send'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacts

