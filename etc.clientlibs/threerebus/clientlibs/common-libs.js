/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        x = function(e) {
            return null != e && e === e.window
        },
        E = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.5.1",
        S = function(e, t) {
            return new S.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = function(e, t) {
                return e === t && (l = !0), 0
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                T()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) {
                    return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != C && T(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
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
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        T = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || j, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        S.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, S.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, a) : a
                    }
                },
                s = {};
            return S.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = S.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(S(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) {
            return S.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return S.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
        return !0
    }

    function Ee() {
        return !1
    }

    function Se(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }

    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Y.set(this, i, {
                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
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
        "char": !0,
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
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Ae(this, e, Se), !1
            },
            trigger: function() {
                return Ae(this, e), !0
            },
            delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function(e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }

    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
                else Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) {
            return Re(this, e, !0)
        },
        remove: function(e) {
            return Re(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        We = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Fe = new RegExp(ne.join("|"), "i");

    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function $e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"],
        ze = E.createElement("div").style,
        Ue = {};

    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
            while (n--)
                if ((e = _e[n] + t) in ze) return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Ze(e, t, n) {
        var r = Ie(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
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
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Ge.test(t),
                    l = e.style;
                if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() {
                    return Ze(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Ie(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Je)
    }), S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = et.prototype.init, S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick())
    }

    function ut() {
        return C.setTimeout(function() {
            tt = void 0
        }), tt = Date.now()
    }

    function lt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ft(o, e, t) {
        var n, a, r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], ot.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && le([e], !0), p.done(function() {
                    for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
                })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() {
                    var e = ft(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            n = S.timers;
        for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0
    }, S.fx.timer = function(e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function() {
        nt || (nt = !0, st())
    }, S.fx.stop = function() {
        nt = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), pt = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function vt(e) {
        return (e.match(P) || []).join(" ")
    }

    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).addClass(t.call(this, e, yt(this)))
            });
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).removeClass(t.call(this, e, yt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, yt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S(this), r = mt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var Tt = C.location,
        Ct = {
            guid: Date.now()
        },
        Et = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
    };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function(e, t) {
            r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) Dt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Dt(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var jt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");

    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Bt(t, i, o, a) {
        var s = {},
            u = t === Mt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function $t(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }
    Wt.href = Tt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
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
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function(e, t, n) {
        return S.ajax({
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
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var _t = {
            0: 200,
            1223: 204
        },
        zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = $e(y.pixelPosition, function(e, t) {
            if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Yt = C.jQuery,
        Qt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});
/*! js-cookie v2.2.1 | MIT */

! function(a) {
    var b;
    if ("function" == typeof define && define.amd && (define(a), b = !0), "object" == typeof exports && (module.exports = a(), b = !0), !b) {
        var c = window.Cookies,
            d = window.Cookies = a();
        d.noConflict = function() {
            return window.Cookies = c, d
        }
    }
}(function() {
    function a() {
        for (var a = 0, b = {}; a < arguments.length; a++) {
            var c = arguments[a];
            for (var d in c) b[d] = c[d]
        }
        return b
    }

    function b(a) {
        return a.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }

    function c(d) {
        function e() {}

        function f(b, c, f) {
            if ("undefined" != typeof document) {
                f = a({
                    path: "/"
                }, e.defaults, f), "number" == typeof f.expires && (f.expires = new Date(1 * new Date + 864e5 * f.expires)), f.expires = f.expires ? f.expires.toUTCString() : "";
                try {
                    var g = JSON.stringify(c);
                    /^[\{\[]/.test(g) && (c = g)
                } catch (j) {}
                c = d.write ? d.write(c, b) : encodeURIComponent(c + "").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), b = encodeURIComponent(b + "").replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var h = "";
                for (var i in f) f[i] && (h += "; " + i, !0 !== f[i] && (h += "=" + f[i].split(";")[0]));
                return document.cookie = b + "=" + c + h
            }
        }

        function g(a, c) {
            if ("undefined" != typeof document) {
                for (var e = {}, f = document.cookie ? document.cookie.split("; ") : [], g = 0; g < f.length; g++) {
                    var h = f[g].split("="),
                        i = h.slice(1).join("=");
                    c || '"' !== i.charAt(0) || (i = i.slice(1, -1));
                    try {
                        var j = b(h[0]);
                        if (i = (d.read || d)(i, j) || b(i), c) try {
                            i = JSON.parse(i)
                        } catch (k) {}
                        if (e[j] = i, a === j) break
                    } catch (k) {}
                }
                return a ? e[a] : e
            }
        }
        return e.set = f, e.get = function(a) {
            return g(a, !1)
        }, e.getJSON = function(a) {
            return g(a, !0)
        }, e.remove = function(b, c) {
            f(b, "", a(c, {
                expires: -1
            }))
        }, e.defaults = {}, e.withConverter = c, e
    }
    return c(function() {})
});
/*Url Pollyfill*/
(function(t) {
    var e = function() {
        try {
            return !!Symbol.iterator
        } catch (e) {
            return false
        }
    };
    var r = e();
    var n = function(t) {
        var e = {
            next: function() {
                var e = t.shift();
                return {
                    done: e === void 0,
                    value: e
                }
            }
        };
        if (r) {
            e[Symbol.iterator] = function() {
                return e
            }
        }
        return e
    };
    var i = function(e) {
        return encodeURIComponent(e).replace(/%20/g, "+")
    };
    var o = function(e) {
        return decodeURIComponent(String(e).replace(/\+/g, " "))
    };
    var a = function() {
        var a = function(e) {
            Object.defineProperty(this, "_entries", {
                writable: true,
                value: {}
            });
            var t = typeof e;
            if (t === "undefined") {} else if (t === "string") {
                if (e !== "") {
                    this._fromString(e)
                }
            } else if (e instanceof a) {
                var r = this;
                e.forEach(function(e, t) {
                    r.append(t, e)
                })
            } else if (e !== null && t === "object") {
                if (Object.prototype.toString.call(e) === "[object Array]") {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        if (Object.prototype.toString.call(i) === "[object Array]" || i.length !== 2) {
                            this.append(i[0], i[1])
                        } else {
                            throw new TypeError("Expected [string, any] as entry at index " + n + " of URLSearchParams's input")
                        }
                    }
                } else {
                    for (var o in e) {
                        if (e.hasOwnProperty(o)) {
                            this.append(o, e[o])
                        }
                    }
                }
            } else {
                throw new TypeError("Unsupported input's type for URLSearchParams")
            }
        };
        var e = a.prototype;
        e.append = function(e, t) {
            if (e in this._entries) {
                this._entries[e].push(String(t))
            } else {
                this._entries[e] = [String(t)]
            }
        };
        e.delete = function(e) {
            delete this._entries[e]
        };
        e.get = function(e) {
            return e in this._entries ? this._entries[e][0] : null
        };
        e.getAll = function(e) {
            return e in this._entries ? this._entries[e].slice(0) : []
        };
        e.has = function(e) {
            return e in this._entries
        };
        e.set = function(e, t) {
            this._entries[e] = [String(t)]
        };
        e.forEach = function(e, t) {
            var r;
            for (var n in this._entries) {
                if (this._entries.hasOwnProperty(n)) {
                    r = this._entries[n];
                    for (var i = 0; i < r.length; i++) {
                        e.call(t, r[i], n, this)
                    }
                }
            }
        };
        e.keys = function() {
            var r = [];
            this.forEach(function(e, t) {
                r.push(t)
            });
            return n(r)
        };
        e.values = function() {
            var t = [];
            this.forEach(function(e) {
                t.push(e)
            });
            return n(t)
        };
        e.entries = function() {
            var r = [];
            this.forEach(function(e, t) {
                r.push([t, e])
            });
            return n(r)
        };
        if (r) {
            e[Symbol.iterator] = e.entries
        }
        e.toString = function() {
            var r = [];
            this.forEach(function(e, t) {
                r.push(i(t) + "=" + i(e))
            });
            return r.join("&")
        };
        t.URLSearchParams = a
    };
    var s = function() {
        try {
            var e = t.URLSearchParams;
            return new e("?a=1").toString() === "a=1" && typeof e.prototype.set === "function"
        } catch (e) {
            return false
        }
    };
    if (!s()) {
        a()
    }
    var f = t.URLSearchParams.prototype;
    if (typeof f.sort !== "function") {
        f.sort = function() {
            var r = this;
            var n = [];
            this.forEach(function(e, t) {
                n.push([t, e]);
                if (!r._entries) {
                    r.delete(t)
                }
            });
            n.sort(function(e, t) {
                if (e[0] < t[0]) {
                    return -1
                } else if (e[0] > t[0]) {
                    return +1
                } else {
                    return 0
                }
            });
            if (r._entries) {
                r._entries = {}
            }
            for (var e = 0; e < n.length; e++) {
                this.append(n[e][0], n[e][1])
            }
        }
    }
    if (typeof f._fromString !== "function") {
        Object.defineProperty(f, "_fromString", {
            enumerable: false,
            configurable: false,
            writable: false,
            value: function(e) {
                if (this._entries) {
                    this._entries = {}
                } else {
                    var r = [];
                    this.forEach(function(e, t) {
                        r.push(t)
                    });
                    for (var t = 0; t < r.length; t++) {
                        this.delete(r[t])
                    }
                }
                e = e.replace(/^\?/, "");
                var n = e.split("&");
                var i;
                for (var t = 0; t < n.length; t++) {
                    i = n[t].split("=");
                    this.append(o(i[0]), i.length > 1 ? o(i[1]) : "")
                }
            }
        })
    }
})(typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : this);
(function(h) {
    var e = function() {
        try {
            var e = new h.URL("b", "http://a");
            e.pathname = "c%20d";
            return e.href === "http://a/c%20d" && e.searchParams
        } catch (e) {
            return false
        }
    };
    var t = function() {
        var t = h.URL;
        var e = function(e, t) {
            if (typeof e !== "string") e = String(e);
            var r = document,
                n;
            if (t && (h.location === void 0 || t !== h.location.href)) {
                r = document.implementation.createHTMLDocument("");
                n = r.createElement("base");
                n.href = t;
                r.head.appendChild(n);
                try {
                    if (n.href.indexOf(t) !== 0) throw new Error(n.href)
                } catch (e) {
                    throw new Error("URL unable to set base " + t + " due to " + e)
                }
            }
            var i = r.createElement("a");
            i.href = e;
            if (n) {
                r.body.appendChild(i);
                i.href = i.href
            }
            if (i.protocol === ":" || !/:/.test(i.href)) {
                throw new TypeError("Invalid URL")
            }
            Object.defineProperty(this, "_anchorElement", {
                value: i
            });
            var o = new h.URLSearchParams(this.search);
            var a = true;
            var s = true;
            var f = this;
            ["append", "delete", "set"].forEach(function(e) {
                var t = o[e];
                o[e] = function() {
                    t.apply(o, arguments);
                    if (a) {
                        s = false;
                        f.search = o.toString();
                        s = true
                    }
                }
            });
            Object.defineProperty(this, "searchParams", {
                value: o,
                enumerable: true
            });
            var c = void 0;
            Object.defineProperty(this, "_updateSearchParams", {
                enumerable: false,
                configurable: false,
                writable: false,
                value: function() {
                    if (this.search !== c) {
                        c = this.search;
                        if (s) {
                            a = false;
                            this.searchParams._fromString(this.search);
                            a = true
                        }
                    }
                }
            })
        };
        var r = e.prototype;
        var n = function(t) {
            Object.defineProperty(r, t, {
                get: function() {
                    return this._anchorElement[t]
                },
                set: function(e) {
                    this._anchorElement[t] = e
                },
                enumerable: true
            })
        };
        ["hash", "host", "hostname", "port", "protocol"].forEach(function(e) {
            n(e)
        });
        Object.defineProperty(r, "search", {
            get: function() {
                return this._anchorElement["search"]
            },
            set: function(e) {
                this._anchorElement["search"] = e;
                this._updateSearchParams()
            },
            enumerable: true
        });
        Object.defineProperties(r, {
            toString: {
                get: function() {
                    var e = this;
                    return function() {
                        return e.href
                    }
                }
            },
            href: {
                get: function() {
                    return this._anchorElement.href.replace(/\?$/, "")
                },
                set: function(e) {
                    this._anchorElement.href = e;
                    this._updateSearchParams()
                },
                enumerable: true
            },
            pathname: {
                get: function() {
                    return this._anchorElement.pathname.replace(/(^\/?)/, "/")
                },
                set: function(e) {
                    this._anchorElement.pathname = e
                },
                enumerable: true
            },
            origin: {
                get: function() {
                    var e = {
                        "http:": 80,
                        "https:": 443,
                        "ftp:": 21
                    }[this._anchorElement.protocol];
                    var t = this._anchorElement.port != e && this._anchorElement.port !== "";
                    return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port : "")
                },
                enumerable: true
            },
            password: {
                get: function() {
                    return ""
                },
                set: function(e) {},
                enumerable: true
            },
            username: {
                get: function() {
                    return ""
                },
                set: function(e) {},
                enumerable: true
            }
        });
        e.createObjectURL = function(e) {
            return t.createObjectURL.apply(t, arguments)
        };
        e.revokeObjectURL = function(e) {
            return t.revokeObjectURL.apply(t, arguments)
        };
        h.URL = e
    };
    if (!e()) {
        t()
    }
    if (h.location !== void 0 && !("origin" in h.location)) {
        var r = function() {
            return h.location.protocol + "//" + h.location.hostname + (h.location.port ? ":" + h.location.port : "")
        };
        try {
            Object.defineProperty(h.location, "origin", {
                get: r,
                enumerable: true
            })
        } catch (e) {
            setInterval(function() {
                h.location.origin = r()
            }, 100)
        }
    }
})(typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : this);
/*Startswith Pollyfill*/
if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        value: function(search, rawPos) {
            var pos = rawPos > 0 ? rawPos | 0 : 0;
            return this.substring(pos, pos + search.length) === search;
        }
    });
}
window.loadExternalOS = true;
window.three_gblChannel = 1;
window.three_clearCookie = function(name) {
    document.cookie = encodeURIComponent(name) + "=deleted; Path=/; expires=" + new Date(0).toUTCString();
};
window.three_Domain = window.location.origin;
window.three_gblURLObj = {
    "topupLanding": "/account/top-up",
    "topupByBundle": "/account/top-up/bundle",
    "cashCredit": "/account/top-up/credit",
    "differentNumber": "/account/top-up/different-number",
    "topup_different_number": "/account/top-up/different-number",
    "browsePaygBundles": "/account/top-up/browse-bundles",
    "browse_payg_bundles": "/account/top-up/browse-bundles",
    "buyAgainBundle": "/account/top-up/buy-again-bundle",
    "buyAgainCredit": "/account/top-up/buy-again-credit",
    "buyAgainAddon": "/my3account/buy-more-addons",
    "manageAutoTopup": "/account/top-up/view-auto-top-up",
    "view_auto_topup": "/account/top-up/view-auto-top-up",
    "autoTopUp": "/account/top-up/auto-top-up",
    "autoTopUpByBundle": "/account/top-up/auto-top-up/bundle",
    "cancelAutoTopupPayment": "/account/top-up/auto-top-up/cancel",
    "topupByBundleAnon": "/account/top-up/topup-by-bundle-anon",
    "redeemVoucher": "/account/top-up/voucher",
    "anonymousTopUp": "/account/anonymous-top-up",
    /*-- 22, 23*/ "editAutoTopupBalance": "/account/top-up/auto-top-up/edit-auto-topup-balance",
    "editAutoTopupPayment": "/account/top-up/auto-top-up/edit-auto-topup-payment",
    /* From Topup Landing Page*/ "topup_landing_page": "/account/top-up",
    "browse_payg_bundles": "/account/top-up/browse-bundles",
    "topup_cash_credit": "/account/top-up/credit",
    "redeem_voucher": "/account/top-up/voucher",
    "buy_again_bundle": "/account/top-up/buy-again-bundle",
    "buy_again_credit": "/account/top-up/buy-again-credit",
    "auto_topup": "/account/top-up/auto-top-up",
    "topup_by_bundle": "/account/top-up/bundle",
    "recurrenceActivationSettingsNonNDS": "/account/top-up/about-recurrence",
    "cancelRecurringAddonNonNDS": "/account/top-up/cancel-recurrence",
    "ReturnToDashboard": "/account",
    /* Login*/ "login": "/account/login",
    "idkNumber": "/account/login/find-my-number",
    "resetPassword": "/account/login/reset-password",
    /* Your Details*/ "changePersonalDetails": "/account/your-details",
    "changeAddress": "/account/your-details/address",
    "changeAlternateNumber": "/account/your-details/alternate-number",
    "changeDOB": "/account/your-details/date-of-birth",
    "changeEmail": "/account/your-details/email",
    "changeName": "/account/your-details/name",
    "changePassword": "/account/your-details/change-password",
    "changeNumber": "/account/account-settings/change-number",
    "marketingPrefDataConsents": "/account/your-details/marketing-preferences",
    /* Add-ons*/ "browseAddon": "/account/add-ons/browse",
    "buyAddon": "/account/add-ons/buy",
    "viewAddon": "/account/add-ons/view",
    "manageAddon": "/account/add-ons/manage",
    "recurrenceActivationSettings": "/account/activation-recurrence",
    "cancelRecurringAddon": "/account/add-ons/cancel-recurrence",
    "buyMoreAddons": "/account/add-ons/buy-more",
    "addonConfirmation": "/account/add-ons/buy-more/confirm",
    "amendRecurrence": "/account/add-ons/about-recurring-add-ons",
    /* Case Management*/ "caseDetail": "/account/help/issues/case-detail",
    "closeCase": "/account/help/issues/close",
    "reopenCase": "/account/help/issues/reopen",
    "myIssues": "/account/help/issues",
    "otherCloseReason": "/account/help/issues/reason",
    /* Dashboard*/ "dashboard": "/account",
    /* Manage Lost or Stolen*/ "manageLostAndStolen": "/account/help/lost-or-stolen",
    "barDevice": "/account/help/lost-or-stolen/bar-device",
    "suspendSIM": "/account/help/lost-or-stolen/suspend-sim",
    "unbarDevice": "/account/help/lost-or-stolen/unbar-device",
    "unsuspendSIM": "/account/help/lost-or-stolen/unsuspend-sim",
    /* Replacement SIM*/ "orderAndSIMReplacement": "/account/help/replace-sim",
    "activateReplacementSIM": "/account/help/replacement-sim/activate",
    /* Adult Filter*/ "adultFilterOn": "/account/account-settings/adult-filter-on",
    "adultFilterOff": "/account/account-settings/adult-filter-off",
    /* Unlock SIM*/ "pukUnlock": "/account/help/unlock-sim",
    /* Port-In */ "requestPortIn": "/account/help/switch-to-three",
    "viewPortIn": "/account/help/switch-to-three",
    "cancelPortIn": "/account/help/switch-to-three/cancel-port-in",
    "changePortInDate": "/account/help/switch-to-three/date-selection",
    "amendPortIn": "/account/help/switch-to-three/date-selection",
    /* Port-Out */ "portOut": "/account/help/leaving-three",
    /* Manage Payment*/ "manageWallet": "/account/manage-cards",
    "addNewCard": "/account/manage-cards/add",
    "deleteCard": "/account/manage-cards/remove",
    "setDefaultCard": "/account/manage-cards/set-default",
    /* Fraud Management - Suspicious Activity*/ "fraudFlag": "/account/help/suspicious-activity/upload",
    "reportFraud": "/account/help/suspicious-activity",
    /* View Services*/ "viewServices": "/account/account-settings/manage-services",
    /* Callback*/ "paymentURL": window.three_Domain + "/bin/payment-handler",
    /* Error page*/ "error": "/content/three-rebus/error/error.html",
    "errorScreen": "/account/generic-error",
    "sessionTimeout": "/content/three-rebus/error/error.html",
    /*View Charges*/ "viewCharges": "/account/charges",
    "viewMyCharges": "/account/charges/view",
    "manageSpendLimit": "/account/charges/spend-limit",
    /*RebusLogin:*/ "rebusLogin": "/account/three-login",
    /*Maintanence Release:*/ "resendEmail": "/account/login/resend-email",
    "emailVerificationStatus": "/account/login/email-status",
    "pendingEmailVerification": "/account/login/verify-email",
    /*AccessNotAvailable*/ "accessNotAvailable": "/account/access-not-available",
    /*Anonymous dashboard*/ "anonymousDashboard": "/account/anonymous-dashboard",
    /*Account Block*/ "accountBlockAlert": "/account/account-block-alert",
    /*ManagePaymentSettings*/ "manageAccountPaymentMethod": "/account/manage-payment-methods",
    "setupORUpdateDirectDebit": "/account/manage-payment-methods/direct-debit",
    /*Bills*/ "payNow": "/account/bills/make-a-bill-payment",
    "payUnBilled": "/account/bills/make-a-payment",
    "manageBill": "/account/bills/manage-bill-preferences",
    "changeBillFormat": "/account/bills/change-bill-format",
    /*Plan and Device*/ "planAndDevice": "/account/plan-and-device",
    /*Retailers: Topup Datapack*/ "iccid": "/top-up-data-pack",
    /*Two Factor Authentication*/ "twoFactorAuth": "/account/login/enter-passcode",
    "resendPasscode": "/account/login/resend-passcode",
    "passwordReset": "/account/login/password-reset"
};
var staticPath = "";
var payGurl = "";
var payMurl = "";

function redirectTo(event) {
    payGurl = event.getAttribute('data-payGurl');
    payMurl = event.getAttribute('data-payMurl');
    if (sessionStorage.getItem('sub_type') == 0) {
        staticPath = payGurl;
    } else {
        staticPath = payMurl;
    }
    $('#myNavWraper').on("hide.bs.dropdown", function(e) {
        if (staticPath == null || staticPath == undefined) {
            return false;
        }
    });
    if (staticPath == null || staticPath == undefined) {
        return false;
    } else {
        var urlData = {}; /*getURLData();*/
        urlData["ContextId"] = sessionStorage.getItem('sub_id');
        var pageURL = new URL(location.origin + staticPath);
        pageURL.searchParams.forEach(function(val, key) {
            if (urlData[key] !== undefined) {
                console.log(key, urlData[key]);
                pageURL.searchParams.set(key, urlData[key]);
            }
        });
        if (pageURL.pathname === location.pathname) {
            window.location.reload();
        } else { /*window.location=pageURL.href;*/
            window.location.href = pageURL.href.replace("#/", "");
        }
    }
};

function loadExternalScripts() {
    if (window.hasOwnProperty('oscripts') && oscripts['loaded'] === undefined) { /* Adobe analytics*/
        $.getScript(oscripts['analytics'], function(data, textStatus, jqxhr) {
            postAnalyticsData();
        }); /* Bold Chat*/ /* Medallia*/
        $.getScript(oscripts['medallia']);
        oscripts['loaded'] = true;
    }
};
$(document).ready(function() {
    $("#main-footer-block").addClass("main-footer-topgap");
    var nativeLinks = [three_gblURLObj.login, three_gblURLObj.anonymousTopUp];
    if (nativeLinks.indexOf(window.location.pathname) !== -1) {
        $("#browser-error-block").addClass("hide");
    }
    $("a").on('click', function() {
        $(this).addClass("visited");
    });
    $(document).on("click", "a", function() { /*alert("coming click");*/
        $(this).addClass("visited");
    });
    $(document).on('keydown', function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode == 9) {
            $('body').addClass("keyboard-focus");
        }
    });
    $(document).mousemove(function(event) {
        $('body').removeClass("keyboard-focus");
    });
}); /*New XF header implementation JS*/
function loginfunction() {
    var hostname = $(location).attr('hostname');
    var pathname = $(location).attr('pathname');
    var encodedString = btoa(pathname); /*this will redirect us in same window*/
    var go_to_url = "/account/login"; /*?target="+encodedString;*/
    window.location.href = go_to_url;
};

function registerfunction() {
    var hostname = $(location).attr('hostname');
    var pathname = $(location).attr('pathname');
    var encodedString = btoa(pathname); /*this will redirect us in same window*/
    var go_to_url = "/account/login?aemPath=login"; /*?target="+encodedString;*/
    window.location.href = go_to_url;
};

function logoutfunction() {
    user_logout(true);
    userData = {}; /* Since its an explicity logout,clear the ReturnURL. This is set within alogout()*/
    sessionStorage.removeItem(window.ReturnURL);
};
$(window).on("load", function() {
    if (isLoggedIn()) {
        $('.not-aslink.login').show();
    } else {
        $('.not-aslink.login').hide();
    }
    if (sessionStorage.getItem('EmailStatus') === 'false') {
        $('.login-menu-section').find('.responsivegrid.aem-GridColumn').first().hide();
        $('.not-aslink.login').hide();
    } else {
        $('.login-menu-section').find('.responsivegrid.aem-GridColumn').first().show();
    }
    var loggedin;
    if (isLoggedIn()) {
        $('.login_register').hide();
        loggedin = true;
    } else {
        $('.login_register').show();
        loggedin = false;
    } /*Added by template team- for background gradient position adjustment when cookie tab is active*/
    var last_child_margin = 10;

    function adjust_max_height() {
        if ($("#main-header-block #mobileMenu .login-menu-section").is(':not(:empty)')) {
            var div_width = $("#main-header-block .header-wrapper .menu:first-child .responsivegrid:first-child .submenulink:first-child").outerWidth();
            var window_width = $(window).width();
            if (window_width <= 899) {
                window_width = window_width - 54;
                if (((div_width * 3) - -last_child_margin) <= window_width) {
                    $("#main-header-block .header-wrapper .menu:first-child .responsivegrid:first-child .aem-Grid:first-child").removeClass("m_h_560 m_h_840");
                    $("#main-header-block .header-wrapper .menu:first-child .responsivegrid:first-child .aem-Grid:first-child").addClass("m_h_320");
                } else if (((div_width * 2) - -last_child_margin) <= window_width) {
                    $("#main-header-block .header-wrapper .menu:first-child .responsivegrid:first-child .aem-Grid:first-child").removeClass("m_h_320 m_h_840");
                    $("#main-header-block .header-wrapper .menu:first-child .responsivegrid:first-child .aem-Grid:first-child").addClass("m_h_560");
                } else if ((div_width - -last_child_margin) <= window_width) {
                    $("#main-header-block .header-wrapper .menu:first-child .responsivegrid:first-child .aem-Grid:first-child").removeClass("m_h_320 m_h_560");
                    $("#main-header-block .header-wrapper .menu:first-child .responsivegrid:first-child .aem-Grid:first-child").addClass("m_h_840");
                }
            } else {
                $("#main-header-block .header-wrapper .menu:first-child .responsivegrid:first-child .aem-Grid:first-child").removeClass("m_h_320 m_h_560 m_h_840");
            }
        }
    };

    function adjust_max_height_general() {
        var div_width = $("#main-header-block .header-wrapper .menu:not(:first-child) li.dropdown-large.open .responsivegrid:first-child .submenulink:first-child").outerWidth(true);
        var window_width = $(window).width();
        if (window_width <= 899) {
            window_width = window_width - 54;
            if (((div_width * 3) - last_child_margin) <= window_width) {
                $("#main-header-block .header-wrapper .menu:not(:first-child) .responsivegrid:first-child .aem-Grid:first-child").removeClass("m_h_450 m_h_670");
                $("#main-header-block .header-wrapper .menu:not(:first-child) .responsivegrid:first-child .aem-Grid:first-child").addClass("m_h_320");
            } else if ((((div_width * 2) - last_child_margin) <= window_width) && (window_width > 509)) {
                $("#main-header-block .header-wrapper .menu:not(:first-child) .responsivegrid:first-child .aem-Grid:first-child").removeClass("m_h_320 m_h_670");
                $("#main-header-block .header-wrapper .menu:not(:first-child) .responsivegrid:first-child .aem-Grid:first-child").addClass("m_h_450");
            } else if ((div_width - last_child_margin) <= window_width) {
                $("#main-header-block .header-wrapper .menu:not(:first-child) .responsivegrid:first-child .aem-Grid:first-child").removeClass("m_h_320 m_h_450");
                $("#main-header-block .header-wrapper .menu:not(:first-child) .responsivegrid:first-child .aem-Grid:first-child").addClass("m_h_670");
            }
        } else {
            $("#main-header-block .header-wrapper .menu:not(:first-child) .responsivegrid:first-child .aem-Grid:first-child").removeClass("m_h_320 m_h_450 m_h_670");
        }
    };
    $("#main-header-block #mobileMenu .menu:first-child li.dropdown-large > a").on('click', function() {
        setTimeout(function() {
            adjust_max_height();
        }, 10);
    });
    $("#main-header-block #mobileMenu .menu:not(:first-child) li.dropdown-large > a").on('click', function() {
        setTimeout(function() {
            adjust_max_height_general();
        }, 10);
    });
    $(window).resize(function() {
        if (loggedin && ($("#main-header-block #mobileMenu .menu:first-child li.dropdown-large").hasClass("open"))) {
            adjust_max_height();
        }
        if ($("#main-header-block #mobileMenu .menu:not(:first-child) li.dropdown-large").hasClass("open")) {
            adjust_max_height_general();
        }
    });
    $("#main-header-block #mobileMenu .close-link button.mobileMenuClose").on("click", function() {
        $("#main-header-block .header-wrapper-nav-bar .navbar-header").removeClass("addbg-blue");
    });
});
$(document).ready(function() {
    $('#mysearch').blur(function() {
        if (!$(this).val()) {
            $(".search-label").show();
        } else {
            $(".search-label").hide();
        }
    });
});
if (typeof angular !== 'undefined') {
    var rebusModule = angular.module('rebus', []);
    rebusModule.directive('scroll', function($compile, $timeout, $filter, $rootScope, $window) {
        return {
            link: function(scope, elem, attrs) { /*elem.on('scroll', function (e){*/
                scope.showFeedbackButton = true;
                angular.element($window).bind("scroll", function() {
                    if (window.innerWidth < 900) {
                        scope.showFeedbackButton = false;
                        if (scope._timeout) { /*if there is already a timeout in process cancel it*/
                            $timeout.cancel(scope._timeout);
                        }
                        scope._timeout = $timeout(function() {
                            scope._timeout = null;
                            scope.showFeedbackButton = true;
                        }, 550);
                    } else {
                        scope.showFeedbackButton = true;
                        if (scope._timeout) { /*if there is already a timeout in process cancel it*/
                            $timeout.cancel(scope._timeout);
                        }
                    }
                });
            }
        }
    });
    rebusModule.directive('svgIconWeb', function($compile, $timeout, $filter) {
        return {
            restrict: 'AE',
            templateUrl: '',
            link: function(scope, element, attrs) {
                if (attrs.icontype) {
                    scope.selected = attrs.icontype;
                    try {
                        element[0].innerHTML = eval(scope.selected);
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        };
    });
    rebusModule.directive('h3gBackToHomeDirective', function() {
        return {
            restrict: "C",
            template: '<hr/><a ng-click="setAction(backToHomeAction)" tabindex="0">Back to home</a>',
            link: function(scope) {
                scope.backToHomeAction = {
                    aemPath: 'dashboard'
                };
                scope.setAction = function(action) { /*AEM Redirection*/
                    if (window.three_gblURLObj) {
                        window.location.href = window.three_gblURLObj[action.aemPath];
                    } /*Mobile App Redirection*/
                    else if ((window.location.protocol !== 'http:') && (window.location.protocol !== 'https:')) {
                        window.postMessage(JSON.stringify({
                            "name": action.aemPath
                        }));
                    } else {
                        return;
                    }
                };
            }
        };
    });
    rebusModule.controller('ExtendedChat', ['$scope', '$http', '$attrs', function($scope, $http, $attrs) {
        var baseURL = window.location.origin;
        var extendedActive = "/bin/getchatcf.identifier/extendedChat.json";
        var extendedBlockedCF = "/bin/getchatcf.identifier/unblockAccount.json";
        var simpleCF = "/bin/getchatcf.identifier/simplechat.json";
        var simpleCFLink = "/bin/getchatcf.identifier/simplechatlink.json";
        $scope.cfURL = "";
        $scope.fraudStatus = false;
        var isAccountPage = (window.location.pathname == "/account");
        $scope.numberSuspended = isAccountPage; /* For OS/Card pages $attrs.fraudStatus==null*/
        if ($attrs.fraudStatus !== undefined) {
            $scope.fraudStatus = false;
        } else if (sessionStorage.getItem('fs') !== null) {
            $scope.fraudStatus = JSON.parse(sessionStorage.getItem('fs'));
        } /* Set ONLY if its not set...*/
        if ($scope.ctype === undefined) {
            $scope.ctype = $scope.childScopeCtype;
            if ($scope.ctype === undefined) {
                $scope.ctype = $attrs.ctype;
            }
        }
        if ($scope.ctype === 'simple') {
            if (window.location.pathname == "/account/help/leaving-three" || "/account/generic-error") {
                $scope.cfURL = simpleCFLink;
            } else {
                $scope.cfURL = simpleCF;
            }
        } else if ($scope.ctype === 'extended') {
            if ($scope.fraudStatus || $scope.numberSuspended) {
                $scope.cfURL = extendedBlockedCF;
            } else {
                $scope.cfURL = extendedActive;
            }
        }
        if (($scope.ctype !== undefined) && $scope.cfURL !== "") {
            $http({
                method: "GET",
                url: $scope.cfURL
            }).then(function(resp) {
                data = resp["data"];
                if (data.length > 0) {
                    if (data[0] !== undefined && data[0]["unblockAccount"] !== undefined || data[0]["extendedChat"] !== undefined) {
                        if ($scope.ctype === 'extended' || $scope.ctype === 'extended') {
                            if ($scope.fraudStatus || $scope.numberSuspended) {
                                $scope.cdata = data[0]["unblockAccount"];
                            } else if (!$scope.fraudStatus) {
                                $scope.cdata = data[0]["extendedChat"];
                            }
                        }
                    } else if (data[0]["simpleChat"] !== undefined && $scope.ctype === 'simple') {
                        $scope.cdata = data[0]["simpleChat"];
                    } else if (data[0]["simpleChatLink"] !== undefined && $scope.ctype === 'simple') {
                        $scope.cdata = data[0]["simpleChatLink"];
                    }
                } else {
                    console.log("Chat component no data found", cfURL);
                }
            }, function(errResp) {
                config.deferred.reject(errResp);
            });
        }
    }]);
    rebusModule.directive('aemChatComponent', function() {
        return {
            scope: {
                'cdata': "=?",
                'childScopeCtype': '=ctype'
            },
            restrict: 'E',
            controller: 'ExtendedChat',
            templateUrl: '/content/three/templates/chat-component.html'
        };
    });
}
/*This Css is only to define Svg Icons Variables*/
var alertfilled = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Alert/Critical/Filled/Black/30</title><g id="Alert/Critical/Filled/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M28.8505,25.4717073 L15.8505,4.44222028 C15.4855,3.85239324 14.5145,3.85239324 14.1495,4.44222028 L1.1495,25.4717073 C0.9585,25.7811412 0.9505,26.1686846 1.1255,26.4861297 C1.3025,26.8035748 1.6375,26.99985 1.9995,26.99985 L27.9995,26.99985 C28.3625,26.99985 28.6975,26.8035748 28.8735,26.4861297 C29.0495,26.1686846 29.0405,25.7811412 28.8505,25.4717073" id="Fill-1" fill="#2B2B2B"></path><path d="M15.0001,20 C14.4471,20 14.0001,19.553 14.0001,19 L14.0001,12 C14.0001,11.448 14.4471,11 15.0001,11 C15.5531,11 16.0001,11.448 16.0001,12 L16.0001,19 C16.0001,19.553 15.5531,20 15.0001,20" id="Fill-4" fill="#FFFFFF" transform="translate(15.000100, 15.500000) rotate(180.000000) translate(-15.000100, -15.500000) "></path><path d="M16.0001,23 C16.0001,23.552 15.5531,24 15.0001,24 C14.4471,24 14.0001,23.552 14.0001,23 C14.0001,22.448 14.4471,22 15.0001,22 C15.5531,22 16.0001,22.448 16.0001,23" id="Fill-6" fill="#FFFFFF" transform="translate(15.000100, 23.000000) rotate(180.000000) translate(-15.000100, -23.000000) "></path></g></svg>';
var alertlarge = '<svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Alert/Error/Line/Red/100</title><g id="Alert/Error/Line/Red/100" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M9.92540862,83.049518 L89.0741991,83.049518 L49.5002994,19.1781888 L9.92540862,83.049518 Z M93.5230543,88.0004 L5.47754451,88.0004 C4.57865575,88.0004 3.7511231,87.5142234 3.31307587,86.7300037 C2.87601971,85.945784 2.89782296,84.9853128 3.37154824,84.222877 L47.3933121,13.1727689 C47.8452341,12.4430089 48.642044,12.0004 49.5002994,12.0004 C50.3575638,12.0004 51.1553647,12.4430089 51.6072867,13.1727689 L95.6300416,84.222877 C96.1017848,84.9853128 96.1245791,85.945784 95.6865319,86.7300037 C95.2504668,87.5142234 94.4219431,88.0004 93.5230543,88.0004 Z" id="Fill-1" fill="#EC0026"></path><path d="M49.5,65 C48.119,65 47,63.9135593 47,62.5727419 L47,35.4272581 C47,34.0864407 48.119,33 49.5,33 C50.881,33 52,34.0864407 52,35.4272581 L52,62.5727419 C52,63.9135593 50.881,65 49.5,65" id="Fill-4" fill="#EC0026"></path><path d="M53,74.5024 C53,72.5695642 51.4328358,71.0024 49.5,71.0024 C47.5671642,71.0024 46,72.5695642 46,74.5024 C46,76.4362601 47.5671642,78.0024 49.5,78.0024 C51.4328358,78.0024 53,76.4362601 53,74.5024" id="Fill-6" fill="#EC0026"></path></g></svg>';
var android = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Android/Black/30</title> <g id="Android/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M22,22.0730341 C22,22.5847756 21.598516,23 21.1026236,23 L7.89936399,23 C7.40347158,23 7,22.5847756 7,22.0730341 L7,9.9259605 C7,9.41421903 7.40347158,9 7.89936399,9 L21.1026236,9 C21.598516,9 22,9.41421903 22,9.9259605 L22,22.0730341" id="Fill-1" fill="#2A2A2A"></path> <path d="M26,17.4605176 C26,18.3098872 25.328,19 24.5,19 C23.671,19 23,18.3098872 23,17.4605176 L23,10.5404304 C23,9.68916485 23.671,9 24.5,9 C25.328,9 26,9.68916485 26,10.5404304 L26,17.4605176" id="Fill-3" fill="#2A2A2A"></path> <path d="M6,17.4605176 C6,18.3098872 5.329,19 4.5,19 C3.672,19 3,18.3098872 3,17.4605176 L3,10.5404304 C3,9.68916485 3.672,9 4.5,9 C5.329,9 6,9.68916485 6,10.5404304 L6,17.4605176" id="Fill-6" fill="#2A2A2A"></path> <path d="M17.8338303,6.00001801 C17.3726893,6.00001801 17,5.6417274 17,5.20002522 C17,4.75832304 17.3726893,4.40003243 17.8338303,4.40003243 C18.2929835,4.40003243 18.6666667,4.75832304 18.6666667,5.20002522 C18.6666667,5.6417274 18.2929835,6.00001801 17.8338303,6.00001801 M11.1661697,6.00001801 C10.7060227,6.00001801 10.3333333,5.6417274 10.3333333,5.20002522 C10.3333333,4.75832304 10.7060227,4.40003243 11.1661697,4.40003243 C11.6263168,4.40003243 12,4.75832304 12,5.20002522 C12,5.6417274 11.6263168,6.00001801 11.1661697,6.00001801 M14.5004969,2.00005404 C7.16696482,1.97920115 7,8 7,8 L22,8 C22,8 21.7634665,2.02185479 14.5004969,2.00005404" id="Fill-9" fill="#2A2A2A"></path> <path d="M20,26.4602979 C20,27.3103121 19.329,28 18.5,28 C17.672,28 17,27.3103121 17,26.4602979 L17,19.5397021 C17,18.6896879 17.672,18 18.5,18 C19.329,18 20,18.6896879 20,19.5397021 L20,26.4602979" id="Fill-11" fill="#2A2A2A"></path> <path d="M13,26.4602979 C13,27.3103121 12.328,28 11.5,28 C10.671,28 10,27.3103121 10,26.4602979 L10,19.5397021 C10,18.6896879 10.671,18 11.5,18 C12.328,18 13,18.6896879 13,19.5397021 L13,26.4602979" id="Fill-13" fill="#2A2A2A"></path> <path d="M11.444557,4.00002762 C11.2463257,4.00002762 11.0532034,3.88526573 10.9540877,3.68222545 L10.065112,1.88244992 C9.9210366,1.59002778 10.0242395,1.22587945 10.2939977,1.0702888 C10.5637558,0.915801634 10.9019753,1.02394265 11.0460507,1.31746827 L11.9340046,3.1172438 C12.0791018,3.40966594 11.9769206,3.77381427 11.7061407,3.92940492 C11.6223522,3.97685455 11.5334546,4.00002762 11.444557,4.00002762" id="Fill-15" fill="#2A2A2A"></path> <path d="M18.5553874,4.00066661 C18.4664987,4.00066661 18.37761,3.97748808 18.2938299,3.9300273 C18.023077,3.77440007 17.9209062,3.41016613 18.0659888,3.11767525 L18.9538538,1.31747661 C19.0979148,1.02498573 19.4361004,0.916819285 19.7058315,1.07023903 C19.9765844,1.22586626 20.0787552,1.5901002 19.9346943,1.88259108 L19.0458076,3.68278972 C18.9467018,3.88587773 18.7535989,4.00066661 18.5553874,4.00066661" id="Fill-17" fill="#2A2A2A"></path> </g> </svg>';
var apple = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Apple/Black/30</title> <g id="Apple/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M22.2089411,15.6489524 C22.1753601,12.3166052 25.1275264,10.7112409 25.2608628,10.6352293 C23.6035409,8.36704411 21.0168151,8.0569169 20.0943248,8.02043135 C17.895756,7.81469337 15.8028686,9.23053553 14.6867937,9.23053553 C13.5726941,9.23053553 11.8491979,8.05184947 10.0259463,8.08529456 C7.62687908,8.11569918 5.41645814,9.38458565 4.181862,11.3872371 C1.69291617,15.4199042 3.54579806,21.3923866 5.97350793,24.6639246 C7.15872023,26.261181 8.57406125,28.0631619 10.4318815,27.9982987 C12.2235275,27.9334355 12.8971231,26.9209614 15.0591479,26.9209614 C17.2211727,26.9209614 17.828594,27.9982987 19.7229583,27.9648536 C21.6459652,27.9334355 22.8677216,26.3331386 24.0460202,24.7287878 C25.407039,22.8700515 25.9680394,21.0721245 26.0006328,20.9788837 C25.9591503,20.9657083 22.2484482,19.6360126 22.2089411,15.6489524" id="Fill-1" fill="#2A2A2A"></path> <path d="M18.4301841,6.1523 C19.4643813,5.0513 20.1590222,3.5243 19.9685395,2.0003 C18.4798752,2.0523 16.6733946,2.8723 15.6071052,3.9703 C14.6495152,4.9443 13.8099417,6.4993 14.0376928,7.9913 C15.6982056,8.1053 17.3949516,7.2523 18.4301841,6.1523" id="Fill-3" fill="#2A2A2A"></path> </g> </svg>';
var arrowdown = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><title>ArrowDownCircleFill/Line/Black/30</title><desc>Created with Sketch.</desc><defs></defs><style type="text/css">.iadcst12{display:none;}</style><g id="Guides"></g><g id="THE_ICONS"><path d="M11,1C5.48,1,1,5.48,1,11c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10C21,5.48,16.52,1,11,1z M11,15.67L4.34,9.75l1.33-1.49L11,13l5.34-4.74l1.33,1.49L11,15.67z"/></g><g id="Layer_3" class="iadcst12"></g><g id="Layer_4" class="iadcst12"></g><g id="Layer_5" class="iadcst12"></g></svg>';
var arrowdowncircle = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>ArrowDown/Circle/Line/Black/30</title><g id="ArrowDown/Circle/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1 M15,3 C21.617,3 27,8.383 27,15 C27,21.617 21.617,27 15,27 C8.383,27 3,21.617 3,15 C3,8.383 8.383,3 15,3" id="Fill-1" fill="#2B2B2B"></path><path d="M21,20 C20.745,20 20.49,19.903 20.295,19.709 L14.972,14.414 L9.709,19.705 C9.32,20.097 8.687,20.1 8.295,19.709 C7.903,19.319 7.901,18.687 8.291,18.295 L14.259,12.295 C14.445,12.107 14.7,12 14.965,12 L14.968,12 C15.232,12 15.485,12.104 15.673,12.291 L21.705,18.291 C22.097,18.681 22.099,19.313 21.709,19.705 C21.514,19.901 21.257,20 21,20" id="Fill-3" fill="#2B2B2B" transform="translate(15.000000, 16.000315) scale(1, -1) translate(-15.000000, -16.000315) "></path></g></svg>';
var arrowdowncirclefilled = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>ArrowDown/Circle/Filled/Blue/30</title><g id="ArrowDown/Circle/Filled/Blue/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1" id="Page-1" fill="#0074B8"></path><path d="M20.5999978,20 C20.2425313,20 19.8850648,19.854 19.6125316,19.563 L14.9757333,14.621 L10.3921351,19.558 C9.84706865,20.146 8.96040232,20.146 8.41253586,19.563 C7.86373607,18.979 7.86280274,18.029 8.4078692,17.442 L13.9770671,11.442 C14.2393336,11.16 14.5949335,11.001 14.9664,11 L14.9701333,11 C15.3397332,11 15.6943997,11.157 15.9566663,11.437 L21.5874641,17.437 C22.1362639,18.021 22.1371973,18.971 21.5921308,19.558 C21.3195976,19.853 20.959331,20 20.5999978,20" id="Fill-1" fill="#FFFFFF" transform="translate(15.000000, 15.500000) scale(1, -1) translate(-15.000000, -15.500000) "></path></g></svg>';
var arrowleft = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>ArrowLeft/Line/Black/30</title><g id="ArrowLeft/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M27.4999946,22.0000029 C27.1169946,22.0000029 26.7339947,21.8540029 26.4419948,21.5630029 L15.4409971,10.6210029 L4.56299945,21.5580029 C3.97899958,22.1460029 3.02999978,22.1460029 2.44199991,21.5630029 C1.85400003,20.9790029 1.85300003,20.0290029 2.43699991,19.4420029 L14.3719974,7.44200288 C14.6519973,7.16000288 15.0329972,7.00100288 15.4319971,7.00000288 C15.855997,7.02200288 16.210997,7.15600288 16.4929969,7.43700288 L28.5579943,19.4370029 C29.1459942,20.0210029 29.1469942,20.9710029 28.5629943,21.5580029 C28.2709944,21.8530029 27.8849945,22.0000029 27.4999946,22.0000029" id="Fill-1" fill="#2B2B2B" transform="translate(15.500000, 14.500003) scale(-1, -1) rotate(90.000000) translate(-15.500000, -14.500003) "></path></g></svg>';
var arrowleftcircle = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>ArrowLeft/Circle/Line/Black/30</title><g id="ArrowLeft/Circle/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1 M15,3 C21.617,3 27,8.383 27,15 C27,21.617 21.617,27 15,27 C8.383,27 3,21.617 3,15 C3,8.383 8.383,3 15,3" id="Fill-1" fill="#2B2B2B"></path><path d="M20.0002543,19 C19.7452543,19 19.4902543,18.903 19.2952543,18.709 L13.9722543,13.414 L8.70925432,18.705 C8.32025432,19.097 7.68725432,19.1 7.29525432,18.709 C6.90325432,18.319 6.90125432,17.687 7.29125432,17.295 L13.2592543,11.295 C13.4452543,11.107 13.7002543,11 13.9652543,11 L13.9682543,11 C14.2322543,11 14.4852543,11.104 14.6732543,11.291 L20.7052543,17.291 C21.0972543,17.681 21.0992543,18.313 20.7092543,18.705 C20.5142543,18.901 20.2572543,19 20.0002543,19" id="Fill-3" fill="#2B2B2B" transform="translate(14.000254, 15.000315) scale(1, -1) rotate(-90.000000) translate(-14.000254, -15.000315) "></path></g></svg>';
var arrowleftcirclefilled = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>ArrowLeft/Circle/Filled/Blue/30</title><g id="ArrowLeft/Circle/Filled/Blue/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1" id="Page-1" fill="#0074B8"></path><path d="M19.0999978,19.5 C18.7425313,19.5 18.3850648,19.354 18.1125316,19.063 L13.4757333,14.121 L8.8921351,19.058 C8.34706865,19.646 7.46040232,19.646 6.91253586,19.063 C6.36373607,18.479 6.36280274,17.529 6.9078692,16.942 L12.4770671,10.942 C12.7393336,10.66 13.0949335,10.501 13.4664,10.5 L13.4701333,10.5 C13.8397332,10.5 14.1943997,10.657 14.4566663,10.937 L20.0874641,16.937 C20.6362639,17.521 20.6371973,18.471 20.0921308,19.058 C19.8195976,19.353 19.459331,19.5 19.0999978,19.5" id="Fill-1" fill="#FFFFFF" transform="translate(13.500000, 15.000000) scale(1, -1) rotate(-90.000000) translate(-13.500000, -15.000000) "></path></g></svg>';
var arrowright = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>ArrowRight/Line/Black/30</title><g id="ArrowRight/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M27.4999946,22.0000029 C27.1169946,22.0000029 26.7339947,21.8540029 26.4419948,21.5630029 L15.4409971,10.6210029 L4.56299945,21.5580029 C3.97899958,22.1460029 3.02999978,22.1460029 2.44199991,21.5630029 C1.85400003,20.9790029 1.85300003,20.0290029 2.43699991,19.4420029 L14.3719974,7.44200288 C14.6519973,7.16000288 15.0329972,7.00100288 15.4319971,7.00000288 C15.855997,7.02200288 16.210997,7.15600288 16.4929969,7.43700288 L28.5579943,19.4370029 C29.1459942,20.0210029 29.1469942,20.9710029 28.5629943,21.5580029 C28.2709944,21.8530029 27.8849945,22.0000029 27.4999946,22.0000029" id="Fill-1" fill="#2B2B2B" transform="translate(15.500000, 14.500003) scale(1, -1) rotate(90.000000) translate(-15.500000, -14.500003) "></path></g></svg>';
var arrowrightcircle = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>ArrowRight/Circle/Line/Black/30</title><g id="ArrowRight/Circle/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1 M15,3 C21.617,3 27,8.383 27,15 C27,21.617 21.617,27 15,27 C8.383,27 3,21.617 3,15 C3,8.383 8.383,3 15,3" id="Fill-1" fill="#2B2B2B"></path><path d="M22.0002543,19 C21.7452543,19 21.4902543,18.903 21.2952543,18.709 L15.9722543,13.414 L10.7092543,18.705 C10.3202543,19.097 9.68725432,19.1 9.29525432,18.709 C8.90325432,18.319 8.90125432,17.687 9.29125432,17.295 L15.2592543,11.295 C15.4452543,11.107 15.7002543,11 15.9652543,11 L15.9682543,11 C16.2322543,11 16.4852543,11.104 16.6732543,11.291 L22.7052543,17.291 C23.0972543,17.681 23.0992543,18.313 22.7092543,18.705 C22.5142543,18.901 22.2572543,19 22.0002543,19" id="Fill-3" fill="#2B2B2B" transform="translate(16.000254, 15.000315) rotate(90.000000) translate(-16.000254, -15.000315) "></path></g></svg>';
var arrowrightcirclefilled = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>ArrowRight/Circle/Filled/Blue/30</title><g id="ArrowRight/Circle/Filled/Blue/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1" id="Page-1" fill="#0074B8"></path><path d="M21.0999978,19.5 C20.7425313,19.5 20.3850648,19.354 20.1125316,19.063 L15.4757333,14.121 L10.8921351,19.058 C10.3470686,19.646 9.46040232,19.646 8.91253586,19.063 C8.36373607,18.479 8.36280274,17.529 8.9078692,16.942 L14.4770671,10.942 C14.7393336,10.66 15.0949335,10.501 15.4664,10.5 L15.4701333,10.5 C15.8397332,10.5 16.1943997,10.657 16.4566663,10.937 L22.0874641,16.937 C22.6362639,17.521 22.6371973,18.471 22.0921308,19.058 C21.8195976,19.353 21.459331,19.5 21.0999978,19.5" id="Fill-1" fill="#FFFFFF" transform="translate(15.500000, 15.000000) scale(-1, -1) rotate(-90.000000) translate(-15.500000, -15.000000) "></path></g></svg>';
var arrowup = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>ArrowUp/Line/Black/30</title><g id="ArrowUp/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M26.4999974,23 C26.1169975,23 25.7339976,22.854 25.4419977,22.563 L14.441,11.621 L3.56300233,22.558 C2.97900246,23.146 2.03000266,23.146 1.44200279,22.563 C0.854002911,21.979 0.853002911,21.029 1.43700279,20.442 L13.3720002,8.442 C13.6520002,8.16 14.0330001,8.001 14.432,8 C14.8559999,8.022 15.2109998,8.156 15.4929998,8.437 L27.5579972,20.437 C28.1459971,21.021 28.1469971,21.971 27.5629972,22.558 C27.2709973,22.853 26.8849974,23 26.4999974,23" id="Fill-1" fill="#2B2B2B"></path></g></svg>';
var arrowupcircle = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>ArrowUp/Circle/Line/Black/30</title><g id="ArrowUp/Circle/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1 M15,3 C21.617,3 27,8.383 27,15 C27,21.617 21.617,27 15,27 C8.383,27 3,21.617 3,15 C3,8.383 8.383,3 15,3" id="Fill-1" fill="#2B2B2B"></path><path d="M21,18 C20.745,18 20.49,17.903 20.295,17.709 L14.972,12.414 L9.709,17.705 C9.32,18.097 8.687,18.1 8.295,17.709 C7.903,17.319 7.901,16.687 8.291,16.295 L14.259,10.295 C14.445,10.107 14.7,10 14.965,10 L14.968,10 C15.232,10 15.485,10.104 15.673,10.291 L21.705,16.291 C22.097,16.681 22.099,17.313 21.709,17.705 C21.514,17.901 21.257,18 21,18" id="Fill-3" fill="#2B2B2B"></path></g></svg>';
var arrowupcirclefilled = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>ArrowUp/Circle/Filled/Blue/30</title><g id="ArrowUp/Circle/Filled/Blue/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1" id="Page-1" fill="#0074B8"></path><path d="M20.5999978,19 C20.2425313,19 19.8850648,18.854 19.6125316,18.563 L14.9757333,13.621 L10.3921351,18.558 C9.84706865,19.146 8.96040232,19.146 8.41253586,18.563 C7.86373607,17.979 7.86280274,17.029 8.4078692,16.442 L13.9770671,10.442 C14.2393336,10.16 14.5949335,10.001 14.9664,10 L14.9701333,10 C15.3397332,10 15.6943997,10.157 15.9566663,10.437 L21.5874641,16.437 C22.1362639,17.021 22.1371973,17.971 21.5921308,18.558 C21.3195976,18.853 20.959331,19 20.5999978,19" id="Fill-1" fill="#FFFFFF"></path></g></svg>';
var attach = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Attach/Line/Black/30</title><g id="Attach/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M21.8515503,28 C20.0197816,28 18.1880129,27.2973927 16.7934277,25.892178 L2.46641545,11.4549578 C1.52101873,10.5023553 0.9998,9.24229912 0.9998,7.90663953 C0.9998,6.56997189 1.52101873,5.30991567 2.46641545,4.35731317 C4.4072299,2.39968983 7.56655569,2.40069788 9.50937098,4.35731317 L23.8373836,18.7955413 C24.3726082,19.3328293 24.6657312,20.0445091 24.6657312,20.7975187 C24.6657312,21.5505283 24.3726082,22.262208 23.8373836,22.799496 C22.7439248,23.9022972 20.9601762,23.9033052 19.8647165,22.800504 L6.55913293,9.39249782 C6.18097424,9.01145682 6.16296669,8.39352525 6.52411824,7.99635553 C6.8852698,7.59817776 7.48852295,7.55281574 7.89969549,7.89756712 C7.93070851,7.92377629 7.9657232,7.95704178 7.99373495,7.98728312 L21.2793102,21.3741204 C21.5994445,21.6966948 22.1016552,21.6987109 22.42279,21.3741204 C22.5798559,21.2168654 22.6648916,21.0112242 22.6648916,20.7975187 C22.6648916,20.5838131 22.5798559,20.3781719 22.42279,20.2209169 L8.09477736,5.78268877 C6.91228113,4.59218765 5.06150447,4.59420374 3.88100908,5.78268877 C2.69851285,6.97419793 2.69851285,8.83908113 3.88100908,10.0295822 L18.2080213,24.4668024 C20.2178647,26.4919647 23.4862363,26.4899486 25.4940788,24.4668024 C27.5019214,22.4426481 27.5019214,19.1513812 25.4940788,17.1272269 L12.1884953,3.72123679 C11.7983315,3.32709121 11.7983315,2.68899874 12.1884953,2.29485315 C12.5796594,1.90171562 13.2129252,1.90171562 13.6030889,2.29485315 L26.9086725,15.7018513 C29.6968425,18.5112727 29.6968425,23.0827566 26.9086725,25.892178 C25.5140872,27.2973927 23.6823186,28 21.8515503,28" id="Fill-1" fill="#2B2B2B"></path></g></svg>';
var basket = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Basket/Black/30</title><g id="Basket/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M28,13 L2,13 C1.447,13 1,12.552 1,12 C1,11.448 1.447,11 2,11 L28,11 C28.553,11 29,11.448 29,12 C29,12.552 28.553,13 28,13" id="Fill-1" fill="#2B2B2B"></path><path d="M15.0275865,12 C14.7940283,12 14.5604701,11.9312458 14.3670387,11.7910587 C13.9328468,11.4740751 13.8752289,10.910648 14.2404851,10.5329465 L22.1835216,2.31905387 C22.547749,1.94224523 23.1959501,1.89134927 23.6321998,2.20833284 C24.0674206,2.52531641 24.1250385,3.08874355 23.7587534,3.4664451 L15.8167457,11.6812306 C15.6130254,11.8910648 15.3218493,12 15.0275865,12" id="Fill-3" fill="#2B2B2B"></path><path d="M24,28.9995734 L6,28.9995734 C5.511,28.9995734 5.094,28.6455734 5.014,28.1635734 L3.014,16.1635734 C2.923,15.6195734 3.291,15.1035734 3.836,15.0135734 C4.38,14.9245734 4.896,15.2905734 4.986,15.8345734 L6.847,26.9995734 L23.153,26.9995734 L25.014,15.8345734 C25.104,15.2905734 25.618,14.9235734 26.164,15.0135734 C26.709,15.1035734 27.077,15.6195734 26.986,16.1635734 L24.986,28.1635734 C24.906,28.6455734 24.489,28.9995734 24,28.9995734" id="Fill-5" fill="#2B2B2B"></path><path d="M12.402655,25 C12.1632539,25 11.9238529,24.9085785 11.7354717,24.7257355 L8.31419521,21.4037453 C7.91682871,21.0175151 7.89328106,20.3672925 8.26121301,19.9523006 C8.62914495,19.5352542 9.24923293,19.5106012 9.64758058,19.8968313 L12.3791073,22.5480548 L19.3266436,15.3000762 C19.710274,14.8984379 20.3313431,14.9004923 20.7139923,15.3031578 C21.0966416,15.7047961 21.0946793,16.3550186 20.71203,16.7556297 L13.0953482,24.7000553 C12.9040236,24.8993336 12.6538299,25 12.402655,25" id="Fill-7" fill="#2B2B2B"></path></g></svg>';
var basketsmall = '<svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Basket/Black/15</title><g id="Basket/Black/15" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M12.9947663,8 L1.99921905,8 C1.69548573,8 1.40678871,8.12841191 1.21733129,8.34894541 C1.02687145,8.56947891 0.954697198,8.85887097 1.02185935,9.13430521 L2.02127229,13.273263 C2.12351915,13.6985112 2.53050176,14 2.99863199,14 L11.9953533,14 C12.464486,14 12.8704661,13.6985112 12.9737154,13.273263 L13.9731284,9.13430521 C14.0392881,8.85887097 13.9681163,8.56947891 13.776654,8.34894541 C13.5871966,8.12841191 13.299502,8 12.9947663,8" id="Fill-4" fill="#2B2B2B"></path><path d="M13.9975272,4.9766072 L9.56960503,4.9766072 L12.3254027,1.66197037 C12.682283,1.23398155 12.6261445,0.595539592 12.2020985,0.236352756 C11.7770501,-0.12283408 11.1444897,-0.0651618273 10.7906169,0.360803406 L6.95415358,4.9766072 L1.00247277,4.9766072 C0.448105326,4.9766072 0,5.42989087 0,5.9884011 C0,6.54691134 0.448105326,7.00019501 1.00247277,7.00019501 L13.9975272,7.00019501 C14.5518947,7.00019501 15,6.54691134 15,5.9884011 C15,5.42989087 14.5518947,4.9766072 13.9975272,4.9766072" id="Fill-1" fill="#2B2B2B"></path></g></svg>';
var batterycharging = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>BatteryCharging/Black/30</title><g id="BatteryCharging/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M3,20 L24,20 L24,10 L3,10 L3,20 Z M25,22 L2,22 C1.447,22 1,21.553 1,21 L1,9 C1,8.448 1.447,8 2,8 L25,8 C25.553,8 26,8.448 26,9 L26,21 C26,21.553 25.553,22 25,22 Z" id="Fill-4" fill="#2B2B2B"></path><path d="M28.1428571,19 L26,19 L26,17.1176471 L27.2857143,17.1176471 L27.2857143,12.8823529 L26,12.8823529 L26,11 L28.1428571,11 C28.6168571,11 29,11.4216471 29,11.9411765 L29,18.0588235 C29,18.5792941 28.6168571,19 28.1428571,19" id="Fill-6" fill="#2B2B2B"></path><path d="M13.4333304,17.999949 C13.2742092,17.999949 13.115088,17.9620481 12.968052,17.8841976 C12.6347032,17.7080096 12.4262343,17.3576824 12.4262343,16.9756004 L12.4262343,14.9105136 L8.55596391,17.4662634 C8.08766422,17.7745923 7.46527882,17.6393783 7.16214289,17.1661292 C6.86001405,16.6908315 6.99194364,16.0567597 7.45822914,15.7484308 L12.884463,12.1652594 C13.1956557,11.9603897 13.5894303,11.9450245 13.9147223,12.1242855 C14.2390073,12.3035465 14.4404265,12.6487519 14.4404265,13.0246879 L14.4404265,15.0108998 L18.4154349,12.184722 C18.8726565,11.8610279 19.5000774,11.9737062 19.8183198,12.4377361 C20.1365621,12.9007417 20.0257816,13.5399352 19.5705741,13.8636294 L14.0103965,17.8145419 C13.8371759,17.9374637 13.6357567,17.999949 13.4333304,17.999949" id="Fill-1" fill="#2A2A2A"></path></g></svg>';
var batteryusage = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>BatteryUsage/Black/30</title><g id="BatteryUsage/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M5,11 L10.297944,11 C10.6913367,11 11.0481809,11.230648 11.209732,11.5893387 L13.9120791,17.5893387 C14.138881,18.0929053 13.9145189,18.684986 13.4109523,18.911788 C13.2818538,18.9699328 13.1418794,19 13.0002911,19 L5,19 C4.44771525,19 4,18.5522847 4,18 L4,12 C4,11.4477153 4.44771525,11 5,11 Z" id="Rectangle" fill="#0DB65C"></path><path d="M3,20 L24,20 L24,10 L3,10 L3,20 Z M25,22 L2,22 C1.447,22 1,21.553 1,21 L1,9 C1,8.448 1.447,8 2,8 L25,8 C25.553,8 26,8.448 26,9 L26,21 C26,21.553 25.553,22 25,22 Z" id="Fill-4" fill="#2B2B2B"></path><path d="M28.1428571,19 L26,19 L26,17.1176471 L27.2857143,17.1176471 L27.2857143,12.8823529 L26,12.8823529 L26,11 L28.1428571,11 C28.6168571,11 29,11.4216471 29,11.9411765 L29,18.0588235 C29,18.5792941 28.6168571,19 28.1428571,19" id="Fill-6" fill="#2B2B2B"></path></g></svg>';
var bin = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Bin/Line/Black/30</title><g id="Bin/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M23.9550133,29 L6.04498668,29 C5.46815403,29 5,28.553 5,28 L5,10 C5,9.448 5.46815403,9 6.04498668,9 C6.62286431,9 7.08997335,9.448 7.08997335,10 L7.08997335,27 L22.9100266,27 L22.9100266,10 C22.9100266,9.448 23.3771357,9 23.9550133,9 C24.532891,9 25,9.448 25,10 L25,28 C25,28.553 24.532891,29 23.9550133,29" id="Fill-1" fill="#2B2B2B"></path><path d="M12,25 C11.447,25 11,24.553 11,24 L11,12 C11,11.448 11.447,11 12,11 C12.553,11 13,11.448 13,12 L13,24 C13,24.553 12.553,25 12,25" id="Fill-3" fill="#2B2B2B"></path><path d="M18,25 C17.447,25 17,24.553 17,24 L17,12 C17,11.448 17.447,11 18,11 C18.553,11 19,11.448 19,12 L19,24 C19,24.553 18.553,25 18,25" id="Fill-5" fill="#2B2B2B"></path><path d="M26,7 L4,7 C3.447,7 3,6.552 3,6 C3,5.448 3.447,5 4,5 L26,5 C26.553,5 27,5.448 27,6 C27,6.552 26.553,7 26,7" id="Fill-7" fill="#2B2B2B"></path><path d="M20,5.9995 L17.6921302,5.9995 L17.6921302,2.93485901 L12.3078698,2.93485901 L12.3078698,5.9995 L10,5.9995 L10,1.9671795 C10,1.43302042 10.5158089,0.9995 11.1539349,0.9995 L18.8460651,0.9995 C19.4841911,0.9995 20,1.43302042 20,1.9671795 L20,5.9995 Z" id="Fill-9" fill="#2B2B2B"></path></g></svg>';
var binfilled = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Bin/Filled/Blue/30</title><g id="Bin/Filled/Blue/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M6.04498668,29 C5.46815403,29 5,28.5604628 5,28.0166954 L5,7 L25,7 L25,28.0166954 C25,28.5604628 24.532891,29 23.9550133,29 L6.04498668,29 Z M19.2525733,24.083477 C19.2525733,24.6272445 19.7196823,25.0667816 20.29756,25.0667816 C20.8754376,25.0667816 21.3425466,24.6272445 21.3425466,24.083477 L21.3425466,12.2838218 C21.3425466,11.7410377 20.8754376,11.3005172 20.29756,11.3005172 C19.7196823,11.3005172 19.2525733,11.7410377 19.2525733,12.2838218 L19.2525733,24.083477 Z M14.0276399,24.083477 C14.0276399,24.6272445 14.4947489,25.0667816 15.0726266,25.0667816 C15.6505042,25.0667816 16.1176133,24.6272445 16.1176133,24.083477 L16.1176133,12.2838218 C16.1176133,11.7410377 15.6505042,11.3005172 15.0726266,11.3005172 C14.4947489,11.3005172 14.0276399,11.7410377 14.0276399,12.2838218 L14.0276399,24.083477 Z M8.80270652,24.083477 C8.80270652,24.6272445 9.26981556,25.0667816 9.84769319,25.0667816 C10.4255708,25.0667816 10.8926799,24.6272445 10.8926799,24.083477 L10.8926799,12.2838218 C10.8926799,11.7410377 10.4255708,11.3005172 9.84769319,11.3005172 C9.26981556,11.3005172 8.80270652,11.7410377 8.80270652,12.2838218 L8.80270652,24.083477 Z" id="Combined-Shape" fill="#0074B8"></path><path d="M26,7 L4,7 C3.447,7 3,6.552 3,6 C3,5.448 3.447,5 4,5 L26,5 C26.553,5 27,5.448 27,6 C27,6.552 26.553,7 26,7" id="Fill-7" fill="#0074B8"></path><path d="M20,5.9995 L17.6921302,5.9995 L17.6921302,2.93485901 L12.3078698,2.93485901 L12.3078698,5.9995 L10,5.9995 L10,1.9671795 C10,1.43302042 10.5158089,0.9995 11.1539349,0.9995 L18.8460651,0.9995 C19.4841911,0.9995 20,1.43302042 20,1.9671795 L20,5.9995 Z" id="Fill-9" fill="#0074B8"></path></g></svg>';
var phone = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Call/Black/30</title><g id="Call/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M9.57475286,2.2143303 C9.08107131,2.2770218 7.57936596,2.86811313 6.65942192,4.5551863 C5.53178366,6.62512543 5.15771658,10.5914826 9.7857093,17.7259997 C9.79223373,17.7349556 9.79767075,17.7439115 9.80310777,17.751748 L10.0923573,18.2264122 C13.7177633,23.9794773 17.4975806,27.0088203 20.7162974,26.7099162 C22.3419668,26.5655018 23.3184559,25.6318462 23.5761707,25.2377853 C23.3336795,24.076873 21.7308456,20.9501342 20.9729248,20.7183995 C20.8261252,20.7665377 20.4292226,21.2624722 20.2160914,21.5300306 C19.6104072,22.2868066 18.6937254,23.4354046 17.2920612,23.1006767 C16.7668449,22.9764132 15.9719524,22.7894582 12.089919,16.9938525 L11.7745718,16.4788865 C8.36773409,10.3172072 8.5482432,9.49997871 8.66894508,8.95926448 C8.99081675,7.51400141 10.3881313,7.16248119 11.3135123,6.93074652 C11.6636565,6.84342621 12.2475926,6.69677287 12.3639449,6.55907546 C12.5031327,5.73960793 10.4392393,2.83005043 9.57475286,2.2143303 Z M20.2835105,28.9701688 C17.3953646,28.9701688 13.1425264,27.178983 8.25899365,19.4309847 L7.96974411,18.95744 C1.71173233,9.30406776 3.82020928,4.31225672 5.63399966,2.19529895 C7.06719854,0.521659678 9.30942621,-0.43886373 10.4305401,0.138793704 C11.7952325,0.840714656 14.970453,4.83841756 14.4724219,7.07851935 C14.1516376,8.52378243 12.7532356,8.87418316 11.8278546,9.10591782 C11.5309932,9.18092373 11.0014273,9.31414318 10.8209182,9.44064568 C10.9002987,9.82239216 11.3352604,11.1590646 13.6405576,15.3291691 L13.9058842,15.7624122 C16.5482767,19.7063795 17.5215035,20.6713809 17.8129279,20.9008766 C17.9803881,20.8034809 18.3250953,20.3724768 18.5360517,20.1082769 C19.1417359,19.3503813 20.067117,18.2051419 21.4600819,18.5376308 C23.7523302,19.0772255 25.6737736,24.1003823 25.7694652,25.218754 C25.8705938,26.3841443 24.3862869,27.9279225 22.5268255,28.5884223 C21.9200539,28.8033646 21.1664828,28.9701688 20.2835105,28.9701688 Z" id="Fill-1" fill="#2A2A2A" transform="translate(14.774343, 14.470169) rotate(-12.000000) translate(-14.774343, -14.470169) "></path></g></svg>';
var camerafilled = '<svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Camera/Black/15</title><g id="Camera/Black/15" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M13.5357143,13 L1.46428571,13 C1.20753571,13 1,12.7898718 1,12.5299145 L1,4.50696581 C1,4.24747863 1.20753571,4.03688034 1.46428571,4.03688034 L4.01785714,4.03688034 L5.09035714,2.22799145 C5.17392857,2.08649573 5.32482143,2 5.48825,2 L9.51175,2 C9.67517857,2 9.82607143,2.08649573 9.90964286,2.22799145 L10.9821429,4.03688034 L13.5357143,4.03688034 C13.7924643,4.03688034 14,4.24747863 14,4.50696581 L14,12.5299145 C14,12.7898718 13.7924643,13 13.5357143,13 Z M7.5,11.2136752 C9.17526374,11.2136752 10.5333333,9.83864091 10.5333333,8.14245014 C10.5333333,6.44625937 9.17526374,5.07122507 7.5,5.07122507 C5.82473626,5.07122507 4.46666667,6.44625937 4.46666667,8.14245014 C4.46666667,9.83864091 5.82473626,11.2136752 7.5,11.2136752 Z" id="Combined-Shape" fill="#2B2B2B"></path></g></svg>';
var camerasmall = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Camera/Black/30</title><g id="Camera/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M3,25.034188 L27,25.034188 L27,10.2247436 L21.934,10.2247436 C21.582,10.2247436 21.257,10.0438889 21.076,9.74803419 L18.767,5.96581197 L11.233,5.96581197 L8.924,9.74803419 C8.743,10.0438889 8.418,10.2247436 8.066,10.2247436 L3,10.2247436 L3,25.034188 Z M28,27 L2,27 C1.447,27 1,26.560641 1,26.017094 L1,9.24183761 C1,8.6992735 1.447,8.25893162 2,8.25893162 L7.5,8.25893162 L9.81,4.4767094 C9.99,4.1808547 10.315,4 10.667,4 L19.333,4 C19.685,4 20.01,4.1808547 20.19,4.4767094 L22.5,8.25893162 L28,8.25893162 C28.553,8.25893162 29,8.6992735 29,9.24183761 L29,26.017094 C29,26.560641 28.553,27 28,27 Z" id="Fill-1" fill="#2B2B2B"></path><path d="M15,11.9250822 C12.7532488,11.9250822 10.9252366,13.7529478 10.9252366,15.9995187 C10.9252366,18.2460897 12.7532488,20.0749178 15,20.0749178 C17.2467512,20.0749178 19.0747634,18.2460897 19.0747634,15.9995187 C19.0747634,13.7529478 17.2467512,11.9250822 15,11.9250822 M15,22 C11.6905182,22 9,19.3087351 9,15.9995187 C9,12.6912649 11.6905182,10 15,10 C18.3094818,10 21,12.6912649 21,15.9995187 C21,19.3087351 18.3094818,22 15,22" id="Fill-3" fill="#2B2B2B"></path></g></svg>';
var camerasmall = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>CameraFlash/Black/30</title><g id="CameraFlash/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M3,27.034188 L27,27.034188 L27,12.2247436 L21.934,12.2247436 C21.582,12.2247436 21.257,12.0438889 21.076,11.7480342 L18.767,7.96581197 L11.233,7.96581197 L8.924,11.7480342 C8.743,12.0438889 8.418,12.2247436 8.066,12.2247436 L3,12.2247436 L3,27.034188 Z M28,29 L2,29 C1.447,29 1,28.560641 1,28.017094 L1,11.2418376 C1,10.6992735 1.447,10.2589316 2,10.2589316 L7.5,10.2589316 L9.81,6.4767094 C9.99,6.1808547 10.315,6 10.667,6 L19.333,6 C19.685,6 20.01,6.1808547 20.19,6.4767094 L22.5,10.2589316 L28,10.2589316 C28.553,10.2589316 29,10.6992735 29,11.2418376 L29,28.017094 C29,28.560641 28.553,29 28,29 Z" id="Fill-1" fill="#2B2B2B"></path><path d="M15,13.9250822 C12.7532488,13.9250822 10.9252366,15.7529478 10.9252366,17.9995187 C10.9252366,20.2460897 12.7532488,22.0749178 15,22.0749178 C17.2467512,22.0749178 19.0747634,20.2460897 19.0747634,17.9995187 C19.0747634,15.7529478 17.2467512,13.9250822 15,13.9250822 M15,24 C11.6905182,24 9,21.3087351 9,17.9995187 C9,14.6912649 11.6905182,12 15,12 C18.3094818,12 21,14.6912649 21,17.9995187 C21,21.3087351 18.3094818,24 15,24" id="Fill-3" fill="#2B2B2B"></path><path d="M3.9989,9.00075 C3.8089,9.00075 3.6159,8.94675 3.4449,8.83275 C2.9849,8.52675 2.8609,7.90575 3.1679,7.44575 L4.1319,6.00075 L1.9999,6.00075 C1.6309,6.00075 1.2919,5.79775 1.1179,5.47275 C0.9439,5.14675 0.9639,4.75275 1.1679,4.44575 L3.1679,1.44575 C3.4739,0.98575 4.0929,0.86075 4.5549,1.16875 C5.0149,1.47475 5.1389,2.09575 4.8319,2.55575 L3.8679,4.00075 L5.9999,4.00075 C6.3689,4.00075 6.7079,4.20375 6.8819,4.52875 C7.0559,4.85475 7.0359,5.24875 6.8319,5.55575 L4.8319,8.55575 C4.6399,8.84475 4.3219,9.00075 3.9989,9.00075" id="Fill-1" fill="#2B2B2B"></path></g></svg>';
var card = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Card/Black/30</title><g id="Card/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M3,22 L27,22 L27,8 L3,8 L3,22 Z M28,24 L2,24 C1.447,24 1,23.553 1,23 L1,7 C1,6.448 1.447,6 2,6 L28,6 C28.553,6 29,6.448 29,7 L29,23 C29,23.553 28.553,24 28,24 Z" id="Fill-1" fill="#2B2B2B"></path><path d="M26.5,14 L2.5,14 C1.672,14 1,13.329 1,12.5 C1,11.671 1.672,11 2.5,11 L26.5,11 C27.328,11 28,11.671 28,12.5 C28,13.329 27.328,14 26.5,14" id="Fill-3" fill="#2B2B2B"></path><path d="M22,19 C22,19.553 21.553,20 21,20 C20.447,20 20,19.553 20,19 C20,18.447 20.447,18 21,18 C21.553,18 22,18.447 22,19" id="Fill-4" fill="#2B2B2B"></path><path d="M25,19 C25,19.553 24.553,20 24,20 C23.447,20 23,19.553 23,19 C23,18.447 23.447,18 24,18 C24.553,18 25,18.447 25,19" id="Fill-5" fill="#2B2B2B"></path><path d="M11,20 L6,20 C5.447,20 5,19.553 5,19 C5,18.447 5.447,18 6,18 L11,18 C11.553,18 12,18.447 12,19 C12,19.553 11.553,20 11,20" id="Fill-6" fill="#2B2B2B"></path></g></svg>';
var cardfilled = '<svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Card/Black/15</title><g id="Card/Black/15" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M13.5399995,11 L1.46444443,11 C1.20760666,11 1,10.8013333 1,10.5555556 L1,3.44444444 C1,3.19911111 1.20760666,3 1.46444443,3 L13.5399995,3 C13.7968373,3 14.0044439,3.19911111 14.0044439,3.44444444 L14.0044439,10.5555556 C14.0044439,10.8013333 13.7968373,11 13.5399995,11 Z M2,5.3923446 L2,7.30622027 L13,7.30622027 L13,5.3923446 L2,5.3923446 Z" id="Combined-Shape" fill="#2B2B2B"></path></g></svg>';
var menuclose = '';
var crosscircle = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Cross Circle/30</title> <g id="Cross/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M10.0086131,21 C9.75047267,21 9.49233225,20.9011785 9.29570186,20.704544 C8.90143271,20.3102666 8.90143271,19.6729691 9.29570186,19.2786916 L19.2784757,9.29570807 C19.6727448,8.90143064 20.3110374,8.90143064 20.7042981,9.29570807 C21.0985673,9.6899855 21.0985673,10.3282914 20.7042981,10.7215605 L10.7215243,20.704544 C10.5248939,20.9011785 10.2667535,21 10.0086131,21" id="Fill-1" fill="#2B2B2B"></path><path d="M19.9913869,21 C19.7332465,21 19.4751061,20.9011785 19.2784757,20.704544 L9.29570186,10.7215605 C8.90143271,10.3282914 8.90143271,9.6899855 9.29570186,9.29570807 C9.68896265,8.90143064 10.3272552,8.90143064 10.7215243,9.29570807 L20.7042981,19.2786916 C21.0985673,19.6729691 21.0985673,20.3102666 20.7042981,20.704544 C20.5076677,20.9011785 20.2495273,21 19.9913869,21" id="Fill-3" fill="#2B2B2B"></path><path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1 M15,3 C21.617,3 27,8.383 27,15 C27,21.617 21.617,27 15,27 C8.383,27 3,21.617 3,15 C3,8.383 8.383,3 15,3" id="Fill-5" fill="#2B2B2B"></path></g></svg>';
var crossfilled = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" aria-labelledby="title" focusable="false" role="img"><title id="title">close icon</title><g id="Cross/Filled/Blue/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1" id="Fill-1" fill="#0074B8"></path><path d="M16.9728703,14.9997674 L20.5911945,11.3819528 C21.1362685,10.8368154 21.1362685,9.95399046 20.5911945,9.40885306 C20.0461205,8.86371565 19.162468,8.86371565 18.6183242,9.40885306 L15,13.0266677 L11.3816758,9.40885306 C10.8366018,8.86371565 9.95387954,8.86371565 9.40880552,9.40885306 C8.86373149,9.95399046 8.86373149,10.8368154 9.40880552,11.3819528 L13.0271297,14.9997674 L9.40880552,18.6185123 C8.86373149,19.1636498 8.86373149,20.0464747 9.40880552,20.5916121 C9.68134253,20.8641808 10.0385241,21 10.3957058,21 C10.7528874,21 11.1091388,20.8641808 11.3816758,20.5916121 L15,16.9728672 L18.6183242,20.5916121 C18.8908612,20.8641808 19.2471126,21 19.6042942,21 C19.9614759,21 20.3186575,20.8641808 20.5911945,20.5916121 C21.1362685,20.0464747 21.1362685,19.1636498 20.5911945,18.6185123 L16.9728703,14.9997674 Z" id="Fill-3" fill="#FFFFFF" alt="close icon"></path></g></svg>';
var data = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Data/Black/30</title><g id="Data/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M27.7238592,21.1411805 C27.3556715,20.7622774 26.7605446,20.7622774 26.3923569,21.1411805 L22.9421274,24.691823 L22.9421274,1.9692618 C22.9421274,1.43433969 22.5212069,1.0002 22.0004708,1.0002 C21.4797348,1.0002 21.0588143,1.43433969 21.0588143,1.9692618 L21.0588143,24.691823 L17.6076431,21.1411805 C17.2394554,20.7622774 16.6433868,20.7622774 16.2761408,21.1411805 C15.9079531,21.5200837 15.9079531,22.1325308 16.2761408,22.5114339 L21.3347197,27.7162649 C21.4251187,27.8092948 21.5305842,27.8800363 21.6445247,27.9284894 C21.7584651,27.9759735 21.8789971,28.0002 22.0004708,28.0002 C22.1219445,28.0002 22.2434182,27.9759735 22.3583003,27.9275204 C22.359242,27.9265513 22.3601836,27.9265513 22.3611253,27.9265513 C22.4665908,27.8810054 22.5569898,27.8131711 22.6379723,27.7356461 C22.6455056,27.7278936 22.6577471,27.7249864 22.666222,27.7162649 L27.7238592,22.5114339 C28.0920469,22.1325308 28.0920469,21.5200837 27.7238592,21.1411805" id="Fill-4" fill="#2B2B2B"></path><path d="M7.66513034,1.27778357 C7.65571377,1.2690257 7.64535555,1.26610641 7.63593899,1.25734853 C7.55495652,1.17950077 7.46549915,1.11235708 7.36003362,1.06662152 C7.35909197,1.06662152 7.35815031,1.06662152 7.356267,1.06564843 C7.34779209,1.06272914 7.33837552,1.06272914 7.33084227,1.05883675 C7.23385165,1.02185906 7.13591937,1.00434332 7.03610378,1.00045093 C7.00220414,0.998504735 6.97112948,1.00337022 6.93722984,1.00531641 C6.85813069,1.011155 6.78185651,1.02575145 6.70558233,1.05202507 C6.67450767,1.06272914 6.64437466,1.07148701 6.61329999,1.08608346 C6.51160109,1.13376522 6.41555212,1.19312413 6.333628,1.27778357 L1.27599078,6.5052606 C0.907803074,6.88476842 0.907803074,7.50073882 1.27599078,7.88121974 C1.64323682,8.26072757 2.23930541,8.26072757 2.60749311,7.88121974 L6.05772264,4.31579237 L6.05772264,27.026903 C6.05772264,27.5650256 6.47864311,28 6.99937917,28 C7.52011523,28 7.9410357,27.5650256 7.9410357,27.026903 L7.9410357,4.31481928 L11.3922069,7.88121974 C11.5758299,8.07097365 11.816894,8.16633716 12.0579581,8.16633716 C12.2990221,8.16633716 12.5400862,8.07097365 12.7237092,7.88121974 C13.0918969,7.50073882 13.0918969,6.88476842 12.7237092,6.5052606 L7.66513034,1.27778357 Z" id="Fill-1" fill="#2B2B2B"></path></g></svg>';
var downloadsmall = '<svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Download/Line/Black/15</title><g id="Download/Line/Black/15" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M13,13 L2,13 C1.448,13 1,12.553 1,12 L1,8 C1,7.448 1.448,7 2,7 C2.552,7 3,7.448 3,8 L3,11 L12,11 L12,8 C12,7.448 12.447,7 13,7 C13.553,7 14,7.448 14,8 L14,12 C14,12.553 13.553,13 13,13" id="Fill-1" fill="#2B2B2B"></path><path d="M7.5,10 C6.672,10 6,9.553 6,9 L6,3 C6,2.448 6.672,2 7.5,2 C8.328,2 9,2.448 9,3 L9,9 C9,9.553 8.328,10 7.5,10" id="Fill-3" fill="#2B2B2B" transform="translate(7.500000, 6.000000) rotate(180.000000) translate(-7.500000, -6.000000) "></path><path d="M8.00025,10.00025 C7.74425,10.00025 7.48825,9.90225 7.29325,9.70725 C6.90225,9.31625 6.90225,8.68425 7.29325,8.29325 L10.29325,5.29325 C10.68425,4.90225 11.31625,4.90225 11.70725,5.29325 C12.09825,5.68425 12.09825,6.31625 11.70725,6.70725 L8.70725,9.70725 C8.51225,9.90225 8.25625,10.00025 8.00025,10.00025" id="Fill-5" fill="#2B2B2B" transform="translate(9.500250, 7.500125) rotate(180.000000) translate(-9.500250, -7.500125) "></path><path d="M7.00025,10.00025 C6.74425,10.00025 6.48825,9.90225 6.29325,9.70725 L3.29325,6.70725 C2.90225,6.31625 2.90225,5.68425 3.29325,5.29325 C3.68425,4.90225 4.31625,4.90225 4.70725,5.29325 L7.70725,8.29325 C8.09825,8.68425 8.09825,9.31625 7.70725,9.70725 C7.51225,9.90225 7.25625,10.00025 7.00025,10.00025" id="Fill-8" fill="#2B2B2B" transform="translate(5.500250, 7.500125) rotate(180.000000) translate(-5.500250, -7.500125) "></path></g></svg>';
var hamburger = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Hamburger/Black/30</title><g id="Hamburger/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M27,5 L3,5 C2.172,5 1.5,4.329 1.5,3.5 C1.5,2.671 2.172,2 3,2 L27,2 C27.828,2 28.5,2.671 28.5,3.5 C28.5,4.329 27.828,5 27,5" id="Fill-1" fill="#2B2B2B"></path><path d="M26.5,16 L2.5,16 C1.672,16 1,15.329 1,14.5 C1,13.671 1.672,13 2.5,13 L26.5,13 C27.328,13 28,13.671 28,14.5 C28,15.329 27.328,16 26.5,16" id="Fill-3" fill="#2B2B2B"></path><path d="M26.5,27 L2.5,27 C1.672,27 1,26.328 1,25.5 C1,24.672 1.672,24 2.5,24 L26.5,24 C27.328,24 28,24.672 28,25.5 C28,26.328 27.328,27 26.5,27" id="Fill-5" fill="#2B2B2B"></path></g></svg>';
var help = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Help/Black/30</title><g id="Help/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M21.2345041,25.22698 L19.1001009,20.9561676 C19.8262794,20.4556661 20.4561691,19.8257764 20.9566706,19.1006009 L25.22648,21.2350041 C24.2304921,22.8618848 22.8613848,24.2309921 21.2345041,25.22698 M14.9998,26.9942819 C13.4290879,26.9942819 11.9325984,26.6823461 10.55647,26.1306912 L12.6948853,21.8538607 C13.4200608,22.0985949 14.1923777,22.2370101 14.9998,22.2370101 C15.8072223,22.2370101 16.5795392,22.0985949 17.3047147,21.8538607 L19.444133,26.1306912 C18.0680046,26.6823461 16.5715151,26.9942819 14.9998,26.9942819 M4.77311996,21.2350041 L9.0439324,19.1006009 C9.5444339,19.8257764 10.1743236,20.4556661 10.8994991,20.9561676 L8.76509589,25.22698 C7.13821525,24.2309921 5.76910792,22.8618848 4.77311996,21.2350041 M8.76509589,4.77361996 L10.8994991,9.04342939 C10.1743236,9.5449339 9.5444339,10.1748236 9.04292939,10.8999991 L4.77311996,8.76559589 C5.76910792,7.13771224 7.13821525,5.76960792 8.76509589,4.77361996 M14.9998,3.00631805 C16.5715151,3.00631805 18.0680046,3.31825386 19.444133,3.86890582 L17.3057178,8.14673932 C16.5795392,7.90200512 15.8072223,7.76358987 14.9998,7.76358987 C14.1923777,7.76358987 13.4200608,7.90200512 12.6938822,8.14673932 L10.55647,3.86990883 C11.9325984,3.31825386 13.4290879,3.00631805 14.9998,3.00631805 M25.22648,8.76559589 L20.9576736,10.8999991 C20.4561691,10.1748236 19.8262794,9.5449339 19.1001009,9.04342939 L21.2345041,4.77361996 C22.8613848,5.76960792 24.2304921,7.13771224 25.22648,8.76559589 M3.00581805,15.0003 C3.00581805,13.4295879 3.31775386,11.9320954 3.86940883,10.555967 L8.14623932,12.6943822 C7.90150512,13.4205608 7.76308987,14.1938807 7.76308987,15.0003 C7.76308987,15.8067193 7.90150512,16.5800392 8.14623932,17.3062178 L3.86940883,19.44363 C3.31775386,18.0675016 3.00581805,16.5710121 3.00581805,15.0003 M19.1221671,18.1828476 C18.8483456,18.5339008 18.5344038,18.8488456 18.1823476,19.1216641 C17.6537619,19.5308918 17.0489474,19.8358065 16.3879645,20.0203602 C15.9436315,20.1437303 15.4842534,20.2309921 14.9998,20.2309921 C14.5163496,20.2309921 14.0569715,20.1437303 13.6116355,20.0203602 C12.9506526,19.8358065 12.3468411,19.5308918 11.8172524,19.1216641 C11.4661992,18.8488456 11.1512544,18.5339008 10.8784359,18.1828476 C10.4702112,17.6532589 10.1642935,17.0494474 9.97973982,16.3884645 C9.85636971,15.9431285 9.76910792,15.4837504 9.76910792,15.0003 C9.76910792,14.5158466 9.85636971,14.0564685 9.97973982,13.6111325 C10.1632905,12.9511526 10.4692082,12.3463381 10.8784359,11.8177524 C11.1512544,11.4656962 11.4651962,11.1517544 11.8172524,10.8789359 C12.3468411,10.4697082 12.9506526,10.1637905 13.6116355,9.98023982 C14.0569715,9.85686971 14.5163496,9.76960792 14.9998,9.76960792 C15.4842534,9.76960792 15.9436315,9.85686971 16.3879645,9.98023982 C17.0489474,10.1637905 17.6537619,10.4697082 18.1823476,10.8789359 C18.5354068,11.1517544 18.8483456,11.4656962 19.1221671,11.8177524 C19.5313948,12.3463381 19.8363095,12.9511526 20.0198602,13.6111325 C20.1432303,14.0564685 20.2304921,14.5158466 20.2304921,15.0003 C20.2304921,15.4837504 20.1432303,15.9431285 20.0198602,16.3884645 C19.8353065,17.0494474 19.5303918,17.6532589 19.1221671,18.1828476 M26.9937819,15.0003 C26.9937819,16.5710121 26.6828491,18.0675016 26.1311942,19.44363 L21.8533607,17.3062178 C22.0980949,16.5800392 22.2365101,15.8067193 22.2365101,15.0003 C22.2365101,14.1938807 22.0980949,13.4205608 21.8533607,12.6943822 L26.1311942,10.555967 C26.6828491,11.9320954 26.9937819,13.4295879 26.9937819,15.0003 M14.9998,1.0003 C7.28064253,1.0003 0.9998,7.28013952 0.9998,15.0003 C0.9998,22.7194575 7.28064253,29.0003 14.9998,29.0003 C22.7189575,29.0003 28.9998,22.7194575 28.9998,15.0003 C28.9998,7.28013952 22.7189575,1.0003 14.9998,1.0003" id="Fill-1" fill="#2B2B2B"></path></g></svg>';
var homefilled = '<svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Home/Black/15</title><g id="Home/Black/15" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M12,12.999875 L3,12.999875 C2.724,12.999875 2.5,12.7853171 2.5,12.5198798 L2.5,7.7199278 L1.5,7.7199278 C1.298,7.7199278 1.1155,7.60280897 1.038,7.42377076 C0.9605,7.24425256 1.0035,7.03785462 1.1465,6.90057599 L7.1465,1.14063359 C7.342,0.952955469 7.658,0.952955469 7.8535,1.14063359 L9.5,2.72125779 L9.5,2.4399806 C9.5,2.17502325 9.7235,1.9599854 10,1.9599854 L11.5,1.9599854 C11.7765,1.9599854 12,2.17502325 12,2.4399806 L12,5.12123379 L13.8535,6.90057599 C13.9965,7.03785462 14.0395,7.24425256 13.962,7.42377076 C13.885,7.60280897 13.702,7.7199278 13.5,7.7199278 L12.5,7.7199278 L12.5,12.5198798 C12.5,12.7853171 12.2765,12.999875 12,12.999875 Z" id="Fill-1" fill="#2B2B2B"></path></g></svg>';
var iconalerterror = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve" height="145px" width="145px"><title>Error</title> <style type="text/css">.aest0{fill:#FFFFFF;}.aest1{fill:#EC0026;}.aest12{display:none;}</style><g id="Guides"></g><g id="THE_ICONS" class="aest0"><rect x="0" y="0" class="aest0" width="22" height="22"/><polygon points="11,3 2,18 20,18 "/><path d="M11,4.07l8.15,13.33H2.85L11,4.07 M11,1L0,19h22L11,1L11,1z" class="aest1"/><g><rect x="10" y="8" class="aest1" width="2" height="5"/><rect x="10" y="14" class="aest1" width="2" height="2"/></g></g><g id="Layer_3" class="aest12"></g><g id="Layer_4" class="aest12"></g><g id="Layer_5" class="aest12"></g></svg>';
var info = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Info/Line/Black/30</title><g id="Info/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1 M15,3 C21.617,3 27,8.383 27,15 C27,21.617 21.617,27 15,27 C8.383,27 3,21.617 3,15 C3,8.383 8.383,3 15,3" id="Fill-3" fill="#2B2B2B"></path><path d="M15,23 C14.447,23 14,22.553 14,22 L14,12 C14,11.448 14.447,11 15,11 C15.553,11 16,11.448 16,12 L16,22 C16,22.553 15.553,23 15,23" id="Fill-5" fill="#2B2B2B"></path><path d="M16,8 C16,8.552 15.553,9 15,9 C14.447,9 14,8.552 14,8 C14,7.448 14.447,7 15,7 C15.553,7 16,7.448 16,8" id="Fill-7" fill="#2B2B2B"></path></g></svg>';
var infofilled = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Info/Filled/Blue/30</title><g id="Info/Filled/Blue/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1" id="Page-1" fill="#0074B8"></path><path d="M15,23 C14.448,23 14,22.2669091 14,21.3636364 L14,12.6363636 C14,11.732 14.448,11 15,11 C15.552,11 16,11.732 16,12.6363636 L16,21.3636364 C16,22.2669091 15.552,23 15,23" id="Fill-1" fill="#FFFFFF"></path><path d="M16,8 C16,8.55266667 15.552,9 15,9 C14.448,9 14,8.55266667 14,8 C14,7.44733333 14.448,7 15,7 C15.552,7 16,7.44733333 16,8" id="Fill-3" fill="#FFFFFF"></path></g></svg>';
var international = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>International/Black/30</title><g id="International/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M20.1563,25.8193 C20.7633,24.9503 21.2963,23.9293 21.7353,22.7913 C22.3873,22.9623 22.9993,23.1603 23.5703,23.3823 C22.5913,24.3843 21.4343,25.2083 20.1563,25.8193 Z M6.4293,23.3823 C7.0283,23.1503 7.6673,22.9413 8.3533,22.7653 C8.8073,23.9493 9.3643,25.0023 9.9993,25.8943 C8.6593,25.2763 7.4493,24.4253 6.4293,23.3823 Z M9.9993,4.1063 C9.3633,4.9983 8.8063,6.0513 8.3523,7.2363 C7.6663,7.0603 7.0263,6.8513 6.4273,6.6183 C7.4483,5.5753 8.6583,4.7243 9.9993,4.1063 Z M23.5723,6.6183 C23.0003,6.8413 22.3883,7.0403 21.7363,7.2113 C21.2973,6.0713 20.7633,5.0493 20.1563,4.1803 C21.4343,4.7933 22.5923,5.6163 23.5723,6.6183 Z M23.0683,16.0003 L26.9493,16.0003 C26.7723,18.1293 26.0443,20.1013 24.8983,21.7703 C24.1173,21.4293 23.2653,21.1323 22.3443,20.8863 C22.7463,19.3823 22.9983,17.7373 23.0683,16.0003 Z M16.0003,20.0243 L16.0003,16.0003 L21.0693,16.0003 C20.9993,17.6303 20.7583,19.1273 20.3923,20.4623 C19.0173,20.2163 17.5433,20.0693 16.0003,20.0243 Z M16.0003,26.8143 L16.0003,22.0233 C17.3143,22.0633 18.5683,22.1833 19.7433,22.3773 C18.7713,24.7243 17.3943,26.3073 16.0003,26.8143 Z M14.0003,22.0233 L14.0003,26.7843 C12.6353,26.2393 11.2983,24.6633 10.3483,22.3623 C11.4963,22.1773 12.7193,22.0623 14.0003,22.0233 Z M9.0283,16.0003 L14.0003,16.0003 L14.0003,20.0243 C12.4923,20.0683 11.0503,20.2113 9.7003,20.4463 C9.3383,19.1153 9.0983,17.6233 9.0283,16.0003 Z M7.0293,16.0003 C7.0993,17.7263 7.3483,19.3633 7.7463,20.8603 C6.7903,21.1113 5.9093,21.4193 5.1013,21.7713 C3.9563,20.1013 3.2273,18.1293 3.0513,16.0003 L7.0293,16.0003 Z M7.0293,14.0003 L3.0513,14.0003 C3.2273,11.8723 3.9553,9.9003 5.1003,8.2303 C5.9073,8.5833 6.7893,8.8913 7.7463,9.1413 C7.3483,10.6373 7.0993,12.2743 7.0293,14.0003 Z M14.0003,9.9773 L14.0003,14.0003 L9.0283,14.0003 C9.0983,12.3773 9.3383,10.8863 9.7003,9.5553 C11.0493,9.7913 12.4923,9.9333 14.0003,9.9773 Z M14.0003,3.2153 L14.0003,7.9783 C12.7193,7.9393 11.4963,7.8243 10.3473,7.6393 C11.2973,5.3383 12.6353,3.7603 14.0003,3.2153 Z M16.0003,7.9783 L16.0003,3.1853 C17.3953,3.6923 18.7713,5.2763 19.7443,7.6253 C18.5693,7.8183 17.3153,7.9383 16.0003,7.9783 Z M21.0693,14.0003 L16.0003,14.0003 L16.0003,9.9773 C17.5433,9.9323 19.0173,9.7843 20.3933,9.5403 C20.7583,10.8743 20.9993,12.3713 21.0693,14.0003 Z M23.0683,14.0003 C22.9983,12.2643 22.7463,10.6193 22.3443,9.1153 C23.2663,8.8693 24.1193,8.5713 24.8993,8.2313 C26.0453,9.9003 26.7723,11.8723 26.9493,14.0003 L23.0683,14.0003 Z M29.0003,15.0003 C29.0003,7.3063 22.7933,1.0683 15.1153,1.0063 C15.0933,1.0053 15.0713,1.0003 15.0493,1.0003 C15.0433,1.0003 15.0373,1.0013 15.0313,1.0013 C15.0203,1.0013 15.0103,1.0003 15.0003,1.0003 C7.2673,1.0003 1.0003,7.2683 1.0003,15.0003 C1.0003,22.7323 7.2673,29.0003 15.0003,29.0003 C15.0103,29.0003 15.0203,28.9983 15.0313,28.9983 C15.0373,28.9983 15.0433,29.0003 15.0493,29.0003 C15.0713,29.0003 15.0933,28.9943 15.1153,28.9943 C22.7933,28.9313 29.0003,22.6933 29.0003,15.0003 Z" id="Fill-1" fill="#2B2B2B"></path></g></svg>';
var keyboard = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Keyboard/Black/30</title><g id="Keyboard/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M8.91891892,15 L7.08108108,15 C6.48324324,15 6,14.552 6,14 C6,13.448 6.48324324,13 7.08108108,13 L8.91891892,13 C9.51675676,13 10,13.448 10,14 C10,14.552 9.51675676,15 8.91891892,15 Z" id="Fill-1" fill="#2B2B2B"></path><path d="M13.9189189,15 L12.0810811,15 C11.4832432,15 11,14.552 11,14 C11,13.448 11.4832432,13 12.0810811,13 L13.9189189,13 C14.5167568,13 15,13.448 15,14 C15,14.552 14.5167568,15 13.9189189,15" id="Fill-3" fill="#2B2B2B"></path><path d="M18.9189189,15 L17.0810811,15 C16.4832432,15 16,14.552 16,14 C16,13.448 16.4832432,13 17.0810811,13 L18.9189189,13 C19.5167568,13 20,13.448 20,14 C20,14.552 19.5167568,15 18.9189189,15" id="Fill-5" fill="#2B2B2B"></path><path d="M23.9189189,15 L22.0810811,15 C21.4832432,15 21,14.552 21,14 C21,13.448 21.4832432,13 22.0810811,13 L23.9189189,13 C24.5167568,13 25,13.448 25,14 C25,14.552 24.5167568,15 23.9189189,15" id="Fill-7" fill="#2B2B2B"></path><path d="M8.91891892,12 L7.08108108,12 C6.48324324,12 6,11.552 6,11 C6,10.448 6.48324324,10 7.08108108,10 L8.91891892,10 C9.51675676,10 10,10.448 10,11 C10,11.552 9.51675676,12 8.91891892,12" id="Fill-9" fill="#2B2B2B"></path><path d="M13.9189189,12 L12.0810811,12 C11.4832432,12 11,11.552 11,11 C11,10.448 11.4832432,10 12.0810811,10 L13.9189189,10 C14.5167568,10 15,10.448 15,11 C15,11.552 14.5167568,12 13.9189189,12" id="Fill-11" fill="#2B2B2B"></path><path d="M18.9189189,12 L17.0810811,12 C16.4832432,12 16,11.552 16,11 C16,10.448 16.4832432,10 17.0810811,10 L18.9189189,10 C19.5167568,10 20,10.448 20,11 C20,11.552 19.5167568,12 18.9189189,12" id="Fill-13" fill="#2B2B2B"></path><path d="M23.9189189,12 L22.0810811,12 C21.4832432,12 21,11.552 21,11 C21,10.448 21.4832432,10 22.0810811,10 L23.9189189,10 C24.5167568,10 25,10.448 25,11 C25,11.552 24.5167568,12 23.9189189,12" id="Fill-15" fill="#2B2B2B"></path><path d="M22.974359,20 L9.02564103,20 C8.45948718,20 8,19.553 8,19 C8,18.447 8.45948718,18 9.02564103,18 L22.974359,18 C23.5415385,18 24,18.447 24,19 C24,19.553 23.5415385,20 22.974359,20" id="Fill-17" fill="#2B2B2B"></path><path d="M3.07142857,22 L27.9285714,22 L27.9285714,8 L3.07142857,8 L3.07142857,22 Z M28.9642857,24 L2.03571429,24 C1.46296429,24 1,23.553 1,23 L1,7 C1,6.448 1.46296429,6 2.03571429,6 L28.9642857,6 C29.5370357,6 30,6.448 30,7 L30,23 C30,23.553 29.5370357,24 28.9642857,24 Z" id="Fill-19" fill="#2B2B2B"></path></g></svg>';
var locationpin1pink = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>LocationPinNumber1/Filled/Pink/30</title><g id="LocationPinNumber1/Filled/Pink/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C8.38314757,1 3,6.01005823 3,12.1683783 C3,14.4639139 3.74257691,16.667549 5.0886313,18.4601023 C5.32082033,18.8464796 5.57547927,19.2130933 5.88684797,19.5974943 L14.1846634,28.6511735 C14.3890325,28.8725251 14.6875613,29 15.00214,29 C15.3167187,29 15.6152474,28.8725251 15.8196166,28.6501853 L24.1431119,19.5638962 C24.4074008,19.2348332 24.6545698,18.8800776 24.8781988,18.5104994 C26.2659831,16.6428445 27,14.4500794 27,12.1683783 C27,6.01005823 21.6168524,1 15,1" id="Fill-1" fill="#E90066"></path><path d="M14.2144168,15 L14.2144168,9.81142857 L12,9.81142857 L12,8.58857143 C12.3103539,8.59619048 12.6102228,8.5752381 12.8996068,8.52571429 C13.1879423,8.47619048 13.449017,8.38857143 13.6796855,8.26285714 C13.9093054,8.13714286 14.1053735,7.97142857 14.2636959,7.76571429 C14.4230668,7.56 14.5279161,7.3047619 14.5792923,7 L16,7 L16,15 L14.2144168,15 Z" id="Fill-4" fill="#FFFFFF"></path></g></svg>';
var locationpin1purple = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>LocationPinNumber1/Filled/Purple/30</title><g id="LocationPinNumber1/Filled/Purple/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C8.38314757,1 3,6.01005823 3,12.1683783 C3,14.4639139 3.74257691,16.667549 5.0886313,18.4601023 C5.32082033,18.8464796 5.57547927,19.2130933 5.88684797,19.5974943 L14.1846634,28.6511735 C14.3890325,28.8725251 14.6875613,29 15.00214,29 C15.3167187,29 15.6152474,28.8725251 15.8196166,28.6501853 L24.1431119,19.5638962 C24.4074008,19.2348332 24.6545698,18.8800776 24.8781988,18.5104994 C26.2659831,16.6428445 27,14.4500794 27,12.1683783 C27,6.01005823 21.6168524,1 15,1" id="Fill-1" fill="#82368C"></path><path d="M14.2144168,15 L14.2144168,9.81142857 L12,9.81142857 L12,8.58857143 C12.3103539,8.59619048 12.6102228,8.5752381 12.8996068,8.52571429 C13.1879423,8.47619048 13.449017,8.38857143 13.6796855,8.26285714 C13.9093054,8.13714286 14.1053735,7.97142857 14.2636959,7.76571429 C14.4230668,7.56 14.5279161,7.3047619 14.5792923,7 L16,7 L16,15 L14.2144168,15 Z" id="Fill-4" fill="#FFFFFF"></path></g></svg>';
var locationpin2pink = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>LocationPinNumber2/Filled/Pink/30</title><g id="LocationPinNumber2/Filled/Pink/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M14.9997913,1 C8.38293887,1 2.9997913,6.01005823 2.9997913,12.1683783 C2.9997913,14.4639139 3.74236821,16.667549 5.0884226,18.4601023 C5.32061163,18.8464796 5.57527057,19.2130933 5.88663928,19.5974943 L14.1844547,28.6511735 C14.3888239,28.8725251 14.6873526,29 15.0019313,29 C15.31651,29 15.6150387,28.8725251 15.8194079,28.6501853 L24.1429032,19.5638962 C24.4071921,19.2348332 24.6543611,18.8800776 24.8779901,18.5104994 C26.2657744,16.6428445 26.9997913,14.4500794 26.9997913,12.1683783 C26.9997913,6.01005823 21.6166437,1 14.9997913,1" id="Fill-1" fill="#E90066"></path><path d="M12.3492218,8.92227798 C12.4737354,8.53763566 12.6605058,8.20154044 12.9095331,7.9139923 C13.1585603,7.62644416 13.4717899,7.40238067 13.8492218,7.24180184 C14.2266537,7.08028942 14.6605058,7 15.151751,7 C15.5243191,7 15.881323,7.05694947 16.2198444,7.16898121 C16.557393,7.28101295 16.8560311,7.44159178 17.1118677,7.6507177 C17.368677,7.85984362 17.5729572,8.11751663 17.7247082,8.42373673 C17.8764591,8.72995682 17.9523346,9.07352083 17.9523346,9.45349516 C17.9523346,9.85027424 17.885214,10.1891703 17.7548638,10.4739176 C17.6215953,10.7577314 17.4464981,11.0098028 17.2285992,11.2301319 C17.0107004,11.450461 16.7636187,11.6502509 16.4873541,11.8285681 C16.2120623,12.0087525 15.9328794,12.1861361 15.6527237,12.3616525 C15.3725681,12.5371689 15.1001946,12.7257556 14.8365759,12.9274128 C14.5710117,13.1290699 14.3375486,13.3643366 14.135214,13.6332127 L18,13.6332127 L18,15 L12,15 C12,14.5434707 12.0671206,14.1485588 12.2033074,13.8115299 C12.3394942,13.4763683 12.5243191,13.1757498 12.7577821,12.9096744 C12.9912451,12.6454662 13.2655642,12.4008636 13.5807393,12.1758665 C13.8959144,11.9527366 14.2285992,11.7249387 14.5787938,11.4934065 C14.7587549,11.3739059 14.9484436,11.2525382 15.151751,11.1283697 C15.3531128,11.0051348 15.536965,10.8697631 15.7052529,10.7203874 C15.8725681,10.5710118 16.0126459,10.4029642 16.1264591,10.2162446 C16.2383268,10.029525 16.2957198,9.81666472 16.2957198,9.57766367 C16.2957198,9.19675575 16.1799611,8.89987163 15.9503891,8.68701132 C15.7217899,8.47415101 15.4270428,8.36772085 15.0700389,8.36772085 C14.8287938,8.36772085 14.6235409,8.42186953 14.4562257,8.53016688 C14.2889105,8.63846423 14.1536965,8.78037111 14.0535019,8.9558875 C13.9523346,9.1314039 13.8803502,9.32559225 13.8375486,9.53845256 C13.7947471,9.75131287 13.7743191,9.96230599 13.7743191,10.1714319 L12.1857977,10.1714319 C12.1702335,9.72237134 12.2247082,9.30692029 12.3492218,8.92227798" id="Fill-4" fill="#FFFFFF"></path></g></svg>';
var locationpin2purple = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>LocationPinNumber2/Filled/Purple/30</title><g id="LocationPinNumber2/Filled/Purple/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C8.38314757,1 3,6.01005823 3,12.1683783 C3,14.4639139 3.74257691,16.667549 5.0886313,18.4601023 C5.32082033,18.8464796 5.57547927,19.2130933 5.88684797,19.5974943 L14.1846634,28.6511735 C14.3890325,28.8725251 14.6875613,29 15.00214,29 C15.3167187,29 15.6152474,28.8725251 15.8196166,28.6501853 L24.1431119,19.5638962 C24.4074008,19.2348332 24.6545698,18.8800776 24.8781988,18.5104994 C26.2659831,16.6428445 27,14.4500794 27,12.1683783 C27,6.01005823 21.6168524,1 15,1" id="Fill-1" fill="#82368C"></path><path d="M12.3492218,8.92227798 C12.4737354,8.53763566 12.6605058,8.20154044 12.9095331,7.9139923 C13.1585603,7.62644416 13.4717899,7.40238067 13.8492218,7.24180184 C14.2266537,7.08028942 14.6605058,7 15.151751,7 C15.5243191,7 15.881323,7.05694947 16.2198444,7.16898121 C16.557393,7.28101295 16.8560311,7.44159178 17.1118677,7.6507177 C17.368677,7.85984362 17.5729572,8.11751663 17.7247082,8.42373673 C17.8764591,8.72995682 17.9523346,9.07352083 17.9523346,9.45349516 C17.9523346,9.85027424 17.885214,10.1891703 17.7548638,10.4739176 C17.6215953,10.7577314 17.4464981,11.0098028 17.2285992,11.2301319 C17.0107004,11.450461 16.7636187,11.6502509 16.4873541,11.8285681 C16.2120623,12.0087525 15.9328794,12.1861361 15.6527237,12.3616525 C15.3725681,12.5371689 15.1001946,12.7257556 14.8365759,12.9274128 C14.5710117,13.1290699 14.3375486,13.3643366 14.135214,13.6332127 L18,13.6332127 L18,15 L12,15 C12,14.5434707 12.0671206,14.1485588 12.2033074,13.8115299 C12.3394942,13.4763683 12.5243191,13.1757498 12.7577821,12.9096744 C12.9912451,12.6454662 13.2655642,12.4008636 13.5807393,12.1758665 C13.8959144,11.9527366 14.2285992,11.7249387 14.5787938,11.4934065 C14.7587549,11.3739059 14.9484436,11.2525382 15.151751,11.1283697 C15.3531128,11.0051348 15.536965,10.8697631 15.7052529,10.7203874 C15.8725681,10.5710118 16.0126459,10.4029642 16.1264591,10.2162446 C16.2383268,10.029525 16.2957198,9.81666472 16.2957198,9.57766367 C16.2957198,9.19675575 16.1799611,8.89987163 15.9503891,8.68701132 C15.7217899,8.47415101 15.4270428,8.36772085 15.0700389,8.36772085 C14.8287938,8.36772085 14.6235409,8.42186953 14.4562257,8.53016688 C14.2889105,8.63846423 14.1536965,8.78037111 14.0535019,8.9558875 C13.9523346,9.1314039 13.8803502,9.32559225 13.8375486,9.53845256 C13.7947471,9.75131287 13.7743191,9.96230599 13.7743191,10.1714319 L12.1857977,10.1714319 C12.1702335,9.72237134 12.2247082,9.30692029 12.3492218,8.92227798" id="Fill-4" fill="#FFFFFF"></path></g></svg>';
var locationpin3pink = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>LocationPinNumber3/Filled/Pink/30</title><g id="LocationPinNumber3/Filled/Pink/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C8.38314757,1 3,6.01005823 3,12.1683783 C3,14.4639139 3.74257691,16.667549 5.0886313,18.4601023 C5.32082033,18.8464796 5.57547927,19.2130933 5.88684797,19.5974943 L14.1846634,28.6511735 C14.3890325,28.8725251 14.6875613,29 15.00214,29 C15.3167187,29 15.6152474,28.8725251 15.8196166,28.6501853 L24.1431119,19.5638962 C24.4074008,19.2348332 24.6545698,18.8800776 24.8781988,18.5104994 C26.2659831,16.6428445 27,14.4500794 27,12.1683783 C27,6.01005823 21.6168524,1 15,1" id="Fill-1" fill="#E90066"></path><path d="M14.9897199,10.2682256 C15.1887387,10.2535534 15.3752588,10.2113709 15.5483187,10.1416781 C15.72234,10.0719853 15.8636722,9.97111417 15.9751996,9.83906465 C16.0867271,9.70701513 16.1424908,9.53094911 16.1424908,9.31086657 C16.1424908,8.98074278 16.0271176,8.72764787 15.7973326,8.55158184 C15.5665861,8.37551582 15.3002662,8.28748281 15.0012572,8.28748281 C14.5849521,8.28748281 14.2724829,8.4176983 14.0600039,8.6781293 C13.8484863,8.93856029 13.7465732,9.26685007 13.7542648,9.66299862 L12.1976875,9.66299862 C12.2121091,9.26685007 12.2871017,8.90554791 12.4217039,8.57909216 C12.556306,8.25263641 12.7457104,7.97203118 12.9879942,7.73727648 C13.230278,7.50252178 13.5196725,7.32095369 13.8581007,7.19257221 C14.1974903,7.06419074 14.5734148,7 14.9897199,7 C15.312765,7 15.63581,7.04585053 15.9588551,7.13755158 C16.2819002,7.22925264 16.5712947,7.36680422 16.8289616,7.55020633 C17.08759,7.73360844 17.2962232,7.956442 17.4577458,8.22145805 C17.6192683,8.48555708 17.7000296,8.79000459 17.7000296,9.13480055 C17.7000296,9.50894085 17.6058081,9.83906465 17.4173651,10.1251719 C17.2289222,10.4112792 16.9462577,10.6056855 16.5693718,10.7074736 L16.5693718,10.7303989 C17.0154817,10.825768 17.3654472,11.0311784 17.6192683,11.34663 C17.8740509,11.6620816 18,12.03989 18,12.480055 C18,12.8835397 17.9173158,13.2430078 17.7519475,13.5584594 C17.5865792,13.873911 17.3654472,14.1380101 17.0895128,14.3507565 C16.8126171,14.563503 16.4914949,14.7248968 16.1309535,14.8340211 C15.7694507,14.9449794 15.3935262,15 15.0012572,15 C14.5464944,15 14.1330736,14.9376433 13.7600334,14.8129298 C13.3869933,14.6882164 13.0697169,14.5066483 12.8082042,14.2682256 C12.5466915,14.0298028 12.3447884,13.7381935 12.2034561,13.3933975 C12.060201,13.0486016 11.9929,12.652453 12.0005915,12.2049519 L13.5590917,12.2049519 C13.5667833,12.4103622 13.6004338,12.6066025 13.6619662,12.7936726 C13.72446,12.9807428 13.8119514,13.1421366 13.9282861,13.2778542 C14.0436593,13.4135718 14.1878759,13.521779 14.3609357,13.6024759 C14.5330341,13.6831729 14.7387831,13.7235213 14.9772211,13.7235213 C15.3464155,13.7235213 15.6579232,13.6153141 15.9117444,13.3988996 C16.1655655,13.1824851 16.2924761,12.8862907 16.2924761,12.5130674 C16.2924761,12.219624 16.2328665,11.9958735 16.114609,11.8418157 C15.9944285,11.6877579 15.8425204,11.5758826 15.6579232,11.5061898 C15.4742875,11.436497 15.2714229,11.3952315 15.0522137,11.3851444 C14.833966,11.3741403 14.6234098,11.3686382 14.4234296,11.3686382 L14.4234296,10.2682256 C14.6012966,10.2828978 14.7887782,10.2828978 14.9897199,10.2682256" id="Fill-4" fill="#FFFFFF"></path></g></svg>';
var locationpin4pink = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>LocationPinNumber4/Filled/Pink/30</title><g id="LocationPinNumber4/Filled/Pink/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C8.38314757,1 3,6.01005823 3,12.1683783 C3,14.4639139 3.74257691,16.667549 5.0886313,18.4601023 C5.32082033,18.8464796 5.57547927,19.2130933 5.88684797,19.5974943 L14.1846634,28.6511735 C14.3890325,28.8725251 14.6875613,29 15.00214,29 C15.3167187,29 15.6152474,28.8725251 15.8196166,28.6501853 L24.1431119,19.5638962 C24.4074008,19.2348332 24.6545698,18.8800776 24.8781988,18.5104994 C26.2659831,16.6428445 27,14.4500794 27,12.1683783 C27,6.01005823 21.6168524,1 15,1" id="Fill-1" fill="#E90066"></path><path d="M15.3549618,9.03499583 L13.2824427,11.8118081 L15.3902672,11.8118081 L15.3902672,9.03499583 L15.3549618,9.03499583 Z M12,13.1478395 L12,11.6632544 L15.4818702,7 L16.9351145,7 L16.9351145,11.8118081 L18,11.8118081 L18,13.1478395 L16.9351145,13.1478395 L16.9351145,15 L15.3902672,15 L15.3902672,13.1478395 L12,13.1478395 Z" id="Fill-4" fill="#FFFFFF"></path></g></svg>';
var locationpin5pink = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>LocationPinNumber5/Filled/Pink/30</title><g id="LocationPinNumber5/Filled/Pink/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C8.38314757,1 3,6.01005823 3,12.1683783 C3,14.4639139 3.74257691,16.667549 5.0886313,18.4601023 C5.32082033,18.8464796 5.57547927,19.2130933 5.88684797,19.5974943 L14.1846634,28.6511735 C14.3890325,28.8725251 14.6875613,29 15.00214,29 C15.3167187,29 15.6152474,28.8725251 15.8196166,28.6501853 L24.1431119,19.5638962 C24.4074008,19.2348332 24.6545698,18.8800776 24.8781988,18.5104994 C26.2659831,16.6428445 27,14.4500794 27,12.1683783 C27,6.01005823 21.6168524,1 15,1" id="Fill-1" fill="#E90066"></path><path d="M14.2269231,8.31266856 L13.9038462,10.0965515 L13.9269231,10.1189903 C14.15,9.90208206 14.3884615,9.74688051 14.6423077,9.65432054 C14.8961538,9.55989068 15.1846154,9.51314323 15.5076923,9.51314323 C15.9076923,9.51314323 16.2615385,9.58419936 16.5692308,9.72631163 C16.8769231,9.86842389 17.1365385,10.0591535 17.3480769,10.2985005 C17.5605769,10.5378475 17.7221154,10.8202021 17.8326923,11.1455644 C17.9442308,11.4709267 18,11.8168579 18,12.1833579 C18,12.5872559 17.9192308,12.9631055 17.7576923,13.3109065 C17.5961538,13.6587076 17.3788462,13.9597612 17.1057692,14.2140674 C16.8326923,14.4683735 16.5163462,14.6647129 16.1538462,14.8030853 C15.7923077,14.9414578 15.4086538,15.0069042 15.0009615,14.9994246 C14.6076923,14.9994246 14.2326923,14.9489374 13.8759615,14.8479629 C13.5173077,14.7469884 13.2,14.5917868 12.9240385,14.3823582 C12.6461538,14.1738646 12.425,13.9130138 12.2596154,13.6026107 C12.0942308,13.2922076 12.0067308,12.9313172 12,12.5199396 L13.6394231,12.5199396 C13.6769231,12.87896 13.8153846,13.1650545 14.0538462,13.3782229 C14.2923077,13.5913913 14.5971154,13.6979755 14.9653846,13.6979755 C15.1807692,13.6979755 15.375,13.6549678 15.5480769,13.5689525 C15.7221154,13.4829372 15.8673077,13.3707433 15.9865385,13.2323708 C16.1057692,13.0939983 16.1990385,12.9331871 16.2634615,12.7499371 C16.3288462,12.566687 16.3625,12.3787623 16.3625,12.1833579 C16.3625,11.9814089 16.3307692,11.7906793 16.2692308,11.611169 C16.2086538,11.4316588 16.1163462,11.2745874 15.9923077,11.1399547 C15.8692308,11.005322 15.7240385,10.9015427 15.5548077,10.8258118 C15.3846154,10.7510159 15.1884615,10.7136179 14.9653846,10.7136179 C14.6740385,10.7136179 14.4355769,10.7641051 14.25,10.8650797 C14.0653846,10.9660542 13.8923077,11.1249955 13.7307692,11.3419037 L12.2538462,11.3419037 L13.05,7 L17.5625,7 L17.5625,8.31266856 L14.2269231,8.31266856 Z" id="Fill-4" fill="#FFFFFF"></path></g></svg>';
var locationpinfilled = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>LocationPin/Filled/Black/30</title><g id="LocationPin/Filled/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15.00087,16.6558908 C12.2317215,16.6558908 9.97831092,14.5747897 9.97831092,12.0154109 C9.97831092,9.45702019 12.2317215,7.37591908 15.00087,7.37591908 C17.7710885,7.37591908 20.0234291,9.45702019 20.0234291,12.0154109 C20.0234291,14.5747897 17.7710885,16.6558908 15.00087,16.6558908 M14.9998,1.0002 C8.38294757,1.0002 2.9998,6.01025823 2.9998,12.1685783 C2.9998,14.4631257 3.74237691,16.667749 5.0884313,18.4603023 C5.32062033,18.8466796 5.57527927,19.2132933 5.88664797,19.5976943 L14.1844634,28.6513735 C14.3888325,28.871737 14.6873613,29.0002 15.00194,29.0002 C15.3165187,29.0002 15.6150474,28.871737 15.8194166,28.6503853 L24.1429119,19.5631081 C24.4072008,19.2340451 24.6543698,18.8802776 24.8779988,18.5106994 C26.2657831,16.6420564 26.9998,14.4502794 26.9998,12.1685783 C26.9998,6.01025823 21.6166524,1.0002 14.9998,1.0002" id="Fill-1" fill="#2B2B2B"></path></g></svg>';
var locationpinline = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>LocationPin/Line/Black/30</title><g id="LocationPin/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M14.9997913,2.64095433 C9.56314396,2.64095433 5.13978239,6.76461765 5.13978239,11.8329783 C5.13978239,13.7253376 5.74967985,15.5406191 6.90527503,17.08514 C7.14602403,17.4764581 7.34932318,17.7679704 7.56225229,18.0328019 L15.0019313,26.1477128 L22.4672902,18.000192 C22.6438395,17.7778522 22.8482086,17.4843635 23.0322478,17.1760523 C23.0482978,17.1473951 23.0675577,17.118738 23.0889576,17.0920572 C24.2477628,15.5465481 24.8598002,13.7283021 24.8598002,11.8329783 C24.8598002,6.76461765 20.4364387,2.64095433 14.9997913,2.64095433 M15.0019313,28.6646 C14.6873526,28.6646 14.3888239,28.5371251 14.1844547,28.3157735 L5.88663928,19.2620943 C5.57527057,18.8776933 5.32061163,18.5110796 5.0884226,18.1247023 C3.74236821,16.332149 2.9997913,14.1285139 2.9997913,11.8329783 C2.9997913,5.67465823 8.38293887,0.6646 14.9997913,0.6646 C21.6166437,0.6646 26.9997913,5.67465823 26.9997913,11.8329783 C26.9997913,14.1146794 26.2657744,16.3074445 24.8779901,18.1750994 C24.6543611,18.5446776 24.4071921,18.8994332 24.1429032,19.2284962 L15.8194079,28.3147853 C15.6150387,28.5371251 15.31651,28.6646 15.0019313,28.6646" id="Fill-1" fill="#2B2B2B"></path><path d="M15,8.10674157 C12.85353,8.10674157 11.1074816,9.85323034 11.1074816,11.9989466 C11.1074816,14.1467697 12.85353,15.8932584 15,15.8932584 C17.14647,15.8932584 18.8925184,14.1467697 18.8925184,11.9989466 C18.8925184,9.85323034 17.14647,8.10674157 15,8.10674157 M15,18 C11.691254,18 9,15.3075843 9,11.9989466 C9,8.69136236 11.691254,6 15,6 C18.308746,6 21,8.69136236 21,11.9989466 C21,15.3075843 18.308746,18 15,18" id="Fill-4" fill="#2B2B2B"></path></g></svg>';
var locationpinthree = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>LocationPinThreeLogo/Filled/Purple/30</title><g id="LocationPinThreeLogo/Filled/Purple/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1.0002 C8.38314757,1.0002 3,6.01025823 3,12.1685783 C3,14.4631257 3.74257691,16.667749 5.0886313,18.4603023 C5.32082033,18.8466796 5.57547927,19.2132933 5.88684797,19.5976943 L14.1846634,28.6513735 C14.3890325,28.871737 14.6875613,29.0002 15.00214,29.0002 C15.3167187,29.0002 15.6152474,28.871737 15.8196166,28.6503853 L24.1431119,19.5631081 C24.4074008,19.2340451 24.6545698,18.8802776 24.8781988,18.5106994 C26.2659831,16.6420564 27,14.4502794 27,12.1685783 C27,6.01025823 21.6168524,1.0002 15,1.0002" id="Path" fill="#82368C"></path><g id="Three/White/30" transform="translate(7.000000, 4.000000)" fill="#FFFFFF"><path d="M11.9212307,6.77840674 C11.8055731,6.68975102 11.6683523,6.58253946 11.6056228,6.51862488 C11.6389478,6.45883382 11.6977568,6.36605458 11.7506848,6.28770767 C12.0564912,5.81968797 12.6328186,4.93725436 12.6328186,3.673395 C12.6328186,2.94765521 12.3819006,2.16212435 11.7742084,1.55802844 C11.1665162,0.953932533 10.2079307,0.533333333 8.80043722,0.533333333 C7.46547469,0.533333333 5.96388689,0.995167748 4.66420971,1.80131621 C4.08396168,2.16624787 3.60368882,2.55592066 3.26847797,2.93322288 C2.93326711,3.30846334 2.73919767,3.66927148 2.73919767,3.9785356 C2.73919767,4.12904413 2.794086,4.26718211 2.89798176,4.37439367 C3.08813061,4.57026094 3.42334146,4.66097842 3.85264659,4.71046067 C4.28195172,4.75788117 4.80535113,4.75994293 5.36991678,4.75994293 L5.46989194,4.75994293 C6.33830369,4.75994293 6.95187677,4.78468406 7.34393625,4.84447513 C7.53996599,4.87540154 7.6811074,4.91457499 7.76736049,4.95993373 C7.85557387,5.00735423 7.88301804,5.05477473 7.88497833,5.10631874 C7.88693863,5.12693635 7.86341506,5.17641861 7.80852674,5.23208615 C7.62033819,5.43001519 7.12830354,5.72278522 6.68527633,6.04648166 C6.46376272,6.207299 6.2540109,6.37842515 6.09718711,6.55161305 C5.94232361,6.72480096 5.83646756,6.90211238 5.83450726,7.08560909 L5.83450726,7.09385614 C5.83646756,7.32683511 5.9540854,7.51239358 6.13247246,7.65671683 C6.67155425,8.09174835 7.78696346,8.2051452 8.37113209,8.31648028 C8.73182681,8.38451839 8.92197566,8.5205946 9.02587142,8.66697961 C9.12976718,8.81336463 9.14740986,8.97830549 9.14740986,9.11850522 C9.14740986,9.64425422 8.9611816,10.1081504 8.62793105,10.4277233 C8.33192614,10.7143081 7.97515201,10.8998665 7.4556732,10.8998665 L7.39294369,10.8998665 C7.40470547,10.7947167 7.41058636,10.6916287 7.41058636,10.5926642 C7.41058636,9.97413595 7.17927127,9.45663399 6.78525149,9.09788762 C6.39319202,8.73914124 5.84038815,8.53708868 5.1993709,8.53708868 C4.40937105,8.53708868 3.7742347,8.88140273 3.33904867,9.39478117 C2.90386265,9.9081596 2.66862696,10.5844171 2.66666667,11.2524276 C2.66666667,12.3039256 3.12733655,13.3595471 4.02515276,14.1492015 C4.92296897,14.9409177 6.2579315,15.4666667 8.00651677,15.4666667 C9.39244703,15.4666667 10.7901391,14.9862764 11.8486997,14.1492015 C12.7249526,13.4543881 13.7717514,12.1905288 13.7717514,10.1143357 C13.7717514,8.21133048 12.5602876,7.27116756 11.9212307,6.77840674 L11.9212307,6.77840674 Z M6.4049538,6.91242119 C6.59902324,6.70830687 6.99892391,6.42172212 7.29688911,6.22173133 C7.58897343,6.02380229 7.85165328,5.84649086 8.04572272,5.6712412 C8.23783186,5.49392977 8.3632909,5.31455658 8.3632909,5.10631874 C8.3632909,4.94343964 8.30252168,4.79293111 8.18882443,4.67334898 C7.9849535,4.46304938 7.62425878,4.36408486 7.17339038,4.31047908 C6.72252198,4.25893506 6.1814799,4.2568733 5.62083484,4.2568733 L5.46597135,4.2568733 C5.00334116,4.2568733 4.63480525,4.25068802 4.34076064,4.23831746 C4.7485025,4.07131483 5.22289447,3.80534769 5.73845269,3.51670118 C6.57549967,3.04661972 7.50076004,2.52499425 8.37309239,2.29201528 C8.17118175,2.53324129 8.04180213,2.80539371 8.03984183,3.04043444 C8.03984183,3.09816374 8.0574845,3.16001657 8.09865075,3.20743707 C8.14177729,3.25485756 8.2084274,3.28784574 8.29860108,3.28784574 C8.45346458,3.28784574 8.62793105,3.22393115 8.82984168,3.15795481 C9.10232302,3.06311381 9.4179309,2.95590225 9.76490354,2.95590225 C10.0667893,2.95590225 10.394159,3.03631092 10.7430919,3.28166045 C10.5117768,3.29815454 10.321628,3.36825441 10.2040102,3.46721892 C10.0746305,3.57236872 10.0432658,3.68988909 10.0452261,3.77235952 C10.0471864,3.90637397 10.1353997,4.00946201 10.2471367,4.14347646 C10.4274841,4.35583782 10.6607594,4.63417553 10.6627197,5.08363938 C10.6627197,5.41145934 10.5431416,5.75989691 10.3667148,6.02586405 C10.3667148,6.00730821 10.3686751,5.9866906 10.3686751,5.96813475 C10.3686751,5.7392793 10.3196677,5.48362097 10.2020499,5.33723595 C10.1295189,5.25270376 10.0354246,5.2032215 9.92760822,5.2032215 C9.74530056,5.20528326 9.58651647,5.35166828 9.35128079,5.55578259 C9.18465551,5.70010585 8.97686398,5.88566432 8.71614443,6.05885223 C7.61445729,6.78871554 7.02440778,7.07117677 6.60686443,7.1062267 C6.44808034,7.11447374 6.21676525,7.11035022 6.4049538,6.91242119 L6.4049538,6.91242119 Z M7.41450696,11.3761333 C8.03396094,11.3761333 8.55147945,11.1782042 8.95138012,10.792655 C9.37872495,10.3844263 9.62180183,9.77208339 9.62180183,9.1143817 C9.62180183,8.7989323 9.52770755,8.53708868 9.35716168,8.33503613 C10.2804618,8.5680151 11.2410075,9.0669612 11.7742084,9.81744213 C11.5350521,9.7349717 11.3684268,9.71435409 11.1978809,9.71435409 C11.0253748,9.71641585 10.8881539,9.90609784 10.8881539,10.1225827 C10.8881539,10.2359796 10.9293202,10.3638087 10.9783276,10.5246261 C11.0547792,10.7740991 11.1547544,11.0957338 11.1547544,11.4792213 C11.1547544,11.8338442 11.0704616,12.240011 10.8058215,12.6935984 C10.7979803,12.326605 10.703886,12.033835 10.5843078,11.8771411 C10.4902136,11.7554973 10.3882781,11.7245709 10.3196677,11.7266326 C10.209891,11.7266326 10.123638,11.7843619 10.0530673,11.8709559 C9.98053625,11.9596116 9.91976703,12.0771319 9.84919632,12.2132082 C9.59435766,12.6935984 9.19445699,13.4585117 7.94378726,13.8543697 C8.0574845,13.6481937 8.11629343,13.4378941 8.11629343,13.2708914 C8.11629343,13.2049151 8.10649194,13.1430623 8.08688897,13.0915182 C8.04964331,12.990492 7.96535053,12.9307009 7.87125625,12.9307009 L7.86929595,12.9307009 C7.73207514,12.9368862 7.57329105,12.9822449 7.38902309,13.0379125 C7.10085938,13.1224447 6.75192644,13.2255327 6.36770815,13.2255327 C5.96976778,13.2255327 5.53458176,13.1162594 5.08763395,12.7595748 C5.24249744,12.7348336 5.37971826,12.6771043 5.47969343,12.5884486 C5.56202592,12.5142252 5.61299365,12.4173225 5.61299365,12.3162962 C5.61103335,12.1616641 5.49537581,12.0565143 5.36403588,11.9307469 C5.17192674,11.7410649 4.94453224,11.5183948 4.94453224,11.1410925 C4.94453224,11.0318192 4.96413521,10.9101753 5.00922205,10.7720374 C5.0503883,10.8916195 5.10919722,10.9988311 5.18564882,11.0895485 C5.30326666,11.2215012 5.44244778,11.3039717 5.5796686,11.3039717 C5.72277031,11.3060334 5.80902339,11.2338718 5.84430874,11.1431543 C5.8815544,11.0524368 5.8795941,10.947287 5.8795941,10.8668784 C5.8795941,10.7740991 5.92076034,10.6854434 5.98545016,10.6194671 C6.05210027,10.5534907 6.14031365,10.5122555 6.23244763,10.5122555 C6.44219945,10.5122555 6.60294384,10.6359612 6.71468079,10.8194579 C6.82445744,11.0029546 6.88326636,11.2483041 6.88326636,11.4771596 C6.88326636,11.6194211 6.86170309,11.7554973 6.81661625,11.8688941 L6.76956912,11.990538 L6.86954428,11.9101293 C7.05773283,11.7554973 7.20475514,11.5369506 7.27336555,11.378195 C7.31453179,11.3761333 7.36549952,11.3761333 7.41450696,11.3761333 L7.41450696,11.3761333 Z M3.3194457,4.12698237 C3.25475589,4.08574716 3.21358964,4.04245018 3.21358964,3.9785356 C3.21358964,3.79916241 3.37629432,3.51257766 3.67425953,3.19919002 C4.57207574,2.25284182 6.64999097,1.0343412 8.80043722,1.03640296 C9.88840227,1.03640296 10.7744567,1.31886419 11.3625459,1.84873671 C11.8722232,2.3064476 12.1525458,2.95384049 12.1525458,3.673395 C12.1525458,4.78056054 11.6565905,5.54341203 11.3547047,6.00524644 C11.1998412,6.23822541 11.1096675,6.37636339 11.1077073,6.5330572 C11.1077073,6.65676285 11.1645559,6.75985089 11.2547296,6.85881541 C11.3468635,6.95777993 11.4762432,7.0588062 11.6350273,7.18251185 C12.2623224,7.67114916 13.2914786,8.46698882 13.2914786,10.1122739 C13.2914786,11.9822909 12.3524961,13.1183211 11.560536,13.7450964 C10.5862681,14.5182567 9.28855127,14.9615353 8.00455647,14.9615353 C4.79947023,14.9594735 3.14105864,13.085333 3.14105864,11.2483041 C3.14105864,10.7019375 3.33512808,10.1452621 3.68798161,9.72672465 C4.04279544,9.30818722 4.55443306,9.02572599 5.1974106,9.02572599 L5.1993709,9.02572599 C5.55810533,9.02572599 6.01289432,9.1143817 6.37358904,9.36797828 C6.73428376,9.62157485 7.0048048,10.0359888 7.0048048,10.7081228 L7.0048048,10.7658521 C6.97344004,10.6895669 6.9283532,10.6070965 6.86562369,10.5266878 C6.73624406,10.3596852 6.52845254,10.2112384 6.22264614,10.2112384 C5.8776338,10.2112384 5.58554949,10.508132 5.58554949,10.8627548 C5.58554949,10.9287312 5.5777083,10.9699664 5.56986711,10.990584 C5.56790681,10.9988311 5.56398622,11.0029546 5.56202592,11.0050163 C5.47773313,11.0029546 5.37775796,10.9411018 5.29934607,10.8215196 C5.21897388,10.6998757 5.16016495,10.5184408 5.16016495,10.2875236 C5.16016495,10.2421648 5.16212525,10.1926826 5.16800614,10.1432003 L5.17780763,10.0359888 L5.10919722,10.1163974 C4.78574815,10.4957614 4.66813031,10.8380137 4.66813031,11.1349073 C4.66813031,11.6194211 4.9778573,11.9637351 5.16212525,12.1431083 C5.19545031,12.1760965 5.23661655,12.2152699 5.26994161,12.2503198 C5.28562399,12.2688757 5.29934607,12.2853698 5.30914756,12.2977403 C5.31306815,12.3039256 5.31698875,12.3101109 5.31894904,12.3142344 C5.31894904,12.3162962 5.32090934,12.3162962 5.32090934,12.318358 C5.31894904,12.3369138 5.28366369,12.3822725 5.1993709,12.4173225 C5.10723692,12.4585577 4.96021462,12.4894841 4.7485025,12.4894841 C4.6759715,12.4894841 4.59363901,12.4853606 4.50542562,12.4771135 L4.42505343,12.4688665 L4.47602116,12.5348428 C5.08959425,13.3038796 5.76785715,13.5141792 6.35594637,13.5141792 C6.78917209,13.5141792 7.17535068,13.4007824 7.45371291,13.3183119 C7.57133075,13.283262 7.70267068,13.231718 7.77520168,13.231718 C7.80656644,13.231718 7.81832822,13.239965 7.82420911,13.2482121 C7.83009001,13.2564591 7.8379312,13.2770767 7.8359709,13.3059414 C7.8359709,13.3945971 7.78696346,13.5574762 7.70267068,13.7244788 C7.61837789,13.8914814 7.50076004,14.0667311 7.37138042,14.1904367 L7.29296852,14.2646601 L7.39882458,14.2502278 C9.1924967,14.00694 9.7903874,12.9142068 10.0863923,12.3513461 C10.1353997,12.2565051 10.1824469,12.1699112 10.2236131,12.1080584 C10.2647794,12.0441438 10.3039853,12.0132174 10.3137868,12.0173409 C10.3294692,12.0173409 10.3588736,12.033835 10.3882781,12.0791937 C10.4764915,12.2173317 10.5509828,12.5616457 10.5509828,12.9203921 C10.5509828,13.0750242 10.5372607,13.2358415 10.505896,13.3822265 L10.4843327,13.4914998 L10.5627446,13.4152147 C11.2390472,12.7554512 11.4252754,12.0626996 11.4252754,11.4854066 C11.4252754,11.0441898 11.3174591,10.6689493 11.2410075,10.4277233 C11.1998412,10.2937089 11.1645559,10.1741267 11.1645559,10.1163974 C11.1645559,10.0689769 11.1723971,10.0442358 11.1821986,10.0318652 C11.1900397,10.0194947 11.2057221,10.0112476 11.2351266,10.0030006 C11.52133,10.0030006 11.8604615,10.1102122 12.2682033,10.3143265 L12.3485755,10.3534999 L12.3132902,10.2689677 C11.7604863,8.90820562 10.5294195,8.32472732 9.33167781,8.00721616 C8.73182681,7.84846058 8.1378567,7.75361959 7.63798086,7.66290211 C7.27532584,7.59692577 6.95971796,7.53094942 6.73036317,7.44435547 C6.69311752,7.42786138 6.65391157,7.40930554 6.61862622,7.39074969 C7.30277001,7.30003222 8.13001551,6.79283906 8.86512703,6.29595471 C9.14152896,6.11039624 9.35520138,5.92071425 9.52574725,5.77020572 C9.61592093,5.69185881 9.69825342,5.61969718 9.76882413,5.56815316 C9.83743454,5.51454738 9.89820376,5.48568273 9.92368762,5.48774449 C9.94917149,5.48774449 9.96877447,5.49805329 9.99229803,5.52485618 C10.0589481,5.60114133 10.1001144,5.81144093 10.0981541,6.04235814 C10.0981541,6.22791661 10.0746305,6.42584564 10.031504,6.58666298 L10.0079804,6.6753187 L10.0824717,6.62583644 C10.66468,6.23204013 10.9450026,5.6341295 10.9450026,5.07539233 C10.9450026,4.5145934 10.6489977,4.16409407 10.4588488,3.93936214 C10.4294444,3.90431221 10.3961193,3.86307699 10.3686751,3.82802706 C10.3471119,3.79916241 10.3294692,3.77029776 10.3235883,3.75998895 C10.3275089,3.74555663 10.3431913,3.71669198 10.3765163,3.69195085 C10.4980548,3.59504809 10.7078066,3.53525703 10.9489232,3.53731879 C11.0724219,3.53731879 11.2037618,3.55175112 11.337062,3.58473929 L11.429196,3.60741866 L11.3723474,3.52907175 C10.8705113,2.85075245 10.2941838,2.65694694 9.78058592,2.65694694 C9.37676465,2.65694694 9.01018904,2.77652906 8.74358859,2.86724654 C8.61420896,2.91260527 8.4338616,2.97033458 8.35544971,2.97033458 C8.34564822,2.97033458 8.33780703,2.97033458 8.33388644,2.96827282 C8.33584673,2.8693083 8.40249685,2.70230567 8.53187647,2.52705601 C8.6632164,2.34562106 8.85728584,2.15181555 9.10624361,1.99512173 L9.19641729,1.93739242 L9.09056123,1.92914538 C9.04547439,1.92502186 8.99842725,1.9229601 8.94941982,1.9229601 C7.91830339,1.92502186 6.58726146,2.71261448 5.60515246,3.24454876 C4.99157938,3.58473929 3.70562429,4.36820839 3.3194457,4.12698237 L3.3194457,4.12698237 Z" id="Three-logo"></path></g></g></svg>';
var mms = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>MMS/Black/30</title><g id="MMS/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M3,3 L3,25.203 L6.828,20.535 C7.019,20.304 7.302,20.169 7.602,20.169 L27,20.169 L27,3 L3,3 Z M2,29 C1.887,29 1.773,28.981 1.663,28.941 C1.266,28.8 1,28.423 1,28 L1,2 C1,1.448 1.447,1 2,1 L28,1 C28.553,1 29,1.448 29,2 L29,21.169 C29,21.722 28.553,22.169 28,22.169 L8.075,22.169 L2.773,28.634 C2.58,28.87 2.294,29 2,29 Z" id="Fill-1" fill="#2B2B2B"></path><path d="M8.96225589,15 L21.3212933,15 L18.0063794,8.909 L14.8102832,13.566 C14.6365498,13.821 14.3529848,13.98 14.0464552,13.998 C13.7459163,14.026 13.4403851,13.892 13.2356991,13.659 L11.4374582,11.6 L8.96225589,15 Z M23.0027135,17 L6.99826925,17 C6.62284526,17 6.27837379,16.789 6.10863422,16.453 C5.93889465,16.118 5.97084563,15.715 6.19250554,15.411 L10.5598048,9.411 C10.7375321,9.166 11.0191001,9.015 11.3206374,9.001 C11.646138,8.989 11.9177213,9.113 12.1174149,9.341 L13.8916926,11.373 L17.2814916,6.434 C17.4781898,6.148 17.7947042,5.984 18.1561496,6.001 C18.502618,6.019 18.8151385,6.216 18.9808842,6.521 L23.87837,15.521 C24.0471111,15.831 24.0411203,16.207 23.8603975,16.511 C23.6806733,16.814 23.3541742,17 23.0027135,17 Z" id="Fill-3" fill="#2B2B2B"></path></g></svg>';
var minuscircle = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Minus/Circle/Line/Black/30</title><g id="Minus/Circle/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M22,16 L8,16 C7.447,16 7,15.552 7,15 C7,14.448 7.447,14 8,14 L22,14 C22.553,14 23,14.448 23,15 C23,15.552 22.553,16 22,16" id="Fill-1" fill="#2B2B2B"></path><path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1 M15,3 C21.617,3 27,8.383 27,15 C27,21.617 21.617,27 15,27 C8.383,27 3,21.617 3,15 C3,8.383 8.383,3 15,3" id="Fill-5" fill="#2B2B2B"></path></g></svg>';
var minuscirclefilled = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Minus/Circle/Filled/Blue/30</title><g id="Minus/Circle/Filled/Blue/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1" id="Page-1" fill="#0074B8"></path><path d="M8.5,17 C7.672,17 7,16.329 7,15.5 C7,14.671 7.672,14 8.5,14 L21.5,14 C22.328,14 23,14.671 23,15.5 C23,16.329 22.328,17 21.5,17 L8.5,17 Z" id="Page-1" fill="#FFFFFF"></path></g></svg>';
var minusline = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Minus/Line/Black/30</title><g id="Minus/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M26.5,17 L4.5,17 C3.672,17 3,16.329 3,15.5 C3,14.671 3.672,14 4.5,14 L26.5,14 C27.328,14 28,14.671 28,15.5 C28,16.329 27.328,17 26.5,17" id="Fill-1" fill="#2B2B2B"></path></g></svg>';
var mobile = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Mobile/Black/30</title><g id="Mobile/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M8,27 L22,27 L22,3 L8,3 L8,27 Z M23,29 L7,29 C6.447,29 6,28.553 6,28 L6,2 C6,1.448 6.447,1 7,1 L23,1 C23.553,1 24,1.448 24,2 L24,28 C24,28.553 23.553,29 23,29 Z" id="Fill-1" fill="#2B2B2B"></path><polygon id="Fill-3" fill="#2B2B2B" points="8 8 22 8 22 6 8 6"></polygon><polygon id="Fill-4" fill="#2B2B2B" points="8 23 22 23 22 21 8 21"></polygon><path d="M15,26 C14.87,26 14.74,25.97 14.62,25.92 C14.5,25.87 14.39,25.8 14.29,25.71 C14.2,25.609 14.13,25.5 14.069,25.38 C14.02,25.26 14,25.13 14,25 C14,24.87 14.02,24.74 14.08,24.62 C14.13,24.49 14.2,24.39 14.29,24.29 C14.52,24.06 14.87,23.95 15.189,24.02 C15.26,24.03 15.319,24.05 15.38,24.08 C15.439,24.1 15.5,24.13 15.56,24.17 C15.609,24.2 15.66,24.25 15.71,24.29 C15.8,24.39 15.87,24.5 15.92,24.62 C15.97,24.74 16,24.87 16,25 C16,25.13 15.97,25.26 15.92,25.38 C15.87,25.5 15.8,25.609 15.71,25.71 C15.609,25.8 15.5,25.87 15.38,25.92 C15.26,25.97 15.13,26 15,26" id="Fill-5" fill="#2B2B2B"></path></g></svg>';
var mobilemenu = '<html><head><title>Index of /svgicons/images/icons/Mobile</title></head><body><h1>Index of /svgicons/images/icons/Mobile</h1><table><tr><th valign="top"><img src="/icons/blank.gif" alt="[ICO]"></th><th><a href="?C=N;O=D">Name</a></th><th><a href="?C=M;O=A">Last modified</a></th><th><a href="?C=S;O=A">Size</a></th><th><a href="?C=D;O=A">Description</a></th></tr><tr><th colspan="5"><hr></th></tr><tr><td valign="top"><img src="/icons/back.gif" alt="[PARENTDIR]"></td><td><a href="/svgicons/images/icons/">Parent Directory</a></td><td>&nbsp;</td><td align="right"> - </td><td>&nbsp;</td></tr><tr><td valign="top"><img src="/icons/image2.gif" alt="[IMG]"></td><td><a href="Mobile.svg">Mobile.svg</a></td><td align="right">2018-04-04 14:58 </td><td align="right">1.4K</td><td>&nbsp;</td></tr><tr><th colspan="5"><hr></th></tr></table></body></html> ';
var modalfilled = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Modal/Circle/Filled/Blue/30</title><g id="Modal/Circle/Filled/Blue/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1" id="Page-1" fill="#0074B8"></path><path d="M9,17 L16,17 L16,9 L9,9 L9,17 Z M17,19 L8,19 C7.447,19 7,18.553 7,18 L7,8 C7,7.448 7.447,7 8,7 L17,7 C17.553,7 18,7.448 18,8 L18,18 C18,18.553 17.553,19 17,19 Z" id="Fill-1" fill="#FFFFFF"></path><path d="M21,23 L12,23 C11.447,23 11,22.553 11,22 C11,21.447 11.447,21 12,21 L20,21 L20,12 C20,11.448 20.447,11 21,11 C21.553,11 22,11.448 22,12 L22,22 C22,22.553 21.553,23 21,23" id="Fill-3" fill="#FFFFFF"></path></g></svg>';
var nationalrail = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>NationalRail/Black/30</title><g id="NationalRail/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M28,17.0004 L13.236,17.0004 L21.236,13.0004 L28,13.0004 C28.553,13.0004 29,12.5524 29,12.0004 C29,11.4484 28.553,11.0004 28,11.0004 L21.236,11.0004 L9.447,5.1054 C8.952,4.8584 8.354,5.0594 8.105,5.5534 C7.858,6.0474 8.059,6.6474 8.553,6.8954 L16.764,11.0004 L2,11.0004 C1.447,11.0004 1,11.4484 1,12.0004 C1,12.5524 1.447,13.0004 2,13.0004 L16.764,13.0004 L8.764,17.0004 L2,17.0004 C1.447,17.0004 1,17.4474 1,18.0004 C1,18.5534 1.447,19.0004 2,19.0004 L8.764,19.0004 L20.553,24.8954 C20.696,24.9664 20.849,25.0004 20.999,25.0004 C21.366,25.0004 21.719,24.7984 21.895,24.4474 C22.142,23.9534 21.941,23.3534 21.447,23.1054 L13.236,19.0004 L28,19.0004 C28.553,19.0004 29,18.5534 29,18.0004 C29,17.4474 28.553,17.0004 28,17.0004" id="Fill-1" fill="#2B2B2B"></path></g></svg>';
var notification = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Notification/Line/Black/30</title><g id="Notification/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M4,18.9794322 L4,18.9745351 C4.003,18.4329173 4.453,17.9970765 5.005,18.0000148 L25.006,18.0411503 C25.556,18.0440886 26,18.4818882 26,19.0205678 L26,19.0254649 C25.997,19.5670827 25.547,20.0029235 24.994,19.9999852 L4.995,19.9588497 C4.444,19.9559114 4,19.5181118 4,18.9794322" id="Fill-1" fill="#2B2B2B"></path><path d="M5,23.0399833 L25,23.0399833 L25,22.2403044 L24.169,18.9328088 C23.856,18.803449 23.487,18.5849093 23.113,18.2193698 C21.711,16.8483516 21,14.1866752 21,10.3068604 C21,8.1008834 20.402,6.43978563 19.223,5.36864708 C17.501,3.80358918 15.102,3.96136897 15.076,3.96528897 C15.025,3.96920896 14.975,3.96920896 14.924,3.96528897 C14.903,3.96528897 12.468,3.82024916 10.763,5.38138706 C9.593,6.45252562 9,8.11068338 9,10.3068604 C9,14.1866752 8.289,16.8483516 6.887,18.2193698 C6.513,18.5849093 6.144,18.803449 5.831,18.9328088 L5,22.2403044 L5,23.0399833 Z M26,24.9999806 L4,24.9999806 C3.448,24.9999806 3,24.5619212 3,24.019982 L3,22.1217245 C3,22.0423446 3.01,21.9629647 3.029,21.8865248 L4.029,17.9057702 C4.139,17.4677108 4.54,17.1599912 5,17.1599912 L5.002,17.1599912 C5.513,17.0825713 7,15.6948932 7,10.3068604 C7,7.53346416 7.813,5.38824705 9.417,3.93098901 C11.601,1.94747168 14.482,1.97981164 15,2.0062716 C15.513,1.97981164 18.399,1.94747168 20.583,3.93098901 C22.187,5.38824705 23,7.53346416 23,10.3068604 C23,15.6948932 24.487,17.0825713 25.061,17.1629312 L25.062,17.1629312 C25.522,17.1629312 25.861,17.4677108 25.971,17.9057702 L26.971,21.8865248 C26.99,21.9629647 27,22.0423446 27,22.1217245 L27,24.019982 C27,24.5619212 26.553,24.9999806 26,24.9999806 Z" id="Fill-3" fill="#2B2B2B"></path><path d="M15,28 C16.6572,28 18,26.6572 18,25 L12,25 C12,26.6572 13.3428,28 15,28" id="Fill-6" fill="#2B2B2B"></path></g></svg>';
var notificationfilled = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Notification/Filled/Black/30</title><g id="Notification/Filled/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M17.5,24.5933038 C17.5,25.9227521 16.381,26.9999806 15,26.9999806 C13.619,26.9999806 12.5,25.9227521 12.5,24.5933038 L4,24.5933038 C3.448,24.5933038 3,24.16299 3,23.6306331 L3,21.7659399 C3,21.6879635 3.01,21.6099872 3.029,21.5348989 L4.029,17.6245304 C4.139,17.1942165 4.54,16.8919379 5,16.8919379 L5.002,16.8919379 C5.513,16.8158869 7,15.4527452 7,10.1599815 C7,7.43562331 7.813,5.32833707 9.417,3.89684569 C11.601,1.94840013 14.482,1.98016826 15,2.00616037 C15.513,1.98016826 18.399,1.94840013 20.583,3.89684569 C22.187,5.32833707 23,7.43562331 23,10.1599815 C23,15.4527452 24.487,16.8158869 25.061,16.8948259 L25.062,16.8948259 C25.522,16.8948259 25.861,17.1942165 25.971,17.6245304 L26.971,21.5348989 C26.99,21.6099872 27,21.6879635 27,21.7659399 L27,23.6306331 C27,24.16299 26.553,24.5933038 26,24.5933038 L17.5,24.5933038 Z M7.005,16.8919379 C6.453,16.8890499 6.003,17.3174384 6,17.8546087 C6,18.3840776 6.444,18.8143914 6.995,18.8172794 L22.994,18.8577116 C23.547,18.8605996 23.997,18.4322111 24,17.8950408 C24,17.3655719 23.556,16.9352581 23.006,16.9323701 L7.005,16.8919379 Z" id="Combined-Shape" fill="#2B2B2B"></path></g></svg>';
var parking = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Parking/Black/30</title><g id="Parking/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M10,23 C9.447,23 9,22.5576174 9,22.0103297 L9,7.98967032 C9,7.4433723 9.447,7 10,7 C10.553,7 11,7.4433723 11,7.98967032 L11,22.0103297 C11,22.5576174 10.553,23 10,23 Z" id="Fill-1" fill="#2B2B2B"></path><path d="M14.596,15.9999 L10.0275718,15.9999 C9.5124126,15.9999 9.096,15.5820562 9.096,15.0651264 C9.096,14.5491314 9.5124126,14.1303528 10.0275718,14.1303528 L14.596,14.1303528 C16.2551294,14.1303528 18.2328564,13.6741833 18.2328564,11.4999 C18.2328564,9.32561666 16.2551294,8.86944715 14.596,8.86944715 L10.0275718,8.86944715 C9.5124126,8.86944715 9.096,8.45066859 9.096,7.93467358 C9.096,7.41867856 9.5124126,6.9999 10.0275718,6.9999 L14.596,6.9999 C18.040021,6.9999 20.096,8.68249244 20.096,11.4999 C20.096,14.3182423 18.040021,15.9999 14.596,15.9999" id="Fill-3" fill="#2B2B2B"></path><path d="M3,27 L27,27 L27,3 L3,3 L3,27 Z M28,29 L2,29 C1.447,29 1,28.553 1,28 L1,2 C1,1.448 1.447,1 2,1 L28,1 C28.553,1 29,1.448 29,2 L29,28 C29,28.553 28.553,29 28,29 Z" id="Fill-5" fill="#2B2B2B"></path></g></svg>';
var playlarge = '<svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Play/Black/100</title><g id="Play/Black/100" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M50,3 C24.042,3 3,24.042 3,50 C3,75.957 24.042,97 50,97 C75.957,97 97,75.957 97,50 C97,24.042 75.957,3 50,3 M50,8 C73.159,8 92,26.841 92,50 C92,73.159 73.159,92 50,92 C26.841,92 8,73.159 8,50 C8,26.841 26.841,8 50,8" id="Fill-1" fill="#2B2B2B"></path><path d="M69.7218515,47.8470048 L39.6913247,31.3103908 C38.9220503,30.8857941 37.9828198,30.8976158 37.2244782,31.3409302 C36.4661366,31.7832595 36,32.591077 36,33.4639139 L36,66.537142 C36,67.4089937 36.4661366,68.2168111 37.2254721,68.6591404 C37.613091,68.8857234 38.0494108,69 38.4847366,69 C38.9001846,69 39.3166264,68.89656 39.6913247,68.6896799 L69.7218515,52.1530658 C70.5110038,51.7186177 71,50.8940528 71,50.0005279 C71,49.1060179 70.5110038,48.281453 69.7218515,47.8470048" id="Fill-3" fill="#2B2B2B"></path></g></svg>';
var pluscircle = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Plus/Circle/Line/Black/30</title> <g id="Plus/Circle/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M22,16 L8,16 C7.447,16 7,15.552 7,15 C7,14.448 7.447,14 8,14 L22,14 C22.553,14 23,14.448 23,15 C23,15.552 22.553,16 22,16" id="Fill-1" fill="#2B2B2B"></path> <path d="M15,23 C14.447,23 14,22.553 14,22 L14,8 C14,7.448 14.447,7 15,7 C15.553,7 16,7.448 16,8 L16,22 C16,22.553 15.553,23 15,23" id="Fill-3" fill="#2B2B2B"></path> <path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1 M15,3 C21.617,3 27,8.383 27,15 C27,21.617 21.617,27 15,27 C8.383,27 3,21.617 3,15 C3,8.383 8.383,3 15,3" id="Fill-5" fill="#2B2B2B"></path> </g> </svg>';
var pluscirclefilled = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Plus/Circle/Filled/Blue/30</title><g id="Plus/Circle/Filled/Blue/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1" id="Page-1" fill="#0074B8"></path><path d="M16.5,13.5 L16.5,8.5 C16.5,7.671 15.828,7 15,7 C14.172,7 13.5,7.671 13.5,8.5 L13.5,13.5 L8.5,13.5 C7.672,13.5 7,14.171 7,15 C7,15.829 7.672,16.5 8.5,16.5 L13.5,16.5 L13.5,21.5 C13.5,22.328 14.172,23 15,23 C15.828,23 16.5,22.328 16.5,21.5 L16.5,16.5 L21.5,16.5 C22.328,16.5 23,15.829 23,15 C23,14.171 22.328,13.5 21.5,13.5 L16.5,13.5 Z" id="Page-1" fill="#FFFFFF"></path></g></svg>';
var plusline = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Plus/Line/Black/30</title><g id="Plus/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M25.5,16 L3.5,16 C2.672,16 2,15.329 2,14.5 C2,13.671 2.672,13 3.5,13 L25.5,13 C26.328,13 27,13.671 27,14.5 C27,15.329 26.328,16 25.5,16" id="Fill-1" fill="#2B2B2B"></path><path d="M14.5,27 C13.672,27 13,26.328 13,25.5 L13,3.5 C13,2.671 13.672,2 14.5,2 C15.328,2 16,2.671 16,3.5 L16,25.5 C16,26.328 15.328,27 14.5,27" id="Fill-3" fill="#2B2B2B"></path></g></svg>';
var reviewstar = '<svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>ReviewStar/Filled/15</title><g id="ReviewStar/Filled/15" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon id="Icon/Reviews/Solidstar" fill="#FCA100" points="7.5 11.6276141 3.48277907 13 3.58616879 8.86770551 1 5.58359214 5.08111929 4.40207957 7.5 1 9.91888071 4.40207957 14 5.58359214 11.4138312 8.86770551 11.5172209 13"></polygon></g></svg>';
var reviewstarline = '<svg width="13px" height="12px" viewBox="0 0 13 12" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Icon/Reviews/Solidstar</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="ReviewStar/Line/15" transform="translate(-1.000000, -1.000000)" stroke="#FCA100"><path d="M10.9994187,12.2947334 L10.9094787,8.69999605 L13.1479279,5.85744332 L9.61239353,4.8338814 L7.5,1.8628664 L5.38760647,4.8338814 L1.85207208,5.85744332 L4.09052134,8.69999605 L4.00058127,12.2947334 L7.5,11.0992421 L10.9994187,12.2947334 Z" id="Icon/Reviews/Solidstar"></path></g></g></svg>';
var roaming = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Roaming/Black/30</title><g id="Roaming/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M5.99975795,7.4840815 L2.90164783,7.4840815 L2.90164783,2.95740504 L5.99975795,2.95740504 C8.05565546,2.95740504 9.09786807,3.7190301 9.09786807,5.22074327 C9.09786807,6.72245644 8.05565546,7.4840815 5.99975795,7.4840815 M10.9997159,5.22074327 C10.9997159,2.57757146 9.13019949,0.9995 5.99975795,0.9995 L1.95072392,0.9995 C1.42486299,0.9995 0.9998,1.43807073 0.9998,1.97845252 L0.9998,14.0205475 C0.9998,14.5609293 1.42486299,14.9995 1.95072392,14.9995 C2.47658484,14.9995 2.90164783,14.5609293 2.90164783,14.0205475 L2.90164783,9.44198654 L5.99975795,9.44198654 C6.13764192,9.44198654 6.25745833,9.42240749 6.39058768,9.41653377 L9.22339003,14.5070869 C9.39931095,14.8232885 9.71977231,14.9995 10.0497429,14.9995 C10.2104491,14.9995 10.3721061,14.958384 10.5214012,14.8702783 C10.9768937,14.6020453 11.1347471,14.0039053 10.8741939,13.5340081 L8.3751659,9.04257391 C10.0421355,8.42289697 10.9997159,7.09739525 10.9997159,5.22074327" id="Fill-1" fill="#2B2B2B"></path><path d="M28,7 C27.447,7 27,7.448 27,8 L27,28 C27,28.553 27.447,29 28,29 C28.553,29 29,28.553 29,28 L29,8 C29,7.448 28.553,7 28,7" id="Fill-4" fill="#2B2B2B"></path><path d="M21,13 C20.447,13 20,13.448 20,14 L20,28 C20,28.553 20.447,29 21,29 C21.553,29 22,28.553 22,28 L22,14 C22,13.448 21.553,13 21,13" id="Fill-6" fill="#2B2B2B"></path><path d="M14,19 C13.447,19 13,19.447 13,20 L13,28 C13,28.553 13.447,29 14,29 C14.553,29 15,28.553 15,28 L15,20 C15,19.447 14.553,19 14,19" id="Fill-8" fill="#2B2B2B"></path><path d="M7,25 C6.447,25 6,25.447 6,26 L6,28 C6,28.553 6.447,29 7,29 C7.553,29 8,28.553 8,28 L8,26 C8,25.447 7.553,25 7,25" id="Fill-10" fill="#2B2B2B"></path></g></svg>';
var screensize = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>ScreenSize/Black/30</title><g id="ScreenSize/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M3,27 L27,27 L27,3 L3,3 L3,27 Z M28,29 L2,29 C1.447,29 1,28.553 1,28 L1,2 C1,1.448 1.447,1 2,1 L28,1 C28.553,1 29,1.448 29,2 L29,28 C29,28.553 28.553,29 28,29 Z" id="Fill-1" fill="#2B2B2B"></path><path d="M17,14 C16.744,14 16.488,13.902 16.293,13.707 C15.902,13.316 15.902,12.684 16.293,12.293 L21.586,7 L18,7 C17.447,7 17,6.552 17,6 C17,5.448 17.447,5 18,5 L24,5 C24.404,5 24.77,5.244 24.924,5.617 C25.079,5.991 24.993,6.421 24.707,6.707 L17.707,13.707 C17.512,13.902 17.256,14 17,14" id="Fill-3" fill="#2B2B2B"></path><path d="M24,13 C23.447,13 23,12.552 23,12 L23,6 C23,5.448 23.447,5 24,5 C24.553,5 25,5.448 25,6 L25,12 C25,12.552 24.553,13 24,13" id="Fill-4" fill="#2B2B2B"></path><path d="M12,25 L6,25 C5.596,25 5.23,24.757 5.076,24.383 C4.921,24.009 5.007,23.579 5.293,23.293 L12.293,16.293 C12.684,15.902 13.316,15.902 13.707,16.293 C14.098,16.684 14.098,17.316 13.707,17.707 L8.414,23 L12,23 C12.553,23 13,23.447 13,24 C13,24.553 12.553,25 12,25" id="Fill-5" fill="#2B2B2B"></path><path d="M6,25 C5.447,25 5,24.553 5,24 L5,18 C5,17.447 5.447,17 6,17 C6.553,17 7,17.447 7,18 L7,24 C7,24.553 6.553,25 6,25" id="Fill-6" fill="#2B2B2B"></path></g></svg>';
var securepayment = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>SecurePayment/Black/30</title><g id="SecurePayment/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M6.546,11.1 C6.546,6.634 10.339,3 15,3 C19.661,3 23.454,6.634 23.454,11.1 L23.454,14 L6.546,14 L6.546,11.1 Z M28,14 L25.454,14 L25.454,11.1 C25.454,5.531 20.765,1 15,1 C9.235,1 4.546,5.531 4.546,11.1 L4.546,14 L2,14 C1.447,14 1,14.448 1,15 L1,28 C1,28.553 1.447,29 2,29 L28,29 C28.553,29 29,28.553 29,28 L29,15 C29,14.448 28.553,14 28,14 Z" id="Fill-1" fill="#2A2A2A"></path><path d="M15,24 C14.447,24 14,23.553 14,23 L14,20 C14,19.447 14.447,19 15,19 C15.553,19 16,19.447 16,20 L16,23 C16,23.553 15.553,24 15,24" id="Fill-4" fill="#FFFFFF"></path></g></svg>';
var sim = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Sim/Black/30</title><g id="Sim/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M6.9979022,25.9968026 L23.0020978,25.9968026 L23.0020978,10.3648516 L16.6567604,4.00369821 L6.9979022,4.00369821 L6.9979022,25.9968026 Z M24.0010489,28 L5.9989511,28 C5.44753009,28 5,27.5522854 5,26.9984013 L5,3.0020995 C5,2.44821542 5.44753009,2.0005008 5.9989511,2.0005008 L17.0703262,2.0005008 C17.3360472,2.0005008 17.5897807,2.10566866 17.7775835,2.29296762 L24.7073073,9.24205944 C24.8951101,9.4293584 25,9.68476607 25,9.95018973 L25,26.9984013 C25,27.5522854 24.5534689,28 24.0010489,28 Z" id="Page-1" fill="#2B2B2B"></path><path d="M10.9862617,22.0041912 L19.0137383,22.0041912 L19.0137383,15.9958088 L10.9862617,15.9958088 L10.9862617,22.0041912 Z M20.0068692,24 L9.99313084,24 C9.44492262,24 9,23.5539367 9,23.0020956 L9,14.9979044 C9,14.4470612 9.44492262,14 9.99313084,14 L20.0068692,14 C20.5560705,14 21,14.4470612 21,14.9979044 L21,23.0020956 C21,23.5539367 20.5560705,24 20.0068692,24 Z" id="Fill-1" fill="#2B2B2B"></path><path d="M14.9794362,23 L14.9745391,23 C14.4329191,22.997549 13.9970765,22.629902 14.0000148,22.1789216 L14.0411505,15.8129085 C14.0431093,15.3627451 14.4818901,15 15.0205719,15 L15.0254691,15 C15.5661097,15.002451 16.0019523,15.370098 15.9999934,15.8210784 L15.9588577,22.1870915 C15.9559195,22.6372549 15.5181181,23 14.9794362,23" id="Fill-3" fill="#2B2B2B"></path><path d="M20.0073692,20 L9.99363084,20 C9.44442949,20 9.0005,19.553 9.0005,19 C9.0005,18.447 9.44442949,18 9.99363084,18 L20.0073692,18 C20.5565705,18 21.0005,18.447 21.0005,19 C21.0005,19.553 20.5565705,20 20.0073692,20" id="Fill-4" fill="#2B2B2B"></path></g></svg>';
var simfilled = '<svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Sim/Black/15</title><g id="Sim/Black/15" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M3.49947555,14 C3.22376505,14 3,13.7761427 3,13.4992006 L3,1.50104975 C3,1.22410771 3.22376505,1.0002504 3.49947555,1.0002504 L8.03516308,1.0002504 C8.16802358,1.0002504 8.29489037,1.05283433 8.38879177,1.14648381 L11.8536537,4.62102972 C11.9475551,4.7146792 12,4.84238303 12,4.97509486 L12,13.4992006 C12,13.7761427 11.7767344,14 11.5005244,14 L3.49947555,14 Z M5,9 L5,12 L10,12 L10,9 L5,9 Z" id="Combined-Shape" fill="#2B2B2B"></path></g></svg>';
var facebook = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Social/Facebook/White/30</title><g id="Social/Facebook/White/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M18.3711,12.3213 L18.1871,14.7083 L15.7401,14.7083 L15.7401,22.9993 L12.6491,22.9993 L12.6491,14.7083 L11.0001,14.7083 L11.0001,12.3213 L12.6491,12.3213 L12.6491,10.7183 C12.6491,10.0113 12.6671,8.9213 13.1801,8.2463 C13.7211,7.5313 14.4641,7.0453 15.7401,7.0453 C17.8211,7.0453 18.6971,7.3423 18.6971,7.3423 L18.2851,9.7853 C18.2851,9.7853 17.5981,9.5873 16.9561,9.5873 C16.3141,9.5873 15.7401,9.8173 15.7401,10.4573 L15.7401,12.3213 L18.3711,12.3213 Z M15.0001,1.0003 C7.2671,1.0003 1.0001,7.2683 1.0001,15.0003 C1.0001,22.7323 7.2671,29.0003 15.0001,29.0003 C22.7321,29.0003 29.0001,22.7323 29.0001,15.0003 C29.0001,7.2683 22.7321,1.0003 15.0001,1.0003 Z" id="Fill-1" fill="#FFFFFF"></path></g></svg>';
var instagram = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Social/Instagram/White/30</title><g id="Social/Instagram/White/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,13 C13.8953881,13 13,13.895556 13,15.000375 C13,16.104444 13.8953881,17 15,17 C16.1046119,17 17,16.104444 17,15.000375 C17,13.895556 16.1046119,13 15,13" id="Fill-1" fill="#FFFFFF"></path><path d="M19.5579782,11.4666463 C18.9923001,11.4666463 18.5333537,11.0076999 18.5333537,10.4420218 C18.5333537,9.87634368 18.9923001,9.41739727 19.5579782,9.41739727 C20.1236563,9.41739727 20.5826027,9.87634368 20.5826027,10.4420218 C20.5826027,11.0076999 20.1236563,11.4666463 19.5579782,11.4666463 M14.9994663,19.3850728 C12.5787909,19.3850728 10.6149272,17.4212091 10.6149272,15.0005337 C10.6149272,12.5787909 12.5787909,10.6159945 14.9994663,10.6159945 C17.4212091,10.6159945 19.3850728,12.5787909 19.3850728,15.0005337 C19.3850728,17.4212091 17.4212091,19.3850728 14.9994663,19.3850728 M21.6563239,9.96386369 C21.5015629,9.56575436 21.3158497,9.28184798 21.0170008,8.98193184 C20.7192193,8.68415034 20.4342456,8.49843714 20.035069,8.34367615 C19.7351529,8.22627125 19.2826104,8.08752001 18.4501029,8.05016391 C17.5492872,8.00853854 17.2792559,8 14.9994663,8 C12.7207441,8 12.4507128,8.00853854 11.5498971,8.05016391 C10.7173896,8.08752001 10.2648471,8.22627125 9.96493101,8.34367615 C9.56575436,8.49843714 9.28078067,8.68415034 8.98299916,8.98193184 C8.68415034,9.28184798 8.49843714,9.56575436 8.34367615,9.96386369 C8.22733857,10.2648471 8.08752001,10.7173896 8.05016391,11.5498971 C8.00853854,12.4496455 8,12.7196768 8,15.0005337 C8,17.2792559 8.00853854,17.5492872 8.05016391,18.4501029 C8.08752001,19.2826104 8.22733857,19.7351529 8.34367615,20.035069 C8.49843714,20.4342456 8.68415034,20.7192193 8.98299916,21.0170008 C9.28078067,21.316917 9.56575436,21.5015629 9.96493101,21.6563239 C10.2648471,21.7726614 10.7173896,21.91248 11.5498971,21.9498361 C12.4496455,21.9914615 12.7196768,22 14.9994663,22 C17.2803232,22 17.5503545,21.9914615 18.4501029,21.9498361 C19.2826104,21.91248 19.7351529,21.7726614 20.035069,21.6563239 C20.4342456,21.5015629 20.7192193,21.316917 21.0170008,21.0170008 C21.3158497,20.7192193 21.5015629,20.4342456 21.6563239,20.035069 C21.7726614,19.7351529 21.91248,19.2826104 21.9498361,18.4501029 C21.9914615,17.5492872 22,17.2792559 22,15.0005337 C22,12.7196768 21.9914615,12.4496455 21.9498361,11.5498971 C21.91248,10.7173896 21.7726614,10.2648471 21.6563239,9.96386369" id="Fill-3" fill="#FFFFFF"></path><path d="M22.952,18.299 C22.913,19.151 22.777,19.732 22.58,20.24 C22.376,20.767 22.101,21.213 21.657,21.657 C21.213,22.102 20.766,22.376 20.24,22.58 C19.731,22.778 19.15,22.913 18.299,22.952 C17.445,22.991 17.173,23 15,23 C12.827,23 12.555,22.991 11.701,22.952 C10.849,22.913 10.268,22.778 9.76,22.58 C9.233,22.376 8.787,22.102 8.343,21.657 C7.898,21.213 7.624,20.767 7.42,20.24 C7.223,19.732 7.087,19.151 7.048,18.299 C7.009,17.445 7,17.173 7,15 C7,12.827 7.009,12.555 7.048,11.702 C7.087,10.85 7.223,10.269 7.42,9.76 C7.624,9.234 7.898,8.788 8.343,8.343 C8.787,7.898 9.233,7.625 9.76,7.42 C10.268,7.222 10.849,7.087 11.701,7.048 C12.555,7.009 12.827,7 15,7 C17.173,7 17.445,7.009 18.299,7.048 C19.15,7.087 19.731,7.222 20.24,7.42 C20.766,7.625 21.213,7.898 21.657,8.343 C22.101,8.788 22.376,9.234 22.58,9.76 C22.777,10.269 22.913,10.85 22.952,11.702 C22.991,12.555 23,12.827 23,15 C23,17.173 22.991,17.445 22.952,18.299 M15,1 C7.267,1 1,7.268 1,15 C1,22.733 7.267,29 15,29 C22.732,29 29,22.733 29,15 C29,7.268 22.732,1 15,1" id="Fill-5" fill="#FFFFFF"></path></g></svg>';
var twitter = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Social/Twitter/White/30</title><g id="Social/Twitter/White/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M21.3857,11.7256 C21.3927,11.8656 21.3947,12.0086 21.3947,12.1516 C21.3947,16.5056 18.0817,21.5256 12.0207,21.5256 C10.1597,21.5256 8.4287,20.9806 6.9707,20.0456 C7.2277,20.0766 7.4897,20.0916 7.7557,20.0916 C9.2987,20.0916 10.7207,19.5656 11.8477,18.6806 C10.4057,18.6556 9.1897,17.7026 8.7707,16.3936 C8.9717,16.4326 9.1777,16.4526 9.3907,16.4526 C9.6917,16.4526 9.9827,16.4126 10.2587,16.3356 C8.7507,16.0346 7.6147,14.7026 7.6147,13.1056 L7.6147,13.0656 C8.0597,13.3106 8.5687,13.4596 9.1077,13.4766 C8.2237,12.8856 7.6427,11.8766 7.6427,10.7346 C7.6427,10.1306 7.8037,9.5646 8.0877,9.0766 C9.7137,11.0716 12.1417,12.3816 14.8787,12.5196 C14.8227,12.2786 14.7937,12.0276 14.7937,11.7686 C14.7937,9.9496 16.2697,8.4746 18.0877,8.4746 C19.0357,8.4746 19.8937,8.8736 20.4917,9.5146 C21.2447,9.3676 21.9487,9.0936 22.5857,8.7166 C22.3407,9.4856 21.8187,10.1306 21.1377,10.5386 C21.8037,10.4586 22.4387,10.2816 23.0297,10.0196 C22.5897,10.6796 22.0307,11.2606 21.3857,11.7256 M14.9997,0.9996 C7.2677,0.9996 0.9997,7.2676 0.9997,14.9996 C0.9997,22.7326 7.2677,28.9996 14.9997,28.9996 C22.7327,28.9996 28.9997,22.7326 28.9997,14.9996 C28.9997,7.2676 22.7327,0.9996 14.9997,0.9996" id="Fill-1" fill="#FFFFFF"></path></g></svg>';
var youtube = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Social/YouTube/White/30</title><g id="Social/YouTube/White/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon id="Fill-1" fill="#FFFFFF" points="12 17.9955 17 14.9955 12 11.9955"></polygon><path d="M22.832,17.8008 C22.832,20.4998 20.133,20.4998 20.133,20.4998 L9.866,20.4998 C7.168,20.4998 7.168,17.8008 7.168,17.8008 L7.168,12.1998 C7.168,9.4998 9.866,9.4998 9.866,9.4998 L20.133,9.4998 C22.832,9.4998 22.832,12.1998 22.832,12.1998 L22.832,17.8008 Z M15,0.9998 C7.268,0.9998 1,7.2678 1,14.9998 C1,22.7328 7.268,28.9998 15,28.9998 C22.732,28.9998 29,22.7328 29,14.9998 C29,7.2678 22.732,0.9998 15,0.9998 Z" id="Fill-2" fill="#FFFFFF"></path></g></svg>';
var speechbubble = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>SpeechBubble/Black/30</title><g id="SpeechBubble/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M3,11 L3,25.308 L5.552,22.347 C5.742,22.127 6.019,22 6.31,22 L21,22 L21,11 L3,11 Z M2,29 C1.883,29 1.766,28.979 1.651,28.937 C1.26,28.792 1,28.418 1,28 L1,10 C1,9.448 1.447,9 2,9 L22,9 C22.553,9 23,9.448 23,10 L23,23 C23,23.553 22.553,24 22,24 L6.768,24 L2.758,28.653 C2.563,28.878 2.285,29 2,29 Z" id="Fill-1" fill="#2B2B2B"></path><path d="M9,16 C9,16.553 8.553,17 8,17 C7.447,17 7,16.553 7,16 C7,15.448 7.447,15 8,15 C8.553,15 9,15.448 9,16" id="Fill-3" fill="#2B2B2B"></path><path d="M13,16 C13,16.553 12.553,17 12,17 C11.447,17 11,16.553 11,16 C11,15.448 11.447,15 12,15 C12.553,15 13,15.448 13,16" id="Fill-5" fill="#2B2B2B"></path><path d="M17,16 C17,16.553 16.553,17 16,17 C15.447,17 15,16.553 15,16 C15,15.448 15.447,15 16,15 C16.553,15 17,15.448 17,16" id="Fill-7" fill="#2B2B2B"></path><path d="M28,18 L25,18 C24.447,18 24,17.553 24,17 C24,16.447 24.447,16 25,16 L27,16 L27,4 L10,4 L10,7 C10,7.552 9.553,8 9,8 C8.447,8 8,7.552 8,7 L8,3 C8,2.448 8.447,2 9,2 L28,2 C28.553,2 29,2.448 29,3 L29,17 C29,17.553 28.553,18 28,18" id="Fill-9" fill="#2B2B2B"></path></g></svg>';
var text = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Text/Black/30</title><g id="Text/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M3,3 L3,25.203 L6.828,20.535 C7.019,20.304 7.302,20.169 7.602,20.169 L27,20.169 L27,3 L3,3 Z M2,29 C1.887,29 1.773,28.981 1.663,28.941 C1.266,28.8 1,28.423 1,28 L1,2 C1,1.448 1.447,1 2,1 L28,1 C28.553,1 29,1.448 29,2 L29,21.169 C29,21.722 28.553,22.169 28,22.169 L8.075,22.169 L2.773,28.634 C2.58,28.87 2.294,29 2,29 Z" id="Fill-1" fill="#2B2B2B"></path><path d="M12,12 C12,12.552 11.553,13 11,13 C10.447,13 10,12.552 10,12 C10,11.448 10.447,11 11,11 C11.553,11 12,11.448 12,12" id="Fill-3" fill="#2B2B2B"></path><path d="M16,12 C16,12.552 15.553,13 15,13 C14.447,13 14,12.552 14,12 C14,11.448 14.447,11 15,11 C15.553,11 16,11.448 16,12" id="Fill-5" fill="#2B2B2B"></path><path d="M20,12 C20,12.552 19.553,13 19,13 C18.447,13 18,12.552 18,12 C18,11.448 18.447,11 19,11 C19.553,11 20,11.448 20,12" id="Fill-7" fill="#2B2B2B"></path></g></svg>';
var threelogo = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Three/White/30</title><g id="Three/White/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M21.6672551,12.7095126 C21.4589585,12.5432832 21.211827,12.3422615 21.0988526,12.2224216 C21.1588703,12.1103134 21.2647838,11.9363523 21.3601059,11.7894519 C21.9108561,10.911915 22.9488085,9.25735193 22.9488085,6.88761563 C22.9488085,5.52685351 22.4969109,4.05398316 21.4024713,2.92130333 C20.3080318,1.7886235 18.5816417,1 16.0467785,1 C13.6425419,1 10.9382171,1.86593953 8.59752868,3.3774679 C7.55251545,4.06171476 6.68755516,4.79235124 6.08384819,5.4997929 C5.48014122,6.20336877 5.13062665,6.87988403 5.13062665,7.45975425 C5.13062665,7.74195775 5.22947926,8.00096645 5.41659312,8.20198813 C5.75904678,8.56923927 6.36275375,8.73933453 7.13592233,8.83211377 C7.90909091,8.9210272 8.85172109,8.924893 9.86849073,8.924893 L10.0485437,8.924893 C11.6125331,8.924893 12.717564,8.97128262 13.423654,9.08339086 C13.776699,9.14137788 14.0308914,9.21482811 14.1862312,9.29987574 C14.3451015,9.38878918 14.3945278,9.47770261 14.3980583,9.57434765 C14.4015887,9.61300566 14.3592233,9.7057849 14.2603707,9.81016154 C13.9214475,10.1812785 13.0353045,10.7302223 12.2374228,11.3371531 C11.8384819,11.6386856 11.4607237,11.9595471 11.1782877,12.2842745 C10.8993822,12.6090018 10.7087379,12.9414607 10.7052074,13.2855171 L10.7052074,13.3009803 C10.7087379,13.7378158 10.9205649,14.085738 11.2418358,14.3563441 C12.2127096,15.1720282 14.2215357,15.3846472 15.2736099,15.5934005 C15.9232127,15.720972 16.2656664,15.9761149 16.4527802,16.2505868 C16.6398941,16.5250587 16.6716681,16.8343228 16.6716681,17.0971973 C16.6716681,18.0829767 16.3362754,18.952782 15.7360989,19.5519812 C15.2030009,20.0893276 14.560459,20.4372498 13.6248897,20.4372498 L13.5119153,20.4372498 C13.533098,20.2400939 13.5436893,20.0468038 13.5436893,19.8612453 C13.5436893,18.7015049 13.1270962,17.7311887 12.4174757,17.0585393 C11.7113857,16.3858898 10.7157988,16.0070413 9.56134157,16.0070413 C8.13857017,16.0070413 6.99470432,16.6526301 6.2109444,17.6152147 C5.42718447,18.5777993 5.00353045,19.8457821 5,21.0983018 C5,23.0698606 5.82965578,25.0491509 7.44660194,26.5297529 C9.0635481,28.0142206 11.4677846,29 14.6169462,29 C17.1129744,29 19.6301853,28.0992683 21.5366284,26.5297529 C23.1147396,25.2269778 25,22.8572415 25,18.9643794 C25,15.3962447 22.8181818,13.6334392 21.6672551,12.7095126 L21.6672551,12.7095126 Z M11.7325684,12.9607897 C12.082083,12.5780754 12.8022948,12.040729 13.3389232,11.6657462 C13.8649603,11.2946293 14.3380406,10.9621704 14.6875552,10.6335772 C15.0335393,10.3011183 15.2594881,9.96479359 15.2594881,9.57434765 C15.2594881,9.26894933 15.1500441,8.98674582 14.945278,8.76252934 C14.5781112,8.36821759 13.9285084,8.18265912 13.1165049,8.08214828 C12.3045013,7.98550324 11.3300971,7.98163744 10.3203883,7.98163744 L10.0414828,7.98163744 C9.20829656,7.98163744 8.54457193,7.97004004 8.01500441,7.94684523 C8.74933804,7.63371531 9.60370697,7.13502692 10.5322154,6.59381472 C12.0397176,5.71241198 13.70609,4.73436421 15.2771403,4.29752865 C14.913504,4.74982742 14.6804943,5.26011321 14.6769638,5.70081458 C14.6769638,5.80905702 14.7087379,5.92503106 14.7828773,6.0139445 C14.8605472,6.10285793 14.9805825,6.16471076 15.1429832,6.16471076 C15.4218888,6.16471076 15.7360989,6.04487091 16.0997352,5.92116526 C16.5904678,5.7433384 17.1588703,5.54231672 17.7837599,5.54231672 C18.3274492,5.54231672 18.9170344,5.69308298 19.5454545,6.15311335 C19.1288614,6.18403976 18.7864078,6.31547701 18.5745808,6.50103548 C18.3415711,6.69819136 18.2850838,6.91854204 18.2886143,7.0731741 C18.2921447,7.32445119 18.451015,7.51774127 18.6522507,7.76901836 C18.9770521,8.16719591 19.3971756,8.68907911 19.4007061,9.53182383 C19.4007061,10.1464863 19.1853486,10.7998067 18.8676081,11.2984951 C18.8676081,11.2637029 18.8711386,11.2250449 18.8711386,11.1902527 C18.8711386,10.7611487 18.7828773,10.2817893 18.5710503,10.0073174 C18.4404237,9.84881955 18.270962,9.75604031 18.0767873,9.75604031 C17.7484554,9.75990612 17.462489,10.034378 17.038835,10.4170924 C16.7387467,10.6876985 16.364519,11.0356206 15.8949691,11.3603479 C13.9108561,12.7288416 12.8481906,13.2584564 12.0962048,13.3241751 C11.8102383,13.3396383 11.3936452,13.3319067 11.7325684,12.9607897 L11.7325684,12.9607897 Z M13.5507502,21.3302499 C14.6663725,21.3302499 15.5984113,20.959133 16.3186231,20.2362281 C17.0882613,19.4707994 17.5260371,18.3226564 17.5260371,17.0894657 C17.5260371,16.4979981 17.3565755,16.0070413 17.0494263,15.6281927 C18.7122683,16.0650283 20.4421889,17.0005523 21.4024713,18.407704 C20.9717564,18.2530719 20.6716681,18.2144139 20.364519,18.2144139 C20.0538394,18.2182797 19.8067079,18.5739335 19.8067079,18.9798426 C19.8067079,19.1924617 19.8808473,19.4321414 19.9691086,19.7336739 C20.1067961,20.2014359 20.2868491,20.8045009 20.2868491,21.52354 C20.2868491,22.1884578 20.1350397,22.9500207 19.6584289,23.800497 C19.6443071,23.1123844 19.4748455,22.5634406 19.2594881,22.2696397 C19.0900265,22.0415574 18.9064431,21.9835703 18.7828773,21.9874361 C18.5851721,21.9874361 18.4298323,22.0956786 18.3027361,22.2580422 C18.1721094,22.4242717 18.0626655,22.6446224 17.9355693,22.8997653 C17.4766108,23.800497 16.7563989,25.2347094 14.5039718,25.9769433 C14.7087379,25.5903631 14.8146514,25.1960514 14.8146514,24.8829214 C14.8146514,24.7592158 14.7969991,24.6432418 14.7616946,24.5465967 C14.6946161,24.3571724 14.5428067,24.2450642 14.3733451,24.2450642 L14.3698147,24.2450642 C14.1226831,24.2566616 13.8367167,24.3417092 13.5048544,24.4460859 C12.9858782,24.6045837 12.3574581,24.7978738 11.6654898,24.7978738 C10.9488085,24.7978738 10.1650485,24.5929863 9.36010591,23.9242027 C9.63901147,23.8778131 9.88614298,23.7695706 10.0661959,23.6033412 C10.2144748,23.4641723 10.3062665,23.2824796 10.3062665,23.0930554 C10.3027361,22.8031203 10.0944395,22.6059644 9.85789938,22.3701505 C9.51191527,22.0144968 9.10238305,21.5969902 9.10238305,20.8895485 C9.10238305,20.6846611 9.13768756,20.4565788 9.21888791,20.1975701 C9.29302736,20.4217866 9.39894086,20.6228082 9.53662842,20.7929035 C9.74845543,21.0403148 9.99911739,21.1949468 10.2462489,21.1949468 C10.5039718,21.1988126 10.6593116,21.0635096 10.7228597,20.8934143 C10.7899382,20.7233191 10.7864078,20.5261632 10.7864078,20.3753969 C10.7864078,20.2014359 10.8605472,20.0352064 10.9770521,19.9115008 C11.0970874,19.7877951 11.2559576,19.7104791 11.4218888,19.7104791 C11.799647,19.7104791 12.0891439,19.9424272 12.2903795,20.2864835 C12.4880847,20.6305398 12.5939982,21.0905702 12.5939982,21.5196742 C12.5939982,21.7864145 12.5551633,22.0415574 12.4739629,22.2541764 L12.3892321,22.4822587 L12.5692851,22.3314925 C12.9082083,22.0415574 13.1729921,21.6317824 13.2965578,21.3341157 C13.3706973,21.3302499 13.462489,21.3302499 13.5507502,21.3302499 L13.5507502,21.3302499 Z M6.17563989,7.73809195 C6.05913504,7.66077592 5.98499559,7.57959409 5.98499559,7.45975425 C5.98499559,7.12342952 6.27802295,6.58608311 6.81465137,5.99848129 C8.43159753,4.22407842 12.1738747,1.93938976 16.0467785,1.94325556 C18.0061783,1.94325556 19.6019417,2.47287036 20.6610768,3.46638133 C21.5789938,4.32458926 22.0838482,5.53845092 22.0838482,6.88761563 C22.0838482,8.96355101 21.1906443,10.3938976 20.646955,11.2598371 C20.3680494,11.6966726 20.2056487,11.9556813 20.2021183,12.2494823 C20.2021183,12.4814303 20.3045013,12.6747204 20.466902,12.8602789 C20.6328332,13.0458374 20.8658429,13.2352616 21.1518094,13.4672097 C22.2815534,14.3834047 24.1350397,15.875604 24.1350397,18.9605136 C24.1350397,22.4667955 22.4439541,24.5968521 21.0176523,25.7720558 C19.2630185,27.2217313 16.9258605,28.0528786 14.6134157,28.0528786 C8.84112974,28.0490128 5.85436893,24.5349993 5.85436893,21.0905702 C5.85436893,20.0661328 6.2038835,19.0223664 6.83936452,18.2376087 C7.47837599,17.452851 8.39982348,16.9232362 9.55781112,16.9232362 L9.56134157,16.9232362 C10.2074139,16.9232362 11.0264784,17.0894657 11.6760812,17.5649593 C12.325684,18.0404529 12.8128861,18.8174789 12.8128861,20.0777302 L12.8128861,20.1859727 C12.7563989,20.042938 12.6751986,19.888306 12.5622242,19.7375397 C12.3292145,19.4244098 11.9549868,19.1460721 11.4042365,19.1460721 C10.7828773,19.1460721 10.2568402,19.7027475 10.2568402,20.3676653 C10.2568402,20.491371 10.2427184,20.568687 10.2285966,20.607345 C10.2250662,20.6228082 10.2180053,20.6305398 10.2144748,20.6344056 C10.0626655,20.6305398 9.88261253,20.5145658 9.74139453,20.2903493 C9.59664607,20.062267 9.49073257,19.7220765 9.49073257,19.2891067 C9.49073257,19.2040591 9.49426302,19.1112799 9.50485437,19.0185006 L9.52250662,18.8174789 L9.39894086,18.9682452 C8.81641659,19.6795527 8.60458959,20.3212757 8.60458959,20.8779511 C8.60458959,21.7864145 9.16240071,22.4320033 9.49426302,22.768328 C9.55428067,22.8301809 9.62842012,22.9036311 9.68843778,22.9693497 C9.71668138,23.0041419 9.74139453,23.0350683 9.75904678,23.0582632 C9.76610768,23.0698606 9.77316858,23.081458 9.77669903,23.0891896 C9.77669903,23.0930554 9.78022948,23.0930554 9.78022948,23.0969212 C9.77669903,23.1317134 9.71315093,23.216761 9.56134157,23.2824796 C9.39541041,23.3597957 9.13062665,23.4177827 8.74933804,23.4177827 C8.61871139,23.4177827 8.47043248,23.4100511 8.31156222,23.3945879 L8.16681377,23.3791247 L8.25860547,23.5028303 C9.36363636,24.9447743 10.5851721,25.339086 11.6443071,25.339086 C12.4245366,25.339086 13.1200353,25.1264669 13.6213592,24.9718349 C13.8331862,24.9061163 14.0697264,24.8094712 14.200353,24.8094712 C14.2568402,24.8094712 14.2780229,24.8249344 14.2886143,24.8403976 C14.2992056,24.8558608 14.3133274,24.8945188 14.309797,24.9486401 C14.309797,25.1148695 14.2215357,25.4202678 14.0697264,25.7333978 C13.917917,26.0465277 13.70609,26.3751208 13.4730803,26.6070689 L13.3318623,26.7462377 L13.5225066,26.7191771 C16.7528685,26.2630126 17.8296558,24.2141378 18.3627538,23.158774 C18.451015,22.9809471 18.5357458,22.8185835 18.6098853,22.7026094 C18.6840247,22.5827696 18.7546337,22.5247825 18.772286,22.5325142 C18.8005296,22.5325142 18.8534863,22.5634406 18.9064431,22.6484882 C19.0653133,22.9074969 19.1994704,23.5530857 19.1994704,24.2257352 C19.1994704,24.5156703 19.1747573,24.8172028 19.1182701,25.0916747 L19.0794351,25.2965622 L19.2206531,25.1535275 C20.4386584,23.9164711 20.7740512,22.6175618 20.7740512,21.5351374 C20.7740512,20.7078559 20.5798764,20.00428 20.4421889,19.5519812 C20.3680494,19.3007041 20.3045013,19.0764876 20.3045013,18.9682452 C20.3045013,18.8793318 20.3186231,18.8329422 20.3362754,18.8097473 C20.3503972,18.7865525 20.3786408,18.7710893 20.4315975,18.7556261 C20.9470432,18.7556261 21.5578111,18.9566478 22.2921447,19.3393621 L22.4368932,19.4128124 L22.3733451,19.2543145 C21.3777582,16.7028855 19.1606355,15.6088637 17.0035305,15.0135303 C15.9232127,14.7158636 14.8534863,14.5380367 13.9532215,14.3679415 C13.3000883,14.2442358 12.7316858,14.1205302 12.3186231,13.9581665 C12.2515446,13.9272401 12.1809356,13.8924479 12.1173875,13.8576557 C13.3495146,13.6875604 14.8393645,12.7365732 16.1632833,11.8049151 C16.6610768,11.456993 17.0458959,11.1013392 17.353045,10.8191357 C17.5154457,10.6722353 17.6637246,10.5369322 17.7908208,10.4402872 C17.9143866,10.3397763 18.0238305,10.2856551 18.0697264,10.2895209 C18.1156222,10.2895209 18.1509267,10.3088499 18.1932921,10.3591053 C18.3133274,10.50214 18.3874669,10.8964517 18.3839365,11.3294215 C18.3839365,11.6773436 18.3415711,12.0484606 18.2639011,12.3499931 L18.2215357,12.5162226 L18.3556929,12.4234433 C19.4042365,11.6850752 19.9090909,10.5639928 19.9090909,9.51636062 C19.9090909,8.46486263 19.3759929,7.80767638 19.0335393,7.38630402 C18.9805825,7.32058539 18.9205649,7.24326936 18.8711386,7.17755074 C18.8323036,7.12342952 18.8005296,7.0693083 18.7899382,7.04997929 C18.7969991,7.02291868 18.8252427,6.96879746 18.8852604,6.92240784 C19.1041483,6.74071517 19.4819064,6.62860693 19.9161518,6.63247273 C20.1385702,6.63247273 20.3751103,6.65953334 20.6151809,6.72138617 L20.7811121,6.76390998 L20.678729,6.61700953 C19.7749338,5.34516084 18.7369815,4.98177551 17.8120035,4.98177551 C17.0847308,4.98177551 16.4245366,5.20599199 15.9443954,5.37608726 C15.7113857,5.46113489 15.3865843,5.56937733 15.2453663,5.56937733 C15.227714,5.56937733 15.2135922,5.56937733 15.2065313,5.56551153 C15.2100618,5.37995306 15.3300971,5.06682314 15.5631068,4.73823002 C15.799647,4.39803949 16.1491615,4.03465415 16.5975287,3.74085324 L16.7599294,3.6326108 L16.5692851,3.61714759 C16.4880847,3.60941599 16.4033539,3.60555019 16.3150927,3.60555019 C14.4580759,3.60941599 12.0609003,5.08615215 10.2921447,6.08352892 C9.18711386,6.72138617 6.87113857,8.19039072 6.17563989,7.73809195 L6.17563989,7.73809195 Z" id="Three-logo" fill="#FFFFFF"></path></g></svg>';
var circletick = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Tick/Circle/Line/Black/30</title><g id="Tick/Circle/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1 M15,3 C21.617,3 27,8.383 27,15 C27,21.617 21.617,27 15,27 C8.383,27 3,21.617 3,15 C3,8.383 8.383,3 15,3" id="Fill-1" fill="#2B2B2B"></path><path d="M12.7195865,21 C12.4755865,21 12.2315865,20.9131761 12.0395865,20.7395282 L8.32058648,17.3738807 C7.91458648,17.0070739 7.89158648,16.3905263 8.26658648,15.9954286 C8.64158648,15.5993553 9.27358648,15.5769176 9.67958648,15.9427489 L12.6955865,18.6713622 L20.2935865,11.2854732 C20.6855865,10.9030576 21.3185865,10.9059843 21.7075865,11.2874243 C22.0985865,11.6698399 22.0965865,12.2863875 21.7055865,12.666852 L13.4255865,20.7151394 C13.2305865,20.9043961 12.9755865,21 12.7195865,21" id="Fill-3" fill="#2B2B2B"></path></g></svg>';
var tick = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Tick/Green/30</title><g id="Tick/Green/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M9.2297,24.6037139 L1.4797,17.482476 C0.8727,16.9247051 0.8367,15.9845194 1.3997,15.3831572 C1.9627,14.7798136 2.9137,14.7461294 3.5197,15.3039003 L10.2127,21.4532497 L26.4407,5.43343649 C27.0287,4.85486068 27.9787,4.85486068 28.5617,5.43739934 C29.1467,6.01894729 29.1457,6.9601237 28.5587,7.53869952 L11.3087,24.5670576 C11.0167,24.8553548 10.6337,24.9999987 10.2497,24.9999987 C9.8837,24.9999987 9.5187,24.868234 9.2297,24.6037139 Z" id="Fill-1" fill="#0DB65C"></path></g></svg>';
var tickcirclelarge = '<svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Tick/Circle/Line/Green/100</title><g id="Tick/Circle/Line/Green/100" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M50,3 C24.042,3 3,24.042 3,50 C3,75.957 24.042,97 50,97 C75.957,97 97,75.957 97,50 C97,24.042 75.957,3 50,3 M50,8 C73.159,8 92,26.841 92,50 C92,73.159 73.159,92 50,92 C26.841,92 8,73.159 8,50 C8,26.841 26.841,8 50,8" id="Fill-1" fill="#0DB65C"></path><path d="M41.8938518,66 C41.2886882,66 40.6825308,65.7827266 40.2045609,65.347201 L27.7952286,54.0108131 C26.7886099,53.0927839 26.7299816,51.5434874 27.6630664,50.5530337 C28.5951575,49.5625801 30.1671917,49.5048363 31.1738104,50.4228654 L41.8322423,60.1590639 L67.7628579,34.7126264 C68.734697,33.7603424 70.3067312,33.7622998 71.2755893,34.7194774 C72.2434536,35.6766549 72.2414662,37.2259515 71.2696271,38.1792142 L43.6477332,65.286521 C43.1638011,65.761195 42.5298201,66 41.8938518,66" id="Fill-3" fill="#0DB65C"></path></g></svg>';
var tickfilled = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Tick/Circle/Filled/Green/30</title><g id="Tick/Circle/Filled/Green/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M29,15 C29,22.732 22.732,29 15,29 C7.268,29 1,22.732 1,15 C1,7.268 7.268,1 15,1 C22.732,1 29,7.268 29,15" id="Fill-1" fill="#0DB65C"></path><path d="M12.496046,21 C12.151577,21 11.8080492,20.8735854 11.5360504,20.6198058 L7.45230467,16.7941017 C6.88007203,16.2589784 6.84618983,15.3569677 7.3770109,14.7790725 C7.90594963,14.2011773 8.8010043,14.1679103 9.3713546,14.7030336 L12.4612226,17.597262 L20.5920085,9.41548287 C21.1435353,8.86039935 22.0376488,8.86134983 22.5882345,9.41928481 C23.1388202,9.97721979 23.1369378,10.880181 22.5844698,11.4352645 L13.4927473,20.5846378 C13.217925,20.8612291 12.8574561,21 12.496046,21" id="Fill-3" fill="#FFFFFF"></path></g></svg>';
var timelarge = '<svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Time/Black/100</title><g id="Time/Black/100" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M50,7.79591837 C26.7282857,7.79591837 7.79591837,26.7282857 7.79591837,50 C7.79591837,73.2717143 26.7282857,92.2040816 50,92.2040816 C73.2717143,92.2040816 92.2040816,73.2717143 92.2040816,50 C92.2040816,26.7282857 73.2717143,7.79591837 50,7.79591837 M50,97 C24.0838163,97 3,75.9161837 3,50 C3,24.0838163 24.0838163,3 50,3 C75.9161837,3 97,24.0838163 97,50 C97,75.9161837 75.9161837,97 50,97" id="Fill-1" fill="#2B2B2B"></path><path d="M82.625,52 L47,52 L47,16.375 C47,15.06305 48.06305,14 49.375,14 C50.68695,14 51.75,15.06305 51.75,16.375 L51.75,47.25 L82.625,47.25 C83.93695,47.25 85,48.31305 85,49.625 C85,50.93695 83.93695,52 82.625,52" id="Fill-3" fill="#2B2B2B"></path></g></svg>';
var timesmall = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Time/Black/30</title><g id="Time/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,3 C8.383,3 3,8.383 3,15 C3,21.617 8.383,27 15,27 C21.617,27 27,21.617 27,15 C27,8.383 21.617,3 15,3 M15,29 C7.28,29 1,22.72 1,15 C1,7.28 7.28,1 15,1 C22.72,1 29,7.28 29,15 C29,22.72 22.72,29 15,29" id="Fill-1" fill="#2B2B2B"></path><path d="M23.0356008,15 L14.0002,15 L14.0002,5.93887898 C14.0002,5.42061778 14.4323404,5 14.9647992,5 C15.497258,5 15.9293984,5.42061778 15.9293984,5.93887898 L15.9293984,13.122242 L23.0356008,13.122242 C23.5690242,13.122242 24.0002,13.5428598 24.0002,14.061121 C24.0002,14.5793822 23.5690242,15 23.0356008,15" id="Fill-3" fill="#2B2B2B"></path></g></svg>';
var trolly = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Trolley/Grey/30</title><defs><polygon id="path-1" points="16 3.0001 18 3.0001 18 14.0001 16 14.0001"></polygon></defs><g id="Trolley/Grey/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M21.5,23.8122508 C21.1212396,23.8122508 20.8122508,24.1212396 20.8122508,24.5 C20.8122508,24.8787604 21.1212396,25.1877492 21.5,25.1877492 C21.8787604,25.1877492 22.1877492,24.8787604 22.1877492,24.5 C22.1877492,24.1212396 21.8787604,23.8122508 21.5,23.8122508 M21.5,27 C20.1217833,27 19,25.8782167 19,24.5 C19,23.1208771 20.1217833,22 21.5,22 C22.8782167,22 24,23.1208771 24,24.5 C24,25.8782167 22.8782167,27 21.5,27" id="Fill-10" fill="#757576"></path><path d="M22.754,17.033 L9,17.033 C8.447,17.033 8,16.586 8,16.033 C8,15.481 8.447,15.033 9,15.033 L22.754,15.033 C22.829,15.033 22.895,14.985 22.917,14.913 L25.609,7.183 C25.614,7.166 25.606,7.115 25.571,7.07 C25.548,7.038 25.505,7 25.435,7 L22.853,7 C22.3,7 21.853,6.553 21.853,6 C21.853,5.448 22.3,5 22.853,5 L25.435,5 C26.129,5 26.765,5.321 27.179,5.879 C27.592,6.438 27.713,7.139 27.51,7.804 L24.817,15.535 C24.549,16.416 23.715,17.033 22.754,17.033" id="Fill-1" fill="#757576"></path><path d="M23.0250106,21.0003 L10.7586689,21.0003 C9.81780415,21.0003 9.00271301,20.3770882 8.73264095,19.4502861 L4.31788894,5.14046142 C4.29253921,5.05228998 4.2291649,5.00419647 4.15506571,5.00419647 L1.9749894,5.00419647 C1.43679525,5.00419647 1,4.55532366 1,4.00224823 C1,3.44817086 1.43679525,3.0003 1.9749894,3.0003 L4.15506571,3.0003 C5.09690547,3.0003 5.91102162,3.62250985 6.18206867,4.55031392 L10.5958457,18.8601386 C10.6211954,18.9473081 10.6855447,18.9964035 10.7586689,18.9964035 L23.0250106,18.9964035 C23.5641797,18.9964035 24,19.4442744 24,19.9983518 C24,20.5524291 23.5641797,21.0003 23.0250106,21.0003" id="Fill-4" fill="#757576"></path><path d="M10.5004531,23.8122508 C10.1216241,23.8122508 9.8125793,24.1212396 9.8125793,24.5 C9.8125793,24.8787604 10.1216241,25.1877492 10.5004531,25.1877492 C10.8792822,25.1877492 11.1874207,24.8787604 11.1874207,24.5 C11.1874207,24.1212396 10.8792822,23.8122508 10.5004531,23.8122508 M10.5004531,27 C9.12198659,27 8,25.8782167 8,24.5 C8,23.1208771 9.12198659,22 10.5004531,22 C11.8789197,22 13,23.1208771 13,24.5 C13,25.8782167 11.8789197,27 10.5004531,27" id="Fill-7" fill="#757576"></path><path d="M9.96229678,7 L6.03770322,7 C5.46489104,7 5,6.552 5,6 C5,5.448 5.46489104,5 6.03770322,5 L9.96229678,5 C10.535109,5 11,5.448 11,6 C11,6.552 10.535109,7 9.96229678,7" id="Fill-13" fill="#757576"></path><path d="M16.7986184,14 C16.5239306,14 16.2625176,13.8883213 16.0695212,13.6897813 L11.2915859,8.75833842 C10.8974241,8.35091789 10.9035509,7.69532242 11.3058819,7.29617439 C11.7082128,6.89599229 12.3545973,6.90219667 12.7497803,7.3096172 L16.7485824,11.4375937 L20.2041355,7.36028625 C20.5717476,6.92701416 21.2181321,6.87841324 21.6439494,7.24964159 C22.0718089,7.621904 22.1208239,8.27439728 21.754233,8.70766937 L17.5736672,13.6391123 C17.3867977,13.8593675 17.1182367,13.9896594 16.8323162,14 C16.8210836,14 16.809851,14 16.7986184,14" id="Fill-15" fill="#757576"></path><mask id="mask-2" fill="white"><use xlink:href="#path-1"></use></mask><g id="Clip-18"></g><path d="M17,13 C16.447,13 16,12.5982063 16,12.103139 L16,3.89686099 C16,3.40179372 16.447,3 17,3 C17.553,3 18,3.40179372 18,3.89686099 L18,12.103139 C18,12.5982063 17.553,13 17,13" id="Fill-17" fill="#757576"></path></g></svg>';
var truck = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Truck/Grey/30</title><g id="Truck/Grey/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M19.287,21.478 L10,21.478 C9.448,21.478 9,21.031 9,20.478 C9,19.925 9.448,19.478 10,19.478 L18.287,19.478 L18.287,6 L10.894,6 C10.342,6 9.894,5.552 9.894,5 C9.894,4.448 10.342,4 10.894,4 L19.287,4 C19.84,4 20.287,4.448 20.287,5 L20.287,20.478 C20.287,21.031 19.84,21.478 19.287,21.478" id="Fill-4" fill="#757575"></path><path d="M5.17012448,22 L2.82987552,22 C2.37095436,22 2,21.553 2,21 C2,20.447 2.37095436,20 2.82987552,20 L5.17012448,20 C5.62821577,20 6,20.447 6,21 C6,21.553 5.62821577,22 5.17012448,22" id="Fill-6" fill="#757575"></path><path d="M22.4994973,20.0170004 C21.6791613,20.0170004 21.0106276,20.6826106 21.0106276,21.5005043 C21.0106276,22.3173894 21.6791613,22.9829996 22.4994973,22.9829996 C23.3208387,22.9829996 23.9893724,22.3173894 23.9893724,21.5005043 C23.9893724,20.6826106 23.3208387,20.0170004 22.4994973,20.0170004 M22.4994973,25 C20.5692948,25 19,23.4307737 19,21.5005043 C19,19.5702348 20.5692948,18 22.4994973,18 C24.4296998,18 26,19.5702348 26,21.5005043 C26,23.4307737 24.4296998,25 22.4994973,25" id="Fill-8" fill="#757575"></path><path d="M7.5,20.0170004 C6.67877657,20.0170004 6.01033889,20.6826106 6.01033889,21.5005043 C6.01033889,22.3173894 6.67877657,22.9829996 7.5,22.9829996 C8.32122343,22.9829996 8.98966111,22.3173894 8.98966111,21.5005043 C8.98966111,20.6826106 8.32122343,20.0170004 7.5,20.0170004 M7.5,25 C5.57007467,25 4,23.4307737 4,21.5005043 C4,19.5702348 5.57007467,18 7.5,18 C9.42992533,18 11,19.5702348 11,21.5005043 C11,23.4307737 9.42992533,25 7.5,25" id="Fill-10" fill="#757575"></path><path d="M25.1611744,15 L19.8388256,15 C19.3757939,15 19,14.552 19,14 C19,13.448 19.3757939,13 19.8388256,13 L25.1611744,13 C25.6250449,13 26,13.448 26,14 C26,14.552 25.6250449,15 25.1611744,15" id="Fill-12" fill="#757575"></path><path d="M10.0377213,14 L1.96227868,14 C1.43110085,14 1,13.552 1,13 C1,12.448 1.43110085,12 1.96227868,12 L10.0377213,12 C10.5688992,12 11,12.448 11,13 C11,13.552 10.5688992,14 10.0377213,14" id="Fill-14" fill="#757575"></path><path d="M14.0168232,10 L6.98317675,10 C6.43948001,10 6,9.552 6,9 C6,8.448 6.43948001,8 6.98317675,8 L14.0168232,8 C14.5595368,8 15,8.448 15,9 C15,9.552 14.5595368,10 14.0168232,10" id="Fill-16" fill="#757575"></path><path d="M26.7100174,22 L25.443262,22 C24.8774174,22 24.4200348,21.5578971 24.4200348,21.0109556 C24.4200348,20.464014 24.8774174,20.0219111 25.443262,20.0219111 L26.7100174,20.0219111 C26.8450834,20.0219111 26.9535455,19.9170724 26.9535455,19.7865186 L26.9535455,15.6305539 C26.9535455,15.2646074 26.8348511,15.2646074 26.7100174,15.2646074 L26.0766397,15.2646074 C25.7052082,15.2646074 25.3624271,15.0697657 25.1823391,14.7562386 L23.025376,11.003804 C23.025376,11.0206178 22.9506804,10.9770998 22.8729152,10.9780889 L20.0232273,10.9780889 C19.4573826,10.9780889 19,10.534997 19,9.98904443 C19,9.44309191 19.4573826,9 20.0232273,9 L22.8729152,9 C23.6290801,9 24.3361302,9.36100122 24.7648624,9.96530736 L26.7100174,13.2865186 C28.0576077,13.2865186 29,14.2508369 29,15.6305539 L29,19.7865186 C29,21.0069994 27.9726798,22 26.7100174,22" id="Fill-1" fill="#757575"></path></g></svg>';
var underground = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Underground/Black/30</title><g id="Underground/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M24.7051,16.5213982 L22.0561,16.5213982 L19.9691,16.5213982 L10.0311,16.5213982 L7.9441,16.5213982 L5.2951,16.5213982 L3.2731,16.5213982 C3.2111,16.0224124 3.1681,15.5163272 3.1681,15.0001 C3.1681,14.4838728 3.2111,13.9777876 3.2731,13.4788018 L5.2951,13.4788018 L7.9441,13.4788018 L10.0311,13.4788018 L19.9691,13.4788018 L22.0561,13.4788018 L24.7051,13.4788018 L26.7261,13.4788018 C26.7891,13.9777876 26.8321,14.4838728 26.8321,15.0001 C26.8321,15.5163272 26.7891,16.0224124 26.7261,16.5213982 L24.7051,16.5213982 Z M11.1611,18.5497957 L18.8391,18.5497957 C17.8851,19.6106477 16.5231,20.2891467 15.0001,20.2891467 C13.4761,20.2891467 12.1151,19.6106477 11.1611,18.5497957 Z M15.0001,24.9717024 C10.8121,24.9717024 7.2371,22.2982744 5.8231,18.5497957 L8.6961,18.5497957 C9.9301,20.7942176 12.2911,22.3175442 15.0001,22.3175442 C17.7091,22.3175442 20.0701,20.7942176 21.3041,18.5497957 L24.1771,18.5497957 C22.7631,22.2982744 19.1871,24.9717024 15.0001,24.9717024 Z M18.8391,11.4504043 L11.1611,11.4504043 C12.1151,10.3895523 13.4761,9.71105335 15.0001,9.71105335 C16.5231,9.71105335 17.8851,10.3895523 18.8391,11.4504043 Z M15.0001,5.02849757 C19.1871,5.02849757 22.7621,7.70192556 24.1771,11.4504043 L21.3041,11.4504043 C20.0701,9.20598235 17.7091,7.68265578 15.0001,7.68265578 C12.2911,7.68265578 9.9301,9.20598235 8.6961,11.4504043 L5.8231,11.4504043 C7.2381,7.70192556 10.8121,5.02849757 15.0001,5.02849757 Z M28.0001,11.4504043 L26.3031,11.4504043 C24.8081,6.56095193 20.3071,3.0001 15.0001,3.0001 C9.6931,3.0001 5.1921,6.56095193 3.6971,11.4504043 L2.0001,11.4504043 C1.4471,11.4504043 1.0001,11.9047653 1.0001,12.464603 L1.0001,17.535597 C1.0001,18.0964489 1.4471,18.5497957 2.0001,18.5497957 L3.6971,18.5497957 C5.1921,23.4392481 9.6931,27.0001 15.0001,27.0001 C20.3071,27.0001 24.8081,23.4392481 26.3031,18.5497957 L28.0001,18.5497957 C28.5531,18.5497957 29.0001,18.0964489 29.0001,17.535597 L29.0001,12.464603 C29.0001,11.9047653 28.5531,11.4504043 28.0001,11.4504043 Z" id="Fill-1" fill="#2A2A2A"></path></g></svg>';
var usage = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Usage/Black/30</title><g id="Usage/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15,8 C11.14,8 8,11.14 8,15 C8,18.859 11.14,22 15,22 C18.859,22 22,18.859 22,15 C22,11.14 18.859,8 15,8 M15,24 C10.038,24 6,19.963 6,15 C6,10.038 10.038,6 15,6 C19.963,6 24,10.038 24,15 C24,19.963 19.963,24 15,24" id="Fill-1" fill="#2B2B2B"></path><path d="M15,29 C14.448,29 14,28.553 14,28 L14,23 L16,23 L16,26.959 C22.15,26.449 27,21.28 27,15 C27,8.383 21.617,3 15,3 C8.72,3 3.551,7.85 3.042,14 L7,14 L7,16 L2,16 C1.448,16 1,15.552 1,15 C1,7.28 7.28,1 15,1 C22.72,1 29,7.28 29,15 C29,22.72 22.72,29 15,29" id="Fill-3" fill="#2B2B2B"></path><polygon id="Fill-5" fill="#2B2B2B" points="22.5612536 25 19 21.4387464 20.4387464 20 24 23.5612536"></polygon></g></svg>';
var usagefilled = '<svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Usage/Black/15</title><g id="Usage/Black/15" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M7.96428571,11.6529544 L7.96428571,13.0523929 C9.15216391,12.9538859 10.2355817,12.481009 11.0958672,11.7523672 L10.106998,10.763498 C9.50575851,11.2447497 8.76915559,11.5636007 7.96428571,11.6529544 Z M7.03571429,11.6529452 C5.10197828,11.4381971 3.56181121,9.89833029 3.34705166,7.96428571 L1.46428571,7.96428571 C1.208,7.96428571 1,7.75628571 1,7.5 C1,3.91571429 3.91571429,1 7.5,1 C11.0842857,1 14,3.91571429 14,7.5 C14,11.0842857 11.0842857,14 7.5,14 C7.24371429,14 7.03571429,13.7924643 7.03571429,13.5357143 L7.03571429,11.6529452 Z M7.5,4.25 C5.70785714,4.25 4.25,5.70785714 4.25,7.5 C4.25,9.29167857 5.70785714,10.75 7.5,10.75 C9.29167857,10.75 10.75,9.29167857 10.75,7.5 C10.75,5.70785714 9.29167857,4.25 7.5,4.25 Z" id="Combined-Shape" fill="#2B2B2B"></path></g></svg>';
var weights = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"><title>Weight/Black/30</title><g id="Weight/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M15.5,2.9799802 C14.1102068,2.9799802 12.9797624,4.11054889 12.9797624,5.499505 C12.9797624,6.88945111 14.1102068,8.0200198 15.5,8.0200198 C16.8897932,8.0200198 18.0202376,6.88945111 18.0202376,5.499505 C18.0202376,4.11054889 16.8897932,2.9799802 15.5,2.9799802 M15.5,10 C13.0183678,10 11,7.98141019 11,5.499505 C11,3.01858981 13.0183678,1 15.5,1 C17.9816322,1 20,3.01858981 20,5.499505 C20,7.98141019 17.9816322,10 15.5,10" id="Fill-1" fill="#2A2A2A"></path><path d="M3.3015,26.0737061 L26.6975,26.0737061 L22.5035,10.9262939 L7.4955,10.9262939 L3.3015,26.0737061 Z M27.9995,28 L1.9995,28 C1.6895,28 1.3965,27.8603437 1.2065,27.6234095 C1.0175,27.3864754 0.9535,27.0782684 1.0335,26.7883611 L5.7615,9.71465504 C5.8775,9.29375982 6.2745,9 6.7275,9 L23.2725,9 C23.7255,9 24.1215,9.29375982 24.2385,9.71465504 L28.9655,26.7883611 C29.0455,27.0782684 28.9825,27.3864754 28.7925,27.6234095 C28.6035,27.8603437 28.3105,28 27.9995,28 Z" id="Fill-3" fill="#2A2A2A"></path></g></svg>';
var useraccount = '<svg xmlns="http:\/\/www.w3.org\/2000\/svg" width="30" height="30" viewBox="0 0 30 30"><g fill="#2B2B2B" fill-rule="evenodd" transform="translate(4 1)"><title>User Account/30</title><path d="M11.2082 2C7.9372 2 5.2752 4.662 5.2752 7.933 5.2752 11.205 7.9372 13.867 11.2082 13.867 14.4792 13.867 17.1412 11.205 17.1412 7.933 17.1412 4.662 14.4792 2 11.2082 2M11.2082 15.867C6.8342 15.867 3.2752 12.308 3.2752 7.933 3.2752 3.559 6.8342 0 11.2082 0 15.5822 0 19.1412 3.559 19.1412 7.933 19.1412 12.308 15.5822 15.867 11.2082 15.867M21.801 28L1 28C.716 28 .445 27.879.255 27.667.066 27.455-.025 27.172.006 26.89L.873 19.09C.914 18.723 1.154 18.409 1.496 18.271L5.829 16.538C6.338 16.334 6.924 16.581 7.129 17.096 7.334 17.608 7.084 18.19 6.572 18.396L2.795 19.906 2.117 26 20.684 26 20.006 19.906 16.23 18.396C15.717 18.19 15.467 17.608 15.672 17.096 15.877 16.581 16.463 16.334 16.972 16.538L21.305 18.271C21.648 18.409 21.887 18.723 21.928 19.09L22.795 26.89C22.826 27.172 22.736 27.455 22.546 27.667 22.357 27.879 22.085 28 21.801 28"/></g></svg>';
var successicon = '<svg width="145px" height="145px" viewBox="0 0 145 145" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Success</title> <g id="Success" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Page-2" fill="#0DB65C"> <g id="Page-1"> <path d="M72.5,0 C32.4584043,0 0,32.4584043 0,72.5 C0,112.540053 32.4584043,145 72.5,145 C112.540053,145 145,112.540053 145,72.5 C145,32.4584043 112.540053,0 72.5,0 M72.5,7.71276596 C108.223989,7.71276596 137.287234,36.7760106 137.287234,72.5 C137.287234,108.223989 108.223989,137.287234 72.5,137.287234 C36.7760106,137.287234 7.71276596,108.223989 7.71276596,72.5 C7.71276596,36.7760106 36.7760106,7.71276596 72.5,7.71276596" id="Fill-1"></path> <path d="M60.6920638,97.7185851 C59.7526489,97.7185851 58.8116915,97.3761383 58.0697234,96.6897021 L38.8063191,78.8223085 C37.2437128,77.3753936 37.1527021,74.9335319 38.6011596,73.3724681 C40.0480745,71.8114043 42.4883936,71.7203936 44.051,73.1673085 L60.5964255,88.5126277 L100.849351,48.4062447 C102.357968,46.9053404 104.798287,46.9084255 106.302277,48.4170426 C107.804723,49.9256596 107.801638,52.3675213 106.293021,53.8699681 L63.4146702,96.5940638 C62.6634468,97.3422021 61.6792979,97.7185851 60.6920638,97.7185851" id="Fill-3"></path> </g> </g> </g></svg>';
var infoicon = '<svg width="145px" height="145px" viewBox="0 0 145 145" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Info</title> <g id="Info" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M72.2212086,8.3264035 C36.6705682,8.3264035 7.74885776,37.248114 7.74885776,72.7987543 C7.74885776,108.349395 36.6705682,137.271105 72.2212086,137.271105 C107.771849,137.271105 136.693559,108.349395 136.693559,72.7987543 C136.693559,37.248114 107.771849,8.3264035 72.2212086,8.3264035 M72.2212086,144.597509 C32.6307893,144.597509 0.422454251,112.389174 0.422454251,72.7987543 C0.422454251,33.2083351 32.6307893,1 72.2212086,1 C111.811628,1 144.019963,33.2083351 144.019963,72.7987543 C144.019963,112.389174 111.811628,144.597509 72.2212086,144.597509" id="Fill-1" fill="#0074B8"></path> <path d="M70.9920614,110.015017 C69.0773619,110.015017 67.5259146,108.380456 67.5259146,106.363183 L67.5259146,55.2375187 C67.5259146,53.2202461 69.0773619,51.5856855 70.9920614,51.5856855 C72.9067609,51.5856855 74.4582081,53.2202461 74.4582081,55.2375187 L74.4582081,106.363183 C74.4582081,108.380456 72.9067609,110.015017 70.9920614,110.015017" id="Fill-3" fill="#0074B8"></path> <path d="M71.4451919,44.9711871 C70.1379594,44.9711871 68.87034,44.4364028 67.9394321,43.5252887 C67.72156,43.286192 67.5036879,43.0287032 67.3254289,42.7712145 C67.1457552,42.4939189 66.9887175,42.2166233 66.8698782,41.9195209 C66.7510389,41.6011968 66.6505914,41.3040944 66.5925865,40.9871852 C66.5331668,40.6688612 66.4935537,40.3335599 66.4935537,40.0166506 C66.4935537,39.6983266 66.5331668,39.3630253 66.5925865,39.0447013 C66.6505914,38.727792 66.7510389,38.4108828 66.8698782,38.1137804 C66.9887175,37.8152632 67.1457552,37.5393824 67.3254289,37.260672 C67.5036879,37.004598 67.72156,36.7456945 67.9394321,36.5080126 C68.1756959,36.2901375 68.4345959,36.0708476 68.6920811,35.8940009 C68.9693728,35.7143247 69.2452498,35.5572848 69.5437628,35.4384439 C69.8408611,35.3196029 70.1563512,35.219154 70.4732561,35.1597335 C72.0790016,34.8428243 73.800757,35.3592166 74.9509518,36.5080126 C75.1688239,36.7456945 75.386696,37.004598 75.5649549,37.260672 C75.7432139,37.5393824 75.8832745,37.8152632 76.0190909,38.1137804 C76.139345,38.4108828 76.2383777,38.727792 76.2992121,39.0447013 C76.3572171,39.3630253 76.3968302,39.6983266 76.3968302,40.0166506 C76.3968302,40.3335599 76.3572171,40.6688612 76.2992121,40.9871852 C76.2383777,41.3040944 76.139345,41.6224184 76.0190909,41.9195209 C75.8832745,42.2166233 75.7432139,42.4939189 75.5649549,42.7712145 C75.386696,43.0287032 75.1688239,43.286192 74.9509518,43.5252887 C74.0186291,44.4364028 72.7510097,44.9711871 71.4451919,44.9711871" id="Fill-5" fill="#0074B8"></path> </g></svg>';
var iconalerterror = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve" height="145px" width="145px"><title>Error</title> <style type="text/css">.aest0{fill:#FFFFFF;}.aest1{fill:#EC0026;}.aest12{display:none;}</style><g id="Guides"></g><g id="THE_ICONS" class="aest0"><rect x="0" y="0" class="aest0" width="22" height="22"/><polygon points="11,3 2,18 20,18 "/><path d="M11,4.07l8.15,13.33H2.85L11,4.07 M11,1L0,19h22L11,1L11,1z" class="aest1"/><g><rect x="10" y="8" class="aest1" width="2" height="5"/><rect x="10" y="14" class="aest1" width="2" height="2"/></g></g><g id="Layer_3" class="aest12"></g><g id="Layer_4" class="aest12"></g><g id="Layer_5" class="aest12"></g></svg>';
var icondone = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve" height="145px" width="145px"><title>Done</title> <style type="text/css">.idst0{fill:#FFFFFF;}.idst1{fill:#00864E;}.idst12{display:none;}</style><g id="Guides"></g><g id="THE_ICONS" class="idst0"><rect width="22" height="22"/><circle cx="11" cy="11" r="9"/><polygon class="idst1" points="10,12.17 7.71,9.88 6.29,11.29 10,15 16.71,8.29 15.29,6.88"/><path d="M11,2.6c4.63,0,8.4,3.77,8.4,8.4s-3.77,8.4-8.4,8.4S2.6,15.63,2.6,11S6.37,2.6,11,2.6 M11,1C5.48,1,1,5.48,1,11s4.48,10,10,10s10-4.48,10-10S16.52,1,11,1L11,1z" class="idst1"/></g><g id="Layer_3" class="idst12"></g><g id="Layer_4" class="idst12"></g><g id="Layer_5" class="idst12"></g></svg>';
var iconinformation = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve" height="145px" width="145px"><title>Info</title> <style type="text/css">.ist0{fill:#0074B8;}.ist1{fill:#fff;}.st12{display:none;}</style><g id="Guides"></g><g id="THE_ICONS" class="ist1"><circle cx="11" cy="11" r="9"/><g><circle class="ist0" cx="10.5" cy="5.5" r="1.5"/><polygon class="ist0" points="12,15 12,11 12,9 10,9 8,9 8,11 10,11 10,15 8,15 8,17 10,17 12,17 14,17 14,15"/></g><path d="M11,2.6c4.63,0,8.4,3.77,8.4,8.4s-3.77,8.4-8.4,8.4S2.6,15.63,2.6,11S6.37,2.6,11,2.6 M11,1C5.48,1,1,5.48,1,11s4.48,10,10,10s10-4.48,10-10S16.52,1,11,1L11,1z" class="ist0"/></g><g id="Layer_3" class="st12"></g><g id="Layer_4" class="st12"></g><g id="Layer_5" class="st12"></g></svg>';
var erroricon = '<svg width="145px" height="145px" viewBox="0 0 145 145" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Error</title> <g id="Error" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M11.1388722,124.191828 L133.782935,124.191828 L72.4616714,25.1327489 L11.1388722,124.191828 Z M140.676605,131.870232 L4.24673752,131.870232 C2.85387518,131.870232 1.57158185,131.116212 0.892811004,129.899953 C0.215575844,128.683694 0.249360818,127.194084 0.983416162,126.01161 L69.1968144,15.8188459 C69.8970847,14.6870492 71.131772,14.0006 72.4616714,14.0006 C73.7900351,14.0006 75.0262581,14.6870492 75.7265284,15.8188459 L143.941462,126.01161 C144.672446,127.194084 144.707767,128.683694 144.028996,129.899953 C143.353297,131.116212 142.069468,131.870232 140.676605,131.870232 Z" id="Fill-1" fill="#EC0026"></path> <path d="M72.4610571,97.506306 C70.3402822,97.506306 68.6218555,95.7878794 68.6218555,93.6671044 L68.6218555,50.7310095 C68.6218555,48.6102345 70.3402822,46.8918079 72.4610571,46.8918079 C74.5818321,46.8918079 76.3002587,48.6102345 76.3002587,50.7310095 L76.3002587,93.6671044 C76.3002587,95.7878794 74.5818321,97.506306 72.4610571,97.506306" id="Fill-4" fill="#EC0026"></path> <path d="M77.7084779,109.85625 C77.7084779,106.95842 75.3588865,104.608829 72.4610571,104.608829 C69.5632278,104.608829 67.2136364,106.95842 67.2136364,109.85625 C67.2136364,112.755615 69.5632278,115.10367 72.4610571,115.10367 C75.3588865,115.10367 77.7084779,112.755615 77.7084779,109.85625" id="Fill-6" fill="#EC0026"></path> </g></svg>';
var account = '<svg xmlns="http:\/\/www.w3.org\/2000\/svg" viewBox="0 0 24 24"><title>Three_Small_Iconography_24x24px</title><g id="Layer_1" data-name="Layer 1"><path d="M12,6A3,3,0,1,1,9,9a3,3,0,0,1,3-3m0-1a4,4,0,1,0,4,4,4,4,0,0,0-4-4Z"/><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,1.6A8.38,8.38,0,0,1,18.75,17,9.17,9.17,0,0,0,5.24,17,8.39,8.39,0,0,1,12,3.6Zm0,16.8a8.37,8.37,0,0,1-6.11-2.65,8.15,8.15,0,0,1,12.21,0A8.33,8.33,0,0,1,12,20.4Z"/></g></svg>';
var arrow_down = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>ArrowDown/Line/Black/30</title> <g id="ArrowDown/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M26.4999974,23 C26.1169975,23 25.7339976,22.854 25.4419977,22.563 L14.441,11.621 L3.56300233,22.558 C2.97900246,23.146 2.03000266,23.146 1.44200279,22.563 C0.854002911,21.979 0.853002911,21.029 1.43700279,20.442 L13.3720002,8.442 C13.6520002,8.16 14.0330001,8.001 14.432,8 C14.8559999,8.022 15.2109998,8.156 15.4929998,8.437 L27.5579972,20.437 C28.1459971,21.021 28.1469971,21.971 27.5629972,22.558 C27.2709973,22.853 26.8849974,23 26.4999974,23" id="Fill-1" fill="#2B2B2B" transform="translate(14.500003, 15.500000) scale(1, -1) translate(-14.500003, -15.500000) "></path> </g> </svg>';
var arrow_left = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>ArrowLeft/Line/Black/30</title> <g id="ArrowLeft/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M27.4999946,22.0000029 C27.1169946,22.0000029 26.7339947,21.8540029 26.4419948,21.5630029 L15.4409971,10.6210029 L4.56299945,21.5580029 C3.97899958,22.1460029 3.02999978,22.1460029 2.44199991,21.5630029 C1.85400003,20.9790029 1.85300003,20.0290029 2.43699991,19.4420029 L14.3719974,7.44200288 C14.6519973,7.16000288 15.0329972,7.00100288 15.4319971,7.00000288 C15.855997,7.02200288 16.210997,7.15600288 16.4929969,7.43700288 L28.5579943,19.4370029 C29.1459942,20.0210029 29.1469942,20.9710029 28.5629943,21.5580029 C28.2709944,21.8530029 27.8849945,22.0000029 27.4999946,22.0000029" id="Fill-1" fill="#2B2B2B" transform="translate(15.500000, 14.500003) scale(-1, -1) rotate(90.000000) translate(-15.500000, -14.500003) "></path> </g> </svg>';
var arrow_right = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve" width="20px" height="20px"><style type="text/css"> .st0{fill:#FFFFFF;}.st1{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st2{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st3{stroke:#FFFFFF;stroke-miterlimit:10;}.st4{fill:none;}.st5{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st6{fill-rule:evenodd;clip-rule:evenodd;}.st7{fill:#1D1D1B;}.st8{fill-rule:evenodd;clip-rule:evenodd;fill:#2A2A2A;}.st9{fill-rule:evenodd;clip-rule:evenodd;fill:#1D1D1B;}.st10{fill:none;stroke:#FF0000;stroke-miterlimit:10;}.st11{fill:#ED1C24;}.st12{display:none;}</style><g id="Guides"></g><g id="THE_ICONS"> <path d="M11,1C5.48,1,1,5.48,1,11c0,5.52,4.48,10,10,10s10-4.48,10-10C21,5.48,16.52,1,11,1z M9.08,17.66l-1.5-1.33L12.33,11 L7.59,5.66l1.5-1.33L15,11L9.08,17.66z"></path></g><g id="Layer_3" class="st12"></g><g id="Layer_4" class="st12"></g><g id="Layer_5" class="st12"></g></svg>';
var arrow_up = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>ArrowUp/Line/Black/30</title> <g id="ArrowUp/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M26.4999974,23 C26.1169975,23 25.7339976,22.854 25.4419977,22.563 L14.441,11.621 L3.56300233,22.558 C2.97900246,23.146 2.03000266,23.146 1.44200279,22.563 C0.854002911,21.979 0.853002911,21.029 1.43700279,20.442 L13.3720002,8.442 C13.6520002,8.16 14.0330001,8.001 14.432,8 C14.8559999,8.022 15.2109998,8.156 15.4929998,8.437 L27.5579972,20.437 C28.1459971,21.021 28.1469971,21.971 27.5629972,22.558 C27.2709973,22.853 26.8849974,23 26.4999974,23" id="Fill-1" fill="#2B2B2B"></path> </g> </svg>';
var attach = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Attach/Line/Black/30</title> <g id="Attach/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M21.8515503,28 C20.0197816,28 18.1880129,27.2973927 16.7934277,25.892178 L2.46641545,11.4549578 C1.52101873,10.5023553 0.9998,9.24229912 0.9998,7.90663953 C0.9998,6.56997189 1.52101873,5.30991567 2.46641545,4.35731317 C4.4072299,2.39968983 7.56655569,2.40069788 9.50937098,4.35731317 L23.8373836,18.7955413 C24.3726082,19.3328293 24.6657312,20.0445091 24.6657312,20.7975187 C24.6657312,21.5505283 24.3726082,22.262208 23.8373836,22.799496 C22.7439248,23.9022972 20.9601762,23.9033052 19.8647165,22.800504 L6.55913293,9.39249782 C6.18097424,9.01145682 6.16296669,8.39352525 6.52411824,7.99635553 C6.8852698,7.59817776 7.48852295,7.55281574 7.89969549,7.89756712 C7.93070851,7.92377629 7.9657232,7.95704178 7.99373495,7.98728312 L21.2793102,21.3741204 C21.5994445,21.6966948 22.1016552,21.6987109 22.42279,21.3741204 C22.5798559,21.2168654 22.6648916,21.0112242 22.6648916,20.7975187 C22.6648916,20.5838131 22.5798559,20.3781719 22.42279,20.2209169 L8.09477736,5.78268877 C6.91228113,4.59218765 5.06150447,4.59420374 3.88100908,5.78268877 C2.69851285,6.97419793 2.69851285,8.83908113 3.88100908,10.0295822 L18.2080213,24.4668024 C20.2178647,26.4919647 23.4862363,26.4899486 25.4940788,24.4668024 C27.5019214,22.4426481 27.5019214,19.1513812 25.4940788,17.1272269 L12.1884953,3.72123679 C11.7983315,3.32709121 11.7983315,2.68899874 12.1884953,2.29485315 C12.5796594,1.90171562 13.2129252,1.90171562 13.6030889,2.29485315 L26.9086725,15.7018513 C29.6968425,18.5112727 29.6968425,23.0827566 26.9086725,25.892178 C25.5140872,27.2973927 23.6823186,28 21.8515503,28" id="Fill-1" fill="#2B2B2B"></path> </g> </svg>';
var billscharges = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"> <title>Bills Charges</title> <style type="text/css"> .st0{fill:none;stroke:#FF00FF;stroke-width:2;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:#FF00FF;}.st2{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st3{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st4{fill:#FFFFFF;}.st5{stroke:#FFFFFF;stroke-miterlimit:10;}.st6{fill:none;}.st7{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}</style> <g id="Guides"> </g> <g id="Layer_3"> </g> <g id="Layer_1"> <path d="M14,2H6C4.9,2,4,2.9,4,4l0,16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M9,8H6V7h3V8z M11,6H6V5h5V6z M16,16v1h-2v1h3v1 h-4l0-2h-1v-1h1l0-1.7c0.4-1,1.9-1.3,2.2-1.3c0,0,0,0,0,0c0.9,0,1.5,0.6,1.7,0.9L17,14l0,1l-1,0l0-0.6c-0.2-0.2-0.4-0.4-0.8-0.4 c-0.2,0-1,0.3-1.2,0.6V16H16z M13,9V3.5L18.5,9H13z"/> </g> </svg> ';
var calendar = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Calendar/Black/30</title> <g id="Calendar/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M4.71428571,12.6842105 L4.71428571,25.3157895 L25.2857143,25.3157895 L25.2857143,12.6842105 L4.71428571,12.6842105 Z M3,11 L27,11 L27,26.1578947 C27,26.6229766 26.6162441,27 26.1428571,27 L3.85714286,27 C3.38375593,27 3,26.6229766 3,26.1578947 L3,11 Z" id="Rectangle-2" fill="#2B2B2B" fill-rule="nonzero"></path> <path d="M4.71428571,11 L25.2857143,11 L25.2857143,7 L4.71428571,7 L4.71428571,11 Z M3.85714286,5 L26.1428571,5 C26.6162441,5 27,5.44771525 27,6 L27,13 L3,13 L3,6 C3,5.44771525 3.38375593,5 3.85714286,5 Z" id="Rectangle-6" fill="#2B2B2B" fill-rule="nonzero"></path> <path d="M7,9 L7,4 L7,9 Z M7,3 C7.55228475,3 8,3.44771525 8,4 L8,9 C8,9.55228475 7.55228475,10 7,10 C6.44771525,10 6,9.55228475 6,9 L6,4 C6,3.44771525 6.44771525,3 7,3 Z" id="Rectangle-5" fill="#2B2B2B" fill-rule="nonzero"></path> <path d="M23,4 L23,9 L23,4 Z M23,3 C23.5522847,3 24,3.44771525 24,4 L24,9 C24,9.55228475 23.5522847,10 23,10 C22.4477153,10 22,9.55228475 22,9 L22,4 C22,3.44771525 22.4477153,3 23,3 Z" id="Rectangle-5" fill="#2B2B2B" fill-rule="nonzero"></path> </g> </svg>';
var closeremove = '<svg id="Layer_1" data-name="Layer 1" xmlns="http:\/\/www.w3.org\/2000\/svg" viewBox="0 0 30 30"> <title>cross</title> <path d="M17.09,15l6-6A1.5,1.5,0,0,0,21,6.85l-6,6-6-6A1.5,1.5,0,1,0,6.82,9l6,6-6,6a1.5,1.5,0,0,0,1.06,2.56,1.49,1.49,0,0,0,1.06-.44l6-6,6,6a1.51,1.51,0,0,0,2.13,0,1.51,1.51,0,0,0,0-2.12Z"/> </svg> ';
var coverage = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Coverage/Black/30</title> <g id="Coverage/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M15,22 C13.897,22 13,22.897 13,24 C13,25.103 13.897,26 15,26 C16.103,26 17,25.103 17,24 C17,22.897 16.103,22 15,22 M15,28 C12.794,28 11,26.206 11,24 C11,21.794 12.794,20 15,20 C17.206,20 19,21.794 19,24 C19,26.206 17.206,28 15,28" id="Fill-1" fill="#2B2B2B"></path> <path d="M8.99085458,17.9997782 C8.7372592,17.9997782 8.48366383,17.9128241 8.29049548,17.7398031 C7.90316817,17.392874 7.90316817,16.8321087 8.29049548,16.4851795 C11.9914029,13.1720505 18.0103306,13.1711632 21.7102475,16.4851795 C22.0965842,16.8321087 22.0965842,17.392874 21.7102475,17.7398031 C21.3229202,18.0867323 20.695866,18.0867323 20.3095293,17.7398031 C17.3822858,15.1178705 12.6204383,15.1187578 9.69121367,17.7398031 C9.49804532,17.9128241 9.24444995,17.9997782 8.99085458,17.9997782" id="Fill-3" fill="#2B2B2B"></path> <path d="M24.9554269,13.9997475 C24.688083,13.9997475 24.4207391,13.9007638 24.2170982,13.7048166 C19.1344314,8.78997539 10.8634799,8.79098542 5.78290176,13.7038066 C5.37457575,14.0987311 4.71352621,14.0987311 4.30624451,13.7038066 C3.8979185,13.308882 3.8979185,12.6695284 4.30624451,12.2756139 C10.2013861,6.57395367 19.7965253,6.57597375 25.6937555,12.2746039 C26.1020815,12.6695284 26.1020815,13.308882 25.6937555,13.7038066 C25.4901146,13.9007638 25.2227707,13.9997475 24.9554269,13.9997475" id="Fill-5" fill="#2B2B2B"></path> <path d="M28.00025,8.99976264 C27.74425,8.99976264 27.48825,8.90671889 27.29325,8.72253022 C20.51325,2.28921893 9.48325,2.29016836 2.70725,8.72158079 C2.31625,9.0928064 1.68425,9.0928064 1.29325,8.72158079 C0.90225,8.35035519 0.90225,7.74936846 1.29325,7.37909228 C8.85125,0.206178059 21.14725,0.208076911 28.70725,7.37814286 C29.09825,7.74936846 29.09825,8.35035519 28.70725,8.72158079 C28.51225,8.90671889 28.25625,8.99976264 28.00025,8.99976264" id="Fill-7" fill="#2B2B2B"></path> </g> </svg>';
var delivery = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Delivery/Black/30</title> <g id="Delivery/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M27,19.827957 L20,19.827957 L20,9.93548387 L25.323,9.93548387 L27,14.0824086 L27,19.827957 Z M24,23.4139785 C24,24.3003441 23.271,25.0215054 22.375,25.0215054 C21.479,25.0215054 20.75,24.3003441 20.75,23.4139785 C20.75,22.5276129 21.479,21.8064516 22.375,21.8064516 C23.271,21.8064516 24,22.5276129 24,23.4139785 Z M11.25,23.4139785 C11.25,24.3003441 10.521,25.0215054 9.625,25.0215054 C8.729,25.0215054 8,24.3003441 8,23.4139785 C8,22.5276129 8.729,21.8064516 9.625,21.8064516 C10.521,21.8064516 11.25,22.5276129 11.25,23.4139785 Z M28.929,13.5244731 L26.929,8.57823656 C26.776,8.20331183 26.409,7.95698925 26,7.95698925 L20,7.95698925 L20,4.98924731 C20,4.4431828 19.553,4 19,4 L5,4 C4.447,4 4,4.4431828 4,4.98924731 L4,7.09931183 C4,7.64636559 4.447,8.08855914 5,8.08855914 C5.553,8.08855914 6,7.64636559 6,7.09931183 L6,5.97849462 L18,5.97849462 L18,19.827957 L6,19.827957 L6,18.8387097 C6,18.2916559 5.553,17.8494624 5,17.8494624 C4.447,17.8494624 4,18.2916559 4,18.8387097 L4,20.8172043 C4,21.3642581 4.447,21.8064516 5,21.8064516 L6.402,21.8064516 C6.153,22.292172 6,22.8332903 6,23.4139785 C6,25.3914839 7.626,27 9.625,27 C11.624,27 13.25,25.3914839 13.25,23.4139785 C13.25,22.8332903 13.097,22.292172 12.848,21.8064516 L19,21.8064516 C19.061,21.8064516 19.113,21.7827097 19.171,21.7728172 C18.911,22.2664516 18.75,22.8184516 18.75,23.4139785 C18.75,25.3914839 20.376,27 22.375,27 C24.374,27 26,25.3914839 26,23.4139785 C26,22.8332903 25.847,22.292172 25.598,21.8064516 L28,21.8064516 C28.553,21.8064516 29,21.3642581 29,20.8172043 L29,13.8924731 C29,13.7668387 28.976,13.6421935 28.929,13.5244731 Z" id="Fill-1" fill="#2B2B2B"></path> <path d="M8,12 C8.553,12 9,11.552 9,11 C9,10.448 8.553,10 8,10 L2,10 C1.447,10 1,10.448 1,11 C1,11.552 1.447,12 2,12 L8,12 Z" id="Fill-3" fill="#2B2B2B"></path> <path d="M9,15 C9,14.448 8.553,14 8,14 L3,14 C2.447,14 2,14.448 2,15 C2,15.552 2.447,16 3,16 L8,16 C8.553,16 9,15.552 9,15" id="Fill-5" fill="#2B2B2B"></path> <path d="M23,11 L22,11 C21.447,11 21,11.448 21,12 L21,14 C21,14.552 21.447,15 22,15 L24,15 C24.347,15 24.668,14.82 24.851,14.526 C25.033,14.231 25.05,13.863 24.895,13.553 L23.895,11.553 C23.725,11.214 23.379,11 23,11" id="Fill-7" fill="#2B2B2B"></path> </g> </svg>';
var icondocuments = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Documents/Black/30</title> <g id="Documents/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M12,22 L24,22 L24,9.414 L18.586,4 L12,4 L12,22 Z M25,24 L11,24 C10.448,24 10,23.553 10,23 L10,3 C10,2.448 10.448,2 11,2 L19,2 C19.266,2 19.52,2.105 19.707,2.293 L25.707,8.293 C25.895,8.48 26,8.735 26,9 L26,23 C26,23.553 25.553,24 25,24 Z" id="Fill-1" fill="#2B2B2B"></path> <path d="M25,10 L19,10 C18.447,10 18,9.552 18,9 L18,3 C18,2.448 18.447,2 19,2 C19.553,2 20,2.448 20,3 L20,8 L25,8 C25.553,8 26,8.448 26,9 C26,9.552 25.553,10 25,10" id="Fill-3" fill="#2B2B2B"></path> <path d="M17,28 L5,28 C4.448,28 4,27.553 4,27 L4,6 C4,5.448 4.448,5 5,5 L8,5 C8.552,5 9,5.448 9,6 C9,6.552 8.552,7 8,7 L6,7 L6,26 L17,26 C17.553,26 18,26.447 18,27 C18,27.553 17.553,28 17,28" id="Fill-5" fill="#2B2B2B"></path> </g></svg>';
var download = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Download/Line/Black/30</title> <g id="Download/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M26,25.0004 L4,25.0004 C3.448,25.0004 3,24.5789007 3,24.0574486 L3,17.9433514 C3,17.4218993 3.448,17.0004 4,17.0004 C4.552,17.0004 5,17.4218993 5,17.9433514 L5,23.1144971 L25,23.1144971 L25,17.9433514 C25,17.4218993 25.447,17.0004 26,17.0004 C26.553,17.0004 27,17.4218993 27,17.9433514 L27,24.0574486 C27,24.5789007 26.553,25.0004 26,25.0004" id="Fill-1" fill="#2B2B2B"></path> <path d="M22,22 C21.744,22 21.488,21.902 21.293,21.707 L15,15.414 L8.707,21.707 C8.316,22.098 7.684,22.098 7.293,21.707 C6.902,21.316 6.902,20.684 7.293,20.293 L14.293,13.293 C14.684,12.902 15.316,12.902 15.707,13.293 L22.707,20.293 C23.098,20.684 23.098,21.316 22.707,21.707 C22.512,21.902 22.256,22 22,22" id="Fill-3" fill="#2B2B2B" transform="translate(15.000000, 17.500000) rotate(180.000000) translate(-15.000000, -17.500000) "></path> <path d="M15,22 C14.448,22 14,21.553 14,21 L14,5 C14,4.448 14.448,4 15,4 C15.552,4 16,4.448 16,5 L16,21 C16,21.553 15.552,22 15,22" id="Fill-6" fill="#2B2B2B" transform="translate(15.000000, 13.000000) rotate(180.000000) translate(-15.000000, -13.000000) "></path> </g> </svg>';
var externallink = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>External/link</title> <style type="text/css"> .st0{fill:none;stroke:#FF00FF;stroke-width:2;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:#FF00FF;}.st2{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st3{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st4{fill:#FFFFFF;}.st5{stroke:#FFFFFF;stroke-miterlimit:10;}.st6{fill:none;}.st7{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}</style> <g id="Guides"> </g> <g id="Layer_3"> </g> <g id="Layer_1"> <path d="M22,2v6h-2V5.4l-9.3,9.3l-1.4-1.4L18.6,4H16V2H22z M17,20H4V7h9V5H2v17h17V11h-2V20z"/> </g> </svg> ';
var filter = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Filter/Black/30</title> <g id="Filter/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M9.33348835,2.95339752 C8.48083033,2.95339752 7.78639752,3.64685363 7.78639752,4.49951165 C7.78639752,5.35314637 8.48083033,6.04660248 9.33348835,6.04660248 C10.1861464,6.04660248 10.8796025,5.35314637 10.8796025,4.49951165 C10.8796025,3.64685363 10.1861464,2.95339752 9.33348835,2.95339752 M9.33348835,8 C7.4025549,8 5.833,6.4304451 5.833,4.49951165 C5.833,2.5695549 7.4025549,1 9.33348835,1 C11.2634451,1 12.833,2.5695549 12.833,4.49951165 C12.833,6.4304451 11.2634451,8 9.33348835,8" id="Fill-1" fill="#2B2B2B"></path> <path d="M28,6 L13,6 C12.447,6 12,5.552 12,5 C12,4.448 12.447,4 13,4 L28,4 C28.553,4 29,4.448 29,5 C29,5.552 28.553,6 28,6" id="Fill-3" fill="#2B2B2B"></path> <path d="M6,6 L2,6 C1.447,6 1,5.552 1,5 C1,4.448 1.447,4 2,4 L6,4 C6.553,4 7,4.448 7,5 C7,5.552 6.553,6 6,6" id="Fill-5" fill="#2B2B2B"></path> <path d="M9.50048835,22.9541701 C8.64783033,22.9541701 7.95339752,23.647723 7.95339752,24.5005 C7.95339752,25.353277 8.64783033,26.0468299 9.50048835,26.0468299 C10.3531464,26.0468299 11.0466025,25.353277 11.0466025,24.5005 C11.0466025,23.647723 10.3531464,22.9541701 9.50048835,22.9541701 M9.50048835,28.0005 C7.5695549,28.0005 6,26.4307261 6,24.5005 C6,22.5702739 7.5695549,21.0005 9.50048835,21.0005 C11.4304451,21.0005 13,22.5702739 13,24.5005 C13,26.4307261 11.4304451,28.0005 9.50048835,28.0005" id="Fill-7" fill="#2B2B2B"></path> <path d="M28,25 L13,25 C12.447,25 12,24.553 12,24 C12,23.447 12.447,23 13,23 L28,23 C28.553,23 29,23.447 29,24 C29,24.553 28.553,25 28,25" id="Fill-9" fill="#2B2B2B"></path> <path d="M6,25 L2,25 C1.447,25 1,24.553 1,24 C1,23.447 1.447,23 2,23 L6,23 C6.553,23 7,23.447 7,24 C7,24.553 6.553,25 6,25" id="Fill-11" fill="#2B2B2B"></path> <path d="M20.4995117,12.9533975 C19.6468536,12.9533975 18.9533975,13.6468536 18.9533975,14.4995117 C18.9533975,15.3521697 19.6468536,16.0466025 20.4995117,16.0466025 C21.3521697,16.0466025 22.0466025,15.3521697 22.0466025,14.4995117 C22.0466025,13.6468536 21.3521697,12.9533975 20.4995117,12.9533975 M20.4995117,18 C18.5695549,18 17,16.4304451 17,14.4995117 C17,12.5695549 18.5695549,11 20.4995117,11 C22.4304451,11 24,12.5695549 24,14.4995117 C24,16.4304451 22.4304451,18 20.4995117,18" id="Fill-13" fill="#2B2B2B"></path> <path d="M17,16 L2,16 C1.447,16 1,15.552 1,15 C1,14.448 1.447,14 2,14 L17,14 C17.553,14 18,14.448 18,15 C18,15.552 17.553,16 17,16" id="Fill-15" fill="#2B2B2B"></path> <path d="M28,16 L24,16 C23.447,16 23,15.552 23,15 C23,14.448 23.447,14 24,14 L28,14 C28.553,14 29,14.448 29,15 C29,15.552 28.553,16 28,16" id="Fill-17" fill="#2B2B2B"></path> </g> </svg>';
var home = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Home/Black/30</title> <g id="Home/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M7,25 L23,25 L23,15 C23,14.448 23.447,14 24,14 L24.586,14 L22.293,11.707 C22.105,11.52 22,11.265 22,11 L22,6 L21,6 L21,8 C21,8.404 20.757,8.769 20.383,8.924 C20.01,9.08 19.58,8.994 19.293,8.707 L15,4.414 L5.414,14 L6,14 C6.552,14 7,14.448 7,15 L7,25 Z M24,27 L6,27 C5.448,27 5,26.553 5,26 L5,16 L3,16 C2.596,16 2.231,15.756 2.076,15.383 C1.921,15.009 2.007,14.579 2.293,14.293 L14.293,2.293 C14.684,1.902 15.316,1.902 15.707,2.293 L19,5.586 L19,5 C19,4.448 19.447,4 20,4 L23,4 C23.553,4 24,4.448 24,5 L24,10.586 L27.707,14.293 C27.993,14.579 28.079,15.009 27.924,15.383 C27.77,15.756 27.404,16 27,16 L25,16 L25,26 C25,26.553 24.553,27 24,27 Z" id="Fill-1" fill="#2B2B2B"></path> <path d="M24,16 L6,16 C5.448,16 5,15.552 5,15 C5,14.448 5.448,14 6,14 L24,14 C24.553,14 25,14.448 25,15 C25,15.552 24.553,16 24,16" id="Fill-4" fill="#2B2B2B"></path> <path d="M23,12 C22.744,12 22.488,11.902 22.293,11.707 L19.293,8.707 C18.902,8.316 18.902,7.684 19.293,7.293 C19.684,6.902 20.316,6.902 20.707,7.293 L23.707,10.293 C24.098,10.684 24.098,11.316 23.707,11.707 C23.512,11.902 23.256,12 23,12" id="Fill-6" fill="#2B2B2B"></path> </g> </svg>';
var iconlocation = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Location/Black/30</title> <g id="Location/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M15,4 C8.925,4 4,8.925 4,15 C4,21.075 8.925,26 15,26 C21.075,26 26,21.075 26,15 C26,8.925 21.075,4 15,4 M15,6 C19.963,6 24,10.038 24,15 C24,19.963 19.963,24 15,24 C10.037,24 6,19.963 6,15 C6,10.038 10.037,6 15,6" id="Fill-1" fill="#2B2B2B"></path> <path d="M15,29 C14.447,29 14,28.553 14,28 L14,21 C14,20.447 14.447,20 15,20 C15.553,20 16,20.447 16,21 L16,28 C16,28.553 15.553,29 15,29" id="Fill-3" fill="#2B2B2B"></path> <path d="M15,10 C14.447,10 14,9.552 14,9 L14,2 C14,1.448 14.447,1 15,1 C15.553,1 16,1.448 16,2 L16,9 C16,9.552 15.553,10 15,10" id="Fill-5" fill="#2B2B2B"></path> <path d="M28,16 L21,16 C20.447,16 20,15.552 20,15 C20,14.448 20.447,14 21,14 L28,14 C28.553,14 29,14.448 29,15 C29,15.552 28.553,16 28,16" id="Fill-7" fill="#2B2B2B"></path> <path d="M9,16 L2,16 C1.447,16 1,15.552 1,15 C1,14.448 1.447,14 2,14 L9,14 C9.553,14 10,14.448 10,15 C10,15.552 9.553,16 9,16" id="Fill-9" fill="#2B2B2B"></path> </g> </svg>';
var location_pin = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>LocationPin/Filled/Black/30</title> <g id="LocationPin/Filled/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M15.00087,16.6558908 C12.2317215,16.6558908 9.97831092,14.5747897 9.97831092,12.0154109 C9.97831092,9.45702019 12.2317215,7.37591908 15.00087,7.37591908 C17.7710885,7.37591908 20.0234291,9.45702019 20.0234291,12.0154109 C20.0234291,14.5747897 17.7710885,16.6558908 15.00087,16.6558908 M14.9998,1.0002 C8.38294757,1.0002 2.9998,6.01025823 2.9998,12.1685783 C2.9998,14.4631257 3.74237691,16.667749 5.0884313,18.4603023 C5.32062033,18.8466796 5.57527927,19.2132933 5.88664797,19.5976943 L14.1844634,28.6513735 C14.3888325,28.871737 14.6873613,29.0002 15.00194,29.0002 C15.3165187,29.0002 15.6150474,28.871737 15.8194166,28.6503853 L24.1429119,19.5631081 C24.4072008,19.2340451 24.6543698,18.8802776 24.8779988,18.5106994 C26.2657831,16.6420564 26.9998,14.4502794 26.9998,12.1685783 C26.9998,6.01025823 21.6166524,1.0002 14.9998,1.0002" id="Fill-1" fill="#2B2B2B"></path> </g> </svg>';
var menu = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"> <title>Menu</title><style type="text/css"> .st0{fill:none;stroke:#FF00FF;stroke-width:2;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:#FF00FF;}.st2{display:none;}.st3{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st4{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st5{fill:#FFFFFF;}.st6{stroke:#FFFFFF;stroke-miterlimit:10;}.st7{fill:none;}.st8{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st9{fill:#141414;}.st10{fill-rule:evenodd;clip-rule:evenodd;}.st11{fill:#FF0000;}</style> <g id="Guides"> </g> <g id="Layer_3" class="st2"> </g> <g id="Layer_1"> <rect x="4" y="11" class="st10" width="16" height="2"/> <rect x="4" y="17" class="st10" width="16" height="2"/> <rect x="4" y="5" class="st10" width="16" height="2"/> </g> <g id="Layer_4" class="st2"> </g> <g id="Layer_5" class="st2"> </g> </svg> ';
var modal_window = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Modal/Line/Black/30</title> <g id="Modal/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M21.1818182,22 L4.81818182,22 C3.81272727,22 3,21.29225 3,20.4166667 L3,4.58333333 C3,3.70933333 3.81272727,3 4.81818182,3 L21.1818182,3 C22.1872727,3 23,3.70933333 23,4.58333333 L23,20.4166667 C23,21.29225 22.1872727,22 21.1818182,22 Z M5,5 L5,20 L21,20 L21,5 L5,5 Z" id="Combined-Shape" fill="#2B2B2B"></path> <path d="M12,26 C11.447,26 11,25.553 11,25 C11,24.447 11.447,24 12,24 L25,24 L25,10 C25,9.448 25.447,9 26,9 C26.553,9 27,9.448 27,10 L27,25 C27,25.553 26.553,26 26,26 L12,26 Z" id="Fill-3" fill="#2B2B2B"></path> </g> </svg>';
var notification_done = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Tick/Green/30</title> <g id="Tick/Green/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M9.2297,24.6037139 L1.4797,17.482476 C0.8727,16.9247051 0.8367,15.9845194 1.3997,15.3831572 C1.9627,14.7798136 2.9137,14.7461294 3.5197,15.3039003 L10.2127,21.4532497 L26.4407,5.43343649 C27.0287,4.85486068 27.9787,4.85486068 28.5617,5.43739934 C29.1467,6.01894729 29.1457,6.9601237 28.5587,7.53869952 L11.3087,24.5670576 C11.0167,24.8553548 10.6337,24.9999987 10.2497,24.9999987 C9.8837,24.9999987 9.5187,24.868234 9.2297,24.6037139 Z" id="Fill-1" fill="#0DB65C"></path> </g> </svg>';
var paymentcard = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Card/Black/30</title> <g id="Card/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M3,22 L27,22 L27,8 L3,8 L3,22 Z M28,24 L2,24 C1.447,24 1,23.553 1,23 L1,7 C1,6.448 1.447,6 2,6 L28,6 C28.553,6 29,6.448 29,7 L29,23 C29,23.553 28.553,24 28,24 Z" id="Fill-1" fill="#2B2B2B"></path> <path d="M26.5,14 L2.5,14 C1.672,14 1,13.329 1,12.5 C1,11.671 1.672,11 2.5,11 L26.5,11 C27.328,11 28,11.671 28,12.5 C28,13.329 27.328,14 26.5,14" id="Fill-3" fill="#2B2B2B"></path> <path d="M22,19 C22,19.553 21.553,20 21,20 C20.447,20 20,19.553 20,19 C20,18.447 20.447,18 21,18 C21.553,18 22,18.447 22,19" id="Fill-4" fill="#2B2B2B"></path> <path d="M25,19 C25,19.553 24.553,20 24,20 C23.447,20 23,19.553 23,19 C23,18.447 23.447,18 24,18 C24.553,18 25,18.447 25,19" id="Fill-5" fill="#2B2B2B"></path> <path d="M11,20 L6,20 C5.447,20 5,19.553 5,19 C5,18.447 5.447,18 6,18 L11,18 C11.553,18 12,18.447 12,19 C12,19.553 11.553,20 11,20" id="Fill-6" fill="#2B2B2B"></path> </g> </svg>';
var play = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"> <title>Play</title><style type="text/css"> .st0{fill:none;stroke:#FF00FF;stroke-width:2;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:#FF00FF;}.st2{display:none;}.st3{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st4{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st5{fill:#FFFFFF;}.st6{stroke:#FFFFFF;stroke-miterlimit:10;}.st7{fill:none;}.st8{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st9{fill:#FF0000;}.st10{fill-rule:evenodd;clip-rule:evenodd;}.st11{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}</style> <g id="Guides"> </g> <g id="Layer_3" class="st2"> </g> <g id="Layer_1"> <g> <path d="M9.74,15.93l6.02-3.48c0.16-0.09,0.26-0.26,0.26-0.45c0-0.19-0.1-0.36-0.26-0.45L9.74,8.07C9.59,7.98,9.4,7.98,9.25,8.07 C9.09,8.17,9,8.34,9,8.52v6.95c0,0.18,0.09,0.35,0.25,0.45c0.08,0.05,0.17,0.07,0.25,0.07C9.58,15.99,9.67,15.97,9.74,15.93z"/> <g> <path d="M12,3.6c4.63,0,8.4,3.77,8.4,8.4s-3.77,8.4-8.4,8.4S3.6,16.63,3.6,12S7.37,3.6,12,3.6 M12,2C6.48,2,2,6.48,2,12 s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2L12,2z"/> </g> </g> </g> <g id="Layer_4" class="st2"> </g> <g id="Layer_5" class="st2"> </g> <g id="Layer_6"> </g> </svg> ';
var rewardsgifts = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"> <title>Rewards Gifts</title> <style type="text/css"> .st0{fill:none;stroke:#FF00FF;stroke-width:2;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:#FF00FF;}.st2{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st3{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st4{fill:#FFFFFF;}.st5{stroke:#FFFFFF;stroke-miterlimit:10;}.st6{fill:none;}.st7{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}</style> <g id="Guides"> </g> <g id="Layer_3"> </g> <g id="Layer_1"> <path d="M22.7,6.7L19,10.4V21H5V10.4L1.3,6.7l1.4-1.4L7,9.6V19h10V9.6l4.3-4.3L22.7,6.7z M7.8,13l2.3,2l-0.7,3l2.6-1.6l2.6,1.6 l-0.7-3l2.3-2l-3-0.3L12,10l-1.2,2.8L7.8,13z M5.3,5.1c0.6,0.6,1.2,0.5,1.6,0.4c0.3,0,0.3,0,0.4,0c0,0,0,0.1,0,0.4 c0,0.4-0.1,1,0.4,1.6C8.2,8.1,8.9,8,9.3,7.9c0.3,0,0.3,0,0.4,0c0,0,0,0.1,0,0.4c0,0.4-0.1,1,0.4,1.6l1.1-1.1c0,0,0-0.1,0-0.4 c0-0.4,0.1-1-0.4-1.6S9.5,6.4,9.1,6.5c-0.3,0-0.3,0-0.4,0c0,0,0-0.1,0-0.4c0-0.4,0.1-1-0.4-1.6S7.1,4,6.7,4.1c-0.3,0-0.3,0-0.4,0 c0,0,0-0.1,0-0.4c0-0.4,0.1-1-0.4-1.6L4.9,3.1c0,0,0,0.1,0,0.4C4.8,3.9,4.7,4.6,5.3,5.1z M12.8,8.8l1.1,1.1 c0.6-0.6,0.5-1.2,0.4-1.6c0-0.3,0-0.3,0-0.4c0,0,0.1,0,0.4,0c0.4,0,1,0.1,1.6-0.4c0.6-0.6,0.5-1.2,0.4-1.6c0-0.3,0-0.3,0-0.4 s0.1,0,0.4,0c0.4,0,1,0.1,1.6-0.4c0.6-0.6,0.5-1.2,0.4-1.6c0-0.3,0-0.3,0-0.4l-1.1-1.1c-0.6,0.6-0.5,1.2-0.4,1.6c0,0.3,0,0.3,0,0.4 c0,0-0.1,0-0.4,0c-0.4,0-1-0.1-1.6,0.4c-0.6,0.6-0.5,1.2-0.4,1.6c0,0.3,0,0.3,0,0.4c0,0-0.1,0-0.4,0c-0.4,0-1-0.1-1.6,0.4 c-0.4,0.4-0.5,0.8-0.5,1.2c0,0.2,0,0.3,0,0.4C12.9,8.8,12.9,8.8,12.8,8.8z"/> </g> </svg> ';
var search = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Search/Black/30</title> <g id="Search/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M12.5,3 C7.262,3 3,7.262 3,12.5 C3,17.738 7.262,22 12.5,22 C17.738,22 22,17.738 22,12.5 C22,7.262 17.738,3 12.5,3 M12.5,24 C6.159,24 1,18.841 1,12.5 C1,6.159 6.159,1 12.5,1 C18.841,1 24,6.159 24,12.5 C24,18.841 18.841,24 12.5,24" id="Fill-1" fill="#2B2B2B"></path> <path d="M27.995129,29 C27.7379847,29 27.4808404,28.9015595 27.2849688,28.7056829 L19.2944108,20.7149243 C18.9016631,20.3221667 18.9016631,19.6873258 19.2944108,19.2945682 C19.6871585,18.9018106 20.3219835,18.9018106 20.7147312,19.2945682 L28.7052892,27.2853268 C29.0980369,27.6780844 29.0980369,28.3129253 28.7052892,28.7056829 C28.5094176,28.9015595 28.2522733,29 27.995129,29" id="Fill-4" fill="#2B2B2B"></path> </g> </svg>';
var security_Padlock = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Security Padlock</title> <style type="text/css"> .st0{fill:none;stroke:#FF00FF;stroke-width:2;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:#FF00FF;}.st2{display:none;}.st3{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st4{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st5{fill:#FFFFFF;}.st6{stroke:#FFFFFF;stroke-miterlimit:10;}.st7{fill:none;}.st8{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st9{fill:#FF0000;}.st10{fill-rule:evenodd;clip-rule:evenodd;}.st11{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}</style> <g id="Guides"> </g> <g id="Layer_3" class="st2"> </g> <g id="Layer_1"> <path d="M19.61,11.49c-0.26-0.27-0.57-0.4-0.94-0.4h-0.44V8.36c0-1.74-0.61-3.24-1.83-4.49C15.17,2.62,13.7,2,12,2 S8.83,2.62,7.61,3.88C6.39,5.13,5.78,6.62,5.78,8.36v2.73H5.33c-0.37,0-0.69,0.13-0.94,0.4C4.13,11.75,4,12.08,4,12.45v8.18 c0,0.38,0.13,0.7,0.39,0.97C4.65,21.87,4.96,22,5.33,22h13.33c0.37,0,0.69-0.13,0.94-0.4c0.26-0.27,0.39-0.59,0.39-0.97v-8.18 C20,12.08,19.87,11.75,19.61,11.49z M13,16.72V18c0,0.55-0.45,1-1,1s-1-0.45-1-1v-1.28c-0.6-0.35-1-0.98-1-1.72c0-1.1,0.9-2,2-2 s2,0.9,2,2C14,15.74,13.6,16.38,13,16.72z M15.56,11.09H8.44V8.36c0-1,0.35-1.86,1.04-2.57c0.69-0.71,1.53-1.07,2.51-1.07 c0.98,0,1.82,0.35,2.51,1.07c0.69,0.71,1.04,1.57,1.04,2.57V11.09z"/> </g> <g id="Layer_4" class="st2"> </g> <g id="Layer_5" class="st2"> </g> <g id="Layer_6"> </g> </svg> ';
var simcard = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Sim/Black/30</title> <g id="Sim/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M6.9979022,25.9968026 L23.0020978,25.9968026 L23.0020978,10.3648516 L16.6567604,4.00369821 L6.9979022,4.00369821 L6.9979022,25.9968026 Z M24.0010489,28 L5.9989511,28 C5.44753009,28 5,27.5522854 5,26.9984013 L5,3.0020995 C5,2.44821542 5.44753009,2.0005008 5.9989511,2.0005008 L17.0703262,2.0005008 C17.3360472,2.0005008 17.5897807,2.10566866 17.7775835,2.29296762 L24.7073073,9.24205944 C24.8951101,9.4293584 25,9.68476607 25,9.95018973 L25,26.9984013 C25,27.5522854 24.5534689,28 24.0010489,28 Z" id="Page-1" fill="#2B2B2B"></path> <path d="M10.9862617,22.0041912 L19.0137383,22.0041912 L19.0137383,15.9958088 L10.9862617,15.9958088 L10.9862617,22.0041912 Z M20.0068692,24 L9.99313084,24 C9.44492262,24 9,23.5539367 9,23.0020956 L9,14.9979044 C9,14.4470612 9.44492262,14 9.99313084,14 L20.0068692,14 C20.5560705,14 21,14.4470612 21,14.9979044 L21,23.0020956 C21,23.5539367 20.5560705,24 20.0068692,24 Z" id="Fill-1" fill="#2B2B2B"></path> <path d="M14.9794362,23 L14.9745391,23 C14.4329191,22.997549 13.9970765,22.629902 14.0000148,22.1789216 L14.0411505,15.8129085 C14.0431093,15.3627451 14.4818901,15 15.0205719,15 L15.0254691,15 C15.5661097,15.002451 16.0019523,15.370098 15.9999934,15.8210784 L15.9588577,22.1870915 C15.9559195,22.6372549 15.5181181,23 14.9794362,23" id="Fill-3" fill="#2B2B2B"></path> <path d="M20.0073692,20 L9.99363084,20 C9.44442949,20 9.0005,19.553 9.0005,19 C9.0005,18.447 9.44442949,18 9.99363084,18 L20.0073692,18 C20.5565705,18 21.0005,18.447 21.0005,19 C21.0005,19.553 20.5565705,20 20.0073692,20" id="Fill-4" fill="#2B2B2B"></path> </g> </svg>';
var social_facebook = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Social/Facebook/White/30</title> <style type="text/css"> .st0{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st1{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st2{fill:#FFFFFF;}.st3{stroke:#FFFFFF;stroke-miterlimit:10;}.st4{fill:none;}.st5{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st6{fill:#FF0000;}.st7{fill-rule:evenodd;clip-rule:evenodd;}.st8{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}</style> <g id="Guides"> </g> <g id="THE_ICONS"> <g> <path id="Fill-1" class="st7" d="M14.41,10.08l-0.13,1.71h-1.75v5.92h-2.21v-5.92H9.14v-1.71h1.18V8.94 c0-0.51,0.01-1.28,0.38-1.77c0.39-0.51,0.92-0.86,1.83-0.86c1.49,0,2.11,0.21,2.11,0.21l-0.29,1.75c0,0-0.49-0.14-0.95-0.14 s-0.87,0.16-0.87,0.62v1.33H14.41z M12,2C6.47,2,2,6.48,2,12s4.48,10,10,10c5.52,0,10-4.48,10-10S17.52,2,12,2z"/> </g> </g> </svg> ';
var social_instagram = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Social/Instagram/White/30</title> <style type="text/css"> .st0{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st1{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st2{fill:#FFFFFF;}.st3{stroke:#FFFFFF;stroke-miterlimit:10;}.st4{fill:none;}.st5{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st6{fill:#FF0000;}.st7{fill-rule:evenodd;clip-rule:evenodd;}.st8{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}</style> <g id="Guides"> </g> <g id="THE_ICONS"> <g> <path id="Fill-1_2_" class="st7" d="M12,10.57c-0.79,0-1.43,0.64-1.43,1.43c0,0.79,0.64,1.43,1.43,1.43s1.43-0.64,1.43-1.43 C13.43,11.21,12.79,10.57,12,10.57"/> <path id="Fill-3" class="st7" d="M15.26,9.48c-0.4,0-0.73-0.33-0.73-0.73c0-0.4,0.33-0.73,0.73-0.73c0.4,0,0.73,0.33,0.73,0.73 C15.99,9.15,15.66,9.48,15.26,9.48 M12,15.13c-1.73,0-3.13-1.4-3.13-3.13c0-1.73,1.4-3.13,3.13-3.13c1.73,0,3.13,1.4,3.13,3.13 C15.13,13.73,13.73,15.13,12,15.13 M16.75,8.4c-0.11-0.28-0.24-0.49-0.46-0.7c-0.21-0.21-0.42-0.35-0.7-0.46 c-0.21-0.08-0.54-0.18-1.13-0.21C13.82,7.01,13.63,7,12,7c-1.63,0-1.82,0.01-2.46,0.04C8.94,7.06,8.62,7.16,8.4,7.25 C8.12,7.36,7.91,7.49,7.7,7.7C7.49,7.92,7.36,8.12,7.25,8.4C7.16,8.62,7.06,8.94,7.04,9.54C7.01,10.18,7,10.37,7,12 c0,1.63,0.01,1.82,0.04,2.46c0.03,0.59,0.13,0.92,0.21,1.13c0.11,0.29,0.24,0.49,0.46,0.7c0.21,0.21,0.42,0.35,0.7,0.46 c0.21,0.08,0.54,0.18,1.13,0.21C10.18,16.99,10.37,17,12,17c1.63,0,1.82-0.01,2.46-0.04c0.59-0.03,0.92-0.13,1.13-0.21 c0.29-0.11,0.49-0.24,0.7-0.46c0.21-0.21,0.35-0.42,0.46-0.7c0.08-0.21,0.18-0.54,0.21-1.13C16.99,13.82,17,13.63,17,12 c0-1.63-0.01-1.82-0.04-2.46C16.94,8.94,16.84,8.62,16.75,8.4"/> <path id="Fill-5" class="st7" d="M17.68,14.36c-0.03,0.61-0.12,1.02-0.27,1.39c-0.15,0.38-0.34,0.69-0.66,1.01 c-0.32,0.32-0.64,0.51-1.01,0.66c-0.36,0.14-0.78,0.24-1.39,0.27c-0.61,0.03-0.8,0.03-2.36,0.03s-1.75-0.01-2.36-0.03 c-0.61-0.03-1.02-0.12-1.39-0.27c-0.38-0.15-0.7-0.34-1.01-0.66c-0.32-0.32-0.51-0.64-0.66-1.01c-0.14-0.36-0.24-0.78-0.27-1.39 c-0.03-0.61-0.03-0.8-0.03-2.36s0.01-1.75,0.03-2.36c0.03-0.61,0.13-1.02,0.27-1.39c0.15-0.38,0.34-0.69,0.66-1.01 c0.32-0.32,0.64-0.51,1.01-0.66c0.36-0.14,0.78-0.24,1.39-0.27c0.61-0.03,0.8-0.03,2.36-0.03s1.75,0.01,2.36,0.03 c0.61,0.03,1.02,0.12,1.39,0.27c0.38,0.15,0.69,0.34,1.01,0.66c0.32,0.32,0.51,0.64,0.66,1.01c0.14,0.36,0.24,0.78,0.27,1.39 c0.03,0.61,0.03,0.8,0.03,2.36S17.71,13.75,17.68,14.36 M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10 C22,6.48,17.52,2,12,2"/> </g> </g> </svg> ';
var social_twitter = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Social/Twitter/White/30</title> <style type="text/css"> .st0{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st1{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st2{fill:#FFFFFF;}.st3{stroke:#FFFFFF;stroke-miterlimit:10;}.st4{fill:none;}.st5{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st6{fill:#FF0000;}.st7{fill-rule:evenodd;clip-rule:evenodd;}.st8{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}</style> <g id="Guides"> </g> <g id="THE_ICONS"> <g> <path id="Fill-1_3_" class="st7" d="M16.56,9.66c0.01,0.1,0.01,0.2,0.01,0.3c0,3.11-2.37,6.7-6.7,6.7c-1.33,0-2.57-0.39-3.61-1.06 c0.18,0.02,0.37,0.03,0.56,0.03c1.1,0,2.12-0.38,2.92-1.01c-1.03-0.02-1.9-0.7-2.2-1.63c0.14,0.03,0.29,0.04,0.44,0.04 c0.22,0,0.42-0.03,0.62-0.08c-1.08-0.22-1.89-1.17-1.89-2.31v-0.03c0.32,0.18,0.68,0.28,1.07,0.29c-0.63-0.42-1.05-1.14-1.05-1.96 c0-0.43,0.11-0.84,0.32-1.18c1.16,1.42,2.9,2.36,4.85,2.46c-0.04-0.17-0.06-0.35-0.06-0.54c0-1.3,1.05-2.35,2.35-2.35 c0.68,0,1.29,0.29,1.72,0.74c0.54-0.1,1.04-0.3,1.5-0.57c-0.17,0.55-0.55,1.01-1.03,1.3c0.48-0.06,0.93-0.18,1.35-0.37 C17.42,8.91,17.02,9.33,16.56,9.66 M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10C22,6.48,17.52,2,12,2"/> </g> </g> </svg> ';
var social_youtube = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Social/YouTube/White/30</title> <style type="text/css"> .st0{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st1{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st2{fill:#FFFFFF;}.st3{stroke:#FFFFFF;stroke-miterlimit:10;}.st4{fill:none;}.st5{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st6{fill:#FF0000;}.st7{fill-rule:evenodd;clip-rule:evenodd;}.st8{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}</style> <g id="Guides"> </g> <g id="THE_ICONS"> <g> <polygon class="st7" points="10.85,13.67 13.79,12 10.85,10.33 "/> <path class="st7" d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M17.39,14.73 c-0.13,0.49-0.51,0.87-1,1c-0.88,0.24-4.4,0.24-4.4,0.24s-3.52,0-4.4-0.24c-0.48-0.13-0.87-0.51-1-1C6.37,13.84,6.37,12,6.37,12 s0-1.84,0.24-2.73c0.13-0.49,0.51-0.87,1-1C8.48,8.03,12,8.03,12,8.03s3.52,0,4.4,0.24c0.48,0.13,0.87,0.51,1,1 c0.24,0.88,0.24,2.73,0.24,2.73S17.63,13.84,17.39,14.73z"/> </g> </g> </svg> ';
var topup = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Topup</title> <style type="text/css"> .st0{fill:none;stroke:#FF00FF;stroke-width:2;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:#FF00FF;}.st2{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st3{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st4{fill:#FFFFFF;}.st5{stroke:#FFFFFF;stroke-miterlimit:10;}.st6{fill:none;}.st7{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}</style> <g id="Guides"> </g> <g id="Layer_3"> </g> <g id="Layer_1"> <path d="M15,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V7L15,2z M13,12v2h-3c0,1,0,2,0,3h6v2H8l0-1c0-1.7,0-3,0-4 H7v-2h1c0-1.9,0-2.1,0-2.1c0.3-1.6,2.1-3.3,4.4-3.2c1.9,0.1,3.1,1.4,3.4,1.8L16,8.7l0,2.3l-2,0l0-1.6c-0.3-0.3-0.9-0.7-1.7-0.8 c-1.2,0-2.2,0.9-2.3,1.6c0,0.1,0,0.8,0,1.8H13z"/> </g> </svg> ';
var upload = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Upload/Line/Black/30</title> <g id="Upload/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M26,25.0004 L4,25.0004 C3.448,25.0004 3,24.5789007 3,24.0574486 L3,17.9433514 C3,17.4218993 3.448,17.0004 4,17.0004 C4.552,17.0004 5,17.4218993 5,17.9433514 L5,23.1144971 L25,23.1144971 L25,17.9433514 C25,17.4218993 25.447,17.0004 26,17.0004 C26.553,17.0004 27,17.4218993 27,17.9433514 L27,24.0574486 C27,24.5789007 26.553,25.0004 26,25.0004" id="Fill-1" fill="#2B2B2B"></path> <path d="M22,13 C21.744,13 21.488,12.902 21.293,12.707 L15,6.414 L8.707,12.707 C8.316,13.098 7.684,13.098 7.293,12.707 C6.902,12.316 6.902,11.684 7.293,11.293 L14.293,4.293 C14.684,3.902 15.316,3.902 15.707,4.293 L22.707,11.293 C23.098,11.684 23.098,12.316 22.707,12.707 C22.512,12.902 22.256,13 22,13" id="Fill-3" fill="#2B2B2B"></path> <path d="M15,22 C14.448,22 14,21.553 14,21 L14,5 C14,4.448 14.448,4 15,4 C15.552,4 16,4.448 16,5 L16,21 C16,21.553 15.552,22 15,22" id="Fill-6" fill="#2B2B2B"></path> </g> </svg>';
var facebook = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Social/Facebook/White/30</title> <style type="text/css"> .st0{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st1{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st2{fill:#FFFFFF;}.st3{stroke:#FFFFFF;stroke-miterlimit:10;}.st4{fill:none;}.st5{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st6{fill:#FF0000;}.st7{fill-rule:evenodd;clip-rule:evenodd;}.st8{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}</style> <g id="Guides"> </g> <g id="THE_ICONS"> <g> <path id="Fill-1" class="st7" d="M14.41,10.08l-0.13,1.71h-1.75v5.92h-2.21v-5.92H9.14v-1.71h1.18V8.94 c0-0.51,0.01-1.28,0.38-1.77c0.39-0.51,0.92-0.86,1.83-0.86c1.49,0,2.11,0.21,2.11,0.21l-0.29,1.75c0,0-0.49-0.14-0.95-0.14 s-0.87,0.16-0.87,0.62v1.33H14.41z M12,2C6.47,2,2,6.48,2,12s4.48,10,10,10c5.52,0,10-4.48,10-10S17.52,2,12,2z"/> </g> </g> </svg> ';
var instagram = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Social/Instagram/White/30</title> <style type="text/css"> .st0{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st1{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st2{fill:#FFFFFF;}.st3{stroke:#FFFFFF;stroke-miterlimit:10;}.st4{fill:none;}.st5{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st6{fill:#FF0000;}.st7{fill-rule:evenodd;clip-rule:evenodd;}.st8{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}</style> <g id="Guides"> </g> <g id="THE_ICONS"> <g> <path id="Fill-1_2_" class="st7" d="M12,10.57c-0.79,0-1.43,0.64-1.43,1.43c0,0.79,0.64,1.43,1.43,1.43s1.43-0.64,1.43-1.43 C13.43,11.21,12.79,10.57,12,10.57"/> <path id="Fill-3" class="st7" d="M15.26,9.48c-0.4,0-0.73-0.33-0.73-0.73c0-0.4,0.33-0.73,0.73-0.73c0.4,0,0.73,0.33,0.73,0.73 C15.99,9.15,15.66,9.48,15.26,9.48 M12,15.13c-1.73,0-3.13-1.4-3.13-3.13c0-1.73,1.4-3.13,3.13-3.13c1.73,0,3.13,1.4,3.13,3.13 C15.13,13.73,13.73,15.13,12,15.13 M16.75,8.4c-0.11-0.28-0.24-0.49-0.46-0.7c-0.21-0.21-0.42-0.35-0.7-0.46 c-0.21-0.08-0.54-0.18-1.13-0.21C13.82,7.01,13.63,7,12,7c-1.63,0-1.82,0.01-2.46,0.04C8.94,7.06,8.62,7.16,8.4,7.25 C8.12,7.36,7.91,7.49,7.7,7.7C7.49,7.92,7.36,8.12,7.25,8.4C7.16,8.62,7.06,8.94,7.04,9.54C7.01,10.18,7,10.37,7,12 c0,1.63,0.01,1.82,0.04,2.46c0.03,0.59,0.13,0.92,0.21,1.13c0.11,0.29,0.24,0.49,0.46,0.7c0.21,0.21,0.42,0.35,0.7,0.46 c0.21,0.08,0.54,0.18,1.13,0.21C10.18,16.99,10.37,17,12,17c1.63,0,1.82-0.01,2.46-0.04c0.59-0.03,0.92-0.13,1.13-0.21 c0.29-0.11,0.49-0.24,0.7-0.46c0.21-0.21,0.35-0.42,0.46-0.7c0.08-0.21,0.18-0.54,0.21-1.13C16.99,13.82,17,13.63,17,12 c0-1.63-0.01-1.82-0.04-2.46C16.94,8.94,16.84,8.62,16.75,8.4"/> <path id="Fill-5" class="st7" d="M17.68,14.36c-0.03,0.61-0.12,1.02-0.27,1.39c-0.15,0.38-0.34,0.69-0.66,1.01 c-0.32,0.32-0.64,0.51-1.01,0.66c-0.36,0.14-0.78,0.24-1.39,0.27c-0.61,0.03-0.8,0.03-2.36,0.03s-1.75-0.01-2.36-0.03 c-0.61-0.03-1.02-0.12-1.39-0.27c-0.38-0.15-0.7-0.34-1.01-0.66c-0.32-0.32-0.51-0.64-0.66-1.01c-0.14-0.36-0.24-0.78-0.27-1.39 c-0.03-0.61-0.03-0.8-0.03-2.36s0.01-1.75,0.03-2.36c0.03-0.61,0.13-1.02,0.27-1.39c0.15-0.38,0.34-0.69,0.66-1.01 c0.32-0.32,0.64-0.51,1.01-0.66c0.36-0.14,0.78-0.24,1.39-0.27c0.61-0.03,0.8-0.03,2.36-0.03s1.75,0.01,2.36,0.03 c0.61,0.03,1.02,0.12,1.39,0.27c0.38,0.15,0.69,0.34,1.01,0.66c0.32,0.32,0.51,0.64,0.66,1.01c0.14,0.36,0.24,0.78,0.27,1.39 c0.03,0.61,0.03,0.8,0.03,2.36S17.71,13.75,17.68,14.36 M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10 C22,6.48,17.52,2,12,2"/> </g> </g> </svg> ';
var twitter = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Social/Twitter/White/30</title> <style type="text/css"> .st0{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st1{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st2{fill:#FFFFFF;}.st3{stroke:#FFFFFF;stroke-miterlimit:10;}.st4{fill:none;}.st5{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st6{fill:#FF0000;}.st7{fill-rule:evenodd;clip-rule:evenodd;}.st8{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}</style> <g id="Guides"> </g> <g id="THE_ICONS"> <g> <path id="Fill-1_3_" class="st7" d="M16.56,9.66c0.01,0.1,0.01,0.2,0.01,0.3c0,3.11-2.37,6.7-6.7,6.7c-1.33,0-2.57-0.39-3.61-1.06 c0.18,0.02,0.37,0.03,0.56,0.03c1.1,0,2.12-0.38,2.92-1.01c-1.03-0.02-1.9-0.7-2.2-1.63c0.14,0.03,0.29,0.04,0.44,0.04 c0.22,0,0.42-0.03,0.62-0.08c-1.08-0.22-1.89-1.17-1.89-2.31v-0.03c0.32,0.18,0.68,0.28,1.07,0.29c-0.63-0.42-1.05-1.14-1.05-1.96 c0-0.43,0.11-0.84,0.32-1.18c1.16,1.42,2.9,2.36,4.85,2.46c-0.04-0.17-0.06-0.35-0.06-0.54c0-1.3,1.05-2.35,2.35-2.35 c0.68,0,1.29,0.29,1.72,0.74c0.54-0.1,1.04-0.3,1.5-0.57c-0.17,0.55-0.55,1.01-1.03,1.3c0.48-0.06,0.93-0.18,1.35-0.37 C17.42,8.91,17.02,9.33,16.56,9.66 M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10C22,6.48,17.52,2,12,2"/> </g> </g> </svg> ';
var youtube = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Social/YouTube/White/30</title> <style type="text/css"> .st0{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st1{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st2{fill:#FFFFFF;}.st3{stroke:#FFFFFF;stroke-miterlimit:10;}.st4{fill:none;}.st5{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st6{fill:#FF0000;}.st7{fill-rule:evenodd;clip-rule:evenodd;}.st8{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}</style> <g id="Guides"> </g> <g id="THE_ICONS"> <g> <polygon class="st7" points="10.85,13.67 13.79,12 10.85,10.33 "/> <path class="st7" d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M17.39,14.73 c-0.13,0.49-0.51,0.87-1,1c-0.88,0.24-4.4,0.24-4.4,0.24s-3.52,0-4.4-0.24c-0.48-0.13-0.87-0.51-1-1C6.37,13.84,6.37,12,6.37,12 s0-1.84,0.24-2.73c0.13-0.49,0.51-0.87,1-1C8.48,8.03,12,8.03,12,8.03s3.52,0,4.4,0.24c0.48,0.13,0.87,0.51,1,1 c0.24,0.88,0.24,2.73,0.24,2.73S17.63,13.84,17.39,14.73z"/> </g> </g> </svg> ';
var rank_bronze = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Rank Bronze</title> <style type="text/css"> .st0{fill:none;stroke:#FF00FF;stroke-width:2;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:#FF00FF;}.st2{display:none;}.st3{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st4{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st5{fill:#FFFFFF;}.st6{stroke:#FFFFFF;stroke-miterlimit:10;}.st7{fill:none;}.st8{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st9{fill:#141414;}.st10{fill:#FF0000;}.st11{fill-rule:evenodd;clip-rule:evenodd;}</style> <g id="Guides"> </g> <g id="Layer_3" class="st2"> </g> <g id="Layer_1"> <g id="Artwork_1_"> <path d="M19.36,5.85l-5.87-3.49C13.04,2.12,12.52,1.99,12,2c-0.52-0.01-1.04,0.12-1.49,0.37L4.64,5.85 C3.76,6.44,3.2,7.42,3.14,8.48v7.05c0.06,1.06,0.61,2.03,1.5,2.62l5.87,3.49c0.46,0.25,0.97,0.38,1.49,0.37 c0.52,0.01,1.04-0.12,1.49-0.37l5.87-3.49c0.88-0.59,1.44-1.56,1.5-2.62V8.48C20.8,7.42,20.24,6.44,19.36,5.85z M15.29,11.28 L14,12.57c-0.02,0.03-0.04,0.06-0.03,0.1l0.31,1.81c0.03,0.16-0.04,0.31-0.16,0.41c-0.07,0.05-0.15,0.08-0.24,0.08 c-0.07,0-0.13-0.02-0.19-0.05l-1.62-0.86c-0.03-0.02-0.07-0.02-0.1,0l-1.63,0.86c-0.2,0.11-0.45,0.03-0.56-0.17 c-0.04-0.08-0.06-0.18-0.04-0.27l0.31-1.81c0-0.04-0.01-0.07-0.03-0.1l-1.31-1.28c-0.11-0.11-0.15-0.27-0.1-0.42 c0.05-0.15,0.18-0.26,0.33-0.28l1.81-0.27c0.03-0.01,0.06-0.03,0.08-0.06l0.81-1.67c0.1-0.2,0.35-0.29,0.55-0.19 c0.08,0.04,0.15,0.11,0.19,0.19l0.81,1.67c0.02,0.03,0.05,0.05,0.08,0.06l1.81,0.27c0.16,0.02,0.29,0.13,0.33,0.28 C15.45,11.01,15.41,11.18,15.29,11.28z"/> </g> </g> <g id="Layer_4" class="st2"> </g> <g id="Layer_5" class="st2"> </g> <g id="Layer_6"> </g> </svg> ';
var rank_gold = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Rank Gold</title> <style type="text/css"> .st0{fill:none;stroke:#FF00FF;stroke-width:2;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:#FF00FF;}.st2{display:none;}.st3{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st4{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st5{fill:#FFFFFF;}.st6{stroke:#FFFFFF;stroke-miterlimit:10;}.st7{fill:none;}.st8{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st9{fill:#141414;}.st10{fill:#FF0000;}.st11{fill-rule:evenodd;clip-rule:evenodd;}</style> <g id="Guides"> </g> <g id="Layer_3" class="st2"> </g> <g id="Layer_1"> <g id="Artwork_3_"> <path d="M19.36,5.85l-5.87-3.49C13.04,2.12,12.52,1.99,12,2c-0.52-0.01-1.04,0.12-1.49,0.37L4.64,5.85 C3.76,6.44,3.2,7.42,3.14,8.48v7.05c0.06,1.06,0.61,2.03,1.5,2.62l5.87,3.49c0.46,0.25,0.97,0.38,1.49,0.37 c0.52,0.01,1.04-0.12,1.49-0.37l5.87-3.49c0.88-0.59,1.44-1.56,1.5-2.62V8.48C20.8,7.42,20.24,6.44,19.36,5.85z M11.33,13.98 l-1.19,1.17c-0.02,0.02-0.04,0.05-0.03,0.09l0.28,1.65c0.04,0.21-0.1,0.4-0.3,0.44c-0.02,0-0.04,0.01-0.07,0.01 c-0.06,0-0.12-0.02-0.18-0.05L8.38,16.5c-0.03-0.02-0.06-0.02-0.09,0l-1.47,0.78c-0.18,0.1-0.41,0.03-0.5-0.15 c-0.04-0.07-0.05-0.16-0.04-0.24l0.28-1.65c0.01-0.03-0.01-0.06-0.03-0.09l-1.19-1.17c-0.1-0.1-0.14-0.25-0.1-0.39 c0.04-0.14,0.16-0.23,0.3-0.25l1.64-0.24c0.03,0,0.06-0.02,0.07-0.05l0.73-1.5c0.09-0.18,0.32-0.26,0.5-0.17 c0.07,0.04,0.13,0.09,0.17,0.17l0.73,1.5c0.01,0.03,0.04,0.05,0.07,0.05l1.64,0.24c0.14,0.02,0.26,0.12,0.3,0.25 C11.46,13.73,11.43,13.87,11.33,13.98z M11.96,9.84l-1.47,0.78c-0.13,0.07-0.28,0.06-0.39-0.03c-0.12-0.08-0.18-0.23-0.15-0.37 l0.28-1.67c0.01-0.03-0.01-0.07-0.03-0.09L9,7.33C8.84,7.21,8.8,6.98,8.92,6.82C8.99,6.72,9.1,6.67,9.21,6.67l1.64-0.24 c0.03,0,0.06-0.02,0.07-0.05l0.74-1.49c0.09-0.18,0.32-0.26,0.5-0.17c0.07,0.04,0.13,0.09,0.17,0.17l0.73,1.5 c0.01,0.03,0.04,0.05,0.07,0.05l1.64,0.24c0.14,0.02,0.26,0.12,0.3,0.25c0.05,0.14,0.02,0.29-0.09,0.4L13.81,8.5 c-0.02,0.02-0.04,0.06-0.03,0.09l0.28,1.67c0.02,0.21-0.13,0.39-0.33,0.41c-0.01,0-0.02,0-0.04,0c-0.06,0-0.12-0.01-0.18-0.04 l-1.47-0.78C12.02,9.83,11.99,9.83,11.96,9.84L11.96,9.84z M18.67,13.98l-1.19,1.17c-0.02,0.02-0.04,0.05-0.03,0.09l0.28,1.65 c0.04,0.21-0.1,0.4-0.3,0.44c-0.02,0-0.04,0.01-0.07,0.01c-0.06,0-0.12-0.02-0.18-0.05l-1.47-0.79c-0.03-0.02-0.06-0.02-0.09,0 l-1.47,0.78c-0.18,0.1-0.41,0.03-0.5-0.15c-0.04-0.07-0.05-0.16-0.04-0.24l0.28-1.65c0.01-0.03-0.01-0.06-0.03-0.09l-1.19-1.17 c-0.1-0.1-0.14-0.25-0.1-0.39c0.04-0.14,0.16-0.23,0.3-0.25l1.64-0.24c0.03,0,0.06-0.02,0.07-0.05l0.73-1.5 c0.09-0.18,0.32-0.26,0.5-0.17c0.07,0.04,0.13,0.09,0.17,0.17l0.73,1.5c0.01,0.03,0.04,0.05,0.07,0.05l1.64,0.24 c0.14,0.02,0.26,0.12,0.3,0.25C18.79,13.73,18.76,13.87,18.67,13.98z"/> </g> </g> <g id="Layer_4" class="st2"> </g> <g id="Layer_5" class="st2"> </g> <g id="Layer_6"> </g> </svg> ';
var rank_platinum = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Rank Platinum</title> <style type="text/css"> .st0{fill:none;stroke:#FF00FF;stroke-width:2;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:#FF00FF;}.st2{display:none;}.st3{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st4{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st5{fill:#FFFFFF;}.st6{stroke:#FFFFFF;stroke-miterlimit:10;}.st7{fill:none;}.st8{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st9{fill:#141414;}.st10{fill:#FF0000;}.st11{fill-rule:evenodd;clip-rule:evenodd;}</style> <g id="Guides"> </g> <g id="Layer_3" class="st2"> </g> <g id="Layer_1"> <g id="Artwork_4_"> <path d="M19.36,5.85l-5.87-3.49C13.04,2.12,12.52,1.99,12,2c-0.52-0.01-1.04,0.12-1.49,0.37L4.64,5.85 C3.76,6.44,3.2,7.42,3.14,8.48v7.05c0.06,1.06,0.61,2.03,1.5,2.62l5.87,3.49c0.46,0.25,0.97,0.38,1.49,0.37 c0.52,0.01,1.04-0.12,1.49-0.37l5.87-3.49c0.88-0.59,1.44-1.56,1.5-2.62V8.48C20.8,7.42,20.24,6.44,19.36,5.85z M11.2,14.69 l-1.07,1.05c-0.02,0.02-0.03,0.05-0.02,0.08l0.25,1.48c0.02,0.13-0.03,0.26-0.14,0.33c-0.06,0.04-0.13,0.06-0.2,0.06 c-0.05,0-0.11-0.01-0.16-0.04l-1.33-0.7c-0.02-0.01-0.06-0.01-0.08,0l-1.33,0.7C7,17.72,6.87,17.71,6.76,17.63 c-0.11-0.07-0.16-0.21-0.14-0.33l0.25-1.48c0.01-0.03,0-0.06-0.02-0.08l-1.07-1.05C5.7,14.6,5.66,14.47,5.7,14.35 c0.04-0.12,0.14-0.21,0.27-0.23l1.48-0.22c0.03,0,0.05-0.02,0.07-0.05l0.67-1.35c0.06-0.12,0.17-0.19,0.3-0.19 c0.13,0,0.25,0.07,0.3,0.19l0.67,1.35c0.01,0.03,0.04,0.05,0.07,0.05L11,14.12c0.13,0.02,0.23,0.11,0.27,0.23 C11.31,14.47,11.28,14.6,11.2,14.69z M11.2,8.02l-1.07,1.05c-0.02,0.02-0.03,0.05-0.02,0.08l0.25,1.48 c0.02,0.13-0.03,0.26-0.14,0.33c-0.06,0.04-0.13,0.06-0.2,0.06c-0.05,0-0.11-0.01-0.16-0.04l-1.33-0.7 c-0.02-0.01-0.06-0.01-0.08,0l-1.33,0.7C7,11.05,6.87,11.04,6.76,10.97c-0.11-0.07-0.16-0.21-0.14-0.33l0.25-1.48 c0.01-0.03,0-0.06-0.02-0.08L5.78,8.02C5.7,7.93,5.66,7.8,5.7,7.69c0.04-0.12,0.14-0.21,0.27-0.23l1.48-0.22 c0.03,0,0.05-0.02,0.07-0.05l0.67-1.35c0.06-0.12,0.17-0.19,0.3-0.19c0.13,0,0.25,0.07,0.3,0.19l0.67,1.35 c0.01,0.03,0.04,0.05,0.07,0.05L11,7.46c0.13,0.02,0.23,0.11,0.27,0.23C11.31,7.8,11.28,7.93,11.2,8.02z M18.2,14.69l-1.07,1.05 c-0.02,0.02-0.03,0.05-0.02,0.08l0.25,1.48c0.02,0.13-0.03,0.26-0.14,0.33c-0.06,0.04-0.13,0.06-0.2,0.06 c-0.05,0-0.11-0.01-0.16-0.04l-1.33-0.7c-0.02-0.01-0.06-0.01-0.08,0l-1.33,0.7c-0.11,0.06-0.25,0.05-0.35-0.03 c-0.11-0.07-0.16-0.21-0.14-0.33l0.25-1.48c0.01-0.03,0-0.06-0.02-0.08l-1.07-1.05c-0.09-0.09-0.12-0.22-0.08-0.33 c0.04-0.12,0.14-0.21,0.27-0.23l1.48-0.22c0.03,0,0.05-0.02,0.07-0.05l0.67-1.35c0.06-0.12,0.17-0.19,0.3-0.19 c0.13,0,0.25,0.07,0.3,0.19l0.67,1.35c0.01,0.03,0.04,0.05,0.07,0.05L18,14.12c0.13,0.02,0.23,0.11,0.27,0.23 C18.31,14.47,18.28,14.6,18.2,14.69z M18.2,8.02l-1.07,1.05c-0.02,0.02-0.03,0.05-0.02,0.08l0.25,1.48 c0.02,0.13-0.03,0.26-0.14,0.33c-0.06,0.04-0.13,0.06-0.2,0.06c-0.05,0-0.11-0.01-0.16-0.04l-1.33-0.7 c-0.02-0.01-0.06-0.01-0.08,0l-1.33,0.7c-0.11,0.06-0.25,0.05-0.35-0.03c-0.11-0.07-0.16-0.21-0.14-0.33l0.25-1.48 c0.01-0.03,0-0.06-0.02-0.08l-1.07-1.05C12.7,7.93,12.66,7.8,12.7,7.69c0.04-0.12,0.14-0.21,0.27-0.23l1.48-0.22 c0.03,0,0.05-0.02,0.07-0.05l0.67-1.35c0.06-0.12,0.17-0.19,0.3-0.19c0.13,0,0.25,0.07,0.3,0.19l0.67,1.35 c0.01,0.03,0.04,0.05,0.07,0.05L18,7.46c0.13,0.02,0.23,0.11,0.27,0.23C18.31,7.8,18.28,7.93,18.2,8.02z"/> </g> </g> <g id="Layer_4" class="st2"> </g> <g id="Layer_5" class="st2"> </g> <g id="Layer_6"> </g> </svg> ';
var rank_silver = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Rank Silver</title> <style type="text/css"> .st0{fill:none;stroke:#FF00FF;stroke-width:2;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:#FF00FF;}.st2{display:none;}.st3{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st4{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st5{fill:#FFFFFF;}.st6{stroke:#FFFFFF;stroke-miterlimit:10;}.st7{fill:none;}.st8{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st9{fill:#141414;}.st10{fill:#FF0000;}.st11{fill-rule:evenodd;clip-rule:evenodd;}</style> <g id="Guides"> </g> <g id="Layer_3" class="st2"> </g> <g id="Layer_1"> <g id="Artwork_2_"> <path d="M19.36,5.85l-5.87-3.49C13.04,2.12,12.52,1.99,12,2c-0.52-0.01-1.04,0.12-1.49,0.37L4.64,5.85 C3.76,6.44,3.2,7.42,3.14,8.48v7.05c0.06,1.06,0.61,2.03,1.5,2.62l5.87,3.49c0.46,0.25,0.97,0.38,1.49,0.37 c0.52,0.01,1.04-0.12,1.49-0.37l5.87-3.49c0.88-0.59,1.44-1.56,1.5-2.62V8.48C20.8,7.42,20.24,6.44,19.36,5.85z M15,14.65 l-1.19,1.17c-0.02,0.02-0.04,0.05-0.03,0.09l0.28,1.65c0.04,0.21-0.1,0.4-0.3,0.44C13.73,18,13.71,18,13.69,18 c-0.06,0-0.12-0.02-0.18-0.05l-1.47-0.79c-0.03-0.02-0.06-0.02-0.09,0l-1.47,0.78c-0.18,0.1-0.41,0.03-0.5-0.15 c-0.04-0.07-0.05-0.16-0.04-0.24l0.28-1.65c0.01-0.03-0.01-0.06-0.03-0.09L9,14.65c-0.1-0.1-0.14-0.25-0.1-0.39 c0.04-0.14,0.16-0.23,0.3-0.25l1.64-0.24c0.03,0,0.06-0.02,0.07-0.05l0.73-1.5c0.09-0.18,0.32-0.26,0.5-0.17 c0.07,0.04,0.13,0.09,0.17,0.17l0.73,1.5c0.01,0.03,0.04,0.05,0.07,0.05l1.64,0.24c0.14,0.02,0.26,0.12,0.3,0.25 C15.12,14.39,15.09,14.54,15,14.65z M15,7.65l-1.19,1.17c-0.02,0.02-0.04,0.06-0.03,0.09l0.28,1.67c0.03,0.2-0.11,0.39-0.31,0.43 c-0.02,0-0.04,0-0.06,0c-0.06,0-0.12-0.01-0.18-0.04l-1.47-0.78c-0.03-0.01-0.06-0.01-0.09,0l-1.47,0.78 c-0.13,0.07-0.28,0.06-0.39-0.03c-0.12-0.08-0.18-0.23-0.15-0.37l0.28-1.67c0.01-0.03-0.01-0.07-0.03-0.09L9,7.67 C8.84,7.54,8.8,7.31,8.92,7.15C8.99,7.06,9.1,7,9.21,7l1.64-0.24c0.03,0,0.06-0.02,0.07-0.05l0.73-1.5 c0.09-0.18,0.32-0.26,0.5-0.17c0.07,0.04,0.13,0.09,0.17,0.17l0.73,1.5c0.01,0.03,0.04,0.05,0.07,0.05L14.78,7 c0.14,0.02,0.26,0.12,0.3,0.25C15.14,7.4,15.11,7.56,15,7.67V7.65z"/> </g> </g> <g id="Layer_4" class="st2"> </g> <g id="Layer_5" class="st2"> </g> <g id="Layer_6"> </g> </svg> ';
var iconamex = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 62 62" style="enable-background:new 0 0 62 62;" xml:space="preserve"><title>Amex Card</title> <style type="text/css"> .st0{fill:#0072CE;}.st1{fill:#FFFFFF;}.st2{fill:#005CA8;}.st3{fill:#F6A723;}.st4{fill-rule:evenodd;clip-rule:evenodd;fill:#1D1D1B;}.st5{fill:#FF5F00;}.st6{fill:#EB001B;}.st7{fill:#F79E1B;}.st8{fill:#6C6BBD;}.st9{fill:#D32011;}.st10{fill:#0099DF;}.st11{fill:#110F0D;}</style> <g id="Grid"> </g> <g id="Artwork"> <path class="st0" d="M54.48,11.67H7.52c-3.1,0-5.62,2.52-5.62,5.62v27.41c0,3.1,2.52,5.62,5.62,5.62h46.95 c3.1,0,5.62-2.52,5.62-5.62V17.29C60.1,14.19,57.58,11.67,54.48,11.67z"/> <path class="st1" d="M8.15,26.26l-1.06-2.59l-1.06,2.59 M31.61,25.23c-0.21,0.13-0.47,0.13-0.77,0.13h-1.89v-1.45h1.92 c0.27,0,0.55,0.01,0.74,0.12c0.2,0.09,0.33,0.3,0.33,0.58C31.93,24.89,31.81,25.12,31.61,25.23z M45.09,26.26l-1.08-2.59 l-1.07,2.59H45.09z M19.96,29.07h-1.59l-0.01-5.1l-2.26,5.1h-1.37l-2.26-5.1v5.1H9.31l-0.6-1.45H5.47l-0.6,1.45H3.18l2.79-6.51 h2.31l2.65,6.16v-6.16h2.54l2.04,4.42l1.87-4.42h2.59L19.96,29.07L19.96,29.07z M26.31,29.07h-5.2v-6.51h5.2v1.36h-3.64v1.17h3.55 v1.33h-3.55v1.3h3.64V29.07z M33.64,24.32c0,1.04-0.69,1.57-1.1,1.73c0.34,0.13,0.63,0.36,0.77,0.55c0.22,0.32,0.26,0.61,0.26,1.19 v1.28H32L32,28.25c0-0.39,0.04-0.95-0.25-1.27c-0.23-0.23-0.57-0.28-1.13-0.28h-1.67v2.37h-1.56v-6.51h3.58 c0.8,0,1.38,0.02,1.88,0.31C33.35,23.16,33.64,23.59,33.64,24.32z M36.13,29.07h-1.59v-6.51h1.59V29.07z M54.55,29.07h-2.2 l-2.95-4.89v4.89h-3.17l-0.61-1.45h-3.23l-0.59,1.45h-1.82c-0.76,0-1.71-0.17-2.26-0.72c-0.55-0.55-0.83-1.3-0.83-2.48 c0-0.97,0.17-1.85,0.84-2.55c0.5-0.52,1.29-0.76,2.36-0.76h1.51v1.39h-1.47c-0.57,0-0.89,0.08-1.2,0.39 c-0.27,0.27-0.45,0.79-0.45,1.47c0,0.7,0.14,1.2,0.43,1.53c0.24,0.26,0.67,0.34,1.08,0.34h0.7l2.19-5.12h2.33l2.63,6.16v-6.16h2.37 l2.73,4.53v-4.53h1.59V29.07L54.55,29.07z M3.16,30.35h2.66l0.6-1.45h1.34l0.6,1.45h5.23v-1.11l0.47,1.11h2.72l0.47-1.13v1.12h13 l-0.01-2.37h0.25c0.18,0.01,0.23,0.02,0.23,0.31v2.06h6.72V29.8c0.54,0.29,1.39,0.55,2.5,0.55h2.83l0.61-1.45h1.34l0.59,1.45h5.45 v-1.37l0.83,1.37h4.37v-9.08h-4.32v1.07l-0.61-1.07h-4.43v1.07l-0.56-1.07h-5.99c-1,0-1.88,0.14-2.6,0.53v-0.53H33.3v0.53 c-0.45-0.4-1.07-0.53-1.76-0.53h-15.1l-1.01,2.34l-1.04-2.34H9.62v1.07L9.1,21.27H5.04l-1.88,4.32L3.16,30.35L3.16,30.35z"/> <path class="st1" d="M58.51,35.15h-2.84c-0.28,0-0.47,0.01-0.63,0.12c-0.16,0.11-0.23,0.26-0.23,0.47c0,0.25,0.14,0.41,0.34,0.49 c0.16,0.06,0.34,0.07,0.6,0.07l0.84,0.02c0.85,0.02,1.42,0.17,1.77,0.52c0.06,0.05,0.1,0.11,0.14,0.16 M58.51,39.44 c-0.38,0.55-1.11,0.83-2.11,0.83h-3v-1.4h2.99c0.3,0,0.5-0.04,0.63-0.16c0.11-0.1,0.18-0.25,0.18-0.42c0-0.19-0.08-0.34-0.19-0.43 c-0.11-0.1-0.28-0.14-0.55-0.14c-1.46-0.05-3.28,0.05-3.28-2.01c0-0.94,0.6-1.94,2.23-1.94h3.1v-1.3h-2.88 c-0.87,0-1.5,0.21-1.95,0.53v-0.53h-4.26c-0.68,0-1.48,0.17-1.86,0.53v-0.53h-7.61V33c-0.61-0.44-1.63-0.53-2.1-0.53h-5.02V33 c-0.48-0.46-1.54-0.53-2.19-0.53h-5.61l-1.28,1.39l-1.2-1.39h-8.39v9.08h8.23l1.32-1.41l1.25,1.41l5.07,0v-2.14h0.5 c0.67,0.01,1.47-0.02,2.17-0.32v2.45h4.18v-2.37h0.2c0.26,0,0.28,0.01,0.28,0.27v2.1h12.71c0.81,0,1.65-0.21,2.12-0.58v0.58h4.03 c0.84,0,1.66-0.12,2.28-0.42V39.44L58.51,39.44z M52.31,36.84c0.3,0.31,0.47,0.71,0.47,1.38c0,1.4-0.87,2.05-2.44,2.05H47.3v-1.4 h3.02c0.3,0,0.5-0.04,0.64-0.16c0.11-0.1,0.18-0.25,0.18-0.42c0-0.19-0.08-0.34-0.19-0.43c-0.12-0.1-0.28-0.14-0.55-0.14 c-1.45-0.05-3.28,0.05-3.28-2.01c0-0.94,0.59-1.94,2.22-1.94h3.12v1.39H49.6c-0.28,0-0.47,0.01-0.62,0.12 c-0.17,0.11-0.23,0.26-0.23,0.47c0,0.25,0.14,0.41,0.34,0.49c0.16,0.06,0.34,0.07,0.61,0.07l0.84,0.02 C51.37,36.34,51.95,36.48,52.31,36.84z M38.27,36.44c-0.21,0.12-0.47,0.13-0.77,0.13h-1.89v-1.46h1.92c0.28,0,0.55,0.01,0.74,0.12 c0.2,0.11,0.32,0.31,0.32,0.59C38.59,36.09,38.47,36.32,38.27,36.44z M39.21,37.25c0.35,0.13,0.63,0.36,0.76,0.55 c0.22,0.32,0.25,0.61,0.26,1.19v1.29h-1.56v-0.81c0-0.39,0.04-0.97-0.25-1.27c-0.23-0.23-0.57-0.29-1.14-0.29h-1.66v2.38h-1.56 v-6.51h3.59c0.79,0,1.36,0.03,1.87,0.31c0.49,0.3,0.8,0.7,0.8,1.45C40.31,36.56,39.62,37.09,39.21,37.25z M41.17,33.76h5.19v1.35 h-3.64v1.18h3.55v1.33h-3.55v1.3l3.64,0.01v1.35h-5.19V33.76z M30.68,36.77h-2.01v-1.66h2.03c0.56,0,0.95,0.23,0.95,0.8 C31.65,36.47,31.27,36.77,30.68,36.77z M27.12,39.68l-2.39-2.65l2.39-2.57V39.68z M20.95,38.92h-3.83v-1.3h3.42v-1.33h-3.42v-1.18 h3.9l1.7,1.9L20.95,38.92z M33.32,35.91c0,1.81-1.35,2.18-2.71,2.18h-1.94v2.18h-3.02l-1.92-2.16l-1.99,2.16h-6.16v-6.51h6.26 l1.91,2.13l1.98-2.13h4.97C31.93,33.76,33.32,34.11,33.32,35.91z"/> <path d="M55.2,11.07H6.8c-3.2,0-5.8,2.6-5.8,5.8v28.26c0,3.2,2.6,5.8,5.8,5.8h48.4c3.2,0,5.8-2.6,5.8-5.8V16.87 C61,13.67,58.4,11.07,55.2,11.07z M58.4,45.13c0,1.76-1.44,3.2-3.2,3.2H6.8c-1.76,0-3.2-1.44-3.2-3.2V16.87 c0-1.76,1.44-3.2,3.2-3.2h48.4c1.76,0,3.2,1.44,3.2,3.2V45.13z"/> </g> </svg> ';
var iconmaestro = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 62 62" style="enable-background:new 0 0 62 62;" xml:space="preserve"><title>Maestro Card</title> <style type="text/css"> .st0{fill:#0072CE;}.st1{fill:#FFFFFF;}.st2{fill:#005CA8;}.st3{fill:#F6A723;}.st4{fill-rule:evenodd;clip-rule:evenodd;fill:#1D1D1B;}.st5{fill:#FF5F00;}.st6{fill:#EB001B;}.st7{fill:#F79E1B;}.st8{fill:#6C6BBD;}.st9{fill:#D32011;}.st10{fill:#0099DF;}.st11{fill:#110F0D;}</style> <g id="Grid"> </g> <g id="Artwork"> <path class="st1" d="M54.48,11.67H7.52c-3.1,0-5.62,2.52-5.62,5.62v27.41c0,3.1,2.52,5.62,5.62,5.62h46.95 c3.1,0,5.62-2.52,5.62-5.62V17.29C60.1,14.19,57.58,11.67,54.48,11.67z"/> <path d="M55.2,11.07H6.8c-3.2,0-5.8,2.6-5.8,5.8v28.26c0,3.2,2.6,5.8,5.8,5.8h48.4c3.2,0,5.8-2.6,5.8-5.8V16.87 C61,13.67,58.4,11.07,55.2,11.07z M58.4,45.13c0,1.76-1.44,3.2-3.2,3.2H6.8c-1.76,0-3.2-1.44-3.2-3.2V16.87 c0-1.76,1.44-3.2,3.2-3.2h48.4c1.76,0,3.2,1.44,3.2,3.2V45.13z"/> <g> <rect x="25.88" y="18.5" class="st8" width="10.25" height="18.41"/> <path class="st9" d="M26.53,27.71c0-3.74,1.75-7.06,4.47-9.21c-1.99-1.57-4.51-2.5-7.24-2.5c-6.47,0-11.71,5.24-11.71,11.71 s5.24,11.71,11.71,11.71c2.73,0,5.25-0.94,7.24-2.5C28.28,34.77,26.53,31.45,26.53,27.71"/> <path class="st10" d="M49.95,27.71c0,6.47-5.24,11.71-11.71,11.71c-2.73,0-5.25-0.94-7.24-2.5c2.72-2.14,4.47-5.47,4.47-9.21 c0-3.74-1.75-7.06-4.47-9.21c1.99-1.57,4.51-2.5,7.24-2.5C44.7,16,49.95,21.24,49.95,27.71"/> <path class="st11" d="M39.59,42.12c0.14,0,0.33,0.03,0.48,0.08l-0.21,0.64c-0.14-0.06-0.29-0.08-0.42-0.08 c-0.44,0-0.66,0.29-0.66,0.8v1.74H38.1V42.2h0.67v0.38C38.95,42.3,39.2,42.12,39.59,42.12z M37.09,42.82h-1.11v1.4 c0,0.31,0.11,0.52,0.45,0.52c0.18,0,0.4-0.06,0.6-0.18l0.2,0.58c-0.21,0.15-0.55,0.24-0.85,0.24c-0.8,0-1.08-0.43-1.08-1.15v-1.42 h-0.63V42.2h0.63v-0.94h0.68v0.94h1.11V42.82z M28.43,43.48c0.07-0.45,0.34-0.75,0.83-0.75c0.44,0,0.72,0.27,0.79,0.75H28.43z M30.75,43.75c-0.01-0.97-0.61-1.63-1.48-1.63c-0.91,0-1.55,0.66-1.55,1.63c0,0.99,0.66,1.63,1.59,1.63c0.47,0,0.9-0.12,1.27-0.44 l-0.33-0.5c-0.26,0.21-0.59,0.33-0.9,0.33c-0.44,0-0.83-0.2-0.93-0.76h2.31C30.74,43.93,30.75,43.84,30.75,43.75z M33.72,42.99 c-0.19-0.12-0.57-0.27-0.97-0.27c-0.37,0-0.59,0.14-0.59,0.36c0,0.21,0.23,0.27,0.53,0.31L33,43.44c0.68,0.1,1.09,0.38,1.09,0.93 c0,0.59-0.52,1.01-1.42,1.01c-0.51,0-0.98-0.13-1.35-0.4l0.32-0.53c0.23,0.18,0.57,0.33,1.03,0.33c0.46,0,0.71-0.14,0.71-0.38 c0-0.17-0.18-0.27-0.55-0.32l-0.32-0.05c-0.7-0.1-1.07-0.41-1.07-0.92c0-0.62,0.51-1,1.29-1c0.49,0,0.94,0.11,1.27,0.33 L33.72,42.99z M42.06,42.76c-0.14,0-0.27,0.02-0.39,0.07c-0.12,0.05-0.22,0.12-0.31,0.21c-0.09,0.09-0.16,0.19-0.21,0.32 c-0.05,0.12-0.07,0.26-0.07,0.41c0,0.15,0.02,0.28,0.07,0.41c0.05,0.12,0.12,0.23,0.21,0.32c0.09,0.09,0.19,0.16,0.31,0.21 c0.12,0.05,0.25,0.07,0.39,0.07s0.27-0.02,0.39-0.07c0.12-0.05,0.22-0.12,0.31-0.21c0.09-0.09,0.16-0.19,0.21-0.32 c0.05-0.12,0.07-0.26,0.07-0.41c0-0.15-0.02-0.28-0.07-0.41c-0.05-0.12-0.12-0.23-0.21-0.32c-0.09-0.09-0.19-0.16-0.31-0.21 C42.33,42.79,42.2,42.76,42.06,42.76z M42.06,42.12c0.24,0,0.46,0.04,0.67,0.13c0.21,0.08,0.38,0.2,0.53,0.35 c0.15,0.15,0.27,0.32,0.35,0.52c0.08,0.2,0.13,0.42,0.13,0.65c0,0.23-0.04,0.45-0.13,0.65c-0.08,0.2-0.2,0.37-0.35,0.52 c-0.15,0.15-0.33,0.26-0.53,0.35c-0.21,0.08-0.43,0.13-0.67,0.13s-0.46-0.04-0.67-0.13c-0.21-0.08-0.38-0.2-0.53-0.35 c-0.15-0.15-0.27-0.32-0.35-0.52c-0.08-0.2-0.13-0.42-0.13-0.65c0-0.23,0.04-0.45,0.13-0.65c0.08-0.2,0.2-0.37,0.35-0.52 c0.15-0.15,0.33-0.26,0.53-0.35C41.6,42.16,41.82,42.12,42.06,42.12z M24.48,43.75c0-0.55,0.36-1,0.94-1c0.56,0,0.94,0.43,0.94,1 s-0.38,0.99-0.94,0.99C24.84,44.75,24.48,44.3,24.48,43.75z M27,43.75V42.2h-0.68v0.38c-0.22-0.28-0.54-0.46-0.98-0.46 c-0.87,0-1.55,0.68-1.55,1.63c0,0.95,0.68,1.63,1.55,1.63c0.44,0,0.77-0.18,0.98-0.46v0.38H27V43.75z M23.19,45.31v-1.95 c0-0.73-0.47-1.23-1.22-1.24c-0.4-0.01-0.81,0.12-1.09,0.55c-0.21-0.34-0.55-0.55-1.03-0.55c-0.33,0-0.66,0.1-0.91,0.46V42.2 h-0.68v3.11h0.68v-1.72c0-0.54,0.3-0.83,0.76-0.83c0.45,0,0.68,0.29,0.68,0.82v1.73h0.68v-1.72c0-0.54,0.31-0.83,0.76-0.83 c0.46,0,0.68,0.29,0.68,0.82v1.73H23.19z"/> </g> </g> </svg> ';
var iconmastercard = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 62 62" style="enable-background:new 0 0 62 62;" xml:space="preserve"><title>Master Card</title> <style type="text/css"> .st0{fill:#0072CE;}.st1{fill:#FFFFFF;}.st2{fill:#005CA8;}.st3{fill:#F6A723;}.st4{fill-rule:evenodd;clip-rule:evenodd;fill:#1D1D1B;}.st5{fill:#FF5F00;}.st6{fill:#EB001B;}.st7{fill:#F79E1B;}.st8{fill:#6C6BBD;}.st9{fill:#D32011;}.st10{fill:#0099DF;}.st11{fill:#110F0D;}</style> <g id="Grid"> </g> <g id="Artwork"> <path class="st1" d="M54.48,11.67H7.52c-3.1,0-5.62,2.52-5.62,5.62v27.41c0,3.1,2.52,5.62,5.62,5.62h46.95 c3.1,0,5.62-2.52,5.62-5.62V17.29C60.1,14.19,57.58,11.67,54.48,11.67z"/> <path d="M55.2,11.07H6.8c-3.2,0-5.8,2.6-5.8,5.8v28.26c0,3.2,2.6,5.8,5.8,5.8h48.4c3.2,0,5.8-2.6,5.8-5.8V16.87 C61,13.67,58.4,11.07,55.2,11.07z M58.4,45.13c0,1.76-1.44,3.2-3.2,3.2H6.8c-1.76,0-3.2-1.44-3.2-3.2V16.87 c0-1.76,1.44-3.2,3.2-3.2h48.4c1.76,0,3.2,1.44,3.2,3.2V45.13z"/> <g> <path d="M18.92,45.41v-1.96c0-0.75-0.46-1.24-1.24-1.24c-0.39,0-0.82,0.13-1.11,0.55c-0.23-0.36-0.55-0.55-1.04-0.55 c-0.33,0-0.65,0.1-0.91,0.46v-0.39h-0.68v3.13h0.68v-1.73c0-0.55,0.29-0.82,0.75-0.82c0.46,0,0.68,0.29,0.68,0.82v1.73h0.68v-1.73 c0-0.55,0.33-0.82,0.75-0.82c0.46,0,0.68,0.29,0.68,0.82v1.73H18.92L18.92,45.41z M29.06,42.28h-1.11v-0.95h-0.68v0.95h-0.62v0.62 h0.62v1.43c0,0.72,0.29,1.14,1.08,1.14c0.29,0,0.62-0.1,0.85-0.23l-0.2-0.59c-0.2,0.13-0.42,0.16-0.59,0.16 c-0.33,0-0.46-0.2-0.46-0.52v-1.4h1.11V42.28L29.06,42.28z M34.86,42.21c-0.39,0-0.65,0.2-0.82,0.46v-0.39h-0.68v3.13h0.68v-1.76 c0-0.52,0.23-0.82,0.65-0.82c0.13,0,0.29,0.03,0.42,0.07l0.2-0.65C35.19,42.21,34.99,42.21,34.86,42.21L34.86,42.21L34.86,42.21z M26.09,42.54c-0.33-0.23-0.78-0.33-1.27-0.33c-0.78,0-1.3,0.39-1.3,1.01c0,0.52,0.39,0.82,1.08,0.91l0.33,0.03 c0.36,0.07,0.55,0.16,0.55,0.33c0,0.23-0.26,0.39-0.72,0.39c-0.46,0-0.82-0.16-1.04-0.33l-0.33,0.52 c0.36,0.26,0.85,0.39,1.34,0.39c0.91,0,1.43-0.42,1.43-1.01c0-0.55-0.42-0.85-1.08-0.95l-0.33-0.03c-0.29-0.03-0.52-0.1-0.52-0.29 c0-0.23,0.23-0.36,0.59-0.36c0.39,0,0.78,0.16,0.98,0.26L26.09,42.54L26.09,42.54z M44.29,42.21c-0.39,0-0.65,0.2-0.82,0.46v-0.39 h-0.68v3.13h0.68v-1.76c0-0.52,0.23-0.82,0.65-0.82c0.13,0,0.29,0.03,0.42,0.07l0.2-0.65C44.61,42.21,44.42,42.21,44.29,42.21 L44.29,42.21L44.29,42.21z M35.55,43.84c0,0.95,0.65,1.63,1.66,1.63c0.46,0,0.78-0.1,1.11-0.36l-0.33-0.55 c-0.26,0.2-0.52,0.29-0.82,0.29c-0.55,0-0.95-0.39-0.95-1.01c0-0.59,0.39-0.98,0.95-1.01c0.29,0,0.55,0.1,0.82,0.29l0.33-0.55 c-0.33-0.26-0.65-0.36-1.11-0.36C36.2,42.21,35.55,42.9,35.55,43.84L35.55,43.84L35.55,43.84z M41.87,43.84v-1.56h-0.68v0.39 c-0.23-0.29-0.55-0.46-0.98-0.46c-0.88,0-1.56,0.68-1.56,1.63s0.68,1.63,1.56,1.63c0.46,0,0.78-0.16,0.98-0.46v0.39h0.68V43.84z M39.36,43.84c0-0.55,0.36-1.01,0.95-1.01c0.55,0,0.95,0.42,0.95,1.01c0,0.55-0.39,1.01-0.95,1.01 C39.72,44.82,39.36,44.4,39.36,43.84L39.36,43.84z M31.18,42.21c-0.91,0-1.56,0.65-1.56,1.63s0.65,1.63,1.6,1.63 c0.46,0,0.91-0.13,1.27-0.42l-0.33-0.49c-0.26,0.2-0.59,0.33-0.91,0.33c-0.42,0-0.85-0.2-0.95-0.75h2.31v-0.26 C32.65,42.86,32.06,42.21,31.18,42.21L31.18,42.21L31.18,42.21z M31.18,42.8c0.42,0,0.72,0.26,0.78,0.75h-1.63 C30.4,43.13,30.69,42.8,31.18,42.8L31.18,42.8z M48.17,43.84v-2.8h-0.68v1.63c-0.23-0.29-0.55-0.46-0.98-0.46 c-0.88,0-1.56,0.68-1.56,1.63s0.68,1.63,1.56,1.63c0.46,0,0.78-0.16,0.98-0.46v0.39h0.68V43.84z M45.65,43.84 c0-0.55,0.36-1.01,0.95-1.01c0.55,0,0.95,0.42,0.95,1.01c0,0.55-0.39,1.01-0.95,1.01C46.01,44.82,45.65,44.4,45.65,43.84 L45.65,43.84z M22.77,43.84v-1.56h-0.68v0.39c-0.23-0.29-0.55-0.46-0.98-0.46c-0.88,0-1.56,0.68-1.56,1.63s0.68,1.63,1.56,1.63 c0.46,0,0.78-0.16,0.98-0.46v0.39h0.68V43.84z M20.22,43.84c0-0.55,0.36-1.01,0.95-1.01c0.55,0,0.95,0.42,0.95,1.01 c0,0.55-0.39,1.01-0.95,1.01C20.58,44.82,20.22,44.4,20.22,43.84z"/> <rect x="25.87" y="18.51" class="st5" width="10.27" height="18.45"/> <path class="st6" d="M26.52,27.74c0-3.75,1.76-7.07,4.47-9.23c-1.99-1.56-4.5-2.51-7.24-2.51c-6.49,0-11.74,5.25-11.74,11.74 s5.25,11.74,11.74,11.74c2.74,0,5.25-0.95,7.24-2.51C28.28,34.84,26.52,31.49,26.52,27.74z"/> <path class="st7" d="M49.99,27.74c0,6.49-5.25,11.74-11.74,11.74c-2.74,0-5.25-0.95-7.24-2.51c2.74-2.15,4.47-5.48,4.47-9.23 s-1.76-7.07-4.47-9.23c1.99-1.56,4.5-2.51,7.24-2.51C44.74,16,49.99,21.28,49.99,27.74z"/> </g> </g> </svg> ';
var iconvisa = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 62 62" style="enable-background:new 0 0 62 62;" xml:space="preserve"><title>Visa Card</title> <style type="text/css"> .st0{fill:#0072CE;}.st1{fill:#FFFFFF;}.st2{fill:#005CA8;}.st3{fill:#F6A723;}.st4{fill-rule:evenodd;clip-rule:evenodd;fill:#1D1D1B;}.st5{fill:#FF5F00;}.st6{fill:#EB001B;}.st7{fill:#F79E1B;}.st8{fill:#6C6BBD;}.st9{fill:#D32011;}.st10{fill:#0099DF;}.st11{fill:#110F0D;}</style> <g id="Grid"> </g> <g id="Artwork"> <path class="st1" d="M54.48,11.67H7.52c-3.1,0-5.62,2.52-5.62,5.62v27.41c0,3.1,2.52,5.62,5.62,5.62h46.95 c3.1,0,5.62-2.52,5.62-5.62V17.29C60.1,14.19,57.58,11.67,54.48,11.67z"/> <path d="M55.2,11.07H6.8c-3.2,0-5.8,2.6-5.8,5.8v28.26c0,3.2,2.6,5.8,5.8,5.8h48.4c3.2,0,5.8-2.6,5.8-5.8V16.87 C61,13.67,58.4,11.07,55.2,11.07z M58.4,45.13c0,1.76-1.44,3.2-3.2,3.2H6.8c-1.76,0-3.2-1.44-3.2-3.2V16.87 c0-1.76,1.44-3.2,3.2-3.2h48.4c1.76,0,3.2,1.44,3.2,3.2V45.13z"/> <g> <g> <polygon class="st2" points="27.29,38.78 23.24,38.78 25.77,23.23 29.82,23.23 "/> <path class="st2" d="M19.84,23.23l-3.86,10.69l-0.46-2.3l0,0l-1.36-6.99c0,0-0.16-1.4-1.92-1.4H5.86l-0.07,0.26 c0,0,1.95,0.41,4.23,1.78l3.52,13.51h4.22l6.44-15.55H19.84z"/> <path class="st2" d="M51.67,38.78h3.72l-3.24-15.55h-3.25c-1.5,0-1.87,1.16-1.87,1.16l-6.04,14.39h4.22l0.84-2.31h5.15 L51.67,38.78z M47.22,33.28l2.13-5.82l1.2,5.82H47.22z"/> <path class="st2" d="M41.31,26.97l0.58-3.34c0,0-1.78-0.68-3.64-0.68c-2.01,0-6.78,0.88-6.78,5.15c0,4.02,5.6,4.07,5.6,6.18 s-5.02,1.73-6.68,0.4l-0.6,3.49c0,0,1.81,0.88,4.57,0.88c2.76,0,6.93-1.43,6.93-5.32c0-4.04-5.65-4.42-5.65-6.18 C35.63,25.79,39.57,26.02,41.31,26.97z"/> </g> <path class="st3" d="M15.52,31.62l-1.36-6.99c0,0-0.16-1.4-1.92-1.4H5.86l-0.07,0.26c0,0,3.07,0.64,6.01,3.02 C14.6,28.79,15.52,31.62,15.52,31.62z"/> </g> </g> </svg> ';
var iconvisadebit = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 62 62" style="enable-background:new 0 0 62 62;" xml:space="preserve"><title>VisaDebit Card</title> <style type="text/css"> .st0{fill:#0072CE;}.st1{fill:#FFFFFF;}.st2{fill:#005CA8;}.st3{fill:#F6A723;}.st4{fill-rule:evenodd;clip-rule:evenodd;fill:#1D1D1B;}.st5{fill:#FF5F00;}.st6{fill:#EB001B;}.st7{fill:#F79E1B;}.st8{fill:#6C6BBD;}.st9{fill:#D32011;}.st10{fill:#0099DF;}.st11{fill:#110F0D;}</style> <g id="Grid"> </g> <g id="Artwork"> <path class="st1" d="M54.48,11.67H7.52c-3.1,0-5.62,2.52-5.62,5.62v27.41c0,3.1,2.52,5.62,5.62,5.62h46.95 c3.1,0,5.62-2.52,5.62-5.62V17.29C60.1,14.19,57.58,11.67,54.48,11.67z"/> <path d="M55.2,11.07H6.8c-3.2,0-5.8,2.6-5.8,5.8v28.26c0,3.2,2.6,5.8,5.8,5.8h48.4c3.2,0,5.8-2.6,5.8-5.8V16.87 C61,13.67,58.4,11.07,55.2,11.07z M58.4,45.13c0,1.76-1.44,3.2-3.2,3.2H6.8c-1.76,0-3.2-1.44-3.2-3.2V16.87 c0-1.76,1.44-3.2,3.2-3.2h48.4c1.76,0,3.2,1.44,3.2,3.2V45.13z"/> <g> <g> <polygon class="st2" points="27.29,34.78 23.24,34.78 25.77,19.23 29.82,19.23 "/> <path class="st2" d="M19.84,19.23l-3.86,10.69l-0.46-2.3l0,0l-1.36-6.99c0,0-0.16-1.4-1.92-1.4H5.86l-0.07,0.26 c0,0,1.95,0.41,4.23,1.78l3.52,13.51h4.22l6.44-15.55H19.84z"/> <path class="st2" d="M51.67,34.78h3.72l-3.24-15.55h-3.25c-1.5,0-1.87,1.16-1.87,1.16l-6.04,14.39h4.22l0.84-2.31h5.15 L51.67,34.78z M47.22,29.28l2.13-5.82l1.2,5.82H47.22z"/> <path class="st2" d="M41.31,22.97l0.58-3.34c0,0-1.78-0.68-3.64-0.68c-2.01,0-6.78,0.88-6.78,5.15c0,4.02,5.6,4.07,5.6,6.18 s-5.02,1.73-6.68,0.4l-0.6,3.49c0,0,1.81,0.88,4.57,0.88c2.76,0,6.93-1.43,6.93-5.32c0-4.04-5.65-4.42-5.65-6.18 C35.63,21.79,39.57,22.02,41.31,22.97z"/> </g> <path class="st3" d="M15.52,27.62l-1.36-6.99c0,0-0.16-1.4-1.92-1.4H5.86l-0.07,0.26c0,0,3.07,0.64,6.01,3.02 C14.6,24.79,15.52,27.62,15.52,27.62z"/> </g> <g> <path class="st4" d="M20.93,43.66c0.04-0.44,0.69-4.5,0.78-4.71c0.76-0.11,1.79,0.07,2.2,0.48c0.26,0.26,0.35,0.45,0.42,0.92 c0.18,1.14-0.17,2.26-1.09,2.89C22.58,43.68,21.82,43.67,20.93,43.66L20.93,43.66z M20.03,44.33c1.2-0.03,2.51,0.15,3.48-0.41 c2.13-1.23,2.11-4.23,0.85-5.16c-0.86-0.63-2.08-0.55-3.29-0.55c-0.1,0.06-0.04-0.04-0.09,0.14c-0.01,0.04-0.02,0.14-0.03,0.19 C20.67,40.28,20.21,42.72,20.03,44.33L20.03,44.33z"/> <path class="st4" d="M31.26,41.5c0.46,0.02,1.08-0.02,1.44,0.18c0.3,0.17,0.55,0.62,0.43,1.1c-0.22,0.91-1.24,0.93-2.23,0.93 L31.26,41.5L31.26,41.5z M31.39,40.84c0.04-0.38,0.1-0.76,0.14-1.14c0.11-0.91,0.03-0.78,0.48-0.78c0.39,0,0.82,0.01,1.08,0.25 C33.66,39.68,33.34,40.98,31.39,40.84L31.39,40.84z M33.11,41.16c0.39-0.27,0.61-0.33,0.87-0.91c0.2-0.45,0.17-1.05-0.09-1.42 c-0.52-0.72-2.05-0.68-2.9-0.61l-0.97,6.11c1.42,0.03,3.27,0.21,3.81-1.19C34.13,42.37,33.87,41.6,33.11,41.16L33.11,41.16z"/> <path class="st4" d="M29.92,38.22l-3.07-0.01c-0.15,0.61-0.9,5.41-0.97,6.11c0.66,0,2.64,0.08,3.15-0.07l0.12-0.6l-2.37-0.01 l0.27-1.63c0.11-0.63-0.19-0.47,1.93-0.45l-0.01-0.77l-1.74-0.01l0.3-1.81l2.24-0.02L29.92,38.22L29.92,38.22z"/> <path class="st4" d="M37.45,38.96l1.84,0.01l-0.84,5.39l0.79-0.05c0.13-0.88,0.3-1.79,0.44-2.68c0.14-0.89,0.26-1.82,0.45-2.67 l1.85-0.01l-0.01-0.72c-0.59-0.07-1.58-0.01-2.21-0.01c-0.65-0.01-1.52-0.04-2.15,0.03L37.45,38.96L37.45,38.96z"/> <path class="st4" d="M35.55,44.33c0.09-0.22,0.22-1.2,0.27-1.51c0.22-1.3,0.59-3.46,0.72-4.63l-0.83,0.07l-0.93,6.07L35.55,44.33 L35.55,44.33z"/> </g> </g> </svg> ';
var basket_added = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Basket Added</title> <style type="text/css"> .st0{fill:none;stroke:#FF00FF;stroke-width:2;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:#FF00FF;}.st2{display:none;}.st3{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st4{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st5{fill:#FFFFFF;}.st6{stroke:#FFFFFF;stroke-miterlimit:10;}.st7{fill:none;}.st8{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st9{fill:#FF0000;}.st10{fill-rule:evenodd;clip-rule:evenodd;}.st11{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}</style> <g id="Guides"> </g> <g id="Layer_3" class="st2"> </g> <g id="Layer_1"> <path d="M21.29,9.16h-7.87l4.93-5.87c0.25-0.3,0.21-0.75-0.09-1.01c-0.3-0.25-0.75-0.21-1.01,0.09l-5.51,6.57 C11.68,9,11.65,9.08,11.62,9.16h-8.9C2.32,9.16,2,9.48,2,9.87s0.32,0.71,0.71,0.71h18.57c0.4,0,0.71-0.32,0.71-0.71 S21.68,9.16,21.29,9.16z"/> <path d="M19.97,12.02c-0.39-0.06-0.76,0.2-0.82,0.59l-0.97,5.83l0,0l-0.36,2.14H14.7H9.3H6.18l-0.36-2.14l0,0l-0.97-5.83 c-0.06-0.39-0.43-0.65-0.82-0.59c-0.39,0.06-0.65,0.43-0.59,0.82l1.43,8.57c0.06,0.34,0.36,0.6,0.7,0.6h12.86 c0.35,0,0.65-0.25,0.7-0.6l1.43-8.57C20.63,12.46,20.36,12.09,19.97,12.02z"/> <path id="Fill-7" class="st10" d="M10.39,19.69c-0.18,0-0.37-0.07-0.51-0.21l-2.63-2.56c-0.31-0.3-0.32-0.8-0.04-1.12 c0.28-0.32,0.76-0.34,1.07-0.04l2.1,2.04l5.34-5.58c0.3-0.31,0.77-0.31,1.07,0c0.29,0.31,0.29,0.81,0,1.12l-5.86,6.11 C10.77,19.61,10.58,19.69,10.39,19.69"/> </g> <g id="Layer_4" class="st2"> </g> <g id="Layer_5" class="st2"> </g> <g id="Layer_6"> </g> </svg> ';
var play_button = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Play Button</title> <style type="text/css"> .st0{fill:none;stroke:#FF00FF;stroke-width:2;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:#FF00FF;}.st2{display:none;}.st3{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st4{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st5{fill:#FFFFFF;}.st6{stroke:#FFFFFF;stroke-miterlimit:10;}.st7{fill:none;}.st8{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st9{fill:#FF0000;}.st10{fill-rule:evenodd;clip-rule:evenodd;}.st11{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}</style> <g id="Guides"> </g> <g id="Layer_3" class="st2"> </g> <g id="Layer_1"> <g> <path d="M9.74,15.93l6.02-3.48c0.16-0.09,0.26-0.26,0.26-0.45c0-0.19-0.1-0.36-0.26-0.45L9.74,8.07C9.59,7.98,9.4,7.98,9.25,8.07 C9.09,8.17,9,8.34,9,8.52v6.95c0,0.18,0.09,0.35,0.25,0.45c0.08,0.05,0.17,0.07,0.25,0.07C9.58,15.99,9.67,15.97,9.74,15.93z"/> <g> <path d="M12,3.6c4.63,0,8.4,3.77,8.4,8.4s-3.77,8.4-8.4,8.4S3.6,16.63,3.6,12S7.37,3.6,12,3.6 M12,2C6.48,2,2,6.48,2,12 s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2L12,2z"/> </g> </g> </g> <g id="Layer_4" class="st2"> </g> <g id="Layer_5" class="st2"> </g> <g id="Layer_6"> </g> </svg> ';
var basket_empty = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Basket Empty</title> <style type="text/css"> .st0{fill:none;stroke:#FF00FF;stroke-width:2;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:#FF00FF;}.st2{display:none;}.st3{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st4{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st5{fill:#FFFFFF;}.st6{stroke:#FFFFFF;stroke-miterlimit:10;}.st7{fill:none;}.st8{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st9{fill:#FF0000;}.st10{fill-rule:evenodd;clip-rule:evenodd;}.st11{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}</style> <g id="Guides"> </g> <g id="Layer_3" class="st2"> </g> <g id="Layer_1"> <path d="M21.29,9.16h-7.87l4.93-5.87c0.25-0.3,0.21-0.75-0.09-1.01c-0.3-0.25-0.75-0.21-1.01,0.09l-5.51,6.57 C11.68,9,11.65,9.08,11.62,9.16h-8.9C2.32,9.16,2,9.48,2,9.87s0.32,0.71,0.71,0.71h18.57c0.4,0,0.71-0.32,0.71-0.71 S21.68,9.16,21.29,9.16z"/> <path d="M19.97,12.02c-0.39-0.06-0.76,0.2-0.82,0.59l-0.14,0.83h-3.12l0.1-0.6c0.07-0.39-0.2-0.76-0.59-0.82 c-0.39-0.06-0.76,0.2-0.82,0.59l-0.14,0.83H9.56L9.42,12.6c-0.06-0.39-0.43-0.65-0.82-0.59c-0.39,0.06-0.65,0.43-0.59,0.82 l0.1,0.61H4.99l-0.14-0.83c-0.06-0.39-0.43-0.65-0.82-0.59c-0.39,0.06-0.65,0.43-0.59,0.82l1.43,8.57c0.06,0.34,0.36,0.6,0.7,0.6 h12.86c0.35,0,0.65-0.25,0.7-0.6l1.43-8.57C20.63,12.46,20.36,12.09,19.97,12.02z M14.2,14.87l-0.36,2.14h-3.69L9.8,14.87H14.2z M5.22,14.87h3.13l0.36,2.14H5.58L5.22,14.87z M5.82,18.44h3.13l0.36,2.14H6.18L5.82,18.44z M10.74,20.59l0.01-0.01l-0.35-2.13 h3.22l-0.36,2.14H10.74z M17.82,20.59H14.7l0.36-2.14h3.12L17.82,20.59z M18.42,17.01H15.3l0.36-2.14h3.12L18.42,17.01z"/> </g> <g id="Layer_4" class="st2"> </g> <g id="Layer_5" class="st2"> </g> <g id="Layer_6"> </g> </svg> ';
var bills = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Bills</title> <style type="text/css"> .st0{fill:none;stroke:#FF00FF;stroke-width:2;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:#FF00FF;}.st2{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st3{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st4{fill:#FFFFFF;}.st5{stroke:#FFFFFF;stroke-miterlimit:10;}.st6{fill:none;}.st7{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}</style> <g id="Guides"> </g> <g id="Layer_3"> </g> <g id="Layer_1"> <path d="M14,2H6C4.9,2,4,2.9,4,4l0,16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M9,8H6V7h3V8z M11,6H6V5h5V6z M16,16v1h-2v1h3v1 h-4l0-2h-1v-1h1l0-1.7c0.4-1,1.9-1.3,2.2-1.3c0,0,0,0,0,0c0.9,0,1.5,0.6,1.7,0.9L17,14l0,1l-1,0l0-0.6c-0.2-0.2-0.4-0.4-0.8-0.4 c-0.2,0-1,0.3-1.2,0.6V16H16z M13,9V3.5L18.5,9H13z"/> </g> </svg> ';
var chat_conversation = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>SpeechBubble/Black/30</title> <g id="SpeechBubble/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M3,11 L3,25.308 L5.552,22.347 C5.742,22.127 6.019,22 6.31,22 L21,22 L21,11 L3,11 Z M2,29 C1.883,29 1.766,28.979 1.651,28.937 C1.26,28.792 1,28.418 1,28 L1,10 C1,9.448 1.447,9 2,9 L22,9 C22.553,9 23,9.448 23,10 L23,23 C23,23.553 22.553,24 22,24 L6.768,24 L2.758,28.653 C2.563,28.878 2.285,29 2,29 Z" id="Fill-1" fill="#2B2B2B"></path> <path d="M9,16 C9,16.553 8.553,17 8,17 C7.447,17 7,16.553 7,16 C7,15.448 7.447,15 8,15 C8.553,15 9,15.448 9,16" id="Fill-3" fill="#2B2B2B"></path> <path d="M13,16 C13,16.553 12.553,17 12,17 C11.447,17 11,16.553 11,16 C11,15.448 11.447,15 12,15 C12.553,15 13,15.448 13,16" id="Fill-5" fill="#2B2B2B"></path> <path d="M17,16 C17,16.553 16.553,17 16,17 C15.447,17 15,16.553 15,16 C15,15.448 15.447,15 16,15 C16.553,15 17,15.448 17,16" id="Fill-7" fill="#2B2B2B"></path> <path d="M28,18 L25,18 C24.447,18 24,17.553 24,17 C24,16.447 24.447,16 25,16 L27,16 L27,4 L10,4 L10,7 C10,7.552 9.553,8 9,8 C8.447,8 8,7.552 8,7 L8,3 C8,2.448 8.447,2 9,2 L28,2 C28.553,2 29,2.448 29,3 L29,17 C29,17.553 28.553,18 28,18" id="Fill-9" fill="#2B2B2B"></path> </g> </svg>';
var myaccount = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>MyAccount</title> <style type="text/css"> .st0{fill:none;stroke:#FF00FF;stroke-width:2;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:#FF00FF;}.st2{display:none;}.st3{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st4{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st5{fill:#FFFFFF;}.st6{stroke:#FFFFFF;stroke-miterlimit:10;}.st7{fill:none;}.st8{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}.st9{fill:#FF0000;}.st10{fill-rule:evenodd;clip-rule:evenodd;}</style> <g id="Guides"> </g> <g id="Layer_3" class="st2"> </g> <g id="Layer_1"> <circle id="My_account__x28_head_x29_" cx="12" cy="9" r="3.5"/> <path id="My_account__x28_body_x29_" d="M5,18c0,0,2.88-3.5,7-3.5s7,3.5,7,3.5s-2.04,3.39-7,3.25S5,18,5,18z"/> <g> <path d="M12,6c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,6,12,6 M12,5C9.79,5,8,6.79,8,9s1.79,4,4,4s4-1.79,4-4 S14.21,5,12,5L12,5z"/> <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,3.6c4.63,0,8.4,3.77,8.4,8.4 c0,1.86-0.62,3.58-1.65,4.97C17.07,15.15,14.68,14,12,14c-2.68,0-5.08,1.15-6.76,2.97C4.22,15.58,3.6,13.86,3.6,12 C3.6,7.37,7.37,3.6,12,3.6z M12,20.4c-2.41,0-4.57-1.02-6.11-2.65C7.4,16.07,9.57,15,12,15c2.43,0,4.6,1.07,6.1,2.75 C16.57,19.38,14.41,20.4,12,20.4z"/> </g> </g> <g id="Layer_4" class="st2"> </g> <g id="Layer_5" class="st2"> </g> <g id="Layer_6"> </g> </svg> ';
var reduce = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink"> <title>Minus/Circle/Line/Black/30</title> <g id="Minus/Circle/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M22,16 L8,16 C7.447,16 7,15.552 7,15 C7,14.448 7.447,14 8,14 L22,14 C22.553,14 23,14.448 23,15 C23,15.552 22.553,16 22,16" id="Fill-1" fill="#2B2B2B"></path> <path d="M15,1 C7.268,1 1,7.268 1,15 C1,22.732 7.268,29 15,29 C22.732,29 29,22.732 29,15 C29,7.268 22.732,1 15,1 M15,3 C21.617,3 27,8.383 27,15 C27,21.617 21.617,27 15,27 C8.383,27 3,21.617 3,15 C3,8.383 8.383,3 15,3" id="Fill-5" fill="#2B2B2B"></path> </g> </svg>';
var rewards_gifts = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Rewards Gifts</title> <style type="text/css"> .st0{fill:none;stroke:#FF00FF;stroke-width:2;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:#FF00FF;}.st2{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st3{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st4{fill:#FFFFFF;}.st5{stroke:#FFFFFF;stroke-miterlimit:10;}.st6{fill:none;}.st7{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}</style> <g id="Guides"> </g> <g id="Layer_3"> </g> <g id="Layer_1"> <path d="M22.7,6.7L19,10.4V21H5V10.4L1.3,6.7l1.4-1.4L7,9.6V19h10V9.6l4.3-4.3L22.7,6.7z M7.8,13l2.3,2l-0.7,3l2.6-1.6l2.6,1.6 l-0.7-3l2.3-2l-3-0.3L12,10l-1.2,2.8L7.8,13z M5.3,5.1c0.6,0.6,1.2,0.5,1.6,0.4c0.3,0,0.3,0,0.4,0c0,0,0,0.1,0,0.4 c0,0.4-0.1,1,0.4,1.6C8.2,8.1,8.9,8,9.3,7.9c0.3,0,0.3,0,0.4,0c0,0,0,0.1,0,0.4c0,0.4-0.1,1,0.4,1.6l1.1-1.1c0,0,0-0.1,0-0.4 c0-0.4,0.1-1-0.4-1.6S9.5,6.4,9.1,6.5c-0.3,0-0.3,0-0.4,0c0,0,0-0.1,0-0.4c0-0.4,0.1-1-0.4-1.6S7.1,4,6.7,4.1c-0.3,0-0.3,0-0.4,0 c0,0,0-0.1,0-0.4c0-0.4,0.1-1-0.4-1.6L4.9,3.1c0,0,0,0.1,0,0.4C4.8,3.9,4.7,4.6,5.3,5.1z M12.8,8.8l1.1,1.1 c0.6-0.6,0.5-1.2,0.4-1.6c0-0.3,0-0.3,0-0.4c0,0,0.1,0,0.4,0c0.4,0,1,0.1,1.6-0.4c0.6-0.6,0.5-1.2,0.4-1.6c0-0.3,0-0.3,0-0.4 s0.1,0,0.4,0c0.4,0,1,0.1,1.6-0.4c0.6-0.6,0.5-1.2,0.4-1.6c0-0.3,0-0.3,0-0.4l-1.1-1.1c-0.6,0.6-0.5,1.2-0.4,1.6c0,0.3,0,0.3,0,0.4 c0,0-0.1,0-0.4,0c-0.4,0-1-0.1-1.6,0.4c-0.6,0.6-0.5,1.2-0.4,1.6c0,0.3,0,0.3,0,0.4c0,0-0.1,0-0.4,0c-0.4,0-1-0.1-1.6,0.4 c-0.4,0.4-0.5,0.8-0.5,1.2c0,0.2,0,0.3,0,0.4C12.9,8.8,12.9,8.8,12.8,8.8z"/> </g> </svg> ';
var top_up = '<svg version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Topup</title> <style type="text/css"> .st0{fill:none;stroke:#FF00FF;stroke-width:2;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:#FF00FF;}.st2{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}.st3{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}.st4{fill:#FFFFFF;}.st5{stroke:#FFFFFF;stroke-miterlimit:10;}.st6{fill:none;}.st7{fill:none;stroke:#000000;stroke-width:0.6662;stroke-miterlimit:10;}</style> <g id="Guides"> </g> <g id="Layer_3"> </g> <g id="Layer_1"> <path d="M15,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V7L15,2z M13,12v2h-3c0,1,0,2,0,3h6v2H8l0-1c0-1.7,0-3,0-4 H7v-2h1c0-1.9,0-2.1,0-2.1c0.3-1.6,2.1-3.3,4.4-3.2c1.9,0.1,3.1,1.4,3.4,1.8L16,8.7l0,2.3l-2,0l0-1.6c-0.3-0.3-0.9-0.7-1.7-0.8 c-1.2,0-2.2,0.9-2.3,1.6c0,0.1,0,0.8,0,1.8H13z"/> </g> </svg> ';
var three_logo = '<svg version="1.1" id="Layer_1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" x="0px" y="0px" viewBox="0 0 283.5 362.3" style="enable-background:new 0 0 283.5 362.3;" xml:space="preserve"><title>Three</title> <style type="text/css"> .st0{fill:none;}.st1{fill:#F7BC63;}.st2{fill:#FFFFFF;}</style> <pattern x="-158.9" y="628.4" width="69" height="69" patternUnits="userSpaceOnUse" id="Unnamed_Pattern" viewBox="2.1 -70.9 69 69" style="overflow:visible;"> <g> <rect x="2.1" y="-70.9" class="st0" width="69" height="69"/> <rect x="2.1" y="-70.9" class="st1" width="69" height="69"/> <g> <path class="st2" d="M61.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-71.7,61.8-71.7,61.8-71.7 C61.8-71.6,61.8-71.6,61.8-71.7"/> <path class="st2" d="M54.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-71.7,54.1-71.7,54.1-71.7 C54.1-71.6,54.1-71.6,54.1-71.7"/> <path class="st2" d="M46.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.4-71.7,46.4-71.7,46.4-71.7 C46.4-71.6,46.4-71.6,46.4-71.7"/> <path class="st2" d="M38.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-71.7,38.8-71.7,38.8-71.7 C38.8-71.6,38.8-71.6,38.8-71.7"/> <path class="st2" d="M31.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-71.7,31.1-71.7,31.1-71.7 C31.1-71.6,31.1-71.6,31.1-71.7"/> <path class="st2" d="M23.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.4-71.7,23.4-71.7,23.4-71.7 C23.4-71.6,23.4-71.6,23.4-71.7"/> <path class="st2" d="M15.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-71.7,15.8-71.7,15.8-71.7 C15.8-71.6,15.8-71.6,15.8-71.7"/> <path class="st2" d="M8.1-71.7c0,0.1,0,0.1,0,0.2C8-71.4,8-71.4,7.9-71.3c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.1-71.7,8.1-71.7,8.1-71.7 C8.1-71.6,8.1-71.6,8.1-71.7"/> <path class="st2" d="M0.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.8-69.4,1-69,1.2-68.9c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.4-71.7,0.4-71.7,0.4-71.7 C0.4-71.6,0.4-71.6,0.4-71.7"/> </g> <g> <path class="st2" d="M69.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-71.7,69.4-71.7,69.4-71.7 C69.4-71.6,69.4-71.6,69.4-71.7"/> </g> <path class="st2" d="M0.5-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-69.4,1-69,1.3-68.9c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1 c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3 c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8c-0.2,0-0.3,0.1-0.4,0.2 c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-71.7,0.5-71.7,0.5-71.7C0.5-71.6,0.5-71.6,0.5-71.7"/> <g> <g> <path class="st2" d="M69.4-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-64,69.4-64.1,69.4-64C69.4-64,69.4-64,69.4-64"/> <path class="st2" d="M61.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-64,61.8-64.1,61.8-64C61.8-64,61.8-64,61.8-64"/> <path class="st2" d="M54.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-64,54.1-64.1,54.1-64C54.1-64,54.1-64,54.1-64"/> <path class="st2" d="M46.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-64,46.5-64.1,46.5-64C46.5-64,46.5-64,46.5-64"/> <path class="st2" d="M38.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-64,38.8-64.1,38.8-64C38.8-64,38.8-64,38.8-64"/> <path class="st2" d="M31.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-64,31.1-64.1,31.1-64C31.1-64,31.1-64,31.1-64"/> <path class="st2" d="M23.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-64,23.5-64.1,23.5-64C23.5-64,23.5-64,23.5-64"/> <path class="st2" d="M15.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-64,15.8-64.1,15.8-64C15.8-64,15.8-64,15.8-64"/> <path class="st2" d="M8.2-64c0,0.1,0,0.1,0,0.2C8.1-63.7,8-63.7,8-63.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-62.2,8.2-62,8.3-61.9c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-64,8.2-64.1,8.2-64C8.1-64,8.1-64,8.2-64"/> <path class="st2" d="M0.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-62,3-61.9,3.1-62c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-64,0.5-64.1,0.5-64C0.5-64,0.5-64,0.5-64"/> </g> <g> <path class="st2" d="M69.4-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-56.4,69.4-56.4,69.4-56.3 C69.4-56.3,69.4-56.3,69.4-56.3"/> <path class="st2" d="M61.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-56.4,61.8-56.4,61.8-56.3 C61.8-56.3,61.8-56.3,61.8-56.3"/> <path class="st2" d="M54.1-56.3c0,0.1,0,0.1,0,0.2C54-56.1,54-56.1,53.9-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-56.4,54.1-56.4,54.1-56.3 C54.1-56.3,54.1-56.3,54.1-56.3"/> <path class="st2" d="M46.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-56.4,46.5-56.4,46.5-56.3 C46.5-56.3,46.5-56.3,46.5-56.3"/> <path class="st2" d="M38.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-56.4,38.8-56.4,38.8-56.3 C38.8-56.3,38.8-56.3,38.8-56.3"/> <path class="st2" d="M31.1-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-56.4,31.1-56.4,31.1-56.3 C31.1-56.3,31.1-56.3,31.1-56.3"/> <path class="st2" d="M23.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-56.4,23.5-56.4,23.5-56.3 C23.5-56.3,23.5-56.3,23.5-56.3"/> <path class="st2" d="M15.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-56.4,15.8-56.4,15.8-56.3 C15.8-56.3,15.8-56.3,15.8-56.3"/> <path class="st2" d="M8.2-56.3c0,0.1,0,0.1,0,0.2C8.1-56.1,8-56.1,8-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-56.4,8.2-56.4,8.2-56.3 C8.1-56.3,8.1-56.3,8.2-56.3"/> <path class="st2" d="M0.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-56.4,0.5-56.4,0.5-56.3 C0.5-56.3,0.5-56.3,0.5-56.3"/> </g> <g> <path class="st2" d="M69.4-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-48.7,69.4-48.8,69.4-48.7 C69.4-48.7,69.4-48.7,69.4-48.7"/> <path class="st2" d="M61.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-48.7,61.8-48.8,61.8-48.7 C61.8-48.7,61.8-48.7,61.8-48.7"/> <path class="st2" d="M54.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-48.7,54.1-48.8,54.1-48.7 C54.1-48.7,54.1-48.7,54.1-48.7"/> <path class="st2" d="M46.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-48.7,46.5-48.8,46.5-48.7 C46.5-48.7,46.5-48.7,46.5-48.7"/> <path class="st2" d="M38.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-48.7,38.8-48.8,38.8-48.7 C38.8-48.7,38.8-48.7,38.8-48.7"/> <path class="st2" d="M31.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-48.7,31.1-48.8,31.1-48.7 C31.1-48.7,31.1-48.7,31.1-48.7"/> <path class="st2" d="M23.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-48.7,23.5-48.8,23.5-48.7 C23.5-48.7,23.5-48.7,23.5-48.7"/> <path class="st2" d="M15.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-48.7,15.8-48.8,15.8-48.7 C15.8-48.7,15.8-48.7,15.8-48.7"/> <path class="st2" d="M8.2-48.7c0,0.1,0,0.1,0,0.2C8.1-48.4,8-48.4,8-48.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C8.5-46.4,8.7-46,8.9-46c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-48.7,8.2-48.8,8.2-48.7 C8.1-48.7,8.1-48.7,8.2-48.7"/> <path class="st2" d="M0.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-46.4,1-46,1.3-46c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1 c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3 c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8c-0.2,0-0.3,0.1-0.4,0.2 c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-48.7,0.5-48.8,0.5-48.7C0.5-48.7,0.5-48.7,0.5-48.7"/> </g> <g> <path class="st2" d="M69.4-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-41.1,69.4-41.1,69.4-41C69.4-41,69.4-41,69.4-41 "/> <path class="st2" d="M61.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-41.1,61.8-41.1,61.8-41C61.8-41,61.8-41,61.8-41 "/> <path class="st2" d="M54.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-41.1,54.1-41.1,54.1-41C54.1-41,54.1-41,54.1-41 "/> <path class="st2" d="M46.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-41.1,46.5-41.1,46.5-41C46.5-41,46.5-41,46.5-41 "/> <path class="st2" d="M38.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-41.1,38.8-41.1,38.8-41C38.8-41,38.8-41,38.8-41 "/> <path class="st2" d="M31.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-41.1,31.1-41.1,31.1-41C31.1-41,31.1-41,31.1-41 "/> <path class="st2" d="M23.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-41.1,23.5-41.1,23.5-41C23.5-41,23.5-41,23.5-41 "/> <path class="st2" d="M15.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-41.1,15.8-41.1,15.8-41C15.8-41,15.8-41,15.8-41 "/> <path class="st2" d="M8.2-41c0,0.1,0,0.1,0,0.2C8.1-40.8,8-40.8,8-40.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-41.1,8.2-41.1,8.2-41C8.1-41,8.1-41,8.2-41"/> <path class="st2" d="M0.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-39,3-39,3.1-39c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-41.1,0.5-41.1,0.5-41C0.5-41,0.5-41,0.5-41"/> </g> <g> <path class="st2" d="M69.4-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-33.4,69.4-33.5,69.4-33.4 C69.4-33.4,69.4-33.4,69.4-33.4"/> <path class="st2" d="M61.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-33.4,61.8-33.5,61.8-33.4 C61.8-33.4,61.8-33.4,61.8-33.4"/> <path class="st2" d="M54.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-33.4,54.1-33.5,54.1-33.4 C54.1-33.4,54.1-33.4,54.1-33.4"/> <path class="st2" d="M46.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-33.4,46.5-33.5,46.5-33.4 C46.5-33.4,46.5-33.4,46.5-33.4"/> <path class="st2" d="M38.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-33.4,38.8-33.5,38.8-33.4 C38.8-33.4,38.8-33.4,38.8-33.4"/> <path class="st2" d="M31.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-33.4,31.1-33.5,31.1-33.4 C31.1-33.4,31.1-33.4,31.1-33.4"/> <path class="st2" d="M23.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-33.4,23.5-33.5,23.5-33.4 C23.5-33.4,23.5-33.4,23.5-33.4"/> <path class="st2" d="M15.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-33.4,15.8-33.5,15.8-33.4 C15.8-33.4,15.8-33.4,15.8-33.4"/> <path class="st2" d="M8.2-33.4c0,0.1,0,0.1,0,0.2C8.1-33.1,8-33.1,8-33.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-33.4,8.2-33.5,8.2-33.4 C8.1-33.4,8.1-33.4,8.2-33.4"/> <path class="st2" d="M0.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-33.4,0.5-33.5,0.5-33.4 C0.5-33.4,0.5-33.4,0.5-33.4"/> </g> <g> <path class="st2" d="M69.4-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-25.8,69.4-25.8,69.4-25.7 C69.4-25.7,69.4-25.7,69.4-25.7"/> <path class="st2" d="M61.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-25.8,61.8-25.8,61.8-25.7 C61.8-25.7,61.8-25.7,61.8-25.7"/> <path class="st2" d="M54.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-25.8,54.1-25.8,54.1-25.7 C54.1-25.7,54.1-25.7,54.1-25.7"/> <path class="st2" d="M46.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-25.8,46.5-25.8,46.5-25.7 C46.5-25.7,46.5-25.7,46.5-25.7"/> <path class="st2" d="M38.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-25.8,38.8-25.8,38.8-25.7 C38.8-25.7,38.8-25.7,38.8-25.7"/> <path class="st2" d="M31.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-25.8,31.1-25.8,31.1-25.7 C31.1-25.7,31.1-25.7,31.1-25.7"/> <path class="st2" d="M23.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-25.8,23.5-25.8,23.5-25.7 C23.5-25.7,23.5-25.7,23.5-25.7"/> <path class="st2" d="M15.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-25.8,15.8-25.8,15.8-25.7 C15.8-25.7,15.8-25.7,15.8-25.7"/> <path class="st2" d="M8.2-25.7c0,0.1,0,0.1,0,0.2C8.1-25.4,8-25.5,8-25.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-24,8.2-23.8,8.3-23.6c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-25.8,8.2-25.8,8.2-25.7 C8.1-25.7,8.1-25.7,8.2-25.7"/> <path class="st2" d="M0.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-23.5,1-23.1,1.3-23c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-25.8,0.5-25.8,0.5-25.7 C0.5-25.7,0.5-25.7,0.5-25.7"/> </g> <g> <path class="st2" d="M69.4-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-18.1,69.4-18.2,69.4-18.1 C69.4-18,69.4-18.1,69.4-18.1"/> <path class="st2" d="M61.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-18.1,61.8-18.2,61.8-18.1 C61.8-18,61.8-18.1,61.8-18.1"/> <path class="st2" d="M54.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-18.1,54.1-18.2,54.1-18.1 C54.1-18,54.1-18.1,54.1-18.1"/> <path class="st2" d="M46.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-18.1,46.5-18.2,46.5-18.1 C46.5-18,46.5-18.1,46.5-18.1"/> <path class="st2" d="M38.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-18.1,38.8-18.2,38.8-18.1 C38.8-18,38.8-18.1,38.8-18.1"/> <path class="st2" d="M31.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-18.1,31.1-18.2,31.1-18.1 C31.1-18,31.1-18.1,31.1-18.1"/> <path class="st2" d="M23.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-18.1,23.5-18.2,23.5-18.1 C23.5-18,23.5-18.1,23.5-18.1"/> <path class="st2" d="M15.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-18.1,15.8-18.2,15.8-18.1 C15.8-18,15.8-18.1,15.8-18.1"/> <path class="st2" d="M8.2-18.1c0,0.1,0,0.1,0,0.2C8.1-17.8,8-17.8,8-17.8c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-16.3,8.2-16.1,8.3-16c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-18.1,8.2-18.2,8.2-18.1C8.1-18,8.1-18.1,8.2-18.1 "/> <path class="st2" d="M0.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-16.1,3-16,3.1-16c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-18.1,0.5-18.2,0.5-18.1C0.5-18,0.5-18.1,0.5-18.1 "/> </g> <g> <path class="st2" d="M69.4-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-10.5,69.4-10.5,69.4-10.4 C69.4-10.4,69.4-10.4,69.4-10.4"/> <path class="st2" d="M61.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1C63.9-8,63.8-8.2,64-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-10.5,61.8-10.5,61.8-10.4 C61.8-10.4,61.8-10.4,61.8-10.4"/> <path class="st2" d="M54.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-10.5,54.1-10.5,54.1-10.4 C54.1-10.4,54.1-10.4,54.1-10.4"/> <path class="st2" d="M46.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-10.5,46.5-10.5,46.5-10.4 C46.5-10.4,46.5-10.4,46.5-10.4"/> <path class="st2" d="M38.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1C40.9-8,40.8-8.2,41-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-10.5,38.8-10.5,38.8-10.4 C38.8-10.4,38.8-10.4,38.8-10.4"/> <path class="st2" d="M31.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-10.5,31.1-10.5,31.1-10.4 C31.1-10.4,31.1-10.4,31.1-10.4"/> <path class="st2" d="M23.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-10.5,23.5-10.5,23.5-10.4 C23.5-10.4,23.5-10.4,23.5-10.4"/> <path class="st2" d="M15.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1C17.9-8,17.8-8.2,18-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-10.5,15.8-10.5,15.8-10.4 C15.8-10.4,15.8-10.4,15.8-10.4"/> <path class="st2" d="M8.2-10.4c0,0.1,0,0.1,0,0.2C8.1-10.1,8-10.2,8-10.1C7.9-10,7.9-9.8,7.9-9.8c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-8.7,8.2-8.5,8.3-8.3c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-10.5,8.2-10.5,8.2-10.4 C8.1-10.4,8.1-10.4,8.2-10.4"/> <path class="st2" d="M0.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1C0.3-10,0.2-9.8,0.2-9.8c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-8.2,1-7.8,1.3-7.7c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1C2.6-8,2.5-8.2,2.7-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-10.5,0.5-10.5,0.5-10.4 C0.5-10.4,0.5-10.4,0.5-10.4"/> </g> </g> <g> <path class="st2" d="M69.4-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C69.8-0.5,70-0.1,70.2,0c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-2.8,69.4-2.9,69.4-2.8 C69.4-2.7,69.4-2.8,69.4-2.8"/> <path class="st2" d="M61.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C61.6-1,61.8-0.8,62-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-2.8,61.8-2.9,61.8-2.8 C61.8-2.7,61.8-2.8,61.8-2.8"/> <path class="st2" d="M54.1-2.8c0,0.1,0,0.1,0,0.2C54-2.5,54-2.5,53.9-2.5c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C54-1,54.1-0.8,54.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C56.9-0.8,57-1,57.1-1.2c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-2.8,54.1-2.9,54.1-2.8 C54.1-2.7,54.1-2.8,54.1-2.8"/> <path class="st2" d="M46.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C46.8-0.5,47-0.1,47.2,0c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-2.8,46.5-2.9,46.5-2.8 C46.5-2.7,46.5-2.8,46.5-2.8"/> <path class="st2" d="M38.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C38.6-1,38.8-0.8,39-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-2.8,38.8-2.9,38.8-2.8 C38.8-2.7,38.8-2.8,38.8-2.8"/> <path class="st2" d="M31.1-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C31-1,31.1-0.8,31.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-2.8,31.1-2.9,31.1-2.8 C31.1-2.7,31.1-2.8,31.1-2.8"/> <path class="st2" d="M23.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C23.8-0.5,24-0.1,24.3,0c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-2.8,23.5-2.9,23.5-2.8 C23.5-2.7,23.5-2.8,23.5-2.8"/> <path class="st2" d="M15.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C15.7-1,15.8-0.8,16-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1 c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8 c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-2.8,15.8-2.9,15.8-2.8 C15.8-2.7,15.8-2.8,15.8-2.8"/> <path class="st2" d="M8.2-2.8c0,0.1,0,0.1,0,0.2C8.1-2.5,8-2.5,8-2.5C7.9-2.4,7.9-2.2,7.9-2.1c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-1,8.2-0.8,8.3-0.7C8.5-0.5,8.7-0.1,8.9,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1 c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3 c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C9-3.5,8.8-3.4,8.7-3.4 C8.5-3.3,8.6-3.2,8.4-3.1C8.3-3.1,8.2-3,8.2-2.9C8.2-2.8,8.2-2.9,8.2-2.8C8.1-2.7,8.1-2.8,8.2-2.8"/> <path class="st2" d="M0.5-2.8c0,0.1,0,0.1,0,0.2C0.4-2.5,0.4-2.5,0.3-2.5C0.3-2.4,0.2-2.2,0.2-2.1c-0.2,0.1,0,0.2,0,0.3 c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C0.3-1,0.5-0.8,0.7-0.7C0.9-0.5,1-0.1,1.3,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1 c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C3.3-0.8,3.4-1,3.5-1.2c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3 c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C1.3-3.5,1.2-3.4,1-3.4 C0.9-3.3,0.9-3.2,0.7-3.1C0.6-3.1,0.5-3,0.5-2.9C0.5-2.8,0.5-2.9,0.5-2.8C0.5-2.7,0.5-2.8,0.5-2.8"/> </g> </g> </pattern> <g> <g> <g> <path d="M236.2,151.5c-3-2.2-6.5-4.8-8-6.3c0.8-1.5,2.3-3.7,3.7-5.6c7.8-11.3,22.5-32.8,22.5-63.4c0-17.6-6.4-36.7-21.9-51.3 C217,10.2,192.5,0,156.6,0C122.5,0,84.2,11.2,51,30.8c-14.9,8.8-27.1,18.3-35.7,27.4C6.8,67.3,1.9,76.1,1.8,83.6 c0,3.6,1.4,7,4,9.6c4.8,4.8,13.4,7,24.4,8.2c11,1.1,24.3,1.2,38.7,1.2h2.6c22.2,0,37.8,0.6,47.9,2.1c5,0.7,8.6,1.7,10.8,2.8 c2.3,1.2,3,2.3,3,3.5c0,0.5-0.6,1.7-1.9,3c-4.8,4.8-17.4,11.9-28.7,19.7c-5.7,3.9-11,8-15,12.2c-4,4.2-6.7,8.5-6.7,12.9l0,0v0.2 l0,0c0.1,5.6,3,10.2,7.6,13.7c13.7,10.5,42.2,13.3,57.1,16c9.2,1.7,14.1,4.9,16.7,8.5c2.6,3.6,3.1,7.6,3.1,11 c0,12.8-4.7,24-13.2,31.7c-7.6,6.9-16.7,11.4-29.9,11.5c-0.5,0-1,0-1.6,0c0.3-2.5,0.5-5,0.5-7.5c0-15-5.9-27.6-15.9-36.3 c-10-8.7-24.1-13.6-40.5-13.6c-20.2,0-36.4,8.4-47.5,20.8C6,227.4,0,243.8,0,260c0,25.5,11.8,51.1,34.7,70.3 c22.9,19.2,57,32,101.6,32c35.4,0,71-11.7,98-32c22.4-16.8,49.1-47.6,49.1-97.9C283.5,186.3,252.5,163.5,236.2,151.5L236.2,151.5 z M95.4,154.8c4.9-4.9,15.1-11.9,22.8-16.8c7.5-4.8,14.2-9.1,19.1-13.4c4.9-4.3,8.1-8.7,8.1-13.7c0-4-1.5-7.6-4.4-10.5 c-5.2-5.1-14.4-7.5-25.9-8.8c-11.5-1.3-25.3-1.3-39.6-1.3c-1.3,0-2.6,0-3.9,0c-11.8,0-21.2-0.2-28.7-0.5 c10.4-4.1,22.5-10.5,35.7-17.5c21.3-11.4,45-24.1,67.3-29.7c-5.1,5.8-8.5,12.5-8.5,18.2c0,1.4,0.4,2.9,1.5,4.1 c1.1,1.2,2.8,1.9,5.1,1.9c4,0,8.4-1.5,13.5-3.2c7-2.3,15-4.9,23.9-4.9c7.7,0,16.1,2,25,7.9c-5.9,0.4-10.7,2.1-13.8,4.5 c-3.3,2.5-4.1,5.4-4.1,7.4c0,3.3,2.3,5.7,5.2,9c4.6,5.2,10.6,11.9,10.6,22.8c0,8-3,16.4-7.6,22.8c0-0.5,0-0.9,0-1.4 c0-5.5-1.2-11.8-4.3-15.3c-1.8-2.1-4.3-3.3-7-3.2c-4.7,0-8.7,3.6-14.7,8.5c-4.3,3.5-9.5,8-16.2,12.2 c-28.1,17.7-43.2,24.6-53.9,25.4C96.5,159.7,90.6,159.6,95.4,154.8z M121.2,263.2c15.8,0,29-4.8,39.2-14.2 c10.9-9.9,17.1-24.8,17.1-40.7c0-7.6-2.4-14-6.8-18.9c23.6,5.6,48.1,17.7,61.7,36c-6.1-2-10.4-2.5-14.7-2.5 c-4.4,0.1-7.9,4.6-7.9,9.9c0,2.8,1,5.9,2.3,9.8c2,6,4.5,13.8,4.5,23.2c0,8.6-2.1,18.5-8.9,29.5c-0.2-8.9-2.6-16-5.7-19.8 c-2.4-2.9-5-3.7-6.7-3.7c-2.8,0-5,1.4-6.8,3.5c-1.8,2.1-3.4,5-5.2,8.3c-6.5,11.6-16.7,30.2-48.7,39.8c2.9-5,4.4-10.1,4.4-14.2 c0-1.6-0.2-3.1-0.8-4.3c-1-2.4-3.1-3.9-5.5-3.9c0,0-0.1,0-0.1,0c-3.5,0.1-7.6,1.2-12.3,2.6c-7.4,2.1-16.3,4.6-26.1,4.6 c-10.2,0-21.3-2.7-32.7-11.3c4-0.6,7.5-2,10-4.2c2.1-1.8,3.4-4.1,3.4-6.6c-0.1-3.7-3-6.3-6.3-9.4c-4.9-4.6-10.7-10-10.7-19.2 c0-2.6,0.5-5.6,1.6-9c1,2.9,2.6,5.5,4.5,7.7c3,3.2,6.6,5.2,10,5.2c3.7,0,5.8-1.7,6.8-3.9c1-2.2,0.9-4.7,0.9-6.7 c0-2.3,1-4.4,2.7-6c1.7-1.6,4-2.6,6.3-2.6c5.4,0,9.4,3,12.3,7.5c2.8,4.5,4.3,10.4,4.3,16c0,3.5-0.6,6.8-1.7,9.5l-1.2,3l2.5-2 c4.8-3.7,8.6-9,10.3-12.9C118.6,263.1,119.9,263.2,121.2,263.2z M16.7,87.2c-1.7-1-2.7-2-2.7-3.6c0-4.3,4.1-11.3,11.8-18.9 c22.9-22.9,75.9-52.5,130.8-52.5c27.8,0,50.4,6.9,65.4,19.7c13,11.1,20.2,26.8,20.2,44.3c0,26.9-12.7,45.4-20.4,56.6 c-3.9,5.7-6.3,9-6.3,12.8c0,3,1.4,5.5,3.8,7.9c2.3,2.4,5.6,4.8,9.7,7.8c16,11.8,42.3,31.2,42.3,71.1c0,45.4-24,72.9-44.2,88.2 c-24.9,18.8-58,29.5-90.8,29.5c-81.8,0-124.1-45.5-124.1-90.1c0-13.2,4.9-26.7,14-36.9c9-10.2,22.1-17,38.6-17h0 c9.2,0,20.8,2.1,30,8.3c9.2,6.2,16.1,16.2,16.1,32.5c0,0.5,0,1,0,1.4c-0.8-1.8-2-3.9-3.6-5.8c-3.3-4.1-8.6-7.7-16.4-7.7 c-8.8,0-16.3,7.2-16.3,15.8c0,1.6-0.2,2.6-0.4,3.1c-0.1,0.2-0.1,0.3-0.2,0.3c-2.1,0-4.7-1.5-6.7-4.4c-2.1-3-3.6-7.3-3.6-12.9 c0-1.1,0.1-2.3,0.2-3.5l0.3-2.6l-1.8,2c-8.3,9.2-11.3,17.5-11.3,24.7c0,11.7,7.9,20.1,12.6,24.5c0.9,0.8,1.9,1.8,2.7,2.6 c0.4,0.4,0.8,0.8,1,1.1c0.1,0.2,0.2,0.3,0.3,0.4c0,0,0,0.1,0,0.1c-0.1,0.4-0.9,1.6-3.1,2.4c-2.4,1-6.1,1.8-11.5,1.8 c-1.9,0-3.9-0.1-6.2-0.3l-2.1-0.2l1.3,1.6c15.7,18.7,33,23.8,48,23.8c11.1,0,20.9-2.8,28-4.7c3-0.9,6.4-2.1,8.2-2.1 c0.8,0,1.1,0.2,1.2,0.4c0.2,0.2,0.3,0.7,0.3,1.4c0,2.2-1.3,6.1-3.4,10.2c-2.1,4.1-5.1,8.3-8.4,11.3l-2,1.8l2.7-0.3 c45.8-5.9,61-32.4,68.6-46.1c1.2-2.3,2.4-4.4,3.5-5.9c1-1.5,2.1-2.3,2.3-2.2c0.4,0,1.1,0.4,1.9,1.5c2.3,3.3,4.1,11.7,4.1,20.4 c0,3.8-0.3,7.6-1.1,11.2l-0.6,2.7l2-1.9c17.3-16,22-32.8,22-46.8c0-10.7-2.8-19.8-4.7-25.7c-1.1-3.3-1.9-6.2-1.9-7.5 c0-1.2,0.2-1.8,0.4-2.1c0.2-0.3,0.6-0.5,1.3-0.7c7.3,0,16,2.6,26.4,7.6l2,1l-0.9-2.1c-14.1-33-45.5-47.2-76.1-54.9 c-15.3-3.9-30.5-6.1-43.2-8.3c-9.3-1.6-17.3-3.2-23.1-5.3c-1-0.4-1.9-0.9-2.9-1.3c17.5-2.2,38.6-14.5,57.3-26.5 c7-4.5,12.5-9.1,16.9-12.7c2.3-1.9,4.4-3.6,6.2-4.9c1.8-1.3,3.3-2,4-2c0.6,0,1.2,0.3,1.7,0.9c1.7,1.9,2.7,7,2.7,12.6 c0,4.5-0.6,9.3-1.7,13.2l-0.6,2.2l1.9-1.2c14.9-9.6,22-24.1,22-37.6c0-13.6-7.6-22.1-12.4-27.6c-0.7-0.8-1.6-1.8-2.3-2.7 c-0.6-0.7-1-1.4-1.1-1.6c0.1-0.3,0.5-1.1,1.3-1.6c3.1-2.3,8.4-3.8,14.6-3.8c3.1,0,6.5,0.4,9.9,1.2l2.3,0.5l-1.5-1.9 c-12.8-16.4-27.5-21.2-40.6-21.2c-10.3,0-19.7,2.9-26.5,5.1c-3.3,1.1-7.9,2.5-9.9,2.5c-0.2,0-0.4,0-0.5,0c0-2.4,1.8-6.4,5.1-10.7 c3.4-4.4,8.3-9.1,14.7-12.9l2.3-1.4L164,34c-1.2-0.1-2.4-0.1-3.6-0.1C134,33.9,100.1,53,75,66C59.4,74,26.5,93.1,16.7,87.2z"/> </g> </g> </g> </svg> ';
var accountfilled = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve" ><title>Account/Filled/Black/30</title><g id="Guides"></g><g id="THE_ICONS"><path id="My_account__x28_body_x29__5_" d="M4,16.97c0,0,2.88-3.5,7-3.5s7,3.5,7,3.5s-2.04,3.39-7,3.25C6.04,20.09,4,16.97,4,16.97z"/><circle id="My_account__x28_head_x29__5_" cx="11" cy="7.97" r="3.5"/><g><path d="M11,5c1.66,0,3,1.34,3,3s-1.34,3-3,3S8,9.66,8,8S9.34,5,11,5 M11,4C8.79,4,7,5.79,7,8s1.79,4,4,4s4-1.79,4-4S13.21,4,11,4z"/><path d="M11,1C5.48,1,1,5.48,1,11s4.48,10,10,10s10-4.48,10-10S16.52,1,11,1z M11,2.6c4.63-0.02,8.4,3.71,8.42,8.34c0.01,1.82-0.58,3.6-1.67,5.06c-3.41-3.74-9.21-4.01-12.95-0.59c-0.02,0.01-0.03,0.03-0.05,0.04C4.56,15.62,4.38,15.81,4.2,16c-2.77-3.72-2-8.97,1.72-11.74C7.39,3.17,9.17,2.58,11,2.6z M11,19.4c-2.32,0-4.53-0.96-6.11-2.65c2.97-3.38,8.12-3.72,11.5-0.75c0.25,0.22,0.49,0.46,0.71,0.71C15.53,18.41,13.32,19.39,11,19.4z"/></g></g><g id="Layer_3" class="st12"></g><g id="Layer_4" class="st12"></g><g id="Layer_5" class="st12"></g></svg>';
var arrowdowncirclefill = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><title>ArrowDownCircleFill/Line/Black/30</title><desc>Created with Sketch.</desc><defs></defs><style type="text/css">.iadcst12{display:none;}</style><g id="Guides"></g><g id="THE_ICONS"><path d="M11,1C5.48,1,1,5.48,1,11c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10C21,5.48,16.52,1,11,1z M11,15.67L4.34,9.75l1.33-1.49L11,13l5.34-4.74l1.33,1.49L11,15.67z"/></g><g id="Layer_3" class="iadcst12"></g><g id="Layer_4" class="iadcst12"></g><g id="Layer_5" class="iadcst12"></g></svg>';
var arrowupcirclefill = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><title>ArrowUpCircleFill/Line/Black/30</title><desc>Created with Sketch.</desc><defs></defs><style type="text/css">.aufst12{display:none;}</style><g id="Guides"></g><g id="THE_ICONS"><path d="M11,1C5.48,1,1,5.48,1,11c0,5.52,4.48,10,10,10s10-4.48,10-10C21,5.48,16.52,1,11,1z M16.34,14.08L11,9.34l-5.34,4.74l-1.33-1.49L11,6.66l6.66,5.92L16.34,14.08z"/></g><g id="Layer_3" class="aufst12"></g><g id="Layer_4" class="aufst12"></g><g id="Layer_5" class="aufst12"></g></svg>';
var iconpluscirclefill = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><title>PlusCircleFill/Line/Black/30</title><desc>Created with Sketch.</desc><defs></defs><style type="text/css">.pfst12{display:none;}</style><g id="Guides"></g><g id="THE_ICONS"><path d="M11,1C5.48,1,1,5.48,1,11s4.48,10,10,10s10-4.48,10-10S16.52,1,11,1z M17,12h-5v5h-2v-5H5v-2h5V5h2v5h5V12z"/></g><g id="Layer_3" class="pfst12"></g><g id="Layer_4" class="pfst12"></g><g id="Layer_5" class="pfst12"></g></svg>';
var iconminuscirclefill = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><title>PlusCircleFill/Line/Black/30</title><desc>Created with Sketch.</desc><defs></defs><style type="text/css">.st12{display:none;}</style><g id="Guides"></g><g id="THE_ICONS"><path d="M11,1C5.48,1,1,5.48,1,11c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10C21,5.48,16.52,1,11,1z M17,12H5v-2h12V12z"/></g><g id="Layer_3" class="st12"></g><g id="Layer_4" class="st12"></g><g id="Layer_5" class="st12"></g></svg>';
var iconcalendar = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve" width="30px" height="30px"><style type="text/css">.iccst12{display:none;}</style><g id="Guides"></g><g id="THE_ICONS"><path d="M18,3h-2V1h-2v2H8V1H6v2H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C20,3.9,19.1,3,18,3z M18,19H4V9h14V19z M8,13H6v-2h2V13z M12,11h-2v2h2V11z M16,11h-2v2h2V11z M8,15H6v2h2V15z M12,15h-2v2h2V15z M16,15h-2v2h2V15z"/></g><g id="Layer_3" class="iccst12"></g><g id="Layer_4" class="iccst12"></g><g id="Layer_5" class="iccst12"></g></svg>';
var filterarrowdown = '<svg width="20px" height="20px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">ArrowDown/Line/Black/30Created with Sketch.</desc><defs></defs><g id="ArrowDown/Line/Black/30" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M26.4999974,23 C26.1169975,23 25.7339976,22.854 25.4419977,22.563 L14.441,11.621 L3.56300233,22.558 C2.97900246,23.146 2.03000266,23.146 1.44200279,22.563 C0.854002911,21.979 0.853002911,21.029 1.43700279,20.442 L13.3720002,8.442 C13.6520002,8.16 14.0330001,8.001 14.432,8 C14.8559999,8.022 15.2109998,8.156 15.4929998,8.437 L27.5579972,20.437 C28.1459971,21.021 28.1469971,21.971 27.5629972,22.558 C27.2709973,22.853 26.8849974,23 26.4999974,23" id="Fill-1" fill="#2B2B2B" transform="translate(14.500003, 15.500000) scale(1, -1) translate(-14.500003, -15.500000) "></path></g></svg>';
$(document).ready(function() {
    $('#mysearch').val("");
    $("#search-btn").click(function() {
        searchNow();
    });
    $(".search-close").click(function(ele) { /* Search text will always be at index 1 - INC-358925*/
        var v = $(ele.currentTarget.children[1]).text();
        searchNow(v);
    });
    $('#mysearch').keypress(function(e) {
        var key = e.which; /* the enter key code*/
        if (key === 13) {
            e.preventDefault();
            searchNow();
        }
    });

    function searchNow(val) { /* SR-43234*/
        var threeSearchURL = "https://answers.three.co.uk/?query=";
        if (val === undefined) {
            val = $('#mysearch').val();
        }
        window.open(threeSearchURL + val.trim());
        return false;
    };
    $("#login").click(function() { /*this will find the selected website from the dropdown*/
        var hostname = $(location).attr('hostname');
        var pathname = $(location).attr('pathname');
        var encodedString = btoa(pathname); /*this will redirect us in same window*/
        var go_to_url = "/account/login"; /*?target="+encodedString;*/
        window.location.href = go_to_url;
    });
});
var rbauth = (typeof Granite !== 'undefined');
var locationpathname = window.location.pathname;

function processD(cd, lgn) {
    var det = cd.split(':');
    var cn = det[0];
    var ky = det[2];
    var v = RCookieUtil.get(cn);
    if (v !== undefined) {
        v = atob(v);
        if (det[1] === 'w') {
            if (lgn && (window[ky] === undefined || window[ky] === null)) {
                window[ky] = v;
            } else {
                delete window[ky];
                window[ky] = undefined;
                RCookieUtil.remove(cn);
            }
        } else if (det[1] === 's') {
            if (lgn) {
                if (sessionStorage.getItem(ky) === null) {
                    sessionStorage.setItem(ky, v);
                }
            } else {
                sessionStorage.removeItem(ky);
                RCookieUtil.remove(cn);
            }
        } else if (det[1] === 'ws') {
            if (lgn) {
                var svl = sessionStorage.getItem(det[4]);
                if (svl !== null) {
                    window[det[3]] = JSON.parse(svl);
                } else if (v !== undefined) {
                    window[det[3]] = JSON.parse(v);
                    sessionStorage.setItem(det[4], window[det[3]]);
                }
                window[det[3]] = JSON.parse(svl);
            } else {
                delete window[det[3]];
                window[det[3]] = undefined;
                sessionStorage.removeItem(det[4]);
                RCookieUtil.remove(cn);
            }
        } else if (det[1] === 'ls') {
            if (lgn) {
                if (sessionStorage.getItem(ky) === null) {
                    sessionStorage.setItem(ky, v);
                    localStorage.setItem(ky, v);
                }
            } else {
                sessionStorage.removeItem(ky);
                localStorage.removeItem(ky);
                RCookieUtil.remove(cn);
            }
        }
    }
};

function checkCompatibility() {
    var ua = navigator.userAgent;
    if (window.hasOwnProperty("_naAg")) { /*Any browser is supported */
        if (window._naAg === "") {
            window.isSupported = true;
        } else {
            var nagAr = window._naAg.split(',');
            for (var ii = 0; ii < nagAr.length; ii++) {
                var k = nagAr[ii];
                var bReg = RegExp(k);
                if (bReg.test(ua)) {
                    window.isSupported = false;
                    return;
                }
            }
        }
    }
};
var RCookieUtil = {
    get: function(name) {
        return Cookies.get(name);
    },
    set: function(name, value) {
        Cookies.set(name, value);
    },
    remove: function(name) {
        Cookies.remove(name);
    }
};
var RUrlUtils = {
    url: function(pKey, query) {
        if (query !== undefined) {
            return window.three_gblURLObj[pKey] + query;
        }
        return window.three_gblURLObj[pKey];
    },
    contains: function(key) {
        return (window.location.href.indexOf(key) >= 0);
    },
    navigate: function(url) {
        if (rbauth) {
            if (locationpathname === RUrlUtils.url('dashboard') && url.indexOf('account/login') && !isLoggedIn()) {
                alert('You should be logged in to edit this page. Might experience unexpected behaviour.'); /*return false;*/
            }
        }
        window.location.href = url;
    }
}; /*Always checks against the current URL*/ /* Method to be in sync with Cards/OS loading method being invoked form respective OS/CARD component*/
function showComponents() {
    $('#main-header-block').show();
    $('#main-footer-block').show();
    if (JSON.parse(sessionStorage.getItem('fs'))) {
        console.log("Fraud >> ");
        $('#app-promo-block').hide();
    } else {
        console.log("Not Fraud");
        $('#app-promo-block').show();
    }
};

function loader(show) {
    if (show) {
        $('#loader_backdrop').removeClass('hide');
        $('#loader_mask').removeClass('hide');
    } else {
        $('#loader_backdrop').addClass('hide');
        $('#loader_mask').addClass('hide');
    }
};
var __additionalCleanups = ["s:failureCountValue,s:es,l:ls,sl:OID,sl:MSISDN,s:cid,s:custtID,l:errorMsg,l:data,s:Mashery"];

function flushSession(force) {
    var cdA = window._c2p.split(',');
    for (var k = 0; k < cdA.length; k++) {
        processD(cdA[k], false);
    }
    var adCl = __additionalCleanups[0].split(',');
    for (var i = 0; i < adCl.length; i++) {
        var det = adCl[i].split(':');
        if (det[0] === 's') {
            sessionStorage.removeItem(det[1]);
        } else if (det[0] === 'l') {
            localStorage.removeItem(det[1]);
        } else if (det[0] === 'sl') {
            sessionStorage.removeItem(det[1]);
            localStorage.removeItem(det[1]);
        }
    }
    if (window.VlocOmniOut !== undefined && window.VlocOmniOut.force !== undefined && window.VlocOmniOut.force.getOAuth() !== undefined) {
        window.VlocOmniOut.force.getOAuth().access_token = "";
        window.VlocOmniOut.force.getOAuth().instance_url = "";
    }
    if (window.OmniForce !== undefined) {
        window.OmniForce.logout();
    }
    if (force) {
        window.location = window._logoutURL;
    } else { /*There might be a case where the user session is timed out on dashboard if (window.location.pathname !==url("dashboard"){...14421 Set the redirectURL to log back again.. */
        RCookieUtil.set("ReturnURL", window.location.href);
        window.location = RUrlUtils.url("login");
    }
};
var idleTimeout;
var startTime;
var idleWatch = function(timeOutMins) {
    timeOutMins = parseInt(timeOutMins);
    startTime = new Date().getTime(); /*Idle detection*/
    var activity = function() {
        clearTimeout(idleTimeout);
        startTime = new Date().getTime();
        idleTimeout = null;
        idleTimeout = setTimeout(function() {
            reventTrack(false);
            console.log("No activity on page so logging out: TimeOut Seconds(" + (timeOutMins * 60000) + " DIFF: )" + (((new Date().getTime()) - startTime) / 1000));
            clearTimeout(idleTimeout);
            user_logout(false);
        }, (timeOutMins * 60000));
    };
    var reventTrack = function(flag) {
        window.onload = flag ? activity : (function() {});
        window.onscroll = flag ? activity : (function() {});
        window.onmousemove = flag ? activity : (function() {});
        window.onmousedown = flag ? activity : (function() {});
        window.ontouchstart = flag ? activity : (function() {});
        window.onclick = flag ? activity : (function() {});
        window.onkeypress = flag ? activity : (function() {});
    };
    reventTrack(true);
};

function processCookies() {
    if (console.log("Processing cookies... for Cards and OS pages..."), void 0 === window.accesToken && void 0 === window.instanceUrl && void 0 === window.refreshToken)
        for (var e = window._c2p.split(","), o = 0; o < e.length; o++) processD(e[o], !0);
    console.log("Logged-In: ", isLoggedIn())
}

function isLoggedIn() {
    var e = void 0 !== window.accesToken && void 0 !== window.instanceUrl && void 0 !== window.refreshToken,
        o = null !== sessionStorage.getItem("user_name") && null !== sessionStorage.getItem("sub_id") && null !== sessionStorage.getItem("acct_status");
    return e && o
}
processCookies(), window.isSupported = !0, checkCompatibility();
var ua = navigator.userAgent.toLowerCase();

function user_logout(e) {
    isLoggedIn() && $.ajax({
        url: window.instanceUrl + "/services/oauth2/revoke?token=" + window.accessToken,
        success: function(o) {
            console.log("Success:", o), flushSession(e)
        },
        error: function(o) {
            console.log("Error:", o), flushSession(e)
        }
    })
}

function annonPage() {
    if (rbauth && locationpathname.indexOf("/content/three-rebus") >= 0) return !0;
    if (locationpathname.startsWith("/account/help")) return !1;
    var e = window._anoUrl.split(","),
        o = !1;
    for (i = 0; i < e.length; i++)
        if (locationpathname.indexOf(e[i]) >= 0 || locationpathname === RUrlUtils.url(e[i]) || locationpathname === e[i]) {
            o = !0;
            break
        }
    return o || RUrlUtils.contains("userType=Anonymous")
}
if (ua && -1 !== ua.indexOf("safari") && window.addEventListener("pageshow", function(e) {
        e.persisted && setTimeout(function() {
            window.location.reload()
        }, -1)
    }, !1), _oBEnb) {
    for (var campaignParams = _cpPrm.split(","), isDeepLinkUrl = !1, dlPaths = _dLURL.split(","), cnt = dlPaths.length, i = 0; i < cnt; i++)
        if (locationpathname === RUrlUtils.url(dlPaths[i])) {
            isDeepLinkUrl = !0;
            break
        }
    var hasURL = RCookieUtil.get("ReturnURL");
    if (isDeepLinkUrl || isDeepLinkUrl && !hasURL) {
        var isFraud = JSON.parse(sessionStorage.getItem("fs")),
            isEmailVerified = JSON.parse(sessionStorage.getItem("EmailStatus")),
            pageURL = new URL(window.location.href);
        if (pageURL.searchParams.forEach(function(e, o) {
                campaignParams.indexOf(o) >= 0 && (console.log(o, e), sessionStorage.setItem(o, e))
            }), isLoggedIn()) {
            var sub_id = sessionStorage.getItem("sub_id");
            isEmailVerified ? pageURL.searchParams.get("ContextId") !== sub_id && (pageURL.searchParams.set("ContextId", sub_id), RCookieUtil.remove("ReturnURL"), RUrlUtils.navigate(pageURL.href)) : RUrlUtils.navigate(RUrlUtils.url("dashboard"))
        } else if (locationpathname === RUrlUtils.url("topupLanding")) {
            if (!hasURL)
                if (RUrlUtils.contains("ContextId=")) {
                    if (RUrlUtils.contains("ContextId=")) {
                        RCookieUtil.set("ReturnURL", window.location.href);
                        var _u = RUrlUtils.url("login", window.location.search);
                        RUrlUtils.navigate(_u)
                    }
                } else RCookieUtil.set("ReturnURL", window.location.href), null === localStorage.getItem("MSISDN") && null === localStorage.getItem("ICCID") && RUrlUtils.navigate(RUrlUtils.url("anonymousTopUp"))
        } else hasURL || annonPage() || RCookieUtil.set("ReturnURL", window.location.href)
    }
    if (locationpathname === RUrlUtils.url("login") && isLoggedIn()) {
        _u = RUrlUtils.url("dashboard", "?ContextId=" + sessionStorage.getItem("sub_id"));
        RUrlUtils.navigate(_u)
    }
    if (!(locationpathname !== RUrlUtils.url("dashboard") && annonPage() || isLoggedIn())) {
        _u = RUrlUtils.url("login", window.location.search);
        RUrlUtils.navigate(_u)
    }
} else locationpathname !== RUrlUtils.url("dashboard") || isLoggedIn() || RUrlUtils.navigate(RUrlUtils.url("anonymousDashboard"));
null !== localStorage.getItem("MSISDN") || locationpathname !== RUrlUtils.url("rebusLogin") && locationpathname !== RUrlUtils.url("twoFactorAuth") && locationpathname !== RUrlUtils.url("resendPasscode") && locationpathname !== RUrlUtils.url("passwordReset") || RUrlUtils.navigate(RUrlUtils.url("login")), isLoggedIn() && window._fraudFlag && locationpathname === RUrlUtils.url("dashboard") && RUrlUtils.navigate(RUrlUtils.url("accountBlockAlert"));
var os_btnId, os_fname;

function hCaptchaVerify(e, a) {
    os_fname = window[e], os_btnId = a, execute()
}

function execute() {
    enabled = $("#enabled").data("custom-property"), enabled ? (console.log("executing hcaptcha"), hcaptcha.execute()) : (console.log("hCaptcha is not enabled, returning true by default"), os_fname(os_btnId, !0))
}

function onSubmit(e) {
    console.log("calling aem servlet with h-captcha-response"), $.ajax({
        url: "/bin/verify-hcaptcha",
        type: "post",
        data: "h-captcha-response=" + e,
        success: function(e) {
            console.log("Is h-captcha-response valid? - " + e), os_fname(os_btnId, "true" == e)
        }
    })
}
$(document).ready(function() { /*This Js fileis only for Accessibility code to handle Keyboard navigation*/ /*Disabled Enter key for input to submit form*/
    $(document).on("focus", function() {
        $("*").removeClass("sr-only-border");
        $(".slds-form-element__label:empty").addClass("hidden");
    });
    $(".skip-to-home, .skip-to-content").on("keydown", function(e) {
        if (e.keyCode === 13 || e.which === 13) { /* $("#VlocityBPView h1:first-child").focus().addClass("sr-only-border");*/ }
    });
});

function registerAccessibility() { /*Accessibility Code*/
    console.log("finished vlocity loading");
    $('a, button,input,select').attr("tabindex", '0');
    $('a, button,input,select').on("keyup", function(e) {
        var keycode = e.keyCode || e.which;
        if (keycode == '9') {
            $('*').removeClass("keyboard_focus");
            $("*").removeClass("keyboard_focus_onlink");
            if ($(this).context) {
                var tagName = ($(this).context.nodeName).toLowerCase();
                var tagclassName = ($(this).context.className).toLowerCase();
                if (tagName === 'a') {
                    $(this).addClass("keyboard_focus_onlink");
                } else {
                    if (tagclassName === "btn-aslink") {
                        $(this).addClass("keyboard_focus_onlink");
                    } else {
                        $(this).addClass("keyboard_focus");
                    }
                }
            }
        }
    });
    $("*").on('mouseenter', function() {
        $('*').removeClass("keyboard_focus");
        $("*").removeClass("keyboard_focus_onlink");
    });
};