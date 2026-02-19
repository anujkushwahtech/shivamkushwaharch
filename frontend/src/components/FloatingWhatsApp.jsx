import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a small delay for smooth entry
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const whatsappUrl = 'https://wa.me/917725870348?text=Hello%20I%20want%20to%20discuss%20a%20project';
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`floating-whatsapp ${isVisible ? 'visible' : ''}`}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} strokeWidth={2} />
        <span className="whatsapp-tooltip">Chat on WhatsApp</span>
      </button>

      <style jsx>{`
        .floating-whatsapp {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background: #25D366;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          z-index: 999;
          color: #fff;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: scale(0) translateY(20px);
        }

        .floating-whatsapp.visible {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        .floating-whatsapp:hover {
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
          background: #20BA5A;
        }

        .floating-whatsapp:active {
          transform: scale(0.95);
        }

        .whatsapp-tooltip {
          position: absolute;
          right: 70px;
          background: #1A1A1A;
          color: #E8E8E8;
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .whatsapp-tooltip::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid #1A1A1A;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
        }

        .floating-whatsapp:hover .whatsapp-tooltip {
          opacity: 1;
          right: 75px;
        }

        /* Pulse animation */
        @keyframes pulse {
          0% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4), 0 0 0 10px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        .floating-whatsapp.visible {
          animation: pulse 2s infinite;
        }

        .floating-whatsapp:hover {
          animation: none;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .floating-whatsapp {
            bottom: 20px;
            right: 20px;
            width: 56px;
            height: 56px;
          }

          .whatsapp-tooltip {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .floating-whatsapp {
            bottom: 16px;
            right: 16px;
            width: 52px;
            height: 52px;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingWhatsApp;
