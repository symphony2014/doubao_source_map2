// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'EmptyInlineElement'
// - Renamed export 'J' to 'FlexLayoutWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 135614
         */
module.exports = function (module, exports, require) {
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var udPickerPanelConst_1 = require("ud-picker-panel-const_1") /*id: 764540*/;
  var buildIdConstant_5 = require("build-id-constant_5") /*id: 23564*/;
  var udPickerPanelId_3 = require("ud-picker-panel-id_3") /*id: 291591*/;
  var udPickerPanelConst = require("ud-picker-panel-const") /*id: 638691*/;
  var udPickerPanelId_1 = require("ud-picker-panel-id_1") /*id: 109217*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var sxEnhancedReactCreateElement_1 = require("sx-enhanced-react-create-element_1") /*id: 606167*/;
  var udPickerPanelClassnameComposer = require("ud-picker-panel-classname-composer") /*id: 492869*/;
  var forwardRefUtils = require("forward-ref-utils") /*id: 638327*/;
  var mergePropsWithClassnameStyleSx_1 = require("merge-props-with-classname-style-sx_1") /*id: 905758*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var v = ["beforeProps", "children", "className", "sx"];
  var R = ["className", "children", "sx"];
  var T = forwardRefUtils.forwardRef_1(function (e, t) {
    return sxEnhancedReactCreateElement_1.createElementWithSx("span", objectAssignUtil.objectAssign({
      ref: t
    }, mergePropsWithClassnameStyleSx_1.mergeProps(e, {
      className: uiConfigContextHooks.useClassName("empty-inline-element")(""),
      sx: [{
        props: {
          width: "uk1hvvd",
          overflow: udPickerPanelConst.pickerPanelId,
          display: udPickerPanelId_1.pickerPanelId
        }
      }]
    })), "\xA0");
  });
  var g = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.beforeProps;
    var s = e.children;
    var l = e.className;
    var m = e.sx;
    var E = objectOmitHelper_1.omitWithSymbols(e, v);
    var C = function () {
      if (!n) {
        return null;
      }
      var e = n.className;
      var t = n.children;
      var s = n.sx;
      var l = objectOmitHelper_1.omitWithSymbols(n, R);
      return sxEnhancedReactCreateElement_1.createElementWithSx("div", objectAssignUtil.objectAssign({
        className: conditionalClassnames.default(e, composeClassNamesUtil.composeClassNames.apply(undefined, [udPickerPanelClassnameComposer.pickerPanelClassName, {
          props: {
            alignItems: udPickerPanelConst_1.pickerPanelId,
            flexGrow: buildIdConstant_5.buildId,
            flexShrink: udPickerPanelId_3.panelId,
            flexBasis: "ug95lij"
          }
        }].concat(arrayIterableSliceUtil.sliceArrayIterable(s === undefined ? [] : s))))
      }, l), t, sxEnhancedReactCreateElement_1.createElementWithSx(T, null));
    }();
    return sxEnhancedReactCreateElement_1.createElementWithSx("div", objectAssignUtil.objectAssign({
      className: conditionalClassnames.default(l, composeClassNamesUtil.composeClassNames.apply(undefined, [udPickerPanelClassnameComposer.pickerPanelClassName, {
        props: {
          alignItems: udPickerPanelConst_1.pickerPanelId
        }
      }].concat(arrayIterableSliceUtil.sliceArrayIterable(m === undefined ? [] : m)))),
      ref: t
    }, E), C, s, sxEnhancedReactCreateElement_1.createElementWithSx(T, null));
  });
  require.d(exports, {
    EmptyInlineElement: function () {
      return T;
    },
    FlexLayoutWrapper: function () {
      return g;
    }
  });
}