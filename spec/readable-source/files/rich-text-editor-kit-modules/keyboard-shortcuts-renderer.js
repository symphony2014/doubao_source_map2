// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'KeyboardShortcutsRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 307048
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  require("user-agent-parser_1") /*id: 757289*/;
  var userAgentDetect = require("user-agent-detect") /*id: 68901*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var a = "";
  if (userAgentDetect.userAgentInfo.isMac || userAgentDetect.userAgentInfo.isIPad) {
    a = "mac";
  } else if (userAgentDetect.userAgentInfo.isWindows) {
    a = "windows";
  } else if (userAgentDetect.userAgentInfo.isLinux) {
    a = "linux";
  }
  var l = function (e) {
    function t(t) {
      var n = t.editor;
      var i = t.shortcutsMap;
      var o = e.call(this) || this;
      o.name = "KeyboardShortcuts";
      o.handleKeydown = function (e) {
        var t = o.getHotKeyName(e.nativeEvent);
        if (t) {
          var n = t.key;
          var i = t.value;
          o.editor.execCommand(n, i ? {
            value: i
          } : undefined);
          e.preventDefault();
          e.stopPropagation();
          return true;
        }
        return false;
      };
      o.editor = n;
      o.shortcutToCommandMap = o.normalizeShortCutsMap(i);
      o.editor.on("keydown", o.handleKeydown);
      return o;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.getShortCutID = function (e) {
      var t = e.metaKey;
      var n = e.altKey;
      var i = e.shiftKey;
      var o = e.ctrlKey;
      var r = e.keyCode;
      return [t ? "meta" : "", n ? "alt" : "", i ? "shift" : "", o ? "ctrl" : "", r ?? ""].filter(Boolean).join("-");
    };
    n.normalizeShortCutsMap = function (e) {
      var t;
      var n;
      var o;
      var r;
      var l = {};
      try {
        var s = typescriptHelpers_1.getValues(e);
        var u = s.next();
        for (; !u.done; u = s.next()) {
          var d = u.value;
          var c = d.key;
          var h = d.value;
          var f = d.shortcut;
          var p = undefined;
          p = Array.isArray(f) ? f : [f];
          try {
            o = undefined;
            var v = typescriptHelpers_1.getValues(p);
            var g = v.next();
            for (; !g.done; g = v.next()) {
              var m = g.value[a];
              if (m) {
                l[this.getShortCutID(m)] = {
                  key: c,
                  value: h
                };
              }
            }
          } catch (e) {
            o = {
              error: e
            };
          } finally {
            try {
              if (g && !g.done && (r = v.return)) {
                r.call(v);
              }
            } finally {
              if (o) {
                throw o.error;
              }
            }
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (u && !u.done && (n = s.return)) {
            n.call(s);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return l;
    };
    n.getHotKeyName = function (e) {
      var t = this.getShortCutID(e);
      return this.shortcutToCommandMap[t];
    };
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    KeyboardShortcutsRenderer: function () {
      return l;
    }
  });
}