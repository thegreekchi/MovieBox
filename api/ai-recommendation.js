/* eslint-disable no-undef */
// /api/ai-recommendation.js
import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // Fix: convert literal \n into real newlines
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });
}

const db = admin.firestore();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { userMessage, prompt, userId } = req.body;

  if (!userMessage || !prompt || !userId) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    // 1️⃣ Rate limiting check
    const today = new Date().toISOString().split("T")[0]; // e.g. 2025-08-11
    const rateDocRef = db.collection("rateLimits").doc(userId);
    const rateDoc = await rateDocRef.get();

    let remaining = 3;

    if (!rateDoc.exists) {
      // New user — create record
      await rateDocRef.set({
        date: today,
        count: 0,
        remaining: 3,
      });
    } else {
      const data = rateDoc.data();
      if (data.date !== today) {
        // New day — reset count
        await rateDocRef.set({
          date: today,
          count: 0,
          remaining: 3,
        });
      } else if (data.count >= 3) {
        return res.status(429).json({ error: "Daily limit reached", remaining: 0 });
        //  return res.status(200).json({
        //     success: false,
        //     message: "🚫 You’ve reached your daily limit of 3 AI requests. Try again tomorrow.",
        //     remaining: 0,
        //     limit: 3,
        //   });
      } else {
        remaining = 3 - data.count;
      }
    }

    // 2️⃣ Call OpenAI API
    const openAiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: prompt },
          { role: "user", content: userMessage },
        ],
        temperature: 0.7,
      }),
    });

    const data = await openAiRes.json();

    if (!openAiRes.ok) {
      return res.status(openAiRes.status).json({ error: data });
    }

    // 3️⃣ Increment usage count
    await rateDocRef.update({
      count: admin.firestore.FieldValue.increment(1),
      remaining: admin.firestore.FieldValue.increment(-1),
    });

    return res.status(200).json({
      success: true,
      result: data.choices[0]?.message?.content || "",
      remaining: remaining - 1, // Return updated remaining count to UI
      limit: 3,
    });
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}


// /api/ai-recommendation.js
// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }

//   const { userMessage, prompt } = req.body;

//   if (!userMessage || !prompt) {
//     return res.status(400).json({ error: 'Missing required fields.' });
//   }

//   try {
//     const openAiRes = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         // eslint-disable-next-line no-undef
//         'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         model: 'gpt-3.5-turbo',
//         messages: [
//           { role: 'system', content: prompt },
//           { role: 'user', content: userMessage },
//         ],
//         temperature: 0.7,
//       }),
//     });

//     const data = await openAiRes.json();

//     if (!openAiRes.ok) {
//       return res.status(openAiRes.status).json({ error: data });
//     }

//     return res.status(200).json({ result: data.choices[0]?.message?.content || '' });
//   } catch (error) {
//     console.error('API error:', error);
//     return res.status(500).json({ error: 'Server error' });
//   }
// }
