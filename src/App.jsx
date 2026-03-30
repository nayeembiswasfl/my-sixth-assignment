import headerImage from '../resources/head.png';
import products from './data/products.json';

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

        <section id="products" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            title="Premium Digital Tools"
            description="Choose from our curated collection of premium digital products designed to improve creativity and productivity."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="rounded-[22px] border border-brand-border bg-white p-5 shadow-[0_16px_35px_rgba(15,23,42,0.04)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <IconFrame icon={product.icon} />
                  <TagBadge tag={product.tag} label={product.tagType} />
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-brand-ink">
                  {product.name}
                </h3>

                <p className="mt-2 min-h-[72px] text-sm leading-6 text-brand-muted">
                  {product.description}
                </p>

                <div className="mt-4">
                  <p className="font-display text-[30px] font-extrabold text-brand-ink">
                    {formatPrice(product.price)}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    {formatPeriod(product.period)}
                  </p>
                </div>

                <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-[13px] text-slate-600">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-mist text-brand-violet">
                        <CheckIcon />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="mt-5 w-full rounded-full bg-brand-gradient px-4 py-3 text-sm font-bold text-white shadow-soft transition hover:brightness-105"
                >
                  Buy Now
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionHeading({ title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="font-display text-3xl font-extrabold text-brand-ink sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-brand-muted sm:text-base">{description}</p>
    </div>
  );
}

function TagBadge({ tag, label }) {
  const tagStyles = {
    popular: 'bg-amber-50 text-amber-700',
    new: 'bg-emerald-50 text-emerald-700',
    'best-seller': 'bg-sky-50 text-sky-700',
  };

  return (
    <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${tagStyles[tag]}`}>
      {label}
    </span>
  );
}

function IconFrame({ icon }) {
  return (
    <span className="inline-flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#f5f1ff] text-brand-violet">
      <ToolIcon icon={icon} />
    </span>
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
      <path d="M2.5 4H5l2.4 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.77L20.5 7H6.1" />
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

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3 w-3 fill-none stroke-current stroke-[2.6]">
      <path d="m5 12 4 4 10-10" />
    </svg>
  );
}

function ToolIcon({ icon }) {
  const commonProps = {
    viewBox: '0 0 24 24',
    className: 'h-6 w-6 fill-none stroke-current stroke-[1.8]',
    'aria-hidden': 'true',
  };

  switch (icon) {
    case 'spark-pen':
      return (
        <svg {...commonProps}>
          <path d="M6 18l4.5-1.2L18 9.3 14.7 6 7.2 13.5 6 18Z" />
          <path d="M13.8 6.9l3.3 3.3" />
          <path d="M5 5v2" />
          <path d="M4 6h2" />
        </svg>
      );
    case 'pencil-ruler':
      return (
        <svg {...commonProps}>
          <path d="M6 16 16 6l2 2L8 18H6v-2Z" />
          <path d="M13 4l7 7" />
          <path d="M5 10h4" />
          <path d="M4 13h4" />
        </svg>
      );
    case 'gallery':
      return (
        <svg {...commonProps}>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="m7 15 3-3 3 3 3-4 1 1v4H7Z" />
          <circle cx="9" cy="9" r="1.2" />
        </svg>
      );
    case 'zap':
      return (
        <svg {...commonProps}>
          <path d="M13 3 6 13h5l-1 8 8-11h-5l0-7Z" />
        </svg>
      );
    case 'document':
      return (
        <svg {...commonProps}>
          <path d="M8 3h6l4 4v14H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
          <path d="M14 3v4h4" />
          <path d="M10 12h6" />
          <path d="M10 16h6" />
        </svg>
      );
    case 'megaphone':
      return (
        <svg {...commonProps}>
          <path d="M4 11v2a2 2 0 0 0 2 2h1l1.5 4h2L9 15h2l6-4V7L11 9H6a2 2 0 0 0-2 2Z" />
          <path d="M17 8v6" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg {...commonProps}>
          <rect x="4" y="7" width="16" height="12" rx="2" />
          <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
          <path d="M4 12h16" />
        </svg>
      );
    case 'target':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3" />
          <path d="M22 12h-3" />
        </svg>
      );
    case 'rocket':
      return (
        <svg {...commonProps}>
          <path d="M14 4c3 1 5 4 6 7-2 0-5 .5-8 3-2-3-2.8-6-.8-10.2.5-.1 1.6-.1 2.8.2Z" />
          <path d="M10 14 7 17" />
          <path d="m8 18-2 2" />
          <circle cx="15" cy="9" r="1.2" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="7" />
        </svg>
      );
  }
}

function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatPeriod(period) {
  if (period === 'one-time') {
    return 'One-Time';
  }

  return `${period.charAt(0).toUpperCase()}${period.slice(1)}`;
}

export default App;