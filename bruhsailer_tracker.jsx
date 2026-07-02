import React from "react";

const SKILLS = ['ATK','STR','DEF','HP','RNG','PRY','MAG','RC','CON','AGI','HRB','THI','CRF','FLE','SLY','HUN','MNG','SMI','FSH','COK','FM','WC','FRM','SAI'];
const SKILL_COLORS = {
  ATK:'#c0392b', STR:'#27ae60', DEF:'#2980b9', HP:'#e74c3c', RNG:'#16a085', PRY:'#f39c12',
  MAG:'#8e44ad', RC:'#1abc9c', CON:'#d35400', AGI:'#3498db', HRB:'#2ecc71', THI:'#9b59b6',
  CRF:'#f1c40f', FLE:'#e67e22', SLY:'#c0392b', HUN:'#16a085', MNG:'#7f8c8d', SMI:'#95a5a6',
  FSH:'#3498db', COK:'#e67e22', FM:'#e74c3c', WC:'#27ae60', FRM:'#2ecc71', SAI:'#2980b9',
};
const SKILL_FULL = {
  ATK:'Attack', STR:'Strength', DEF:'Defence', HP:'Hitpoints', RNG:'Ranged', PRY:'Prayer',
  MAG:'Magic', RC:'Runecraft', CON:'Construction', AGI:'Agility', HRB:'Herblore', THI:'Thieving',
  CRF:'Crafting', FLE:'Fletching', SLY:'Slayer', HUN:'Hunter', MNG:'Mining', SMI:'Smithing',
  FSH:'Fishing', COK:'Cooking', FM:'Firemaking', WC:'Woodcutting', FRM:'Farming', SAI:'Sailing',
};
const RAW_TASKS = [
  {id:0,label:"1",isSub:false,step:1,activity:"NMZ for 250 redirection scrolls",gp_change:-26000,gp_total:19718444,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{STR:80000,HP:26667},expected:{ATK:62,STR:77,DEF:70,HP:64,RNG:62,PRY:70,MAG:89,RC:40,CON:71,AGI:98,HRB:73,THI:84,CRF:65,FLE:69,SLY:60,HUN:82,MNG:73,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"If you're running low on POH teleport tabs, collect more soft clay using the gravestone double-soft-clay method in the Prifddinas mine (~2,400/hr). You'll need to make soft clay bracelets first. Top up redirection scrolls at NMZ (good as an AFK activity). Aim for a solid stack, e.g. 500 tabs and 250 scrolls. Also make Catherby tabs for herb runs."},
  {id:72,label:"2",isSub:false,step:2,activity:"Mage Training Arena (Mage's book + infinity boots)",gp_change:null,gp_total:19718444,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{},expected:{ATK:62,STR:77,DEF:70,HP:64,RNG:62,PRY:70,MAG:89,RC:40,CON:71,AGI:98,HRB:73,THI:84,CRF:65,FLE:69,SLY:60,HUN:82,MNG:73,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Optional but recommended: go to the Mage Training Arena and collect the Mage's book and the infinity boots."},
  {id:1,label:"3.a",isSub:false,step:3,activity:"Train construction to level 75",gp_change:-3648240,gp_total:16070204,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{CON:319221},expected:{ATK:62,STR:77,DEF:70,HP:65,RNG:62,PRY:70,MAG:89,RC:40,CON:71,AGI:98,HRB:73,THI:84,CRF:65,FLE:69,SLY:60,HUN:82,MNG:73,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Using your mahogany logs from Miscellania, train Construction to level 75. Don't go higher for now, and keep 20 mahogany planks for Sailing. Boost when necessary."},
  {id:2,label:"3.b",isSub:true,step:null,activity:"Build stuff in the POH",gp_change:-1150000,gp_total:14920204,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{},expected:{ATK:62,STR:77,DEF:70,HP:65,RNG:62,PRY:70,MAG:89,RC:40,CON:75,AGI:98,HRB:73,THI:84,CRF:65,FLE:69,SLY:60,HUN:82,MNG:73,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Build these in your POH (boost when needed): Dark altar, Basic jewellery box, Rejuvenation pool (only if you have the staminas), Mahogany armour case, Mahogany fancy dress box, Gilded cape rack, and optionally a Gilded portal nexus (not recommended).\n\nTotal items needed: 1 Arceuus signet, 1 bolt of cloth, 1 steel bar, 3 games necklaces(8), 3 rings of dueling(8), 8 marble blocks, 3 gold leaves, 1 magic stone (2 if you want the Sunbleak Island bank chest), 15 limestone bricks, 5 buckets of water, 6,000 soul runes, 5,000 blood runes, 1,000 body runes, 10 stamina potions(4), 10 prayer potions(4), 9 mahogany planks.\n\nNote: if you want a rejuvenation pool, run some rooftops (e.g. force spawning) for the marks of grace needed."},
  {id:3,label:"4.a",isSub:false,step:4,activity:"Lava RC to level 64. The Final Dawn.",gp_change:null,gp_total:14920204,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{PRY:55000,RC:387040,THI:55000,FLE:25000,MNG:54000},expected:{ATK:62,STR:77,DEF:70,HP:65,RNG:62,PRY:70,MAG:89,RC:40,CON:75,AGI:98,HRB:73,THI:84,CRF:65,FLE:69,SLY:60,HUN:82,MNG:73,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Now that daeyalt mining is unlocked, mine 28k daeyalt essence (AFK is fine). Make 275 binding necklaces, 175 rings of dueling and a fire tiara, and buy 28k earth runes if needed. Swap to Lunar, then lava-runecraft to 425,000 xp (level 64) using Magic Imbue, binding necklaces and hallowed crystal shards for banking. Then complete The Final Dawn, putting the xp on Prayer.\n\nThe Arkan blade is now your default melee special-attack weapon (stronger than the dragon dagger), and is sometimes a better mainhand than the dragon scimitar against stab-weak enemies."},
  {id:4,label:"4.b",isSub:true,step:null,activity:"Lumbridge Hard diary",gp_change:null,gp_total:14920204,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{HRB:15000},expected:{ATK:62,STR:77,DEF:70,HP:65,RNG:62,PRY:71,MAG:89,RC:64,CON:75,AGI:98,HRB:73,THI:84,CRF:65,FLE:69,SLY:60,HUN:82,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Complete the Lumbridge Hard diary. Put the lamp on Herblore."},
  {id:5,label:"4.c",isSub:true,step:null,activity:"Ardougne Hard diary",gp_change:null,gp_total:14920204,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{HRB:15000},expected:{ATK:62,STR:77,DEF:70,HP:65,RNG:62,PRY:71,MAG:89,RC:64,CON:75,AGI:98,HRB:73,THI:84,CRF:65,FLE:69,SLY:60,HUN:82,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Complete the Ardougne Hard diary. Also requires a shield left half."},
  {id:6,label:"5.a",isSub:false,step:5,activity:"Cave Horrors off-task",gp_change:null,gp_total:14920204,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{STR:112640,HP:37547},expected:{ATK:62,STR:77,DEF:70,HP:65,RNG:62,PRY:71,MAG:89,RC:64,CON:75,AGI:98,HRB:73,THI:84,CRF:65,FLE:69,SLY:60,HUN:82,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Camp Cave Horrors off-task for a black mask (Protect from Melee lets you wear an amulet of strength, so use your normal slayer gear \u2014 proselyte or torso is fine either way; use thralls and bring your herb sack). Imbue the black mask at the PvP Arena or Nightmare Zone.\n\nVisit Robin twice a day with 13 bones each time for 130 ectotokens (3,250 bonecrusher charges/day). You'll need 24k charges by step 12 \u2014 collect the bones from any slayer task. Recommended spot: northwest from the entrance."},
  {id:7,label:"5.b",isSub:true,step:null,activity:"Morytania Hard diary",gp_change:null,gp_total:14920204,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{HRB:15000},expected:{ATK:62,STR:78,DEF:70,HP:66,RNG:62,PRY:71,MAG:89,RC:64,CON:75,AGI:98,HRB:73,THI:84,CRF:65,FLE:69,SLY:60,HUN:82,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Complete the Morytania Hard diary. Put the lamp on Herblore."},
  {id:8,label:"6.a",isSub:false,step:6,activity:"Buy 23 bucket packs, 2300 sand, Superglass make it all, arteglass blow it all.",gp_change:-128800,gp_total:14791404,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{MAG:9984,THI:748000,CRF:202676},expected:{ATK:62,STR:78,DEF:70,HP:66,RNG:62,PRY:71,MAG:89,RC:64,CON:75,AGI:98,HRB:73,THI:84,CRF:65,FLE:69,SLY:60,HUN:82,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Buy 2,300 sand (each gives ~88.1 Crafting xp) from the grinder; buy bucket packs as needed (e.g. at Alice's farming shop near the Ectofuntus). Superglass Make it into glass (18:3, no pickup), then blow all the glass into unpowered orbs (arteglass) to reach level 70 Crafting."},
  {id:9,label:"6.b",isSub:true,step:null,activity:"Pyramid Plunder for one sceptre",gp_change:null,gp_total:14791404,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{THI:1316250},expected:{ATK:62,STR:78,DEF:70,HP:66,RNG:62,PRY:71,MAG:89,RC:64,CON:75,AGI:98,HRB:73,THI:86,CRF:69,FLE:69,SLY:60,HUN:82,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Do Pyramid Plunder for one sceptre (get the second at/after level 91 Thieving) using the sceptre + xp method.\n\n- World-hop to find a world with a North mummy room; it resets occasionally, so re-hop when needed.\n- On all but the last room, do the chest and sarcophagus first then check the doors, ignoring urns. On the last room do urns first, then chest, then sarcophagus, then leave.\n- Bring super energy potions and/or Vile Vigour. Worth making ~100 superantipoisons beforehand.\n- Collect gold artefacts as you go (you'll need ~200 later)."},
  {id:10,label:"7.a",isSub:false,step:7,activity:"Slayer to 100cb, While Guthix Sleeps",gp_change:-3000000,gp_total:11791404,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{ATK:1281200,STR:1524751.5,DEF:470421,HP:1405739,PRY:68049.5,MAG:1646474,HRB:75000,THI:80000,CRF:1295431,SLY:964800,HUN:50000,FRM:75000},expected:{ATK:62,STR:78,DEF:70,HP:66,RNG:62,PRY:71,MAG:89,RC:64,CON:75,AGI:98,HRB:73,THI:89,CRF:69,FLE:69,SLY:60,HUN:82,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Train Crafting to 80 (or 75 boosting) with Superglass Make + arteglass, and make an amulet of glory. Then grind Slayer to 100 combat. Target stats: 78 Attack, 85 Strength, 75+ Defence, 72+ Prayer \u2014 which should land you around 78+ Hitpoints and ~75 Slayer.\n\n- Keep Strength 10-15 levels ahead of Attack until it hits 83. Make Arclight at 75 Attack. Use Piety whenever meleeing.\n- Use accurate/aggressive/controlled and get bulk Defence xp from defensive-cast barrage tasks.\n- Unlock Broader Fletching.\n- At 90 Magic, use divine magic potions to stay at 94 for ice barrage; otherwise use smoke barrage (ankou/dust devils) and ice burst (dagannoths). Always cast defensively.\n- Use your Pharaoh's sceptre to swap to Ancients and your POH Dark altar to swap to Arceuus.\n- Complete While Guthix Sleeps along the way (grab the 100 magic logs for Shades of Mort'ton later), or postpone it until after the Corrupted Gauntlet.\n\nSee the Slayer guide for efficient slayer at this point."},
  {id:11,label:"7.b",isSub:true,step:null,activity:"Kourend Hard Diary",gp_change:null,gp_total:11791404,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{HRB:15000},expected:{ATK:78,STR:85,DEF:75,HP:79,RNG:62,PRY:71,MAG:92,RC:64,CON:75,AGI:98,HRB:74,THI:89,CRF:80,FLE:69,SLY:75,HUN:83,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Reached at 62 Slayer. Complete the Kourend Hard diary, lamp on Herblore."},
  {id:12,label:"7.c",isSub:true,step:null,activity:"Wilderness Hard Diary",gp_change:null,gp_total:11791404,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{HRB:15000},expected:{ATK:78,STR:85,DEF:75,HP:79,RNG:62,PRY:71,MAG:92,RC:64,CON:75,AGI:98,HRB:74,THI:89,CRF:80,FLE:69,SLY:75,HUN:83,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Reached at 68 Slayer. Complete the Wilderness Hard diary, lamp on Herblore."},
  {id:13,label:"7.d",isSub:true,step:null,activity:"Falador Hard Diary",gp_change:null,gp_total:11791404,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{HRB:15000},expected:{ATK:78,STR:85,DEF:75,HP:79,RNG:62,PRY:71,MAG:92,RC:64,CON:75,AGI:98,HRB:74,THI:89,CRF:80,FLE:69,SLY:75,HUN:83,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Reached at 72 Slayer. Complete the Falador Hard diary, lamp on Herblore."},
  {id:14,label:"7.e",isSub:true,step:null,activity:"Desert Hard Diary",gp_change:null,gp_total:11791404,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{HRB:15000},expected:{ATK:78,STR:85,DEF:75,HP:79,RNG:62,PRY:71,MAG:92,RC:64,CON:75,AGI:98,HRB:74,THI:89,CRF:80,FLE:69,SLY:75,HUN:83,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Unlocked with the Slayer helmet. Complete the Desert Hard diary, lamp on Herblore. This also requires killing the Kalphite Queen \u2014 an efficient way is thralls-only, which also clears the 'Prayer Smasher' Combat Achievement (splash all the grasp attacks)."},
  {id:15,label:"7.f",isSub:true,step:null,activity:"Karamja Hard Diary",gp_change:null,gp_total:11791404,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{HRB:15000},expected:{ATK:78,STR:85,DEF:75,HP:79,RNG:62,PRY:71,MAG:92,RC:64,CON:75,AGI:98,HRB:74,THI:89,CRF:80,FLE:69,SLY:75,HUN:83,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Reached at 100 combat. Complete the Karamja Hard diary, lamp on Herblore.\n\nAfterward, mine gems in the underground gem mine, cut them, and sell them for trading sticks at Gabooty (wear Karamja gloves) to reach 100k trading sticks \u2014 about 520 opals, 520 jades and 52 red topazes (keep spare red topaz and opals for slayer bracelets). Buy up to 10k karambwans at Tiadeche (Ring of Endurance + Vile Vigour + client hopping), then complete the Kourend & Kebos Hard diary and cook the bwans at your convenience (1t cooking at the Hosidius range is best). If you already bought bwans in Chapter 2, only buy the difference."},
  {id:16,label:"7.g",isSub:true,step:null,activity:"East Combat Achievements",gp_change:null,gp_total:11791404,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{PRY:20000,HRB:5000},expected:{ATK:78,STR:85,DEF:75,HP:79,RNG:62,PRY:71,MAG:92,RC:64,CON:75,AGI:98,HRB:75,THI:89,CRF:80,FLE:69,SLY:75,HUN:83,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Along the way, complete a long list of Combat Achievement tasks (see the separate CA document). If you're missing any by 100 combat, go do them (stew-boost Slayer as needed). Collect the easy and medium CA rewards, lamping Herblore. Complete His Faithful Servants along the way."},
  {id:17,label:"7.h",isSub:true,step:null,activity:"Medium Combat Achievements + Kebos Hard Diary",gp_change:null,gp_total:11791404,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{HRB:25000},expected:{ATK:78,STR:85,DEF:75,HP:79,RNG:62,PRY:72,MAG:92,RC:64,CON:75,AGI:98,HRB:75,THI:89,CRF:80,FLE:69,SLY:75,HUN:83,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Collect the Medium Combat Achievement rewards and complete the Kourend & Kebos Hard diary (lamp on Herblore)."},
  {id:18,label:"7.i",isSub:true,step:null,activity:"Hourlies",gp_change:null,gp_total:11791404,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{HRB:500000,HUN:1000000,FRM:2000000},expected:{ATK:78,STR:85,DEF:75,HP:79,RNG:62,PRY:72,MAG:92,RC:64,CON:75,AGI:98,HRB:75,THI:89,CRF:80,FLE:69,SLY:75,HUN:83,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:94,SAI:67},guide:"Keep up your hourly activities (bird runs, farm runs, etc.) throughout this grind."},
  {id:19,label:"8.a",isSub:false,step:8,activity:"Buy broad arrowhead packs",gp_change:-10541404,gp_total:1250000,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{},expected:{ATK:78,STR:85,DEF:75,HP:79,RNG:62,PRY:72,MAG:92,RC:64,CON:75,AGI:98,HRB:78,THI:89,CRF:80,FLE:69,SLY:75,HUN:86,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:67},guide:"Buy broad arrowhead packs with most of your money, keeping 1,250k in reserve. Buy from any slayer master; if you open fast enough the stock slowly depletes, so hop worlds whenever stock hits 700 or lower."},
  {id:20,label:"8.b",isSub:true,step:null,activity:"Pest Control",gp_change:null,gp_total:1250000,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{FLE:1849369},expected:{ATK:78,STR:85,DEF:75,HP:79,RNG:62,PRY:72,MAG:92,RC:64,CON:75,AGI:98,HRB:78,THI:89,CRF:80,FLE:69,SLY:75,HUN:86,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:67},guide:"Do Pest Control on the veteran (100+ combat) boat for full Elite Void ranged while fletching during games \u2014 1,250 points for just the ranged set, 1,650 for a full set. Only contribute as much damage as needed for points. The other two helmets are optional."},
  {id:21,label:"9.a",isSub:false,step:9,activity:"Fremennik Exiles",gp_change:null,gp_total:1250000,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{RC:30000,CRF:50000,SLY:50000},expected:{ATK:78,STR:85,DEF:75,HP:79,RNG:62,PRY:72,MAG:92,RC:64,CON:75,AGI:98,HRB:78,THI:89,CRF:80,FLE:82,SLY:75,HUN:86,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:67},guide:"Do Fremennik Exiles, A Night at the Theatre (lamps on Ranged) and Hopespear's Will. If you don't have the Fremennik shield yet, get it from Bardur with a Ring of Charos(a)."},
  {id:22,label:"9.b",isSub:true,step:null,activity:"A Night at the Theatre",gp_change:null,gp_total:1250000,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{HRB:80000},expected:{ATK:78,STR:85,DEF:75,HP:79,RNG:62,PRY:72,MAG:92,RC:65,CON:75,AGI:98,HRB:78,THI:89,CRF:80,FLE:82,SLY:75,HUN:86,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:67},guide:"Part of step 9: complete A Night at the Theatre. Put lamps on Ranged."},
  {id:23,label:"9.c",isSub:true,step:null,activity:"Hopespear's Will",gp_change:null,gp_total:1250000,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{PRY:38750},expected:{ATK:78,STR:85,DEF:75,HP:79,RNG:62,PRY:72,MAG:92,RC:65,CON:75,AGI:98,HRB:79,THI:89,CRF:80,FLE:82,SLY:75,HUN:86,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:67},guide:"Part of step 9: complete Hopespear's Will."},
  {id:24,label:"9.d",isSub:true,step:null,activity:"Start Monkey Madness II",gp_change:null,gp_total:1250000,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{},expected:{ATK:78,STR:85,DEF:75,HP:79,RNG:62,PRY:72,MAG:92,RC:65,CON:75,AGI:98,HRB:79,THI:89,CRF:80,FLE:82,SLY:75,HUN:86,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:67},guide:"Start Monkey Madness II until you have access to Kruk's Dungeon (with the Maniacal monkeys)."},
  {id:25,label:"10.a",isSub:false,step:10,activity:"Catch 16k black chinchompas. Buy a crystal halberd.",gp_change:-750000,gp_total:500000,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{HUN:5040000},expected:{ATK:78,STR:85,DEF:75,HP:79,RNG:62,PRY:72,MAG:92,RC:65,CON:75,AGI:98,HRB:79,THI:89,CRF:80,FLE:82,SLY:75,HUN:86,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:67},guide:"Catch 16k black chinchompas in the Wilderness (or 20k red chins between Tal Teklan and Kastori) for 92 Ranged. Throw the chins in the cave to reach 70 Ranged first, then complete the Western Provinces Hard diary (needs one Zulrah kill), upgrade your void to Elite, buy a crystal halberd, and finish throwing to 92 Ranged.\n\nGear: ranging potions, bonecrusher (24k+ charges), Elite Void ranged, mixed hide boots, berserker (i), amulet of strength, crystal halberd for speccing, mixed hide cape, death-charge runes. Use medium fuse, Protect from Melee and Eagle Eye. Chins aren't lost on death, so you can carry extra to extend trips.\n\nAFK alternative: super ranging potions at Nightmare Zone (hard custom rumble) \u2014 best AFK ranged by far, but slower."},
  {id:26,label:"10.b",isSub:true,step:null,activity:"Throw 16k black chinchompas",gp_change:null,gp_total:500000,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{HP:1537942,RNG:6151769,PRY:189285},expected:{ATK:78,STR:85,DEF:75,HP:79,RNG:62,PRY:72,MAG:92,RC:65,CON:75,AGI:98,HRB:79,THI:89,CRF:80,FLE:82,SLY:75,HUN:94,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:67},guide:"Throw the chinchompas in the cave to push Ranged toward 92. The rune pouch carries Death, Blood and Soul runes for death charge."},
  {id:27,label:"10.c",isSub:true,step:null,activity:"Western Provinces Hard Diary",gp_change:null,gp_total:500000,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{HRB:15000},expected:{ATK:78,STR:85,DEF:75,HP:85,RNG:92,PRY:74,MAG:92,RC:65,CON:75,AGI:98,HRB:79,THI:89,CRF:80,FLE:82,SLY:75,HUN:94,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:67},guide:"Complete the Western Provinces Hard diary, which includes getting one Zulrah kill (use blood barrage/blitz)."},
  {id:28,label:"11",isSub:false,step:11,activity:"3t gem mine to 97 mining",gp_change:null,gp_total:500000,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{MNG:9562054},expected:{ATK:78,STR:85,DEF:75,HP:85,RNG:92,PRY:74,MAG:92,RC:65,CON:75,AGI:98,HRB:79,THI:89,CRF:80,FLE:82,SLY:75,HUN:94,MNG:74,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:67},guide:"Optional but recommended (skip if you don't care about efficiency): with the Karamja Hard diary done, 3t gem-mine to level 97 Mining (gems route), banking uncut gems via the deposit box. Requires a charged amulet of glory. Cutting the gems later via multiskilling makes this more efficient than 3t4g.\n\nSteps 11-15 are best combined to break up the CG grind with skilling \u2014 read ahead and interleave them."},
  {id:29,label:"12.a",isSub:false,step:12,activity:"Blast mining",gp_change:-400000,gp_total:100000,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{},expected:{ATK:78,STR:85,DEF:75,HP:85,RNG:92,PRY:74,MAG:92,RC:65,CON:75,AGI:98,HRB:79,THI:89,CRF:80,FLE:82,SLY:75,HUN:94,MNG:97,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:67},guide:"Make sure you have at least 75 Mining. Charter to The Great Conch (Summer Shore), start The Red Reef and follow it until you're sent to the Red Rock. Charter to Deepfin Point and mine 24 nickel ore. Then blast-mine 551 addy ore (convert spare gems into alchs/bracelets for dynamite if needed), getting at least 15 runite ore along the way."},
  {id:30,label:"12.b",isSub:true,step:null,activity:"Adamant bars and nails, liquidate bracelets/gems/alchs",gp_change:1100000,gp_total:1200000,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{SMI:25100},expected:{ATK:78,STR:85,DEF:75,HP:85,RNG:92,PRY:74,MAG:92,RC:65,CON:75,AGI:98,HRB:79,THI:89,CRF:80,FLE:82,SLY:75,HUN:94,MNG:97,SMI:74,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:67},guide:"Smelt all the addy into bars and all the nickel into cupronickel bars, then turn 71 addy bars into 1,065 addy nails."},
  {id:31,label:"12.c",isSub:true,step:null,activity:"Camphor logs",gp_change:null,gp_total:1200000,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{WC:71463},expected:{ATK:78,STR:85,DEF:75,HP:85,RNG:92,PRY:74,MAG:92,RC:65,CON:75,AGI:98,HRB:79,THI:89,CRF:80,FLE:82,SLY:75,HUN:94,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:67},guide:"Teleport to The Great Conch (fairy ring CJQ) and chop/bank up to 505 camphor logs. Fastest with a log basket \u2014 teleport out to bank, fairy-ring back. Sawmill vouchers reduce the logs needed (1 per voucher, up to 236)."},
  {id:32,label:"12.d",isSub:true,step:null,activity:"Camphor planks",gp_change:-1182500,gp_total:17500,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{},expected:{ATK:78,STR:85,DEF:75,HP:85,RNG:92,PRY:74,MAG:92,RC:65,CON:75,AGI:98,HRB:79,THI:89,CRF:80,FLE:82,SLY:75,HUN:94,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:67},guide:"Make 473 camphor planks, then build these ship upgrades: Camphor cargo hold (sloop), Adamant keel (skiff + sloop), Camphor hull (skiff + sloop), Camphor mast and canvas sails (skiff + sloop, needs a boost). Optional but recommended: 2x Adamant cannon (sloop, needs a boost) and a ballistic attractor \u2014 discard the mithril salvaging hooks that are in the way."},
  {id:33,label:"13.a",isSub:false,step:13,activity:"Charting Sunset Ocean",gp_change:null,gp_total:17500,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{SAI:8335},expected:{ATK:78,STR:85,DEF:75,HP:85,RNG:92,PRY:74,MAG:92,RC:65,CON:75,AGI:98,HRB:79,THI:89,CRF:80,FLE:82,SLY:75,HUN:94,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:67},guide:"Recruit Cabin Boy Jenkins and Adventurer Ada for max multiskilling xp while charting. Chart the Sunset Ocean from Aldarin twice \u2014 first with your raft (pink route), then your skiff (red route). Dock at the Laguna Aurorae for a small key and the Shimmering Atoll for the rosewood hull schematic (chop a teak there for a medallion fragment).\n\nBuy 5k mithril cannonballs at Port Roberts. Recruit Oarswoman Olga and Jittery Jim (boost) for your sloop. Collect charting bonuses from Chartin' Charles McAtless."},
  {id:34,label:"13.b",isSub:true,step:null,activity:"Charting Western Ocean",gp_change:null,gp_total:17500,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{SAI:83115},expected:{ATK:78,STR:85,DEF:75,HP:85,RNG:92,PRY:74,MAG:92,RC:65,CON:75,AGI:98,HRB:79,THI:89,CRF:80,FLE:82,SLY:75,HUN:94,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:67},guide:"Chart the Western Ocean in full across four routes. Warnings: Backwater crates poison/disease/venom you (bring antipoison); the portal nexus perry bottle teleports you to the Abyss (drink last); sea shandy 2 sends you to Port Sarim; banker's draught banks your items (drink last); delicate elven wine knocks you out at Isafdar. Dock at the right islands first to collect keys, medallion fragments and the rosewood cargo hold schematic."},
  {id:35,label:"13.c",isSub:true,step:null,activity:"Charting Miscellaneous",gp_change:null,gp_total:17500,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{SAI:30275},expected:{ATK:78,STR:85,DEF:75,HP:85,RNG:92,PRY:74,MAG:92,RC:65,CON:75,AGI:98,HRB:79,THI:89,CRF:80,FLE:82,SLY:75,HUN:94,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:68},guide:"Complete all Miscellaneous charts in the same areas you're charting."},
  {id:36,label:"13.d",isSub:true,step:null,activity:"Partial charting Shrouded Ocean",gp_change:null,gp_total:17500,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{SAI:40000},expected:{ATK:78,STR:85,DEF:75,HP:85,RNG:92,PRY:74,MAG:92,RC:65,CON:75,AGI:98,HRB:79,THI:89,CRF:80,FLE:82,SLY:75,HUN:94,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:69},guide:"Chart the lower-level part of the Shrouded Ocean, starting from Corsair Cove (recover your boat there). While in the Simian Sea, continue The Red Reef at Red Rock and collect the Sailor's Marker, plus small keys at the Isle of Bones, Charred Island and Tear of the Soul, and the medallion fragment from the cauldron. Use Protect from Missiles in ship combat \u2014 your bowfa works fine on the pirates instead of cannons."},
  {id:37,label:"13.e",isSub:true,step:null,activity:"The Red Rock",gp_change:null,gp_total:17500,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{SMI:5000,SAI:15000},expected:{ATK:78,STR:85,DEF:75,HP:85,RNG:92,PRY:74,MAG:92,RC:65,CON:75,AGI:98,HRB:79,THI:89,CRF:80,FLE:82,SLY:75,HUN:94,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:69},guide:"Continue The Red Reef quest at the Red Rock until all steps there are done except reporting back to Floopa. Complete it later by chartering to the Great Conch and speaking with Floopa."},
  {id:38,label:"14",isSub:false,step:14,activity:"Charting Shrouded Ocean",gp_change:null,gp_total:17500,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{SAI:75000},expected:{ATK:78,STR:85,DEF:75,HP:85,RNG:92,PRY:74,MAG:92,RC:65,CON:75,AGI:98,HRB:79,THI:89,CRF:80,FLE:82,SLY:75,HUN:94,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:69},guide:"Boost to build an adamant helm on both your sloop and skiff, then finish charting the Shrouded Ocean by charting to Deepfin Point and following the part-2 route."},
  {id:39,label:"15",isSub:false,step:15,activity:"Multiskill Guardians of the Rift with all uncut gems.",gp_change:null,gp_total:17500,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{RC:596589,CRF:1704540},expected:{ATK:78,STR:85,DEF:75,HP:85,RNG:92,PRY:74,MAG:92,RC:65,CON:75,AGI:98,HRB:79,THI:89,CRF:80,FLE:82,SLY:75,HUN:94,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:70},guide:"Go to Guardians of the Rift and play with the multiskilling method until you're completely out of uncut gems.\n\n- Carry a gem bag full of uncut gems (60 each of sapphires, emeralds, rubies, diamonds), cut them inside, and deposit at the Deposit Pool one inventory at a time. Lower points but the crafting xp makes it more efficient.\n- Only enter the west essence mine when it opens; ignore other essence.\n- Use 'empty cell running' when out of essence: grab a cell, charge it at an altar (higher tier better), deposit on a golem (or barrier).\n- Make an amulet of glory once you have 75(+5) Crafting."},
  {id:40,label:"16",isSub:false,step:16,activity:"Corrupted Gauntlet",gp_change:43500000,gp_total:43517500,chapter:"3.1: Slayer and the red prison",chapter_num:"3.1",xp_gains:{STR:939600,DEF:223200,HP:669600,RNG:901200,MAG:223200},expected:{ATK:78,STR:85,DEF:75,HP:85,RNG:92,PRY:74,MAG:92,RC:73,CON:75,AGI:98,HRB:79,THI:89,CRF:86,FLE:82,SLY:75,HUN:94,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:70},guide:"Do Corrupted Gauntlet for 6 armour seeds and one enhanced weapon seed (~70 hours). Tip: use longrange on staff hits for Defence xp. You should be 93 Ranged after this. Keep up your hourlies.\n\nAverage rewards: ~2,960 crystal shards (2,300 make a full crystal set + corrupted bowfa), ~51.5m gp in gp and alchs, 506k Crafting xp, plus piles of cosmic/nature/law/chaos/death/blood runes and mithril/adamant/rune/dragon arrows.\n\nAim for t1 armour from the start (don't learn t2 first). Prescout every prep. Safe up at Hunllef \u2014 eat whenever your HP is 21+ below max. During Hunllef, prioritise positioning > overheads > eat/drink egniol > attack > offensive prayers, staying near the middle of the room. Leave early if you get the 6 armour seeds and enhanced seed sooner."},
  {id:41,label:"17",isSub:false,step:17,activity:"Multiskill Guardians of the Rift",gp_change:null,gp_total:43517500,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{RC:153411,CRF:399062},expected:{ATK:78,STR:87,DEF:76,HP:87,RNG:93,PRY:74,MAG:92,RC:73,CON:75,AGI:98,HRB:79,THI:89,CRF:86,FLE:82,SLY:75,HUN:94,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:70},guide:"Go to Guardians of the Rift until you have the full Raiments of the Eye and the colossal pouch. Use the same multiskilling method while you still have uncut gems; once you're out, switch to a mass world with 4 pouches and combination runes. Use empty cell running throughout. At 65 Runecraft, complete the Ardougne Hard diary (needs a shield left half)."},
  {id:42,label:"18.a",isSub:false,step:18,activity:"Dragon Slayer II",gp_change:null,gp_total:43517500,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{STR:100000,AGI:50000,THI:50000,MNG:60000,SMI:80000},expected:{ATK:78,STR:87,DEF:76,HP:87,RNG:93,PRY:74,MAG:92,RC:74,CON:75,AGI:98,HRB:79,THI:89,CRF:87,FLE:82,SLY:75,HUN:94,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:70},guide:"Do While Guthix Sleeps first if you haven't. Then start and complete Dragon Slayer II \u2014 use your bowfa on the strong bosses (Protect from Magic + antifire potions cover most dragonfire, but Galvek and metal dragons need the shield plus a rune crossbow). Put Ellen's end xp on Strength."},
  {id:43,label:"18.b",isSub:true,step:null,activity:"50 Vorkath kills",gp_change:3000000,gp_total:46517500,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{HP:50000,RNG:150000},expected:{ATK:78,STR:87,DEF:76,HP:87,RNG:93,PRY:74,MAG:92,RC:74,CON:75,AGI:98,HRB:79,THI:89,CRF:87,FLE:82,SLY:75,HUN:94,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:70},guide:"Kill Vorkath up to 50 times for an Ava's Assembler."},
  {id:44,label:"18.c",isSub:true,step:null,activity:"Monkey Madness II",gp_change:null,gp_total:46517500,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{STR:100000,AGI:60000,THI:50000,SLY:80000,HUN:50000},expected:{ATK:78,STR:87,DEF:76,HP:87,RNG:93,PRY:74,MAG:92,RC:74,CON:75,AGI:98,HRB:79,THI:89,CRF:87,FLE:82,SLY:75,HUN:94,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:70},guide:"Complete Monkey Madness II. Put Duke's xp on Strength."},
  {id:45,label:"19.a",isSub:false,step:19,activity:"Devious Minds",gp_change:null,gp_total:46517500,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{RC:5000,FLE:5000,SMI:6500},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:74,MAG:92,RC:74,CON:75,AGI:98,HRB:79,THI:89,CRF:87,FLE:82,SLY:76,HUN:95,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:70},guide:"Do Devious Minds. (A bowfa is strong against basically everything coming up.)"},
  {id:46,label:"19.b",isSub:true,step:null,activity:"Secrets of the North",gp_change:null,gp_total:46517500,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{AGI:60000,THI:50000,HUN:40000},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:74,MAG:92,RC:74,CON:75,AGI:98,HRB:79,THI:89,CRF:87,FLE:82,SLY:76,HUN:95,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:70},guide:"Do Secrets of the North."},
  {id:47,label:"19.c",isSub:true,step:null,activity:"Beneath Cursed Sands",gp_change:null,gp_total:46517500,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{AGI:5000},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:74,MAG:92,RC:74,CON:75,AGI:98,HRB:79,THI:89,CRF:87,FLE:82,SLY:76,HUN:95,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:70},guide:"Do Beneath Cursed Sands, then Into the Tombs. Put the lamp on Strength."},
  {id:48,label:"19.d",isSub:true,step:null,activity:"50 Phantom Muspah kills",gp_change:2500000,gp_total:49017500,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{HP:117583,RNG:352750},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:74,MAG:92,RC:74,CON:75,AGI:98,HRB:79,THI:89,CRF:87,FLE:82,SLY:76,HUN:95,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:70},guide:"Optional but recommended: kill the Phantom Muspah (or Grumbler) for an ancient icon to upgrade your ancient staff. Bring mithril sapphire bolts(e) and a rune crossbow for the smite phase."},
  {id:49,label:"19.e",isSub:true,step:null,activity:"Desert Treasure II",gp_change:null,gp_total:49017500,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{PRY:300000},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:74,MAG:92,RC:74,CON:75,AGI:98,HRB:79,THI:89,CRF:87,FLE:82,SLY:76,HUN:95,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:70},guide:"Start and complete Desert Treasure II, putting the xp on Prayer, then collect your quest cape.\n\nBest weapons for the four bosses: Vardorvis \u2014 Arkan blade; Duke Sucellus \u2014 Arclight; Leviathan \u2014 bowfa; Whisperer \u2014 strongest Earth spell you can cast (don't stand in the wave)."},
  {id:50,label:"20.a",isSub:false,step:20,activity:"UIM gold ore train smithing to 86",gp_change:-9323751,gp_total:39693749,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{SMI:2279139},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:92,RC:74,CON:75,AGI:98,HRB:79,THI:89,CRF:87,FLE:82,SLY:76,HUN:95,MNG:97,SMI:75,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:70},guide:"Use your CG money to train Smithing to 86 with UIM gold \u2014 about 42.3k gold ores (covers all diaries). Smelt at least 15 runite bars.\n\nOptional: train to 'just' 83 and +5 for the Lumbridge Elite diary (~29.9k gold ores), but then you can't complete Sailing. Force-spawn marks of grace for staminas to speed things up if you like (the gold-dropping method needs none)."},
  {id:51,label:"20.b",isSub:true,step:null,activity:"Make and alch diamond bracelets",gp_change:10327500,gp_total:50021249,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{MAG:292500,CRF:427500},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:92,RC:74,CON:75,AGI:98,HRB:79,THI:89,CRF:87,FLE:82,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:70},guide:"Convert your cut diamonds into bracelets and alch/cash them in (e.g. at artefacts)."},
  {id:52,label:"20.c",isSub:true,step:null,activity:"Make and alch air battlestaves",gp_change:5115000,gp_total:55136249,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{MAG:47850,CRF:75625},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:92,RC:74,CON:75,AGI:98,HRB:79,THI:89,CRF:88,FLE:82,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:70},guide:"Charge enough unpowered orbs to match your battlestaves, then alch the air battlestaves."},
  {id:53,label:"20.d",isSub:true,step:null,activity:"Make and alch ruby bracelets",gp_change:9067500,gp_total:64203749,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{MAG:422500,THI:4870115,CRF:520000},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:74,CON:75,AGI:98,HRB:79,THI:89,CRF:88,FLE:82,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:70},guide:"Optional: convert cut rubies into bracelets and alch them too (lower value, ~9m/hr effective)."},
  {id:54,label:"20.e",isSub:true,step:null,activity:"Lumbridge Elite Diary",gp_change:null,gp_total:64203749,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{HRB:50000},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:74,CON:75,AGI:98,HRB:79,THI:96,CRF:89,FLE:82,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:70},guide:"Complete the Lumbridge Elite diary at your convenience."},
  {id:55,label:"21.a",isSub:false,step:21,activity:"Keldagrim stonemason, woodcutting",gp_change:-4000000,gp_total:60203749,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{WC:910041},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:74,CON:75,AGI:98,HRB:79,THI:96,CRF:89,FLE:82,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:73,FRM:96,SAI:70},guide:"Big multi-part step \u2014 main goals: complete port bounty tasks, finish charting the Northern Ocean, and train Woodcutting to 80.\n\nSwap your kraken ink stout barrel on the sloop for perildance bitter. Boost-smith 3 runite bars into 45 rune nails. Buy 4 magic stones at the Keldagrim stonemason and build a crystal extractor on both ships (skiff one next to the helm; sloop one port-side next to the front facility). Boost to build an eternal brazier on both ships. The crystal extractors give lots of crystal shards while you train Sailing \u2014 always use them."},
  {id:56,label:"21.b",isSub:true,step:null,activity:"Port bounty tasks",gp_change:null,gp_total:60203749,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{SAI:300000},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:74,CON:75,AGI:98,HRB:79,THI:96,CRF:89,FLE:82,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:80,FRM:96,SAI:70},guide:"Collect port bounty tasks. They're not tied to a location, so teleport around to check every board. Most creatures drop two different task items, so grab both to double-dip xp.\n\nTasks: Stingray (16 ray barbs -> 2x cotton trawling net; kill east of Aldarin, fin tasks guaranteed at Corsair Cove); Albatross (5-10 swift feathers -> gale catcher; southeast of Etceteria, bring repair kits, beak tasks guaranteed at Summer Shore); Narwhal (1 horn -> chum spreader; southwest of Miscellania, dock at Etceteria)."},
  {id:57,label:"21.c",isSub:true,step:null,activity:"The Gwenith Glide",gp_change:null,gp_total:60203749,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{SAI:125322},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:74,CON:75,AGI:98,HRB:79,THI:96,CRF:89,FLE:82,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:80,FRM:96,SAI:74},guide:"Take your skiff to the Gwenith Glide and complete at least up to the shark rank (unlocks the Heart of Ithell) and to 1,225,000 Sailing xp (level 75) \u2014 whichever comes later. Dock at Ynysdail for a small key and Lledrith for the dragon salvaging hook schematic."},
  {id:58,label:"21.d",isSub:true,step:null,activity:"Charting Northern Ocean",gp_change:null,gp_total:60203749,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{SAI:404210},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:74,CON:75,AGI:98,HRB:79,THI:96,CRF:89,FLE:82,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:80,FRM:96,SAI:75},guide:"Chart the Northern Ocean in full \u2014 pink route with a raft first, then red route with your skiff, both from Rellekka. The fishier bladderier stout teleports you to the troll arena (just resume after). Collect the eternal brazier schematic and small key at Buccaneer's Haven. Finish the last three bottles in order: kgp martini, then winter sun, then exile's welcome. Once charting is done, collect your xp bonuses and the Horizon's Lure from Chartin' Charles McAtless."},
  {id:59,label:"22",isSub:false,step:22,activity:"Fire cape",gp_change:null,gp_total:60203749,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:74,CON:75,AGI:98,HRB:79,THI:96,CRF:89,FLE:82,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:80,FRM:96,SAI:78},guide:"Get a fire cape off-task if you don't have one. Options: blood barrage to heal during waves; vengeance + brews tanking mage-frog hits to speed things up; thralls (recast on the move) for fast but pricey kills. Use divine ranged potions if you have them."},
  {id:60,label:"23",isSub:false,step:23,activity:"Dragon pickaxe",gp_change:null,gp_total:60203749,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:74,CON:75,AGI:98,HRB:79,THI:96,CRF:89,FLE:82,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:80,FRM:96,SAI:78},guide:"Get a dragon pickaxe. If you're going for Combat Achievements, just hop bosses while building kc. If you plan to get a Voidwaker later you'll likely collect several dragon pickaxes anyway (Artio, Spindel, Vet'ion). Alternatively, postpone until your KQ head grind."},
  {id:61,label:"24",isSub:false,step:24,activity:"Banked herblore XP force spawning MOGs",gp_change:null,gp_total:60203749,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{AGI:50000,HRB:1000000},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:74,CON:75,AGI:98,HRB:79,THI:96,CRF:89,FLE:82,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:80,FRM:96,SAI:78},guide:"Cash in your banked Herblore xp by force-spawning marks of grace at Ardougne, and make some staminas for later.\n\nMethod: every 3 to 9.5 minutes (inclusive, lower is better but don't rush), do exactly one lap at Ardougne rooftops, then do other activities. A mark spawns on finishing a lap 75% of the time (you pick it up next lap). When done, do one back-to-back lap to grab the final mark. This gives a mark per ~1,057 xp on average \u2014 roughly 1,160 marks (2,900 4-dose staminas) from 98 to 99."},
  {id:62,label:"25.a",isSub:false,step:25,activity:"Falador Elite Diary",gp_change:null,gp_total:60203749,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{HRB:50000},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:74,CON:75,AGI:98,HRB:83,THI:96,CRF:89,FLE:82,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:80,FRM:96,SAI:78},guide:"Complete the remaining Falador Elite diary tasks if you have the Herblore level (boostable 81)."},
  {id:63,label:"25.b",isSub:true,step:null,activity:"Kandarin Elite Diary",gp_change:null,gp_total:60203749,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{HRB:50000},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:74,CON:75,AGI:98,HRB:83,THI:96,CRF:89,FLE:82,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:80,FRM:96,SAI:78},guide:"Complete the remaining Kandarin Elite diary tasks if you have the Herblore level (boostable 86)."},
  {id:64,label:"26.a",isSub:false,step:26,activity:"3t4s to 20k sand",gp_change:-1680000,gp_total:58523749,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{MNG:360000},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:74,CON:75,AGI:98,HRB:84,THI:96,CRF:89,FLE:82,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:80,FRM:96,SAI:78},guide:"3t4s sandstone-mine 20k sand (for 93 Crafting) or 70k sand (for 99 Crafting) at the new spot \u2014 buy all the sand, buying bucket packs first to match."},
  {id:65,label:"26.b",isSub:true,step:null,activity:"Superglass make 20k sand",gp_change:-200000,gp_total:58323749,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{MAG:128359,CRF:200000},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:74,CON:75,AGI:98,HRB:84,THI:96,CRF:89,FLE:82,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:80,FRM:96,SAI:78},guide:"Superglass Make all the sand using your previously farmed giant seaweed."},
  {id:66,label:"26.c",isSub:true,step:null,activity:"Arteglass blow glass to level 91 thieving",gp_change:null,gp_total:58323749,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:74,CON:75,AGI:98,HRB:84,THI:96,CRF:90,FLE:82,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:80,FRM:96,SAI:78},guide:"If you're not 91 Thieving yet, arteglass the molten glass until you are."},
  {id:67,label:"27.a",isSub:false,step:27,activity:"Vile Vigour ZMI to 95 runecrafting",gp_change:-48000000,gp_total:10323749,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{RC:7561308,CRF:2072000,FLE:8000000,MNG:687391},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:74,CON:75,AGI:98,HRB:84,THI:96,CRF:90,FLE:82,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:80,FRM:96,SAI:78},guide:"Optional but recommended: with daeyalt mining and the full Raiments of the Eye, train Runecraft via Vile Vigour fletching + ZMI multiskilling (or non-spellbook-swap with staminas). Getting to 90 or 95 Runecraft sooner gives you ample wrath runes for offering spells during slayer. Blow glass while ZMI crafting, then switch to fletching when out of glass."},
  {id:68,label:"27.b",isSub:true,step:null,activity:"Sell law and nature runes",gp_change:14790000,gp_total:25113749,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:95,CON:75,AGI:98,HRB:84,THI:96,CRF:93,FLE:96,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:80,FRM:96,SAI:78},guide:"It's meta to sell some runes: sell laws past the first 10,000 and natures past the first 30,000 to Ali Morissane (keep more if you want them). Optionally sell chaos runes for tokkul to TzHaar-Mej-Roh and buy onyx bolt tips and uncut gems (needs a fire cape)."},
  {id:69,label:"28",isSub:false,step:28,activity:"Pyramid Plunder for a second sceptre",gp_change:null,gp_total:25113749,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{THI:2200000},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:95,CON:75,AGI:98,HRB:84,THI:96,CRF:93,FLE:96,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:80,FRM:96,SAI:78},guide:"If you only got one sceptre earlier, do Pyramid Plunder again for a second.\n\n- Use your sceptre's teleport instead of entering the pyramid \u2014 no need to hop for a North mummy.\n- Room 7: loot urns as you encounter them (south to north, then along the south wall around the chest), open doors clockwise from east. At 91+ Thieving, go for the chest around the 2:10 timer.\n- Room 8: grab the east urns first, trace back south, go clockwise, grab the chest near the last urn and exit northeast.\n- Aim for laps of 4:40 or faster while opening all 81+ urns. Still open sarcophagi from the level 51 room."},
  {id:70,label:"29.a",isSub:false,step:29,activity:"Train construction to level 83",gp_change:-16716492,gp_total:8397257,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{CON:1462693},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:95,CON:75,AGI:98,HRB:84,THI:98,CRF:93,FLE:96,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:80,FRM:96,SAI:78},guide:"Once you have enough mahogany planks from Misc (or chop teaks), train Construction to 83 with mahogany benches (or tables \u2014 slightly less xp but easier). Needs about 10.5k mahogany logs (~47 days of Misc at 10 workers)."},
  {id:71,label:"29.b",isSub:true,step:null,activity:"Build some stuff in the POH",gp_change:-2380000,gp_total:6017257,chapter:"3.2: Quest cape, quality of life",chapter_num:"3.2",xp_gains:{},expected:{ATK:78,STR:88,DEF:76,HP:87,RNG:93,PRY:76,MAG:93,RC:95,CON:83,AGI:98,HRB:84,THI:98,CRF:93,FLE:96,SLY:76,HUN:95,MNG:97,SMI:86,FSH:99,COK:81,FM:89,WC:80,FRM:96,SAI:78},guide:"Build/upgrade: Ornate rejuvenation pool (boostable 87 Herblore + Zulrah scales for antidote++), Ornate jewellery box, Gilded magic wardrobe (optional), a second Fairy ring (buy a superior garden), Marble cape rack, Occult altar, Mahogany treasure chest.\n\nTotal items: 1 Pharaoh's sceptre, 10,000 astral runes, Ancient signet, Lunar signet, 5 limestone bricks, 5 buckets of water, 1,000 soul runes, 1,000 body runes, 10 stamina potions(4), 10 prayer potions(4), 3 marble blocks, 10 super restores(4), 9 gold leaves, 10 anti-venom(4), 1,000 blood runes, 10 mushrooms, 1 Fairy enchantment, 4 mahogany planks, 5 combat bracelets(4), 5 skills necklaces(4), 8 amulets of glory(4), 8 rings of wealth(5).\n\nThis assumes you had no pool built previously."},
];
const { useState, useEffect, useCallback, useRef } = React;

const APP_VERSION = "Tracker v2.0";
const GUIDE_UPDATED = "Guide last updated 7 Jun 2026";

/* ---------- design tokens & stylesheet ---------- */
const CSS = `
:root{
  --bg:#0b0e13; --surface:#11161d; --raised:#161d26; --inset:#0d1117;
  --line:#232b36; --line-soft:#1b222c;
  --text:#e8edf3; --text-dim:#8b96a3; --text-faint:#5d6874;
  --green:#3fb950; --green-deep:#238636; --green-bg:#0d1f12;
  --blue:#58a6ff; --blue-deep:#1f6feb; --blue-bg:#0d1a2e;
  --amber:#d29922; --amber-deep:#9e6a03; --amber-bg:#1e1908;
  --red:#f85149; --red-deep:#da3633; --red-bg:#1f0d0d;
  --mono:ui-monospace,'SF Mono','Cascadia Code','JetBrains Mono',Consolas,monospace;
}
html,body{margin:0;padding:0;background:var(--bg);}
*{box-sizing:border-box;}
.app{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:var(--bg);min-height:100vh;color:var(--text);padding-bottom:64px;}
.wrap{max-width:1280px;margin:0 auto;padding:0 28px;width:100%;}
.mono{font-family:var(--mono);}

button{font-family:inherit;}
button:focus-visible,input:focus-visible,textarea:focus-visible,[tabindex]:focus-visible{outline:2px solid var(--blue);outline-offset:2px;border-radius:8px;}

.pill{padding:5px 12px;border-radius:8px;border:1px solid var(--line);background:transparent;color:var(--text-dim);
  font-size:12.5px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:6px;
  transition:border-color .13s,color .13s,background .13s,transform .08s;}
.pill:hover{border-color:#3a4552;color:var(--text);}
.pill:active{transform:translateY(1px);}
.pill.on{background:color-mix(in srgb,var(--pc) 12%,transparent);border-color:var(--pc);color:var(--pc);}
.pill.on:hover{border-color:var(--pc);}

.searchbox{display:flex;align-items:center;gap:8px;background:var(--inset);border:1px solid var(--line);border-radius:9px;
  padding:6px 11px;min-width:230px;flex:0 1 340px;transition:border-color .15s;}
.searchbox:focus-within{border-color:var(--blue-deep);}
.searchbox input{flex:1;background:transparent;border:none;color:var(--text);font-size:13.5px;outline:none;min-width:0;font-family:inherit;}
.searchbox .clear{cursor:pointer;color:var(--text-dim);font-size:14px;line-height:1;border:none;background:none;padding:2px;}
.searchbox .clear:hover{color:var(--text);}
.kbd{font-family:var(--mono);font-size:10.5px;color:var(--text-faint);border:1px solid var(--line);border-bottom-width:2px;border-radius:4px;padding:0 5px;line-height:1.5;}

.card{background:var(--surface);border:1px solid var(--line);border-radius:11px;margin-bottom:8px;overflow:hidden;
  transition:border-color .15s,background .15s,box-shadow .15s;scroll-margin-top:180px;}
.card.done{background:var(--green-bg);border-color:var(--green-deep);}
.card.parallel{background:var(--blue-bg);border-color:var(--blue-deep);}
.card.postponed{background:var(--amber-bg);border-color:var(--amber-deep);}
.card.current{border-color:var(--green);box-shadow:0 0 0 1px var(--green),0 0 18px rgba(63,185,80,.18);}
.card.sub{margin-left:24px;}

.rowhead{display:flex;align-items:center;padding:12px 14px;gap:12px;cursor:pointer;border-left:2px solid transparent;transition:background .12s;}
.card.sub .rowhead{border-left-color:#2e3947;}
.rowhead:hover{background:rgba(255,255,255,.028);}
.rowhead:hover .caret{color:var(--text);border-color:#3a4552;}

.chk{width:22px;height:22px;border-radius:6px;border:2px solid #4a5563;background:transparent;cursor:pointer;flex-shrink:0;
  display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:700;transition:border-color .12s,background .12s;}
.chk:hover{border-color:var(--green);}
.chk.on{background:var(--green-deep);border-color:var(--green-deep);}

.steplabel{font-family:var(--mono);background:var(--raised);border:1px solid var(--line);border-radius:6px;padding:2px 7px;
  font-size:12px;font-weight:600;color:#aeb9c5;flex-shrink:0;min-width:42px;text-align:center;}
.card.sub .steplabel{background:transparent;color:var(--text-faint);border-color:var(--line-soft);}

.iconbtn{width:25px;height:25px;border-radius:6px;border:1px solid var(--line);background:transparent;cursor:pointer;font-size:12px;
  color:#4a5563;display:flex;align-items:center;justify-content:center;transition:border-color .12s,color .12s,background .12s;}
.iconbtn:hover{border-color:#3a4552;color:var(--text-dim);}
.iconbtn.blue{background:#1f3250;border-color:var(--blue-deep);color:var(--blue);}
.iconbtn.amber{background:var(--amber-bg);border-color:var(--amber-deep);color:var(--amber);}
.caret{transition:transform .18s,color .12s,border-color .12s;}
.caret.open{transform:rotate(180deg);}

.details{border-top:1px solid var(--line-soft);animation:reveal .16s ease;}
@keyframes reveal{from{opacity:0;transform:translateY(-3px);}to{opacity:1;transform:none;}}

.chip{border-radius:8px;padding:4px 10px;display:inline-flex;align-items:center;gap:6px;background:var(--raised);border:1px solid var(--line);}
.chip.red{background:var(--red-bg);border-color:var(--red-deep);}
.dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;}

.gp{font-family:var(--mono);font-size:11.5px;font-weight:600;flex-shrink:0;padding:2px 8px;border-radius:12px;}
.gp.plus{color:var(--green);background:var(--green-bg);border:1px solid var(--green-deep);}
.gp.minus{color:var(--red);background:var(--red-bg);border:1px solid var(--red-deep);}
.behindchip{font-family:var(--mono);font-size:11px;font-weight:700;flex-shrink:0;color:var(--red);background:var(--red-bg);
  border:1px solid var(--red-deep);padding:2px 8px;border-radius:12px;cursor:help;}

.divider{display:flex;align-items:center;gap:12px;margin:22px 0 12px;}
.divider:first-child{margin-top:4px;}
.divider .rail{flex:1;height:1px;background:linear-gradient(90deg,var(--line),transparent);}
.divider .name{font-size:13.5px;font-weight:700;color:var(--text);white-space:nowrap;}
.divider .count{font-family:var(--mono);font-size:11.5px;color:var(--text-dim);white-space:nowrap;}

.panel{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:14px 18px;margin-bottom:12px;animation:reveal .16s ease;}
.field{background:var(--inset);border:1px solid var(--line);border-radius:8px;color:var(--text);font-size:14px;padding:9px 12px;outline:none;font-family:inherit;transition:border-color .15s;}
.field:focus{border-color:var(--blue-deep);}
textarea.field{width:100%;resize:vertical;}
.notes{min-height:46px;font-size:14px;}
.lvl{display:flex;align-items:center;gap:5px;background:var(--inset);border:1px solid var(--line);border-radius:7px;padding:3px 7px;transition:border-color .15s;}
.lvl:focus-within{border-color:var(--blue-deep);}
.lvl input{width:100%;background:transparent;border:none;color:var(--text);font-size:14px;font-weight:700;outline:none;text-align:right;min-width:0;font-family:var(--mono);}
.lvl .abbr{font-size:10.5px;font-weight:700;color:var(--text-dim);width:26px;font-family:var(--mono);}

.seclabel{font-size:10.5px;letter-spacing:1.5px;color:var(--text-dim);text-transform:uppercase;font-weight:600;}
.seclabel.red{color:var(--red);}

input[type=number]::-webkit-inner-spin-button{opacity:.35;}
::selection{background:rgba(31,111,235,.35);}
*{scrollbar-width:thin;scrollbar-color:#2a3340 var(--bg);}
::-webkit-scrollbar{width:10px;height:10px;}
::-webkit-scrollbar-thumb{background:#2a3340;border-radius:5px;border:2px solid var(--bg);}
::-webkit-scrollbar-thumb:hover{background:#3a4552;}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms !important;transition-duration:.01ms !important;}}
@media (max-width:640px){.wrap{padding:0 14px;}.card.sub{margin-left:12px;}}
`;

/* ---------- helpers ---------- */
function formatXP(n){ if(n==null) return ''; if(n>=1e6) return (n/1e6).toFixed(1)+'M'; if(n>=1e3) return (n/1e3).toFixed(1)+'k'; return ''+n; }
function formatGP(n){ if(n==null) return ''; const a=Math.abs(n), s=n<0?'−':'+'; if(a>=1e6) return s+(a/1e6).toFixed(1)+'M'; if(a>=1e3) return s+(a/1e3).toFixed(0)+'k'; return s+a; }

const STORAGE_KEY = "bruhsailer_tracker_v4";
function loadState(){
  try{ const raw=window.localStorage&&window.localStorage.getItem(STORAGE_KEY);
    if(raw){ const p=JSON.parse(raw); return {done:p.done||{},postponed:p.postponed||{},parallel:p.parallel||{},postponedOrder:p.postponedOrder||[],levels:p.levels||{},notes:p.notes||{},rsn:p.rsn||""}; }
  }catch(e){}
  return {done:{},postponed:{},parallel:{},postponedOrder:[],levels:{},notes:{},rsn:""};
}
function saveState(s){ try{ window.localStorage&&window.localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); }catch(e){} }

const HISCORE_ORDER = ['OVERALL','ATK','DEF','STR','HP','RNG','PRY','MAG','COK','WC','FLE','FSH','FM','CRF','SMI','MNG','HRB','AGI','THI','SLY','FRM','RC','HUN','CON','SAI'];

function Ring({ pct, size = 16, stroke = 2.5, color = "var(--green)" }){
  const r=(size-stroke)/2, c=2*Math.PI*r, off=c-(pct/100)*c;
  return (
    <svg width={size} height={size} style={{transform:"rotate(-90deg)", flexShrink:0}} aria-hidden="true">
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--line)" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round" style={{transition:"stroke-dashoffset 0.4s ease"}} />
    </svg>
  );
}

function ChapterDivider({ chapter, done, total }){
  return (
    <div className="divider" role="separator">
      <Ring pct={total?Math.round(done/total*100):0} size={18} />
      <span className="name">{chapter}</span>
      <span className="count">{done}/{total}</span>
      <span className="rail" />
    </div>
  );
}

/* ---------- task card ---------- */
function TaskCard({ task, isDone, isPostponed, isParallel, isExpanded, isNext, draggable, levels, hasLevels, note,
                    onToggle, onExpand, onNote, onDragStart, onDragOver, onDrop, nextUpRef }){
  const xpEntries=Object.entries(task.xp_gains||{}).filter(([sk,xp])=>SKILL_FULL[sk]&&xp>0);
  const behind=Object.entries(task.expected||{})
    .filter(([sk,lvl])=>SKILL_FULL[sk]&&(levels[sk]||1)<lvl)
    .sort((a,b)=>(b[1]-(levels[b[0]]||1))-(a[1]-(levels[a[0]]||1)));
  const cls=["card", task.isSub&&"sub", isDone&&"done", !isDone&&isParallel&&"parallel", !isDone&&!isParallel&&isPostponed&&"postponed", isNext&&"current"].filter(Boolean).join(" ");
  const behindTip=behind.map(([sk,l])=>`${SKILL_FULL[sk]} ${levels[sk]||1}→${l}`).join(", ");

  return (
    <div ref={isNext?nextUpRef:null} className={cls} draggable={draggable}
      onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop}>
      <div className="rowhead" style={draggable?{cursor:"grab"}:null} onClick={onExpand}>
        {draggable && <span style={{color:"var(--text-faint)", fontSize:15, flexShrink:0}} aria-hidden="true">⠿</span>}
        <button className={"chk"+(isDone?" on":"")} aria-label={isDone?"Mark step not done":"Mark step done"}
          onClick={e=>{ e.stopPropagation(); onToggle('done'); }}>{isDone?"✓":""}</button>
        <span className="steplabel">{task.label}</span>
        <span style={{flex:1, fontSize:15.5, fontWeight:500, lineHeight:1.4, color:isDone?"var(--text-faint)":"var(--text)", textDecoration:isDone?"line-through":"none"}}>
          {isNext && <span style={{display:"inline-block", fontSize:10, fontWeight:800, letterSpacing:.5, color:"var(--bg)", background:"var(--green)", borderRadius:4, padding:"1px 6px", marginRight:8, verticalAlign:"middle"}}>IN PROGRESS</span>}
          {task.activity}
          {note && <span title="Has a note" style={{marginLeft:6, fontSize:12}}>📝</span>}
        </span>
        {hasLevels && !isDone && behind.length>0 && <span className="behindchip" title={"Behind: "+behindTip}>▲{behind.length}</span>}
        {task.gp_change!=null && <span className={"gp "+(task.gp_change>=0?"plus":"minus")} title="GP change this step">{formatGP(task.gp_change)}</span>}
        <div style={{display:"flex", gap:4, flexShrink:0}}>
          <button className={"iconbtn"+(isParallel?" blue":"")} title="Doing in parallel" aria-pressed={isParallel}
            onClick={e=>{ e.stopPropagation(); onToggle('parallel'); }}>⚡</button>
          <button className={"iconbtn"+(isPostponed?" amber":"")} title="Postpone" aria-pressed={isPostponed}
            onClick={e=>{ e.stopPropagation(); onToggle('postponed'); }}>⏳</button>
          <span className={"iconbtn caret"+(isExpanded?" open":"")} aria-hidden="true">▾</span>
        </div>
      </div>

      {isExpanded && (
        <div className="details" style={{padding:"0 14px 14px"}}>
          {task.guide && <div style={{marginTop:12, fontSize:14.5, lineHeight:1.65, color:"#c9d3dd", whiteSpace:"pre-wrap", maxWidth:820}}>{task.guide}</div>}

          {xpEntries.length>0 && (
            <div style={{marginTop:12}}>
              <div className="seclabel" style={{marginBottom:7}}>XP gains</div>
              <div style={{display:"flex", gap:6, flexWrap:"wrap"}}>
                {xpEntries.map(([sk,xp])=>(
                  <span key={sk} className="chip">
                    <span className="dot" style={{background:SKILL_COLORS[sk]}} />
                    <span style={{fontSize:12.5, fontWeight:700}}>{SKILL_FULL[sk]}</span>
                    <span className="mono" style={{fontSize:12, color:"var(--text-dim)"}}>{formatXP(xp)} xp</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {behind.length>0 && (
            <div style={{marginTop:12}}>
              <div className="seclabel red" style={{marginBottom:7}}>Guide expects higher levels than you have</div>
              <div style={{display:"flex", gap:6, flexWrap:"wrap"}}>
                {behind.map(([sk,lvl])=>(
                  <span key={sk} className="chip red">
                    <span className="dot" style={{background:SKILL_COLORS[sk], width:7, height:7}} />
                    <span style={{fontSize:12.5, fontWeight:600, color:"#f0c0c0"}}>{SKILL_FULL[sk]}</span>
                    <span className="mono" style={{fontSize:12.5, color:"var(--red)", fontWeight:700}}>{lvl}</span>
                    <span className="mono" style={{fontSize:11, color:"var(--text-dim)"}}>you: {levels[sk]||"?"}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {task.gp_total!=null && (
            <div style={{marginTop:12}}>
              <div className="seclabel" style={{marginBottom:4}}>GP after step</div>
              <span className="mono" style={{fontSize:14, fontWeight:700, color:"#f0883e"}}>{task.gp_total>=1e6?(task.gp_total/1e6).toFixed(2)+"M":(task.gp_total/1e3).toFixed(0)+"k"} gp</span>
            </div>
          )}

          <div style={{marginTop:12}}>
            <div className="seclabel" style={{marginBottom:6}}>My notes</div>
            <textarea className="field notes" value={note} onChange={e=>onNote(e.target.value)} onClick={e=>e.stopPropagation()}
              placeholder="e.g. stopped at 60 slayer, need 2 more diaries first…" />
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- app ---------- */
function App(){
  const [state,setState]=useState(loadState);
  const [filter,setFilter]=useState("all");
  const [expandedIds,setExpandedIds]=useState({});
  const [chapterFilter,setChapterFilter]=useState("all");
  const [showLevels,setShowLevels]=useState(false);
  const [showIO,setShowIO]=useState(false);
  const [ioText,setIoText]=useState("");
  const [rsnInput,setRsnInput]=useState(state.rsn||"");
  const [fetchStatus,setFetchStatus]=useState("");
  const [search,setSearch]=useState("");
  const dragId=useRef(null);
  const nextUpRef=useRef(null);
  const searchRef=useRef(null);

  const chapters=[...new Set(RAW_TASKS.map(t=>t.chapter))];
  const allTasks=RAW_TASKS.filter(t=>t.activity);

  useEffect(()=>{ saveState(state); },[state]);

  useEffect(()=>{
    const onKey=(e)=>{
      const el=document.activeElement, typing=el&&(el.tagName==="INPUT"||el.tagName==="TEXTAREA");
      if(e.key==="/" && !typing){ e.preventDefault(); if(searchRef.current) searchRef.current.focus(); }
      else if(e.key==="Escape" && el===searchRef.current){ setSearch(""); searchRef.current.blur(); }
    };
    document.addEventListener("keydown",onKey);
    return ()=>document.removeEventListener("keydown",onKey);
  },[]);

  const toggle=useCallback((id,key)=>{
    setState(prev=>{
      const u={...prev,done:{...prev.done},postponed:{...prev.postponed},parallel:{...prev.parallel},postponedOrder:[...prev.postponedOrder]};
      const on=!u[key][id];
      if(!on){ delete u[key][id]; if(key==='postponed') u.postponedOrder=u.postponedOrder.filter(x=>x!==id); }
      else{ u[key][id]=true;
        if(key==='done'){ delete u.postponed[id]; delete u.parallel[id]; u.postponedOrder=u.postponedOrder.filter(x=>x!==id); }
        if(key==='postponed'){ delete u.done[id]; if(!u.postponedOrder.includes(id)) u.postponedOrder.push(id); }
        if(key==='parallel'){ delete u.done[id]; }
      }
      return u;
    });
  },[]);

  const toggleExpand=useCallback((id)=>{ setExpandedIds(prev=>{ const u={...prev}; if(u[id]) delete u[id]; else u[id]=true; return u; }); },[]);
  const setLevel=useCallback((sk,val)=>{ setState(prev=>{ const levels={...prev.levels}; const n=parseInt(val,10); if(!val||isNaN(n)) delete levels[sk]; else levels[sk]=Math.max(1,Math.min(99,n)); return {...prev,levels}; }); },[]);
  const setNote=useCallback((id,val)=>{ setState(prev=>{ const notes={...prev.notes}; if(!val) delete notes[id]; else notes[id]=val; return {...prev,notes}; }); },[]);

  const handleDrop=useCallback((targetId)=>{
    setState(prev=>{ const order=[...prev.postponedOrder]; const from=order.indexOf(dragId.current), to=order.indexOf(targetId);
      if(from===-1||to===-1||from===to) return prev; order.splice(from,1); order.splice(to,0,dragId.current); return {...prev,postponedOrder:order}; });
    dragId.current=null;
  },[]);

  const fetchHiscores=useCallback(async (override)=>{
    const name=(typeof override==="string"&&override?override:rsnInput).trim();
    if(!name){ setFetchStatus("Enter your RuneScape name first."); return; }
    setRsnInput(name);
    setFetchStatus("Looking up "+name+"…");
    const target="https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player="+encodeURIComponent(name);
    const proxies=[
      u=>"https://api.codetabs.com/v1/proxy/?quest="+encodeURIComponent(u),
      u=>"https://api.allorigins.win/raw?url="+encodeURIComponent(u),
      u=>"https://corsproxy.io/?url="+encodeURIComponent(u),
      u=>"https://thingproxy.freeboard.io/fetch/"+u,
    ];
    for(const make of proxies){
      try{
        const res=await fetch(make(target));
        if(!res.ok) continue;
        const text=await res.text();
        if(!text||text.toLowerCase().includes("<html")||text.toLowerCase().includes("not found")) continue;
        const rows=text.trim().split("\n");
        if(rows.length<20) continue;
        const levels={};
        HISCORE_ORDER.forEach((key,i)=>{
          if(key==='OVERALL') return;
          const line=rows[i]; if(!line) return;
          const lvl=parseInt(line.split(",")[1],10);
          if(!isNaN(lvl)&&lvl>=1) levels[key]=Math.min(99,lvl);
        });
        if(Object.keys(levels).length>=10){
          setState(prev=>({...prev,levels:{...prev.levels,...levels},rsn:name}));
          setFetchStatus("✓ Loaded levels for "+name+(levels.SAI?"":" (Sailing isn't on the hiscores — enter it manually)"));
          return;
        }
      }catch(e){}
    }
    setFetchStatus("Couldn't reach the hiscores. Check the spelling, try again, or enter levels manually. (This works more reliably when the page is hosted online rather than opened as a local file.)");
  },[rsnInput]);

  const downloadTxt=useCallback(()=>{
    const blob=new Blob([JSON.stringify(state,null,2)],{type:"text/plain"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url; a.download="bruhsailer-progress.txt";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },[state]);

  const applyImport=useCallback((p)=>{
    if(!window.confirm("This will replace your current progress, levels and notes with the imported data. Continue?")) return false;
    setState({done:p.done||{},postponed:p.postponed||{},parallel:p.parallel||{},postponedOrder:p.postponedOrder||[],levels:p.levels||{},notes:p.notes||{},rsn:p.rsn||""});
    return true;
  },[]);

  const importFile=useCallback((e)=>{
    const file=e.target.files&&e.target.files[0];
    if(!file) return;
    const reader=new FileReader();
    reader.onload=()=>{ try{ if(applyImport(JSON.parse(reader.result))) setShowIO(false); }catch(err){ alert("That .txt file isn't valid progress data."); } };
    reader.readAsText(file);
    e.target.value="";
  },[applyImport]);

  const doneCount=Object.keys(state.done).length, total=allTasks.length, pct=Math.round(doneCount/total*100);
  const nextUp=allTasks.find(t=>!state.done[t.id]&&!state.postponed[t.id]);
  const nextUpId=nextUp?nextUp.id:null;
  const hasLevels=Object.keys(state.levels).length>0;

  const chapterPct={};
  chapters.forEach(ch=>{ const ct=allTasks.filter(t=>t.chapter===ch), cd=ct.filter(t=>state.done[t.id]).length; chapterPct[ch]=ct.length?Math.round(cd/ct.length*100):0; });

  // status counts respect the active chapter filter
  const scoped=chapterFilter==="all"?allTasks:allTasks.filter(t=>t.chapter===chapterFilter);
  const counts={
    done:scoped.filter(t=>state.done[t.id]).length,
    todo:scoped.filter(t=>!state.done[t.id]&&!state.postponed[t.id]).length,
    postponed:scoped.filter(t=>state.postponed[t.id]).length,
    parallel:scoped.filter(t=>state.parallel[t.id]).length,
  };

  const q=search.trim().toLowerCase();
  let filteredTasks=allTasks.filter(t=>{
    if(chapterFilter!=="all"&&t.chapter!==chapterFilter) return false;
    const d=!!state.done[t.id],p=!!state.postponed[t.id],par=!!state.parallel[t.id];
    if(filter==="done"&&!d) return false; if(filter==="todo"&&(d||p)) return false; if(filter==="postponed"&&!p) return false; if(filter==="parallel"&&!par) return false;
    if(q && !((t.label+" "+t.activity+" "+(t.guide||"")).toLowerCase().includes(q))) return false;
    return true;
  });
  if(filter==="postponed"){ filteredTasks=[...filteredTasks].sort((a,b)=>{ const ia=state.postponedOrder.indexOf(a.id),ib=state.postponedOrder.indexOf(b.id); return (ia===-1?9999:ia)-(ib===-1?9999:ib); }); }

  const visibleIds=filteredTasks.map(t=>t.id);
  const allExpanded=visibleIds.length>0&&visibleIds.every(id=>expandedIds[id]);
  const toggleAll=()=>{ if(allExpanded) setExpandedIds({}); else { const m={}; visibleIds.forEach(id=>m[id]=true); setExpandedIds(m); } };

  const doExport=()=>{ setIoText(JSON.stringify(state)); setShowIO(s=>!s); };
  const loadFromText=()=>{ try{ if(applyImport(JSON.parse(ioText))) setShowIO(false); }catch(e){ alert("That doesn't look like valid save data."); } };
  const jumpToNext=()=>{ if(nextUpRef.current) nextUpRef.current.scrollIntoView({behavior:"smooth",block:"center"}); };

  const pillStyle=(color)=>({"--pc":color});
  const showDividers=filter!=="postponed";
  let lastChapter=null;

  return (
    <div className="app">
      <style>{CSS}</style>

      <header style={{position:"sticky", top:0, zIndex:100, background:"rgba(11,14,19,.92)", backdropFilter:"blur(8px)", WebkitBackdropFilter:"blur(8px)", borderBottom:"1px solid var(--line)"}}>
        <div className="wrap" style={{paddingTop:16}}>
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:14, flexWrap:"wrap"}}>
            <div style={{display:"flex", alignItems:"center", gap:11}}>
              <span style={{fontSize:24, lineHeight:1}} aria-hidden="true">📜</span>
              <span style={{fontSize:23, fontWeight:800, letterSpacing:-0.5, color:"#f0f6fc"}}>Bruhsailer Ironman Guide</span>
              <span className="mono" style={{fontSize:11, color:"var(--text-dim)", fontWeight:700, letterSpacing:.3, background:"var(--raised)", border:"1px solid var(--line)", borderRadius:6, padding:"3px 9px"}}>CH 3</span>
            </div>
            <div style={{display:"flex", alignItems:"center", gap:9}}>
              <Ring pct={pct} size={22} />
              <span style={{fontSize:15, fontWeight:700}}><span className="mono">{doneCount}</span><span style={{color:"var(--text-dim)", fontWeight:400}}> / <span className="mono">{total}</span> done</span></span>
            </div>
          </div>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"10px 14px", flexWrap:"wrap", marginTop:13}}>
            <div className="searchbox">
              <span style={{fontSize:13, opacity:.6}} aria-hidden="true">🔍</span>
              <input ref={searchRef} value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search steps…" aria-label="Search steps" />
              {q
                ? <>
                    <span className="mono" style={{fontSize:11, color:"var(--text-dim)", whiteSpace:"nowrap"}}>{filteredTasks.length} result{filteredTasks.length===1?"":"s"}</span>
                    <button className="clear" onClick={()=>setSearch("")} aria-label="Clear search">✕</button>
                  </>
                : <span className="kbd" aria-hidden="true">/</span>}
            </div>
            <div style={{display:"flex", alignItems:"center", gap:8, flexWrap:"wrap"}}>
              <button className={"pill"+(showLevels?" on":"")} style={pillStyle("var(--blue)")} onClick={()=>setShowLevels(s=>!s)}>⚔️ My Levels</button>
              {state.rsn && <button className="pill" style={pillStyle("var(--blue)")} onClick={()=>{ setShowLevels(true); fetchHiscores(state.rsn); }}>↻ Refresh levels</button>}
              <button className={"pill"+(showIO?" on":"")} style={pillStyle("var(--blue)")} onClick={doExport}>💾 Save</button>
              <button className="pill" onClick={toggleAll}>{allExpanded?"⊟ Collapse all":"⊞ Expand all"}</button>
              {nextUpId!=null && <button className="pill on" style={pillStyle("var(--green)")} onClick={jumpToNext}>▶ Current step</button>}
            </div>
          </div>

          <div style={{display:"flex", justifyContent:"space-between", gap:"10px 18px", flexWrap:"wrap", marginTop:11, paddingBottom:13}}>
            <div style={{display:"flex", gap:6, flexWrap:"wrap"}}>
              <button className={"pill"+(chapterFilter==="all"?" on":"")} style={pillStyle("var(--blue)")} onClick={()=>setChapterFilter("all")}><Ring pct={pct} /> All Chapters</button>
              {chapters.map(ch=>(
                <button key={ch} className={"pill"+(chapterFilter===ch?" on":"")} style={pillStyle("var(--blue)")} onClick={()=>setChapterFilter(ch)}><Ring pct={chapterPct[ch]} /> {ch}</button>
              ))}
            </div>
            <div style={{display:"flex", gap:6, flexWrap:"wrap"}}>
              {[{key:"all",label:"All",color:"var(--text-dim)"},{key:"todo",label:"To Do",color:"#e6edf3"},{key:"done",label:"Done",color:"var(--green)"},{key:"postponed",label:"Postponed",color:"var(--amber)"},{key:"parallel",label:"In parallel",color:"var(--blue)"}].map(f=>(
                <button key={f.key} className={"pill"+(filter===f.key?" on":"")} style={pillStyle(f.color)} onClick={()=>setFilter(f.key)}>
                  {f.label}
                  {f.key!=="all" && <span className="mono" style={{opacity:.75, fontSize:11}}>{counts[f.key]}</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div style={{height:3, background:"var(--line-soft)"}}>
          <div style={{width:`${pct}%`, height:"100%", background:"linear-gradient(90deg,var(--green-deep),var(--green))", transition:"width .4s ease"}} />
        </div>
      </header>

      <div className="wrap" style={{paddingTop:16}}>

        <div className="panel" style={{animation:"none"}}>
          <div style={{display:"flex", alignItems:"baseline", justifyContent:"space-between", gap:12, flexWrap:"wrap", marginBottom:9}}>
            <div className="seclabel" style={{fontWeight:700, fontSize:12}}>How to use</div>
            <div className="mono" style={{fontSize:11.5, color:"var(--text-faint)"}}>{APP_VERSION} · {GUIDE_UPDATED}</div>
          </div>
          <div style={{fontSize:14, color:"#c9d3dd", lineHeight:1.65}}>
            Click any step to open its guide notes, XP, and the levels the guide expects you to have. Open as many steps as you like, jot notes on each, mark steps <span style={{color:"var(--green)", fontWeight:600}}>✓ done</span>, set them <span style={{color:"var(--blue)", fontWeight:600}}>⚡ in parallel</span>, or <span style={{color:"var(--amber)", fontWeight:600}}>⏳ postpone</span> them for later. Your current step has a <span style={{color:"var(--green)", fontWeight:600}}>green glow</span>. Press <span className="kbd">/</span> to search.
          </div>
          <div style={{fontSize:14, color:"#c9d3dd", lineHeight:1.65, marginTop:8}}>
            <span style={{color:"var(--blue)", fontWeight:700}}>Tip:</span> open <span style={{fontWeight:700}}>⚔️ My Levels</span> and type in your RuneScape name to auto-fill your stats — steps you're under-leveled for get a red <span className="behindchip" style={{padding:"1px 6px"}}>▲3</span> marker, and expanding them shows exactly which skills to catch up.
          </div>
        </div>

        {showLevels && (
          <div className="panel">
            <div style={{fontSize:13.5, color:"#c9d3dd", marginBottom:8, fontWeight:600}}>Auto-fill from the OSRS hiscores</div>
            <div style={{display:"flex", gap:8, marginBottom:6, flexWrap:"wrap"}}>
              <input className="field" style={{flex:"1 1 200px", minWidth:0}} value={rsnInput} onChange={e=>setRsnInput(e.target.value)}
                onKeyDown={e=>{ if(e.key==='Enter') fetchHiscores(); }} placeholder="Your RuneScape name" aria-label="RuneScape name" />
              <button className="pill on" style={{...pillStyle("var(--blue)"), padding:"8px 16px"}} onClick={()=>fetchHiscores()}>Fetch levels</button>
            </div>
            {fetchStatus && <div style={{fontSize:12.5, color:fetchStatus[0]==="✓"?"var(--green)":"var(--text-dim)", marginBottom:10, lineHeight:1.5}}>{fetchStatus}</div>}
            <div style={{fontSize:13, color:"var(--text-dim)", marginBottom:10}}>Or enter them manually. Expanded steps flag in <span style={{color:"var(--red)", fontWeight:700}}>red</span> every skill the guide expects you to be higher in than you currently are.</div>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(88px, 1fr))", gap:7}}>
              {SKILLS.map(sk=>(
                <label key={sk} className="lvl">
                  <span className="dot" style={{background:SKILL_COLORS[sk], width:7, height:7}} />
                  <span className="abbr">{sk}</span>
                  <input type="number" min={1} max={99} value={state.levels[sk]||""} placeholder="–" onChange={e=>setLevel(sk,e.target.value)} aria-label={SKILL_FULL[sk]+" level"} />
                </label>
              ))}
            </div>
          </div>
        )}

        {showIO && (
          <div className="panel">
            <div style={{fontSize:13.5, color:"#c9d3dd", marginBottom:10, fontWeight:600}}>Back up or restore your progress</div>
            <div style={{display:"flex", gap:8, flexWrap:"wrap", marginBottom:12}}>
              <button className="pill" style={{padding:"7px 14px"}} onClick={downloadTxt}>⬇ Download .txt</button>
              <label className="pill" style={{padding:"7px 14px", cursor:"pointer"}}>
                ⬆ Import .txt
                <input type="file" accept=".txt,text/plain" onChange={importFile} style={{display:"none"}} />
              </label>
            </div>
            <div style={{fontSize:11.5, color:"var(--text-dim)", marginBottom:6}}>Or copy/paste the text manually:</div>
            <textarea className="field" style={{height:64, fontFamily:"var(--mono)", fontSize:11, color:"var(--text-dim)"}} value={ioText} onChange={e=>setIoText(e.target.value)} spellCheck={false} aria-label="Progress data" />
            <div style={{display:"flex", gap:8, marginTop:8}}>
              <button className="pill" onClick={()=>{ navigator.clipboard&&navigator.clipboard.writeText(ioText); }}>Copy</button>
              <button className="pill" onClick={loadFromText}>Load from text</button>
              <button className="pill" onClick={()=>setShowIO(false)}>Close</button>
            </div>
          </div>
        )}

        {filter==="postponed" && filteredTasks.length>1 && (
          <div style={{fontSize:11.5, color:"var(--text-dim)", marginBottom:10, textAlign:"center"}}>↕ Drag steps to reorder how you'll come back to them</div>
        )}
        {filteredTasks.length===0 && (
          <div style={{textAlign:"center", padding:"60px 0", color:"var(--text-dim)"}}>
            <div style={{fontSize:40, marginBottom:12}} aria-hidden="true">{q?"🔍":"⚔️"}</div>
            <div style={{fontSize:16}}>{q?`No steps match “${search.trim()}”.`:"No tasks match this filter."}</div>
            {q && <button className="pill" style={{marginTop:14}} onClick={()=>setSearch("")}>Clear search</button>}
          </div>
        )}

        {filteredTasks.map(task=>{
          const divider = showDividers && task.chapter!==lastChapter
            ? <ChapterDivider key={"div-"+task.chapter} chapter={task.chapter}
                done={allTasks.filter(t=>t.chapter===task.chapter&&state.done[t.id]).length}
                total={allTasks.filter(t=>t.chapter===task.chapter).length} />
            : null;
          lastChapter=task.chapter;
          return (
            <React.Fragment key={task.id}>
              {divider}
              <TaskCard task={task}
                isDone={!!state.done[task.id]} isPostponed={!!state.postponed[task.id]} isParallel={!!state.parallel[task.id]}
                isExpanded={!!expandedIds[task.id]} isNext={task.id===nextUpId} draggable={filter==="postponed"}
                levels={state.levels} hasLevels={hasLevels} note={state.notes[task.id]||""}
                onToggle={key=>toggle(task.id,key)} onExpand={()=>toggleExpand(task.id)} onNote={v=>setNote(task.id,v)}
                onDragStart={()=>{ if(filter==="postponed") dragId.current=task.id; }}
                onDragOver={e=>{ if(filter==="postponed") e.preventDefault(); }}
                onDrop={()=>{ if(filter==="postponed") handleDrop(task.id); }}
                nextUpRef={nextUpRef} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
export default App;
