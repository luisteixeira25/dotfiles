'use strict';(function(b){"object"==typeof exports&&"object"==typeof module?b(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],b):b(CodeMirror)})(function(b){b.registerGlobalHelper("fold","comment",function(b){return b.blockCommentStart&&b.blockCommentEnd},function(g,m){var d=g.getModeAt(m),n=d.blockCommentStart,d=d.blockCommentEnd;if(n&&d){for(var e=m.line,f=g.getLine(e),a=m.ch,h=0;;)if(a=0>=a?-1:f.lastIndexOf(n,a-1),-1==a){if(1==h)return;h=1;
a=f.length}else{if(1==h&&a<m.ch)return;if(/comment/.test(g.getTokenTypeAt(b.Pos(e,a+1)))&&(0==a||f.slice(a-d.length,a)==d||!/comment/.test(g.getTokenTypeAt(b.Pos(e,a))))){f=a+n.length;break}--a}var h=1,a=g.lastLine(),p,r,k=e;a:for(;k<=a;++k)for(var l=g.getLine(k),c=k==e?f:0;;){var q=l.indexOf(n,c),c=l.indexOf(d,c);0>q&&(q=l.length);0>c&&(c=l.length);c=Math.min(q,c);if(c==l.length)break;if(c==q)++h;else if(!--h){p=k;r=c;break a}++c}if(null!=p&&(e!=p||r!=f))return{from:b.Pos(e,f),to:b.Pos(p,r)}}})});
