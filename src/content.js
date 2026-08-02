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

export function submitPrayerRequest(data) {
  console.info("Prayer request submitted:", data);
  return Promise.resolve({ ok: true });
}

export function submitContactMessage(data) {
  console.info("Contact message submitted:", data);
  return Promise.resolve({ ok: true });
}
