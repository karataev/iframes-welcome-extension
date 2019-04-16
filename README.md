## Browser extension to allow iframes injection

Usually websites don't allow to inject it's content to other websites with iframes.

Open dev-tools on any website and execute the script below in the console

```js
(function injectIframe(src) {
  let iframe = document.createElement('iframe');
  iframe.setAttribute('src', src);
  iframe.style.width = '500px';
  iframe.style.height = '300px';
  document.body.prepend(iframe);
})('https://google.com');
```

You'll notice the message

`Refused to display 'https://www.google.com/' in a frame because it set 'X-Frame-Options' to 'sameorigin'.`

This happens because google.com sets header `X-Frame-Options` to `sameorigin`, which blocks
loading the website in iframe.

This extension helps to bypass this restriction and load any website to your iframe.

#### Details

This extension intercepts every server response and
cuts off headers `x-frame-options` and `content-security-policy`, which allows to inject webpages in iframes.

#### Installation instructions

1. Navigate to chrome://extensions in your browser. You can also access this page by clicking on the Chrome menu on the top right side of the Omnibox, hovering over More Tools and selecting Extensions.
2. Check the box next to Developer Mode.
3. Click Load Unpacked Extension and select the root directory of this repo.
