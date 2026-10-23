import { useState } from "react";
import { ArrowRight, Package } from "lucide-react";
import { enquiryUrl } from "../config";
import { categories, products, type CategoryId } from "../products";
import WhatsAppIcon from "./WhatsAppIcon";

interface ProductCatalogueProps {
  activeCategory: CategoryId;
  onCategoryChange: (id: CategoryId) => void;
}

export default function ProductCatalogue({
  activeCategory,
  onCategoryChange,
}: ProductCatalogueProps) {
  const [showAll, setShowAll] = useState(false);
  const matchingProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);
  const visibleProducts =
    activeCategory === "all" && !showAll
      ? matchingProducts.slice(0, 3)
      : matchingProducts;

  return (
    <section
      id="products"
      className="catalogue-section"
      aria-labelledby="catalogue-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Our harvest, your business</p>
          <h2 id="catalogue-title" className="section-title">
            Goodness, in every grade.
          </h2>
        </div>
        <p className="text-muted">
          From whole nuts to golden honey, find the right fit for your shelves,
          kitchens and customers.
        </p>
      </div>

      <div className="product-tabs" aria-label="Filter products by category">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`product-tab${activeCategory === category.id ? " active" : ""}`}
            type="button"
            aria-pressed={activeCategory === category.id}
            onClick={() => {
              onCategoryChange(category.id);
              setShowAll(false);
            }}
          >
            {category.label}
          </button>
        ))}
        <span className="product-count" aria-live="polite">
          {visibleProducts.length} of {matchingProducts.length} products
        </span>
      </div>

      <div className="product-grid">
        {visibleProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image-wrap">
              <img
                className="product-image"
                src={product.image}
                alt={product.imageAlt}
                loading="lazy"
                width="600"
                height="440"
              />
              {product.badge && (
                <span className="product-badge">{product.badge}</span>
              )}
            </div>
            <div className="product-body">
              <p className="product-category">{product.categoryLabel}</p>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-details">
                <span>
                  <Package size={15} aria-hidden="true" /> {product.packSizes}
                </span>
                <span>
                  MOQ: <strong>{product.moq}</strong>
                </span>
              </div>
              <p className="product-price">Price on enquiry</p>
              <a
                className="whatsapp-button"
                href={enquiryUrl(`${product.categoryLabel} – ${product.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enquire on WhatsApp about ${product.name}`}
              >
                <WhatsAppIcon width={20} height={20} />
                Enquire on WhatsApp
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="catalogue-footer">
        <p className="text-muted">
          Images, pack sizes and MOQs are illustrative. Confirm stock,
          specifications and terms with our team.
        </p>
        {activeCategory === "all" && !showAll && (
          <button
            className="text-button"
            type="button"
            onClick={() => setShowAll(true)}
          >
            View all 9 products <ArrowRight size={17} aria-hidden="true" />
          </button>
        )}
        {activeCategory === "all" && showAll && (
          <button
            className="text-button"
            type="button"
            onClick={() => setShowAll(false)}
          >
            Show featured products <ArrowRight size={17} aria-hidden="true" />
          </button>
        )}
      </div>
    </section>
  );
}
