import { useState } from 'react';
import { toast } from 'react-toastify';
import headerImage from '../resources/head.png';
import stepUserImage from '../resources/user.png';
import stepPackageImage from '../resources/package.png';
import stepRocketImage from '../resources/rocket.png';
import products from './data/products.json';

const navLinks = [
  { href: '#featured', label: 'Products' },
  { href: '#featured', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#steps', label: 'Testimonials' },
  { href: '#footer', label: 'FAQ' },
];

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

const socialLinks = {
  instagram: {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
  },
  facebook: {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
  },
  x: {
    label: 'X',
    href: 'https://x.com/',
  },
};

function App() {
  const [activeView, setActiveView] = useState('products');
  const [cartItems, setCartItems] = useState([]);

  const cartCount = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const openProducts = () => setActiveView('products');
  const openCart = () => setActiveView('cart');

  const handleAddToCart = (product) => {
    const alreadySelected = cartItems.some((item) => item.id === product.id);

    if (alreadySelected) {
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
    <div className="min-h-screen bg-[#fcfcff] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 px-4 backdrop-blur md:px-8">
        <nav className="mx-auto flex h-24 w-full max-w-6xl items-center justify-between gap-6">
          <a
            href="#home"
            className="font-display text-[32px] font-extrabold leading-none tracking-tight text-brand-violet sm:text-[42px]"
          >
            DigiTools
          </a>

          <div className="hidden items-center gap-10 text-[15px] font-semibold text-slate-700 lg:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-brand-violet">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="dropdown dropdown-end lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm"
              >
                <MenuIcon />
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] mt-3 w-52 rounded-[1.25rem] border border-slate-200 bg-white p-2 text-sm font-semibold text-slate-600 shadow-card"
              >
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={openCart}
              aria-label="Open cart"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100"
            >
              <CartIcon />
              {cartCount > 0 ? (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-violet px-1 text-[10px] font-extrabold text-white">
                  {cartCount}
                </span>
              ) : null}
            </button>

            <a
              href="#home"
              className="hidden text-[15px] font-semibold text-slate-700 transition hover:text-brand-violet sm:inline-flex"
            >
              Login
            </a>

            <a
              href="#featured"
              className="inline-flex rounded-full bg-gradient-to-r from-brand-violet to-brand-electric px-5 py-3 text-sm font-bold text-white shadow-card transition hover:brightness-105 sm:px-7"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="px-4 pb-16 pt-10 md:px-8 md:pt-14">
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr,0.92fr]">
            <div className="max-w-xl">
              <span className="inline-flex rounded-full bg-[#f1ecff] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-violet">
                Premium productivity assets
              </span>

              <h1 className="mt-6 max-w-[460px] font-display text-4xl font-extrabold leading-[1.05] text-slate-900 md:text-[52px]">
                Supercharge Your Digital Workflow
              </h1>

              <p className="mt-4 max-w-[470px] text-[15px] leading-7 text-slate-500">
                Explore a curated collection of digital products designed to help creators,
                freelancers, and modern teams work faster with more clarity.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#featured"
                  className="inline-flex rounded-full bg-gradient-to-r from-brand-violet to-brand-electric px-5 py-3 text-sm font-bold text-white shadow-card"
                >
                  Explore Products
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-violet bg-transparent px-5 py-3 text-sm font-bold text-brand-violet transition hover:bg-brand-violet/5"
                >
                  <PlayIcon />
                  <span>Watch Demo</span>
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[390px]">
              <img
                src={headerImage}
                alt="Premium digital workflow header"
                className="aspect-square w-full rounded-[30px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-brand-violet via-brand-electric to-fuchsia-500 px-4 py-8 text-white md:px-8">
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

        <section id="featured" className="px-4 py-20 md:px-8">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              title="Premium Digital Tools"
              description="Choose from our curated collection of premium digital products designed to improve creativity and productivity."
            />

            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-full border border-[#e8e8f5] bg-white p-1 shadow-soft">
                <button
                  type="button"
                  onClick={openProducts}
                  className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                    activeView === 'products'
                      ? 'bg-gradient-to-r from-brand-violet to-brand-electric text-white shadow-card'
                      : 'text-slate-500'
                  }`}
                >
                  Products
                </button>
                <button
                  type="button"
                  onClick={openCart}
                  className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                    activeView === 'cart'
                      ? 'bg-gradient-to-r from-brand-violet to-brand-electric text-white shadow-card'
                      : 'text-slate-500'
                  }`}
                >
                  Cart ({cartCount})
                </button>
              </div>
            </div>

            {activeView === 'products' ? (
              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => {
                  const added = cartItems.some((item) => item.id === product.id);

                  return (
                    <article
                      key={product.id}
                      className="rounded-[22px] border border-[#ececf6] bg-white p-5 shadow-[0_16px_35px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-brand-violet/20 hover:shadow-soft"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <IconFrame icon={product.icon} />
                        <TagBadge tag={product.tag} label={product.tagType} />
                      </div>

                      <h3 className="mt-4 font-display text-lg font-bold text-slate-900">
                        {product.name}
                      </h3>

                      <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
                        {product.description}
                      </p>

                      <div className="mt-4 flex items-end justify-between gap-3">
                        <div>
                          <p className="font-display text-[30px] font-extrabold text-slate-900">
                            {formatPrice(product.price)}
                          </p>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                            {formatPeriod(product.period)}
                          </p>
                        </div>
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
                        disabled={added}
                        className={`mt-5 w-full rounded-full px-4 py-3 text-sm font-bold transition ${
                          added
                            ? 'cursor-not-allowed bg-emerald-100 text-emerald-700'
                            : 'bg-gradient-to-r from-brand-violet to-brand-electric text-white shadow-card hover:brightness-105'
                        }`}
                      >
                        {added ? 'Added to Cart' : 'Buy Now'}
                      </button>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="mt-10 rounded-[28px] border border-[#ececf6] bg-white p-5 shadow-soft sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="font-display text-3xl font-bold text-slate-900">Your Cart</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
                      Review your selected products, remove any item, or proceed to checkout when you are ready.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-brand-mist px-4 py-2 text-sm font-semibold text-brand-violet">
                      {cartCount} item{cartCount === 1 ? '' : 's'}
                    </span>
                    <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                      {formatPrice(totalPrice)} total
                    </span>
                  </div>
                </div>

                {cartItems.length ? (
                  <div className="mt-8 space-y-4">
                    {cartItems.map((item) => (
                      <article
                        key={item.id}
                        className="flex flex-col gap-4 rounded-[20px] bg-[#f8f8fc] px-5 py-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <IconFrame icon={item.icon} compact />
                          <div>
                            <h4 className="font-display text-lg font-bold text-slate-900">{item.name}</h4>
                            <p className="mt-1 text-sm text-slate-500">{formatPrice(item.price)}</p>
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
                      <span className="text-base font-semibold text-slate-500">Total:</span>
                      <span className="font-display text-4xl font-extrabold text-slate-900">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleCheckout}
                      className="w-full rounded-full bg-gradient-to-r from-brand-violet via-brand-electric to-fuchsia-500 px-6 py-4 text-sm font-bold text-white shadow-card transition hover:brightness-105"
                    >
                      Proceed To Checkout
                    </button>
                  </div>
                ) : (
                  <EmptyCartState onBrowse={openProducts} />
                )}
              </div>
            )}
          </div>
        </section>

        <section id="steps" className="bg-[#fbfbff] px-4 py-24 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-[42px] font-extrabold leading-tight text-slate-900 md:text-[56px]">
                Get Started In 3 Steps
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-500">
                Start using premium digital tools in minutes, not hours.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <article
                  key={step.id}
                  className="relative flex min-h-[376px] flex-col items-center rounded-[20px] border border-[#ececf3] bg-white px-8 pb-10 pt-16 text-center transition duration-300 hover:-translate-y-1.5 hover:border-brand-violet/20 hover:shadow-soft"
                >
                  <span className="absolute right-5 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-violet text-sm font-extrabold text-white shadow-[0_12px_25px_rgba(91,33,243,0.18)]">
                    {String(step.id).padStart(2, '0')}
                  </span>
                  <span className="inline-flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#efe3ff] text-brand-violet">
                    <StepIcon icon={step.icon} />
                  </span>
                  <h3 className="mt-6 font-display text-[24px] font-extrabold leading-tight text-slate-900 md:text-[28px]">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-[290px] text-[15px] leading-8 text-slate-500">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-[#fcfcff] px-4 py-24 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-[48px] font-extrabold leading-tight text-[#131b35]">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#74859a]">
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
              </p>
            </div>

            <div className="mt-14 grid gap-7 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative flex min-h-[500px] flex-col rounded-[20px] border p-6 transition duration-300 hover:-translate-y-1.5 md:p-7 ${
                    plan.featured
                      ? 'border-brand-violet bg-gradient-to-br from-[#6427ff] via-[#8b23ff] to-[#bf18ff] text-white shadow-[0_20px_50px_rgba(124,58,237,0.38)] hover:shadow-[0_28px_65px_rgba(124,58,237,0.48)]'
                      : 'border-[#e7e8ef] bg-white text-slate-900 shadow-[0_12px_24px_rgba(15,23,42,0.06)] hover:border-brand-violet/20 hover:shadow-soft'
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
                        : 'bg-gradient-to-r from-brand-violet to-brand-electric text-white hover:brightness-105'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center,rgba(188,24,255,0.98)_0%,rgba(138,31,255,0.97)_42%,rgba(98,39,255,1)_72%,rgba(86,34,236,1)_100%)] px-4 py-24 text-center text-white md:px-8 md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_34%),radial-gradient(circle_at_82%_32%,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_50%_75%,rgba(255,255,255,0.08),transparent_30%)]" />
          <div className="relative mx-auto max-w-4xl">
            <h2 className="font-display text-[38px] font-extrabold leading-tight text-white md:text-[58px]">
              Ready To Transform Your Workflow?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-8 text-white/85 md:text-[17px]">
              Join thousands of professionals who are already using DigiTools to work smarter.
              <span className="hidden md:inline"><br /></span>
              <span className="md:ml-1">Start your free trial today.</span>
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#featured"
                className="inline-flex rounded-full bg-white px-8 py-4 text-[17px] font-extrabold text-brand-violet transition hover:bg-slate-100"
              >
                Explore Products
              </a>
              <a
                href="#pricing"
                className="inline-flex rounded-full border border-white/80 bg-transparent px-8 py-4 text-[17px] font-semibold text-white transition hover:bg-white/10"
              >
                View Pricing
              </a>
            </div>
            <p className="mt-6 text-[15px] text-white/80">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </section>
      </main>

      <footer id="footer" className="bg-[#151d2f] px-4 py-20 text-slate-300 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[1.7fr,0.7fr,0.8fr,0.9fr,0.9fr]">
            <div>
              <a href="#home" className="font-display text-[38px] font-extrabold tracking-tight text-white md:text-[56px]">
                DigiTools
              </a>
              <p className="mt-6 max-w-[380px] text-[15px] leading-8 text-slate-300/90 md:text-[16px]">
                Premium digital tools for creators, professionals, and businesses. Work smarter
                with our suite of powerful tools.
              </p>
            </div>

            <FooterLinks
              title="Product"
              links={['Features', 'Pricing', 'Templates', 'Integrations']}
            />
            <FooterLinks title="Company" links={['About', 'Blog', 'Careers', 'Press']} />
            <FooterLinks
              title="Resources"
              links={['Documentation', 'Help Center', 'Community', 'Contact']}
            />
            <div>
              <h3 className="text-[18px] font-semibold text-white">Social Links</h3>
              <div className="mt-7 flex items-center gap-3">
                <SocialBadge platform="instagram" />
                <SocialBadge platform="facebook" />
                <SocialBadge platform="x" />
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-white/12 pt-8 text-[15px] text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Digitools. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              <a href="#home" className="transition hover:text-white">
                Privacy Policy
              </a>
              <a href="#home" className="transition hover:text-white">
                Terms of Service
              </a>
              <a href="#home" className="transition hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">{description}</p>
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
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-violet shadow-soft">
        <CartIcon />
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold text-slate-900">Your cart is empty</h3>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
        Browse the product collection to add premium tools, templates, and digital resources to
        your cart.
      </p>
      <button
        type="button"
        onClick={onBrowse}
        className="mt-6 rounded-full bg-gradient-to-r from-brand-violet to-brand-electric px-5 py-3 text-sm font-bold text-white"
      >
        Browse Products
      </button>
    </div>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="text-[18px] font-semibold text-white">{title}</h3>
      <ul className="mt-6 space-y-5 text-[15px] text-slate-300/90">
        {links.map((link) => (
          <li key={link}>
            <a href="#home" className="transition hover:text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialBadge({ platform }) {
  const socialLink = socialLinks[platform];

  if (!socialLink) {
    return null;
  }

  return (
    <a
      href={socialLink.href}
      target="_blank"
      rel="noreferrer"
      aria-label={socialLink.label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/14 bg-white text-[#151d2f] shadow-[0_10px_24px_rgba(8,15,32,0.14)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(8,15,32,0.18)]"
    >
      <SocialIcon platform={platform} />
    </a>
  );
}

function SocialIcon({ platform }) {
  switch (platform) {
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[15px] w-[15px] fill-none stroke-current stroke-[1.85]">
          <rect x="4.75" y="4.75" width="14.5" height="14.5" rx="4.25" />
          <circle cx="12" cy="12" r="3.15" />
          <circle cx="16.9" cy="7.5" r="0.9" className="fill-current stroke-none" />
        </svg>
      );
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[14px] w-[14px] fill-current">
          <path d="M13.35 20.5v-7.05h2.37l.35-2.76h-2.72V8.93c0-.8.23-1.35 1.37-1.35H16.2V5.11c-.26-.04-1.12-.11-2.12-.11-2.1 0-3.54 1.29-3.54 3.66v2.03H8.17v2.76h2.37v7.05h2.81Z" />
        </svg>
      );
    case 'x':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[14px] w-[14px] fill-current">
          <path d="M14.18 10.16 20.95 3h-1.6l-5.88 6.21L8.77 3H3.38l7.1 9.47L3.38 21h1.6l6.21-6.57L16.13 21h5.39l-7.34-10.84Zm-2.18 2.31-.72-1.04L5.54 3.2h2.45l4.64 6.63.72 1.04 6.03 8.62h-2.45L12 12.47Z" />
        </svg>
      );
    default:
      return null;
  }
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

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-[2.1]">
      <path d="M2.5 4H5l2.4 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.77L20.5 7H6.1" />
      <circle cx="9.5" cy="19" r="1.6" />
      <circle cx="17.4" cy="19" r="1.6" />
    </svg>
  );
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




















