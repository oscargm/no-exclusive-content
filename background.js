browser.contextMenus.create({
  id: "no-exclusive-content",
  title: "Remove exclusive content banner",
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "no-exclusive-content") {
    browser.tabs.executeScript({
      file: "no-exclusive-content.js",
    });
  }
});

// const onClicked = (info, tab) => {
//   if (info.menuItemId === "no-exclusive-content") {
//     browser.tabs.executeScript({
//       file: "no-exclusive-content.js",
//     });
//   }
// };
