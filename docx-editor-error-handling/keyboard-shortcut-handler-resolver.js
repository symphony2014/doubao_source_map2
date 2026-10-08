// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'resolveShortcutHandler'
// - Renamed export 'z' to 'formatShortcutDisplay'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 848104
         */
module.exports = function (module, exports, require) {
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var keyboardShortcutNormalizer = require("keyboard-shortcut-normalizer") /*id: 761*/;
  var docxKeyboardShortcutView = require("docx-keyboard-shortcut-view") /*id: 781697*/;
  var docEditorShortcuts = require("doc-editor-shortcuts") /*id: 433866*/;
  let c = new Map();
  let u = e => {
    if (c.has(e)) {
      return c.get(e);
    }
    let {
      code: n,
      key: r,
      keyCode: i,
      altKey: l,
      shiftKey: u,
      ctrlKey: s,
      metaKey: d
    } = e;
    let h = {
      code: n,
      key: r,
      keyCode: i,
      altKey: l,
      shiftKey: u,
      ctrlKey: s,
      metaKey: d
    };
    let f = docEditorShortcuts.keyboardShortcuts.find(e => {
      let n = throttledOmitPathStringify.omitPathStringify(e, "handler", "name", "printKey");
      if (n.keyCode && n.code) {
        let e = throttledOmitPathStringify.omitPathStringify(n, "code");
        return Object.keys(e).every(n => h[n] === e[n]);
      }
      let r = Object.keys(throttledOmitPathStringify.omitPathStringify(n, "code", "key"));
      let i = e => h[e] === n[e];
      return r.every(i) && ["code", "key"].some(e => h[e] && i(e));
    });
    c.set(e, f == null ? undefined : f.handler);
    setTimeout(() => {
      c.clear();
    });
    if (f == null) {
      return undefined;
    } else {
      return f.handler;
    }
  };
  let s = e => {
    let n = docEditorShortcuts.keyboardShortcuts.filter(n => n.handler === e);
    if (n.length) {
      return n.map(e => {
        let r = [{
          key: e.ctrlKey,
          icon: keyboardShortcutNormalizer.ctrlKeyLabel
        }, {
          key: e.metaKey,
          icon: keyboardShortcutNormalizer.cmdKeyLabel
        }, {
          key: e.shiftKey,
          icon: keyboardShortcutNormalizer.shiftKeyLabel
        }, {
          key: e.altKey,
          icon: keyboardShortcutNormalizer.altKeyLabel
        }].filter(e => e.key);
        let o = e.printKey ?? (e.key === undefined ? docxKeyboardShortcutView.ShortcutKey(e.code) : e.key);
        return [...r.map(e => e.icon), o].join(" + ");
      }).join(` ${t("help.siderbar.or")} `);
    } else {
      return null;
    }
  };
  require.d(exports, {
    resolveShortcutHandler: function () {
      return u;
    },
    formatShortcutDisplay: function () {
      return s;
    }
  });
}