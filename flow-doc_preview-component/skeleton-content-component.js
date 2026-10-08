// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'tC' to 'SkeletonContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 101290
         */
module.exports = function (module, exports, require) {
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  require("module-no-op") /*id: 116324*/;
  function c(e) {
    var n = e.className;
    var i = e.typeName;
    var o = e.style;
    var c = reactContextUtilsHooks.useComponentClass("skeleton__item");
    return reactCoreLibraryReexport.createElement("div", {
      className: conditionalClassnames.default([c(), c(`-${i}`), n]),
      style: o
    }, reactCoreLibraryReexport.createElement("div", {
      className: c("__animation-layer")
    }));
  }
  function s(e) {
    var n = e.className;
    var i = e.style;
    var r = e.width;
    var l = e.height;
    var s = throttledDeepCloneUtil.throttledDeepClone(i, {
      width: r,
      height: l
    });
    return reactCoreLibraryReexport.createElement(c, {
      typeName: "content",
      className: n,
      style: s
    });
  }
  require.d(exports, {
    SkeletonContent: function () {
      return s;
    }
  });
}