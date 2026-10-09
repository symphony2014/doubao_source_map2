// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 1026.1cc38b9d.js
         * chunkId: 1026
         * moduleId: 528155
         */
module.exports = function (module, exports, require) {
  function t(e) {
    var r = {
      as: "keyword",
      do: "keyword",
      else: "keyword",
      end: "keyword",
      exception: "keyword",
      fun: "keyword",
      functor: "keyword",
      if: "keyword",
      in: "keyword",
      include: "keyword",
      let: "keyword",
      of: "keyword",
      open: "keyword",
      rec: "keyword",
      struct: "keyword",
      then: "keyword",
      type: "keyword",
      val: "keyword",
      while: "keyword",
      with: "keyword"
    };
    var o = e.extraWords || {};
    for (var t in o) {
      if (o.hasOwnProperty(t)) {
        r[t] = e.extraWords[t];
      }
    }
    var n = [];
    for (var i in r) {
      n.push(i);
    }
    function d(o, t) {
      var n = o.next();
      if (n === "\"") {
        t.tokenize = y;
        return t.tokenize(o, t);
      }
      if (n === "{" && o.eat("|")) {
        t.longString = true;
        t.tokenize = k;
        return t.tokenize(o, t);
      }
      if (n === "(" && o.match(/^\*(?!\))/)) {
        t.commentLevel++;
        t.tokenize = w;
        return t.tokenize(o, t);
      }
      if (n === "~" || n === "?") {
        o.eatWhile(/\w/);
        return "variableName.special";
      }
      if (n === "`") {
        o.eatWhile(/\w/);
        return "quote";
      }
      if (n === "/" && e.slashComments && o.eat("/")) {
        o.skipToEnd();
        return "comment";
      }
      if (/\d/.test(n)) {
        if (n === "0" && o.eat(/[bB]/)) {
          o.eatWhile(/[01]/);
        }
        if (n === "0" && o.eat(/[xX]/)) {
          o.eatWhile(/[0-9a-fA-F]/);
        }
        if (n === "0" && o.eat(/[oO]/)) {
          o.eatWhile(/[0-7]/);
        } else {
          o.eatWhile(/[\d_]/);
          if (o.eat(".")) {
            o.eatWhile(/[\d]/);
          }
          if (o.eat(/[eE]/)) {
            o.eatWhile(/[\d\-+]/);
          }
        }
        return "number";
      }
      if (/[+\-*&%=<>!?|@\.~:]/.test(n)) {
        return "operator";
      }
      if (/[\w\xa1-\uffff]/.test(n)) {
        o.eatWhile(/[\w\xa1-\uffff]/);
        var i = o.current();
        if (r.hasOwnProperty(i)) {
          return r[i];
        } else {
          return "variable";
        }
      }
      return null;
    }
    function y(e, r) {
      var o;
      var t = false;
      var n = false;
      while ((o = e.next()) != null) {
        if (o === "\"" && !n) {
          t = true;
          break;
        }
        n = !n && o === "\\";
      }
      if (t && !n) {
        r.tokenize = d;
      }
      return "string";
    }
    function w(e, r) {
      var o;
      var t;
      while (r.commentLevel > 0 && (t = e.next()) != null) {
        if (o === "(" && t === "*") {
          r.commentLevel++;
        }
        if (o === "*" && t === ")") {
          r.commentLevel--;
        }
        o = t;
      }
      if (r.commentLevel <= 0) {
        r.tokenize = d;
      }
      return "comment";
    }
    function k(e, r) {
      var o;
      var t;
      while (r.longString && (t = e.next()) != null) {
        if (o === "|" && t === "}") {
          r.longString = false;
        }
        o = t;
      }
      if (!r.longString) {
        r.tokenize = d;
      }
      return "string";
    }
    return {
      startState: function () {
        return {
          tokenize: d,
          commentLevel: 0,
          longString: false
        };
      },
      token: function (e, r) {
        if (e.eatSpace()) {
          return null;
        } else {
          return r.tokenize(e, r);
        }
      },
      languageData: {
        autocomplete: n,
        commentTokens: {
          line: e.slashComments ? "//" : undefined,
          block: {
            open: "(*",
            close: "*)"
          }
        }
      }
    };
  }
  let n = t({
    name: "ocaml",
    extraWords: {
      and: "keyword",
      assert: "keyword",
      begin: "keyword",
      class: "keyword",
      constraint: "keyword",
      done: "keyword",
      downto: "keyword",
      external: "keyword",
      function: "keyword",
      initializer: "keyword",
      lazy: "keyword",
      match: "keyword",
      method: "keyword",
      module: "keyword",
      mutable: "keyword",
      new: "keyword",
      nonrec: "keyword",
      object: "keyword",
      private: "keyword",
      sig: "keyword",
      to: "keyword",
      try: "keyword",
      value: "keyword",
      virtual: "keyword",
      when: "keyword",
      raise: "builtin",
      failwith: "builtin",
      true: "builtin",
      false: "builtin",
      asr: "builtin",
      land: "builtin",
      lor: "builtin",
      lsl: "builtin",
      lsr: "builtin",
      lxor: "builtin",
      mod: "builtin",
      or: "builtin",
      raise_notrace: "builtin",
      trace: "builtin",
      exit: "builtin",
      print_string: "builtin",
      print_endline: "builtin",
      int: "type",
      float: "type",
      bool: "type",
      char: "type",
      string: "type",
      unit: "type",
      List: "builtin"
    }
  });
  let i = t({
    name: "fsharp",
    extraWords: {
      abstract: "keyword",
      assert: "keyword",
      base: "keyword",
      begin: "keyword",
      class: "keyword",
      default: "keyword",
      delegate: "keyword",
      "do!": "keyword",
      done: "keyword",
      downcast: "keyword",
      downto: "keyword",
      elif: "keyword",
      extern: "keyword",
      finally: "keyword",
      for: "keyword",
      function: "keyword",
      global: "keyword",
      inherit: "keyword",
      inline: "keyword",
      interface: "keyword",
      internal: "keyword",
      lazy: "keyword",
      "let!": "keyword",
      match: "keyword",
      member: "keyword",
      module: "keyword",
      mutable: "keyword",
      namespace: "keyword",
      new: "keyword",
      null: "keyword",
      override: "keyword",
      private: "keyword",
      public: "keyword",
      "return!": "keyword",
      return: "keyword",
      select: "keyword",
      static: "keyword",
      to: "keyword",
      try: "keyword",
      upcast: "keyword",
      "use!": "keyword",
      use: "keyword",
      void: "keyword",
      when: "keyword",
      "yield!": "keyword",
      yield: "keyword",
      atomic: "keyword",
      break: "keyword",
      checked: "keyword",
      component: "keyword",
      const: "keyword",
      constraint: "keyword",
      constructor: "keyword",
      continue: "keyword",
      eager: "keyword",
      event: "keyword",
      external: "keyword",
      fixed: "keyword",
      method: "keyword",
      mixin: "keyword",
      object: "keyword",
      parallel: "keyword",
      process: "keyword",
      protected: "keyword",
      pure: "keyword",
      sealed: "keyword",
      tailcall: "keyword",
      trait: "keyword",
      virtual: "keyword",
      volatile: "keyword",
      List: "builtin",
      Seq: "builtin",
      Map: "builtin",
      Set: "builtin",
      Option: "builtin",
      int: "builtin",
      string: "builtin",
      not: "builtin",
      true: "builtin",
      false: "builtin",
      raise: "builtin",
      failwith: "builtin"
    },
    slashComments: true
  });
  let d = t({
    name: "sml",
    extraWords: {
      abstype: "keyword",
      and: "keyword",
      andalso: "keyword",
      case: "keyword",
      datatype: "keyword",
      fn: "keyword",
      handle: "keyword",
      infix: "keyword",
      infixr: "keyword",
      local: "keyword",
      nonfix: "keyword",
      op: "keyword",
      orelse: "keyword",
      raise: "keyword",
      withtype: "keyword",
      eqtype: "keyword",
      sharing: "keyword",
      sig: "keyword",
      signature: "keyword",
      structure: "keyword",
      where: "keyword",
      true: "keyword",
      false: "keyword",
      int: "builtin",
      real: "builtin",
      string: "builtin",
      char: "builtin",
      bool: "builtin"
    },
    slashComments: true
  });
  require.r(exports);
  require.d(exports, {
    fSharp: function () {
      return i;
    },
    oCaml: function () {
      return n;
    },
    sml: function () {
      return d;
    }
  });
}