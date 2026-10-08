// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'createDocMention'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 627577
         */
module.exports = function (module, exports, require) {
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var driveFileTypeConstants_1 = require("drive-file-type-constants_1") /*id: 944521*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var editorZoneRangeUtils = require("editor-zone-range-utils") /*id: 53719*/;
  var inlineComponentFacade = require("inline-component-facade") /*id: 678614*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var toastNotificationManager_1 = require("toast-notification-manager_1") /*id: 737977*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var linkServiceProvider = require("link-service-provider") /*id: 880405*/;
  var docxImageViewerUtils = require("docx-image-viewer-utils") /*id: 200311*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    if (!e) {
      return;
    }
    let l = l => {
      var o;
      let n = (o = e.editorAPI) === null || o === undefined ? undefined : o.getService(linkServiceProvider.linkServiceProvider);
      if (n) {
        let o = docxImageViewerUtils.isTranslated({
          docxRecord: e.recordId
        });
        n.open({
          url: o,
          blockId: e.id,
          isSupportAnchor: true,
          event: l
        });
      }
    };
    toastNotificationManager_1.toastManager.show({
      key: "create-doc-success",
      className: "jump-to-im-toast",
      type: "success",
      content: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "toast-confirm",
        children: [reactJsxRuntimeCoreReexport.jsx("p", {
          className: "toast-text",
          children: t("LarkCCM_Docs_SavedAsSubdoc_Toast")
        }), reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
          className: "toast-button",
          type: "text",
          color: "primary",
          onClick: e => l(e),
          children: t("LarkCCM_Docs_SavedAsSubdoc_View_Button")
        })]
      }),
      duration: 3000
    });
  };
  function v(e, l, o, s = [], p) {
    let {
      token: b,
      url: h,
      title: k,
      fakeInlineComponentId: v
    } = o;
    let g = inlineComponentFacade.createBlockObject(inlineComponentFacade.mentionTypes.DOC, {
      file_type: driveFileTypeConstants_1.FileType.WIKI,
      icon_type: driveFileTypeConstants_1.FileType.DOCX,
      token: b,
      raw_url: h,
      title: k
    });
    e.applyTransaction("phoenix:replaceMention", o => {
      let {
        record: r
      } = e;
      let p = editorRangeUtilities.createRangeWithZone(e.zoneState, [l[0], l[1]]);
      let b = editorTextBlockUtilities.getInheritableAttributes(e, p, s);
      if (v) {
        g.id = v;
        let l = editorZoneRangeUtils.getDeltaRange(e, e => !!e[inlineComponentFacade.componentType] && JSON.parse(e[inlineComponentFacade.componentType]).id === v);
        let u = new contentStructureDelta.ContentDelta({
          zoneId: e.zoneId
        }).retain(l[0]).retain(l[1] - l[0], {
          ...b,
          author: userEnvironmentUtils.getUserInfo().userId,
          [inlineComponentFacade.componentType]: JSON.stringify(g)
        });
        let d = e.zoneState.applyDeltaWithClone(u);
        o.replace(r.id, ["text"], d.toAttributeText());
      } else {
        let a = new contentStructureDelta.ContentDelta({
          zoneId: e.zoneId
        }).retain(l[0]).delete(l[1] - l[0]).insert(" ", {
          ...b,
          author: userEnvironmentUtils.getUserInfo().userId,
          [inlineComponentFacade.componentType]: JSON.stringify(g)
        });
        let u = e.zoneState.applyDeltaWithClone(a);
        o.replace(r.id, ["text"], u.toAttributeText());
      }
    });
    if (p) {
      if (!e.blockManager.layoutManager.isBlockInViewport(e.id)) {
        m(e);
      }
    }
    return {
      ...o,
      componentId: g.id
    };
  }
  require.d(exports, {
    createDocMention: function () {
      return v;
    }
  });
}