/** FOX NEWS ISA | 02-27-2018 10:47 AM **/
!function(){function a(){for(var a=[8],b=1;2>=b;b++)a.push(8+b),a.push(8-b);return a=a[Math.floor(Math.random()*a.length)],{b:a,a:0==Math.floor(Math.random()*a)}}function b(a){var b=a=a.replace(":","");try{for(var c=0;100>c&&(a=decodeURIComponent(a),b!=a)&&!a.match(/^http(s)?\:/);c++)b=a}catch(d){}return a.replace(/(^\s+|\s+$)/g,"")}try{if(!location||!location.hostname||!location.pathname)return!1;var c,d,e=document.location.hostname.replace(/^www\./,""),f=function(){for(var a,b,c=document.getElementsByTagName("meta"),d=0,e=c.length;e>d;d++)if(b=c[d],"og:title"===b.getAttribute("property")){a=b.getAttribute("content");break}return a||(a=document.title||"Untitled"),a}(),g={},g=function(a,b,c){a.l1=b,a.l2=c,a.l3="__page__",a.l4="-";a:{for(b=document.getElementsByTagName("meta"),c=0;c<b.length;c++)if("prism.section"==b[c].getAttribute("name")){b=b[c].getAttribute("content");break a}b=""}return a.zctContent=b,a}(g,e,f),h=(new Date).getTime(),i=Math.floor(Math.random()*Math.pow(10,12));d=a(),c=d.a?d.b:0,g.zmoatab_cm=c,g.t=h,g.de=i,g.zMoatAB_SNPT=!0;var j;j=c?c:1;var k;k=d?d.a?!0:!1:!0;var l,e=[],m=(new Date).getTime().toString(35),n=[b(g.l1),b(g.l2),b(g.l3),b(g.l4)].join(":"),f=/zct[a-z0-9]+/i,o="";for(l in g)g.hasOwnProperty(l)&&l.match(f)&&(o+="&"+l+"="+g[l]);var p=document.referrer.match(/^([^:]{2,}:\/\/[^\/]*)/),q=p?p[1]:document.referrer,r="https://ucuxjyp78m7y-a.akamaihd.net/"+m+".gif?e=17&d="+encodeURIComponent(n)+"&de="+i+"&t="+h+"&i=FOXNEWSCONTENT1&cm="+j+"&j="+encodeURIComponent(q)+o+"&mp=1&ac=1&pl=1&bq=10&vc=2&cs=0",s="https://px.moatads.com/pixel.gif?e=17&d="+encodeURIComponent(n)+"&de="+i+"&t="+h+"&i=FOXNEWSCONTENT1&cm="+j+"&j="+encodeURIComponent(q)+o+"&mp=0&ac=1&pl=1&bq=10&ad_type=img&vc=2&cs=0",t="https://px.moatads.com/pixel.gif?e=17&d="+encodeURIComponent(n)+"&de="+i+"&t="+h+"&i=FOXNEWSCONTENT1&cm="+j+"&j="+encodeURIComponent(q)+o+"&ku=1&ac=1&pl=1&bq=10&ad_type=img&vc=2&cs=0";k&&((new Image).src=r,(new Image).src=s);for(var u in g)e.push(u+"="+encodeURIComponent(g[u]));var e=e.join("&"),e=e+"&vc=2",v=document.createElement("script");v.type="text/javascript",v.async=!0,k&&(v.onerror=function(){(new Image).src=t});var w=document.getElementsByTagName("script")[0];w.parentNode.insertBefore(v,w),v.src="https://z.moatads.com/foxnews944SiAL46/moatcontent.js#"+e}catch(x){try{var y="//pixel.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=MOATCONTENTABSNIPPET1"+o+"&vc=2&ac=1&k="+encodeURIComponent(x)+"&j="+encodeURIComponent(q)+"&cs="+(new Date).getTime();(new Image).src=y}catch(z){}}}();