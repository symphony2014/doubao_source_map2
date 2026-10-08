// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'Breadcrumb'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: box-preview-box-archive.e38f088a.js
         * chunkId: 7174
         * moduleId: 866565
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var moreOutlinedIconComponent = require("more-outlined-icon-component") /*id: 8155*/;
  var rightBoldOutlinedIcon = require("right-bold-outlined-icon") /*id: 971784*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var typographyComponent_2 = require("typography-component_2") /*id: 728302*/;
  require("empty-module-export_4") /*id: 530821*/;
  require("empty-module-shim") /*id: 582176*/;
  require("empty-module-require") /*id: 624515*/;
  require("empty-module-export_8") /*id: 903391*/;
  var h = ["className", "children", "interactive", "maxWidth", "style"];
  var p = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var r = e.className;
    var n = e.children;
    var l = e.interactive;
    var u = e.maxWidth;
    var p = e.style;
    var g = objectOmitHelper_1.omitWithSymbols(e, h);
    var M = uiConfigContextHooks.useClassName("breadcrumb-item");
    var m = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, p), {}, {
      maxWidth: u
    });
    return reactCoreLibraryReexport.createElement(typographyComponent_2.Typography, objectAssignUtil.objectAssign({
      as: "div",
      className: conditionalClassnames.default(M(), r, (l === undefined || l) && M("-interactive")),
      ref: t,
      style: m,
      lineClamp: 1
    }, g), n);
  });
  var archiveBoxPopover = require("archive-box-popover") /*id: 102490*/;
  var responsiveOverflowListComponent = require("responsive-overflow-list-component") /*id: 971996*/;
  var reactChildrenFlatten = require("react-children-flatten") /*id: 96569*/;
  var y = ["className", "children", "maxCount", "separator"];
  var v = Object.assign(reactCoreLibraryReexport.forwardRef(function (e, t) {
    var r = e.className;
    var f = e.children;
    var d = e.maxCount;
    var h = d === undefined ? Infinity : d;
    var v = e.separator;
    var I = v === undefined ? reactCoreLibraryReexport.createElement(rightBoldOutlinedIcon.RightBoldOutlined, null) : v;
    var N = objectOmitHelper_1.omitWithSymbols(e, y);
    var x = uiConfigContextHooks.useClassName("breadcrumb");
    var z = reactChildrenFlatten.flattenChildren(f);
    var w = z.pop();
    var S = reactCoreLibraryReexport.createElement("span", {
      className: x("-separator")
    }, I);
    var T = reactCoreLibraryReexport.useState(false);
    var L = iterableToArrayUtil_1_1.iterableToArray(T, 2);
    var j = L[0];
    var D = L[1];
    return reactCoreLibraryReexport.createElement("div", objectAssignUtil.objectAssign({
      className: conditionalClassnames.default(x(), r),
      ref: t
    }, N), reactCoreLibraryReexport.createElement(responsiveOverflowListComponent.ResponsiveOverflowList, {
      restPosition: 1,
      maxCount: typeof h == "number" ? h - 1 : "responsive",
      keys: Array(z.length).fill(0).map(function (e, t) {
        return t;
      }),
      itemRenderer: function (e) {
        return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, z[e], S);
      },
      restRenderer: function (e) {
        return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(archiveBoxPopover.archiveBoxPopover, {
          mode: "pure",
          visible: j,
          content: reactCoreLibraryReexport.createElement("div", {
            onClick: function () {
              return D(false);
            },
            className: x("__popover__content")
          }, e.map(function (t, r) {
            return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
              key: t
            }, z[t], r !== e.length - 1 && S);
          })),
          placement: "bottomLeft",
          hideArrow: true,
          onVisibleChange: D
        }, reactCoreLibraryReexport.createElement(p, {
          className: x("-ellipses")
        }, reactCoreLibraryReexport.createElement(moreOutlinedIconComponent.MoreOutlinedIcon, null))), S);
      },
      suffixRenderer: function () {
        if (w) {
          return reactCoreLibraryReexport.cloneElement(w, {
            interactive: false
          });
        } else {
          return null;
        }
      }
    }));
  }), {
    Item: p
  });
  require.d(exports, {
    Breadcrumb: function () {
      return v;
    }
  });
}