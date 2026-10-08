// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'archiveBoxPopover'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: box-preview-box-archive.e38f088a.js
         * chunkId: 7174
         * moduleId: 102490
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var udPickerPanelConst_1 = require("ud-picker-panel-const_1") /*id: 764540*/;
  var udPickerPanelIdConst = require("ud-picker-panel-id-const") /*id: 231767*/;
  var constantStringUf9gv4p = require("constant-string-uf9gv4p") /*id: 523646*/;
  var udPickerPanelConstant_1 = require("ud-picker-panel-constant_1") /*id: 478201*/;
  var constantStringExport_4 = require("constant-string-export_4") /*id: 987822*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var udPickerPanelClassnameComposer = require("ud-picker-panel-classname-composer") /*id: 492869*/;
  var composeTypographyHeadlineClass = require("compose-typography-headline-class") /*id: 932304*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var infoFilledIcon = require("info-filled-icon") /*id: 963341*/;
  var succeedFilledIcon = require("succeed-filled-icon") /*id: 836516*/;
  var warningFilledIcon = require("warning-filled-icon") /*id: 681337*/;
  var errorFilledIcon = require("error-filled-icon") /*id: 205797*/;
  var tooltipComponentModule = require("tooltip-component-module") /*id: 91247*/;
  function N(e) {
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
  var uiInlineLayoutComponents = require("ui-inline-layout-components") /*id: 135614*/;
  require("empty-module-require") /*id: 624515*/;
  var z = ["mode", "prefixCls", "title", "content", "overlayClassName", "icon", "mouseLeaveDelay"];
  var w = {
    success: succeedFilledIcon.SucceedFilledIcon,
    warning: warningFilledIcon.WarningFilledIcon,
    info: infoFilledIcon.InfoFilledIcon,
    error: errorFilledIcon.ErrorFilledIcon
  };
  var S = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var r = e.mode;
    var M = r === undefined ? "normal" : r;
    var m = e.prefixCls;
    var y = e.title;
    var v = e.content;
    var S = e.overlayClassName;
    var T = e.icon;
    var L = e.mouseLeaveDelay;
    var j = objectOmitHelper_1.omitWithSymbols(e, z);
    var D = uiConfigContextHooks.useClassName("popover", m);
    var _ = D("__overlay-content");
    var A = reactCoreLibraryReexport.useMemo(function () {
      if (T) {
        var e = {
          props: {
            paddingRight: constantStringExport_4.constantString
          }
        };
        var t = {
          props: {
            fontSize: udPickerPanelIdConst.pickerPanelId,
            lineHeight: constantStringUf9gv4p.constantString,
            alignSelf: udPickerPanelConstant_1.pickerPanelId
          }
        };
        if (typeof T == "string" && (T === "success" || T === "warning" || T === "info" || T === "error")) {
          var r = w[T];
          return {
            className: `${D()}-icon-${T}`,
            sx: [e],
            children: reactCoreLibraryReexport.createElement(r, {
              className: composeClassNamesUtil.composeClassNames(t)
            })
          };
        }
        return {
          className: `${D()}-icon-customer`,
          sx: [e],
          children: reactCoreLibraryReexport.createElement("span", {
            className: conditionalClassnames.default(`${D()}-icon-customer-wrapper`, composeClassNamesUtil.composeClassNames(t))
          }, T)
        };
      }
    }, [D, T]);
    var b = reactCoreLibraryReexport.useMemo(function () {
      if (y || v) {
        if (M === "pure") {
          return v && reactCoreLibraryReexport.createElement("div", {
            className: _
          }, N(v));
        } else {
          return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, y && reactCoreLibraryReexport.createElement(uiInlineLayoutComponents.FlexLayoutWrapper, {
            className: D("__overlay-title"),
            sx: [udPickerPanelClassnameComposer.pickerPanelClassName, composeTypographyHeadlineClass.typographyHeadlineClass, {
              props: {
                alignItems: udPickerPanelConst_1.pickerPanelId
              }
            }],
            beforeProps: A
          }, N(y)), v && reactCoreLibraryReexport.createElement("div", {
            className: _
          }, N(v)));
        }
      } else {
        return null;
      }
    }, [v, _, D, M, y, A]);
    return reactCoreLibraryReexport.createElement(tooltipComponentModule.TooltipComponent, objectAssignUtil.objectAssign({
      ref: t,
      prefixCls: D(),
      overlay: b,
      overlayClassName: conditionalClassnames.default(S, D(`--mode-${M}`)),
      mouseLeaveDelay: L === undefined ? 100 : L,
      arrowHasStroke: true
    }, j));
  });
  require.d(exports, {
    archiveBoxPopover: function () {
      return S;
    }
  });
}