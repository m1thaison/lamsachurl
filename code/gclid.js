// Lam sach URL: https://lamsachurl.thaison.page
// Chia se boi Lam Thai Son: https://thaison.site

// Remove gclid
(function(){var param='gclid';if(location.search.indexOf(param+'=')!==-1){var replace='';try{var url=new URL(location);url.searchParams.delete(param);replace=url.href}catch(ex){var regExp=new RegExp('[?&]'+param+'=.*$');replace=location.search.replace(regExp,'');replace=location.pathname+replace+location.hash}
history.replaceState(null,'',replace)}})();
