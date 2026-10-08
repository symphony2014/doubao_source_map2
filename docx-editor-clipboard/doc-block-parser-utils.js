// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Hf' to 'parseBlockListData'
// - Renamed export 'M6' to 'addViewChildElement'
// - Renamed export 'nS' to 'parseJsonFromAttribute'
// - Renamed export 'tA' to 'validateHrefOrMention'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 247471
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockTypeConstants_1 = require("doc-block-type-constants_1") /*id: 240222*/;
  function l(e) {
    let {
      list: o
    } = e.dataset;
    if (o === undefined) {
      return;
    }
    let r = {
      type: "",
      level: 0,
      isDone: false
    };
    try {
      let e = o.match(/(\D+)(\d+)/);
      let n = e[1];
      let l = e[2];
      r.type = docBlockTypeConstants_1.blockTypeMap[n] || docBlockTypeConstants.blockTypeConstants.BULLET;
      r.level = Number(l);
      if (n === "done") {
        r.isDone = true;
      }
    } catch (e) {}
    return r;
  }
  function s(e) {
    let o = e.dataset.href;
    let r = e.parentElement && e.parentElement.tagName === "SPAN" && e.parentElement.className.includes("mention");
    if (!o && !r) {
      return false;
    }
    let i = e.getAttribute("href") || "";
    return !!platformDocUtils.oOl(i);
  }
  function c(e, o) {
    let r;
    let n = e.querySelectorAll(`[${o}]`);
    if (n.length === 0 || n.length > 1) {
      return;
    }
    let i = n[0].getAttribute(o);
    if (i) {
      try {
        r = JSON.parse(i);
      } catch (e) {}
      return r;
    }
  }
  function d(e, o, r = "card") {
    if (e.children) {
      e.children.push(o);
    } else {
      e.children = [o];
    }
    e.data.type = docBlockTypeConstants.blockTypeConstants.VIEW;
    e.data.view_type = {
      card: "Card",
      preview: "Preview"
    }[r];
    e.alive = true;
  }
  require.d(exports, {
    parseBlockListData: function () {
      return l;
    },
    addViewChildElement: function () {
      return d;
    },
    parseJsonFromAttribute: function () {
      return c;
    },
    validateHrefOrMention: function () {
      return s;
    }
  });
}