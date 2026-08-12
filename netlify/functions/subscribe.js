const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { email } = JSON.parse(event.body || "{}");

    const isValidEmail = typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Please enter a valid email address." }),
      };
    }

    const store = getStore("subscribers");
    const key = email.trim().toLowerCase();

    // Avoid duplicate entries
    const existing = await store.get(key);
    if (existing) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "You're already subscribed!" }),
      };
    }

    await store.setJSON(key, {
      email: key,
      subscribedAt: new Date().toISOString(),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Subscribed successfully!" }),
    };
  } catch (err) {
    console.error("Subscribe error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong. Please try again." }),
    };
  }
};
