import { omit } from 'lodash';

export const filterProps = props => {
  // debugger
  return omit(props, [
    'theme',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'color',
    'bg',
    'fill',
    'fontSize',
    'fontFamily',
    'fontStyle',
    'f',
    'image',
    'maxWidth',
    'bold',
    'regular',
    'caps',
    'wrap',
    'size',
    'height',
    'boxShadowSize',
    'remSizes',
    "templateRows",
    "templateColumns",
    "alignSelf",
    "justifySelf",
    "gridColumn",
    "gridRow",
    "alignContent",
    "gridGap",
    "textTransform",
    "minHeight",
    "flexDirection",
    "borderColor",
    "justifyContent",
    "borderRadius",
    "borderWidth",
    "bgAnimation",
    "backgroundColor",
    "textShadow",
    "zIndex",
    "backgroundImage",
    "backgroundSize",
    "transformOrigin",
    "alignItems",
    "boxShadow",
    "fontSmooth",
    "bgAnimation",
    "windowBorder",
    "bgAnimationGlow",
    "textAlign",
    "flexGrow",
    "foucsBoxShadowColor",
    "focusColor",
    "borderFocus",
    "maxHeight",
    "foucsBoxShadowColor",
    "focusColor",
    "borderFocus",
    "error",
    "minHeight",
    "fontSmooth",
    "clipPath",
    "transformOrigin",
    "transform",
    "content",
    "all",
    "animation",
    "animationDelay",
    "animationDirection",
    "animationDuration",
    "animationFillMode",
    "animationIterationCount",
    "animationName",
    "animationPlayState",
    "animationTimingFunction",
    "appearance",
    "azimuth",
    "backdropFilter",
    "backfaceVisibility",
    "backgroundAttachment",
    "backgroundBlendMode",
    "backgroundClip",
    "backgroundOrigin",
    "backgroundPositionX",
    "backgroundPositionY",
    "blockSize",
    "borderBlockEnd",
    "borderBlockEndColor",
    "borderBlockEndStyle",
    "borderBlockEndWidth",
    "borderBlockStart",
    "borderBlockStartColor",
    "borderBlockStartStyle",
    "borderBlockStartWidth",
    "borderBottomColor",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
    "borderBottomStyle",
    "borderBottomWidth",
    "borderCollapse",
    "borderImage",
    "borderImageOutset",
    "borderImageRepeat",
    "borderImageSlice",
    "borderImageSource",
    "borderImageWidth",
    "borderInlineEnd",
    "borderInlineEndColor",
    "borderInlineEndStyle",
    "borderInlineEndWidth",
    "borderInlineStart",
    "borderInlineStartColor",
    "borderInlineStartStyle",
    "borderInlineStartWidth",
    "borderLeftColor",
    "borderLeftStyle",
    "borderLeftWidth",
    "borderRightColor",
    "borderRightStyle",
    "borderRightWidth",
    "borderSpacing",
    "borderTopColor",
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderTopStyle",
    "borderTopWidth",
    "bottom",
    "boxAlign",
    "boxDecorationBreak",
    "boxDirection",
    "boxFlex",
    "boxFlexGroup",
    "boxLines",
    "boxOrdinalGroup",
    "boxOrient",
    "boxPack",
    "boxSizing",
    "breakAfter",
    "breakBefore",
    "breakInside",
    "captionSide",
    "caretColor",
    "clear",
    "clip",
    "columnCount",
    "columnFill",
    "columnRule",
    "columnRuleColor",
    "columnRuleStyle",
    "columnRuleWidth",
    "columnSpan",
    "columnWidth",
    "columns",
    "contain",
    "counterIncrement",
    "counterReset",
    "cursor",
    "direction",
    "displayInside",
    "displayList",
    "displayOutside",
    "emptyCells",
    "filter",
    "flexFlow",
    "float",
    "font",
    "fontFeatureSettings",
    "fontKerning",
    "fontLanguageOverride",
    "fontVariationSettings",
    "fontSizeAdjust",
    "fontStretch",
    "fontSynthesis",
    "fontVariant",
    "fontVariantAlternates",
    "fontVariantCaps",
    "fontVariantEastAsian",
    "fontVariantLigatures",
    "fontVariantNumeric",
    "fontVariantPosition",
    "gridColumnEnd",
    "gridColumnStart",
    "gridRowEnd",
    "gridRowStart",
    "gridTemplate",
    "hyphens",
    "imageOrientation",
    "imageRendering",
    "imageResolution",
    "imeMode",
    "initialLetter",
    "initialLetterAlign",
    "inlineSize",
    "isolation",
    "lineBreak",
    "lineHeightStep",
    "listStyle",
    "listStyleImage",
    "listStylePosition",
    "listStyleType",
    "marginBlockEnd",
    "marginBlockStart",
    "marginInlineEnd",
    "marginInlineStart",
    "markerOffset",
    "mask",
    "maskClip",
    "maskComposite",
    "maskImage",
    "maskMode",
    "maskOrigin",
    "maskPosition",
    "maskRepeat",
    "maskSize",
    "maskType",
    "maxBlockSize",
    "maxInlineSize",
    "minBlockSize",
    "minInlineSize",
    "mixBlendMode",
    "objectFit",
    "objectPosition",
    "offset",
    "offsetAnchor",
    "offsetBlockEnd",
    "offsetBlockStart",
    "offsetInlineEnd",
    "offsetInlineStart",
    "offsetDistance",
    "offsetPath",
    "offsetPosition",
    "offsetRotate",
    "order",
    "orphans",
    "outline",
    "outlineColor",
    "outlineOffset",
    "outlineStyle",
    "outlineWidth",
    "overflow",
    "overflowClipBox",
    "overflowWrap",
    "overflowX",
    "overflowY",
    "paddingBlockEnd",
    "paddingBlockStart",
    "paddingInlineEnd",
    "paddingInlineStart",
    "pageBreakAfter",
    "pageBreakBefore",
    "pageBreakInside",
    "perspective",
    "perspectiveOrigin",
    "pointerEvents",
    "quotes",
    "resize",
    "rubyAlign",
    "rubyMerge",
    "rubyPosition",
    "scrollBehavior",
    "scrollSnapCoordinate",
    "scrollSnapDestination",
    "scrollSnapPointsX",
    "scrollSnapPointsY",
    "scrollSnapType",
    "scrollSnapTypeX",
    "scrollSnapTypeY",
    "shapeImageThreshold",
    "shapeMargin",
    "shapeOutside",
    "tabSize",
    "tableLayout",
    "textAlignLast",
    "textCombineUpright",
    "textDecoration",
    "textDecorationColor",
    "textDecorationLine",
    "textDecorationSkip",
    "textDecorationStyle",
    "textEmphasis",
    "textEmphasisColor",
    "textEmphasisPosition",
    "textEmphasisStyle",
    "textIndent",
    "textJustify",
    "textOrientation",
    "textOverflow",
    "textRendering",
    "textSizeAdjust",
    "textUnderlinePosition",
    "touchAction",
    "transformBox",
    "transformStyle",
    "transition",
    "transitionDelay",
    "transitionDuration",
    "transitionProperty",
    "transitionTimingFunction",
    "unicodeBidi",
    "userSelect",
    "verticalAlign",
    "visibility",
    "whiteSpace",
    "widows",
    "willChange",
    "wordBreak",
    "wordSpacing",
    "wordWrap",
    "writingMode",
    "font-size",
    "fontSize",
    "font-family",
    "fontFamily",
    "width",
    "height",
    "borderstyle",
    "borderStyle",
    "lineHeight",
    "letterSpacing",
    "margin",
    "display",
    "letter-spacing",
    "m",
    "mx",
    "my",
    "p",
    "px",
    "py",
    "border",
    "opacity",
    "border-radius",
    "borderBottom",
    "borderLeft",
    "borderRight",
    "borderTop",
    "background",
    "position",
    "flex-flow",
    "grid-row-start",
    "grid-column-start",
    "grid-row-end",
    "grid-column-end",
    "itemname"
])}
