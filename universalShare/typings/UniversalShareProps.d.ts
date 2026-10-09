/**
 * This file was generated from UniversalShare.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface UniversalShareContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    urlKey?: EditableValue<string>;
    titleKey?: EditableValue<string>;
    descriptionKey?: EditableValue<string>;
    hashtagsKey?: EditableValue<string>;
    imageUrlKey?: EditableValue<string>;
    facebookAPPIDKey?: EditableValue<string>;
    platformsKey: EditableValue<string>;
    iconSize: number;
    roundIcons: boolean;
    visibleCount: number;
}

export interface UniversalSharePreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    urlKey: string;
    titleKey: string;
    descriptionKey: string;
    hashtagsKey: string;
    imageUrlKey: string;
    facebookAPPIDKey: string;
    platformsKey: string;
    iconSize: number | null;
    roundIcons: boolean;
    visibleCount: number | null;
}
