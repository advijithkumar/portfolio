import { useState, useEffect, useCallback } from 'react';
import './ErpProjectCard.css';

/* ── Import every image from /assets/erp_adawnix_in/ ── */
import imgDashboard    from '../assets/erp_adawnix_in/dashboard.png';
import imgLogin        from '../assets/erp_adawnix_in/login.png';
import imgInvoice      from '../assets/erp_adawnix_in/invoice.png';
import imgInventory    from '../assets/erp_adawnix_in/inverntory.png';
import imgCRM          from '../assets/erp_adawnix_in/crm.png';
import imgSales        from '../assets/erp_adawnix_in/sales.png';
import imgPurchase     from '../assets/erp_adawnix_in/purcahse.png';
import imgReports      from '../assets/erp_adawnix_in/reports.png';
import imgVendor       from '../assets/erp_adawnix_in/vendor.png';
import imgSettings     from '../assets/erp_adawnix_in/settings.png';
import imgBalance      from '../assets/erp_adawnix_in/balance.png';
import imgBills        from '../assets/erp_adawnix_in/bills.png';
import imgDelivery     from '../assets/erp_adawnix_in/delevery.png';
import imgNotification from '../assets/erp_adawnix_in/notification.png';
import imgQuotation    from '../assets/erp_adawnix_in/quadation.png';
import imgReceipts     from '../assets/erp_adawnix_in/recipts.png';
import imgAuditLogs    from '../assets/erp_adawnix_in/auditlogs.png';
import imgCustomFields from '../assets/erp_adawnix_in/customfields.png';
import imgUsers        from '../assets/erp_adawnix_in/usermangement.png';
import imgSignup       from '../assets/erp_adawnix_in/signup.png';

const slides = [
  { src: imgDashboard,    alt: 'Dashboard' },
  { src: imgCRM,          alt: 'CRM' },
  { src: imgInvoice,      alt: 'Invoice' },
  { src: imgInventory,    alt: 'Inventory' },
  { src: imgSales,        alt: 'Sales' },
  { src: imgPurchase,     alt: 'Purchase' },
  { src: imgReports,      alt: 'Reports' },
  { src: imgVendor,       alt: 'Vendor' },
  { src: imgSettings,     alt: 'Settings' },
  { src: imgBalance,      alt: 'Balance Sheet' },
  { src: imgBills,        alt: 'Bills' },
  { src: imgDelivery,     alt: 'Delivery' },
  { src: imgNotification, alt: 'Notifications' },
  { src: imgQuotation,    alt: 'Quotation' },
  { src: imgReceipts,     alt: 'Receipts' },
  { src: imgAuditLogs,    alt: 'Audit Logs' },
  { src: imgCustomFields, alt: 'Custom Fields' },
  { src: imgUsers,        alt: 'User Management' },
  { src: imgLogin,        alt: 'Login' },
  { src: imgSignup,       alt: 'Signup' },
];

const techStack = [
  'React', 'TypeScript', 'Node.js', 'Express',
  'PostgreSQL', 'Prisma', 'REST API', 'JWT Auth',
];

const features = [
  'Role‑based access control with granular permissions',
  'Real‑time inventory tracking & automated reorder alerts',
  'Multi‑module CRM, invoicing, purchase & delivery pipeline',
  'Dynamic reporting with exportable PDF & Excel outputs',
  'Audit logging and full activity trails for compliance',
];

const ErpProjectCard = ({ setZoomImg }) => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const next = useCallback(() => setCurrent((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((i) => (i - 1 + total) % total), [total]);

  /* auto‑advance every 4 s */
  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <article className="fui-card" id="erp-project-card">
      <div className="fui-card-inner">

        {/* ── Header ─────────────────────────────── */}
        <div className="fui-section-label">// project_01</div>
        <div className="fui-header">
          <span className="fui-status-dot" title="Active" />
          <h2 className="fui-title">ERP System</h2>
        </div>
        <p className="fui-description">
          A full‑stack enterprise resource planning platform built for
          small‑to‑mid businesses — covering CRM, invoicing, inventory,
          procurement and reporting in one unified dashboard.
        </p>

        <hr className="fui-scanline" />

        {/* ── Tech Stack ─────────────────────────── */}
        <div className="fui-section-label">// tech_stack</div>
        <ul className="fui-tags">
          {techStack.map((t) => (
            <li className="fui-tag" key={t}>{t}</li>
          ))}
        </ul>

        <hr className="fui-scanline" />

        {/* ── Carousel ───────────────────────────── */}
        <div className="fui-section-label">// preview</div>
        <div className="fui-carousel" id="erp-carousel">
          <span className="fui-carousel-counter">
            {String(current + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
          </span>
          <div
            className="fui-carousel-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div 
                className="fui-carousel-slide" 
                key={i} 
                onClick={() => setZoomImg(s)}
              >
                <img src={s.src} alt={s.alt} loading="lazy" />
              </div>
            ))}
          </div>
          <button
            className="fui-carousel-btn fui-carousel-btn--prev"
            onClick={prev}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            className="fui-carousel-btn fui-carousel-btn--next"
            onClick={next}
            aria-label="Next slide"
          >
            ›
          </button>
          <div className="fui-carousel-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`fui-carousel-dot${i === current ? ' fui-carousel-dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <hr className="fui-scanline" />

        {/* ── Features ───────────────────────────── */}
        <div className="fui-features">
          <h3 className="fui-features-heading">// key_features</h3>
          <ul className="fui-features-list">
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <hr className="fui-scanline" />

        {/* ── CTA Buttons ────────────────────────── */}
        <div className="fui-section-label">// actions</div>
        <div className="fui-actions">
          <a
            className="fui-btn fui-btn--primary"
            href="https://erp.adawnix.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            ◈ View Live
          </a>
          <a
            className="fui-btn fui-btn--secondary"
            href="https://github.com/advijithkumar/erp"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⟁ GitHub
          </a>
        </div>

      </div>
    </article>
  );
};

export default ErpProjectCard;
