// /api/ai-recommendation.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { userMessage, prompt } = req.body;

  if (!userMessage || !prompt) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    const openAiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        // eslint-disable-next-line no-undef
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: prompt },
          { role: 'user', content: userMessage },
        ],
        temperature: 0.7,
      }),
    });

    const data = await openAiRes.json();

    if (!openAiRes.ok) {
      return res.status(openAiRes.status).json({ error: data });
    }

    return res.status(200).json({ result: data.choices[0]?.message?.content || '' });
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
}
