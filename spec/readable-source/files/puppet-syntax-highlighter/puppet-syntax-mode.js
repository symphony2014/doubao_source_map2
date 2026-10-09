// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74123.d3fbe35a.js
         * chunkId: 74123
         * moduleId: 778354
         */
module.exports = function (module, exports, require) {
  var i = {};
  var a = /({)?([a-z][a-z0-9_]*)?((::[a-z][a-z0-9_]*)*::)?[a-zA-Z0-9_]+(})?/;
  function o(e, n) {
    var t = n.split(" ");
    var a = 0;
    for (; a < t.length; a++) {
      i[t[a]] = e;
    }
  }
  function s(e, n) {
    var t;
    var i;
    var a = false;
    while (!e.eol() && (t = e.next()) != n.pending) {
      if (t === "$" && i != "\\" && n.pending == "\"") {
        a = true;
        break;
      }
      i = t;
    }
    if (a) {
      e.backUp(1);
    }
    if (t == n.pending) {
      n.continueString = false;
    } else {
      n.continueString = true;
    }
    return "string";
  }
  o("keyword", "class define site node include import inherits");
  o("keyword", "case if else in and elsif default or");
  o("atom", "false true running present absent file directory undef");
  o("builtin", "action augeas burst chain computer cron destination dport exec file filebucket group host icmp iniface interface jump k5login limit log_level log_prefix macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod name notify outiface package proto reject resources router schedule scheduled_task selboolean selmodule service source sport ssh_authorized_key sshkey stage state table tidy todest toports tosource user vlan yumrepo zfs zone zpool");
  let r = {
    name: "puppet",
    startState: function () {
      return {
        inDefinition: false,
        inInclude: false,
        continueString: false,
        pending: false
      };
    },
    token: function (e, n) {
      if (e.eatSpace()) {
        return null;
      } else {
        return function (e, n) {
          var t = e.match(/[\w]+/, false);
          var o = e.match(/(\s+)?\w+\s+=>.*/, false);
          var r = e.match(/(\s+)?[\w:_]+(\s+)?{/, false);
          var c = e.match(/(\s+)?[@]{1,2}[\w:_]+(\s+)?{/, false);
          var u = e.next();
          if (u === "$") {
            if (e.match(a)) {
              if (n.continueString) {
                return "variableName.special";
              } else {
                return "variable";
              }
            } else {
              return "error";
            }
          }
          if (n.continueString) {
            e.backUp(1);
            return s(e, n);
          }
          if (n.inDefinition) {
            if (e.match(/(\s+)?[\w:_]+(\s+)?/)) {
              return "def";
            }
            e.match(/\s+{/);
            n.inDefinition = false;
          }
          if (n.inInclude) {
            e.match(/(\s+)?\S+(\s+)?/);
            n.inInclude = false;
            return "def";
          } else if (e.match(/(\s+)?\w+\(/)) {
            e.backUp(1);
            return "def";
          } else if (o) {
            e.match(/(\s+)?\w+/);
            return "tag";
          } else if (t && i.hasOwnProperty(t)) {
            e.backUp(1);
            e.match(/[\w]+/);
            if (e.match(/\s+\S+\s+{/, false)) {
              n.inDefinition = true;
            }
            if (t == "include") {
              n.inInclude = true;
            }
            return i[t];
          } else if (/(^|\s+)[A-Z][\w:_]+/.test(t)) {
            e.backUp(1);
            e.match(/(^|\s+)[A-Z][\w:_]+/);
            return "def";
          } else if (r) {
            e.match(/(\s+)?[\w:_]+/);
            return "def";
          } else if (c) {
            e.match(/(\s+)?[@]{1,2}/);
            return "atom";
          } else if (u == "#") {
            e.skipToEnd();
            return "comment";
          } else if (u == "'" || u == "\"") {
            n.pending = u;
            return s(e, n);
          } else if (u == "{" || u == "}") {
            return "bracket";
          } else if (u == "/") {
            e.match(/^[^\/]*\//);
            return "string.special";
          } else if (u.match(/[0-9]/)) {
            e.eatWhile(/[0-9]+/);
            return "number";
          } else if (u == "=") {
            if (e.peek() == ">") {
              e.next();
            }
            return "operator";
          } else {
            e.eatWhile(/[\w-]/);
            return null;
          }
        }(e, n);
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    puppet: function () {
      return r;
    }
  });
}