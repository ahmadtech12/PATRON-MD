const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`
*ᴡᴀɢᴡᴀɴ, ʜᴇʀᴇ ɪꜱ ᴀ ʟɪꜱᴛ ᴏꜰ ᴀʟʟ ᴛʜᴇ ᴍᴇɴᴜꜱ ᴏɴ* *${botname}*
*ᴅᴏɴ'ᴛ ʙʟᴏᴏᴅʏ ꜱᴘᴀᴍ, ʙʀᴏ* 
=========================
㊕ ɴᴀᴍᴇ ʙᴏᴛ : *${botname}*
㊕ ᴠᴇʀsɪᴏɴ : *1.0.0*
㊕ ʀᴜɴ : *ᴘʀɪᴠᴀᴛᴇ ʜᴏsᴛɪɴɢ*
㊕ ᴍᴏᴅᴇ: *${NanoBotz.public ? 'Public' : 'Self'}*
㊕ ᴛʏᴘᴇ : ᴄᴀsᴇ
㊕ ᴏᴡɴᴇʀ ʙᴏᴛ : https://whatsapp.com/channel/0029Val0s0rIt5rsIDPCoD2q
=========================

┈─────────────────
       *\`㊕ ᴀ ʟ ʟ ᴍ ᴇ ɴ ᴜ ㊕\`*
┈─────────────────

┏『 *\`㊕ ᴏ ᴡ ɴ ᴇ ʀ - ᴏ ɴ ʟ ʏ ㊕\`* 』━⊱
┣» *${prefix}channel*
┣» *${prefix}support*
┣» *${prefix}onlypc*
┣» *${prefix}onlygc*
┣» *${prefix}self*
┣» *${prefix}clear*
┣» *${prefix}public*
┣» *${prefix}join*
┣» *${prefix}broadcast*
┣» *${prefix}poll*
┣» *${prefix}creategc*
┣» *${prefix}setpackname*
┣» *${prefix}userjid*
┣» *${prefix}setbotname*
┣» *${prefix}setbotbio*
┣» *${prefix}restart*
┣» *${prefix}addprem*
┣» *${prefix}delprem*
┣» *${prefix}addowner*
┣» *${prefix}delowner*
┣» *${prefix}block*
┣» *${prefix}unblock*
┣» *${prefix}left*
┣» *${prefix}pushcontact*
┣» *${prefix}savecontact*
┣» *${prefix}savecontact2*
┣» *${prefix}getcontact*
┣» *${prefix}sendcontact*
┣» *${prefix}jpm*
┣» *${prefix}jpm2*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`㊕ ɢ ʀ ᴏ ᴜ ᴘ - ᴍᴇɴᴜ ㊕\`* 』━◧
┣» *${prefix}unmute*
┣» *${prefix}mute*
┣» *${prefix}antilink*
┣» *${prefix}linkgc*
┣» *${prefix}invite*
┣» *${prefix}disappear*
┣» *${prefix}del*
┣» *${prefix}setname*
┣» *${prefix}setdesc*
┣» *${prefix}add*
┣» *${prefix}kick*
┣» *${prefix}promote*
┣» *${prefix}demote*
┣» *${prefix}hidetag*
┣» *${prefix}tag*
┣» *${prefix}tagall*
┣» *${prefix}resetlink*
┣» *${prefix}getbio*
┣» *${prefix}vote*
┣» *${prefix}upvote*
┣» *${prefix}downvote*
┣» *${prefix}checkvote*
┣» *${prefix}delvote*
┣» *${prefix}autostickergc*
┣» *${prefix}nsfw*
┗━━━━━━━━━━━━━━━━⊱
 
┏『 *\`㊕ ᴀɴᴏɴʏᴍᴏᴜs-ᴍᴇɴᴜ ㊕\`* 』━◧
┣» *${prefix}anonymouschat*
┣» *${prefix}start*
┣» *${prefix}next*
┣» *${prefix}stop*
┣» *${prefix}sendprofile*
┣» *${prefix}menfess*
┣» *${prefix}confess*
┣» *${prefix}replyfess*
┣» *${prefix}refusefess*
┣» *${prefix}stopmenfess*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`㊕ ᴘ ᴜ s ʜ - ᴍᴇɴᴜ ㊕\`* 』━━◧
┣» *${prefix}cekidgc*
┣» *${prefix}pushcontact*
┣» *${prefix}savecontact*
┣» *${prefix}savecontact2*
┣» *${prefix}getcontact*
┣» *${prefix}sendcontact*
┣» *${prefix}jpm*
┣» *${prefix}jpm2*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`㊕ ᴄ ᴘ ᴀ ɴ ᴇ ʟ - ᴍᴇɴᴜ ㊕\`* 』━◧
┣» *${prefix}listusr*
┣» *${prefix}delusr*
┣» *${prefix}listsrv*
┣» *${prefix}delsrv*
┣» *${prefix}tutorial*
┣» *${prefix}ramlist*
┣» *${prefix}premlist*
┣» *${prefix}updatesrv*
┣» *${prefix}suspend*
┣» *${prefix}unsuspend*
┣» *${prefix}createadmin*
┣» *${prefix}listadmin*
┗━━━━━━━━━━━━━━━━⊱

▭▬▭▬▭( *LIST RAM* ▬▭▬▭

.1gb [username,number]
.2gb [username,number]
.3gb [username,number]
.4gb [username,number]
.5gb [username,number]
.6gb [username,number]
.7gb [username,number]
.8gb [username,number]
.unli [username,number]

Example:
.ram username,number
.1gb number, 234xxx
▬▭▬▭▬▭▬▭▬▭▬▭▬


┏『 *\`㊕ ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ - ᴍᴇɴᴜ ㊕\`* 』━◧
┣» *${prefix}tiktok*
┣» *${prefix}tiktokslide*
┣» *${prefix}tiktokaudio*
┣» *${prefix}ytsearch*
┣» *${prefix}ttsearch*
┣» *${prefix}play*
┣» *${prefix}ytmp3*
┣» *${prefix}ytmp4*
┣» *${prefix}imdb*
┣» *${prefix}weather*
┣» *${prefix}instagram*
┣» *${prefix}facebook*
┣» *${prefix}twittervid*
┣» *${prefix}telestick*
┣» *${prefix}spotify*
┣» *${prefix}gitclone*
┣» *${prefix}happymod*
┣» *${prefix}pinterest*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`㊕ ɢ ᴀ ᴍ ᴇ - ᴍᴇɴᴜ ㊕\`* 』━◧
┣» *${prefix}songguess*
┣» *${prefix}tictactoe*
┣» *${prefix}whoami*
┣» *${prefix}flagguess*
┣» *${prefix}flagguessv2*
┣» *${prefix}werewolf*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`㊕ ʀ ᴘ ɢ - ᴍ ᴇ ɴ ᴜ ㊕\`* 』━◧
┣» *${prefix}work*
┣» *${prefix}dragon*
┣» *${prefix}fightcat*
┣» *${prefix}phoenix*
┣» *${prefix}griffin*
┣» *${prefix}kyubi*
┣» *${prefix}centaur*
┣» *${prefix}save*
┣» *${prefix}mining*
┣» *${prefix}bank*
┣» *${prefix}thief*
┣» *${prefix}savings*
┣» *${prefix}withdraw*
┣» *${prefix}gardening*
┣» *${prefix}crafting*
┣» *${prefix}bet*
┣» *${prefix}bonus*
┣» *${prefix}fruit*
┣» *${prefix}down*
┣» *${prefix}assist*
┣» *${prefix}taxi*
┣» *${prefix}gloomy*
┣» *${prefix}hunt*
┣» *${prefix}polisi*
┣» *${prefix}trade*
┣» *${prefix}rob*
┣» *${prefix}kill*
┣» *${prefix}collect*
┣» *${prefix}fishing*
┣» *${prefix}repair*
┣» *${prefix}feed*
┣» *${prefix}fight*
┣» *${prefix}payday*
┣» *${prefix}upgrade*
┣» *${prefix}transfer*
┣» *${prefix}shop*
┣» *${prefix}selectskill*
┣» *${prefix}rubbish*
┣» *${prefix}rocket*
┣» *${prefix}bike*
┣» *${prefix}hangout*
┣» *${prefix}market*
┣» *${prefix}robbery*
┣» *${prefix}referral*
┣» *${prefix}petshop*
┣» *${prefix}pool*
┣» *${prefix}cowboy*
┣» *${prefix}leaderboard*
┣» *${prefix}casino*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`㊕ s ᴛ ᴀ ʟ ᴋ ᴇ ʀ ㊕\`* 』━◧
┣» *${prefix}igstalk*
┣» *${prefix}ttstalk*
┣» *${prefix}mlstalk*
┣» *${prefix}npmstalk*
┣» *${prefix}ghstalk*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`㊕ ᴏ ᴘ ᴇ ɴ - ᴀɪ ㊕\`* 』━◧
┣» *${prefix}leptonai*
┣» *${prefix}openai*
┣» *${prefix}ai*
┣» *${prefix}bard*
┣» *${prefix}guru-ai*
┣» *${prefix}realistic*
┣» *${prefix}blackboxai*
┣» *${prefix}lamaai*
┣» *${prefix}bingai*
┣» *${prefix}gpt*
┣» *${prefix}gpt2*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`㊕ ғ ᴜ ɴ - ᴍ ᴇ ɴ ᴜ ㊕\`* 』━◧
┣» *${prefix}ppcouple*
┣» *${prefix}define*
┣» *${prefix}lyrics*
┣» *${prefix}suit*
┣» *${prefix}math*
┣» *${prefix}tictactoe*
┣» *${prefix}fact*
┣» *${prefix}truth*
┣» *${prefix}dare*
┣» *${prefix}couple*
┣» *${prefix}pick*
┣» *${prefix}quotes*
┣» *${prefix}gecg*
┣» *${prefix}checkme*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`㊕ ʀ ᴀ ɴ ᴅ ᴏ ᴍ - ᴘ ʜ ᴏ ᴛ ᴏ ㊕\`* 』━◧
┣» *${prefix}aesthetic*
┣» *${prefix}wallpaper*
┣» *${prefix}art*
┣» *${prefix}bts*
┣» *${prefix}8ballpool*
┣» *${prefix}cosplay*
┣» *${prefix}hacker*
┣» *${prefix}cyber*
┣» *${prefix}gamewallpaper*
┣» *${prefix}islamic*
┣» *${prefix}cartoon*
┣» *${prefix}pentol*
┣» *${prefix}cat*
┣» *${prefix}kpop*
┣» *${prefix}exo*
┣» *${prefix}lisa*
┣» *${prefix}space*
┣» *${prefix}car*
┣» *${prefix}technology*
┣» *${prefix}bike*
┣» *${prefix}shortquote*
┣» *${prefix}hacking*
┣» *${prefix}rose*
┣» *${prefix}wallml*
┣» *${prefix}wallphone*
┣» *${prefix}mountain*
┣» *${prefix}profilepic*
┣» *${prefix}couplepic*
┣» *${prefix}programming*
┣» *${prefix}pubg*
┣» *${prefix}blackpink*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`㊕ ᴀ ɴ ɪ ᴍ ᴇ ㊕\`* 』━◧
┣» *${prefix}akira*
┣» *${prefix}akiyama*
┣» *${prefix}ana*
┣» *${prefix}asuna*
┣» *${prefix}ayuzawa*
┣» *${prefix}boruto*
┣» *${prefix}chiho*
┣» *${prefix}chitoge*
┣» *${prefix}cosplayloli*
┣» *${prefix}cosplaysagiri*
┣» *${prefix}deidara*
┣» *${prefix}doraemon*
┣» *${prefix}elaina*
┣» *${prefix}emilia*
┣» *${prefix}erza*
┣» *${prefix}gremory*
┣» *${prefix}hestia*
┣» *${prefix}hinata*
┣» *${prefix}husbu*
┣» *${prefix}inori*
┣» *${prefix}isuzu*
┣» *${prefix}itachi*
┣» *${prefix}itori*
┣» *${prefix}kaga*
┣» *${prefix}kagura*
┣» *${prefix}kakasih*
┣» *${prefix}kaori*
┣» *${prefix}keneki*
┣» *${prefix}kotori*
┣» *${prefix}kurumi*
┣» *${prefix}loli*
┣» *${prefix}madara*
┣» *${prefix}megumin*
┣» *${prefix}mikasa*
┣» *${prefix}mikey*
┣» *${prefix}miku*
┣» *${prefix}minato*
┣» *${prefix}naruto*
┣» *${prefix}neko*
┣» *${prefix}neko2*
┣» *${prefix}nekonime*
┣» *${prefix}nezuko*
┣» *${prefix}onepiece*
┣» *${prefix}pokemon*
┣» *${prefix}randomnime*
┣» *${prefix}randomnime2*
┣» *${prefix}rize*
┣» *${prefix}sagiri*
┣» *${prefix}sakura*
┣» *${prefix}sasuke*
┣» *${prefix}shina*
┣» *${prefix}shinka*
┣» *${prefix}shinomiya*
┣» *${prefix}shizuka*
┣» *${prefix}shota*
┣» *${prefix}tejina*
┣» *${prefix}toukachan*
┣» *${prefix}tsunade*
┣» *${prefix}waifu*
┣» *${prefix}animewall*
┣» *${prefix}yotsuba*
┣» *${prefix}yuki*
┣» *${prefix}yulibocil*
┣» *${prefix}yumeko*
┣» *${prefix}8ball*
┣» *${prefix}tickle*
┣» *${prefix}gecg*
┣» *${prefix}feed*
┣» *${prefix}animeawoo*
┣» *${prefix}animemegumin*
┣» *${prefix}animeshinobu*
┣» *${prefix}animehandhold*
┣» *${prefix}animehighfive*
┣» *${prefix}animecringe*
┣» *${prefix}animedance*
┣» *${prefix}animehappy*
┣» *${prefix}animeglomp*
┣» *${prefix}animeblush*
┣» *${prefix}animesmug*
┣» *${prefix}animewave*
┣» *${prefix}animesmile*
┣» *${prefix}animepoke*
┣» *${prefix}animewink*
┣» *${prefix}animebonk*
┣» *${prefix}animebully*
┣» *${prefix}animeyeet*
┣» *${prefix}animebite*
┣» *${prefix}animelick*
┣» *${prefix}animekill*
┣» *${prefix}animecry*
┣» *${prefix}animewlp*
┣» *${prefix}animekiss*
┣» *${prefix}animehug*
┣» *${prefix}animeneko*
┣» *${prefix}animepat*
┣» *${prefix}animeslap*
┣» *${prefix}animecuddle*
┣» *${prefix}animewaifu*
┣» *${prefix}animenom*
┣» *${prefix}animefoxgirl*
┣» *${prefix}animegecg*
┣» *${prefix}animetickle*
┣» *${prefix}animefeed*
┣» *${prefix}animeavatar*
┣» *${prefix}genshin*
┣» *${prefix}anime*
┣» *${prefix}amv*
╰━━━━━━━━━━━━━━━━━━

┏『 *\`㊕ ᴀ ɴ ɪ ᴍ ᴇ - ɴғsᴡ ㊕\`* 』━◧ 
┣» *${prefix}paptt*
┣» *${prefix}hentaivid*
┣» *${prefix}hentaivid2*
┣» *${prefix}hneko*
┣» *${prefix}nwaifu*
┣» *${prefix}animespank*
┣» *${prefix}trap*
┣» *${prefix}gasm*
┣» *${prefix}ahegao*
┣» *${prefix}ass*
┣» *${prefix}bdsm*
┣» *${prefix}blowjob*
┣» *${prefix}cuckold*
┣» *${prefix}cum*
┣» *${prefix}milf*
┣» *${prefix}eba*
┣» *${prefix}ero*
┣» *${prefix}femdom*
┣» *${prefix}foot*
┣» *${prefix}gangbang* 
┣» *${prefix}glasses*
┣» *${prefix}jahy*
┣» *${prefix}masturbation*
┣» *${prefix}manga*
┣» *${prefix}neko-hentai*
┣» *${prefix}neko-hentai2*
┣» *${prefix}nsfwloli*
┣» *${prefix}orgy*
┣» *${prefix}panties*
┣» *${prefix}pussy*
┣» *${prefix}tentacles*
┣» *${prefix}thighs*
┣» *${prefix}yuri*
┣» *${prefix}zettai*
┣» *${prefix}xnxxsearch*
┗━━━━━━━━━━━━━━━━⊱ 

┏━『 *\`㊕ ᴇ ᴘ ʜ ᴏ ᴛ ᴏ - ᴍ ᴀ ᴋ ᴇ ʀ ㊕\`* 』━◧
┣» *${prefix}glitchtext*
┣» *${prefix}writetext*
┣» *${prefix}advancedglow*
┣» *${prefix}typographytext*
┣» *${prefix}pixelglitch*
┣» *${prefix}neonglitch*
┣» *${prefix}flagtext*
┣» *${prefix}flag3dtext*
┣» *${prefix}deletingtext*
┣» *${prefix}blackpinkstyle*
┣» *${prefix}glowingtext*
┣» *${prefix}underwatertext*
┣» *${prefix}logomaker*
┣» *${prefix}cartoonstyle*
┣» *${prefix}papercutstyle*
┣» *${prefix}watercolortext*
┣» *${prefix}effectclouds*
┣» *${prefix}blackpinklogo*
┣» *${prefix}gradienttext*
┣» *${prefix}summerbeach*
┣» *${prefix}luxurygold*
┣» *${prefix}multicoloredneon*
┣» *${prefix}sandsummer*
┣» *${prefix}galaxywallpaper*
┣» *${prefix}1917style*
┣» *${prefix}makingneon*
┣» *${prefix}royaltext*
┣» *${prefix}freecreate*
┣» *${prefix}galaxystyle*
┣» *${prefix}lighteffects*
┗━━━━━━━━━━━━━━━━⊱


┏『 *\`㊕ ʙ ᴜ ɢ - ᴡ ᴀ ʀ ㊕\`* 』━◧
*NOT WORKING WAIT TILL NEXT UPDATE*
┣» *${prefix}patronvip*
┣» *${prefix}patroncrush*
┣» *${prefix}xandroid*
┣» *${prefix}xandroid2*
┣» *${prefix}systemuicrash*
┣» *${prefix}xsysui*
┣» *${prefix}xios*
┣» *${prefix}xios2*
┣» *${prefix}xgc*
┣» *${prefix}ioskill*
┣» *${prefix}iosx*
┣» *${prefix}onekill*
┣» *${prefix}oneclickall*
┣» *${prefix}xsamsung*
┣» *${prefix}xwaweb*
┣» *${prefix}doublekill*
┣» *${prefix}triplekill*
┣» *${prefix}💀*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`㊕ ᴏ ᴛ ʜ ᴇ ʀ - ᴍ ᴇ ɴ ᴜ ㊕\`* 』━◧
┣» *${prefix}ping*
┣» *${prefix}vv*
┣» *${prefix}paptt*
┣» *${prefix}totalcmd*
┣» *${prefix}menu*
┣» *${prefix}reportbug*
┣» *${prefix}listprem*
┣» *${prefix}listpc*
┣» *${prefix}listgc*
┣» *${prefix}owner*
┣» *${prefix}donate*
┣» *${prefix}obfuscate*
┣» *${prefix}fancy*
┣» *${prefix}say*
┣» *${prefix}togif*
┣» *${prefix}toqr*
┣» *${prefix}bass*
┣» *${prefix}blown*
┣» *${prefix}deep*
┣» *${prefix}earrape*
┣» *${prefix}fast*
┣» *${prefix}fat*
┣» *${prefix}nightcore*
┣» *${prefix}reverse*
┣» *${prefix}robot*
┣» *${prefix}slow*
┣» *${prefix}smooth*
┣» *${prefix}squirrel*
┣» *${prefix}tinyurl*
┣» *${prefix}tovn*
┣» *${prefix}toaudio*
┣» *${prefix}tomp3*
┣» *${prefix}tomp4*
┣» *${prefix}toimg*
┣» *${prefix}tovv*
┣» *${prefix}sticker*
┣» *${prefix}take*
┣» *${prefix}runtime*
┗━━━━━━━━━━━━━━━━⊱`}

global.animemenu = (prefix) => {
return`╭⊣「 *\`㊕ ᴍᴇɴᴜ ɪɴғᴏ ㊕\`* 」⊢▤
┣» *${prefix}akira*
┣» *${prefix}akiyama*
┣» *${prefix}ana*
┣» *${prefix}asuna*
┣» *${prefix}ayuzawa*
┣» *${prefix}boruto*
┣» *${prefix}chiho*
┣» *${prefix}chitoge*
┣» *${prefix}cosplayloli*
┣» *${prefix}cosplaysagiri*
┣» *${prefix}deidara*
┣» *${prefix}doraemon*
┣» *${prefix}elaina*
┣» *${prefix}emilia*
┣» *${prefix}erza*
┣» *${prefix}gremory*
┣» *${prefix}hestia*
┣» *${prefix}hinata*
┣» *${prefix}husbu*
┣» *${prefix}inori*
┣» *${prefix}isuzu*
┣» *${prefix}itachi*
┣» *${prefix}itori*
┣» *${prefix}kaga*
┣» *${prefix}kagura*
┣» *${prefix}kakasih*
┣» *${prefix}kaori*
┣» *${prefix}keneki*
┣» *${prefix}kotori*
┣» *${prefix}kurumi*
┣» *${prefix}loli*
┣» *${prefix}madara*
┣» *${prefix}megumin*
┣» *${prefix}mikasa*
┣» *${prefix}mikey*
┣» *${prefix}miku*
┣» *${prefix}minato*
┣» *${prefix}naruto*
┣» *${prefix}neko*
┣» *${prefix}neko2*
┣» *${prefix}nekonime*
┣» *${prefix}nezuko*
┣» *${prefix}onepiece*
┣» *${prefix}pokemon*
┣» *${prefix}randomnime*
┣» *${prefix}randomnime2*
┣» *${prefix}rize*
┣» *${prefix}sagiri*
┣» *${prefix}sakura*
┣» *${prefix}sasuke*
┣» *${prefix}shina*
┣» *${prefix}shinka*
┣» *${prefix}shinomiya*
┣» *${prefix}shizuka*
┣» *${prefix}shota*
┣» *${prefix}tejina*
┣» *${prefix}toukachan*
┣» *${prefix}tsunade*
┣» *${prefix}waifu*
┣» *${prefix}animewall*
┣» *${prefix}yotsuba*
┣» *${prefix}yuki*
┣» *${prefix}yulibocil*
┣» *${prefix}yumeko*
┣» *${prefix}8ball*
┣» *${prefix}tickle*
┣» *${prefix}gecg*
┣» *${prefix}feed*
┣» *${prefix}animeawoo*
┣» *${prefix}animemegumin*
┣» *${prefix}animeshinobu*
┣» *${prefix}animehandhold*
┣» *${prefix}animehighfive*
┣» *${prefix}animecringe*
┣» *${prefix}animedance*
┣» *${prefix}animehappy*
┣» *${prefix}animeglomp*
┣» *${prefix}animeblush*
┣» *${prefix}animesmug*
┣» *${prefix}animewave*
┣» *${prefix}animesmile*
┣» *${prefix}animepoke*
┣» *${prefix}animewink*
┣» *${prefix}animebonk*
┣» *${prefix}animebully*
┣» *${prefix}animeyeet*
┣» *${prefix}animebite*
┣» *${prefix}animelick*
┣» *${prefix}animekill*
┣» *${prefix}animecry*
┣» *${prefix}animewlp*
┣» *${prefix}animekiss*
┣» *${prefix}animehug*
┣» *${prefix}animeneko*
┣» *${prefix}animepat*
┣» *${prefix}animeslap*
┣» *${prefix}animecuddle*
┣» *${prefix}animewaifu*
┣» *${prefix}animenom*
┣» *${prefix}animefoxgirl*
┣» *${prefix}animegecg*
┣» *${prefix}animetickle*
┣» *${prefix}animefeed*
┣» *${prefix}animeavatar*
┣» *${prefix}genshin*
┣» *${prefix}anime*
┣» *${prefix}amv*
╰━━━━━━━━━━━━━━━━━━`}

global.ownermenu = (prefix) => {
return`┏『 *\`㊕ ᴏ ᴡ ɴ ᴇ ʀ - ᴏ ɴ ʟ ʏ ㊕\`* 』━⊱

┣» *${prefix}channel*
┣» *${prefix}support*
┣» *${prefix}onlypc*
┣» *${prefix}onlygc*
┣» *${prefix}self*
┣» *${prefix}clear*
┣» *${prefix}public*
┣» *${prefix}join*
┣» *${prefix}broadcast*
┣» *${prefix}poll*
┣» *${prefix}creategc*
┣» *${prefix}setpackname*
┣» *${prefix}userjid*
┣» *${prefix}setbotname*
┣» *${prefix}setbotbio*
┣» *${prefix}restart*
┣» *${prefix}addprem*
┣» *${prefix}delprem*
┣» *${prefix}addowner*
┣» *${prefix}delowner*
┣» *${prefix}block*
┣» *${prefix}unblock*
┣» *${prefix}left*
┣» *${prefix}pushcontact*
┣» *${prefix}savecontact*
┣» *${prefix}savecontact2*
┣» *${prefix}getcontact*
┣» *${prefix}sendcontact*
┣» *${prefix}jpm*
┣» *${prefix}jpm2*
┗━━━━━━━━━━━━━━━━⊱`}

global.othermenu = (prefix) => {
return`┏『 *\`㊕ ᴏ ᴛ ʜ ᴇ ʀ - ᴍ ᴇ ɴ ᴜ ㊕\`* 』━◧
┣» *${prefix}ping*
┣» *${prefix}vv*
┣» *${prefix}paptt*
┣» *${prefix}totalcmd*
┣» *${prefix}menu*
┣» *${prefix}reportbug*
┣» *${prefix}listprem*
┣» *${prefix}listpc*
┣» *${prefix}listgc*
┣» *${prefix}owner*
┣» *${prefix}donate*
┣» *${prefix}obfuscate*
┣» *${prefix}fancy*
┣» *${prefix}say*
┣» *${prefix}togif*
┣» *${prefix}toqr*
┣» *${prefix}bass*
┣» *${prefix}blown*
┣» *${prefix}deep*
┣» *${prefix}earrape*
┣» *${prefix}fast*
┣» *${prefix}fat*
┣» *${prefix}nightcore*
┣» *${prefix}reverse*
┣» *${prefix}robot*
┣» *${prefix}slow*
┣» *${prefix}smooth*
┣» *${prefix}squirrel*
┣» *${prefix}tinyurl*
┣» *${prefix}tovn*
┣» *${prefix}toaudio*
┣» *${prefix}tomp3*
┣» *${prefix}tomp4*
┣» *${prefix}toimg*
┣» *${prefix}tovv*
┣» *${prefix}sticker*
┣» *${prefix}take*
┣» *${prefix}runtime*
┗━━━━━━━━━━━━━━━━⊱`}

global.rpgmenu = (prefix, hituet) => {
return`┏『 *\`㊕ ʀ ᴘ ɢ - ᴍ ᴇ ɴ ᴜ ㊕\`* 』━◧
┣» *${prefix}work*
┣» *${prefix}fightnaga*
┣» *${prefix}fightkucing*
┣» *${prefix}fightphonix*
┣» *${prefix}fightgriffin*
┣» *${prefix}fightkyubi*
┣» *${prefix}fightcentaur*
┣» *${prefix}nabung*
┣» *${prefix}mining*
┣» *${prefix}bankcek*
┣» *${prefix}maling*
┣» *${prefix}banknabung*
┣» *${prefix}banktarik*
┣» *${prefix}berkebon*
┣» *${prefix}crafting*
┣» *${prefix}bet*
┣» *${prefix}bonus*
┣» *${prefix}buah*
┣» *${prefix}nebang*
┣» *${prefix}bekerja*
┣» *${prefix}bansos*
┣» *${prefix}taxy*
┣» *${prefix}mulung*
┣» *${prefix}berburu*
┣» *${prefix}polisi*
┣» *${prefix}berdagang*
┣» *${prefix}rampok*
┣» *${prefix}bunuh*
┣» *${prefix}collect*
┣» *${prefix}mancing*
┣» *${prefix}repair*
┣» *${prefix}feed*
┣» *${prefix}fight*
┣» *${prefix}gajian*
┣» *${prefix}upgrade*
┣» *${prefix}transfer*
┣» *${prefix}shop*
┣» *${prefix}selectskill*
┣» *${prefix}sampah*
┣» *${prefix}roket*
┣» *${prefix}ojek*
┣» *${prefix}nguli*
┣» *${prefix}pasar*
┣» *${prefix}rob*
┣» *${prefix}referal*
┣» *${prefix}petshop*
┣» *${prefix}kolam*
┣» *${prefix}koboy*
┣» *${prefix}leaderboard*
┣» *${prefix}casino*
┗━━━━━━━━━━━━━━━━⊱`}

global.gamemenu = (prefix, hituet) => {
return`┏『 *\`㊕ ɢ ᴀ ᴍ ᴇ - ᴍᴇɴᴜ ㊕\`* 』━◧
┣» *${prefix}songguess*
┣» *${prefix}tictactoe*
┣» *${prefix}whoami*
┣» *${prefix}flagguess*
┣» *${prefix}flagguessv2*
┣» *${prefix}werewolf*
┗━━━━━━━━━━━━━━━━⊱`}

global.downloadmenu = (prefix) => { 
return`┏『 *\`㊕ ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ - ᴍᴇɴᴜ ㊕\`* 』━◧
┣» *${prefix}tiktok*
┣» *${prefix}tiktokslide*
┣» *${prefix}tiktokaudio*
┣» *${prefix}ytsearch*
┣» *${prefix}ttsearch*
┣» *${prefix}play*
┣» *${prefix}ytmp3*
┣» *${prefix}ytmp4*
┣» *${prefix}imdb*
┣» *${prefix}weather*
┣» *${prefix}instagram*
┣» *${prefix}facebook*
┣» *${prefix}twittervid*
┣» *${prefix}telestick*
┣» *${prefix}spotify*
┣» *${prefix}gitclone*
┣» *${prefix}happymod*
┣» *${prefix}pinterest*
┗━━━━━━━━━━━━━━━━⊱`}

global.groupmenu = (prefix) => {
return`┏『 *\`㊕ ɢ ʀ ᴏ ᴜ ᴘ - ᴍᴇɴᴜ ㊕\`* 』━◧

┣» *${prefix}unmute*
┣» *${prefix}mute*
┣» *${prefix}antilink*
┣» *${prefix}linkgc*
┣» *${prefix}invite*
┣» *${prefix}disappear*
┣» *${prefix}del*
┣» *${prefix}setname*
┣» *${prefix}setdesc*
┣» *${prefix}add*
┣» *${prefix}kick*
┣» *${prefix}promote*
┣» *${prefix}demote*
┣» *${prefix}hidetag*
┣» *${prefix}tag*
┣» *${prefix}tagall*
┣» *${prefix}resetlink*
┣» *${prefix}getbio*
┣» *${prefix}vote*
┣» *${prefix}upvote*
┣» *${prefix}downvote*
┣» *${prefix}checkvote*
┣» *${prefix}delvote*
┣» *${prefix}autostickergc*
┣» *${prefix}nsfw*
┗━━━━━━━━━━━━━━━━⊱`}

global.funmenu = (prefix) => {
return`┏『 *\`㊕ ғ ᴜ ɴ - ᴍ ᴇ ɴ ᴜ ㊕\`* 』━◧
┣» *${prefix}ppcouple*
┣» *${prefix}define*
┣» *${prefix}lyrics*
┣» *${prefix}suit*
┣» *${prefix}math*
┣» *${prefix}tictactoe*
┣» *${prefix}fact*
┣» *${prefix}truth*
┣» *${prefix}dare*
┣» *${prefix}couple*
┣» *${prefix}pick*
┣» *${prefix}quotes*
┣» *${prefix}gecg*
┣» *${prefix}checkme*
┣» *${prefix}sound1 - sound161*
┗━━━━━━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━━━⊱`}

global.stalkermenu = (prefix) => {
  return `┏『 *\`㊕ s ᴛ ᴀ ʟ ᴋ ᴇ ʀ ㊕\`* 』━◧
┣» *${prefix}igstalk*
┣» *${prefix}ttstalk*
┣» *${prefix}mlstalk*
┣» *${prefix}npmstalk*
┣» *${prefix}ghstalk*
┗━━━━━━━━━━━━━━━━⊱`}

global.aimenu = (prefix) => {
return`┏『 *\`㊕ ᴏ ᴘ ᴇ ɴ - ᴀɪ ㊕\`* 』━◧
┣» *${prefix}leptonai*
┣» *${prefix}openai*
┣» *${prefix}ai*
┣» *${prefix}bard*
┣» *${prefix}guru-ai*
┣» *${prefix}realistic*
┣» *${prefix}blackboxai*
┣» *${prefix}lamaai*
┣» *${prefix}bingai*
┣» *${prefix}gpt*
┣» *${prefix}gpt2*
┗━━━━━━━━━━━━━━━━⊱`}

global.anonymousmenu = (prefix) => {
return`┏『 *\`㊕ ᴀɴᴏɴʏᴍᴏᴜs-ᴍᴇɴᴜ ㊕\`* 』━◧
┣» *${prefix}anonymouschat*
┣» *${prefix}start*
┣» *${prefix}next*
┣» *${prefix}stop*
┣» *${prefix}sendprofile*
┣» *${prefix}menfess*
┣» *${prefix}confess*
┣» *${prefix}replyfess*
┣» *${prefix}refusefess*
┣» *${prefix}stopmenfess*
┗━━━━━━━━━━━━━━━━⊱`}

global.pushmenu = (prefix) => {
return`┏『 *\`㊕ ᴘ ᴜ s ʜ - ᴍᴇɴᴜ ㊕\`* 』━━◧
┣» *${prefix}cekidgc*
┣» *${prefix}id*
┣» *${prefix}pushcontact*
┣» *${prefix}savecontact*
┣» *${prefix}savecontact2*
┣» *${prefix}getcontact*
┣» *${prefix}sendcontact*
┣» *${prefix}jpm*
┣» *${prefix}jpm2*
┗━━━━━━━━━━━━━━━━⊱`}

global.cpanelmenu = (prefix) => {
return`┏『 *\`㊕ ᴄ ᴘ ᴀ ɴ ᴇ ʟ - ᴍᴇɴᴜ ㊕\`* 』━◧
┣» *${prefix}panel*
┣» *${prefix}listusr*
┣» *${prefix}delusr*
┣» *${prefix}listsrv*
┣» *${prefix}delsrv*
┣» *${prefix}tutorial*
┣» *${prefix}ramlist*
┣» *${prefix}premlist*
┣» *${prefix}addusr*
┣» *${prefix}addsrv*
┣» *${prefix}updatesrv*
┣» *${prefix}suspend*
┣» *${prefix}unsuspend*
┣» *${prefix}createadmin*
┣» *${prefix}listadmin*
┗━━━━━━━━━━━━━━━━⊱

▭▬▭▬▭( *LIST RAM* ▬▭▬▭

*.1gb [username,number]*
*.2gb [username,number]*
*.3gb [username,number]*
*.4gb [username,number]*
*.5gb [username,number]*
*.6gb [username,number]*
*.7gb [username,number]*
*.8gb [username,number]*
*.unli [username,number]*

Example:
.ram username,number
.1gb name, 234xx
▬▭▬▭▬▭▬▭▬▭▬▭▬`}

global.bugmenu = (prefix) => {
return`┏『 *\`㊕ ʙ ᴜ ɢ - ᴡ ᴀ ʀ ㊕\`* 』━◧
*NOT WORKING WAIT  TILL NEXT UPDATE
┣» *${prefix}patronvip*
┣» *${prefix}patroncrush*
┣» *${prefix}xandroid*
┣» *${prefix}xandroid2*
┣» *${prefix}systemuicrash*
┣» *${prefix}xsysui*
┣» *${prefix}xios*
┣» *${prefix}xios2*
┣» *${prefix}xgc*
┣» *${prefix}ioskill*
┣» *${prefix}iosx*
┣» *${prefix}onekill*
┣» *${prefix}oneclickall*
┣» *${prefix}xsamsung*
┣» *${prefix}xwaweb*
┣» *${prefix}doublekill*
┣» *${prefix}triplekill*
┣» *${prefix}💀*
┗━━━━━━━━━━━━━━━━⊱`}

global.randomphotomenu = (prefix) => {
return`┏『 *\`㊕ ʀ ᴀ ɴ ᴅ ᴏ ᴍ - ᴘ ʜ ᴏ ᴛ ᴏ ㊕\`* 』━◧
┣» *${prefix}aesthetic*
┣» *${prefix}wallpaper*
┣» *${prefix}art*
┣» *${prefix}bts*
┣» *${prefix}8ballpool*
┣» *${prefix}cosplay*
┣» *${prefix}hacker*
┣» *${prefix}cyber*
┣» *${prefix}gamewallpaper*
┣» *${prefix}islamic*
┣» *${prefix}cartoon*
┣» *${prefix}pentol*
┣» *${prefix}cat*
┣» *${prefix}kpop*
┣» *${prefix}exo*
┣» *${prefix}lisa*
┣» *${prefix}space*
┣» *${prefix}car*
┣» *${prefix}technology*
┣» *${prefix}bike*
┣» *${prefix}shortquote*
┣» *${prefix}hacking*
┣» *${prefix}rose*
┣» *${prefix}wallml*
┣» *${prefix}wallphone*
┣» *${prefix}mountain*
┣» *${prefix}profilepic*
┣» *${prefix}couplepic*
┣» *${prefix}programming*
┣» *${prefix}pubg*
┣» *${prefix}blackpink*
┗━━━━━━━━━━━━━━━━⊱`}

global.ephoto360menu = (prefix) => {
return`┏━『 *\`㊕ ᴇ ᴘ ʜ ᴏ ᴛ ᴏ - ᴍ ᴀ ᴋ ᴇ ʀ ㊕\`* 』━◧
┣» *${prefix}glitchtext*
┣» *${prefix}writetext*
┣» *${prefix}advancedglow*
┣» *${prefix}typographytext*
┣» *${prefix}pixelglitch*
┣» *${prefix}neonglitch*
┣» *${prefix}flagtext*
┣» *${prefix}flag3dtext*
┣» *${prefix}deletingtext*
┣» *${prefix}blackpinkstyle*
┣» *${prefix}glowingtext*
┣» *${prefix}underwatertext*
┣» *${prefix}logomaker*
┣» *${prefix}cartoonstyle*
┣» *${prefix}papercutstyle*
┣» *${prefix}watercolortext*
┣» *${prefix}effectclouds*
┣» *${prefix}blackpinklogo*
┣» *${prefix}gradienttext*
┣» *${prefix}summerbeach*
┣» *${prefix}luxurygold*
┣» *${prefix}multicoloredneon*
┣» *${prefix}sandsummer*
┣» *${prefix}galaxywallpaper*
┣» *${prefix}1917style*
┣» *${prefix}makingneon*
┣» *${prefix}royaltext*
┣» *${prefix}freecreate*
┣» *${prefix}galaxystyle*
┣» *${prefix}lighteffects*
┗━━━━━━━━━━━━━━━━⊱`}

global.nsfwmenu = (prefix) => {
return`┏『 *\`㊕ ᴀ ɴ ɪ ᴍ ᴇ - ɴғsᴡ ㊕\`* 』━◧
┣» *${prefix}paptt*
┣» *${prefix}hentaivid 
┣» *${prefix}hneko 
┣» *${prefix}nwaifu 
┣» *${prefix}animespank 
┣» *${prefix}trap 
┣» *${prefix}gasm 
┣» *${prefix}ahegao 
┣» *${prefix}ass 
┣» *${prefix}bdsm 
┣» *${prefix}blowjob 
┣» *${prefix}cuckold 
┣» *${prefix}cum 
┣» *${prefix}milf 
┣» *${prefix}eba 
┣» *${prefix}ero 
┣» *${prefix}femdom 
┣» *${prefix}foot 
┣» *${prefix}gangbang 
┣» *${prefix}glasses 
┣» *${prefix}jahy 
┣» *${prefix}masturbation 
┣» *${prefix}manga 
┣» *${prefix}neko-hentai 
┣» *${prefix}neko-hentai2 
┣» *${prefix}nsfwloli 
┣» *${prefix}orgy 
┣» *${prefix}panties  
┣» *${prefix}pussy 
┣» *${prefix}tentacles 
┣» *${prefix}thighs 
┣» *${prefix}yuri 
┣» *${prefix}zettai 
┣» *${prefix}xnxxsearch
┗━━━━━━━━━━━━━━━━⊱`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
