'use strict';(function(f){"object"==typeof exports&&"object"==typeof module?f(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],f):f(CodeMirror)})(function(f){function v(a,d){function b(a){if(!e.parentNode)return f.off(document,"mousemove",b);e.style.top=Math.max(0,a.clientY-e.offsetHeight-5)+"px";e.style.left=a.clientX+5+"px"}var e=document.createElement("div");e.className="CodeMirror-lint-tooltip";e.appendChild(d.cloneNode(!0));document.body.appendChild(e);
f.on(document,"mousemove",b);b(a);null!=e.style.opacity&&(e.style.opacity=1);return e}function w(a){a.parentNode&&(null==a.style.opacity&&a.parentNode&&a.parentNode.removeChild(a),a.style.opacity=0,setTimeout(function(){a.parentNode&&a.parentNode.removeChild(a)},600))}function r(a,d,b){function e(){f.off(b,"mouseout",e);c&&(w(c),c=null)}var c=v(a,d),g=setInterval(function(){if(c)for(var a=b;;a=a.parentNode){a&&11==a.nodeType&&(a=a.host);if(a==document.body)return;if(!a){e();break}}if(!c)return clearInterval(g)},
400);f.on(b,"mouseout",e)}function x(a,d,b){this.marked=[];this.options=d;this.timeout=null;this.hasGutter=b;this.onMouseOver=function(b){var c=b.target||b.srcElement;if(/\bCodeMirror-lint-mark-/.test(c.className)){for(var c=c.getBoundingClientRect(),d=a.findMarksAt(a.coordsChar({left:(c.left+c.right)/2,top:(c.top+c.bottom)/2},"client")),c=[],h=0;h<d.length;++h){var m=d[h].__annotation;m&&c.push(m)}if(c.length){d=b.target||b.srcElement;h=document.createDocumentFragment();for(m=0;m<c.length;m++)h.appendChild(t(c[m]));
r(b,h,d)}}};this.waitingFor=0}function q(a){var d=a.state.lint;d.hasGutter&&a.clearGutter("CodeMirror-lint-markers");for(a=0;a<d.marked.length;++a)d.marked[a].clear();d.marked.length=0}function y(a,d,b,e){var c=document.createElement("div"),g=c;c.className="CodeMirror-lint-marker-"+d;b&&(g=c.appendChild(document.createElement("div")),g.className="CodeMirror-lint-marker-multiple");if(0!=e)f.on(g,"mouseover",function(b){r(b,a,g)});return c}function t(a){var d=a.severity;d||(d="error");var b=document.createElement("div");
b.className="CodeMirror-lint-message-"+d;"undefined"!=typeof a.messageHTML?b.innerHTML=a.messageHTML:b.appendChild(document.createTextNode(a.message));return b}function z(a,d,b){function e(){g=-1;a.off("change",e)}var c=a.state.lint,g=++c.waitingFor;a.on("change",e);return d(a.getValue(),function(b,d){a.off("change",e);c.waitingFor==g&&(d&&b instanceof f&&(b=d),a.operation(function(){n(a,b)}))},b,a)}function l(a,d){var b=a.state.lint,e=b.options,c=e.options||e,g=e.getAnnotations||a.getHelper(f.Pos(0,
0),"lint");if(g)if(!d&&b.options.autoLintMaxLen&&a.getValue().length>b.options.autoLintMaxLen)b.autolinted&&b.marked&&b.marked.length&&(q(a),b.autolinted=!1);else{b.autolinted=!d;if(e.async||g.async)return z(a,g,c);var h=g(a.getValue(),c,a);if(h){if(h.then)return h.then(function(b){a.operation(function(){n(a,b)})});a.operation(function(){n(a,h)});return h}}}function n(a,d){q(a);for(var b=a.state.lint,e=b.options,c=[],g=0;g<d.length;++g){var h=d[g],f=h.from.line;(c[f]||(c[f]=[])).push(h)}for(g=0;g<
c.length;++g)if(h=c[g]){for(var f=null,n=b.hasGutter&&document.createDocumentFragment(),l=0;l<h.length;++l){var k=h[l],p=k.severity;p||(p="error");"error"!=f&&(f=p);e.formatAnnotation&&(k=e.formatAnnotation(k));b.hasGutter&&n.appendChild(t(k));k.to&&b.marked.push(a.markText(k.from,k.to,{className:"CodeMirror-lint-mark-"+p,__annotation:k}))}b.hasGutter&&a.setGutterMarker(g,"CodeMirror-lint-markers",y(n,f,1<h.length,b.options.tooltips))}if(e.onUpdateLinting)e.onUpdateLinting(d,c,a)}function u(a){var d=
a.state.lint;d&&(clearTimeout(d.timeout),d.timeout=setTimeout(function(){l(a)},d.options.delay||500))}f.defineOption("lint",!1,function(a,d,b){b&&b!=f.Init&&(q(a),!1!==a.state.lint.options.lintOnChange&&a.off("change",u),f.off(a.getWrapperElement(),"mouseover",a.state.lint.onMouseOver),clearTimeout(a.state.lint.timeout),delete a.state.lint);if(d){var e=a.getOption("gutters");b=!1;for(var c=0;c<e.length;++c)"CodeMirror-lint-markers"==e[c]&&(b=!0);e=a.state;c=d;c instanceof Function?c={getAnnotations:c}:
c&&!0!==c||(c={});b=e.lint=new x(a,c,b);if(!1!==b.options.lintOnChange)a.on("change",u);if(0!=b.options.tooltips&&"gutter"!=b.options.tooltips)f.on(a.getWrapperElement(),"mouseover",b.onMouseOver);!1!==d.lintOnChange&&l(a)}});f.defineExtension("performLint",function(a){if(this.state.lint)return l(this,a)})});
