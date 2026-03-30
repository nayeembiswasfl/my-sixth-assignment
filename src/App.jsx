function App() {
  return (
    <div className="page-shell">
      <main className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <section className="surface-card w-full max-w-4xl overflow-hidden px-6 py-14 sm:px-10 sm:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.34em] text-brand-violet">
              DigiTools
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
              Theme foundation is ready for the assignment build
            </h1>
            <p className="mt-5 text-base leading-8 text-brand-muted sm:text-lg">
              Manrope is connected, the shared brand colors are added, and the base styling is now ready for the real UI sections.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <span className="inline-flex rounded-full bg-brand-mist px-5 py-3 text-sm font-bold text-brand-violet">
                Global Typography
              </span>
              <span className="inline-flex rounded-full bg-brand-gradient px-5 py-3 text-sm font-bold text-white shadow-soft">
                Brand Theme Tokens
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;