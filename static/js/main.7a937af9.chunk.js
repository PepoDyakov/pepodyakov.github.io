(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{280:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(86),r=a.n(o),i=a(12),c=a(1),s=a(13),p=Object(c.e)("Landing",{Wrapper:{_size:"100%",_flex:["column","left","top"],padding:"0 18px"},Row:{_flex:["column","left","top"],marginBottom:"12px",flexWrap:"wrap"},RowTitle:{_el:"h1",_textStyle:"H1",fontWeight:"$bold",marginBottom:"12px","@media screen and (max-width: 600px)":{_textStyle:"H3",fontWeight:"$bold"}},RowText:{_el:"h1",_textStyle:"H1",fontWeight:"$regular"},RowList:{_el:"ul"},RowListItem:{_el:"li"},Span:{_el:"span",_textStyle:"H1",fontWeight:"$bold",marginLeft:"6px",marginBottom:"12px",flexWrap:"wrap","@media screen and (max-width: 600px)":{_textStyle:"H3",fontWeight:"$bold"}},Link:{_el:"a",_textStyle:"H1",fontWeight:"$regular",textDecoration:"underline",padding:"6px 0",color:function(e){return"".concat(e("color"))},"&:hover":{cursor:"pointer"},"@media screen and (max-width: 600px)":{_textStyle:"H3",fontWeight:"$bold"}}});function m(){return l.a.createElement(p.Wrapper,null,l.a.createElement(p.Row,null,l.a.createElement(p.RowTitle,null,"Name"),l.a.createElement(p.RowText,null,"Petar Dyakov, a.k.a Decho")),l.a.createElement(p.Row,null,l.a.createElement(p.RowTitle,null,"Age"),l.a.createElement(p.RowText,null,"23")),l.a.createElement(p.Row,null,l.a.createElement(p.RowTitle,null,"From"),l.a.createElement(p.RowText,null,"Sofia,",l.a.createElement(p.Span,{role:"img","aria-label":"Bulgarian flag"},"\ud83c\udde7\ud83c\uddec"))),l.a.createElement(p.Row,null,l.a.createElement(p.RowTitle,null,"Current job"),l.a.createElement(p.RowText,null,"Chief Consistency Officer",l.a.createElement(p.Link,{href:"https://www.swipesapp.com",color:"#05A851"},"@swipesapp"))),l.a.createElement(p.Row,null,l.a.createElement(p.RowTitle,null,"Currently working on"),l.a.createElement(p.RowList,null,l.a.createElement(p.RowListItem,null,l.a.createElement(p.RowText,null,"This place")),l.a.createElement(p.RowListItem,null,l.a.createElement(p.RowText,null,"Dojohunt -> (Platform for finding gyms in Sofia)")),l.a.createElement(p.RowListItem,null,l.a.createElement(p.RowText,null,l.a.createElement(p.Link,{href:"http://we-are.cc",color:"#f0a033"},"we-are.cc"))))),l.a.createElement(p.Row,null,l.a.createElement(p.RowTitle,null,"Have worked on"),l.a.createElement(p.RowList,null,l.a.createElement(p.RowListItem,null,l.a.createElement(p.Link,{href:"https://www.swipesapp.com",color:"#05A851"},"swipesapp.com")),l.a.createElement(p.RowListItem,null,l.a.createElement(p.Link,{href:"https://jd.dk",color:"#ed584e"},"jd.dk")),l.a.createElement(p.RowListItem,null,l.a.createElement(p.Link,{href:"https://legalpad.io",color:"#374665"},"legalpad.io")))),l.a.createElement(p.Row,null,l.a.createElement(p.RowTitle,null,"Can be reached here"),l.a.createElement(p.RowList,null,l.a.createElement(p.RowListItem,null,l.a.createElement(p.Link,{href:"mailto:petar.dyakov@icloud.com"},"Email"),l.a.createElement(p.Span,{role:"img","aria-label":"mail"},"\u2709\ufe0f")),l.a.createElement(p.RowListItem,null,l.a.createElement(p.Link,{href:"https://twitter.com/petardyakov"},"Twitter"),l.a.createElement(p.Span,{role:"img","aria-label":"chat"},"\ud83d\udcac")),l.a.createElement(p.RowListItem,null,l.a.createElement(p.Link,{href:"https://www.instagram.com/pepodyakov/"},"Instagram"),l.a.createElement(p.Span,{role:"img","aria-label":"camera"},"\ud83d\udcf8")))))}var u=a(29),g=a(95),d=a(96),f=Object(c.e)("Blog",{Wrapper:{width:"100%",padding:"0 18px"},LinkWrapper:{_flex:["column","left","top"],width:"100%",marginBottom:"12px","@media screen and (max-width: 600px)":{marginBottom:"0"}},Link:{_el:i.b,width:"100%"},Title:{_el:"h1",_textStyle:"H1",width:"100%",height:"48px",fontWeight:"$bold",textTransform:"uppercase",backgroundColor:"white",zIndex:"5",wordBreak:"break-word","&:hover":{textDecoration:"underline",cursor:"pointer"},"@media screen and (max-width: 600px)":{_textStyle:"H3",fontWeight:"$bold",height:"30px"}}}),x=a(281).createClient({space:"z8eq0o5z2qn0",accessToken:"b699bc16154bedc7c79c05758fd97fc1c37d179c7e9b39f64bf6912c5465113a"});function b(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),o=a[0],r=a[1];return Object(n.useEffect)(function(){x.getEntries({order:"sys.createdAt"}).then(function(e){r(Object(g.a)(e.items))})},[]),0===o.length?l.a.createElement(f.Wrapper,null,l.a.createElement(f.Title,null,"Loading...")):l.a.createElement(f.Wrapper,null,o.map(function(e,t){return l.a.createElement(f.Link,{to:{pathname:"test".concat(e.fields.path),state:Object(u.a)({},e.fields)},key:t},l.a.createElement(f.LinkWrapper,null,l.a.createElement(f.Title,null,e.fields.title)))}))}var h=a(94),w=a.n(h),y=Object(c.e)("Post",{Wrapper:{_flex:["column","left","top"],padding:"0 18px"},Header:{_flex:["column","left","top"]},Title:{_el:"h1",_textStyle:"title",fontWeight:"$bold",marginBottom:"12px",textTransform:"lowercase",wordBreak:"break-word","@media screen and (max-width: 600px)":{_textStyle:"H2",fontWeight:"$bold"}},Subtitle:{_el:"h3",_textStyle:"H3",fontWeight:"$medium",marginBottom:"24px",wordBreak:"break-word","@media screen and (max-width: 600px)":{_textStyle:"H3"}},Date:{_el:"p",_textStyle:"H3",fontWeight:"$bold",marginBottom:"24px"}});function k(e){var t=e.location.state;return l.a.createElement(y.Wrapper,null,l.a.createElement(y.Title,null,t.title),l.a.createElement(y.Subtitle,null,t.subtitle),l.a.createElement(w.a,{source:t.content,className:"blog-post"}),l.a.createElement(y.Date,null,t.date))}var E=Object(c.e)("NotFound",{Wrapper:{_size:"100%",_flex:["column","center","center"]},Title:{_el:"h1",_textStyle:"title",fontWeight:"$bold",marginBottom:"48px"},Image:{_el:"img",width:"500px"}});function _(){return l.a.createElement(E.Wrapper,null,l.a.createElement(E.Title,null,"These is not the page you're looking for - Obi Wan Kenobi"),l.a.createElement(E.Image,{src:"https://media.giphy.com/media/IHOOMIiw5v9VS/giphy.gif"}))}var S=Object(c.e)("App",{Wrapper:{_size:"100%",_flex:["column","left","top"],maxWidth:"760px",margin:"0 auto",overflowX:"hidden",minHeight:"100vh"},NavBar:{_el:"nav",_flex:["row","left","center"],_size:["100%","70px"],flex:"none",padding:"0 18px"},Link:{_el:i.c,_textStyle:"body",fontWeight:"$bold","&:first-child":{marginRight:"18px"},"&:hover":{color:"grey"}}});Object(c.b)({regular:400,medium:500,bold:700,cardShadow:"0px 3px 5px 1px rgba(#000000, 0.3)"}),Object(c.d)("size",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{width:e||"auto",height:(arguments.length>1&&void 0!==arguments[1]?arguments[1]:null)||e||"auto"}}),Object(c.d)("font",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{fontSize:e||"initial",lineHeight:isNaN(t)?parseInt(t,10)/parseInt(e,10):"1",fontWeight:a||isNaN(t)?a:t}}),Object(c.d)("flex",function(e,t,a){var n={display:"flex"};if("center"===e&&(n.justifyContent="center",n.alignItems="center"),"row"===e){switch(n.flexDirection=e,t){case"left":n.justifyContent="flex-start";break;case"center":n.justifyContent="center";break;case"end":n.justifyContent="flex-end";break;case"between":n.justifyContent="space-between";break;case"around":n.justifyContent="space-around";break;default:n.justifyContent="flex-start"}switch(a){case"top":n.alignItems="flex-start";break;case"center":n.alignItems="center";break;case"bottom":n.alignItems="flex-end";break;case"stretch":n.alignItems="stretch";break;default:n.alignItems="flex-start"}}if("column"===e){switch(n.flexDirection=e,t){case"start":n.alignItems="flex-start";break;case"center":n.alignItems="center";break;case"end":n.alignItems="flex-end";break;default:n.alignItems="flex-start"}switch(a){case"top":n.justifyContent="flex-start";break;case"center":n.justifyContent="center";break;case"bottom":n.justifyContent="flex-end";break;case"between":n.justifyContent="space-between";break;case"around":n.justifyContent="space-around";break;default:n.justifyContent="flex-start"}}if("column-reverse"===e){switch(n.flexDirection=e,t){case"left":n.alignItems="flex-start";break;case"center":n.alignItems="center";break;case"right":n.alignItems="flex-end";break;default:n.alignItems="flex-start"}switch(a){case"top":n.justifyContent="flex-start";break;case"center":n.justifyContent="center";break;case"bottom":n.justifyContent="flex-end";break;case"between":n.justifyContent="space-between";break;case"around":n.justifyContent="space-around";break;default:n.justifyContent="flex-start"}}if("row-reverse"===e){switch(n.flexDirection=e,t){case"left":n.justifyContent="flex-start";break;case"center":n.justifyContent="center";break;case"right":n.justifyContent="flex-end";break;case"between":n.justifyContent="space-between";break;case"around":n.justifyContent="space-around";break;default:n.justifyContent="flex-start"}switch(a){case"top":n.alignItems="flex-start";break;case"center":n.alignItems="center";break;case"bottom":n.alignItems="flex-end";break;case"stretch":n.alignItems="stretch";break;default:n.alignItems="flex-start"}}return Object(u.a)({},n)}),Object(c.d)("textStyle",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"item";switch(e){case"body":return{_font:["18px","24px","$regular"]};case"caption":return{_font:["13px","24px","$medium"]};case"H3":return{_font:["20px","24px","$regular"]};case"H2":return{_font:["24px","24px","$regular"]};case"H1":return{_font:["28px","36px","$regular"],letterSpacing:"-0.6px"};case"title":return{_font:["48px","56px","$regular"],letterSpacing:"-1.5px"};default:return console.warn("unsupported textStyle: ".concat(e,". Check _textStyle.js for support")),{_font:["1rem","1rem","$regular"]}}}),Object(c.c)({".blog-post":{_size:["100%","auto"]},".blog-post h1":{_size:["100%","auto"],_textStyle:"H1",fontWeight:"$bold",margin:"0 auto",marginTop:"30px",marginBottom:"24px"},".blog-post h2":{_size:["100%","auto"],_textStyle:"H2",fontWeight:"$bold",margin:"0 auto",marginTop:"30px",marginBottom:"24px"},".blog-post h3":{_size:["100%","auto"],_textStyle:"H3",fontWeight:"$bold",margin:"0 auto",marginBottom:"18px"},".blog-post p":{_size:["100%","auto"],_textStyle:"body",margin:"0 auto",marginBottom:"30px"},".blog-post p > span":{fontWeight:700,backgroundColor:"#ffd776"},".blog-post blockquote":{_size:["100%","auto"],backgroundColor:"rgba(#ffd776, .2)",margin:"0 auto",marginTop:"30px",marginBottom:"60px",padding:"30px 46px",paddingRight:0},".blog-post blockquote:before":{_size:["17px","100%"],backgroundColor:"#ffd776",content:""},".blog-post blockquote p":{_textStyle:"body",fontStyle:"italic",letterSpacing:"-.6px",margin:0},".blog-post img":{maxWidth:"100%",maxHeight:"50vh",display:"block"},".blog-post video":{_size:["100%","auto"],display:"block",margin:"0 auto",marginTop:"30px",marginBottom:"60px"},".blog-post audio":{_size:["100%","auto"],display:"block",margin:"0 auto",marginTop:"30px",marginBottom:"60px"},".blog-post strong":{},".blog-post em":{},".blog-post ul":{_size:["100%","auto"],_textStyle:"body",paddingLeft:"60px",margin:"0 auto",marginBottom:"30px",listStyle:"initial"},".blog-post ol":{_size:["100%","auto"],_textStyle:"body",paddingLeft:"60px",margin:"0 auto",marginBottom:"30px",listStyle:"initial",listStyleType:"decimal"},".blog-post li":{_textStyle:"body",listStyle:"initial"},".blog-post ol li":{listStyleType:"decimal"},".blog-post a img":{cursor:"pointer"},".blog-post a":{cursor:"pointer",wordWrap:"break-word"},".blog-post a:hover":{textDecoration:"underline",wordWrap:"break-word"},".blog-post a:visited":{color:"#5f50b7",textDecoration:"underline",wordWrap:"break-word"},".blog-post a:focused":{outline:"1px dotted #5f50b7",wordWrap:"break-word"},".blog-post pre":{_size:["100%","auto"],margin:"15px 0",padding:"9px"},".blog-post code":{_size:["100%","auto"]},"@media screen and (max-width: 600px)":{".blog-post h1":{_textStyle:"H3"},".blog-post h2":{_font:["30px","39px","bold"]},".blog-post h3":{},".blog-post p":{},".blog-post img":{margin:"30px auto"},".blog-post img.small":{margin:"30px auto",minHeight:"initial"},".blog-post large":{margin:"30px auto",minHeight:"initial"}}});a(280);r.a.render(l.a.createElement(c.a,null,l.a.createElement(i.a,null,l.a.createElement(function(){return l.a.createElement(S.Wrapper,null,l.a.createElement(S.NavBar,null,l.a.createElement(S.Link,{to:"/"},"Home"),l.a.createElement(S.Link,{to:"/blog"},"Thoughts")),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:m}),l.a.createElement(s.a,{path:"/blog",component:b}),l.a.createElement(s.a,{path:"/test/:post",component:k}),l.a.createElement(s.a,{component:_})))},null))),document.getElementById("root"))},49:function(e,t){},97:function(e,t,a){e.exports=a(282)}},[[97,1,2]]]);
//# sourceMappingURL=main.7a937af9.chunk.js.map