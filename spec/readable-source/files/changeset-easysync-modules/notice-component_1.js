// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'NoticeComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 854613
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var errorFilledIcon = require("error-filled-icon") /*id: 205797*/;
  var closeOutlinedIcon = require("close-outlined-icon") /*id: 96742*/;
  var infoFilledIcon = require("info-filled-icon") /*id: 963341*/;
  var warningFilledIcon = require("warning-filled-icon") /*id: 681337*/;
  var succeedFilledIcon = require("succeed-filled-icon") /*id: 836516*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useControlledState = require("use-controlled-state") /*id: 80507*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var svgSpinLoadingComponent = require("svg-spin-loading-component") /*id: 789464*/;
  var udTypographyHeadlineStyle = require("ud-typography-headline-style") /*id: 109181*/;
  require("no-operation-module-wrapper") /*id: 438358*/;
  var m = ["className", "closable", "align", "type", "theme", "message", "description", "action", "visible", "banner", "onClose", "closeText", "afterClose", "showIcon", "role", "icon", "prefixCls", "maxLine"];
  var b = {
    success: succeedFilledIcon.SucceedFilledIcon,
    warning: warningFilledIcon.WarningFilledIcon,
    error: errorFilledIcon.ErrorFilledIcon,
    loading: svgSpinLoadingComponent.SvgSpinLoading,
    info: infoFilledIcon.InfoFilledIcon
  };
  var E = reactCoreLibraryReexport.forwardRef(function (t, e) {
    var n = t.className;
    var s = t.closable;
    var u = s !== undefined && s;
    var c = t.align;
    var l = t.type;
    var g = l === undefined ? "info" : l;
    var E = t.theme;
    var w = t.message;
    var S = t.description;
    var T = t.action;
    var I = t.visible;
    var A = t.banner;
    var C = t.onClose;
    var M = t.closeText;
    t.afterClose;
    var k = t.showIcon;
    var O = t.role;
    var R = t.icon;
    var D = t.prefixCls;
    var N = t.maxLine;
    var x = objectOmitHelper_1.omitWithSymbols(t, m);
    var P = reactContextUtilsHooks.useComponentClass("notice", D);
    var B = useControlledState.useControlledState(true, I);
    var L = iterableToArrayUtil_1_1.iterableToArray(B, 2);
    var F = L[0];
    var j = L[1];
    var U = reactCoreLibraryReexport.useRef(null);
    var z = w && !S;
    var H = null;
    if ((k === undefined || k) && (R && (H = reactCoreLibraryReexport.createElement("div", {
      className: P("__statusIcon")
    }, R)), !H)) {
      var V = b[g] || b.info;
      H = reactCoreLibraryReexport.createElement(V, {
        className: P("__statusIcon")
      });
    }
    var Z = !!M || u;
    var q = reactCoreLibraryReexport.useCallback(function (t) {
      j(false);
      if (C) {
        C(t);
      }
    }, [j, C]);
    var W = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, M ? reactCoreLibraryReexport.createElement("span", {
      className: P("__close"),
      onClick: q
    }, M) : reactCoreLibraryReexport.createElement(universalButtonWrapper.UniversalButton, {
      className: P("__close"),
      icon: reactCoreLibraryReexport.createElement(closeOutlinedIcon.CloseOutlinedIcon, null),
      size: "small",
      type: "icon",
      onClick: q
    }));
    if (F) {
      return reactCoreLibraryReexport.createElement("div", objectAssignUtil.objectAssign({
        ref: e,
        className: conditionalClassnames.default(P(), P(`-${g === "loading" ? "info" : g}`), (c === undefined ? "left" : c) === "center" && z && P("-align-center"), u && P("-closable"), A !== undefined && A && P("-banner"), H && P("-showIcon"), T && P("-has-action"), w && S && P("-has-title"), P(`--${E === undefined ? "filled" : E}`), n),
        role: O === undefined ? "alert" : O
      }, x), H, reactCoreLibraryReexport.createElement("div", {
        className: conditionalClassnames.default(P("__main"), z && P("__main--no-title"))
      }, w && S && reactCoreLibraryReexport.createElement("div", {
        className: P("__title")
      }, reactCoreLibraryReexport.createElement("div", {
        className: conditionalClassnames.default(P("__title__content"), composeClassNamesUtil.composeClassNames(udTypographyHeadlineStyle.udTypographyHeadline))
      }, w), Z && W), (S || z) && reactCoreLibraryReexport.createElement("div", {
        ref: U,
        className: P("__description")
      }, reactCoreLibraryReexport.createElement("div", {
        className: P("__description-content"),
        style: N ? {
          WebkitLineClamp: N
        } : undefined
      }, S || w), T && reactCoreLibraryReexport.createElement("div", {
        className: P("__description-action")
      }, T)), Z && z && W));
    } else {
      return null;
    }
  });
  require.d(exports, {
    NoticeComponent: function () {
      return E;
    }
  });
}