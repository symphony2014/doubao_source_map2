// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76726.685856c8.js
         * chunkId: 76726
         * moduleId: 486228
         */
module.exports = function (module, exports, require) {
  function r(e) {
    var t = {};
    var n = e.split(",");
    var r = 0;
    for (; r < n.length; ++r) {
      var i = n[r].toUpperCase();
      var o = n[r].charAt(0).toUpperCase() + n[r].slice(1);
      t[n[r]] = true;
      t[i] = true;
      t[o] = true;
    }
    return t;
  }
  function i(e) {
    e.eatWhile(/[\w\$_]/);
    return "meta";
  }
  var o;
  var a = r("null");
  var l = {
    "`": i,
    $: i
  };
  var u = r("abs,access,after,alias,all,and,architecture,array,assert,attribute,begin,block,body,buffer,bus,case,component,configuration,constant,disconnect,downto,else,elsif,end,end block,end case,end component,end for,end generate,end if,end loop,end process,end record,end units,entity,exit,file,for,function,generate,generic,generic map,group,guarded,if,impure,in,inertial,inout,is,label,library,linkage,literal,loop,map,mod,nand,new,next,nor,null,of,on,open,or,others,out,package,package body,port,port map,postponed,procedure,process,pure,range,record,register,reject,rem,report,return,rol,ror,select,severity,signal,sla,sll,sra,srl,subtype,then,to,transport,type,unaffected,units,until,use,variable,wait,when,while,with,xnor,xor");
  var s = r("architecture,entity,begin,case,port,else,elsif,end,for,function,if");
  var c = /[&|~><!\)\(*#%@+\/=?\:;}{,\.\^\-\[\]]/;
  function f(e, t) {
    var n;
    var r;
    var i = e.next();
    if (l[i]) {
      var p = l[i](e, t);
      if (p !== false) {
        return p;
      }
    }
    if (i == "\"") {
      ;
      n = i;
      t.tokenize = function (e, t) {
        var r;
        var i = false;
        var o = false;
        while ((r = e.next()) != null) {
          if (r == n && !i) {
            o = true;
            break;
          }
          i = !i && r == "--";
        }
        if (o || !i) {
          t.tokenize = f;
        }
        return "string.special";
      };
      return t.tokenize(e, t);
    }
    if (i == "'") {
      ;
      r = i;
      t.tokenize = function (e, t) {
        var n;
        var i = false;
        var o = false;
        while ((n = e.next()) != null) {
          if (n == r && !i) {
            o = true;
            break;
          }
          i = !i && n == "--";
        }
        if (o || !i) {
          t.tokenize = f;
        }
        return "string";
      };
      return t.tokenize(e, t);
    }
    if (/[\[\]{}\(\),;\:\.]/.test(i)) {
      o = i;
      return null;
    }
    if (/[\d']/.test(i)) {
      e.eatWhile(/[\w\.']/);
      return "number";
    }
    if (i == "-" && e.eat("-")) {
      e.skipToEnd();
      return "comment";
    }
    if (c.test(i)) {
      e.eatWhile(c);
      return "operator";
    }
    e.eatWhile(/[\w\$_]/);
    var d = e.current();
    if (u.propertyIsEnumerable(d.toLowerCase())) {
      if (s.propertyIsEnumerable(d)) {
        o = "newstatement";
      }
      return "keyword";
    } else if (a.propertyIsEnumerable(d)) {
      return "atom";
    } else {
      return "variable";
    }
  }
  function p(e, t, n, r, i) {
    this.indented = e;
    this.column = t;
    this.type = n;
    this.align = r;
    this.prev = i;
  }
  function d(e, t, n) {
    return e.context = new p(e.indented, t, n, null, e.context);
  }
  function m(e) {
    var t = e.context.type;
    if (t == ")" || t == "]" || t == "}") {
      e.indented = e.context.indented;
    }
    return e.context = e.context.prev;
  }
  let g = {
    name: "vhdl",
    startState: function (e) {
      return {
        tokenize: null,
        context: new p(-e, 0, "top", false),
        indented: 0,
        startOfLine: true
      };
    },
    token: function (e, t) {
      var n = t.context;
      if (e.sol()) {
        if (n.align == null) {
          n.align = false;
        }
        t.indented = e.indentation();
        t.startOfLine = true;
      }
      if (e.eatSpace()) {
        return null;
      }
      o = null;
      var r = (t.tokenize || f)(e, t);
      if (r == "comment" || r == "meta") {
        return r;
      }
      if (n.align == null) {
        n.align = true;
      }
      if ((o == ";" || o == ":") && n.type == "statement") {
        m(t);
      } else if (o == "{") {
        d(t, e.column(), "}");
      } else if (o == "[") {
        d(t, e.column(), "]");
      } else if (o == "(") {
        d(t, e.column(), ")");
      } else if (o == "}") {
        while (n.type == "statement") {
          n = m(t);
        }
        for (n.type == "}" && (n = m(t)); n.type == "statement";) {
          n = m(t);
        }
      } else if (o == n.type) {
        m(t);
      } else if (n.type == "}" || n.type == "top" || n.type == "statement" && o == "newstatement") {
        d(t, e.column(), "statement");
      }
      t.startOfLine = false;
      return r;
    },
    indent: function (e, t, n) {
      if (e.tokenize != f && e.tokenize != null) {
        return 0;
      }
      var r = t && t.charAt(0);
      var i = e.context;
      var o = r == i.type;
      if (i.type == "statement") {
        return i.indented + (r == "{" ? 0 : n.unit);
      } else if (i.align) {
        return i.column + +!o;
      } else {
        return i.indented + (o ? 0 : n.unit);
      }
    },
    languageData: {
      indentOnInput: /^\s*[{}]$/,
      commentTokens: {
        line: "--"
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    vhdl: function () {
      return g;
    }
  });
}