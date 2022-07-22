import React, { SVGAttributes } from 'react';
import './importIcons.js';
import './icon.scss';
declare enum IconName {
    tag = "tag",
    outlineCircle = "checkbox-blank-circle-outline",
    checkedCircle = "check-circle",
    tubiao = "tubiao",
    check = "check",
    arrowRight = "arrow-right",
    arrowLeft = "arrow-left",
    editor = "editor",
    plus = "plus",
    search = "search",
    setting = "setting",
    charts = "chart",
    money = "money"
}
interface IconProps extends SVGAttributes<SVGElement> {
    name: string;
}
declare const Icon: React.FC<IconProps>;
export { IconName, IconProps };
export default Icon;
