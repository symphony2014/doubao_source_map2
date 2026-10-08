// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 60429.e9316c75.js
         * chunkId: 60429
         * moduleId: 538990
         */
module.exports = function (module, exports, require) {
  var a = ["exten", "same", "include", "ignorepat", "switch"];
  var i = ["#include", "#exec"];
  var r = ["addqueuemember", "adsiprog", "aelsub", "agentlogin", "agentmonitoroutgoing", "agi", "alarmreceiver", "amd", "answer", "authenticate", "background", "backgrounddetect", "bridge", "busy", "callcompletioncancel", "callcompletionrequest", "celgenuserevent", "changemonitor", "chanisavail", "channelredirect", "chanspy", "clearhash", "confbridge", "congestion", "continuewhile", "controlplayback", "dahdiacceptr2call", "dahdibarge", "dahdiras", "dahdiscan", "dahdisendcallreroutingfacility", "dahdisendkeypadfacility", "datetime", "dbdel", "dbdeltree", "deadagi", "dial", "dictate", "directory", "disa", "dumpchan", "eagi", "echo", "endwhile", "exec", "execif", "execiftime", "exitwhile", "extenspy", "externalivr", "festival", "flash", "followme", "forkcdr", "getcpeid", "gosub", "gosubif", "goto", "gotoif", "gotoiftime", "hangup", "iax2provision", "ices", "importvar", "incomplete", "ivrdemo", "jabberjoin", "jabberleave", "jabbersend", "jabbersendgroup", "jabberstatus", "jack", "log", "macro", "macroexclusive", "macroexit", "macroif", "mailboxexists", "meetme", "meetmeadmin", "meetmechanneladmin", "meetmecount", "milliwatt", "minivmaccmess", "minivmdelete", "minivmgreet", "minivmmwi", "minivmnotify", "minivmrecord", "mixmonitor", "monitor", "morsecode", "mp3player", "mset", "musiconhold", "nbscat", "nocdr", "noop", "odbc", "odbc", "odbcfinish", "originate", "ospauth", "ospfinish", "osplookup", "ospnext", "page", "park", "parkandannounce", "parkedcall", "pausemonitor", "pausequeuemember", "pickup", "pickupchan", "playback", "playtones", "privacymanager", "proceeding", "progress", "queue", "queuelog", "raiseexception", "read", "readexten", "readfile", "receivefax", "receivefax", "receivefax", "record", "removequeuemember", "resetcdr", "retrydial", "return", "ringing", "sayalpha", "saycountedadj", "saycountednoun", "saycountpl", "saydigits", "saynumber", "sayphonetic", "sayunixtime", "senddtmf", "sendfax", "sendfax", "sendfax", "sendimage", "sendtext", "sendurl", "set", "setamaflags", "setcallerpres", "setmusiconhold", "sipaddheader", "sipdtmfmode", "sipremoveheader", "skel", "slastation", "slatrunk", "sms", "softhangup", "speechactivategrammar", "speechbackground", "speechcreate", "speechdeactivategrammar", "speechdestroy", "speechloadgrammar", "speechprocessingsound", "speechstart", "speechunloadgrammar", "stackpop", "startmusiconhold", "stopmixmonitor", "stopmonitor", "stopmusiconhold", "stopplaytones", "system", "testclient", "testserver", "transfer", "tryexec", "trysystem", "unpausemonitor", "unpausequeuemember", "userevent", "verbose", "vmauthenticate", "vmsayname", "voicemail", "voicemailmain", "wait", "waitexten", "waitfornoise", "waitforring", "waitforsilence", "waitmusiconhold", "waituntil", "while", "zapateller"];
  let o = {
    name: "asterisk",
    startState: function () {
      return {
        blockComment: false,
        extenStart: false,
        extenSame: false,
        extenInclude: false,
        extenExten: false,
        extenPriority: false,
        extenApplication: false
      };
    },
    token: function (e, t) {
      var n = "";
      if (e.eatSpace()) {
        return null;
      }
      if (t.extenStart) {
        e.eatWhile(/[^\s]/);
        n = e.current();
        if (/^=>?$/.test(n)) {
          t.extenExten = true;
          t.extenStart = false;
          return "strong";
        } else {
          t.extenStart = false;
          e.skipToEnd();
          return "error";
        }
      }
      if (t.extenExten) {
        t.extenExten = false;
        t.extenPriority = true;
        e.eatWhile(/[^,]/);
        if (t.extenInclude) {
          e.skipToEnd();
          t.extenPriority = false;
          t.extenInclude = false;
        }
        if (t.extenSame) {
          t.extenPriority = false;
          t.extenSame = false;
          t.extenApplication = true;
        }
        return "tag";
      }
      if (t.extenPriority) {
        t.extenPriority = false;
        t.extenApplication = true;
        e.next();
        if (t.extenSame) {
          return null;
        } else {
          e.eatWhile(/[^,]/);
          return "number";
        }
      }
      if (!t.extenApplication) {
        return function (e, t) {
          var n = "";
          var r = e.next();
          if (t.blockComment) {
            if (r == "-" && e.match("-;", true)) {
              t.blockComment = false;
            } else if (e.skipTo("--;")) {
              e.next();
              e.next();
              e.next();
              t.blockComment = false;
            } else {
              e.skipToEnd();
            }
            return "comment";
          }
          if (r == ";") {
            if (e.match("--", true) && !e.match("-", false)) {
              t.blockComment = true;
            } else {
              e.skipToEnd();
            }
            return "comment";
          }
          if (r == "[") {
            e.skipTo("]");
            e.eat("]");
            return "header";
          }
          if (r == "\"") {
            e.skipTo("\"");
            return "string";
          }
          if (r == "'") {
            e.skipTo("'");
            return "string.special";
          }
          if (r == "#" && (e.eatWhile(/\w/), n = e.current(), i.indexOf(n) !== -1)) {
            e.skipToEnd();
            return "strong";
          }
          if (r == "$" && e.peek() == "{") {
            e.skipTo("}");
            e.eat("}");
            return "variableName.special";
          }
          e.eatWhile(/\w/);
          n = e.current();
          if (a.indexOf(n) !== -1) {
            t.extenStart = true;
            switch (n) {
              case "same":
                t.extenSame = true;
                break;
              case "include":
              case "switch":
              case "ignorepat":
                t.extenInclude = true;
            }
            return "atom";
          }
        }(e, t);
      }
      e.eatWhile(/,/);
      if ((n = e.current()) === ",") {
        return null;
      }
      e.eatWhile(/\w/);
      n = e.current().toLowerCase();
      t.extenApplication = false;
      if (r.indexOf(n) !== -1) {
        return "def";
      }
      return null;
    },
    languageData: {
      commentTokens: {
        line: ";",
        block: {
          open: ";--",
          close: "--;"
        }
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    asterisk: function () {
      return o;
    }
  });
}