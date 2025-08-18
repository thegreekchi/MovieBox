import { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { BASE_AI_PROMPT } from './promptTemplate';

export const useAiRecommendation = () => {
  const [loading, setLoading] = useState(false);
//   const [response, setResponse] = useState('');

   const getRecommendation = async(userMessage) =>{
    setLoading(true);
    // setResponse('');

    // try {
    //   const res = await fetch('https://api.openai.com/v1/chat/completions', {
    //     method: 'POST',
    //     headers: {
          
    //     },
    //     body: JSON.stringify({
    //       model: 'gpt-3.5-turbo',
    //       messages: [
    //         { role: 'system', content: BASE_AI_PROMPT },
    //         { role: 'user', content: userMessage },
    //       ],
    //       temperature: 0.7,
    //     }),
    //   });

    //   const data = await res.json();
    //     // setResponse(data.choices[0]?.message?.content || '');
    //     console.log("response", data.choices[0]?.message?.content || '')
    //     return data.choices[0]?.message?.content || '';
    // } catch (err) {
    //   console.error('AI Fetch Error:', err);
    // } finally {
    //   setLoading(false);
    // }

    try {
      const res = await fetch('/api/ai-recommendation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userMessage,
          userId: auth.currentUser.uid,
          prompt: BASE_AI_PROMPT,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error('Server error:', data.error);
        // setResponse('AI error occurred.');
        return 'AI error occurred.';
      }

      // setResponse(data.result);
      return data.result;
    } catch (err) {
      console.error('Request failed:', err);
      // setResponse('Something went wrong.');
      return 'Something went wrong.';
    } finally {
      setLoading(false);
    }
  }

  return { getRecommendation, loading };
}
