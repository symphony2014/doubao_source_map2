// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'urlRegexConstants'
// - Resolved require(631514) to 'url-regex-constants'
// - Renamed variable 'i' to 'linkTransformQueueTypes'
// - Resolved require(129678) to 'link-transform-queue-types'
// - Renamed variable 'r' to 'docxSyncedBlockUtils'
// - Resolved require(791402) to 'docx-synced-block-utils'
// - Renamed variable 'l' to 'clientsideLinkExports'
// - Resolved require(751953) to 'clientside-link-exports'
// - Renamed variable 'a' to 'pasteLinkPanelHandler'
// - Resolved require(633051) to 'paste-link-panel-handler'
// - Updated imported property 'Kf' to 'isSyncedReference' (module 791402)
// - Updated imported property 's4' to 'linkId' (module 751953)
// - Updated imported property 'd' to 'showPasteLinkPanel' (module 633051)
// - Updated imported property 'Dh' to 'linkEventTypes' (module 129678)
// - Updated imported property 'ZR' to 'blockFeatureTypes' (module 129678)
// - Updated imported property 'SP' to 'panelFeatureTypes' (module 129678)
// - Updated imported property 'Yh' to 'featureTypeMap' (module 129678)
// - Updated imported property 'RI' to 'strictHttpRegex' (module 631514)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_link-transform-queue.7e909584.js
         * chunkId: 1321
         * moduleId: 993923
         */
module.exports = function (module, exports, require) {
  var urlRegexConstants = require("url-regex-constants") /*id: 631514*/;
  var linkTransformQueueTypes = require("link-transform-queue-types") /*id: 129678*/;
  var docxSyncedBlockUtils = require("docx-synced-block-utils") /*id: 791402*/;
  var clientsideLinkExports = require("clientside-link-exports") /*id: 751953*/;
  var pasteLinkPanelHandler = require("paste-link-panel-handler") /*id: 633051*/;
  async function s(e) {
    let {
      option: t,
      block: n,
      toBlock: o
    } = e;
    let i = docxSyncedBlockUtils.isSyncedReference(n.model, n.blockManager);
    let {
      tempId: s,
      value: c,
      revision: d,
      toBookmark: u,
      toIframe: h,
      toISVBlock: p,
      toJiraFilter: k,
      toCalendarBlock: f
    } = t;
    if (o) {
      let {
        zoneState: e
      } = n.model;
      if (!e.getEntities([[clientsideLinkExports.linkId, s]]).length) {
        return false;
      }
      await pasteLinkPanelHandler.showPasteLinkPanel({
        text: c,
        block: n,
        linkId: s,
        revision: d,
        boundary: n.editorAPI.config.get("pageMainBoundary") || n.boundary,
        toBookmark: u,
        toIframe: h,
        toISVBlock: p,
        toJiraFilter: k && !i,
        toCalendarBlock: f,
        afterShowPanel: () => {}
      });
    }
    return true;
  }
  let c = async e => {
    let {
      option: t
    } = e;
    let {
      toBookmark: n,
      toCalendarBlock: o
    } = t;
    t.toBookmark = n && !o;
  };
  async function d(e) {
    let {
      option: t,
      block: n
    } = e;
    let {
      toBookmark: o
    } = t;
    return await s({
      option: t,
      block: n,
      toBlock: o
    });
  }
  var u = [{
    hookConfigList: [{
      hookName: linkTransformQueueTypes.linkEventTypes.preProcessLink,
      hookCallback: function (e) {
        let {
          option: t,
          isSingleLink: n,
          linkValue: i
        } = e;
        let {
          toISVBlock: r,
          toTaskList: l,
          toTask: a
        } = t;
        let s = n && urlRegexConstants.strictHttpRegex.test(i) && !r && !l && !a;
        t.toBookmark = s;
        return t;
      },
      options: {
        priority: linkTransformQueueTypes.blockFeatureTypes.BOOKMARK
      }
    }, {
      hookName: linkTransformQueueTypes.linkEventTypes.postProcessLink,
      hookCallback: c,
      options: {
        priority: linkTransformQueueTypes.panelFeatureTypes.BOOKMARK
      }
    }, {
      hookName: linkTransformQueueTypes.linkEventTypes.linkToViewHandler,
      hookCallback: d,
      options: {
        priority: linkTransformQueueTypes.featureTypeMap.BOOKMARK
      }
    }]
  }];
  require.r(exports);
  require.d(exports, {
    default: function () {
      return u;
    }
  });
}