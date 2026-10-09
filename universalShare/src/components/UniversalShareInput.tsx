import { CSSProperties, ReactElement, ReactNode, createElement, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import {
    BlueskyIcon,
    BlueskyShareButton,
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    GabIcon,
    GabShareButton,
    HatenaIcon,
    HatenaShareButton,
    InstapaperIcon,
    InstapaperShareButton,
    LineIcon,
    LineShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    LivejournalIcon,
    LivejournalShareButton,
    MailruIcon,
    MailruShareButton,
    OKIcon,
    OKShareButton,
    PinterestIcon,
    PinterestShareButton,
    RedditIcon,
    RedditShareButton,
    TelegramIcon,
    TelegramShareButton,
    ThreadsIcon,
    ThreadsShareButton,
    TumblrIcon,
    TumblrShareButton,
    ViberIcon,
    ViberShareButton,
    VKIcon,
    VKShareButton,
    WeiboIcon,
    WeiboShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    XIcon,
    XShareButton
} from "react-share";

export interface ShareContent {
    url: string;
    title: string;
    description: string;
    hashtags: string[];
    imageUrl: string;
    appId: string;
}

// Threads and Bluesky have no hashtag parameter, so the hashtags are added to the text.
const withHashtags = (c: ShareContent): string => [c.title, ...c.hashtags.map(t => `#${t}`)].filter(Boolean).join(" ");

type IconComponent = (props: { size: number; round: boolean; borderRadius?: number }) => ReactElement;

interface PlatformDef {
    label: string;
    icon: IconComponent;
    // Text of the tooltip and the "!" badge when a required value is missing; the icon is then disabled.
    missing?: (c: ShareContent) => string | undefined;
    button: (c: ShareContent, label: string, icon: ReactElement) => ReactElement;
}

// All platforms of react-share that still work. Pocket (closed July 2025) and Workplace from Meta (closed June 2026)
// are left out; their names are skipped like unknown names.
export const PLATFORMS: Record<string, PlatformDef> = {
    facebook: {
        label: "Facebook",
        icon: FacebookIcon,
        button: (c, label, icon) => (
            <FacebookShareButton
                url={c.url}
                hashtag={c.hashtags[0] ? `#${c.hashtags[0]}` : undefined}
                aria-label={label}
            >
                {icon}
            </FacebookShareButton>
        )
    },
    messenger: {
        label: "Messenger",
        icon: FacebookMessengerIcon,
        missing: c => (c.appId ? undefined : "Facebook App ID required"),
        button: (c, label, icon) => (
            <FacebookMessengerShareButton url={c.url} appId={c.appId} aria-label={label}>
                {icon}
            </FacebookMessengerShareButton>
        )
    },
    twitter: {
        label: "X (Twitter)",
        icon: XIcon,
        button: (c, label, icon) => (
            <XShareButton url={c.url} title={c.title} hashtags={c.hashtags} aria-label={label}>
                {icon}
            </XShareButton>
        )
    },
    linkedin: {
        label: "LinkedIn",
        icon: LinkedinIcon,
        button: (c, label, icon) => (
            <LinkedinShareButton url={c.url} title={c.title} summary={c.description} aria-label={label}>
                {icon}
            </LinkedinShareButton>
        )
    },
    whatsapp: {
        label: "WhatsApp",
        icon: WhatsappIcon,
        button: (c, label, icon) => (
            <WhatsappShareButton url={c.url} title={c.title} separator=" " aria-label={label}>
                {icon}
            </WhatsappShareButton>
        )
    },
    telegram: {
        label: "Telegram",
        icon: TelegramIcon,
        button: (c, label, icon) => (
            <TelegramShareButton url={c.url} title={c.title} aria-label={label}>
                {icon}
            </TelegramShareButton>
        )
    },
    reddit: {
        label: "Reddit",
        icon: RedditIcon,
        button: (c, label, icon) => (
            <RedditShareButton url={c.url} title={c.title} aria-label={label}>
                {icon}
            </RedditShareButton>
        )
    },
    pinterest: {
        label: "Pinterest",
        icon: PinterestIcon,
        missing: c => (c.imageUrl ? undefined : "Image URL required"),
        button: (c, label, icon) => (
            <PinterestShareButton
                url={c.url}
                media={c.imageUrl}
                description={c.description || c.title}
                aria-label={label}
            >
                {icon}
            </PinterestShareButton>
        )
    },
    email: {
        label: "Email",
        icon: EmailIcon,
        button: (c, label, icon) => (
            <EmailShareButton url={c.url} subject={c.title} body={c.description} separator={"\n\n"} aria-label={label}>
                {icon}
            </EmailShareButton>
        )
    },
    bluesky: {
        label: "Bluesky",
        icon: BlueskyIcon,
        button: (c, label, icon) => (
            <BlueskyShareButton url={c.url} title={withHashtags(c)} aria-label={label}>
                {icon}
            </BlueskyShareButton>
        )
    },
    threads: {
        label: "Threads",
        icon: ThreadsIcon,
        button: (c, label, icon) => (
            <ThreadsShareButton url={c.url} title={withHashtags(c)} aria-label={label}>
                {icon}
            </ThreadsShareButton>
        )
    },
    vk: {
        label: "VK",
        icon: VKIcon,
        button: (c, label, icon) => (
            <VKShareButton url={c.url} title={c.title} image={c.imageUrl || undefined} aria-label={label}>
                {icon}
            </VKShareButton>
        )
    },
    ok: {
        label: "OK",
        icon: OKIcon,
        button: (c, label, icon) => (
            <OKShareButton
                url={c.url}
                title={c.title}
                description={c.description}
                image={c.imageUrl || undefined}
                aria-label={label}
            >
                {icon}
            </OKShareButton>
        )
    },
    viber: {
        label: "Viber",
        icon: ViberIcon,
        button: (c, label, icon) => (
            <ViberShareButton url={c.url} title={c.title} separator=" " aria-label={label}>
                {icon}
            </ViberShareButton>
        )
    },
    line: {
        label: "LINE",
        icon: LineIcon,
        button: (c, label, icon) => (
            <LineShareButton url={c.url} title={c.title} aria-label={label}>
                {icon}
            </LineShareButton>
        )
    },
    instapaper: {
        label: "Instapaper",
        icon: InstapaperIcon,
        button: (c, label, icon) => (
            <InstapaperShareButton url={c.url} title={c.title} description={c.description} aria-label={label}>
                {icon}
            </InstapaperShareButton>
        )
    },
    tumblr: {
        label: "Tumblr",
        icon: TumblrIcon,
        button: (c, label, icon) => (
            <TumblrShareButton url={c.url} title={c.title} caption={c.description} tags={c.hashtags} aria-label={label}>
                {icon}
            </TumblrShareButton>
        )
    },
    livejournal: {
        label: "LiveJournal",
        icon: LivejournalIcon,
        button: (c, label, icon) => (
            <LivejournalShareButton url={c.url} title={c.title} description={c.description} aria-label={label}>
                {icon}
            </LivejournalShareButton>
        )
    },
    mailru: {
        label: "Mail.ru",
        icon: MailruIcon,
        button: (c, label, icon) => (
            <MailruShareButton
                url={c.url}
                title={c.title}
                description={c.description}
                imageUrl={c.imageUrl || undefined}
                aria-label={label}
            >
                {icon}
            </MailruShareButton>
        )
    },
    gab: {
        label: "Gab",
        icon: GabIcon,
        button: (c, label, icon) => (
            <GabShareButton url={c.url} title={c.title} aria-label={label}>
                {icon}
            </GabShareButton>
        )
    },
    hatena: {
        label: "Hatena",
        icon: HatenaIcon,
        button: (c, label, icon) => (
            <HatenaShareButton url={c.url} title={c.title} aria-label={label}>
                {icon}
            </HatenaShareButton>
        )
    },
    weibo: {
        label: "Weibo",
        icon: WeiboIcon,
        button: (c, label, icon) => (
            <WeiboShareButton url={c.url} title={c.title} image={c.imageUrl || undefined} aria-label={label}>
                {icon}
            </WeiboShareButton>
        )
    }
};

const ALIASES: Record<string, string> = { x: "twitter", fbmessenger: "messenger", mail: "email" };

// "Facebook, X ,linkedin,facebook" -> ["facebook", "twitter", "linkedin"]: case and spaces are ignored,
// unknown names and duplicates are skipped, the order is kept.
export function toPlatforms(value: string | undefined): string[] {
    const result: string[] = [];
    for (const part of (value ?? "").split(",")) {
        const name = part.trim().toLowerCase();
        const key = ALIASES[name] ?? name;
        if (PLATFORMS[key] && !result.includes(key)) {
            result.push(key);
        }
    }
    return result;
}

// "#mendix, low code,," -> ["mendix", "lowcode"]: hashtags cannot contain spaces.
export function toHashtags(value: string | undefined): string[] {
    return (value ?? "")
        .split(",")
        .map(t => t.trim().replace(/^#+/, "").replace(/\s+/g, ""))
        .filter(t => t.length > 0);
}

function Item({
    name,
    content,
    size,
    round
}: {
    name: string;
    content: ShareContent;
    size: number;
    round: boolean;
}): ReactElement {
    const def = PLATFORMS[name];
    const missing = def.missing?.(content);
    const label = missing ?? def.label;
    const icon = createElement(def.icon, { size, round, borderRadius: round ? undefined : Math.round(size / 5) });
    return (
        <div className={classNames("us-item", "us-item-" + name, { "us-item-disabled": missing })}>
            <div className="us-tooltip-wrapper">
                {missing ? (
                    <span
                        className="us-badge-wrapper"
                        role="img"
                        aria-label={`${def.label}: ${missing}`}
                        title={missing}
                    >
                        <span className="us-disabled">{icon}</span>
                        <span className="us-badge">!</span>
                    </span>
                ) : (
                    def.button(content, def.label, icon)
                )}
                <div className="us-tooltip" role="tooltip">
                    {label}
                </div>
            </div>
        </div>
    );
}

export interface UniversalShareInputProps {
    className?: string;
    style?: CSSProperties;
    content: ShareContent;
    platforms: string[];
    size: number;
    round: boolean;
    visibleCount: number;
}

export function UniversalShareInput(props: UniversalShareInputProps): ReactElement {
    const { content, platforms, size, round, visibleCount } = props;
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    const primary = visibleCount > 0 ? platforms.slice(0, visibleCount) : platforms;
    const secondary = visibleCount > 0 ? platforms.slice(visibleCount) : [];
    const hasMore = secondary.length > 0;

    // The More panel closes with Escape or a click outside the widget.
    useEffect(() => {
        if (!open) {
            return;
        }
        const onKey = (e: KeyboardEvent): void => {
            if (e.key === "Escape") {
                setOpen(false);
            }
        };
        const onDown = (e: MouseEvent): void => {
            if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("keydown", onKey);
        document.addEventListener("mousedown", onDown);
        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("mousedown", onDown);
        };
    }, [open]);

    useEffect(() => {
        if (!hasMore) {
            setOpen(false);
        }
    }, [hasMore]);

    const cellStyle = { "--us-size": `${size}px` } as CSSProperties;
    const items = (names: string[]): ReactNode[] =>
        names.map(name => <Item key={name} name={name} content={content} size={size} round={round} />);

    return (
        <div
            ref={rootRef}
            className={classNames("widget-universalshare", props.className)}
            style={{ ...cellStyle, ...props.style }}
        >
            {platforms.length > 0 && (
                <div className="us-grid">
                    {items(primary)}
                    {hasMore && (
                        <div className="us-item">
                            <button
                                type="button"
                                className={classNames("us-more-btn", { open, "us-more-round": round })}
                                onClick={() => setOpen(!open)}
                                aria-label={open ? "Close" : "More"}
                                aria-expanded={open}
                                title={open ? "Close" : "More"}
                            >
                                <span className="us-more-icon">+</span>
                            </button>
                        </div>
                    )}
                </div>
            )}
            {hasMore && open && <div className="us-popup">{items(secondary)}</div>}
        </div>
    );
}
