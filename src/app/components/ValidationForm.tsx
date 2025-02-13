'use client';
import { useState } from 'react';

export default function ValidationForm() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const validateInput = (value: string) => {
    if (!value.trim()) {
      return 'Input cannot be empty';
    }
    if (!/^[A-Za-z\s]+$/.test(value)) {
      return 'Input must contain only letters';
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const error = validateInput(input);
    if (error) {
      setMessage({ text: error, type: 'error' });
      return;
    }

    setMessage({ text: 'Form submitted successfully!', type: 'success' });
    setInput('');
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text (letters only)"
            className="w-full px-4 py-2 rounded-lg border border-black/[.08] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-foreground text-background rounded-full hover:bg-[#383838] transition-colors"
        >
          Submit
        </button>
      </form>
      
      {message && (
        <div className={`mt-4 p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {message.text}
        </div>
      )}
    </div>
  );
}
