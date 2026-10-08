// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'TypographyText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 70389.cef4ab9b.js
         * chunkId: 70389
         * moduleId: 701412
         */
module.exports = function (module, exports, require) {
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var uniqueIdentifierConstant = require("unique-identifier-constant") /*id: 832999*/;
  var flowDocPreviewComponent = require("flow-doc-preview-component") /*id: 511442*/;
  var webpackChunkIdentifier = require("webpack-chunk-identifier") /*id: 122172*/;
  var constantStringExport_2 = require("constant-string-export_2") /*id: 399771*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var sxEnhancedReactCreateElement = require("sx-enhanced-react-create-element") /*id: 636291*/;
  var d = "u1xi5sbv";
  var p = {
    props: {
      fontSize: "u1ymg821",
      lineHeight: "uhxuey4",
      fontWeight: d
    }
  };
  p.alias = "ud-typography-title-0";
  var v = {
    props: {
      fontSize: require("string-constant") /*id: 900998*/.stringConstant,
      lineHeight: "u1dq16xj",
      fontWeight: d
    }
  };
  v.alias = "ud-typography-title-1";
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var fontWeightAliasModule = require("font-weight-alias-module") /*id: 939210*/;
  var b = composeClassNamesUtil.composeClassNames.compose(fontWeightAliasModule.fontWeightAlias, {
    props: {
      fontSize: "u138hera",
      lineHeight: "u1g8z9ip"
    }
  });
  b.alias = "ud-typography-title-2";
  var y = composeClassNamesUtil.composeClassNames.compose(fontWeightAliasModule.fontWeightAlias, {
    props: {
      fontSize: "u1nvodm3",
      lineHeight: "u1hez149"
    }
  });
  y.alias = "ud-typography-title-3";
  var udTypographyTitle4 = require("ud-typography-title-4") /*id: 312297*/;
  var udTypographyTitle5Style = require("ud-typography-title-5-style") /*id: 299639*/;
  var udTypographyHeadlineStyle = require("ud-typography-headline-style") /*id: 109181*/;
  var udTypographyCaptionClass = require("ud-typography-caption-class") /*id: 387189*/;
  var docxTypographyStyles = require("docx-typography-styles") /*id: 293391*/;
  var udTypographyBody0Style = require("ud-typography-body-0-style") /*id: 307052*/;
  var typographyBody2ClassComposer = require("typography-body-2-class-composer") /*id: 50795*/;
  var docxTextStyleConfig = require("docx-text-style-config") /*id: 495569*/;
  var staticConstantValue = require("static-constant-value") /*id: 50172*/;
  var docxToolboxConstant_2 = require("docx-toolbox-constant_2") /*id: 542506*/;
  var flowDocPreviewConstant = require("flow-doc-preview-constant") /*id: 881498*/;
  var I = {
    props: {
      overflow: staticConstantValue.constantValue,
      textOverflow: docxToolboxConstant_2.constantValue,
      display: "udz62fk",
      WebkitBoxOrient: "u6rw91u",
      whiteSpace: flowDocPreviewConstant.componentId,
      wordBreak: "uktmkt9"
    }
  };
  var forwardRefModule = require("forward-ref-module") /*id: 829710*/;
  var textOverflowPopperSidecarHook = require("text-overflow-popper-sidecar-hook") /*id: 438136*/;
  var domElementUtils = require("dom-element-utils") /*id: 431931*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var mergePropsWithClassnameStyleSx = require("merge-props-with-classname-style-sx") /*id: 473517*/;
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var _ = ["as", "variant", "lineClamp", "disabled", "tooltipProps", "alignment", "italic"];
  var T = {
    title0: p,
    title1: v,
    title2: b,
    title3: y,
    title4: udTypographyTitle4.udTypographyTitle4,
    title5: udTypographyTitle5Style.udTypographyTitle5,
    headline: udTypographyHeadlineStyle.udTypographyHeadline,
    caption0: udTypographyCaptionClass.udTypographyCaption,
    caption1: docxTypographyStyles.captionStyleBase,
    caption1Hack: docxTypographyStyles.captionStyleZoom,
    body0: udTypographyBody0Style.udTypographyBody0,
    body2: typographyBody2ClassComposer.typographyBody2Class
  };
  var z = forwardRefModule.forwardRef(function (e, t) {
    var n = e.as;
    var d = n === undefined ? "span" : n;
    var p = e.variant;
    var v = p === undefined ? "body0" : p;
    var m = e.lineClamp;
    var h = e.disabled;
    var b = h !== undefined && h;
    var y = e.tooltipProps;
    var C = e.alignment;
    var g = e.italic;
    var Z = g !== undefined && g;
    var E = objectOmitHelper_1.omitWithSymbols(e, _);
    var x = E.children;
    var w = !domElementWindowUtils.isNotNullOrUndefined(m);
    var k = !w && m <= 1;
    var M = !k && !w;
    var S = reactContextUtilsHooks.useComponentClass("text");
    var P = textOverflowPopperSidecarHook.useTextOverflowPopperSidecar();
    var K = mergePropsWithClassnameStyleSx.mergeProps(E, {
      className: S(),
      sx: reactCoreLibraryReexport.useMemo(function () {
        return [{
          props: {
            wordWrap: "u14wgoeq",
            overflowWrap: constantStringExport_2.constantId
          }
        }, v !== "plain" && T[v], d === "span" && k && {
          props: {
            display: webpackChunkIdentifier.chunkIdentifier
          }
        }, k ? docxTextStyleConfig.getTextStyleConfig : M ? I : undefined, C && {
          start: {
            props: {
              textAlign: "u1ol6024"
            }
          },
          center: {
            props: {
              textAlign: flowDocPreviewComponent.previewToken
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
        }[C], Z && {
          props: {
            fontStyle: "u1kne0ek"
          }
        }, b && {
          props: {
            color: "umg9lr1",
            cursor: uniqueIdentifierConstant.uniqueId,
            userSelect: "u1aoe029"
          }
        }];
      }, [d, C, b, Z, M, k, v]),
      style: {
        WebkitLineClamp: M ? m : undefined
      }
    });
    var z = sxEnhancedReactCreateElement.createElementWithSX(d, objectAssignUtil.objectAssign({
      ref: t
    }, K));
    if (w) {
      return z;
    }
    var V = k ? domElementUtils.hasHorizontalScroll : domElementUtils.hasVerticalScroll;
    return sxEnhancedReactCreateElement.createElementWithSX(P, objectPropertyAssign.assignObject({
      title: x,
      checkOverflow: V
    }, y), z);
  });
  require.d(exports, {
    TypographyText: function () {
      return z;
    }
  });
}