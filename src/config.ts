// Edit these details once to update the whole catalogue and every enquiry link.
export const BUSINESS = {
  name: "Sunrise Ecotrade",
  whatsapp: "919596327355",
  email: "", // Set your business email before publishing.
  address: "Kashmir, Jammu & Kashmir, India",
  hours: "Monday–Saturday · 9:00 AM–6:00 PM IST",
};

export function enquiryUrl(product?: string) {
  const message = product
    ? `Hello ${BUSINESS.name}, I'm interested in bulk purchase of ${product}. Please share price, MOQ, and delivery details.`
    : `Hello ${BUSINESS.name}, I'm interested in your Kashmiri dry fruits and honey for bulk purchase. Please share your catalogue, MOQ, and delivery details.`;
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}
