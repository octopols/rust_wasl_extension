import wasm_bindgen from 'pkg/console_log_bg.wasm.js';

chrome.browserAction.onClicked.addListener(async (tab) => {
  await wasm_bindgen.default();
});
