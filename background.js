
function stripHeaders(headers) {
  return headers.filter(header => {
    let headerName = header.name.toLowerCase();
    return !(headerName === 'content-security-policy' || headerName === 'x-frame-options');
  })
}

chrome.webRequest.onHeadersReceived.addListener(
  function(details) {
    return {
      responseHeaders: stripHeaders(details.responseHeaders)
    };
  }, {
    urls: ["<all_urls>"]
  }, ["blocking", "responseHeaders"]);
