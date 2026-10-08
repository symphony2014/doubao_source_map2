// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'Popover'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 22007.b9e6c706.js
         * chunkId: 22007
         * moduleId: 539955
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var staticIdentifierModule = require("static-identifier-module") /*id: 788225*/;
  var moduleIdentifier = require("module-identifier") /*id: 615445*/;
  var docxToolboxConstant_3 = require("docx-toolbox-constant_3") /*id: 661772*/;
  var docxToolboxConstant = require("docx-toolbox-constant") /*id: 400452*/;
  var docxToolboxConstant_1 = require("docx-toolbox-constant_1") /*id: 522456*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var composeLayoutDisplayProps = require("compose-layout-display-props") /*id: 669222*/;
  var udTypographyHeadlineStyle = require("ud-typography-headline-style") /*id: 109181*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var infoFilledIcon = require("info-filled-icon") /*id: 963341*/;
  var succeedFilledIcon = require("succeed-filled-icon") /*id: 836516*/;
  var warningFilledIcon = require("warning-filled-icon") /*id: 681337*/;
  var errorFilledIcon = require("error-filled-icon") /*id: 205797*/;
  var tooltipWrapperComponent_1 = require("tooltip-wrapper-component_1") /*id: 943532*/;
  function b(e) {
    if (e) {
      if (typeof e == "function") {
        return e();
      } else {
        return e;
      }
    } else {
      return null;
    }
  }
  var reactLayoutComponents = require("react-layout-components") /*id: 486166*/;
  require("module-no-op") /*id: 116324*/;
  var L = ["mode", "prefixCls", "title", "content", "overlayClassName", "icon", "mouseLeaveDelay"];
  var w = {
    success: succeedFilledIcon.SucceedFilledIcon,
    warning: warningFilledIcon.WarningFilledIcon,
    info: infoFilledIcon.InfoFilledIcon,
    error: errorFilledIcon.ErrorFilledIcon
  };
  var I = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.mode;
    var v = n === undefined ? "normal" : n;
    var m = e.prefixCls;
    var C = e.title;
    var y = e.content;
    var I = e.overlayClassName;
    var k = e.icon;
    var M = e.mouseLeaveDelay;
    var R = objectOmitHelper_1.omitWithSymbols(e, L);
    var T = reactContextUtilsHooks.useComponentClass("popover", m);
    var x = T("__overlay-content");
    var Z = reactCoreLibraryReexport.useMemo(function () {
      if (k) {
        var e = {
          props: {
            paddingRight: docxToolboxConstant_1.toolboxConstant
          }
        };
        var t = {
          props: {
            fontSize: moduleIdentifier.moduleIdentifier,
            lineHeight: docxToolboxConstant_3.identifier,
            alignSelf: docxToolboxConstant.docxToolboxKey
          }
        };
        if (typeof k == "string" && (k === "success" || k === "warning" || k === "info" || k === "error")) {
          var n = w[k];
          return {
            className: `${T()}-icon-${k}`,
            sx: [e],
            children: reactCoreLibraryReexport.createElement(n, {
              className: composeClassNamesUtil.composeClassNames(t)
            })
          };
        }
        return {
          className: `${T()}-icon-customer`,
          sx: [e],
          children: reactCoreLibraryReexport.createElement("span", {
            className: conditionalClassnames.default(`${T()}-icon-customer-wrapper`, composeClassNamesUtil.composeClassNames(t))
          }, k)
        };
      }
    }, [T, k]);
    var z = reactCoreLibraryReexport.useMemo(function () {
      if (C || y) {
        if (v === "pure") {
          return y && reactCoreLibraryReexport.createElement("div", {
            className: x
          }, b(y));
        } else {
          return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, C && reactCoreLibraryReexport.createElement(reactLayoutComponents.FlexLayoutWrapper, {
            className: T("__overlay-title"),
            sx: [composeLayoutDisplayProps.composedLayoutDisplayProps, udTypographyHeadlineStyle.udTypographyHeadline, {
              props: {
                alignItems: staticIdentifierModule.staticIdentifier
              }
            }],
            beforeProps: Z
          }, b(C)), y && reactCoreLibraryReexport.createElement("div", {
            className: x
          }, b(y)));
        }
      } else {
        return null;
      }
    }, [y, x, T, v, C, Z]);
    return reactCoreLibraryReexport.createElement(tooltipWrapperComponent_1.TooltipWrapper, objectAssignUtil.objectAssign({
      ref: t,
      prefixCls: T(),
      overlay: z,
      overlayClassName: conditionalClassnames.default(I, T(`--mode-${v}`)),
      mouseLeaveDelay: M === undefined ? 100 : M,
      arrowHasStroke: true
    }, R));
  });
  require.d(exports, {
    Popover: function () {
      return I;
    }
  });
}