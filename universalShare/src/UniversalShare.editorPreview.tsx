import { ReactElement, createElement } from "react";
import classNames from "classnames";
import { EmailIcon, FacebookIcon, LinkedinIcon, WhatsappIcon, XIcon } from "react-share";

import { UniversalSharePreviewProps } from "../typings/UniversalShareProps";
import "./ui/UniversalShare.css";

// The platforms come from an attribute, so design mode shows five example icons and the attribute name.
export function preview(props: UniversalSharePreviewProps): ReactElement {
    const size = props.iconSize && props.iconSize >= 16 && props.iconSize <= 128 ? props.iconSize : 40;
    const round = props.roundIcons !== false;
    const icon = { size, round, borderRadius: round ? undefined : Math.round(size / 5) };
    return (
        <div className={classNames("widget-universalshare", props.className)} style={props.styleObject}>
            <div className="us-grid us-preview">
                {[FacebookIcon, XIcon, LinkedinIcon, WhatsappIcon, EmailIcon].map((Icon, i) => (
                    <div key={i} className="us-item">
                        <Icon {...icon} />
                    </div>
                ))}
            </div>
            <div className="us-preview-caption">
                Universal Share: platforms from{" "}
                {props.platformsKey ? `[${props.platformsKey}]` : "(no attribute selected)"}
            </div>
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/UniversalShare.css");
}
