// Lam sach URL: https://lamsachurl.thaison.page
// Chia se boi Lam Thai Son: https://thaison.site

// Remove href.li
function RemoveHrefLi(){var e=document.querySelectorAll('a[href*="href.li/?"]');Array.prototype.forEach.call(e,(function(r,t){var f=e[t].getAttribute("href").split("href.li/?")[1];e[t].setAttribute("href",f)}))}RemoveHrefLi();
