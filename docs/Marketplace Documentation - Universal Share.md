# Universal Share – Marketplace Documentation

Widget version 1.1.0 · Mendix Studio Pro 10.24.17 · Web

## Industry

All industries (cross-industry).

## Categories

- Widgets
- User Interface / Display

## Component tagline

Share buttons for 22 social networks, messengers and email, set from attributes.

(80 characters)

## About

Universal Share adds a row of share buttons to a Mendix page. A click opens the share dialog of that platform with the URL, title, description, hashtags and image from attributes of the data view object. No API keys or server code are needed; only Messenger needs a Facebook App ID.

The platforms come from a String attribute with comma-separated names, so every page or object can show its own set in its own order. The first six icons are shown in a row and the others open in a panel behind a + (More) button. 22 platforms are supported: Facebook, Messenger, X (Twitter), LinkedIn, WhatsApp, Telegram, Reddit, Pinterest, Email, Bluesky, Threads, Tumblr, VK, OK, Viber, LINE, Instapaper, LiveJournal, Mail.ru, Gab, Hatena and Weibo.

Use cases:
- Share buttons on product, article, event or job detail pages.
- Letting users send a link to a record (a quote, a report, a form) by email, WhatsApp or Telegram.
- Campaign and landing pages with hashtags for X, Threads and Facebook.
- Portals where each object or customer group needs another set of platforms.

Version 1.1.0 is rebuilt for Mendix Studio Pro 10.24.17 with react-share 5.3.0. Gab, Hatena and Weibo now work, the closed services Pocket and Workplace are skipped, platform names ignore case and spaces, hashtags are cleaned, an empty URL shares the current page instead of causing an error, and the class and style from Studio Pro are applied. New properties set the icon size, round or square icons, and how many icons are shown before the More button.

The source code is on GitHub: https://github.com/bharathidas/UniversalShare

## Typical usage scenario

Universal Share is for apps that want users to share a page or a record on social networks, in messengers or by email, without building share links by hand. Put the widget in a data view, select the attributes for the URL, title and the other values, and fill a Platforms attribute with the networks to show.

- Share buttons on product, article, event or job detail pages.
- Sending a link to a record (a quote, a report, a form) by email, WhatsApp or Telegram.
- Campaign and landing pages with hashtags for X, Threads and Facebook.
- Portals where each object or customer group needs another set of platforms.

## Features and limitations

**Features**

- 22 platforms: Facebook, Messenger, X (Twitter), LinkedIn, WhatsApp, Telegram, Reddit, Pinterest, Email, Bluesky, Threads, Tumblr, VK, OK, Viber, LINE, Instapaper, LiveJournal, Mail.ru, Gab, Hatena and Weibo.
- Platforms from a String attribute, in the order you list them; upper case, spaces and duplicates are ignored, and `x` can be used for X.
- URL, title, description, hashtags and image from attributes; an empty URL shares the current page.
- Hashtags are cleaned (a leading # and spaces are removed) and passed to X, Threads, Bluesky, Tumblr and Facebook.
- The first icons in a row, the others in a panel behind a + (More) button; the panel closes with Escape or a click outside.
- Messenger without a Facebook App ID and Pinterest without an Image URL are shown faded with a red ! badge and a tooltip that says what is missing.
- Icon size (16 to 128 px), round or square icons, and the number of icons before More (0 shows all).
- Tooltips on hover and keyboard focus.
- Class and style from Studio Pro, and CSS classes for the grid, items, More button, panel and tooltips.
- Offline capable; no API keys or server code.

**Limitations**

- Web only; not available for native mobile.
- The platform decides what its share page shows; most platforms read the preview image and text from the Open Graph tags of the shared URL.
- Facebook shares only the URL and one hashtag.
- Instagram, TikTok and Snapchat have no web share link and are not supported.
- Pocket (closed July 2025) and Workplace from Meta (closed June 2026) are skipped.
- Email opens the user's mail program with a mailto link.
- Labels and tooltips are in English.

## Dependencies

- Mendix Studio Pro 10.24.17 or a later 10.24 version.
- No other modules or libraries are needed.

## Installation

1. Download `mendix.UniversalShare.mpk` from the Marketplace (or from the GitHub release Version1.1.0).
2. Copy it into the `widgets` folder of your app (App > Show App Directory in Explorer).
3. In Studio Pro, press F4 (App > Synchronize App Directory).
4. The widget appears in the Toolbox as **Universal Share** (category Display).

**Upgrading from 1.0.0:** replace the file in the `widgets` folder and press F4. Studio Pro reports that the widget definition changed; right-click the error and choose **Update all widgets**. Your settings are kept, and the new properties get defaults that look like 1.0.0 (Icon size 40, round icons, 6 icons before More). If the running app still shows the old widget, choose App > Clean Deployment Directory and run the app again. After upgrading, `pocket` and `workplace` are skipped, `gab`, `hatena` and `weibo` appear, and an empty URL shares the current page.

## Configuration

1. Give the entity String attributes for the values to share, for example ShareURL, ShareTitle, ShareText, Hashtags and SharePlatforms, or use a non-persistent helper entity.
2. Fill them in the microflow or nanoflow that opens the page, or give them default values. Example for Platforms: `facebook,x,linkedin,whatsapp,email,telegram,reddit,pinterest`.
3. Put a data view of that entity on the page and drag **Universal Share** into it.
4. Select the attributes for **URL**, **Title**, **Description**, **Hashtags**, **Image URL**, **Facebook App ID** and **Platforms** (only Platforms is required).
5. Optionally set **Icon size**, **Round icons** and **Icons before More** on the Appearance tab.

Platform names: facebook, messenger, twitter (or x), linkedin, whatsapp, telegram, reddit, pinterest, email, bluesky, threads, tumblr, vk, ok, viber, line, instapaper, livejournal, mailru, gab, hatena, weibo.

Recommended settings:

- Product or article page: Platforms `facebook,x,linkedin,whatsapp,email,pinterest`, Image URL set, Icons before More 6.
- Compact row in a card or list: Icon size 28, Icons before More 4.
- All icons in one block: Icons before More 0, Round icons No, Icon size 48.
- Internal links: Platforms `email,whatsapp,telegram` with a short Description.

The URL must be a public address that the platform can open, for example a page URL of your app with the object in it.

Styling: the outer element has the class `widget-universalshare`, the row `us-grid`, each icon `us-item us-item-<platform>`, the More button `us-more-btn`, the panel `us-popup` and the tooltips `us-tooltip`.

## Known bugs

- None known in version 1.1.0.
- Known behaviour: the share page and its preview are decided by each platform.
- Report bugs on GitHub: https://github.com/bharathidas/UniversalShare/issues

## FAQ

**Why does Messenger (or Pinterest) show a red ! badge?**
Messenger needs a Facebook App ID and Pinterest needs an image URL. Select an attribute with that value for Facebook App ID or Image URL; until it has a value the icon cannot be clicked.

**Why does Facebook not show my title?**
Facebook takes the title, text and image from the Open Graph tags of the shared page, not from the share link. Universal Share sends the URL and the first hashtag.

**Can I change the order of the icons?**
Yes. The icons are shown in the order of the names in the Platforms attribute.

**How do I show all icons without the More button?**
Set Icons before More to 0.

**What happened to Pocket and Workplace?**
Both services have closed (Pocket in July 2025, Workplace from Meta in June 2026). Their names are skipped.

**Does it work in older Mendix versions?**
Version 1.1.0 is built and tested for Studio Pro 10.24.17. Version 1.0.0 (GitHub release Version1.0.0) was made for Mendix 10.18.4.
