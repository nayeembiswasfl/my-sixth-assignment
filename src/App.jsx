import { useState } from 'react';
import { toast } from 'react-toastify';
import headerImage from '../resources/head.png';
import stepUserImage from '../resources/user.png';
import stepPackageImage from '../resources/package.png';
import stepRocketImage from '../resources/rocket.png';
import products from './data/products.json';

const navLinks = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'];

const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '200+', label: 'Premium Tools' },
  { value: '4.9', label: 'Ratings' },
];

const steps = [
  {
    id: 1,
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
    icon: stepUserImage,
  },
  {
    id: 2,
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
    icon: stepPackageImage,
  },
  {
    id: 3,
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
    icon: stepRocketImage,
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for getting started',
    features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
    cta: 'Get Started Free',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'Best for professionals',
    features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'],
    cta: 'Start Pro Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'For teams and businesses',
    features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'],
    cta: 'Contact Sales',
    featured: false,
  },
];

function App() {
  const [activeView, setActiveView] = useState('products');
  const [cartItems, setCartItems] = useState([]);

  const cartCount = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const openProducts = () => setActiveView('products');
  const openCart = () => setActiveView('cart');

  const handleAddToCart = (product) => {
    const alreadyAdded = cartItems.some((item) => item.id === product.id);

    if (alreadyAdded) {
      toast.info(`${product.name} is already in your cart.`);
      return;
    }

    setCartItems((currentItems) => [...currentItems, product]);
    toast.success(`${product.name} added to cart.`);
  };

  const handleRemoveFromCart = (productId) => {
    const selectedProduct = cartItems.find((item) => item.id === productId);

    if (!selectedProduct) {
      return;
    }

    setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId));
    toast.error(`${selectedProduct.name} removed from cart.`);
  };

  const handleCheckout = () => {
    if (!cartItems.length) {
      toast.info('Your cart is empty. Add a product before checkout.');
      return;
    }

    setCartItems([]);
    setActiveView('products');
    toast.success('Checkout complete. Your cart is now clear.');
  };

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
              onClick={openCart}
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

          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-full border border-brand-border bg-white p-1 shadow-card">
              <button
                type="button"
                onClick={openProducts}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                  activeView === 'products'
                    ? 'bg-brand-gradient text-white shadow-soft'
                    : 'text-brand-muted'
                }`}
              >
                Products
              </button>
              <button
                type="button"
                onClick={openCart}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                  activeView === 'cart'
                    ? 'bg-brand-gradient text-white shadow-soft'
                    : 'text-brand-muted'
                }`}
              >
                Cart ({cartCount})
              </button>
            </div>
          </div>

          {activeView === 'products' ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => {
                const isAdded = cartItems.some((item) => item.id === product.id);

                return (
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
                      onClick={() => handleAddToCart(product)}
                      disabled={isAdded}
                      className={`mt-5 w-full rounded-full px-4 py-3 text-sm font-bold transition ${
                        isAdded
                          ? 'cursor-not-allowed bg-emerald-100 text-emerald-700'
                          : 'bg-brand-gradient text-white shadow-soft hover:brightness-105'
                      }`}
                    >
                      {isAdded ? 'Added to Cart' : 'Buy Now'}
                    </button>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mt-10 rounded-[28px] border border-brand-border bg-white p-6 shadow-card sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-display text-3xl font-bold text-brand-ink">Your Cart</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-brand-muted">
                    Review your selected products, remove any item, or proceed to checkout when you are ready.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-brand-mist px-4 py-2 text-sm font-semibold text-brand-violet">
                    {cartCount} item{cartCount === 1 ? '' : 's'}
                  </span>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-brand-muted">
                    {formatPrice(totalPrice)} total
                  </span>
                </div>
              </div>

              {cartItems.length ? (
                <div className="mt-8 space-y-4">
                  {cartItems.map((item) => (
                    <article
                      key={item.id}
                      className="flex flex-col gap-4 rounded-[20px] bg-[#f8f8fc] px-5 py-5 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <IconFrame icon={item.icon} compact />
                        <div>
                          <h4 className="font-display text-lg font-bold text-brand-ink">{item.name}</h4>
                          <p className="mt-1 text-sm text-brand-muted">{formatPrice(item.price)}</p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="text-sm font-bold text-rose-500 transition hover:text-rose-600"
                      >
                        Remove
                      </button>
                    </article>
                  ))}

                  <div className="flex items-center justify-between border-t border-slate-200 pt-5">
                    <span className="text-base font-semibold text-brand-muted">Total:</span>
                    <span className="font-display text-4xl font-extrabold text-brand-ink">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCheckout}
                    className="w-full rounded-full bg-brand-gradient px-6 py-4 text-sm font-bold text-white shadow-soft transition hover:brightness-105"
                  >
                    Proceed To Checkout
                  </button>
                </div>
              ) : (
                <EmptyCartState onBrowse={openProducts} />
              )}
            </div>
          )}
        </section>

        <section id="steps" className="bg-[#fbfbff] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-[42px] font-extrabold leading-tight text-brand-ink md:text-[56px]">
                Get Started In 3 Steps
              </h2>
              <p className="mt-5 text-lg leading-8 text-brand-muted">
                Start using premium digital tools in minutes, not hours.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <article
                  key={step.id}
                  className="relative flex min-h-[376px] flex-col items-center rounded-[20px] border border-[#ececf3] bg-white px-8 pb-10 pt-16 text-center shadow-[0_12px_24px_rgba(15,23,42,0.04)]"
                >
                  <span className="absolute right-5 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-violet text-sm font-extrabold text-white shadow-soft">
                    {String(step.id).padStart(2, '0')}
                  </span>
                  <span className="inline-flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#efe3ff] text-brand-violet">
                    <StepIcon icon={step.icon} />
                  </span>
                  <h3 className="mt-6 font-display text-[24px] font-extrabold leading-tight text-brand-ink md:text-[28px]">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-[290px] text-[15px] leading-8 text-brand-muted">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-[#fcfcff] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-[48px] font-extrabold leading-tight text-brand-ink">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-5 text-lg leading-8 text-brand-muted">
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
              </p>
            </div>

            <div className="mt-14 grid gap-7 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative flex min-h-[500px] flex-col rounded-[20px] border p-6 md:p-7 ${
                    plan.featured
                      ? 'border-brand-violet bg-gradient-to-br from-[#6427ff] via-[#8b23ff] to-[#bf18ff] text-white shadow-[0_20px_50px_rgba(124,58,237,0.38)]'
                      : 'border-[#e7e8ef] bg-white text-brand-ink shadow-[0_12px_24px_rgba(15,23,42,0.06)]'
                  }`}
                >
                  {plan.featured ? (
                    <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffe7a6] px-4 py-2 text-sm font-bold text-[#d8791c] shadow-[0_10px_24px_rgba(255,231,166,0.18)]">
                      Most Popular
                    </span>
                  ) : null}

                  <h3 className="text-[22px] font-extrabold text-current">{plan.name}</h3>
                  <p className={`mt-2 text-[15px] ${plan.featured ? 'text-white/80' : 'text-[#7f90a4]'}`}>
                    {plan.description}
                  </p>

                  <div className="mt-8 flex items-end gap-1.5">
                    <span className="font-display text-[54px] font-extrabold leading-none">{plan.price}</span>
                    <span className={`pb-1 text-[18px] ${plan.featured ? 'text-white/80' : 'text-[#7f90a4]'}`}>
                      /Month
                    </span>
                  </div>

                  <ul className="mt-8 space-y-3.5 text-[15px] leading-7">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className={`mt-1.5 inline-flex [transform:scale(1.35)] ${plan.featured ? 'text-white' : 'text-[#33c36b]'}`}>
                          <CheckIcon />
                        </span>
                        <span className={plan.featured ? 'text-white' : 'text-[#6d7f94]'}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={`mt-auto w-full rounded-full px-6 py-4 text-[17px] font-extrabold transition ${
                      plan.featured
                        ? 'bg-white text-brand-violet hover:bg-slate-100'
                        : 'bg-brand-gradient text-white hover:brightness-105'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </article>
              ))}
            </div>
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

function IconFrame({ icon, compact = false }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[18px] bg-[#f5f1ff] text-brand-violet ${
        compact ? 'h-12 w-12' : 'h-14 w-14'
      }`}
    >
      <ToolIcon icon={icon} />
    </span>
  );
}

function EmptyCartState({ onBrowse }) {
  return (
    <div className="mt-8 rounded-[22px] border border-dashed border-slate-200 bg-[#f8f8fc] px-6 py-16 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-violet shadow-card">
        <CartIcon />
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold text-brand-ink">Your cart is empty</h3>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-brand-muted">
        Browse the product collection to add premium tools, templates, and digital resources to your cart.
      </p>
      <button
        type="button"
        onClick={onBrowse}
        className="mt-6 rounded-full bg-brand-gradient px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:brightness-105"
      >
        Browse Products
      </button>
    </div>
  );
}

function StepIcon({ icon }) {
  return <img src={icon} alt="" className="h-10 w-10 object-contain" />;
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