// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'EmptyInlineSpacer'
// - Renamed export 'J' to 'FlexLayoutWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 486166
         */
module.exports = function (module, exports, require) {
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var staticIdentifierModule = require("static-identifier-module") /*id: 788225*/;
  var uniqueIdentifier = require("unique-identifier") /*id: 461002*/;
  var staticConstantValue = require("static-constant-value") /*id: 50172*/;
  var webpackChunkIdentifier = require("webpack-chunk-identifier") /*id: 122172*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var sxEnhancedReactCreateElement = require("sx-enhanced-react-create-element") /*id: 636291*/;
  var composeLayoutDisplayProps = require("compose-layout-display-props") /*id: 669222*/;
  var forwardRefModule = require("forward-ref-module") /*id: 829710*/;
  var mergePropsWithClassnameStyleSx = require("merge-props-with-classname-style-sx") /*id: 473517*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var Z = ["beforeProps", "children", "className", "sx"];
  var g = ["className", "children", "sx"];
  var x = forwardRefModule.forwardRef_1(function (e, n) {
    return sxEnhancedReactCreateElement.createElementWithSX("span", objectAssignUtil.objectAssign({
      ref: n
    }, mergePropsWithClassnameStyleSx.mergeProps(e, {
      className: reactContextUtilsHooks.useComponentClass("empty-inline-element")(""),
      sx: [{
        props: {
          width: "uk1hvvd",
          overflow: staticConstantValue.constantValue,
          display: webpackChunkIdentifier.chunkIdentifier
        }
      }]
    })), "\xA0");
  });
  var E = reactCoreLibraryReexport.forwardRef(function (e, n) {
    var t = e.beforeProps;
    var c = e.children;
    var l = e.className;
    var d = e.sx;
    var m = objectOmitHelper_1.omitWithSymbols(e, Z);
    var h = function () {
      if (!t) {
        return null;
      }
      var e = t.className;
      var n = t.children;
      var c = t.sx;
      var l = objectOmitHelper_1.omitWithSymbols(t, g);
      return sxEnhancedReactCreateElement.createElementWithSX("div", objectAssignUtil.objectAssign({
        className: conditionalClassnames.default(e, composeClassNamesUtil.composeClassNames.apply(undefined, [composeLayoutDisplayProps.composedLayoutDisplayProps, {
          props: {
            alignItems: staticIdentifierModule.staticIdentifier,
            flexGrow: "uf1p7uf",
            flexShrink: uniqueIdentifier.uniqueId,
            flexBasis: "ug95lij"
          }
        }].concat(arrayIterableSliceUtil.sliceArrayIterable(c === undefined ? [] : c))))
      }, l), n, sxEnhancedReactCreateElement.createElementWithSX(x, null));
    }();
    return sxEnhancedReactCreateElement.createElementWithSX("div", objectAssignUtil.objectAssign({
      className: conditionalClassnames.default(l, composeClassNamesUtil.composeClassNames.apply(undefined, [composeLayoutDisplayProps.composedLayoutDisplayProps, {
        props: {
          alignItems: staticIdentifierModule.staticIdentifier
        }
      }].concat(arrayIterableSliceUtil.sliceArrayIterable(d === undefined ? [] : d)))),
      ref: n
    }, m), h, c, sxEnhancedReactCreateElement.createElementWithSX(x, null));
  });
  require.d(exports, {
    EmptyInlineSpacer: function () {
      return x;
    },
    FlexLayoutWrapper: function () {
      return E;
    }
  });
}