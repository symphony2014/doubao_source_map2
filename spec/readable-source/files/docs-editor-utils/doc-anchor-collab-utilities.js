// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cb' to 'isAnyAnchorKey'
// - Renamed export 'Lg' to 'createAnchorKey'
// - Renamed export 'MK' to 'isTextCardAnchorKey'
// - Renamed export 'UO' to 'getAnchorMode'
// - Renamed export 'W0' to 'isPlatformSupported'
// - Renamed export '_j' to 'compareBlockSelection'
// - Renamed export 'jH' to 'isRangeAnchorKey'
// - Renamed export 'lS' to 'isCollabAvailable'
// - Renamed export 'oT' to 'cleanupTextSelection'
// - Renamed export 'pz' to 'checkVersionAndCollectEvents'
// - Renamed export 'vo' to 'getSelectedBlockInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 762610
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var anchorConstantsConfig = require("anchor-constants-config") /*id: 302634*/;
  function d(e, n = anchorConstantsConfig.anchorType.normalAnchor) {
    let r = anchorConstantsConfig.anchorPrefix.RANGE_ANCHOR_KEY_PREFIX;
    r = n === anchorConstantsConfig.anchorType.textCardAnchor ? anchorConstantsConfig.anchorPrefix.TEXT_CARD_ANCHOR_KEY_PREFIX : anchorConstantsConfig.anchorPrefix.RANGE_ANCHOR_KEY_PREFIX;
    return `${r}-${e}`;
  }
  function f(e) {
    return e.startsWith(`${anchorConstantsConfig.anchorPrefix.RANGE_ANCHOR_KEY_PREFIX}-`);
  }
  function h(e) {
    return !!(e == null ? undefined : e.startsWith(`${anchorConstantsConfig.anchorPrefix.TEXT_CARD_ANCHOR_KEY_PREFIX}-`));
  }
  function _(e) {
    return Array.prototype.some.call(Object.values(anchorConstantsConfig.anchorPrefix), n => e.startsWith(`${n}-`));
  }
  function p(e) {
    switch (e.split("-")[0]) {
      case anchorConstantsConfig.anchorPrefix.TEXT_CARD_ANCHOR_KEY_PREFIX:
      case anchorConstantsConfig.anchorPrefix.RANGE_ANCHOR_KEY_PREFIX:
        return anchorConstantsConfig.anchorMode.textRange;
      case anchorConstantsConfig.anchorPrefix.STANDARD_ANCHOR_KEY_PREFIX:
        return anchorConstantsConfig.anchorMode.standard;
      default:
        return anchorConstantsConfig.anchorMode.normal;
    }
  }
  function g() {
    if (docxFeatureFlags.isWEnabled() && docxFeatureFlags.isAlwaysFalseU()) {
      return !userEnvironmentUtils.isAnonymousAccess() && !syncUrlBlockUtils.isSyncingActive();
    } else {
      return !platformDocUtils.pEP() && !userEnvironmentUtils.isAnonymousAccess() && !syncUrlBlockUtils.isSyncingActive();
    }
  }
  function E() {
    return !platformDocUtils.pEP();
  }
  function m(e) {
    let {
      block_id: n,
      reference: r
    } = (e == null ? undefined : e[0]) || {};
    let {
      selected_blocks: o
    } = r || {};
    if (o == null ? undefined : o.length) {
      return [o == null ? undefined : o[0].block_id, n];
    } else {
      return undefined;
    }
  }
  function b(e, n) {
    let r = m(n);
    if (!r) {
      return [false, false];
    }
    let [o, i] = r;
    if (e === i) {
      return [false, true];
    } else if (e === o) {
      return [true, false];
    } else {
      return [false, false];
    }
  }
  function v(e) {
    e.forEach(e => {
      let o = e.selected_text?.src_start_idx;
      let i = e.selected_text?.src_end_idx;
      if (o === 0 && o === i) {
        e.selected_text = null;
      }
    });
  }
  function T(e, n) {
    let r = false;
    e.forEach(e => {
      let {
        block_id: o,
        src_version: i
      } = e;
      if (n.getBlockModelsByRecordId(o)[0]) {
        var l;
        if (((l = n.editorAPI.getService(collabTriggersProvider.collabProvider, {
          optional: true
        })) === null || l === undefined ? undefined : l.getVersion(o)) !== i) {
          r = true;
          docxEventCollector.docEventCollector("ccm_docs_tts_toast_view", {
            toast_type: "text_is_edited"
          });
        }
      } else {
        r = true;
        docxEventCollector.docEventCollector("ccm_docs_tts_toast_view", {
          toast_type: "text_is_deleted"
        });
      }
    });
    return r;
  }
  require.d(exports, {
    isAnyAnchorKey: function () {
      return _;
    },
    createAnchorKey: function () {
      return d;
    },
    isTextCardAnchorKey: function () {
      return h;
    },
    getAnchorMode: function () {
      return p;
    },
    isPlatformSupported: function () {
      return E;
    },
    compareBlockSelection: function () {
      return b;
    },
    isRangeAnchorKey: function () {
      return f;
    },
    isCollabAvailable: function () {
      return g;
    },
    cleanupTextSelection: function () {
      return v;
    },
    checkVersionAndCollectEvents: function () {
      return T;
    },
    getSelectedBlockInfo: function () {
      return m;
    }
  });
}