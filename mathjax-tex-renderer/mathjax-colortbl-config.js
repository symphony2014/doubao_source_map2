// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathjaxEqnarrayTags'
// - Resolved require(962632) to 'mathjax-eqnarray-tags'
// - Renamed variable 'i' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'a' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(342117) to 'message-format-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 831960
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
  var n = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.ColortblConfiguration = exports.ColorArrayItem = undefined;
  var mathjaxEqnarrayTags = require("mathjax-eqnarray-tags") /*id: 962632*/;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var u = n(require("message-format-util") /*id: 342117*/);
  var s = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.color = {
        cell: "",
        row: "",
        col: []
      };
      e.hasColor = false;
      return e;
    }
    T(e, t);
    e.prototype.EndEntry = function () {
      t.prototype.EndEntry.call(this);
      var e = this.row[this.row.length - 1];
      var Q = this.color.cell || this.color.row || this.color.col[this.row.length - 1];
      if (Q) {
        e.attributes.set("mathbackground", Q);
        this.color.cell = "";
        this.hasColor = true;
      }
    };
    e.prototype.EndRow = function () {
      t.prototype.EndRow.call(this);
      this.color.row = "";
    };
    e.prototype.createMml = function () {
      var e = t.prototype.createMml.call(this);
      var Q = e.isKind("mrow") ? e.childNodes[1] : e;
      if (Q.isKind("menclose")) {
        Q = Q.childNodes[0].childNodes[0];
      }
      if (this.hasColor && Q.attributes.get("frame") === "none") {
        Q.attributes.set("frame", "");
      }
      return e;
    };
    return e;
  }(mathjaxEqnarrayTags.ArrayItem);
  exports.ColorArrayItem = s;
  new symbolParseMaps.CommandMap("colortbl", {
    cellcolor: ["TableColor", "cell"],
    rowcolor: ["TableColor", "row"],
    columncolor: ["TableColor", "col"]
  }, {
    TableColor: function (t, e, Q) {
      var r = t.configuration.packageData.get("color").model;
      var T = t.GetBrackets(e, "");
      var n = r.getColor(T, t.GetArgument(e));
      var o = t.stack.Top();
      if (!(o instanceof s)) {
        throw new u.default("UnsupportedTableColor", "Unsupported use of %1", t.currentCS);
      }
      if (Q === "col") {
        if (o.table.length) {
          throw new u.default("ColumnColorNotTop", "%1 must be in the top row", e);
        }
        o.color.col[o.row.length] = n;
        if (t.GetBrackets(e, "")) {
          t.GetBrackets(e, "");
        }
      } else {
        o.color[Q] = n;
        if (Q === "row" && (o.Size() || o.row.length)) {
          throw new u.default("RowColorNotFirst", "%1 must be at the beginning of a row", e);
        }
      }
    }
  });
  exports.ColortblConfiguration = mathjaxParserConfiguration.Configuration.create("colortbl", {
    handler: {
      macro: ["colortbl"]
    },
    items: {
      array: s
    },
    priority: 10,
    config: [function (t, e) {
      if (!e.parseOptions.packageData.has("color")) {
        mathjaxParserConfiguration.ConfigurationHandler.get("color").config(t, e);
      }
    }, 10]
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}