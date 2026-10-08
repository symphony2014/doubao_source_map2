// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Kd' to 'isHeadingBlock'
// - Renamed export 'Kj' to 'countBlocksByType'
// - Renamed export 'QG' to 'validateBlockMap'
// - Renamed export 'R9' to 'isNonDocDomain'
// - Renamed export 'Zg' to 'isOrderedOrHeadingBlock'
// - Renamed export 'e_' to 'isBulletOrderType'
// - Renamed export 'lr' to 'wrapDocxEventCollector'
// - Renamed export 'rL' to 'isTableBlock'
// - Renamed export 'uP' to 'mergeBlockMaps'
// - Renamed export 'zm' to 'getPendingSlicedBlocks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 713166
         */
module.exports = function (module, exports, require) {
  var o;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxEventCollectorWrap = require("docx-event-collector-wrap") /*id: 140253*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docUrlResolver = require("doc-url-resolver") /*id: 199176*/;
  function a(e) {
    let n = [];
    for (let r of e.getAllBlockStructs()) {
      if (r.isDataPending() && r.record.snapshot.sliced && r.record.snapshot.allowFail !== true) {
        n.push(r);
      }
    }
    return n;
  }
  function s(e) {
    let n = {};
    for (let r of e.getAllBlockViews()) {
      let e = `${r.type}_block_count`;
      n[e] = (Number(n[e]) || 0) + 1;
    }
    return n;
  }
  function d(e) {
    return e === docBlockTypeConstants.blockTypeConstants.ORDERED || f(e);
  }
  function f(e) {
    return e.includes("heading");
  }
  function h(e) {
    return docBlockTypeConstants.bulletOrderTypes.includes(e);
  }
  let _ = new Set([docBlockTypeConstants.blockTypeConstants.TABLE]);
  function p(e) {
    return _.has(e);
  }
  let g = ["block_map", "external_mention_url", "mention_page_title", "meta_map", "user_map", "editor_map"];
  function E(e) {
    let n = function (e, n) {
      let r = e.length - 1;
      let o = Object.assign({}, e[r--]);
      while (r > -1) {
        let i = e[r--];
        n.forEach(e => {
          let n = i[e];
          if (n != null) {
            o[e] = Object.assign({}, o[e] || n);
            let r = o[e];
            Object.keys(n).forEach(e => {
              if (!r[e]) {
                let o = n[e];
                r[e] = o;
              }
            });
          }
        });
      }
      return o;
    }(e, g);
    n.next_cursors = [];
    n.skip_blocks = [];
    return n;
  }
  (o = {}).CONCURRENT_FALSE = "CONCURRENT_FALSE";
  o.HAS_MORE_TRUE = "HAS_MORE_TRUE";
  o.NEXT_CURSORS_COUNT_ERROR = "NEXT_CURSORS_COUNT_ERROR";
  o.BLOCK_MAP_LACK = "BLOCK_MAP_LACK";
  o.ROOT_BLOCK_ERROR = "ROOT_BLOCK_ERROR";
  o.VALID = "VALID";
  let m = o;
  function b(e, n) {
    var r;
    if (e.concurrent === false) {
      return {
        isValid: false,
        illegalType: m.CONCURRENT_FALSE
      };
    }
    if (e.has_more === true) {
      return {
        isValid: false,
        illegalType: m.HAS_MORE_TRUE
      };
    }
    if (e.has_more === false && e.next_cursors && e.next_cursors.length !== 0) {
      return {
        isValid: false,
        illegalType: m.NEXT_CURSORS_COUNT_ERROR
      };
    }
    let o = e.block_map[e.id];
    if (!o || o.data.type !== n) {
      return {
        isValid: false,
        illegalType: m.ROOT_BLOCK_ERROR
      };
    }
    let l = true;
    let c = [];
    if ((r = e.skip_blocks) !== null && r !== undefined) {
      r.forEach(n => {
        if (!e.block_map[n]) {
          c.push(docxUtilityHelpers.maskSensitiveData(n));
          l = false;
        }
      });
    }
    if (l) {
      return {
        isValid: true,
        illegalType: m.VALID
      };
    } else {
      return {
        isValid: false,
        illegalType: m.BLOCK_MAP_LACK,
        lackBlocks: c
      };
    }
  }
  function v(e, n = {}) {
    docxEventCollectorWrap.wrapDocxCollector(e, n);
  }
  function T() {
    return !docUrlResolver.isDocDomain();
  }
  require.d(exports, {
    isHeadingBlock: function () {
      return f;
    },
    countBlocksByType: function () {
      return s;
    },
    validateBlockMap: function () {
      return b;
    },
    isNonDocDomain: function () {
      return T;
    },
    isOrderedOrHeadingBlock: function () {
      return d;
    },
    isBulletOrderType: function () {
      return h;
    },
    wrapDocxEventCollector: function () {
      return v;
    },
    isTableBlock: function () {
      return p;
    },
    mergeBlockMaps: function () {
      return E;
    },
    getPendingSlicedBlocks: function () {
      return a;
    }
  });
}