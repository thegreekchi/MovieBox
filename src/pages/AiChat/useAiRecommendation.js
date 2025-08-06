import { useState } from 'react';
import { BASE_AI_PROMPT } from './promptTemplate';

export const useAiRecommendation = () => {
  const [loading, setLoading] = useState(false);
//   const [response, setResponse] = useState('');

   const getRecommendation = async(userMessage) =>{
    setLoading(true);
    // setResponse('');

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: BASE_AI_PROMPT },
            { role: 'user', content: userMessage },
          ],
          temperature: 0.7,
        }),
      });

      const data = await res.json();
        // setResponse(data.choices[0]?.message?.content || '');
        console.log("response", data.choices[0]?.message?.content || '')
        return data.choices[0]?.message?.content || '';
    } catch (err) {
      console.error('AI Fetch Error:', err);
    } finally {
      setLoading(false);
    }
  }

  return { getRecommendation, loading };
}
