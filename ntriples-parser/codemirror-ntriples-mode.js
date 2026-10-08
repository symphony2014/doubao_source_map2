// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72950.642e9b7c.js
         * chunkId: 72950
         * moduleId: 751496
         */
module.exports = function (module, exports, require) {
  var n = {
    PRE_SUBJECT: 0,
    WRITING_SUB_URI: 1,
    WRITING_BNODE_URI: 2,
    PRE_PRED: 3,
    WRITING_PRED_URI: 4,
    PRE_OBJ: 5,
    WRITING_OBJ_URI: 6,
    WRITING_OBJ_BNODE: 7,
    WRITING_OBJ_LITERAL: 8,
    WRITING_LIT_LANG: 9,
    WRITING_LIT_TYPE: 10,
    POST_OBJ: 11,
    ERROR: 12
  };
  function t(_, I) {
    var R;
    var t = _.location;
    R = t == n.PRE_SUBJECT && I == "<" ? n.WRITING_SUB_URI : t == n.PRE_SUBJECT && I == "_" ? n.WRITING_BNODE_URI : t == n.PRE_PRED && I == "<" ? n.WRITING_PRED_URI : t == n.PRE_OBJ && I == "<" ? n.WRITING_OBJ_URI : t == n.PRE_OBJ && I == "_" ? n.WRITING_OBJ_BNODE : t == n.PRE_OBJ && I == "\"" ? n.WRITING_OBJ_LITERAL : t == n.WRITING_SUB_URI && I == ">" ? n.PRE_PRED : t == n.WRITING_BNODE_URI && I == " " ? n.PRE_PRED : t == n.WRITING_PRED_URI && I == ">" ? n.PRE_OBJ : t == n.WRITING_OBJ_URI && I == ">" ? n.POST_OBJ : t == n.WRITING_OBJ_BNODE && I == " " ? n.POST_OBJ : t == n.WRITING_OBJ_LITERAL && I == "\"" ? n.POST_OBJ : t == n.WRITING_LIT_LANG && I == " " ? n.POST_OBJ : t == n.WRITING_LIT_TYPE && I == ">" ? n.POST_OBJ : t == n.WRITING_OBJ_LITERAL && I == "@" ? n.WRITING_LIT_LANG : t == n.WRITING_OBJ_LITERAL && I == "^" ? n.WRITING_LIT_TYPE : I == " " && (t == n.PRE_SUBJECT || t == n.PRE_PRED || t == n.PRE_OBJ || t == n.POST_OBJ) ? t : t == n.POST_OBJ && I == "." ? n.PRE_SUBJECT : n.ERROR;
    _.location = R;
  }
  let e = {
    name: "ntriples",
    startState: function () {
      return {
        location: n.PRE_SUBJECT,
        uris: [],
        anchors: [],
        bnodes: [],
        langs: [],
        types: []
      };
    },
    token: function (_, I) {
      var R = _.next();
      if (R == "<") {
        t(I, R);
        var n = "";
        _.eatWhile(function (_) {
          return _ != "#" && _ != ">" && (n += _, true);
        });
        I.uris.push(n);
        if (!_.match("#", false)) {
          _.next();
          t(I, ">");
        }
        return "variable";
      }
      if (R == "#") {
        var e = "";
        _.eatWhile(function (_) {
          return _ != ">" && _ != " " && (e += _, true);
        });
        I.anchors.push(e);
        return "url";
      }
      if (R == ">") {
        t(I, ">");
        return "variable";
      }
      if (R == "_") {
        t(I, R);
        var T = "";
        _.eatWhile(function (_) {
          return _ != " " && (T += _, true);
        });
        I.bnodes.push(T);
        _.next();
        t(I, " ");
        return "builtin";
      }
      if (R == "\"") {
        t(I, R);
        _.eatWhile(function (_) {
          return _ != "\"";
        });
        _.next();
        if (_.peek() != "@" && _.peek() != "^") {
          t(I, "\"");
        }
        return "string";
      }
      if (R == "@") {
        t(I, "@");
        var r = "";
        _.eatWhile(function (_) {
          return _ != " " && (r += _, true);
        });
        I.langs.push(r);
        _.next();
        t(I, " ");
        return "string.special";
      }
      if (R == "^") {
        _.next();
        t(I, "^");
        var E = "";
        _.eatWhile(function (_) {
          return _ != ">" && (E += _, true);
        });
        I.types.push(E);
        _.next();
        t(I, ">");
        return "variable";
      }
      if (R == " ") {
        t(I, R);
      }
      if (R == ".") {
        t(I, R);
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    ntriples: function () {
      return e;
    }
  });
}