// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'Notice'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 271060
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
  var unifiedButtonComponent = require("unified-button-component") /*id: 488299*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useControlledStateHook_1 = require("use-controlled-state-hook_1") /*id: 837560*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var svgSpinLoadingIcon = require("svg-spin-loading-icon") /*id: 705191*/;
  var composeTypographyHeadlineClass = require("compose-typography-headline-class") /*id: 932304*/;
  require("empty-module-export-shim-wrapper") /*id: 306492*/;
  var _ = ["className", "closable", "align", "type", "theme", "message", "description", "action", "visible", "banner", "onClose", "closeText", "afterClose", "showIcon", "role", "icon", "prefixCls", "maxLine"];
  var w = {
    success: succeedFilledIcon.SucceedFilledIcon,
    warning: warningFilledIcon.WarningFilledIcon,
    error: errorFilledIcon.ErrorFilledIcon,
    loading: svgSpinLoadingIcon.SpinLoadingIcon,
    info: infoFilledIcon.InfoFilledIcon
  };
  var x = reactCoreLibraryReexport.forwardRef(function (e, n) {
    var r = e.className;
    var l = e.closable;
    var c = l !== undefined && l;
    var u = e.align;
    var d = e.type;
    var y = d === undefined ? "info" : d;
    var x = e.theme;
    var k = e.message;
    var $ = e.description;
    var E = e.action;
    var S = e.visible;
    var R = e.banner;
    var Z = e.onClose;
    var T = e.closeText;
    e.afterClose;
    var C = e.showIcon;
    var N = e.role;
    var M = e.icon;
    var j = e.prefixCls;
    var P = e.maxLine;
    var W = objectOmitHelper_1.omitWithSymbols(e, _);
    var O = uiConfigContextHooks.useClassName("notice", j);
    var F = useControlledStateHook_1.useControlledState(true, S);
    var I = iterableToArrayUtil_1_1.iterableToArray(F, 2);
    var D = I[0];
    var B = I[1];
    var z = reactCoreLibraryReexport.useRef(null);
    var L = k && !$;
    var A = null;
    if ((C === undefined || C) && (M && (A = reactCoreLibraryReexport.createElement("div", {
      className: O("__statusIcon")
    }, M)), !A)) {
      var H = w[y] || w.info;
      A = reactCoreLibraryReexport.createElement(H, {
        className: O("__statusIcon")
      });
    }
    var J = !!T || c;
    var X = reactCoreLibraryReexport.useCallback(function (e) {
      B(false);
      if (Z) {
        Z(e);
      }
    }, [B, Z]);
    var K = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, T ? reactCoreLibraryReexport.createElement("span", {
      className: O("__close"),
      onClick: X
    }, T) : reactCoreLibraryReexport.createElement(unifiedButtonComponent.UnifiedButton, {
      className: O("__close"),
      icon: reactCoreLibraryReexport.createElement(closeOutlinedIcon.CloseOutlinedIcon, null),
      size: "small",
      type: "icon",
      onClick: X
    }));
    if (D) {
      return reactCoreLibraryReexport.createElement("div", objectAssignUtil.objectAssign({
        ref: n,
        className: conditionalClassnames.default(O(), O(`-${y === "loading" ? "info" : y}`), (u === undefined ? "left" : u) === "center" && L && O("-align-center"), c && O("-closable"), R !== undefined && R && O("-banner"), A && O("-showIcon"), E && O("-has-action"), k && $ && O("-has-title"), O(`--${x === undefined ? "filled" : x}`), r),
        role: N === undefined ? "alert" : N
      }, W), A, reactCoreLibraryReexport.createElement("div", {
        className: conditionalClassnames.default(O("__main"), L && O("__main--no-title"))
      }, k && $ && reactCoreLibraryReexport.createElement("div", {
        className: O("__title")
      }, reactCoreLibraryReexport.createElement("div", {
        className: conditionalClassnames.default(O("__title__content"), composeClassNamesUtil.composeClassNames(composeTypographyHeadlineClass.typographyHeadlineClass))
      }, k), J && K), ($ || L) && reactCoreLibraryReexport.createElement("div", {
        ref: z,
        className: O("__description")
      }, reactCoreLibraryReexport.createElement("div", {
        className: O("__description-content"),
        style: P ? {
          WebkitLineClamp: P
        } : undefined
      }, $ || k), E && reactCoreLibraryReexport.createElement("div", {
        className: O("__description-action")
      }, E)), J && L && K));
    } else {
      return null;
    }
  });
  require.d(exports, {
    Notice: function () {
      return x;
    }
  });
}