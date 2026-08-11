import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  try {
    const { type, name, email, subject, message } = JSON.parse(event.body);

    const emailSubject = type === 'prayer'
      ? `New Prayer Request from ${name}`
      : `New Contact Message: ${subject || 'General Contact'}`;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['cgeorgerev30@outlook.com'],
      reply_to: email,
      subject: emailSubject,
      html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Type:</strong> ${type === 'prayer' ? 'Prayer Request' : 'General Contact'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
