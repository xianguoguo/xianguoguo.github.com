function changeOpac(b,c){var a=document.getElementById(c).style;a.opacity=(b/100);a.MozOpacity=(b/100);a.KhtmlOpacity=(b/100);a.filter="alpha(opacity="+b+")"}function getElementsByClass(g,e,a){var d=new Array();if(e==null){e=document}if(a==null){a="*"}var c=e.getElementsByTagName(a);var b=c.length;var f=new RegExp("(^|\\s)"+g+"(\\s|$)");for(i=0,j=0;i<b;i++){if(c[i].className&&c[i].className.match(f)){d[j]=c[i];j++}}return d}function getDivWidth(a){return a.innerWidth?a.innerWidth:a.offsetWidth};