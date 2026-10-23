import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  ChevronDown,
  FileCheck2,
  Globe2,
  Leaf,
  MapPin,
  PackageCheck,
  Phone,
  Sprout,
  Tags,
} from "lucide-react";
import { BUSINESS, enquiryUrl } from "../config";
import WhatsAppIcon from "./WhatsAppIcon";

const benefits = [
  {
    icon: Leaf,
    title: "Direct from source",
    description:
      "A simpler connection to the orchards and harvests of Kashmir.",
  },
  {
    icon: BadgeCheck,
    title: "Thoughtfully graded",
    description:
      "Choose the size, colour, and grade that work for your business.",
  },
  {
    icon: PackageCheck,
    title: "Carefully packed",
    description: "Bulk packaging options to help protect every shipment.",
  },
  {
    icon: Globe2,
    title: "Supply beyond the valley",
    description: "Enquire about delivery across India and export requirements.",
  },
  {
    icon: Tags,
    title: "Your brand, our produce",
    description: "Discuss custom packaging and private-label possibilities.",
  },
];

const steps = [
  {
    title: "Find your fit",
    description:
      "Explore our produce and choose your preferred grade and pack size.",
  },
  {
    title: "Start a conversation",
    description: "Send your requirements directly to our team on WhatsApp.",
  },
  {
    title: "Get your quote",
    description:
      "Discuss pricing, availability, and samples before you decide.",
  },
  {
    title: "Confirm & dispatch",
    description:
      "Agree your order details, payment terms, and delivery schedule.",
  },
];

const faqs = [
  {
    question: "What is the minimum order quantity?",
    answer:
      "The catalogue shows indicative MOQs of 25 kg for dry fruits and 20 kg for honey. Final minimums depend on the product, grade, packaging, and current stock. Send us your requirements for confirmation.",
  },
  {
    question: "Can I order a sample before buying in bulk?",
    answer:
      "Please enquire about samples for your selected product and grade. Availability, sample charges, and shipping costs will be confirmed before a sample is arranged.",
  },
  {
    question: "Do you ship across India or internationally?",
    answer:
      "Share your delivery city or destination country and required quantity. We will confirm serviceability, freight, lead times, and any export documentation needed in your quote.",
  },
  {
    question: "What are your prices and payment terms?",
    answer:
      "Prices are quoted individually based on grade, quantity, packaging, and delivery location. Payment terms and the dispatch schedule are agreed in writing before you confirm an order.",
  },
  {
    question: "Can you offer custom packaging or private labelling?",
    answer:
      "We welcome enquiries for custom packs and private labels. Please share your preferred pack sizes, artwork requirements, and expected volume so we can confirm feasibility and minimum quantities.",
  },
  {
    question: "Can you share quality and food-safety documents?",
    answer:
      "Ask for the applicable FSSAI details, product-specific lab reports, and packaging information with your enquiry. The document cards on this website are placeholders; actual documents must be confirmed for the product and batch before ordering.",
  },
];

export default function InfoSections() {
  return (
    <>
      <section
        className="section-shell"
        id="why-us"
        aria-labelledby="why-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">A BETTER WAY TO SOURCE</p>
            <h2 className="section-title" id="why-title">
              Good produce. <em>Good partnerships.</em>
            </h2>
          </div>
          <p className="text-muted">
            From choosing the right grade to planning your next shipment, we
            keep bulk buying personal and straightforward.
          </p>
        </div>
        <div className="benefits-grid">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article className="benefit" key={title}>
              <span className="benefit-icon">
                <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="steps-section" aria-labelledby="steps-title">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FROM OUR VALLEY TO YOUR BUSINESS</p>
              <h2 className="section-title" id="steps-title">
                Bulk ordering, <em>made simple.</em>
              </h2>
            </div>
            <span className="text-muted">
              Four steps. One dedicated conversation.
            </span>
          </div>
          <ol className="steps-grid">
            {steps.map((step, index) => (
              <li className="order-step" key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="section-shell quality-section"
        id="quality"
        aria-labelledby="quality-title"
      >
        <div className="quality-layout">
          <div>
            <p className="eyebrow">CLARITY BEFORE COMMITMENT</p>
            <h2 className="section-title" id="quality-title">
              Know what goes
              <br />
              <em>into your order.</em>
            </h2>
            <p className="text-muted">
              Ask about product specifications, quality documents, and packing
              details. We believe a well-informed order is the start of a
              lasting partnership.
            </p>
            <a
              className="text-button"
              href={enquiryUrl(
                "product specifications and quality documentation",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Request quality details{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="quality-docs">
            {[
              {
                icon: FileCheck2,
                title: "FSSAI documentation",
                note: "Licence details to be confirmed",
              },
              {
                icon: BadgeCheck,
                title: "Product & batch reports",
                note: "Lab reports subject to availability",
              },
              {
                icon: PackageCheck,
                title: "Packaging details",
                note: "Packing photos available on enquiry",
              },
            ].map(({ icon: Icon, title, note }) => (
              <article className="quality-doc" key={title}>
                <Icon size={25} strokeWidth={1.4} aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{note}</p>
                  <span>Documentation placeholder</span>
                </div>
                <ArrowUpRight size={17} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-shell about-section"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="about-image">
          <img
            src="/images/kashmir.jpg"
            alt="Green mountain valley and traditional landscape in Kashmir"
            loading="lazy"
            width="1000"
            height="750"
          />
          <span>
            <MapPin size={15} aria-hidden="true" /> Rooted in Kashmir
          </span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">OUR ROOTS RUN DEEP</p>
          <h2 className="section-title" id="about-title">
            A little of Kashmir.
            <br />
            <em>A lot of care.</em>
          </h2>
          <p>
            Kashmir's orchards and mountain landscapes have a character all
            their own. So does the produce they inspire us to share.
          </p>
          <p>
            At {BUSINESS.name}, our focus is simple: bring Kashmiri walnuts,
            almonds, and honey to businesses that value honest ingredients. We
            help you explore grades, discuss your needs, and find a practical
            way to source in bulk.
          </p>
          <a
            href={enquiryUrl()}
            className="text-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get to know your sourcing partner{" "}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="section-shell" aria-labelledby="partners-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">GROWING TOGETHER</p>
            <h2 className="section-title" id="partners-title">
              For businesses that
              <br />
              <em>care about their ingredients.</em>
            </h2>
          </div>
          <p className="text-muted">
            Retailers, food makers, hospitality teams, and distributors—let's
            find the right fit for your shelves and recipes.
          </p>
        </div>
        <div className="partner-types" aria-label="Business types">
          <span>Retail & grocery</span>
          <span>Bakeries & food makers</span>
          <span>Hotels & restaurants</span>
          <span>Wholesale distributors</span>
        </div>
        <div className="quote-grid">
          <figure className="quote-card">
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote>
              Consistent grades and clear packaging details make planning a bulk
              order so much easier.
            </blockquote>
            <figcaption>
              Retail partner <span>Illustrative review</span>
            </figcaption>
          </figure>
          <figure className="quote-card">
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote>
              Being able to discuss the product, samples, and delivery in one
              conversation is exactly what we look for.
            </blockquote>
            <figcaption>
              Food business buyer <span>Illustrative review</span>
            </figcaption>
          </figure>
        </div>
        <p className="review-note">
          Sample review copy for this catalogue design. These are not verified
          customer testimonials.
        </p>
      </section>

      <section
        className="section-shell faq-section"
        id="faq"
        aria-labelledby="faq-title"
      >
        <div className="faq-layout">
          <div>
            <p className="eyebrow">A FEW THINGS TO KNOW</p>
            <h2 className="section-title" id="faq-title">
              Good questions.
              <br />
              <em>Clear answers.</em>
            </h2>
            <p className="text-muted">
              Something else on your mind?
              <br />
              We're a message away.
            </p>
            <a
              className="text-button"
              href={enquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to our team <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details
                className="faq-item"
                key={faq.question}
                open={index === 0}
              >
                <summary>
                  {faq.question}
                  <ChevronDown size={18} aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="contact-banner">
          <div>
            <p className="eyebrow">LET'S GROW SOMETHING GOOD</p>
            <h2>
              Great ingredients.
              <br />
              <em>Your next great partnership.</em>
            </h2>
            <p>Tell us what you're looking for. We'll take it from there.</p>
          </div>
          <a
            href={enquiryUrl()}
            className="button button-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon width="21" height="21" /> Enquire on WhatsApp{" "}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="section-shell">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#home" className="footer-logo">
                <Sprout size={35} strokeWidth={1.3} aria-hidden="true" />
                <span>
                  {BUSINESS.name}
                  <small>THE GOODNESS OF KASHMIR</small>
                </span>
              </a>
              <p>
                Kashmiri dry fruits and honey.
                <br />
                Thoughtfully sourced. Ready for your business.
              </p>
              <a
                className="footer-social"
                href={enquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect with ${BUSINESS.name} on WhatsApp`}
              >
                <WhatsAppIcon width="20" height="20" />
              </a>
            </div>
            <nav aria-label="Footer navigation">
              <h3>Explore</h3>
              <a href="#products">Our products</a>
              <a href="#why-us">Why choose us</a>
              <a href="#about">Our story</a>
              <a href="#faq">FAQs</a>
            </nav>
            <div className="footer-contact">
              <h3>Let's talk</h3>
              <a href={`tel:+${BUSINESS.whatsapp}`}>
                <Phone size={15} aria-hidden="true" /> +{BUSINESS.whatsapp}
              </a>
              {BUSINESS.email ? (
                <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
              ) : (
                <a
                  href={enquiryUrl("your business contact details")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email details on request{" "}
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              )}
              <p>
                <MapPin size={15} aria-hidden="true" />
                {BUSINESS.address}
              </p>
              <p className="business-hours">{BUSINESS.hours}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} {BUSINESS.name}. All rights
              reserved.
            </p>
            <p>
              Wholesale enquiries only <span aria-hidden="true">·</span> Made
              with care, from Kashmir
            </p>
            <a href="#home" aria-label="Back to top">
              <ArrowDown
                size={16}
                style={{ transform: "rotate(180deg)" }}
                aria-hidden="true"
              />{" "}
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
