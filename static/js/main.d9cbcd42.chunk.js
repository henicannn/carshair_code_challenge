(this.webpackJsonpcarshair_code_challenge=this.webpackJsonpcarshair_code_challenge||[]).push([[0],{25:function(e,a,n){},44:function(e,a,n){},46:function(e,a,n){},47:function(e,a,n){},48:function(e,a,n){"use strict";n.r(a);var m=n(2),t=n.n(m),A=n(18),c=n.n(A),O=(n(25),n(4)),r=n(5),E=n(8),s=n.n(E),R=(n(44),n(1));var N=function(e){var a=e.year,n=e.data,t=e.searchNames,A=e.count,c=(e.make,Object(m.useState)([])),E=Object(O.a)(c,2),N=E[0],I=E[1],i="3dWLZXzv94Cd8ah_dwT3TqMB3MtfaW_fqxVvDLlSNng";Object(m.useEffect)((function(){s.a.get("https://api.unsplash.com/search/photos?page=1&per_page="+A+"&query=cars&client_id="+i).then((function(e){I(e.data.results)})).catch((function(e){console.log(e)}))}),[A,i]);var T=N.map((function(e,a){return Object(r.a)(Object(r.a)({},e),{},{index:a})})),l=n.map((function(e,a){return Object(r.a)(Object(r.a)({},e),{},{index:a})})),S=T.map((function(e,a){return Object.assign({},e,l[a])}));return console.log(S),Object(R.jsx)(R.Fragment,{children:A>0?Object(R.jsx)("div",{className:"CarCard",children:Object(R.jsx)("div",{className:"CarCardContainer",children:S.filter((function(e){return""===t||e.Model_Name.toLowerCase().includes(t.toLowerCase())?e:void 0})).map((function(e,n){return Object(R.jsxs)("div",{className:"CarCardInfo",children:[Object(R.jsx)("div",{className:"CarCardImage",children:Object(R.jsx)("img",{src:e.urls.small,alt:"Images"})}),Object(R.jsxs)("div",{className:"CarCardText",children:[Object(R.jsx)("h2",{children:"Name\xa0:\xa0"}),e.Model_Name]}),Object(R.jsxs)("div",{className:"CarCardText",children:[Object(R.jsx)("h2",{children:"Make\xa0:\xa0"}),e.Make_Name]}),Object(R.jsxs)("div",{className:"CarCardText",children:[Object(R.jsx)("h2",{children:"Type\xa0:\xa0"}),e.VehicleTypeName]}),Object(R.jsxs)("div",{className:"CarCardText",children:[Object(R.jsx)("h2",{children:"Year\xa0:\xa0"}),a]})]})}))})}):Object(R.jsx)("div",{className:"NoResults",children:"No results found!"})})},I=(n(46),[{name:"AC"},{name:"AC PROPULSION"},{name:"ACURA"},{name:"A.D. TRAMONTANA"},{name:"ALFA ROMEO"},{name:"ALMAC"},{name:"ALTERNATIVE CARS"},{name:"AMUZA"},{name:"ANTEROS"},{name:"ARASH"},{name:"ARIEL"},{name:"ARRINERA"},{name:"ASL"},{name:"ASTERIO"},{name:"ASTON MARTIN"},{name:"AUDI"},{name:"BAC"},{name:"BAJAJ"},{name:"BEIJING AUTOMOBILE WORKS"},{name:"BENTLEY"},{name:"BMW"},{name:"BOLLOR\xc9"},{name:"BOLWELL"},{name:"BRILLIANCE / HUACHEN"},{name:"BRISTOL"},{name:"BRITISH LEYLAND"},{name:"BRM BUGGY"},{name:"BROOKE"},{name:"BUDDY"},{name:"BUFORI"},{name:"BUGATTI"},{name:"BUICK"},{name:"BYD"},{name:"CADILLAC"},{name:"CAPARO"},{name:"CARBONTECH"},{name:"CARICE"},{name:"CHANG'AN"},{name:"CHANGHE"},{name:"CHERY"},{name:"CHEVROLET"},{name:"CHEVRON"},{name:"CITRO\xcbN"},{name:"CHRYSLER"},{name:"COMMUTER CARS"},{name:"CONNAUGHT"},{name:"COVINI"},{name:"DACIA"},{name:"DAIHATSU"},{name:"DATSUN"},{name:"DE LA CHAPELLE"},{name:"DMC"},{name:"DIARDI"},{name:"DODGE"},{name:"DONKERVOORT"},{name:"DONGFENG"},{name:"DONTO"},{name:"DS AUTOMOBILES"},{name:"DYNASTI ELECTRIC CAR CORP."},{name:"E-VADE"},{name:"EFFEDI"},{name:"EGY-TECH ENGINEERING"},{name:"ELECTRIC RACEABOUT"},{name:"ELFIN"},{name:"EMGRAND"},{name:"ENGLON"},{name:"ETERNITI"},{name:"ETOX"},{name:"EQUUS"},{name:"EXAGON"},{name:"FARALLI & MAZZANTI"},{name:"FAW"},{name:"FERRARI"},{name:"FIAT"},{name:"FISKER"},{name:"FODAY"},{name:"FORCE"},{name:"FORD"},{name:"FORD AUSTRALIA"},{name:"FORD GERMANY"},{name:"FORNASARI"},{name:"FRASER"},{name:"GAC GROUP"},{name:"GALPIN"},{name:"GEELY"},{name:"GENESIS"},{name:"GIBBS"},{name:"GILLET"},{name:"GINETTA"},{name:"GMC"},{name:"GONOW"},{name:"GREAT WALL / CHANGCHENG"},{name:"GREENTECH AUTOMOTIVE"},{name:"GRINNALL"},{name:"GTA MOTOR"},{name:"GUMPERT"},{name:"GURGEL"},{name:"HENNESSEY"},{name:"HINDUSTAN"},{name:"HOLDEN"},{name:"HONDA"},{name:"HONGQI"},{name:"HRADYESH"},{name:"HTT TECHNOLOGIES"},{name:"HULME"},{name:"HYUNDAI"},{name:"ICML"},{name:"IFR"},{name:"IRAN KHODRO"},{name:"IKCO"},{name:"IMPERIA"},{name:"INFINITI"},{name:"IVM"},{name:"INVICTA"},{name:"ISDERA"},{name:"ISUZU"},{name:"JAC"},{name:"JAGUAR"},{name:"JEEP"},{name:"JENSEN MOTORS"},{name:"JETCAR"},{name:"JONWAY"},{name:"JOSS"},{name:"KAIPAN"},{name:"KANTANKA"},{name:"KARMA"},{name:"KOENIGSEGG"},{name:"KORRES"},{name:"KIA"},{name:"KIAT"},{name:"KISH KHODRO"},{name:"KTM"},{name:"LADA"},{name:"LAMBORGHINI"},{name:"LANCIA"},{name:"LAND ROVER"},{name:"LANDWIND"},{name:"LARAKI"},{name:"LEBLANC"},{name:"LEITCH"},{name:"LEOPARD"},{name:"LEXUS"},{name:"LI-ION"},{name:"LIFAN"},{name:"LIGHTNING"},{name:"LINCOLN"},{name:"LISTER"},{name:"LOCAL MOTORS"},{name:"LOBINI"},{name:"LOTEC"},{name:"LOTUS CARS"},{name:"LUCRA CARS"},{name:"LUXGEN"},{name:"MAHINDRA"},{name:"MARUSSIA"},{name:"MARUTI SUZUKI"},{name:"MASERATI"},{name:"MASTRETTA"},{name:"MAZDA"},{name:"MCLAREN"},{name:"MERCEDES-BENZ"},{name:"MG"},{name:"MICRO"},{name:"MINI"},{name:"MITSUBISHI"},{name:"MITSUOKA"},{name:"MORGAN"},{name:"MULLEN"},{name:"MYCAR"},{name:"MYVI-PERODUA"},{name:"NISSAN"},{name:"NOBLE"},{name:"NOTA"},{name:"OLDSMOBILE"},{name:"OPEL"},{name:"OPTIMAL ENERGY"},{name:"ORCA"},{name:"OLTCIT"},{name:"PAGANI"},{name:"PANHARD"},{name:"PANOZ"},{name:"PERANA"},{name:"PERODUA"},{name:"PEUGEOT"},{name:"P.G.O."},{name:"POLARSUN"},{name:"PLYMOUTH"},{name:"PORSCHE"},{name:"PROTO"},{name:"OULLIM"},{name:"PROTON"},{name:"PURITALIA"},{name:"QOROS"},{name:"QVALE"},{name:"RADICAL"},{name:"RELIANT"},{name:"RENAULT"},{name:"REVA"},{name:"RIMAC"},{name:"RINSPEED"},{name:"RODING"},{name:"ROEWE"},{name:"ROLLS-ROYCE"},{name:"ROSSIN-BERTIN"},{name:"ROSSION"},{name:"ROVER"},{name:"SAAB"},{name:"SALEEN"},{name:"SAIC-GM-WULING"},{name:"SAIPA"},{name:"SAKER"},{name:"SAMSUNG"},{name:"SAN"},{name:"SBARRO"},{name:"SCION"},{name:"SEAT"},{name:"SHANGHAI MAPLE"},{name:"SIN"},{name:"\u0160KODA"},{name:"SMART"},{name:"SPADA VETTURE SPORT"},{name:"SPYKER"},{name:"SSANGYONG"},{name:"SSC NORTH AMERICA"},{name:"STREET & RACING TECHNOLOGY"},{name:"SUBARU"},{name:"SUZUKI"},{name:"TANOM"},{name:"TATA"},{name:"TAURO"},{name:"TAWON CAR"},{name:"TD CARS"},{name:"TESLA"},{name:"THAI RUNG"},{name:"TOYOTA",selected:!0},{name:"TREKKA"},{name:"TRIDENT"},{name:"TRIUMPH"},{name:"TROLLER"},{name:"TRUMPCHI"},{name:"TUSHEK"},{name:"TVR"},{name:"TVS"},{name:"ULTIMA"},{name:"UMM"},{name:"UEV"},{name:"URI"},{name:"UAZ"},{name:"VAUXHALL MOTORS"},{name:"VECTOR"},{name:"VENCER"},{name:"VENIRAUTO"},{name:"VENTURI"},{name:"VEPR"},{name:"VOLKSWAGEN"},{name:"VOLVO"},{name:"VINFAST"},{name:"W MOTORS"},{name:"WALLYSCAR"},{name:"WESTFIELD"},{name:"WHEEGO"},{name:"WIESMANN"},{name:"XENIA"},{name:"YES!"},{name:"YOUABIAN PUMA"},{name:"ZASTAVA AUTOMOBILES"},{name:"ZENDER CARS"},{name:"ZENOS CARS"},{name:"ZENVO"},{name:"ZIL"},{name:"ZX AUTO"}]),i=[{year:"2021"},{year:"2020"},{year:"2019"},{year:"2018"},{year:"2017"},{year:"2016"},{year:"2015",selected:!0},{year:"2014"},{year:"2013"},{year:"2012"},{year:"2011"},{year:"2010"},{year:"2009"},{year:"2008"},{year:"2007"},{year:"2006"},{year:"2005"},{year:"2004"},{year:"2003"},{year:"2002"},{year:"2001"},{year:"2000"},{year:"1999"},{year:"1998"}],T=[{type:"Passenger Car",selected:!0},{type:"Truck"},{type:"Multipurpose Passenger Vehicle (MPV)"},{type:"Low Speed Vehicle (LSV)"},{type:"Bus"},{type:"Incomplete Vehicle"},{type:"Trailer"}],l=n(20),S=n(19);var L=function(){var e=Object(m.useState)([]),a=Object(O.a)(e,2),n=a[0],t=a[1],A=Object(m.useState)([]),c=Object(O.a)(A,2),r=c[0],E=c[1],L=Object(m.useState)("Toyota"),o=Object(O.a)(L,2),C=o[0],j=o[1],d=Object(m.useState)("2015"),u=Object(O.a)(d,2),M=u[0],b=u[1],h=Object(m.useState)("car"),U=Object(O.a)(h,2),G=U[0],D=U[1],H=Object(m.useState)(""),y=Object(O.a)(H,2),f=y[0],p=y[1],x=Object(m.useState)(!1),P=Object(O.a)(x,2),v=P[0],B=P[1],g=Object(m.useState)(!1),V=Object(O.a)(g,2),F=V[0],Y=V[1],K=function(){var e=Object(m.useState)([window.innerHeight,window.innerWidth]),a=Object(O.a)(e,2),n=a[0],t=a[1];return Object(m.useEffect)((function(){var e=function(){t([window.innerHeight,window.innerWidth])};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),n}(),W=Object(O.a)(K,2),w=(W[0],W[1]);Object(m.useEffect)((function(){s.a.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/"+C+"/modelyear/"+M+"/vehicletype/"+G+"?format=json").then((function(e){t(e.data.Results),E(e.data.Count)})).catch((function(e){console.log(e)})),console.log(C)}),[C,M,G]);var Z=function(){Y(!F),console.log(F)};return Object(m.useEffect)((function(){w<451?(Y(!1),B(!0)):(Y(!0),B(!1))}),[w]),Object(R.jsxs)("div",{className:"FetchData",children:[Object(R.jsx)(R.Fragment,{children:F?Object(R.jsx)(R.Fragment,{children:v?Object(R.jsx)(S.a,{className:"MenuIcon",onClick:Z}):null}):Object(R.jsx)(R.Fragment,{children:v?Object(R.jsx)(l.a,{className:"MenuIcon",onClick:Z}):null})}),F?Object(R.jsxs)("div",{className:"EntryForm",children:[Object(R.jsxs)("form",{className:"Form",children:[Object(R.jsxs)("label",{children:["MAKE:",Object(R.jsx)("select",{id:"cars",name:"cars",onChange:function(e){return j(e.target.value)},children:I.map((function(e,a){return Object(R.jsx)("option",{value:e.name,selected:e.selected,children:e.name})}))})]}),Object(R.jsxs)("label",{children:["YEAR:",Object(R.jsx)("select",{id:"years",name:"years",onChange:function(e){return b(e.target.value)},children:i.map((function(e,a){return Object(R.jsx)("option",{value:e.year,selected:e.selected,children:e.year})}))})]}),Object(R.jsxs)("label",{children:["TYPE:",Object(R.jsx)("select",{id:"type",name:"type",onChange:function(e){return D(e.target.value)},children:T.map((function(e,a){return Object(R.jsx)("option",{value:e.type,selected:e.selected,children:e.type})}))})]})]}),Object(R.jsx)("input",{type:"text",className:"Search",placeholder:"Search by name",onChange:function(e){return p(e.target.value)}})]}):null,Object(R.jsx)("div",{children:Object(R.jsx)(N,{year:M,data:n,searchNames:f,count:r,make:C,type:G})})]})};n(47);var o=function(){return Object(R.jsx)("div",{className:"App",children:Object(R.jsx)(L,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(a){var n=a.getCLS,m=a.getFID,t=a.getFCP,A=a.getLCP,c=a.getTTFB;n(e),m(e),t(e),A(e),c(e)}))};c.a.render(Object(R.jsx)(t.a.StrictMode,{children:Object(R.jsx)(o,{})}),document.getElementById("root")),C()}},[[48,1,2]]]);
//# sourceMappingURL=main.d9cbcd42.chunk.js.map