// src/llmService.js
const API_KEY = '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';
const API_URL = ' https://api.groq.com/openai/v1/chat/completions'

export const fetchLLMResponse = async (prompt) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          prompt,
          max_tokens: 150,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      if (!data.choices || data.choices.length === 0) {
        throw new Error('No choices returned from API');
      }
  
      return data.choices[0].text.trim();
    } catch (error) {
      console.error('Error fetching LLM response:', error);
      throw error;
    }
  };