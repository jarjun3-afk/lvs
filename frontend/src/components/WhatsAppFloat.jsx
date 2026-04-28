import React from "react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/916362554499?text=Hello%20Leela%20Vigil%20Solutions%2C%20I%27d%20like%20to%20know%20more%20about%20your%20security%20services."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      data-testid="whatsapp-float"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform"
    >
      <span className="absolute inset-0 rounded-full radar-pulse" />
      <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden>
        <path d="M19.11 17.32c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.92 2.94 4.66 4.12.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.04 5.33c-5.86 0-10.62 4.76-10.62 10.62 0 1.86.49 3.68 1.42 5.28L5 27l5.91-1.55a10.6 10.6 0 0 0 5.13 1.31h.01c5.85 0 10.62-4.76 10.62-10.62s-4.76-10.62-10.63-10.62z" />
      </svg>
    </a>
  );
}
