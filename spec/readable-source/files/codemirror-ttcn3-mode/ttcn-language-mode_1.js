// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92471.626dc681.js
         * chunkId: 92471
         * moduleId: 433364
         */
module.exports = function (module, exports, require) {
  function n(e) {
    var t = {};
    var T = e.split(" ");
    var n = 0;
    for (; n < T.length; ++n) {
      t[T[n]] = true;
    }
    return t;
  }
  let E = {
    name: "ttcn-cfg",
    keywords: n("Yes No LogFile FileMask ConsoleMask AppendFile TimeStampFormat LogEventTypes SourceInfoFormat LogEntityName LogSourceInfo DiskFullAction LogFileNumber LogFileSize MatchingHints Detailed Compact SubCategories Stack Single None Seconds DateTime Time Stop Error Retry Delete TCPPort KillTimer NumHCs UnixSocketsEnabled LocalAddress"),
    fileNCtrlMaskOptions: n("TTCN_EXECUTOR TTCN_ERROR TTCN_WARNING TTCN_PORTEVENT TTCN_TIMEROP TTCN_VERDICTOP TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION TTCN_USER TTCN_FUNCTION TTCN_STATISTICS TTCN_PARALLEL TTCN_MATCHING TTCN_DEBUG EXECUTOR ERROR WARNING PORTEVENT TIMEROP VERDICTOP DEFAULTOP TESTCASE ACTION USER FUNCTION STATISTICS PARALLEL MATCHING DEBUG LOG_ALL LOG_NOTHING ACTION_UNQUALIFIED DEBUG_ENCDEC DEBUG_TESTPORT DEBUG_UNQUALIFIED DEFAULTOP_ACTIVATE DEFAULTOP_DEACTIVATE DEFAULTOP_EXIT DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED EXECUTOR_COMPONENT EXECUTOR_CONFIGDATA EXECUTOR_EXTCOMMAND EXECUTOR_LOGOPTIONS EXECUTOR_RUNTIME EXECUTOR_UNQUALIFIED FUNCTION_RND FUNCTION_UNQUALIFIED MATCHING_DONE MATCHING_MCSUCCESS MATCHING_MCUNSUCC MATCHING_MMSUCCESS MATCHING_MMUNSUCC MATCHING_PCSUCCESS MATCHING_PCUNSUCC MATCHING_PMSUCCESS MATCHING_PMUNSUCC MATCHING_PROBLEM MATCHING_TIMEOUT MATCHING_UNQUALIFIED PARALLEL_PORTCONN PARALLEL_PORTMAP PARALLEL_PTC PARALLEL_UNQUALIFIED PORTEVENT_DUALRECV PORTEVENT_DUALSEND PORTEVENT_MCRECV PORTEVENT_MCSEND PORTEVENT_MMRECV PORTEVENT_MMSEND PORTEVENT_MQUEUE PORTEVENT_PCIN PORTEVENT_PCOUT PORTEVENT_PMIN PORTEVENT_PMOUT PORTEVENT_PQUEUE PORTEVENT_STATE PORTEVENT_UNQUALIFIED STATISTICS_UNQUALIFIED STATISTICS_VERDICT TESTCASE_FINISH TESTCASE_START TESTCASE_UNQUALIFIED TIMEROP_GUARD TIMEROP_READ TIMEROP_START TIMEROP_STOP TIMEROP_TIMEOUT TIMEROP_UNQUALIFIED USER_UNQUALIFIED VERDICTOP_FINAL VERDICTOP_GETVERDICT VERDICTOP_SETVERDICT VERDICTOP_UNQUALIFIED WARNING_UNQUALIFIED"),
    externalCommands: n("BeginControlPart EndControlPart BeginTestCase EndTestCase"),
    multiLineStrings: true
  };
  var C;
  var N = E.keywords;
  var r = E.fileNCtrlMaskOptions;
  var I = E.externalCommands;
  var i = E.multiLineStrings;
  var _ = E.indentStatements !== false;
  var o = /[\|]/;
  function A(e, t, T, n, E) {
    this.indented = e;
    this.column = t;
    this.type = T;
    this.align = n;
    this.prev = E;
  }
  function O(e, t, T) {
    var n = e.indented;
    if (e.context && e.context.type == "statement") {
      n = e.context.indented;
    }
    return e.context = new A(n, t, T, null, e.context);
  }
  function U(e) {
    var t = e.context.type;
    if (t == ")" || t == "]" || t == "}") {
      e.indented = e.context.indented;
    }
    return e.context = e.context.prev;
  }
  let R = {
    name: "ttcn",
    startState: function () {
      return {
        tokenize: null,
        context: new A(0, 0, "top", false),
        indented: 0,
        startOfLine: true
      };
    },
    token: function (e, t) {
      var T = t.context;
      if (e.sol()) {
        if (T.align == null) {
          T.align = false;
        }
        t.indented = e.indentation();
        t.startOfLine = true;
      }
      if (e.eatSpace()) {
        return null;
      }
      C = null;
      var n = (t.tokenize || function (e, t) {
        var T;
        var n = e.next();
        if (n == "\"" || n == "'") {
          ;
          T = n;
          t.tokenize = function (e, t) {
            var n;
            var E = false;
            var C = false;
            while ((n = e.next()) != null) {
              if (n == T && !E) {
                var N = e.peek();
                if (N && ((N = N.toLowerCase()) == "b" || N == "h" || N == "o")) {
                  e.next();
                }
                C = true;
                break;
              }
              E = !E && n == "\\";
            }
            if (C || !E && !i) {
              t.tokenize = null;
            }
            return "string";
          };
          return t.tokenize(e, t);
        }
        if (/[:=]/.test(n)) {
          C = n;
          return "punctuation";
        }
        if (n == "#") {
          e.skipToEnd();
          return "comment";
        }
        if (/\d/.test(n)) {
          e.eatWhile(/[\w\.]/);
          return "number";
        }
        if (o.test(n)) {
          e.eatWhile(o);
          return "operator";
        }
        if (n == "[") {
          e.eatWhile(/[\w_\]]/);
          return "number";
        }
        e.eatWhile(/[\w\$_]/);
        var E = e.current();
        if (N.propertyIsEnumerable(E)) {
          return "keyword";
        } else if (r.propertyIsEnumerable(E)) {
          return "atom";
        } else if (I.propertyIsEnumerable(E)) {
          return "deleted";
        } else {
          return "variable";
        }
      })(e, t);
      if (n == "comment") {
        return n;
      }
      if (T.align == null) {
        T.align = true;
      }
      if ((C == ";" || C == ":" || C == ",") && T.type == "statement") {
        U(t);
      } else if (C == "{") {
        O(t, e.column(), "}");
      } else if (C == "[") {
        O(t, e.column(), "]");
      } else if (C == "(") {
        O(t, e.column(), ")");
      } else if (C == "}") {
        while (T.type == "statement") {
          T = U(t);
        }
        for (T.type == "}" && (T = U(t)); T.type == "statement";) {
          T = U(t);
        }
      } else if (C == T.type) {
        U(t);
      } else if (_ && ((T.type == "}" || T.type == "top") && C != ";" || T.type == "statement" && C == "newstatement")) {
        O(t, e.column(), "statement");
      }
      t.startOfLine = false;
      return n;
    },
    languageData: {
      indentOnInput: /^\s*[{}]$/,
      commentTokens: {
        line: "#"
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    ttcnCfg: function () {
      return R;
    }
  });
}