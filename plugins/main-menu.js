const _0x588758=_0x4f55;(function(_0x136940,_0x4b746b){const _0x2d7c0a=_0x4f55,_0x1b207b=_0x136940();while(!![]){try{const _0x2c60b3=-parseInt(_0x2d7c0a(0xf4))/0x1*(parseInt(_0x2d7c0a(0xaf))/0x2)+-parseInt(_0x2d7c0a(0x94))/0x3+parseInt(_0x2d7c0a(0xb8))/0x4*(-parseInt(_0x2d7c0a(0xf9))/0x5)+-parseInt(_0x2d7c0a(0xd4))/0x6+parseInt(_0x2d7c0a(0xb3))/0x7+-parseInt(_0x2d7c0a(0xbd))/0x8+-parseInt(_0x2d7c0a(0xd8))/0x9*(-parseInt(_0x2d7c0a(0x99))/0xa);if(_0x2c60b3===_0x4b746b)break;else _0x1b207b['push'](_0x1b207b['shift']());}catch(_0x595435){_0x1b207b['push'](_0x1b207b['shift']());}}}(_0x2616,0x35071));import{promises}from'fs';import{join}from'path';import _0x1c8bac from'node-fetch';import{xpRange}from'../lib/levelling.js';let tags={'main':_0x588758(0xbb),'game':_0x588758(0xeb),'econ':_0x588758(0xc7),'rg':'REGISTRO','sticker':_0x588758(0xe4),'img':_0x588758(0xd1),'maker':_0x588758(0xb1),'prem':_0x588758(0xbf),'group':_0x588758(0xb6),'nable':_0x588758(0xcd),'nime':_0x588758(0xa8),'rnime':_0x588758(0x9c),'dl':_0x588758(0xe5),'tools':'TOOLS','fun':_0x588758(0xf0),'cmd':_0x588758(0xfc),'nsfw':'NSFW\x20+18','owner':_0x588758(0xdf),'advanced':_0x588758(0xe2)};const defaultMenu={'before':'\x0a╭╾┅≼☬≽𓀬≼☬≽┅╼╮\x0a╽❰TURBO\x20NITRO\x20BOT❱\x0a╿⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆\x0a┃👋🏻\x20_Hola_\x20%name\x0a┃\x0a┃💱\x20Nivel\x20:\x20%level\x20\x0a┃☣️\x20Usuarios\x20:\x20%totalreg\x0a┃⏱️\x20Bot\x20activo\x20:\x20%muptime\x0a├──────────⋆\x0a┃❮❮❮\x20CANAL\x20OFC\x20❱❱❱\x0a┃❤\x20️Turbo\x20Nitro\x20❤️\x0a┃Suscríbete\x20y\x20activa\x0a┃La\x20Campanita\x20🔔\x0a┃Con\x20eso\x20ya\x20estas\x0a┃Apoyando\x20al\x20Bot❤️\x0a┃https://youtube.com/c/TURBONTR1\x0a╰•⋆҈͜͡.𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐈𝐓𝐑𝐎⋆҈͜͡•╯\x0a%readmore\x0aⓅ\x20=\x20Premium\x0aⓓ\x20=\x20Diamantes\x0a⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆\x0a╭──❯.⋆☆☆☆⋆.❮──╮\x0a╽⋆TURBO\x20BOT\x20MENÚ⋆\x0a╰•⋆҈͜͡.➣❂ᵗᵘʳᵇⁱᵗᵒ\x20ᵇᵒᵗ❂◄⋆҈͜͡•╯\x0a'[_0x588758(0xe7)](),'header':_0x588758(0xde),'body':_0x588758(0xad),'footer':_0x588758(0xa2),'after':'\x0a'};let handler=async(_0x3bdafe,{conn:_0x2fdff1,usedPrefix:_0x46497e,__dirname:_0x1e54b2})=>{const _0x102fbe=_0x588758;try{let _0x2d77cf=JSON[_0x102fbe(0xb2)](await promises[_0x102fbe(0xf8)](join(_0x1e54b2,_0x102fbe(0xa7)))['catch'](_0x72e3b5=>({})))||{},{exp:_0xc5cd4c,diamond:_0x2d6a01,level:_0xb3c31a,role:_0x1e7dcf}=global['db'][_0x102fbe(0xed)][_0x102fbe(0xf5)][_0x3bdafe[_0x102fbe(0xe0)]],{min:_0x35d05e,xp:_0x2c8268,max:_0x5f04bc}=xpRange(_0xb3c31a,global[_0x102fbe(0xb7)]),_0x2168ad=await _0x2fdff1[_0x102fbe(0x9f)](_0x3bdafe['sender']),_0x2497df=new Date(new Date()+0x36ee80),_0x537015='es',_0x525737=[_0x102fbe(0xca),'Pon',_0x102fbe(0x9b),_0x102fbe(0xc0),_0x102fbe(0xd3)][Math['floor'](_0x2497df/0x50ae4c0)%0x5],_0x5a151a=_0x2497df['toLocaleDateString'](_0x537015,{'weekday':'long'}),_0x19e5db=_0x2497df[_0x102fbe(0xff)](_0x537015,{'day':'numeric','month':_0x102fbe(0xa6),'year':_0x102fbe(0xfd)}),_0x4d756d=Intl[_0x102fbe(0x9d)](_0x537015+_0x102fbe(0xbe),{'day':'numeric','month':_0x102fbe(0xa6),'year':_0x102fbe(0xfd)})[_0x102fbe(0xd6)](_0x2497df),_0x525590=_0x2497df[_0x102fbe(0xc1)](_0x537015,{'hour':_0x102fbe(0xfd),'minute':_0x102fbe(0xfd),'second':_0x102fbe(0xfd)}),_0x30856a=process[_0x102fbe(0xda)]()*0x3e8,_0x163b14;process[_0x102fbe(0x9a)]&&(process[_0x102fbe(0x9a)](_0x102fbe(0xda)),_0x163b14=await new Promise(_0x32f8f5=>{const _0x31bd33=_0x102fbe;process[_0x31bd33(0xfb)](_0x31bd33(0xd5),_0x32f8f5),setTimeout(_0x32f8f5,0x3e8);})*0x3e8);let _0xb337a1=clockString(_0x163b14),_0x441f7=clockString(_0x30856a),_0x2ac022=Object['keys'](global['db']['data'][_0x102fbe(0xf5)])[_0x102fbe(0xf3)],_0x477b8b=Object[_0x102fbe(0xce)](global['db']['data']['users'])[_0x102fbe(0xe1)](_0x5bfa9c=>_0x5bfa9c['registered']==!![])[_0x102fbe(0xf3)],_0x290545=Object[_0x102fbe(0xce)](global['plugins'])[_0x102fbe(0xe1)](_0x57b9ec=>!_0x57b9ec[_0x102fbe(0xd0)])[_0x102fbe(0xbc)](_0x5032ad=>{const _0x1a87af=_0x102fbe;return{'help':Array[_0x1a87af(0xab)](_0x5032ad['tags'])?_0x5032ad[_0x1a87af(0xe6)]:[_0x5032ad[_0x1a87af(0xe6)]],'tags':Array[_0x1a87af(0xab)](_0x5032ad[_0x1a87af(0x98)])?_0x5032ad[_0x1a87af(0x98)]:[_0x5032ad[_0x1a87af(0x98)]],'prefix':_0x1a87af(0xa5)in _0x5032ad,'diamond':_0x5032ad[_0x1a87af(0xec)],'premium':_0x5032ad['premium'],'enabled':!_0x5032ad[_0x1a87af(0xd0)]};});for(let _0x153090 of _0x290545)if(_0x153090&&_0x102fbe(0x98)in _0x153090){for(let _0x4e9574 of _0x153090[_0x102fbe(0x98)])if(!(_0x4e9574 in tags)&&_0x4e9574)tags[_0x4e9574]=_0x4e9574;}_0x2fdff1[_0x102fbe(0x96)]=_0x2fdff1[_0x102fbe(0x96)]?_0x2fdff1['menu']:{};let _0x165b12=_0x2fdff1[_0x102fbe(0x96)][_0x102fbe(0xd2)]||defaultMenu[_0x102fbe(0xd2)],_0x8b35be=_0x2fdff1['menu'][_0x102fbe(0xc5)]||defaultMenu[_0x102fbe(0xc5)],_0x15a706=_0x2fdff1[_0x102fbe(0x96)][_0x102fbe(0xba)]||defaultMenu[_0x102fbe(0xba)],_0x39caa2=_0x2fdff1[_0x102fbe(0x96)][_0x102fbe(0xdb)]||defaultMenu[_0x102fbe(0xdb)],_0x90fcd8=_0x2fdff1[_0x102fbe(0x96)]['after']||(_0x2fdff1['user'][_0x102fbe(0xc4)]==_0x2fdff1[_0x102fbe(0xf1)][_0x102fbe(0xc4)]?'':_0x102fbe(0xcc)+_0x2fdff1[_0x102fbe(0xf1)][_0x102fbe(0xc4)]['split']`@`[0x0])+defaultMenu[_0x102fbe(0xb4)],_0x55da9e=[_0x165b12,...Object[_0x102fbe(0xe3)](tags)[_0x102fbe(0xbc)](_0x251166=>{const _0x14aac5=_0x102fbe;return _0x8b35be[_0x14aac5(0xfa)](/%category/g,tags[_0x251166])+'\x0a'+[..._0x290545['filter'](_0x1b6762=>_0x1b6762[_0x14aac5(0x98)]&&_0x1b6762[_0x14aac5(0x98)][_0x14aac5(0xd9)](_0x251166)&&_0x1b6762['help'])['map'](_0x1b86b8=>{const _0x33dd40=_0x14aac5;return _0x1b86b8[_0x33dd40(0xe6)][_0x33dd40(0xbc)](_0x1fa4ca=>{const _0x54bbc3=_0x33dd40;return _0x15a706[_0x54bbc3(0xfa)](/%cmd/g,_0x1b86b8[_0x54bbc3(0xe9)]?_0x1fa4ca:'%p'+_0x1fa4ca)[_0x54bbc3(0xfa)](/%isdiamond/g,_0x1b86b8[_0x54bbc3(0xec)]?'(ⓓ)':'')[_0x54bbc3(0xfa)](/%isPremium/g,_0x1b86b8[_0x54bbc3(0xd7)]?_0x54bbc3(0xee):'')[_0x54bbc3(0xae)]();})[_0x33dd40(0x95)]('\x0a');}),_0x39caa2]['join']('\x0a');}),_0x90fcd8][_0x102fbe(0x95)]('\x0a'),_0x326f22=typeof _0x2fdff1[_0x102fbe(0x96)]==_0x102fbe(0xaa)?_0x2fdff1['menu']:typeof _0x2fdff1['menu']=='object'?_0x55da9e:'',_0x44725c={'%':'%','p':_0x46497e,'uptime':_0x441f7,'muptime':_0xb337a1,'me':_0x2fdff1[_0x102fbe(0x9f)](_0x2fdff1[_0x102fbe(0xf1)][_0x102fbe(0xc4)]),'npmname':_0x2d77cf[_0x102fbe(0xa1)],'npmdesc':_0x2d77cf[_0x102fbe(0xdd)],'version':_0x2d77cf[_0x102fbe(0xa0)],'exp':_0xc5cd4c-_0x35d05e,'maxexp':_0x2c8268,'totalexp':_0xc5cd4c,'xp4levelup':_0x5f04bc-_0xc5cd4c,'github':_0x2d77cf['homepage']?_0x2d77cf[_0x102fbe(0xea)]['url']||_0x2d77cf[_0x102fbe(0xea)]:_0x102fbe(0xef),'level':_0xb3c31a,'diamond':_0x2d6a01,'name':_0x2168ad,'weton':_0x525737,'week':_0x5a151a,'date':_0x19e5db,'dateIslamic':_0x4d756d,'time':_0x525590,'totalreg':_0x2ac022,'rtotalreg':_0x477b8b,'role':_0x1e7dcf,'readmore':readMore};_0x326f22=_0x326f22[_0x102fbe(0xfa)](new RegExp('%('+Object[_0x102fbe(0xe3)](_0x44725c)[_0x102fbe(0xb9)]((_0x51eb98,_0x3e3f03)=>_0x3e3f03[_0x102fbe(0xf3)]-_0x51eb98[_0x102fbe(0xf3)])[_0x102fbe(0x95)]`|`+')','g'),(_0x172e43,_0x34b21e)=>''+_0x44725c[_0x34b21e]);let _0x5242bb=_0x102fbe(0xa4);_0x2fdff1['sennbutton2'](_0x3bdafe[_0x102fbe(0xb0)],_0x326f22['trim'](),_0x102fbe(0xcf),_0x5242bb,tbyt,_0x102fbe(0xc3),_0x102fbe(0xcb),'PayPal',[[_0x102fbe(0xac),_0x46497e+_0x102fbe(0xc9)],[_0x102fbe(0xc6),_0x46497e+_0x102fbe(0xc8)],[_0x102fbe(0xf7),_0x46497e+_0x102fbe(0x93)]],_0x3bdafe),_0x3bdafe[_0x102fbe(0xe8)]('😎');}catch(_0x36a66f){_0x2fdff1[_0x102fbe(0xdc)](_0x3bdafe[_0x102fbe(0xb0)],_0x102fbe(0xfe),_0x3bdafe);throw _0x36a66f;}};handler[_0x588758(0xe6)]=[_0x588758(0xe6)],handler['tags']=[_0x588758(0x97)],handler['command']=['menu','help',_0x588758(0xf2)],handler[_0x588758(0xa3)]=!![],handler['exp']=0x3;export default handler;function _0x4f55(_0xfe641f,_0x51128f){const _0x2616d6=_0x2616();return _0x4f55=function(_0x4f5561,_0x565e7e){_0x4f5561=_0x4f5561-0x93;let _0x535e79=_0x2616d6[_0x4f5561];return _0x535e79;},_0x4f55(_0xfe641f,_0x51128f);}const more=String[_0x588758(0xc2)](0x200e),readMore=more[_0x588758(0x9e)](0xfa1);function _0x2616(){const _0xb24be=['after','padStart','GRUPO','multiplier','422396caVKPg','sort','body','ACERCA\x20DE','map','2247216XnrXis','-TN-u-ca-islamic','PREMIUM','Kliwon','toLocaleTimeString','fromCharCode','YouTube','jid','header','⏍\x20Info','NIVEL\x20&\x20ECONOMIA','botinfo','donate','Pahing','https://www.paypal.me/TurboNtrOfc','Powered\x20by\x20https://wa.me/','EN/DISABLE\x20OPCIONES','values','❂𝐓𝐔𝐑𝐁𝐈𝐓𝐎\x20𝐁𝐎𝐓❂\x0a☣️\x20Suscríbete\x20a\x20mi\x20canal\x20de\x20YouTube\x0ahttps://youtube.com/c/TURBONTR1\x0a','disabled','IMAGEN','before','Legi','2565114LsmAAb','message','format','premium','294318xTbnTm','includes','uptime','footer','reply','description','╭═•⋆ঈ❥\x20%category','OWNER','sender','filter','AVANZADO','keys','STICKER','DESCARGAS','help','trimStart','react','prefix','homepage','JUEGOS','diamond','data','(Ⓟ)','[unknown\x20github\x20url]','FUN','user','menú','length','89018nFyMWU','users','toString','⌬\x20Grupos','readFile','5kjoLpA','replace','once','DATABASE','numeric','📵\x20Error,\x20el\x20menú\x20tiene\x20un\x20error','toLocaleDateString','gpturbo','1077384XkgdhO','join','menu','main','tags','470CoDmDl','send','Wage','ANIME\x20REACCION','DateTimeFormat','repeat','getName','version','name','╰•⋆҈͜͡.𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐈𝐓𝐑𝐎⋆҈͜͡•╯\x0a','register','./src/tb_logo.jpg','customPrefix','long','../package.json','ANIME','floor','string','isArray','ꨄ︎\x20Apoyar','├➽\x20%cmd\x20%isdiamond\x20%isPremium','trim','6Ikools','chat','MAKER','parse','842863BvPgyN'];_0x2616=function(){return _0xb24be;};return _0x2616();}function clockString(_0x106855){const _0x40a2c3=_0x588758;let _0x5edc12=isNaN(_0x106855)?'--':Math[_0x40a2c3(0xa9)](_0x106855/0x5265c00),_0x4a155a=isNaN(_0x106855)?'--':Math[_0x40a2c3(0xa9)](_0x106855/0x36ee80)%0x18,_0x574b13=isNaN(_0x106855)?'--':Math[_0x40a2c3(0xa9)](_0x106855/0xea60)%0x3c,_0x1da642=isNaN(_0x106855)?'--':Math[_0x40a2c3(0xa9)](_0x106855/0x3e8)%0x3c;return[_0x5edc12,'d\x20',_0x4a155a,'h\x20',_0x574b13,'m\x20'][_0x40a2c3(0xbc)](_0x5c29ff=>_0x5c29ff[_0x40a2c3(0xf6)]()[_0x40a2c3(0xb5)](0x2,0x0))[_0x40a2c3(0x95)]('');}