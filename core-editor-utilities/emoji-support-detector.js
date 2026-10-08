// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'hexToEmoji'
// - Renamed export 'i' to 'isEmojiSupported'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 116857
         */
module.exports = function (module, exports, require) {
  var uiConstantsEmojiConfig = require("ui-constants-emoji-config") /*id: 592082*/;
  let o = new Map();
  let a = ["♀️", "♂️", "⚕️"];
  let i = e => {
    let t;
    try {
      if (!navigator.userAgent.includes("jsdom")) {
        t = document.createElement("canvas").getContext("2d", {
          willReadFrequently: true
        });
      }
    } catch (e) {}
    if (!t) {
      i = () => false;
      return false;
    }
    let r = Math.floor(12.5);
    t.canvas.width = 40;
    t.canvas.height = 25;
    t.font = `${r}px ${uiConstantsEmojiConfig.emojiFontStack}`;
    return (i = e => {
      t.clearRect(0, 0, 40, 25);
      t.fillStyle = "#FF0000";
      t.fillText(e, 0, 22);
      t.fillStyle = "#0000FF";
      t.fillText(e, 20, 22);
      let r = t.getImageData(0, 0, 20, 25).data;
      let n = r.length;
      let o = 0;
      for (; o < n && !r[o + 3]; o += 4);
      if (o >= n) {
        return false;
      }
      let a = 20 + o / 4 % 20;
      let i = Math.floor(o / 4 / 20);
      let c = t.getImageData(a, i, 1, 1).data;
      return r[o] === c[0] && r[o + 2] === c[2] && !(t.measureText(e).width >= 20);
    })(e);
  };
  function c(e, t = "") {
    try {
      let t = e.split("-").map(e => parseInt(e, 16));
      return String.fromCodePoint(...t);
    } catch (o) {
      require.e("icon-emoji-logging") /*id: 57016*/.then(require.bind(require, "emoji-icon-analytics-tracker") /*id: 346342*/).then(({
        IconViewFailReason: r,
        logIconViewFail: a
      }) => {
        a({
          reason: r.INVALID_KEY,
          icon_type: uiConstantsEmojiConfig.iconTypes.EMOJI,
          icon_key: e,
          scene: t,
          err_stack: JSON.stringify(o == null ? undefined : o.stack)
        });
      });
      return "";
    }
  }
  function s(e, t, n = "") {
    if (!e) {
      return false;
    }
    let c = function (e) {
      if (a.includes(e)) {
        return true;
      }
      if (o.has(e)) {
        return o.get(e);
      }
      let t = i(e);
      o.set(e, t);
      return t;
    }(e);
    if (!c) {
      require.e("icon-emoji-logging") /*id: 57016*/.then(require.bind(require, "emoji-icon-analytics-tracker") /*id: 346342*/).then(({
        IconViewFailReason: e,
        logIconViewFail: r
      }) => {
        r({
          reason: e.EMOJI_NOT_SUPPORTED,
          icon_key: t,
          scene: n
        });
      });
    }
    return c;
  }
  require.d(exports, {
    hexToEmoji: function () {
      return c;
    },
    isEmojiSupported: function () {
      return s;
    }
  });
}