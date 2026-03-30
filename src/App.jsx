import headerImage from '../resources/head.png';

const navLinks = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'];

const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '200+', label: 'Premium Tools' },
  { value: '4.9', label: 'Ratings' },
];

function App() {
  const cartCount = 0;

  return (
    <div className="page-shell">
      <header className="border-b border-brand-border bg-white">
        <nav className="mx-auto flex h-24 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="font-display text-[32px] font-extrabold leading-none tracking-tight text-brand-violet sm:text-[42px]"
          >
            DigiTools
          </a>

          <div className="hidden items-center gap-10 text-[15px] font-semibold text-brand-ink lg:flex">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-brand-violet">
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <details className="dropdown dropdown-end lg:hidden">
              <summary className="inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-brand-border bg-white text-brand-ink shadow-sm marker:hidden">
                <MenuIcon />
              </summary>
              <ul className="menu dropdown-content z-[1] mt-3 w-52 rounded-[22px] border border-brand-border bg-white p-2 text-sm font-semibold text-brand-ink shadow-card">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`}>{link}</a>
                  </li>
                ))}
              </ul>
            </details>

            <button
              type="button"
              aria-label="Open cart"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-ink transition hover:bg-brand-mist"
            >
              <CartIcon />
              {cartCount > 0 ? (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-violet px-1 text-[10px] font-extrabold text-white">
                  {cartCount}
                </span>
              ) : null}
            </button>

            <a
              href="#login"
              className="hidden text-[15px] font-semibold text-brand-ink transition hover:text-brand-violet sm:inline-flex"
            >
              Login
            </a>

            <a
              href="#get-started"
              className="inline-flex rounded-full bg-brand-gradient px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:brightness-105 sm:px-7"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr,0.92fr] lg:py-8">
            <div className="max-w-xl">
              <span className="inline-flex rounded-full bg-brand-mist px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-violet">
                Premium productivity assets
              </span>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-brand-ink sm:text-5xl lg:text-[58px]">
                Supercharge Your Digital Workflow
              </h1>

              <p className="mt-5 max-w-[500px] text-base leading-8 text-brand-muted sm:text-lg">
                Explore a curated collection of digital products designed to help creators,
                freelancers, and modern teams work faster with more clarity.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#products"
                  className="inline-flex rounded-full bg-brand-gradient px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:brightness-105 sm:px-6"
                >
                  Explore Products
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-violet bg-transparent px-5 py-3 text-sm font-bold text-brand-violet transition hover:bg-brand-mist sm:px-6"
                >
                  <PlayIcon />
                  <span>Watch Demo</span>
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[390px] lg:max-w-[430px]">
              <img
                src={headerImage}
                alt="A person interacting with a digital interface"
                className="aspect-square w-full rounded-[30px] object-cover shadow-card"
              />
            </div>
          </div>
        </section>

        <section className="bg-brand-gradient px-4 py-8 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <article
                key={stat.label}
                className={`text-center ${index !== 2 ? 'sm:border-r sm:border-white/15' : ''}`}
              >
                <p className="font-display text-4xl font-extrabold">{stat.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[2]">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 fill-none stroke-current stroke-[2.1]">
      <path d="M2.5 4H5l2.4 10.2a1 1 0 0 0 1 .8h8.9a1 1.0 0 0 0 1-.77L20.5 7H6.1" />
      <circle cx="9.5" cy="19" r="1.6" />
      <circle cx="17.4" cy="19" r="1.6" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-[2.2]">
      <path d="m7 5 10 7-10 7V5Z" strokeLinejoin="round" />
    </svg>
  );
}

export default App;