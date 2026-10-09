Universal Share 1.1.0 for **Mendix Studio Pro 10.24.17** (web).

## Compatibility
- Mendix Studio Pro 10.24.17 or a later 10.24 version, web profiles only.
- Built with `@mendix/pluggable-widgets-tools` 10.16.0, React 18 and react-share 5.3.0.
- The widget ID (`mendix.universalshare.UniversalShare`) and property keys are the same as in 1.0.0, so existing pages keep their settings. The new properties get defaults that look like 1.0.0.

## Changes and fixes
- **Gab, Hatena and Weibo** work. They were listed in the Studio Pro description of 1.0.0 but never shown.
- **Pocket** (closed July 2025) and **Workplace from Meta** (closed June 2026) are skipped; their buttons only led to closed services.
- **Platform names** ignore upper case and spaces, `x` can be used for X (Twitter), and duplicates are shown once. In 1.0.0 `Facebook` or `LinkedIn` showed nothing.
- **Hashtags** are cleaned: a leading # and spaces are removed. 1.0.0 passed the raw text, which broke the hashtags on X. Facebook now gets the first hashtag; Threads and Bluesky get the hashtags in the text.
- **Empty URL** shares the current page. In 1.0.0 a click with an empty URL caused an error (`AssertionError: telegram.url`).
- More platforms get the title, description and image: Pinterest (description), Tumblr (caption and tags), VK, OK, Mail.ru and Weibo (image), Instapaper and LiveJournal (description).
- **New properties**: Icon size (default 40), Round icons (default Yes) and Icons before More (default 6; 0 shows all icons).
- The More panel closes with Escape or a click outside the widget. Tooltips also show on keyboard focus.
- The class and style set in Studio Pro are applied.
- Studio Pro design mode shows example icons. Clearer captions and descriptions (1.0.0: "My widget description").

Tested in a Mendix 10.24.17 app (27 automated checks; 1.0.0 fails 17 of them, some of them the new properties): all platform names of the description, case and spaces, aliases and duplicates, the More panel, Messenger and Pinterest without the required values, the share links of X, Facebook, LinkedIn, Pinterest, Threads, Weibo and Telegram, an empty URL, tooltips, class and style, the console, the new properties and a phone-sized window.

## Install
1. Download `mendix.UniversalShare.mpk` below.
2. Copy it into the `widgets` folder of your app and press **F4** (App > Synchronize App Directory).
3. When upgrading from 1.0.0, right-click the widget error and choose **Update all widgets**.
