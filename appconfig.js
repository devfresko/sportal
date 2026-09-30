// ════════════════════════════════════════════════════════════════════════════
// appconfig.js — Fresko Staff Portal
// ─────────────────────────────────────────────────────────────────────────
// SIRF YAHAN GAS_URL CHANGE KARO — index.html ya app.js mein kuch nahi
// ════════════════════════════════════════════════════════════════════════════

window.APP_CONFIG = {

  // ── GAS Web App URL ────────────────────────────────────────────────────
  // Har nayi deployment ke baad sirf yahan update karo
  GAS_URL: 'https://script.google.com/macros/s/AKfycbywDgxqSxHh4SLsoMRnbCMM_NKuSzW2x9p_hr6GkXA773U0p1wAR2a1ox2e77eS4vf_/exec',

  // ── App Info ────────────────────────────────────────────────────────────
  APP_NAME:    'Fresko Staff Portal',
  APP_VERSION: '4.1',
  APP_COMPANY: 'Fresko',

  // ── Session ─────────────────────────────────────────────────────────────
  SESSION_KEY:     'fk_session_v2',
  SESSION_HOURS:   12,    // overridden by AppConfig from server

  // ── API Timeouts ─────────────────────────────────────────────────────────
  DEFAULT_TIMEOUT: 30000,   // 30s
  LONG_TIMEOUT:    60000,   // 60s for analytics / checklist generate

  // ── Polling ─────────────────────────────────────────────────────────────
  POLL_INTERVAL:   30000,   // 30s badge / uptime poll

};

// Convenience shortcut — app.js uses window.GAS_URL
window.GAS_URL = window.APP_CONFIG.GAS_URL;
