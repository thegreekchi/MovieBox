import { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { BASE_AI_PROMPT } from './promptTemplate';

export const useAiRecommendation = () => {
  const [loading, setLoading] = useState(false);
  const [remaining, setRemaining] = useState(null); // new
  const [limit, setLimit] = useState(null); // new

  const getRecommendation = async (userMessage) => {
    setLoading(true);

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
        return 'AI error occurred.';
      }

      // ✅ update UI states for rate limits
      if (data.remaining !== undefined) setRemaining(data.remaining);
      if (data.limit !== undefined) setLimit(data.limit);

      return data.result;
    } catch (err) {
      console.error('Request failed:', err);
      return 'Something went wrong.';
    } finally {
      setLoading(false);
    }
  };

  return { getRecommendation, loading, remaining, limit };
};
