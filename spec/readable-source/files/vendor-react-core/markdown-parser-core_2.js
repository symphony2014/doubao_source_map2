// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'markdownCommonUtils'
// - Resolved require(708770) to 'markdown-common-utils'
// - Renamed variable 'i' to 'markdownLinkParsers'
// - Resolved require(406365) to 'markdown-link-parsers'
// - Renamed variable 'o' to 'markdownHtmlRenderer'
// - Resolved require(136867) to 'markdown-html-renderer'
// - Renamed variable 's' to 'markdownParserCore_1'
// - Resolved require(872297) to 'markdown-parser-core_1'
// - Renamed variable 'a' to 'markdownBlockParser'
// - Resolved require(757005) to 'markdown-block-parser'
// - Renamed variable 'c' to 'markdownInlineParser'
// - Resolved require(111276) to 'markdown-inline-parser'
// - Renamed variable 'l' to 'linkifyItCore'
// - Resolved require(529692) to 'linkify-it-core'
// - Renamed variable 'u' to 'urlEncodeDecodeUtil'
// - Resolved require(411352) to 'url-encode-decode-util'
// - Renamed variable 'h' to 'punycodeImplementation'
// - Resolved require(944717) to 'punycode-implementation'
// - Resolved require(390031) to 'markdown-default-config'
// - Resolved require(216353) to 'markdown-parser-config'
// - Resolved require(568329) to 'markdown-parser-default-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 75978
         */
module.exports = function (module, exports, require) {
  var markdownCommonUtils = require("markdown-common-utils") /*id: 708770*/;
  var markdownLinkParsers = require("markdown-link-parsers") /*id: 406365*/;
  var markdownHtmlRenderer = require("markdown-html-renderer") /*id: 136867*/;
  var markdownParserCore_1 = require("markdown-parser-core_1") /*id: 872297*/;
  var markdownBlockParser = require("markdown-block-parser") /*id: 757005*/;
  var markdownInlineParser = require("markdown-inline-parser") /*id: 111276*/;
  var linkifyItCore = require("linkify-it-core") /*id: 529692*/;
  var urlEncodeDecodeUtil = require("url-encode-decode-util") /*id: 411352*/;
  var punycodeImplementation = require("punycode-implementation") /*id: 944717*/;
  var p = {
    default: require("markdown-default-config") /*id: 390031*/,
    zero: require("markdown-parser-config") /*id: 216353*/,
    commonmark: require("markdown-parser-default-config") /*id: 568329*/
  };
  var f = /^(vbscript|javascript|file|data):/;
  var d = /^data:image\/(gif|png|jpeg|webp);/;
  function g(t) {
    var e = t.trim().toLowerCase();
    return !f.test(e) || !!d.test(e);
  }
  var m = ["http:", "https:", "mailto:"];
  function _(t) {
    var e = urlEncodeDecodeUtil.parse(t, true);
    if (e.hostname && (!e.protocol || m.indexOf(e.protocol) >= 0)) {
      try {
        e.hostname = punycodeImplementation.toASCII(e.hostname);
      } catch (t) {}
    }
    return urlEncodeDecodeUtil.encode(urlEncodeDecodeUtil.format(e));
  }
  function v(t) {
    var e = urlEncodeDecodeUtil.parse(t, true);
    if (e.hostname && (!e.protocol || m.indexOf(e.protocol) >= 0)) {
      try {
        e.hostname = punycodeImplementation.toUnicode(e.hostname);
      } catch (t) {}
    }
    return urlEncodeDecodeUtil.decode(urlEncodeDecodeUtil.format(e), urlEncodeDecodeUtil.decode.defaultChars + "%");
  }
  function b(t, e) {
    if (!(this instanceof b)) {
      return new b(t, e);
    }
    if (!e && !markdownCommonUtils.isString(t)) {
      e = t || {};
      t = "default";
    }
    this.inline = new markdownInlineParser();
    this.block = new markdownBlockParser();
    this.core = new markdownParserCore_1();
    this.renderer = new markdownHtmlRenderer();
    this.linkify = new linkifyItCore();
    this.validateLink = g;
    this.normalizeLink = _;
    this.normalizeLinkText = v;
    this.utils = markdownCommonUtils;
    this.helpers = markdownCommonUtils.assign({}, markdownLinkParsers);
    this.options = {};
    this.configure(t);
    if (e) {
      this.set(e);
    }
  }
  b.prototype.set = function (t) {
    markdownCommonUtils.assign(this.options, t);
    return this;
  };
  b.prototype.configure = function (t) {
    var e;
    var r = this;
    if (markdownCommonUtils.isString(t) && !(t = p[e = t])) {
      throw Error("Wrong `markdown-it` preset \"" + e + "\", check name");
    }
    if (!t) {
      throw Error("Wrong `markdown-it` preset, can't be empty");
    }
    if (t.options) {
      r.set(t.options);
    }
    if (t.components) {
      Object.keys(t.components).forEach(function (e) {
        if (t.components[e].rules) {
          r[e].ruler.enableOnly(t.components[e].rules);
        }
        if (t.components[e].rules2) {
          r[e].ruler2.enableOnly(t.components[e].rules2);
        }
      });
    }
    return this;
  };
  b.prototype.enable = function (t, e) {
    var r = [];
    if (!Array.isArray(t)) {
      t = [t];
    }
    ["core", "block", "inline"].forEach(function (e) {
      r = r.concat(this[e].ruler.enable(t, true));
    }, this);
    r = r.concat(this.inline.ruler2.enable(t, true));
    var n = t.filter(function (t) {
      return r.indexOf(t) < 0;
    });
    if (n.length && !e) {
      throw Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
    }
    return this;
  };
  b.prototype.disable = function (t, e) {
    var r = [];
    if (!Array.isArray(t)) {
      t = [t];
    }
    ["core", "block", "inline"].forEach(function (e) {
      r = r.concat(this[e].ruler.disable(t, true));
    }, this);
    r = r.concat(this.inline.ruler2.disable(t, true));
    var n = t.filter(function (t) {
      return r.indexOf(t) < 0;
    });
    if (n.length && !e) {
      throw Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
    }
    return this;
  };
  b.prototype.use = function (t) {
    var e = [this].concat(Array.prototype.slice.call(arguments, 1));
    t.apply(t, e);
    return this;
  };
  b.prototype.parse = function (t, e) {
    if (typeof t != "string") {
      throw Error("Input data should be a String");
    }
    var r = new this.core.State(t, this, e);
    this.core.process(r);
    return r.tokens;
  };
  b.prototype.render = function (t, e) {
    e = e || {};
    return this.renderer.render(this.parse(t, e), this.options, e);
  };
  b.prototype.parseInline = function (t, e) {
    var r = new this.core.State(t, this, e);
    r.inlineMode = true;
    this.core.process(r);
    return r.tokens;
  };
  b.prototype.renderInline = function (t, e) {
    e = e || {};
    return this.renderer.render(this.parseInline(t, e), this.options, e);
  };
  module.exports = b;
}