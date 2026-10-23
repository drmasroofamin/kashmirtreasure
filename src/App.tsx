import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  Leaf,
  Menu,
  Mountain,
  PackageCheck,
  ShieldCheck,
  Sprout,
  Truck,
  X,
} from "lucide-react";
import { BUSINESS, enquiryUrl } from "./config";
import WhatsAppIcon from "./components/WhatsAppIcon";
import ProductCatalogue from "./components/ProductCatalogue";
import InfoSections from "./components/InfoSections";
import type { CategoryId } from "./products";

const categories = [
  {
    id: "walnuts",
    title: "Kashmiri Walnuts",
    local: "AKHROT",
    description: "The valley’s original superfood.",
    image: "walnut",
  },
  {
    id: "almonds",
    title: "Kashmiri Almonds",
    local: "BADAM",
    description: "Small in size. Rich in goodness.",
    image: "almond",
  },
  {
    id: "honey",
    title: "Kashmiri Honey",
    local: "SHAHAD",
    description: "Nature’s sweetness, beautifully pure.",
    image: "honey",
  },
] as const;

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`brand ${light ? "brand-light" : ""}`}
      href="#home"
      aria-label={`${BUSINESS.name} home`}
    >
      <span className="brand-mark">
        <Mountain size={26} strokeWidth={1.3} />
        <span className="brand-sun" />
      </span>
      <span className="brand-words">
        <span>
          {BUSINESS.name.split(" ")[0]}
          <span className="brand-dot">.</span>
        </span>
        <small>
          {BUSINESS.name.split(" ").slice(1).join(" ") || "KASHMIR"}
        </small>
      </span>
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="announcement">
        <Leaf size={13} />
        <span>From the heart of Kashmir, for businesses everywhere.</span>
        <span className="announcement-right">BULK SUPPLY. HONEST ORIGINS.</span>
      </div>
      <header className="site-header">
        <div className="nav-inner">
          <Brand />
          <nav
            className={`main-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Main navigation"
          >
            {[
              ["Our Products", "#products"],
              [`Why ${BUSINESS.name.split(" ")[0]}`, "#why-us"],
              ["Our Story", "#about"],
              ["FAQs", "#faq"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="mobile-nav-cta"
              href={enquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let’s talk bulk <ArrowUpRight size={16} />
            </a>
          </nav>
          <a
            className="header-cta"
            href={enquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> Let’s talk bulk <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <img className="hero-backdrop" src="/images/kashmir.jpg" alt="" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow hero-eyebrow">
                <span /> PURE ORIGINS. LASTING PARTNERSHIPS.
              </div>
              <h1 id="hero-title">
                A little Kashmir.
                <br />A lot of <em>goodness.</em>
              </h1>
              <p className="hero-subtitle">
                Premium walnuts, almonds & honey.
                <br />
                Sourced from the valley. Supplied in bulk.
                <br className="mobile-break" /> Made for your business.
              </p>
              <div className="hero-actions">
                <a href="#products" className="button button-primary">
                  Explore our products <ArrowUpRight size={18} />
                </a>
                <a
                  href={enquiryUrl()}
                  className="hero-enquire"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon /> Enquire on WhatsApp
                </a>
              </div>
              <div className="hero-bottom">
                <span className="hero-bottom-icon">
                  <Sprout size={23} strokeWidth={1.4} />
                </span>
                <p>
                  Good food begins with good roots.
                  <br />
                  <strong>Let’s grow your business, naturally.</strong>
                </p>
              </div>
            </div>
            <div className="hero-visual">
              <img
                className="hero-photo"
                src="/images/walnut.jpg"
                alt="Premium Kashmiri walnut kernels in a rustic bowl, ready for wholesale supply"
                fetchPriority="high"
              />
              <div className="image-grain" />
              <div className="origin-tag">
                <span className="origin-tag-icon">
                  <Mountain size={27} strokeWidth={1.2} />
                </span>
                <span>
                  ORIGIN MATTERS<strong>Kashmir, India</strong>
                </span>
              </div>
              <div className="hero-photo-caption">
                <span>HONESTLY SOURCED. NATURALLY EXCEPTIONAL.</span>
                <p>
                  From our valley,
                  <br />
                  <em>to your venture.</em>
                </p>
              </div>
              <div className="harvest-seal">
                <Leaf size={21} strokeWidth={1.4} />
                <span>
                  ROOTED IN
                  <br />
                  <strong>NATURE</strong>
                </span>
              </div>
            </div>
          </div>
          <a className="hero-scroll" href="#categories">
            <ArrowDown size={15} /> DISCOVER THE GOODNESS
          </a>
        </section>

        <div className="trust-strip" aria-label="Wholesale benefits">
          <div>
            <Sprout />
            <span>Direct from the source</span>
          </div>
          <span className="trust-divider" />
          <div>
            <ShieldCheck />
            <span>Thoughtfully graded</span>
          </div>
          <span className="trust-divider" />
          <div>
            <Truck />
            <span>Pan-India bulk supply</span>
          </div>
          <span className="trust-divider" />
          <div>
            <PackageCheck />
            <span>Packed for your business</span>
          </div>
        </div>

        <section
          className="section-shell categories-section"
          id="categories"
          aria-labelledby="categories-title"
        >
          <div className="section-heading categories-heading">
            <div>
              <span className="eyebrow">
                THREE TREASURES. ONE BEAUTIFUL ORIGIN.
              </span>
              <h2 className="section-title" id="categories-title">
                The best of the valley.
              </h2>
            </div>
            <p className="text-muted">
              Naturally rich. Carefully selected.
              <br />
              Discover our core wholesale collections.
            </p>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <a
                className="category-card"
                href="#products"
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                <img
                  src={`/images/${category.image}.jpg`}
                  alt={category.title}
                  loading="lazy"
                />
                <div className="category-shade" />
                <span className="category-count">03 VARIETIES</span>
                <div className="category-caption">
                  <span>{category.local}</span>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
                <span className="category-arrow">
                  <ArrowUpRight size={22} />
                </span>
              </a>
            ))}
          </div>
        </section>

        <ProductCatalogue
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <div className="wholesale-note section-shell">
          <span className="wholesale-note-icon">
            <Check size={17} />
          </span>
          <p>
            A catalogue built for business.{" "}
            <strong>
              No retail checkout. No middlemen. Just a conversation.
            </strong>
          </p>
          <a href={enquiryUrl()} target="_blank" rel="noopener noreferrer">
            Let’s connect <ChevronRight size={15} />
          </a>
        </div>
        <InfoSections />
      </main>
      <a
        className="floating-whatsapp"
        href={enquiryUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Enquire with ${BUSINESS.name} on WhatsApp`}
      >
        <WhatsAppIcon />
        <span>Chat with us</span>
      </a>
    </>
  );
}
