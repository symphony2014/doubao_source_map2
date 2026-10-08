// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'Typography'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: box-preview-pdf-viewer.a091068e.js
         * chunkId: 55505
         * moduleId: 728302
         */
module.exports = function (module, exports, require) {
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var staticUniqueId = require("static-unique-id") /*id: 694208*/;
  var exportedConstantString = require("exported-constant-string") /*id: 91283*/;
  var uwaf861Constant = require("uwaf861-constant") /*id: 838744*/;
  var udPickerPanelId_1 = require("ud-picker-panel-id_1") /*id: 109217*/;
  var constantIdentifier_3 = require("constant-identifier_3") /*id: 994116*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var sxEnhancedReactCreateElement_1 = require("sx-enhanced-react-create-element_1") /*id: 606167*/;
  var p = "u1xi5sbv";
  var f = {
    props: {
      fontSize: "u1ymg821",
      lineHeight: "uhxuey4",
      fontWeight: p
    }
  };
  f.alias = "ud-typography-title-0";
  var udPickerPanelId = require("ud-picker-panel-id") /*id: 73978*/;
  var boxPreviewPdfViewerId = require("box-preview-pdf-viewer-id") /*id: 658336*/;
  var v = {
    props: {
      fontSize: udPickerPanelId.pickerPanelId,
      lineHeight: boxPreviewPdfViewerId.boxPreviewId,
      fontWeight: p
    }
  };
  v.alias = "ud-typography-title-1";
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var udFontMediumStyle = require("ud-font-medium-style") /*id: 757909*/;
  var y = composeClassNamesUtil.composeClassNames.compose(udFontMediumStyle.udFontMedium, {
    props: {
      fontSize: "u138hera",
      lineHeight: "u1g8z9ip"
    }
  });
  y.alias = "ud-typography-title-2";
  var boxPreviewPdfViewerConstant = require("box-preview-pdf-viewer-constant") /*id: 958963*/;
  var C = composeClassNamesUtil.composeClassNames.compose(udFontMediumStyle.udFontMedium, {
    props: {
      fontSize: "u1nvodm3",
      lineHeight: boxPreviewPdfViewerConstant.viewerConstant
    }
  });
  C.alias = "ud-typography-title-3";
  var udTypographyTitle4Style = require("ud-typography-title-4-style") /*id: 131651*/;
  var udTypographyTitle5Config = require("ud-typography-title-5-config") /*id: 600803*/;
  var composeTypographyHeadlineClass = require("compose-typography-headline-class") /*id: 932304*/;
  var udTypographyCaptionStyle = require("ud-typography-caption-style") /*id: 579446*/;
  var typographyCaptionStyles = require("typography-caption-styles") /*id: 332748*/;
  var typographyBodyStyleConfig = require("typography-body-style-config") /*id: 607187*/;
  var udTypographyBody2 = require("ud-typography-body-2") /*id: 144525*/;
  var textStyleConfig = require("text-style-config") /*id: 454094*/;
  var udPickerPanelConst = require("ud-picker-panel-const") /*id: 638691*/;
  var stringConstantModule = require("string-constant-module") /*id: 627120*/;
  var udPickerPanelModule = require("ud-picker-panel-module") /*id: 626403*/;
  var D = {
    props: {
      overflow: udPickerPanelConst.pickerPanelId,
      textOverflow: stringConstantModule.constantValue,
      display: "udz62fk",
      WebkitBoxOrient: "u6rw91u",
      whiteSpace: udPickerPanelModule.pickerPanelId,
      wordBreak: "uktmkt9"
    }
  };
  var forwardRefUtils = require("forward-ref-utils") /*id: 638327*/;
  var textOverflowPopperSidecarHook_1 = require("text-overflow-popper-sidecar-hook_1") /*id: 479931*/;
  var domElementUtils_1 = require("dom-element-utils_1") /*id: 846713*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var mergePropsWithClassnameStyleSx_1 = require("merge-props-with-classname-style-sx_1") /*id: 905758*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var V = ["as", "variant", "lineClamp", "disabled", "tooltipProps", "alignment", "italic"];
  var z = {
    title0: f,
    title1: v,
    title2: y,
    title3: C,
    title4: udTypographyTitle4Style.udTypographyTitle4Style,
    title5: udTypographyTitle5Config.udTypographyTitle5,
    headline: composeTypographyHeadlineClass.typographyHeadlineClass,
    caption0: udTypographyCaptionStyle.udTypographyCaption,
    caption1: typographyCaptionStyles.captionStyle,
    caption1Hack: typographyCaptionStyles.captionStyleCompat,
    body0: typographyBodyStyleConfig.typographyBodyStyle,
    body2: udTypographyBody2.udTypographyBody2
  };
  var H = forwardRefUtils.forwardRef(function (e, t) {
    var i = e.as;
    var p = i === undefined ? "span" : i;
    var f = e.variant;
    var m = f === undefined ? "body0" : f;
    var g = e.lineClamp;
    var v = e.disabled;
    var b = v !== undefined && v;
    var x = e.tooltipProps;
    var y = e.alignment;
    var w = e.italic;
    var C = w !== undefined && w;
    var P = objectOmitHelper_1.omitWithSymbols(e, V);
    var E = P.children;
    var T = !domTypeUtils_1.isDefined(g);
    var I = !T && g <= 1;
    var S = !I && !T;
    var A = uiConfigContextHooks.useClassName("text");
    var _ = textOverflowPopperSidecarHook_1.useTextOverflowPopperSidecar();
    var R = mergePropsWithClassnameStyleSx_1.mergeProps(P, {
      className: A(),
      sx: reactCoreLibraryReexport.useMemo(function () {
        return [{
          props: {
            wordWrap: "u14wgoeq",
            overflowWrap: constantIdentifier_3.constantIdentifier
          }
        }, m !== "plain" && z[m], p === "span" && I && {
          props: {
            display: udPickerPanelId_1.pickerPanelId
          }
        }, I ? textStyleConfig.textStyleConfig : S ? D : undefined, y && {
          start: {
            props: {
              textAlign: "u1ol6024"
            }
          },
          center: {
            props: {
              textAlign: uwaf861Constant.uwaf861
            }
          },
          end: {
            props: {
              textAlign: "uuiqfcc"
            }
          },
          justify: {
            props: {
              textAlign: "u3ygxnd"
            }
          }
        }[y], C && {
          props: {
            fontStyle: "u1kne0ek"
          }
        }, b && {
          props: {
            color: "umg9lr1",
            cursor: staticUniqueId.uniqueId,
            userSelect: exportedConstantString.getConstantValue
          }
        }];
      }, [p, y, b, C, S, I, m]),
      style: {
        WebkitLineClamp: S ? g : undefined
      }
    });
    var M = sxEnhancedReactCreateElement_1.createElementWithSx(p, objectAssignUtil.objectAssign({
      ref: t
    }, R));
    if (T) {
      return M;
    }
    var O = I ? domElementUtils_1.hasHorizontalScroll : domElementUtils_1.hasVerticalScroll;
    return sxEnhancedReactCreateElement_1.createElementWithSx(_, objectPropertyAssign.assignObject({
      title: E,
      checkOverflow: O
    }, x), M);
  });
  require.d(exports, {
    Typography: function () {
      return H;
    }
  });
}