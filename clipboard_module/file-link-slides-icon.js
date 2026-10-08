// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'FileLinkSlidesIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 287809
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var c = ["prefixId"];
  function s(e) {
    e.prefixId;
    var n = objectOmitHelper_1.omitWithSymbols(e, c);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, n), reactCoreLibraryReexport.createElement("path", {
      d: "M6.227 12.605c.286 2.917 3.156 5.336 6.082 5.197 3.646-.175 5.62-3.48 5.51-5.936a.456.456 0 0 0-.461-.425h-4.901V6.65a.453.453 0 0 0-.443-.462c-3.166-.046-6.147 2.733-5.787 6.417Zm4.772 3.12a3.794 3.794 0 0 1-2.705-2.677c-.544-2.059.591-3.942 2.317-4.625v4.403c0 .259.203.462.461.462h4.541c-.636 1.782-2.528 2.963-4.614 2.428v.01Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M14.377 6.207c1.68.498 2.934 1.772 3.396 3.314h.01a.486.486 0 0 1-.462.628h-3.572v-3.49a.48.48 0 0 1 .628-.452Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M20.413 2.514A5.539 5.539 0 0 0 16.592 1H2.997A.993.993 0 0 0 2 1.997v15.824c0 1.375.572 2.686 1.587 3.665C4.603 22.465 5.977 23 7.408 23h13.595a.993.993 0 0 0 .997-.997V6.179c0-1.375-.572-2.686-1.587-3.665Zm-.416 18.483H7.408c-.932 0-1.809-.351-2.436-.96a3.076 3.076 0 0 1-.97-2.216V2.994h12.59c.932 0 1.809.35 2.436.96.628.6.97 1.404.97 2.216v14.827Z",
      fill: "currentColor"
    }));
  }
  var u = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: s
    }, e, {
      ref: n,
      svgProps: {
        "data-icon": "FileLinkSlidesOutlined"
      }
    }));
  });
  require.d(exports, {
    FileLinkSlidesIcon: function () {
      return u;
    }
  });
}