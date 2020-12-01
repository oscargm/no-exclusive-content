const laVanguardia = () => {
  ["ev-modals", "modal-open"].forEach((className) => {
    document.body.classList.remove(className);
  });
  const requireLoginDiv = document.querySelector('div[class*="REQUIRE_LOGIN"]');
  if (requireLoginDiv) {
    console.log(requireLoginDiv, "requireLoginDiv");
    requireLoginDiv.style.display = "none !important";
  } else {
    console.log("not found!!!!");
  }
};

(() => {
  const newsPaper = window.location.hostname;
  switch (newsPaper) {
    case "www.lavanguardia.com":
      laVanguardia();
      break;
    default:
      console.log("no function available");
      break;
  }
})();
