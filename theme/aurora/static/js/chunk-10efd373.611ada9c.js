(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-10efd373"], {
    "02aa": function(t, e, n) {
        "use strict";
        n("7e08")
    },
    "2de2": function(t, e, n) {},
    "538b": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "knowledge-container"
            }, [t.catalogs ? n("div", [t.catalogs.length > 0 ? n("a-tabs", {
                staticClass: "doc-tabs",
                attrs: {
                    "default-active-key": "0"
                },
                on: {
                    change: t.onTabChange
                }
            }, t._l(t.catalogs, (function(e, a) {
                return n("a-tab-pane", {
                    key: a
                }, [n("span", {
                    attrs: {
                        slot: "tab",
                        set: t.icon = t.getIcon(e.tabTitle)
                    },
                    slot: "tab"
                }, [n("svg-icon", {
                    staticStyle: {
                        "font-size": "26px"
                    },
                    attrs: {
                        name: t.icon.name
                    }
                }), t._v(" " + t._s(e.tabTitle) + " ")], 1)])
            }
            )), 1) : n("div", {
                staticClass: "empty-tip"
            }, [n("a-empty", {
                attrs: {
                    description: "",
                    "image-style": {
                        height: "200px"
                    }
                }
            }), n("div", {
                staticClass: "tit"
            }, [t._v(" " + t._s(t.$t("暂无数据")) + " ")])], 1), t.catalog ? n("div", {
                staticClass: "doc-main"
            }, [n("a-row", {
                attrs: {
                    gutter: [20, 20]
                }
            }, [n("a-col", {
                attrs: {
                    md: 24,
                    lg: 7
                }
            }, [n("div", {
                staticClass: "doc-dir use-shadow"
            }, [n("a-timeline", t._l(t.catalog.tabDocs, (function(e) {
                return n("a-timeline-item", {
                    key: e.id,
                    class: {
                        "is-active": e.id === t.docId
                    },
                    on: {
                        click: function(n) {
                            return t.getDocInfo(e.id)
                        }
                    }
                }, [n("svg-icon", {
                    staticStyle: {
                        "font-size": "24px"
                    },
                    attrs: {
                        name: "file-doc"
                    }
                }), t._v(" " + t._s(e.title) + " ")], 1)
            }
            )), 1)], 1)]), n("a-col", {
                attrs: {
                    md: 24,
                    lg: 17
                }
            }, [t.docContent ? n("div", {
                staticClass: "doc-content use-shadow"
            }, [n("div", [n("h2", {
                staticClass: "title"
            }, [t._v(t._s(t.docTitle))]), n("markdown", {
                key: t.signKey,
                staticClass: "html",
                attrs: {
                    value: t.docContent
                }
            })], 1)]) : n("div", {
                staticClass: "spin-loading"
            }, [n("a-spin", {
                attrs: {
                    size: "large"
                }
            })], 1)])], 1)], 1) : t._e()], 1) : n("div", {
                staticClass: "spin-loading"
            }, [n("a-spin", {
                attrs: {
                    size: "large"
                }
            })], 1)])
        }
          , i = []
          , s = n("c7eb")
          , o = n("1da1")
          , c = (n("313d"),
        n("0eb6"),
        n("b7ef"),
        n("8bd4"),
        n("d81d"),
        n("b64b"),
        n("caad"),
        n("2532"),
        n("54d7"))
          , r = n("8c8a");
        function l(t) {
            return Object(r["a"])({
                url: c["m"] + "/api/v1/user/knowledge/fetch",
                method: "get",
                params: {
                    language: t
                }
            })
        }
        function d(t, e) {
            return Object(r["a"])({
                url: c["m"] + "/api/v1/user/knowledge/fetch",
                method: "get",
                params: {
                    language: e,
                    id: t
                }
            })
        }
        var u = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                key: t.id,
                staticClass: "markdown-container"
            }, [t.content ? n("div", {
                attrs: {
                    id: t.id
                },
                domProps: {
                    innerHTML: t._s(t.content)
                }
            }) : n("div", {
                staticClass: "spin-loading"
            }, [n("a-spin", {
                attrs: {
                    size: "large"
                }
            })], 1)])
        }
          , g = []
          , h = n("2909")
          , f = (n("d3b7"),
        n("25f0"),
        n("ac1f"),
        n("a1f0"),
        n("cb29"),
        n("5319"),
        n("d4cd"))
          , m = n.n(f)
          , b = n("b792")
          , p = n.n(b)
          , v = n("54f6")
          , w = n.n(v)
          , k = n("7ba6")
          , C = n.n(k)
          , y = n("e6f9")
          , O = n.n(y)
          , j = n("ff97")
          , z = n.n(j)
          , _ = n("5121")
          , x = n.n(_)
          , I = n("362d")
          , T = n.n(I)
          , D = n("746a")
          , S = n.n(D)
          , $ = n("cf2b")
          , M = n.n($)
          , K = n("4bb9")
          , P = n.n(K)
          , A = n("be03")
          , E = n.n(A)
          , G = n("9fce")
          , J = n.n(G)
          , L = n("7629")
          , H = n.n(L)
          , R = n("1c78")
          , U = n("a68e")
          , Z = n.n(U)
          , q = n("78de")
          , B = n.n(q)
          , F = n("3eb7")
          , N = n.n(F)
          , Q = (n("94d2"),
        n("8fdb"))
          , V = n("f1d0")
          , W = (n("343a"),
        n("1157"))
          , X = n.n(W)
          , Y = new m.a({
            html: !0,
            linkify: !0,
            typographer: !0,
            breaks: !1
        });
        Y.use(p.a, {
            auto: !0
        }),
        Y.use(w.a),
        Y.use(C.a),
        Y.use(O.a),
        Y.use(z.a),
        Y.use(x.a),
        Y.use(T.a),
        Y.use(S.a, "warning"),
        Y.use(S.a, "error"),
        Y.use(S.a, "info"),
        Y.use(S.a, "success"),
        Y.use(M.a),
        Y.use(P.a),
        Y.use(E.a),
        Y.use(J.a),
        Y.use(H.a),
        Y.use(R["a"]),
        Y.use(Z.a),
        Y.use(B.a),
        Y.use(N.a);
        var tt = {
            name: "Markdown",
            props: {
                value: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    id: "",
                    content: ""
                }
            },
            watch: {
                value: {
                    immediate: !0,
                    handler: function() {
                        var t = this;
                        return Object(o["a"])(Object(s["a"])().mark((function e() {
                            return Object(s["a"])().wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return t.id = "swiper" + Math.random().toString().substring(2),
                                        t.content = "",
                                        e.next = 4,
                                        t.initContent();
                                    case 4:
                                        setTimeout((function() {
                                            t.initGallery()
                                        }
                                        ), 500);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))()
                    }
                }
            },
            methods: {
                initContent: function() {
                    var t = this;
                    return new Promise((function(e) {
                        var n = Y.render(t.value)
                          , a = Object(h["a"])(n.matchAll(/<img.*src="(.*?)".*?>/g))
                          , i = new Array(a.length).fill(null);
                        if (a.length > 0)
                            for (var s = function(s) {
                                var o = a[s][1];
                                t.getImageOriginSize(o).then((function(a) {
                                    i[s] = a;
                                    var o = i.every((function(t) {
                                        return !!t
                                    }
                                    ));
                                    if (o) {
                                        var c = n.replace(/(<img.*src="(.*?)".*?>)/g, '<a class="img-linker" href="$2" target="_blank">$1</a>');
                                        t.content = c,
                                        t.$nextTick().then((function() {
                                            X()(".img-linker").each((function(t, e) {
                                                X()(this).attr("data-pswp-width", i[t].width),
                                                X()(this).attr("data-pswp-height", i[t].height)
                                            }
                                            )),
                                            e()
                                        }
                                        ))
                                    }
                                }
                                ))
                            }, o = 0; o < a.length; o++)
                                s(o);
                        else
                            t.content = n,
                            e()
                    }
                    ))
                },
                initGallery: function() {
                    window.conso1e.log(56);
                    var t = new Q["a"]({
                        gallery: "#" + this.id,
                        children: ".img-linker",
                        pswpModule: V["a"],
                        wheelToZoom: !0
                    });
                    t.init()
                },
                getImageOriginSize: function(t) {
                    return new Promise((function(e) {
                        var n = new Image;
                        n.onload = function() {
                            var t = this.width
                              , n = this.height;
                            e({
                                width: t,
                                height: n
                            })
                        }
                        ,
                        n.onerror = function(t) {
                            e({
                                width: "auto",
                                height: "auto"
                            })
                        }
                        ,
                        n.src = t
                    }
                    ))
                }
            }
        }
          , et = tt
          , nt = (n("02aa"),
        n("2877"))
          , at = Object(nt["a"])(et, u, g, !1, null, "270c78c2", null)
          , it = at.exports
          , st = n("12cb")
          , ot = {
            name: "Knowledge",
            components: {
                Markdown: it
            },
            data: function() {
                return {
                    catalogs: null,
                    catalog: null,
                    docId: "",
                    docContent: "",
                    docTitle: ""
                }
            },
            computed: {
                signKey: function() {
                    return btoa(encodeURIComponent(this.docContent)).substring(0, 10)
                }
            },
            mounted: function() {
                this.getCatalogs()
            },
            methods: {
                getCatalogs: function() {
                    var t = this;
                    setTimeout(Object(o["a"])(Object(s["a"])().mark((function e() {
                        var n, a, i;
                        return Object(s["a"])().wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l(Object(st["b"])("-"));
                                case 2:
                                    n = e.sent,
                                    a = n.data,
                                    i = void 0 === a ? {} : a,
                                    t.catalogs = Object.keys(i).map((function(t) {
                                        return {
                                            tabTitle: t,
                                            tabDocs: i[t]
                                        }
                                    }
                                    )),
                                    t.catalogs.length > 0 && (t.catalog = t.catalogs[0],
                                    t.catalog.tabDocs.length > 0 && t.getDocInfo(t.catalog.tabDocs[0].id));
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    ))), 100)
                },
                getIcon: function(t) {
                    window.conso1e.log(38);
                    var e = t.toLowerCase();
                    return e.includes("window") ? {
                        size: 25,
                        name: "windows-logo"
                    } : e.includes("macos") ? {
                        size: 24,
                        name: "laptop"
                    } : e.includes("ios") ? {
                        size: 24,
                        name: "device-mobile-speaker"
                    } : e.includes("iphone") ? {
                        size: 26,
                        name: "device-mobile-speaker"
                    } : e.includes("openwrt") ? {
                        size: 26,
                        name: "rss"
                    } : e.includes("tv") ? {
                        size: 24,
                        name: "television-simple"
                    } : e.includes("linux") ? {
                        size: 20,
                        name: "linux-logo"
                    } : e.includes("android") ? {
                        size: 23,
                        name: "android-logo"
                    } : e.includes("other") ? {
                        size: 26,
                        name: "books"
                    } : {
                        size: 28,
                        name: "book-open-text"
                    }
                },
                onTabChange: function(t) {
                    this.catalog = this.catalogs[t],
                    this.catalog.tabDocs.length > 0 ? this.getDocInfo(this.catalog.tabDocs[0].id) : (this.docId = "",
                    this.docTitle = "",
                    this.docContent = "")
                },
                getDocInfo: function(t) {
                    var e = this;
                    return Object(o["a"])(Object(s["a"])().mark((function n() {
                        var a;
                        return Object(s["a"])().wrap((function(n) {
                            while (1)
                                switch (n.prev = n.next) {
                                case 0:
                                    return window.conso1e.log(20),
                                    n.next = 3,
                                    d(t, Object(st["b"])("-"));
                                case 3:
                                    a = n.sent,
                                    e.docId = t,
                                    e.docTitle = a.data.title,
                                    e.docContent = a.data.body;
                                case 7:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))()
                }
            }
        }
          , ct = ot
          , rt = (n("d9e8"),
        Object(nt["a"])(ct, a, i, !1, null, "7817eb3e", null));
        e["default"] = rt.exports
    },
    "7e08": function(t, e, n) {},
    d9e8: function(t, e, n) {
        "use strict";
        n("2de2")
    }
}]);
