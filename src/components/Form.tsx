// src/components/Form.tsx
import { useState, useEffect } from 'react';

export const Form = () => {
  const [isSendingForm, setIsSendingForm] = useState(false);
  const [hasSentComment, setHasSentComment] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSendingForm(true);
    setHasError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const urlEncodedData = new URLSearchParams(formData as any).toString();

    // Optional spam filter
    const spamDomains = ['spamwebsite.com'];
    if (spamDomains.some(domain =>
      (formData.get('comment') as string)?.includes(domain)
    )) {
      setHasError(true);
      setIsSendingForm(false);
      return;
    }

    // POST to current page so Netlify detects it
    fetch(window.location.pathname, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: urlEncodedData,
    })
      .then(res => res.status === 200 ? setHasSentComment(true) : setHasError(true))
      .catch(() => setHasError(true))
      .finally(() => setIsSendingForm(false));
  };

  useEffect(() => {
    if (hasSentComment) {
      const formEl = document.getElementById('comment-form') as HTMLFormElement;
      formEl?.reset();
    }
  }, [hasSentComment]);

  return (
    <div className="w-full max-w-xl">
      <div role="region" aria-live="polite" className="mb-4">
        {hasSentComment && <div className="text-green-600">Thank you for your comment!</div>}
        {hasError && <div className="text-red-600">Comment could not be sent.</div>}
      </div>

      {!hasSentComment && (
        <form
          id="comment-form"
          name="comment"
          method="POST"
          data-netlify="true"
          netlify-honeypot="url-field"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input type="hidden" name="form-name" value="comment" />

          <p className="hidden">
            <label htmlFor="url-field">URL</label>
            <input type="url" name="url-field" id="url-field" />
          </p>

          <p>
            <label htmlFor="name" className="block font-semibold mb-1">Name</label>
            <input type="text" name="name" required className="w-full border rounded px-3 py-2" />
          </p>

          <p>
            <label htmlFor="email" className="block font-semibold mb-1">Email (optional)</label>
            <input type="email" name="email" className="w-full border rounded px-3 py-2" />
          </p>

          <p>
            <label htmlFor="comment" className="block font-semibold mb-1">Comment</label>
            <textarea name="comment" required rows={4} className="w-full border rounded px-3 py-2" />
          </p>

          <p>
            <button type="submit" disabled={isSendingForm} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50">
              {isSendingForm ? 'Sending...' : 'Send Comment'}
            </button>
          </p>
        </form>
      )}
    </div>
  );
};
