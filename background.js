import * as wasm from "./pkg/index_bg.js";

chrome.browserAction.onClicked.addListener(async (tab) => {
  await wasm_bindgen.default();
});
