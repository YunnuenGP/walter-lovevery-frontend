"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Oops... Something went wrong!</h2>
        <code>{error.message}</code>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
