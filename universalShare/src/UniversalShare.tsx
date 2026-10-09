import { ReactElement, createElement } from "react";

import { UniversalShareContainerProps } from "../typings/UniversalShareProps";
import { UniversalShareInput, toHashtags, toPlatforms } from "./components/UniversalShareInput";
import "./ui/UniversalShare.css";

const text = (value: string | undefined): string => value?.trim() ?? "";

// Icon size outside 16..128 (or an empty value) uses the default of 40.
export function toIconSize(value: number | undefined): number {
    return value !== undefined && value >= 16 && value <= 128 ? Math.round(value) : 40;
}

export function UniversalShare(props: UniversalShareContainerProps): ReactElement {
    const { urlKey, titleKey, descriptionKey, hashtagsKey, imageUrlKey, facebookAPPIDKey, platformsKey } = props;

    return (
        <UniversalShareInput
            className={props.class}
            style={props.style}
            content={{
                // No URL: share the page the user is on, as most share buttons do.
                url: text(urlKey?.value) || window.location.href,
                title: text(titleKey?.value),
                description: text(descriptionKey?.value),
                hashtags: toHashtags(hashtagsKey?.value),
                imageUrl: text(imageUrlKey?.value),
                appId: text(facebookAPPIDKey?.value)
            }}
            platforms={toPlatforms(platformsKey.value)}
            size={toIconSize(props.iconSize)}
            round={props.roundIcons}
            visibleCount={Math.max(0, props.visibleCount ?? 6)}
        />
    );
}
