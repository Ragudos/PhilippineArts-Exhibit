var lt=Object.create;var $=Object.defineProperty;var dt=Object.getOwnPropertyDescriptor;var ct=Object.getOwnPropertyNames;var mt=Object.getPrototypeOf,ut=Object.prototype.hasOwnProperty;var me=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),S=(e,t)=>{for(var r in t)$(e,r,{get:t[r],enumerable:!0})},ue=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ct(t))!ut.call(e,n)&&n!==r&&$(e,n,{get:()=>t[n],enumerable:!(i=dt(t,n))||i.enumerable});return e};var f=(e,t,r)=>(r=e!=null?lt(mt(e)):{},ue(t||!e||!e.__esModule?$(r,"default",{value:e,enumerable:!0}):r,e)),pt=e=>ue($({},"__esModule",{value:!0}),e);var Ke=me((Fr,Je)=>{Je.exports={}});var rt=me((Ir,tt)=>{tt.exports={}});var St={};S(St,{assets:()=>st,assetsBuildDirectory:()=>Mt,entry:()=>Nt,future:()=>Lt,mode:()=>zt,publicPath:()=>Ct,routes:()=>At});module.exports=pt(St);var K={};S(K,{default:()=>be});var he=require("node:stream"),fe=require("@remix-run/node"),ge=require("@remix-run/react"),we=f(require("isbot")),ve=require("react-dom/server");var G=f(require("react")),W=G.default.createContext("");function F(){return G.default.useContext(W)}var J=require("react/jsx-runtime"),pe=5e3;async function be(e,t,r,i,n){let c=(0,we.default)(e.headers.get("user-agent"))?"onAllReady":"onShellReady";return new Promise((h,u)=>{let{pipe:g,abort:k}=(0,ve.renderToPipeableStream)((0,J.jsx)(W.Provider,{value:n?.cspNonce?n.cspNonce:"",children:(0,J.jsx)(ge.RemixServer,{abortDelay:pe,context:i,url:e.url})}),{[c](){let x=new he.PassThrough;r.set("Content-Type","text/html"),h(new Response((0,fe.createReadableStreamFromReadable)(x),{headers:r,status:t})),g(x)},onShellError(x){u(x)},onError(x){t=500,console.error(x)}});setTimeout(k,pe)})}var oe={};S(oe,{ErrorBoundary:()=>ke,default:()=>Ye,links:()=>bt,loader:()=>Me});var v=require("@remix-run/react");var xe="/build/_assets/globals-N6Z5ZQ54.css";var z=require("@remix-run/react");var y=require("react/jsx-runtime");function ke(){let e=(0,z.useRouteError)(),t=F();return(0,y.jsxs)("html",{children:[(0,y.jsxs)("head",{children:[(0,y.jsx)("title",{children:"Oops!"}),(0,y.jsx)("meta",{name:"robots",content:"nofollow noindex"}),(0,y.jsx)(z.Meta,{}),(0,y.jsx)(z.Links,{})]}),(0,y.jsxs)("body",{children:[(0,y.jsx)("h1",{children:(0,z.isRouteErrorResponse)(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:"Unknown Error"}),(0,y.jsx)(z.Scripts,{nonce:t})]})]})}var ze=require("@remix-run/node");var q=require("@remix-run/node"),D=(0,q.createCookie)("themes",{secure:!0,sameSite:"strict",path:"/",maxAge:60}),ye=(0,q.createCookie)("user-settings",{secure:!0,sameSite:"strict",path:"/",maxAge:60});var Me=async({request:e,params:t})=>{let r="production",i=e.headers.get("Cookie"),n={themes:await D.parse(i)||"system"},c=await ye.parse(i)||{};return(0,ze.json)({ENV:{NODE_ENV:r},themes:n?.themes??"system",userSettings:c})};var C={title:"Museo",description:"Ang tahanan ng sining ng mga manlilikhang Pilipino."};var Le=require("tailwind-merge"),Ce=require("clsx");function d(...e){return(0,Le.twMerge)((0,Ce.clsx)(...e))}var ft={"<":"&lt;",">":"&gt;","(":"&#40;",")":"&#41;",'"':"&quot;","'":"&apos;","/":"&#47","\\":"&#92;"};function P(e){return e.replace(/[&><"'\/\\]/g,t=>`${ft[t]}`)}function Ne(...e){return t=>{for(let r of e)r&&(typeof r=="function"?r(t):r.current=t)}}var re=require("@remix-run/react");var Ae=require("class-variance-authority"),Se=f(require("react")),Te=require("react/jsx-runtime"),I=(0,Ae.cva)("transition-colors duration-200 inline-flex justify-center font-medium items-center focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-background focus-visible:ring-offset-2 outline-transparent disabled:opacity-50",{variants:{size:{default:"text-sm h-9 px-4 py-2",sm:"text-xs h-8 px-2 py-1",md:"text-sm h-8 px-3 py-2",icon:"w-8 h-8"},rounded:{default:"rounded-md",sm:"rounded-sm",lg:"rounded-lg"},colors:{default:"bg-transparent text-foreground",primary:"bg-primary text-primary-foreground hover:bg-primary/80",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",accent:"bg-accent text-accent-foreground hover:bg-accent/80",ghost:"bg-transparent text-foreground hover:bg-accent/20",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/80"}},defaultVariants:{size:"default",rounded:"default",colors:"default"}}),b=Se.default.forwardRef(({className:e,type:t,size:r,rounded:i,colors:n,...c},h)=>(0,Te.jsx)("button",{type:t||"button",className:d(I({size:r,rounded:i,colors:n,className:e})),ref:h,...c}));var Be=f(require("react"));var T=f(require("react")),Ee=f(require("prop-types")),Z=require("class-variance-authority");var _=require("react/jsx-runtime"),gt=(0,Z.cva)("cursor-pointer transition-colors duration-200 inline-flex justify-center items-center focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-transparent disabled:opacity-50 p-2",{variants:{rounded:{default:"rounded-full",sm:"rounded-sm",lg:"rounded-lg"},colors:{default:"bg-muted text-muted-foreground hover:bg-muted/90",primary:"bg-primary text-primary-foreground hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/90",accent:"bg-accent text-accent-foreground hover:bg-accent/90",ghost:"bg-transparent text-foreground hover:bg-accent/20"},size:{default:"h-9 w-max",icon:"w-8 h-8"}},defaultVariants:{rounded:"default",colors:"default",size:"default"}}),wt=(0,Z.cva)("min-w-[5rem] absolute bg-inherit p-2 border w-max",{variants:{rounded:{md:"rounded-md",sm:"rounded-sm",none:"rounded-none",lg:"rounded-lg"},offset:{default:"top-[100%]",5:"top-[105%]",10:"top-[110%]","-5":"bottom-[105%]","-10":"bottom-[110%]"},position:{left:"left-0",right:"right-0",center:"mx-auto left-0 right-0"}},defaultVariants:{rounded:"md",offset:"default",position:"left"}}),j=T.default.forwardRef(({className:e,children:t,...r},i)=>{let n=T.default.useRef(null),c=T.default.useCallback(h=>{if(!n.current)return;let u=h.target;for(let g of n.current.children){if(u==g)return;for(let k of g.querySelectorAll("*"))if(u==k)return}n.current.removeAttribute("open")},[]);return T.default.useEffect(()=>{if(n.current)return document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}},[c]),(0,_.jsx)("details",{className:d("marker:hidden disabled:opacity-50 disabled:cursor-default",e,"relative"),ref:Ne(i,n),...r,children:t})}),E=T.default.forwardRef(({className:e,children:t,rounded:r,colors:i,...n},c)=>(0,_.jsx)("summary",{className:d(gt({rounded:r,colors:i,className:e})),ref:c,...n,children:t})),R=T.default.forwardRef(({className:e,children:t,position:r,rounded:i,offset:n,...c},h)=>(0,_.jsx)("div",{className:d(wt({position:r,offset:n,rounded:i,className:e})),ref:h,...c,children:t}));j.propTypes={children:Ee.default.arrayOf((e,t,r)=>e[t].type!=E&&e[t].type!=R?new Error(`${r} only accepts children of types: [${E.name}, ${R.name}]`):null)};j.displayName="Dropdown";E.displayName="DropdownLabel";R.displayName="DropdownContent";var ee=f(require("react")),te=ee.default.createContext(null);function Re(){return ee.default.useContext(te)}var w="/build/_assets/theme-icons-WC4TXDMN.svg";var je=require("@remix-run/react");var m=require("react/jsx-runtime"),He=Be.default.memo(()=>{let e=Re(),t=(0,je.useFetcher)();return(0,m.jsxs)(j,{id:"theme-dropdown",className:"flex items-center",children:[(0,m.jsxs)(E,{colors:"ghost",size:"icon",children:[(0,m.jsx)("p",{className:"sr-only",children:"Click to expand and choose a theme to set on the browser. The options are light, dark, and system settings."}),(0,m.jsx)("svg",{className:d("w-6 h-6 inline",{"hidden dark:inline":e!="dark"}),children:(0,m.jsx)("use",{href:w+"#moon-solid"})}),(0,m.jsx)("svg",{className:d("w-6 h-6 inline",{"hidden dark:hidden":e!="light"}),children:(0,m.jsx)("use",{href:w+"#sun-solid"})})]}),(0,m.jsx)(R,{offset:5,position:"right",className:"w-40 z-20 md:left-0 bg-muted text-muted-foreground px-0 shadow-lg shadow-black/20",children:(0,m.jsx)("div",{className:"relative",children:(0,m.jsxs)(t.Form,{method:"post",action:"/color-scheme",children:[(0,m.jsxs)(b,{type:"submit",value:"light",name:"colorScheme",className:d("gap-4 w-full h-auto justify-start py-1 px-3",{"bg-secondary hover:bg-secondary/90 font-bold scale-95":e=="light"}),colors:"ghost",disabled:e=="light",children:[(0,m.jsx)("svg",{className:d("w-6 h-6",{"stroke-2":e=="light"}),children:(0,m.jsx)("use",{href:w+"#sun-solid"})}),"Light"]}),(0,m.jsxs)(b,{type:"submit",value:"dark",name:"colorScheme",className:d("gap-4 w-full h-auto justify-start py-1 px-3",{"bg-secondary hover:bg-secondary/90 font-bold scale-95":e=="dark"}),colors:"ghost",disabled:e=="dark",children:[(0,m.jsx)("svg",{className:d("w-6 h-6",{"stroke-2":e=="dark"}),children:(0,m.jsx)("use",{href:w+"#moon-solid"})}),"Dark"]}),(0,m.jsxs)(b,{type:"submit",value:"system",name:"colorScheme",className:d("gap-4 w-full h-auto justify-start py-1 px-3",{"bg-secondary hover:bg-secondary/90 font-bold scale-95":e=="system"}),colors:"ghost",disabled:e=="system",children:[(0,m.jsx)("svg",{className:d("w-6 h-6 stroke-background",{"stroke-2":e=="system"}),children:(0,m.jsx)("use",{href:w+"#settings-solid"})}),"System"]})]})})})]})});var N=require("react/jsx-runtime"),De=()=>(0,N.jsx)("header",{className:"sticky px-4 top-0 z-40 border-b-[1px] border-transparent border-b-border bg-background",children:(0,N.jsxs)("div",{className:"container p-4 flex justify-between gap-4 items-end",children:[(0,N.jsx)(re.Link,{to:"/","aria-label":`${C.title} | Home`,title:`${C.title} | Home`,className:d(I(),"leading-none hyphens-none h-auto bg-transparent hover:bg-transparent font-cursive h2 p-0"),children:"museo"}),(0,N.jsxs)("nav",{className:"flex items-center gap-2 w-full justify-end md:justify-between h-full",children:[(0,N.jsx)(He,{}),(0,N.jsx)("div",{className:"flex items-center gap-2",children:(0,N.jsx)(re.Link,{to:"/trailer",className:d(I({colors:"primary"}),"tracking-wider uppercase font-semibold"),children:"TRAILER"})})]})]})});var $e=require("react/jsx-runtime"),Ve=({children:e,themes:t})=>(0,$e.jsx)(te.Provider,{value:t,children:e});var Fe=f(require("react")),Ie=require("react/jsx-runtime");function Pe({nonce:e,themes:t,...r}){return Fe.default.useEffect(()=>{if(document){let i=t;if(i=="system"||!i){let n=window.matchMedia("(prefers-color-scheme: dark)");document.documentElement.classList.remove("dark","light"),n.matches?document.documentElement.classList.add("dark"):document.documentElement.classList.add("light")}else(i=="dark"||i=="light")&&(document.documentElement.classList.remove("dark","light"),document.documentElement.classList.add(t))}},[t]),(0,Ie.jsx)("script",{dangerouslySetInnerHTML:{__html:`
            let colorScheme = "${t?P(t):"system"}";

            document.documentElement.classList.remove("dark", "light");

            if (colorScheme == "system" || !colorScheme) {
                let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
                
                if (mediaQuery.matches) {
                    document.documentElement.classList.add("dark");
                }
            } else {
                document.documentElement.classList.add(colorScheme);
            }
        `},nonce:e,...r})}var _e=f(require("react")),Ue=require("react/jsx-runtime");function Oe({nonce:e,userSettings:t,...r}){return _e.default.useEffect(()=>{document&&(document.documentElement.classList.remove("outline","solid"),t?.iconType=="solid"||t?.iconType=="outline"?document.documentElement.classList.add(t?.iconType||"solid"):document.documentElement.classList.add("solid"))},[t?.iconType]),(0,Ue.jsx)("script",{dangerouslySetInnerHTML:{__html:`
            let preferredIcon = "${t?.iconType}";

            document.documentElement.classList.remove("outline", "solid");

            if (preferredIcon == "solid" || preferredIcon == "outline") {
                document.documentElement.classList.add("${t?.iconType}");
            } else {
                document.documentElement.classList.add("solid");
            }
        `},nonce:e,...r})}var l=require("react/jsx-runtime"),bt=()=>[...void 0?[{rel:"stylesheet",href:void 0}]:[],{rel:"stylesheet",href:xe}];function Ye(){let e=F(),{ENV:t,themes:r,userSettings:i}=(0,v.useLoaderData)();return(0,l.jsxs)("html",{suppressHydrationWarning:!0,lang:"en",className:d(r=="dark"||r=="light"?r:void 0,i?.iconType??"solid"),"data-theme":r??"system",children:[(0,l.jsxs)("head",{children:[(0,l.jsx)("meta",{charSet:"utf-8"}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,l.jsx)("meta",{name:"theme-color",content:"hsl(20, 22%, 57%)"}),(0,l.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/metadata/apple-touch-icon.png"}),(0,l.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/metadata/favicon-32x32.png"}),(0,l.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/metadata/favicon-16x16.png"}),(0,l.jsx)("link",{rel:"manifest",href:"/metadata/site.webmanifest"}),(0,l.jsx)(v.Meta,{}),(0,l.jsx)(v.Links,{}),(0,l.jsx)(Pe,{themes:r,nonce:e}),(0,l.jsx)(Oe,{userSettings:i,nonce:e}),(0,l.jsx)("script",{dangerouslySetInnerHTML:{__html:`
                        window.ENV = ${JSON.stringify(t)};
                        window.themes = "${r?P(r):"system"}"
                        window.settings = ${JSON.stringify(i)}
                        `},nonce:e,defer:!0})]}),(0,l.jsx)("body",{children:(0,l.jsxs)(Ve,{themes:r,children:[(0,l.jsx)(De,{}),(0,l.jsx)("main",{className:"container",children:(0,l.jsx)(v.Outlet,{})}),(0,l.jsx)(v.ScrollRestoration,{nonce:e}),(0,l.jsx)(v.Scripts,{nonce:e}),(0,l.jsx)(v.LiveReload,{nonce:e})]})})]})}var ae={};S(ae,{action:()=>Qe});async function Qe({request:e}){let t=await e.formData(),r=String(t.get("colorScheme")),i=e.headers.get("Cookie"),n=await D.parse(i);return new Response("OK",{headers:{"Set-Cookie":await D.serialize(r,{expires:new Date(Date.now()+6e4)})}})}var ie={};S(ie,{default:()=>We,loader:()=>O,meta:()=>xt});var A=f(require("react"));function H({title:e,description:t}){let r;return typeof e=="string"?r=e:r=e.isAbsolute?e.text:`${C.title} ${e.text}`,[{title:r},{description:t}]}async function O({request:e}){return(await fetch(new URL(e.url).origin+"/assets/art.json",{method:"GET",mode:"same-origin",headers:{"Content-Type":"application/json"}})).json()}var X=require("@remix-run/react");var M=f(require("react"));var o=require("react/jsx-runtime"),Ge=({artwork:{title:e,category:t,description:r,artist:i,techniques:n,materials:c},setIsPaused:h})=>{let[u,g]=M.default.useState(!1),[k,x]=M.default.useState(!1),s=M.default.useMemo(()=>u?k?`/assets/${t}/250/${e.toLowerCase()}.jpg 250w,
                            /assets/${t}/500/${e.toLowerCase()}.jpg 500w,
                            /assets/${t}/1000/${e.toLowerCase()}.jpg 1000w,
                            /assets/${t}/1500/${e.toLowerCase()}.jpg 1500w,
                            /assets/${t}/2000/${e.toLowerCase()}.jpg 2000w`:` /assets/${t}/250/${e.toLowerCase()}.webp 250w,
                            /assets/${t}/500/${e.toLowerCase()}.webp 500w,
                            /assets/${t}/1000/${e.toLowerCase()}.webp 1000w,
                            /assets/${t}/1500/${e.toLowerCase()}.webp 1500w,
                            /assets/${t}/2000/${e.toLowerCase()}.webp 2000w`:`/assets/${t}/250/${e.toLowerCase()}.avif 250w,
                        /assets/${t}/500/${e.toLowerCase()}.avif 500w,
                        /assets/${t}/1000/${e.toLowerCase()}.avif 1000w,
                        /assets/${t}/1500/${e.toLowerCase()}.avif 1500w,
                        /assets/${t}/2000/${e.toLowerCase()}.avif 2000w`,[u,k,e,t]),p=M.default.useRef(null),B=M.default.useCallback(L=>{L.target==p.current&&(p.current.close(),h(!1))},[h]);M.default.useEffect(()=>{if(p.current)return p.current.addEventListener("click",B),()=>{p.current?.removeEventListener("click",B)}},[B]);let ce=r.split(".");return(0,o.jsxs)(M.default.Fragment,{children:[(0,o.jsx)("dialog",{className:"bg-transparent",ref:p,children:(0,o.jsxs)("div",{className:"flex flex-col gap-2 bg-transparent",children:[(0,o.jsx)("div",{className:"flex justify-end px-1 pt-2",children:(0,o.jsxs)(b,{colors:"ghost",size:"sm",className:"font-semibold gap-2",onClick:()=>{h(!1),p.current.close()},children:[(0,o.jsx)("svg",{className:"own-width w-4 h-4",children:(0,o.jsx)("use",{href:w+"#x-icon-small"})}),"CLOSE"]})}),(0,o.jsx)("img",{srcSet:s,onError:()=>{u||g(!0),u&&!k&&x(!0)},alt:r,className:"w-full max-w-full h-fit max-h-[42.5rem]",src:`/assets/${t}/10/${e.toLowerCase()}.jpg`,sizes:"(min-width: 520px) 500px, (min-width: 768px) 1000px, (min-width: 1280px) 1500px, (min-width: 2000px) 2000px, 250px"})]})}),(0,o.jsxs)("article",{className:"justify-center container flex-1 flex flex-col gap-12 xl:gap-24 md:flex-row pb-24 animate-fade duration-500",children:[(0,o.jsxs)("div",{className:"w-fit h-fit flex items-start relative",children:[(0,o.jsx)("img",{srcSet:s,onError:()=>{u||g(!0),u&&!k&&x(!0)},alt:r,className:"w-full max-w-full h-fit max-h-[42.5rem]",sizes:"(min-width: 520px) 500px, (min-width: 768px) 1000px, (min-width: 1280px) 1500px, (min-width: 2000px) 2000px, 250px",loading:"eager"}),(0,o.jsxs)(b,{colors:"secondary",size:"sm",className:"absolute bottom-1 left-1 font-semibold gap-2",onClick:()=>{h(!0),p.current.showModal()},children:[(0,o.jsx)("svg",{className:"own-width w-4 h-4",children:(0,o.jsx)("use",{href:w+"#expand-small"})}),"Expand image"]})]}),(0,o.jsxs)("div",{className:"flex flex-col gap-4 xl:gap-8 items-center md:w-[45%] xl:w-[35%]",children:[(0,o.jsxs)("div",{className:"w-full",children:[(0,o.jsx)("h1",{children:(0,o.jsx)("strong",{className:"font-semibold",children:e})}),(0,o.jsx)("div",{children:i})]}),(0,o.jsx)("p",{className:"text-justify",children:ce.map((L,V)=>{if(V!=ce.length-1)return(0,o.jsxs)(M.default.Fragment,{children:[L,".",V>0&&V%3==0?(0,o.jsxs)(M.default.Fragment,{children:[(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]}):void 0]},V)})}),(0,o.jsx)("hr",{className:"bg-foreground w-full"}),(0,o.jsxs)("section",{className:"flex flex-col gap-2 xl:gap-4 w-full",children:[(0,o.jsx)("h2",{className:"sr-only",children:"Metadata about the artwork"}),(0,o.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,o.jsx)("div",{className:"h5",children:"Category"}),(0,o.jsx)("small",{children:t[0].toUpperCase()+t.slice(1)})]}),n&&(0,o.jsxs)("div",{className:"w-full flex gap-2 flex-col",children:[(0,o.jsx)("div",{className:"h6 font-medium",children:"Techinques used"}),(0,o.jsx)("ul",{className:"flex items-center flex-wrap gap-4",children:n.map(L=>(0,o.jsx)("li",{children:(0,o.jsx)("small",{children:L})},L+e))})]}),c&&(0,o.jsxs)("div",{className:"w-full flex gap-2 flex-col",children:[(0,o.jsx)("div",{className:"h6 font-medium",children:"Materials used"}),(0,o.jsx)("ul",{className:"flex items-center flex-wrap gap-4",children:c.map(L=>(0,o.jsx)("li",{children:(0,o.jsx)("small",{children:L})},L+e))})]})]})]})]})]})};var a=require("react/jsx-runtime"),xt=()=>H({title:{isAbsolute:!1,text:"| Slideshow"},description:C.description}),U=1e4;function We(){let e=(0,X.useLoaderData)(),[t,r]=(0,X.useSearchParams)(),[i,n]=A.default.useState(U),[c,h]=A.default.useState(!1),u=A.default.useMemo(()=>e.findIndex(s=>s.title.toLowerCase().trim()==t.get("artwork")?.toLowerCase().trim()),[e,t.get("artwork")]),g=e[u],k=A.default.useRef(null),x=A.default.useCallback(()=>{r(s=>{let p=(u+1)%e.length;return s.set("artwork",e[p].title),s})},[e,u]);return A.default.useEffect(()=>{if(u==-1)return;let s;return s=setTimeout(()=>{c||n(p=>{let B=p-1e3;return B<=0?U:B})},1e3),()=>{clearTimeout(s)}},[e,u,c,i]),A.default.useEffect(()=>{i<=1e3&&x()},[i]),(0,a.jsxs)(A.default.Fragment,{children:[g&&(0,a.jsxs)("div",{id:"slideshow",className:"flex flex-col min-h-[80dvh]",children:[(0,a.jsx)(Ge,{artwork:g,setIsPaused:h}),(0,a.jsxs)("div",{className:"z-50 fixed bottom-0 left-0 w-full bg-background",children:[(0,a.jsx)("div",{className:"w-full h-[0.175rem] relative bg-accent/20","aria-label":"Slideshow Progress",children:(0,a.jsx)("span",{className:"left-0 top-0 absolute h-full bg-accent transition-[width] will-change-[width] duration-500",style:{width:`${(u+1)/e.length*100}%`}})}),(0,a.jsxs)("div",{className:"flex justify-between items-center gap-4 flex-wrap px-4 py-2",children:[(0,a.jsxs)(j,{ref:k,className:"flex items-center",children:[(0,a.jsxs)(E,{className:"h-auto flex-col px-4 py-2 items-start",rounded:"sm",colors:"ghost",children:[(0,a.jsx)("strong",{className:"h5 font-semibold",children:g.title}),(0,a.jsx)("small",{children:g.artist})]}),(0,a.jsx)(R,{position:"center",offset:"-10",className:"flex-col bg-muted text-muted-foreground flex gap-2 max-h-[20rem] overflow-y-auto",children:e.map(s=>(0,a.jsxs)(b,{onClick:()=>{r(p=>(p.set("artwork",s.title),p)),k.current?.removeAttribute("open")},title:`View ${s.title}`,"aria-label":`View ${s.title}`,colors:"ghost",className:d("flex-col py-2 px-4 h-auto",{"bg-accent/20 scale-95":s.title==g.title}),children:[(0,a.jsx)("strong",{className:"h5 semibold",children:s.title}),(0,a.jsx)("small",{children:s.artist})]},s.title))})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(b,{"aria-label":"Go to previous artwork",size:"icon",colors:"ghost",className:"p-0",onClick:()=>{r(s=>{let p=u==0?e.length-1:u-1;return s.set("artwork",e[p].title),s}),n(U)},children:(0,a.jsx)("svg",{children:(0,a.jsx)("use",{href:w+"#chevron-left"})})}),(0,a.jsxs)(b,{"aria-label":"Pause/Play slideshow",size:"icon",colors:"ghost",className:"p-0",onClick:()=>{h(s=>!s)},children:[!c&&(0,a.jsx)("svg",{children:(0,a.jsx)("use",{href:w+"#pause-solid"})}),c&&(0,a.jsx)("svg",{children:(0,a.jsx)("use",{href:w+"#play-solid"})})]}),(0,a.jsx)(b,{"aria-label":"Go to next artwork",size:"icon",colors:"ghost",className:"p-0",onClick:()=>{x(),n(U)},children:(0,a.jsx)("svg",{children:(0,a.jsx)("use",{href:w+"#chevron-right"})})})]})]})]})]}),!g&&(0,a.jsx)("div",{className:"min-h-[50dvh] grid place-items-center",children:(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("p",{children:"There is no artwork with that title."}),(0,a.jsx)(b,{colors:"secondary",onClick:()=>{r(s=>(s.set("artwork",e[0].title),s))},children:"Start at the beginning?"})]})})]})}var se={};S(se,{default:()=>et,meta:()=>kt});var Y=f(require("react")),Ze=f(Ke());var ne=require("react/jsx-runtime"),kt=()=>H({title:{isAbsolute:!1,text:"| Trailer"},description:"A trailer for the art exhibit."}),qe=!0;function et(){let[e,t]=Y.default.useState(!qe);return Y.default.useEffect(()=>{qe=!1,t(!0)},[]),(0,ne.jsx)(Y.default.Fragment,{children:e&&(0,ne.jsx)(Ze.Video,{})})}var de={};S(de,{default:()=>nt,loader:()=>O,meta:()=>yt});var Q=f(require("react"));var at=require("@remix-run/react"),it=f(rt()),le=require("react/jsx-runtime"),yt=()=>H({title:C.title,description:"A slideshow of all the artworks."}),ot=!0;function nt(){let e=(0,at.useLoaderData)(),[t,r]=Q.default.useState(!ot);return Q.default.useEffect(()=>{ot=!1,r(!0)}),(0,le.jsx)(Q.default.Fragment,{children:t&&(0,le.jsx)(it.default,{artworks:e})})}var st={entry:{module:"/build/entry.client-SRDXKMOW.js",imports:["/build/_shared/chunk-AGVK2XTQ.js","/build/_shared/chunk-R7XMM2IK.js","/build/_shared/chunk-Q3IECNXJ.js"]},routes:{root:{id:"root",parentId:void 0,path:"",index:void 0,caseSensitive:void 0,module:"/build/root-ELE3S24F.js",imports:["/build/_shared/chunk-WY6Q2I63.js","/build/_shared/chunk-WHS4NVJI.js","/build/_shared/chunk-OOXTHYUB.js"],hasAction:!1,hasLoader:!0,hasErrorBoundary:!0},"routes/_index":{id:"routes/_index",parentId:"root",path:void 0,index:!0,caseSensitive:void 0,module:"/build/routes/_index-LTBJVZGD.js",imports:["/build/_shared/chunk-XAHF6QBP.js"],hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/color-scheme":{id:"routes/color-scheme",parentId:"root",path:"color-scheme",index:void 0,caseSensitive:void 0,module:"/build/routes/color-scheme-OFOKU3R4.js",imports:void 0,hasAction:!0,hasLoader:!1,hasErrorBoundary:!1},"routes/slideshow":{id:"routes/slideshow",parentId:"root",path:"slideshow",index:void 0,caseSensitive:void 0,module:"/build/routes/slideshow-GWUJFPNU.js",imports:["/build/_shared/chunk-XAHF6QBP.js"],hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/trailer":{id:"routes/trailer",parentId:"root",path:"trailer",index:void 0,caseSensitive:void 0,module:"/build/routes/trailer-WZ6YXI5D.js",imports:["/build/_shared/chunk-XAHF6QBP.js"],hasAction:!1,hasLoader:!1,hasErrorBoundary:!1}},version:"fcb3239c",hmr:void 0,url:"/build/manifest-FCB3239C.js"};var zt="production",Mt="public\\build",Lt={v3_fetcherPersist:!1},Ct="/build/",Nt={module:K},At={root:{id:"root",parentId:void 0,path:"",index:void 0,caseSensitive:void 0,module:oe},"routes/color-scheme":{id:"routes/color-scheme",parentId:"root",path:"color-scheme",index:void 0,caseSensitive:void 0,module:ae},"routes/slideshow":{id:"routes/slideshow",parentId:"root",path:"slideshow",index:void 0,caseSensitive:void 0,module:ie},"routes/trailer":{id:"routes/trailer",parentId:"root",path:"trailer",index:void 0,caseSensitive:void 0,module:se},"routes/_index":{id:"routes/_index",parentId:"root",path:void 0,index:!0,caseSensitive:void 0,module:de}};0&&(module.exports={assets,assetsBuildDirectory,entry,future,mode,publicPath,routes});