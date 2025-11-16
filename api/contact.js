// @ts-nocheck
/* eslint-env node */

import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing fields' })
  }

  // 메일 발송 설정
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // 앱 비밀번호 권장
    },
  })

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.TO_EMAIL || process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ message: 'Mail sent' })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ message: 'Error sending email' })
  }
}
