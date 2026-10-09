// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'o' to 'mathjaxEquationTaggingSystem'
// - Resolved require(9120) to 'mathjax-equation-tagging-system'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 491332
         */
module.exports = function (module, exports, require) {
  var r;
  var T = this && this.__extends || (r = function (t, e) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var Q in e) {
        if (Object.prototype.hasOwnProperty.call(e, Q)) {
          t[Q] = e[Q];
        }
      }
    })(t, e);
  }, function (t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function Q() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (Q.prototype = e.prototype, new Q());
  });
  exports.TagFormatConfiguration = exports.tagformatConfig = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var mathjaxEquationTaggingSystem = require("mathjax-equation-tagging-system") /*id: 9120*/;
  var i = 0;
  function a(t, e) {
    var Q = e.parseOptions.options.tags;
    if (Q !== "base" && t.tags.hasOwnProperty(Q)) {
      mathjaxEquationTaggingSystem.TagsFactory.add(Q, t.tags[Q]);
    }
    var r = function (t) {
      function Q() {
        return t !== null && t.apply(this, arguments) || this;
      }
      T(Q, t);
      Q.prototype.formatNumber = function (t) {
        return e.parseOptions.options.tagformat.number(t);
      };
      Q.prototype.formatTag = function (t) {
        return e.parseOptions.options.tagformat.tag(t);
      };
      Q.prototype.formatId = function (t) {
        return e.parseOptions.options.tagformat.id(t);
      };
      Q.prototype.formatUrl = function (t, Q) {
        return e.parseOptions.options.tagformat.url(t, Q);
      };
      return Q;
    }(mathjaxEquationTaggingSystem.TagsFactory.create(e.parseOptions.options.tags).constructor);
    var n = "configTags-" + ++i;
    mathjaxEquationTaggingSystem.TagsFactory.add(n, r);
    e.parseOptions.options.tags = n;
  }
  exports.tagformatConfig = a;
  exports.TagFormatConfiguration = mathjaxParserConfiguration.Configuration.create("tagformat", {
    config: [a, 10],
    options: {
      tagformat: {
        number: function (t) {
          return t.toString();
        },
        tag: function (t) {
          return "(" + t + ")";
        },
        id: function (t) {
          return "mjx-eqn:" + t.replace(/\s/g, "_");
        },
        url: function (t, e) {
          return e + "#" + encodeURIComponent(t);
        }
      }
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}