// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'ShortcutKey'
// - Renamed export 'Z' to 'ShortcutPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 781697
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function i(e) {
    let n = !!e.showName && !!e.name;
    return reactJsxRuntimeCoreReexport.jsxs("span", {
      className: "short-cut-wrapper",
      children: [n ? e.name && reactJsxRuntimeCoreReexport.jsx("span", {
        children: e.name
      }) : null, n ? reactJsxRuntimeCoreReexport.jsxs("span", {
        children: [" (", e.keys.join(" + "), ")"]
      }) : reactJsxRuntimeCoreReexport.jsx("span", {
        children: e.keys.join(" + ")
      })]
    });
  }
  var keyboardShortcutNormalizer = require("keyboard-shortcut-normalizer") /*id: 761*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var docEditorShortcuts = require("doc-editor-shortcuts") /*id: 433866*/;
  function u(e) {
    if (e === undefined) {
      return e;
    } else if (e.startsWith("Digit") || e.startsWith("Key")) {
      return e[e.length - 1];
    } else {
      return e;
    }
  }
  function s(e) {
    let {
      handler: r,
      panelType: s,
      showName: d = true
    } = e;
    let h = docEditorShortcuts.keyboardShortcuts.find(e => e.handler === r);
    if (!h) {
      return null;
    }
    let f = [{
      key: h.ctrlKey,
      icon: keyboardShortcutNormalizer.ctrlKeyLabel
    }, {
      key: h.metaKey,
      icon: keyboardShortcutNormalizer.primaryModifierKey
    }, {
      key: h.shiftKey,
      icon: keyboardShortcutNormalizer.shiftKeyLabel
    }, {
      key: h.altKey,
      icon: keyboardShortcutNormalizer.altKeyLabel
    }].filter(e => e.key);
    let p = [editorUiComponentConstants.uiComponentTypes.TextualToolbar, editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar];
    let g = !!d && !p.includes(s);
    return reactJsxRuntimeCoreReexport.jsx(i, {
      name: h.name,
      keys: [...f.map(e => e.icon), h.printKey ?? (h.key === undefined ? u(h.code) : h.key)],
      showName: g
    });
  }
  require.d(exports, {
    ShortcutKey: function () {
      return u;
    },
    ShortcutPanel: function () {
      return s;
    }
  });
}