function setConsent(state) {
  localStorage.setItem("cookieConsent", state);
  localStorage.setItem("cookieConsentDate", new Date().toISOString());

  gtag("consent", "update", {
    ad_storage: state,
    analytics_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    functionality_storage: state,
    personalization_storage: state,
  });

  if (state === "granted") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "consent_granted_update" });
  }

  const banner = document.getElementById("cookie-banner");
  if (banner) banner.style.display = "none";
}

function getConsent() {
  const consent = localStorage.getItem("cookieConsent");
  const date = localStorage.getItem("cookieConsentDate");

  if (!consent || !date) return null;

  const expiry = new Date(date);
  expiry.setFullYear(expiry.getFullYear() + 1);

  if (new Date() > expiry) {
    localStorage.removeItem("cookieConsent");
    localStorage.removeItem("cookieConsentDate");
    return null;
  }

  return consent;
}

function showBannerIfNeeded() {
  const consent = getConsent();

  if (!consent) {
    const banner = document.getElementById("cookie-banner");
    if (banner) banner.style.display = "block";
  } else {
    gtag("consent", "update", {
      ad_storage: consent,
      analytics_storage: consent,
      ad_user_data: consent,
      ad_personalization: consent,
      functionality_storage: consent,
      personalization_storage: consent,
    });
  }
}

// --- Init ---
showBannerIfNeeded();
