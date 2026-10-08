// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'KeyboardShortcutsRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_caption_component.c983c629.js
         * chunkId: 39088
         * moduleId: 914865
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  require("user-agent-parser_1") /*id: 757289*/;
  var userAgentDetector_1 = require("user-agent-detector_1") /*id: 277160*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var l = "";
  if (userAgentDetector_1.uaDetector.isMac || userAgentDetector_1.uaDetector.isIPad) {
    l = "mac";
  } else if (userAgentDetector_1.uaDetector.isWindows) {
    l = "windows";
  } else if (userAgentDetector_1.uaDetector.isLinux) {
    l = "linux";
  }
  var a = function (e) {
    function i(i) {
      var n = i.editor;
      var r = i.shortcutsMap;
      var o = e.call(this) || this;
      o.name = "KeyboardShortcuts";
      o.handleKeydown = function (e) {
        var i = o.getHotKeyName(e.nativeEvent);
        if (i) {
          var n = i.key;
          var r = i.value;
          o.editor.execCommand(n, r ? {
            value: r
          } : undefined);
          e.preventDefault();
          e.stopPropagation();
          return true;
        }
        return false;
      };
      o.editor = n;
      o.shortcutToCommandMap = o.normalizeShortCutsMap(r);
      o.editor.on("keydown", o.handleKeydown);
      return o;
    }
    typescriptHelpers.extendClass(i, e);
    var n = i.prototype;
    n.getShortCutID = function (e) {
      var i = e.metaKey;
      var n = e.altKey;
      var r = e.shiftKey;
      var o = e.ctrlKey;
      var s = e.keyCode;
      return [i ? "meta" : "", n ? "alt" : "", r ? "shift" : "", o ? "ctrl" : "", s ?? ""].filter(Boolean).join("-");
    };
    n.normalizeShortCutsMap = function (e) {
      var i;
      var n;
      var o;
      var s;
      var a = {};
      try {
        var c = typescriptHelpers.createIterator(e);
        var u = c.next();
        for (; !u.done; u = c.next()) {
          var d = u.value;
          var h = d.key;
          var p = d.value;
          var f = d.shortcut;
          var v = undefined;
          v = Array.isArray(f) ? f : [f];
          try {
            o = undefined;
            var g = typescriptHelpers.createIterator(v);
            var b = g.next();
            for (; !b.done; b = g.next()) {
              var S = b.value[l];
              if (S) {
                a[this.getShortCutID(S)] = {
                  key: h,
                  value: p
                };
              }
            }
          } catch (e) {
            o = {
              error: e
            };
          } finally {
            try {
              if (b && !b.done && (s = g.return)) {
                s.call(g);
              }
            } finally {
              if (o) {
                throw o.error;
              }
            }
          }
        }
      } catch (e) {
        i = {
          error: e
        };
      } finally {
        try {
          if (u && !u.done && (n = c.return)) {
            n.call(c);
          }
        } finally {
          if (i) {
            throw i.error;
          }
        }
      }
      return a;
    };
    n.getHotKeyName = function (e) {
      var i = this.getShortCutID(e);
      return this.shortcutToCommandMap[i];
    };
    return i;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    KeyboardShortcutsRenderer: function () {
      return a;
    }
  });
}