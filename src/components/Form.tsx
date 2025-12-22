import { useState } from 'react';

export const Form = () => {
  const [isSendingForm, setIsSendingForm] = useState(false);
  const [hasSentComment, setHasSentComment] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSendingForm(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then((data) => {
        if (data.status === 200) {
          setHasSentComment(true);
        } else {
          setHasError(true);
        }
      })
      .catch(() => {
        setHasError(true);
      });
  };

  return (
    <>
      {hasSentComment && <i>Thank you for your comment!</i>}
      {!hasSentComment && (
        <>
          <form
            id="comment-form"
            name="comment"
            method="POST"
            data-netlify="true"
            netlify-honeypot="url-field"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="form-name"
              value="comment"
            />
            <p>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                required={true}
              />
            </p>
            <p className="hidden">
              <label htmlFor="url-field">URL</label>
              <input
                type="url"
                name="url-field"
                id="url-field"
              />
            </p>
            <p>
              <label htmlFor="comment">Comment</label>
              <textarea
                name="comment"
                required={true}
              />
            </p>
            <p>
              <button
                type="submit"
                disabled={isSendingForm}
              >
                Send
              </button>
            </p>
          </form>

          {hasError && <i>Comment didn't send.</i>}
        </>
      )}
    </>
  );
};