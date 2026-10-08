// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'BlockDeserializer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_caption_component.c983c629.js
         * chunkId: 39088
         * moduleId: 120234
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var domBlockElementCheck = require("dom-block-element-check") /*id: 123182*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  require("editor-kit-dom-patch") /*id: 218425*/;
  var editorClipboardManager = require("editor-clipboard-manager") /*id: 797119*/;
  var editorDomNodeUtils = require("editor-dom-node-utils") /*id: 978010*/;
  var u = function (e) {
    function i() {
      var i = e !== null && e.apply(this, arguments) || this;
      i.name = "BlockElementDeserializer";
      return i;
    }
    typescriptRuntimeHelpers_1.extends(i, e);
    i.prototype.deserialize = function (e) {
      var i = e.node;
      var n = e.deltaSet;
      var r = e.zoneId;
      var e = e.types;
      var r = n.get(r);
      if (r instanceof contentStructureDelta.ContentDelta && !editorClipboardManager.endsWithString(r, "\n")) {
        if (e.includes("text/html") && editorDomNodeUtils.isTextNode(i) && (i.nodeType !== Node.TEXT_NODE || i.textContent !== "\n")) {
          if (i.nextSibling && domBlockElementCheck.isBlockElement(i.nextSibling)) {
            r.insertEnter();
          }
          return n;
        }
        if (i instanceof Element) {
          if (i.tagName === "BR") {
            r.insertEnter();
          } else if (domBlockElementCheck.isBlockElement(i)) {
            if (!!i.hasChildNodes() || !i.nextSibling && !i.previousSibling) {
              r.insertEnter();
            }
          } else if (["span", "a", "b", "u", "i", "s", "strong", "button", "abbr", "audio", "cite", "code", "em", "embed", "img", "input", "bdi", "bdo", "data", "del", "dfn", "ins", "kbd", "label", "map", "mark", "meter", "object", "output", "picture", "progress", "q", "ruby", "samp", "select", "slot", "small", "sub", "sup", "svg", "textarea", "time", "var", "wbr"].includes(i.tagName.toLowerCase()) && i.nextSibling && domBlockElementCheck.isBlockElement(i.nextSibling)) {
            r.insertEnter();
          }
        }
      }
      return n;
    };
    return i;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    BlockDeserializer: function () {
      return u;
    }
  });
}