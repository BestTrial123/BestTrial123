import { sermons, events, posts, staff } from "./data";

const resolve = (data) => Promise.resolve(data);

export function getSermons(category) {
  if (category && category !== "All") {
    return resolve(sermons.filter((s) => s.category === category));
  }
  return resolve(sermons);
}

export function getEvents() {
  return resolve(events);
}

export function getPosts() {
  return resolve(posts);
}

export function getStaff() {
  return resolve(staff);
}


export async function submitPrayerRequest(data) {
  const res = await fetch('/.netlify/functions/send-message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'prayer', name: data.name, email: data.email, message: data.request }),
  });
  if (!res.ok) throw new Error('Failed to send prayer request');
  return res.json();
}

export async function submitContactMessage(data) {
  const res = await fetch('/.netlify/functions/send-message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'contact', name: data.name, email: data.email, subject: data.subject, message: data.message }),
  });
  if (!res.ok) throw new Error('Failed to send contact message');
  return res.json();
}
