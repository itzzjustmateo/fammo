export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-2xl flex-col items-center justify-center px-4 py-20 bg-white dark:bg-black rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-zinc-50 text-center tracking-tight">
          fammo
        </h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 text-center mb-8 max-w-xl">
          Welcome to <span className="font-semibold">fammo</span> – your interactive platform to learn <span className="text-blue-600 dark:text-blue-400 font-medium">web development</span> and, soon, other programming languages too. Start from fundamental concepts and grow to mastering advanced topics, all in one intuitive place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            href="#"
            className="flex h-12 w-full sm:w-auto items-center justify-center rounded-full bg-blue-600 text-white font-semibold px-8 transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-base"
          >
            Get Started
          </a>
          <a
            href="#"
            className="flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-blue-600 dark:border-blue-400 px-8 text-blue-600 dark:text-blue-400 font-semibold transition-colors hover:bg-blue-50 dark:hover:bg-blue-950 text-base"
          >
            Learn More
          </a>
        </div>
        <footer className="mt-12 text-xs text-zinc-400 text-center">
          &copy; {new Date().getFullYear()} fammo. Learn, build, and grow.
        </footer>
      </main>
    </div>
  );
}
