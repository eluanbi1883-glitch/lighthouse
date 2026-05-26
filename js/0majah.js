function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
/*! (c) Andrea Giammarchi - ISC */
!function(e, t) {
    "use strict";
    "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var n = []
      , i = Object.getPrototypeOf
      , o = n.slice
      , r = n.flat ? function(e) {
        return n.flat.call(e)
    }
    : function(e) {
        return n.concat.apply([], e)
    }
      , a = n.push
      , s = n.indexOf
      , l = {}
      , u = l.toString
      , c = l.hasOwnProperty
      , d = c.toString
      , f = d.call(Object)
      , p = {}
      , h = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , m = function(e) {
        return null != e && e === e.window
    }
      , v = e.document
      , g = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function y(e, t, n) {
        var i, o, r = (n = n || v).createElement("script");
        if (r.text = e,
        t)
            for (i in g)
                (o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r)
    }
    function b(e) {
        return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? l[u.call(e)] || "object" : _typeof(e)
    }
    var w = "3.6.0"
      , C = function e(t, n) {
        return new e.fn.init(t,n)
    };
    function x(e) {
        var t = !!e && "length"in e && e.length
          , n = b(e);
        return !h(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    C.fn = C.prototype = {
        jquery: w,
        constructor: C,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = C.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return C.each(this, e)
        },
        map: function(e) {
            return this.pushStack(C.map(this, (function(t, n) {
                return e.call(t, n, t)
            }
            )))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(C.grep(this, (function(e, t) {
                return (t + 1) % 2
            }
            )))
        },
        odd: function() {
            return this.pushStack(C.grep(this, (function(e, t) {
                return t % 2
            }
            )))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    },
    C.extend = C.fn.extend = function() {
        var e, t, n, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a,
        a = arguments[s] || {},
        s++),
        "object" == _typeof(a) || h(a) || (a = {}),
        s === l && (a = this,
        s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    i = e[t],
                    "__proto__" !== t && a !== i && (u && i && (C.isPlainObject(i) || (o = Array.isArray(i))) ? (n = a[t],
                    r = o && !Array.isArray(n) ? [] : o || C.isPlainObject(n) ? n : {},
                    o = !1,
                    a[t] = C.extend(u, r, i)) : void 0 !== i && (a[t] = i));
        return a
    }
    ,
    C.extend({
        expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = i(e)) && ("function" != typeof (n = c.call(t, "constructor") && t.constructor) || d.call(n) !== f))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            y(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, i = 0;
            if (x(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (x(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                e[o++] = t[i];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, a = !n; o < r; o++)
                !t(e[o], o) !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, a = 0, s = [];
            if (x(e))
                for (i = e.length; a < i; a++)
                    null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e)
                    null != (o = t(e[a], a, n)) && s.push(o);
            return r(s)
        },
        guid: 1,
        support: p
    }),
    "function" == typeof Symbol && (C.fn[Symbol.iterator] = n[Symbol.iterator]),
    C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }
    ));
    var E = function(e) {
        var t, n, i, o, r, a, s, l, u, c, d, f, p, h, m, v, g, y, b, w = "sizzle" + 1 * new Date, C = e.document, x = 0, E = 0, S = le(), k = le(), T = le(), I = le(), _ = function(e, t) {
            return e === t && (d = !0),
            0
        }, P = {}.hasOwnProperty, $ = [], D = $.pop, M = $.push, A = $.push, N = $.slice, L = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", z = "\\[" + R + "*(" + F + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + R + "*\\]", B = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)", H = new RegExp(R + "+","g"), j = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$","g"), q = new RegExp("^" + R + "*," + R + "*"), W = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), U = new RegExp(R + "|>"), V = new RegExp(B), X = new RegExp("^" + F + "$"), Y = {
            ID: new RegExp("^#(" + F + ")"),
            CLASS: new RegExp("^\\.(" + F + ")"),
            TAG: new RegExp("^(" + F + "|[*])"),
            ATTR: new RegExp("^" + z),
            PSEUDO: new RegExp("^" + B),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)","i"),
            bool: new RegExp("^(?:" + O + ")$","i"),
            needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)","i")
        }, Q = /HTML$/i, Z = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, re = function() {
            f()
        }, ae = we((function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }
        ), {
            dir: "parentNode",
            next: "legend"
        });
        try {
            A.apply($ = N.call(C.childNodes), C.childNodes),
            $[C.childNodes.length].nodeType
        } catch (t) {
            A = {
                apply: $.length ? function(e, t) {
                    M.apply(e, N.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(e, t, i, o) {
            var r, s, u, c, d, h, g, y = t && t.ownerDocument, C = t ? t.nodeType : 9;
            if (i = i || [],
            "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C)
                return i;
            if (!o && (f(t),
            t = t || p,
            m)) {
                if (11 !== C && (d = J.exec(e)))
                    if (r = d[1]) {
                        if (9 === C) {
                            if (!(u = t.getElementById(r)))
                                return i;
                            if (u.id === r)
                                return i.push(u),
                                i
                        } else if (y && (u = y.getElementById(r)) && b(t, u) && u.id === r)
                            return i.push(u),
                            i
                    } else {
                        if (d[2])
                            return A.apply(i, t.getElementsByTagName(e)),
                            i;
                        if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return A.apply(i, t.getElementsByClassName(r)),
                            i
                    }
                if (n.qsa && !I[e + " "] && (!v || !v.test(e)) && (1 !== C || "object" !== t.nodeName.toLowerCase())) {
                    if (g = e,
                    y = t,
                    1 === C && (U.test(e) || W.test(e))) {
                        for ((y = ee.test(e) && ge(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(ie, oe) : t.setAttribute("id", c = w)),
                        s = (h = a(e)).length; s--; )
                            h[s] = (c ? "#" + c : ":scope") + " " + be(h[s]);
                        g = h.join(",")
                    }
                    try {
                        return A.apply(i, y.querySelectorAll(g)),
                        i
                    } catch (t) {
                        I(e, !0)
                    } finally {
                        c === w && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(j, "$1"), t, i, o)
        }
        function le() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                t[n + " "] = o
            }
        }
        function ue(e) {
            return e[w] = !0,
            e
        }
        function ce(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function de(e, t) {
            for (var n = e.split("|"), o = n.length; o--; )
                i.attrHandle[n[o]] = t
        }
        function fe(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function pe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function he(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function me(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function ve(e) {
            return ue((function(t) {
                return t = +t,
                ue((function(n, i) {
                    for (var o, r = e([], n.length, t), a = r.length; a--; )
                        n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                }
                ))
            }
            ))
        }
        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {},
        r = se.isXML = function(e) {
            var t = e && e.namespaceURI
              , n = e && (e.ownerDocument || e).documentElement;
            return !Q.test(t || n && n.nodeName || "HTML")
        }
        ,
        f = se.setDocument = function(e) {
            var t, o, a = e ? e.ownerDocument || e : C;
            return a != p && 9 === a.nodeType && a.documentElement && (h = (p = a).documentElement,
            m = !r(p),
            C != p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)),
            n.scope = ce((function(e) {
                return h.appendChild(e).appendChild(p.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }
            )),
            n.attributes = ce((function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }
            )),
            n.getElementsByTagName = ce((function(e) {
                return e.appendChild(p.createComment("")),
                !e.getElementsByTagName("*").length
            }
            )),
            n.getElementsByClassName = G.test(p.getElementsByClassName),
            n.getById = ce((function(e) {
                return h.appendChild(e).id = w,
                !p.getElementsByName || !p.getElementsByName(w).length
            }
            )),
            n.getById ? (i.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && m) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (i.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && m) {
                    var n, i, o, r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r];
                        for (o = t.getElementsByName(e),
                        i = 0; r = o[i++]; )
                            if ((n = r.getAttributeNode("id")) && n.value === e)
                                return [r]
                    }
                    return []
                }
            }
            ),
            i.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }
            ,
            i.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && m)
                    return t.getElementsByClassName(e)
            }
            ,
            g = [],
            v = [],
            (n.qsa = G.test(p.querySelectorAll)) && (ce((function(e) {
                var t;
                h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + O + ")"),
                e.querySelectorAll("[id~=" + w + "-]").length || v.push("~="),
                (t = p.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || v.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + w + "+*").length || v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]")
            }
            )),
            ce((function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = p.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                h.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            }
            ))),
            (n.matchesSelector = G.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce((function(e) {
                n.disconnectedMatch = y.call(e, "*"),
                y.call(e, "[s!='']:x"),
                g.push("!=", B)
            }
            )),
            v = v.length && new RegExp(v.join("|")),
            g = g.length && new RegExp(g.join("|")),
            t = G.test(h.compareDocumentPosition),
            b = t || G.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            _ = t ? function(e, t) {
                if (e === t)
                    return d = !0,
                    0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == p || e.ownerDocument == C && b(C, e) ? -1 : t == p || t.ownerDocument == C && b(C, t) ? 1 : c ? L(c, e) - L(c, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return d = !0,
                    0;
                var n, i = 0, o = e.parentNode, r = t.parentNode, a = [e], s = [t];
                if (!o || !r)
                    return e == p ? -1 : t == p ? 1 : o ? -1 : r ? 1 : c ? L(c, e) - L(c, t) : 0;
                if (o === r)
                    return fe(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[i] === s[i]; )
                    i++;
                return i ? fe(a[i], s[i]) : a[i] == C ? -1 : s[i] == C ? 1 : 0
            }
            ),
            p
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (f(e),
            n.matchesSelector && m && !I[t + " "] && (!g || !g.test(t)) && (!v || !v.test(t)))
                try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (e) {
                    I(t, !0)
                }
            return 0 < se(t, p, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != p && f(e),
            b(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != p && f(e);
            var o = i.attrHandle[t.toLowerCase()]
              , r = o && P.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
            return void 0 !== r ? r : n.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(ie, oe)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, i = [], o = 0, r = 0;
            if (d = !n.detectDuplicates,
            c = !n.sortStable && e.slice(0),
            e.sort(_),
            d) {
                for (; t = e[r++]; )
                    t === e[r] && (o = i.push(r));
                for (; o--; )
                    e.splice(i[o], 1)
            }
            return c = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += o(t);
            return n
        }
        ,
        (i = se.selectors = {
            cacheLength: 50,
            createPseudo: ue,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = S[e + " "];
                    return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && S(e, (function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    }
                    ))
                },
                ATTR: function(e, t, n) {
                    return function(i) {
                        var o = se.attr(i, e);
                        return null == o ? "!=" === t : !t || (o += "",
                        "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && -1 < o.indexOf(n) : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? -1 < (" " + o.replace(H, " ") + " ").indexOf(n) : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var u, c, d, f, p, h, m = r !== a ? "nextSibling" : "previousSibling", v = t.parentNode, g = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
                        if (v) {
                            if (r) {
                                for (; m; ) {
                                    for (f = t; f = f[m]; )
                                        if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType)
                                            return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild],
                            a && y) {
                                for (b = (p = (u = (c = (d = (f = v)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === x && u[1]) && u[2],
                                f = p && v.childNodes[p]; f = ++p && f && f[m] || (b = p = 0) || h.pop(); )
                                    if (1 === f.nodeType && ++b && f === t) {
                                        c[e] = [x, p, b];
                                        break
                                    }
                            } else if (y && (b = p = (u = (c = (d = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === x && u[1]),
                            !1 === b)
                                for (; (f = ++p && f && f[m] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++b || (y && ((c = (d = f[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [x, b]),
                                f !== t)); )
                                    ;
                            return (b -= o) === i || b % i == 0 && 0 <= b / i
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return o[w] ? o(t) : 1 < o.length ? (n = [e, e, "", t],
                    i.setFilters.hasOwnProperty(e.toLowerCase()) ? ue((function(e, n) {
                        for (var i, r = o(e, t), a = r.length; a--; )
                            e[i = L(e, r[a])] = !(n[i] = r[a])
                    }
                    )) : function(e) {
                        return o(e, 0, n)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: ue((function(e) {
                    var t = []
                      , n = []
                      , i = s(e.replace(j, "$1"));
                    return i[w] ? ue((function(e, t, n, o) {
                        for (var r, a = i(e, null, o, []), s = e.length; s--; )
                            (r = a[s]) && (e[s] = !(t[s] = r))
                    }
                    )) : function(e, o, r) {
                        return t[0] = e,
                        i(t, null, r, n),
                        t[0] = null,
                        !n.pop()
                    }
                }
                )),
                has: ue((function(e) {
                    return function(t) {
                        return 0 < se(e, t).length
                    }
                }
                )),
                contains: ue((function(e) {
                    return e = e.replace(te, ne),
                    function(t) {
                        return -1 < (t.textContent || o(t)).indexOf(e)
                    }
                }
                )),
                lang: ue((function(e) {
                    return X.test(e || "") || se.error("unsupported lang: " + e),
                    e = e.replace(te, ne).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }
                )),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !i.pseudos.empty(e)
                },
                header: function(e) {
                    return K.test(e.nodeName)
                },
                input: function(e) {
                    return Z.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve((function() {
                    return [0]
                }
                )),
                last: ve((function(e, t) {
                    return [t - 1]
                }
                )),
                eq: ve((function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }
                )),
                even: ve((function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                odd: ve((function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                lt: ve((function(e, t, n) {
                    for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; )
                        e.push(i);
                    return e
                }
                )),
                gt: ve((function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                }
                ))
            }
        }).pseudos.nth = i.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            i.pseudos[t] = pe(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            i.pseudos[t] = he(t);
        function ye() {}
        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function we(e, t, n) {
            var i = t.dir
              , o = t.next
              , r = o || i
              , a = n && "parentNode" === r
              , s = E++;
            return t.first ? function(t, n, o) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || a)
                        return e(t, n, o);
                return !1
            }
            : function(t, n, l) {
                var u, c, d, f = [x, s];
                if (l) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || a) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || a)
                            if (c = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}),
                            o && o === t.nodeName.toLowerCase())
                                t = t[i] || t;
                            else {
                                if ((u = c[r]) && u[0] === x && u[1] === s)
                                    return f[2] = u[2];
                                if ((c[r] = f)[2] = e(t, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function Ce(e) {
            return 1 < e.length ? function(t, n, i) {
                for (var o = e.length; o--; )
                    if (!e[o](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function xe(e, t, n, i, o) {
            for (var r, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
                (r = e[s]) && (n && !n(r, i, o) || (a.push(r),
                u && t.push(s)));
            return a
        }
        function Ee(e, t, n, i, o, r) {
            return i && !i[w] && (i = Ee(i)),
            o && !o[w] && (o = Ee(o, r)),
            ue((function(r, a, s, l) {
                var u, c, d, f = [], p = [], h = a.length, m = r || function(e, t, n) {
                    for (var i = 0, o = t.length; i < o; i++)
                        se(e, t[i], n);
                    return n
                }(t || "*", s.nodeType ? [s] : s, []), v = !e || !r && t ? m : xe(m, f, e, s, l), g = n ? o || (r ? e : h || i) ? [] : a : v;
                if (n && n(v, g, s, l),
                i)
                    for (u = xe(g, p),
                    i(u, [], s, l),
                    c = u.length; c--; )
                        (d = u[c]) && (g[p[c]] = !(v[p[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [],
                            c = g.length; c--; )
                                (d = g[c]) && u.push(v[c] = d);
                            o(null, g = [], u, l)
                        }
                        for (c = g.length; c--; )
                            (d = g[c]) && -1 < (u = o ? L(r, d) : f[c]) && (r[u] = !(a[u] = d))
                    }
                } else
                    g = xe(g === a ? g.splice(h, g.length) : g),
                    o ? o(null, a, g, l) : A.apply(a, g)
            }
            ))
        }
        function Se(e) {
            for (var t, n, o, r = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, c = we((function(e) {
                return e === t
            }
            ), s, !0), d = we((function(e) {
                return -1 < L(t, e)
            }
            ), s, !0), f = [function(e, n, i) {
                var o = !a && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : d(e, n, i));
                return t = null,
                o
            }
            ]; l < r; l++)
                if (n = i.relative[e[l].type])
                    f = [we(Ce(f), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (o = ++l; o < r && !i.relative[e[o].type]; o++)
                            ;
                        return Ee(1 < l && Ce(f), 1 < l && be(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(j, "$1"), n, l < o && Se(e.slice(l, o)), o < r && Se(e = e.slice(o)), o < r && be(e))
                    }
                    f.push(n)
                }
            return Ce(f)
        }
        return ye.prototype = i.filters = i.pseudos,
        i.setFilters = new ye,
        a = se.tokenize = function(e, t) {
            var n, o, r, a, s, l, u, c = k[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (s = e,
            l = [],
            u = i.preFilter; s; ) {
                for (a in n && !(o = q.exec(s)) || (o && (s = s.slice(o[0].length) || s),
                l.push(r = [])),
                n = !1,
                (o = W.exec(s)) && (n = o.shift(),
                r.push({
                    value: n,
                    type: o[0].replace(j, " ")
                }),
                s = s.slice(n.length)),
                i.filter)
                    !(o = Y[a].exec(s)) || u[a] && !(o = u[a](o)) || (n = o.shift(),
                    r.push({
                        value: n,
                        type: a,
                        matches: o
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? se.error(e) : k(e, l).slice(0)
        }
        ,
        s = se.compile = function(e, t) {
            var n, o, r, s, l, c, d = [], h = [], v = T[e + " "];
            if (!v) {
                for (t || (t = a(e)),
                n = t.length; n--; )
                    (v = Se(t[n]))[w] ? d.push(v) : h.push(v);
                (v = T(e, (o = h,
                s = 0 < (r = d).length,
                l = 0 < o.length,
                c = function(e, t, n, a, c) {
                    var d, h, v, g = 0, y = "0", b = e && [], w = [], C = u, E = e || l && i.find.TAG("*", c), S = x += null == C ? 1 : Math.random() || .1, k = E.length;
                    for (c && (u = t == p || t || c); y !== k && null != (d = E[y]); y++) {
                        if (l && d) {
                            for (h = 0,
                            t || d.ownerDocument == p || (f(d),
                            n = !m); v = o[h++]; )
                                if (v(d, t || p, n)) {
                                    a.push(d);
                                    break
                                }
                            c && (x = S)
                        }
                        s && ((d = !v && d) && g--,
                        e && b.push(d))
                    }
                    if (g += y,
                    s && y !== g) {
                        for (h = 0; v = r[h++]; )
                            v(b, w, t, n);
                        if (e) {
                            if (0 < g)
                                for (; y--; )
                                    b[y] || w[y] || (w[y] = D.call(a));
                            w = xe(w)
                        }
                        A.apply(a, w),
                        c && !e && 0 < w.length && 1 < g + r.length && se.uniqueSort(a)
                    }
                    return c && (x = S,
                    u = C),
                    b
                }
                ,
                s ? ue(c) : c))).selector = e
            }
            return v
        }
        ,
        l = se.select = function(e, t, n, o) {
            var r, l, u, c, d, f = "function" == typeof e && e, p = !o && a(e = f.selector || e);
            if (n = n || [],
            1 === p.length) {
                if (2 < (l = p[0] = p[0].slice(0)).length && "ID" === (u = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    f && (t = t.parentNode),
                    e = e.slice(l.shift().value.length)
                }
                for (r = Y.needsContext.test(e) ? 0 : l.length; r-- && (u = l[r],
                !i.relative[c = u.type]); )
                    if ((d = i.find[c]) && (o = d(u.matches[0].replace(te, ne), ee.test(l[0].type) && ge(t.parentNode) || t))) {
                        if (l.splice(r, 1),
                        !(e = o.length && be(l)))
                            return A.apply(n, o),
                            n;
                        break
                    }
            }
            return (f || s(e, p))(o, t, !m, n, !t || ee.test(e) && ge(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = w.split("").sort(_).join("") === w,
        n.detectDuplicates = !!d,
        f(),
        n.sortDetached = ce((function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        }
        )),
        ce((function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }
        )) || de("type|href|height|width", (function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }
        )),
        n.attributes && ce((function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }
        )) || de("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }
        )),
        ce((function(e) {
            return null == e.getAttribute("disabled")
        }
        )) || de(O, (function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        )),
        se
    }(e);
    C.find = E,
    (C.expr = E.selectors)[":"] = C.expr.pseudos,
    C.uniqueSort = C.unique = E.uniqueSort,
    C.text = E.getText,
    C.isXMLDoc = E.isXML,
    C.contains = E.contains,
    C.escapeSelector = E.escape;
    var S = function(e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && C(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , k = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , T = C.expr.match.needsContext;
    function I(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var _ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function P(e, t, n) {
        return h(t) ? C.grep(e, (function(e, i) {
            return !!t.call(e, i, e) !== n
        }
        )) : t.nodeType ? C.grep(e, (function(e) {
            return e === t !== n
        }
        )) : "string" != typeof t ? C.grep(e, (function(e) {
            return -1 < s.call(t, e) !== n
        }
        )) : C.filter(t, e, n)
    }
    C.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, (function(e) {
            return 1 === e.nodeType
        }
        )))
    }
    ,
    C.fn.extend({
        find: function(e) {
            var t, n, i = this.length, o = this;
            if ("string" != typeof e)
                return this.pushStack(C(e).filter((function() {
                    for (t = 0; t < i; t++)
                        if (C.contains(o[t], this))
                            return !0
                }
                )));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                C.find(e, o[t], n);
            return 1 < i ? C.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(P(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(P(this, e || [], !0))
        },
        is: function(e) {
            return !!P(this, "string" == typeof e && T.test(e) ? C(e) : e || [], !1).length
        }
    });
    var $, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function(e, t, n) {
        var i, o;
        if (!e)
            return this;
        if (n = n || $,
        "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : D.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof C ? t[0] : t,
                C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : v, !0)),
                _.test(i[1]) && C.isPlainObject(t))
                    for (i in t)
                        h(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = v.getElementById(i[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
    }
    ).prototype = C.fn,
    $ = C(v);
    var M = /^(?:parents|prev(?:Until|All))/
      , A = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function N(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    C.fn.extend({
        has: function(e) {
            var t = C(e, this)
              , n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (C.contains(this, t[e]))
                        return !0
            }
            ))
        },
        closest: function(e, t) {
            var n, i = 0, o = this.length, r = [], a = "string" != typeof e && C(e);
            if (!T.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(1 < r.length ? C.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(C(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    C.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return S(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return S(e, "parentNode", n)
        },
        next: function(e) {
            return N(e, "nextSibling")
        },
        prev: function(e) {
            return N(e, "previousSibling")
        },
        nextAll: function(e) {
            return S(e, "nextSibling")
        },
        prevAll: function(e) {
            return S(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return S(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return S(e, "previousSibling", n)
        },
        siblings: function(e) {
            return k((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return k(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (I(e, "template") && (e = e.content || e),
            C.merge([], e.childNodes))
        }
    }, (function(e, t) {
        C.fn[e] = function(n, i) {
            var o = C.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (o = C.filter(i, o)),
            1 < this.length && (A[e] || C.uniqueSort(o),
            M.test(e) && o.reverse()),
            this.pushStack(o)
        }
    }
    ));
    var L = /[^\x20\t\r\n\f]+/g;
    function O(e) {
        return e
    }
    function R(e) {
        throw e
    }
    function F(e, t, n, i) {
        var o;
        try {
            e && h(o = e.promise) ? o.call(e).done(t).fail(n) : e && h(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    C.Callbacks = function(e) {
        var t;
        e = "string" == typeof e ? (t = {},
        C.each(e.match(L) || [], (function(e, n) {
            t[n] = !0
        }
        )),
        t) : C.extend({}, e);
        var n, i, o, r, a = [], s = [], l = -1, u = function() {
            for (r = r || e.once,
            o = n = !0; s.length; l = -1)
                for (i = s.shift(); ++l < a.length; )
                    !1 === a[l].apply(i[0], i[1]) && e.stopOnFalse && (l = a.length,
                    i = !1);
            e.memory || (i = !1),
            n = !1,
            r && (a = i ? [] : "")
        }, c = {
            add: function() {
                return a && (i && !n && (l = a.length - 1,
                s.push(i)),
                function t(n) {
                    C.each(n, (function(n, i) {
                        h(i) ? e.unique && c.has(i) || a.push(i) : i && i.length && "string" !== b(i) && t(i)
                    }
                    ))
                }(arguments),
                i && !n && u()),
                this
            },
            remove: function() {
                return C.each(arguments, (function(e, t) {
                    for (var n; -1 < (n = C.inArray(t, a, n)); )
                        a.splice(n, 1),
                        n <= l && l--
                }
                )),
                this
            },
            has: function(e) {
                return e ? -1 < C.inArray(e, a) : 0 < a.length
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return r = s = [],
                a = i = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return r = s = [],
                i || n || (a = i = ""),
                this
            },
            locked: function() {
                return !!r
            },
            fireWith: function(e, t) {
                return r || (t = [e, (t = t || []).slice ? t.slice() : t],
                s.push(t),
                n || u()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return c
    }
    ,
    C.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , o = {
                state: function() {
                    return i
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return o.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return C.Deferred((function(t) {
                        C.each(n, (function(n, i) {
                            var o = h(e[i[4]]) && e[i[4]];
                            r[i[1]]((function() {
                                var e = o && o.apply(this, arguments);
                                e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                            }
                            ))
                        }
                        )),
                        e = null
                    }
                    )).promise()
                },
                then: function(t, i, o) {
                    var r = 0;
                    function a(t, n, i, o) {
                        return function() {
                            var s = this
                              , l = arguments
                              , u = function() {
                                var e, u;
                                if (!(t < r)) {
                                    if ((e = i.apply(s, l)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    u = e && ("object" == _typeof(e) || "function" == typeof e) && e.then,
                                    h(u) ? o ? u.call(e, a(r, n, O, o), a(r, n, R, o)) : (r++,
                                    u.call(e, a(r, n, O, o), a(r, n, R, o), a(r, n, O, n.notifyWith))) : (i !== O && (s = void 0,
                                    l = [e]),
                                    (o || n.resolveWith)(s, l))
                                }
                            }
                              , c = o ? u : function() {
                                try {
                                    u()
                                } catch (e) {
                                    C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, c.stackTrace),
                                    r <= t + 1 && (i !== R && (s = void 0,
                                    l = [e]),
                                    n.rejectWith(s, l))
                                }
                            }
                            ;
                            t ? c() : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()),
                            e.setTimeout(c))
                        }
                    }
                    return C.Deferred((function(e) {
                        n[0][3].add(a(0, e, h(o) ? o : O, e.notifyWith)),
                        n[1][3].add(a(0, e, h(t) ? t : O)),
                        n[2][3].add(a(0, e, h(i) ? i : R))
                    }
                    )).promise()
                },
                promise: function(e) {
                    return null != e ? C.extend(e, o) : o
                }
            }
              , r = {};
            return C.each(n, (function(e, t) {
                var a = t[2]
                  , s = t[5];
                o[t[1]] = a.add,
                s && a.add((function() {
                    i = s
                }
                ), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                a.add(t[3].fire),
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments),
                    this
                }
                ,
                r[t[0] + "With"] = a.fireWith
            }
            )),
            o.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , i = Array(n)
              , r = o.call(arguments)
              , a = C.Deferred()
              , s = function(e) {
                return function(n) {
                    i[e] = this,
                    r[e] = 1 < arguments.length ? o.call(arguments) : n,
                    --t || a.resolveWith(i, r)
                }
            };
            if (t <= 1 && (F(e, a.done(s(n)).resolve, a.reject, !t),
            "pending" === a.state() || h(r[n] && r[n].then)))
                return a.then();
            for (; n--; )
                F(r[n], s(n), a.reject);
            return a.promise()
        }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && z.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    C.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }
        ))
    }
    ;
    var B = C.Deferred();
    function H() {
        v.removeEventListener("DOMContentLoaded", H),
        e.removeEventListener("load", H),
        C.ready()
    }
    C.fn.ready = function(e) {
        return B.then(e).catch((function(e) {
            C.readyException(e)
        }
        )),
        this
    }
    ,
    C.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || B.resolveWith(v, [C])
        }
    }),
    C.ready.then = B.then,
    "complete" === v.readyState || "loading" !== v.readyState && !v.documentElement.doScroll ? e.setTimeout(C.ready) : (v.addEventListener("DOMContentLoaded", H),
    e.addEventListener("load", H));
    var j = function e(t, n, i, o, r, a, s) {
        var l = 0
          , u = t.length
          , c = null == i;
        if ("object" === b(i))
            for (l in r = !0,
            i)
                e(t, n, l, i[l], !0, a, s);
        else if (void 0 !== o && (r = !0,
        h(o) || (s = !0),
        c && (s ? (n.call(t, o),
        n = null) : (c = n,
        n = function(e, t, n) {
            return c.call(C(e), n)
        }
        )),
        n))
            for (; l < u; l++)
                n(t[l], i, s ? o : o.call(t[l], l, n(t[l], i)));
        return r ? t : c ? n.call(t) : u ? n(t[0], i) : a
    }
      , q = /^-ms-/
      , W = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function V(e) {
        return e.replace(q, "ms-").replace(W, U)
    }
    var X = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Y() {
        this.expando = C.expando + Y.uid++
    }
    Y.uid = 1,
    Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t)
                o[V(t)] = n;
            else
                for (i in t)
                    o[V(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t))in i ? [t] : t.match(L) || []).length;
                    for (; n--; )
                        delete i[t[n]]
                }
                (void 0 === t || C.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t)
        }
    };
    var Q = new Y
      , Z = new Y
      , K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , G = /[A-Z]/g;
    function J(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(G, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : K.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                Z.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    C.extend({
        hasData: function(e) {
            return Z.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return Z.access(e, t, n)
        },
        removeData: function(e, t) {
            Z.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }),
    C.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0], a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = Z.get(r),
                1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = V(i.slice(5)),
                        J(r, i, o[i]));
                    Q.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == _typeof(e) ? this.each((function() {
                Z.set(this, e)
            }
            )) : j(this, (function(t) {
                var n;
                if (r && void 0 === t)
                    return void 0 !== (n = Z.get(r, e)) || void 0 !== (n = J(r, e)) ? n : void 0;
                this.each((function() {
                    Z.set(this, e, t)
                }
                ))
            }
            ), null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                Z.remove(this, e)
            }
            ))
        }
    }),
    C.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = Q.get(e, t),
                n && (!i || Array.isArray(n) ? i = Q.access(e, t, C.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            var n = C.queue(e, t = t || "fx")
              , i = n.length
              , o = n.shift()
              , r = C._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(),
            i--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(e, (function() {
                C.dequeue(e, t)
            }
            ), r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: C.Callbacks("once memory").add((function() {
                    Q.remove(e, [t + "queue", n])
                }
                ))
            })
        }
    }),
    C.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = C.queue(this, e, t);
                C._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
            }
            ))
        },
        dequeue: function(e) {
            return this.each((function() {
                C.dequeue(this, e)
            }
            ))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, o = C.Deferred(), r = this, a = this.length, s = function() {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = Q.get(r[a], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(s));
            return s(),
            o.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , ie = v.documentElement
      , oe = function(e) {
        return C.contains(e.ownerDocument, e)
    }
      , re = {
        composed: !0
    };
    ie.getRootNode && (oe = function(e) {
        return C.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === C.css(e, "display")
    };
    function se(e, t, n, i) {
        var o, r, a = 20, s = i ? function() {
            return i.cur()
        }
        : function() {
            return C.css(e, t, "")
        }
        , l = s(), u = n && n[3] || (C.cssNumber[t] ? "" : "px"), c = e.nodeType && (C.cssNumber[t] || "px" !== u && +l) && te.exec(C.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2,
            u = u || c[3],
            c = +l || 1; a--; )
                C.style(e, t, c + u),
                (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0),
                c /= r;
            C.style(e, t, (c *= 2) + u),
            n = n || []
        }
        return n && (c = +c || +l || 0,
        o = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = u,
        i.start = c,
        i.end = o)),
        o
    }
    var le = {};
    function ue(e, t) {
        for (var n, i, o, r, a, s, l, u = [], c = 0, d = e.length; c < d; c++)
            (i = e[c]).style && (n = i.style.display,
            t ? ("none" === n && (u[c] = Q.get(i, "display") || null,
            u[c] || (i.style.display = "")),
            "" === i.style.display && ae(i) && (u[c] = (l = a = r = void 0,
            a = (o = i).ownerDocument,
            s = o.nodeName,
            (l = le[s]) || (r = a.body.appendChild(a.createElement(s)),
            l = C.css(r, "display"),
            r.parentNode.removeChild(r),
            "none" === l && (l = "block"),
            le[s] = l)))) : "none" !== n && (u[c] = "none",
            Q.set(i, "display", n)));
        for (c = 0; c < d; c++)
            null != u[c] && (e[c].style.display = u[c]);
        return e
    }
    C.fn.extend({
        show: function() {
            return ue(this, !0)
        },
        hide: function() {
            return ue(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                ae(this) ? C(this).show() : C(this).hide()
            }
            ))
        }
    });
    var ce, de, fe = /^(?:checkbox|radio)$/i, pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = v.createDocumentFragment().appendChild(v.createElement("div")),
    (de = v.createElement("input")).setAttribute("type", "radio"),
    de.setAttribute("checked", "checked"),
    de.setAttribute("name", "t"),
    ce.appendChild(de),
    p.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    p.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    p.option = !!ce.lastChild;
    var me = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && I(e, t) ? C.merge([e], n) : n
    }
    function ge(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    me.tbody = me.tfoot = me.colgroup = me.caption = me.thead,
    me.th = me.td,
    p.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/;
    function be(e, t, n, i, o) {
        for (var r, a, s, l, u, c, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
            if ((r = e[p]) || 0 === r)
                if ("object" === b(r))
                    C.merge(f, r.nodeType ? [r] : r);
                else if (ye.test(r)) {
                    for (a = a || d.appendChild(t.createElement("div")),
                    s = (pe.exec(r) || ["", ""])[1].toLowerCase(),
                    l = me[s] || me._default,
                    a.innerHTML = l[1] + C.htmlPrefilter(r) + l[2],
                    c = l[0]; c--; )
                        a = a.lastChild;
                    C.merge(f, a.childNodes),
                    (a = d.firstChild).textContent = ""
                } else
                    f.push(t.createTextNode(r));
        for (d.textContent = "",
        p = 0; r = f[p++]; )
            if (i && -1 < C.inArray(r, i))
                o && o.push(r);
            else if (u = oe(r),
            a = ve(d.appendChild(r), "script"),
            u && ge(a),
            n)
                for (c = 0; r = a[c++]; )
                    he.test(r.type || "") && n.push(r);
        return d
    }
    var we = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0
    }
    function xe() {
        return !1
    }
    function Ee(e, t) {
        return e === function() {
            try {
                return v.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Se(e, t, n, i, o, r) {
        var a, s;
        if ("object" == _typeof(t)) {
            for (s in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                Se(e, s, n, i, t[s], r);
            return e
        }
        if (null == i && null == o ? (o = n,
        i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
        i = void 0) : (o = i,
        i = n,
        n = void 0)),
        !1 === o)
            o = xe;
        else if (!o)
            return e;
        return 1 === r && (a = o,
        (o = function(e) {
            return C().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = C.guid++)),
        e.each((function() {
            C.event.add(this, t, o, i, n)
        }
        ))
    }
    function ke(e, t, n) {
        n ? (Q.set(e, t, !1),
        C.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var i, r, a = Q.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)
                        (C.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = o.call(arguments),
                    Q.set(this, t, a),
                    i = n(this, t),
                    this[t](),
                    a !== (r = Q.get(this, t)) || i ? Q.set(this, t, !1) : r = {},
                    a !== r)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        r && r.value
                } else
                    a.length && (Q.set(this, t, {
                        value: C.event.trigger(C.extend(a[0], C.Event.prototype), a.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, t) && C.event.add(e, t, Ce)
    }
    C.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, a, s, l, u, c, d, f, p, h, m, v = Q.get(e);
            if (X(e))
                for (n.handler && (n = (r = n).handler,
                o = r.selector),
                o && C.find.matchesSelector(ie, o),
                n.guid || (n.guid = C.guid++),
                (l = v.events) || (l = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(t) {
                    return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                u = (t = (t || "").match(L) || [""]).length; u--; )
                    p = m = (s = we.exec(t[u]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p && (d = C.event.special[p] || {},
                    p = (o ? d.delegateType : d.bindType) || p,
                    d = C.event.special[p] || {},
                    c = C.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && C.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, r),
                    (f = l[p]) || ((f = l[p] = []).delegateCount = 0,
                    d.setup && !1 !== d.setup.call(e, i, h, a) || e.addEventListener && e.addEventListener(p, a)),
                    d.add && (d.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    o ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                    C.event.global[p] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, a, s, l, u, c, d, f, p, h, m, v = Q.hasData(e) && Q.get(e);
            if (v && (l = v.events)) {
                for (u = (t = (t || "").match(L) || [""]).length; u--; )
                    if (p = m = (s = we.exec(t[u]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (d = C.event.special[p] || {},
                        f = l[p = (i ? d.delegateType : d.bindType) || p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = r = f.length; r--; )
                            c = f[r],
                            !o && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(r, 1),
                            c.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, c));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, v.handle) || C.removeEvent(e, p, v.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            C.event.remove(e, p + t[u], n, i, !0);
                C.isEmptyObject(l) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, a, s = new Array(arguments.length), l = C.event.fix(e), u = (Q.get(this, "events") || Object.create(null))[l.type] || [], c = C.event.special[l.type] || {};
            for (s[0] = l,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (l.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                for (a = C.event.handlers.call(this, l, u),
                t = 0; (o = a[t++]) && !l.isPropagationStopped(); )
                    for (l.currentTarget = o.elem,
                    n = 0; (r = o.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                        l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r,
                        l.data = r.data,
                        void 0 !== (i = ((C.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) && !1 === (l.result = i) && (l.preventDefault(),
                        l.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, l),
                l.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, a, s = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (r = [],
                        a = {},
                        n = 0; n < l; n++)
                            void 0 === a[o = (i = t[n]).selector + " "] && (a[o] = i.needsContext ? -1 < C(o, this).index(u) : C.find(o, this, null, [u]).length),
                            a[o] && r.push(i);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return u = this,
            l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(C.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[C.expando] ? e : new C.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && I(t, "input") && ke(t, "click", Ce),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && I(t, "input") && ke(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return fe.test(t.type) && t.click && I(t, "input") && Q.get(t, "click") || I(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    C.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    (C.Event = function(e, t) {
        if (!(this instanceof C.Event))
            return new C.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : xe,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && C.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[C.expando] = !0
    }
    ).prototype = {
        constructor: C.Event,
        isDefaultPrevented: xe,
        isPropagationStopped: xe,
        isImmediatePropagationStopped: xe,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    C.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, C.event.addProp),
    C.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        C.event.special[e] = {
            setup: function() {
                return ke(this, e, Ee),
                !1
            },
            trigger: function() {
                return ke(this, e),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }
    )),
    C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        C.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget, o = e.handleObj;
                return i && (i === this || C.contains(this, i)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }
    )),
    C.fn.extend({
        on: function(e, t, n, i) {
            return Se(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Se(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == _typeof(e)) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = xe),
            this.each((function() {
                C.event.remove(this, e, n, t)
            }
            ))
        }
    });
    var Te = /<script|<style|<link/i
      , Ie = /checked\s*(?:[^=]|=\s*.checked.)/i
      , _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Pe(e, t) {
        return I(e, "table") && I(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
    }
    function $e(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function De(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Me(e, t) {
        var n, i, o, r, a, s;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (s = Q.get(e).events))
                for (o in Q.remove(t, "handle events"),
                s)
                    for (n = 0,
                    i = s[o].length; n < i; n++)
                        C.event.add(t, o, s[o][n]);
            Z.hasData(e) && (r = Z.access(e),
            a = C.extend({}, r),
            Z.set(t, a))
        }
    }
    function Ae(e, t, n, i) {
        t = r(t);
        var o, a, s, l, u, c, d = 0, f = e.length, m = f - 1, v = t[0], g = h(v);
        if (g || 1 < f && "string" == typeof v && !p.checkClone && Ie.test(v))
            return e.each((function(o) {
                var r = e.eq(o);
                g && (t[0] = v.call(this, o, r.html())),
                Ae(r, t, n, i)
            }
            ));
        if (f && (a = (o = be(t, e[0].ownerDocument, !1, e, i)).firstChild,
        1 === o.childNodes.length && (o = a),
        a || i)) {
            for (l = (s = C.map(ve(o, "script"), $e)).length; d < f; d++)
                u = o,
                d !== m && (u = C.clone(u, !0, !0),
                l && C.merge(s, ve(u, "script"))),
                n.call(e[d], u, d);
            if (l)
                for (c = s[s.length - 1].ownerDocument,
                C.map(s, De),
                d = 0; d < l; d++)
                    u = s[d],
                    he.test(u.type || "") && !Q.access(u, "globalEval") && C.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? C._evalUrl && !u.noModule && C._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, c) : y(u.textContent.replace(_e, ""), u, c))
        }
        return e
    }
    function Ne(e, t, n) {
        for (var i, o = t ? C.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || C.cleanData(ve(i)),
            i.parentNode && (n && oe(i) && ge(ve(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    C.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var i, o, r, a, s, l, u, c = e.cloneNode(!0), d = oe(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (a = ve(c),
                i = 0,
                o = (r = ve(e)).length; i < o; i++)
                    s = r[i],
                    "input" === (u = (l = a[i]).nodeName.toLowerCase()) && fe.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (r = r || ve(e),
                    a = a || ve(c),
                    i = 0,
                    o = r.length; i < o; i++)
                        Me(r[i], a[i]);
                else
                    Me(e, c);
            return 0 < (a = ve(c, "script")).length && ge(a, !d && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, i, o = C.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (X(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (i in t.events)
                                o[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[Z.expando] && (n[Z.expando] = void 0)
                }
        }
    }),
    C.fn.extend({
        detach: function(e) {
            return Ne(this, e, !0)
        },
        remove: function(e) {
            return Ne(this, e)
        },
        text: function(e) {
            return j(this, (function(e) {
                return void 0 === e ? C.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }
                ))
            }
            ), null, e, arguments.length)
        },
        append: function() {
            return Ae(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
            }
            ))
        },
        prepend: function() {
            return Ae(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Pe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }
            ))
        },
        before: function() {
            return Ae(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }
            ))
        },
        after: function() {
            return Ae(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }
            ))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (C.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map((function() {
                return C.clone(this, e, t)
            }
            ))
        },
        html: function(e) {
            return j(this, (function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Te.test(e) && !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (C.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }
            ), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Ae(this, arguments, (function(t) {
                var n = this.parentNode;
                C.inArray(this, e) < 0 && (C.cleanData(ve(this)),
                n && n.replaceChild(t, this))
            }
            ), e)
        }
    }),
    C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        C.fn[e] = function(e) {
            for (var n, i = [], o = C(e), r = o.length - 1, s = 0; s <= r; s++)
                n = s === r ? this : this.clone(!0),
                C(o[s])[t](n),
                a.apply(i, n.get());
            return this.pushStack(i)
        }
    }
    ));
    var Le = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , Oe = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , Re = function(e, t, n) {
        var i, o, r = {};
        for (o in t)
            r[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.call(e),
        t)
            e.style[o] = r[o];
        return i
    }
      , Fe = new RegExp(ne.join("|"),"i");
    function ze(e, t, n) {
        var i, o, r, a, s = e.style;
        return (n = n || Oe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = C.style(e, t)),
        !p.pixelBoxStyles() && Le.test(a) && Fe.test(t) && (i = s.width,
        o = s.minWidth,
        r = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = i,
        s.minWidth = o,
        s.maxWidth = r)),
        void 0 !== a ? a + "" : a
    }
    function Be(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function t() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                ie.appendChild(u).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top,
                l = 12 === n(t.marginLeft),
                c.style.right = "60%",
                a = 36 === n(t.right),
                o = 36 === n(t.width),
                c.style.position = "absolute",
                r = 12 === n(c.offsetWidth / 3),
                ie.removeChild(u),
                c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, r, a, s, l, u = v.createElement("div"), c = v.createElement("div");
        c.style && (c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        p.clearCloneStyle = "content-box" === c.style.backgroundClip,
        C.extend(p, {
            boxSizingReliable: function() {
                return t(),
                o
            },
            pixelBoxStyles: function() {
                return t(),
                a
            },
            pixelPosition: function() {
                return t(),
                i
            },
            reliableMarginLeft: function() {
                return t(),
                l
            },
            scrollboxSize: function() {
                return t(),
                r
            },
            reliableTrDimensions: function() {
                var t, n, i, o;
                return null == s && (t = v.createElement("table"),
                n = v.createElement("tr"),
                i = v.createElement("div"),
                t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                n.style.cssText = "border:1px solid",
                n.style.height = "1px",
                i.style.height = "9px",
                i.style.display = "block",
                ie.appendChild(t).appendChild(n).appendChild(i),
                o = e.getComputedStyle(n),
                s = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === n.offsetHeight,
                ie.removeChild(t)),
                s
            }
        }))
    }();
    var He = ["Webkit", "Moz", "ms"]
      , je = v.createElement("div").style
      , qe = {};
    function We(e) {
        return C.cssProps[e] || qe[e] || (e in je ? e : qe[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = He.length; n--; )
                if ((e = He[n] + t)in je)
                    return e
        }(e) || e)
    }
    var Ue = /^(none|table(?!-c[ea]).+)/
      , Ve = /^--/
      , Xe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ye = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Qe(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function Ze(e, t, n, i, o, r) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += C.css(e, n + ne[a], !0, o)),
            i ? ("content" === n && (l -= C.css(e, "padding" + ne[a], !0, o)),
            "margin" !== n && (l -= C.css(e, "border" + ne[a] + "Width", !0, o))) : (l += C.css(e, "padding" + ne[a], !0, o),
            "padding" !== n ? l += C.css(e, "border" + ne[a] + "Width", !0, o) : s += C.css(e, "border" + ne[a] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - .5)) || 0),
        l
    }
    function Ke(e, t, n) {
        var i = Oe(e)
          , o = (!p.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, i)
          , r = o
          , a = ze(e, t, i)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Le.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!p.boxSizingReliable() && o || !p.reliableTrDimensions() && I(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, i),
        (r = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Ze(e, t, n || (o ? "border" : "content"), r, i, a) + "px"
    }
    function Ge(e, t, n, i, o) {
        return new Ge.prototype.init(e,t,n,i,o)
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = ze(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, a, s = V(t), l = Ve.test(t), u = e.style;
                if (l || (t = We(s)),
                a = C.cssHooks[t] || C.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (o = a.get(e, !1, i)) ? o : u[t];
                "string" === (r = _typeof(n)) && (o = te.exec(n)) && o[1] && (n = se(e, t, o),
                r = "number"),
                null != n && n == n && ("number" !== r || l || (n += o && o[3] || (C.cssNumber[s] ? "" : "px")),
                p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var o, r, a, s = V(t);
            return Ve.test(t) || (t = We(s)),
            (a = C.cssHooks[t] || C.cssHooks[s]) && "get"in a && (o = a.get(e, !0, n)),
            void 0 === o && (o = ze(e, t, i)),
            "normal" === o && t in Ye && (o = Ye[t]),
            "" === n || n ? (r = parseFloat(o),
            !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }),
    C.each(["height", "width"], (function(e, t) {
        C.cssHooks[t] = {
            get: function(e, n, i) {
                if (n)
                    return !Ue.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ke(e, t, i) : Re(e, Xe, (function() {
                        return Ke(e, t, i)
                    }
                    ))
            },
            set: function(e, n, i) {
                var o, r = Oe(e), a = !p.scrollboxSize() && "absolute" === r.position, s = (a || i) && "border-box" === C.css(e, "boxSizing", !1, r), l = i ? Ze(e, t, i, s, r) : 0;
                return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Ze(e, t, "border", !1, r) - .5)),
                l && (o = te.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                n = C.css(e, t)),
                Qe(0, n, l)
            }
        }
    }
    )),
    C.cssHooks.marginLeft = Be(p.reliableMarginLeft, (function(e, t) {
        if (t)
            return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - Re(e, {
                marginLeft: 0
            }, (function() {
                return e.getBoundingClientRect().left
            }
            ))) + "px"
    }
    )),
    C.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        C.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    o[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        },
        "margin" !== e && (C.cssHooks[e + t].set = Qe)
    }
    )),
    C.fn.extend({
        css: function(e, t) {
            return j(this, (function(e, t, n) {
                var i, o, r = {}, a = 0;
                if (Array.isArray(t)) {
                    for (i = Oe(e),
                    o = t.length; a < o; a++)
                        r[t[a]] = C.css(e, t[a], !1, i);
                    return r
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
            }
            ), e, t, 1 < arguments.length)
        }
    }),
    ((C.Tween = Ge).prototype = {
        constructor: Ge,
        init: function(e, t, n, i, o, r) {
            this.elem = e,
            this.prop = n,
            this.easing = o || C.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (C.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ge.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ge.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ge.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Ge.propHooks._default.set(this),
            this
        }
    }).init.prototype = Ge.prototype,
    (Ge.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[We(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ge.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    C.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    (C.fx = Ge.prototype.init).step = {};
    var Je, et, tt, nt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
    function rt() {
        et && (!1 === v.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(rt) : e.setTimeout(rt, C.fx.interval),
        C.fx.tick())
    }
    function at() {
        return e.setTimeout((function() {
            Je = void 0
        }
        )),
        Je = Date.now()
    }
    function st(e, t) {
        var n, i = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            o["margin" + (n = ne[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function lt(e, t, n) {
        for (var i, o = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), r = 0, a = o.length; r < a; r++)
            if (i = o[r].call(n, t, e))
                return i
    }
    function ut(e, t, n) {
        var i, o, r = 0, a = ut.prefilters.length, s = C.Deferred().always((function() {
            delete l.elem
        }
        )), l = function() {
            if (o)
                return !1;
            for (var t = Je || at(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), r = 0, a = u.tweens.length; r < a; r++)
                u.tweens[r].run(i);
            return s.notifyWith(e, [u, i, n]),
            i < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]),
            s.resolveWith(e, [u]),
            !1)
        }, u = s.promise({
            elem: e,
            props: C.extend({}, t),
            opts: C.extend(!0, {
                specialEasing: {},
                easing: C.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Je || at(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = C.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? u.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; n < i; n++)
                    u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]),
                s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                this
            }
        }), c = u.props;
        for (function(e, t) {
            var n, i, o, r, a;
            for (n in e)
                if (o = t[i = V(n)],
                r = e[n],
                Array.isArray(r) && (o = r[1],
                r = e[n] = r[0]),
                n !== i && (e[i] = r,
                delete e[n]),
                (a = C.cssHooks[i]) && "expand"in a)
                    for (n in r = a.expand(r),
                    delete e[i],
                    r)
                        n in e || (e[n] = r[n],
                        t[n] = o);
                else
                    t[i] = o
        }(c, u.opts.specialEasing); r < a; r++)
            if (i = ut.prefilters[r].call(u, e, c, u.opts))
                return h(i.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
                i;
        return C.map(c, lt, u),
        h(u.opts.start) && u.opts.start.call(e, u),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
        C.fx.timer(C.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u
    }
    C.Animation = C.extend(ut, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            h(e) ? (t = e,
            e = ["*"]) : e = e.match(L);
            for (var n, i = 0, o = e.length; i < o; i++)
                n = e[i],
                ut.tweeners[n] = ut.tweeners[n] || [],
                ut.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, o, r, a, s, l, u, c, d = "width"in t || "height"in t, f = this, p = {}, h = e.style, m = e.nodeType && ae(e), v = Q.get(e, "fxshow");
            for (i in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            f.always((function() {
                f.always((function() {
                    a.unqueued--,
                    C.queue(e, "fx").length || a.empty.fire()
                }
                ))
            }
            ))),
            t)
                if (o = t[i],
                it.test(o)) {
                    if (delete t[i],
                    r = r || "toggle" === o,
                    o === (m ? "hide" : "show")) {
                        if ("show" !== o || !v || void 0 === v[i])
                            continue;
                        m = !0
                    }
                    p[i] = v && v[i] || C.style(e, i)
                }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                for (i in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (u = v && v.display) && (u = Q.get(e, "display")),
                "none" === (c = C.css(e, "display")) && (u ? c = u : (ue([e], !0),
                u = e.style.display || u,
                c = C.css(e, "display"),
                ue([e]))),
                ("inline" === c || "inline-block" === c && null != u) && "none" === C.css(e, "float") && (l || (f.done((function() {
                    h.display = u
                }
                )),
                null == u && (c = h.display,
                u = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                f.always((function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                }
                ))),
                l = !1,
                p)
                    l || (v ? "hidden"in v && (m = v.hidden) : v = Q.access(e, "fxshow", {
                        display: u
                    }),
                    r && (v.hidden = !m),
                    m && ue([e], !0),
                    f.done((function() {
                        for (i in m || ue([e]),
                        Q.remove(e, "fxshow"),
                        p)
                            C.style(e, i, p[i])
                    }
                    ))),
                    l = lt(m ? v[i] : 0, i, f),
                    i in v || (v[i] = l.start,
                    m && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
        }
    }),
    C.speed = function(e, t, n) {
        var i = e && "object" == _typeof(e) ? C.extend({}, e) : {
            complete: n || !n && t || h(e) && e,
            duration: e,
            easing: n && t || t && !h(t) && t
        };
        return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            h(i.old) && i.old.call(this),
            i.queue && C.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    C.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var o = C.isEmptyObject(e)
              , r = C.speed(t, n, i)
              , a = function() {
                var t = ut(this, C.extend({}, e), r);
                (o || Q.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && this.queue(e || "fx", []),
            this.each((function() {
                var t = !0
                  , o = null != e && e + "queueHooks"
                  , r = C.timers
                  , a = Q.get(this);
                if (o)
                    a[o] && a[o].stop && i(a[o]);
                else
                    for (o in a)
                        a[o] && a[o].stop && ot.test(o) && i(a[o]);
                for (o = r.length; o--; )
                    r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n),
                    t = !1,
                    r.splice(o, 1));
                !t && n || C.dequeue(this, e)
            }
            ))
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each((function() {
                var t, n = Q.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = C.timers, a = i ? i.length : 0;
                for (n.finish = !0,
                C.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = r.length; t--; )
                    r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                    r.splice(t, 1));
                for (t = 0; t < a; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            }
            ))
        }
    }),
    C.each(["toggle", "show", "hide"], (function(e, t) {
        var n = C.fn[t];
        C.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, i, o)
        }
    }
    )),
    C.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        C.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }
    )),
    C.timers = [],
    C.fx.tick = function() {
        var e, t = 0, n = C.timers;
        for (Je = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || C.fx.stop(),
        Je = void 0
    }
    ,
    C.fx.timer = function(e) {
        C.timers.push(e),
        C.fx.start()
    }
    ,
    C.fx.interval = 13,
    C.fx.start = function() {
        et || (et = !0,
        rt())
    }
    ,
    C.fx.stop = function() {
        et = null
    }
    ,
    C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    C.fn.delay = function(t, n) {
        return t = C.fx && C.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, (function(n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(o)
            }
        }
        ))
    }
    ,
    tt = v.createElement("input"),
    nt = v.createElement("select").appendChild(v.createElement("option")),
    tt.type = "checkbox",
    p.checkOn = "" !== tt.value,
    p.optSelected = nt.selected,
    (tt = v.createElement("input")).value = "t",
    tt.type = "radio",
    p.radioValue = "t" === tt.value;
    var ct, dt = C.expr.attrHandle;
    C.fn.extend({
        attr: function(e, t) {
            return j(this, C.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each((function() {
                C.removeAttr(this, e)
            }
            ))
        }
    }),
    C.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === r && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ct : void 0)),
                void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : o && "get"in o && null !== (i = o.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && I(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, o = t && t.match(L);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    e.removeAttribute(n)
        }
    }),
    ct = {
        set: function(e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    C.each(C.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = dt[t] || C.find.attr;
        dt[t] = function(e, t, i) {
            var o, r, a = t.toLowerCase();
            return i || (r = dt[a],
            dt[a] = o,
            o = null != n(e, t, i) ? a : null,
            dt[a] = r),
            o
        }
    }
    ));
    var ft = /^(?:input|select|textarea|button)$/i
      , pt = /^(?:a|area)$/i;
    function ht(e) {
        return (e.match(L) || []).join(" ")
    }
    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(L) || []
    }
    C.fn.extend({
        prop: function(e, t) {
            return j(this, C.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[C.propFix[e] || e]
            }
            ))
        }
    }),
    C.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && C.isXMLDoc(e) || (t = C.propFix[t] || t,
                o = C.propHooks[t]),
                void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ft.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    p.optSelected || (C.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        C.propFix[this.toLowerCase()] = this
    }
    )),
    C.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, a, s, l = 0;
            if (h(e))
                return this.each((function(t) {
                    C(this).addClass(e.call(this, t, mt(this)))
                }
                ));
            if ((t = vt(e)).length)
                for (; n = this[l++]; )
                    if (o = mt(n),
                    i = 1 === n.nodeType && " " + ht(o) + " ") {
                        for (a = 0; r = t[a++]; )
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (s = ht(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, a, s, l = 0;
            if (h(e))
                return this.each((function(t) {
                    C(this).removeClass(e.call(this, t, mt(this)))
                }
                ));
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = vt(e)).length)
                for (; n = this[l++]; )
                    if (o = mt(n),
                    i = 1 === n.nodeType && " " + ht(o) + " ") {
                        for (a = 0; r = t[a++]; )
                            for (; -1 < i.indexOf(" " + r + " "); )
                                i = i.replace(" " + r + " ", " ");
                        o !== (s = ht(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = _typeof(e)
              , i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each((function(n) {
                C(this).toggleClass(e.call(this, n, mt(this), t), t)
            }
            )) : this.each((function() {
                var t, o, r, a;
                if (i)
                    for (o = 0,
                    r = C(this),
                    a = vt(e); t = a[o++]; )
                        r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = mt(this)) && Q.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
            }
            ))
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && -1 < (" " + ht(mt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var gt = /\r/g;
    C.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = h(e),
            this.each((function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, C(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = C.map(o, (function(e) {
                    return null == e ? "" : e + ""
                }
                ))),
                (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            }
            ))) : o ? (t = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(gt, "") : null == n ? "" : n : void 0
        }
    }),
    C.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : ht(C.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options, r = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], l = a ? r + 1 : o.length;
                    for (i = r < 0 ? l : a ? r : 0; i < l; i++)
                        if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !I(n.parentNode, "optgroup"))) {
                            if (t = C(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = C.makeArray(t), a = o.length; a--; )
                        ((i = o[a]).selected = -1 < C.inArray(C.valHooks.option.get(i), r)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    C.each(["radio", "checkbox"], (function() {
        C.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < C.inArray(C(e).val(), t)
            }
        },
        p.checkOn || (C.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }
    )),
    p.focusin = "onfocusin"in e;
    var yt = /^(?:focusinfocus|focusoutblur)$/
      , bt = function(e) {
        e.stopPropagation()
    };
    C.extend(C.event, {
        trigger: function(t, n, i, o) {
            var r, a, s, l, u, d, f, p, g = [i || v], y = c.call(t, "type") ? t.type : t, b = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = s = i = i || v,
            3 !== i.nodeType && 8 !== i.nodeType && !yt.test(y + C.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(),
            b.sort()),
            u = y.indexOf(":") < 0 && "on" + y,
            (t = t[C.expando] ? t : new C.Event(y,"object" == _typeof(t) && t)).isTrigger = o ? 2 : 3,
            t.namespace = b.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : C.makeArray(n, [t]),
            f = C.event.special[y] || {},
            o || !f.trigger || !1 !== f.trigger.apply(i, n))) {
                if (!o && !f.noBubble && !m(i)) {
                    for (l = f.delegateType || y,
                    yt.test(l + y) || (a = a.parentNode); a; a = a.parentNode)
                        g.push(a),
                        s = a;
                    s === (i.ownerDocument || v) && g.push(s.defaultView || s.parentWindow || e)
                }
                for (r = 0; (a = g[r++]) && !t.isPropagationStopped(); )
                    p = a,
                    t.type = 1 < r ? l : f.bindType || y,
                    (d = (Q.get(a, "events") || Object.create(null))[t.type] && Q.get(a, "handle")) && d.apply(a, n),
                    (d = u && a[u]) && d.apply && X(a) && (t.result = d.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = y,
                o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(g.pop(), n) || !X(i) || u && h(i[y]) && !m(i) && ((s = i[u]) && (i[u] = null),
                C.event.triggered = y,
                t.isPropagationStopped() && p.addEventListener(y, bt),
                i[y](),
                t.isPropagationStopped() && p.removeEventListener(y, bt),
                C.event.triggered = void 0,
                s && (i[u] = s)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var i = C.extend(new C.Event, n, {
                type: e,
                isSimulated: !0
            });
            C.event.trigger(i, null, t)
        }
    }),
    C.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                C.event.trigger(e, t, this)
            }
            ))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return C.event.trigger(e, t, n, !0)
        }
    }),
    p.focusin || C.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            C.event.simulate(t, e.target, C.event.fix(e))
        };
        C.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this.document || this
                  , o = Q.access(i, t);
                o || i.addEventListener(e, n, !0),
                Q.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this.document || this
                  , o = Q.access(i, t) - 1;
                o ? Q.access(i, t, o) : (i.removeEventListener(e, n, !0),
                Q.remove(i, t))
            }
        }
    }
    ));
    var wt = e.location
      , Ct = {
        guid: Date.now()
    }
      , xt = /\?/;
    C.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {}
        return i = n && n.getElementsByTagName("parsererror")[0],
        n && !i || C.error("Invalid XML: " + (i ? C.map(i.childNodes, (function(e) {
            return e.textContent
        }
        )).join("\n") : t)),
        n
    }
    ;
    var Et = /\[\]$/
      , St = /\r?\n/g
      , kt = /^(?:submit|button|image|reset|file)$/i
      , Tt = /^(?:input|select|textarea|keygen)/i;
    function It(e, t, n, i) {
        var o;
        if (Array.isArray(t))
            C.each(t, (function(t, o) {
                n || Et.test(e) ? i(e, o) : It(e + "[" + ("object" == _typeof(o) && null != o ? t : "") + "]", o, n, i)
            }
            ));
        else if (n || "object" !== b(t))
            i(e, t);
        else
            for (o in t)
                It(e + "[" + o + "]", t[o], n, i)
    }
    C.param = function(e, t) {
        var n, i = [], o = function(e, t) {
            var n = h(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e))
            C.each(e, (function() {
                o(this.name, this.value)
            }
            ));
        else
            for (n in e)
                It(n, e[n], t, o);
        return i.join("&")
    }
    ,
    C.fn.extend({
        serialize: function() {
            return C.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }
            )).filter((function() {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && Tt.test(this.nodeName) && !kt.test(e) && (this.checked || !fe.test(e))
            }
            )).map((function(e, t) {
                var n = C(this).val();
                return null == n ? null : Array.isArray(n) ? C.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }
                )) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            }
            )).get()
        }
    });
    var _t = /%20/g
      , Pt = /#.*$/
      , $t = /([?&])_=[^&]*/
      , Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Mt = /^(?:GET|HEAD)$/
      , At = /^\/\//
      , Nt = {}
      , Lt = {}
      , Ot = "*/".concat("*")
      , Rt = v.createElement("a");
    function Ft(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, o = 0, r = t.toLowerCase().match(L) || [];
            if (h(n))
                for (; i = r[o++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function zt(e, t, n, i) {
        var o = {}
          , r = e === Lt;
        function a(s) {
            var l;
            return o[s] = !0,
            C.each(e[s] || [], (function(e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || r || o[u] ? r ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                a(u),
                !1)
            }
            )),
            l
        }
        return a(t.dataTypes[0]) || !o["*"] && a("*")
    }
    function Bt(e, t) {
        var n, i, o = C.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && C.extend(!0, e, i),
        e
    }
    Rt.href = wt.href,
    C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ot,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Bt(Bt(e, C.ajaxSettings), t) : Bt(C.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Nt),
        ajaxTransport: Ft(Lt),
        ajax: function(t, n) {
            "object" == _typeof(t) && (n = t,
            t = void 0);
            var i, o, r, a, s, l, u, c, d, f, p = C.ajaxSetup({}, n = n || {}), h = p.context || p, m = p.context && (h.nodeType || h.jquery) ? C(h) : C.event, g = C.Deferred(), y = C.Callbacks("once memory"), b = p.statusCode || {}, w = {}, x = {}, E = "canceled", S = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (u) {
                        if (!a)
                            for (a = {}; t = Dt.exec(r); )
                                a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = a[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return u ? r : null
                },
                setRequestHeader: function(e, t) {
                    return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e,
                    w[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == u && (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (u)
                            S.always(e[S.status]);
                        else
                            for (t in e)
                                b[t] = [b[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || E;
                    return i && i.abort(t),
                    k(0, t),
                    this
                }
            };
            if (g.promise(S),
            p.url = ((t || p.url || wt.href) + "").replace(At, wt.protocol + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = (p.dataType || "*").toLowerCase().match(L) || [""],
            null == p.crossDomain) {
                l = v.createElement("a");
                try {
                    l.href = p.url,
                    l.href = l.href,
                    p.crossDomain = Rt.protocol + "//" + Rt.host != l.protocol + "//" + l.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)),
            zt(Nt, p, n, S),
            u)
                return S;
            for (d in (c = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Mt.test(p.type),
            o = p.url.replace(Pt, ""),
            p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(_t, "+")) : (f = p.url.slice(o.length),
            p.data && (p.processData || "string" == typeof p.data) && (o += (xt.test(o) ? "&" : "?") + p.data,
            delete p.data),
            !1 === p.cache && (o = o.replace($t, "$1"),
            f = (xt.test(o) ? "&" : "?") + "_=" + Ct.guid++ + f),
            p.url = o + f),
            p.ifModified && (C.lastModified[o] && S.setRequestHeader("If-Modified-Since", C.lastModified[o]),
            C.etag[o] && S.setRequestHeader("If-None-Match", C.etag[o])),
            (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && S.setRequestHeader("Content-Type", p.contentType),
            S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : p.accepts["*"]),
            p.headers)
                S.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, S, p) || u))
                return S.abort();
            if (E = "abort",
            y.add(p.complete),
            S.done(p.success),
            S.fail(p.error),
            i = zt(Lt, p, n, S)) {
                if (S.readyState = 1,
                c && m.trigger("ajaxSend", [S, p]),
                u)
                    return S;
                p.async && 0 < p.timeout && (s = e.setTimeout((function() {
                    S.abort("timeout")
                }
                ), p.timeout));
                try {
                    u = !1,
                    i.send(w, k)
                } catch (t) {
                    if (u)
                        throw t;
                    k(-1, t)
                }
            } else
                k(-1, "No Transport");
            function k(t, n, a, l) {
                var d, f, v, w, x, E = n;
                u || (u = !0,
                s && e.clearTimeout(s),
                i = void 0,
                r = l || "",
                S.readyState = 0 < t ? 4 : 0,
                d = 200 <= t && t < 300 || 304 === t,
                a && (w = function(e, t, n) {
                    for (var i, o, r, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in s)
                            if (s[o] && s[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0]in n)
                        r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            a || (a = o)
                        }
                        r = r || a
                    }
                    if (r)
                        return r !== l[0] && l.unshift(r),
                        n[r]
                }(p, S, a)),
                !d && -1 < C.inArray("script", p.dataTypes) && C.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}
                ),
                w = function(e, t, n, i) {
                    var o, r, a, s, l, u = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            u[a.toLowerCase()] = e.converters[a];
                    for (r = c.shift(); r; )
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = r,
                        r = c.shift())
                            if ("*" === r)
                                r = l;
                            else if ("*" !== l && l !== r) {
                                if (!(a = u[l + " " + r] || u["* " + r]))
                                    for (o in u)
                                        if ((s = o.split(" "))[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                            !0 === a ? a = u[o] : !0 !== u[o] && (r = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + l + " to " + r
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, w, S, d),
                d ? (p.ifModified && ((x = S.getResponseHeader("Last-Modified")) && (C.lastModified[o] = x),
                (x = S.getResponseHeader("etag")) && (C.etag[o] = x)),
                204 === t || "HEAD" === p.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = w.state,
                f = w.data,
                d = !(v = w.error))) : (v = E,
                !t && E || (E = "error",
                t < 0 && (t = 0))),
                S.status = t,
                S.statusText = (n || E) + "",
                d ? g.resolveWith(h, [f, E, S]) : g.rejectWith(h, [S, E, v]),
                S.statusCode(b),
                b = void 0,
                c && m.trigger(d ? "ajaxSuccess" : "ajaxError", [S, p, d ? f : v]),
                y.fireWith(h, [S, E]),
                c && (m.trigger("ajaxComplete", [S, p]),
                --C.active || C.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function(e, t, n) {
            return C.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return C.get(e, void 0, t, "script")
        }
    }),
    C.each(["get", "post"], (function(e, t) {
        C[t] = function(e, n, i, o) {
            return h(n) && (o = o || i,
            i = n,
            n = void 0),
            C.ajax(C.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, C.isPlainObject(e) && e))
        }
    }
    )),
    C.ajaxPrefilter((function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }
    )),
    C._evalUrl = function(e, t, n) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                C.globalEval(e, t, n)
            }
        })
    }
    ,
    C.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])),
            t = C(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map((function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }
            )).append(this)),
            this
        },
        wrapInner: function(e) {
            return h(e) ? this.each((function(t) {
                C(this).wrapInner(e.call(this, t))
            }
            )) : this.each((function() {
                var t = C(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            ))
        },
        wrap: function(e) {
            var t = h(e);
            return this.each((function(n) {
                C(this).wrapAll(t ? e.call(this, n) : e)
            }
            ))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                C(this).replaceWith(this.childNodes)
            }
            )),
            this
        }
    }),
    C.expr.pseudos.hidden = function(e) {
        return !C.expr.pseudos.visible(e)
    }
    ,
    C.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    C.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Ht = {
        0: 200,
        1223: 204
    }
      , jt = C.ajaxSettings.xhr();
    p.cors = !!jt && "withCredentials"in jt,
    p.ajax = jt = !!jt,
    C.ajaxTransport((function(t) {
        var n, i;
        if (p.cors || jt && !t.crossDomain)
            return {
                send: function(o, r) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                    o)
                        s.setRequestHeader(a, o[a]);
                    n = function(e) {
                        return function() {
                            n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Ht[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    i = s.onerror = s.ontimeout = n("error"),
                    void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout((function() {
                            n && i()
                        }
                        ))
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (o) {
                        if (n)
                            throw o
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }
    )),
    C.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    }
    )),
    C.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return C.globalEval(e),
                e
            }
        }
    }),
    C.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }
    )),
    C.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs)
            return {
                send: function(i, o) {
                    t = C("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    v.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    }
    ));
    var qt, Wt = [], Ut = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Wt.pop() || C.expando + "_" + Ct.guid++;
            return this[e] = !0,
            e
        }
    }),
    C.ajaxPrefilter("json jsonp", (function(t, n, i) {
        var o, r, a, s = !1 !== t.jsonp && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return o = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Ut, "$1" + o) : !1 !== t.jsonp && (t.url += (xt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
            t.converters["script json"] = function() {
                return a || C.error(o + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            r = e[o],
            e[o] = function() {
                a = arguments
            }
            ,
            i.always((function() {
                void 0 === r ? C(e).removeProp(o) : e[o] = r,
                t[o] && (t.jsonpCallback = n.jsonpCallback,
                Wt.push(o)),
                a && h(r) && r(a[0]),
                a = r = void 0
            }
            )),
            "script"
    }
    )),
    p.createHTMLDocument = ((qt = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === qt.childNodes.length),
    C.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (p.createHTMLDocument ? ((i = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href,
        t.head.appendChild(i)) : t = v),
        r = !n && [],
        (o = _.exec(e)) ? [t.createElement(o[1])] : (o = be([e], t, r),
        r && r.length && C(r).remove(),
        C.merge([], o.childNodes)));
        var i, o, r
    }
    ,
    C.fn.load = function(e, t, n) {
        var i, o, r, a = this, s = e.indexOf(" ");
        return -1 < s && (i = ht(e.slice(s)),
        e = e.slice(0, s)),
        h(t) ? (n = t,
        t = void 0) : t && "object" == _typeof(t) && (o = "POST"),
        0 < a.length && C.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            r = arguments,
            a.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
        }
        )).always(n && function(e, t) {
            a.each((function() {
                n.apply(this, r || [e.responseText, t, e])
            }
            ))
        }
        ),
        this
    }
    ,
    C.expr.pseudos.animated = function(e) {
        return C.grep(C.timers, (function(t) {
            return e === t.elem
        }
        )).length
    }
    ,
    C.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, a, s, l, u = C.css(e, "position"), c = C(e), d = {};
            "static" === u && (e.style.position = "relative"),
            s = c.offset(),
            r = C.css(e, "top"),
            l = C.css(e, "left"),
            ("absolute" === u || "fixed" === u) && -1 < (r + l).indexOf("auto") ? (a = (i = c.position()).top,
            o = i.left) : (a = parseFloat(r) || 0,
            o = parseFloat(l) || 0),
            h(t) && (t = t.call(e, n, C.extend({}, s))),
            null != t.top && (d.top = t.top - s.top + a),
            null != t.left && (d.left = t.left - s.left + o),
            "using"in t ? t.using.call(e, d) : c.css(d)
        }
    },
    C.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each((function(t) {
                    C.offset.setOffset(this, e, t)
                }
                ));
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(),
            n = i.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], o = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === C.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0),
                    o.left += C.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - C.css(i, "marginTop", !0),
                    left: t.left - o.left - C.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === C.css(e, "position"); )
                    e = e.offsetParent;
                return e || ie
            }
            ))
        }
    }),
    C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        C.fn[e] = function(i) {
            return j(this, (function(e, i, o) {
                var r;
                if (m(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === o)
                    return r ? r[t] : e[i];
                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
            }
            ), e, i, arguments.length)
        }
    }
    )),
    C.each(["top", "left"], (function(e, t) {
        C.cssHooks[t] = Be(p.pixelPosition, (function(e, n) {
            if (n)
                return n = ze(e, t),
                Le.test(n) ? C(e).position()[t] + "px" : n
        }
        ))
    }
    )),
    C.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        C.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, i) {
            C.fn[i] = function(o, r) {
                var a = arguments.length && (n || "boolean" != typeof o)
                  , s = n || (!0 === o || !0 === r ? "margin" : "border");
                return j(this, (function(t, n, o) {
                    var r;
                    return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? C.css(t, n, s) : C.style(t, n, o, s)
                }
                ), t, a ? o : void 0, a)
            }
        }
        ))
    }
    )),
    C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        C.fn[t] = function(e) {
            return this.on(t, e)
        }
    }
    )),
    C.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        C.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }
    ));
    var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    C.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        h(e))
            return i = o.call(arguments, 2),
            (r = function() {
                return e.apply(t || this, i.concat(o.call(arguments)))
            }
            ).guid = e.guid = e.guid || C.guid++,
            r
    }
    ,
    C.holdReady = function(e) {
        e ? C.readyWait++ : C.ready(!0)
    }
    ,
    C.isArray = Array.isArray,
    C.parseJSON = JSON.parse,
    C.nodeName = I,
    C.isFunction = h,
    C.isWindow = m,
    C.camelCase = V,
    C.type = b,
    C.now = Date.now,
    C.isNumeric = function(e) {
        var t = C.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    C.trim = function(e) {
        return null == e ? "" : (e + "").replace(Vt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], (function() {
        return C
    }
    ));
    var Xt = e.jQuery
      , Yt = e.$;
    return C.noConflict = function(t) {
        return e.$ === C && (e.$ = Yt),
        t && e.jQuery === C && (e.jQuery = Xt),
        C
    }
    ,
    void 0 === t && (e.jQuery = e.$ = C),
    C
}
));
var self = this || {};
try {
    !function(e, t) {
        if (new e("q=%2B").get("q") !== t || new e({
            q: t
        }).get("q") !== t || new e([["q", t]]).get("q") !== t || "q=%0A" !== new e("q=\n").toString() || "q=+%26" !== new e({
            q: " &"
        }).toString() || "q=%25zx" !== new e({
            q: "%zx"
        }).toString())
            throw e;
        self.URLSearchParams = e
    }(URLSearchParams, "+")
} catch (e) {
    !function(e, t, n) {
        "use strict";
        var i = e.create
          , o = e.defineProperty
          , r = /[!'\(\)~]|%20|%00/g
          , a = /%(?![0-9a-fA-F]{2})/g
          , s = /\+/g
          , l = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        }
          , u = {
            append: function(e, t) {
                p(this._ungap, e, t)
            },
            delete: function(e) {
                delete this._ungap[e]
            },
            get: function(e) {
                return this.has(e) ? this._ungap[e][0] : null
            },
            getAll: function(e) {
                return this.has(e) ? this._ungap[e].slice(0) : []
            },
            has: function(e) {
                return e in this._ungap
            },
            set: function(e, n) {
                this._ungap[e] = [t(n)]
            },
            forEach: function(e, n) {
                var i = this;
                for (var o in i._ungap)
                    i._ungap[o].forEach(r, o);
                function r(r) {
                    e.call(n, r, t(o), i)
                }
            },
            toJSON: function() {
                return {}
            },
            toString: function() {
                var e = [];
                for (var t in this._ungap)
                    for (var n = m(t), i = 0, o = this._ungap[t]; i < o.length; i++)
                        e.push(n + "=" + m(o[i]));
                return e.join("&")
            }
        };
        for (var c in u)
            o(d.prototype, c, {
                configurable: !0,
                writable: !0,
                value: u[c]
            });
        function d(e) {
            var t = i(null);
            switch (o(this, "_ungap", {
                value: t
            }),
            !0) {
            case !e:
                break;
            case "string" == typeof e:
                "?" === e.charAt(0) && (e = e.slice(1));
                for (var r = e.split("&"), a = 0, s = r.length; a < s; a++) {
                    var l = (u = r[a]).indexOf("=");
                    -1 < l ? p(t, h(u.slice(0, l)), h(u.slice(l + 1))) : u.length && p(t, h(u), "")
                }
                break;
            case n(e):
                var u;
                for (a = 0,
                s = e.length; a < s; a++)
                    p(t, (u = e[a])[0], u[1]);
                break;
            case "forEach"in e:
                e.forEach(f, t);
                break;
            default:
                for (var c in e)
                    p(t, c, e[c])
            }
        }
        function f(e, t) {
            p(this, t, e)
        }
        function p(e, t, i) {
            var o = n(i) ? i.join(",") : i;
            t in e ? e[t].push(o) : e[t] = [o]
        }
        function h(e) {
            return decodeURIComponent(e.replace(a, "%25").replace(s, " "))
        }
        function m(e) {
            return encodeURIComponent(e).replace(r, v)
        }
        function v(e) {
            return l[e]
        }
        self.URLSearchParams = d
    }(Object, String, Array.isArray)
}
function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */
function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssmask-flexbox-objectfit-setclasses
 *  Tests:
 *  - Flexbox
 *  - CSS Mask,
 *  - CSS Object Fit!*/
function inIframe() {
    return window.location != window.parent.location
}
function isMobileMenu() {
    return $("#menu-mobile").is(":visible")
}
function isMobileMenuCSS() {
    var e = document.getElementById("menu")
      , t = window.getComputedStyle(e, "::after").getPropertyValue("content");
    return "mobile" === (t = t.replace(/"/g, "").replace(/'/g, ""))
}
function isFixedNav() {
    return "fixed" === $(".wnd-fixed").css("position")
}
function isDevice(e) {
    return $("html").hasClass(e)
}
function isCMS() {
    return $("body").hasClass("wnd-cms")
}
function isPreview() {
    return $("body").hasClass("wt-preview")
}
function isEshop() {
    return $("body").hasClass("wnd-eshop")
}
function isStickyByDefault() {
    return $(".wnd-nav-sticky").length
}
function deviceDetect(e) {
    var t, n = $("body"), i = $("html");
    if ("detect" == e) {
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (isMobileMenu() ? (isDevice("mobile") || $(i).addClass("mobile"),
        $(i).removeClass("tablet")) : (isDevice("tablet") || $(i).addClass("tablet"),
        $(i).removeClass("mobile")),
        $(n).hasClass("touched") || $(n).addClass("touched"),
        $(n).removeClass("desktop"),
        $(i).removeClass("pc")) : ($(i).hasClass("pc") || $(n).hasClass("desktop") || ($(i).addClass("pc"),
        $(n).addClass("desktop")),
        $(i).removeClass("tablet").removeClass("mobile"),
        $(n).removeClass("touched")),
        /WebnodeFrontendTest/i.test(navigator.userAgent) && ($(n).hasClass("wnd-frontend-test") || $(n).addClass("wnd-frontend-test")),
        /MSIE|Trident|Edge/i.test(navigator.userAgent) && ($(n).hasClass("isIE") || $(n).addClass("isIE"));
        var o = window.navigator.userAgent.toLowerCase();
        (o.indexOf("ipad") > -1 || o.indexOf("macintosh") > -1 && "ontouchend"in document) && ($(n).hasClass("touched") || $(n).addClass("touched"),
        $(i).removeClass("mobile").removeClass("desktop").addClass("tablet"));
        var r = !0;
        /Safari/i.test(navigator.userAgent) && /Chrome/i.test(navigator.userAgent) && (r = !1),
        /Safari/i.test(navigator.userAgent) && r && $(n).addClass("safari"),
        (o.indexOf("FBAN") > -1 || o.indexOf("FBAV") > -1) && $(n).addClass("safari")
    }
    if ("mobile-devices" == e) {
        var a = !1;
        return t = navigator.userAgent || navigator.vendor || window.opera,
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (a = !0),
        a
    }
    if ("wnd-frontend-test" == e)
        return $(n).hasClass("wnd-frontend-test");
    if ("touched" == e)
        return $(n).hasClass("touched");
    if ("android" == e) {
        a = !1;
        return /Android/i.test(navigator.userAgent) && (a = !0),
        a
    }
    if ("ios" == e) {
        a = !1;
        return /iPhone|iPad|iPod/i.test(navigator.userAgent) && (a = !0),
        a
    }
    if ("iphone" == e) {
        a = !1;
        return /iPhone|iPod/i.test(navigator.userAgent) && (a = !0),
        a
    }
    if ("black-berry" == e) {
        a = !1;
        return /BlackBerry/i.test(navigator.userAgent) && (a = !0),
        a
    }
    if ("opera-mini" == e) {
        a = !1;
        return /Opera Mini/i.test(navigator.userAgent) && (a = !0),
        a
    }
    if ("ie-mobile" == e) {
        a = !1;
        return /IEMobile/i.test(navigator.userAgent) && (a = !0),
        a
    }
    if ("safari" == e) {
        a = !1;
        return /Safari/i.test(navigator.userAgent) && (a = !0),
        a
    }
}
function getAndroidVersion(e) {
    var t = (e = (e || navigator.userAgent).toLowerCase()).match(/android\s([0-9\.]*)/);
    return !!t && t[1]
}
function smoothScrolling() {
    $("a[href*=\\#]:not([href=\\#])").on("click", (function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) {
                var t = e.offset().top;
                return isCMS() && (t -= $("#wnd_toolbar").outerHeight(!0)),
                $("html,body").animate({
                    scrollTop: t
                }, 1e3),
                !1
            }
        }
    }
    ))
}
function waitForWebfonts(e, t) {
    for (var n = 0, i = 0, o = e.length; i < o; ++i)
        !function(i) {
            var o = document.createElement("span");
            o.innerHTML = "giItT1WQy@!-/#",
            o.style.position = "absolute",
            o.style.left = "-10000px",
            o.style.top = "-10000px",
            o.style.fontSize = "300px",
            o.style.fontFamily = "sans-serif",
            o.style.fontVariant = "normal",
            o.style.fontStyle = "normal",
            o.style.fontWeight = "normal",
            o.style.letterSpacing = "0",
            document.body.appendChild(o);
            var r, a = o.offsetWidth;
            function s() {
                if (o && o.offsetWidth != a && (++n,
                o.parentNode.removeChild(o),
                o = null),
                n >= e.length && (r && clearInterval(r),
                n == e.length))
                    return t(),
                    !0
            }
            o.style.fontFamily = i,
            s() || (r = setInterval(s, 50))
        }(e[i])
}
function cmsReset(e) {
    if (isCMS()) {
        var t = e[0] ? e[0] : e;
        if (t)
            (n = document.createEvent("Event")).initEvent("wnd-redraw-done", !1, !0),
            t.dispatchEvent(n)
    } else {
        var n;
        (n = document.createEvent("Event")).initEvent("wnd-redraw-done", !1, !0),
        document.body.dispatchEvent(n)
    }
}
function watchForPrint() {
    var e = function() {}
      , t = function() {};
    window.matchMedia && window.matchMedia("print").addListener((function(e) {
        e.matches
    }
    ));
    window.onbeforeprint = e,
    window.onafterprint = t
}
function bindForms() {
    $(".form-file-button").on("click", (function() {
        $(this).parent().prev().find("input").trigger("click")
    }
    ))
}
function debounce(e, t, n) {
    var i;
    return function() {
        var o = this
          , r = arguments;
        clearTimeout(i),
        i = setTimeout((function() {
            i = null,
            n || e.apply(o, r)
        }
        ), t),
        n && !i && e.apply(o, r)
    }
}
function isElementInViewport(e) {
    "function" == typeof $ && e instanceof $ && (e = e[0]);
    var t = e.getBoundingClientRect()
      , n = t.width * t.height
      , i = 0
      , o = window.innerHeight || document.documentElement.clientHeight;
    return t.bottom < 0 || t.top > o ? i = 0 : t.top < 0 && t.bottom > o ? i = t.width * o / n : t.top >= 0 && t.bottom <= o ? i = 1 : t.top < 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) ? i = (t.height + t.top) * t.width / n : t.top >= 0 && t.bottom > o && (i = (t.height - (t.bottom - o)) * t.width / n),
    i
}
!function(e) {
    var t = !1;
    try {
        t = !!Symbol.iterator
    } catch (n) {}
    function n(e, n) {
        var i = [];
        return e.forEach(n, i),
        t ? i[Symbol.iterator]() : {
            next: function() {
                var e = i.shift();
                return {
                    done: void 0 === e,
                    value: e
                }
            }
        }
    }
    "forEach"in e || (e.forEach = function(e, t) {
        var n = this
          , i = Object.create(null);
        this.toString().replace(/=[\s\S]*?(?:&|$)/g, "=").split("=").forEach((function(o) {
            !o.length || o in i || (i[o] = n.getAll(o)).forEach((function(i) {
                e.call(t, i, o, n)
            }
            ))
        }
        ))
    }
    ),
    "keys"in e || (e.keys = function() {
        return n(this, (function(e, t) {
            this.push(t)
        }
        ))
    }
    ),
    "values"in e || (e.values = function() {
        return n(this, (function(e, t) {
            this.push(e)
        }
        ))
    }
    ),
    "entries"in e || (e.entries = function() {
        return n(this, (function(e, t) {
            this.push([t, e])
        }
        ))
    }
    ),
    !t || Symbol.iterator in e || (e[Symbol.iterator] = e.entries),
    "sort"in e || (e.sort = function() {
        for (var e, t, n, i = this.entries(), o = i.next(), r = o.done, a = [], s = Object.create(null); !r; )
            t = (n = o.value)[0],
            a.push(t),
            t in s || (s[t] = []),
            s[t].push(n[1]),
            r = (o = i.next()).done;
        for (a.sort(),
        e = 0; e < a.length; e++)
            this.delete(a[e]);
        for (e = 0; e < a.length; e++)
            t = a[e],
            this.append(t, s[t].shift())
    }
    ),
    function(t) {
        function n(t) {
            var n = t.append;
            t.append = e.append,
            URLSearchParams.call(t, t._usp.search.slice(1)),
            t.append = n
        }
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("'searchParams' accessed on an object that does not implement interface " + t.name)
        }
        function o(o) {
            var s, l, u, c = o.prototype, d = a(c, "searchParams"), f = a(c, "href"), p = a(c, "search");
            function h(t, n) {
                e.append.call(this, t, n),
                t = this.toString(),
                u.set.call(this._usp, t ? "?" + t : "")
            }
            function m(t) {
                e.delete.call(this, t),
                t = this.toString(),
                u.set.call(this._usp, t ? "?" + t : "")
            }
            function v(t, n) {
                e.set.call(this, t, n),
                t = this.toString(),
                u.set.call(this._usp, t ? "?" + t : "")
            }
            !d && p && p.set && (u = p,
            l = function(e, t) {
                return e.append = h,
                e.delete = m,
                e.set = v,
                r(e, "_usp", {
                    configurable: !0,
                    writable: !0,
                    value: t
                })
            }
            ,
            s = function(e, t) {
                return r(e, "_searchParams", {
                    configurable: !0,
                    writable: !0,
                    value: l(t, e)
                }),
                t
            }
            ,
            t.defineProperties(c, {
                href: {
                    get: function() {
                        return f.get.call(this)
                    },
                    set: function(e) {
                        var t = this._searchParams;
                        f.set.call(this, e),
                        t && n(t)
                    }
                },
                search: {
                    get: function() {
                        return p.get.call(this)
                    },
                    set: function(e) {
                        var t = this._searchParams;
                        p.set.call(this, e),
                        t && n(t)
                    }
                },
                searchParams: {
                    get: function() {
                        return i(this, o),
                        this._searchParams || s(this, new URLSearchParams(this.search.slice(1)))
                    },
                    set: function(e) {
                        i(this, o),
                        s(this, e)
                    }
                }
            }))
        }
        var r = t.defineProperty
          , a = t.getOwnPropertyDescriptor;
        try {
            o(HTMLAnchorElement),
            /^function|object$/.test("undefined" == typeof URL ? "undefined" : _typeof(URL)) && URL.prototype && o(URL)
        } catch (o) {}
    }(Object)
}(self.URLSearchParams.prototype),
String.prototype.includes || (String.prototype.includes = function(e, t) {
    "use strict";
    if (e instanceof RegExp)
        throw TypeError("first argument must not be a RegExp");
    return void 0 === t && (t = 0),
    -1 !== this.indexOf(e, t)
}
),
Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
    value: function(e, t) {
        if (null == this)
            throw new TypeError('"this" is null or not defined');
        var n = Object(this)
          , i = n.length >>> 0;
        if (0 === i)
            return !1;
        var o, r, a = 0 | t, s = Math.max(a >= 0 ? a : i - Math.abs(a), 0);
        for (; s < i; ) {
            if ((o = n[s]) === (r = e) || "number" == typeof o && "number" == typeof r && isNaN(o) && isNaN(r))
                return !0;
            s++
        }
        return !1
    }
}),
function(e, t) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.ES6Promise = t()
}(this, (function() {
    "use strict";
    function e(e) {
        return "function" == typeof e
    }
    var t = Array.isArray ? Array.isArray : function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
      , n = 0
      , i = void 0
      , o = void 0
      , r = function(e, t) {
        f[n] = e,
        f[n + 1] = t,
        2 === (n += 2) && (o ? o(p) : y())
    };
    var a = "undefined" != typeof window ? window : void 0
      , s = a || {}
      , l = s.MutationObserver || s.WebKitMutationObserver
      , u = void 0 === self && "undefined" != typeof process && "[object process]" === {}.toString.call(process)
      , c = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
    function d() {
        var e = setTimeout;
        return function() {
            return e(p, 1)
        }
    }
    var f = new Array(1e3);
    function p() {
        for (var e = 0; e < n; e += 2) {
            (0,
            f[e])(f[e + 1]),
            f[e] = void 0,
            f[e + 1] = void 0
        }
        n = 0
    }
    var h, m, v, g, y = void 0;
    function b(e, t) {
        var n = this
          , i = new this.constructor(x);
        void 0 === i[C] && A(i);
        var o = n._state;
        if (o) {
            var a = arguments[o - 1];
            r((function() {
                return D(o, i, a, n._result)
            }
            ))
        } else
            P(n, i, e, t);
        return i
    }
    function w(e) {
        if (e && "object" === _typeof(e) && e.constructor === this)
            return e;
        var t = new this(x);
        return k(t, e),
        t
    }
    u ? y = function() {
        return process.nextTick(p)
    }
    : l ? (m = 0,
    v = new l(p),
    g = document.createTextNode(""),
    v.observe(g, {
        characterData: !0
    }),
    y = function() {
        g.data = m = ++m % 2
    }
    ) : c ? ((h = new MessageChannel).port1.onmessage = p,
    y = function() {
        return h.port2.postMessage(0)
    }
    ) : y = void 0 === a && "function" == typeof require ? function() {
        try {
            var e = Function("return this")().require("vertx");
            return void 0 !== (i = e.runOnLoop || e.runOnContext) ? function() {
                i(p)
            }
            : d()
        } catch (e) {
            return d()
        }
    }() : d();
    var C = Math.random().toString(36).substring(2);
    function x() {}
    var E = void 0;
    function S(t, n, i) {
        n.constructor === t.constructor && i === b && n.constructor.resolve === w ? function(e, t) {
            1 === t._state ? I(e, t._result) : 2 === t._state ? _(e, t._result) : P(t, void 0, (function(t) {
                return k(e, t)
            }
            ), (function(t) {
                return _(e, t)
            }
            ))
        }(t, n) : void 0 === i ? I(t, n) : e(i) ? function(e, t, n) {
            r((function(e) {
                var i = !1
                  , o = function(e, t, n, i) {
                    try {
                        e.call(t, n, i)
                    } catch (e) {
                        return e
                    }
                }(n, t, (function(n) {
                    i || (i = !0,
                    t !== n ? k(e, n) : I(e, n))
                }
                ), (function(t) {
                    i || (i = !0,
                    _(e, t))
                }
                ), e._label);
                !i && o && (i = !0,
                _(e, o))
            }
            ), e)
        }(t, n, i) : I(t, n)
    }
    function k(e, t) {
        if (e === t)
            _(e, new TypeError("You cannot resolve a promise with itself"));
        else if (o = _typeof(i = t),
        null === i || "object" !== o && "function" !== o)
            I(e, t);
        else {
            var n = void 0;
            try {
                n = t.then
            } catch (t) {
                return void _(e, t)
            }
            S(e, t, n)
        }
        var i, o
    }
    function T(e) {
        e._onerror && e._onerror(e._result),
        $(e)
    }
    function I(e, t) {
        e._state === E && (e._result = t,
        e._state = 1,
        0 !== e._subscribers.length && r($, e))
    }
    function _(e, t) {
        e._state === E && (e._state = 2,
        e._result = t,
        r(T, e))
    }
    function P(e, t, n, i) {
        var o = e._subscribers
          , a = o.length;
        e._onerror = null,
        o[a] = t,
        o[a + 1] = n,
        o[a + 2] = i,
        0 === a && e._state && r($, e)
    }
    function $(e) {
        var t = e._subscribers
          , n = e._state;
        if (0 !== t.length) {
            for (var i = void 0, o = void 0, r = e._result, a = 0; a < t.length; a += 3)
                i = t[a],
                o = t[a + n],
                i ? D(n, i, o, r) : o(r);
            e._subscribers.length = 0
        }
    }
    function D(t, n, i, o) {
        var r = e(i)
          , a = void 0
          , s = void 0
          , l = !0;
        if (r) {
            try {
                a = i(o)
            } catch (e) {
                l = !1,
                s = e
            }
            if (n === a)
                return void _(n, new TypeError("A promises callback cannot return that same promise."))
        } else
            a = o;
        n._state !== E || (r && l ? k(n, a) : !1 === l ? _(n, s) : 1 === t ? I(n, a) : 2 === t && _(n, a))
    }
    var M = 0;
    function A(e) {
        e[C] = M++,
        e._state = void 0,
        e._result = void 0,
        e._subscribers = []
    }
    var N = function() {
        function e(e, n) {
            this._instanceConstructor = e,
            this.promise = new e(x),
            this.promise[C] || A(this.promise),
            t(n) ? (this.length = n.length,
            this._remaining = n.length,
            this._result = new Array(this.length),
            0 === this.length ? I(this.promise, this._result) : (this.length = this.length || 0,
            this._enumerate(n),
            0 === this._remaining && I(this.promise, this._result))) : _(this.promise, new Error("Array Methods must be provided an Array"))
        }
        return e.prototype._enumerate = function(e) {
            for (var t = 0; this._state === E && t < e.length; t++)
                this._eachEntry(e[t], t)
        }
        ,
        e.prototype._eachEntry = function(e, t) {
            var n = this._instanceConstructor
              , i = n.resolve;
            if (i === w) {
                var o = void 0
                  , r = void 0
                  , a = !1;
                try {
                    o = e.then
                } catch (e) {
                    a = !0,
                    r = e
                }
                if (o === b && e._state !== E)
                    this._settledAt(e._state, t, e._result);
                else if ("function" != typeof o)
                    this._remaining--,
                    this._result[t] = e;
                else if (n === L) {
                    var s = new n(x);
                    a ? _(s, r) : S(s, e, o),
                    this._willSettleAt(s, t)
                } else
                    this._willSettleAt(new n((function(t) {
                        return t(e)
                    }
                    )), t)
            } else
                this._willSettleAt(i(e), t)
        }
        ,
        e.prototype._settledAt = function(e, t, n) {
            var i = this.promise;
            i._state === E && (this._remaining--,
            2 === e ? _(i, n) : this._result[t] = n),
            0 === this._remaining && I(i, this._result)
        }
        ,
        e.prototype._willSettleAt = function(e, t) {
            var n = this;
            P(e, void 0, (function(e) {
                return n._settledAt(1, t, e)
            }
            ), (function(e) {
                return n._settledAt(2, t, e)
            }
            ))
        }
        ,
        e
    }();
    var L = function() {
        function t(e) {
            this[C] = M++,
            this._result = this._state = void 0,
            this._subscribers = [],
            x !== e && ("function" != typeof e && function() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }(),
            this instanceof t ? function(e, t) {
                try {
                    t((function(t) {
                        k(e, t)
                    }
                    ), (function(t) {
                        _(e, t)
                    }
                    ))
                } catch (t) {
                    _(e, t)
                }
            }(this, e) : function() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }())
        }
        return t.prototype.catch = function(e) {
            return this.then(null, e)
        }
        ,
        t.prototype.finally = function(t) {
            var n = this
              , i = n.constructor;
            return e(t) ? n.then((function(e) {
                return i.resolve(t()).then((function() {
                    return e
                }
                ))
            }
            ), (function(e) {
                return i.resolve(t()).then((function() {
                    throw e
                }
                ))
            }
            )) : n.then(t, t)
        }
        ,
        t
    }();
    return L.prototype.then = b,
    L.all = function(e) {
        return new N(this,e).promise
    }
    ,
    L.race = function(e) {
        var n = this;
        return t(e) ? new n((function(t, i) {
            for (var o = e.length, r = 0; r < o; r++)
                n.resolve(e[r]).then(t, i)
        }
        )) : new n((function(e, t) {
            return t(new TypeError("You must pass an array to race."))
        }
        ))
    }
    ,
    L.resolve = w,
    L.reject = function(e) {
        var t = new this(x);
        return _(t, e),
        t
    }
    ,
    L._setScheduler = function(e) {
        o = e
    }
    ,
    L._setAsap = function(e) {
        r = e
    }
    ,
    L._asap = r,
    L.polyfill = function() {
        var e = void 0;
        if ("undefined" != typeof global)
            e = global;
        else if (void 0 !== self)
            e = self;
        else
            try {
                e = Function("return this")()
            } catch (e) {
                throw new Error("polyfill failed because global object is unavailable in this environment")
            }
        var t = e.Promise;
        if (t) {
            var n = null;
            try {
                n = Object.prototype.toString.call(t.resolve())
            } catch (e) {}
            if ("[object Promise]" === n && !t.cast)
                return
        }
        e.Promise = L
    }
    ,
    L.Promise = L,
    L.polyfill(),
    L
}
)),
function(e, t) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.WHATWGFetch = {})
}(this, (function(e) {
    "use strict";
    var t = "undefined" != typeof globalThis && globalThis || void 0 !== self && self || void 0 !== t && t
      , n = "URLSearchParams"in t
      , i = "Symbol"in t && "iterator"in Symbol
      , o = "FileReader"in t && "Blob"in t && function() {
        try {
            return new Blob,
            !0
        } catch (e) {
            return !1
        }
    }()
      , r = "FormData"in t
      , a = "ArrayBuffer"in t;
    if (a)
        var s = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
          , l = ArrayBuffer.isView || function(e) {
            return e && s.indexOf(Object.prototype.toString.call(e)) > -1
        }
        ;
    function u(e) {
        if ("string" != typeof e && (e = String(e)),
        /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
            throw new TypeError('Invalid character in header field name: "' + e + '"');
        return e.toLowerCase()
    }
    function c(e) {
        return "string" != typeof e && (e = String(e)),
        e
    }
    function d(e) {
        var t = {
            next: function() {
                var t = e.shift();
                return {
                    done: void 0 === t,
                    value: t
                }
            }
        };
        return i && (t[Symbol.iterator] = function() {
            return t
        }
        ),
        t
    }
    function f(e) {
        this.map = {},
        e instanceof f ? e.forEach((function(e, t) {
            this.append(t, e)
        }
        ), this) : Array.isArray(e) ? e.forEach((function(e) {
            this.append(e[0], e[1])
        }
        ), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
            this.append(t, e[t])
        }
        ), this)
    }
    function p(e) {
        if (e.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0
    }
    function h(e) {
        return new Promise((function(t, n) {
            e.onload = function() {
                t(e.result)
            }
            ,
            e.onerror = function() {
                n(e.error)
            }
        }
        ))
    }
    function m(e) {
        var t = new FileReader
          , n = h(t);
        return t.readAsArrayBuffer(e),
        n
    }
    function v(e) {
        if (e.slice)
            return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)),
        t.buffer
    }
    function g() {
        return this.bodyUsed = !1,
        this._initBody = function(e) {
            var t;
            this.bodyUsed = this.bodyUsed,
            this._bodyInit = e,
            e ? "string" == typeof e ? this._bodyText = e : o && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : r && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : n && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : a && o && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = v(e.buffer),
            this._bodyInit = new Blob([this._bodyArrayBuffer])) : a && (ArrayBuffer.prototype.isPrototypeOf(e) || l(e)) ? this._bodyArrayBuffer = v(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "";
            var i = this.headers.get("content-type");
            i ? i.includes("json") && "string" != typeof this._bodyInit && (this._bodyInit = this._bodyText) : "string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8")
        }
        ,
        o && (this.blob = function() {
            var e = p(this);
            if (e)
                return e;
            if (this._bodyBlob)
                return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }
        ,
        this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
                var e = p(this);
                return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
            }
            return this.blob().then(m)
        }
        ),
        this.text = function() {
            var e, t, n, i = p(this);
            if (i)
                return i;
            if (this._bodyBlob)
                return e = this._bodyBlob,
                t = new FileReader,
                n = h(t),
                t.readAsText(e),
                n;
            if (this._bodyArrayBuffer)
                return Promise.resolve(function(e) {
                    for (var t = new Uint8Array(e), n = new Array(t.length), i = 0; i < t.length; i++)
                        n[i] = String.fromCharCode(t[i]);
                    return n.join("")
                }(this._bodyArrayBuffer));
            if (this._bodyFormData)
                throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }
        ,
        r && (this.formData = function() {
            return this.text().then(w)
        }
        ),
        this.json = function() {
            return this.text().then(JSON.parse)
        }
        ,
        this
    }
    f.prototype.append = function(e, t) {
        e = u(e),
        t = c(t);
        var n = this.map[e];
        this.map[e] = n ? n + ", " + t : t
    }
    ,
    f.prototype.delete = function(e) {
        delete this.map[u(e)]
    }
    ,
    f.prototype.get = function(e) {
        return e = u(e),
        this.has(e) ? this.map[e] : null
    }
    ,
    f.prototype.has = function(e) {
        return this.map.hasOwnProperty(u(e))
    }
    ,
    f.prototype.set = function(e, t) {
        this.map[u(e)] = c(t)
    }
    ,
    f.prototype.forEach = function(e, t) {
        for (var n in this.map)
            this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
    }
    ,
    f.prototype.keys = function() {
        var e = [];
        return this.forEach((function(t, n) {
            e.push(n)
        }
        )),
        d(e)
    }
    ,
    f.prototype.values = function() {
        var e = [];
        return this.forEach((function(t) {
            e.push(t)
        }
        )),
        d(e)
    }
    ,
    f.prototype.entries = function() {
        var e = [];
        return this.forEach((function(t, n) {
            e.push([n, t])
        }
        )),
        d(e)
    }
    ,
    i && (f.prototype[Symbol.iterator] = f.prototype.entries);
    var y = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    function b(e, t) {
        if (!(this instanceof b))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        var n, i, o = (t = t || {}).body;
        if (e instanceof b) {
            if (e.bodyUsed)
                throw new TypeError("Already read");
            this.url = e.url,
            this.credentials = e.credentials,
            t.headers || (this.headers = new f(e.headers)),
            this.method = e.method,
            this.mode = e.mode,
            this.signal = e.signal,
            o || null == e._bodyInit || (o = e._bodyInit,
            e.bodyUsed = !0)
        } else
            this.url = String(e);
        if (this.credentials = t.credentials || this.credentials || "same-origin",
        !t.headers && this.headers || (this.headers = new f(t.headers)),
        this.method = (n = t.method || this.method || "GET",
        i = n.toUpperCase(),
        y.indexOf(i) > -1 ? i : n),
        this.mode = t.mode || this.mode || null,
        this.signal = t.signal || this.signal,
        this.referrer = null,
        ("GET" === this.method || "HEAD" === this.method) && o)
            throw new TypeError("Body not allowed for GET or HEAD requests");
        if (this._initBody(o),
        !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache)) {
            var r = /([?&])_=[^&]*/;
            if (r.test(this.url))
                this.url = this.url.replace(r, "$1_=" + (new Date).getTime());
            else {
                this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
            }
        }
    }
    function w(e) {
        var t = new FormData;
        return e.trim().split("&").forEach((function(e) {
            if (e) {
                var n = e.split("=")
                  , i = n.shift().replace(/\+/g, " ")
                  , o = n.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(i), decodeURIComponent(o))
            }
        }
        )),
        t
    }
    function C(e, t) {
        if (!(this instanceof C))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        t || (t = {}),
        this.type = "default",
        this.status = void 0 === t.status ? 200 : t.status,
        this.ok = this.status >= 200 && this.status < 300,
        this.statusText = void 0 === t.statusText ? "" : "" + t.statusText,
        this.headers = new f(t.headers),
        this.url = t.url || "",
        this._initBody(e)
    }
    b.prototype.clone = function() {
        return new b(this,{
            body: this._bodyInit
        })
    }
    ,
    g.call(b.prototype),
    g.call(C.prototype),
    C.prototype.clone = function() {
        return new C(this._bodyInit,{
            status: this.status,
            statusText: this.statusText,
            headers: new f(this.headers),
            url: this.url
        })
    }
    ,
    C.error = function() {
        var e = new C(null,{
            status: 0,
            statusText: ""
        });
        return e.type = "error",
        e
    }
    ;
    var x = [301, 302, 303, 307, 308];
    C.redirect = function(e, t) {
        if (-1 === x.indexOf(t))
            throw new RangeError("Invalid status code");
        return new C(null,{
            status: t,
            headers: {
                location: e
            }
        })
    }
    ,
    e.DOMException = t.DOMException;
    try {
        new e.DOMException
    } catch (t) {
        e.DOMException = function(e, t) {
            this.message = e,
            this.name = t;
            var n = Error(e);
            this.stack = n.stack
        }
        ,
        e.DOMException.prototype = Object.create(Error.prototype),
        e.DOMException.prototype.constructor = e.DOMException
    }
    function E(n, i) {
        return new Promise((function(r, s) {
            var l = new b(n,i);
            if (l.signal && l.signal.aborted)
                return s(new e.DOMException("Aborted","AbortError"));
            var u = new XMLHttpRequest;
            function d() {
                u.abort()
            }
            u.onload = function() {
                var e, t, n = {
                    status: u.status,
                    statusText: u.statusText,
                    headers: (e = u.getAllResponseHeaders() || "",
                    t = new f,
                    e.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(e) {
                        return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                    }
                    )).forEach((function(e) {
                        var n = e.split(":")
                          , i = n.shift().trim();
                        if (i) {
                            var o = n.join(":").trim();
                            t.append(i, o)
                        }
                    }
                    )),
                    t)
                };
                n.url = "responseURL"in u ? u.responseURL : n.headers.get("X-Request-URL");
                var i = "response"in u ? u.response : u.responseText;
                setTimeout((function() {
                    r(new C(i,n))
                }
                ), 0)
            }
            ,
            u.onerror = function() {
                setTimeout((function() {
                    s(new TypeError("Network request failed"))
                }
                ), 0)
            }
            ,
            u.ontimeout = function() {
                setTimeout((function() {
                    s(new TypeError("Network request failed"))
                }
                ), 0)
            }
            ,
            u.onabort = function() {
                setTimeout((function() {
                    s(new e.DOMException("Aborted","AbortError"))
                }
                ), 0)
            }
            ,
            u.open(l.method, function(e) {
                try {
                    return "" === e && t.location.href ? t.location.href : e
                } catch (t) {
                    return e
                }
            }(l.url), !0),
            "include" === l.credentials ? u.withCredentials = !0 : "omit" === l.credentials && (u.withCredentials = !1),
            "responseType"in u && (o ? u.responseType = "blob" : a && l.headers.get("Content-Type") && -1 !== l.headers.get("Content-Type").indexOf("application/octet-stream") && (u.responseType = "arraybuffer")),
            !i || "object" !== _typeof(i.headers) || i.headers instanceof f ? l.headers.forEach((function(e, t) {
                u.setRequestHeader(t, e)
            }
            )) : Object.getOwnPropertyNames(i.headers).forEach((function(e) {
                u.setRequestHeader(e, c(i.headers[e]))
            }
            )),
            l.signal && (l.signal.addEventListener("abort", d),
            u.onreadystatechange = function() {
                4 === u.readyState && l.signal.removeEventListener("abort", d)
            }
            ),
            u.send(void 0 === l._bodyInit ? null : l._bodyInit)
        }
        ))
    }
    E.polyfill = !0,
    t.fetch || (t.fetch = E,
    t.Headers = f,
    t.Request = b,
    t.Response = C),
    e.Headers = f,
    e.Request = b,
    e.Response = C,
    e.fetch = E,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}
)),
function() {
    "use strict";
    var e, t;
    e = this,
    t = function(e) {
        function t(e) {
            for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
                t += "&args[]=" + encodeURIComponent(arguments[n]);
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }
        function n(e, t, n) {
            this.props = e,
            this.context = t,
            this.refs = D,
            this.updater = n || $
        }
        function i() {}
        function o(e, t, n) {
            this.props = e,
            this.context = t,
            this.refs = D,
            this.updater = n || $
        }
        function r(e, t, n) {
            var i, o = {}, r = null, a = null;
            if (null != t)
                for (i in void 0 !== t.ref && (a = t.ref),
                void 0 !== t.key && (r = "" + t.key),
                t)
                    N.call(t, i) && !L.hasOwnProperty(i) && (o[i] = t[i]);
            var s = arguments.length - 2;
            if (1 === s)
                o.children = n;
            else if (1 < s) {
                for (var l = Array(s), u = 0; u < s; u++)
                    l[u] = arguments[u + 2];
                o.children = l
            }
            if (e && e.defaultProps)
                for (i in s = e.defaultProps)
                    void 0 === o[i] && (o[i] = s[i]);
            return {
                $$typeof: b,
                type: e,
                key: r,
                ref: a,
                props: o,
                _owner: A.current
            }
        }
        function a(e) {
            return "object" === _typeof(e) && null !== e && e.$$typeof === b
        }
        function s(e, t) {
            return "object" === _typeof(e) && null !== e && null != e.key ? function(e) {
                var t = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + e.replace(/[=:]/g, (function(e) {
                    return t[e]
                }
                ))
            }("" + e.key) : t.toString(36)
        }
        function l(e, n, i, o, r) {
            var u = _typeof(e);
            "undefined" !== u && "boolean" !== u || (e = null);
            var c = !1;
            if (null === e)
                c = !0;
            else
                switch (u) {
                case "string":
                case "number":
                    c = !0;
                    break;
                case "object":
                    switch (e.$$typeof) {
                    case b:
                    case w:
                        c = !0
                    }
                }
            if (c)
                return r = r(c = e),
                e = "" === o ? "." + s(c, 0) : o,
                Array.isArray(r) ? (i = "",
                null != e && (i = e.replace(O, "$&/") + "/"),
                l(r, n, i, "", (function(e) {
                    return e
                }
                ))) : null != r && (a(r) && (r = function(e, t) {
                    return {
                        $$typeof: b,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }(r, i + (!r.key || c && c.key === r.key ? "" : ("" + r.key).replace(O, "$&/") + "/") + e)),
                n.push(r)),
                1;
            if (c = 0,
            o = "" === o ? "." : o + ":",
            Array.isArray(e))
                for (var d = 0; d < e.length; d++) {
                    var f = o + s(u = e[d], d);
                    c += l(u, n, i, f, r)
                }
            else if ("function" == typeof (f = function(e) {
                return null === e || "object" !== _typeof(e) ? null : "function" == typeof (e = I && e[I] || e["@@iterator"]) ? e : null
            }(e)))
                for (e = f.call(e),
                d = 0; !(u = e.next()).done; )
                    c += l(u = u.value, n, i, f = o + s(u, d++), r);
            else if ("object" === u)
                throw n = "" + e,
                Error(t(31, "[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n));
            return c
        }
        function u(e, t, n) {
            if (null == e)
                return e;
            var i = []
              , o = 0;
            return l(e, i, "", "", (function(e) {
                return t.call(n, e, o++)
            }
            )),
            i
        }
        function c(e) {
            if (-1 === e._status) {
                var t = e._result;
                t = t(),
                e._status = 0,
                e._result = t,
                t.then((function(t) {
                    0 === e._status && (t = t.default,
                    e._status = 1,
                    e._result = t)
                }
                ), (function(t) {
                    0 === e._status && (e._status = 2,
                    e._result = t)
                }
                ))
            }
            if (1 === e._status)
                return e._result;
            throw e._result
        }
        function d() {
            var e = R.current;
            if (null === e)
                throw Error(t(321));
            return e
        }
        function f(e, t) {
            var n = e.length;
            e.push(t);
            e: for (; ; ) {
                var i = n - 1 >>> 1
                  , o = e[i];
                if (!(void 0 !== o && 0 < m(o, t)))
                    break e;
                e[i] = t,
                e[n] = o,
                n = i
            }
        }
        function p(e) {
            return void 0 === (e = e[0]) ? null : e
        }
        function h(e) {
            var t = e[0];
            if (void 0 !== t) {
                var n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e: for (var i = 0, o = e.length; i < o; ) {
                        var r = 2 * (i + 1) - 1
                          , a = e[r]
                          , s = r + 1
                          , l = e[s];
                        if (void 0 !== a && 0 > m(a, n))
                            void 0 !== l && 0 > m(l, a) ? (e[i] = l,
                            e[s] = n,
                            i = s) : (e[i] = a,
                            e[r] = n,
                            i = r);
                        else {
                            if (!(void 0 !== l && 0 > m(l, n)))
                                break e;
                            e[i] = l,
                            e[s] = n,
                            i = s
                        }
                    }
                }
                return t
            }
            return null
        }
        function m(e, t) {
            var n = e.sortIndex - t.sortIndex;
            return 0 !== n ? n : e.id - t.id
        }
        function v(e) {
            for (var t = p(re); null !== t; ) {
                if (null === t.callback)
                    h(re);
                else {
                    if (!(t.startTime <= e))
                        break;
                    h(re),
                    t.sortIndex = t.expirationTime,
                    f(oe, t)
                }
                t = p(re)
            }
        }
        function g(e) {
            if (de = !1,
            v(e),
            !ce)
                if (null !== p(oe))
                    ce = !0,
                    U(y);
                else {
                    var t = p(re);
                    null !== t && V(g, t.startTime - e)
                }
        }
        function y(e, t) {
            ce = !1,
            de && (de = !1,
            X()),
            ue = !0;
            var n = le;
            try {
                for (v(t),
                se = p(oe); null !== se && (!(se.expirationTime > t) || e && !Y()); ) {
                    var i = se.callback;
                    if ("function" == typeof i) {
                        se.callback = null,
                        le = se.priorityLevel;
                        var o = i(se.expirationTime <= t);
                        t = z(),
                        "function" == typeof o ? se.callback = o : se === p(oe) && h(oe),
                        v(t)
                    } else
                        h(oe);
                    se = p(oe)
                }
                if (null !== se)
                    var r = !0;
                else {
                    var a = p(re);
                    null !== a && V(g, a.startTime - t),
                    r = !1
                }
                return r
            } finally {
                se = null,
                le = n,
                ue = !1
            }
        }
        var b = 60103
          , w = 60106;
        e.Fragment = 60107,
        e.StrictMode = 60108,
        e.Profiler = 60114;
        var C = 60109
          , x = 60110
          , E = 60112;
        e.Suspense = 60113;
        var S = 60115
          , k = 60116;
        if ("function" == typeof Symbol && Symbol.for) {
            var T = Symbol.for;
            b = T("react.element"),
            w = T("react.portal"),
            e.Fragment = T("react.fragment"),
            e.StrictMode = T("react.strict_mode"),
            e.Profiler = T("react.profiler"),
            C = T("react.provider"),
            x = T("react.context"),
            E = T("react.forward_ref"),
            e.Suspense = T("react.suspense"),
            S = T("react.memo"),
            k = T("react.lazy")
        }
        var I = "function" == typeof Symbol && Symbol.iterator
          , _ = Object.prototype.hasOwnProperty
          , P = Object.assign || function(e, t) {
            if (null == e)
                throw new TypeError("Object.assign target cannot be null or undefined");
            for (var n = Object(e), i = 1; i < arguments.length; i++) {
                var o = arguments[i];
                if (null != o) {
                    var r = void 0;
                    for (r in o = Object(o))
                        _.call(o, r) && (n[r] = o[r])
                }
            }
            return n
        }
          , $ = {
            isMounted: function(e) {
                return !1
            },
            enqueueForceUpdate: function(e, t, n) {},
            enqueueReplaceState: function(e, t, n, i) {},
            enqueueSetState: function(e, t, n, i) {}
        }
          , D = {};
        n.prototype.isReactComponent = {},
        n.prototype.setState = function(e, n) {
            if ("object" !== _typeof(e) && "function" != typeof e && null != e)
                throw Error(t(85));
            this.updater.enqueueSetState(this, e, n, "setState")
        }
        ,
        n.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        }
        ,
        i.prototype = n.prototype,
        (T = o.prototype = new i).constructor = o,
        P(T, n.prototype),
        T.isPureReactComponent = !0;
        var M, A = {
            current: null
        }, N = Object.prototype.hasOwnProperty, L = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        }, O = /\/+/g, R = {
            current: null
        };
        if ("object" === ("undefined" == typeof performance ? "undefined" : _typeof(performance)) && "function" == typeof performance.now)
            var F = performance
              , z = function() {
                return F.now()
            };
        else {
            var B = Date
              , H = B.now();
            z = function() {
                return B.now() - H
            }
        }
        if ("undefined" == typeof window || "function" != typeof MessageChannel) {
            var j = null
              , q = null
              , W = function e() {
                if (null !== j)
                    try {
                        var t = z();
                        j(!0, t),
                        j = null
                    } catch (t) {
                        throw setTimeout(e, 0),
                        t
                    }
            }
              , U = function(e) {
                null !== j ? setTimeout(U, 0, e) : (j = e,
                setTimeout(W, 0))
            }
              , V = function(e, t) {
                q = setTimeout(e, t)
            }
              , X = function() {
                clearTimeout(q)
            }
              , Y = function() {
                return !1
            };
            T = M = function() {}
        } else {
            var Q = window.setTimeout
              , Z = window.clearTimeout;
            "undefined" != typeof console && (T = window.cancelAnimationFrame,
            window.requestAnimationFrame);
            var K = !1
              , G = null
              , J = -1
              , ee = 5
              , te = 0;
            Y = function() {
                return z() >= te
            }
            ,
            T = function() {}
            ,
            M = function(e) {
                0 > e || 125 < e || (ee = 0 < e ? Math.floor(1e3 / e) : 5)
            }
            ;
            var ne = new MessageChannel
              , ie = ne.port2;
            ne.port1.onmessage = function() {
                if (null !== G) {
                    var e = z();
                    te = e + ee;
                    try {
                        G(!0, e) ? ie.postMessage(null) : (K = !1,
                        G = null)
                    } catch (e) {
                        throw ie.postMessage(null),
                        e
                    }
                } else
                    K = !1
            }
            ,
            U = function(e) {
                G = e,
                K || (K = !0,
                ie.postMessage(null))
            }
            ,
            V = function(e, t) {
                J = Q((function() {
                    e(z())
                }
                ), t)
            }
            ,
            X = function() {
                Z(J),
                J = -1
            }
        }
        var oe = []
          , re = []
          , ae = 1
          , se = null
          , le = 3
          , ue = !1
          , ce = !1
          , de = !1
          , fe = 0;
        T = {
            ReactCurrentDispatcher: R,
            ReactCurrentOwner: A,
            IsSomeRendererActing: {
                current: !1
            },
            ReactCurrentBatchConfig: {
                transition: 0
            },
            assign: P,
            Scheduler: {
                __proto__: null,
                unstable_ImmediatePriority: 1,
                unstable_UserBlockingPriority: 2,
                unstable_NormalPriority: 3,
                unstable_IdlePriority: 5,
                unstable_LowPriority: 4,
                unstable_runWithPriority: function(e, t) {
                    switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                    }
                    var n = le;
                    le = e;
                    try {
                        return t()
                    } finally {
                        le = n
                    }
                },
                unstable_next: function(e) {
                    switch (le) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = le
                    }
                    var n = le;
                    le = t;
                    try {
                        return e()
                    } finally {
                        le = n
                    }
                },
                unstable_scheduleCallback: function(e, t, n) {
                    var i = z();
                    switch (n = "object" === _typeof(n) && null !== n && "number" == typeof (n = n.delay) && 0 < n ? i + n : i,
                    e) {
                    case 1:
                        var o = -1;
                        break;
                    case 2:
                        o = 250;
                        break;
                    case 5:
                        o = 1073741823;
                        break;
                    case 4:
                        o = 1e4;
                        break;
                    default:
                        o = 5e3
                    }
                    return e = {
                        id: ae++,
                        callback: t,
                        priorityLevel: e,
                        startTime: n,
                        expirationTime: o = n + o,
                        sortIndex: -1
                    },
                    n > i ? (e.sortIndex = n,
                    f(re, e),
                    null === p(oe) && e === p(re) && (de ? X() : de = !0,
                    V(g, n - i))) : (e.sortIndex = o,
                    f(oe, e),
                    ce || ue || (ce = !0,
                    U(y))),
                    e
                },
                unstable_cancelCallback: function(e) {
                    e.callback = null
                },
                unstable_wrapCallback: function(e) {
                    var t = le;
                    return function() {
                        var n = le;
                        le = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            le = n
                        }
                    }
                },
                unstable_getCurrentPriorityLevel: function() {
                    return le
                },
                get unstable_shouldYield() {
                    return Y
                },
                unstable_requestPaint: T,
                unstable_continueExecution: function() {
                    ce || ue || (ce = !0,
                    U(y))
                },
                unstable_pauseExecution: function() {},
                unstable_getFirstCallbackNode: function() {
                    return p(oe)
                },
                get unstable_now() {
                    return z
                },
                get unstable_forceFrameRate() {
                    return M
                },
                unstable_Profiling: null
            },
            SchedulerTracing: {
                __proto__: null,
                __interactionsRef: null,
                __subscriberRef: null,
                unstable_clear: function(e) {
                    return e()
                },
                unstable_getCurrent: function() {
                    return null
                },
                unstable_getThreadID: function() {
                    return ++fe
                },
                unstable_trace: function(e, t, n) {
                    return n()
                },
                unstable_wrap: function(e) {
                    return e
                },
                unstable_subscribe: function(e) {},
                unstable_unsubscribe: function(e) {}
            }
        },
        e.Children = {
            map: u,
            forEach: function(e, t, n) {
                u(e, (function() {
                    t.apply(this, arguments)
                }
                ), n)
            },
            count: function(e) {
                var t = 0;
                return u(e, (function() {
                    t++
                }
                )),
                t
            },
            toArray: function(e) {
                return u(e, (function(e) {
                    return e
                }
                )) || []
            },
            only: function(e) {
                if (!a(e))
                    throw Error(t(143));
                return e
            }
        },
        e.Component = n,
        e.PureComponent = o,
        e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T,
        e.cloneElement = function(e, n, i) {
            if (null == e)
                throw Error(t(267, e));
            var o = P({}, e.props)
              , r = e.key
              , a = e.ref
              , s = e._owner;
            if (null != n) {
                if (void 0 !== n.ref && (a = n.ref,
                s = A.current),
                void 0 !== n.key && (r = "" + n.key),
                e.type && e.type.defaultProps)
                    var l = e.type.defaultProps;
                for (u in n)
                    N.call(n, u) && !L.hasOwnProperty(u) && (o[u] = void 0 === n[u] && void 0 !== l ? l[u] : n[u])
            }
            var u = arguments.length - 2;
            if (1 === u)
                o.children = i;
            else if (1 < u) {
                l = Array(u);
                for (var c = 0; c < u; c++)
                    l[c] = arguments[c + 2];
                o.children = l
            }
            return {
                $$typeof: b,
                type: e.type,
                key: r,
                ref: a,
                props: o,
                _owner: s
            }
        }
        ,
        e.createContext = function(e, t) {
            return void 0 === t && (t = null),
            (e = {
                $$typeof: x,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }).Provider = {
                $$typeof: C,
                _context: e
            },
            e.Consumer = e
        }
        ,
        e.createElement = r,
        e.createFactory = function(e) {
            var t = r.bind(null, e);
            return t.type = e,
            t
        }
        ,
        e.createRef = function() {
            return {
                current: null
            }
        }
        ,
        e.forwardRef = function(e) {
            return {
                $$typeof: E,
                render: e
            }
        }
        ,
        e.isValidElement = a,
        e.lazy = function(e) {
            return {
                $$typeof: k,
                _payload: {
                    _status: -1,
                    _result: e
                },
                _init: c
            }
        }
        ,
        e.memo = function(e, t) {
            return {
                $$typeof: S,
                type: e,
                compare: void 0 === t ? null : t
            }
        }
        ,
        e.useCallback = function(e, t) {
            return d().useCallback(e, t)
        }
        ,
        e.useContext = function(e, t) {
            return d().useContext(e, t)
        }
        ,
        e.useDebugValue = function(e, t) {}
        ,
        e.useEffect = function(e, t) {
            return d().useEffect(e, t)
        }
        ,
        e.useImperativeHandle = function(e, t, n) {
            return d().useImperativeHandle(e, t, n)
        }
        ,
        e.useLayoutEffect = function(e, t) {
            return d().useLayoutEffect(e, t)
        }
        ,
        e.useMemo = function(e, t) {
            return d().useMemo(e, t)
        }
        ,
        e.useReducer = function(e, t, n) {
            return d().useReducer(e, t, n)
        }
        ,
        e.useRef = function(e) {
            return d().useRef(e)
        }
        ,
        e.useState = function(e) {
            return d().useState(e)
        }
        ,
        e.version = "17.0.2"
    }
    ,
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).React = {})
}(),
function() {
    "use strict";
    var e, t;
    e = this,
    t = function(e, t) {
        function n(e) {
            for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
                t += "&args[]=" + encodeURIComponent(arguments[n]);
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }
        function i(e, t) {
            o(e, t),
            o(e + "Capture", t)
        }
        function o(e, t) {
            for (bo[e] = t,
            e = 0; e < t.length; e++)
                yo.add(t[e])
        }
        function r(e, t, n, i) {
            if (null == t || function(e, t, n, i) {
                if (null !== n && 0 === n.type)
                    return !1;
                switch (_typeof(t)) {
                case "function":
                case "symbol":
                    return !0;
                case "boolean":
                    return !i && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                default:
                    return !1
                }
            }(e, t, n, i))
                return !0;
            if (i)
                return !1;
            if (null !== n)
                switch (n.type) {
                case 3:
                    return !t;
                case 4:
                    return !1 === t;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t
                }
            return !1
        }
        function a(e, t, n, i, o, r, a) {
            this.acceptsBooleans = 2 === t || 3 === t || 4 === t,
            this.attributeName = i,
            this.attributeNamespace = o,
            this.mustUseProperty = n,
            this.propertyName = e,
            this.type = t,
            this.sanitizeURL = r,
            this.removeEmptyString = a
        }
        function s(e, t, n, i) {
            var o = ko.hasOwnProperty(t) ? ko[t] : null;
            (null !== o ? 0 === o.type : !i && 2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1])) || (r(t, n, o, i) && (n = null),
            i || null === o ? function(e) {
                return !!xo.call(So, e) || !xo.call(Eo, e) && (Co.test(e) ? So[e] = !0 : (Eo[e] = !0,
                !1))
            }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName,
            i = o.attributeNamespace,
            null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n,
            i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))))
        }
        function l(e) {
            return null === e || "object" !== _typeof(e) ? null : "function" == typeof (e = Ko && e[Ko] || e["@@iterator"]) ? e : null
        }
        function u(e, t, n) {
            if (void 0 === Yo)
                try {
                    throw Error()
                } catch (e) {
                    Yo = (t = e.stack.trim().match(/\n( *(at )?)/)) && t[1] || ""
                }
            return "\n" + Yo + e
        }
        function c(e, t) {
            if (!e || Go)
                return "";
            Go = !0;
            var n = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                if (t)
                    if (t = function() {
                        throw Error()
                    }
                    ,
                    Object.defineProperty(t.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }),
                    "object" === ("undefined" == typeof Reflect ? "undefined" : _typeof(Reflect)) && Reflect.construct) {
                        try {
                            Reflect.construct(t, [])
                        } catch (e) {
                            var i = e
                        }
                        Reflect.construct(e, [], t)
                    } else {
                        try {
                            t.call()
                        } catch (e) {
                            i = e
                        }
                        e.call(t.prototype)
                    }
                else {
                    try {
                        throw Error()
                    } catch (e) {
                        i = e
                    }
                    e()
                }
            } catch (e) {
                if (e && i && "string" == typeof e.stack) {
                    for (var o = e.stack.split("\n"), r = i.stack.split("\n"), a = o.length - 1, s = r.length - 1; 1 <= a && 0 <= s && o[a] !== r[s]; )
                        s--;
                    for (; 1 <= a && 0 <= s; a--,
                    s--)
                        if (o[a] !== r[s]) {
                            if (1 !== a || 1 !== s)
                                do {
                                    if (a--,
                                    0 > --s || o[a] !== r[s])
                                        return "\n" + o[a].replace(" at new ", " at ")
                                } while (1 <= a && 0 <= s);
                            break
                        }
                }
            } finally {
                Go = !1,
                Error.prepareStackTrace = n
            }
            return (e = e ? e.displayName || e.name : "") ? u(e) : ""
        }
        function d(e) {
            switch (e.tag) {
            case 5:
                return u(e.type);
            case 16:
                return u("Lazy");
            case 13:
                return u("Suspense");
            case 19:
                return u("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = c(e.type, !1);
            case 11:
                return e = c(e.type.render, !1);
            case 22:
                return e = c(e.type._render, !1);
            case 1:
                return e = c(e.type, !0);
            default:
                return ""
            }
        }
        function f(e) {
            if (null == e)
                return null;
            if ("function" == typeof e)
                return e.displayName || e.name || null;
            if ("string" == typeof e)
                return e;
            switch (e) {
            case Mo:
                return "Fragment";
            case Do:
                return "Portal";
            case No:
                return "Profiler";
            case Ao:
                return "StrictMode";
            case Fo:
                return "Suspense";
            case zo:
                return "SuspenseList"
            }
            if ("object" === _typeof(e))
                switch (e.$$typeof) {
                case Oo:
                    return (e.displayName || "Context") + ".Consumer";
                case Lo:
                    return (e._context.displayName || "Context") + ".Provider";
                case Ro:
                    var t = e.render;
                    return t = t.displayName || t.name || "",
                    e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                case Bo:
                    return f(e.type);
                case jo:
                    return f(e._render);
                case Ho:
                    t = e._payload,
                    e = e._init;
                    try {
                        return f(e(t))
                    } catch (e) {}
                }
            return null
        }
        function p(e) {
            switch (_typeof(e)) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
                return e;
            default:
                return ""
            }
        }
        function h(e) {
            var t = e.type;
            return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
        }
        function m(e) {
            e._valueTracker || (e._valueTracker = function(e) {
                var t = h(e) ? "checked" : "value"
                  , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
                  , i = "" + e[t];
                if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                    var o = n.get
                      , r = n.set;
                    return Object.defineProperty(e, t, {
                        configurable: !0,
                        get: function() {
                            return o.call(this)
                        },
                        set: function(e) {
                            i = "" + e,
                            r.call(this, e)
                        }
                    }),
                    Object.defineProperty(e, t, {
                        enumerable: n.enumerable
                    }),
                    {
                        getValue: function() {
                            return i
                        },
                        setValue: function(e) {
                            i = "" + e
                        },
                        stopTracking: function() {
                            e._valueTracker = null,
                            delete e[t]
                        }
                    }
                }
            }(e))
        }
        function v(e) {
            if (!e)
                return !1;
            var t = e._valueTracker;
            if (!t)
                return !0;
            var n = t.getValue()
              , i = "";
            return e && (i = h(e) ? e.checked ? "true" : "false" : e.value),
            (e = i) !== n && (t.setValue(e),
            !0)
        }
        function g(e) {
            if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0)))
                return null;
            try {
                return e.activeElement || e.body
            } catch (t) {
                return e.body
            }
        }
        function y(e, t) {
            var n = t.checked;
            return _o({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: null != n ? n : e._wrapperState.initialChecked
            })
        }
        function b(e, t) {
            var n = null == t.defaultValue ? "" : t.defaultValue
              , i = null != t.checked ? t.checked : t.defaultChecked;
            n = p(null != t.value ? t.value : n),
            e._wrapperState = {
                initialChecked: i,
                initialValue: n,
                controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
            }
        }
        function w(e, t) {
            null != (t = t.checked) && s(e, "checked", t, !1)
        }
        function C(e, t) {
            w(e, t);
            var n = p(t.value)
              , i = t.type;
            if (null != n)
                "number" === i ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
            else if ("submit" === i || "reset" === i)
                return void e.removeAttribute("value");
            t.hasOwnProperty("value") ? E(e, t.type, n) : t.hasOwnProperty("defaultValue") && E(e, t.type, p(t.defaultValue)),
            null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
        }
        function x(e, t, n) {
            if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                var i = t.type;
                if (!("submit" !== i && "reset" !== i || void 0 !== t.value && null !== t.value))
                    return;
                t = "" + e._wrapperState.initialValue,
                n || t === e.value || (e.value = t),
                e.defaultValue = t
            }
            "" !== (n = e.name) && (e.name = ""),
            e.defaultChecked = !!e._wrapperState.initialChecked,
            "" !== n && (e.name = n)
        }
        function E(e, t, n) {
            "number" === t && g(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
        }
        function S(e, n) {
            return e = _o({
                children: void 0
            }, n),
            (n = function(e) {
                var n = "";
                return t.Children.forEach(e, (function(e) {
                    null != e && (n += e)
                }
                )),
                n
            }(n.children)) && (e.children = n),
            e
        }
        function k(e, t, n, i) {
            if (e = e.options,
            t) {
                t = {};
                for (var o = 0; o < n.length; o++)
                    t["$" + n[o]] = !0;
                for (n = 0; n < e.length; n++)
                    o = t.hasOwnProperty("$" + e[n].value),
                    e[n].selected !== o && (e[n].selected = o),
                    o && i && (e[n].defaultSelected = !0)
            } else {
                for (n = "" + p(n),
                t = null,
                o = 0; o < e.length; o++) {
                    if (e[o].value === n)
                        return e[o].selected = !0,
                        void (i && (e[o].defaultSelected = !0));
                    null !== t || e[o].disabled || (t = e[o])
                }
                null !== t && (t.selected = !0)
            }
        }
        function T(e, t) {
            if (null != t.dangerouslySetInnerHTML)
                throw Error(n(91));
            return _o({}, t, {
                value: void 0,
                defaultValue: void 0,
                children: "" + e._wrapperState.initialValue
            })
        }
        function I(e, t) {
            var i = t.value;
            if (null == i) {
                if (i = t.children,
                t = t.defaultValue,
                null != i) {
                    if (null != t)
                        throw Error(n(92));
                    if (Array.isArray(i)) {
                        if (!(1 >= i.length))
                            throw Error(n(93));
                        i = i[0]
                    }
                    t = i
                }
                null == t && (t = ""),
                i = t
            }
            e._wrapperState = {
                initialValue: p(i)
            }
        }
        function _(e, t) {
            var n = p(t.value)
              , i = p(t.defaultValue);
            null != n && ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
            null != i && (e.defaultValue = "" + i)
        }
        function P(e, t) {
            (t = e.textContent) === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
        }
        function $(e) {
            switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
            }
        }
        function D(e, t) {
            return null == e || "http://www.w3.org/1999/xhtml" === e ? $(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
        }
        function M(e, t, n) {
            return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || tr.hasOwnProperty(e) && tr[e] ? ("" + t).trim() : t + "px"
        }
        function A(e, t) {
            for (var n in e = e.style,
            t)
                if (t.hasOwnProperty(n)) {
                    var i = 0 === n.indexOf("--")
                      , o = M(n, t[n], i);
                    "float" === n && (n = "cssFloat"),
                    i ? e.setProperty(n, o) : e[n] = o
                }
        }
        function N(e, t) {
            if (t) {
                if (ir[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                    throw Error(n(137, e));
                if (null != t.dangerouslySetInnerHTML) {
                    if (null != t.children)
                        throw Error(n(60));
                    if ("object" !== _typeof(t.dangerouslySetInnerHTML) || !("__html"in t.dangerouslySetInnerHTML))
                        throw Error(n(61))
                }
                if (null != t.style && "object" !== _typeof(t.style))
                    throw Error(n(62))
            }
        }
        function L(e, t) {
            if (-1 === e.indexOf("-"))
                return "string" == typeof t.is;
            switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
            }
        }
        function O(e) {
            return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
        }
        function R(e) {
            if (e = ut(e)) {
                if ("function" != typeof or)
                    throw Error(n(280));
                var t = e.stateNode;
                t && (t = dt(t),
                or(e.stateNode, e.type, t))
            }
        }
        function F(e) {
            rr ? ar ? ar.push(e) : ar = [e] : rr = e
        }
        function z() {
            if (rr) {
                var e = rr
                  , t = ar;
                if (ar = rr = null,
                R(e),
                t)
                    for (e = 0; e < t.length; e++)
                        R(t[e])
            }
        }
        function B() {
            null === rr && null === ar || (ur(),
            z())
        }
        function H(e, t) {
            var i = e.stateNode;
            if (null === i)
                return null;
            var o = dt(i);
            if (null === o)
                return null;
            i = o[t];
            e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (o = !o.disabled) || (o = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
                e = !o;
                break e;
            default:
                e = !1
            }
            if (e)
                return null;
            if (i && "function" != typeof i)
                throw Error(n(231, t, _typeof(i)));
            return i
        }
        function j(e, t, n, i, o, r, a, s, l) {
            vr = !1,
            gr = null,
            mr.apply(wr, arguments)
        }
        function q(e) {
            var t = e
              , n = e;
            if (e.alternate)
                for (; t.return; )
                    t = t.return;
            else {
                e = t;
                do {
                    0 != (1026 & (t = e).flags) && (n = t.return),
                    e = t.return
                } while (e)
            }
            return 3 === t.tag ? n : null
        }
        function W(e) {
            if (13 === e.tag) {
                var t = e.memoizedState;
                if (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
                null !== t)
                    return t.dehydrated
            }
            return null
        }
        function U(e) {
            if (q(e) !== e)
                throw Error(n(188))
        }
        function V(e) {
            if (!(e = function(e) {
                var t = e.alternate;
                if (!t) {
                    if (null === (t = q(e)))
                        throw Error(n(188));
                    return t !== e ? null : e
                }
                for (var i = e, o = t; ; ) {
                    var r = i.return;
                    if (null === r)
                        break;
                    var a = r.alternate;
                    if (null === a) {
                        if (null !== (o = r.return)) {
                            i = o;
                            continue
                        }
                        break
                    }
                    if (r.child === a.child) {
                        for (a = r.child; a; ) {
                            if (a === i)
                                return U(r),
                                e;
                            if (a === o)
                                return U(r),
                                t;
                            a = a.sibling
                        }
                        throw Error(n(188))
                    }
                    if (i.return !== o.return)
                        i = r,
                        o = a;
                    else {
                        for (var s = !1, l = r.child; l; ) {
                            if (l === i) {
                                s = !0,
                                i = r,
                                o = a;
                                break
                            }
                            if (l === o) {
                                s = !0,
                                o = r,
                                i = a;
                                break
                            }
                            l = l.sibling
                        }
                        if (!s) {
                            for (l = a.child; l; ) {
                                if (l === i) {
                                    s = !0,
                                    i = a,
                                    o = r;
                                    break
                                }
                                if (l === o) {
                                    s = !0,
                                    o = a,
                                    i = r;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!s)
                                throw Error(n(189))
                        }
                    }
                    if (i.alternate !== o)
                        throw Error(n(190))
                }
                if (3 !== i.tag)
                    throw Error(n(188));
                return i.stateNode.current === i ? e : t
            }(e)))
                return null;
            for (var t = e; ; ) {
                if (5 === t.tag || 6 === t.tag)
                    return t;
                if (t.child)
                    t.child.return = t,
                    t = t.child;
                else {
                    if (t === e)
                        break;
                    for (; !t.sibling; ) {
                        if (!t.return || t.return === e)
                            return null;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            }
            return null
        }
        function X(e, t) {
            for (var n = e.alternate; null !== t; ) {
                if (t === e || t === n)
                    return !0;
                t = t.return
            }
            return !1
        }
        function Y(e, t, n, i, o) {
            return {
                blockedOn: e,
                domEventName: t,
                eventSystemFlags: 16 | n,
                nativeEvent: o,
                targetContainers: [i]
            }
        }
        function Q(e, t) {
            switch (e) {
            case "focusin":
            case "focusout":
                Or = null;
                break;
            case "dragenter":
            case "dragleave":
                Rr = null;
                break;
            case "mouseover":
            case "mouseout":
                Fr = null;
                break;
            case "pointerover":
            case "pointerout":
                zr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Br.delete(t.pointerId)
            }
        }
        function Z(e, t, n, i, o, r) {
            return null === e || e.nativeEvent !== r ? (e = Y(t, n, i, o, r),
            null !== t && null !== (t = ut(t)) && au(t),
            e) : (e.eventSystemFlags |= i,
            t = e.targetContainers,
            null !== o && -1 === t.indexOf(o) && t.push(o),
            e)
        }
        function K(e) {
            var t = lt(e.target);
            if (null !== t) {
                var n = q(t);
                if (null !== n)
                    if (13 === (t = n.tag)) {
                        if (null !== (t = W(n)))
                            return e.blockedOn = t,
                            void lu(e.lanePriority, (function() {
                                Ir(e.priority, (function() {
                                    su(n)
                                }
                                ))
                            }
                            ))
                    } else if (3 === t && n.stateNode.hydrate)
                        return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
            }
            e.blockedOn = null
        }
        function G(e) {
            if (null !== e.blockedOn)
                return !1;
            for (var t = e.targetContainers; 0 < t.length; ) {
                var n = ge(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                if (null !== n)
                    return null !== (t = ut(n)) && au(t),
                    e.blockedOn = n,
                    !1;
                t.shift()
            }
            return !0
        }
        function J(e, t, n) {
            G(e) && n.delete(t)
        }
        function ee() {
            for (Nr = !1; 0 < Lr.length; ) {
                var e = Lr[0];
                if (null !== e.blockedOn) {
                    null !== (e = ut(e.blockedOn)) && ru(e);
                    break
                }
                for (var t = e.targetContainers; 0 < t.length; ) {
                    var n = ge(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== n) {
                        e.blockedOn = n;
                        break
                    }
                    t.shift()
                }
                null === e.blockedOn && Lr.shift()
            }
            null !== Or && G(Or) && (Or = null),
            null !== Rr && G(Rr) && (Rr = null),
            null !== Fr && G(Fr) && (Fr = null),
            zr.forEach(J),
            Br.forEach(J)
        }
        function te(e, t) {
            e.blockedOn === t && (e.blockedOn = null,
            Nr || (Nr = !0,
            Sr(Dr, ee)))
        }
        function ne(e) {
            if (0 < Lr.length) {
                te(Lr[0], e);
                for (var t = 1; t < Lr.length; t++) {
                    var n = Lr[t];
                    n.blockedOn === e && (n.blockedOn = null)
                }
            }
            for (null !== Or && te(Or, e),
            null !== Rr && te(Rr, e),
            null !== Fr && te(Fr, e),
            t = function(t) {
                return te(t, e)
            }
            ,
            zr.forEach(t),
            Br.forEach(t),
            t = 0; t < Hr.length; t++)
                (n = Hr[t]).blockedOn === e && (n.blockedOn = null);
            for (; 0 < Hr.length && null === (t = Hr[0]).blockedOn; )
                K(t),
                null === t.blockedOn && Hr.shift()
        }
        function ie(e, t) {
            var n = {};
            return n[e.toLowerCase()] = t.toLowerCase(),
            n["Webkit" + e] = "webkit" + t,
            n["Moz" + e] = "moz" + t,
            n
        }
        function oe(e) {
            if (Wr[e])
                return Wr[e];
            if (!qr[e])
                return e;
            var t, n = qr[e];
            for (t in n)
                if (n.hasOwnProperty(t) && t in Ur)
                    return Wr[e] = n[t];
            return e
        }
        function re(e, t) {
            for (var n = 0; n < e.length; n += 2) {
                var o = e[n]
                  , r = e[n + 1];
                r = "on" + (r[0].toUpperCase() + r.slice(1)),
                Kr.set(o, t),
                Zr.set(o, r),
                i(r, [o])
            }
        }
        function ae(e) {
            if (0 != (1 & e))
                return na = 15,
                1;
            if (0 != (2 & e))
                return na = 14,
                2;
            if (0 != (4 & e))
                return na = 13,
                4;
            var t = 24 & e;
            return 0 !== t ? (na = 12,
            t) : 0 != (32 & e) ? (na = 11,
            32) : 0 != (t = 192 & e) ? (na = 10,
            t) : 0 != (256 & e) ? (na = 9,
            256) : 0 != (t = 3584 & e) ? (na = 8,
            t) : 0 != (4096 & e) ? (na = 7,
            4096) : 0 != (t = 4186112 & e) ? (na = 6,
            t) : 0 != (t = 62914560 & e) ? (na = 5,
            t) : 67108864 & e ? (na = 4,
            67108864) : 0 != (134217728 & e) ? (na = 3,
            134217728) : 0 != (t = 805306368 & e) ? (na = 2,
            t) : 0 != (1073741824 & e) ? (na = 1,
            1073741824) : (na = 8,
            e)
        }
        function se(e) {
            switch (e) {
            case 15:
            case 14:
                return 99;
            case 13:
            case 12:
            case 11:
            case 10:
                return 98;
            case 9:
            case 8:
            case 7:
            case 6:
            case 4:
            case 5:
                return 97;
            case 3:
            case 2:
            case 1:
                return 95;
            case 0:
                return 90;
            default:
                throw Error(n(358, e))
            }
        }
        function le(e, t) {
            var n = e.pendingLanes;
            if (0 === n)
                return na = 0;
            var i = 0
              , o = 0
              , r = e.expiredLanes
              , a = e.suspendedLanes
              , s = e.pingedLanes;
            if (0 !== r)
                i = r,
                o = na = 15;
            else if (0 != (r = 134217727 & n)) {
                var l = r & ~a;
                0 !== l ? (i = ae(l),
                o = na) : 0 != (s &= r) && (i = ae(s),
                o = na)
            } else
                0 != (r = n & ~a) ? (i = ae(r),
                o = na) : 0 !== s && (i = ae(s),
                o = na);
            if (0 === i)
                return 0;
            if (i = n & ((0 > (i = 31 - ia(i)) ? 0 : 1 << i) << 1) - 1,
            0 !== t && t !== i && 0 == (t & a)) {
                if (ae(t),
                o <= na)
                    return t;
                na = o
            }
            if (0 !== (t = e.entangledLanes))
                for (e = e.entanglements,
                t &= i; 0 < t; )
                    o = 1 << (n = 31 - ia(t)),
                    i |= e[n],
                    t &= ~o;
            return i
        }
        function ue(e) {
            return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
        }
        function ce(e, t) {
            switch (e) {
            case 15:
                return 1;
            case 14:
                return 2;
            case 12:
                return 0 === (e = de(24 & ~t)) ? ce(10, t) : e;
            case 10:
                return 0 === (e = de(192 & ~t)) ? ce(8, t) : e;
            case 8:
                return 0 === (e = de(3584 & ~t)) && 0 === (e = de(4186112 & ~t)) && (e = 512),
                e;
            case 2:
                return 0 === (t = de(805306368 & ~t)) && (t = 268435456),
                t
            }
            throw Error(n(358, e))
        }
        function de(e) {
            return e & -e
        }
        function fe(e) {
            for (var t = [], n = 0; 31 > n; n++)
                t.push(e);
            return t
        }
        function pe(e, t, n) {
            e.pendingLanes |= t;
            var i = t - 1;
            e.suspendedLanes &= i,
            e.pingedLanes &= i,
            (e = e.eventTimes)[t = 31 - ia(t)] = n
        }
        function he(e, t, n, i) {
            dr || ur();
            var o = ve
              , r = dr;
            dr = !0;
            try {
                lr(o, e, t, n, i)
            } finally {
                (dr = r) || B()
            }
        }
        function me(e, t, n, i) {
            sa(aa, ve.bind(null, e, t, n, i))
        }
        function ve(e, t, n, i) {
            var o;
            if (la)
                if ((o = 0 == (4 & t)) && 0 < Lr.length && -1 < jr.indexOf(e))
                    e = Y(null, e, t, n, i),
                    Lr.push(e);
                else {
                    var r = ge(e, t, n, i);
                    if (null === r)
                        o && Q(e, i);
                    else {
                        if (o) {
                            if (-1 < jr.indexOf(e))
                                return e = Y(r, e, t, n, i),
                                void Lr.push(e);
                            if (function(e, t, n, i, o) {
                                switch (t) {
                                case "focusin":
                                    return Or = Z(Or, e, t, n, i, o),
                                    !0;
                                case "dragenter":
                                    return Rr = Z(Rr, e, t, n, i, o),
                                    !0;
                                case "mouseover":
                                    return Fr = Z(Fr, e, t, n, i, o),
                                    !0;
                                case "pointerover":
                                    var r = o.pointerId;
                                    return zr.set(r, Z(zr.get(r) || null, e, t, n, i, o)),
                                    !0;
                                case "gotpointercapture":
                                    return r = o.pointerId,
                                    Br.set(r, Z(Br.get(r) || null, e, t, n, i, o)),
                                    !0
                                }
                                return !1
                            }(r, e, t, n, i))
                                return;
                            Q(e, i)
                        }
                        Ke(e, t, i, null, n)
                    }
                }
        }
        function ge(e, t, n, i) {
            var o = O(i);
            if (null !== (o = lt(o))) {
                var r = q(o);
                if (null === r)
                    o = null;
                else {
                    var a = r.tag;
                    if (13 === a) {
                        if (null !== (o = W(r)))
                            return o;
                        o = null
                    } else if (3 === a) {
                        if (r.stateNode.hydrate)
                            return 3 === r.tag ? r.stateNode.containerInfo : null;
                        o = null
                    } else
                        r !== o && (o = null)
                }
            }
            return Ke(e, t, i, o, n),
            null
        }
        function ye() {
            if (da)
                return da;
            var e, t, n = ca, i = n.length, o = "value"in ua ? ua.value : ua.textContent, r = o.length;
            for (e = 0; e < i && n[e] === o[e]; e++)
                ;
            var a = i - e;
            for (t = 1; t <= a && n[i - t] === o[r - t]; t++)
                ;
            return da = o.slice(e, 1 < t ? 1 - t : void 0)
        }
        function be(e) {
            var t = e.keyCode;
            return "charCode"in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t,
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
        }
        function we() {
            return !0
        }
        function Ce() {
            return !1
        }
        function xe(e) {
            function t(t, n, i, o, r) {
                for (var a in this._reactName = t,
                this._targetInst = i,
                this.type = n,
                this.nativeEvent = o,
                this.target = r,
                this.currentTarget = null,
                e)
                    e.hasOwnProperty(a) && (t = e[a],
                    this[a] = t ? t(o) : o[a]);
                return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? we : Ce,
                this.isPropagationStopped = Ce,
                this
            }
            return _o(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var e = this.nativeEvent;
                    e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                    this.isDefaultPrevented = we)
                },
                stopPropagation: function() {
                    var e = this.nativeEvent;
                    e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                    this.isPropagationStopped = we)
                },
                persist: function() {},
                isPersistent: we
            }),
            t
        }
        function Ee(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : !!(e = Ta[e]) && !!t[e]
        }
        function Se(e) {
            return Ee
        }
        function ke(e, t) {
            switch (e) {
            case "keyup":
                return -1 !== Ma.indexOf(t.keyCode);
            case "keydown":
                return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
            }
        }
        function Te(e) {
            return e = e.detail,
            "object" === _typeof(e) && "data"in e ? e.data : null
        }
        function Ie(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return "input" === t ? !!Ba[e.type] : "textarea" === t
        }
        function _e(e, t, n, i) {
            F(i),
            0 < (t = Je(t, "onChange")).length && (n = new pa("onChange","change",null,n,i),
            e.push({
                event: n,
                listeners: t
            }))
        }
        function Pe(e) {
            Ve(e, 0)
        }
        function $e(e) {
            if (v(ct(e)))
                return e
        }
        function De(e, t) {
            if ("change" === e)
                return t
        }
        function Me() {
            Ha && (Ha.detachEvent("onpropertychange", Ae),
            ja = Ha = null)
        }
        function Ae(e) {
            if ("value" === e.propertyName && $e(ja)) {
                var t = [];
                if (_e(t, ja, e, O(e)),
                e = Pe,
                dr)
                    e(t);
                else {
                    dr = !0;
                    try {
                        sr(e, t)
                    } finally {
                        dr = !1,
                        B()
                    }
                }
            }
        }
        function Ne(e, t, n) {
            "focusin" === e ? (Me(),
            ja = n,
            (Ha = t).attachEvent("onpropertychange", Ae)) : "focusout" === e && Me()
        }
        function Le(e, t) {
            if ("selectionchange" === e || "keyup" === e || "keydown" === e)
                return $e(ja)
        }
        function Oe(e, t) {
            if ("click" === e)
                return $e(t)
        }
        function Re(e, t) {
            if ("input" === e || "change" === e)
                return $e(t)
        }
        function Fe(e, t) {
            if (Wa(e, t))
                return !0;
            if ("object" !== _typeof(e) || null === e || "object" !== _typeof(t) || null === t)
                return !1;
            var n = Object.keys(e)
              , i = Object.keys(t);
            if (n.length !== i.length)
                return !1;
            for (i = 0; i < n.length; i++)
                if (!Ua.call(t, n[i]) || !Wa(e[n[i]], t[n[i]]))
                    return !1;
            return !0
        }
        function ze(e) {
            for (; e && e.firstChild; )
                e = e.firstChild;
            return e
        }
        function Be(e, t) {
            var n, i = ze(e);
            for (e = 0; i; ) {
                if (3 === i.nodeType) {
                    if (n = e + i.textContent.length,
                    e <= t && n >= t)
                        return {
                            node: i,
                            offset: t - e
                        };
                    e = n
                }
                e: {
                    for (; i; ) {
                        if (i.nextSibling) {
                            i = i.nextSibling;
                            break e
                        }
                        i = i.parentNode
                    }
                    i = void 0
                }
                i = ze(i)
            }
        }
        function He(e, t) {
            return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? He(e, t.parentNode) : "contains"in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
        }
        function je() {
            for (var e = window, t = g(); t instanceof e.HTMLIFrameElement; ) {
                try {
                    var n = "string" == typeof t.contentWindow.location.href
                } catch (e) {
                    n = !1
                }
                if (!n)
                    break;
                t = g((e = t.contentWindow).document)
            }
            return t
        }
        function qe(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
        }
        function We(e, t, n) {
            var i = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
            Za || null == Xa || Xa !== g(i) || (i = "selectionStart"in (i = Xa) && qe(i) ? {
                start: i.selectionStart,
                end: i.selectionEnd
            } : {
                anchorNode: (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection()).anchorNode,
                anchorOffset: i.anchorOffset,
                focusNode: i.focusNode,
                focusOffset: i.focusOffset
            },
            Qa && Fe(Qa, i) || (Qa = i,
            0 < (i = Je(Ya, "onSelect")).length && (t = new pa("onSelect","select",null,t,n),
            e.push({
                event: t,
                listeners: i
            }),
            t.target = Xa)))
        }
        function Ue(e, t, i) {
            var o = e.type || "unknown-event";
            e.currentTarget = i,
            function(e, t, i, o, r, a, s, l, u) {
                if (j.apply(this, arguments),
                vr) {
                    if (!vr)
                        throw Error(n(198));
                    var c = gr;
                    vr = !1,
                    gr = null,
                    yr || (yr = !0,
                    br = c)
                }
            }(o, t, void 0, e),
            e.currentTarget = null
        }
        function Ve(e, t) {
            t = 0 != (4 & t);
            for (var n = 0; n < e.length; n++) {
                var i = e[n]
                  , o = i.event;
                i = i.listeners;
                e: {
                    var r = void 0;
                    if (t)
                        for (var a = i.length - 1; 0 <= a; a--) {
                            var s = i[a]
                              , l = s.instance
                              , u = s.currentTarget;
                            if (s = s.listener,
                            l !== r && o.isPropagationStopped())
                                break e;
                            Ue(o, s, u),
                            r = l
                        }
                    else
                        for (a = 0; a < i.length; a++) {
                            if (l = (s = i[a]).instance,
                            u = s.currentTarget,
                            s = s.listener,
                            l !== r && o.isPropagationStopped())
                                break e;
                            Ue(o, s, u),
                            r = l
                        }
                }
            }
            if (yr)
                throw e = br,
                yr = !1,
                br = null,
                e
        }
        function Xe(e, t) {
            var n = ft(t)
              , i = e + "__bubble";
            n.has(i) || (Ze(t, e, 2, !1),
            n.add(i))
        }
        function Ye(e) {
            e[Ja] || (e[Ja] = !0,
            yo.forEach((function(t) {
                Ga.has(t) || Qe(t, !1, e, null),
                Qe(t, !0, e, null)
            }
            )))
        }
        function Qe(e, t, n, i) {
            var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0
              , r = n;
            if ("selectionchange" === e && 9 !== n.nodeType && (r = n.ownerDocument),
            null !== i && !t && Ga.has(e)) {
                if ("scroll" !== e)
                    return;
                o |= 2,
                r = i
            }
            var a = ft(r)
              , s = e + "__" + (t ? "capture" : "bubble");
            a.has(s) || (t && (o |= 4),
            Ze(r, e, o, t),
            a.add(s))
        }
        function Ze(e, t, n, i, o) {
            switch (void 0 === (o = Kr.get(t)) ? 2 : o) {
            case 0:
                o = he;
                break;
            case 1:
                o = me;
                break;
            default:
                o = ve
            }
            n = o.bind(null, t, n, e),
            o = void 0,
            !pr || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0),
            i ? void 0 !== o ? e.addEventListener(t, n, {
                capture: !0,
                passive: o
            }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {
                passive: o
            }) : e.addEventListener(t, n, !1)
        }
        function Ke(e, t, n, i, o) {
            var r = i;
            if (0 == (1 & t) && 0 == (2 & t) && null !== i)
                e: for (; ; ) {
                    if (null === i)
                        return;
                    var a = i.tag;
                    if (3 === a || 4 === a) {
                        var s = i.stateNode.containerInfo;
                        if (s === o || 8 === s.nodeType && s.parentNode === o)
                            break;
                        if (4 === a)
                            for (a = i.return; null !== a; ) {
                                var l = a.tag;
                                if ((3 === l || 4 === l) && ((l = a.stateNode.containerInfo) === o || 8 === l.nodeType && l.parentNode === o))
                                    return;
                                a = a.return
                            }
                        for (; null !== s; ) {
                            if (null === (a = lt(s)))
                                return;
                            if (5 === (l = a.tag) || 6 === l) {
                                i = r = a;
                                continue e
                            }
                            s = s.parentNode
                        }
                    }
                    i = i.return
                }
            !function(e, t, n) {
                if (fr)
                    return e(t, n);
                fr = !0;
                try {
                    cr(e, t, n)
                } finally {
                    fr = !1,
                    B()
                }
            }((function() {
                var i = r
                  , o = O(n)
                  , a = [];
                e: {
                    var s = Zr.get(e);
                    if (void 0 !== s) {
                        var l = pa
                          , u = e;
                        switch (e) {
                        case "keypress":
                            if (0 === be(n))
                                break e;
                        case "keydown":
                        case "keyup":
                            l = Ia;
                            break;
                        case "focusin":
                            u = "focus",
                            l = ba;
                            break;
                        case "focusout":
                            u = "blur",
                            l = ba;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            l = ba;
                            break;
                        case "click":
                            if (2 === n.button)
                                break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            l = ga;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            l = ya;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            l = Pa;
                            break;
                        case Vr:
                        case Xr:
                        case Yr:
                            l = wa;
                            break;
                        case Qr:
                            l = $a;
                            break;
                        case "scroll":
                            l = ma;
                            break;
                        case "wheel":
                            l = Da;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            l = Ca;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            l = _a
                        }
                        var c = 0 != (4 & t)
                          , d = !c && "scroll" === e
                          , f = c ? null !== s ? s + "Capture" : null : s;
                        c = [];
                        for (var p, h = i; null !== h; ) {
                            var m = (p = h).stateNode;
                            if (5 === p.tag && null !== m && (p = m,
                            null !== f && null != (m = H(h, f)) && c.push(Ge(h, m, p))),
                            d)
                                break;
                            h = h.return
                        }
                        0 < c.length && (s = new l(s,u,null,n,o),
                        a.push({
                            event: s,
                            listeners: c
                        }))
                    }
                }
                if (0 == (7 & t)) {
                    if (l = "mouseout" === e || "pointerout" === e,
                    (!(s = "mouseover" === e || "pointerover" === e) || 0 != (16 & t) || !(u = n.relatedTarget || n.fromElement) || !lt(u) && !u[ls]) && (l || s) && (s = o.window === o ? o : (s = o.ownerDocument) ? s.defaultView || s.parentWindow : window,
                    l ? (l = i,
                    null !== (u = (u = n.relatedTarget || n.toElement) ? lt(u) : null) && (u !== (d = q(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (l = null,
                    u = i),
                    l !== u)) {
                        if (c = ga,
                        m = "onMouseLeave",
                        f = "onMouseEnter",
                        h = "mouse",
                        "pointerout" !== e && "pointerover" !== e || (c = _a,
                        m = "onPointerLeave",
                        f = "onPointerEnter",
                        h = "pointer"),
                        d = null == l ? s : ct(l),
                        p = null == u ? s : ct(u),
                        (s = new c(m,h + "leave",l,n,o)).target = d,
                        s.relatedTarget = p,
                        m = null,
                        lt(o) === i && ((c = new c(f,h + "enter",u,n,o)).target = p,
                        c.relatedTarget = d,
                        m = c),
                        d = m,
                        l && u)
                            e: {
                                for (f = u,
                                h = 0,
                                p = c = l; p; p = et(p))
                                    h++;
                                for (p = 0,
                                m = f; m; m = et(m))
                                    p++;
                                for (; 0 < h - p; )
                                    c = et(c),
                                    h--;
                                for (; 0 < p - h; )
                                    f = et(f),
                                    p--;
                                for (; h--; ) {
                                    if (c === f || null !== f && c === f.alternate)
                                        break e;
                                    c = et(c),
                                    f = et(f)
                                }
                                c = null
                            }
                        else
                            c = null;
                        null !== l && tt(a, s, l, c, !1),
                        null !== u && null !== d && tt(a, d, u, c, !0)
                    }
                    if ("select" === (l = (s = i ? ct(i) : window).nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type)
                        var v = De;
                    else if (Ie(s))
                        if (qa)
                            v = Re;
                        else {
                            v = Le;
                            var g = Ne
                        }
                    else
                        (l = s.nodeName) && "input" === l.toLowerCase() && ("checkbox" === s.type || "radio" === s.type) && (v = Oe);
                    switch (v && (v = v(e, i)) ? _e(a, v, n, o) : (g && g(e, s, i),
                    "focusout" === e && (g = s._wrapperState) && g.controlled && "number" === s.type && E(s, "number", s.value)),
                    g = i ? ct(i) : window,
                    e) {
                    case "focusin":
                        (Ie(g) || "true" === g.contentEditable) && (Xa = g,
                        Ya = i,
                        Qa = null);
                        break;
                    case "focusout":
                        Qa = Ya = Xa = null;
                        break;
                    case "mousedown":
                        Za = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Za = !1,
                        We(a, n, o);
                        break;
                    case "selectionchange":
                        if (Va)
                            break;
                    case "keydown":
                    case "keyup":
                        We(a, n, o)
                    }
                    var y;
                    if (Aa)
                        e: {
                            switch (e) {
                            case "compositionstart":
                                var b = "onCompositionStart";
                                break e;
                            case "compositionend":
                                b = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                b = "onCompositionUpdate";
                                break e
                            }
                            b = void 0
                        }
                    else
                        za ? ke(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                    b && (Oa && "ko" !== n.locale && (za || "onCompositionStart" !== b ? "onCompositionEnd" === b && za && (y = ye()) : (ca = "value"in (ua = o) ? ua.value : ua.textContent,
                    za = !0)),
                    0 < (g = Je(i, b)).length && (b = new xa(b,e,null,n,o),
                    a.push({
                        event: b,
                        listeners: g
                    }),
                    (y || null !== (y = Te(n))) && (b.data = y))),
                    (y = La ? function(e, t) {
                        switch (e) {
                        case "compositionend":
                            return Te(t);
                        case "keypress":
                            return 32 !== t.which ? null : (Fa = !0,
                            Ra);
                        case "textInput":
                            return (e = t.data) === Ra && Fa ? null : e;
                        default:
                            return null
                        }
                    }(e, n) : function(e, t) {
                        if (za)
                            return "compositionend" === e || !Aa && ke(e, t) ? (e = ye(),
                            da = ca = ua = null,
                            za = !1,
                            e) : null;
                        switch (e) {
                        case "paste":
                            return null;
                        case "keypress":
                            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                if (t.char && 1 < t.char.length)
                                    return t.char;
                                if (t.which)
                                    return String.fromCharCode(t.which)
                            }
                            return null;
                        case "compositionend":
                            return Oa && "ko" !== t.locale ? null : t.data;
                        default:
                            return null
                        }
                    }(e, n)) && 0 < (i = Je(i, "onBeforeInput")).length && (o = new Ea("onBeforeInput","beforeinput",null,n,o),
                    a.push({
                        event: o,
                        listeners: i
                    }),
                    o.data = y)
                }
                Ve(a, t)
            }
            ))
        }
        function Ge(e, t, n) {
            return {
                instance: e,
                listener: t,
                currentTarget: n
            }
        }
        function Je(e, t) {
            for (var n = t + "Capture", i = []; null !== e; ) {
                var o = e
                  , r = o.stateNode;
                5 === o.tag && null !== r && (o = r,
                null != (r = H(e, n)) && i.unshift(Ge(e, r, o)),
                null != (r = H(e, t)) && i.push(Ge(e, r, o))),
                e = e.return
            }
            return i
        }
        function et(e) {
            if (null === e)
                return null;
            do {
                e = e.return
            } while (e && 5 !== e.tag);
            return e || null
        }
        function tt(e, t, n, i, o) {
            for (var r = t._reactName, a = []; null !== n && n !== i; ) {
                var s = n
                  , l = s.alternate
                  , u = s.stateNode;
                if (null !== l && l === i)
                    break;
                5 === s.tag && null !== u && (s = u,
                o ? null != (l = H(n, r)) && a.unshift(Ge(n, l, s)) : o || null != (l = H(n, r)) && a.push(Ge(n, l, s))),
                n = n.return
            }
            0 !== a.length && e.push({
                event: t,
                listeners: a
            })
        }
        function nt() {}
        function it(e, t) {
            switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!t.autoFocus
            }
            return !1
        }
        function ot(e, t) {
            return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" === _typeof(t.dangerouslySetInnerHTML) && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
        }
        function rt(e) {
            (1 === e.nodeType || 9 === e.nodeType && null != (e = e.body)) && (e.textContent = "")
        }
        function at(e) {
            for (; null != e; e = e.nextSibling) {
                var t = e.nodeType;
                if (1 === t || 3 === t)
                    break
            }
            return e
        }
        function st(e) {
            e = e.previousSibling;
            for (var t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ("$" === n || "$!" === n || "$?" === n) {
                        if (0 === t)
                            return e;
                        t--
                    } else
                        "/$" === n && t++
                }
                e = e.previousSibling
            }
            return null
        }
        function lt(e) {
            var t = e[as];
            if (t)
                return t;
            for (var n = e.parentNode; n; ) {
                if (t = n[ls] || n[as]) {
                    if (n = t.alternate,
                    null !== t.child || null !== n && null !== n.child)
                        for (e = st(e); null !== e; ) {
                            if (n = e[as])
                                return n;
                            e = st(e)
                        }
                    return t
                }
                n = (e = n).parentNode
            }
            return null
        }
        function ut(e) {
            return !(e = e[as] || e[ls]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
        }
        function ct(e) {
            if (5 === e.tag || 6 === e.tag)
                return e.stateNode;
            throw Error(n(33))
        }
        function dt(e) {
            return e[ss] || null
        }
        function ft(e) {
            var t = e[us];
            return void 0 === t && (t = e[us] = new Set),
            t
        }
        function pt(e) {
            return {
                current: e
            }
        }
        function ht(e, t) {
            0 > ds || (e.current = cs[ds],
            cs[ds] = null,
            ds--)
        }
        function mt(e, t, n) {
            ds++,
            cs[ds] = e.current,
            e.current = t
        }
        function vt(e, t) {
            var n = e.type.contextTypes;
            if (!n)
                return fs;
            var i = e.stateNode;
            if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
                return i.__reactInternalMemoizedMaskedChildContext;
            var o, r = {};
            for (o in n)
                r[o] = t[o];
            return i && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t,
            e.__reactInternalMemoizedMaskedChildContext = r),
            r
        }
        function gt(e) {
            return null != (e = e.childContextTypes)
        }
        function yt(e, t, i) {
            if (ps.current !== fs)
                throw Error(n(168));
            mt(ps, t),
            mt(hs, i)
        }
        function bt(e, t, i) {
            var o = e.stateNode;
            if (e = t.childContextTypes,
            "function" != typeof o.getChildContext)
                return i;
            for (var r in o = o.getChildContext())
                if (!(r in e))
                    throw Error(n(108, f(t) || "Unknown", r));
            return _o({}, i, o)
        }
        function wt(e) {
            return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || fs,
            ms = ps.current,
            mt(ps, e),
            mt(hs, hs.current),
            !0
        }
        function Ct(e, t, i) {
            var o = e.stateNode;
            if (!o)
                throw Error(n(169));
            i ? (e = bt(e, t, ms),
            o.__reactInternalMemoizedMergedChildContext = e,
            ht(hs),
            ht(ps),
            mt(ps, e)) : ht(hs),
            mt(hs, i)
        }
        function xt() {
            switch (Cs()) {
            case xs:
                return 99;
            case Es:
                return 98;
            case Ss:
                return 97;
            case ks:
                return 96;
            case Ts:
                return 95;
            default:
                throw Error(n(332))
            }
        }
        function Et(e) {
            switch (e) {
            case 99:
                return xs;
            case 98:
                return Es;
            case 97:
                return Ss;
            case 96:
                return ks;
            case 95:
                return Ts;
            default:
                throw Error(n(332))
            }
        }
        function St(e, t) {
            return e = Et(e),
            ys(e, t)
        }
        function kt(e, t, n) {
            return e = Et(e),
            bs(e, t, n)
        }
        function Tt() {
            if (null !== Ds) {
                var e = Ds;
                Ds = null,
                ws(e)
            }
            It()
        }
        function It() {
            if (!Ms && null !== $s) {
                Ms = !0;
                var e = 0;
                try {
                    var t = $s;
                    St(99, (function() {
                        for (; e < t.length; e++) {
                            var n = t[e];
                            do {
                                n = n(!0)
                            } while (null !== n)
                        }
                    }
                    )),
                    $s = null
                } catch (t) {
                    throw null !== $s && ($s = $s.slice(e + 1)),
                    bs(xs, Tt),
                    t
                } finally {
                    Ms = !1
                }
            }
        }
        function _t(e, t) {
            if (e && e.defaultProps) {
                for (var n in t = _o({}, t),
                e = e.defaultProps)
                    void 0 === t[n] && (t[n] = e[n]);
                return t
            }
            return t
        }
        function Pt() {
            zs = Fs = Rs = null
        }
        function $t(e) {
            var t = Os.current;
            ht(Os),
            e.type._context._currentValue = t
        }
        function Dt(e, t) {
            for (; null !== e; ) {
                var n = e.alternate;
                if ((e.childLanes & t) === t) {
                    if (null === n || (n.childLanes & t) === t)
                        break;
                    n.childLanes |= t
                } else
                    e.childLanes |= t,
                    null !== n && (n.childLanes |= t);
                e = e.return
            }
        }
        function Mt(e, t) {
            Rs = e,
            zs = Fs = null,
            null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (hl = !0),
            e.firstContext = null)
        }
        function At(e, t) {
            if (zs !== e && !1 !== t && 0 !== t)
                if ("number" == typeof t && 1073741823 !== t || (zs = e,
                t = 1073741823),
                t = {
                    context: e,
                    observedBits: t,
                    next: null
                },
                null === Fs) {
                    if (null === Rs)
                        throw Error(n(308));
                    Fs = t,
                    Rs.dependencies = {
                        lanes: 0,
                        firstContext: t,
                        responders: null
                    }
                } else
                    Fs = Fs.next = t;
            return e._currentValue
        }
        function Nt(e) {
            e.updateQueue = {
                baseState: e.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null
                },
                effects: null
            }
        }
        function Lt(e, t) {
            e = e.updateQueue,
            t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects
            })
        }
        function Ot(e, t) {
            return {
                eventTime: e,
                lane: t,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            }
        }
        function Rt(e, t) {
            if (null !== (e = e.updateQueue)) {
                var n = (e = e.shared).pending;
                null === n ? t.next = t : (t.next = n.next,
                n.next = t),
                e.pending = t
            }
        }
        function Ft(e, t) {
            var n = e.updateQueue
              , i = e.alternate;
            if (null !== i && n === (i = i.updateQueue)) {
                var o = null
                  , r = null;
                if (null !== (n = n.firstBaseUpdate)) {
                    do {
                        var a = {
                            eventTime: n.eventTime,
                            lane: n.lane,
                            tag: n.tag,
                            payload: n.payload,
                            callback: n.callback,
                            next: null
                        };
                        null === r ? o = r = a : r = r.next = a,
                        n = n.next
                    } while (null !== n);
                    null === r ? o = r = t : r = r.next = t
                } else
                    o = r = t;
                return n = {
                    baseState: i.baseState,
                    firstBaseUpdate: o,
                    lastBaseUpdate: r,
                    shared: i.shared,
                    effects: i.effects
                },
                void (e.updateQueue = n)
            }
            null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t,
            n.lastBaseUpdate = t
        }
        function zt(e, t, n, i) {
            var o = e.updateQueue;
            Bs = !1;
            var r = o.firstBaseUpdate
              , a = o.lastBaseUpdate
              , s = o.shared.pending;
            if (null !== s) {
                o.shared.pending = null;
                var l = s
                  , u = l.next;
                l.next = null,
                null === a ? r = u : a.next = u,
                a = l;
                var c = e.alternate;
                if (null !== c) {
                    var d = (c = c.updateQueue).lastBaseUpdate;
                    d !== a && (null === d ? c.firstBaseUpdate = u : d.next = u,
                    c.lastBaseUpdate = l)
                }
            }
            if (null !== r) {
                for (d = o.baseState,
                a = 0,
                c = u = l = null; ; ) {
                    s = r.lane;
                    var f = r.eventTime;
                    if ((i & s) === s) {
                        null !== c && (c = c.next = {
                            eventTime: f,
                            lane: 0,
                            tag: r.tag,
                            payload: r.payload,
                            callback: r.callback,
                            next: null
                        });
                        e: {
                            var p = e
                              , h = r;
                            switch (s = t,
                            f = n,
                            h.tag) {
                            case 1:
                                if ("function" == typeof (p = h.payload)) {
                                    d = p.call(f, d, s);
                                    break e
                                }
                                d = p;
                                break e;
                            case 3:
                                p.flags = -4097 & p.flags | 64;
                            case 0:
                                if (null == (s = "function" == typeof (p = h.payload) ? p.call(f, d, s) : p))
                                    break e;
                                d = _o({}, d, s);
                                break e;
                            case 2:
                                Bs = !0
                            }
                        }
                        null !== r.callback && (e.flags |= 32,
                        null === (s = o.effects) ? o.effects = [r] : s.push(r))
                    } else
                        f = {
                            eventTime: f,
                            lane: s,
                            tag: r.tag,
                            payload: r.payload,
                            callback: r.callback,
                            next: null
                        },
                        null === c ? (u = c = f,
                        l = d) : c = c.next = f,
                        a |= s;
                    if (null === (r = r.next)) {
                        if (null === (s = o.shared.pending))
                            break;
                        r = s.next,
                        s.next = null,
                        o.lastBaseUpdate = s,
                        o.shared.pending = null
                    }
                }
                null === c && (l = d),
                o.baseState = l,
                o.firstBaseUpdate = u,
                o.lastBaseUpdate = c,
                Nl |= a,
                e.lanes = a,
                e.memoizedState = d
            }
        }
        function Bt(e, t, i) {
            if (e = t.effects,
            t.effects = null,
            null !== e)
                for (t = 0; t < e.length; t++) {
                    var o = e[t]
                      , r = o.callback;
                    if (null !== r) {
                        if (o.callback = null,
                        o = i,
                        "function" != typeof r)
                            throw Error(n(191, r));
                        r.call(o)
                    }
                }
        }
        function Ht(e, t, n, i) {
            n = null == (n = n(i, t = e.memoizedState)) ? t : _o({}, t, n),
            e.memoizedState = n,
            0 === e.lanes && (e.updateQueue.baseState = n)
        }
        function jt(e, t, n, i, o, r, a) {
            return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(i, r, a) : !(t.prototype && t.prototype.isPureReactComponent && Fe(n, i) && Fe(o, r))
        }
        function qt(e, t, n) {
            var i = !1
              , o = fs
              , r = t.contextType;
            return "object" === _typeof(r) && null !== r ? r = At(r) : (o = gt(t) ? ms : ps.current,
            r = (i = null != (i = t.contextTypes)) ? vt(e, o) : fs),
            t = new t(n,r),
            e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null,
            t.updater = js,
            e.stateNode = t,
            t._reactInternals = e,
            i && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o,
            e.__reactInternalMemoizedMaskedChildContext = r),
            t
        }
        function Wt(e, t, n, i) {
            e = t.state,
            "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, i),
            "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, i),
            t.state !== e && js.enqueueReplaceState(t, t.state, null)
        }
        function Ut(e, t, n, i) {
            var o = e.stateNode;
            o.props = n,
            o.state = e.memoizedState,
            o.refs = Hs,
            Nt(e);
            var r = t.contextType;
            "object" === _typeof(r) && null !== r ? o.context = At(r) : (r = gt(t) ? ms : ps.current,
            o.context = vt(e, r)),
            zt(e, n, o, i),
            o.state = e.memoizedState,
            "function" == typeof (r = t.getDerivedStateFromProps) && (Ht(e, t, r, n),
            o.state = e.memoizedState),
            "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (t = o.state,
            "function" == typeof o.componentWillMount && o.componentWillMount(),
            "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
            t !== o.state && js.enqueueReplaceState(o, o.state, null),
            zt(e, n, o, i),
            o.state = e.memoizedState),
            "function" == typeof o.componentDidMount && (e.flags |= 4)
        }
        function Vt(e, t, i) {
            if (null !== (e = i.ref) && "function" != typeof e && "object" !== _typeof(e)) {
                if (i._owner) {
                    if (i = i._owner) {
                        if (1 !== i.tag)
                            throw Error(n(309));
                        var o = i.stateNode
                    }
                    if (!o)
                        throw Error(n(147, e));
                    var r = "" + e;
                    return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === r ? t.ref : ((t = function(e) {
                        var t = o.refs;
                        t === Hs && (t = o.refs = {}),
                        null === e ? delete t[r] : t[r] = e
                    }
                    )._stringRef = r,
                    t)
                }
                if ("string" != typeof e)
                    throw Error(n(284));
                if (!i._owner)
                    throw Error(n(290, e))
            }
            return e
        }
        function Xt(e, t) {
            if ("textarea" !== e.type)
                throw Error(n(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t))
        }
        function Yt(e) {
            function t(t, n) {
                if (e) {
                    var i = t.lastEffect;
                    null !== i ? (i.nextEffect = n,
                    t.lastEffect = n) : t.firstEffect = t.lastEffect = n,
                    n.nextEffect = null,
                    n.flags = 8
                }
            }
            function i(n, i) {
                if (!e)
                    return null;
                for (; null !== i; )
                    t(n, i),
                    i = i.sibling;
                return null
            }
            function o(e, t) {
                for (e = new Map; null !== t; )
                    null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                    t = t.sibling;
                return e
            }
            function r(e, t) {
                return (e = Ji(e, t)).index = 0,
                e.sibling = null,
                e
            }
            function a(t, n, i) {
                return t.index = i,
                e ? null !== (i = t.alternate) ? (i = i.index) < n ? (t.flags = 2,
                n) : i : (t.flags = 2,
                n) : n
            }
            function s(t) {
                return e && null === t.alternate && (t.flags = 2),
                t
            }
            function u(e, t, n, i) {
                return null === t || 6 !== t.tag ? ((t = io(n, e.mode, i)).return = e,
                t) : ((t = r(t, n)).return = e,
                t)
            }
            function c(e, t, n, i) {
                return null !== t && t.elementType === n.type ? ((i = r(t, n.props)).ref = Vt(e, t, n),
                i.return = e,
                i) : ((i = eo(n.type, n.key, n.props, null, e.mode, i)).ref = Vt(e, t, n),
                i.return = e,
                i)
            }
            function d(e, t, n, i) {
                return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = oo(n, e.mode, i)).return = e,
                t) : ((t = r(t, n.children || [])).return = e,
                t)
            }
            function p(e, t, n, i, o) {
                return null === t || 7 !== t.tag ? ((t = to(n, e.mode, i, o)).return = e,
                t) : ((t = r(t, n)).return = e,
                t)
            }
            function h(e, t, n) {
                if ("string" == typeof t || "number" == typeof t)
                    return (t = io("" + t, e.mode, n)).return = e,
                    t;
                if ("object" === _typeof(t) && null !== t) {
                    switch (t.$$typeof) {
                    case $o:
                        return (n = eo(t.type, t.key, t.props, null, e.mode, n)).ref = Vt(e, null, t),
                        n.return = e,
                        n;
                    case Do:
                        return (t = oo(t, e.mode, n)).return = e,
                        t
                    }
                    if (qs(t) || l(t))
                        return (t = to(t, e.mode, n, null)).return = e,
                        t;
                    Xt(e, t)
                }
                return null
            }
            function m(e, t, n, i) {
                var o = null !== t ? t.key : null;
                if ("string" == typeof n || "number" == typeof n)
                    return null !== o ? null : u(e, t, "" + n, i);
                if ("object" === _typeof(n) && null !== n) {
                    switch (n.$$typeof) {
                    case $o:
                        return n.key === o ? n.type === Mo ? p(e, t, n.props.children, i, o) : c(e, t, n, i) : null;
                    case Do:
                        return n.key === o ? d(e, t, n, i) : null
                    }
                    if (qs(n) || l(n))
                        return null !== o ? null : p(e, t, n, i, null);
                    Xt(e, n)
                }
                return null
            }
            function v(e, t, n, i, o) {
                if ("string" == typeof i || "number" == typeof i)
                    return u(t, e = e.get(n) || null, "" + i, o);
                if ("object" === _typeof(i) && null !== i) {
                    switch (i.$$typeof) {
                    case $o:
                        return e = e.get(null === i.key ? n : i.key) || null,
                        i.type === Mo ? p(t, e, i.props.children, o, i.key) : c(t, e, i, o);
                    case Do:
                        return d(t, e = e.get(null === i.key ? n : i.key) || null, i, o)
                    }
                    if (qs(i) || l(i))
                        return p(t, e = e.get(n) || null, i, o, null);
                    Xt(t, i)
                }
                return null
            }
            function g(n, r, s, l) {
                for (var u = null, c = null, d = r, f = r = 0, p = null; null !== d && f < s.length; f++) {
                    d.index > f ? (p = d,
                    d = null) : p = d.sibling;
                    var g = m(n, d, s[f], l);
                    if (null === g) {
                        null === d && (d = p);
                        break
                    }
                    e && d && null === g.alternate && t(n, d),
                    r = a(g, r, f),
                    null === c ? u = g : c.sibling = g,
                    c = g,
                    d = p
                }
                if (f === s.length)
                    return i(n, d),
                    u;
                if (null === d) {
                    for (; f < s.length; f++)
                        null !== (d = h(n, s[f], l)) && (r = a(d, r, f),
                        null === c ? u = d : c.sibling = d,
                        c = d);
                    return u
                }
                for (d = o(n, d); f < s.length; f++)
                    null !== (p = v(d, n, f, s[f], l)) && (e && null !== p.alternate && d.delete(null === p.key ? f : p.key),
                    r = a(p, r, f),
                    null === c ? u = p : c.sibling = p,
                    c = p);
                return e && d.forEach((function(e) {
                    return t(n, e)
                }
                )),
                u
            }
            function y(r, s, u, c) {
                var d = l(u);
                if ("function" != typeof d)
                    throw Error(n(150));
                if (null == (u = d.call(u)))
                    throw Error(n(151));
                for (var f = d = null, p = s, g = s = 0, y = null, b = u.next(); null !== p && !b.done; g++,
                b = u.next()) {
                    p.index > g ? (y = p,
                    p = null) : y = p.sibling;
                    var w = m(r, p, b.value, c);
                    if (null === w) {
                        null === p && (p = y);
                        break
                    }
                    e && p && null === w.alternate && t(r, p),
                    s = a(w, s, g),
                    null === f ? d = w : f.sibling = w,
                    f = w,
                    p = y
                }
                if (b.done)
                    return i(r, p),
                    d;
                if (null === p) {
                    for (; !b.done; g++,
                    b = u.next())
                        null !== (b = h(r, b.value, c)) && (s = a(b, s, g),
                        null === f ? d = b : f.sibling = b,
                        f = b);
                    return d
                }
                for (p = o(r, p); !b.done; g++,
                b = u.next())
                    null !== (b = v(p, r, g, b.value, c)) && (e && null !== b.alternate && p.delete(null === b.key ? g : b.key),
                    s = a(b, s, g),
                    null === f ? d = b : f.sibling = b,
                    f = b);
                return e && p.forEach((function(e) {
                    return t(r, e)
                }
                )),
                d
            }
            return function(e, o, a, u) {
                var c = "object" === _typeof(a) && null !== a && a.type === Mo && null === a.key;
                c && (a = a.props.children);
                var d = "object" === _typeof(a) && null !== a;
                if (d)
                    switch (a.$$typeof) {
                    case $o:
                        e: {
                            for (d = a.key,
                            c = o; null !== c; ) {
                                if (c.key === d) {
                                    switch (c.tag) {
                                    case 7:
                                        if (a.type === Mo) {
                                            i(e, c.sibling),
                                            (o = r(c, a.props.children)).return = e,
                                            e = o;
                                            break e
                                        }
                                        break;
                                    default:
                                        if (c.elementType === a.type) {
                                            i(e, c.sibling),
                                            (o = r(c, a.props)).ref = Vt(e, c, a),
                                            o.return = e,
                                            e = o;
                                            break e
                                        }
                                    }
                                    i(e, c);
                                    break
                                }
                                t(e, c),
                                c = c.sibling
                            }
                            a.type === Mo ? ((o = to(a.props.children, e.mode, u, a.key)).return = e,
                            e = o) : ((u = eo(a.type, a.key, a.props, null, e.mode, u)).ref = Vt(e, o, a),
                            u.return = e,
                            e = u)
                        }
                        return s(e);
                    case Do:
                        e: {
                            for (c = a.key; null !== o; ) {
                                if (o.key === c) {
                                    if (4 === o.tag && o.stateNode.containerInfo === a.containerInfo && o.stateNode.implementation === a.implementation) {
                                        i(e, o.sibling),
                                        (o = r(o, a.children || [])).return = e,
                                        e = o;
                                        break e
                                    }
                                    i(e, o);
                                    break
                                }
                                t(e, o),
                                o = o.sibling
                            }
                            (o = oo(a, e.mode, u)).return = e,
                            e = o
                        }
                        return s(e)
                    }
                if ("string" == typeof a || "number" == typeof a)
                    return a = "" + a,
                    null !== o && 6 === o.tag ? (i(e, o.sibling),
                    (o = r(o, a)).return = e,
                    e = o) : (i(e, o),
                    (o = io(a, e.mode, u)).return = e,
                    e = o),
                    s(e);
                if (qs(a))
                    return g(e, o, a, u);
                if (l(a))
                    return y(e, o, a, u);
                if (d && Xt(e, a),
                void 0 === a && !c)
                    switch (e.tag) {
                    case 1:
                    case 22:
                    case 0:
                    case 11:
                    case 15:
                        throw Error(n(152, f(e.type) || "Component"))
                    }
                return i(e, o)
            }
        }
        function Qt(e) {
            if (e === Vs)
                throw Error(n(174));
            return e
        }
        function Zt(e, t) {
            switch (mt(Qs, t),
            mt(Ys, e),
            mt(Xs, Vs),
            e = t.nodeType) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : D(null, "");
                break;
            default:
                t = D(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
            }
            ht(Xs),
            mt(Xs, t)
        }
        function Kt(e) {
            ht(Xs),
            ht(Ys),
            ht(Qs)
        }
        function Gt(e) {
            Qt(Qs.current);
            var t = Qt(Xs.current)
              , n = D(t, e.type);
            t !== n && (mt(Ys, e),
            mt(Xs, n))
        }
        function Jt(e) {
            Ys.current === e && (ht(Xs),
            ht(Ys))
        }
        function en(e) {
            for (var t = e; null !== t; ) {
                if (13 === t.tag) {
                    var n = t.memoizedState;
                    if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                        return t
                } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                    if (0 != (64 & t.flags))
                        return t
                } else if (null !== t.child) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break;
                for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e)
                        return null;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
            return null
        }
        function tn(e, t) {
            var n = ou(5, null, null, 0);
            n.elementType = "DELETED",
            n.type = "DELETED",
            n.stateNode = t,
            n.return = e,
            n.flags = 8,
            null !== e.lastEffect ? (e.lastEffect.nextEffect = n,
            e.lastEffect = n) : e.firstEffect = e.lastEffect = n
        }
        function nn(e, t) {
            switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t,
                !0);
            case 6:
                return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t,
                !0);
            case 13:
            default:
                return !1
            }
        }
        function on(e) {
            if (Js) {
                var t = Gs;
                if (t) {
                    var n = t;
                    if (!nn(e, t)) {
                        if (!(t = at(n.nextSibling)) || !nn(e, t))
                            return e.flags = -1025 & e.flags | 2,
                            Js = !1,
                            void (Ks = e);
                        tn(Ks, n)
                    }
                    Ks = e,
                    Gs = at(t.firstChild)
                } else
                    e.flags = -1025 & e.flags | 2,
                    Js = !1,
                    Ks = e
            }
        }
        function rn(e) {
            for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
                e = e.return;
            Ks = e
        }
        function an(e) {
            if (e !== Ks)
                return !1;
            if (!Js)
                return rn(e),
                Js = !0,
                !1;
            var t = e.type;
            if (5 !== e.tag || "head" !== t && "body" !== t && !ot(t, e.memoizedProps))
                for (t = Gs; t; )
                    tn(e, t),
                    t = at(t.nextSibling);
            if (rn(e),
            13 === e.tag) {
                if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                    throw Error(n(317));
                e: {
                    for (e = e.nextSibling,
                    t = 0; e; ) {
                        if (8 === e.nodeType) {
                            var i = e.data;
                            if ("/$" === i) {
                                if (0 === t) {
                                    Gs = at(e.nextSibling);
                                    break e
                                }
                                t--
                            } else
                                "$" !== i && "$!" !== i && "$?" !== i || t++
                        }
                        e = e.nextSibling
                    }
                    Gs = null
                }
            } else
                Gs = Ks ? at(e.stateNode.nextSibling) : null;
            return !0
        }
        function sn() {
            Gs = Ks = null,
            Js = !1
        }
        function ln() {
            for (var e = 0; e < el.length; e++)
                el[e]._workInProgressVersionPrimary = null;
            el.length = 0
        }
        function un() {
            throw Error(n(321))
        }
        function cn(e, t) {
            if (null === t)
                return !1;
            for (var n = 0; n < t.length && n < e.length; n++)
                if (!Wa(e[n], t[n]))
                    return !1;
            return !0
        }
        function dn(e, t, i, o, r, a) {
            if (il = a,
            ol = t,
            t.memoizedState = null,
            t.updateQueue = null,
            t.lanes = 0,
            tl.current = null === e || null === e.memoizedState ? cl : dl,
            e = i(o, r),
            ll) {
                a = 0;
                do {
                    if (ll = !1,
                    !(25 > a))
                        throw Error(n(301));
                    a += 1,
                    al = rl = null,
                    t.updateQueue = null,
                    tl.current = fl,
                    e = i(o, r)
                } while (ll)
            }
            if (tl.current = ul,
            t = null !== rl && null !== rl.next,
            il = 0,
            al = rl = ol = null,
            sl = !1,
            t)
                throw Error(n(300));
            return e
        }
        function fn() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return null === al ? ol.memoizedState = al = e : al = al.next = e,
            al
        }
        function pn() {
            if (null === rl) {
                var e = ol.alternate;
                e = null !== e ? e.memoizedState : null
            } else
                e = rl.next;
            var t = null === al ? ol.memoizedState : al.next;
            if (null !== t)
                al = t,
                rl = e;
            else {
                if (null === e)
                    throw Error(n(310));
                e = {
                    memoizedState: (rl = e).memoizedState,
                    baseState: rl.baseState,
                    baseQueue: rl.baseQueue,
                    queue: rl.queue,
                    next: null
                },
                null === al ? ol.memoizedState = al = e : al = al.next = e
            }
            return al
        }
        function hn(e, t) {
            return "function" == typeof t ? t(e) : t
        }
        function mn(e, t, i) {
            if (null === (i = (t = pn()).queue))
                throw Error(n(311));
            i.lastRenderedReducer = e;
            var o = rl
              , r = o.baseQueue
              , a = i.pending;
            if (null !== a) {
                if (null !== r) {
                    var s = r.next;
                    r.next = a.next,
                    a.next = s
                }
                o.baseQueue = r = a,
                i.pending = null
            }
            if (null !== r) {
                r = r.next,
                o = o.baseState;
                var l = s = a = null
                  , u = r;
                do {
                    var c = u.lane;
                    if ((il & c) === c)
                        null !== l && (l = l.next = {
                            lane: 0,
                            action: u.action,
                            eagerReducer: u.eagerReducer,
                            eagerState: u.eagerState,
                            next: null
                        }),
                        o = u.eagerReducer === e ? u.eagerState : e(o, u.action);
                    else {
                        var d = {
                            lane: c,
                            action: u.action,
                            eagerReducer: u.eagerReducer,
                            eagerState: u.eagerState,
                            next: null
                        };
                        null === l ? (s = l = d,
                        a = o) : l = l.next = d,
                        ol.lanes |= c,
                        Nl |= c
                    }
                    u = u.next
                } while (null !== u && u !== r);
                null === l ? a = o : l.next = s,
                Wa(o, t.memoizedState) || (hl = !0),
                t.memoizedState = o,
                t.baseState = a,
                t.baseQueue = l,
                i.lastRenderedState = o
            }
            return [t.memoizedState, i.dispatch]
        }
        function vn(e, t, i) {
            if (null === (i = (t = pn()).queue))
                throw Error(n(311));
            i.lastRenderedReducer = e;
            var o = i.dispatch
              , r = i.pending
              , a = t.memoizedState;
            if (null !== r) {
                i.pending = null;
                var s = r = r.next;
                do {
                    a = e(a, s.action),
                    s = s.next
                } while (s !== r);
                Wa(a, t.memoizedState) || (hl = !0),
                t.memoizedState = a,
                null === t.baseQueue && (t.baseState = a),
                i.lastRenderedState = a
            }
            return [a, o]
        }
        function gn(e, t, i) {
            var o = t._getVersion;
            o = o(t._source);
            var r = t._workInProgressVersionPrimary;
            if (null !== r ? e = r === o : (e = e.mutableReadLanes,
            (e = (il & e) === e) && (t._workInProgressVersionPrimary = o,
            el.push(t))),
            e)
                return i(t._source);
            throw el.push(t),
            Error(n(350))
        }
        function yn(e, t, i, o) {
            var r = Tl;
            if (null === r)
                throw Error(n(349));
            var a = t._getVersion
              , s = a(t._source)
              , l = tl.current
              , u = l.useState((function() {
                return gn(r, t, i)
            }
            ))
              , c = u[1]
              , d = u[0];
            u = al;
            var f = e.memoizedState
              , p = f.refs
              , h = p.getSnapshot
              , m = f.source;
            f = f.subscribe;
            var v = ol;
            return e.memoizedState = {
                refs: p,
                source: t,
                subscribe: o
            },
            l.useEffect((function() {
                p.getSnapshot = i,
                p.setSnapshot = c;
                var e = a(t._source);
                if (!Wa(s, e)) {
                    e = i(t._source),
                    Wa(d, e) || (c(e),
                    e = xi(v),
                    r.mutableReadLanes |= e & r.pendingLanes),
                    e = r.mutableReadLanes,
                    r.entangledLanes |= e;
                    for (var n = r.entanglements, o = e; 0 < o; ) {
                        var l = 31 - ia(o)
                          , u = 1 << l;
                        n[l] |= e,
                        o &= ~u
                    }
                }
            }
            ), [i, t, o]),
            l.useEffect((function() {
                return o(t._source, (function() {
                    var e = p.getSnapshot
                      , n = p.setSnapshot;
                    try {
                        n(e(t._source));
                        var i = xi(v);
                        r.mutableReadLanes |= i & r.pendingLanes
                    } catch (e) {
                        n((function() {
                            throw e
                        }
                        ))
                    }
                }
                ))
            }
            ), [t, o]),
            Wa(h, i) && Wa(m, t) && Wa(f, o) || ((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: hn,
                lastRenderedState: d
            }).dispatch = c = Ln.bind(null, ol, e),
            u.queue = e,
            u.baseQueue = null,
            d = gn(r, t, i),
            u.memoizedState = u.baseState = d),
            d
        }
        function bn(e, t, n) {
            return yn(pn(), e, t, n)
        }
        function wn(e) {
            var t = fn();
            return "function" == typeof e && (e = e()),
            t.memoizedState = t.baseState = e,
            e = (e = t.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: hn,
                lastRenderedState: e
            }).dispatch = Ln.bind(null, ol, e),
            [t.memoizedState, e]
        }
        function Cn(e, t, n, i) {
            return e = {
                tag: e,
                create: t,
                destroy: n,
                deps: i,
                next: null
            },
            null === (t = ol.updateQueue) ? (t = {
                lastEffect: null
            },
            ol.updateQueue = t,
            t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (i = n.next,
            n.next = e,
            e.next = i,
            t.lastEffect = e),
            e
        }
        function xn(e) {
            return e = {
                current: e
            },
            fn().memoizedState = e
        }
        function En(e) {
            return pn().memoizedState
        }
        function Sn(e, t, n, i) {
            var o = fn();
            ol.flags |= e,
            o.memoizedState = Cn(1 | t, n, void 0, void 0 === i ? null : i)
        }
        function kn(e, t, n, i) {
            var o = pn();
            i = void 0 === i ? null : i;
            var r = void 0;
            if (null !== rl) {
                var a = rl.memoizedState;
                if (r = a.destroy,
                null !== i && cn(i, a.deps))
                    return void Cn(t, n, r, i)
            }
            ol.flags |= e,
            o.memoizedState = Cn(1 | t, n, r, i)
        }
        function Tn(e, t) {
            return Sn(516, 4, e, t)
        }
        function In(e, t) {
            return kn(516, 4, e, t)
        }
        function _n(e, t) {
            return kn(4, 2, e, t)
        }
        function Pn(e, t) {
            return "function" == typeof t ? (e = e(),
            t(e),
            function() {
                t(null)
            }
            ) : null != t ? (e = e(),
            t.current = e,
            function() {
                t.current = null
            }
            ) : void 0
        }
        function $n(e, t, n) {
            return n = null != n ? n.concat([e]) : null,
            kn(4, 2, Pn.bind(null, t, e), n)
        }
        function Dn(e, t) {}
        function Mn(e, t) {
            var n = pn();
            t = void 0 === t ? null : t;
            var i = n.memoizedState;
            return null !== i && null !== t && cn(t, i[1]) ? i[0] : (n.memoizedState = [e, t],
            e)
        }
        function An(e, t) {
            var n = pn();
            t = void 0 === t ? null : t;
            var i = n.memoizedState;
            return null !== i && null !== t && cn(t, i[1]) ? i[0] : (e = e(),
            n.memoizedState = [e, t],
            e)
        }
        function Nn(e, t) {
            var n = xt();
            St(98 > n ? 98 : n, (function() {
                e(!0)
            }
            )),
            St(97 < n ? 97 : n, (function() {
                var n = nl.transition;
                nl.transition = 1;
                try {
                    e(!1),
                    t()
                } finally {
                    nl.transition = n
                }
            }
            ))
        }
        function Ln(e, t, n) {
            var i = Ci()
              , o = xi(e)
              , r = {
                lane: o,
                action: n,
                eagerReducer: null,
                eagerState: null,
                next: null
            }
              , a = t.pending;
            if (null === a ? r.next = r : (r.next = a.next,
            a.next = r),
            t.pending = r,
            a = e.alternate,
            e === ol || null !== a && a === ol)
                ll = sl = !0;
            else {
                if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
                    try {
                        var s = t.lastRenderedState
                          , l = a(s, n);
                        if (r.eagerReducer = a,
                        r.eagerState = l,
                        Wa(l, s))
                            return
                    } catch (e) {}
                Ei(e, o, i)
            }
        }
        function On(e, t, n, i) {
            t.child = null === e ? Us(t, null, n, i) : Ws(t, e.child, n, i)
        }
        function Rn(e, t, n, i, o) {
            n = n.render;
            var r = t.ref;
            return Mt(t, o),
            i = dn(e, t, n, i, r, o),
            null === e || hl ? (t.flags |= 1,
            On(e, t, i, o),
            t.child) : (t.updateQueue = e.updateQueue,
            t.flags &= -517,
            e.lanes &= ~o,
            Jn(e, t, o))
        }
        function Fn(e, t, n, i, o, r) {
            if (null === e) {
                var a = n.type;
                return "function" != typeof a || Gi(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = eo(n.type, null, i, t, t.mode, r)).ref = t.ref,
                e.return = t,
                t.child = e) : (t.tag = 15,
                t.type = a,
                zn(e, t, a, i, o, r))
            }
            return a = e.child,
            0 == (o & r) && (o = a.memoizedProps,
            (n = null !== (n = n.compare) ? n : Fe)(o, i) && e.ref === t.ref) ? Jn(e, t, r) : (t.flags |= 1,
            (e = Ji(a, i)).ref = t.ref,
            e.return = t,
            t.child = e)
        }
        function zn(e, t, n, i, o, r) {
            if (null !== e && Fe(e.memoizedProps, i) && e.ref === t.ref) {
                if (hl = !1,
                0 == (r & o))
                    return t.lanes = e.lanes,
                    Jn(e, t, r);
                0 != (16384 & e.flags) && (hl = !0)
            }
            return jn(e, t, n, i, r)
        }
        function Bn(e, t, n) {
            var i = t.pendingProps
              , o = i.children
              , r = null !== e ? e.memoizedState : null;
            if ("hidden" === i.mode || "unstable-defer-without-hiding" === i.mode)
                if (0 == (4 & t.mode))
                    t.memoizedState = {
                        baseLanes: 0
                    },
                    Di(0, n);
                else {
                    if (0 == (1073741824 & n))
                        return e = null !== r ? r.baseLanes | n : n,
                        t.lanes = t.childLanes = 1073741824,
                        t.memoizedState = {
                            baseLanes: e
                        },
                        Di(0, e),
                        null;
                    t.memoizedState = {
                        baseLanes: 0
                    },
                    Di(0, null !== r ? r.baseLanes : n)
                }
            else
                null !== r ? (i = r.baseLanes | n,
                t.memoizedState = null) : i = n,
                Di(0, i);
            return On(e, t, o, n),
            t.child
        }
        function Hn(e, t) {
            var n = t.ref;
            (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 128)
        }
        function jn(e, t, n, i, o) {
            var r = gt(n) ? ms : ps.current;
            return r = vt(t, r),
            Mt(t, o),
            n = dn(e, t, n, i, r, o),
            null === e || hl ? (t.flags |= 1,
            On(e, t, n, o),
            t.child) : (t.updateQueue = e.updateQueue,
            t.flags &= -517,
            e.lanes &= ~o,
            Jn(e, t, o))
        }
        function qn(e, t, n, i, o) {
            if (gt(n)) {
                var r = !0;
                wt(t)
            } else
                r = !1;
            if (Mt(t, o),
            null === t.stateNode)
                null !== e && (e.alternate = null,
                t.alternate = null,
                t.flags |= 2),
                qt(t, n, i),
                Ut(t, n, i, o),
                i = !0;
            else if (null === e) {
                var a = t.stateNode
                  , s = t.memoizedProps;
                a.props = s;
                var l = a.context
                  , u = n.contextType;
                u = "object" === _typeof(u) && null !== u ? At(u) : vt(t, u = gt(n) ? ms : ps.current);
                var c = n.getDerivedStateFromProps
                  , d = "function" == typeof c || "function" == typeof a.getSnapshotBeforeUpdate;
                d || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (s !== i || l !== u) && Wt(t, a, i, u),
                Bs = !1;
                var f = t.memoizedState;
                a.state = f,
                zt(t, i, a, o),
                l = t.memoizedState,
                s !== i || f !== l || hs.current || Bs ? ("function" == typeof c && (Ht(t, n, c, i),
                l = t.memoizedState),
                (s = Bs || jt(t, n, s, i, f, l, u)) ? (d || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(),
                "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
                "function" == typeof a.componentDidMount && (t.flags |= 4)) : ("function" == typeof a.componentDidMount && (t.flags |= 4),
                t.memoizedProps = i,
                t.memoizedState = l),
                a.props = i,
                a.state = l,
                a.context = u,
                i = s) : ("function" == typeof a.componentDidMount && (t.flags |= 4),
                i = !1)
            } else {
                a = t.stateNode,
                Lt(e, t),
                s = t.memoizedProps,
                u = t.type === t.elementType ? s : _t(t.type, s),
                a.props = u,
                d = t.pendingProps,
                f = a.context,
                l = n.contextType,
                l = "object" === _typeof(l) && null !== l ? At(l) : vt(t, l = gt(n) ? ms : ps.current);
                var p = n.getDerivedStateFromProps;
                (c = "function" == typeof p || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (s !== d || f !== l) && Wt(t, a, i, l),
                Bs = !1,
                f = t.memoizedState,
                a.state = f,
                zt(t, i, a, o);
                var h = t.memoizedState;
                s !== d || f !== h || hs.current || Bs ? ("function" == typeof p && (Ht(t, n, p, i),
                h = t.memoizedState),
                (u = Bs || jt(t, n, u, i, f, h, l)) ? (c || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(i, h, l),
                "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(i, h, l)),
                "function" == typeof a.componentDidUpdate && (t.flags |= 4),
                "function" == typeof a.getSnapshotBeforeUpdate && (t.flags |= 256)) : ("function" != typeof a.componentDidUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                "function" != typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 256),
                t.memoizedProps = i,
                t.memoizedState = h),
                a.props = i,
                a.state = h,
                a.context = l,
                i = u) : ("function" != typeof a.componentDidUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                "function" != typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 256),
                i = !1)
            }
            return Wn(e, t, n, i, r, o)
        }
        function Wn(e, t, n, i, o, r) {
            Hn(e, t);
            var a = 0 != (64 & t.flags);
            if (!i && !a)
                return o && Ct(t, n, !1),
                Jn(e, t, r);
            i = t.stateNode,
            pl.current = t;
            var s = a && "function" != typeof n.getDerivedStateFromError ? null : i.render();
            return t.flags |= 1,
            null !== e && a ? (t.child = Ws(t, e.child, null, r),
            t.child = Ws(t, null, s, r)) : On(e, t, s, r),
            t.memoizedState = i.state,
            o && Ct(t, n, !0),
            t.child
        }
        function Un(e) {
            var t = e.stateNode;
            t.pendingContext ? yt(0, t.pendingContext, t.pendingContext !== t.context) : t.context && yt(0, t.context, !1),
            Zt(e, t.containerInfo)
        }
        function Vn(e, t, n) {
            var i, o = t.pendingProps, r = Zs.current, a = !1;
            return (i = 0 != (64 & t.flags)) || (i = (null === e || null !== e.memoizedState) && 0 != (2 & r)),
            i ? (a = !0,
            t.flags &= -65) : null !== e && null === e.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (r |= 1),
            mt(Zs, 1 & r),
            null === e ? (void 0 !== o.fallback && on(t),
            e = o.children,
            r = o.fallback,
            a ? (e = Xn(t, e, r, n),
            t.child.memoizedState = {
                baseLanes: n
            },
            t.memoizedState = ml,
            e) : "number" == typeof o.unstable_expectedLoadTime ? (e = Xn(t, e, r, n),
            t.child.memoizedState = {
                baseLanes: n
            },
            t.memoizedState = ml,
            t.lanes = 33554432,
            e) : ((n = no({
                mode: "visible",
                children: e
            }, t.mode, n, null)).return = t,
            t.child = n)) : (e.memoizedState,
            a ? (o = Qn(e, t, o.children, o.fallback, n),
            a = t.child,
            r = e.child.memoizedState,
            a.memoizedState = null === r ? {
                baseLanes: n
            } : {
                baseLanes: r.baseLanes | n
            },
            a.childLanes = e.childLanes & ~n,
            t.memoizedState = ml,
            o) : (n = Yn(e, t, o.children, n),
            t.memoizedState = null,
            n))
        }
        function Xn(e, t, n, i) {
            var o = e.mode
              , r = e.child;
            return t = {
                mode: "hidden",
                children: t
            },
            0 == (2 & o) && null !== r ? (r.childLanes = 0,
            r.pendingProps = t) : r = no(t, o, 0, null),
            n = to(n, o, i, null),
            r.return = e,
            n.return = e,
            r.sibling = n,
            e.child = r,
            n
        }
        function Yn(e, t, n, i) {
            var o = e.child;
            return e = o.sibling,
            n = Ji(o, {
                mode: "visible",
                children: n
            }),
            0 == (2 & t.mode) && (n.lanes = i),
            n.return = t,
            n.sibling = null,
            null !== e && (e.nextEffect = null,
            e.flags = 8,
            t.firstEffect = t.lastEffect = e),
            t.child = n
        }
        function Qn(e, t, n, i, o) {
            var r = t.mode
              , a = e.child;
            e = a.sibling;
            var s = {
                mode: "hidden",
                children: n
            };
            return 0 == (2 & r) && t.child !== a ? ((n = t.child).childLanes = 0,
            n.pendingProps = s,
            null !== (a = n.lastEffect) ? (t.firstEffect = n.firstEffect,
            t.lastEffect = a,
            a.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = Ji(a, s),
            null !== e ? i = Ji(e, i) : (i = to(i, r, o, null)).flags |= 2,
            i.return = t,
            n.return = t,
            n.sibling = i,
            t.child = n,
            i
        }
        function Zn(e, t) {
            e.lanes |= t;
            var n = e.alternate;
            null !== n && (n.lanes |= t),
            Dt(e.return, t)
        }
        function Kn(e, t, n, i, o, r) {
            var a = e.memoizedState;
            null === a ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: i,
                tail: n,
                tailMode: o,
                lastEffect: r
            } : (a.isBackwards = t,
            a.rendering = null,
            a.renderingStartTime = 0,
            a.last = i,
            a.tail = n,
            a.tailMode = o,
            a.lastEffect = r)
        }
        function Gn(e, t, n) {
            var i = t.pendingProps
              , o = i.revealOrder
              , r = i.tail;
            if (On(e, t, i.children, n),
            0 != (2 & (i = Zs.current)))
                i = 1 & i | 2,
                t.flags |= 64;
            else {
                if (null !== e && 0 != (64 & e.flags))
                    e: for (e = t.child; null !== e; ) {
                        if (13 === e.tag)
                            null !== e.memoizedState && Zn(e, n);
                        else if (19 === e.tag)
                            Zn(e, n);
                        else if (null !== e.child) {
                            e.child.return = e,
                            e = e.child;
                            continue
                        }
                        if (e === t)
                            break e;
                        for (; null === e.sibling; ) {
                            if (null === e.return || e.return === t)
                                break e;
                            e = e.return
                        }
                        e.sibling.return = e.return,
                        e = e.sibling
                    }
                i &= 1
            }
            if (mt(Zs, i),
            0 == (2 & t.mode))
                t.memoizedState = null;
            else
                switch (o) {
                case "forwards":
                    for (n = t.child,
                    o = null; null !== n; )
                        null !== (e = n.alternate) && null === en(e) && (o = n),
                        n = n.sibling;
                    null === (n = o) ? (o = t.child,
                    t.child = null) : (o = n.sibling,
                    n.sibling = null),
                    Kn(t, !1, o, n, r, t.lastEffect);
                    break;
                case "backwards":
                    for (n = null,
                    o = t.child,
                    t.child = null; null !== o; ) {
                        if (null !== (e = o.alternate) && null === en(e)) {
                            t.child = o;
                            break
                        }
                        e = o.sibling,
                        o.sibling = n,
                        n = o,
                        o = e
                    }
                    Kn(t, !0, n, null, r, t.lastEffect);
                    break;
                case "together":
                    Kn(t, !1, null, null, void 0, t.lastEffect);
                    break;
                default:
                    t.memoizedState = null
                }
            return t.child
        }
        function Jn(e, t, i) {
            if (null !== e && (t.dependencies = e.dependencies),
            Nl |= t.lanes,
            0 != (i & t.childLanes)) {
                if (null !== e && t.child !== e.child)
                    throw Error(n(153));
                if (null !== t.child) {
                    for (i = Ji(e = t.child, e.pendingProps),
                    t.child = i,
                    i.return = t; null !== e.sibling; )
                        e = e.sibling,
                        (i = i.sibling = Ji(e, e.pendingProps)).return = t;
                    i.sibling = null
                }
                return t.child
            }
            return null
        }
        function ei(e, t) {
            if (!Js)
                switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; null !== t; )
                        null !== t.alternate && (n = t),
                        t = t.sibling;
                    null === n ? e.tail = null : n.sibling = null;
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var i = null; null !== n; )
                        null !== n.alternate && (i = n),
                        n = n.sibling;
                    null === i ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : i.sibling = null
                }
        }
        function ti(e, t, i) {
            var o = t.pendingProps;
            switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return null;
            case 1:
                return gt(t.type) && (ht(hs),
                ht(ps)),
                null;
            case 3:
                return Kt(),
                ht(hs),
                ht(ps),
                ln(),
                (o = t.stateNode).pendingContext && (o.context = o.pendingContext,
                o.pendingContext = null),
                null !== e && null !== e.child || (an(t) ? t.flags |= 4 : o.hydrate || (t.flags |= 256)),
                gl(t),
                null;
            case 5:
                Jt(t);
                var r = Qt(Qs.current);
                if (i = t.type,
                null !== e && null != t.stateNode)
                    yl(e, t, i, o, r),
                    e.ref !== t.ref && (t.flags |= 128);
                else {
                    if (!o) {
                        if (null === t.stateNode)
                            throw Error(n(166));
                        return null
                    }
                    if (e = Qt(Xs.current),
                    an(t)) {
                        o = t.stateNode,
                        i = t.type;
                        var a = t.memoizedProps;
                        switch (o[as] = t,
                        o[ss] = a,
                        i) {
                        case "dialog":
                            Xe("cancel", o),
                            Xe("close", o);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Xe("load", o);
                            break;
                        case "video":
                        case "audio":
                            for (e = 0; e < Ka.length; e++)
                                Xe(Ka[e], o);
                            break;
                        case "source":
                            Xe("error", o);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Xe("error", o),
                            Xe("load", o);
                            break;
                        case "details":
                            Xe("toggle", o);
                            break;
                        case "input":
                            b(o, a),
                            Xe("invalid", o);
                            break;
                        case "select":
                            o._wrapperState = {
                                wasMultiple: !!a.multiple
                            },
                            Xe("invalid", o);
                            break;
                        case "textarea":
                            I(o, a),
                            Xe("invalid", o)
                        }
                        for (var l in N(i, a),
                        e = null,
                        a)
                            a.hasOwnProperty(l) && (r = a[l],
                            "children" === l ? "string" == typeof r ? o.textContent !== r && (e = ["children", r]) : "number" == typeof r && o.textContent !== "" + r && (e = ["children", "" + r]) : bo.hasOwnProperty(l) && null != r && "onScroll" === l && Xe("scroll", o));
                        switch (i) {
                        case "input":
                            m(o),
                            x(o, a, !0);
                            break;
                        case "textarea":
                            m(o),
                            P(o);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            "function" == typeof a.onClick && (o.onclick = nt)
                        }
                        o = e,
                        t.updateQueue = o,
                        null !== o && (t.flags |= 4)
                    } else {
                        switch (l = 9 === r.nodeType ? r : r.ownerDocument,
                        "http://www.w3.org/1999/xhtml" === e && (e = $(i)),
                        "http://www.w3.org/1999/xhtml" === e ? "script" === i ? ((e = l.createElement("div")).innerHTML = "<script><\/script>",
                        e = e.removeChild(e.firstChild)) : "string" == typeof o.is ? e = l.createElement(i, {
                            is: o.is
                        }) : (e = l.createElement(i),
                        "select" === i && (l = e,
                        o.multiple ? l.multiple = !0 : o.size && (l.size = o.size))) : e = l.createElementNS(e, i),
                        e[as] = t,
                        e[ss] = o,
                        vl(e, t, !1, !1),
                        t.stateNode = e,
                        l = L(i, o),
                        i) {
                        case "dialog":
                            Xe("cancel", e),
                            Xe("close", e),
                            r = o;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Xe("load", e),
                            r = o;
                            break;
                        case "video":
                        case "audio":
                            for (r = 0; r < Ka.length; r++)
                                Xe(Ka[r], e);
                            r = o;
                            break;
                        case "source":
                            Xe("error", e),
                            r = o;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Xe("error", e),
                            Xe("load", e),
                            r = o;
                            break;
                        case "details":
                            Xe("toggle", e),
                            r = o;
                            break;
                        case "input":
                            b(e, o),
                            r = y(e, o),
                            Xe("invalid", e);
                            break;
                        case "option":
                            r = S(e, o);
                            break;
                        case "select":
                            e._wrapperState = {
                                wasMultiple: !!o.multiple
                            },
                            r = _o({}, o, {
                                value: void 0
                            }),
                            Xe("invalid", e);
                            break;
                        case "textarea":
                            I(e, o),
                            r = T(e, o),
                            Xe("invalid", e);
                            break;
                        default:
                            r = o
                        }
                        N(i, r);
                        var u = r;
                        for (a in u)
                            if (u.hasOwnProperty(a)) {
                                var c = u[a];
                                "style" === a ? A(e, c) : "dangerouslySetInnerHTML" === a ? null != (c = c ? c.__html : void 0) && Jo(e, c) : "children" === a ? "string" == typeof c ? ("textarea" !== i || "" !== c) && er(e, c) : "number" == typeof c && er(e, "" + c) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (bo.hasOwnProperty(a) ? null != c && "onScroll" === a && Xe("scroll", e) : null != c && s(e, a, c, l))
                            }
                        switch (i) {
                        case "input":
                            m(e),
                            x(e, o, !1);
                            break;
                        case "textarea":
                            m(e),
                            P(e);
                            break;
                        case "option":
                            null != o.value && e.setAttribute("value", "" + p(o.value));
                            break;
                        case "select":
                            e.multiple = !!o.multiple,
                            null != (a = o.value) ? k(e, !!o.multiple, a, !1) : null != o.defaultValue && k(e, !!o.multiple, o.defaultValue, !0);
                            break;
                        default:
                            "function" == typeof r.onClick && (e.onclick = nt)
                        }
                        it(i, o) && (t.flags |= 4)
                    }
                    null !== t.ref && (t.flags |= 128)
                }
                return null;
            case 6:
                if (e && null != t.stateNode)
                    bl(e, t, e.memoizedProps, o);
                else {
                    if ("string" != typeof o && null === t.stateNode)
                        throw Error(n(166));
                    i = Qt(Qs.current),
                    Qt(Xs.current),
                    an(t) ? (o = t.stateNode,
                    i = t.memoizedProps,
                    o[as] = t,
                    o.nodeValue !== i && (t.flags |= 4)) : ((o = (9 === i.nodeType ? i : i.ownerDocument).createTextNode(o))[as] = t,
                    t.stateNode = o)
                }
                return null;
            case 13:
                return ht(Zs),
                o = t.memoizedState,
                0 != (64 & t.flags) ? (t.lanes = i,
                t) : (o = null !== o,
                i = !1,
                null === e ? void 0 !== t.memoizedProps.fallback && an(t) : i = null !== e.memoizedState,
                o && !i && 0 != (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Zs.current) ? 0 === Dl && (Dl = 3) : (0 !== Dl && 3 !== Dl || (Dl = 4),
                null === Tl || 0 == (134217727 & Nl) && 0 == (134217727 & Ll) || Ii(Tl, _l))),
                (o || i) && (t.flags |= 4),
                null);
            case 4:
                return Kt(),
                gl(t),
                null === e && Ye(t.stateNode.containerInfo),
                null;
            case 10:
                return $t(t),
                null;
            case 17:
                return gt(t.type) && (ht(hs),
                ht(ps)),
                null;
            case 19:
                if (ht(Zs),
                null === (o = t.memoizedState))
                    return null;
                if (a = 0 != (64 & t.flags),
                null === (l = o.rendering))
                    if (a)
                        ei(o, !1);
                    else {
                        if (0 !== Dl || null !== e && 0 != (64 & e.flags))
                            for (e = t.child; null !== e; ) {
                                if (null !== (l = en(e))) {
                                    for (t.flags |= 64,
                                    ei(o, !1),
                                    null !== (a = l.updateQueue) && (t.updateQueue = a,
                                    t.flags |= 4),
                                    null === o.lastEffect && (t.firstEffect = null),
                                    t.lastEffect = o.lastEffect,
                                    o = i,
                                    i = t.child; null !== i; )
                                        e = o,
                                        (a = i).flags &= 2,
                                        a.nextEffect = null,
                                        a.firstEffect = null,
                                        a.lastEffect = null,
                                        null === (l = a.alternate) ? (a.childLanes = 0,
                                        a.lanes = e,
                                        a.child = null,
                                        a.memoizedProps = null,
                                        a.memoizedState = null,
                                        a.updateQueue = null,
                                        a.dependencies = null,
                                        a.stateNode = null) : (a.childLanes = l.childLanes,
                                        a.lanes = l.lanes,
                                        a.child = l.child,
                                        a.memoizedProps = l.memoizedProps,
                                        a.memoizedState = l.memoizedState,
                                        a.updateQueue = l.updateQueue,
                                        a.type = l.type,
                                        e = l.dependencies,
                                        a.dependencies = null === e ? null : {
                                            lanes: e.lanes,
                                            firstContext: e.firstContext
                                        }),
                                        i = i.sibling;
                                    return mt(Zs, 1 & Zs.current | 2),
                                    t.child
                                }
                                e = e.sibling
                            }
                        null !== o.tail && Ns() > zl && (t.flags |= 64,
                        a = !0,
                        ei(o, !1),
                        t.lanes = 33554432)
                    }
                else {
                    if (!a)
                        if (null !== (e = en(l))) {
                            if (t.flags |= 64,
                            a = !0,
                            null !== (i = e.updateQueue) && (t.updateQueue = i,
                            t.flags |= 4),
                            ei(o, !0),
                            null === o.tail && "hidden" === o.tailMode && !l.alternate && !Js)
                                return null !== (t = t.lastEffect = o.lastEffect) && (t.nextEffect = null),
                                null
                        } else
                            2 * Ns() - o.renderingStartTime > zl && 1073741824 !== i && (t.flags |= 64,
                            a = !0,
                            ei(o, !1),
                            t.lanes = 33554432);
                    o.isBackwards ? (l.sibling = t.child,
                    t.child = l) : (null !== (i = o.last) ? i.sibling = l : t.child = l,
                    o.last = l)
                }
                return null !== o.tail ? (i = o.tail,
                o.rendering = i,
                o.tail = i.sibling,
                o.lastEffect = t.lastEffect,
                o.renderingStartTime = Ns(),
                i.sibling = null,
                t = Zs.current,
                mt(Zs, a ? 1 & t | 2 : 1 & t),
                i) : null;
            case 23:
            case 24:
                return Pl = $l.current,
                ht($l),
                null !== e && null !== e.memoizedState != (null !== t.memoizedState) && "unstable-defer-without-hiding" !== o.mode && (t.flags |= 4),
                null
            }
            throw Error(n(156, t.tag))
        }
        function ni(e, t) {
            switch (e.tag) {
            case 1:
                return gt(e.type) && (ht(hs),
                ht(ps)),
                4096 & (t = e.flags) ? (e.flags = -4097 & t | 64,
                e) : null;
            case 3:
                if (Kt(),
                ht(hs),
                ht(ps),
                ln(),
                0 != (64 & (t = e.flags)))
                    throw Error(n(285));
                return e.flags = -4097 & t | 64,
                e;
            case 5:
                return Jt(e),
                null;
            case 13:
                return ht(Zs),
                4096 & (t = e.flags) ? (e.flags = -4097 & t | 64,
                e) : null;
            case 19:
                return ht(Zs),
                null;
            case 4:
                return Kt(),
                null;
            case 10:
                return $t(e),
                null;
            case 23:
            case 24:
                return Pl = $l.current,
                ht($l),
                null;
            default:
                return null
            }
        }
        function ii(e, t) {
            try {
                var n = ""
                  , i = t;
                do {
                    n += d(i),
                    i = i.return
                } while (i);
                var o = n
            } catch (e) {
                o = "\nError generating stack: " + e.message + "\n" + e.stack
            }
            return {
                value: e,
                source: t,
                stack: o
            }
        }
        function oi(e, t, n) {
            (n = Ot(-1, n)).tag = 3,
            n.payload = {
                element: null
            };
            var i = t.value;
            return n.callback = function() {
                Hl || (Hl = !0,
                jl = i)
            }
            ,
            n
        }
        function ri(e, t, n) {
            (n = Ot(-1, n)).tag = 3;
            var i = e.type.getDerivedStateFromError;
            if ("function" == typeof i) {
                var o = t.value;
                n.payload = function() {
                    return i(o)
                }
            }
            var r = e.stateNode;
            return null !== r && "function" == typeof r.componentDidCatch && (n.callback = function() {
                "function" != typeof i && (null === ql ? ql = new Set([this]) : ql.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: null !== e ? e : ""
                })
            }
            ),
            n
        }
        function ai(e) {
            var t = e.ref;
            if (null !== t)
                if ("function" == typeof t)
                    try {
                        t(null)
                    } catch (t) {
                        Yi(e, t)
                    }
                else
                    t.current = null
        }
        function si(e, t) {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
                return;
            case 1:
                if (256 & t.flags && null !== e) {
                    var i = e.memoizedProps
                      , o = e.memoizedState;
                    t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? i : _t(t.type, i), o),
                    e.__reactInternalSnapshotBeforeUpdate = t
                }
                return;
            case 3:
                return void (256 & t.flags && rt(t.stateNode.containerInfo));
            case 5:
            case 6:
            case 4:
            case 17:
                return
            }
            throw Error(n(163))
        }
        function li(e, t, i, o) {
            switch (i.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
                if (null !== (t = null !== (t = i.updateQueue) ? t.lastEffect : null)) {
                    e = t = t.next;
                    do {
                        3 == (3 & e.tag) && (o = e.create,
                        e.destroy = o()),
                        e = e.next
                    } while (e !== t)
                }
                if (null !== (t = null !== (t = i.updateQueue) ? t.lastEffect : null)) {
                    e = t = t.next;
                    do {
                        var r = e;
                        o = r.next,
                        0 != (4 & (r = r.tag)) && 0 != (1 & r) && (Ui(i, e),
                        Wi(i, e)),
                        e = o
                    } while (e !== t)
                }
                return;
            case 1:
                return e = i.stateNode,
                4 & i.flags && (null === t ? e.componentDidMount() : (o = i.elementType === i.type ? t.memoizedProps : _t(i.type, t.memoizedProps),
                e.componentDidUpdate(o, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
                void (null !== (t = i.updateQueue) && Bt(i, t, e));
            case 3:
                if (null !== (t = i.updateQueue)) {
                    if (e = null,
                    null !== i.child)
                        switch (i.child.tag) {
                        case 5:
                            e = i.child.stateNode;
                            break;
                        case 1:
                            e = i.child.stateNode
                        }
                    Bt(i, t, e)
                }
                return;
            case 5:
                return e = i.stateNode,
                void (null === t && 4 & i.flags && it(i.type, i.memoizedProps) && e.focus());
            case 6:
            case 4:
            case 12:
                return;
            case 13:
                return void (null === i.memoizedState && (i = i.alternate,
                null !== i && (i = i.memoizedState,
                null !== i && (i = i.dehydrated,
                null !== i && ne(i)))));
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
                return
            }
            throw Error(n(163))
        }
        function ui(e, t) {
            for (var n = e; ; ) {
                if (5 === n.tag) {
                    var i = n.stateNode;
                    if (t)
                        "function" == typeof (i = i.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none";
                    else {
                        i = n.stateNode;
                        var o = n.memoizedProps.style;
                        o = null != o && o.hasOwnProperty("display") ? o.display : null,
                        i.style.display = M("display", o)
                    }
                } else if (6 === n.tag)
                    n.stateNode.nodeValue = t ? "" : n.memoizedProps;
                else if ((23 !== n.tag && 24 !== n.tag || null === n.memoizedState || n === e) && null !== n.child) {
                    n.child.return = n,
                    n = n.child;
                    continue
                }
                if (n === e)
                    break;
                for (; null === n.sibling; ) {
                    if (null === n.return || n.return === e)
                        return;
                    n = n.return
                }
                n.sibling.return = n.return,
                n = n.sibling
            }
        }
        function ci(e, t, n) {
            if (gs && "function" == typeof gs.onCommitFiberUnmount)
                try {
                    gs.onCommitFiberUnmount(vs, t)
                } catch (e) {}
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                    n = e = e.next;
                    do {
                        var i = n
                          , o = i.destroy;
                        if (i = i.tag,
                        void 0 !== o)
                            if (0 != (4 & i))
                                Ui(t, n);
                            else {
                                i = t;
                                try {
                                    o()
                                } catch (e) {
                                    Yi(i, e)
                                }
                            }
                        n = n.next
                    } while (n !== e)
                }
                break;
            case 1:
                if (ai(t),
                "function" == typeof (e = t.stateNode).componentWillUnmount)
                    try {
                        e.props = t.memoizedProps,
                        e.state = t.memoizedState,
                        e.componentWillUnmount()
                    } catch (e) {
                        Yi(t, e)
                    }
                break;
            case 5:
                ai(t);
                break;
            case 4:
                vi(e, t)
            }
        }
        function di(e) {
            e.alternate = null,
            e.child = null,
            e.dependencies = null,
            e.firstEffect = null,
            e.lastEffect = null,
            e.memoizedProps = null,
            e.memoizedState = null,
            e.pendingProps = null,
            e.return = null,
            e.updateQueue = null
        }
        function fi(e) {
            return 5 === e.tag || 3 === e.tag || 4 === e.tag
        }
        function pi(e) {
            e: {
                for (var t = e.return; null !== t; ) {
                    if (fi(t))
                        break e;
                    t = t.return
                }
                throw Error(n(160))
            }
            var i = t;
            switch (t = i.stateNode,
            i.tag) {
            case 5:
                var o = !1;
                break;
            case 3:
            case 4:
                t = t.containerInfo,
                o = !0;
                break;
            default:
                throw Error(n(161))
            }
            16 & i.flags && (er(t, ""),
            i.flags &= -17);
            e: t: for (i = e; ; ) {
                for (; null === i.sibling; ) {
                    if (null === i.return || fi(i.return)) {
                        i = null;
                        break e
                    }
                    i = i.return
                }
                for (i.sibling.return = i.return,
                i = i.sibling; 5 !== i.tag && 6 !== i.tag && 18 !== i.tag; ) {
                    if (2 & i.flags)
                        continue t;
                    if (null === i.child || 4 === i.tag)
                        continue t;
                    i.child.return = i,
                    i = i.child
                }
                if (!(2 & i.flags)) {
                    i = i.stateNode;
                    break e
                }
            }
            o ? hi(e, i, t) : mi(e, i, t)
        }
        function hi(e, t, n) {
            var i = e.tag
              , o = 5 === i || 6 === i;
            if (o)
                e = o ? e.stateNode : e.stateNode.instance,
                t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = nt));
            else if (4 !== i && null !== (e = e.child))
                for (hi(e, t, n),
                e = e.sibling; null !== e; )
                    hi(e, t, n),
                    e = e.sibling
        }
        function mi(e, t, n) {
            var i = e.tag
              , o = 5 === i || 6 === i;
            if (o)
                e = o ? e.stateNode : e.stateNode.instance,
                t ? n.insertBefore(e, t) : n.appendChild(e);
            else if (4 !== i && null !== (e = e.child))
                for (mi(e, t, n),
                e = e.sibling; null !== e; )
                    mi(e, t, n),
                    e = e.sibling
        }
        function vi(e, t, i) {
            i = t;
            for (var o, r, a = !1; ; ) {
                if (!a) {
                    o = i.return;
                    e: for (; ; ) {
                        if (null === o)
                            throw Error(n(160));
                        switch (r = o.stateNode,
                        o.tag) {
                        case 5:
                            o = r,
                            r = !1;
                            break e;
                        case 3:
                        case 4:
                            o = r.containerInfo,
                            r = !0;
                            break e
                        }
                        o = o.return
                    }
                    a = !0
                }
                if (5 === i.tag || 6 === i.tag) {
                    e: for (var s = e, l = i, u = l; ; )
                        if (ci(s, u),
                        null !== u.child && 4 !== u.tag)
                            u.child.return = u,
                            u = u.child;
                        else {
                            if (u === l)
                                break e;
                            for (; null === u.sibling; ) {
                                if (null === u.return || u.return === l)
                                    break e;
                                u = u.return
                            }
                            u.sibling.return = u.return,
                            u = u.sibling
                        }
                    r ? (s = o,
                    l = i.stateNode,
                    8 === s.nodeType ? s.parentNode.removeChild(l) : s.removeChild(l)) : o.removeChild(i.stateNode)
                } else if (4 === i.tag) {
                    if (null !== i.child) {
                        o = i.stateNode.containerInfo,
                        r = !0,
                        i.child.return = i,
                        i = i.child;
                        continue
                    }
                } else if (ci(e, i),
                null !== i.child) {
                    i.child.return = i,
                    i = i.child;
                    continue
                }
                if (i === t)
                    break;
                for (; null === i.sibling; ) {
                    if (null === i.return || i.return === t)
                        return;
                    4 === (i = i.return).tag && (a = !1)
                }
                i.sibling.return = i.return,
                i = i.sibling
            }
        }
        function gi(e, t) {
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                var i = t.updateQueue;
                if (null !== (i = null !== i ? i.lastEffect : null)) {
                    var o = i = i.next;
                    do {
                        3 == (3 & o.tag) && (e = o.destroy,
                        o.destroy = void 0,
                        void 0 !== e && e()),
                        o = o.next
                    } while (o !== i)
                }
                return;
            case 1:
                return;
            case 5:
                if (null != (i = t.stateNode)) {
                    o = t.memoizedProps;
                    var r = null !== e ? e.memoizedProps : o;
                    e = t.type;
                    var a = t.updateQueue;
                    if (t.updateQueue = null,
                    null !== a) {
                        for (i[ss] = o,
                        "input" === e && "radio" === o.type && null != o.name && w(i, o),
                        L(e, r),
                        t = L(e, o),
                        r = 0; r < a.length; r += 2) {
                            var l = a[r]
                              , u = a[r + 1];
                            "style" === l ? A(i, u) : "dangerouslySetInnerHTML" === l ? Jo(i, u) : "children" === l ? er(i, u) : s(i, l, u, t)
                        }
                        switch (e) {
                        case "input":
                            C(i, o);
                            break;
                        case "textarea":
                            _(i, o);
                            break;
                        case "select":
                            e = i._wrapperState.wasMultiple,
                            i._wrapperState.wasMultiple = !!o.multiple,
                            null != (a = o.value) ? k(i, !!o.multiple, a, !1) : e !== !!o.multiple && (null != o.defaultValue ? k(i, !!o.multiple, o.defaultValue, !0) : k(i, !!o.multiple, o.multiple ? [] : "", !1))
                        }
                    }
                }
                return;
            case 6:
                if (null === t.stateNode)
                    throw Error(n(162));
                return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
                return void ((i = t.stateNode).hydrate && (i.hydrate = !1,
                ne(i.containerInfo)));
            case 12:
                return;
            case 13:
                return null !== t.memoizedState && (Fl = Ns(),
                ui(t.child, !0)),
                void yi(t);
            case 19:
                return void yi(t);
            case 17:
                return;
            case 23:
            case 24:
                return void ui(t, null !== t.memoizedState)
            }
            throw Error(n(163))
        }
        function yi(e) {
            var t = e.updateQueue;
            if (null !== t) {
                e.updateQueue = null;
                var n = e.stateNode;
                null === n && (n = e.stateNode = new Cl),
                t.forEach((function(t) {
                    var i = Zi.bind(null, e, t);
                    n.has(t) || (n.add(t),
                    t.then(i, i))
                }
                ))
            }
        }
        function bi(e, t) {
            return null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && null !== (t = t.memoizedState) && null === t.dehydrated
        }
        function wi() {
            zl = Ns() + 500
        }
        function Ci() {
            return 0 != (48 & kl) ? Ns() : -1 !== Gl ? Gl : Gl = Ns()
        }
        function xi(e) {
            if (0 == (2 & (e = e.mode)))
                return 1;
            if (0 == (4 & e))
                return 99 === xt() ? 1 : 2;
            if (0 === Jl && (Jl = Al),
            0 !== Ls.transition) {
                0 !== eu && (eu = null !== Rl ? Rl.pendingLanes : 0),
                e = Jl;
                var t = 4186112 & ~eu;
                return 0 == (t &= -t) && 0 == (t = (e = 4186112 & ~e) & -e) && (t = 8192),
                t
            }
            return e = xt(),
            e = ce(0 != (4 & kl) && 98 === e ? 12 : e = function(e) {
                switch (e) {
                case 99:
                    return 15;
                case 98:
                    return 10;
                case 97:
                case 96:
                    return 8;
                case 95:
                    return 2;
                default:
                    return 0
                }
            }(e), Jl)
        }
        function Ei(e, t, i) {
            if (50 < Zl)
                throw Zl = 0,
                Kl = null,
                Error(n(185));
            if (null === (e = Si(e, t)))
                return null;
            pe(e, t, i),
            e === Tl && (Ll |= t,
            4 === Dl && Ii(e, _l));
            var o = xt();
            1 === t ? 0 != (8 & kl) && 0 == (48 & kl) ? _i(e) : (ki(e, i),
            0 === kl && (wi(),
            Tt())) : (0 == (4 & kl) || 98 !== o && 99 !== o || (null === Ql ? Ql = new Set([e]) : Ql.add(e)),
            ki(e, i)),
            Rl = e
        }
        function Si(e, t) {
            e.lanes |= t;
            var n = e.alternate;
            for (null !== n && (n.lanes |= t),
            n = e,
            e = e.return; null !== e; )
                e.childLanes |= t,
                null !== (n = e.alternate) && (n.childLanes |= t),
                n = e,
                e = e.return;
            return 3 === n.tag ? n.stateNode : null
        }
        function ki(e, t) {
            for (var n = e.callbackNode, i = e.suspendedLanes, o = e.pingedLanes, r = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
                var s = 31 - ia(a)
                  , l = 1 << s
                  , u = r[s];
                if (-1 === u) {
                    if (0 == (l & i) || 0 != (l & o)) {
                        u = t,
                        ae(l);
                        var c = na;
                        r[s] = 10 <= c ? u + 250 : 6 <= c ? u + 5e3 : -1
                    }
                } else
                    u <= t && (e.expiredLanes |= l);
                a &= ~l
            }
            if (i = le(e, e === Tl ? _l : 0),
            t = na,
            0 === i)
                null !== n && (n !== Is && ws(n),
                e.callbackNode = null,
                e.callbackPriority = 0);
            else {
                if (null !== n) {
                    if (e.callbackPriority === t)
                        return;
                    n !== Is && ws(n)
                }
                15 === t ? (n = _i.bind(null, e),
                null === $s ? ($s = [n],
                Ds = bs(xs, It)) : $s.push(n),
                n = Is) : n = 14 === t ? kt(99, _i.bind(null, e)) : kt(n = se(t), Ti.bind(null, e)),
                e.callbackPriority = t,
                e.callbackNode = n
            }
        }
        function Ti(e) {
            if (Gl = -1,
            eu = Jl = 0,
            0 != (48 & kl))
                throw Error(n(327));
            var t = e.callbackNode;
            if (qi() && e.callbackNode !== t)
                return null;
            var i = le(e, e === Tl ? _l : 0);
            if (0 === i)
                return null;
            var o = i
              , r = kl;
            kl |= 16;
            var a = Ni();
            for (Tl === e && _l === o || (wi(),
            Mi(e, o)); ; )
                try {
                    Ri();
                    break
                } catch (t) {
                    Ai(e, t)
                }
            if (Pt(),
            El.current = a,
            kl = r,
            null !== Il ? o = 0 : (Tl = null,
            _l = 0,
            o = Dl),
            0 != (Al & Ll))
                Mi(e, 0);
            else if (0 !== o) {
                if (2 === o && (kl |= 64,
                e.hydrate && (e.hydrate = !1,
                rt(e.containerInfo)),
                0 !== (i = ue(e)) && (o = Li(e, i))),
                1 === o)
                    throw t = Ml,
                    Mi(e, 0),
                    Ii(e, i),
                    ki(e, Ns()),
                    t;
                switch (e.finishedWork = e.current.alternate,
                e.finishedLanes = i,
                o) {
                case 0:
                case 1:
                    throw Error(n(345));
                case 2:
                    Bi(e);
                    break;
                case 3:
                    if (Ii(e, i),
                    (62914560 & i) === i && 10 < (o = Fl + 500 - Ns())) {
                        if (0 !== le(e, 0))
                            break;
                        if (((r = e.suspendedLanes) & i) !== i) {
                            Ci(),
                            e.pingedLanes |= e.suspendedLanes & r;
                            break
                        }
                        e.timeoutHandle = ns(Bi.bind(null, e), o);
                        break
                    }
                    Bi(e);
                    break;
                case 4:
                    if (Ii(e, i),
                    (4186112 & i) === i)
                        break;
                    for (o = e.eventTimes,
                    r = -1; 0 < i; ) {
                        var s = 31 - ia(i);
                        a = 1 << s,
                        (s = o[s]) > r && (r = s),
                        i &= ~a
                    }
                    if (i = r,
                    10 < (i = (120 > (i = Ns() - i) ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * xl(i / 1960)) - i)) {
                        e.timeoutHandle = ns(Bi.bind(null, e), i);
                        break
                    }
                    Bi(e);
                    break;
                case 5:
                    Bi(e);
                    break;
                default:
                    throw Error(n(329))
                }
            }
            return ki(e, Ns()),
            e.callbackNode === t ? Ti.bind(null, e) : null
        }
        function Ii(e, t) {
            for (t &= ~Ol,
            t &= ~Ll,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes; 0 < t; ) {
                var n = 31 - ia(t)
                  , i = 1 << n;
                e[n] = -1,
                t &= ~i
            }
        }
        function _i(e) {
            if (0 != (48 & kl))
                throw Error(n(327));
            if (qi(),
            e === Tl && 0 != (e.expiredLanes & _l)) {
                var t = _l
                  , i = Li(e, t);
                0 != (Al & Ll) && (i = Li(e, t = le(e, t)))
            } else
                i = Li(e, t = le(e, 0));
            if (0 !== e.tag && 2 === i && (kl |= 64,
            e.hydrate && (e.hydrate = !1,
            rt(e.containerInfo)),
            0 !== (t = ue(e)) && (i = Li(e, t))),
            1 === i)
                throw i = Ml,
                Mi(e, 0),
                Ii(e, t),
                ki(e, Ns()),
                i;
            return e.finishedWork = e.current.alternate,
            e.finishedLanes = t,
            Bi(e),
            ki(e, Ns()),
            null
        }
        function Pi(e, t) {
            var n = kl;
            kl |= 1;
            try {
                return e(t)
            } finally {
                0 === (kl = n) && (wi(),
                Tt())
            }
        }
        function $i(e, t) {
            var n = kl;
            kl &= -2,
            kl |= 8;
            try {
                return e(t)
            } finally {
                0 === (kl = n) && (wi(),
                Tt())
            }
        }
        function Di(e, t) {
            mt($l, Pl),
            Pl |= t,
            Al |= t
        }
        function Mi(e, t) {
            e.finishedWork = null,
            e.finishedLanes = 0;
            var n = e.timeoutHandle;
            if (-1 !== n && (e.timeoutHandle = -1,
            is(n)),
            null !== Il)
                for (n = Il.return; null !== n; ) {
                    var i = n;
                    switch (i.tag) {
                    case 1:
                        null != (i = i.type.childContextTypes) && (ht(hs),
                        ht(ps));
                        break;
                    case 3:
                        Kt(),
                        ht(hs),
                        ht(ps),
                        ln();
                        break;
                    case 5:
                        Jt(i);
                        break;
                    case 4:
                        Kt();
                        break;
                    case 13:
                    case 19:
                        ht(Zs);
                        break;
                    case 10:
                        $t(i);
                        break;
                    case 23:
                    case 24:
                        Pl = $l.current,
                        ht($l)
                    }
                    n = n.return
                }
            Tl = e,
            Il = Ji(e.current, null),
            _l = Pl = Al = t,
            Dl = 0,
            Ml = null,
            Ol = Ll = Nl = 0
        }
        function Ai(e, t) {
            for (; ; ) {
                var n = Il;
                try {
                    if (Pt(),
                    tl.current = ul,
                    sl) {
                        for (var i = ol.memoizedState; null !== i; ) {
                            var o = i.queue;
                            null !== o && (o.pending = null),
                            i = i.next
                        }
                        sl = !1
                    }
                    if (il = 0,
                    al = rl = ol = null,
                    ll = !1,
                    Sl.current = null,
                    null === n || null === n.return) {
                        Dl = 1,
                        Ml = t,
                        Il = null;
                        break
                    }
                    e: {
                        var r = e
                          , a = n.return
                          , s = n
                          , l = t;
                        if (t = _l,
                        s.flags |= 2048,
                        s.firstEffect = s.lastEffect = null,
                        null !== l && "object" === _typeof(l) && "function" == typeof l.then) {
                            var u = l;
                            if (0 == (2 & s.mode)) {
                                var c = s.alternate;
                                c ? (s.updateQueue = c.updateQueue,
                                s.memoizedState = c.memoizedState,
                                s.lanes = c.lanes) : (s.updateQueue = null,
                                s.memoizedState = null)
                            }
                            var d = 0 != (1 & Zs.current)
                              , p = a;
                            do {
                                var h;
                                if (h = 13 === p.tag) {
                                    var m = p.memoizedState;
                                    if (null !== m)
                                        h = null !== m.dehydrated;
                                    else {
                                        var v = p.memoizedProps;
                                        h = void 0 !== v.fallback && (!0 !== v.unstable_avoidThisFallback || !d)
                                    }
                                }
                                if (h) {
                                    var g = p.updateQueue;
                                    if (null === g) {
                                        var y = new Set;
                                        y.add(u),
                                        p.updateQueue = y
                                    } else
                                        g.add(u);
                                    if (0 == (2 & p.mode)) {
                                        if (p.flags |= 64,
                                        s.flags |= 16384,
                                        s.flags &= -2981,
                                        1 === s.tag)
                                            if (null === s.alternate)
                                                s.tag = 17;
                                            else {
                                                var b = Ot(-1, 1);
                                                b.tag = 2,
                                                Rt(s, b)
                                            }
                                        s.lanes |= 1;
                                        break e
                                    }
                                    l = void 0,
                                    s = t;
                                    var w = r.pingCache;
                                    if (null === w ? (w = r.pingCache = new wl,
                                    l = new Set,
                                    w.set(u, l)) : void 0 === (l = w.get(u)) && (l = new Set,
                                    w.set(u, l)),
                                    !l.has(s)) {
                                        l.add(s);
                                        var C = Qi.bind(null, r, u, s);
                                        u.then(C, C)
                                    }
                                    p.flags |= 4096,
                                    p.lanes = t;
                                    break e
                                }
                                p = p.return
                            } while (null !== p);
                            l = Error((f(s.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
                        }
                        5 !== Dl && (Dl = 2),
                        l = ii(l, s),
                        p = a;
                        do {
                            switch (p.tag) {
                            case 3:
                                r = l,
                                p.flags |= 4096,
                                t &= -t,
                                p.lanes |= t,
                                Ft(p, oi(0, r, t));
                                break e;
                            case 1:
                                r = l;
                                var x = p.type
                                  , E = p.stateNode;
                                if (0 == (64 & p.flags) && ("function" == typeof x.getDerivedStateFromError || null !== E && "function" == typeof E.componentDidCatch && (null === ql || !ql.has(E)))) {
                                    p.flags |= 4096,
                                    t &= -t,
                                    p.lanes |= t,
                                    Ft(p, ri(p, r, t));
                                    break e
                                }
                            }
                            p = p.return
                        } while (null !== p)
                    }
                    zi(n)
                } catch (e) {
                    t = e,
                    Il === n && null !== n && (Il = n = n.return);
                    continue
                }
                break
            }
        }
        function Ni() {
            var e = El.current;
            return El.current = ul,
            null === e ? ul : e
        }
        function Li(e, t) {
            var i = kl;
            kl |= 16;
            var o = Ni();
            for (Tl === e && _l === t || Mi(e, t); ; )
                try {
                    Oi();
                    break
                } catch (t) {
                    Ai(e, t)
                }
            if (Pt(),
            kl = i,
            El.current = o,
            null !== Il)
                throw Error(n(261));
            return Tl = null,
            _l = 0,
            Dl
        }
        function Oi() {
            for (; null !== Il; )
                Fi(Il)
        }
        function Ri() {
            for (; null !== Il && !_s(); )
                Fi(Il)
        }
        function Fi(e) {
            var t = iu(e.alternate, e, Pl);
            e.memoizedProps = e.pendingProps,
            null === t ? zi(e) : Il = t,
            Sl.current = null
        }
        function zi(e) {
            var t = e;
            do {
                var n = t.alternate;
                if (e = t.return,
                0 == (2048 & t.flags)) {
                    if (null !== (n = ti(n, t, Pl)))
                        return void (Il = n);
                    if (24 !== (n = t).tag && 23 !== n.tag || null === n.memoizedState || 0 != (1073741824 & Pl) || 0 == (4 & n.mode)) {
                        for (var i = 0, o = n.child; null !== o; )
                            i |= o.lanes | o.childLanes,
                            o = o.sibling;
                        n.childLanes = i
                    }
                    null !== e && 0 == (2048 & e.flags) && (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                    null !== t.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect),
                    e.lastEffect = t.lastEffect),
                    1 < t.flags && (null !== e.lastEffect ? e.lastEffect.nextEffect = t : e.firstEffect = t,
                    e.lastEffect = t))
                } else {
                    if (null !== (n = ni(t)))
                        return n.flags &= 2047,
                        void (Il = n);
                    null !== e && (e.firstEffect = e.lastEffect = null,
                    e.flags |= 2048)
                }
                if (null !== (t = t.sibling))
                    return void (Il = t);
                Il = t = e
            } while (null !== t);
            0 === Dl && (Dl = 5)
        }
        function Bi(e) {
            var t = xt();
            return St(99, Hi.bind(null, e, t)),
            null
        }
        function Hi(e, t) {
            do {
                qi()
            } while (null !== Ul);
            if (0 != (48 & kl))
                throw Error(n(327));
            var i = e.finishedWork;
            if (null === i)
                return null;
            if (e.finishedWork = null,
            e.finishedLanes = 0,
            i === e.current)
                throw Error(n(177));
            e.callbackNode = null;
            var o = i.lanes | i.childLanes
              , r = o
              , a = e.pendingLanes & ~r;
            e.pendingLanes = r,
            e.suspendedLanes = 0,
            e.pingedLanes = 0,
            e.expiredLanes &= r,
            e.mutableReadLanes &= r,
            e.entangledLanes &= r,
            r = e.entanglements;
            for (var s = e.eventTimes, l = e.expirationTimes; 0 < a; ) {
                var u = 31 - ia(a)
                  , c = 1 << u;
                r[u] = 0,
                s[u] = -1,
                l[u] = -1,
                a &= ~c
            }
            if (null !== Ql && 0 == (24 & o) && Ql.has(e) && Ql.delete(e),
            e === Tl && (Il = Tl = null,
            _l = 0),
            1 < i.flags ? null !== i.lastEffect ? (i.lastEffect.nextEffect = i,
            o = i.firstEffect) : o = i : o = i.firstEffect,
            null !== o) {
                if (r = kl,
                kl |= 32,
                Sl.current = null,
                es = la,
                qe(s = je())) {
                    if ("selectionStart"in s)
                        l = {
                            start: s.selectionStart,
                            end: s.selectionEnd
                        };
                    else
                        e: if (l = (l = s.ownerDocument) && l.defaultView || window,
                        (c = l.getSelection && l.getSelection()) && 0 !== c.rangeCount) {
                            l = c.anchorNode,
                            a = c.anchorOffset,
                            u = c.focusNode,
                            c = c.focusOffset;
                            try {
                                l.nodeType,
                                u.nodeType
                            } catch (e) {
                                l = null;
                                break e
                            }
                            var d = 0
                              , f = -1
                              , p = -1
                              , h = 0
                              , m = 0
                              , v = s
                              , g = null;
                            t: for (; ; ) {
                                for (var y; v !== l || 0 !== a && 3 !== v.nodeType || (f = d + a),
                                v !== u || 0 !== c && 3 !== v.nodeType || (p = d + c),
                                3 === v.nodeType && (d += v.nodeValue.length),
                                null !== (y = v.firstChild); )
                                    g = v,
                                    v = y;
                                for (; ; ) {
                                    if (v === s)
                                        break t;
                                    if (g === l && ++h === a && (f = d),
                                    g === u && ++m === c && (p = d),
                                    null !== (y = v.nextSibling))
                                        break;
                                    g = (v = g).parentNode
                                }
                                v = y
                            }
                            l = -1 === f || -1 === p ? null : {
                                start: f,
                                end: p
                            }
                        } else
                            l = null;
                    l = l || {
                        start: 0,
                        end: 0
                    }
                } else
                    l = null;
                ts = {
                    focusedElem: s,
                    selectionRange: l
                },
                la = !1,
                tu = null,
                nu = !1,
                Bl = o;
                do {
                    try {
                        ji()
                    } catch (e) {
                        if (null === Bl)
                            throw Error(n(330));
                        Yi(Bl, e),
                        Bl = Bl.nextEffect
                    }
                } while (null !== Bl);
                tu = null,
                Bl = o;
                do {
                    try {
                        for (s = e; null !== Bl; ) {
                            var b = Bl.flags;
                            if (16 & b && er(Bl.stateNode, ""),
                            128 & b) {
                                var w = Bl.alternate;
                                if (null !== w) {
                                    var C = w.ref;
                                    null !== C && ("function" == typeof C ? C(null) : C.current = null)
                                }
                            }
                            switch (1038 & b) {
                            case 2:
                                pi(Bl),
                                Bl.flags &= -3;
                                break;
                            case 6:
                                pi(Bl),
                                Bl.flags &= -3,
                                gi(Bl.alternate, Bl);
                                break;
                            case 1024:
                                Bl.flags &= -1025;
                                break;
                            case 1028:
                                Bl.flags &= -1025,
                                gi(Bl.alternate, Bl);
                                break;
                            case 4:
                                gi(Bl.alternate, Bl);
                                break;
                            case 8:
                                vi(s, l = Bl);
                                var x = l.alternate;
                                di(l),
                                null !== x && di(x)
                            }
                            Bl = Bl.nextEffect
                        }
                    } catch (e) {
                        if (null === Bl)
                            throw Error(n(330));
                        Yi(Bl, e),
                        Bl = Bl.nextEffect
                    }
                } while (null !== Bl);
                if (C = ts,
                w = je(),
                b = C.focusedElem,
                s = C.selectionRange,
                w !== b && b && b.ownerDocument && He(b.ownerDocument.documentElement, b)) {
                    null !== s && qe(b) && (w = s.start,
                    void 0 === (C = s.end) && (C = w),
                    "selectionStart"in b ? (b.selectionStart = w,
                    b.selectionEnd = Math.min(C, b.value.length)) : (C = (w = b.ownerDocument || document) && w.defaultView || window).getSelection && (C = C.getSelection(),
                    l = b.textContent.length,
                    x = Math.min(s.start, l),
                    s = void 0 === s.end ? x : Math.min(s.end, l),
                    !C.extend && x > s && (l = s,
                    s = x,
                    x = l),
                    l = Be(b, x),
                    a = Be(b, s),
                    l && a && (1 !== C.rangeCount || C.anchorNode !== l.node || C.anchorOffset !== l.offset || C.focusNode !== a.node || C.focusOffset !== a.offset) && ((w = w.createRange()).setStart(l.node, l.offset),
                    C.removeAllRanges(),
                    x > s ? (C.addRange(w),
                    C.extend(a.node, a.offset)) : (w.setEnd(a.node, a.offset),
                    C.addRange(w))))),
                    w = [];
                    for (C = b; C = C.parentNode; )
                        1 === C.nodeType && w.push({
                            element: C,
                            left: C.scrollLeft,
                            top: C.scrollTop
                        });
                    for ("function" == typeof b.focus && b.focus(),
                    b = 0; b < w.length; b++)
                        (C = w[b]).element.scrollLeft = C.left,
                        C.element.scrollTop = C.top
                }
                la = !!es,
                ts = es = null,
                e.current = i,
                Bl = o;
                do {
                    try {
                        for (b = e; null !== Bl; ) {
                            var E = Bl.flags;
                            if (36 & E && li(b, Bl.alternate, Bl),
                            128 & E) {
                                w = void 0;
                                var S = Bl.ref;
                                if (null !== S) {
                                    var k = Bl.stateNode;
                                    switch (Bl.tag) {
                                    case 5:
                                        w = k;
                                        break;
                                    default:
                                        w = k
                                    }
                                    "function" == typeof S ? S(w) : S.current = w
                                }
                            }
                            Bl = Bl.nextEffect
                        }
                    } catch (e) {
                        if (null === Bl)
                            throw Error(n(330));
                        Yi(Bl, e),
                        Bl = Bl.nextEffect
                    }
                } while (null !== Bl);
                Bl = null,
                Ps(),
                kl = r
            } else
                e.current = i;
            if (Wl)
                Wl = !1,
                Ul = e,
                Vl = t;
            else
                for (Bl = o; null !== Bl; )
                    t = Bl.nextEffect,
                    Bl.nextEffect = null,
                    8 & Bl.flags && ((E = Bl).sibling = null,
                    E.stateNode = null),
                    Bl = t;
            if (0 === (o = e.pendingLanes) && (ql = null),
            1 === o ? e === Kl ? Zl++ : (Zl = 0,
            Kl = e) : Zl = 0,
            i = i.stateNode,
            gs && "function" == typeof gs.onCommitFiberRoot)
                try {
                    gs.onCommitFiberRoot(vs, i, void 0, 64 == (64 & i.current.flags))
                } catch (e) {}
            if (ki(e, Ns()),
            Hl)
                throw Hl = !1,
                e = jl,
                jl = null,
                e;
            return 0 != (8 & kl) || Tt(),
            null
        }
        function ji() {
            for (; null !== Bl; ) {
                var e = Bl.alternate;
                nu || null === tu || (0 != (8 & Bl.flags) ? X(Bl, tu) && (nu = !0) : 13 === Bl.tag && bi(e, Bl) && X(Bl, tu) && (nu = !0));
                var t = Bl.flags;
                0 != (256 & t) && si(e, Bl),
                0 == (512 & t) || Wl || (Wl = !0,
                kt(97, (function() {
                    return qi(),
                    null
                }
                ))),
                Bl = Bl.nextEffect
            }
        }
        function qi() {
            if (90 !== Vl) {
                var e = 97 < Vl ? 97 : Vl;
                return Vl = 90,
                St(e, Vi)
            }
            return !1
        }
        function Wi(e, t) {
            Xl.push(t, e),
            Wl || (Wl = !0,
            kt(97, (function() {
                return qi(),
                null
            }
            )))
        }
        function Ui(e, t) {
            Yl.push(t, e),
            Wl || (Wl = !0,
            kt(97, (function() {
                return qi(),
                null
            }
            )))
        }
        function Vi() {
            if (null === Ul)
                return !1;
            var e = Ul;
            if (Ul = null,
            0 != (48 & kl))
                throw Error(n(331));
            var t = kl;
            kl |= 32;
            var i = Yl;
            Yl = [];
            for (var o = 0; o < i.length; o += 2) {
                var r = i[o]
                  , a = i[o + 1]
                  , s = r.destroy;
                if (r.destroy = void 0,
                "function" == typeof s)
                    try {
                        s()
                    } catch (e) {
                        if (null === a)
                            throw Error(n(330));
                        Yi(a, e)
                    }
            }
            for (i = Xl,
            Xl = [],
            o = 0; o < i.length; o += 2) {
                r = i[o],
                a = i[o + 1];
                try {
                    var l = r.create;
                    r.destroy = l()
                } catch (e) {
                    if (null === a)
                        throw Error(n(330));
                    Yi(a, e)
                }
            }
            for (l = e.current.firstEffect; null !== l; )
                e = l.nextEffect,
                l.nextEffect = null,
                8 & l.flags && (l.sibling = null,
                l.stateNode = null),
                l = e;
            return kl = t,
            Tt(),
            !0
        }
        function Xi(e, t, n) {
            Rt(e, t = oi(0, t = ii(n, t), 1)),
            t = Ci(),
            null !== (e = Si(e, 1)) && (pe(e, 1, t),
            ki(e, t))
        }
        function Yi(e, t) {
            if (3 === e.tag)
                Xi(e, e, t);
            else
                for (var n = e.return; null !== n; ) {
                    if (3 === n.tag) {
                        Xi(n, e, t);
                        break
                    }
                    if (1 === n.tag) {
                        var i = n.stateNode;
                        if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof i.componentDidCatch && (null === ql || !ql.has(i))) {
                            var o = ri(n, e = ii(t, e), 1);
                            if (Rt(n, o),
                            o = Ci(),
                            null !== (n = Si(n, 1)))
                                pe(n, 1, o),
                                ki(n, o);
                            else if ("function" == typeof i.componentDidCatch && (null === ql || !ql.has(i)))
                                try {
                                    i.componentDidCatch(t, e)
                                } catch (e) {}
                            break
                        }
                    }
                    n = n.return
                }
        }
        function Qi(e, t, n) {
            var i = e.pingCache;
            null !== i && i.delete(t),
            t = Ci(),
            e.pingedLanes |= e.suspendedLanes & n,
            Tl === e && (_l & n) === n && (4 === Dl || 3 === Dl && (62914560 & _l) === _l && 500 > Ns() - Fl ? Mi(e, 0) : Ol |= n),
            ki(e, t)
        }
        function Zi(e, t) {
            var n = e.stateNode;
            null !== n && n.delete(t),
            0 == (t = 0) && (0 == (2 & (t = e.mode)) ? t = 1 : 0 == (4 & t) ? t = 99 === xt() ? 1 : 2 : (0 === Jl && (Jl = Al),
            0 === (t = de(62914560 & ~Jl)) && (t = 4194304))),
            n = Ci(),
            null !== (e = Si(e, t)) && (pe(e, t, n),
            ki(e, n))
        }
        function Ki(e, t, n, i) {
            this.tag = e,
            this.key = n,
            this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
            this.index = 0,
            this.ref = null,
            this.pendingProps = t,
            this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
            this.mode = i,
            this.flags = 0,
            this.lastEffect = this.firstEffect = this.nextEffect = null,
            this.childLanes = this.lanes = 0,
            this.alternate = null
        }
        function Gi(e) {
            return !(!(e = e.prototype) || !e.isReactComponent)
        }
        function Ji(e, t) {
            var n = e.alternate;
            return null === n ? ((n = ou(e.tag, t, e.key, e.mode)).elementType = e.elementType,
            n.type = e.type,
            n.stateNode = e.stateNode,
            n.alternate = e,
            e.alternate = n) : (n.pendingProps = t,
            n.type = e.type,
            n.flags = 0,
            n.nextEffect = null,
            n.firstEffect = null,
            n.lastEffect = null),
            n.childLanes = e.childLanes,
            n.lanes = e.lanes,
            n.child = e.child,
            n.memoizedProps = e.memoizedProps,
            n.memoizedState = e.memoizedState,
            n.updateQueue = e.updateQueue,
            t = e.dependencies,
            n.dependencies = null === t ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            },
            n.sibling = e.sibling,
            n.index = e.index,
            n.ref = e.ref,
            n
        }
        function eo(e, t, i, o, r, a) {
            var s = 2;
            if (o = e,
            "function" == typeof e)
                Gi(e) && (s = 1);
            else if ("string" == typeof e)
                s = 5;
            else
                e: switch (e) {
                case Mo:
                    return to(i.children, r, a, t);
                case Wo:
                    s = 8,
                    r |= 16;
                    break;
                case Ao:
                    s = 8,
                    r |= 1;
                    break;
                case No:
                    return (e = ou(12, i, t, 8 | r)).elementType = No,
                    e.type = No,
                    e.lanes = a,
                    e;
                case Fo:
                    return (e = ou(13, i, t, r)).type = Fo,
                    e.elementType = Fo,
                    e.lanes = a,
                    e;
                case zo:
                    return (e = ou(19, i, t, r)).elementType = zo,
                    e.lanes = a,
                    e;
                case Uo:
                    return no(i, r, a, t);
                case Vo:
                    return (e = ou(24, i, t, r)).elementType = Vo,
                    e.lanes = a,
                    e;
                default:
                    if ("object" === _typeof(e) && null !== e)
                        switch (e.$$typeof) {
                        case Lo:
                            s = 10;
                            break e;
                        case Oo:
                            s = 9;
                            break e;
                        case Ro:
                            s = 11;
                            break e;
                        case Bo:
                            s = 14;
                            break e;
                        case Ho:
                            s = 16,
                            o = null;
                            break e;
                        case jo:
                            s = 22;
                            break e
                        }
                    throw Error(n(130, null == e ? e : _typeof(e), ""))
                }
            return (t = ou(s, i, t, r)).elementType = e,
            t.type = o,
            t.lanes = a,
            t
        }
        function to(e, t, n, i) {
            return (e = ou(7, e, i, t)).lanes = n,
            e
        }
        function no(e, t, n, i) {
            return (e = ou(23, e, i, t)).elementType = Uo,
            e.lanes = n,
            e
        }
        function io(e, t, n) {
            return (e = ou(6, e, null, t)).lanes = n,
            e
        }
        function oo(e, t, n) {
            return (t = ou(4, null !== e.children ? e.children : [], e.key, t)).lanes = n,
            t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            },
            t
        }
        function ro(e, t, n) {
            this.tag = t,
            this.containerInfo = e,
            this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
            this.timeoutHandle = -1,
            this.pendingContext = this.context = null,
            this.hydrate = n,
            this.callbackNode = null,
            this.callbackPriority = 0,
            this.eventTimes = fe(0),
            this.expirationTimes = fe(-1),
            this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
            this.entanglements = fe(0),
            this.mutableSourceEagerHydrationData = null
        }
        function ao(e, t, n) {
            var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {
                $$typeof: Do,
                key: null == i ? null : "" + i,
                children: e,
                containerInfo: t,
                implementation: n
            }
        }
        function so(e, t, i, o) {
            var r = t.current
              , a = Ci()
              , s = xi(r);
            e: if (i) {
                t: {
                    if (q(i = i._reactInternals) !== i || 1 !== i.tag)
                        throw Error(n(170));
                    var l = i;
                    do {
                        switch (l.tag) {
                        case 3:
                            l = l.stateNode.context;
                            break t;
                        case 1:
                            if (gt(l.type)) {
                                l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                                break t
                            }
                        }
                        l = l.return
                    } while (null !== l);
                    throw Error(n(171))
                }
                if (1 === i.tag) {
                    var u = i.type;
                    if (gt(u)) {
                        i = bt(i, u, l);
                        break e
                    }
                }
                i = l
            } else
                i = fs;
            return null === t.context ? t.context = i : t.pendingContext = i,
            (t = Ot(a, s)).payload = {
                element: e
            },
            null !== (o = void 0 === o ? null : o) && (t.callback = o),
            Rt(r, t),
            Ei(r, s, a),
            s
        }
        function lo(e) {
            if (!(e = e.current).child)
                return null;
            switch (e.child.tag) {
            case 5:
            default:
                return e.child.stateNode
            }
        }
        function uo(e, t) {
            if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                var n = e.retryLane;
                e.retryLane = 0 !== n && n < t ? n : t
            }
        }
        function co(e, t) {
            uo(e, t),
            (e = e.alternate) && uo(e, t)
        }
        function fo(e) {
            return null === (e = V(e)) ? null : e.stateNode
        }
        function po(e) {
            return null
        }
        function ho(e, t, n) {
            var i = null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources || null;
            if (n = new ro(e,t,null != n && !0 === n.hydrate),
            t = ou(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0),
            n.current = t,
            t.stateNode = n,
            Nt(t),
            e[ls] = n.current,
            Ye(8 === e.nodeType ? e.parentNode : e),
            i)
                for (e = 0; e < i.length; e++) {
                    var o = (t = i[e])._getVersion;
                    o = o(t._source),
                    null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, o] : n.mutableSourceEagerHydrationData.push(t, o)
                }
            this._internalRoot = n
        }
        function mo(e) {
            return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
        }
        function vo(e, t, n, i, o) {
            var r = n._reactRootContainer;
            if (r) {
                var a = r._internalRoot;
                if ("function" == typeof o) {
                    var s = o;
                    o = function() {
                        var e = lo(a);
                        s.call(e)
                    }
                }
                so(t, a, e, o)
            } else {
                if (r = n._reactRootContainer = function(e, t) {
                    if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))),
                    !t)
                        for (var n; n = e.lastChild; )
                            e.removeChild(n);
                    return new ho(e,0,t ? {
                        hydrate: !0
                    } : void 0)
                }(n, i),
                a = r._internalRoot,
                "function" == typeof o) {
                    var l = o;
                    o = function() {
                        var e = lo(a);
                        l.call(e)
                    }
                }
                $i((function() {
                    so(t, a, e, o)
                }
                ))
            }
            return lo(a)
        }
        function go(e, t) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!mo(t))
                throw Error(n(200));
            return ao(e, t, null, i)
        }
        if (!t)
            throw Error(n(227));
        var yo = new Set
          , bo = {}
          , wo = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement)
          , Co = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
          , xo = Object.prototype.hasOwnProperty
          , Eo = {}
          , So = {}
          , ko = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
            ko[e] = new a(e,0,!1,e,null,!1,!1)
        }
        )),
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function(e) {
            var t = e[0];
            ko[t] = new a(t,1,!1,e[1],null,!1,!1)
        }
        )),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
            ko[e] = new a(e,2,!1,e.toLowerCase(),null,!1,!1)
        }
        )),
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
            ko[e] = new a(e,2,!1,e,null,!1,!1)
        }
        )),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
            ko[e] = new a(e,3,!1,e.toLowerCase(),null,!1,!1)
        }
        )),
        ["checked", "multiple", "muted", "selected"].forEach((function(e) {
            ko[e] = new a(e,3,!0,e,null,!1,!1)
        }
        )),
        ["capture", "download"].forEach((function(e) {
            ko[e] = new a(e,4,!1,e,null,!1,!1)
        }
        )),
        ["cols", "rows", "size", "span"].forEach((function(e) {
            ko[e] = new a(e,6,!1,e,null,!1,!1)
        }
        )),
        ["rowSpan", "start"].forEach((function(e) {
            ko[e] = new a(e,5,!1,e.toLowerCase(),null,!1,!1)
        }
        ));
        var To = /[\-:]([a-z])/g
          , Io = function(e) {
            return e[1].toUpperCase()
        };
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
            var t = e.replace(To, Io);
            ko[t] = new a(t,1,!1,e,null,!1,!1)
        }
        )),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
            var t = e.replace(To, Io);
            ko[t] = new a(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
        }
        )),
        ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
            var t = e.replace(To, Io);
            ko[t] = new a(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
        }
        )),
        ["tabIndex", "crossOrigin"].forEach((function(e) {
            ko[e] = new a(e,1,!1,e.toLowerCase(),null,!1,!1)
        }
        )),
        ko.xlinkHref = new a("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
        ["src", "href", "action", "formAction"].forEach((function(e) {
            ko[e] = new a(e,1,!1,e.toLowerCase(),null,!0,!0)
        }
        ));
        var _o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.assign
          , Po = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          , $o = 60103
          , Do = 60106
          , Mo = 60107
          , Ao = 60108
          , No = 60114
          , Lo = 60109
          , Oo = 60110
          , Ro = 60112
          , Fo = 60113
          , zo = 60120
          , Bo = 60115
          , Ho = 60116
          , jo = 60121
          , qo = 60128
          , Wo = 60129
          , Uo = 60130
          , Vo = 60131;
        if ("function" == typeof Symbol && Symbol.for) {
            var Xo = Symbol.for;
            $o = Xo("react.element"),
            Do = Xo("react.portal"),
            Mo = Xo("react.fragment"),
            Ao = Xo("react.strict_mode"),
            No = Xo("react.profiler"),
            Lo = Xo("react.provider"),
            Oo = Xo("react.context"),
            Ro = Xo("react.forward_ref"),
            Fo = Xo("react.suspense"),
            zo = Xo("react.suspense_list"),
            Bo = Xo("react.memo"),
            Ho = Xo("react.lazy"),
            jo = Xo("react.block"),
            Xo("react.scope"),
            qo = Xo("react.opaque.id"),
            Wo = Xo("react.debug_trace_mode"),
            Uo = Xo("react.offscreen"),
            Vo = Xo("react.legacy_hidden")
        }
        var Yo, Qo, Zo, Ko = "function" == typeof Symbol && Symbol.iterator, Go = !1, Jo = (Zo = function(e, t) {
            if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML"in e)
                e.innerHTML = t;
            else {
                for ((Qo = Qo || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                t = Qo.firstChild; e.firstChild; )
                    e.removeChild(e.firstChild);
                for (; t.firstChild; )
                    e.appendChild(t.firstChild)
            }
        }
        ,
        "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, i) {
            MSApp.execUnsafeLocalFunction((function() {
                return Zo(e, t)
            }
            ))
        }
        : Zo), er = function(e, t) {
            if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && 3 === n.nodeType)
                    return void (n.nodeValue = t)
            }
            e.textContent = t
        }, tr = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        }, nr = ["Webkit", "ms", "Moz", "O"];
        Object.keys(tr).forEach((function(e) {
            nr.forEach((function(t) {
                t = t + e.charAt(0).toUpperCase() + e.substring(1),
                tr[t] = tr[e]
            }
            ))
        }
        ));
        var ir = _o({
            menuitem: !0
        }, {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        })
          , or = null
          , rr = null
          , ar = null
          , sr = function(e, t) {
            return e(t)
        }
          , lr = function(e, t, n, i, o) {
            return e(t, n, i, o)
        }
          , ur = function() {}
          , cr = sr
          , dr = !1
          , fr = !1
          , pr = !1;
        if (wo)
            try {
                var hr = {};
                Object.defineProperty(hr, "passive", {
                    get: function() {
                        pr = !0
                    }
                }),
                window.addEventListener("test", hr, hr),
                window.removeEventListener("test", hr, hr)
            } catch (Zo) {
                pr = !1
            }
        var mr = function(e, t, n, i, o, r, a, s, l) {
            var u = Array.prototype.slice.call(arguments, 3);
            try {
                t.apply(n, u)
            } catch (e) {
                this.onError(e)
            }
        }
          , vr = !1
          , gr = null
          , yr = !1
          , br = null
          , wr = {
            onError: function(e) {
                vr = !0,
                gr = e
            }
        }
          , Cr = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler
          , xr = Cr.unstable_cancelCallback
          , Er = Cr.unstable_now
          , Sr = Cr.unstable_scheduleCallback
          , kr = Cr.unstable_shouldYield
          , Tr = Cr.unstable_requestPaint
          , Ir = Cr.unstable_runWithPriority
          , _r = Cr.unstable_getCurrentPriorityLevel
          , Pr = Cr.unstable_ImmediatePriority
          , $r = Cr.unstable_UserBlockingPriority
          , Dr = Cr.unstable_NormalPriority
          , Mr = Cr.unstable_LowPriority
          , Ar = Cr.unstable_IdlePriority
          , Nr = !1
          , Lr = []
          , Or = null
          , Rr = null
          , Fr = null
          , zr = new Map
          , Br = new Map
          , Hr = []
          , jr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ")
          , qr = {
            animationend: ie("Animation", "AnimationEnd"),
            animationiteration: ie("Animation", "AnimationIteration"),
            animationstart: ie("Animation", "AnimationStart"),
            transitionend: ie("Transition", "TransitionEnd")
        }
          , Wr = {}
          , Ur = {};
        wo && (Ur = document.createElement("div").style,
        "AnimationEvent"in window || (delete qr.animationend.animation,
        delete qr.animationiteration.animation,
        delete qr.animationstart.animation),
        "TransitionEvent"in window || delete qr.transitionend.transition);
        var Vr = oe("animationend")
          , Xr = oe("animationiteration")
          , Yr = oe("animationstart")
          , Qr = oe("transitionend")
          , Zr = new Map
          , Kr = new Map
          , Gr = ["abort", "abort", Vr, "animationEnd", Xr, "animationIteration", Yr, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Qr, "transitionEnd", "waiting", "waiting"];
        Er();
        var Jr, ea, ta, na = 8, ia = Math.clz32 ? Math.clz32 : function(e) {
            return 0 === e ? 32 : 31 - (oa(e) / ra | 0) | 0
        }
        , oa = Math.log, ra = Math.LN2, aa = $r, sa = Ir, la = !0, ua = null, ca = null, da = null, fa = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, pa = xe(fa), ha = _o({}, fa, {
            view: 0,
            detail: 0
        }), ma = xe(ha), va = _o({}, ha, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Se,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX"in e ? e.movementX : (e !== ta && (ta && "mousemove" === e.type ? (Jr = e.screenX - ta.screenX,
                ea = e.screenY - ta.screenY) : ea = Jr = 0,
                ta = e),
                Jr)
            },
            movementY: function(e) {
                return "movementY"in e ? e.movementY : ea
            }
        }), ga = xe(va), ya = xe(_o({}, va, {
            dataTransfer: 0
        })), ba = xe(_o({}, ha, {
            relatedTarget: 0
        })), wa = xe(_o({}, fa, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })), Ca = xe(_o({}, fa, {
            clipboardData: function(e) {
                return "clipboardData"in e ? e.clipboardData : window.clipboardData
            }
        })), xa = xe(_o({}, fa, {
            data: 0
        })), Ea = xa, Sa = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }, ka = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }, Ta = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        }, Ia = xe(_o({}, ha, {
            key: function(e) {
                if (e.key) {
                    var t = Sa[e.key] || e.key;
                    if ("Unidentified" !== t)
                        return t
                }
                return "keypress" === e.type ? 13 === (e = be(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? ka[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Se,
            charCode: function(e) {
                return "keypress" === e.type ? be(e) : 0
            },
            keyCode: function(e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function(e) {
                return "keypress" === e.type ? be(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
        })), _a = xe(_o({}, va, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        })), Pa = xe(_o({}, ha, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Se
        })), $a = xe(_o({}, fa, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })), Da = xe(_o({}, va, {
            deltaX: function(e) {
                return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        })), Ma = [9, 13, 27, 32], Aa = wo && "CompositionEvent"in window, Na = null;
        wo && "documentMode"in document && (Na = document.documentMode);
        var La = wo && "TextEvent"in window && !Na
          , Oa = wo && (!Aa || Na && 8 < Na && 11 >= Na)
          , Ra = String.fromCharCode(32)
          , Fa = !1
          , za = !1
          , Ba = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        }
          , Ha = null
          , ja = null
          , qa = !1;
        wo && (qa = function(e) {
            if (!wo)
                return !1;
            var t = (e = "on" + e)in document;
            return t || ((t = document.createElement("div")).setAttribute(e, "return;"),
            t = "function" == typeof t[e]),
            t
        }("input") && (!document.documentMode || 9 < document.documentMode));
        var Wa = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        }
          , Ua = Object.prototype.hasOwnProperty
          , Va = wo && "documentMode"in document && 11 >= document.documentMode
          , Xa = null
          , Ya = null
          , Qa = null
          , Za = !1;
        re("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0),
        re("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1),
        re(Gr, 2),
        function(e, t) {
            for (var n = 0; n < e.length; n++)
                Kr.set(e[n], 0)
        }("change selectionchange textInput compositionstart compositionend compositionupdate".split(" ")),
        o("onMouseEnter", ["mouseout", "mouseover"]),
        o("onMouseLeave", ["mouseout", "mouseover"]),
        o("onPointerEnter", ["pointerout", "pointerover"]),
        o("onPointerLeave", ["pointerout", "pointerover"]),
        i("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
        i("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
        i("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
        i("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
        i("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
        i("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Ka = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
          , Ga = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ka))
          , Ja = "_reactListening" + Math.random().toString(36).slice(2)
          , es = null
          , ts = null
          , ns = "function" == typeof setTimeout ? setTimeout : void 0
          , is = "function" == typeof clearTimeout ? clearTimeout : void 0
          , os = 0
          , rs = Math.random().toString(36).slice(2)
          , as = "__reactFiber$" + rs
          , ss = "__reactProps$" + rs
          , ls = "__reactContainer$" + rs
          , us = "__reactEvents$" + rs
          , cs = []
          , ds = -1
          , fs = {}
          , ps = pt(fs)
          , hs = pt(!1)
          , ms = fs
          , vs = null
          , gs = null
          , ys = Ir
          , bs = Sr
          , ws = xr
          , Cs = _r
          , xs = Pr
          , Es = $r
          , Ss = Dr
          , ks = Mr
          , Ts = Ar
          , Is = {}
          , _s = kr
          , Ps = void 0 !== Tr ? Tr : function() {}
          , $s = null
          , Ds = null
          , Ms = !1
          , As = Er()
          , Ns = 1e4 > As ? Er : function() {
            return Er() - As
        }
          , Ls = Po.ReactCurrentBatchConfig
          , Os = pt(null)
          , Rs = null
          , Fs = null
          , zs = null
          , Bs = !1
          , Hs = (new t.Component).refs
          , js = {
            isMounted: function(e) {
                return !!(e = e._reactInternals) && q(e) === e
            },
            enqueueSetState: function(e, t, n) {
                e = e._reactInternals;
                var i = Ci()
                  , o = xi(e)
                  , r = Ot(i, o);
                r.payload = t,
                null != n && (r.callback = n),
                Rt(e, r),
                Ei(e, o, i)
            },
            enqueueReplaceState: function(e, t, n) {
                e = e._reactInternals;
                var i = Ci()
                  , o = xi(e)
                  , r = Ot(i, o);
                r.tag = 1,
                r.payload = t,
                null != n && (r.callback = n),
                Rt(e, r),
                Ei(e, o, i)
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var n = Ci()
                  , i = xi(e)
                  , o = Ot(n, i);
                o.tag = 2,
                null != t && (o.callback = t),
                Rt(e, o),
                Ei(e, i, n)
            }
        }
          , qs = Array.isArray
          , Ws = Yt(!0)
          , Us = Yt(!1)
          , Vs = {}
          , Xs = pt(Vs)
          , Ys = pt(Vs)
          , Qs = pt(Vs)
          , Zs = pt(0)
          , Ks = null
          , Gs = null
          , Js = !1
          , el = []
          , tl = Po.ReactCurrentDispatcher
          , nl = Po.ReactCurrentBatchConfig
          , il = 0
          , ol = null
          , rl = null
          , al = null
          , sl = !1
          , ll = !1
          , ul = {
            readContext: At,
            useCallback: un,
            useContext: un,
            useEffect: un,
            useImperativeHandle: un,
            useLayoutEffect: un,
            useMemo: un,
            useReducer: un,
            useRef: un,
            useState: un,
            useDebugValue: un,
            useDeferredValue: un,
            useTransition: un,
            useMutableSource: un,
            useOpaqueIdentifier: un,
            unstable_isNewReconciler: !1
        }
          , cl = {
            readContext: At,
            useCallback: function(e, t) {
                return fn().memoizedState = [e, void 0 === t ? null : t],
                e
            },
            useContext: At,
            useEffect: Tn,
            useImperativeHandle: function(e, t, n) {
                return n = null != n ? n.concat([e]) : null,
                Sn(4, 2, Pn.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return Sn(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var n = fn();
                return t = void 0 === t ? null : t,
                e = e(),
                n.memoizedState = [e, t],
                e
            },
            useReducer: function(e, t, n) {
                var i = fn();
                return t = void 0 !== n ? n(t) : t,
                i.memoizedState = i.baseState = t,
                e = (e = i.queue = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }).dispatch = Ln.bind(null, ol, e),
                [i.memoizedState, e]
            },
            useRef: xn,
            useState: wn,
            useDebugValue: Dn,
            useDeferredValue: function(e) {
                var t = wn(e)
                  , n = t[0]
                  , i = t[1];
                return Tn((function() {
                    var t = nl.transition;
                    nl.transition = 1;
                    try {
                        i(e)
                    } finally {
                        nl.transition = t
                    }
                }
                ), [e]),
                n
            },
            useTransition: function() {
                var e = wn(!1)
                  , t = e[0];
                return xn(e = Nn.bind(null, e[1])),
                [e, t]
            },
            useMutableSource: function(e, t, n) {
                var i = fn();
                return i.memoizedState = {
                    refs: {
                        getSnapshot: t,
                        setSnapshot: null
                    },
                    source: e,
                    subscribe: n
                },
                yn(i, e, t, n)
            },
            useOpaqueIdentifier: function() {
                if (Js) {
                    var e = !1
                      , t = function(e) {
                        return {
                            $$typeof: qo,
                            toString: e,
                            valueOf: e
                        }
                    }((function() {
                        throw e || (e = !0,
                        i("r:" + (os++).toString(36))),
                        Error(n(355))
                    }
                    ))
                      , i = wn(t)[1];
                    return 0 == (2 & ol.mode) && (ol.flags |= 516,
                    Cn(5, (function() {
                        i("r:" + (os++).toString(36))
                    }
                    ), void 0, null)),
                    t
                }
                return wn(t = "r:" + (os++).toString(36)),
                t
            },
            unstable_isNewReconciler: !1
        }
          , dl = {
            readContext: At,
            useCallback: Mn,
            useContext: At,
            useEffect: In,
            useImperativeHandle: $n,
            useLayoutEffect: _n,
            useMemo: An,
            useReducer: mn,
            useRef: En,
            useState: function(e) {
                return mn(hn)
            },
            useDebugValue: Dn,
            useDeferredValue: function(e) {
                var t = mn(hn)
                  , n = t[0]
                  , i = t[1];
                return In((function() {
                    var t = nl.transition;
                    nl.transition = 1;
                    try {
                        i(e)
                    } finally {
                        nl.transition = t
                    }
                }
                ), [e]),
                n
            },
            useTransition: function() {
                var e = mn(hn)[0];
                return [En().current, e]
            },
            useMutableSource: bn,
            useOpaqueIdentifier: function() {
                return mn(hn)[0]
            },
            unstable_isNewReconciler: !1
        }
          , fl = {
            readContext: At,
            useCallback: Mn,
            useContext: At,
            useEffect: In,
            useImperativeHandle: $n,
            useLayoutEffect: _n,
            useMemo: An,
            useReducer: vn,
            useRef: En,
            useState: function(e) {
                return vn(hn)
            },
            useDebugValue: Dn,
            useDeferredValue: function(e) {
                var t = vn(hn)
                  , n = t[0]
                  , i = t[1];
                return In((function() {
                    var t = nl.transition;
                    nl.transition = 1;
                    try {
                        i(e)
                    } finally {
                        nl.transition = t
                    }
                }
                ), [e]),
                n
            },
            useTransition: function() {
                var e = vn(hn)[0];
                return [En().current, e]
            },
            useMutableSource: bn,
            useOpaqueIdentifier: function() {
                return vn(hn)[0]
            },
            unstable_isNewReconciler: !1
        }
          , pl = Po.ReactCurrentOwner
          , hl = !1
          , ml = {
            dehydrated: null,
            retryLane: 0
        }
          , vl = function(e, t, n, i) {
            for (n = t.child; null !== n; ) {
                if (5 === n.tag || 6 === n.tag)
                    e.appendChild(n.stateNode);
                else if (4 !== n.tag && null !== n.child) {
                    n.child.return = n,
                    n = n.child;
                    continue
                }
                if (n === t)
                    break;
                for (; null === n.sibling; ) {
                    if (null === n.return || n.return === t)
                        return;
                    n = n.return
                }
                n.sibling.return = n.return,
                n = n.sibling
            }
        }
          , gl = function(e) {}
          , yl = function(e, t, n, i, o) {
            var r = e.memoizedProps;
            if (r !== i) {
                switch (e = t.stateNode,
                Qt(Xs.current),
                o = null,
                n) {
                case "input":
                    r = y(e, r),
                    i = y(e, i),
                    o = [];
                    break;
                case "option":
                    r = S(e, r),
                    i = S(e, i),
                    o = [];
                    break;
                case "select":
                    r = _o({}, r, {
                        value: void 0
                    }),
                    i = _o({}, i, {
                        value: void 0
                    }),
                    o = [];
                    break;
                case "textarea":
                    r = T(e, r),
                    i = T(e, i),
                    o = [];
                    break;
                default:
                    "function" != typeof r.onClick && "function" == typeof i.onClick && (e.onclick = nt)
                }
                var a;
                for (u in N(n, i),
                n = null,
                r)
                    if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && null != r[u])
                        if ("style" === u) {
                            var s = r[u];
                            for (a in s)
                                s.hasOwnProperty(a) && (n || (n = {}),
                                n[a] = "")
                        } else
                            "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (bo.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
                for (u in i) {
                    var l = i[u];
                    if (s = null != r ? r[u] : void 0,
                    i.hasOwnProperty(u) && l !== s && (null != l || null != s))
                        if ("style" === u)
                            if (s) {
                                for (a in s)
                                    !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}),
                                    n[a] = "");
                                for (a in l)
                                    l.hasOwnProperty(a) && s[a] !== l[a] && (n || (n = {}),
                                    n[a] = l[a])
                            } else
                                n || (o || (o = []),
                                o.push(u, n)),
                                n = l;
                        else
                            "dangerouslySetInnerHTML" === u ? (l = l ? l.__html : void 0,
                            s = s ? s.__html : void 0,
                            null != l && s !== l && (o = o || []).push(u, l)) : "children" === u ? "string" != typeof l && "number" != typeof l || (o = o || []).push(u, "" + l) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (bo.hasOwnProperty(u) ? (null != l && "onScroll" === u && Xe("scroll", e),
                            o || s === l || (o = [])) : "object" === _typeof(l) && null !== l && l.$$typeof === qo ? l.toString() : (o = o || []).push(u, l))
                }
                n && (o = o || []).push("style", n);
                var u = o;
                (t.updateQueue = u) && (t.flags |= 4)
            }
        }
          , bl = function(e, t, n, i) {
            n !== i && (t.flags |= 4)
        }
          , wl = "function" == typeof WeakMap ? WeakMap : Map
          , Cl = "function" == typeof WeakSet ? WeakSet : Set
          , xl = Math.ceil
          , El = Po.ReactCurrentDispatcher
          , Sl = Po.ReactCurrentOwner
          , kl = 0
          , Tl = null
          , Il = null
          , _l = 0
          , Pl = 0
          , $l = pt(0)
          , Dl = 0
          , Ml = null
          , Al = 0
          , Nl = 0
          , Ll = 0
          , Ol = 0
          , Rl = null
          , Fl = 0
          , zl = 1 / 0
          , Bl = null
          , Hl = !1
          , jl = null
          , ql = null
          , Wl = !1
          , Ul = null
          , Vl = 90
          , Xl = []
          , Yl = []
          , Ql = null
          , Zl = 0
          , Kl = null
          , Gl = -1
          , Jl = 0
          , eu = 0
          , tu = null
          , nu = !1
          , iu = function(e, t, i) {
            var o = t.lanes;
            if (null !== e)
                if (e.memoizedProps !== t.pendingProps || hs.current)
                    hl = !0;
                else {
                    if (0 == (i & o)) {
                        switch (hl = !1,
                        t.tag) {
                        case 3:
                            Un(t),
                            sn();
                            break;
                        case 5:
                            Gt(t);
                            break;
                        case 1:
                            gt(t.type) && wt(t);
                            break;
                        case 4:
                            Zt(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            o = t.memoizedProps.value;
                            var r = t.type._context;
                            mt(Os, r._currentValue),
                            r._currentValue = o;
                            break;
                        case 13:
                            if (null !== t.memoizedState)
                                return 0 != (i & t.child.childLanes) ? Vn(e, t, i) : (mt(Zs, 1 & Zs.current),
                                null !== (t = Jn(e, t, i)) ? t.sibling : null);
                            mt(Zs, 1 & Zs.current);
                            break;
                        case 19:
                            if (o = 0 != (i & t.childLanes),
                            0 != (64 & e.flags)) {
                                if (o)
                                    return Gn(e, t, i);
                                t.flags |= 64
                            }
                            if (null !== (r = t.memoizedState) && (r.rendering = null,
                            r.tail = null,
                            r.lastEffect = null),
                            mt(Zs, Zs.current),
                            o)
                                break;
                            return null;
                        case 23:
                        case 24:
                            return t.lanes = 0,
                            Bn(e, t, i)
                        }
                        return Jn(e, t, i)
                    }
                    hl = 0 != (16384 & e.flags)
                }
            else
                hl = !1;
            switch (t.lanes = 0,
            t.tag) {
            case 2:
                if (o = t.type,
                null !== e && (e.alternate = null,
                t.alternate = null,
                t.flags |= 2),
                e = t.pendingProps,
                r = vt(t, ps.current),
                Mt(t, i),
                r = dn(null, t, o, e, r, i),
                t.flags |= 1,
                "object" === _typeof(r) && null !== r && "function" == typeof r.render && void 0 === r.$$typeof) {
                    if (t.tag = 1,
                    t.memoizedState = null,
                    t.updateQueue = null,
                    gt(o)) {
                        var a = !0;
                        wt(t)
                    } else
                        a = !1;
                    t.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null,
                    Nt(t);
                    var s = o.getDerivedStateFromProps;
                    "function" == typeof s && Ht(t, o, s, e),
                    r.updater = js,
                    t.stateNode = r,
                    r._reactInternals = t,
                    Ut(t, o, e, i),
                    t = Wn(null, t, o, !0, a, i)
                } else
                    t.tag = 0,
                    On(null, t, r, i),
                    t = t.child;
                return t;
            case 16:
                r = t.elementType;
                e: {
                    switch (null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.flags |= 2),
                    e = t.pendingProps,
                    r = (a = r._init)(r._payload),
                    t.type = r,
                    a = t.tag = function(e) {
                        if ("function" == typeof e)
                            return Gi(e) ? 1 : 0;
                        if (null != e) {
                            if ((e = e.$$typeof) === Ro)
                                return 11;
                            if (e === Bo)
                                return 14
                        }
                        return 2
                    }(r),
                    e = _t(r, e),
                    a) {
                    case 0:
                        t = jn(null, t, r, e, i);
                        break e;
                    case 1:
                        t = qn(null, t, r, e, i);
                        break e;
                    case 11:
                        t = Rn(null, t, r, e, i);
                        break e;
                    case 14:
                        t = Fn(null, t, r, _t(r.type, e), o, i);
                        break e
                    }
                    throw Error(n(306, r, ""))
                }
                return t;
            case 0:
                return o = t.type,
                r = t.pendingProps,
                jn(e, t, o, r = t.elementType === o ? r : _t(o, r), i);
            case 1:
                return o = t.type,
                r = t.pendingProps,
                qn(e, t, o, r = t.elementType === o ? r : _t(o, r), i);
            case 3:
                if (Un(t),
                o = t.updateQueue,
                null === e || null === o)
                    throw Error(n(282));
                if (o = t.pendingProps,
                r = null !== (r = t.memoizedState) ? r.element : null,
                Lt(e, t),
                zt(t, o, null, i),
                (o = t.memoizedState.element) === r)
                    sn(),
                    t = Jn(e, t, i);
                else {
                    if ((a = (r = t.stateNode).hydrate) && (Gs = at(t.stateNode.containerInfo.firstChild),
                    Ks = t,
                    a = Js = !0),
                    a) {
                        if (null != (e = r.mutableSourceEagerHydrationData))
                            for (r = 0; r < e.length; r += 2)
                                (a = e[r])._workInProgressVersionPrimary = e[r + 1],
                                el.push(a);
                        for (i = Us(t, null, o, i),
                        t.child = i; i; )
                            i.flags = -3 & i.flags | 1024,
                            i = i.sibling
                    } else
                        On(e, t, o, i),
                        sn();
                    t = t.child
                }
                return t;
            case 5:
                return Gt(t),
                null === e && on(t),
                o = t.type,
                r = t.pendingProps,
                a = null !== e ? e.memoizedProps : null,
                s = r.children,
                ot(o, r) ? s = null : null !== a && ot(o, a) && (t.flags |= 16),
                Hn(e, t),
                On(e, t, s, i),
                t.child;
            case 6:
                return null === e && on(t),
                null;
            case 13:
                return Vn(e, t, i);
            case 4:
                return Zt(t, t.stateNode.containerInfo),
                o = t.pendingProps,
                null === e ? t.child = Ws(t, null, o, i) : On(e, t, o, i),
                t.child;
            case 11:
                return o = t.type,
                r = t.pendingProps,
                Rn(e, t, o, r = t.elementType === o ? r : _t(o, r), i);
            case 7:
                return On(e, t, t.pendingProps, i),
                t.child;
            case 8:
            case 12:
                return On(e, t, t.pendingProps.children, i),
                t.child;
            case 10:
                e: {
                    o = t.type._context,
                    r = t.pendingProps,
                    s = t.memoizedProps,
                    a = r.value;
                    var l = t.type._context;
                    if (mt(Os, l._currentValue),
                    l._currentValue = a,
                    null !== s)
                        if (l = s.value,
                        0 == (a = Wa(l, a) ? 0 : 0 | ("function" == typeof o._calculateChangedBits ? o._calculateChangedBits(l, a) : 1073741823))) {
                            if (s.children === r.children && !hs.current) {
                                t = Jn(e, t, i);
                                break e
                            }
                        } else
                            for (null !== (l = t.child) && (l.return = t); null !== l; ) {
                                var u = l.dependencies;
                                if (null !== u) {
                                    s = l.child;
                                    for (var c = u.firstContext; null !== c; ) {
                                        if (c.context === o && 0 != (c.observedBits & a)) {
                                            1 === l.tag && ((c = Ot(-1, i & -i)).tag = 2,
                                            Rt(l, c)),
                                            l.lanes |= i,
                                            null !== (c = l.alternate) && (c.lanes |= i),
                                            Dt(l.return, i),
                                            u.lanes |= i;
                                            break
                                        }
                                        c = c.next
                                    }
                                } else
                                    s = 10 === l.tag && l.type === t.type ? null : l.child;
                                if (null !== s)
                                    s.return = l;
                                else
                                    for (s = l; null !== s; ) {
                                        if (s === t) {
                                            s = null;
                                            break
                                        }
                                        if (null !== (l = s.sibling)) {
                                            l.return = s.return,
                                            s = l;
                                            break
                                        }
                                        s = s.return
                                    }
                                l = s
                            }
                    On(e, t, r.children, i),
                    t = t.child
                }
                return t;
            case 9:
                return r = t.type,
                o = (a = t.pendingProps).children,
                Mt(t, i),
                o = o(r = At(r, a.unstable_observedBits)),
                t.flags |= 1,
                On(e, t, o, i),
                t.child;
            case 14:
                return a = _t(r = t.type, t.pendingProps),
                Fn(e, t, r, a = _t(r.type, a), o, i);
            case 15:
                return zn(e, t, t.type, t.pendingProps, o, i);
            case 17:
                return o = t.type,
                r = t.pendingProps,
                r = t.elementType === o ? r : _t(o, r),
                null !== e && (e.alternate = null,
                t.alternate = null,
                t.flags |= 2),
                t.tag = 1,
                gt(o) ? (e = !0,
                wt(t)) : e = !1,
                Mt(t, i),
                qt(t, o, r),
                Ut(t, o, r, i),
                Wn(null, t, o, !0, e, i);
            case 19:
                return Gn(e, t, i);
            case 23:
            case 24:
                return Bn(e, t, i)
            }
            throw Error(n(156, t.tag))
        }
          , ou = function(e, t, n, i) {
            return new Ki(e,t,n,i)
        };
        ho.prototype.render = function(e) {
            so(e, this._internalRoot, null, null)
        }
        ,
        ho.prototype.unmount = function() {
            var e = this._internalRoot
              , t = e.containerInfo;
            so(null, e, null, (function() {
                t[ls] = null
            }
            ))
        }
        ;
        var ru = function(e) {
            13 === e.tag && (Ei(e, 4, Ci()),
            co(e, 4))
        }
          , au = function(e) {
            13 === e.tag && (Ei(e, 67108864, Ci()),
            co(e, 67108864))
        }
          , su = function(e) {
            if (13 === e.tag) {
                var t = Ci()
                  , n = xi(e);
                Ei(e, n, t),
                co(e, n)
            }
        }
          , lu = function(e, t) {
            return t()
        };
        or = function(e, t, i) {
            switch (t) {
            case "input":
                if (C(e, i),
                t = i.name,
                "radio" === i.type && null != t) {
                    for (i = e; i.parentNode; )
                        i = i.parentNode;
                    for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                    t = 0; t < i.length; t++) {
                        var o = i[t];
                        if (o !== e && o.form === e.form) {
                            var r = dt(o);
                            if (!r)
                                throw Error(n(90));
                            v(o),
                            C(o, r)
                        }
                    }
                }
                break;
            case "textarea":
                _(e, i);
                break;
            case "select":
                null != (t = i.value) && k(e, !!i.multiple, t, !1)
            }
        }
        ,
        function(e, t, n, i) {
            sr = e,
            lr = function(e, t, n, i, o) {
                var r = kl;
                kl |= 4;
                try {
                    return St(98, e.bind(null, t, n, i, o))
                } finally {
                    0 === (kl = r) && (wi(),
                    Tt())
                }
            }
            ,
            ur = function() {
                0 == (49 & kl) && (function() {
                    if (null !== Ql) {
                        var e = Ql;
                        Ql = null,
                        e.forEach((function(e) {
                            e.expiredLanes |= 24 & e.pendingLanes,
                            ki(e, Ns())
                        }
                        ))
                    }
                    Tt()
                }(),
                qi())
            }
            ,
            cr = function(e, t) {
                var n = kl;
                kl |= 2;
                try {
                    return e(t)
                } finally {
                    0 === (kl = n) && (wi(),
                    Tt())
                }
            }
        }(Pi);
        var uu = {
            Events: [ut, ct, dt, F, z, qi, {
                current: !1
            }]
        };
        !function(e) {
            if (e = {
                bundleType: e.bundleType,
                version: e.version,
                rendererPackageName: e.rendererPackageName,
                rendererConfig: e.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: Po.ReactCurrentDispatcher,
                findHostInstanceByFiber: fo,
                findFiberByHostInstance: e.findFiberByHostInstance || po,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null
            },
            "undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
                e = !1;
            else {
                var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!t.isDisabled && t.supportsFiber)
                    try {
                        vs = t.inject(e),
                        gs = t
                    } catch (e) {}
                e = !0
            }
        }({
            findFiberByHostInstance: lt,
            bundleType: 0,
            version: "17.0.2",
            rendererPackageName: "react-dom"
        }),
        e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uu,
        e.createPortal = go,
        e.findDOMNode = function(e) {
            if (null == e)
                return null;
            if (1 === e.nodeType)
                return e;
            var t = e._reactInternals;
            if (void 0 === t) {
                if ("function" == typeof e.render)
                    throw Error(n(188));
                throw Error(n(268, Object.keys(e)))
            }
            return e = null === (e = V(t)) ? null : e.stateNode
        }
        ,
        e.flushSync = function(e, t) {
            var n = kl;
            if (0 != (48 & n))
                return e(t);
            kl |= 1;
            try {
                if (e)
                    return St(99, e.bind(null, t))
            } finally {
                kl = n,
                Tt()
            }
        }
        ,
        e.hydrate = function(e, t, i) {
            if (!mo(t))
                throw Error(n(200));
            return vo(null, e, t, !0, i)
        }
        ,
        e.render = function(e, t, i) {
            if (!mo(t))
                throw Error(n(200));
            return vo(null, e, t, !1, i)
        }
        ,
        e.unmountComponentAtNode = function(e) {
            if (!mo(e))
                throw Error(n(40));
            return !!e._reactRootContainer && ($i((function() {
                vo(null, null, e, !1, (function() {
                    e._reactRootContainer = null,
                    e[ls] = null
                }
                ))
            }
            )),
            !0)
        }
        ,
        e.unstable_batchedUpdates = Pi,
        e.unstable_createPortal = function(e, t) {
            return go(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
        }
        ,
        e.unstable_renderSubtreeIntoContainer = function(e, t, i, o) {
            if (!mo(i))
                throw Error(n(200));
            if (null == e || void 0 === e._reactInternals)
                throw Error(n(38));
            return vo(e, t, i, !1, o)
        }
        ,
        e.version = "17.0.2"
    }
    ,
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports, require("react")) : "function" == typeof define && define.amd ? define(["exports", "react"], t) : t((e = e || self).ReactDOM = {}, e.React)
}(),
function(e, t, n) {
    function i(e, t) {
        return _typeof(e) === t
    }
    function o(e) {
        return e.replace(/([a-z])-([a-z])/g, (function(e, t, n) {
            return t + n.toUpperCase()
        }
        )).replace(/^-/, "")
    }
    function r(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function a() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : w ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }
    function s(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function l(e) {
        return e.replace(/([A-Z])/g, (function(e, t) {
            return "-" + t.toLowerCase()
        }
        )).replace(/^ms-/, "-ms-")
    }
    function u(t, n, i) {
        var o;
        if ("getComputedStyle"in e) {
            o = getComputedStyle.call(e, t, n);
            var r = e.console;
            if (null !== o)
                i && (o = o.getPropertyValue(i));
            else if (r) {
                r[r.error ? "error" : "log"].call(r, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else
            o = !n && t.currentStyle && t.currentStyle[i];
        return o
    }
    function c(e, n, i, o) {
        var r, s, l, u, c = "modernizr", d = a("div"), f = function() {
            var e = t.body;
            return e || ((e = a(w ? "svg" : "body")).fake = !0),
            e
        }();
        if (parseInt(i, 10))
            for (; i--; )
                (l = a("div")).id = o ? o[i] : c + (i + 1),
                d.appendChild(l);
        return (r = a("style")).type = "text/css",
        r.id = "s" + c,
        (f.fake ? f : d).appendChild(r),
        f.appendChild(d),
        r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(t.createTextNode(e)),
        d.id = c,
        f.fake && (f.style.background = "",
        f.style.overflow = "hidden",
        u = b.style.overflow,
        b.style.overflow = "hidden",
        b.appendChild(f)),
        s = n(d, e),
        f.fake ? (f.parentNode.removeChild(f),
        b.style.overflow = u,
        b.offsetHeight) : d.parentNode.removeChild(d),
        !!s
    }
    function d(t, i) {
        var o = t.length;
        if ("CSS"in e && "supports"in e.CSS) {
            for (; o--; )
                if (e.CSS.supports(l(t[o]), i))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in e) {
            for (var r = []; o--; )
                r.push("(" + l(t[o]) + ":" + i + ")");
            return c("@supports (" + (r = r.join(" or ")) + ") { #modernizr { position: absolute; } }", (function(e) {
                return "absolute" == u(e, null, "position")
            }
            ))
        }
        return n
    }
    function f(e, t, s, l) {
        function u() {
            f && (delete T.style,
            delete T.modElem)
        }
        if (l = !i(l, "undefined") && l,
        !i(s, "undefined")) {
            var c = d(e, s);
            if (!i(c, "undefined"))
                return c
        }
        for (var f, p, h, m, v, g = ["modernizr", "tspan", "samp"]; !T.style && g.length; )
            f = !0,
            T.modElem = a(g.shift()),
            T.style = T.modElem.style;
        for (h = e.length,
        p = 0; h > p; p++)
            if (m = e[p],
            v = T.style[m],
            r(m, "-") && (m = o(m)),
            T.style[m] !== n) {
                if (l || i(s, "undefined"))
                    return u(),
                    "pfx" != t || m;
                try {
                    T.style[m] = s
                } catch (e) {}
                if (T.style[m] != v)
                    return u(),
                    "pfx" != t || m
            }
        return u(),
        !1
    }
    function p(e, t, n, o, r) {
        var a = e.charAt(0).toUpperCase() + e.slice(1)
          , l = (e + " " + x.join(a + " ") + a).split(" ");
        return i(t, "string") || i(t, "undefined") ? f(l, t, o, r) : function(e, t, n) {
            var o;
            for (var r in e)
                if (e[r]in t)
                    return !1 === n ? e[r] : i(o = t[e[r]], "function") ? s(o, n || t) : o;
            return !1
        }(l = (e + " " + S.join(a + " ") + a).split(" "), t, n)
    }
    function h(e, t, i) {
        return p(e, n, n, t, i)
    }
    var m = []
      , v = []
      , g = {
        _version: "3.5.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var n = this;
            setTimeout((function() {
                t(n[e])
            }
            ), 0)
        },
        addTest: function(e, t, n) {
            v.push({
                name: e,
                fn: t,
                options: n
            })
        },
        addAsyncTest: function(e) {
            v.push({
                name: null,
                fn: e
            })
        }
    }
      , y = function() {};
    y.prototype = g,
    y = new y;
    var b = t.documentElement
      , w = "svg" === b.nodeName.toLowerCase()
      , C = "Moz O ms Webkit"
      , x = g._config.usePrefixes ? C.split(" ") : [];
    g._cssomPrefixes = x;
    var E = function(t) {
        var i, o = prefixes.length, r = e.CSSRule;
        if (void 0 === r)
            return n;
        if (!t)
            return !1;
        if ((i = (t = t.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE")in r)
            return "@" + t;
        for (var a = 0; o > a; a++) {
            var s = prefixes[a];
            if (s.toUpperCase() + "_" + i in r)
                return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    g.atRule = E;
    var S = g._config.usePrefixes ? C.toLowerCase().split(" ") : [];
    g._domPrefixes = S;
    var k = {
        elem: a("modernizr")
    };
    y._q.push((function() {
        delete k.elem
    }
    ));
    var T = {
        style: k.elem.style
    };
    y._q.unshift((function() {
        delete T.style
    }
    )),
    g.testAllProps = p,
    g.testAllProps = h,
    y.addTest("flexbox", h("flexBasis", "1px", !0)),
    y.addTest("cssmask", h("maskRepeat", "repeat-x", !0));
    var I = g.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? E(e) : (-1 != e.indexOf("-") && (e = o(e)),
        t ? p(e, t, n) : p(e, "pfx"))
    }
    ;
    y.addTest("objectfit", !!I("objectFit"), {
        aliases: ["object-fit"]
    }),
    function() {
        var e, t, n, o, r, a;
        for (var s in v)
            if (v.hasOwnProperty(s)) {
                if (e = [],
                (t = v[s]).name && (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++)
                        e.push(t.options.aliases[n].toLowerCase());
                for (o = i(t.fn, "function") ? t.fn() : t.fn,
                r = 0; r < e.length; r++)
                    1 === (a = e[r].split(".")).length ? y[a[0]] = o : (!y[a[0]] || y[a[0]]instanceof Boolean || (y[a[0]] = new Boolean(y[a[0]])),
                    y[a[0]][a[1]] = o),
                    m.push((o ? "" : "no-") + a.join("-"))
            }
    }(),
    function(e) {
        var t = b.className
          , n = y._config.classPrefix || "";
        if (w && (t = t.baseVal),
        y._config.enableJSClass) {
            var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(i, "$1" + n + "js$2")
        }
        y._config.enableClasses && (t += " " + n + e.join(" " + n),
        w ? b.className.baseVal = t : b.className = t)
    }(m),
    delete g.addTest,
    delete g.addAsyncTest;
    for (var _ = 0; _ < y._q.length; _++)
        y._q[_]();
    e.Modernizr = y
}(window, document);
var viewType = getViewType();
function getViewType() {
    var e = document.getElementById("menu")
      , t = window.getComputedStyle(e, "::after").getPropertyValue("content");
    return t = t.replace(/"/g, "").replace(/'/g, "")
}
function resizeWatcher() {
    $(window).on("resize", (function() {
        var e = getViewType();
        if (e !== viewType) {
            var t = document.createEvent("Event");
            t.initEvent("wnd-view-switched-" + e, !1, !0),
            document.body.dispatchEvent(t),
            viewType = e
        }
    }
    ))
}
function sectionControl() {
    var e = $(".s-bdh")
      , t = []
      , n = $(".s:not(.s-hm-hidden)")
      , i = ""
      , o = "";
    function r(e) {
        var t = $(e).attr("class").split(/\s+/);
        for (var n in t) {
            var i = t[n];
            if (i.indexOf("sc-") > -1)
                return i
        }
    }
    function a(e) {
        return $(e).find(".wnd-background-solid").css("background-color")
    }
    function s() {
        $(i).addClass("wn-space-bottom"),
        $(o).addClass("wn-space-top"),
        cmsReset(i)
    }
    function l() {
        $(i).removeClass("wn-space-bottom"),
        $(o).removeClass("wn-space-top"),
        cmsReset(i)
    }
    n.each((function(e) {
        $(this).is("[data-space]") && t.push(e)
    }
    )),
    $(t).each((function(e) {
        var u = t[e]
          , c = u + 1;
        if (i = n[u],
        o = n[c],
        $(o).hasClass("wnd-disabled"))
            l();
        else {
            var d = r(i);
            if (d != r(o) || $(o).hasClass("s-f"))
                l();
            else if (d.indexOf("sc-m") > -1) {
                var f = a(i);
                f == a(o) && void 0 !== f ? s() : l()
            } else
                s()
        }
    }
    )),
    e[0] && (isCMS() || 1 == e.find(".ez .b-text-c:empty").length && e.addClass("wn-empty"),
    1 == e.find(".ez > div:empty").length && e.addClass("wn-empty"))
}
function shortContent() {
    var e = !1;
    if (inIframe() && deviceDetect("iphone") && (e = !0),
    0 == e) {
        var t = $(window).height()
          , n = 0
          , i = $("body")
          , o = $(".l-m .s:not(.wnd-disabled):last-child");
        if ("fixed" != $(".l-h").css("position") && $(".l-h .s").each((function() {
            n += $(this).height()
        }
        )),
        "fixed" != $(".l-f").css("position") && $(".l-f .s").each((function() {
            n += $(this).height()
        }
        )),
        $("#wnd_toolbar")[0] && (t -= $("#wnd_toolbar").height()),
        $("#fe_footer")[0] && (n += $("#fe_footer").height()),
        $(".wnd-free-stripe")[0] && (n += $(".wnd-free-stripe").height()),
        $("#wnd_cookie_bar")[0] && (n += $("#wnd_cookie_bar").height()),
        $("#wnd_user_bar")[0] && (n += $("#wnd_user_bar").height()),
        $(".l-m .s:not(.wnd-disabled)").each((function() {
            if ($(this).find(".ez")[0]) {
                var e = $(this).find(".ez").outerHeight(!0);
                n += e
            } else
                n += $(this).outerHeight(!0)
        }
        )),
        n <= t) {
            if (!$(i).hasClass("short-content")) {
                $(i).addClass("short-content");
                var r = document.createEvent("Event");
                r.initEvent("fixCartEvent", !1, !0),
                document.body.dispatchEvent(r),
                o[0] && cmsReset(o)
            }
        } else
            $(i).hasClass("short-content") && ($(i).removeClass("short-content"),
            cmsReset(i))
    }
}
function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function borderControll() {
    var sectionCount = $(".s").length, currentSection = 0, realSectionID = 0, sectionsArray = [], layoutSection = $("#layout-section"), bordersAttr, borderParamsExist, currentSectionData, borderPos, borderAction, sectionSelector;
    function getSectionBackground(e) {
        var t, n = "", i = "", o = $(e).find(".s-bg-l"), r = $(e).find(".s-bg");
        return void 0 !== o && o.length || (o = e),
        $(o).attr("class").indexOf("wnd-background-solid") > -1 ? (t = "solid",
        "rgba(0, 0, 0, 0)" != (n = $(o).css("backgroundColor")) && "transparent" != n && void 0 !== n || (n = $(e).css("backgroundColor"))) : $(o).attr("class").indexOf("wnd-background-image") > -1 ? t = "image" : $(o).attr("class").indexOf("wnd-background-video") > -1 ? t = "video" : $(o).attr("class").indexOf("wnd-background-pattern") > -1 ? t = "pattern" : "s-bg-l" == $(o).attr("class") ? (t = "solid",
        n = $(o).css("backgroundColor"),
        i = $(r).css("backgroundColor"),
        "rgba(0, 0, 0, 0)" != n && "transparent" != n && void 0 !== n || "rgba(0, 0, 0, 0)" != (n = $(e).css("backgroundColor")) && "transparent" != n && void 0 !== n || "rgba(0, 0, 0, 0)" == i && "transparent" == i && null == i || (n = i)) : -1 == $(o).attr("class").indexOf("s-bg-l") && (t = "solid",
        n = $(o).css("backgroundColor")),
        "solid" == t && (void 0 !== n && "rgba(0, 0, 0, 0)" != n && "transparent" != n || void 0 !== (n = $("body").css("backgroundColor")) && "rgba(0, 0, 0, 0)" != n && "transparent" != n || (n = $(".wnd-page").css("backgroundColor"))),
        {
            backgroundType: t,
            backgroundColor: n
        }
    }
    function handleBorder(borderElm, borderPos, curSec, action) {
        var currentSection = $(".s").eq(curSec);
        "section" != borderElm ? eval('$(currentSection).find(".' + borderElm + '").' + action + 'Class("border-' + borderPos + '")') : eval("$(currentSection)." + action + 'Class("border-' + borderPos + '")')
    }
    sectionCount > 1 && $(".s").each((function() {
        $(this).hasClass("wnd-disabled") ? realSectionID++ : (bordersAttr = $(this).attr("wn-border"),
        borderParamsExist = "undefined" !== _typeof(bordersAttr) && !1 !== bordersAttr,
        currentSectionData = getSectionBackground($(this), currentSection),
        sectionsArray.push({
            idSection: currentSection,
            realSectionId: realSectionID,
            bgColor: currentSectionData.backgroundColor,
            bgType: currentSectionData.backgroundType,
            sectionVisible: "block" == $(this).css("display"),
            borderTop: !!borderParamsExist && bordersAttr.indexOf("top") > -1,
            borderBottom: !!borderParamsExist && bordersAttr.indexOf("bottom") > -1,
            borderElm: borderParamsExist ? $(this).attr("wn-border-element") : ""
        }),
        realSectionID++,
        currentSection++)
    }
    )),
    $.each(sectionsArray, (function(e, t) {
        if (t.borderTop || t.borderBottom) {
            if (sectionSelector = e,
            t.borderTop && e > 0) {
                for (sectionSelector = e - 1; 0 == sectionsArray[sectionSelector]; )
                    sectionSelector--;
                if (sectionsArray[sectionSelector].borderBottom)
                    return
            }
            if (t.borderBottom && e < sectionCount - 1)
                for (sectionSelector = e + 1; 0 == sectionsArray[sectionSelector]; )
                    sectionSelector++;
            borderPos = t.borderTop ? "top" : "bottom",
            borderAction = "solid" == t.bgType && "solid" == sectionsArray[sectionSelector].bgType && t.bgColor == sectionsArray[sectionSelector].bgColor ? "add" : "remove",
            handleBorder(t.borderElm, borderPos, t.realSectionId, borderAction)
        }
    }
    )),
    "none" == $(layoutSection).attr("wn-border") && ($(layoutSection).removeClass("border-top").removeClass("border-bottom"),
    $(layoutSection).addClass("border-none"))
}
function msieversion() {
    var e = window.navigator.userAgent
      , t = e.indexOf("MSIE ");
    if (t > 0)
        return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
    if (e.indexOf("Trident/") > 0) {
        var n = e.indexOf("rv:");
        return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10)
    }
    var i = e.indexOf("Edge/");
    return i > 0 && parseInt(e.substring(i + 5, e.indexOf(".", i)), 10)
}
function issafari() {
    return -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") ? 1 : 0
}
function isfirefox() {
    return navigator.userAgent.indexOf("Firefox") > -1
}
$(document).ready((function() {
    if ($("html").removeClass("no-js").addClass("js"),
    navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),
        document.querySelector("head").appendChild(e)
    }
    deviceDetect("detect"),
    inIframe() && deviceDetect("iphone") && $("body").addClass("ios-iframe"),
    deviceDetect("ios") && $("body").addClass("ios"),
    smoothScrolling(),
    watchForPrint(),
    bindForms(),
    resizeWatcher(),
    $(window).on("resize", (function() {
        deviceDetect("detect")
    }
    ))
}
)),
$(document).ready((function() {
    var e = !1;
    sectionControl(),
    isCMS() && $(document).on("wnd-content-change", "body", (function(t) {
        $(t.target).is("section") && setTimeout((function() {
            e ? e = !1 : (sectionControl(),
            e = !0)
        }
        ), 50)
    }
    ))
}
)),
$(document).ready((function() {
    var e = !1
      , t = !1;
    setTimeout((function() {
        shortContent(),
        e = !0
    }
    ), 500),
    isCMS() && $(document).on("wnd-content-change", ".wnd-page", (function() {
        e ? e = !1 : setTimeout((function() {
            shortContent()
        }
        ), 300)
    }
    )),
    $(document).on("wnd-dynamic-content-change", ".eshop", (function() {
        e ? e = !1 : setTimeout((function() {
            shortContent()
        }
        ), 300)
    }
    )),
    $(window).on("resize orientationchange", (function() {
        t ? t = !1 : setTimeout((function() {
            shortContent(),
            t = !0
        }
        ), 500)
    }
    ))
}
)),
function(e) {
    e.fn.parentResponsive = function(t) {
        var n = e.extend({}, e.fn.parentResponsive.defaults, t)
          , o = n.classes.join(" ");
        !function(t, n) {
            e(t).each((function(t) {
                var r = e(this);
                if ("none" == r.css("float"))
                    r.removeClass(o);
                else {
                    var a = r.outerWidth()
                      , s = ""
                      , l = ""
                      , u = r.attr("class");
                    if (u = u.split(" "),
                    e.each(u, (function(e) {
                        u[e] != n.column && (l += u[e] + " ")
                    }
                    )),
                    e.each(n.classes, (function(e) {
                        if (a > n.widths[e] && a <= n.widths[e + 1])
                            for (i = 0; i <= e; i++)
                                s += n.classes[i] + " "
                    }
                    )),
                    l != s && (r.removeClass(o).addClass(s),
                    isCMS())) {
                        var c = r[0] ? r[0] : r;
                        if (c) {
                            var d = document.createEvent("Event");
                            d.initEvent("wnd-redraw-done", !0, !0),
                            c.dispatchEvent(d)
                        }
                    }
                }
            }
            ))
        }(e(this), n)
    }
    ,
    e.fn.parentResponsive.defaults = {
        widths: [0, 319, 364, 399, 479, 599, 767, 899, 1023, 1199, 1799, 9999],
        classes: ["pr-0", "pr-320", "pr-365", "pr-400", "pr-480", "pr-600", "pr-768", "pr-900", "pr-1024", "pr-1200", "pr-big pr-infinity"],
        column: "pr"
    },
    e(document).ready((function() {
        var t = function() {
            e(".pr").parentResponsive()
        };
        isCMS() && (e(document).on("wnd-redraw", ".ez", (function() {
            var t = e(this).find(".pr");
            t[0] && setTimeout((function() {
                t.parentResponsive()
            }
            ), 200)
        }
        )),
        e(document).on("wnd-redraw", ".s-f-map", (function() {
            var t = e(this).find(".pr");
            t[0] && setTimeout((function() {
                t.parentResponsive()
            }
            ), 200)
        }
        ))),
        e(".pr")[0] && (t(),
        e(window).on("resize orientationchange", (function() {
            t()
        }
        ))),
        e(".pr").on("resize", (function() {
            setTimeout((function() {
                t()
            }
            ), 200)
        }
        ))
    }
    ))
}(jQuery),
$(document).ready((function() {
    borderControll(),
    isCMS() && $(document).on("wnd-redraw", "body", (function() {
        $(".l").hasClass("l-sidebar") ? setTimeout(borderControll, 50) : borderControll()
    }
    ))
}
));
var is_cms = isCMS()
  , support3D = !msieversion() && !issafari() && !isfirefox()
  , force2D = "2D" == $("body").attr("data-parallax");
function backgroundResize() {
    var e = $(window).height()
      , t = $(window).width();
    $(".bgatt-parallax").each((function(n) {
        var i = !1;
        $(this).hasClass("wnd-background-pattern") && (i = !0);
        var o = $(this);
        if (is_cms || !support3D || force2D) {
            var r = o.width()
              , a = o.height();
            if ($("body").hasClass("l-sidebar")) {
                var s = parseInt($(".l-m").css("marginLeft"))
                  , l = !1;
                ($(".s-hn").hasClass("sc-wt") || $(".s-hn").hasClass("sc-dt") || $(".s-hn").hasClass("sc-none")) && (l = !0),
                (!0 === l || s > 0) && (r = t)
            }
            var u, c = $(o).attr("style"), d = c.indexOf("http");
            u = c.indexOf("')") > -1 ? c.indexOf("')") : c.indexOf('")') > -1 ? c.indexOf('")') : c.indexOf(")");
            var f = c.substr(d, u - d);
            $("<img/>").attr("src", f).on("load", (function() {
                var t = this.width
                  , n = this.height
                  , s = t / n;
                r > (t = (n = a + (e - a) + 200) * s) && (n = (t = r) / s),
                i || o.css("background-size", t + "px " + n + "px"),
                o.attr("resized-imgW", t),
                o.attr("resized-imgH", n),
                o.css("background-attachment", "fixed")
            }
            ))
        } else {
            $(this).hasClass("parallax") || $(this).addClass("parallax");
            o = $(this);
            var p = $(this).parent().parent()
              , h = (a = p.height()) + (e - a) + 200;
            o.css("height", h + "px")
        }
    }
    ));
    var n = 0;
    n = msieversion() ? 300 : 100,
    setTimeout((function() {
        parallaxPosition()
    }
    ), n)
}
function parallaxPosition(e) {
    var t = $(window).height()
      , n = $(window).scrollTop()
      , i = n + t
      , o = (n + i) / 2;
    $(".bgatt-parallax").each((function(e) {
        var r, a, s = $(this), l = $(this).parent().parent(), u = !!$(l).is(".l-m .section-wrapper-content section:first-child"), c = !!$(l).is(".l-m .section-wrapper-content section:last-child"), d = $(this).hasClass("bgpos-top-center"), f = $(this).hasClass("bgpos-bottom-center");
        is_cms || !support3D || force2D ? (a = s.offset().top,
        r = s.height()) : (a = l.offset().top,
        r = l.outerHeight());
        var p, h, m, v, g, y, b = a + r;
        if (i > a && n < b)
            if (is_cms || !support3D || force2D) {
                h = s.attr("resized-imgw"),
                p = s.attr("resized-imgh");
                var w, C = 0;
                if ($(this).css("top").indexOf("px") > 0 && parseInt($(this).css("top"), 10) > 0 && (C = parseInt($(this).css("top"), 10)),
                m = 0,
                v = -p + t,
                u && d)
                    y = m + (v - m) * (o - (a -= g = r < t ? p - r : p - t)) / ((b += g) - a) - (m + (v - m) * (t / 2 - a) / (b - a));
                else if (c && f) {
                    y = m + (v - m) * (o - (a -= g = r < t ? p - r : p - t)) / ((b += g) - a) + (m + (v - m) * (g + t / 2) / (b - a))
                } else
                    y = m + (v - m) * (o - (a -= g = r < t ? p - r : p - t)) / ((b += g) - a);
                if (y += C,
                $("body").hasClass("l-sidebar") && "fixed" === $(".l-h").css("position")) {
                    var x = $("header").width()
                      , E = parseInt($("header").css("marginLeft"))
                      , S = !1;
                    ($(".s-hn").hasClass("sc-wt") || $(".s-hn").hasClass("sc-dt") || $(".s-hn").hasClass("sc-none")) && (S = !0),
                    !0 === S || E > 0 ? w = "50%" : (w = x + parseInt($(this).width() - h) / 2,
                    w += "px")
                } else
                    w = "50%";
                $(this).css("background-position", w + " " + y + "px")
            } else {
                if (m = 0,
                v = -(p = s.height()) + t,
                u && d) {
                    y = m + (v - m) * (o - (a -= g = r < t ? p - r : p - t)) / ((b += g) - a) - (m + (v - m) * (t / 2 - a) / (b - a)) + 0
                } else if (c && f) {
                    y = m + (v - m) * (o - (a -= g = r < t ? p - r : p - t)) / ((b += g) - a) + (m + (v - m) * (g + t / 2) / (b - a))
                } else
                    y = m + (v - m) * (o - (a -= g = r < t ? p - r : p - t)) / ((b += g) - a);
                var k = "translate3d(0px," + y + "px, 0px)";
                if ($("body").hasClass("l-sidebar") && "fixed" === $(".l-h").css("position")) {
                    x = $(".l-h").width(),
                    E = parseInt($(".l-h").css("marginLeft")),
                    S = !1;
                    ($(".s-hn").hasClass("sc-wt") || $(".s-hn").hasClass("sc-dt") || $(".s-hn").hasClass("sc-none")) && (S = !0),
                    !1 === S && 0 === E && s.css("margin-left", x + E + "px")
                } else
                    s.css("margin-left", "0px");
                s.css("-webkit-transform", k),
                s.css("-ms-transform", k),
                s.css("transform", k)
            }
    }
    ))
}
function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
/*! PhotoSwipe - v4.1.2 - 2017-04-05
 * http://photoswipe.com
 * Copyright (c) 2017 Dmitry Semenov; */
function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
/*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
 * http://photoswipe.com
 * Copyright (c) 2017 Dmitry Semenov; */
support3D = !1,
$(document).ready((function() {
    deviceDetect("touched") || deviceDetect("wnd-frontend-test") || deviceDetect("mobile-devices") ? $(".bgatt-parallax").removeClass("bgatt-parallax").addClass("bgatt-scroll") : ($(window).on("resize orientationchange", (function() {
        backgroundResize()
    }
    )),
    $(window).on("scroll", (function() {
        window.requestAnimationFrame(parallaxPosition)
    }
    )),
    isCMS() ? setTimeout((function() {
        backgroundResize()
    }
    ), 50) : backgroundResize()),
    isCMS() && $(document).on("wnd-redraw", "body", (function() {
        setTimeout((function() {
            $(".bgatt-scroll").removeClass("parallax"),
            $(".bgatt-fixed").removeClass("parallax"),
            deviceDetect("touched") || ($(window).on("resize orientationchange", (function() {
                backgroundResize()
            }
            )),
            backgroundResize())
        }
        ), 200)
    }
    ))
}
)),
function(e) {
    e.fn.forms = function(t) {
        var n = e.extend({}, e.fn.forms.defaults, t)
          , i = function(e, t) {
            this.formElm = e
        };
        i.prototype.bindStandardInputs = function() {
            e(this.formElm).find(".watch-change input").on("keyup blur input change click", (function() {
                e(this).val().length > 0 ? e(this).addClass("not-empty") : e(this).removeClass("not-empty")
            }
            ))
        }
        ,
        i.prototype.bindSelectInputs = function() {
            e(this.formElm).find("select").on("focus", (function() {
                e(this).removeClass("not-clicked")
            }
            ))
        }
        ,
        i.prototype.bindTextareas = function() {
            e(this.formElm).find("textarea").on("keyup blur", (function() {
                e(this).val().length > 0 ? e(this).addClass("not-empty") : e(this).removeClass("not-empty")
            }
            ))
        }
        ,
        i.prototype.bindTextareaResize = function() {
            e.each(e(this.formElm).find("textarea"), (function() {
                e(this).on("keyup input", (function() {
                    var t;
                    e(t = this).css("height", "auto").css("height", t.scrollHeight + 2)
                }
                ))
            }
            ))
        }
        ,
        i.prototype.bindNumberInputs = function() {
            var t = null;
            e(this.formElm).find(".form-number button").on("mousedown touchstart click", (function(n) {
                if (n.preventDefault(),
                n.stopPropagation(),
                n.stopImmediatePropagation(),
                null === t)
                    t = n.type;
                else if (n.type != t)
                    return;
                var i = e(this)
                  , o = e(i).parent().prev().prev();
                e(o).focus(),
                e.isNumeric(e(o).val()) ? e(i).hasClass("form-number-plus") ? e(o).val(parseInt(e(o).val()) + 1) : e(o).val(parseInt(e(o).val()) - 1) : void 0 !== e(o).val().length && 0 !== e(o).val().length || (e(i).hasClass("form-number-plus") ? e(o).val(1) : e(o).val(-1)),
                e(o).hasClass("not-empty") || e(o).addClass("not-empty")
            }
            ))
        }
        ,
        i.prototype.bindFileInputs = function() {
            e(this.formElm).find(".form-file input").on("change", (function(t) {
                var n = e(this).parent().parent().find(".form-file-text").text();
                n.lastIndexOf("\\") > -1 && e(this).parent().parent().find(".form-file-text").text(n.substr(n.lastIndexOf("\\") + 1)),
                "" !== e(this).val() && void 0 !== e(this).val() ? e(this).parent().parent().addClass("not-empty") : e(this).parent().parent().removeClass("not-empty")
            }
            )),
            e(this.formElm).find(".form-file .form-file-remove").on("click", (function(t) {
                var n = e(this).parent();
                e(n).find("input").val(""),
                e(n).removeClass("not-empty"),
                e(n).hasClass("wnd-required") && e(n).addClass("wnd-validate-error"),
                setTimeout((function() {
                    e(n).find(".form-file-text").text("")
                }
                ), 350)
            }
            ))
        }
        ,
        i.prototype.onFormLoad = function() {
            e(this.formElm).each((function() {
                e(this).find(".form-input").each((function() {
                    if (e(this).hasClass("form-select"))
                        !isCMS() && e(this).closest(".form").find(".wnd-validate-error").length > 0 && e(this).find("select").removeClass("not-clicked");
                    else if (e(this).hasClass("form-textarea")) {
                        var t = e(this).find("textarea");
                        e(t).val().length > 0 && e(t).addClass("not-empty")
                    } else if (e(this).hasClass("form-email")) {
                        t = e(this).find("input");
                        e(t).val().length > 0 && "@" !== e(t).val() && e(t).addClass("not-empty")
                    } else {
                        t = e(this).find("input");
                        void 0 !== e(t).val() && e(t).val().length > 0 && e(t).addClass("not-empty")
                    }
                }
                ))
            }
            ))
        }
        ,
        i.prototype.onSubmit = function() {
            var t = e(this.formElm).find("form");
            e(this.formElm).find(".form-submit").on("click", (function() {
                !1 === t[0].checkValidity() && e(t).find("select").removeClass("not-clicked")
            }
            ))
        }
        ,
        i.prototype.initForm = function() {
            isCMS() || (this.bindStandardInputs(),
            this.bindTextareaResize(),
            this.bindTextareas(),
            this.bindSelectInputs(),
            this.bindNumberInputs(),
            this.bindFileInputs(),
            this.onFormLoad(),
            this.onSubmit())
        }
        ,
        new i(e(this),n).initForm()
    }
    ,
    e.fn.forms.defaults = {}
}(jQuery),
function(e) {
    e.fn.feed = function(t) {
        var n = e.extend({}, e.fn.feed.defaults, t)
          , i = e(this);
        i.each((function() {
            var t = e(this).find(n.wrapper)
              , o = t.width()
              , r = e(this).find(n.item)
              , a = []
              , s = []
              , l = []
              , u = []
              , c = []
              , d = []
              , f = []
              , p = [];
            r.each((function(t) {
                var i = "full";
                if (a[t] = parseFloat(e(this).outerWidth(!0)),
                s[t] = parseFloat(e(this).css("paddingTop")),
                l[t] = parseFloat(e(this).css("paddingRight")),
                u[t] = parseFloat(e(this).css("paddingBottom")),
                c[t] = parseFloat(e(this).css("paddingLeft")),
                e(this).hasClass("wnd-video-thumbnail")) {
                    var o = e(this).find(n.video_thumb);
                    d[t] = parseFloat(e(o).outerWidth(!0)),
                    f[t] = parseInt(e(o).outerHeight(!0))
                } else {
                    if ("gallery" == n.type)
                        var r = e(this).find("a");
                    else
                        r = e(this).find("img");
                    r[0] ? (d[t] = parseInt(e(r).attr("width")),
                    f[t] = parseInt(e(r).attr("height"))) : (d[t] = 0,
                    f[t] = 0,
                    i = "no-media")
                }
                if ("outside" == n.title) {
                    if ("no-media" == i)
                        var h = e(this).find(n.item_wrapper);
                    else
                        h = e(this).find(n.title_class);
                    "none" != h.css("display") ? p[t] = parseFloat(h.outerHeight(!0)) : p[t] = 0
                } else
                    p[t] = 0;
                0
            }
            ));
            for (var h = [], m = [], v = [], g = [], y = 0, b = [], w = [], C = [], x = Math.round(o / a[0]), E = 1, S = 0, k = [], T = [], I = 0; I < x; I++)
                k.push(0);
            if (x > 1) {
                function _(e, t) {
                    var n, i = [];
                    for (n = 0; n < e.length; n++)
                        e[n] === t && i.push(n);
                    return i
                }
                var P, $, D, M, A;
                r.each((function(t) {
                    if (T[t] = S,
                    h[t] = a[t],
                    y = parseFloat(f[t] / d[t] * (a[t] - c[t] - l[t])),
                    isNaN(y) && (y = 0),
                    b[t] = y,
                    m[t] = y + s[t] + u[t] + p[t],
                    "gallery" == n.type) {
                        b[t] = Math.round(b[t]);
                        var i = e(this).find(n.item_wrapper);
                        "undefined" !== _typeof(i.attr("data-resize-value")) ? (C[t] = parseInt(i.attr("data-resize-value")),
                        w = 0 !== C[t],
                        b[t] += C[t],
                        m[t] += C[t]) : (0 === t ? (w[t] = !1,
                        C[t] = 0) : Math.abs(b[t] - b[t - 1]) < n.resize_threshold ? (w[t] = !0,
                        C[t] = Math.floor(Math.random() * (n.resize_max - n.resize_min) + n.resize_min)) : (w[t] = !1,
                        C[t] = 0),
                        i.attr("data-resize-value", C[t]),
                        b[t] += C[t],
                        m[t] += C[t])
                    }
                    (1 == E ? (v[t] = 0,
                    g[t] = 0 == t ? 0 : g[t - 1] + h[t - 1]) : (g[t] = t / x == E - 1 ? 0 : g[t - 1] + h[t - 1],
                    v[t] = k[S]),
                    (t + 1) / x == E && E++,
                    k[S] += m[t],
                    ++S + 1 > x && (S = 0),
                    "gallery" == n.type && C[t] > 0) && ((i = e(this).find(n.item_wrapper)).length > 0 && (i.addClass("stretched"),
                    i.css("height", b[t])));
                    e(this).css({
                        top: v[t] + "px",
                        left: g[t] + "px"
                    })
                }
                )),
                2 === x ? (P = _(T, 0),
                $ = _(T, 1)) : 3 === x ? (P = _(T, 0),
                $ = _(T, 1),
                D = _(T, 2)) : 4 === x ? (P = _(T, 0),
                $ = _(T, 1),
                D = _(T, 2),
                M = _(T, 3)) : 5 === x && (P = _(T, 0),
                $ = _(T, 1),
                D = _(T, 2),
                M = _(T, 3),
                A = _(T, 4)),
                function t() {
                    var i = k.slice();
                    if ("true" == n.bottom_line) {
                        var o, s, l, u, c, d;
                        i.sort((function(e, t) {
                            return t - e
                        }
                        )),
                        o = e(k).index(i[0]),
                        s = i[0],
                        i.sort((function(e, t) {
                            return e - t
                        }
                        )),
                        l = e(k).index(i[0]),
                        c = s - (u = i[0]),
                        0 === o ? d = P : 1 === o ? d = $ : 2 === o ? d = D : 3 === o ? d = M : 4 === o && (d = A);
                        var f = d[d.length - 1];
                        if (c >= 1.1 * m[f]) {
                            var p, h = u + m[f], y = s - m[f];
                            if (v[f] = u,
                            g[f] = a[f] * l,
                            e(r[f]).css({
                                top: v[f] + "px",
                                left: g[f] + "px"
                            }),
                            k[o] = y,
                            k[l] = h,
                            0 === l)
                                P.push(f),
                                1 === o ? (p = $.indexOf(f),
                                $.splice(p, 1)) : 2 === o ? (p = D.indexOf(f),
                                D.splice(p, 1)) : 3 === o ? (p = M.indexOf(f),
                                M.splice(p, 1)) : 4 === o && (p = A.indexOf(f),
                                A.splice(p, 1));
                            else
                                1 === l ? ($.push(f),
                                0 === o ? (p = P.indexOf(f),
                                P.splice(p, 1)) : 2 === o ? (p = D.indexOf(f),
                                D.splice(p, 1)) : 3 === o ? (p = M.indexOf(f),
                                M.splice(p, 1)) : 4 === o && (p = A.indexOf(f),
                                A.splice(p, 1))) : 2 === l ? (D.push(f),
                                0 === o ? (p = P.indexOf(f),
                                P.splice(p, 1)) : 1 === o ? (p = $.indexOf(f),
                                $.splice(p, 1)) : 3 === o ? (p = M.indexOf(f),
                                M.splice(p, 1)) : 4 === o && (p = A.indexOf(f),
                                A.splice(p, 1))) : 3 === l ? (M.push(f),
                                0 === o ? (p = P.indexOf(f),
                                P.splice(p, 1)) : 1 === o ? (p = $.indexOf(f),
                                $.splice(p, 1)) : 2 === o && (p = D.indexOf(f),
                                D.splice(p, 1))) : 4 === l && (A.push(f),
                                0 === o ? (p = P.indexOf(f),
                                P.splice(p, 1)) : 1 === o ? (p = $.indexOf(f),
                                $.splice(p, 1)) : 2 === o ? (p = D.indexOf(f),
                                D.splice(p, 1)) : 3 === o && (p = M.indexOf(f),
                                M.splice(p, 1)));
                            t()
                        }
                    }
                }(),
                k.sort((function(e, t) {
                    return t - e
                }
                )),
                t.css({
                    height: k[0] + "px"
                }),
                i.addClass("feed-ready"),
                cmsReset(i)
            } else
                i.removeClass("feed-ready"),
                t.removeAttr("style"),
                r.removeAttr("style"),
                cmsReset(i)
        }
        ))
    }
    ,
    e.fn.feed.defaults = {
        type: "gallery",
        title: "img-t-u",
        title_class: ".gallery-title",
        wrapper: ".gallery-wrapper",
        item: ".gallery-item",
        item_wrapper: "",
        video_thumb: ".thumbnail",
        bottom_line: "false",
        resize_threshold: 3,
        resize_min: 20,
        resize_max: 60
    }
}(jQuery),
function(e) {
    e.fn.horizontal = function(t) {
        var n = e.extend({}, e.fn.horizontal.defaults, t)
          , i = e(this);
        i.each((function() {
            i.removeClass("horizontal-ready");
            var t = i.outerWidth()
              , o = e(this).find(n.wrapper).width()
              , r = e(this).find(n.photo)
              , a = e(this).find(n.title_wrapper)
              , s = []
              , l = []
              , u = []
              , c = []
              , d = [];
            if (r.each((function(t) {
                var i = e(this).find(n.image);
                i.removeAttr("style"),
                e(this).removeAttr("style"),
                e(this).find(n.image_item).removeAttr("style"),
                e(this).find(n.image).removeClass("img-scale"),
                a.removeClass("title-position"),
                l[t] = parseFloat(e(this).css("marginLeft")),
                s[t] = parseFloat(e(this).css("marginRight")),
                u[t] = parseFloat(e(i).width()),
                c[t] = Math.round(100 * parseFloat(u[t] + l[t] + s[t])) / 100;
                var o = e(this).attr("class").split(" ");
                d[t] = o[o.length - 1]
            }
            )),
            t >= 400) {
                a.addClass("title-position");
                for (var f, p = 0, h = [], m = [], v = 0, g = 0, y = 0, b = 0, w = [], C = 0; C < c.length; C++) {
                    var x;
                    if (c[C] < o ? (x = C - 1,
                    v = C - 1,
                    b = C) : (d[C] = "panorama",
                    x = C,
                    v = C,
                    b = C + 1),
                    p = Math.round(100 * (p + c[C])) / 100,
                    h[C] = p,
                    m[C] = Math.round(100 * (o - p)) / 100,
                    m[C] < 0 && (m[C] = 0),
                    p > o) {
                        var E, S = Math.round(100 * (p - o)) / 100;
                        y = v - g + 1,
                        E = m[x] <= 0 ? 0 : Math.round(m[x] / o * 100 * 100) / 100;
                        var k = Math.round(S / o * 100 * 100) / 100;
                        if (0 === E) {
                            f = S / y;
                            for (var T = [], I = 0, _ = g; _ < d.length; _++)
                                _ < b && (T[I] = d[_],
                                I++);
                            var P, $, D, M;
                            P = T.filter((function(e) {
                                return "panorama" === e
                            }
                            )),
                            $ = T.filter((function(e) {
                                return "wnd-orientation-square" === e
                            }
                            )),
                            D = T.filter((function(e) {
                                return "wnd-orientation-landscape" === e
                            }
                            )),
                            M = T.filter((function(e) {
                                return "wnd-orientation-portrait" === e
                            }
                            ));
                            for (var A = P.length, N = .5 * ($.length + D.length + M.length) / A + 1, L = g; L < u.length; L++)
                                if (L < b) {
                                    var O;
                                    "wnd-orientation-square" === d[L] || "wnd-orientation-portrait" === d[L] || "wnd-orientation-landscape" === d[L] ? O = .5 : "panorama" === d[L] && (O = N);
                                    var R = Math.floor(100 * parseFloat(f * O)) / 100;
                                    w[L] = Math.floor(10 * parseFloat(u[L] - R)) / 10
                                }
                        } else if (E < k && 0 !== E) {
                            for (var F = Math.floor(100 * parseFloat(m[x] / y)) / 100, z = g; z < u.length; z++)
                                z <= v && (w[z] = Math.floor(10 * parseFloat(u[z] + F)) / 10);
                            C -= 1
                        } else if (E >= k) {
                            f = S / (y + 1);
                            for (var B = [], H = 0, j = g; j < d.length; j++)
                                j <= b && (B[H] = d[j],
                                H++);
                            var q;
                            q = B.filter((function(e) {
                                return "wnd-orientation-landscape" === e
                            }
                            ));
                            var W, U, V, X = B.filter((function(e) {
                                return "wnd-orientation-portrait" === e
                            }
                            )).length, Y = q.length;
                            B.indexOf("wnd-orientation-landscape") >= 0 ? (V = 1,
                            W = (U = .5) * X / Y + 1) : (W = 1,
                            U = 1,
                            V = 1);
                            for (var Q = g; Q < u.length; Q++)
                                if (Q <= b) {
                                    var Z;
                                    "wnd-orientation-square" === d[Q] ? Z = V : "wnd-orientation-landscape" === d[Q] ? Z = W : "wnd-orientation-portrait" === d[Q] && (Z = U);
                                    var K = Math.floor(100 * parseFloat(f * Z)) / 100;
                                    w[Q] = Math.floor(10 * parseFloat(u[Q] - K)) / 10
                                }
                            b += 1
                        }
                        g = b,
                        p = 0
                    } else if (p === o) {
                        v = C;
                        for (var G = g; G < u.length; G++)
                            G <= v && (w[G] = Math.floor(parseFloat(100 * u[G])) / 100);
                        g = C + 1,
                        p = 0
                    }
                }
                r.each((function(t) {
                    e(this).removeAttr("style"),
                    e(this).find(n.image_item).removeAttr("style"),
                    e(this).find(n.image).removeClass("img-scale"),
                    e(this).find(n.image_item).css("width", w[t]);
                    var o = e(this).find(n.image);
                    o.width() < w[t] && o.addClass("img-scale"),
                    i.addClass("horizontal-ready")
                }
                )),
                r.each((function() {
                    var t = e(this).find(n.title_content)
                      , i = e(this).find(n.title_wrapper);
                    if ("none" !== t.css("display")) {
                        e(this).removeAttr("style");
                        var o = ("outside" == n.title ? i.height() : 0) + e(this).find(n.image_item).height();
                        e(this).removeAttr("style"),
                        e(this).height(o)
                    }
                }
                )),
                cmsReset(i)
            } else
                i.removeClass("horizontal-ready"),
                r.removeAttr("style"),
                e(this).find(n.image_item).removeAttr("style"),
                e(this).find(n.image).removeClass("img-scale"),
                e(this).find(n.image).removeAttr("style"),
                a.removeClass("title-position"),
                cmsReset(i)
        }
        ))
    }
    ,
    e.fn.horizontal.defaults = {
        wrapper: ".b-gal-w",
        photo: ".b-gal-item",
        image_item: ".b-gal-img",
        image: "img",
        title_wrapper: ".b-gal-t",
        title_content: "b-gal-t > span",
        title: "outside"
    }
}(jQuery),
function(e, t, n, i) {
    "use strict";
    function o(e, t, n) {
        return setTimeout(u(e, n), t)
    }
    function r(e, t, n) {
        return !!Array.isArray(e) && (a(e, n[t], n),
        !0)
    }
    function a(e, t, n) {
        var o;
        if (e)
            if (e.forEach)
                e.forEach(t, n);
            else if (e.length !== i)
                for (o = 0; o < e.length; )
                    t.call(n, e[o], o, e),
                    o++;
            else
                for (o in e)
                    e.hasOwnProperty(o) && t.call(n, e[o], o, e)
    }
    function s(t, n, i) {
        var o = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
        return function() {
            var n = new Error("get-stack-trace")
              , i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace"
              , r = e.console && (e.console.warn || e.console.log);
            return r && r.call(e.console, o, i),
            t.apply(this, arguments)
        }
    }
    function l(e, t, n) {
        var i, o = t.prototype;
        (i = e.prototype = Object.create(o)).constructor = e,
        i._super = o,
        n && ie(i, n)
    }
    function u(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function c(e, t) {
        return _typeof(e) == ae ? e.apply(t && t[0] || i, t) : e
    }
    function d(e, t) {
        return e === i ? t : e
    }
    function f(e, t, n) {
        a(v(t), (function(t) {
            e.addEventListener(t, n, !1)
        }
        ))
    }
    function p(e, t, n) {
        a(v(t), (function(t) {
            e.removeEventListener(t, n, !1)
        }
        ))
    }
    function h(e, t) {
        for (; e; ) {
            if (e == t)
                return !0;
            e = e.parentNode
        }
        return !1
    }
    function m(e, t) {
        return e.indexOf(t) > -1
    }
    function v(e) {
        return e.trim().split(/\s+/g)
    }
    function g(e, t, n) {
        if (e.indexOf && !n)
            return e.indexOf(t);
        for (var i = 0; i < e.length; ) {
            if (n && e[i][n] == t || !n && e[i] === t)
                return i;
            i++
        }
        return -1
    }
    function y(e) {
        return Array.prototype.slice.call(e, 0)
    }
    function b(e, t, n) {
        for (var i = [], o = [], r = 0; r < e.length; ) {
            var a = t ? e[r][t] : e[r];
            g(o, a) < 0 && i.push(e[r]),
            o[r] = a,
            r++
        }
        return n && (i = t ? i.sort((function(e, n) {
            return e[t] > n[t]
        }
        )) : i.sort()),
        i
    }
    function w(e, t) {
        for (var n, o, r = t[0].toUpperCase() + t.slice(1), a = 0; a < oe.length; ) {
            if ((o = (n = oe[a]) ? n + r : t)in e)
                return o;
            a++
        }
        return i
    }
    function C(t) {
        var n = t.ownerDocument || t;
        return n.defaultView || n.parentWindow || e
    }
    function x(e, t) {
        var n = this;
        this.manager = e,
        this.callback = t,
        this.element = e.element,
        this.target = e.options.inputTarget,
        this.domHandler = function(t) {
            c(e.options.enable, [e]) && n.handler(t)
        }
        ,
        this.init()
    }
    function E(e, t, n) {
        var i = n.pointers.length
          , o = n.changedPointers.length
          , r = t & be && i - o == 0
          , a = t & (Ce | xe) && i - o == 0;
        n.isFirst = !!r,
        n.isFinal = !!a,
        r && (e.session = {}),
        n.eventType = t,
        function(e, t) {
            var n = e.session
              , i = t.pointers
              , o = i.length;
            n.firstInput || (n.firstInput = k(t)),
            o > 1 && !n.firstMultiple ? n.firstMultiple = k(t) : 1 === o && (n.firstMultiple = !1);
            var r = n.firstInput
              , a = n.firstMultiple
              , s = a ? a.center : r.center
              , l = t.center = T(i);
            t.timeStamp = ue(),
            t.deltaTime = t.timeStamp - r.timeStamp,
            t.angle = $(s, l),
            t.distance = P(s, l),
            function(e, t) {
                var n = t.center
                  , i = e.offsetDelta || {}
                  , o = e.prevDelta || {}
                  , r = e.prevInput || {};
                t.eventType !== be && r.eventType !== Ce || (o = e.prevDelta = {
                    x: r.deltaX || 0,
                    y: r.deltaY || 0
                },
                i = e.offsetDelta = {
                    x: n.x,
                    y: n.y
                }),
                t.deltaX = o.x + (n.x - i.x),
                t.deltaY = o.y + (n.y - i.y)
            }(n, t),
            t.offsetDirection = _(t.deltaX, t.deltaY);
            var u = I(t.deltaTime, t.deltaX, t.deltaY);
            t.overallVelocityX = u.x,
            t.overallVelocityY = u.y,
            t.overallVelocity = le(u.x) > le(u.y) ? u.x : u.y,
            t.scale = a ? function(e, t) {
                return P(t[0], t[1], Me) / P(e[0], e[1], Me)
            }(a.pointers, i) : 1,
            t.rotation = a ? function(e, t) {
                return $(t[1], t[0], Me) + $(e[1], e[0], Me)
            }(a.pointers, i) : 0,
            t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length,
            S(n, t);
            var c = e.element;
            h(t.srcEvent.target, c) && (c = t.srcEvent.target),
            t.target = c
        }(e, n),
        e.emit("hammer.input", n),
        e.recognize(n),
        e.session.prevInput = n
    }
    function S(e, t) {
        var n, o, r, a, s = e.lastInterval || t, l = t.timeStamp - s.timeStamp;
        if (t.eventType != xe && (l > ye || s.velocity === i)) {
            var u = t.deltaX - s.deltaX
              , c = t.deltaY - s.deltaY
              , d = I(l, u, c);
            o = d.x,
            r = d.y,
            n = le(d.x) > le(d.y) ? d.x : d.y,
            a = _(u, c),
            e.lastInterval = t
        } else
            n = s.velocity,
            o = s.velocityX,
            r = s.velocityY,
            a = s.direction;
        t.velocity = n,
        t.velocityX = o,
        t.velocityY = r,
        t.direction = a
    }
    function k(e) {
        for (var t = [], n = 0; n < e.pointers.length; )
            t[n] = {
                clientX: se(e.pointers[n].clientX),
                clientY: se(e.pointers[n].clientY)
            },
            n++;
        return {
            timeStamp: ue(),
            pointers: t,
            center: T(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
        }
    }
    function T(e) {
        var t = e.length;
        if (1 === t)
            return {
                x: se(e[0].clientX),
                y: se(e[0].clientY)
            };
        for (var n = 0, i = 0, o = 0; t > o; )
            n += e[o].clientX,
            i += e[o].clientY,
            o++;
        return {
            x: se(n / t),
            y: se(i / t)
        }
    }
    function I(e, t, n) {
        return {
            x: t / e || 0,
            y: n / e || 0
        }
    }
    function _(e, t) {
        return e === t ? Ee : le(e) >= le(t) ? 0 > e ? Se : ke : 0 > t ? Te : Ie
    }
    function P(e, t, n) {
        n || (n = De);
        var i = t[n[0]] - e[n[0]]
          , o = t[n[1]] - e[n[1]];
        return Math.sqrt(i * i + o * o)
    }
    function $(e, t, n) {
        n || (n = De);
        var i = t[n[0]] - e[n[0]]
          , o = t[n[1]] - e[n[1]];
        return 180 * Math.atan2(o, i) / Math.PI
    }
    function D() {
        this.evEl = Ne,
        this.evWin = Le,
        this.pressed = !1,
        x.apply(this, arguments)
    }
    function M() {
        this.evEl = Fe,
        this.evWin = ze,
        x.apply(this, arguments),
        this.store = this.manager.session.pointerEvents = []
    }
    function A() {
        this.evTarget = He,
        this.evWin = je,
        this.started = !1,
        x.apply(this, arguments)
    }
    function N(e, t) {
        var n = y(e.touches)
          , i = y(e.changedTouches);
        return t & (Ce | xe) && (n = b(n.concat(i), "identifier", !0)),
        [n, i]
    }
    function L() {
        this.evTarget = We,
        this.targetIds = {},
        x.apply(this, arguments)
    }
    function O(e, t) {
        var n = y(e.touches)
          , i = this.targetIds;
        if (t & (be | we) && 1 === n.length)
            return i[n[0].identifier] = !0,
            [n, n];
        var o, r, a = y(e.changedTouches), s = [], l = this.target;
        if (r = n.filter((function(e) {
            return h(e.target, l)
        }
        )),
        t === be)
            for (o = 0; o < r.length; )
                i[r[o].identifier] = !0,
                o++;
        for (o = 0; o < a.length; )
            i[a[o].identifier] && s.push(a[o]),
            t & (Ce | xe) && delete i[a[o].identifier],
            o++;
        return s.length ? [b(r.concat(s), "identifier", !0), s] : void 0
    }
    function R() {
        x.apply(this, arguments);
        var e = u(this.handler, this);
        this.touch = new L(this.manager,e),
        this.mouse = new D(this.manager,e),
        this.primaryTouch = null,
        this.lastTouches = []
    }
    function F(e, t) {
        e & be ? (this.primaryTouch = t.changedPointers[0].identifier,
        z.call(this, t)) : e & (Ce | xe) && z.call(this, t)
    }
    function z(e) {
        var t = e.changedPointers[0];
        if (t.identifier === this.primaryTouch) {
            var n = {
                x: t.clientX,
                y: t.clientY
            };
            this.lastTouches.push(n);
            var i = this.lastTouches;
            setTimeout((function() {
                var e = i.indexOf(n);
                e > -1 && i.splice(e, 1)
            }
            ), Ue)
        }
    }
    function B(e) {
        for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
            var o = this.lastTouches[i]
              , r = Math.abs(t - o.x)
              , a = Math.abs(n - o.y);
            if (Ve >= r && Ve >= a)
                return !0
        }
        return !1
    }
    function H(e, t) {
        this.manager = e,
        this.set(t)
    }
    function j(e) {
        this.options = ie({}, this.defaults, e || {}),
        this.id = fe++,
        this.manager = null,
        this.options.enable = d(this.options.enable, !0),
        this.state = nt,
        this.simultaneous = {},
        this.requireFail = []
    }
    function q(e) {
        return e & st ? "cancel" : e & rt ? "end" : e & ot ? "move" : e & it ? "start" : ""
    }
    function W(e) {
        return e == Ie ? "down" : e == Te ? "up" : e == Se ? "left" : e == ke ? "right" : ""
    }
    function U(e, t) {
        var n = t.manager;
        return n ? n.get(e) : e
    }
    function V() {
        j.apply(this, arguments)
    }
    function X() {
        V.apply(this, arguments),
        this.pX = null,
        this.pY = null
    }
    function Y() {
        V.apply(this, arguments)
    }
    function Q() {
        j.apply(this, arguments),
        this._timer = null,
        this._input = null
    }
    function Z() {
        V.apply(this, arguments)
    }
    function K() {
        V.apply(this, arguments)
    }
    function G() {
        j.apply(this, arguments),
        this.pTime = !1,
        this.pCenter = !1,
        this._timer = null,
        this._input = null,
        this.count = 0
    }
    function J(e, t) {
        return (t = t || {}).recognizers = d(t.recognizers, J.defaults.preset),
        new ee(e,t)
    }
    function ee(e, t) {
        this.options = ie({}, J.defaults, t || {}),
        this.options.inputTarget = this.options.inputTarget || e,
        this.handlers = {},
        this.session = {},
        this.recognizers = [],
        this.oldCssProps = {},
        this.element = e,
        this.input = function(e) {
            return new (e.options.inputClass || (he ? M : me ? L : pe ? R : D))(e,E)
        }(this),
        this.touchAction = new H(this,this.options.touchAction),
        te(this, !0),
        a(this.options.recognizers, (function(e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]),
            e[3] && t.requireFailure(e[3])
        }
        ), this)
    }
    function te(e, t) {
        var n, i = e.element;
        i.style && (a(e.options.cssProps, (function(o, r) {
            n = w(i.style, r),
            t ? (e.oldCssProps[n] = i.style[n],
            i.style[n] = o) : i.style[n] = e.oldCssProps[n] || ""
        }
        )),
        t || (e.oldCssProps = {}))
    }
    function ne(e, n) {
        var i = t.createEvent("Event");
        i.initEvent(e, !0, !0),
        i.gesture = n,
        n.target.dispatchEvent(i)
    }
    var ie, oe = ["", "webkit", "Moz", "MS", "ms", "o"], re = t.createElement("div"), ae = "function", se = Math.round, le = Math.abs, ue = Date.now;
    ie = "function" != typeof Object.assign ? function(e) {
        if (e === i || null === e)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), n = 1; n < arguments.length; n++) {
            var o = arguments[n];
            if (o !== i && null !== o)
                for (var r in o)
                    o.hasOwnProperty(r) && (t[r] = o[r])
        }
        return t
    }
    : Object.assign;
    var ce = s((function(e, t, n) {
        for (var o = Object.keys(t), r = 0; r < o.length; )
            (!n || n && e[o[r]] === i) && (e[o[r]] = t[o[r]]),
            r++;
        return e
    }
    ), "extend", "Use `assign`.")
      , de = s((function(e, t) {
        return ce(e, t, !0)
    }
    ), "merge", "Use `assign`.")
      , fe = 1
      , pe = "ontouchstart"in e
      , he = w(e, "PointerEvent") !== i
      , me = pe && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent)
      , ve = "touch"
      , ge = "mouse"
      , ye = 25
      , be = 1
      , we = 2
      , Ce = 4
      , xe = 8
      , Ee = 1
      , Se = 2
      , ke = 4
      , Te = 8
      , Ie = 16
      , _e = Se | ke
      , Pe = Te | Ie
      , $e = _e | Pe
      , De = ["x", "y"]
      , Me = ["clientX", "clientY"];
    x.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && f(this.element, this.evEl, this.domHandler),
            this.evTarget && f(this.target, this.evTarget, this.domHandler),
            this.evWin && f(C(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && p(this.element, this.evEl, this.domHandler),
            this.evTarget && p(this.target, this.evTarget, this.domHandler),
            this.evWin && p(C(this.element), this.evWin, this.domHandler)
        }
    };
    var Ae = {
        mousedown: be,
        mousemove: we,
        mouseup: Ce
    }
      , Ne = "mousedown"
      , Le = "mousemove mouseup";
    l(D, x, {
        handler: function(e) {
            var t = Ae[e.type];
            t & be && 0 === e.button && (this.pressed = !0),
            t & we && 1 !== e.which && (t = Ce),
            this.pressed && (t & Ce && (this.pressed = !1),
            this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: ge,
                srcEvent: e
            }))
        }
    });
    var Oe = {
        pointerdown: be,
        pointermove: we,
        pointerup: Ce,
        pointercancel: xe,
        pointerout: xe
    }
      , Re = {
        2: ve,
        3: "pen",
        4: ge,
        5: "kinect"
    }
      , Fe = "pointerdown"
      , ze = "pointermove pointerup pointercancel";
    e.MSPointerEvent && !e.PointerEvent && (Fe = "MSPointerDown",
    ze = "MSPointerMove MSPointerUp MSPointerCancel"),
    l(M, x, {
        handler: function(e) {
            var t = this.store
              , n = !1
              , i = e.type.toLowerCase().replace("ms", "")
              , o = Oe[i]
              , r = Re[e.pointerType] || e.pointerType
              , a = r == ve
              , s = g(t, e.pointerId, "pointerId");
            o & be && (0 === e.button || a) ? 0 > s && (t.push(e),
            s = t.length - 1) : o & (Ce | xe) && (n = !0),
            0 > s || (t[s] = e,
            this.callback(this.manager, o, {
                pointers: t,
                changedPointers: [e],
                pointerType: r,
                srcEvent: e
            }),
            n && t.splice(s, 1))
        }
    });
    var Be = {
        touchstart: be,
        touchmove: we,
        touchend: Ce,
        touchcancel: xe
    }
      , He = "touchstart"
      , je = "touchstart touchmove touchend touchcancel";
    l(A, x, {
        handler: function(e) {
            var t = Be[e.type];
            if (t === be && (this.started = !0),
            this.started) {
                var n = N.call(this, e, t);
                t & (Ce | xe) && n[0].length - n[1].length == 0 && (this.started = !1),
                this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: ve,
                    srcEvent: e
                })
            }
        }
    });
    var qe = {
        touchstart: be,
        touchmove: we,
        touchend: Ce,
        touchcancel: xe
    }
      , We = "touchstart touchmove touchend touchcancel";
    l(L, x, {
        handler: function(e) {
            var t = qe[e.type]
              , n = O.call(this, e, t);
            n && this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: ve,
                srcEvent: e
            })
        }
    });
    var Ue = 2500
      , Ve = 25;
    l(R, x, {
        handler: function(e, t, n) {
            var i = n.pointerType == ve
              , o = n.pointerType == ge;
            if (!(o && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                if (i)
                    F.call(this, t, n);
                else if (o && B.call(this, n))
                    return;
                this.callback(e, t, n)
            }
        },
        destroy: function() {
            this.touch.destroy(),
            this.mouse.destroy()
        }
    });
    var Xe = w(re.style, "touchAction")
      , Ye = Xe !== i
      , Qe = "compute"
      , Ze = "auto"
      , Ke = "manipulation"
      , Ge = "none"
      , Je = "pan-x"
      , et = "pan-y"
      , tt = function() {
        if (!Ye)
            return !1;
        var t = {}
          , n = e.CSS && e.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(i) {
            t[i] = !n || e.CSS.supports("touch-action", i)
        }
        )),
        t
    }();
    H.prototype = {
        set: function(e) {
            e == Qe && (e = this.compute()),
            Ye && this.manager.element.style && tt[e] && (this.manager.element.style[Xe] = e),
            this.actions = e.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var e = [];
            return a(this.manager.recognizers, (function(t) {
                c(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
            }
            )),
            function(e) {
                if (m(e, Ge))
                    return Ge;
                var t = m(e, Je)
                  , n = m(e, et);
                return t && n ? Ge : t || n ? t ? Je : et : m(e, Ke) ? Ke : Ze
            }(e.join(" "))
        },
        preventDefaults: function(e) {
            var t = e.srcEvent
              , n = e.offsetDirection;
            if (!this.manager.session.prevented) {
                var i = this.actions
                  , o = m(i, Ge) && !tt[Ge]
                  , r = m(i, et) && !tt[et]
                  , a = m(i, Je) && !tt[Je];
                if (o) {
                    var s = 1 === e.pointers.length
                      , l = e.distance < 2
                      , u = e.deltaTime < 250;
                    if (s && l && u)
                        return
                }
                return a && r ? void 0 : o || r && n & _e || a && n & Pe ? this.preventSrc(t) : void 0
            }
            t.preventDefault()
        },
        preventSrc: function(e) {
            this.manager.session.prevented = !0,
            e.preventDefault()
        }
    };
    var nt = 1
      , it = 2
      , ot = 4
      , rt = 8
      , at = rt
      , st = 16
      , lt = 32;
    j.prototype = {
        defaults: {},
        set: function(e) {
            return ie(this.options, e),
            this.manager && this.manager.touchAction.update(),
            this
        },
        recognizeWith: function(e) {
            if (r(e, "recognizeWith", this))
                return this;
            var t = this.simultaneous;
            return t[(e = U(e, this)).id] || (t[e.id] = e,
            e.recognizeWith(this)),
            this
        },
        dropRecognizeWith: function(e) {
            return r(e, "dropRecognizeWith", this) || (e = U(e, this),
            delete this.simultaneous[e.id]),
            this
        },
        requireFailure: function(e) {
            if (r(e, "requireFailure", this))
                return this;
            var t = this.requireFail;
            return -1 === g(t, e = U(e, this)) && (t.push(e),
            e.requireFailure(this)),
            this
        },
        dropRequireFailure: function(e) {
            if (r(e, "dropRequireFailure", this))
                return this;
            e = U(e, this);
            var t = g(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1),
            this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(e) {
            return !!this.simultaneous[e.id]
        },
        emit: function(e) {
            function t(t) {
                n.manager.emit(t, e)
            }
            var n = this
              , i = this.state;
            rt > i && t(n.options.event + q(i)),
            t(n.options.event),
            e.additionalEvent && t(e.additionalEvent),
            i >= rt && t(n.options.event + q(i))
        },
        tryEmit: function(e) {
            return this.canEmit() ? this.emit(e) : void (this.state = lt)
        },
        canEmit: function() {
            for (var e = 0; e < this.requireFail.length; ) {
                if (!(this.requireFail[e].state & (lt | nt)))
                    return !1;
                e++
            }
            return !0
        },
        recognize: function(e) {
            var t = ie({}, e);
            return c(this.options.enable, [this, t]) ? (this.state & (at | st | lt) && (this.state = nt),
            this.state = this.process(t),
            void (this.state & (it | ot | rt | st) && this.tryEmit(t))) : (this.reset(),
            void (this.state = lt))
        },
        process: function(e) {},
        getTouchAction: function() {},
        reset: function() {}
    },
    l(V, j, {
        defaults: {
            pointers: 1
        },
        attrTest: function(e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
        },
        process: function(e) {
            var t = this.state
              , n = e.eventType
              , i = t & (it | ot)
              , o = this.attrTest(e);
            return i && (n & xe || !o) ? t | st : i || o ? n & Ce ? t | rt : t & it ? t | ot : it : lt
        }
    }),
    l(X, V, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: $e
        },
        getTouchAction: function() {
            var e = this.options.direction
              , t = [];
            return e & _e && t.push(et),
            e & Pe && t.push(Je),
            t
        },
        directionTest: function(e) {
            var t = this.options
              , n = !0
              , i = e.distance
              , o = e.direction
              , r = e.deltaX
              , a = e.deltaY;
            return o & t.direction || (t.direction & _e ? (o = 0 === r ? Ee : 0 > r ? Se : ke,
            n = r != this.pX,
            i = Math.abs(e.deltaX)) : (o = 0 === a ? Ee : 0 > a ? Te : Ie,
            n = a != this.pY,
            i = Math.abs(e.deltaY))),
            e.direction = o,
            n && i > t.threshold && o & t.direction
        },
        attrTest: function(e) {
            return V.prototype.attrTest.call(this, e) && (this.state & it || !(this.state & it) && this.directionTest(e))
        },
        emit: function(e) {
            this.pX = e.deltaX,
            this.pY = e.deltaY;
            var t = W(e.direction);
            t && (e.additionalEvent = this.options.event + t),
            this._super.emit.call(this, e)
        }
    }),
    l(Y, V, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Ge]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & it)
        },
        emit: function(e) {
            if (1 !== e.scale) {
                var t = e.scale < 1 ? "in" : "out";
                e.additionalEvent = this.options.event + t
            }
            this._super.emit.call(this, e)
        }
    }),
    l(Q, j, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return [Ze]
        },
        process: function(e) {
            var t = this.options
              , n = e.pointers.length === t.pointers
              , i = e.distance < t.threshold
              , r = e.deltaTime > t.time;
            if (this._input = e,
            !i || !n || e.eventType & (Ce | xe) && !r)
                this.reset();
            else if (e.eventType & be)
                this.reset(),
                this._timer = o((function() {
                    this.state = at,
                    this.tryEmit()
                }
                ), t.time, this);
            else if (e.eventType & Ce)
                return at;
            return lt
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(e) {
            this.state === at && (e && e.eventType & Ce ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = ue(),
            this.manager.emit(this.options.event, this._input)))
        }
    }),
    l(Z, V, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Ge]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & it)
        }
    }),
    l(K, V, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: _e | Pe,
            pointers: 1
        },
        getTouchAction: function() {
            return X.prototype.getTouchAction.call(this)
        },
        attrTest: function(e) {
            var t, n = this.options.direction;
            return n & (_e | Pe) ? t = e.overallVelocity : n & _e ? t = e.overallVelocityX : n & Pe && (t = e.overallVelocityY),
            this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && le(t) > this.options.velocity && e.eventType & Ce
        },
        emit: function(e) {
            var t = W(e.offsetDirection);
            t && this.manager.emit(this.options.event + t, e),
            this.manager.emit(this.options.event, e)
        }
    }),
    l(G, j, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [Ke]
        },
        process: function(e) {
            var t = this.options
              , n = e.pointers.length === t.pointers
              , i = e.distance < t.threshold
              , r = e.deltaTime < t.time;
            if (this.reset(),
            e.eventType & be && 0 === this.count)
                return this.failTimeout();
            if (i && r && n) {
                if (e.eventType != Ce)
                    return this.failTimeout();
                var a = !this.pTime || e.timeStamp - this.pTime < t.interval
                  , s = !this.pCenter || P(this.pCenter, e.center) < t.posThreshold;
                if (this.pTime = e.timeStamp,
                this.pCenter = e.center,
                s && a ? this.count += 1 : this.count = 1,
                this._input = e,
                0 === this.count % t.taps)
                    return this.hasRequireFailures() ? (this._timer = o((function() {
                        this.state = at,
                        this.tryEmit()
                    }
                    ), t.interval, this),
                    it) : at
            }
            return lt
        },
        failTimeout: function() {
            return this._timer = o((function() {
                this.state = lt
            }
            ), this.options.interval, this),
            lt
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == at && (this._input.tapCount = this.count,
            this.manager.emit(this.options.event, this._input))
        }
    }),
    J.VERSION = "2.0.8",
    J.defaults = {
        domEvents: !1,
        touchAction: Qe,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[Z, {
            enable: !1
        }], [Y, {
            enable: !1
        }, ["rotate"]], [K, {
            direction: _e
        }], [X, {
            direction: _e
        }, ["swipe"]], [G], [G, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [Q]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    ee.prototype = {
        set: function(e) {
            return ie(this.options, e),
            e.touchAction && this.touchAction.update(),
            e.inputTarget && (this.input.destroy(),
            this.input.target = e.inputTarget,
            this.input.init()),
            this
        },
        stop: function(e) {
            this.session.stopped = e ? 2 : 1
        },
        recognize: function(e) {
            var t = this.session;
            if (!t.stopped) {
                this.touchAction.preventDefaults(e);
                var n, i = this.recognizers, o = t.curRecognizer;
                (!o || o && o.state & at) && (o = t.curRecognizer = null);
                for (var r = 0; r < i.length; )
                    n = i[r],
                    2 === t.stopped || o && n != o && !n.canRecognizeWith(o) ? n.reset() : n.recognize(e),
                    !o && n.state & (it | ot | rt) && (o = t.curRecognizer = n),
                    r++
            }
        },
        get: function(e) {
            if (e instanceof j)
                return e;
            for (var t = this.recognizers, n = 0; n < t.length; n++)
                if (t[n].options.event == e)
                    return t[n];
            return null
        },
        add: function(e) {
            if (r(e, "add", this))
                return this;
            var t = this.get(e.options.event);
            return t && this.remove(t),
            this.recognizers.push(e),
            e.manager = this,
            this.touchAction.update(),
            e
        },
        remove: function(e) {
            if (r(e, "remove", this))
                return this;
            if (e = this.get(e)) {
                var t = this.recognizers
                  , n = g(t, e);
                -1 !== n && (t.splice(n, 1),
                this.touchAction.update())
            }
            return this
        },
        on: function(e, t) {
            if (e !== i && t !== i) {
                var n = this.handlers;
                return a(v(e), (function(e) {
                    n[e] = n[e] || [],
                    n[e].push(t)
                }
                )),
                this
            }
        },
        off: function(e, t) {
            if (e !== i) {
                var n = this.handlers;
                return a(v(e), (function(e) {
                    t ? n[e] && n[e].splice(g(n[e], t), 1) : delete n[e]
                }
                )),
                this
            }
        },
        emit: function(e, t) {
            this.options.domEvents && ne(e, t);
            var n = this.handlers[e] && this.handlers[e].slice();
            if (n && n.length) {
                t.type = e,
                t.preventDefault = function() {
                    t.srcEvent.preventDefault()
                }
                ;
                for (var i = 0; i < n.length; )
                    n[i](t),
                    i++
            }
        },
        destroy: function() {
            this.element && te(this, !1),
            this.handlers = {},
            this.session = {},
            this.input.destroy(),
            this.element = null
        }
    },
    ie(J, {
        INPUT_START: be,
        INPUT_MOVE: we,
        INPUT_END: Ce,
        INPUT_CANCEL: xe,
        STATE_POSSIBLE: nt,
        STATE_BEGAN: it,
        STATE_CHANGED: ot,
        STATE_ENDED: rt,
        STATE_RECOGNIZED: at,
        STATE_CANCELLED: st,
        STATE_FAILED: lt,
        DIRECTION_NONE: Ee,
        DIRECTION_LEFT: Se,
        DIRECTION_RIGHT: ke,
        DIRECTION_UP: Te,
        DIRECTION_DOWN: Ie,
        DIRECTION_HORIZONTAL: _e,
        DIRECTION_VERTICAL: Pe,
        DIRECTION_ALL: $e,
        Manager: ee,
        Input: x,
        TouchAction: H,
        TouchInput: L,
        MouseInput: D,
        PointerEventInput: M,
        TouchMouseInput: R,
        SingleTouchInput: A,
        Recognizer: j,
        AttrRecognizer: V,
        Tap: G,
        Pan: X,
        Swipe: K,
        Pinch: Y,
        Rotate: Z,
        Press: Q,
        on: f,
        off: p,
        each: a,
        merge: de,
        extend: ce,
        assign: ie,
        inherit: l,
        bindFn: u,
        prefixed: w
    }),
    (void 0 !== e ? e : void 0 !== self ? self : {}).Hammer = J,
    "function" == typeof define && define.amd ? define((function() {
        return J
    }
    )) : "undefined" != typeof module && module.exports ? module.exports = J : e.Hammer = J
}(window, document),
function(e) {
    e.fn.slideShow = function(t) {
        if (e(this).length <= 0)
            return !1;
        var n = e.extend({}, e.fn.slideShow.defaults, t)
          , i = function(e, t) {
            this.options = t,
            this.galleryElm = e,
            this.galleryID = "undefined" !== e.attr("id") ? e.attr("id") : this.generateBlockID(),
            this.blockClass = t.blockClass,
            this.contentBlockElm = this.galleryElm.find(t.contentBlockElm),
            this.photoListElm = this.contentBlockElm.find(t.photoListElm),
            this.photoItems = this.photoListElm.find(t.photoItemElm),
            this.photoPrevElm = this.contentBlockElm.find(t.photoPrevElm),
            this.photoNextElm = this.contentBlockElm.find(t.photoNextElm),
            this.navBlockWrapperElm = this.galleryElm.find(t.navBlockWrapperElm),
            this.navBlockContentElm = this.navBlockWrapperElm.find(t.navBlockContentElm),
            this.bulletListElm = null,
            this.navBullets = null,
            this.navBlockPrevElm = this.navBlockWrapperElm.find(t.navBlockPrevElm),
            this.navBlockNextElm = this.navBlockWrapperElm.find(t.navBlockNextElm),
            this.androidStockBrowser = this.detectAndroidStockBrowser(),
            this.images = this.loadSlideShowImages(),
            this.imagesTotal = this.images.length,
            this.currentImageIndex = 0,
            this.reelPosition = this.imagesTotal,
            this.startOriginal = this.imagesTotal,
            this.startClones = 2 * this.imagesTotal,
            this.photoListElmWidth = null,
            this.reelWidth = null,
            this.reelContainerWidth = null,
            this.reelItemSize = null,
            this.reelItemMargin = null,
            this.reelEnd = !1,
            this.reelDirection = this.returnReelDirection(),
            this.lastReelDirection = this.reelDirection,
            this.autoplay = !1,
            this.autoplayFlag = !1,
            this.animationFlag = !1,
            this.navAnimationFlag = !1,
            this.initFlag = !1,
            this.eventsBound = !1,
            this.maxBullets = t.maxBullets,
            this.initAction = "default"
        };
        i.prototype.generateBlockID = function() {
            var e, t;
            for (e = "",
            t = 0; t < 10; t++)
                e += Math.floor(16 * Math.random()).toString(16).toUpperCase();
            return e
        }
        ,
        i.prototype.detectAndroidStockBrowser = function() {
            var e = navigator.userAgent;
            return e.indexOf("Mozilla/5.0") > -1 && e.indexOf("Android ") > -1 && e.indexOf("AppleWebKit") > -1 && e.indexOf("Version") > -1
        }
        ,
        i.prototype.tooFastClick = function() {
            return this.animationFlag
        }
        ,
        i.prototype.tooFastClickNav = function() {
            return this.navAnimationFlag
        }
        ,
        i.prototype.loadSlideShowImages = function() {
            var t = this
              , n = [];
            return this.photoItems.each((function() {
                var i = e(this).find(t.options.photoItemLinkElm)
                  , o = e(i).attr("href");
                n.push({
                    imageId: o.substring(o.lastIndexOf("/") + 1, o.lastIndexOf(".")),
                    imageSrc: o,
                    imageTitle: e(i).attr("data-litebox-text"),
                    imageRatio: e(this).attr("class").replace(t.options.slideshowPhotoClass, "").replace("active", "").trim(),
                    imageThumbnail: o.substring(0, o.lastIndexOf("/")) + "/" + o.substring(o.lastIndexOf("/") + 1)
                })
            }
            )),
            n
        }
        ,
        i.prototype.returnReelDirection = function() {
            var e = window.getComputedStyle(this.navBlockWrapperElm.get(0), ":after").getPropertyValue("content");
            return e.indexOf("horizontal") >= 0 ? "horizontal" : e.indexOf("vertical") >= 0 ? "vertical" : e.indexOf("bullets") >= 0 ? "bullets" : void 0
        }
        ,
        i.prototype.getReelDirection = function() {
            var e = window.getComputedStyle(this.navBlockWrapperElm.get(0), ":after").getPropertyValue("content");
            e.indexOf("horizontal") >= 0 ? this.reelDirection = "horizontal" : e.indexOf("vertical") >= 0 ? this.reelDirection = "vertical" : e.indexOf("bullets") >= 0 && (this.reelDirection = "bullets")
        }
        ,
        i.prototype.galleryNotEmpty = function() {
            this.galleryElm.addClass("slideshow"),
            "default" === this.initAction && this.photoListElm.find("li.active").length <= 0 ? this.photoListElm.find("li").eq(this.currentImageIndex).addClass("active") : "add" !== this.initAction && "delete" !== this.initAction || (this.photoListElm.find("li.active").removeClass("active"),
            this.photoListElm.find("li").eq(this.currentImageIndex).addClass("active"))
        }
        ,
        i.prototype.galleryEmpty = function() {
            this.galleryElm.find(".clone").remove(),
            this.clearReel(),
            this.galleryElm.removeClass("slideshow")
        }
        ,
        i.prototype.clearReel = function() {
            this.navBlockContentElm.removeClass("reel"),
            this.navBlockContentElm.removeClass("infinite"),
            null !== this.bulletListElm && (this.bulletListElm.css("margin", ""),
            this.bulletListElm.css("width", ""),
            this.bulletListElm.css("height", ""),
            this.bulletListElm.find("li").removeClass("large"))
        }
        ,
        i.prototype.hideReelControls = function() {
            this.navBlockWrapperElm.removeClass("show-arrows")
        }
        ,
        i.prototype.showReelControls = function() {
            this.navBlockWrapperElm.addClass("show-arrows")
        }
        ,
        i.prototype.runAutoplay = function() {
            if (this.options.autoplay && !this.options.isCMS) {
                var e = this;
                e.autoplay = setInterval((function() {
                    e.nextImage(e.options.isEshopGallery ? "fade" : "slidefromright", !1)
                }
                ), e.options.timeout)
            }
        }
        ,
        i.prototype.stopAutoplay = function() {
            this.options.autoplay && !1 !== this.autoplay && (clearInterval(this.autoplay),
            this.autoplay = !1,
            this.autoplayFlag = !1)
        }
        ,
        i.prototype.nextImage = function(e, t) {
            this.currentImageIndex = this.currentImageIndex === this.imagesTotal - 1 ? 0 : this.currentImageIndex + 1,
            o.options.autoShiftReel && "bullets" !== o.reelDirection && !t ? o.autoShiftReel() : "bullets" === o.reelDirection && o.navBlockContentElm.hasClass("infinite") && o.shiftBulletsForward(),
            this.changePhoto(this.currentImageIndex, e)
        }
        ,
        i.prototype.prevImage = function(e, t) {
            this.currentImageIndex = 0 === this.currentImageIndex ? this.imagesTotal - 1 : this.currentImageIndex - 1,
            this.changePhoto(this.currentImageIndex, e),
            "bullets" === o.reelDirection && o.navBlockContentElm.hasClass("infinite") && o.shiftBulletsBackward()
        }
        ,
        i.prototype.shiftReelForward = function() {
            this.navAnimationFlag = !0;
            var e = this.bulletListElm
              , t = this.reelPosition
              , n = this.reelItemSize + this.reelItemMargin
              , i = null
              , o = 0
              , r = e.find("li.clicked");
            r.length ? (i = r.index(),
            o = Math.abs(i - t),
            r.hasClass("clone") && i > this.imagesTotal ? (e.css("horizontal" === this.reelDirection ? "marginLeft" : "marginTop", (t - this.imagesTotal) * n * -1 + "px"),
            t = t - this.imagesTotal + o + 1,
            this.reelPosition = t) : (t = i + 1,
            this.reelPosition = t),
            r.removeClass("clicked")) : t === this.startClones ? (e.css("horizontal" === this.reelDirection ? "marginLeft" : "marginTop", this.startOriginal * n * -1 + "px"),
            t = this.reelPosition = this.startOriginal + 1) : t = this.reelPosition += 1;
            "horizontal" === this.reelDirection ? e.animate({
                marginLeft: t * n * -1
            }, 150, (function() {}
            )) : e.animate({
                marginTop: t * n * -1
            }, 150, (function() {}
            ))
        }
        ,
        i.prototype.shiftReelBackward = function() {
            this.navAnimationFlag = !0;
            var e = this.bulletListElm
              , t = this.reelPosition
              , n = this.reelItemSize + this.reelItemMargin
              , i = this.reelItemMargin
              , o = e.find("li.clicked");
            o.length ? (t = o.index() - 1,
            this.reelPosition = t,
            o.removeClass("clicked")) : 0 === this.reelPosition ? (e.css("horizontal" === this.reelDirection ? "marginLeft" : "marginTop", this.startOriginal * n * -1 + i + "px"),
            t = this.reelPosition = this.startOriginal - 1) : t = this.reelPosition -= 1;
            "horizontal" === this.reelDirection ? e.animate({
                marginLeft: t * n * -1
            }, 150, (function() {}
            )) : e.animate({
                marginTop: t * n * -1
            }, 150, (function() {}
            ))
        }
        ,
        i.prototype.autoShiftReel = function() {
            for (var e = this.reelItemSize, t = this.reelItemMargin, n = this.reelContainerWidth, i = 1, o = e * this.imagesTotal + t * (this.imagesTotal - 1); (i + 1) * (e + t) < n; )
                i++;
            this.currentImageIndex === i && !1 === this.autoplayFlag && (this.autoplayFlag = !0),
            this.autoplayFlag && o > n && this.shiftReelForward()
        }
        ,
        i.prototype.shiftBulletsForward = function(t) {
            void 0 === t && (t = 1),
            this.navAnimationFlag = !0;
            var n = this.bulletListElm
              , i = this.reelPosition
              , o = (parseInt(this.bulletListElm.find("li:not(.active):not(.large)").width()),
            parseInt(this.bulletListElm.find("li:not(.active):not(.large)").css("marginLeft")),
            parseInt(this.bulletListElm.find("li.active").width()),
            parseInt(this.bulletListElm.find("li.active").css("marginLeft")),
            this);
            if (o.reelPosition === o.startClones && 1 === t || (o.reelPosition === o.startClones - 1 || o.reelPosition === o.startClones) && 2 === t) {
                i = o.reelPosition = o.startOriginal - (o.startClones - o.reelPosition) + t;
                var r = 0
                  , a = 0
                  , s = 0;
                this.bulletListElm.find("li").each((function() {
                    s = parseInt(e(this).width()) + parseInt(e(this).css("marginLeft")) + parseInt(e(this).css("marginRight")),
                    a++ < i - t && (r += s)
                }
                )),
                n.css("marginLeft", -1 * r + "px")
            } else
                i = o.reelPosition += t;
            var l = 0;
            a = 0;
            this.bulletListElm.find("li").each((function() {
                s = parseInt(e(this).width()) + parseInt(e(this).css("marginLeft")) + parseInt(e(this).css("marginRight")),
                a++ < o.reelPosition && (l += s)
            }
            )),
            n.animate({
                marginLeft: -1 * l
            }, 150, (function() {}
            ))
        }
        ,
        i.prototype.shiftBulletsBackward = function(t) {
            void 0 === t && (t = 1),
            this.navAnimationFlag = !0;
            var n = this.bulletListElm
              , i = this.reelPosition
              , o = (this.reelItemSize,
            this.reelItemMargin,
            this);
            if (0 === o.reelPosition && 1 === t || o.reelPosition <= 1 && 2 === t) {
                i = o.reelPosition = o.startOriginal + o.reelPosition - t;
                var r = 0
                  , a = 0
                  , s = 0;
                this.bulletListElm.find("li").each((function() {
                    s = parseInt(e(this).width()) + parseInt(e(this).css("marginLeft")) + parseInt(e(this).css("marginRight")),
                    a++ < i + t && (r += s)
                }
                )),
                n.css("marginLeft", -1 * r + "px")
            } else
                i = this.reelPosition -= t;
            var l = 0;
            a = 0;
            this.bulletListElm.find("li").each((function() {
                s = parseInt(e(this).width()) + parseInt(e(this).css("marginLeft")) + parseInt(e(this).css("marginRight")),
                a++ < o.reelPosition && (l += s)
            }
            )),
            n.animate({
                marginLeft: -1 * l
            }, 150, (function() {}
            ))
        }
        ,
        i.prototype.changePhoto = function(t, n) {
            var i = this;
            if (this.animationFlag = !0,
            parseInt(t) !== parseInt(e(i.photoListElm).find("li.active").index())) {
                if (i.currentImageIndex = parseInt(t),
                void 0 === n || "slidefromright" !== n && "slidefromleft" !== n && "fade" !== n)
                    e(i.photoListElm).addClass("switching"),
                    e(i.bulletListElm).find("li").removeClass("active"),
                    e(i.bulletListElm).find('li[data-image-id="' + t + '"]').addClass("active"),
                    e(i.photoListElm).find("li").css("visibility", "hidden").css("position", "absolute"),
                    e(i.photoListElm).find("li.active").removeClass("active"),
                    e(i.photoListElm).find("li").eq(parseInt(t)).addClass("active"),
                    e(i.photoListElm).find("li").eq(parseInt(t)).css("visibility", "visible"),
                    e(i.photoListElm).find("li").eq(parseInt(t)).css("position", "static"),
                    e(i.photoListElm).removeClass("switching"),
                    i.animationFlag = !1,
                    i.navAnimationFlag = !1;
                else {
                    var o = e(i.photoListElm).height();
                    e(i.photoListElm).css("height", o);
                    var r = e(i.photoListElm).find("li.active")
                      , a = e(i.photoListElm).find("li").eq(parseInt(t))
                      , s = (e(r).height(),
                    e(a).height());
                    if (o !== s && e(i.photoListElm).animate({
                        height: s
                    }, {
                        duration: 300,
                        step: function() {
                            cmsReset(i.galleryElm)
                        }
                    }, (function() {}
                    )),
                    "slidefromright" === n ? (e(r).css("position", "absolute").css("left", "0").css("top", "0"),
                    e(r).animate({
                        left: "-120%"
                    }, 300, (function() {
                        e(r).removeClass("active"),
                        e(r).css("position", "").css("left", "").css("top", "")
                    }
                    )),
                    e(a).css("left", "120%").css("opacity", 1).css("visibility", "visible"),
                    e(a).animate({
                        left: "0%"
                    }, 300, (function() {
                        e(a).addClass("active").css("opacity", "").css("left", "").css("position", ""),
                        i.animationFlag = !1,
                        i.navAnimationFlag = !1,
                        e(i.photoListElm).css("height", ""),
                        cmsReset(i.galleryElm)
                    }
                    ))) : "slidefromleft" === n ? (e(r).css("position", "absolute").css("left", "0").css("top", "0"),
                    e(r).animate({
                        left: "120%"
                    }, 300, (function() {
                        e(r).removeClass("active"),
                        e(r).css("position", "").css("left", "").css("top", "")
                    }
                    )),
                    e(a).css("left", "-120%").css("opacity", 1).css("visibility", "visible"),
                    e(a).animate({
                        left: "0%"
                    }, 300, (function() {
                        e(a).addClass("active").css("opacity", "").css("left", "").css("position", ""),
                        i.animationFlag = !1,
                        i.navAnimationFlag = !1,
                        e(i.photoListElm).css("height", ""),
                        cmsReset(i.galleryElm)
                    }
                    ))) : "fade" === n && (e(r).css("position", "absolute").css("left", 0).css("top", 0).css("opacity", 1),
                    e(r).animate({
                        opacity: 0
                    }, 300, (function() {}
                    )),
                    e(a).css("position", "absolute").css("left", 0).css("top", 0).css("opacity", 0).css("visibility", "visible"),
                    e(a).animate({
                        opacity: 1
                    }, 300, (function() {
                        e(r).removeClass("active").css("position", "").css("left", "").css("top", "").css("opacity", "").css("visibility", "").attr("style", ""),
                        e(a).addClass("active").css("opacity", "").css("left", "").css("top", "").css("position", "").css("visibility", "").attr("style", ""),
                        i.animationFlag = !1,
                        i.navAnimationFlag = !1,
                        e(i.photoListElm).css("height", ""),
                        cmsReset(i.galleryElm)
                    }
                    ))),
                    e(i.bulletListElm).find("li").removeClass("active"),
                    e(i.bulletListElm).find('li[data-image-id="' + t + '"]').addClass("active"),
                    i.navBlockContentElm.hasClass("infinite")) {
                        e(i.bulletListElm).find("li").removeClass("large");
                        var l = (i.currentImageIndex + 1) % i.imagesTotal
                          , u = i.currentImageIndex - 1 < 0 ? i.imagesTotal - 1 : i.currentImageIndex - 1;
                        i.bulletListElm.find('li[data-image-id="' + l + '"]').addClass("large"),
                        i.bulletListElm.find('li[data-image-id="' + u + '"]').addClass("large")
                    }
                }
                cmsReset(i.galleryElm)
            }
        }
        ,
        i.prototype.createClones = function() {
            for (var t = "", n = null, i = 0; i < this.images.length; i++)
                t += '<li class="clone ' + (n = this.images[i]).imageRatio + (i === this.currentImageIndex ? " active" : "") + '" data-image-id="' + i + '"><img src="' + n.imageThumbnail + '" alt=""></li>';
            e(this.bulletListElm).prepend(t),
            e(this.bulletListElm).append(t)
        }
        ,
        i.prototype.prepareReel = function(t) {
            if ("bullets" !== this.reelDirection) {
                this.navBlockContentElm.removeClass("bullets"),
                this.getDimensions(),
                this.bulletListElm.find("li").removeClass("large");
                var n = this.reelItemSize
                  , i = this.reelItemMargin
                  , o = n * this.imagesTotal + i * (this.imagesTotal - 1)
                  , r = this.reelContainerWidth
                  , a = 0;
                o <= r ? (this.hideReelControls(),
                this.clearReel(),
                this.navBlockContentElm.addClass("centered")) : (this.navBlockContentElm.hasClass("infinite") && (this.navBlockContentElm.removeClass("infinite"),
                this.reelPosition += 2),
                this.showReelControls(),
                this.navBlockContentElm.addClass("reel"),
                this.navBlockContentElm.removeClass("centered"),
                o = n * (3 * this.imagesTotal) + i * (3 * this.imagesTotal - 1),
                a = this.reelPosition * (n + i) * -1,
                this.bulletListElm.css("horizontal" === this.reelDirection ? "width" : "height", o + "px"),
                this.bulletListElm.css("horizontal" === this.reelDirection ? "marginTop" : "marginLeft", ""),
                this.bulletListElm.css("horizontal" === this.reelDirection ? "marginLeft" : "marginTop", a + "px"),
                "vertical" === this.reelDirection ? this.bulletListElm.css("width", "") : this.bulletListElm.css("height", "")),
                this.getDimensions()
            } else {
                this.navBlockContentElm.addClass("bullets"),
                this.getDimensions();
                n = this.reelItemSize,
                i = 2 * this.reelItemMargin,
                r = this.reelContainerWidth,
                a = 0,
                o = 0;
                if (this.imagesTotal <= this.maxBullets)
                    this.clearReel(),
                    this.navBlockContentElm.addClass("centered");
                else {
                    this.navBlockContentElm.hasClass("reel") || !this.navBlockContentElm.hasClass("infinite") || "delete" === this.initAction || "add" === this.initAction ? (this.bulletListElm.find("li.clicked").length ? this.reelPosition = this.bulletListElm.find("li.clicked").index() - 2 : this.reelPosition -= 2,
                    this.navBlockContentElm.removeClass("reel")) : "resize" !== t && (this.bulletListElm.find("li.active").length ? this.reelPosition = this.bulletListElm.find("li.original.active").index() - 2 : this.reelPosition -= 2),
                    this.navBlockContentElm.addClass("infinite");
                    var s = (this.currentImageIndex + 1) % this.imagesTotal
                      , l = this.currentImageIndex - 1 < 0 ? this.imagesTotal - 1 : this.currentImageIndex - 1;
                    this.bulletListElm.find('li[data-image-id="' + s + '"]').addClass("large"),
                    this.bulletListElm.find('li[data-image-id="' + l + '"]').addClass("large"),
                    a = 0;
                    var u = 0
                      , c = 0
                      , d = this;
                    this.bulletListElm.find("li").each((function() {
                        c = parseInt(e(this).width()) + parseInt(e(this).css("marginLeft")) + parseInt(e(this).css("marginRight")),
                        o += c,
                        u++ < d.reelPosition && (a += c)
                    }
                    )),
                    this.bulletListElm.css("width", o + "px"),
                    this.bulletListElm.css("marginTop", ""),
                    this.bulletListElm.css("marginLeft", -1 * a + "px"),
                    this.bulletListElm.css("height", "")
                }
                this.getDimensions(),
                this.lastReelDirection = this.reelDirection
            }
        }
        ,
        i.prototype.buildNavReel = function() {
            e(this.navBlockWrapperElm).find("ul").length > 0 && e(this.navBlockWrapperElm).find("ul").remove();
            for (var t = this.images.length, i = e("<ul></ul>"), o = null, r = this.currentImageIndex, a = 0; a < t; a++)
                o = this.images[a],
                e(i).append('<li class="' + o.imageRatio + " original" + (a === r ? " active" : "") + '" data-image-id="' + a + '"><img src="' + o.imageThumbnail + '" alt=""></li>');
            if (e(this.navBlockContentElm).append(i),
            this.bulletListElm = this.navBlockContentElm.find(n.bulletListElm),
            this.navBullets = this.bulletListElm.find(n.bulletItemElm),
            this.createClones(),
            this.imagesTotal > this.maxBullets) {
                var s = (this.currentImageIndex + 1) % this.imagesTotal
                  , l = this.currentImageIndex - 1 < 0 ? this.imagesTotal - 1 : this.currentImageIndex - 1;
                this.bulletListElm.find('li[data-image-id="' + s + '"]').addClass("large"),
                this.bulletListElm.find('li[data-image-id="' + l + '"]').addClass("large")
            }
        }
        ,
        i.prototype.getDimensions = function() {
            this.getReelDirection(),
            "horizontal" === this.reelDirection ? (this.reelItemSize = parseInt(this.bulletListElm.find("li.original").width()),
            this.reelItemMargin = parseInt(e(this.navBullets).eq(1).css("marginLeft"))) : "vertical" === this.reelDirection ? (this.reelItemSize = parseInt(this.bulletListElm.find("li.original").height()),
            this.reelItemMargin = parseInt(e(this.navBullets).eq(1).css("marginTop"))) : (this.reelItemSize = parseInt(this.bulletListElm.find("li:not(.active):not(.large)").width()),
            this.reelItemMargin = parseInt(this.bulletListElm.find("li:not(.active):not(.large)").css("marginLeft"))),
            this.reelWidth = this.reelItemSize * this.imagesTotal + this.reelItemMargin * (this.imagesTotal - 1),
            this.reelContainerWidth = "horizontal" === this.reelDirection ? this.navBlockContentElm.outerWidth(!0) : this.navBlockContentElm.outerHeight(!0),
            this.photoListElmWidth = this.photoListElm.width()
        }
        ,
        i.prototype.bindControls = function() {
            var t = this;
            if (this.galleryElm.off("mouseenter").on("mouseenter", (function() {
                t.galleryElm.addClass("hover")
            }
            )),
            this.galleryElm.off("mouseleave").on("mouseleave", (function() {
                t.galleryElm.removeClass("hover")
            }
            )),
            this.navBlockNextElm.off(this.options.touchEvents).on(this.options.touchEvents, (function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                e.stopImmediatePropagation(),
                t.tooFastClickNav() || (t.stopAutoplay(),
                t.nextImage("fade", !0),
                t.shiftReelForward())
            }
            )),
            this.navBlockPrevElm.off(this.options.touchEvents).on(this.options.touchEvents, (function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                e.stopImmediatePropagation(),
                t.tooFastClickNav() || (t.stopAutoplay(),
                t.prevImage("fade", !0),
                t.shiftReelBackward())
            }
            )),
            this.photoNextElm.off(this.options.touchEvents).on(this.options.touchEvents, (function() {
                t.tooFastClick() || (t.stopAutoplay(),
                t.nextImage("slidefromright", !1))
            }
            )),
            this.photoPrevElm.off(this.options.touchEvents).on(this.options.touchEvents, (function() {
                t.tooFastClick() || (t.stopAutoplay(),
                t.prevImage("slidefromleft", !1))
            }
            )),
            e(document).on("keydown", (function(n) {
                var i = e(t.navBlockContentElm).hasClass("reel")
                  , o = 37
                  , r = 39
                  , a = isElementInViewport(t.galleryElm);
                i && (e(t.bulletListElm).width() > e(t.bulletListElm).height() ? (o = 37,
                r = 39) : (o = 38,
                r = 40)),
                a > .3 && (n.keyCode === o ? t.tooFastClick() || (t.stopAutoplay(),
                i ? (t.prevImage("fade", !0),
                t.shiftReelBackward()) : t.prevImage("slidefromleft", !1)) : n.keyCode === r && (t.tooFastClick() || (t.stopAutoplay(),
                i ? (t.nextImage("fade", !0),
                t.shiftReelForward()) : t.nextImage("slidefromright", !1))))
            }
            )),
            this.photoItems.on("click", (function() {
                t.stopAutoplay()
            }
            )),
            e(t.bulletListElm).find("li").each((function() {
                e(this).on("click", (function() {
                    if (t.bulletListElm.find("li").removeClass("clicked"),
                    e(this).addClass("clicked"),
                    t.stopAutoplay(),
                    "block" === e(this).find("img").css("display")) {
                        var n = parseInt(e(this).attr("data-image-id"));
                        t.changePhoto(n, "fade")
                    } else {
                        n = parseInt(e(this).attr("data-image-id"));
                        var i = parseInt(e(t.navBlockWrapperElm).find("li.active").attr("data-image-id"))
                          , o = ""
                          , r = 1;
                        0 === n && i === t.imagesTotal - 1 && t.imagesTotal > 2 ? o = "slidefromright" : 0 === i && n === t.imagesTotal - 1 && t.imagesTotal > 2 ? o = "slidefromleft" : n < 2 && i > t.imagesTotal - 1 - 2 && t.imagesTotal > 4 ? (o = "slidefromright",
                        r = 2) : i < 2 && n > t.imagesTotal - 1 - 2 && t.imagesTotal > 4 ? (o = "slidefromleft",
                        r = 2) : n > i ? (o = "slidefromright",
                        r = n - i) : (o = "slidefromleft",
                        r = i - n),
                        t.changePhoto(n, o),
                        t.navBlockContentElm.hasClass("infinite") && ("slidefromleft" === o ? t.shiftBulletsBackward(r) : "slidefromright" === o && t.shiftBulletsForward(r))
                    }
                }
                ))
            }
            )),
            this.options.isCMS)
                return !1;
            var n = new Hammer(t.galleryElm.get(0).querySelector(t.options.photoListElm),{
                touchAction: "pan-y"
            })
              , i = null
              , o = null
              , r = null
              , a = null
              , s = null
              , l = null
              , u = null
              , c = null
              , d = null
              , f = null
              , p = null
              , h = null
              , m = null
              , v = null
              , g = null
              , y = null
              , b = null
              , w = null
              , C = !1
              , x = 0
              , E = 300;
            if (n.add(new Hammer.Pan({
                threshold: 0,
                pointers: 0,
                direction: Hammer.DIRECTION_ALL
            })),
            n.on("panstart panleft panright pancancel panend ", (function(n) {
                if ("bullets" === t.reelDirection)
                    if ("panstart" === n.type) {
                        if (t.animationFlag || C)
                            return void (C = !0);
                        t.stopAutoplay(),
                        t.galleryElm.addClass("dragged"),
                        x = 0,
                        t.currentImageIndex,
                        i = 0 === t.currentImageIndex ? t.imagesTotal - 1 : t.currentImageIndex - 1,
                        o = t.currentImageIndex === t.imagesTotal - 1 ? 0 : t.currentImageIndex + 1,
                        r = e(t.photoListElm).find("li.active"),
                        a = e(t.photoListElm).find("li").eq(parseInt(i)),
                        s = e(t.photoListElm).find("li").eq(parseInt(o)),
                        l = parseInt(e(t.photoListElm).width()),
                        u = parseInt(r.outerHeight()),
                        c = u,
                        d = e(t.photoListElm).find("li").eq(parseInt(i)).height(),
                        f = e(t.photoListElm).find("li").eq(parseInt(o)).height(),
                        p = -1 * l,
                        h = l,
                        m = null,
                        v = null,
                        g = null,
                        y = null,
                        b = null,
                        w = null,
                        e(t.photoListElm).addClass("disable-pointer-events"),
                        e(t.photoListElm).css("height", u),
                        e(r).css("position", "absolute").css("left", "0").css("top", "0"),
                        e(a).css("position", "absolute").css("left", p).css("top", "0").css("opacity", 1).css("visibility", "visible").css("z-index", 1),
                        e(s).css("position", "absolute").css("left", h).css("top", "0").css("opacity", 1).css("visibility", "visible").css("z-index", 1)
                    } else if ("panend" === n.type || "pancancel" === n.type) {
                        if (C)
                            return void (C = !1);
                        if (t.galleryElm.removeClass("dragged"),
                        t.photoListElm.removeClass("disable-pointer-events"),
                        "pancancel" === n.type)
                            return;
                        if ((8 == n.direction || 16 == n.direction || 24 == n.direction) && 0 === x)
                            return;
                        if (t.animationFlag = !0,
                        E = Math.abs(n.deltaX) / l * 300,
                        Math.abs(n.deltaX) > t.photoListElmWidth / 4 ? (b = !0,
                        parseInt(n.deltaX) < 0 ? (m = -1 * l,
                        v = 0,
                        g = -2 * l,
                        y = f,
                        w = "forth") : (m = l,
                        v = 2 * l,
                        g = 0,
                        y = d,
                        w = "back")) : (m = 0,
                        v = l,
                        g = -1 * l,
                        y = u,
                        b = !1,
                        w = null),
                        e(r).animate({
                            left: m
                        }, E, (function() {
                            b && (e(r).removeClass("active"),
                            t.currentImageIndex = "back" === w ? i : o,
                            "back" === w ? e(a).addClass("active") : "forth" === w && e(s).addClass("active")),
                            e(r).css("position", "").css("left", "").css("top", "").css("z-index", "").css("visibility", "")
                        }
                        )),
                        e(a).animate({
                            left: g
                        }, E, (function() {
                            e(a).css("opacity", "").css("left", "").css("position", "").css("z-index", "").css("visibility", ""),
                            cmsReset(t.galleryElm)
                        }
                        )),
                        e(s).animate({
                            left: v
                        }, E, (function() {
                            e(s).css("opacity", "").css("left", "").css("position", "").css("z-index", "").css("visibility", ""),
                            cmsReset(t.galleryElm)
                        }
                        )),
                        e(t.photoListElm).animate({
                            height: y
                        }, E, (function() {
                            t.animationFlag = !1,
                            t.navAnimationFlag = !1,
                            e(t.photoListElm).css("height", ""),
                            cmsReset(t.galleryElm)
                        }
                        )),
                        b) {
                            if (e(t.bulletListElm).find("li").removeClass("active"),
                            e(t.bulletListElm).find('li[data-image-id="' + ("back" === w ? i : o) + '"]').addClass("active"),
                            t.navBlockContentElm.hasClass("infinite")) {
                                e(t.bulletListElm).find("li").removeClass("large");
                                var S = (("back" === w ? i : o) + 1) % t.imagesTotal
                                  , k = ("back" === w ? i : o) - 1 < 0 ? t.imagesTotal - 1 : ("back" === w ? i : o) - 1;
                                t.bulletListElm.find('li[data-image-id="' + S + '"]').addClass("large"),
                                t.bulletListElm.find('li[data-image-id="' + k + '"]').addClass("large")
                            }
                            "forth" === w && t.navBlockContentElm.hasClass("infinite") ? t.shiftBulletsForward() : "back" === w && t.navBlockContentElm.hasClass("infinite") && t.shiftBulletsBackward()
                        }
                    } else if ("panstart" !== n.type) {
                        if (t.animationFlag || C)
                            return void (C = !0);
                        c = u + Math.abs(n.deltaX) / l * ((parseInt(n.deltaX) < 0 ? f : d) - u),
                        e(t.photoListElm).css("height", c),
                        x = n.deltaX,
                        e(r).css("left", n.deltaX + "px"),
                        e(a).css("left", p + n.deltaX + "px"),
                        e(s).css("left", h + n.deltaX + "px")
                    }
            }
            )),
            e("body").hasClass("touched")) {
                var S = new Hammer.Manager(t.bulletListElm.get(0));
                S.add(new Hammer.Pan({
                    threshold: 20,
                    pointers: 0
                })),
                S.on("pan", (function(e) {
                    if ("bullets" !== t.returnReelDirection() && t.navBlockContentElm.hasClass("reel")) {
                        var n = "horizontal" === t.reelDirection ? e.deltaX : e.deltaY;
                        e.isFinal && (n > 0 ? (t.stopAutoplay(),
                        t.prevImage("fade", !0),
                        t.shiftReelBackward()) : n < 0 && (t.stopAutoplay(),
                        t.nextImage("fade", !0),
                        t.shiftReelForward()))
                    }
                }
                ))
            }
        }
        ,
        i.prototype.unbindEvents = function() {
            var t = this;
            e(document).off("wnd-redraw." + t.galleryID, ".content"),
            e(document).off("wnd-redraw-done." + t.galleryID, ".column-content"),
            e(document).off("wnd-dynamic-content-change." + t.galleryID, String("#" + t.galleryID)),
            e(document).off("wnd-redraw." + t.galleryID),
            e(window).off("resize." + t.galleryID)
        }
        ,
        i.prototype.bindEvents = function() {
            var t = this;
            if (!t.eventsBound) {
                e("body").hasClass("isIE") && (document.ondragstart = function() {
                    return !1
                }
                );
                var n = debounce((function(n) {
                    var i = n.target;
                    "IMG" !== i.tagName && (e(i).hasClass(t.options.slideshowPhotoClass) && (i = t.options.isEshopGallery ? e(i).closest(".product-gallery") : e(i).closest(".b-gal.b")),
                    e(i).hasClass(t.blockClass) ? (e(t.galleryElm).find(".clone").remove(),
                    t.reload(t.galleryID),
                    t.eventsBound = !0) : e(i).hasClass(t.blockClass) || (e(t.galleryElm).find(".clone").remove(),
                    t.unbindEvents(),
                    t = {}))
                }
                ), 500);
                e(document).off("wnd-redraw." + t.galleryID, String("#" + t.galleryID)),
                e(document).on("wnd-redraw." + t.galleryID, String("#" + t.galleryID), n),
                e(window).on("resize." + t.galleryID, (function() {
                    t.resizeAction()
                }
                ))
            }
        }
        ,
        i.prototype.reload = function(t) {
            this.stopAutoplay(),
            this.galleryElm = e(document).find("#" + t),
            this.contentBlockElm = this.galleryElm.find(n.contentBlockElm),
            this.photoListElm = this.contentBlockElm.find(n.photoListElm),
            this.photoItems = this.photoListElm.find(n.photoItemElm),
            this.photoPrevElm = this.contentBlockElm.find(n.photoPrevElm),
            this.photoNextElm = this.contentBlockElm.find(n.photoNextElm),
            this.navBlockWrapperElm = this.galleryElm.find(n.navBlockWrapperElm),
            this.navBlockContentElm = this.navBlockWrapperElm.find(n.navBlockContentElm),
            this.bulletListElm = null,
            this.navBullets = null,
            this.navBlockPrevElm = this.navBlockWrapperElm.find(n.navBlockPrevElm),
            this.navBlockNextElm = this.navBlockWrapperElm.find(n.navBlockNextElm),
            this.images = this.loadSlideShowImages(),
            this.imagesTotal > this.images.length ? this.initAction = "delete" : this.imagesTotal < this.images.length && (this.initAction = "add"),
            this.imagesTotal = this.images.length,
            this.reelPosition = this.imagesTotal,
            this.startOriginal = this.imagesTotal,
            this.startClones = 2 * this.imagesTotal,
            this.reelEnd = !1,
            this.reelDirection = this.returnReelDirection(),
            this.autoplay = !1,
            this.animationFlag = !1,
            this.navAnimationFlag = !1,
            this.initFlag = !1,
            this.currentImageIndex = "default" === this.initAction ? this.currentImageIndex : 0;
            this.init()
        }
        ,
        i.prototype.resizeAction = function() {
            var e = this;
            e.imagesTotal > 1 && (e.getReelDirection(),
            e.images.length > 1 && e.prepareReel("resize"))
        }
        ,
        i.prototype.init = function() {
            if (this.initFlag)
                return !1;
            this.initFlag = !0;
            var t = this;
            if (setTimeout((function() {
                t.initFlag = !1
            }
            ), 1e3),
            this.images.length <= 1 ? this.galleryEmpty() : (this.galleryNotEmpty(),
            this.buildNavReel(),
            this.getDimensions(),
            this.prepareReel(),
            this.bindControls(),
            this.runAutoplay()),
            this.bindEvents(),
            this.initAction = "default",
            this.options.isEshopGallery) {
                var n = e(document).find(this.options.eshopDetailElm);
                n[0] && cmsReset(n[0])
            } else
                cmsReset(this.galleryElm)
        }
        ;
        var o = new i(e(this),n);
        o.init()
    }
    ,
    e.fn.slideShow.defaults = {
        touchEvents: "click",
        autoplay: !1,
        timeout: "5000",
        cover: !1,
        isCMS: !1,
        autoShiftReel: !0,
        isEshopGallery: !1,
        blockClass: "product-gallery",
        eshopDetailElm: ".eshop-detail",
        contentBlockElm: ".product-gallery-content",
        photoListElm: ".product-gallery-list",
        photoItemElm: ".product-gallery-photo",
        photoPrevElm: ".arrow-prev",
        photoNextElm: ".arrow-next",
        photoItemLinkElm: ".product-gallery-link",
        photoItemImageDivElm: ".product-gallery-image",
        photoItemImageElm: "img",
        navBlockWrapperElm: ".product-gallery-nav",
        navBlockContentElm: ".product-gallery-nav-content",
        bulletListElm: "ul",
        bulletItemElm: "li",
        navBlockPrevElm: ".product-gallery-nav-arrow-prev",
        navBlockNextElm: ".product-gallery-nav-arrow-next",
        slideshowPhotoClass: "product-gallery-photo",
        maxBullets: 5
    }
}(jQuery),
function(e) {
    e.fn.productSlider = function(t) {
        if (e(this).length <= 0)
            return !1;
        var n = e.extend({}, e.fn.productSlider.defaults, t)
          , i = function(e, t) {
            this.sliderElm = e,
            this.sliderID = "undefined" !== e.attr("id") ? e.attr("id") : this.generateBlockID(),
            this.wrapperElm = e.find(".eshop-content"),
            this.reelElm = e.find(".eshop-container"),
            this.productsElements = e.find(".item"),
            this.navPrevElm = e.find(t.navPrev),
            this.navNextElm = e.find(t.navNext),
            this.navBlock = e.find(t.navBlock),
            this.navBlockContentElm = e.find(t.navBlockContentElm),
            this.bulletsUl = this.navBlock.find("ul"),
            this.bullets = this.bulletsUl.find("li").length ? this.bulletsUl.find("li") : null,
            this.products = this.loadSliderProducts(),
            this.productsTotal = this.products.length,
            this.itemWidth = parseInt(this.sliderElm.width()),
            this.CPI = 0,
            this.CPRP = this.CPI + 2,
            this.options = t,
            this.autoplay = !1,
            this.resizeTimeout = !1,
            this.maxBullets = t.maxBullets,
            this.resizeFlag = !1,
            this.initFlag = !1,
            this.lastResize = !1,
            this.eventsBound = !1,
            this.animationFlag = !1,
            this.navReelPosition = this.productsTotal,
            this.startOriginal = this.productsTotal,
            this.startClones = 2 * this.productsTotal
        };
        i.prototype.generateBlockID = function() {
            var e, t;
            for (e = "",
            t = 0; t < 10; t++)
                e += Math.floor(16 * Math.random()).toString(16).toUpperCase();
            return e
        }
        ,
        i.prototype.loadSliderProducts = function() {
            var t = [];
            return this.sliderElm.find(".item.original").each((function() {
                t.push({
                    productImage: e(this).find(".item-media img ").attr("src"),
                    productTitle: e(this).find(".item-head .product-title ").text().trim(),
                    productPricePrefix: e(this).find(".item-head .product-price-prefix ").text().trim(),
                    productPriceContent: e(this).find(".item-head .product-price-content ").text().trim(),
                    productPriceSufix: e(this).find(".item-head .product-price-sufix ").text().trim(),
                    productLink: e(this).find(".item-media > a").attr("src")
                })
            }
            )),
            t
        }
        ,
        i.prototype.enoughContent = function() {
            return this.products.length <= 1 ? (this.hideSliderControls(),
            !1) : (this.showSliderControls(),
            !0)
        }
        ,
        i.prototype.prepareReel = function(t) {
            var n = parseInt(this.wrapperElm.width())
              , i = n * (this.productsTotal + 4)
              , o = this;
            i += o.productsTotal,
            e(o.sliderElm).find("article.item").css("width", n + "px"),
            t ? o.reelElm.css("width", i + "px") : setTimeout((function() {
                o.reelElm.css("width", i + "px")
            }
            ), 500),
            o.reelElm.css("marginLeft", o.CPRP * n * -1 + "px"),
            o.itemWidth = n
        }
        ,
        i.prototype.buildNav = function() {
            var t = this.bulletsUl
              , i = "";
            t.find(".clone").remove();
            for (var o = 0; o < this.productsTotal; o++)
                i += '<li class="original' + (o === this.CPI ? " active" : "") + '" data-slide-number="' + o + '"></li>';
            if (e(t).html(i),
            this.bullets = t.find("li"),
            this.productsTotal <= this.maxBullets)
                this.navBlockContentElm.hasClass("infinite") && this.navBlockContentElm.removeClass("infinite"),
                this.navBlockContentElm.addClass("centered");
            else {
                this.navBlockContentElm = this.sliderElm.find(n.navBlockContentElm),
                this.createBulletClones(),
                this.navBlockContentElm.hasClass("infinite") || (this.navReelPosition -= 2),
                this.navBlockContentElm.hasClass("centered") && this.navBlockContentElm.removeClass("centered"),
                this.navBlockContentElm.addClass("infinite");
                var r = (this.CPI + 1) % this.productsTotal
                  , a = this.CPI - 1 < 0 ? this.productsTotal - 1 : this.CPI - 1
                  , s = 0
                  , l = 0
                  , u = 0
                  , c = 0
                  , d = this;
                this.bulletsUl.find('li[data-slide-number="' + r + '"]').addClass("large"),
                this.bulletsUl.find('li[data-slide-number="' + a + '"]').addClass("large"),
                this.bulletsUl.find("li").each((function() {
                    c = parseInt(e(this).width()) + parseInt(e(this).css("marginLeft")) + parseInt(e(this).css("marginRight")),
                    l += c,
                    u++ < d.navReelPosition && (s += c)
                }
                )),
                this.bulletsUl.css("width", l + "px"),
                this.bulletsUl.css("marginLeft", -1 * s + "px"),
                this.bulletsUl.css("marginTop", ""),
                this.bulletsUl.css("height", "")
            }
            cmsReset(this.sliderElm)
        }
        ,
        i.prototype.clearInlineStyles = function() {
            this.sliderElm.find(".clone .item-content div").removeAttr("style")
        }
        ,
        i.prototype.tooFastClick = function() {
            return this.animationFlag
        }
        ,
        i.prototype.bindControls = function() {
            var t = this;
            this.navNextElm.off(this.options.touchEvents).on(this.options.touchEvents, (function() {
                t.tooFastClick() || (t.stopAutoplay(),
                t.nextSlide())
            }
            )),
            this.navPrevElm.off(this.options.touchEvents).on(this.options.touchEvents, (function() {
                t.tooFastClick() || (t.stopAutoplay(),
                t.prevSlide())
            }
            )),
            e(document).on("keydown", (function(e) {
                37 === e.keyCode ? isElementInViewport(t.sliderElm) > .3 && (t.tooFastClick() || (t.stopAutoplay(),
                t.prevSlide())) : 39 === e.keyCode && isElementInViewport(t.sliderElm) > .3 && (t.tooFastClick() || (t.stopAutoplay(),
                t.nextSlide()))
            }
            )),
            null !== this.bullets && this.bullets.off(this.options.touchEvents).on(this.options.touchEvents, (function(n) {
                if (n.preventDefault(),
                n.stopPropagation(),
                n.stopImmediatePropagation(),
                !t.tooFastClick()) {
                    t.stopAutoplay();
                    var i = parseInt(e(t.bulletsUl).find("li.active").attr("data-slide-number"))
                      , o = parseInt(e(this).attr("data-slide-number"))
                      , r = null
                      , a = 0;
                    0 === i && o === t.productsTotal - 1 ? (t.CPI -= 1,
                    t.CPRP -= 1,
                    r = "forward",
                    a = 1) : i === t.productsTotal - 1 && 0 === o ? (t.CPI += 1,
                    t.CPRP += 1,
                    r = "backward",
                    a = 1) : (0 === i && o === t.productsTotal - 2 || 1 === i && o === t.productsTotal - 1) && t.navBlockContentElm.hasClass("infinite") ? (t.CPI -= 2,
                    t.CPRP -= 2,
                    r = "forward",
                    a = 2) : (i === t.productsTotal - 1 && 1 === o || i === t.productsTotal - 2 && 0 === o) && t.navBlockContentElm.hasClass("infinite") ? (t.CPI += 2,
                    t.CPRP += 2,
                    r = "backward",
                    a = 2) : (t.CPI = o,
                    t.CPRP = t.CPI + 2,
                    r = i < o ? "backward" : "forward",
                    a = Math.abs(i - o)),
                    t.jumpToSlide(r, a)
                }
            }
            ));
            var n = new Hammer(t.sliderElm.get(0));
            n.on("swiperight", (function() {
                t.productsTotal > 1 && t.navPrevElm.click()
            }
            )),
            n.on("swipeleft", (function() {
                t.productsTotal > 1 && t.navNextElm.click()
            }
            ))
        }
        ,
        i.prototype.shiftBullets = function(t, n) {
            void 0 === n && (n = 1),
            this.navAnimationFlag = !0;
            var i = this.bulletsUl
              , o = this.navReelPosition
              , r = this
              , a = 0
              , s = 0
              , l = 0
              , u = 0;
            "backward" === t ? r.navReelPosition === r.startClones && 1 === n || (r.navReelPosition === r.startClones - 1 || r.navReelPosition === r.startClones) && 2 === n ? (o = r.navReelPosition = r.startOriginal - (r.startClones - r.navReelPosition) + n,
            this.bulletsUl.find("li").each((function() {
                l = parseInt(e(this).width()) + parseInt(e(this).css("marginLeft")) + parseInt(e(this).css("marginRight")),
                s++ < o - n && (a += l)
            }
            )),
            i.css("marginLeft", -1 * a + "px")) : o = r.navReelPosition += n : 0 === r.navReelPosition && 1 === n || r.navReelPosition <= 1 && 2 === n ? (o = r.navReelPosition = r.startOriginal + r.navReelPosition - n,
            this.bulletsUl.find("li").each((function() {
                l = parseInt(e(this).width()) + parseInt(e(this).css("marginLeft")) + parseInt(e(this).css("marginRight")),
                s++ < o + n && (a += l)
            }
            )),
            i.css("marginLeft", -1 * a + "px")) : o = this.navReelPosition -= n,
            s = 0,
            this.bulletsUl.find("li").each((function() {
                l = parseInt(e(this).width()) + parseInt(e(this).css("marginLeft")) + parseInt(e(this).css("marginRight")),
                s++ < r.navReelPosition && (u += l)
            }
            )),
            i.animate({
                marginLeft: -1 * u
            }, 150, (function() {
                r.navAnimationFlag = !1
            }
            ))
        }
        ,
        i.prototype.jumpToSlide = function(t, n) {
            var i = this
              , o = null;
            if (i.animationFlag = !0,
            o = i.CPI < 0 ? i.productsTotal + i.CPI : i.CPI >= i.productsTotal ? i.CPI - i.productsTotal : i.CPI,
            i.bulletsUl.find("li").removeClass("active"),
            i.bulletsUl.find('li[data-slide-number="' + o + '"]').addClass("active"),
            i.navBlockContentElm.hasClass("infinite")) {
                e(i.bulletsUl).find("li").removeClass("large");
                var r = (o + 1) % i.productsTotal
                  , a = o - 1 < 0 ? i.productsTotal - 1 : o - 1;
                i.bulletsUl.find('li[data-slide-number="' + r + '"]').addClass("large"),
                i.bulletsUl.find('li[data-slide-number="' + a + '"]').addClass("large"),
                this.shiftBullets(t, n)
            }
            e(i.reelElm).animate({
                marginLeft: this.CPRP * i.itemWidth * -1
            }, 300, (function() {
                (i.CPI < 0 || i.CPI > i.productsTotal - 1) && (i.CPI = o,
                i.CPRP = i.CPI + 2,
                i.reelElm.css("marginLeft", i.itemWidth * i.CPRP * -1 + "px")),
                i.animationFlag = !1
            }
            ))
        }
        ,
        i.prototype.nextSlide = function() {
            o.CPI += 1,
            o.CPRP += 1,
            o.jumpToSlide("backward", 1)
        }
        ,
        i.prototype.prevSlide = function() {
            o.CPI -= 1,
            o.CPRP -= 1,
            o.jumpToSlide("forward", 1)
        }
        ,
        i.prototype.runAutoplay = function() {
            if (this.options.autoplay) {
                var e = this;
                this.options.isCMS ? e.autoplay = setTimeout((function() {
                    e.nextSlide(),
                    e.stopAutoplay()
                }
                ), e.options.timeout) : e.autoplay = setInterval((function() {
                    e.nextSlide()
                }
                ), e.options.timeout)
            }
        }
        ,
        i.prototype.stopAutoplay = function() {
            this.options.autoplay && !1 !== this.autoplay && (clearInterval(this.autoplay),
            this.autoplay = !1)
        }
        ,
        i.prototype.hideSliderControls = function() {
            this.navNextElm.addClass("hide").removeClass("show"),
            this.navPrevElm.addClass("hide").removeClass("show"),
            this.navBlock.addClass("hide").removeClass("show")
        }
        ,
        i.prototype.showSliderControls = function() {
            this.navNextElm.addClass("show").removeClass("hide"),
            this.navPrevElm.addClass("show").removeClass("hide"),
            this.navBlock.addClass("show").removeClass("hide")
        }
        ,
        i.prototype.disableAnimations = function() {
            this.sliderElm.addClass("disable-animations")
        }
        ,
        i.prototype.enableAnimations = function() {
            o.sliderElm.removeClass("disable-animations"),
            clearTimeout(o.resizeTimeout)
        }
        ,
        i.prototype.resizeAction = function(e) {
            if (!this.initFlag) {
                e = void 0 !== e && e;
                var t = this;
                t.resizeFlag || (t.resizeFlag = !0,
                t.disableAnimations(),
                clearTimeout(t.resizeTimeout),
                t.resizeTimeout = setTimeout(t.enableAnimations, 200),
                t.enoughContent() && t.prepareReel(!0),
                setTimeout((function() {
                    t.resizeFlag = !1
                }
                ), 100),
                t.bindControls(),
                cmsReset(t.sliderElm)),
                e ? (clearTimeout(t.lastResize),
                t.lastResize = !1) : (clearTimeout(t.lastResize),
                t.lastResize = setTimeout((function() {
                    t.resizeAction(!0)
                }
                ), 200))
            }
        }
        ,
        i.prototype.unbindEvents = function() {
            var t = this;
            e(document).off("wnd-redraw." + t.sliderID, ".content"),
            e(document).off("wnd-redraw-done." + t.sliderID, ".column-content"),
            e(document).off("wnd-redraw." + t.sliderID, String("#" + t.sliderID)),
            e(window).off("resize." + t.sliderID)
        }
        ,
        i.prototype.bindEvents = function() {
            var t = this
              , n = debounce((function(n) {
                var i = n.target;
                "IMG" !== i.tagName && (e(i).hasClass("eshop") || (i = e(i).closest(".eshop")),
                e(i).hasClass("eshop-slider") && e(i).hasClass("not-loaded") ? (e(i).find(".clone").remove(),
                setTimeout((function() {
                    t.reinit(t.sliderID)
                }
                ), 50),
                this.eventsBound = !0) : e(i).hasClass("eshop-slider") || (t.unbindEvents(),
                t = {}))
            }
            ), 500);
            e(window).on("resize." + t.sliderID, (function() {
                t.resizeAction()
            }
            )),
            e(document).on("wnd-redraw." + t.sliderID, ".content", (function(n) {
                e(n.target).hasClass("eshop-slider") && t.resizeAction()
            }
            )),
            e(document).on("wnd-redraw-done." + t.sliderID, ".column-content", (function() {
                var n = e(this).closest(".content");
                e(n).find(".eshop-slider").each((function() {
                    e(this).is(t.sliderElm) && t.resizeAction()
                }
                ))
            }
            )),
            t.options.isCMS && (e(document).off("wnd-redraw." + t.sliderID, String("#" + t.sliderID)),
            e(document).on("wnd-redraw." + t.sliderID, String("#" + t.sliderID), n))
        }
        ,
        i.prototype.reinit = function(t) {
            this.sliderElm = e(document).find("#" + t),
            this.wrapperElm = this.sliderElm.find(".eshop-content"),
            this.reelElm = this.sliderElm.find(".eshop-container"),
            this.productsElements = this.sliderElm.find(".item"),
            this.products = this.loadSliderProducts(),
            this.productsTotal = this.products.length,
            this.navPrevElm = this.sliderElm.find(this.options.navPrev),
            this.navNextElm = this.sliderElm.find(this.options.navNext),
            this.itemWidth = parseInt(this.sliderElm.width()),
            this.CPI = 0,
            this.CPRP = this.CPI + 2,
            this.autoplay = !1,
            this.resizeTimeout = !1,
            this.navBlock = this.sliderElm.find(this.options.navBlock),
            this.bulletsUl = this.navBlock.find("ul"),
            this.bullets = this.bulletsUl.find("li").length ? this.bulletsUl.find("li") : null,
            this.resizeFlag = !1,
            this.initFlag = !1,
            this.eventsBound = !0,
            this.navReelPosition = this.productsTotal,
            this.startOriginal = this.productsTotal,
            this.startClones = 2 * this.productsTotal,
            this.init()
        }
        ,
        i.prototype.createClones = function() {
            for (var t, n, i = 1; i <= this.options.clones; i++)
                n = this.productsElements.eq(this.productsTotal - i).attr("class").replace("original", "clone").trim(),
                t = e("<article>").addClass(n).attr("data-clone-id", this.productsTotal - i).html(this.productsElements.eq(this.productsTotal - i).clone().find(".item-wrapper")),
                e(t).find(".thumbnail").removeAttr("id"),
                e(t).prependTo(this.reelElm);
            for (var o = 0; o < this.options.clones; o++)
                n = this.productsElements.eq(o).attr("class").replace("original", "clone").trim(),
                t = e("<article>").addClass(n).attr("data-clone-id", o).html(this.productsElements.eq(o).clone().find(".item-wrapper")),
                e(t).find(".thumbnail").removeAttr("id"),
                e(t).appendTo(this.reelElm);
            this.clearInlineStyles()
        }
        ,
        i.prototype.createBulletClones = function() {
            for (var t = "", n = 0; n < this.products.length; n++)
                this.products[n],
                t += '<li class="clone ' + (n === this.CPI ? " active" : "") + '" data-slide-number="' + n + '"></li>';
            e(this.bulletsUl).prepend(t),
            e(this.bulletsUl).append(t),
            this.bullets = this.bulletsUl.find("li")
        }
        ,
        i.prototype.init = function() {
            this.initFlag = !0,
            this.enoughContent() && (this.createClones(),
            this.prepareReel(!1),
            this.buildNav(),
            this.bindControls(),
            this.runAutoplay());
            var e = this;
            setTimeout((function() {
                e.sliderElm.removeClass("not-loaded"),
                e.eventsBound || e.bindEvents(),
                cmsReset(e.sliderElm);
                var t = document.createEvent("Event");
                t.initEvent("wnd-redraw-done", !0, !0),
                e.sliderElm[0].dispatchEvent(t)
            }
            ), 500),
            cmsReset(e.sliderElm),
            this.initFlag = !1
        }
        ;
        var o = new i(e(this),n);
        o.init()
    }
    ,
    e.fn.productSlider.defaults = {
        touchEvents: "click",
        autoplay: !1,
        timeout: "5000",
        navPrev: ".slider-prev",
        navNext: ".slider-next",
        navBlock: ".eshop-slider-nav",
        navBlockContentElm: ".eshop-slider-nav > .dots-content",
        isCMS: !1,
        maxBullets: 5,
        clones: 2
    }
}(jQuery),
function(e) {
    e.fn.productCarousel = function(t) {
        if (e(this).length <= 0)
            return !1;
        var n = e.extend({}, e.fn.productCarousel.defaults, t)
          , i = function(t, n) {
            this.carouselElm = t,
            this.carouselID = "undefined" !== t.attr("id") ? t.attr("id") : this.generateBlockID(),
            this.wrapperElm = t.find(".eshop-wrapper-correction"),
            this.carouselContainer = t.find(".eshop-container"),
            this.reelElm = this.carouselContainer,
            this.productsElements = t.find(".item.original"),
            this.products = this.loadCarouselProducts(),
            this.productsTotal = this.products.length,
            this.navPrevElm = t.find(n.navPrev),
            this.navNextElm = t.find(n.navNext),
            this.itemWidth = parseInt(this.carouselElm.width()),
            this.maxItemCount = parseInt(window.getComputedStyle(t[0], ":before").getPropertyValue("content").replace('"', "").replace("'", "")),
            this.itemCount = parseInt(window.getComputedStyle(t[0], ":after").getPropertyValue("content").replace('"', "").replace("'", "")),
            this.currentProductIndex = this.maxItemCount,
            this.options = n,
            this.autoplay = !1,
            this.resizeTimeout = !1,
            this.animationFlag = !1,
            this.initFlag = !1,
            this.lastResize = !1,
            this.eventsBound = !1,
            this.initialized = !1,
            this.isInIframe = e("body").hasClass("ios-iframe")
        };
        i.prototype.generateBlockID = function() {
            var e, t;
            for (e = "",
            t = 0; t < 10; t++)
                e += Math.floor(16 * Math.random()).toString(16).toUpperCase();
            return e
        }
        ,
        i.prototype.loadCarouselProducts = function() {
            var t = [];
            return this.carouselElm.find(".item.original").each((function() {
                t.push({
                    productImage: e(this).find("img ").attr("src"),
                    productTitle: e(this).find(".product-title ").text().trim(),
                    productPricePrefix: e(this).find(".product-price-prefix ").text().trim(),
                    productPriceContent: e(this).find(".product-price-content ").text().trim(),
                    productPriceSufix: e(this).find(".product-price-sufix ").text().trim(),
                    productLink: e(this).find("h2 > a").attr("src")
                })
            }
            )),
            t
        }
        ,
        i.prototype.enoughContent = function() {
            return this.products.length <= this.itemCount ? (this.hideCarouselControls(),
            this.stopAutoplay(),
            !1) : (this.showCarouselControls(),
            !0)
        }
        ,
        i.prototype.prepareReel = function(e) {
            var t = parseInt(this.wrapperElm.width() / this.itemCount)
              , n = t * this.productsTotal + 2 * this.maxItemCount * t;
            this.reelElm.find(".item").css("width", t + "px"),
            this.reelElm.css("width", n + "px"),
            this.reelElm.css("marginLeft", (e ? this.currentProductIndex * t * -1 : this.maxItemCount * t * -1) + "px"),
            e || (this.currentProductIndex = this.maxItemCount),
            this.itemWidth = t,
            e || this.checkImages()
        }
        ,
        i.prototype.replaceImgSrc = function(e, t, n) {
            var i = e.lastIndexOf(t);
            return e = e.substring(0, i) + n + e.substring(i + t.length)
        }
        ,
        i.prototype.checkImages = function() {
            var t, n = this, i = this.reelElm.find("article.item").eq(0).find(".item-media").outerWidth(!0), o = "/200/", r = "";
            i > 900 ? o = "/" : i > 700 ? o = "/" : i > 400 ? o = "/" : i > 200 && (o = "/"),
            this.reelElm.find(".item:not(.wnd-empty-thumbnail)").each((function() {
                if (t = e(this).find("img").attr("src"),
                r = t.indexOf("/700/") > -1 ? "/" : t.indexOf("/") > -1 ? "/" : t.indexOf("/200/") > -1 ? "/" : "/",
                o !== r) {
                    var i = n.replaceImgSrc(t, r, o);
                    e(this).find("img").attr("src", i)
                }
            }
            ))
        }
        ,
        i.prototype.tooFastClick = function() {
            return this.animationFlag
        }
        ,
        i.prototype.bindControls = function() {
            var t = this;
            if (this.navNextElm.off(this.options.touchEvents).on(this.options.touchEvents, (function() {
                t.tooFastClick() || (t.stopAutoplay(),
                t.nextProduct())
            }
            )),
            this.navPrevElm.off(this.options.touchEvents).on(this.options.touchEvents, (function() {
                t.tooFastClick() || (t.stopAutoplay(),
                t.prevProduct())
            }
            )),
            e(document).on("keydown", (function(e) {
                37 === e.keyCode ? isElementInViewport(t.carouselElm) > .3 && (t.tooFastClick() || (t.stopAutoplay(),
                t.prevProduct())) : 39 === e.keyCode && isElementInViewport(t.carouselElm) > .3 && (t.tooFastClick() || (t.stopAutoplay(),
                t.nextProduct()))
            }
            )),
            this.options.isCMS)
                return !1;
            var n = new Hammer(t.carouselElm.get(0));
            n.on("swiperight", (function() {
                t.navPrevElm.click()
            }
            )),
            n.on("swipeleft", (function() {
                t.navNextElm.click()
            }
            ))
        }
        ,
        i.prototype.jumpToProduct = function() {
            var e = this;
            e.animationFlag = !0,
            this.reelElm.animate({
                marginLeft: e.currentProductIndex * e.itemWidth * -1
            }, 300, (function() {
                e.currentProductIndex === e.productsTotal + e.itemCount ? (e.reelElm.css("marginLeft", e.itemCount * e.itemWidth * -1 + "px"),
                e.currentProductIndex = e.itemCount) : 0 === e.currentProductIndex && (e.reelElm.css("marginLeft", e.productsTotal * e.itemWidth * -1 + "px"),
                e.currentProductIndex = e.productsTotal),
                e.animationFlag = !1
            }
            ))
        }
        ,
        i.prototype.nextProduct = function() {
            this.currentProductIndex++,
            this.jumpToProduct()
        }
        ,
        i.prototype.prevProduct = function() {
            this.currentProductIndex--,
            this.jumpToProduct()
        }
        ,
        i.prototype.runAutoplay = function() {
            if (this.options.autoplay && !this.isInIframe) {
                var e = this;
                this.options.isCMS ? e.autoplay = setTimeout((function() {
                    e.nextProduct(),
                    e.stopAutoplay()
                }
                ), e.options.timeout) : e.autoplay = setInterval((function() {
                    e.nextProduct()
                }
                ), e.options.timeout)
            }
        }
        ,
        i.prototype.stopAutoplay = function() {
            this.options.autoplay && !1 !== this.autoplay && (clearInterval(this.autoplay),
            this.autoplay = !1)
        }
        ,
        i.prototype.hideCarouselControls = function() {
            this.carouselElm.addClass("static"),
            this.navNextElm.addClass("hide").removeClass("show"),
            this.navPrevElm.addClass("hide").removeClass("show")
        }
        ,
        i.prototype.showCarouselControls = function() {
            this.carouselElm.removeClass("static"),
            this.navNextElm.addClass("show").removeClass("hide"),
            this.navPrevElm.addClass("show").removeClass("hide")
        }
        ,
        i.prototype.bindEvents = function() {
            var t = this
              , n = debounce((function(n) {
                var i = n.target;
                "IMG" !== i.tagName && (e(i).hasClass("eshop") || (i = e(i).closest(".eshop")),
                e(i).hasClass("eshop-carousel") && e(i).hasClass("not-loaded") ? (e(t.carouselElm).find(".clone").remove(),
                setTimeout((function() {
                    t.reload(t.carouselID)
                }
                ), 100),
                this.eventsBound = !0) : e(i).hasClass("eshop-carousel") || (t.unbindEvents(),
                t = {}))
            }
            ), 500);
            e(window).on("resize." + t.carouselID, (function() {
                t.resizeAction()
            }
            )),
            e(document).on("wnd-redraw." + t.carouselID, ".content", (function(n) {
                e(n.target).hasClass("eshop-carousel") && t.resizeAction()
            }
            ));
            var i = !1;
            e(document).on("wnd-redraw." + t.carouselID, ".s", (function(n) {
                void 0 === t.carouselElm || i || (i = !0,
                setTimeout((function() {
                    t.carouselElm.closest(".s").attr("id") === e(n.target).attr("id") && (t.resizeAction(),
                    i = !1)
                }
                ), 50))
            }
            )),
            e(document).on("wnd-redraw-done." + t.carouselID, ".column-content", (function() {
                var n = e(this).closest(".content");
                e(n).find(".eshop-carousel").each((function() {
                    e(this).is(t.carouselElm) && t.resizeAction()
                }
                ))
            }
            )),
            e(document).off("wnd-redraw." + t.carouselID, String("#" + t.carouselID)),
            e(document).on("wnd-redraw." + t.carouselID, String("#" + t.carouselID), n)
        }
        ,
        i.prototype.clearReel = function() {
            this.reelElm.find(".item").css("width", ""),
            this.reelElm.css("width", ""),
            this.reelElm.css("marginLeft", "")
        }
        ,
        i.prototype.resizeAction = function(e) {
            if (!this.initFlag) {
                var t = this;
                e = void 0 !== e && e;
                t.resizeFlag || (t.resizeFlag = !0,
                t.itemCount = parseInt(window.getComputedStyle(t.carouselElm[0], ":after").getPropertyValue("content").replace('"', "").replace("'", "")),
                t.enoughContent() ? (t.prepareReel(!0),
                t.bindControls()) : t.clearReel(),
                setTimeout((function() {
                    t.resizeFlag = !1
                }
                ), 100),
                t.bindEvents(),
                cmsReset(this.carouselElm)),
                e ? (clearTimeout(t.lastResize),
                t.lastResize = !1) : (clearTimeout(t.lastResize),
                t.lastResize = setTimeout((function() {
                    t.resizeAction(!0)
                }
                ), 200))
            }
        }
        ,
        i.prototype.unbindEvents = function() {
            var t = this;
            e(document).off("wnd-redraw." + t.carouselID, ".content"),
            e(document).off("wnd-redraw-done." + t.carouselID, ".column-content"),
            e(document).off("wnd-redraw." + t.carouselID, String("#" + t.carouselID)),
            e(window).off("resize." + t.carouselID)
        }
        ,
        i.prototype.clearInlineStyles = function() {
            this.carouselElm.find(".item .product-title").removeAttr("style"),
            this.carouselElm.find(".item .product-ribbon").removeAttr("style"),
            this.carouselElm.find(".item .product-price").removeAttr("style"),
            this.carouselElm.find(".item .product-price-comparative").removeAttr("style")
        }
        ,
        i.prototype.copyInlineStyles = function() {
            var t, n, i, o, r = [".product-title", ".product-ribbon", ".product-price", ".product-price-comparative"];
            for (i = this.productsElements.length - 1; i > this.productsElements.length - 1 - this.maxItemCount; i--)
                for (n = 0; n < r.length; n++)
                    void 0 !== (t = this.productsElements.eq(i).find(r[n]).attr("style")) && e('div[data-clone-id="' + i + '"]').find(r[n]).attr("style", t);
            for (o = 0; o < this.maxItemCount; o++)
                for (n = 0; n < r.length; n++)
                    void 0 !== (t = this.productsElements.eq(o).find(r[n]).attr("style")) && e('div[data-clone-id="' + o + '"]').find(r[n]).attr("style", t)
        }
        ,
        i.prototype.reload = function(t) {
            this.stopAutoplay(),
            this.carouselElm = e(document).find("#" + t),
            this.wrapperElm = this.carouselElm.find(".eshop-wrapper-correction"),
            this.carouselContainer = this.carouselElm.find(".eshop-container"),
            this.reelElm = this.carouselContainer,
            this.productsElements = this.carouselElm.find(".item.original"),
            this.products = this.loadCarouselProducts(),
            this.productsTotal = this.products.length,
            this.navPrevElm = this.carouselElm.find(n.navPrev),
            this.navNextElm = this.carouselElm.find(n.navNext),
            this.itemWidth = parseInt(this.carouselElm.width()),
            this.maxItemCount = parseInt(window.getComputedStyle(this.carouselElm[0], ":before").getPropertyValue("content").replace('"', "").replace("'", "")),
            this.itemCount = parseInt(window.getComputedStyle(this.carouselElm[0], ":after").getPropertyValue("content").replace('"', "").replace("'", "")),
            this.currentProductIndex = this.maxItemCount,
            this.autoplay = !1,
            this.resizeTimeout = !1,
            this.resizeFlag = !1,
            this.initFlag = !1,
            this.eventsBound = !0,
            this.init()
        }
        ,
        i.prototype.init = function() {
            var t, n;
            this.initFlag = !0,
            0 === this.productsElements.length && !0 === this.initialized && this.reload(this.carouselID),
            this.carouselElm.find(".clone").remove(),
            this.productsTotal < this.maxItemCount && (this.maxItemCount = this.productsTotal);
            for (var i = this.productsElements.length - 1; i > this.productsElements.length - 1 - this.maxItemCount; i--)
                n = this.productsElements.eq(i).attr("class").replace("original", "clone").trim(),
                t = e("<div>").addClass(n).attr("data-clone-id", i).html(this.productsElements.eq(i).clone().find(".item-wrapper")),
                e(t).find(".thumbnail").removeAttr("id"),
                e(t).prependTo(this.reelElm);
            for (var o = 0; o < this.maxItemCount; o++)
                n = this.productsElements.eq(o).attr("class").replace("original", "clone").trim(),
                t = e("<div>").addClass(n).attr("data-clone-id", o).html(this.productsElements.eq(o).clone().find(".item-wrapper")),
                e(t).find(".thumbnail").removeAttr("id"),
                e(t).appendTo(this.reelElm);
            this.clearInlineStyles(),
            this.enoughContent() ? (this.prepareReel(!1),
            this.bindControls(),
            this.runAutoplay(),
            this.copyInlineStyles()) : this.clearReel(),
            this.checkImages(),
            this.carouselElm.removeClass("not-loaded"),
            this.eventsBound || this.bindEvents(),
            cmsReset(this.carouselElm);
            var r = document.createEvent("Event");
            r.initEvent("wnd-redraw-done", !0, !0),
            this.carouselElm[0].dispatchEvent(r),
            this.initFlag = !1,
            this.initialized = !0
        }
        ,
        new i(e(this),n).init()
    }
    ,
    e.fn.productCarousel.defaults = {
        touchEvents: "click",
        autoplay: !1,
        timeout: "5000",
        navPrev: ".carousel-prev",
        navNext: ".carousel-next",
        isCMS: !1
    }
}(jQuery),
$(document).ready((function() {
    !isCMS() && isEshop() && ($(".eshop-cart-quantity-button").off("click").on("click", (function() {
        var e = $(this).parent().find("input")
          , t = parseInt(e.val(), 10)
          , n = parseInt(e.attr("max"), 10);
        isNaN(n) && (n = 999999),
        $(this).hasClass("eshop-cart-quantity-add") && ((t = Math.min(t + 1, n + 1)) >= n && $(this).addClass("disabled"),
        t > 1 && $(this).parent().find(".eshop-cart-quantity-remove").removeClass("disabled")),
        $(this).hasClass("eshop-cart-quantity-remove") && ((t = Math.max(t - 1, 1)) <= n && $(this).parent().find(".disabled").removeClass("disabled"),
        1 == t && $(this).addClass("disabled")),
        $(e).val(t);
        var i = document.createEvent("Event");
        i.initEvent("change", !0, !0),
        e[0].dispatchEvent(i)
    }
    )),
    $(".eshop-cart-quantity-content input").each((function() {
        var e = parseInt($(this).val(), 10)
          , t = parseInt($(this).attr("max"), 10);
        1 == e && $(this).parent().find(".eshop-cart-quantity-remove").addClass("disabled"),
        e >= t && $(this).parent().find(".eshop-cart-quantity-add").addClass("disabled"),
        1 == e && 1 == t && $(this).prop("disabled", !0),
        0 == t && $(this).parent().find(".eshop-cart-quantity-button").addClass("disabled")
    }
    )))
}
)),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = t() : e.PhotoSwipe = t()
}(this, (function() {
    "use strict";
    return function(e, t, n, i) {
        var o = {
            features: null,
            bind: function(e, t, n, i) {
                var o = (i ? "remove" : "add") + "EventListener";
                t = t.split(" ");
                for (var r = 0; r < t.length; r++)
                    t[r] && e[o](t[r], n, !1)
            },
            isArray: function(e) {
                return e instanceof Array
            },
            createEl: function(e, t) {
                var n = document.createElement(t || "div");
                return e && (n.className = e),
                n
            },
            getScrollY: function() {
                var e = window.pageYOffset;
                return void 0 !== e ? e : document.documentElement.scrollTop
            },
            unbind: function(e, t, n) {
                o.bind(e, t, n, !0)
            },
            removeClass: function(e, t) {
                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            },
            addClass: function(e, t) {
                o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
            },
            hasClass: function(e, t) {
                return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
            },
            getChildByClass: function(e, t) {
                for (var n = e.firstChild; n; ) {
                    if (o.hasClass(n, t))
                        return n;
                    n = n.nextSibling
                }
            },
            arraySearch: function(e, t, n) {
                for (var i = e.length; i--; )
                    if (e[i][n] === t)
                        return i;
                return -1
            },
            extend: function(e, t, n) {
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        if (n && e.hasOwnProperty(i))
                            continue;
                        e[i] = t[i]
                    }
            },
            easing: {
                sine: {
                    out: function(e) {
                        return Math.sin(e * (Math.PI / 2))
                    },
                    inOut: function(e) {
                        return -(Math.cos(Math.PI * e) - 1) / 2
                    }
                },
                cubic: {
                    out: function(e) {
                        return --e * e * e + 1
                    }
                }
            },
            detectFeatures: function() {
                if (o.features)
                    return o.features;
                var e = o.createEl().style
                  , t = ""
                  , n = {};
                if (n.oldIE = document.all && !document.addEventListener,
                n.touch = "ontouchstart"in window,
                window.requestAnimationFrame && (n.raf = window.requestAnimationFrame,
                n.caf = window.cancelAnimationFrame),
                n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled,
                !n.pointerEvent) {
                    var i = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        r && r.length > 0 && ((r = parseInt(r[1], 10)) >= 1 && r < 8 && (n.isOldIOSPhone = !0))
                    }
                    var a = i.match(/Android\s([0-9\.]*)/)
                      , s = a ? a[1] : 0;
                    (s = parseFloat(s)) >= 1 && (s < 4.4 && (n.isOldAndroid = !0),
                    n.androidVersion = s),
                    n.isMobileOpera = /opera mini|opera mobi/i.test(i)
                }
                for (var l, u, c = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], f = 0; f < 4; f++) {
                    t = d[f];
                    for (var p = 0; p < 3; p++)
                        l = c[p],
                        u = t + (t ? l.charAt(0).toUpperCase() + l.slice(1) : l),
                        !n[l] && u in e && (n[l] = u);
                    t && !n.raf && (t = t.toLowerCase(),
                    n.raf = window[t + "RequestAnimationFrame"],
                    n.raf && (n.caf = window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"]))
                }
                if (!n.raf) {
                    var h = 0;
                    n.raf = function(e) {
                        var t = (new Date).getTime()
                          , n = Math.max(0, 16 - (t - h))
                          , i = window.setTimeout((function() {
                            e(t + n)
                        }
                        ), n);
                        return h = t + n,
                        i
                    }
                    ,
                    n.caf = function(e) {
                        clearTimeout(e)
                    }
                }
                return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
                o.features = n,
                n
            }
        };
        o.detectFeatures(),
        o.features.oldIE && (o.bind = function(e, t, n, i) {
            t = t.split(" ");
            for (var o, r = (i ? "detach" : "attach") + "Event", a = function() {
                n.handleEvent.call(n)
            }, s = 0; s < t.length; s++)
                if (o = t[s])
                    if ("object" == _typeof(n) && n.handleEvent) {
                        if (i) {
                            if (!n["oldIE" + o])
                                return !1
                        } else
                            n["oldIE" + o] = a;
                        e[r]("on" + o, n["oldIE" + o])
                    } else
                        e[r]("on" + o, n)
        }
        );
        var r = this
          , a = {
            allowPanToNext: !0,
            spacing: .12,
            bgOpacity: 1,
            mouseUsed: !1,
            loop: !0,
            pinchToClose: !0,
            closeOnScroll: !0,
            closeOnVerticalDrag: !0,
            verticalDragRange: .75,
            hideAnimationDuration: 333,
            showAnimationDuration: 333,
            showHideOpacity: !1,
            focus: !0,
            escKey: !0,
            arrowKeys: !0,
            mainScrollEndFriction: .35,
            panEndFriction: .35,
            isClickableElement: function(e) {
                return "A" === e.tagName
            },
            getDoubleTapZoom: function(e, t) {
                return e || t.initialZoomLevel < .7 ? 1 : 1.33
            },
            maxSpreadZoom: 1.33,
            modal: !0,
            scaleMode: "fit"
        };
        o.extend(a, i);
        var s, l, u, c, d, f, p, h, m, v, g, y, b, w, C, x, E, S, k, T, I, _, P, $, D, M, A, N, L, O, R, F, z, B, H, j, q, W, U, V, X, Y, Q, Z, K, G, J, ee, te, ne, ie, oe, re, ae, se, le, ue = {
            x: 0,
            y: 0
        }, ce = {
            x: 0,
            y: 0
        }, de = {
            x: 0,
            y: 0
        }, fe = {}, pe = 0, he = {}, me = {
            x: 0,
            y: 0
        }, ve = 0, ge = !0, ye = [], be = {}, we = !1, Ce = function(e, t) {
            o.extend(r, t.publicMethods),
            ye.push(e)
        }, xe = function(e) {
            var t = Ht();
            return e > t - 1 ? e - t : e < 0 ? t + e : e
        }, Ee = {}, Se = function(e, t) {
            return Ee[e] || (Ee[e] = []),
            Ee[e].push(t)
        }, ke = function(e) {
            var t = Ee[e];
            if (t) {
                var n = Array.prototype.slice.call(arguments);
                n.shift();
                for (var i = 0; i < t.length; i++)
                    t[i].apply(r, n)
            }
        }, Te = function() {
            return (new Date).getTime()
        }, Ie = function(e) {
            ae = e,
            r.bg.style.opacity = e * a.bgOpacity
        }, _e = function(e, t, n, i, o) {
            (!we || o && o !== r.currItem) && (i /= o ? o.fitRatio : r.currItem.fitRatio),
            e[_] = y + t + "px, " + n + "px" + b + " scale(" + i + ")"
        }, Pe = function(e) {
            te && (e && (v > r.currItem.fitRatio ? we || (Zt(r.currItem, !1, !0),
            we = !0) : we && (Zt(r.currItem),
            we = !1)),
            _e(te, de.x, de.y, v))
        }, $e = function(e) {
            e.container && _e(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
        }, De = function(e, t) {
            t[_] = y + e + "px, 0px" + b
        }, Me = function(e, t) {
            if (!a.loop && t) {
                var n = c + (me.x * pe - e) / me.x
                  , i = Math.round(e - ct.x);
                (n < 0 && i > 0 || n >= Ht() - 1 && i < 0) && (e = ct.x + i * a.mainScrollEndFriction)
            }
            ct.x = e,
            De(e, d)
        }, Ae = function(e, t) {
            var n = dt[e] - he[e];
            return ce[e] + ue[e] + n - n * (t / g)
        }, Ne = function(e, t) {
            e.x = t.x,
            e.y = t.y,
            t.id && (e.id = t.id)
        }, Le = function(e) {
            e.x = Math.round(e.x),
            e.y = Math.round(e.y)
        }, Oe = null, Re = function t() {
            Oe && (o.unbind(document, "mousemove", t),
            o.addClass(e, "pswp--has_mouse"),
            a.mouseUsed = !0,
            ke("mouseUsed")),
            Oe = setTimeout((function() {
                Oe = null
            }
            ), 100)
        }, Fe = function(e, t) {
            var n = Vt(r.currItem, fe, e);
            return t && (ee = n),
            n
        }, ze = function(e) {
            return e || (e = r.currItem),
            e.initialZoomLevel
        }, Be = function(e) {
            return e || (e = r.currItem),
            e.w > 0 ? a.maxSpreadZoom : 1
        }, He = function(e, t, n, i) {
            return i === r.currItem.initialZoomLevel ? (n[e] = r.currItem.initialPosition[e],
            !0) : (n[e] = Ae(e, i),
            n[e] > t.min[e] ? (n[e] = t.min[e],
            !0) : n[e] < t.max[e] && (n[e] = t.max[e],
            !0))
        }, je = function(e) {
            var t = "";
            a.escKey && 27 === e.keyCode ? t = "close" : a.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")),
            t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            r[t]()))
        }, qe = function(e) {
            e && (Y || X || ne || q) && (e.preventDefault(),
            e.stopPropagation())
        }, We = function() {
            r.setScrollOffset(0, o.getScrollY())
        }, Ue = {}, Ve = 0, Xe = function(e) {
            Ue[e] && (Ue[e].raf && M(Ue[e].raf),
            Ve--,
            delete Ue[e])
        }, Ye = function(e) {
            Ue[e] && Xe(e),
            Ue[e] || (Ve++,
            Ue[e] = {})
        }, Qe = function() {
            for (var e in Ue)
                Ue.hasOwnProperty(e) && Xe(e)
        }, Ze = function(e, t, n, i, o, r, a) {
            var s, l = Te();
            Ye(e);
            !function u() {
                if (Ue[e]) {
                    if ((s = Te() - l) >= i)
                        return Xe(e),
                        r(n),
                        void (a && a());
                    r((n - t) * o(s / i) + t),
                    Ue[e].raf = D(u)
                }
            }()
        }, Ke = {
            shout: ke,
            listen: Se,
            viewportSize: fe,
            options: a,
            isMainScrollAnimating: function() {
                return ne
            },
            getZoomLevel: function() {
                return v
            },
            getCurrentIndex: function() {
                return c
            },
            isDragging: function() {
                return U
            },
            isZooming: function() {
                return G
            },
            setScrollOffset: function(e, t) {
                he.x = e,
                O = he.y = t,
                ke("updateScrollOffset", he)
            },
            applyZoomPan: function(e, t, n, i) {
                de.x = t,
                de.y = n,
                v = e,
                Pe(i)
            },
            init: function() {
                if (!s && !l) {
                    var n;
                    r.framework = o,
                    r.template = e,
                    r.bg = o.getChildByClass(e, "pswp__bg"),
                    A = e.className,
                    s = !0,
                    R = o.detectFeatures(),
                    D = R.raf,
                    M = R.caf,
                    _ = R.transform,
                    L = R.oldIE,
                    r.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"),
                    r.container = o.getChildByClass(r.scrollWrap, "pswp__container"),
                    d = r.container.style,
                    r.itemHolders = x = [{
                        el: r.container.children[0],
                        wrap: 0,
                        index: -1
                    }, {
                        el: r.container.children[1],
                        wrap: 0,
                        index: -1
                    }, {
                        el: r.container.children[2],
                        wrap: 0,
                        index: -1
                    }],
                    x[0].el.style.display = x[2].el.style.display = "none",
                    function() {
                        if (_) {
                            var t = R.perspective && !$;
                            return y = "translate" + (t ? "3d(" : "("),
                            void (b = R.perspective ? ", 0px)" : ")")
                        }
                        _ = "left",
                        o.addClass(e, "pswp--ie"),
                        De = function(e, t) {
                            t.left = e + "px"
                        }
                        ,
                        $e = function(e) {
                            var t = e.fitRatio > 1 ? 1 : e.fitRatio
                              , n = e.container.style
                              , i = t * e.w
                              , o = t * e.h;
                            n.width = i + "px",
                            n.height = o + "px",
                            n.left = e.initialPosition.x + "px",
                            n.top = e.initialPosition.y + "px"
                        }
                        ,
                        Pe = function() {
                            if (te) {
                                var e = te
                                  , t = r.currItem
                                  , n = t.fitRatio > 1 ? 1 : t.fitRatio
                                  , i = n * t.w
                                  , o = n * t.h;
                                e.width = i + "px",
                                e.height = o + "px",
                                e.left = de.x + "px",
                                e.top = de.y + "px"
                            }
                        }
                    }(),
                    m = {
                        resize: r.updateSize,
                        orientationchange: function() {
                            clearTimeout(F),
                            F = setTimeout((function() {
                                fe.x !== r.scrollWrap.clientWidth && r.updateSize()
                            }
                            ), 500)
                        },
                        scroll: We,
                        keydown: je,
                        click: qe
                    };
                    var i = R.isOldIOSPhone || R.isOldAndroid || R.isMobileOpera;
                    for (R.animationName && R.transform && !i || (a.showAnimationDuration = a.hideAnimationDuration = 0),
                    n = 0; n < ye.length; n++)
                        r["init" + ye[n]]();
                    if (t)
                        (r.ui = new t(r,o)).init();
                    ke("firstUpdate"),
                    c = c || a.index || 0,
                    (isNaN(c) || c < 0 || c >= Ht()) && (c = 0),
                    r.currItem = Bt(c),
                    (R.isOldIOSPhone || R.isOldAndroid) && (ge = !1),
                    e.setAttribute("aria-hidden", "false"),
                    a.modal && (ge ? e.style.position = "fixed" : (e.style.position = "absolute",
                    e.style.top = o.getScrollY() + "px")),
                    void 0 === O && (ke("initialLayout"),
                    O = N = o.getScrollY());
                    var u = "pswp--open ";
                    for (a.mainClass && (u += a.mainClass + " "),
                    a.showHideOpacity && (u += "pswp--animate_opacity "),
                    u += $ ? "pswp--touch" : "pswp--notouch",
                    u += R.animationName ? " pswp--css_animation" : "",
                    u += R.svg ? " pswp--svg" : "",
                    o.addClass(e, u),
                    r.updateSize(),
                    f = -1,
                    ve = null,
                    n = 0; n < 3; n++)
                        De((n + f) * me.x, x[n].el.style);
                    L || o.bind(r.scrollWrap, h, r),
                    Se("initialZoomInEnd", (function() {
                        r.setContent(x[0], c - 1),
                        r.setContent(x[2], c + 1),
                        x[0].el.style.display = x[2].el.style.display = "block",
                        a.focus && e.focus(),
                        o.bind(document, "keydown", r),
                        R.transform && o.bind(r.scrollWrap, "click", r),
                        a.mouseUsed || o.bind(document, "mousemove", Re),
                        o.bind(window, "resize scroll orientationchange", r),
                        ke("bindEvents")
                    }
                    )),
                    r.setContent(x[1], c),
                    r.updateCurrItem(),
                    ke("afterInit"),
                    ge || (w = setInterval((function() {
                        Ve || U || G || v !== r.currItem.initialZoomLevel || r.updateSize()
                    }
                    ), 1e3)),
                    o.addClass(e, "pswp--visible")
                }
            },
            close: function() {
                s && (s = !1,
                l = !0,
                ke("close"),
                o.unbind(window, "resize scroll orientationchange", r),
                o.unbind(window, "scroll", m.scroll),
                o.unbind(document, "keydown", r),
                o.unbind(document, "mousemove", Re),
                R.transform && o.unbind(r.scrollWrap, "click", r),
                U && o.unbind(window, p, r),
                clearTimeout(F),
                ke("unbindEvents"),
                jt(r.currItem, null, !0, r.destroy))
            },
            destroy: function() {
                ke("destroy"),
                Ot && clearTimeout(Ot),
                e.setAttribute("aria-hidden", "true"),
                e.className = A,
                w && clearInterval(w),
                o.unbind(r.scrollWrap, h, r),
                o.unbind(window, "scroll", r),
                ht(),
                Qe(),
                Ee = null
            },
            panTo: function(e, t, n) {
                n || (e > ee.min.x ? e = ee.min.x : e < ee.max.x && (e = ee.max.x),
                t > ee.min.y ? t = ee.min.y : t < ee.max.y && (t = ee.max.y)),
                de.x = e,
                de.y = t,
                Pe()
            },
            handleEvent: function(e) {
                e = e || window.event,
                m[e.type] && m[e.type](e)
            },
            goTo: function(e) {
                var t = (e = xe(e)) - c;
                ve = t,
                c = e,
                r.currItem = Bt(c),
                pe -= t,
                Me(me.x * pe),
                Qe(),
                ne = !1,
                r.updateCurrItem()
            },
            next: function() {
                r.goTo(c + 1)
            },
            prev: function() {
                r.goTo(c - 1)
            },
            updateCurrZoomItem: function(e) {
                if (e && ke("beforeChange", 0),
                x[1].el.children.length) {
                    var t = x[1].el.children[0];
                    te = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                } else
                    te = null;
                ee = r.currItem.bounds,
                g = v = r.currItem.initialZoomLevel,
                de.x = ee.center.x,
                de.y = ee.center.y,
                e && ke("afterChange")
            },
            invalidateCurrItems: function() {
                C = !0;
                for (var e = 0; e < 3; e++)
                    x[e].item && (x[e].item.needsUpdate = !0)
            },
            updateCurrItem: function(e) {
                if (0 !== ve) {
                    var t, n = Math.abs(ve);
                    if (!(e && n < 2)) {
                        r.currItem = Bt(c),
                        we = !1,
                        ke("beforeChange", ve),
                        n >= 3 && (f += ve + (ve > 0 ? -3 : 3),
                        n = 3);
                        for (var i = 0; i < n; i++)
                            ve > 0 ? (t = x.shift(),
                            x[2] = t,
                            f++,
                            De((f + 2) * me.x, t.el.style),
                            r.setContent(t, c - n + i + 1 + 1)) : (t = x.pop(),
                            x.unshift(t),
                            f--,
                            De(f * me.x, t.el.style),
                            r.setContent(t, c + n - i - 1 - 1));
                        if (te && 1 === Math.abs(ve)) {
                            var o = Bt(E);
                            o.initialZoomLevel !== v && (Vt(o, fe),
                            Zt(o),
                            $e(o))
                        }
                        ve = 0,
                        r.updateCurrZoomItem(),
                        E = c,
                        ke("afterChange")
                    }
                }
            },
            updateSize: function(t) {
                if (!ge && a.modal) {
                    var n = o.getScrollY();
                    if (O !== n && (e.style.top = n + "px",
                    O = n),
                    !t && be.x === window.innerWidth && be.y === window.innerHeight)
                        return;
                    be.x = window.innerWidth,
                    be.y = window.innerHeight,
                    e.style.height = be.y + "px"
                }
                if (fe.x = r.scrollWrap.clientWidth,
                fe.y = r.scrollWrap.clientHeight,
                We(),
                me.x = fe.x + Math.round(fe.x * a.spacing),
                me.y = fe.y,
                Me(me.x * pe),
                ke("beforeResize"),
                void 0 !== f) {
                    for (var i, s, l, u = 0; u < 3; u++)
                        i = x[u],
                        De((u + f) * me.x, i.el.style),
                        l = c + u - 1,
                        a.loop && Ht() > 2 && (l = xe(l)),
                        (s = Bt(l)) && (C || s.needsUpdate || !s.bounds) ? (r.cleanSlide(s),
                        r.setContent(i, l),
                        1 === u && (r.currItem = s,
                        r.updateCurrZoomItem(!0)),
                        s.needsUpdate = !1) : -1 === i.index && l >= 0 && r.setContent(i, l),
                        s && s.container && (Vt(s, fe),
                        Zt(s),
                        $e(s));
                    C = !1
                }
                g = v = r.currItem.initialZoomLevel,
                (ee = r.currItem.bounds) && (de.x = ee.center.x,
                de.y = ee.center.y,
                Pe(!0)),
                ke("resize")
            },
            zoomTo: function(e, t, n, i, r) {
                t && (g = v,
                dt.x = Math.abs(t.x) - de.x,
                dt.y = Math.abs(t.y) - de.y,
                Ne(ce, de));
                var a = Fe(e, !1)
                  , s = {};
                He("x", a, s, e),
                He("y", a, s, e);
                var l = v
                  , u = de.x
                  , c = de.y;
                Le(s);
                var d = function(t) {
                    1 === t ? (v = e,
                    de.x = s.x,
                    de.y = s.y) : (v = (e - l) * t + l,
                    de.x = (s.x - u) * t + u,
                    de.y = (s.y - c) * t + c),
                    r && r(t),
                    Pe(1 === t)
                };
                n ? Ze("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, d) : d(1)
            }
        }, Ge = {}, Je = {}, et = {}, tt = {}, nt = {}, it = [], ot = {}, rt = [], at = {}, st = 0, lt = {
            x: 0,
            y: 0
        }, ut = 0, ct = {
            x: 0,
            y: 0
        }, dt = {
            x: 0,
            y: 0
        }, ft = {
            x: 0,
            y: 0
        }, pt = function(e, t) {
            return at.x = Math.abs(e.x - t.x),
            at.y = Math.abs(e.y - t.y),
            Math.sqrt(at.x * at.x + at.y * at.y)
        }, ht = function() {
            Q && (M(Q),
            Q = null)
        }, mt = function e() {
            U && (Q = D(e),
            Pt())
        }, vt = function e(t, n) {
            return !(!t || t === document) && !(t.getAttribute("class") && t.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (n(t) ? t : e(t.parentNode, n))
        }, gt = {}, yt = function(e, t) {
            return gt.prevent = !vt(e.target, a.isClickableElement),
            ke("preventDragEvent", e, t, gt),
            gt.prevent
        }, bt = function(e, t) {
            return t.x = e.pageX,
            t.y = e.pageY,
            t.id = e.identifier,
            t
        }, wt = function(e, t, n) {
            n.x = .5 * (e.x + t.x),
            n.y = .5 * (e.y + t.y)
        }, Ct = function() {
            var e = de.y - r.currItem.initialPosition.y;
            return 1 - Math.abs(e / (fe.y / 2))
        }, xt = {}, Et = {}, St = [], kt = function(e) {
            for (; St.length > 0; )
                St.pop();
            return P ? (le = 0,
            it.forEach((function(e) {
                0 === le ? St[0] = e : 1 === le && (St[1] = e),
                le++
            }
            ))) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (St[0] = bt(e.touches[0], xt),
            e.touches.length > 1 && (St[1] = bt(e.touches[1], Et))) : (xt.x = e.pageX,
            xt.y = e.pageY,
            xt.id = "",
            St[0] = xt),
            St
        }, Tt = function(e, t) {
            var n, i, o, s, l = de[e] + t[e], u = t[e] > 0, c = ct.x + t.x, d = ct.x - ot.x;
            return n = l > ee.min[e] || l < ee.max[e] ? a.panEndFriction : 1,
            l = de[e] + t[e] * n,
            !a.allowPanToNext && v !== r.currItem.initialZoomLevel || (te ? "h" !== ie || "x" !== e || X || (u ? (l > ee.min[e] && (n = a.panEndFriction,
            ee.min[e] - l,
            i = ee.min[e] - ce[e]),
            (i <= 0 || d < 0) && Ht() > 1 ? (s = c,
            d < 0 && c > ot.x && (s = ot.x)) : ee.min.x !== ee.max.x && (o = l)) : (l < ee.max[e] && (n = a.panEndFriction,
            l - ee.max[e],
            i = ce[e] - ee.max[e]),
            (i <= 0 || d > 0) && Ht() > 1 ? (s = c,
            d > 0 && c < ot.x && (s = ot.x)) : ee.min.x !== ee.max.x && (o = l))) : s = c,
            "x" !== e) ? void (ne || Z || v > r.currItem.fitRatio && (de[e] += t[e] * n)) : (void 0 !== s && (Me(s, !0),
            Z = s !== ot.x),
            ee.min.x !== ee.max.x && (void 0 !== o ? de.x = o : Z || (de.x += t.x * n)),
            void 0 !== s)
        }, It = function(e) {
            if (!("mousedown" === e.type && e.button > 0)) {
                if (zt)
                    return void e.preventDefault();
                if (!W || "mousedown" !== e.type) {
                    if (yt(e, !0) && e.preventDefault(),
                    ke("pointerDown"),
                    P) {
                        var t = o.arraySearch(it, e.pointerId, "id");
                        t < 0 && (t = it.length),
                        it[t] = {
                            x: e.pageX,
                            y: e.pageY,
                            id: e.pointerId
                        }
                    }
                    var n = kt(e)
                      , i = n.length;
                    K = null,
                    Qe(),
                    U && 1 !== i || (U = oe = !0,
                    o.bind(window, p, r),
                    j = se = re = q = Z = Y = V = X = !1,
                    ie = null,
                    ke("firstTouchStart", n),
                    Ne(ce, de),
                    ue.x = ue.y = 0,
                    Ne(tt, n[0]),
                    Ne(nt, tt),
                    ot.x = me.x * pe,
                    rt = [{
                        x: tt.x,
                        y: tt.y
                    }],
                    B = z = Te(),
                    Fe(v, !0),
                    ht(),
                    mt()),
                    !G && i > 1 && !ne && !Z && (g = v,
                    X = !1,
                    G = V = !0,
                    ue.y = ue.x = 0,
                    Ne(ce, de),
                    Ne(Ge, n[0]),
                    Ne(Je, n[1]),
                    wt(Ge, Je, ft),
                    dt.x = Math.abs(ft.x) - de.x,
                    dt.y = Math.abs(ft.y) - de.y,
                    J = pt(Ge, Je))
                }
            }
        }, _t = function(e) {
            if (e.preventDefault(),
            P) {
                var t = o.arraySearch(it, e.pointerId, "id");
                if (t > -1) {
                    var n = it[t];
                    n.x = e.pageX,
                    n.y = e.pageY
                }
            }
            if (U) {
                var i = kt(e);
                if (ie || Y || G)
                    K = i;
                else if (ct.x !== me.x * pe)
                    ie = "h";
                else {
                    var r = Math.abs(i[0].x - tt.x) - Math.abs(i[0].y - tt.y);
                    Math.abs(r) >= 10 && (ie = r > 0 ? "h" : "v",
                    K = i)
                }
            }
        }, Pt = function() {
            if (K) {
                var e = K.length;
                if (0 !== e)
                    if (Ne(Ge, K[0]),
                    et.x = Ge.x - tt.x,
                    et.y = Ge.y - tt.y,
                    G && e > 1) {
                        if (tt.x = Ge.x,
                        tt.y = Ge.y,
                        !et.x && !et.y && function(e, t) {
                            return e.x === t.x && e.y === t.y
                        }(K[1], Je))
                            return;
                        Ne(Je, K[1]),
                        X || (X = !0,
                        ke("zoomGestureStarted"));
                        var t = pt(Ge, Je)
                          , n = Nt(t);
                        n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (se = !0);
                        var i = 1
                          , o = ze()
                          , s = Be();
                        if (n < o)
                            if (a.pinchToClose && !se && g <= r.currItem.initialZoomLevel) {
                                var l = 1 - (o - n) / (o / 1.2);
                                Ie(l),
                                ke("onPinchClose", l),
                                re = !0
                            } else
                                (i = (o - n) / o) > 1 && (i = 1),
                                n = o - i * (o / 3);
                        else
                            n > s && ((i = (n - s) / (6 * o)) > 1 && (i = 1),
                            n = s + i * o);
                        i < 0 && (i = 0),
                        t,
                        wt(Ge, Je, lt),
                        ue.x += lt.x - ft.x,
                        ue.y += lt.y - ft.y,
                        Ne(ft, lt),
                        de.x = Ae("x", n),
                        de.y = Ae("y", n),
                        j = n > v,
                        v = n,
                        Pe()
                    } else {
                        if (!ie)
                            return;
                        if (oe && (oe = !1,
                        Math.abs(et.x) >= 10 && (et.x -= K[0].x - nt.x),
                        Math.abs(et.y) >= 10 && (et.y -= K[0].y - nt.y)),
                        tt.x = Ge.x,
                        tt.y = Ge.y,
                        0 === et.x && 0 === et.y)
                            return;
                        if ("v" === ie && a.closeOnVerticalDrag && "fit" === a.scaleMode && v === r.currItem.initialZoomLevel) {
                            ue.y += et.y,
                            de.y += et.y;
                            var u = Ct();
                            return q = !0,
                            ke("onVerticalDrag", u),
                            Ie(u),
                            void Pe()
                        }
                        (function(e, t, n) {
                            if (e - B > 50) {
                                var i = rt.length > 2 ? rt.shift() : {};
                                i.x = t,
                                i.y = n,
                                rt.push(i),
                                B = e
                            }
                        }
                        )(Te(), Ge.x, Ge.y),
                        Y = !0,
                        ee = r.currItem.bounds,
                        Tt("x", et) || (Tt("y", et),
                        Le(de),
                        Pe())
                    }
            }
        }, $t = function(e) {
            if (R.isOldAndroid) {
                if (W && "mouseup" === e.type)
                    return;
                e.type.indexOf("touch") > -1 && (clearTimeout(W),
                W = setTimeout((function() {
                    W = 0
                }
                ), 600))
            }
            var t;
            if (ke("pointerUp"),
            yt(e, !1) && e.preventDefault(),
            P) {
                var n = o.arraySearch(it, e.pointerId, "id");
                if (n > -1)
                    if (t = it.splice(n, 1)[0],
                    navigator.pointerEnabled)
                        t.type = e.pointerType || "mouse";
                    else {
                        t.type = {
                            4: "mouse",
                            2: "touch",
                            3: "pen"
                        }[e.pointerType],
                        t.type || (t.type = e.pointerType || "mouse")
                    }
            }
            var i, s = kt(e), l = s.length;
            if ("mouseup" === e.type && (l = 0),
            2 === l)
                return K = null,
                !0;
            1 === l && Ne(nt, s[0]),
            0 !== l || ie || ne || (t || ("mouseup" === e.type ? t = {
                x: e.pageX,
                y: e.pageY,
                type: "mouse"
            } : e.changedTouches && e.changedTouches[0] && (t = {
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY,
                type: "touch"
            })),
            ke("touchRelease", e, t));
            var u = -1;
            if (0 === l && (U = !1,
            o.unbind(window, p, r),
            ht(),
            G ? u = 0 : -1 !== ut && (u = Te() - ut)),
            ut = 1 === l ? Te() : -1,
            i = -1 !== u && u < 150 ? "zoom" : "swipe",
            G && l < 2 && (G = !1,
            1 === l && (i = "zoomPointerUp"),
            ke("zoomGestureEnded")),
            K = null,
            Y || X || ne || q)
                if (Qe(),
                H || (H = Dt()),
                H.calculateSwipeSpeed("x"),
                q) {
                    if (Ct() < a.verticalDragRange)
                        r.close();
                    else {
                        var c = de.y
                          , d = ae;
                        Ze("verticalDrag", 0, 1, 300, o.easing.cubic.out, (function(e) {
                            de.y = (r.currItem.initialPosition.y - c) * e + c,
                            Ie((1 - d) * e + d),
                            Pe()
                        }
                        )),
                        ke("onVerticalDrag", 1)
                    }
                } else {
                    if ((Z || ne) && 0 === l) {
                        if (At(i, H))
                            return;
                        i = "zoomPointerUp"
                    }
                    if (!ne)
                        return "swipe" !== i ? void Lt() : void (!Z && v > r.currItem.fitRatio && Mt(H))
                }
        }, Dt = function() {
            var e, t, n = {
                lastFlickOffset: {},
                lastFlickDist: {},
                lastFlickSpeed: {},
                slowDownRatio: {},
                slowDownRatioReverse: {},
                speedDecelerationRatio: {},
                speedDecelerationRatioAbs: {},
                distanceOffset: {},
                backAnimDestination: {},
                backAnimStarted: {},
                calculateSwipeSpeed: function(i) {
                    rt.length > 1 ? (e = Te() - B + 50,
                    t = rt[rt.length - 2][i]) : (e = Te() - z,
                    t = nt[i]),
                    n.lastFlickOffset[i] = tt[i] - t,
                    n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]),
                    n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[i] = 0,
                    Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0),
                    n.slowDownRatio[i] = .95,
                    n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i],
                    n.speedDecelerationRatio[i] = 1
                },
                calculateOverBoundsAnimOffset: function(e, t) {
                    n.backAnimStarted[e] || (de[e] > ee.min[e] ? n.backAnimDestination[e] = ee.min[e] : de[e] < ee.max[e] && (n.backAnimDestination[e] = ee.max[e]),
                    void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7,
                    n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e],
                    n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0,
                    n.backAnimStarted[e] = !0,
                    Ze("bounceZoomPan" + e, de[e], n.backAnimDestination[e], t || 300, o.easing.sine.out, (function(t) {
                        de[e] = t,
                        Pe()
                    }
                    )))))
                },
                calculateAnimOffset: function(e) {
                    n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10),
                    n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]),
                    n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff,
                    de[e] += n.distanceOffset[e])
                },
                panAnimLoop: function() {
                    if (Ue.zoomPan && (Ue.zoomPan.raf = D(n.panAnimLoop),
                    n.now = Te(),
                    n.timeDiff = n.now - n.lastNow,
                    n.lastNow = n.now,
                    n.calculateAnimOffset("x"),
                    n.calculateAnimOffset("y"),
                    Pe(),
                    n.calculateOverBoundsAnimOffset("x"),
                    n.calculateOverBoundsAnimOffset("y"),
                    n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05))
                        return de.x = Math.round(de.x),
                        de.y = Math.round(de.y),
                        Pe(),
                        void Xe("zoomPan")
                }
            };
            return n
        }, Mt = function(e) {
            return e.calculateSwipeSpeed("y"),
            ee = r.currItem.bounds,
            e.backAnimDestination = {},
            e.backAnimStarted = {},
            Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0,
            e.calculateOverBoundsAnimOffset("x"),
            e.calculateOverBoundsAnimOffset("y"),
            !0) : (Ye("zoomPan"),
            e.lastNow = Te(),
            void e.panAnimLoop())
        }, At = function(e, t) {
            var n, i, s;
            if (ne || (st = c),
            "swipe" === e) {
                var l = tt.x - nt.x
                  , u = t.lastFlickDist.x < 10;
                l > 30 && (u || t.lastFlickOffset.x > 20) ? i = -1 : l < -30 && (u || t.lastFlickOffset.x < -20) && (i = 1)
            }
            i && ((c += i) < 0 ? (c = a.loop ? Ht() - 1 : 0,
            s = !0) : c >= Ht() && (c = a.loop ? 0 : Ht() - 1,
            s = !0),
            s && !a.loop || (ve += i,
            pe -= i,
            n = !0));
            var d, f = me.x * pe, p = Math.abs(f - ct.x);
            return n || f > ct.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? p / Math.abs(t.lastFlickSpeed.x) : 333,
            d = Math.min(d, 400),
            d = Math.max(d, 250)) : d = 333,
            st === c && (n = !1),
            ne = !0,
            ke("mainScrollAnimStart"),
            Ze("mainScroll", ct.x, f, d, o.easing.cubic.out, Me, (function() {
                Qe(),
                ne = !1,
                st = -1,
                (n || st !== c) && r.updateCurrItem(),
                ke("mainScrollAnimComplete")
            }
            )),
            n && r.updateCurrItem(!0),
            n
        }, Nt = function(e) {
            return 1 / J * e * g
        }, Lt = function() {
            var e = v
              , t = ze()
              , n = Be();
            v < t ? e = t : v > n && (e = n);
            var i, a = ae;
            return re && !j && !se && v < t ? (r.close(),
            !0) : (re && (i = function(e) {
                Ie((1 - a) * e + a)
            }
            ),
            r.zoomTo(e, 0, 200, o.easing.cubic.out, i),
            !0)
        };
        Ce("Gestures", {
            publicMethods: {
                initGestures: function() {
                    var e = function(e, t, n, i, o) {
                        S = e + t,
                        k = e + n,
                        T = e + i,
                        I = o ? e + o : ""
                    };
                    (P = R.pointerEvent) && R.touch && (R.touch = !1),
                    P ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : R.touch ? (e("touch", "start", "move", "end", "cancel"),
                    $ = !0) : e("mouse", "down", "move", "up"),
                    p = k + " " + T + " " + I,
                    h = S,
                    P && !$ && ($ = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1),
                    r.likelyTouchDevice = $,
                    m[S] = It,
                    m[k] = _t,
                    m[T] = $t,
                    I && (m[I] = m[T]),
                    R.touch && (h += " mousedown",
                    p += " mousemove mouseup",
                    m.mousedown = m[S],
                    m.mousemove = m[k],
                    m.mouseup = m[T]),
                    $ || (a.allowPanToNext = !1)
                }
            }
        });
        var Ot, Rt, Ft, zt, Bt, Ht, jt = function(t, n, i, s) {
            var l;
            Ot && clearTimeout(Ot),
            zt = !0,
            Ft = !0,
            t.initialLayout ? (l = t.initialLayout,
            t.initialLayout = null) : l = a.getThumbBoundsFn && a.getThumbBoundsFn(c);
            var d = i ? a.hideAnimationDuration : a.showAnimationDuration
              , f = function() {
                Xe("initialZoom"),
                i ? (r.template.removeAttribute("style"),
                r.bg.removeAttribute("style")) : (Ie(1),
                n && (n.style.display = "block"),
                o.addClass(e, "pswp--animated-in"),
                ke("initialZoom" + (i ? "OutEnd" : "InEnd"))),
                s && s(),
                zt = !1
            };
            if (!d || !l || void 0 === l.x)
                return ke("initialZoom" + (i ? "Out" : "In")),
                v = t.initialZoomLevel,
                Ne(de, t.initialPosition),
                Pe(),
                e.style.opacity = i ? 0 : 1,
                Ie(1),
                void (d ? setTimeout((function() {
                    f()
                }
                ), d) : f());
            !function() {
                var n = u
                  , s = !r.currItem.src || r.currItem.loadError || a.showHideOpacity;
                t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"),
                i || (v = l.w / t.w,
                de.x = l.x,
                de.y = l.y - N,
                r[s ? "template" : "bg"].style.opacity = .001,
                Pe()),
                Ye("initialZoom"),
                i && !n && o.removeClass(e, "pswp--animated-in"),
                s && (i ? o[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout((function() {
                    o.addClass(e, "pswp--animate_opacity")
                }
                ), 30)),
                Ot = setTimeout((function() {
                    if (ke("initialZoom" + (i ? "Out" : "In")),
                    i) {
                        var r = l.w / t.w
                          , a = {
                            x: de.x,
                            y: de.y
                        }
                          , u = v
                          , c = ae
                          , p = function(t) {
                            1 === t ? (v = r,
                            de.x = l.x,
                            de.y = l.y - O) : (v = (r - u) * t + u,
                            de.x = (l.x - a.x) * t + a.x,
                            de.y = (l.y - O - a.y) * t + a.y),
                            Pe(),
                            s ? e.style.opacity = 1 - t : Ie(c - t * c)
                        };
                        n ? Ze("initialZoom", 0, 1, d, o.easing.cubic.out, p, f) : (p(1),
                        Ot = setTimeout(f, d + 20))
                    } else
                        v = t.initialZoomLevel,
                        Ne(de, t.initialPosition),
                        Pe(),
                        Ie(1),
                        s ? e.style.opacity = 1 : Ie(1),
                        Ot = setTimeout(f, d + 20)
                }
                ), i ? 25 : 90)
            }()
        }, qt = {}, Wt = [], Ut = {
            index: 0,
            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
            forceProgressiveLoading: !1,
            preload: [1, 1],
            getNumItemsFn: function() {
                return Rt.length
            }
        }, Vt = function(e, t, n) {
            if (e.src && !e.loadError) {
                var i = !n;
                if (i && (e.vGap || (e.vGap = {
                    top: 0,
                    bottom: 0
                }),
                ke("parseVerticalMargin", e)),
                qt.x = t.x,
                qt.y = t.y - e.vGap.top - e.vGap.bottom,
                i) {
                    var o = qt.x / e.w
                      , r = qt.y / e.h;
                    e.fitRatio = o < r ? o : r;
                    var s = a.scaleMode;
                    "orig" === s ? n = 1 : "fit" === s && (n = e.fitRatio),
                    n > 1 && (n = 1),
                    e.initialZoomLevel = n,
                    e.bounds || (e.bounds = {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    })
                }
                if (!n)
                    return;
                return function(e, t, n) {
                    var i = e.bounds;
                    i.center.x = Math.round((qt.x - t) / 2),
                    i.center.y = Math.round((qt.y - n) / 2) + e.vGap.top,
                    i.max.x = t > qt.x ? Math.round(qt.x - t) : i.center.x,
                    i.max.y = n > qt.y ? Math.round(qt.y - n) + e.vGap.top : i.center.y,
                    i.min.x = t > qt.x ? 0 : i.center.x,
                    i.min.y = n > qt.y ? e.vGap.top : i.center.y
                }(e, e.w * n, e.h * n),
                i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center),
                e.bounds
            }
            return e.w = e.h = 0,
            e.initialZoomLevel = e.fitRatio = 1,
            e.bounds = {
                center: {
                    x: 0,
                    y: 0
                },
                max: {
                    x: 0,
                    y: 0
                },
                min: {
                    x: 0,
                    y: 0
                }
            },
            e.initialPosition = e.bounds.center,
            e.bounds
        }, Xt = function(e, t, n, i, o, a) {
            t.loadError || i && (t.imageAppended = !0,
            Zt(t, i, t === r.currItem && we),
            n.appendChild(i),
            a && setTimeout((function() {
                t && t.loaded && t.placeholder && (t.placeholder.style.display = "none",
                t.placeholder = null)
            }
            ), 500))
        }, Yt = function(e) {
            e.loading = !0,
            e.loaded = !1;
            var t = e.img = o.createEl("pswp__img", "img")
              , n = function() {
                e.loading = !1,
                e.loaded = !0,
                e.loadComplete ? e.loadComplete(e) : e.img = null,
                t.onload = t.onerror = null,
                t = null
            };
            return t.onload = n,
            t.onerror = function() {
                e.loadError = !0,
                n()
            }
            ,
            t.src = e.src,
            t
        }, Qt = function(e, t) {
            if (e.src && e.loadError && e.container)
                return t && (e.container.innerHTML = ""),
                e.container.innerHTML = a.errorMsg.replace("%url%", e.src),
                !0
        }, Zt = function(e, t, n) {
            if (e.src) {
                t || (t = e.container.lastChild);
                var i = n ? e.w : Math.round(e.w * e.fitRatio)
                  , o = n ? e.h : Math.round(e.h * e.fitRatio);
                e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px",
                e.placeholder.style.height = o + "px"),
                t.style.width = i + "px",
                t.style.height = o + "px"
            }
        }, Kt = function() {
            if (Wt.length) {
                for (var e, t = 0; t < Wt.length; t++)
                    (e = Wt[t]).holder.index === e.index && Xt(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                Wt = []
            }
        };
        Ce("Controller", {
            publicMethods: {
                lazyLoadItem: function(e) {
                    e = xe(e);
                    var t = Bt(e);
                    t && (!t.loaded && !t.loading || C) && (ke("gettingData", e, t),
                    t.src && Yt(t))
                },
                initController: function() {
                    o.extend(a, Ut, !0),
                    r.items = Rt = n,
                    Bt = r.getItemAt,
                    Ht = a.getNumItemsFn,
                    a.loop,
                    Ht() < 3 && (a.loop = !1),
                    Se("beforeChange", (function(e) {
                        var t, n = a.preload, i = null === e || e >= 0, o = Math.min(n[0], Ht()), s = Math.min(n[1], Ht());
                        for (t = 1; t <= (i ? s : o); t++)
                            r.lazyLoadItem(c + t);
                        for (t = 1; t <= (i ? o : s); t++)
                            r.lazyLoadItem(c - t)
                    }
                    )),
                    Se("initialLayout", (function() {
                        r.currItem.initialLayout = a.getThumbBoundsFn && a.getThumbBoundsFn(c)
                    }
                    )),
                    Se("mainScrollAnimComplete", Kt),
                    Se("initialZoomInEnd", Kt),
                    Se("destroy", (function() {
                        for (var e, t = 0; t < Rt.length; t++)
                            (e = Rt[t]).container && (e.container = null),
                            e.placeholder && (e.placeholder = null),
                            e.img && (e.img = null),
                            e.preloader && (e.preloader = null),
                            e.loadError && (e.loaded = e.loadError = !1);
                        Wt = null
                    }
                    ))
                },
                getItemAt: function(e) {
                    return e >= 0 && void 0 !== Rt[e] && Rt[e]
                },
                allowProgressiveImg: function() {
                    return a.forceProgressiveLoading || !$ || a.mouseUsed || screen.width > 1200
                },
                setContent: function(e, t) {
                    a.loop && (t = xe(t));
                    var n = r.getItemAt(e.index);
                    n && (n.container = null);
                    var i, l = r.getItemAt(t);
                    if (l) {
                        ke("gettingData", t, l),
                        e.index = t,
                        e.item = l;
                        var u = l.container = o.createEl("pswp__zoom-wrap");
                        if (!l.src && l.html && (l.html.tagName ? u.appendChild(l.html) : u.innerHTML = l.html),
                        Qt(l),
                        Vt(l, fe),
                        !l.src || l.loadError || l.loaded)
                            l.src && !l.loadError && ((i = o.createEl("pswp__img", "img")).style.opacity = 1,
                            i.src = l.src,
                            Zt(l, i),
                            Xt(0, l, u, i));
                        else {
                            if (l.loadComplete = function(n) {
                                if (s) {
                                    if (e && e.index === t) {
                                        if (Qt(n, !0))
                                            return n.loadComplete = n.img = null,
                                            Vt(n, fe),
                                            $e(n),
                                            void (e.index === c && r.updateCurrZoomItem());
                                        n.imageAppended ? !zt && n.placeholder && (n.placeholder.style.display = "none",
                                        n.placeholder = null) : R.transform && (ne || zt) ? Wt.push({
                                            item: n,
                                            baseDiv: u,
                                            img: n.img,
                                            index: t,
                                            holder: e,
                                            clearPlaceholder: !0
                                        }) : Xt(0, n, u, n.img, 0, !0)
                                    }
                                    n.loadComplete = null,
                                    n.img = null,
                                    ke("imageLoadComplete", t, n)
                                }
                            }
                            ,
                            o.features.transform) {
                                var d = "pswp__img pswp__img--placeholder";
                                d += l.msrc ? "" : " pswp__img--placeholder--blank";
                                var f = o.createEl(d, l.msrc ? "img" : "");
                                l.msrc && (f.src = l.msrc),
                                Zt(l, f),
                                u.appendChild(f),
                                l.placeholder = f
                            }
                            l.loading || Yt(l),
                            r.allowProgressiveImg() && (!Ft && R.transform ? Wt.push({
                                item: l,
                                baseDiv: u,
                                img: l.img,
                                index: t,
                                holder: e
                            }) : Xt(0, l, u, l.img, 0, !0))
                        }
                        Ft || t !== c ? $e(l) : (te = u.style,
                        jt(l, i || l.img)),
                        e.el.innerHTML = "",
                        e.el.appendChild(u)
                    } else
                        e.el.innerHTML = ""
                },
                cleanSlide: function(e) {
                    e.img && (e.img.onload = e.img.onerror = null),
                    e.loaded = e.loading = e.img = e.imageAppended = !1
                }
            }
        });
        var Gt, Jt, en = {}, tn = function(e, t, n) {
            var i = document.createEvent("CustomEvent")
              , o = {
                origEvent: e,
                target: e.target,
                releasePoint: t,
                pointerType: n || "touch"
            };
            i.initCustomEvent("pswpTap", !0, !0, o),
            e.target.dispatchEvent(i)
        };
        Ce("Tap", {
            publicMethods: {
                initTap: function() {
                    Se("firstTouchStart", r.onTapStart),
                    Se("touchRelease", r.onTapRelease),
                    Se("destroy", (function() {
                        en = {},
                        Gt = null
                    }
                    ))
                },
                onTapStart: function(e) {
                    e.length > 1 && (clearTimeout(Gt),
                    Gt = null)
                },
                onTapRelease: function(e, t) {
                    if (t && !Y && !V && !Ve) {
                        var n = t;
                        if (Gt && (clearTimeout(Gt),
                        Gt = null,
                        function(e, t) {
                            return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
                        }(n, en)))
                            return void ke("doubleTap", n);
                        if ("mouse" === t.type)
                            return void tn(e, t, "mouse");
                        if ("BUTTON" === e.target.tagName.toUpperCase() || o.hasClass(e.target, "pswp__single-tap"))
                            return void tn(e, t);
                        Ne(en, n),
                        Gt = setTimeout((function() {
                            tn(e, t),
                            Gt = null
                        }
                        ), 300)
                    }
                }
            }
        }),
        Ce("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function() {
                    L || ($ ? Se("mouseUsed", (function() {
                        r.setupDesktopZoom()
                    }
                    )) : r.setupDesktopZoom(!0))
                },
                setupDesktopZoom: function(t) {
                    Jt = {};
                    var n = "wheel mousewheel DOMMouseScroll";
                    Se("bindEvents", (function() {
                        o.bind(e, n, r.handleMouseWheel)
                    }
                    )),
                    Se("unbindEvents", (function() {
                        Jt && o.unbind(e, n, r.handleMouseWheel)
                    }
                    )),
                    r.mouseZoomedIn = !1;
                    var i, a = function() {
                        r.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"),
                        r.mouseZoomedIn = !1),
                        v < 1 ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"),
                        s()
                    }, s = function() {
                        i && (o.removeClass(e, "pswp--dragging"),
                        i = !1)
                    };
                    Se("resize", a),
                    Se("afterChange", a),
                    Se("pointerDown", (function() {
                        r.mouseZoomedIn && (i = !0,
                        o.addClass(e, "pswp--dragging"))
                    }
                    )),
                    Se("pointerUp", s),
                    t || a()
                },
                handleMouseWheel: function(e) {
                    if (v <= r.currItem.fitRatio)
                        return a.modal && (!a.closeOnScroll || Ve || U ? e.preventDefault() : _ && Math.abs(e.deltaY) > 2 && (u = !0,
                        r.close())),
                        !0;
                    if (e.stopPropagation(),
                    Jt.x = 0,
                    "deltaX"in e)
                        1 === e.deltaMode ? (Jt.x = 18 * e.deltaX,
                        Jt.y = 18 * e.deltaY) : (Jt.x = e.deltaX,
                        Jt.y = e.deltaY);
                    else if ("wheelDelta"in e)
                        e.wheelDeltaX && (Jt.x = -.16 * e.wheelDeltaX),
                        e.wheelDeltaY ? Jt.y = -.16 * e.wheelDeltaY : Jt.y = -.16 * e.wheelDelta;
                    else {
                        if (!("detail"in e))
                            return;
                        Jt.y = e.detail
                    }
                    Fe(v, !0);
                    var t = de.x - Jt.x
                      , n = de.y - Jt.y;
                    (a.modal || t <= ee.min.x && t >= ee.max.x && n <= ee.min.y && n >= ee.max.y) && e.preventDefault(),
                    r.panTo(t, n)
                },
                toggleDesktopZoom: function(t) {
                    t = t || {
                        x: fe.x / 2 + he.x,
                        y: fe.y / 2 + he.y
                    };
                    var n = a.getDoubleTapZoom(!0, r.currItem)
                      , i = v === n;
                    r.mouseZoomedIn = !i,
                    r.zoomTo(i ? r.currItem.initialZoomLevel : n, t, 333),
                    o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                }
            }
        });
        var nn, on, rn, an, sn, ln, un, cn, dn, fn, pn, hn, mn = {
            history: !0,
            galleryUID: 1
        }, vn = function() {
            return pn.hash.substring(1)
        }, gn = function() {
            nn && clearTimeout(nn),
            rn && clearTimeout(rn)
        }, yn = function() {
            var e = vn()
              , t = {};
            if (e.length < 5)
                return t;
            var n, i = e.split("&");
            for (n = 0; n < i.length; n++)
                if (i[n]) {
                    var o = i[n].split("=");
                    o.length < 2 || (t[o[0]] = o[1])
                }
            if (a.galleryPIDs) {
                var r = t.pid;
                for (t.pid = 0,
                n = 0; n < Rt.length; n++)
                    if (Rt[n].pid === r) {
                        t.pid = n;
                        break
                    }
            } else
                t.pid = parseInt(t.pid, 10) - 1;
            return t.pid < 0 && (t.pid = 0),
            t
        }, bn = function e() {
            if (rn && clearTimeout(rn),
            Ve || U)
                rn = setTimeout(e, 500);
            else {
                an ? clearTimeout(on) : an = !0;
                var t = c + 1
                  , n = Bt(c);
                n.hasOwnProperty("pid") && (t = n.pid);
                var i = un + "&gid=" + a.galleryUID + "&pid=" + t;
                cn || -1 === pn.hash.indexOf(i) && (fn = !0);
                var o = pn.href.split("#")[0] + "#" + i;
                hn ? "#" + i !== window.location.hash && history[cn ? "replaceState" : "pushState"]("", document.title, o) : cn ? pn.replace(o) : pn.hash = i,
                cn = !0,
                on = setTimeout((function() {
                    an = !1
                }
                ), 60)
            }
        };
        Ce("History", {
            publicMethods: {
                initHistory: function() {
                    if (o.extend(a, mn, !0),
                    a.history) {
                        pn = window.location,
                        fn = !1,
                        dn = !1,
                        cn = !1,
                        un = vn(),
                        hn = "pushState"in history,
                        un.indexOf("gid=") > -1 && (un = (un = un.split("&gid=")[0]).split("?gid=")[0]),
                        Se("afterChange", r.updateURL),
                        Se("unbindEvents", (function() {
                            o.unbind(window, "hashchange", r.onHashChange)
                        }
                        ));
                        var e = function() {
                            ln = !0,
                            dn || (fn ? history.back() : un ? pn.hash = un : hn ? history.pushState("", document.title, pn.pathname + pn.search) : pn.hash = ""),
                            gn()
                        };
                        Se("unbindEvents", (function() {
                            u && e()
                        }
                        )),
                        Se("destroy", (function() {
                            ln || e()
                        }
                        )),
                        Se("firstUpdate", (function() {
                            c = yn().pid
                        }
                        ));
                        var t = un.indexOf("pid=");
                        t > -1 && ("&" === (un = un.substring(0, t)).slice(-1) && (un = un.slice(0, -1))),
                        setTimeout((function() {
                            s && o.bind(window, "hashchange", r.onHashChange)
                        }
                        ), 40)
                    }
                },
                onHashChange: function() {
                    return vn() === un ? (dn = !0,
                    void r.close()) : void (an || (sn = !0,
                    r.goTo(yn().pid),
                    sn = !1))
                },
                updateURL: function() {
                    gn(),
                    sn || (cn ? nn = setTimeout(bn, 800) : bn())
                }
            }
        }),
        o.extend(r, Ke)
    }
}
)),
$(document).ready((function() {
    if ($(document).on("keydown", (function(e) {
        if ((32 == e.which || 38 == e.which || 40 == e.which) && $(".pswp").hasClass("pswp--open"))
            return !1
    }
    )),
    !isCMS() || isPreview()) {
        var e = function(e, t, n) {
            var i = e.lastIndexOf(t);
            return e = e.substring(0, i) + n + e.substring(i + 1)
        };
        $("body").append('\x3c!-- Root element of PhotoSwipe. Must have class pswp. --\x3e<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>');
        var t = $(".pswp")[0];
        $(".b-gal").each((function() {
            var n = $(this)
              , i = function() {
                var t = [];
                return n.find("a").each((function() {
                    var n = $(this).attr("href")
                      , i = $(this).attr("width")
                      , o = $(this).attr("height")
                      , r = $(this).find(".b-gal-t > span > span").text()
                      , a = {
                        desktopImg: {
                            src: n,
                            w: i,
                            h: o,
                            title: r
                        },
                        tabletImg: {
                            src: e(n, "/", "/700/"),
                            w: 700,
                            h: 700 / i * o,
                            title: r
                        },
                        phabletImg: {
                            src: e(n, "/", "/"),
                            w: 450,
                            h: 450 / i * o,
                            title: r
                        },
                        mobileImg: {
                            src: e(n, "/", "/200/"),
                            w: 200,
                            h: 200 / i * o,
                            title: r
                        }
                    };
                    t.push(a)
                }
                )),
                t
            }();
            n.on("click", ".b-gal-item a", (function(e) {
                e.preventDefault();
                var n = $(this).parent()
                  , o = $(this).closest(".b-gal").find(".b-gal-item").index(n)
                  , r = "mobile"
                  , a = new PhotoSwipe(t,PhotoSwipeUI_Default,i,{
                    index: o,
                    bgOpacity: .9,
                    showHideOpacity: !0,
                    forceProgressiveLoading: !0
                });
                a.listen("gettingData", (function(e, t) {
                    var n = a.viewportSize.x * (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI);
                    n > 900 ? (t.src = t.desktopImg.src,
                    t.w = t.desktopImg.w,
                    t.h = t.desktopImg.h,
                    t.title = t.desktopImg.title,
                    r = "desktop") : n > 700 ? (t.src = t.tabletImg.src,
                    t.w = t.tabletImg.w,
                    t.h = t.tabletImg.h,
                    t.title = t.tabletImg.title,
                    r = "tablet") : n > 400 ? (t.src = t.phabletImg.src,
                    t.w = t.phabletImg.w,
                    t.h = t.phabletImg.h,
                    t.title = t.phabletImg.title,
                    r = "phablet") : n > 200 && (t.src = t.mobileImg.src,
                    t.w = t.mobileImg.w,
                    t.h = t.mobileImg.h,
                    t.title = t.mobileImg.title,
                    r = "mobile")
                }
                )),
                a.listen("beforeResize", (function() {
                    var e, t;
                    (e = a.viewportSize.x * (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI)) > 900 ? t = "desktop" : e > 700 ? t = "tablet" : e > 400 ? t = "phablet" : e > 200 && (t = "mobile"),
                    r !== t && (a.invalidateCurrItems(),
                    r = t)
                }
                )),
                a.init()
            }
            ))
        }
        )),
        $(".product-gallery").each((function() {
            var n = $(this)
              , i = function() {
                var t = [];
                return n.find(".product-gallery-link").each((function() {
                    var n = $(this).attr("href")
                      , i = $(this).attr("width")
                      , o = $(this).attr("height")
                      , r = $(this).find(".product-gallery-title span").text()
                      , a = {
                        desktopImg: {
                            src: n,
                            w: i,
                            h: o,
                            title: r
                        },
                        tabletImg: {
                            src: e(n, "/", "/700/"),
                            w: 700,
                            h: 700 / i * o,
                            title: r
                        },
                        phabletImg: {
                            src: e(n, "/", "/"),
                            w: 450,
                            h: 450 / i * o,
                            title: r
                        },
                        mobileImg: {
                            src: e(n, "/", "/200/"),
                            w: 200,
                            h: 200 / i * o,
                            title: r
                        }
                    };
                    t.push(a)
                }
                )),
                t
            }();
            n.on("click", ".product-gallery-photo a", (function(e) {
                e.preventDefault();
                var n = $(this).parent()
                  , o = $(this).closest(".product-gallery").find(".product-gallery-photo").index(n)
                  , r = new PhotoSwipe(t,PhotoSwipeUI_Default,i,{
                    index: o,
                    bgOpacity: .9,
                    showHideOpacity: !0,
                    forceProgressiveLoading: !0
                });
                r.listen("gettingData", (function(e, t) {
                    var n = r.viewportSize.x * (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI);
                    n > 900 ? (t.src = t.desktopImg.src,
                    t.w = t.desktopImg.w,
                    t.h = t.desktopImg.h,
                    t.title = t.desktopImg.title) : n > 700 ? (t.src = t.tabletImg.src,
                    t.w = t.tabletImg.w,
                    t.h = t.tabletImg.h,
                    t.title = t.tabletImg.title) : n > 400 ? (t.src = t.phabletImg.src,
                    t.w = t.phabletImg.w,
                    t.h = t.phabletImg.h,
                    t.title = t.phabletImg.title) : n > 200 && (t.src = t.mobileImg.src,
                    t.w = t.mobileImg.w,
                    t.h = t.mobileImg.h,
                    t.title = t.mobileImg.title)
                }
                )),
                r.init()
            }
            ))
        }
        )),
        $(".b-img-lightbox, .image-lightbox").each((function() {
            var n = $(this)
              , i = function() {
                var t = [];
                return n.find("a").each((function() {
                    var n = $(this).attr("href")
                      , i = $(this).attr("width")
                      , o = $(this).attr("height")
                      , r = $(this).attr("title")
                      , a = {
                        desktopImg: {
                            src: n,
                            w: i,
                            h: o,
                            title: r
                        },
                        tabletImg: {
                            src: e(n, "/", "/700/"),
                            w: 700,
                            h: 700 / i * o,
                            title: r
                        },
                        phabletImg: {
                            src: e(n, "/", "/"),
                            w: 450,
                            h: 450 / i * o,
                            title: r
                        },
                        mobileImg: {
                            src: e(n, "/", "/200/"),
                            w: 200,
                            h: 200 / i * o,
                            title: r
                        }
                    };
                    t.push(a)
                }
                )),
                t
            }();
            n.on("click", "a.litebox", (function(e) {
                e.preventDefault();
                var n = $(this).parent().index()
                  , o = "mobile"
                  , r = new PhotoSwipe(t,PhotoSwipeUI_Default,i,{
                    index: n,
                    bgOpacity: .9,
                    showHideOpacity: !0,
                    forceProgressiveLoading: !0
                });
                r.listen("gettingData", (function(e, t) {
                    var n = r.viewportSize.x * (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI);
                    n > 900 ? (t.src = t.desktopImg.src,
                    t.w = t.desktopImg.w,
                    t.h = t.desktopImg.h,
                    t.title = t.desktopImg.title,
                    o = "desktop") : n > 700 ? (t.src = t.tabletImg.src,
                    t.w = t.tabletImg.w,
                    t.h = t.tabletImg.h,
                    t.title = t.tabletImg.title,
                    o = "tablet") : n > 400 ? (t.src = t.phabletImg.src,
                    t.w = t.phabletImg.w,
                    t.h = t.phabletImg.h,
                    t.title = t.phabletImg.title,
                    o = "phablet") : n > 200 && (t.src = t.mobileImg.src,
                    t.w = t.mobileImg.w,
                    t.h = t.mobileImg.h,
                    t.title = t.mobileImg.title,
                    o = "mobile")
                }
                )),
                r.listen("beforeResize", (function() {
                    var e, t;
                    (e = r.viewportSize.x * (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI)) > 900 ? t = "desktop" : e > 700 ? t = "tablet" : e > 400 ? t = "phablet" : e > 200 && (t = "mobile"),
                    o !== t && (r.invalidateCurrItems(),
                    o = t)
                }
                )),
                r.init()
            }
            ))
        }
        ))
    }
}
)),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = t() : e.PhotoSwipeUI_Default = t()
}(this, (function() {
    "use strict";
    return function(e, t) {
        var n, i, o, r, a, s, l, u, c, d, f, p, h, m, v, g, y, b, w = this, C = !1, x = !0, E = !0, S = {
            barsSize: {
                top: 44,
                bottom: "auto"
            },
            closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
            timeToIdle: 4e3,
            timeToIdleOutside: 1e3,
            loadingIndicatorDelay: 1e3,
            addCaptionHTMLFn: function(e, t) {
                return e.title ? (t.children[0].innerHTML = e.title,
                !0) : (t.children[0].innerHTML = "",
                !1)
            },
            closeEl: !0,
            captionEl: !0,
            fullscreenEl: !0,
            zoomEl: !0,
            shareEl: !0,
            counterEl: !0,
            arrowEl: !0,
            preloaderEl: !0,
            tapToClose: !1,
            tapToToggleControls: !0,
            clickToCloseNonZoomable: !0,
            shareButtons: [{
                id: "facebook",
                label: "Share on Facebook",
                url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
            }, {
                id: "twitter",
                label: "Tweet",
                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
            }, {
                id: "pinterest",
                label: "Pin it",
                url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
            }, {
                id: "download",
                label: "Download image",
                url: "{{raw_image_url}}",
                download: !0
            }],
            getImageURLForShare: function() {
                return e.currItem.src || ""
            },
            getPageURLForShare: function() {
                return window.location.href
            },
            getTextForShare: function() {
                return e.currItem.title || ""
            },
            indexIndicatorSep: " / ",
            fitControlsWidth: 1200
        }, k = function(e) {
            if (g)
                return !0;
            e = e || window.event,
            v.timeToIdle && v.mouseUsed && !c && N();
            for (var n, i, o = (e.target || e.srcElement).getAttribute("class") || "", r = 0; r < F.length; r++)
                (n = F[r]).onTap && o.indexOf("pswp__" + n.name) > -1 && (n.onTap(),
                i = !0);
            if (i) {
                e.stopPropagation && e.stopPropagation(),
                g = !0;
                var a = t.features.isOldAndroid ? 600 : 30;
                setTimeout((function() {
                    g = !1
                }
                ), a)
            }
        }, T = function(e, n, i) {
            t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n)
        }, I = function() {
            var e = 1 === v.getNumItemsFn();
            e !== m && (T(i, "ui--one-slide", e),
            m = e)
        }, _ = function() {
            T(l, "share-modal--hidden", E)
        }, P = function() {
            return (E = !E) ? (t.removeClass(l, "pswp__share-modal--fade-in"),
            setTimeout((function() {
                E && _()
            }
            ), 300)) : (_(),
            setTimeout((function() {
                E || t.addClass(l, "pswp__share-modal--fade-in")
            }
            ), 30)),
            E || D(),
            !1
        }, $ = function(t) {
            var n = (t = t || window.event).target || t.srcElement;
            return e.shout("shareLinkClick", t, n),
            !(!n.href || !n.hasAttribute("download") && (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)),
            E || P(),
            1))
        }, D = function() {
            for (var e, t, n, i, o = "", r = 0; r < v.shareButtons.length; r++)
                e = v.shareButtons[r],
                t = v.getImageURLForShare(e),
                n = v.getPageURLForShare(e),
                i = v.getTextForShare(e),
                o += '<a href="' + e.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(t)).replace("{{raw_image_url}}", t).replace("{{text}}", encodeURIComponent(i)) + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>",
                v.parseShareButtonOut && (o = v.parseShareButtonOut(e, o));
            l.children[0].innerHTML = o,
            l.children[0].onclick = $
        }, M = function(e) {
            for (var n = 0; n < v.closeElClasses.length; n++)
                if (t.hasClass(e, "pswp__" + v.closeElClasses[n]))
                    return !0
        }, A = 0, N = function() {
            clearTimeout(b),
            A = 0,
            c && w.setIdle(!1)
        }, L = function(e) {
            var t = (e = e || window.event).relatedTarget || e.toElement;
            t && "HTML" !== t.nodeName || (clearTimeout(b),
            b = setTimeout((function() {
                w.setIdle(!0)
            }
            ), v.timeToIdleOutside))
        }, O = function(e) {
            p !== e && (T(f, "preloader--active", !e),
            p = e)
        }, R = function(n) {
            var a = n.vGap;
            if (!e.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth) {
                var s = v.barsSize;
                if (v.captionEl && "auto" === s.bottom)
                    if (r || ((r = t.createEl("pswp__caption pswp__caption--fake")).appendChild(t.createEl("pswp__caption__center")),
                    i.insertBefore(r, o),
                    t.addClass(i, "pswp__ui--fit")),
                    v.addCaptionHTMLFn(n, r, !0)) {
                        var l = r.clientHeight;
                        a.bottom = parseInt(l, 10) || 44
                    } else
                        a.bottom = s.top;
                else
                    a.bottom = "auto" === s.bottom ? 0 : s.bottom;
                a.top = s.top
            } else
                a.top = a.bottom = 0
        }, F = [{
            name: "caption",
            option: "captionEl",
            onInit: function(e) {
                o = e
            }
        }, {
            name: "share-modal",
            option: "shareEl",
            onInit: function(e) {
                l = e
            },
            onTap: function() {
                P()
            }
        }, {
            name: "button--share",
            option: "shareEl",
            onInit: function(e) {
                s = e
            },
            onTap: function() {
                P()
            }
        }, {
            name: "button--zoom",
            option: "zoomEl",
            onTap: e.toggleDesktopZoom
        }, {
            name: "counter",
            option: "counterEl",
            onInit: function(e) {
                a = e
            }
        }, {
            name: "button--close",
            option: "closeEl",
            onTap: e.close
        }, {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: e.prev
        }, {
            name: "button--arrow--right",
            option: "arrowEl",
            onTap: e.next
        }, {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function() {
                n.isFullscreen() ? n.exit() : n.enter()
            }
        }, {
            name: "preloader",
            option: "preloaderEl",
            onInit: function(e) {
                f = e
            }
        }];
        w.init = function() {
            t.extend(e.options, S, !0),
            v = e.options,
            i = t.getChildByClass(e.scrollWrap, "pswp__ui"),
            d = e.listen,
            function() {
                var e;
                d("onVerticalDrag", (function(e) {
                    x && e < .95 ? w.hideControls() : !x && e >= .95 && w.showControls()
                }
                )),
                d("onPinchClose", (function(t) {
                    x && t < .9 ? (w.hideControls(),
                    e = !0) : e && !x && t > .9 && w.showControls()
                }
                )),
                d("zoomGestureEnded", (function() {
                    (e = !1) && !x && w.showControls()
                }
                ))
            }(),
            d("beforeChange", w.update),
            d("doubleTap", (function(t) {
                var n = e.currItem.initialZoomLevel;
                e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(v.getDoubleTapZoom(!1, e.currItem), t, 333)
            }
            )),
            d("preventDragEvent", (function(e, t, n) {
                var i = e.target || e.srcElement;
                i && i.getAttribute("class") && e.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
            }
            )),
            d("bindEvents", (function() {
                t.bind(i, "pswpTap click", k),
                t.bind(e.scrollWrap, "pswpTap", w.onGlobalTap),
                e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", w.onMouseOver)
            }
            )),
            d("unbindEvents", (function() {
                E || P(),
                y && clearInterval(y),
                t.unbind(document, "mouseout", L),
                t.unbind(document, "mousemove", N),
                t.unbind(i, "pswpTap click", k),
                t.unbind(e.scrollWrap, "pswpTap", w.onGlobalTap),
                t.unbind(e.scrollWrap, "mouseover", w.onMouseOver),
                n && (t.unbind(document, n.eventK, w.updateFullscreen),
                n.isFullscreen() && (v.hideAnimationDuration = 0,
                n.exit()),
                n = null)
            }
            )),
            d("destroy", (function() {
                v.captionEl && (r && i.removeChild(r),
                t.removeClass(o, "pswp__caption--empty")),
                l && (l.children[0].onclick = null),
                t.removeClass(i, "pswp__ui--over-close"),
                t.addClass(i, "pswp__ui--hidden"),
                w.setIdle(!1)
            }
            )),
            v.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"),
            d("initialZoomIn", (function() {
                v.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden")
            }
            )),
            d("initialZoomOut", (function() {
                t.addClass(i, "pswp__ui--hidden")
            }
            )),
            d("parseVerticalMargin", R),
            function() {
                var e, n, o, r = function(i) {
                    if (i)
                        for (var r = i.length, a = 0; a < r; a++) {
                            e = i[a],
                            n = e.className;
                            for (var s = 0; s < F.length; s++)
                                o = F[s],
                                n.indexOf("pswp__" + o.name) > -1 && (v[o.option] ? (t.removeClass(e, "pswp__element--disabled"),
                                o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                        }
                };
                r(i.children);
                var a = t.getChildByClass(i, "pswp__top-bar");
                a && r(a.children)
            }(),
            v.shareEl && s && l && (E = !0),
            I(),
            v.timeToIdle && d("mouseUsed", (function() {
                t.bind(document, "mousemove", N),
                t.bind(document, "mouseout", L),
                y = setInterval((function() {
                    2 == ++A && w.setIdle(!0)
                }
                ), v.timeToIdle / 2)
            }
            )),
            v.fullscreenEl && !t.features.isOldAndroid && (n || (n = w.getFullscreenAPI()),
            n ? (t.bind(document, n.eventK, w.updateFullscreen),
            w.updateFullscreen(),
            t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs")),
            v.preloaderEl && (O(!0),
            d("beforeChange", (function() {
                clearTimeout(h),
                h = setTimeout((function() {
                    e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && O(!1) : O(!0)
                }
                ), v.loadingIndicatorDelay)
            }
            )),
            d("imageLoadComplete", (function(t, n) {
                e.currItem === n && O(!0)
            }
            )))
        }
        ,
        w.setIdle = function(e) {
            c = e,
            T(i, "ui--idle", e)
        }
        ,
        w.update = function() {
            x && e.currItem ? (w.updateIndexIndicator(),
            v.captionEl && (v.addCaptionHTMLFn(e.currItem, o),
            T(o, "caption--empty", !e.currItem.title)),
            C = !0) : C = !1,
            E || P(),
            I()
        }
        ,
        w.updateFullscreen = function(i) {
            i && setTimeout((function() {
                e.setScrollOffset(0, t.getScrollY())
            }
            ), 50),
            t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
        }
        ,
        w.updateIndexIndicator = function() {
            v.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn())
        }
        ,
        w.onGlobalTap = function(n) {
            var i = (n = n || window.event).target || n.srcElement;
            if (!g)
                if (n.detail && "mouse" === n.detail.pointerType) {
                    if (M(i))
                        return void e.close();
                    t.hasClass(i, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? v.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
                } else if (v.tapToToggleControls && (x ? w.hideControls() : w.showControls()),
                v.tapToClose && (t.hasClass(i, "pswp__img") || M(i)))
                    return void e.close()
        }
        ,
        w.onMouseOver = function(e) {
            var t = (e = e || window.event).target || e.srcElement;
            T(i, "ui--over-close", M(t))
        }
        ,
        w.hideControls = function() {
            t.addClass(i, "pswp__ui--hidden"),
            x = !1
        }
        ,
        w.showControls = function() {
            x = !0,
            C || w.update(),
            t.removeClass(i, "pswp__ui--hidden")
        }
        ,
        w.supportsFullscreen = function() {
            var e = document;
            return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
        }
        ,
        w.getFullscreenAPI = function() {
            var t, n = document.documentElement, i = "fullscreenchange";
            return n.requestFullscreen ? t = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: i
            } : n.mozRequestFullScreen ? t = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + i
            } : n.webkitRequestFullscreen ? t = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + i
            } : n.msRequestFullscreen && (t = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }),
            t && (t.enter = function() {
                return u = v.closeOnScroll,
                v.closeOnScroll = !1,
                "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }
            ,
            t.exit = function() {
                return v.closeOnScroll = u,
                document[this.exitK]()
            }
            ,
            t.isFullscreen = function() {
                return document[this.elementK]
            }
            ),
            t
        }
    }
}
));
var FSOverlay = function() {
    this.overlayActive = !1,
    this.overlayClass = "fullscreen-overlay"
};
FSOverlay.prototype.addOverlay = function(targetElm, appendMethod, typeClass) {
    typeClass = void 0 === typeClass ? "" : " " + typeClass,
    eval("$(targetElm)." + appendMethod + "('<div class=\"" + this.overlayClass + typeClass + "\"></div>');"),
    this.overlayActive = !0
}
,
FSOverlay.prototype.removeOverlay = function(e) {
    void 0 !== e ? $("." + this.overlayClass + "." + e).remove() : $(".fullscreen-overlay").remove(),
    this.overlayActive = !1
}
,
FSOverlay.prototype.addClass = function(e) {
    $("." + this.overlayClass).addClass(e)
}
,
FSOverlay.prototype.removeClass = function(e) {
    $("." + this.overlayClass).removeClass(e)
}
,
FSOverlay.prototype.bindOverlayClose = function(e, t) {
    var n = this.overlayClass;
    $("." + n).one(e, (function(n, i) {
        t(),
        $("." + i).off(e)
    }
    ))
}
;
var fullscreenOverlay = new FSOverlay;
function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
var _jsxFileName = "C:\\Users\\jbe\\GIT\\wtf-2.3\\ui\\ui-mt\\blocks\\search\\search\\js\\search.js";
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value"in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i)
    }
}
function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t),
    n && _defineProperties(e, n),
    e
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    t && _setPrototypeOf(e, t)
}
function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t,
        e
    }
    )(e, t)
}
function _createSuper(e) {
    var t = _isNativeReflectConstruct();
    return function() {
        var n, i = _getPrototypeOf(e);
        if (t) {
            var o = _getPrototypeOf(this).constructor;
            n = Reflect.construct(i, arguments, o)
        } else
            n = i.apply(this, arguments);
        return _possibleConstructorReturn(this, n)
    }
}
function _possibleConstructorReturn(e, t) {
    if (t && ("object" === _typeof(t) || "function" == typeof t))
        return t;
    if (void 0 !== t)
        throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(e)
}
function _assertThisInitialized(e) {
    if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1;
    if (Reflect.construct.sham)
        return !1;
    if ("function" == typeof Proxy)
        return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
        ))),
        !0
    } catch (e) {
        return !1
    }
}
function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    }
    )(e)
}
function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
var SearchSuggestBox = function(e) {
    _inherits(n, React.Component);
    var t = _createSuper(n);
    function n(e) {
        var i;
        return _classCallCheck(this, n),
        _defineProperty(_assertThisInitialized(i = t.call(this, e)), "getItems", (function() {
            return 0 !== Object.keys(i.state.responseData).length ? i.state.responseData.requests[0].data.products.items : []
        }
        )),
        _defineProperty(_assertThisInitialized(i), "getNumberOfProducts", (function() {
            return 0 !== Object.keys(i.state.responseData).length ? i.state.responseData.requests[0].data.products.totalItems : 0
        }
        )),
        _defineProperty(_assertThisInitialized(i), "getResultPageLink", (function() {
            return "".concat(i.props.searchPrefix, "?text=").concat(i.state.inputValue)
        }
        )),
        _defineProperty(_assertThisInitialized(i), "activateScroll", (function() {
            var e, t = document.getElementsByClassName("ssb-wrapper")[0], n = document.getElementsByClassName("s-hn")[0], i = t.getBoundingClientRect().top, o = window.innerHeight;
            e = window.innerWidth < 900 ? 0 : 20,
            n.classList.contains("s-hn-bottom") || (t.scrollHeight >= o - i ? (t.style.overflowY = "scroll",
            t.style.maxHeight = "".concat(o - i - e, "px")) : (t.style.overflowY = "hidden",
            t.style.maxHeight = "none"))
        }
        )),
        _defineProperty(_assertThisInitialized(i), "hidePhoneKeyboard", (function() {
            i.props.search.blur()
        }
        )),
        _defineProperty(_assertThisInitialized(i), "setTop", (function() {
            if (document.getElementsByClassName("l-sidebar").length && document.body.classList.contains("wnd-s-b")) {
                var e = document.getElementsByClassName("l-h")[0]
                  , t = i.ssbWrapperRef.current
                  , n = i.props.search.getBoundingClientRect().top + i.props.search.offsetHeight + 5
                  , o = document.getElementsByClassName("s-f")[0];
                if (t)
                    if ("fixed" === window.getComputedStyle(e).getPropertyValue("position"))
                        t.style.top = "".concat(n, "px"),
                        n + parseInt(t.offsetHeight) > window.innerHeight - document.getElementsByClassName("l-f")[0].offsetHeight + parseInt(window.getComputedStyle(document.querySelector(".s-f .s-c")).paddingTop) ? o.classList.add("invisible") : o.classList.contains("invisible") && o.classList.remove("invisible");
                    else
                        t.style.top = "",
                        o.classList.contains("invisible") && o.classList.remove("invisible")
            }
        }
        )),
        _defineProperty(_assertThisInitialized(i), "onUpdate", (function(e) {
            i.timer && clearTimeout(i.timer),
            i.timer = setTimeout((function() {
                i.setState({
                    inputValue: e.target.value
                });
                var t = new Headers;
                t.append("Content-Type", "application/x-www-form-urlencoded");
                var n = new URLSearchParams
                  , o = {
                    id: "default_".concat(Math.random().toString(36).substring(7)),
                    type: "universal",
                    headers: {
                        langBe: wnd.$system.backendLanguage,
                        langFe: wnd.$system.frontendLanguage,
                        langFeId: wnd.$system.page.langId
                    },
                    requests: [{
                        id: "FulltextSearchRequest_".concat(Math.random().toString(36).substring(7)),
                        type: "fulltextSearch",
                        data: {
                            query: i.state.inputValue,
                            limit: 6,
                            offset: 0
                        }
                    }]
                };
                i.lastRequestId = o.requests[0].id,
                n.append("transaction", JSON.stringify(o));
                var r = new Request("/servers/usot/",{
                    method: "POST",
                    headers: t,
                    body: n
                });
                fetch(r).then((function(e) {
                    return e.json()
                }
                )).then((function(e) {
                    if (e.requests[0].id === i.lastRequestId)
                        return i.setState({
                            responseData: e
                        }),
                        e
                }
                )).catch((function(e) {}
                )),
                "" == i.state.inputValue ? i.props.searchResults.style.display = "none" : i.props.searchResults.style.display = "block"
            }
            ), 400)
        }
        )),
        i.state = {
            inputValue: "",
            responseData: {},
            lastSsbHeight: 0
        },
        i.ssbWrapperRef = React.createRef(),
        i
    }
    return _createClass(n, [{
        key: "componentDidMount",
        value: function() {
            this.setState({
                lastSsbHeight: this.ssbWrapperRef.current.clientHeight
            }),
            this.props.search.addEventListener("input", this.onUpdate),
            window.addEventListener("resize", this.activateScroll),
            window.addEventListener("orientationchange", this.activateScroll),
            window.addEventListener("resize", this.setTop),
            window.addEventListener("orientationchange", this.setTop),
            window.addEventListener("touchstart", this.hidePhoneKeyboard)
        }
    }, {
        key: "componentDidUpdate",
        value: function() {
            this.ssbWrapperRef.current.clientHeight > this.state.lastSsbHeight && (this.activateScroll(),
            this.setState({
                lastSsbHeight: this.ssbWrapperRef.current.clientHeight
            })),
            this.setTop()
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            this.props.search.removeEventListener("input", this.onUpdate),
            window.removeEventListener("resize", this.activateScroll),
            window.removeEventListener("orientationchange", this.activateScroll),
            window.removeEventListener("resize", this.setTop),
            window.removeEventListener("orientationchange", this.setTop),
            window.removeEventListener("touchstart", this.hidePhoneKeyboard)
        }
    }, {
        key: "render",
        value: function() {
            var e = this;
            return React.createElement("div", {
                className: "ssb-wrapper",
                ref: this.ssbWrapperRef,
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 255,
                    columnNumber: 13
                }
            }, this.getNumberOfProducts() > 0 && React.createElement("div", {
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 259,
                    columnNumber: 21
                }
            }, React.createElement("div", {
                className: "ssb-category-products-header",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 260,
                    columnNumber: 25
                }
            }, this.props.locProducts, " ", "(", this.getNumberOfProducts(), ")"), React.createElement("ul", {
                className: "ssb-products",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 268,
                    columnNumber: 25
                }
            }, this.getItems().map((function(t) {
                return React.createElement("li", {
                    className: "ssb-product",
                    key: t.id,
                    __self: e,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 273,
                        columnNumber: 37
                    }
                }, React.createElement("a", {
                    href: t.link,
                    __self: e,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 274,
                        columnNumber: 41
                    }
                }, t.image ? React.createElement("div", {
                    className: "ssb-product-image",
                    __self: e,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 278,
                        columnNumber: 53
                    }
                }, React.createElement("img", {
                    src: t.image,
                    alt: "item image",
                    __self: e,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 279,
                        columnNumber: 57
                    }
                })) : React.createElement("div", {
                    className: "ssb-product-image wnd-empty-thumbnail",
                    __self: e,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 282,
                        columnNumber: 53
                    }
                }), React.createElement("div", {
                    className: "ssb-product-texts",
                    __self: e,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 288,
                        columnNumber: 45
                    }
                }, React.createElement("div", {
                    className: "ssb-product-name",
                    dangerouslySetInnerHTML: {
                        __html: t.name
                    },
                    __self: e,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 289,
                        columnNumber: 49
                    }
                }), React.createElement("div", {
                    className: "ssb-product-price",
                    __self: e,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 293,
                        columnNumber: 49
                    }
                }, t.price))))
            }
            )))), React.createElement("div", {
                className: "ssb-view-all",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 308,
                    columnNumber: 17
                }
            }, React.createElement("a", {
                href: this.getResultPageLink(),
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 309,
                    columnNumber: 21
                }
            }, this.props.locAllSearchResults)))
        }
    }]),
    n
}();
$(document).ready((function() {
    var e = function() {
        var e = document.querySelector(".search-results-inner")
          , t = document.querySelector(".search-bar-input")
          , n = document.querySelector(".search-results");
        ReactDOM.render(React.createElement(SearchSuggestBox, {
            search: t,
            searchResults: n,
            locProducts: wnd.$system.labels["wnd.pc.SearchResultsZone.productsTitle"],
            locAllSearchResults: wnd.$system.labels["wnd.pc.SearchBlock.allResults"],
            searchPrefix: wnd.$system.searchPrefix,
            __self: this,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 329,
                columnNumber: 29
            }
        }), e)
    }
      , t = document.getElementsByTagName("body")[0];
    (t.classList.contains("wnd-s-i") || t.classList.contains("wnd-s-b")) && e(),
    $(document).off("wnd-site-search-activated").on("wnd-site-search-activated", (function() {
        e()
    }
    ))
}
));
var bodyElm = $("body")
  , checkAndMoveOverlay = function() {
    $(".search-active").length && $(".fullscreen-overlay").length && ($(".wnd-s-b").length ? isCMS() ? "relative" === $(".search-bar").css("position") && $(".fullscreen-overlay").parent().hasClass("search") && ($(".search-bar-input").val().length || (fullscreenOverlay.removeOverlay("search-overlay"),
    $(".search").removeClass("open"),
    $(bodyElm).removeClass("search-active"))) : "fixed" === $(".search-bar").css("position") ? $(".fullscreen-overlay").parent().hasClass("l-w") && $(".fullscreen-overlay").appendTo(".search") : "relative" === $(".search-bar").css("position") && $(".fullscreen-overlay").parent().hasClass("search") && ($(".search-bar-input").val().length ? $(".fullscreen-overlay").appendTo(".l-w") : (fullscreenOverlay.removeOverlay("search-overlay"),
    $(".search").removeClass("open"),
    $(bodyElm).removeClass("search-active"))) : $(".wnd-s-i").length && $(".l-sidebar").length && (isCMS() || ("static" === $(".l-h").css("position") ? $(".fullscreen-overlay").parent().hasClass("l-w") && $(".fullscreen-overlay").appendTo(".search") : $(".fullscreen-overlay").parent().hasClass("search") && $(".fullscreen-overlay").appendTo(".l-w"))))
}
  , showSearch = function(e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
      , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
      , i = null;
    if (i = isCMS() ? e : $(".wnd-s-b").length && "fixed" !== $(".search-bar").css("position") || $(".l-sidebar").length && "fixed" === $(".l-h").css("position") ? $("#wrapper") : e,
    fullscreenOverlay.addOverlay(i, "append", "search-overlay"),
    $(window).on("resize orientationchange", checkAndMoveOverlay),
    isCMS()) {
        var o = document.createEvent("Event");
        o.initEvent("wnd-open-menu", !0, !0),
        document.getElementsByClassName("menu-wrapper")[0].dispatchEvent(o)
    }
    setTimeout((function() {
        "fixed" === $(".search-bar").css("position") && $(".search-bar-input").val(""),
        $(bodyElm).addClass("search-active"),
        $(e).addClass("open"),
        n && $(".search-bar-input").focus(),
        fullscreenOverlay.bindOverlayClose("click", (function() {
            hideSearch(t)
        }
        ))
    }
    ), 10)
}
  , hideSearch = function() {
    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
    if ($(".fullscreen-overlay").on("transitioncancel animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", (function(e) {
        fullscreenOverlay.removeOverlay("search-overlay"),
        $(window).off("resize orientationchange", checkAndMoveOverlay)
    }
    )),
    $(".search").removeClass("open"),
    $(bodyElm).removeClass("search-active"),
    e && $(".search-bar-input").val(""),
    isCMS()) {
        var t = document.createEvent("Event");
        t.initEvent("wnd-close-menu", !0, !0),
        document.getElementsByClassName("menu-wrapper")[0].dispatchEvent(t)
    }
    $(".search-results").css("display", "none");
    var n = document.getElementsByClassName("ssb-wrapper")[0]
      , i = document.getElementsByClassName("s-f")[0];
    n.style.top = "",
    i.classList.contains("invisible") && i.classList.remove("invisible")
}
  , bindSearchBarInput = function() {
    $(".search-bar-input").off("input propertychange paste click keyup").on("input propertychange paste click keyup", (function(e) {
        if ("Enter" === e.key || 13 === e.keyCode) {
            var t = $(".search-bar-input");
            $(t).val().length && window.location.assign("".concat(wnd.$system.searchPrefix, "?text=").concat($(t).val()))
        }
        var n = document.getElementsByClassName("search-bar-input")[0].value
          , i = $(".search");
        n.length && !$(".fullscreen-overlay").length ? showSearch(i, !1, !1) : n.length || $(i).hasClass("open") && "fixed" !== $(".search-bar").css("position") && hideSearch(!1)
    }
    ))
};
function hidingEmptyFooter() {
    if (document.body.classList.contains("wnd-fe")) {
        var e = document.querySelectorAll(".s-f-cr .inline-text")
          , t = document.getElementsByClassName("sf")[0]
          , n = document.getElementsByClassName("lang-select")[0]
          , i = document.getElementsByClassName("ccy-select")[0]
          , o = document.getElementsByClassName("s-f-l-w")[0]
          , r = !0
          , a = !0;
        void 0 !== e && [].forEach.call(e, (function(e) {
            "" === e.querySelector("span").innerHTML.trim() ? e.className += " empty" : r = !1
        }
        )),
        void 0 !== t && "" === t.querySelector(".sf-c").innerHTML.trim() ? t.className += " empty" : a = !1,
        1 == r && 1 == a && "" === n.innerHTML.trim() && "" === i.innerHTML.trim() && (o.style.display = "none",
        $(".s-f-map").find(".s-bg-w").css("bottom", "0px"),
        $(".s-f-map").find(".s-o").css("margin-bottom", "45px"),
        $(".s-f-map-new").find(".s-bg-w").css("bottom", "0px"),
        $(".s-f-map-new").find(".s-o").css("margin-bottom", "45px"),
        $(".s-f-edit").find(".s-bg").css("bottom", "0px"),
        $(".s-f-edit").find(".s-o").css("margin-bottom", "45px"))
    }
}
function adjustFooterBg() {
    "none" !== document.getElementsByClassName("s-f-l-w")[0].style.display && ($(".s-f-map").find(".s-bg-w").css("bottom", $(".s-f-l-w").outerHeight()),
    $(".s-f-map-new").find(".s-bg-w").css("bottom", $(".s-f-l-w").outerHeight()),
    document.body.classList.contains("l-boxed") && $(".s-f-edit").find(".s-bg").css("bottom", $(".s-f-l-w").outerHeight()))
}
function equalColsHeight() {
    hidingEmptyFooter(),
    adjustFooterBg();
    var e, t = 0, n = 0;
    "both" != $(".s-f-map .s-f-col-map").css("clear") ? ($(".s-f-map .s-f-col").each((function() {
        n < 2 && (e = $(this).outerHeight(!0)) > t && (t = e),
        n++
    }
    )),
    $(".s-f-map .s-f-col-map").height(t)) : "both" == $(".s-f-map .s-f-col-map").css("clear") && $(".s-f-map .s-f-col-map").css("height", "")
}
$(document).ready((function() {
    var e = function() {
        $(".search-icon").off().on("click", (function() {
            var e = $(".search");
            $(e).hasClass("open") ? $(".s-hn").hasClass("wnd-mt-sidebar") && hideSearch() : showSearch(e, !0, !0)
        }
        )),
        $(".search-bar-submit").off("click").on("click", (function() {
            var e = $(".search-bar-input");
            $(e).val().length && window.location.assign("".concat(wnd.$system.searchPrefix, "?text=").concat($(e).val()))
        }
        )),
        bindSearchBarInput(),
        $(".search-bar-close").off().on("click", hideSearch),
        $(".fullscreen-overlay").off().on("click", hideSearch)
    };
    e(),
    $(document).on("search-moved", ".s-hn", e),
    $(document).on("wnd-content-change", ".s-hn", e)
}
)),
$(document).ready((function() {
    var e = function() {
        return $("body").hasClass("img-t-u") ? "outside" : "inside"
    }
      , t = e()
      , n = function(t) {
        $(t).horizontal({
            wrapper: ".b-gal-w",
            photo: ".b-gal-item",
            image_item: ".b-gal-img",
            image: "img",
            title_wrapper: ".b-gal-t",
            title_content: "b-gal-t > span > span",
            title: e()
        })
    }
      , i = function(e, t) {
        var i = e;
        t = void 0 === t ? 400 : t;
        setTimeout((function() {
            n(i)
        }
        ), t)
    }
      , o = function(t) {
        $(t).feed({
            type: "gallery",
            title: e(),
            title_class: ".b-gal-t",
            wrapper: ".b-gal-w",
            item: ".b-gal-item",
            item_wrapper: ".b-gal-img",
            video_thumb: "",
            bottom_line: "true"
        })
    }
      , r = function(e, t) {
        var n = e;
        t = void 0 === t ? 400 : t;
        setTimeout((function() {
            o(n)
        }
        ), t)
    }
      , a = function(e) {
        $(e).slideShow({
            isCMS: isCMS(),
            autoplay: !0,
            blockClass: "b-gal-slideshow",
            contentBlockElm: ".b-gal-c",
            photoListElm: ".b-gal-list",
            photoItemElm: ".b-gal-item",
            photoPrevElm: ".b-gal-arrow-prev",
            photoNextElm: ".b-gal-arrow-next",
            photoItemLinkElm: ".b-gal-a",
            photoItemImageDivElm: ".b-gal-img",
            navBlockWrapperElm: ".b-gal-nav",
            navBlockContentElm: ".b-gal-nav-content",
            navBlockPrevElm: ".gallery-nav-arrow-prev",
            navBlockNextElm: ".gallery-nav-arrow-next",
            slideshowPhotoClass: "b-gal-item"
        })
    }
      , s = function(e, t) {
        for (var n in e)
            $("#" + n).length <= 0 && delete e[n];
        return $(".b-gal").each((function() {
            var t, n = $(this).attr("id"), o = $(this);
            $(this).hasClass("b-gal-classic") ? t = "classic" : $(this).hasClass("b-gal-slideshow") ? t = "slideshow" : $(this).hasClass("b-gal-feed") ? t = "feed" : $(this).hasClass("b-gal-horizontal") && (t = "horizontal"),
            void 0 === e[n] ? (e[n] = t,
            "slideshow" === t && a(o),
            "feed" === t && r(o, 400),
            "horizontal" === t && i(o, 400)) : e[n] != t && ("classic" !== t && $("#" + n).find(".clone").remove(),
            "slideshow" === t && a($("#" + n)),
            "feed" === t && ($("#" + n).find(".clone").remove(),
            r($("#" + n), 400)),
            "horizontal" === t && i($("#" + n), 400),
            e[n] = t)
        }
        )),
        e
    };
    if (isCMS()) {
        var l = s([]);
        $(document).on("wnd-content-change", ".b-gal", (function() {
            s(l, $(this))
        }
        )),
        $(document).on("wnd-content-change", (function(e) {
            $(e.target).hasClass("section") && s(l)
        }
        )),
        $(document).on("wnd-redraw", ".content", (function() {
            $(this).find(".b-gal-feed").each((function() {
                r($(this), 400)
            }
            )),
            $(this).find(".b-gal-horizontal").each((function() {
                i($(this), 400)
            }
            ))
        }
        )),
        window.addEventListener("resize", (function() {
            $(".b-gal-feed").each((function() {
                r($(this))
            }
            )),
            $(".b-gal-horizontal").each((function() {
                n($(this))
            }
            ))
        }
        )),
        window.addEventListener("orientationchange", (function() {
            $(".b-gal-feed").each((function() {
                o($(this))
            }
            )),
            $(".b-gal-horizontal").each((function() {
                n($(this))
            }
            ))
        }
        )),
        $("body").on("wnd-redraw", (function() {
            var i = e();
            i != t && ($(".b-gal-feed").each((function() {
                o($(this))
            }
            )),
            $(".b-gal-horizontal").each((function() {
                n($(this))
            }
            )),
            t = i)
        }
        ))
    } else
        $(".b-gal").each((function() {
            $(this).hasClass("b-gal-slideshow") && a($(this)),
            $(this).hasClass("b-gal-feed") && r($(this), 400),
            $(this).hasClass("b-gal-horizontal") && i($(this), 400)
        }
        )),
        window.addEventListener("resize", (function() {
            $(".b-gal-feed").each((function() {
                r($(this))
            }
            )),
            $(".b-gal-horizontal").each((function() {
                n($(this))
            }
            ))
        }
        )),
        window.addEventListener("orientationchange", (function() {
            $(".b-gal-feed").each((function() {
                o($(this))
            }
            )),
            $(".b-gal-horizontal").each((function() {
                n($(this))
            }
            ))
        }
        ))
}
)),
$(document).ready((function() {
    $(".form.b-form-light").forms()
}
)),
$(document).ready((function() {
    var e = function() {
        $(".blog-feed").feed({
            type: "blog",
            title: "outside",
            title_class: ".item-content",
            wrapper: ".blog-container",
            item: ".item",
            item_wrapper: ".item-wrapper",
            video_thumb: ".thumbnail",
            bottom_line: "true",
            pager: ".pager"
        })
    }
      , t = function() {
        $(".blog-feed-board").feed({
            type: "blog",
            title: "outside",
            title_class: ".item-content",
            wrapper: ".blog-container",
            item: ".item",
            item_wrapper: ".item-wrapper",
            video_thumb: ".thumbnail",
            bottom_line: "true",
            pager: ".pager"
        })
    };
    $(".blog-feed")[0] && (e(),
    setTimeout((function() {
        e()
    }
    ), 500),
    window.addEventListener("resize", (function() {
        e()
    }
    )),
    window.addEventListener("orientationchange", (function() {
        e()
    }
    ))),
    $(".blog-feed-board")[0] && (t(),
    window.addEventListener("resize", (function() {
        t()
    }
    )),
    window.addEventListener("orientationchange", (function() {
        t()
    }
    ))),
    isCMS() && ($(document).on("wnd-redraw", ".blog", (function() {
        $(this).hasClass("blog-feed") && $(this).feed({
            type: "blog",
            title: "outside",
            title_class: ".item-content",
            wrapper: ".blog-container",
            item: ".item",
            item_wrapper: ".item-wrapper",
            video_thumb: ".thumbnail",
            bottom_line: "true",
            pager: ".pager"
        }),
        window.addEventListener("resize", (function() {
            e()
        }
        )),
        window.addEventListener("orientationchange", (function() {
            e()
        }
        ))
    }
    )),
    $(document).on("wnd-redraw", ".blog", (function() {
        $(this).hasClass("blog-feed-board") && $(this).feed({
            type: "blog",
            title: "outside",
            title_class: ".item-content",
            wrapper: ".blog-container",
            item: ".item",
            item_wrapper: ".item-wrapper",
            video_thumb: ".thumbnail",
            bottom_line: "true",
            pager: ".pager"
        }),
        window.addEventListener("resize", (function() {
            t()
        }
        )),
        window.addEventListener("orientationchange", (function() {
            t()
        }
        ))
    }
    )),
    $(document).on("wnd-redraw", ".content", (function() {
        $(".blog-feed")[0] && setTimeout((function() {
            e()
        }
        ), 400)
    }
    )),
    $(document).on("wnd-redraw", ".content", (function() {
        $(".blog-feed-board")[0] && setTimeout((function() {
            t()
        }
        ), 400)
    }
    )))
}
)),
$(document).ready((function() {
    var e = function(e) {
        for (var t in e)
            $("#" + t).length <= 0 && delete e[t];
        return $(".eshop").each((function() {
            var t, n = $(this).attr("id"), i = $(this);
            t = $(this).hasClass("eshop-carousel") ? "carousel" : $(this).hasClass("eshop-slider") ? "slider" : "grid",
            void 0 === e[n] ? (e[n] = t,
            "slider" === t && $(i).productSlider({
                isCMS: !0,
                autoplay: !0
            }),
            "carousel" === t && $(i).productCarousel({
                isCMS: !0,
                autoplay: !0
            })) : e[n] != t && ("carousel" !== t && $("#" + n).find(".clone").remove(),
            "slider" === t && $("#" + n).productSlider({
                isCMS: !0,
                autoplay: !0
            }),
            "carousel" === t && $("#" + n).productCarousel({
                isCMS: !0,
                autoplay: !0
            }),
            e[n] = t)
        }
        )),
        e
    };
    if (isCMS()) {
        var t = e([])
          , n = debounce((function(n) {
            e(t)
        }
        ), 500);
        $(document).on("wnd-dynamic-content-change", ".eshop", n),
        $(document).on("wnd-content-change", (function(n) {
            ($(n.target).hasClass("section") || $(n.target).hasClass("s")) && setTimeout((function() {
                e(t)
            }
            ), 500)
        }
        ))
    } else
        $(".eshop").each((function() {
            $(this).hasClass("eshop-slider") && $(this).productSlider({
                isCMS: !1,
                autoplay: !0
            }),
            $(this).hasClass("eshop-carousel") && $(this).productCarousel({
                isCMS: !1,
                autoplay: !0
            })
        }
        ));
    var i = function() {
        if ($(".eshop").hasClass("show-filter")) {
            if ($(".eshop-filter").find("ul li.wnd-with-subcategory").each((function() {
                ($(this).parent().hasClass("ef-level-1") || $(this).parent().hasClass("ef-level-2")) && ($(this).find("ul + .ef-arrow").length || $(this).append('<a class="ef-arrow ef-down" href="#"></a>'),
                ($(this).parent().hasClass("open") || $(this).hasClass("hover")) && $(this).find(".ef-arrow").removeClass("ef-down").addClass("ef-up")),
                $(this).parent().hasClass("ef-level-3") && $(this).removeClass("wnd-with-subcategory")
            }
            )),
            $("li.wnd-with-subcategory a.wnd-link").hasClass("selected")) {
                var e = $("li.wnd-with-subcategory a.selected");
                e.next("ul.ef-level-2").addClass("open"),
                e.next("ul.ef-level-3").addClass("open"),
                e.closest("ul.ef-level-2").addClass("open"),
                e.closest("ul.ef-level-3").addClass("open")
            }
            $(".eshop-filter ul").each((function() {
                $(this).hasClass("open") ? $(this).next(".ef-arrow").removeClass("ef-down").addClass("ef-up") : $(this).next(".ef-arrow").removeClass("ef-up").addClass("ef-down")
            }
            ))
        }
    }
      , o = function() {
        var e = $("li.wnd-with-subcategory a.ef-arrow")
          , t = function() {
            e.clickFlag = !1
        };
        $(e).off("touchend MSPointerDown pointerdown click").on("touchend MSPointerDown pointerdown click", (function(n) {
            if (n.preventDefault(),
            n.stopImmediatePropagation(),
            n.stopPropagation(),
            e.clickFlag)
                return !1;
            e.clickFlag = !0,
            setTimeout(t, 500);
            var i = $(this).parent().children("ul");
            $(this).hasClass("ef-down") ? ($(this).parent().addClass("hover"),
            $(this).removeClass("ef-down").addClass("ef-up"),
            $(i).addClass("open")) : $(this).hasClass("ef-up") && ($(this).parent().removeClass("hover"),
            $(this).removeClass("ef-up").addClass("ef-down"),
            $(i).removeClass("open"))
        }
        ))
    };
    i(),
    o(),
    $(document).on("wnd-dynamic-content-change wnd-content-change wnd-redraw", ".eshop", (function() {
        i(),
        o()
    }
    )),
    $("body").removeClass("eshop-hide")
}
)),
$(document).ready((function() {
    function e() {
        var e = $(".wnd-page")
          , t = $(".eshop-cart-checkout");
        if (t.length && "fixed" === t.css("position") && !$(e).hasClass("wnd-cart-empty")) {
            var n = t.outerHeight();
            $(".wnd-page").css("paddingBottom", n),
            localStorage.setItem("WTF_CHECKOUT_HEIGHT", n)
        }
        t.length && "fixed" !== t.css("position") && $(e).css("paddingBottom", ""),
        $(e).hasClass("wnd-cart-empty") && $(e).css("paddingBottom", "")
    }
    e(),
    $(window).on("resize orientationchange", e),
    $(".wnd-page").on("wnd-cart-empty", (function() {
        e()
    }
    ))
}
)),
$(document).ready((function() {
    function e() {
        var e = $(".product-cart");
        if (e.length && "fixed" === e.css("position")) {
            var t = e.outerHeight();
            $(".wnd-page").css("paddingBottom", t),
            localStorage.setItem("WTF_ADDTOCART_HEIGHT", t)
        }
        e.length && "fixed" !== e.css("position") && $(".wnd-page").css("paddingBottom", "")
    }
    e(),
    $(window).on("resize orientationchange", e);
    var t = $(".product-gallery");
    t[0] && t.each((function() {
        var e;
        e = $(this),
        $(e).slideShow({
            isCMS: isCMS(),
            isEshopGallery: !0,
            autoplay: !1,
            blockClass: "product-gallery",
            slideshowPhotoClass: "product-gallery-photo"
        })
    }
    )),
    isCMS() || ($(document).on("wnd-add-to-cart", ".product-cart", (function(e) {
        $(this).addClass("wnd-waiting").removeClass("wnd-button-ready")
    }
    )),
    $(document).on("wnd-add-to-cart-done", ".product-cart", (function(e) {
        var t = e.target;
        $(".cart").addClass("wnd-add-product"),
        setTimeout((function() {
            $(t).parent().addClass("wnd-waiting-done")
        }
        ), 500),
        setTimeout((function() {
            $(t).parent().removeClass("wnd-waiting-done").removeClass("wnd-waiting").addClass("wnd-button-ready"),
            $(".cart").removeClass("wnd-add-product")
        }
        ), 1500)
    }
    )),
    $(document).on("wnd-add-to-cart-error", ".product-cart", (function(e) {
        $(this).find(".product-cart-error").addClass("visible");
        var t = $(this).find(".product-cart-error");
        setTimeout((function() {
            t.animate({
                opacity: 0
            }, 300, (function() {
                t.removeClass("visible"),
                t.attr("style", "")
            }
            ))
        }
        ), 3e3),
        $(".product-variants-group").each((function() {
            "NOTSELECTED" === $(this).find("select").val() && $(this).addClass("wnd-validate-error")
        }
        )),
        "fixed" === $(".product-cart").css("position") && $("html, body").animate({
            scrollTop: $(".product-variants-group").offset().top - $(".header-fixed").height() - 20
        }, 500)
    }
    )))
}
)),
$(document).ready((function() {
    var e = $(".wnd-page").hasClass("wnd-cart")
      , t = $("body").hasClass("wt-product")
      , n = $(".eshop-cart-checkout")
      , i = $(".product-cart")
      , o = $("body")
      , r = $(".s-hn-bottom").length && !$(".s-hn").hasClass("hm-hidden")
      , a = $(".wnd-free-stripe").length ? $(".wnd-free-stripe") : null;
    if (r && $(o).removeClass("wnd-free-bar-fixed").addClass("wnd-free-bar-static"),
    !isCMS() && ($(".wnd-free-bar-fixed").length || e || t)) {
        var s = function() {
            var r = parseInt($("body").css("paddingBottom"))
              , s = parseInt($(".wnd-free-stripe").outerHeight());
            "fixed" === $(a).css("position") ? r !== s && $(o).css("paddingBottom", s) : $(o).css("paddingBottom", 0),
            e && ("fixed" === $(n).css("position") ? $(n).css("bottom", s) : $(n).css("bottom", "")),
            t && ("fixed" === $(i).css("position") ? $(i).css("bottom", s) : $(i).css("bottom", ""))
        };
        $(window).on("resize orientationchange", s),
        s()
    }
}
)),
$(document).ready((function() {
    setTimeout((function() {
        $(".cb-basic").toggleClass("close open")
    }
    ), 300),
    $(".cb-button-advanced").off().on("click", (function(e) {
        e.preventDefault(),
        e.stopImmediatePropagation(),
        e.stopPropagation(),
        $(".cb-basic").toggleClass("open close"),
        $(".cb-advanced").toggleClass("close open"),
        $(".l").css("overflow-y", "hidden")
    }
    )),
    $(".cb-close-basic").off().on("click", (function(e) {
        e.preventDefault(),
        e.stopImmediatePropagation(),
        e.stopPropagation(),
        $(".cb-basic").toggleClass("open close")
    }
    )),
    $(".cb-close-advanced").off().on("click", (function(e) {
        e.preventDefault(),
        e.stopImmediatePropagation(),
        e.stopPropagation(),
        $(".cb-advanced").toggleClass("open close"),
        $(".cb-basic").toggleClass("close open"),
        $(".l").css("overflow-y", "initial")
    }
    )),
    $(document).on("keydown", (function(e) {
        "Escape" != e.key && 27 !== e.keyCode || ($(".cb-advanced").toggleClass("open close"),
        $(".cb-basic").toggleClass("close open"),
        $(".l").css("overflow-y", "initial"))
    }
    )),
    $(".cb-save-advanced").off().on("click", (function(e) {
        e.preventDefault(),
        e.stopImmediatePropagation(),
        e.stopPropagation(),
        $(".cb-advanced").toggleClass("open close"),
        $(".l").css("overflow-y", "initial")
    }
    ))
}
)),
$(document).ready((function() {
    var e = $(".wt-blogpost").length
      , t = !1;
    isStickyByDefault() && $.stickyHeader({
        fixed: ".s-hn .h-f",
        bg: ".s-hn .h-f",
        mainHeader: ".s-hn",
        offsetElements: {
            ".s-hn .h-f": "offsetTop"
        }
    });
    var n = function() {
        setTimeout((function() {
            if ($(".s-hn").hasClass("s-hn-centered")) {
                if (setTimeout((function() {
                    $(".cart-and-mobile .cart").length || $("#menu ul.level-1").length ? $(".s-hn").removeClass("menu-hidden") : $(".s-hn").addClass("menu-hidden")
                }
                ), 1),
                !$(".s-hn .logo").length)
                    return;
                $(".s-hm").css("marginTop", -1 * parseInt($(".s-hn").outerHeight())),
                $(".s-hm").css("paddingTop", parseInt($(".s-hn").outerHeight())),
                $(".s-hn").hasClass("hn-no-bg") ? ($(".s-hm").find(".s-bg").css("top", -1 * parseInt($(".s-hn").outerHeight())),
                setTimeout((function() {
                    $(".s-hm").css("marginTop", -1 * parseInt($(".s-hn").outerHeight())),
                    $(".s-hm").css("paddingTop", parseInt($(".s-hn").outerHeight()))
                }
                ), 1)) : $(".s-hm").find(".s-bg").attr("style", "")
            }
        }
        ), 10)
    }
      , i = function() {
        if (!e) {
            var n = $(".hb-on").length ? $(".s-hb").height() : 0;
            $(".s-hm").hasClass("s-hm-hidden") ? $(".s-hn").attr("style", "") : window.requestAnimationFrame((function() {
                $(".s-hn").css("top", n + $(".s-hm").height() - $(".s-hn").outerHeight() + "px")
            }
            ))
        }
        if (!t) {
            var i = document.createEvent("Event");
            i.initEvent("navloaded", !0, !0),
            document.getElementsByClassName("s-hn")[0].dispatchEvent(i),
            t = !0
        }
    };
    "undefined" == typeof ResizeObserver && $(document).on("wnd-content-change", ".s-hn, .s-hm", (function(e) {
        $(e.target).hasClass("logo") || $(".s-hn").hasClass("s-hn-bottom") && !$(".s-hn").hasClass("hm-hidden") && i()
    }
    )),
    $(document).on("mobile-menu-open mobile-menu-close", ".s-hn", (function(e) {
        $(".s-hn").hasClass("s-hn-bottom") && !$(".s-hn").hasClass("hm-hidden") && setTimeout(i, 20)
    }
    )),
    $(document).on("wnd-redraw", ".s-hn, .s-hm", (function(e) {
        n(),
        o(),
        $(".s-hn").hasClass("s-hn-bottom") && !$(".s-hn").hasClass("hm-hidden") && i()
    }
    )),
    $(window).on("resize orientationchange", (function() {
        $(".s-hn").hasClass("sticky") || ($(".s-hn").hasClass("s-hn-bottom") && !$(".s-hn").hasClass("hm-hidden") && i(),
        $(".s-hn").hasClass("s-hn-centered") && !$(".s-hn").hasClass("hm-hidden") && n())
    }
    )),
    n(),
    $(".s-hn").hasClass("s-hn-bottom") && !$(".s-hn").hasClass("hm-hidden") && i();
    var o = function() {
        if ("undefined" != typeof ResizeObserver) {
            void 0 !== e && e.unobserve(document.querySelector(".s-hm"));
            var e = new ResizeObserver((function(e) {
                for (var t = 0; t < e.length; t++) {
                    e[t];
                    if ($(".s-hn").hasClass("sticky"))
                        return;
                    $(".s-hn").hasClass("s-hn-bottom") && !$(".s-hn").hasClass("hm-hidden") && i()
                }
            }
            ));
            e.observe(document.querySelector(".s-hm"))
        }
    };
    isCMS() && !isPreview() && o()
}
)),
function(e) {
    e.extend({
        menuModule: function(t) {
            var n, i = e(".s-hn"), o = e(i).hasClass("wnd-mt-classic") || e(i).hasClass("wnd-mt-boxed"), r = function() {
                this.id = 1 + Math.floor(100 * Math.random()),
                this.headerElm = e(".s-hn"),
                this.bodyElm = e("body").get(0),
                this.menu = e("#menu"),
                this.menuType = void 0 !== t ? t : this.getMenuType(),
                this.headerType = this.getHeaderType(),
                this.menuDiv = this.menu.find(" > div"),
                this.menuBlock = null,
                this.toolbarElm = e("#wnd_toolbar"),
                this.element = document.getElementById(this.menuDiv.attr("id")),
                this.navline = "vertical" === this.menuType ? e(".s-c > .n-l") : e(".n-l > .s-c"),
                e(".n-l-w > .s-c").length && (this.navline = e(".n-l-w > .s-c")),
                this.logo = e(".logo"),
                this.homepageLi = e("li.wnd-homepage"),
                this.isBottomNavline = e(".s-hn").hasClass("s-hn-bottom"),
                this.isStandardMenu = e(this.headerElm).hasClass("wnd-mt-classic") || e(this.headerElm).hasClass("wnd-mt-boxed"),
                this.menuAlign = "centered" === this.menu.attr("data-align") ? "centered" : "top",
                this.roundToListItems = !1,
                this.keys = {
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1,
                    32: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1
                },
                this.clickFlag = !1,
                this.initFlag = !1,
                this.mouseFlag = !1,
                this.touchFlag = !1,
                this.tabletTouchFlag = !1,
                this.initActiveFlag = !1,
                this.resizeSwitch = isMobileMenu(),
                this.resizeFlag = !1,
                this.orientationChangeFlag = !1,
                this.scrollflag = !1,
                this.lastMenuState = isMobileMenuCSS(),
                this.moreText = e(".more-text").text(),
                this.windowWidth = e(window).width(),
                this.windowHeight = e(window).height(),
                this.scrollLimit = this.isBottomNavline && !e(".wt-home").length ? 0 : 180,
                this.magicConstant = 20,
                this.navlineWidth = 0,
                this.logoWidth = 0,
                this.cmsBarHeight = isCMS() ? e(this.toolbarElm).outerHeight(!0) : 0,
                this.menuItemsHeightStorage = void 0,
                this.realHeightStorage = void 0,
                this.originalLogoHeight = this.logo.height(),
                this.menuItemHeight = 0,
                this.cmsBarHeight = isCMS() ? e(this.toolbarElm).outerHeight(!0) : 0,
                this.homepageLi.length > 0 ? this.menuItemHeight = this.menu.find(".wnd-homepage").outerHeight(!0) : this.menuItemHeight = this.menu.find("ul > li"),
                "none" === this.menu.css("display") && (this.menu.show(),
                this.menuItemHeight = this.homepageLi.outerHeight(!0),
                this.menu.hide()),
                this.scrollbarWidth = this.getScrollbarWidth(),
                this.bindComplete = !1
            };
            r.prototype.reloadObject = function() {
                this.headerElm = e(".s-hn"),
                this.bodyElm = e("body").get(0),
                this.menu = e("#menu"),
                this.menuType = void 0 !== t ? t : this.getMenuType(),
                this.headerType = this.getHeaderType(),
                this.menuDiv = this.menu.find(" > div"),
                this.menuBlock = null,
                this.toolbarElm = e("#wnd_toolbar"),
                this.element = document.getElementById(this.menuDiv.attr("id")),
                this.navline = "vertical" === this.menuType ? e(".s-c > .n-l") : e(".n-l > .s-c"),
                e(".n-l-w > .s-c").length && (this.navline = e(".n-l-w > .s-c")),
                this.logo = e(".logo"),
                this.homepageLi = e("li.wnd-homepage"),
                this.isBottomNavline = e(".s-hn").hasClass("s-hn-bottom"),
                this.isStandardMenu = e(this.headerElm).hasClass("wnd-mt-classic") || e(this.headerElm).hasClass("wnd-mt-boxed"),
                this.menuAlign = "centered" === this.menu.attr("data-align") ? "centered" : "top",
                this.roundToListItems = !1,
                this.keys = {
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1,
                    32: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1
                },
                this.clickFlag = !1,
                this.initFlag = !1,
                this.mouseFlag = !1,
                this.touchFlag = !1,
                this.tabletTouchFlag = !1,
                this.initActiveFlag = !1,
                this.resizeFlag = !1,
                this.orientationChangeFlag = !1,
                this.scrollflag = !1,
                this.moreText = e(".more-text").text(),
                this.windowWidth = e(window).width(),
                this.windowHeight = e(window).height(),
                this.scrollLimit = this.isBottomNavline && !e(".wt-home").length ? 0 : 180,
                this.magicConstant = 20,
                this.navlineWidth = 0,
                this.logoWidth = 0,
                this.cmsBarHeight = isCMS() ? e(this.toolbarElm).outerHeight(!0) : 0,
                this.menuItemsHeightStorage = void 0,
                this.realHeightStorage = void 0,
                this.originalLogoHeight = this.logo.height(),
                this.menuItemHeight = 0,
                this.cmsBarHeight = isCMS() ? e(this.toolbarElm).outerHeight(!0) : 0,
                this.homepageLi.length > 0 ? this.menuItemHeight = this.menu.find(".wnd-homepage").outerHeight(!0) : this.menuItemHeight = this.menu.find("ul > li"),
                "none" === this.menu.css("display") && (this.menu.show(),
                this.menuItemHeight = this.homepageLi.outerHeight(!0),
                this.menu.hide()),
                this.scrollbarWidth = this.getScrollbarWidth(),
                this.bindComplete = !1
            }
            ,
            r.prototype.compensateForScrollbar = function(t) {
                "compensate" === t ? e(document).height() > e(window).height() && (e("body").css("paddingRight", this.scrollbarWidth),
                this.isFixedNav() && e(".wnd-fixed").css("paddingRight", this.scrollbarWidth)) : "clear" === t && (e("body").css("paddingRight", ""),
                e(".wnd-fixed").css("paddingRight", ""))
            }
            ,
            r.prototype.getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.style.visibility = "hidden",
                e.style.overflow = "scroll",
                e.style.msOverflowStyle = "scrollbar",
                document.body.appendChild(e);
                var t = document.createElement("div");
                e.appendChild(t);
                var n = e.offsetWidth - t.offsetWidth;
                return e.parentNode.removeChild(e),
                n
            }
            ,
            r.prototype.getNavline = function() {
                var t = this;
                t.navline = "vertical" === t.menuType ? e(".s-c > .n-l") : e(".n-l > .s-c"),
                e(".n-l-w > .s-c").length && (t.navline = e(".n-l-w > .s-c"))
            }
            ,
            r.prototype.getMenuType = function() {
                var t = e(".s-hn").attr("class")
                  , n = "undefined";
                return t.indexOf("wnd-mt-classic") > -1 ? n = "standard" : t.indexOf("wnd-mt-sliding") > -1 ? n = "sliding" : t.indexOf("wnd-mt-boxed") > -1 ? n = "boxed" : t.indexOf("wnd-mt-sidebar") > -1 && (n = "vertical"),
                n
            }
            ,
            r.prototype.getHeaderType = function() {
                var t = e(".s-hn").attr("class")
                  , n = "undefined";
                return t.indexOf("s-hn-default") > -1 || t.indexOf("s-hn-slogan") > -1 ? n = "standard" : t.indexOf("s-hn-centered") > -1 ? n = "centered" : t.indexOf("s-hn-sidebar") > -1 && (n = "vertical"),
                n
            }
            ,
            r.prototype.isFixedNav = function() {
                return "fixed" === e(".wnd-fixed").css("position")
            }
            ,
            r.prototype.wndEvent = function(e) {
                if (isCMS()) {
                    var t = document.createEvent("Event");
                    "open" === e && t.initEvent("wnd-open-menu", !0, !0),
                    "close" === e && t.initEvent("wnd-close-menu", !0, !0),
                    "more" === e && t.initEvent("wnd-more-menu", !0, !0),
                    this.element.dispatchEvent(t)
                }
            }
            ,
            r.prototype.recalculateAvailableSpace = function() {
                var t = this
                  , n = parseInt(e(t.logo).outerWidth(!0))
                  , i = parseInt(e(t.navline).width())
                  , o = parseInt(t.logo.height())
                  , r = parseInt(e("li.wnd-homepage").outerHeight(!0));
                t.originalLogoHeight = o,
                n === t.logoWidth && i === t.navlineWidth && t.originalLogoHeight === o && t.menuItemHeight === r || (t.logoWidth = n,
                t.navlineWidth = i,
                t.originalLogoHeight = o,
                t.menuItemHeight = r,
                "vertical" === t.menuType || "sliding" === t.menuType ? t.overflowControlVerticalAndSliding() : t.overflowControl(),
                t.menuControl())
            }
            ,
            r.prototype.closeSubmenu = function(t) {
                var n = this;
                void 0 === t ? e(".level-1 > li.wnd-with-submenu ul").each((function() {
                    (e(this).hasClass("level-2") || e(this).hasClass("level-3") && !e(this).parent().hasClass("wnd-active-path")) && (e(this).removeClass("open"),
                    e(this).parent().removeClass("hover"),
                    e(this).next(".mm-up").addClass("mm-down").removeClass("mm-up")),
                    e(this).hasClass("level-2") && n.unbindSubMenuScroll(e(this))
                }
                )) : ((e(t).hasClass("level-2") || e(t).hasClass("level-3") && !e(t).parent().hasClass("wnd-active-path")) && (e(t).removeClass("open"),
                e(t).parent().removeClass("hover"),
                e(t).next(".mm-up").addClass("mm-down").removeClass("mm-up")),
                e(t).hasClass("level-2") && (n.unbindSubMenuScroll(t),
                n.wndEvent("close")),
                "standard" === n.menuType && e(t).hasClass("level-3") && setTimeout((function() {
                    e(t).closest("ul.level-2").hasClass("open") && n.checkMenuHeight(t)
                }
                ), 400))
            }
            ,
            r.prototype.openSubmenu = function(t) {
                var n = this;
                if (t.hasClass("level-2")) {
                    var i = parseInt(t.outerWidth(!0))
                      , o = e(window).width();
                    if (t.css("opacity", "0)").show(),
                    t.offset().left + i > o && t.addClass("align"),
                    this.isBottomNavline)
                        e(window).scrollTop() < n.scrollLimit ? t.addClass("top") : t.removeClass("top");
                    else
                        t.hasClass("top") && t.removeClass("top");
                    n.wndEvent("open"),
                    setTimeout((function() {
                        n.checkMenuHeight(t)
                    }
                    ), 400)
                }
                t.addClass("open")
            }
            ,
            r.prototype.preventDefaultForScrollKeys = function(e) {
                if (this.keys[e.keyCode])
                    return e.preventDefault(e),
                    !1
            }
            ,
            r.prototype.preventDefaultAction = function(t, i) {
                var o = void 0 === i ? this : i;
                if ((t = t || window.event).stopPropagation(),
                e(t.target).closest(o.menuBlock).length <= 0)
                    t.preventDefault && t.preventDefault(),
                    t.returnValue = !1,
                    "touchend" === t.type && "menu-slider" !== e(t.target).attr("id") && e(".menu-close").trigger("click");
                else if ("menu" === t.target.id || e(t.target).closest("#menu").length > 0) {
                    var r = null
                      , a = e("#menu").height()
                      , s = e("#menu > div").height();
                    if ("mousewheel" === t.type)
                        r = -1 * t.originalEvent.wheelDelta,
                        t.preventDefault(),
                        t.stopPropagation(),
                        t.returnValue = !1;
                    else if ("DOMMouseScroll" === t.type)
                        r = t.originalEvent.detail,
                        t.preventDefault(),
                        t.stopPropagation(),
                        t.returnValue = !1;
                    else if ("wheel" === t.type)
                        r = t.deltaY,
                        t.preventDefault(),
                        t.stopPropagation(),
                        t.returnValue = !1;
                    else if ("touchstart" === t.type)
                        n = t.originalEvent.touches[0].clientY;
                    else if ("touchmove" === t.type) {
                        var l = t.originalEvent.changedTouches[0].clientY
                          , u = o.menu.offset().top
                          , c = o.menuDiv.offset().top;
                        a > s && (t.preventDefault(),
                        t.returnValue = !1),
                        u + a >= c + s ? n > l && (t.preventDefault(),
                        t.returnValue = !1) : u <= c && n < l && (t.preventDefault(),
                        t.returnValue = !1)
                    }
                    null !== r && (t.preventDefault(),
                    e(o.menu).scrollTop(r + e(o.menu).scrollTop())),
                    o.checkScrollers()
                } else
                    t.preventDefault(),
                    t.stopPropagation()
            }
            ,
            r.prototype.enableScroll = function() {
                var t = this;
                e(t.bodyElm).removeEventListener("mousewheel", (function(e) {
                    t.preventDefaultAction(e, t)
                }
                ), {
                    passive: !1
                }),
                e(t.bodyElm).removeEventListener("wheel", (function(e) {
                    t.preventDefaultAction(e, t)
                }
                ), {
                    passive: !1
                }),
                e(t.bodyElm).removeEventListener("DOMMouseScroll", (function(e) {
                    t.preventDefaultAction(e, t)
                }
                ), {
                    passive: !1
                }),
                e(t.bodyElm).removeEventListener("touchstart", (function(e) {
                    t.preventDefaultAction(e, t)
                }
                ), {
                    passive: !1
                }),
                e(t.bodyElm).removeEventListener("touchmove", (function(e) {
                    t.preventDefaultAction(e, t)
                }
                ), {
                    passive: !1
                }),
                e(t.bodyElm).removeEventListener("touchend", (function(e) {
                    t.preventDefaultAction(e, t)
                }
                ), {
                    passive: !1
                }),
                document.onkeydown = null
            }
            ,
            r.prototype.disableScroll = function() {
                var t = this;
                t.enableScroll,
                e(t.bodyElm).addEventListener("mousewheel", (function(e) {
                    t.preventDefaultAction(e, t)
                }
                ), {
                    passive: !1
                }),
                e(t.bodyElm).addEventListener("wheel", (function(e) {
                    t.preventDefaultAction(e, t)
                }
                ), {
                    passive: !1
                }),
                e(t.bodyElm).addEventListener("DOMMouseScroll", (function(e) {
                    t.preventDefaultAction(e, t)
                }
                ), {
                    passive: !1
                }),
                e(t.bodyElm).addEventListener("touchstart", (function(e) {
                    t.preventDefaultAction(e, t)
                }
                ), {
                    passive: !1
                }),
                e(t.bodyElm).addEventListener("touchmove", (function(e) {
                    t.preventDefaultAction(e, t)
                }
                ), {
                    passive: !1
                }),
                e(t.bodyElm).addEventListener("touchend", (function(e) {
                    t.preventDefaultAction(e, t)
                }
                ), {
                    passive: !1
                }),
                document.onkeydown = t.preventDefaultForScrollKeys
            }
            ,
            r.prototype.menuFlexboxFallback = function() {
                var t = parseInt(e("#menu-mobile").outerWidth(!0));
                e(".logo-block").css("marginRight", t - 20 + "px")
            }
            ,
            r.prototype.checkScrollers = function() {
                var t = this;
                t.menu = e("#menu"),
                t.menuDiv = t.menu.find("> div");
                var n = t.menu.height()
                  , i = t.menuDiv.height();
                if (i > n) {
                    var o = t.menu.offset().top
                      , r = t.menuDiv.offset().top
                      , a = e(".scrolldown");
                    Math.ceil(o + n) >= Math.floor(r + i) || i < n ? e(a).hide() : i > n && e(a).show();
                    var s = e(".scrollup");
                    r >= o ? e(s).hide() : "none" === e(s).css("display") && e(s).show()
                }
            }
            ,
            r.prototype.initMobileMenuClasses = function() {
                var t = e("#menu-submit")
                  , n = this;
                e(t).hasClass("active") ? (e(n.menu).addClass("open"),
                e(n.menu).addClass("visible"),
                e(n.bodyElm).addClass("noscroll"),
                e(n.bodyElm).addClass("menu-open")) : (e(n.menu).removeClass("open"),
                e(n.menu).removeClass("visible"),
                e(n.bodyElm).removeClass("noscroll"),
                e(n.bodyElm).removeClass("menu-open"))
            }
            ,
            r.prototype.scrollArrowClick = function(e) {
                var t = this;
                if (!0 !== t.scrollflag) {
                    t.scrollflag = !0,
                    setTimeout((function() {
                        t.scrollflag = !1
                    }
                    ), 500);
                    var n = t.menu.find("ul.level-1 > li:not(.menu-more)").outerHeight(!0)
                      , i = parseInt(t.menuDiv.position().top)
                      , o = "down" === e ? Math.abs(i) + 1 * n : Math.abs(i) - 1 * n;
                    t.menu.animate({
                        scrollTop: o
                    }, {
                        step: t.checkScrollers,
                        duration: 500,
                        complete: t.checkScrollers
                    })
                }
            }
            ,
            r.prototype.mobileMenuClick = function() {
                var t, n = this, i = e("#menu-submit"), o = isMobileMenuCSS() || "sliding" !== n.menuType ? e("#menu") : e("#menu-slider");
                e(i).hasClass("active") ? ((t = document.createEvent("Event")).initEvent("mobile-menu-close", !0, !0),
                document.getElementsByClassName("s-hn")[0].dispatchEvent(t),
                e(i).removeClass("active"),
                e(o).removeClass("open"),
                fullscreenOverlay.removeClass("show"),
                e("html, body").removeClass("noscroll"),
                "sliding" !== n.menuType || isMobileMenuCSS() || (e("html").removeClass("hide-scrollbar"),
                e("body").removeAttr("style"),
                n.enableScroll,
                n.compensateForScrollbar("clear")),
                setTimeout((function() {
                    e(o).removeClass("visible"),
                    e("body").removeClass("menu-open"),
                    fullscreenOverlay.removeOverlay("menu-overlay")
                }
                ), 250),
                n.wndEvent("close"),
                "boxed" === n.menuType && (e("#menu").removeClass("animated").attr("style", ""),
                n.checkMenuHeight())) : ((t = document.createEvent("Event")).initEvent("mobile-menu-open", !0, !0),
                document.getElementsByClassName("s-hn")[0].dispatchEvent(t),
                fullscreenOverlay.addOverlay("#menu-mobile", "before", "menu-overlay"),
                e(i).addClass("active"),
                e(o).addClass("visible"),
                fullscreenOverlay.addClass("show"),
                fullscreenOverlay.bindOverlayClose("touchend MSPointerDown pointerdown click", (function() {
                    i.trigger("click"),
                    e(".menu-overlay").off("touchend MSPointerDown pointerdown click")
                }
                )),
                "sliding" !== n.menuType || isMobileMenuCSS() || (n.disableScroll,
                n.compensateForScrollbar("compensate")),
                e(o).addClass("open"),
                ("boxed" !== n.menuType || isMobileMenuCSS()) && e("html, body").addClass("noscroll"),
                "boxed" === n.menuType && setTimeout((function() {
                    n.checkMenuHeight()
                }
                ), 10),
                e("body").addClass("menu-open"),
                "sliding" !== n.menuType || isMobileMenuCSS() || e("html").addClass("hide-scrollbar"),
                n.wndEvent("open"))
            }
            ,
            r.prototype.checkMenuHeight = function(t) {
                if (!isMobileMenuCSS())
                    if ("standard" === this.menuType) {
                        t = e(t).hasClass("level-2") ? t : e(t).closest(".level-2");
                        var n = e(t).innerHeight() - parseInt(t.css("paddingBottom"))
                          , i = (e(".s-hn-centered").length && !this.isFixedNav() && e("ul.level-1").offset().top,
                        e(t).offset().top + n)
                          , o = e(".s-hn").offset().top - n
                          , r = e(window).height()
                          , a = e(document).height();
                        e(t).hasClass("top") ? (this.isFixedNav() || r === a || o < 0) && (!isMobileMenuCSS() && o < 0 ? this.bindSubMenuScroll(t) : this.unbindSubMenuScroll(t)) : (this.isFixedNav() || r === a || i > a) && (!isMobileMenuCSS() && i > e(window).scrollTop() + r ? this.bindSubMenuScroll(t) : this.currentPos === this.originalTop && this.unbindSubMenuScroll(t))
                    } else if ("boxed" === this.menuType) {
                        n = e("ul.level-1").innerHeight(),
                        i = e("#menu-submit").offset().top + e("#menu-submit").height() + n,
                        r = e(window).height(),
                        a = e(document).height(),
                        t = e("#menu");
                        isFixedNav() && !isMobileMenuCSS() && i > e(window).scrollTop() + r || !isFixedNav() && !isMobileMenuCSS() && i > a ? this.bindSubMenuScroll(t) : this.unbindSubMenuScroll(t)
                    }
            }
            ,
            r.prototype.menuControl = function() {
                var t = this
                  , n = e("#menu-submit")
                  , i = t.menu = e("#menu");
                if (e(".menu-close").off("click").on("click", (function(t) {
                    t.preventDefault(),
                    t.stopImmediatePropagation(),
                    t.stopPropagation(),
                    e(n).trigger("click")
                }
                )),
                n.off("click").on("click", (function(e) {
                    e.preventDefault(),
                    e.stopImmediatePropagation(),
                    e.stopPropagation(),
                    t.mobileMenuClick()
                }
                )),
                t.isStandardMenu) {
                    var o = function() {
                        t.clickFlag = !1
                    };
                    e("#wrapper").off("touchend MSPointerDown pointerdown click").on("touchend MSPointerDown pointerdown click", (function(n) {
                        isMobileMenu() || e(n.target).closest("#menu").length <= 0 && e(".level-1 > li.hover").each((function() {
                            e(this).removeClass("hover"),
                            e(this).find("ul").each((function() {
                                t.closeSubmenu(e(this))
                            }
                            ))
                        }
                        ))
                    }
                    ));
                    var r = e("li.wnd-with-submenu a.mm-arrow")
                      , a = e("ul.level-1 > li.wnd-with-submenu");
                    if (e(r).off("touchend MSPointerDown pointerdown click").on("touchend MSPointerDown pointerdown click", (function(n) {
                        if (n.preventDefault(),
                        n.stopImmediatePropagation(),
                        n.stopPropagation(),
                        t.clickFlag)
                            return !1;
                        t.clickFlag = !0,
                        setTimeout(o, 500);
                        var r = e(this).parent().children("ul");
                        if (e(this).hasClass("mm-down")) {
                            if (e(this).parent().addClass("hover"),
                            e(this).removeClass("mm-down").addClass("mm-up"),
                            e(r).addClass("open"),
                            t.wndEvent("open"),
                            setTimeout((function() {
                                t.checkMenuHeight(r)
                            }
                            ), 400),
                            isMobileMenu()) {
                                var a = e(t.menuDiv).offset()
                                  , s = e(r).offset()
                                  , l = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                                  , u = e(r).outerHeight()
                                  , c = parseInt(e(".level-1 li.wnd-homepage > a:first-child").css("padding-top").replace("px", ""));
                                s.top + u > l && e(i).animate({
                                    scrollTop: -1 * a.top + (s.top + u - l) + c
                                }, 500)
                            }
                        } else
                            e(this).parent().removeClass("hover"),
                            e(this).removeClass("mm-up").addClass("mm-down"),
                            e(r).removeClass("open"),
                            e(r).hasClass("level-2") && t.wndEvent("close"),
                            setTimeout((function() {
                                t.checkMenuHeight(r)
                            }
                            ), 400)
                    }
                    )),
                    isDevice("pc") && !isMobileMenu()) {
                        var s = e(".level-1 > li.wnd-with-submenu > a:not(mm-arrow)");
                        e(s).off("touchend MSPointerDown pointerdown click").on("touchend MSPointerDown pointerdown click", (function(n) {
                            n.preventDefault(),
                            n.stopPropagation(),
                            n.stopImmediatePropagation(),
                            t.tabletTouchFlag || void 0 !== e(this).attr("href") && (window.location.href = e(this).attr("href"))
                        }
                        )),
                        e(a).off("mouseenter pointerenter").on("mouseenter pointerenter", (function(n) {
                            t.mouseFlag || isMobileMenu() || ("touch" === n.originalEvent.pointerType && (e(this).hasClass("hover") || (n.preventDefault(),
                            n.stopPropagation(),
                            n.stopImmediatePropagation(),
                            t.closeSubmenu(),
                            t.tabletTouchFlag = !0,
                            setTimeout((function() {
                                t.tabletTouchFlag = !1
                            }
                            ), 500))),
                            t.mouseFlag = !0,
                            setTimeout((function() {
                                t.mouseFlag = !1
                            }
                            ), 100),
                            e(this).addClass("hover"),
                            t.openSubmenu(e(this).children("ul")))
                        }
                        )),
                        e(a).off("mouseleave pointerleave").on("mouseleave pointerleave", (function(n) {
                            if (!t.tabletTouchFlag)
                                return "touch" === n.originalEvent.pointerType ? (t.tabletTouchFlag = !0,
                                void setTimeout((function() {
                                    t.tabletTouchFlag = !1
                                }
                                ), 200)) : void (isMobileMenu() || (setTimeout((function() {
                                    t.mouseFlag = !1
                                }
                                ), 500),
                                e(this).removeClass("hover"),
                                e(this).find("ul").each((function() {
                                    t.closeSubmenu(e(this))
                                }
                                ))))
                        }
                        ))
                    }
                    if (isDevice("tablet") && !isMobileMenu()) {
                        var l = e(".level-1 > li.wnd-with-submenu:not(.more) > a")
                          , u = e(".level-1 > li.more > a")
                          , c = e(".level-1 > li.more a:not(.mm-arrow)");
                        e(l).off(),
                        e(l).on("touchend MSPointerDown pointerdown click", (function(n) {
                            if (n.stopImmediatePropagation(),
                            n.stopPropagation(),
                            n.preventDefault(),
                            t.clickFlag)
                                return !1;
                            t.clickFlag = !0,
                            setTimeout(o, 600),
                            "block" === e(this).parent().find("ul").css("display") && t.touchFlag ? e(this).parent().hasClass("more") ? (e(this).parent().removeClass("hover"),
                            e(this).parent().find("ul").each((function() {
                                t.closeSubmenu(e(this))
                            }
                            )),
                            t.touchFlag = !1) : (window.location.href = e(this).attr("href"),
                            t.touchFlag = !1) : (t.closeSubmenu(),
                            e(this).parent().addClass("hover"),
                            t.openSubmenu(e(this).parent().children("ul")),
                            t.touchFlag = !0)
                        }
                        )),
                        e(c).off(),
                        e(c).on("touchend MSPointerDown pointerdown click", (function(t) {
                            t.stopImmediatePropagation(),
                            t.stopPropagation(),
                            t.preventDefault(),
                            "SPAN" === t.target.nodeName ? window.location = e(t.target).parent().attr("href") : "A" === t.target.nodeName && (window.location = e(t.target).attr("href"))
                        }
                        )),
                        e(u).off(),
                        e(u).on("touchend MSPointerDown pointerdown click", (function(n) {
                            if (n.stopImmediatePropagation(),
                            n.stopPropagation(),
                            n.preventDefault(),
                            t.clickFlag)
                                return !1;
                            t.clickFlag = !0,
                            setTimeout(o, 600),
                            "block" === e(this).parent().find("ul").css("display") && t.touchFlag ? (e(this).parent().removeClass("hover"),
                            e(this).parent().find("ul").each((function() {
                                t.closeSubmenu(e(this))
                            }
                            )),
                            t.touchFlag = !1) : (t.closeSubmenu(),
                            e(this).parent().addClass("hover"),
                            t.openSubmenu(e(this).parent().children("ul")),
                            t.touchFlag = !0)
                        }
                        )),
                        e(".level-1 > li.wnd-with-submenu > a").on("mouseenter touchend click", (function(e) {
                            e.stopImmediatePropagation(),
                            e.stopPropagation(),
                            e.preventDefault()
                        }
                        )),
                        e("html").on("touchend MSPointerDown pointerdown click", (function(t) {
                            if (!e(t.target).closest("#menu").length) {
                                var n = e("ul.level-2");
                                e(n).removeClass("open"),
                                e(n).parent().removeClass("hover")
                            }
                        }
                        ))
                    }
                } else
                    e("a.mm-arrow").off("touchend MSPointerDown pointerdown click").on("touchend MSPointerDown pointerdown click", (function(n) {
                        if (n.preventDefault(),
                        n.stopImmediatePropagation(),
                        n.stopPropagation(),
                        t.clickFlag)
                            return !1;
                        t.clickFlag = !0,
                        setTimeout((function() {
                            t.clickFlag = !1
                        }
                        ), 500);
                        var i = e(this).parent().children("ul");
                        if (isMobileMenuCSS())
                            e(this).hasClass("mm-down") ? (e(this).parent().addClass("hover"),
                            e(this).removeClass("mm-down").addClass("mm-up"),
                            i.addClass("open")) : (e(this).parent().removeClass("hover"),
                            e(this).removeClass("mm-up").addClass("mm-down"),
                            i.removeClass("open"));
                        else if (e(this).hasClass("mm-down")) {
                            e(this).parent().addClass("hover"),
                            e(this).removeClass("mm-down").addClass("mm-up"),
                            i.show();
                            var o = i.outerHeight(!0);
                            i.hide(),
                            i.css("height", "0").addClass("open"),
                            i.animate({
                                height: o
                            }, {
                                step: function() {
                                    "centered" === t.menuAlign && t.menuDiv.height() >= t.menu.height() && t.menu.removeClass("centered")
                                },
                                duration: 500,
                                complete: function() {
                                    t.checkScrollers(),
                                    i.attr("style", "")
                                }
                            })
                        } else
                            e(this).removeClass("mm-up").addClass("mm-down"),
                            i.animate({
                                height: 0
                            }, {
                                step: function() {
                                    "centered" === t.menuAlign && t.menuDiv.height() < t.menu.height() && t.menu.addClass("centered")
                                },
                                duration: 500,
                                complete: function() {
                                    e(this).parent().removeClass("hover"),
                                    i.attr("style", ""),
                                    i.removeClass("open"),
                                    setTimeout(t.checkScrollers, 50)
                                }
                            })
                    }
                    )),
                    e(".scrollup").off("touchend MSPointerDown pointerdown click").on("touchend MSPointerDown pointerdown click", (function() {
                        t.scrollArrowClick("up")
                    }
                    )),
                    e(".scrolldown").off("touchend MSPointerDown pointerdown click").on("touchend MSPointerDown pointerdown click", (function() {
                        t.scrollArrowClick("down")
                    }
                    ))
            }
            ,
            r.prototype.bindVerticalMenuScroll = function() {
                var t, n = this;
                n.menu.off("mousewheel DOMMouseScroll touchstart touchmove touchend").on("mousewheel DOMMouseScroll touchstart touchmove touchend", (function(i) {
                    var o = null;
                    if ("mousewheel" === i.type)
                        o = -1 * i.originalEvent.wheelDelta;
                    else if ("DOMMouseScroll" === i.type)
                        o = i.originalEvent.detail;
                    else if ("touchstart" === i.type)
                        t = i.originalEvent.touches[0].clientY;
                    else if ("touchmove" === i.type) {
                        var r = i.originalEvent.changedTouches[0].clientY
                          , a = n.menu.height()
                          , s = n.menuDiv.height()
                          , l = n.menu.offset().top
                          , u = n.menuDiv.offset().top;
                        l + a === u + s ? t > r && i.preventDefault() : l === u && t < r && i.preventDefault()
                    }
                    o && (i.preventDefault(),
                    e(this).scrollTop(o + e(this).scrollTop())),
                    n.checkScrollers()
                }
                )),
                n.menu.off("scroll").on("scroll", (function() {
                    n.checkScrollers()
                }
                )),
                e(".scrollup").length || e("#menu-block").append('<div class="scrollup"></div>'),
                e(".scrolldown").length || e("#menu-block").append('<div class="scrolldown"></div>'),
                n.checkScrollers()
            }
            ,
            r.prototype.bindSubMenuScroll = function(t) {
                var n, i, o = this;
                t.addClass("animated"),
                null === o.originalTop && (o.originalTop = "boxed" === o.menuType ? parseInt(e("#menu").css("top")) : parseInt(e(t).css("top")),
                e(t).hasClass("top") ? o.currentPos = parseInt(e(t).css("bottom")) : o.currentPos = o.originalTop),
                null === o.originalBottom && (o.originalBottom = e(t).hasClass("top") ? parseInt(e(t).css("bottom")) : null);
                var r, a = e(".s-hn-centered").length && !this.isFixedNav() ? e("ul.level-1").offset().top : 0, s = isCMS() ? parseInt(e(".wnd-topfixed-wrapper").height()) : 0, l = e(".s-hn").hasClass("s-hn-centered");
                t.off("mousewheel DOMMouseScroll touchstart touchmove touchend").on("mousewheel DOMMouseScroll touchstart touchmove touchend", (function(u) {
                    r = e(t).hasClass("top") ? parseInt(e(t).height()) + parseInt(t.css("paddingBottom")) : e(t).innerHeight() - parseInt(t.css("paddingBottom"));
                    var c = null;
                    if ("mousewheel" === u.type ? c = -1 * u.originalEvent.wheelDelta : "DOMMouseScroll" === u.type ? c = u.originalEvent.detail : "touchstart" === u.type ? n = u.originalEvent.touches[0].clientY : "touchmove" === u.type && (c = -1 * ((i = u.originalEvent.touches[0].clientY) - n),
                    n = i),
                    c = null === c ? null : -1 * c,
                    e(t).hasClass("top")) {
                        if (c)
                            if (u.preventDefault(),
                            c > 0) {
                                var d = parseInt(e(".s-hn").offset().top) + parseInt(e(".s-hn").height()) - o.currentPos - parseInt(e(t).css("paddingBottom")) - r;
                                e(t).css("bottom", d + c < 0 - s ? o.currentPos -= c : o.currentPos = -1 * (r + 30 + s - (e(".s-hn").offset().top + parseInt(e(".s-hn").height()) - e(window).scrollTop())))
                            } else {
                                var f = o.currentPos + -1 * c;
                                e(t).css("bottom", f < o.originalBottom ? o.currentPos = f : o.currentPos = o.originalBottom)
                            }
                    } else if (c)
                        if (u.preventDefault(),
                        c > 0)
                            e(t).css("top", o.currentPos + c < o.originalTop ? o.currentPos += c : o.currentPos = o.originalTop);
                        else {
                            f = o.currentPos + c;
                            var p = e(window).height()
                              , h = e(window).scrollTop()
                              , m = e("#menu-submit").offset().top
                              , v = e("#menu-submit").height()
                              , g = o.isFixedNav()
                              , y = "boxed" !== o.menuType || g ? h + p - 50 : p - 50;
                            "boxed" === o.menuType ? g ? e(t).css("top", f + r > p ? o.currentPos += c : o.currentPos = -1 * (r - (h + p - (m + v)))) : e(t).css("top", f + m + r > y ? o.currentPos += c : o.currentPos = -1 * (r - y) - (m + v) + 30) : g ? e(t).css("top", f + r > p ? o.currentPos += c : o.currentPos = -1 * (r - p + 30 - (l ? 0 : s))) : e(t).css("top", f + a + r > y ? o.currentPos += c : o.currentPos = -1 * (r - y) - a + 30 - (l ? 0 : s))
                        }
                }
                ))
            }
            ,
            r.prototype.unbindSubMenuScroll = function(e) {
                this.originalTop = null,
                this.originalBottom = null,
                e.off("mousewheel DOMMouseScroll touchstart touchmove touchend"),
                e.attr("style", "")
            }
            ,
            r.prototype.hideSubmenus = function() {
                var t = this;
                t.originalTop = null,
                t.originalBottom = null,
                t.menu.find("ul li.wnd-with-submenu").each((function() {
                    (e(this).parent().hasClass("level-1") || e(this).parent().hasClass("level-2")) && (e(this).find("ul + .mm-arrow").length || (e(this).hasClass("wnd-active-path") && !e(this).hasClass("wnd-active") ? e(this).append('<a class="mm-arrow mm-up" href="#"></a>') : e(this).append('<a class="mm-arrow mm-down" href="#"></a>')),
                    (e(this).parent().hasClass("open") || e(this).hasClass("hover")) && e(this).find(".mm-arrow").removeClass("mm-down").addClass("mm-up")),
                    e(this).parent().hasClass("level-3") && e(this).removeClass("wnd-with-submenu")
                }
                )),
                isMobileMenuCSS() ? t.menu.find("ul li.wnd-active-path").each((function() {
                    e(this).children("a.mm-arrow").removeClass("mm-down").addClass("mm-up"),
                    e(this).children("ul").addClass("open")
                }
                )) : t.isStandardMenu && "boxed" !== t.menuType ? (e(".level-2 li.wnd-active-path.wnd-with-submenu").addClass("hover"),
                e(".level-2 li.wnd-active-path.wnd-with-submenu > ul").addClass("open"),
                e(".level-2 li.wnd-active-path.wnd-with-submenu > .mm-arrow").removeClass("mm-down").addClass("mm-up")) : (e("li.wnd-active-path.wnd-with-submenu").addClass("hover"),
                e("li.wnd-active-path.wnd-with-submenu > ul").addClass("open"),
                e("li.wnd-active-path.wnd-with-submenu > .mm-arrow").removeClass("mm-down").addClass("mm-up"))
            }
            ,
            r.prototype.bindActions = function() {
                var t = this
                  , n = function() {
                    t.menuInit()
                };
                e(window).off("navfixed").on("navfixed", (function() {
                    "boxed" === t.menuType ? e("#menu").hasClass("open") && setTimeout((function() {
                        t.checkMenuHeight(e("ul.level-1"))
                    }
                    ), 10) : e("ul.level-2.open").length && setTimeout((function() {
                        t.checkMenuHeight(e("ul.level-2.open"))
                    }
                    ), 10)
                }
                )),
                e(window).off("navunfixed").on("navunfixed", (function() {
                    t.unbindSubMenuScroll(e("ul.level-2.open")),
                    t.unbindSubMenuScroll(e("ul.level-2")),
                    e(".l-sidebar").length && (e(".s-hn").removeClass("sticky"),
                    e(".wnd-fixed").removeClass("bgonscroll").attr("style", ""))
                }
                )),
                e(window).off("navfadeout").on("navfadeout", (function() {
                    "boxed" === t.menuType && e("#menu-submit").hasClass("active") && t.mobileMenuClick()
                }
                )),
                e(window).off("navfadein").on("navfadein", (function() {}
                )),
                t.isStandardMenu ? (e(window).off("resize.navline orientationchange.navline").on("resize.navline orientationchange.navline", (function() {
                    e(window).width() !== t.windowWidth && (t.windowWidth = e(window).width(),
                    t.menuInit())
                }
                )),
                e(document).on("wnd-redraw-done", ".s-hn", (function(e) {
                    setTimeout(n, 100)
                }
                )),
                e(".logo img").off("wnd-redraw.logo").on("wnd-redraw.logo", (function() {
                    n()
                }
                )),
                e(window).off("resize.navline").on("resize.navline", (function() {
                    t.resizeFlag = !0,
                    e(window).width() !== t.windowWidth && (t.windowWidth = e(window).width(),
                    t.menuInit("resize", t))
                }
                ))) : (e(window).off("resize.navline").on("resize.navline", (function() {
                    t.resizeFlag = !0,
                    e(window).height() !== t.windowHeight && (t.windowHeight = e(window).height(),
                    t.menuInit("resize", t)),
                    e(window).width() !== t.windowWidth && (t.windowWidth = e(window).width(),
                    t.menuInit("resize", t)),
                    setTimeout((function() {
                        t.resizeFlag = !1
                    }
                    ), 10)
                }
                )),
                e(window).off("orientationchange.navline").on("orientationchange.navline", (function() {
                    t.resizeFlag || t.orientationChangeFlag || (t.resizeFlag = !0,
                    t.orientationChangeFlag = !0,
                    setTimeout(t.menuInit(), 100),
                    setTimeout((function() {
                        t.resizeFlag = !1,
                        t.orientationChangeFlag = !1
                    }
                    ), 20))
                }
                ))),
                isCMS() && (e(".isIE").length ? e(document).off("wnd-content-change.logo").on("wnd-content-change.logo", ".logo", (function() {
                    setTimeout(n, 20)
                }
                )) : e(document).off("wnd-logo-resize").on("wnd-logo-resize", ".logo", (function() {
                    n()
                }
                )),
                t.isStandardMenu ? (e(document).off("wnd-redraw.typo").on("wnd-redraw.typo", ".wnd-page", (function(t) {
                    e('.wnd-o-panel[data-wnd_mvc_type="wnd.tb.TypoPanel"]').length && (e(".n-l").addClass("initial-state"),
                    setTimeout(n, 1e3))
                }
                )),
                e(document).off("wnd-redraw.navline").on("wnd-redraw.navline", ".s-hn", (function() {
                    setTimeout(n, 20)
                }
                )),
                e(t.logo).parent().hasClass("logo-container") && e(document).off("wnd-content-change.navline").on("wnd-content-change.navline", ".logo-slogan .styled-inline-text", (function() {
                    setTimeout(n, 20)
                }
                ))) : (e(document).off("wnd-redraw.navline").on("wnd-redraw.navline", ".s-hn", (function() {
                    var n = setInterval((function() {
                        e("#menu ul.level-1").length && (t.menuInit("header-redraw"),
                        clearInterval(n))
                    }
                    ), 20)
                }
                )),
                e(document).off("wnd-content-change.navline").on("wnd-content-change.navline", ".s-f", (function() {
                    t.menuInit()
                }
                )))),
                e("body.wnd-cms #header").on("keyup click focusin focusout", ".logo-content, .logo-slogan .styled-inline-text", (function(e) {
                    "focusout" === e.type ? setTimeout((function() {
                        t.recalculateAvailableSpace()
                    }
                    ), 100) : t.recalculateAvailableSpace()
                }
                )),
                t.bindComplete = !0
            }
            ,
            r.prototype.unbindActions = function() {
                this.isStandardMenu ? (e(window).off("resize orientationchange"),
                e(".logo img").off("wnd-redraw")) : (e(window).off("resize"),
                e(window).off("orientationchange")),
                isCMS() && (e(document).off("wnd-content-change.navline", ".logo"),
                this.isStandardMenu ? (e(document).off("wnd-redraw.navline", ".s-hn"),
                e(document).off("wnd-content-change.navline", ".logo-slogan .styled-inline-text")) : (e(document).off("wnd-redraw.navline", ".s-hn"),
                e(document).off("wnd-content-change.navline", ".s-f"))),
                e("body.wnd-cms #header").off("keyup click focusin focusout", ".logo-content, .logo-slogan .styled-inline-text")
            }
            ,
            r.prototype.overflowControl = function() {
                var t = this
                  , n = e(".logo");
                "centered" === t.headerType ? t.logoWidth = 0 : (t.logoWidth = parseInt(e(n).outerWidth(!0)),
                t.logoWidth < parseInt(e(n).innerWidth()) && (t.logoWidth = parseInt(e(n).innerWidth()))),
                t.getNavline(),
                t.navlineWidth = parseInt(e(t.navline).width());
                var i = e(".cart")
                  , o = 0
                  , r = isNaN(parseInt(e(i).css("right"))) ? 0 : parseInt(e(i).css("right"));
                0 === i.length ? i = null : o = e(i).outerWidth(!0) + r;
                var a = e(".search")
                  , s = 0;
                0 === a.length || "none" === e(a).css("display") ? a = null : s = e(a).outerWidth(!0);
                var l, u, c, d, f, p, h = e("#menu"), m = e("#menu .level-1 li.more");
                l = parseInt(e(h).css("right")),
                u = parseInt(e(t.navline).css("paddingRight")),
                0 === o && (l = l > 0 ? l - u : l),
                l = isNaN(l) ? 0 : l,
                c = parseInt(e(h).css("paddingRight")),
                c = isNaN(c) ? 0 : c,
                d = parseInt(e(h).css("paddingLeft")),
                d = isNaN(d) ? 0 : d,
                e(m).length || (e("#menu .level-1").append('<li class="more wnd-with-submenu"><a href="#" class="menu-item"><span class="menu-item-text">' + t.moreText + "</span></a></li>"),
                m = e("#menu .level-1 li.more")),
                f = parseInt(e(m).outerWidth(!0)),
                e(m).remove(),
                p = parseInt(e("#menu .level-1 > li:first-child > a").css("paddingLeft")),
                p = isNaN(p) ? 0 : p;
                var v = Math.floor(t.navlineWidth) - Math.ceil(t.logoWidth) - Math.ceil(o) - Math.ceil(s) - Math.ceil(f) - Math.ceil(p) - Math.ceil(c) - Math.ceil(d) - Math.ceil(l) - Math.ceil(t.magicConstant)
                  , g = 0
                  , y = 0;
                e("#menu .level-1 > li:not(.more)").each((function() {
                    if ((g += parseInt(e(this).outerWidth(!0))) > v) {
                        var n;
                        (n = e("#menu .level-1 li.more")).length || (e("#menu .level-1").append('<li class="more wnd-with-submenu"><a href="#" class="menu-item"><span class="menu-item-text">' + t.moreText + '</span></a><ul class="level-2"></ul></li>'),
                        t.wndEvent("more"));
                        var i = e(this).clone();
                        e(i).find("ul").each((function() {
                            e(this).hasClass("level-2") ? e(this).addClass("level-3").removeClass("level-2").removeAttr("style") : e(this).removeAttr("style")
                        }
                        ));
                        var o = e("#menu .level-1 li.more .level-2");
                        t.initFlag ? e(o).prepend(i) : e(o).append(i),
                        e(this).hasClass("overflowed") || e(this).addClass("overflowed"),
                        y++
                    } else {
                        var r = e(this).children("a").attr("href");
                        e("#menu .level-1 li.more a").each((function() {
                            var t = e(this).attr("href");
                            r === t && e(this).parent().remove()
                        }
                        )),
                        e(this).removeClass("overflowed")
                    }
                    0 === y && e(n).remove()
                }
                )),
                t.initFlag = !0
            }
            ,
            r.prototype.overflowControlVerticalAndSliding = function() {
                var t = this;
                t.menu = e("#menu"),
                t.menuBlock = e("#menu-block");
                var n = e("header")
                  , i = e("#menu-slider")
                  , o = e(".menu-close");
                if (!isMobileMenuCSS()) {
                    var r = "fixed" === e("footer").css("position") ? parseInt(e("footer").outerHeight(!0)) : 0
                      , a = parseInt(t.menuBlock.css("paddingTop")) + parseInt(t.menuBlock.css("paddingBottom"))
                      , s = parseInt(t.menuBlock.css("marginTop")) + parseInt(t.menuBlock.css("marginBottom")) + parseInt(t.menu.css("marginTop")) + parseInt(t.menu.css("marginBottom"))
                      , l = "sliding" === t.menuType ? o.outerHeight(!0) : 0;
                    if (t.menu.find("ul.level-1").length) {
                        var u = "sliding" === t.menuType ? i.outerHeight(!0) : n.outerHeight(!0)
                          , c = t.bodyElm.outerHeight(!0)
                          , d = "vertical" === t.menuType ? e(".cart-block").outerHeight(!0) : 0;
                        u !== c && c < u && (u = c);
                        var f = parseInt(n.css("paddingTop")) + parseInt(e(".s-hn").css("marginTop"))
                          , p = parseInt(e(".n-l").css("paddingTop"))
                          , h = parseInt(i.css("paddingTop")) + parseInt(i.css("paddingBottom"))
                          , m = "vertical" === t.menuType ? parseInt(e(".logo-block").outerHeight(!0)) : 0
                          , v = deviceDetect("ios") ? 60 : 0
                          , g = 0;
                        g = "vertical" === t.menuType ? u - f - p - m - r - a - s - v - d : u - h - a - s - l - v;
                        var y = 0;
                        if (t.roundToListItems)
                            for ("none" === t.menu.css("display") ? (t.menu.show(),
                            t.menuItemHeight = e("ul.level-1 > li:first-child").outerHeight(!0),
                            t.menu.hide()) : t.menuItemHeight = e("ul.level-1 > li:first-child").outerHeight(!0); y + t.menuItemHeight <= g; )
                                y += t.menuItemHeight;
                        else
                            y = g;
                        t.realHeightStorage = y;
                        var b = 0
                          , w = e("#menu").find("ul.level-1 > li");
                        w.length > 0 ? (e(w).each((function() {
                            b += parseInt(e(this).outerHeight(!0))
                        }
                        )),
                        t.menuItemsHeightStorage = b) : b = t.menuItemsHeightStorage
                    } else
                        y = t.realHeightStorage,
                        b = t.menuItemsHeightStorage;
                    e("html").hasClass("flexbox") && null == navigator.userAgent.match(/iPad/i) ? "fixed" === e("footer").css("position") ? e(".n-l").css("paddingBottom", r + "px") : e(".n-l").attr("style", "") : (t.menuBlock.css("height", y + a),
                    t.menuBlock.css("maxHeight", y + a)),
                    b > y ? (e(".scrolldown").show(),
                    "centered" === t.menuAlign && t.menu.removeClass("centered")) : ("centered" === t.menuAlign && t.menu.addClass("centered"),
                    e(".scrollup").hide(),
                    e(".scrolldown").hide())
                }
                if ("fixed" === e("footer").css("position")) {
                    e(".n-l").css("paddingBottom", r + "px");
                    var C = document.createEvent("Event");
                    C.initEvent("navunfixed", !0, !0),
                    document.getElementsByClassName("s-hn")[0].dispatchEvent(C)
                } else
                    e(".n-l").attr("style", "");
                t.initActiveFlag = !1
            }
            ,
            r.prototype.menuInit = function(t, n) {
                var i = void 0 === n ? this : n;
                if (i.reloadObject(),
                i.isStandardMenu) {
                    i.initFlag = !1,
                    deviceDetect("android") && parseFloat(getAndroidVersion()) < 4.4 && e("html").addClass("oldandroid"),
                    i.menu = e("#menu"),
                    i.menuDiv = i.menu.find(" > div"),
                    i.element = document.getElementById(e(i.menuDiv).attr("id"));
                    var o = e(".wnd-with-submenu");
                    e("a.mm-arrow").remove();
                    var r = e("#menu-submit");
                    e(r).hasClass("active") || e("#menu, #menu ul").removeClass("open align").removeAttr("style"),
                    e(o).removeClass("hover"),
                    isMobileMenu() ? i.initMobileMenuClasses() : i.overflowControl(),
                    i.hideSubmenus(),
                    i.menuControl(),
                    i.bindComplete || i.bindActions(),
                    "none" === e(i.menu).css("display") && e(i.menu).attr("style", ""),
                    e(".n-l").removeClass("initial-state"),
                    "resize" === t && i.lastMenuState !== isMobileMenuCSS() && (i.lastMenuState = isMobileMenuCSS(),
                    !1 === isMobileMenuCSS() && (e(this.headerElm).hasClass("wnd-mt-boxed") || (fullscreenOverlay.removeOverlay("menu-overlay"),
                    e(i.menu).removeClass("visible").removeClass("open"),
                    e("#menu-submit").removeClass("active"),
                    e("body").removeClass("noscroll").removeClass("menu-open"),
                    e("html").removeClass("noscroll"))))
                } else {
                    if (i.initActiveFlag)
                        return;
                    if (i.initActiveFlag = !0,
                    i.menu = e("#menu"),
                    i.bodyElm = e("body"),
                    i.menuBlock = e("#menu-block"),
                    "vertical" === i.menuType) {
                        if ("resize" !== t || i.resizeSwitch !== isMobileMenu()) {
                            if ("centered" !== i.menuAlign || isMobileMenu() ? "centered" === i.menuAlign && isMobileMenu() && i.menu.removeClass("centered").attr("style", "") : i.menu.addClass("centered"),
                            "fixed" === e("footer").css("position")) {
                                var a = parseInt(e("footer").outerHeight(!0));
                                e(".n-l").css("paddingBottom", a + "px")
                            } else
                                e(".n-l").attr("style", "");
                            i.menuBlock = e("#menu-block");
                            var s = e(".cart-block")
                              , l = e(".search");
                            if (i.menuBlock.length > 0 && isMobileMenu())
                                e("#menu").insertAfter(".logo-block"),
                                i.menuBlock.remove();
                            else
                                isMobileMenu() || i.menuBlock.length || (e('<div id="menu-block"></div>').insertAfter(".logo-block"),
                                i.menu.appendTo("#menu-block"));
                            !isMobileMenu() && isEshop() ? (s.insertBefore("#menu"),
                            l.insertBefore("#menu")) : isMobileMenu() || i.menuBlock.length || !isEshop() ? i.menuBlock.length > 0 && isMobileMenu() && isEshop() && (s.insertAfter(".logo-block"),
                            l.insertAfter(".logo-block")) : (s.insertBefore("#menu"),
                            l.insertBefore("#menu"));
                            var u = document.createEvent("Event");
                            u.initEvent("search-moved", !0, !0),
                            document.getElementsByClassName("s-hn")[0].dispatchEvent(u),
                            !isMobileMenu() && i.menu.hasClass("visible") && i.menu.removeClass("visible"),
                            "header-redraw" !== t && !isMobileMenu() && i.menu.hasClass("open") && i.menu.removeClass("open"),
                            e(".n-l").removeClass("initial-state"),
                            i.menu.find("a.mm-arrow").remove(),
                            (r = e("#menu-submit")).hasClass("active") || e("#menu, #menu ul").removeClass("open align").removeAttr("style"),
                            i.menu.find("li.wnd-with-submenu").removeClass("hover"),
                            isMobileMenu() ? (i.initMobileMenuClasses(),
                            e(".n-l").removeAttr("style")) : i.overflowControlVerticalAndSliding(),
                            i.hideSubmenus(),
                            isMobileMenu() ? i.menu.off("mousewheel DOMMouseScroll touchstart touchmove touchend") : i.bindVerticalMenuScroll(),
                            /iPhone/i.test(navigator.userAgent) && (414 === e(window).height() && e(window).height() < e(window).width() ? i.menu.addClass("ip6") : i.menu.removeClass("ip6")),
                            i.menu.addClass("loaded")
                        } else
                            "vertical" === i.menuType && i.lastMenuState !== isMobileMenuCSS() && (i.lastMenuState = isMobileMenuCSS(),
                            isMobileMenuCSS() || (fullscreenOverlay.removeOverlay("menu-overlay"),
                            e(i.menu).removeClass("visible").removeClass("open"),
                            e("#menu-submit").removeClass("active"),
                            e("body").removeClass("noscroll").removeClass("menu-open"),
                            e("html").removeClass("noscroll")));
                        i.resizeSwitch = isMobileMenu()
                    } else if ("sliding" === i.menuType)
                        if ("resize" !== t) {
                            if (isMobileMenuCSS()) {
                                var c = e("#menu-slider > .menu-close");
                                e(c).length > 0 && (e(c).remove(),
                                e(".menu-font").prepend('<a href="#" class="menu-close" rel="nofollow"><span>Close Menu</span></a>')),
                                i.initMobileMenuClasses(),
                                i.hideSubmenus()
                            } else {
                                i.menu.find("a.mm-arrow").remove();
                                var d = e("#menu .menu-close");
                                if (e(d).length > 0 && e("#menu-slider > .menu-close").length > 0)
                                    e(d).remove();
                                else if (e(d).length > 0 && e("#menu-slider > .menu-close").length <= 0)
                                    e("#menu-slider").prepend(d);
                                else if (0 === e(".menu-close").length) {
                                    var f = '<a href="#" class="menu-close" rel="nofollow"><span>Close Menu</span></a>';
                                    e("#menu-slider").prepend(f)
                                }
                                i.overflowControlVerticalAndSliding(),
                                i.hideSubmenus(),
                                i.bindVerticalMenuScroll(),
                                /iPhone/i.test(navigator.userAgent) && (414 === e(window).height() && e(window).height() < e(window).width() ? i.menu.addClass("ip6") : i.menu.removeClass("ip6"))
                            }
                            i.menu.addClass("loaded")
                        } else if ("sliding" === i.menuType && i.lastMenuState !== isMobileMenuCSS())
                            if (i.lastMenuState = isMobileMenuCSS(),
                            isMobileMenuCSS()) {
                                d = e("#menu-slider > .menu-close"),
                                f = '<a href="#" class="menu-close" rel="nofollow"><span>Close Menu</span></a>';
                                e(".menu-font").prepend(f),
                                e(d).remove(),
                                e("#menu-slider").hasClass("visible") && (e(i.menu).addClass("visible"),
                                e("#menu-slider").removeClass("visible")),
                                e("#menu-slider").hasClass("open") && (e(i.menu).addClass("open"),
                                e("#menu-slider").removeClass("open"))
                            } else {
                                d = e(".menu-font > .menu-close"),
                                f = '<a href="#" class="menu-close" rel="nofollow"><span>Close Menu</span></a>';
                                e("#menu-slider").prepend(f),
                                e(d).remove(),
                                e(i.menu).hasClass("visible") && (e("#menu-slider").addClass("visible"),
                                e(i.menu).removeClass("visible")),
                                e(i.menu).hasClass("open") && (e("#menu-slider").addClass("open"),
                                e(i.menu).removeClass("open"))
                            }
                    i.overflowControlVerticalAndSliding(),
                    i.menuControl(),
                    "none" === i.menu.css("display") && i.menu.show(),
                    i.bindComplete || i.bindActions(),
                    e("html").hasClass("no-flexbox") && i.menuFlexboxFallback()
                }
            }
            ;
            var a = new r;
            a.menuInit(),
            void 0 !== e(".logo embed")[0] && e(".logo embed")[0].addEventListener("load", (function() {
                a.menuInit()
            }
            )),
            o || "complete" !== document.readyState && e(window).on("load", (function() {
                a.menuInit()
            }
            ))
        }
    })
}(jQuery),
$(document).ready((function() {
    isCMS && ($(".isIE").length || "undefined" != typeof ResizeObserver && new ResizeObserver((function(e) {
        var t = document.createEvent("Event");
        t.initEvent("wnd-logo-resize", !0, !0),
        document.getElementsByClassName("logo")[0].dispatchEvent(t)
    }
    )).observe(document.getElementsByClassName("logo")[0]));
    $(".s-hn").length && $.menuModule()
}
)),
function(e) {
    e.stickyHeader = function(t) {
        if (void 0 !== t && e(".s-hn").length) {
            var n = function(t) {
                this.fixedNavlineElm = e("body").find(t.fixed),
                this.bgElm = e("body").find(t.bg),
                this.mainHeaderElm = e("body").find(t.mainHeader),
                this.cookieElm = e("#wnd_cookie_bar"),
                this.userBarElm = e("#wnd_user_bar"),
                this.topBarElm = e(".top-bar"),
                this.sloganElm = e(".slogan-container"),
                this.cookieHeight = this.cookieElm.length > 0 && "block" === this.cookieElm.css("display") ? parseInt(this.cookieElm.outerHeight()) : 0,
                this.userBarHeight = this.userBarElm.length > 0 && "block" === this.userBarElm.css("display") ? parseInt(this.userBarElm.outerHeight()) : 0,
                this.topBarHeight = this.topBarElm.length > 0 && "block" === this.topBarElm.css("display") ? parseInt(this.topBarElm.outerHeight()) : 0,
                this.allBarsHeight = this.cookieHeight + this.userBarHeight + this.topBarHeight,
                this.defaultOffsetTop = 0,
                this.fixedNavlineElmDefPos = this.fixedNavlineElm.css("position"),
                this.fixedNavlineElmDefTop = "absolute" === this.fixedNavlineElmDefPos || "fixed" === this.fixedNavlineElmDefPos ? this.fixedNavlineElm.css("top") : "auto",
                this.sloganElmTop = this.sloganElm.length ? this.sloganElm.position().top : 0,
                this.fadeoutThreshold = 300,
                this.lastScrollTop = parseFloat(e(window).scrollTop(), 10),
                this.fadeOutFlag = !1,
                this.options = t,
                this.getDefaultOffsetTop()
            };
            if (n.prototype.getDefaultOffsetTop = function() {
                if ("fixed" !== (t = this).fixedNavlineElm.css("position"))
                    if (e(".s-hn").hasClass("s-hn-bottom"))
                        e(".s-hn").hasClass("hm-hidden") ? t.defaultOffsetTop = parseInt(e(t.fixedNavlineElm).offset().top) : t.defaultOffsetTop = parseInt(e(".s-hm").offset().top) + parseInt(e(".s-hm").height()) - parseInt(e(".s-hm .s-o").css("paddingBottom"));
                    else {
                        var t = this;
                        if (void 0 !== this.options.offsetElements) {
                            var n = this.options.offsetElements;
                            t.defaultOffsetTop = 0,
                            Object.keys(n).forEach((function(i) {
                                if (Array.isArray(n[i]))
                                    for (var o = 0; o < n[i].length; o++)
                                        "offsetTop" === n[i][o] ? t.defaultOffsetTop += t.getDimension(parseInt(e(i).offset().top)) : t.defaultOffsetTop += t.getDimension(parseInt(e(i).css(n[i][o])));
                                else
                                    "offsetTop" === n[i] ? t.defaultOffsetTop += t.getDimension(parseInt(e(i).offset().top)) : t.defaultOffsetTop += t.getDimension(parseInt(e(i).css(n[i])))
                            }
                            ))
                        }
                    }
                else
                    e(".s-hn").hasClass("s-hn-bottom") && !e(".s-hn").hasClass("hm-hidden") ? t.defaultOffsetTop = parseInt(e(".s-hm").offset().top) + parseInt(e(".s-hm").height()) - parseInt(e(".s-hm .s-o").css("paddingBottom")) : t.defaultOffsetTop = t.allBarsHeight
            }
            ,
            n.prototype.getDimension = function(e) {
                return isNaN(e) ? 0 : e
            }
            ,
            n.prototype.dispatchNavEvent = function(e) {
                var t = document.createEvent("Event");
                t.initEvent(e, !0, !0),
                document.getElementsByClassName("s-hn")[0].dispatchEvent(t)
            }
            ,
            n.prototype.recalc = function() {
                this.cookieHeight = this.cookieElm.length > 0 && "block" === this.cookieElm.css("display") ? parseInt(this.cookieElm.outerHeight()) : 0,
                this.userBarHeight = this.userBarElm.length > 0 && "block" === this.userBarElm.css("display") ? parseInt(this.userBarElm.outerHeight()) : 0,
                this.allBarsHeight = this.cookieHeight + this.userBarHeight + this.topBarHeight
            }
            ,
            n.prototype.scroll = function() {
                if (!e(".l-sidebar").length || "fixed" !== e(".l-h").css("position")) {
                    var t = this;
                    if (!t.mainHeaderElm.hasClass("s-hn-centered") || "absolute" !== e(".h-f").css("position")) {
                        t.recalc();
                        var n = parseFloat(e(t.mainHeaderElm).offset().top, 10)
                          , i = parseFloat(e(window).scrollTop(), 10);
                        Math.max(n - i, 0),
                        t.lastScrollTop;
                        i < 0 && (i,
                        i = 0),
                        i > t.defaultOffsetTop ? "fixed" !== t.fixedNavlineElm.css("position") && (t.dispatchNavEvent("navfixed"),
                        t.fixedNavlineElm.css({
                            top: 0,
                            position: "fixed"
                        }),
                        t.bgElm.addClass("bgonscroll"),
                        t.mainHeaderElm.addClass("sticky"),
                        t.mainHeaderElm.hasClass("s-hn-slogan") && t.sloganElm.css("top", t.sloganElmTop).css("position", "absolute"),
                        t.mainHeaderElm.hasClass("s-hn-centered") && !t.mainHeaderElm.hasClass("original-design") && e(".s-hm").css("marginTop", -1 * e(".s-hn").height() + "px").css("paddingTop", e(".s-hn").height() + "px")) : i <= t.defaultOffsetTop && "fixed" === t.fixedNavlineElm.css("position") && (e("body").hasClass("noscroll") || (e(".s-hn").hasClass("s-hn-centered") ? t.fixedNavlineElm.attr("style", "") : t.fixedNavlineElm.css({
                            top: t.fixedNavlineElmDefTop,
                            position: t.fixedNavlineElmDefPos
                        })),
                        t.bgElm.removeClass("bgonscroll"),
                        t.mainHeaderElm.removeClass("sticky"),
                        t.sloganElm.attr("style", ""),
                        t.mainHeaderElm.hasClass("s-hn-centered") && !t.mainHeaderElm.hasClass("original-design") && e(".s-hm").css("marginTop", -1 * e(".s-hn").height() + "px"),
                        t.dispatchNavEvent("navunfixed")),
                        t.lastScrollTop = i
                    }
                }
            }
            ,
            n.prototype.init = function() {
                if (!isCMS()) {
                    var t = this
                      , n = document.getElementById("wnd_cookie_bar");
                    if (null !== n)
                        new MutationObserver((function(e) {
                            1 === e.length && (t.recalc(),
                            t.getDefaultOffsetTop(),
                            t.scroll())
                        }
                        )).observe(n, {
                            attributes: !0,
                            childList: !1,
                            subtree: !1,
                            attributeOldValue: !0
                        });
                    t.scroll(),
                    e(window).on("scroll", (function() {
                        t.scroll()
                    }
                    )),
                    e(window).on("resize orientationchange", (function() {
                        t.getDefaultOffsetTop(),
                        t.scroll()
                    }
                    ))
                }
            }
            ,
            e(".s-hn").hasClass("s-hn-bottom") && !e(".s-hm").hasClass("s-hm-hidden"))
                e(window).off("navloaded").on("navloaded", (function() {
                    new n(t).init()
                }
                ));
            else
                new n(t).init()
        }
    }
}(jQuery),
$(document).ready((function() {
    isPreview() || (equalColsHeight(),
    $(document).on("wnd-redraw", ".s-f-map", equalColsHeight),
    $(document).on("wnd-content-change", ".wnd-page", equalColsHeight),
    $(window).on("resize orientationchange", (function() {
        equalColsHeight()
    }
    )))
}
));
var moveHeaderBarMobile = function() {
    $(".s-hb .hb-lang").detach().appendTo(".menu-wrapper"),
    $(".s-hb .hb-ccy").detach().appendTo(".menu-wrapper"),
    $(".s-hb .hb-ci").clone().appendTo(".menu-wrapper"),
    $(".s-hb .hb-si").detach().appendTo(".menu-wrapper"),
    $(".s-hn .ci-mail span").text().length || $(".s-hn .ci-phone span").text().length || $(".s-hn .hb-ci").css("display", "none"),
    $(".s-hb .ci-news span").text().length || $(".s-hb").css("display", "none")
}
  , toggleCMSelements = function(e) {
    if (isCMS()) {
        var t = document.createEvent("Event");
        "open" === e && t.initEvent("wnd-open-hb-dropdown", !0, !0),
        "close" === e && t.initEvent("wnd-close-hb-dropdown", !0, !0),
        document.getElementsByClassName("s-hb")[0].dispatchEvent(t)
    }
}
  , moveHeaderBarDesktop = function() {
    $(".s-hb").attr("style", ""),
    $(".menu-wrapper .hb-si").detach().prependTo(".s-hb-c"),
    $(".menu-wrapper .hb-ci").remove(),
    $(".menu-wrapper .hb-ccy").detach().appendTo(".s-hb-c"),
    $(".menu-wrapper .hb-lang").detach().appendTo(".s-hb-c")
}
  , moveHeaderBarContent = function(e) {
    void 0 === e ? isMobileMenuCSS() && moveHeaderBarMobile() : "wnd-view-switched-mobile" === e.type ? moveHeaderBarMobile() : "wnd-view-switched-desktop" === e.type && moveHeaderBarDesktop()
}
  , bindHeaderDropdownHide = function(e) {
    $("." + e).hasClass("open") && setTimeout((function() {
        $(document).one("click", (function(t) {
            $(t.target).closest("." + e).length && !$(t.target).closest("li[selected]").length || ($("." + e).removeClass("open"),
            $(t.target).closest(".hb-ccy").length || $(t.target).closest(".hb-lang").length ? toggleCMSelements("open") : toggleCMSelements("close"))
        }
        ))
    }
    ), 10)
};
$(document).ready((function() {
    if ($(".s-hm").hasClass(".hn-bottom")) {
        var e = $(".hb-on").length ? $(".s-hb").height() : 0;
        $(".s-hn").css("top", e + $(".s-hm").height() - $(".s-hn").outerHeight() + "px")
    }
    isCMS() || ($(".si-c").length && 0 === $(".si-c").html().trim().length && $(".hb-si").addClass("empty"),
    $(".ci-news").length && 0 === $(".ci-news span").html().trim().length && $(".ci-news").addClass("empty"),
    $(".ci-mail").length && 0 === $(".ci-mail span").html().trim().length && $(".ci-mail").addClass("empty"),
    $(".ci-phone").length && 0 === $(".ci-phone span").html().trim().length && $(".ci-phone").addClass("empty")),
    $(".hbl").length && $(".hbl-a").on("click", (function() {
        $(".hbl").toggleClass("open"),
        $(".hbl").hasClass("open") ? toggleCMSelements("open") : toggleCMSelements("close"),
        bindHeaderDropdownHide("hbl")
    }
    )),
    $(".hbc").length && $(".hbc-a").on("click", (function() {
        $(".hbc").toggleClass("open"),
        $(".hbc").hasClass("open") ? toggleCMSelements("open") : toggleCMSelements("close"),
        bindHeaderDropdownHide("hbc")
    }
    )),
    $("body").on("wnd-view-switched-mobile wnd-view-switched-desktop", (function(e) {
        moveHeaderBarContent(e)
    }
    )),
    moveHeaderBarContent()
}
));
