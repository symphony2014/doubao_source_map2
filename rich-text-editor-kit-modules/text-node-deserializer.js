// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'TextNodeDeserializer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_caption_component.c983c629.js
         * chunkId: 39088
         * moduleId: 232530
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var normalizeLineEndings = require("normalize-line-endings") /*id: 565335*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var editorDomNodeUtils = require("editor-dom-node-utils") /*id: 978010*/;
  var u = [/[\b]/g, RegExp(String.fromCharCode(8203), "g")];
  function d(e) {
    var i = e;
    u.forEach(function (e) {
      return i = i.replace(e, "");
    });
    return i;
  }
  function h(e) {
    return e.replace(/\r/g, " ").replace(/\xa0/g, " ").replace(/\t/g, " ".repeat(8));
  }
  var p = function (e) {
    function i() {
      var i = e !== null && e.apply(this, arguments) || this;
      i.name = "TextNodeDeserializer";
      return i;
    }
    typescriptRuntimeHelpers_1.extends(i, e);
    i.prototype.deserialize = function (e) {
      var i = e.node;
      var n = e.deltaSet;
      var r = e.zoneId;
      var a = e.text;
      var u = e.types;
      if (u.includes("text/html")) {
        if (editorDomNodeUtils.isTextNode(i)) {
          var p = (e = i.nodeValue) !== null && e !== undefined ? e : "";
          var f = "";
          var v = 0;
          var g = false;
          if (p.trim().length === 0 && ((e = i.parentElement) === null || e === undefined ? undefined : e.tagName.toLowerCase()) === "body") {
            return n.concat(new contentStructureDelta.ContentDelta({
              zoneId: r
            }));
          }
          for (var b = i.parentNode; b;) {
            if (b instanceof HTMLElement) {
              var S = b.tagName;
              var m = b.style;
              if (S.toLowerCase() === "pre") {
                g = true;
                break;
              }
              if (m.whiteSpace) {
                g = m.whiteSpace.startsWith("pre");
                break;
              }
            }
            b = b.parentNode;
          }
          var T;
          var E;
          var i = new deltaSetCore.DeltaSet();
          var y = new contentStructureDelta.ContentDelta({
            zoneId: r
          });
          while (p.length > 0) {
            if (g) {
              T = p.includes("\n");
              v = (E = p.split("\n", 1)[0]).length + 1;
              f = p.substring(v);
              y.insert(h(d(p = E)));
              p = f;
              if (T) {
                y.insertEnter();
              }
            } else {
              f = "";
              p = (p = p.replace(/\r\n/g, " ").replace(/[\r\n]/g, " ")).replace(/\s{2,}/g, function (e) {
                return e.replace(/[^\u00a0]+/g, " ");
              });
              y.insert(h(d(p)));
              p = f;
            }
          }
          return i.concat(y);
        }
      } else if (u.includes("text/plain") && a) {
        return new deltaSetCore.DeltaSet().concat(new contentStructureDelta.ContentDelta().insert(h(normalizeLineEndings.normalizeNewlines(d(a)))));
      }
      return n;
    };
    return i;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    TextNodeDeserializer: function () {
      return p;
    }
  });
}