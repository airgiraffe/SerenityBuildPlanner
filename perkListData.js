/*
*
* Base Requiem 4.0.2 (and probably earlier)
*
*/
const requiem402PerkData = {
    name: "Requiem 4.0 and Up",
    id: 0,
    skillNames: [
        "Alchemy",      // 0
        "Alteration",   // 1
        "Block",        // 2
        "Conjuration",  // 3
        "Destruction",  // 4
        "Enchanting",   // 5
        "Evasion",      // 6
        "Heavy Armor",  // 7
        "Illusion",     // 8
        "Lockpicking",  // 9
        "Marksman",     // 10
        "One-Handed",   // 11
        "Pickpocket",   // 12
        "Restoration",  // 13
        "Smithing",     // 14
        "Sneak",        // 15
        "Speech",       // 16
        "Two-Handed"    // 17
    ],
    perks: [
        /*
          {name : "", skill : 0, skillReq : 0,
            xPos : 0, yPos : 0, preReqs : [], nextPerk: -1,
            description : ""},
        */
        //0
        {
            name: "Alchemical Lore", skill: 0, skillReq: 0,
            xPos: 19.3, yPos: 86.25, preReqs: [], nextPerk: 1,
            description: "You've acquired basic alchemical insights and understand how to work with a laboratory. Thus, you can now craft your own potions and poisons."
        },
        //1
        {
            name: "Alchemical Lore", skill: 0, skillReq: 0,
            xPos: 19.3, yPos: 86.25, preReqs: [0], nextPerk: -1,
            description: "Through obscure knowledge, you now can enhance your mixtures and craft alchemistic powders at a smelter. Besides, your sensory organs have become very keen. Thus, you determine all the alchemical properties of consumed ingredients."
        },
        //2
        {
            name: "Improved Elixirs", skill: 0, skillReq: 25,
            xPos: 75.7, yPos: 80.75, preReqs: [0], nextPerk: -1,
            description: "Having refinined the brewing process, you are now able to improve the effects of all your elixirs."
        },
        //3
        {
            name: "Night Vision", skill: 0, skillReq: 25,
            xPos: 87, yPos: 62.5, preReqs: [2], nextPerk: -1,
            description: "Having altered your body with extracts from a sabrecat eye, you can now make your eyes see in the dark at will."
        },
        //4
        {
            name: "Concentrated Poisons", skill: 0, skillReq: 25,
            xPos: 30.7, yPos: 61.5, preReqs: [2, 0], nextPerk: -1,
            description: "Your experience in the obscure alchemical arts allows you to concentrate your poisons. Thus, you can make most of them last longer before they need to be reapplied."
        },
        //5
        {
            name: "Regeneration", skill: 0, skillReq: 50,
            xPos: 75.7, yPos: 40.5, preReqs: [2], nextPerk: -1,
            description: "Having altered your body with extracts from troll fat, slaughterfish eggs and spriggan sap, you're now able to regenerate your body, and do so even more rapidly when you are immersed in water."
        },
        //6
        {
            name: "Catalysis", skill: 0, skillReq: 50,
            xPos: 181 / 3, yPos: 194 / 4, preReqs: [2], nextPerk: 7,
            description: "You've started experimenting with a catalyst that increases the yield of the brewing process."
        },
        //7
        {
            name: "Catalysis", skill: 0, skillReq: 100,
            xPos: 181 / 3, yPos: 194 / 4, preReqs: [6], nextPerk: -1,
            description: "You've perfected the catalyst. Thereby, you can craft double the amount of mixtures with the same amount of ingredients."
        },
        //8
        {
            name: "Improved Poisons", skill: 0, skillReq: 50,
            xPos: 104 / 3, yPos: 156 / 4, preReqs: [4], nextPerk: -1,
            description: "By adding small amounts of truly horrifying ingredients, you are able to make your poisons more potent."
        },
        //9
        {
            name: "Immunization", skill: 0, skillReq: 75,
            xPos: 172 / 3, yPos: 98 / 4, preReqs: [6, 8], nextPerk: -1,
            description: "You've discovered a way to make your body more resilient to all kinds of diseases and poisons."
        },
        //10
        {
            name: "Fortified Muscles", skill: 0, skillReq: 75,
            xPos: 148 / 3, yPos: 225 / 4, preReqs: [9], nextPerk: -1,
            description: "Having altered your body with extracts from troll fat and a mammoth heart, you've become more resilient to harm."
        },
        //11
        {
            name: "Alchemical Intellect", skill: 0, skillReq: 100,
            xPos: 219 / 3, yPos: 45 / 4, preReqs: [9], nextPerk: -1,
            description: "Having altered your body with extracts from a Dremora's Heart and Ectoplasm, your mind has transcended mortal limits, expanding your magicka and improving your spell casting."
        },
        //12
        {
            name: "Purification Process", skill: 0, skillReq: 100,
            xPos: 140 / 3, yPos: 20 / 4, preReqs: [9], nextPerk: -1,
            description: "You've found a method to eliminate disadvantages from your mixtures and to make all of them even more potent."
        },
        //13
        {
            name: "Novice Alteration", skill: 1, skillReq: 0,
            xPos: 144 / 3, yPos: 336 / 4, preReqs: [], nextPerk: -1,
            description: "You've taught yourself a few Novice level spells and learned how to cast them with decreased effort while your newfound knowledge also allows you to augment all Alteration spells."
        },
        //14
        {
            name: "Apprentice Alteration", skill: 1, skillReq: 25,
            xPos: 160 / 3, yPos: 290 / 4, preReqs: [13], nextPerk: -1,
            description: "By pursuing your apprenticeship in Alteration, you've gained knowledge of Apprentice level spells which you now augment while casting them with less effort."
        },
        //15
        {
            name: "Adept Alteration", skill: 1, skillReq: 50,
            xPos: 162 / 3, yPos: 170 / 4, preReqs: [14], nextPerk: -1,
            description: "By advancing further into the school of Alteration, you've gained some Adept level spells and learned how to augment and cast spells of this rank more easily."
        },
        //16
        {
            name: "Expert Alteration", skill: 1, skillReq: 75,
            xPos: 180 / 3, yPos: 111 / 4, preReqs: [15], nextPerk: -1,
            description: "You've unlocked almost every secret in the school of Alteration and you've acquired some Expert level spells. You can now cast spells of this level easier and augment them to an almost otherworldly extent."
        },
        //17
        {
            name: "Master Alteration", skill: 1, skillReq: 100,
            xPos: 185 / 3, yPos: 40 / 4, preReqs: [16], nextPerk: -1,
            description: "Your knowledge of Alteration has become all-encompassing. You taught yourself a Master level spell and you can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits."
        },
        //18
        {
            name: "Aeromancy", skill: 1, skillReq: 25,
            xPos: 50 / 3, yPos: 280 / 4, preReqs: [13], nextPerk: 19,
            description: "You are now able to intesify the force of all your wind spells"
        },
        //19
        {
            name: "Aeromancy", skill: 1, skillReq: 50,
            xPos: 50 / 3, yPos: 280 / 4, preReqs: [18], nextPerk: -1,
            description: "You are now able to greatly intesify the force of all your wind spells."
        },
        //20
        {
            name: "Aeromantic<br>Strength", skill: 1, skillReq: 75,
            xPos: 50 / 3, yPos: 200 / 4, preReqs: [18], nextPerk: -1,
            description: "Your wind spells are now able to throw all but the strongest of targets."
        },
        //21
        {
            name: "Aeromantic<br>Mastery", skill: 1, skillReq: 100,
            xPos: 40 / 3, yPos: 65 / 4, preReqs: [20], nextPerk: -1,
            description: "Your wind spells are now able to stagger or throw any target."
        },
        //22
        {
            name: "Empowered<br>Alterations", skill: 1, skillReq: 25,
            xPos: 100 / 3, yPos: 250 / 4, preReqs: [13], nextPerk: -1,
            description: "You learned how to empower Alteration spells. Thus, you now can overcharge their effects into even more powerful, longer lasting versions."
        },
        //23
        {
            name: "Improved<br>Mage Armor", skill: 1, skillReq: 25,
            xPos: 113 / 3, yPos: 200 / 4, preReqs: [14], nextPerk: -1,
            description: "You've mastered the art of casting armor spells. Their effect is maximized when you don't wear any distracting armor."
        },
        //24
        {
            name: "Magic<br>Resistance", skill: 1, skillReq: 25,
            xPos: 200 / 3, yPos: 200 / 4, preReqs: [14], nextPerk: 25,
            description: "You're able to block a part of a dangerous spell's effect."
        },
        //25
        {
            name: "Magic<br>Resistance", skill: 1, skillReq: 50,
            xPos: 200 / 3, yPos: 200 / 4, preReqs: [24], nextPerk: 26,
            description: "You are able to block more of a dangerous spell's effect."
        },
        //26
        {
            name: "Magic<br>Resistance", skill: 1, skillReq: 75,
            xPos: 200 / 3, yPos: 200 / 4, preReqs: [25], nextPerk: -1,
            description: "You are able to block even more of a dangerous spell's effect."
        },
        //27
        {
            name: "Stability", skill: 1, skillReq: 50,
            xPos: 130 / 3, yPos: 140 / 4, preReqs: [15], nextPerk: -1,
            description: "You've become exceptionally good at making your alteration spells more stable. Thus, they now last longer."
        },
        //28
        {
            name: "Metamagical<br>Thesis", skill: 1, skillReq: 75,
            xPos: 90 / 3, yPos: 100 / 4, preReqs: [27], nextPerk: -1,
            description: "Your knowledge of the very fabric of magic itself allows you to cast any spell of any school with decreased effort."
        },
        //29
        {
            name: "Metamagical<br>Empowerment", skill: 1, skillReq: 100,
            xPos: 90 / 3, yPos: 40 / 4, preReqs: [28], nextPerk: -1,
            description: "Having delved even deeper in metamagical lore, you can cast any spell more effectively and augment all other magical effects."
        },
        //30
        {
            name: "Spell Armor", skill: 1, skillReq: 75,
            xPos: 200 / 3, yPos: 140 / 4, preReqs: [16], nextPerk: -1,
            description: "You've expanded the versatility of your Mage Armor spells by enabling them to also decrease incoming elemental damage."
        },
        //31
        {
            name: "Magical<br>Absorbtion", skill: 1, skillReq: 100,
            xPos: 140 / 3, yPos: 60 / 4, preReqs: [16], nextPerk: -1,
            description: "You've mastered the art of absorbing Magicka from incoming spells, and are now able to fully absorb their power from time to time."
        },
        //32
        {
            name: "Hemomancer", skill: 1, skillReq: 25,
            xPos: 210 / 3, yPos: 260 / 4, preReqs: [13], nextPerk: 33,
            description: "You are now able to intesify the strength of your drain life spells."
        },
        //33
        {
            name: "Hemomancer", skill: 1, skillReq: 50,
            xPos: 210 / 3, yPos: 260 / 4, preReqs: [32], nextPerk: -1,
            description: "You are now able to greatly intesify the strength of your drain life spells."
        },
        //34
        {
            name: "Drain<br>Strength", skill: 1, skillReq: 75,
            xPos: 240 / 3, yPos: 165 / 4, preReqs: [32], nextPerk: 33,
            description: "Your drain life spells now sap the strength from your foes, draining stamina as well."
        },
        //35
        {
            name: "Drain<br>Willpower", skill: 1, skillReq: 100,
            xPos: 260 / 3, yPos: 50 / 4, preReqs: [34], nextPerk: 33,
            description: "Your drain life spells now sap the willpower from your foes, draining magicka as well."
        },
        //36
        {
            name: "Improved Blocking", skill: 2, skillReq: 0,
            xPos: 150 / 3, yPos: 323 / 4, preReqs: [], nextPerk: -1,
            description: "You strengthened your shield arm and trained to parry blows a little. Thus you can block somewhat better."
        },
        //37
        {
            name: "Experienced<br>Blocking", skill: 2, skillReq: 20,
            xPos: 100 / 3, yPos: 222 / 4, preReqs: [36], nextPerk: -1,
            description: "With weapon or shield you can block almost any blow with rock-solid confidence. Additionally, when blocking a hit you feel the adrenaline rushing through your veins, recovering a small amount of stamina."
        },
        //38
        {
            name: "Strong Grip", skill: 2, skillReq: 15,
            xPos: 30 / 3, yPos: 239 / 4, preReqs: [36], nextPerk: -1,
            description: "You have honed your defensive movements to perfection. Therefore, blocking will no longer slow you down, and your shield is more protective."
        },
        //39
        {
            name: "Elemental Protection", skill: 2, skillReq: 50,
            xPos: 55 / 3, yPos: 115 / 4, preReqs: [38], nextPerk: -1,
            description: "You've learned how to block damaging spells so that you can now<br> increase your resistance against them when blocking with a shield."
        },
        //40
        {
            name: "Defensive Stance", skill: 2, skillReq: 75,
            xPos: 103 / 3, yPos: 60 / 4, preReqs: [39], nextPerk: -1,
            description: "You have honed your defensive movements to perfection. Therefore, blocking incoming attacks will no longer slow you down."
        },
        //41
        {
            name: "Powerful Bashes", skill: 2, skillReq: 25,
            xPos: 250 / 3, yPos: 239 / 4, preReqs: [36], nextPerk: -1,
            description: "By gathering your strength for a short while, you can perform a much more powerful bash. Bashing an enemy like this with your shield or the pommel of your weapon will likely put him off balance."
        },
        //42
        {
            name: "Overpowering Bashes", skill: 2, skillReq: 50,
            xPos: 250 / 3, yPos: 175 / 4, preReqs: [41], nextPerk: -1,
            description: "When you put all of your power into your shield bashes, you will often overpower your foes. They will be staggered much more now and likely will even trip and fall."
        },
        //43
        {
            name: "Disarming Bash", skill: 2, skillReq: 75,
            xPos: 225 / 3, yPos: 75 / 4, preReqs: [42], nextPerk: -1,
            description: "Sometimes, when you put all your strength into your bashes your foes drop their weapon because of the pain."
        },
        //44
        {
            name: "Unstoppable Charge", skill: 2, skillReq: 100,
            xPos: 150 / 3, yPos: 30 / 4, preReqs: [43, 40], nextPerk: -1,
            description: "When bull rushing with your shield raised, you are nearly invulnerable to physical and elemental damage. In addition to likely being knocked down, enemies will also suffer serious wounds from the impact itself."
        },
        //45
        {
            name: "Shield Strike", skill: 2, skillReq: 25,
            xPos: 170 / 3, yPos: 222 / 4, preReqs: [36], nextPerk: 46,
            description: "You can use your shield more offensively, using it as a dealy weapon. Shield bash damage x 1.5, fortify block increases shield bash damage, -3 shield bash stamina cost."
        },
        //46
        {
            name: "Shield Strike", skill: 2, skillReq: 50,
            xPos: 170 / 3, yPos: 222 / 4, preReqs: [45], nextPerk: 47,
            description: "You can use your shield more offensively, using it as a dealy weapon. Shield bash damage x 1.75, fortify block increases shield bash damage, -6 shield bash stamina cost."
        },
        //47
        {
            name: "Shield Strike", skill: 2, skillReq: 75,
            xPos: 170 / 3, yPos: 222 / 4, preReqs: [45], nextPerk: -1,
            description: "You can use your shield more offensively, using it as a dealy weapon. Shield bash damage x 2, fortify block increases shield bash damage, -10 shield bash stamina cost."
        },
        //48
        {
            name: "Novice<br>Conjuration", skill: 3, skillReq: 0,
            xPos: 216 / 4, yPos: 354 / 4, preReqs: [], nextPerk: -1,
            description: "You've taught yourself a few Novice level spells and learned how to cast them with decreased effort while your newfound knowledge also allows you to augment all Conjuration spells."
        },
        //49
        {
            name: "Apprentice<br>Conjuration", skill: 3, skillReq: 25,
            xPos: 354 / 4, yPos: 231 / 4, preReqs: [48], nextPerk: -1,
            description: "By pursuing your apprenticeship in Conjuration, you've gained knowledge of Apprentice level spells which you now augment while casting them with less effort."
        },
        //50
        {
            name: "Adept<br>Conjuration", skill: 3, skillReq: 50,
            xPos: 365 / 4, yPos: 176 / 4, preReqs: [49], nextPerk: -1,
            description: "By advancing further into the school of Conjuration, you've gained some Adept level spells and learned how to augment and cast spells of this rank more easily."
        },
        //51
        {
            name: "Expert<br>Conjuration", skill: 3, skillReq: 75,
            xPos: 357 / 4, yPos: 122 / 4, preReqs: [50], nextPerk: -1,
            description: "You've unlocked almost every secret in the school of Conjuration and you've acquired some Expert level spells. You can now cast spells of this level easier and augment them to an almost otherworldly extent."
        },
        //52
        {
            name: "Master<br>Conjuration", skill: 3, skillReq: 100,
            xPos: 342 / 4, yPos: 50 / 4, preReqs: [51], nextPerk: -1,
            description: "Your knowledge of Conjuration has become all-encompassing. You taught yourself a Master level spell and you can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits."
        },
        //53
        {
            name: "Mystic<br>Binding", skill: 3, skillReq: 25,
            xPos: 272 / 4, yPos: 249 / 4, preReqs: [48], nextPerk: -1,
            description: "You've become very skilled in binding weapon-shaped daedra from Oblivion. Thereby, bound weapons are stronger and longer-lasting."
        },
        //54
        {
            name: "Mystic<br>Maelstrom", skill: 3, skillReq: 50,
            xPos: 292 / 4, yPos: 164 / 4, preReqs: [53], nextPerk: -1,
            description: "You've improved your ability to bind weapon-shaped daedra from Oblivion. Thereby, bound weapons are stronger and longer-lasting."
        },
        //55
        {
            name: "Mystic<br>Banishment", skill: 3, skillReq: 75,
            xPos: 275 / 4, yPos: 112 / 4, preReqs: [54], nextPerk: -1,
            description: "You've greatly improved your ability to bind weapon-shaped daedra from Oblivion. Thereby, bound weapons are stronger and longer-lasting."
        },
        //56
        {
            name: "Mystic<br>Disruption", skill: 3, skillReq: 100,
            xPos: 261 / 4, yPos: 60 / 4, preReqs: [55], nextPerk: -1,
            description: "You've perfected your ability to bind weapon-shaped daedra from Oblivion. Thereby, bound weapons are stronger and longer-lasting."
        },
        //57
        {
            name: "Necromancy", skill: 3, skillReq: 25,
            xPos: 220 / 4, yPos: 218 / 4, preReqs: [48], nextPerk: -1,
            description: "You've developed a knack for making the dead serve your commands. Therefore, all spells that summon or raise the dead and ghosts last longer and can raise more powerful entities."
        },
        //58
        {
            name: "Ritualism", skill: 3, skillReq: 50,
            xPos: 212 / 4, yPos: 153 / 4, preReqs: [57], nextPerk: -1,
            description: "Your knowledge of the realms of the dead surpasses that of many and decreases the effort needed to raise or summon the dead and ghosts."
        },
        //59
        {
            name: "Dark<br>Infusion", skill: 3, skillReq: 75,
            xPos: 181 / 4, yPos: 76 / 4, preReqs: [58], nextPerk: -1,
            description: "By infusing your undead creations with dark energies, you are able to make them stronger and more resilient. You can even prevent your creations from decaying to dust."
        },
        //60
        {
            name: "Summoner's<br>Insight", skill: 3, skillReq: 25,
            xPos: 172 / 4, yPos: 247 / 4, preReqs: [48], nextPerk: -1,
            description: "You've learned how to empower Conjuration spells. Thus, you can now make them last longer in this realm."
        },
        //61
        {
            name: "Cognitive<br>Flexibility", skill: 3, skillReq: 50,
            xPos: 150 / 4, yPos: 117 / 4, preReqs: [60], nextPerk: 62,
            description: "You have practiced the mental ability of maintaining two summons at the same time. This power extends to controlling any type of conjured or conceived entity, even outside the school of Conjuration."
        },
        //62
        {
            name: "Cognitive<br>Flexibility", skill: 3, skillReq: 100,
            xPos: 150 / 4, yPos: 117 / 4, preReqs: [61], nextPerk: -1,
            description: "You have mastered the art of Cognitive Flexibility, a trait of only the most accomplished Summoners throughout history. You can now control three summons, of any type, simultaneously."
        },
        //63
        {
            name: "Stabilized<br>Binding", skill: 3, skillReq: 25,
            xPos: 85 / 4, yPos: 221 / 4, preReqs: [48], nextPerk: -1,
            description: "Having studied the barriers that divide the planes of existence, you can make your summoned daedra and spirits last longer in this realm."
        },
        //64
        {
            name: "Spiritual<br>Binding", skill: 3, skillReq: 35,
            xPos: 98 / 4, yPos: 161 / 4, preReqs: [63], nextPerk: -1,
            description: "Your knowledge of Oblivion's spiritual aspects increases the strength of all your summoned spirits."
        },
        //65
        {
            name: "Extended<br>Binding", skill: 3, skillReq: 50,
            xPos: 53 / 4, yPos: 131 / 4, preReqs: [63], nextPerk: -1,
            description: "You've perfected your spells' formulae to summon daedra and spirits, and are now able to cast them more easily and further away."
        },
        //66
        {
            name: "Elemental<br>Binding", skill: 3, skillReq: 75,
            xPos: 76 / 4, yPos: 70 / 4, preReqs: [65], nextPerk: -1,
            description: "Your knowledge of Oblivion's elemental aspects increases the strength of all your summoned Atronachs while the highest level rituals will conjure Thralls that are immune to Banishment and Control spells."
        },
        //67
        {
            name: "Novice Destruction", skill: 4, skillReq: 0,
            xPos: 176 / 4, yPos: 345 / 4, preReqs: [], nextPerk: -1,
            description: "You've taught yourself a few Novice level spells and learned how to cast them with decreased effort while your newfound knowledge also allows you to augment all Destruction spells."
        },
        //68
        {
            name: "Apprentice<br>Destruction", skill: 4, skillReq: 25,
            xPos: 255 / 4, yPos: 255 / 4, preReqs: [67], nextPerk: -1,
            description: "By pursuing your apprenticeship in Destruction, you've gained knowledge of Apprentice level spells which you now augment while casting them with less effort."
        },
        //69
        {
            name: "Adept<br>Destruction", skill: 4, skillReq: 50,
            xPos: 270 / 4, yPos: 130 / 4, preReqs: [68], nextPerk: -1,
            description: "By advancing further into the school of Destruction, you've gained some Adept level spells and learned how to augment and cast spells of this rank more easily."
        },
        //70
        {
            name: "Expert<br>Destruction", skill: 4, skillReq: 75,
            xPos: 290 / 4, yPos: 60 / 4, preReqs: [69], nextPerk: -1,
            description: "You've unlocked almost every secret in the school of Destruction and you've acquired some Expert level spells. You can now cast spells of this level easier and augment them to an almost otherworldly extent."
        },
        //71
        {
            name: "Master<br>Destruction", skill: 4, skillReq: 100,
            xPos: 300 / 4, yPos: 15 / 4, preReqs: [70], nextPerk: -1,
            description: "Your knowledge of Destruction has become all-encompassing. You taught yourself a Master level spell and you can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits."
        },
        //72
        {
            name: "Arcane<br>Assassin", skill: 4, skillReq: 25,
            xPos: 40 / 4, yPos: 300 / 4, preReqs: [67], nextPerk: 73,
            description: "You can control your Destruction spells better, dealing more damage to unwary targets. Destruction spell magnitude x 1.15 on sneak attack, destruction spells are silent when out of combat."
        },
        //73
        {
            name: "Arcane<br>Assassin", skill: 4, skillReq: 50,
            xPos: 40 / 4, yPos: 300 / 4, preReqs: [72], nextPerk: 74,
            description: "You can control your Destruction spells better, dealing more damage to unwary targets. Destruction spell magnitude x 1.3 on sneak attack, destruction spells are silent when out of combat."
        },
        //74
        {
            name: "Arcane<br>Assassin", skill: 4, skillReq: 75,
            xPos: 40 / 4, yPos: 300 / 4, preReqs: [73], nextPerk: -1,
            description: "You can control your Destruction spells better, dealing more damage to unwary targets. Destruction spell magnitude x 1.5 on sneak attack, destruction spells are silent when out of combat."
        },
        //75
        {
            name: "Geomancy", skill: 4, skillReq: 25,
            xPos: 45 / 4, yPos: 260 / 4, preReqs: [67], nextPerk: 76,
            description: "You now are able to intensify the strength of your earth spells. Thus, they now deal increased damage."
        },
        //76
        {
            name: "Geomancy", skill: 4, skillReq: 50,
            xPos: 45 / 4, yPos: 260 / 4, preReqs: [75], nextPerk: -1,
            description: "You now are able to greatly intensify the strength of your earth spells. Thus, they now deal increased damage."
        },
        //77
        {
            name: "Knockout", skill: 4, skillReq: 75,
            xPos: 45 / 4, yPos: 200 / 4, preReqs: [75], nextPerk: -1,
            description: "Your higher level earth spells are so strong that foes are sometimes knocked out."
        },
        //78
        {
            name: "Earth Mastery", skill: 4, skillReq: 100,
            xPos: 45 / 4, yPos: 100 / 4, preReqs: [77], nextPerk: -1,
            description: "Your fascination for geomancy now grants you a natural resistance to physical damage, while also increasing all your earth spells' power even further."
        },
        //79
        {
            name: "Pyromancy", skill: 4, skillReq: 25,
            xPos: 89 / 4, yPos: 219 / 4, preReqs: [67], nextPerk: 80,
            description: "You now are able to intensify the heat of your fire spells. Thus, they now deal increased damage."
        },
        //80
        {
            name: "Pyromancy", skill: 4, skillReq: 50,
            xPos: 89 / 4, yPos: 219 / 4, preReqs: [79], nextPerk: -1,
            description: "Your fire spells burn with almost otherworldly heat and consume earth and flesh with terrifying ease."
        },
        //81
        {
            name: "Cremation", skill: 4, skillReq: 75,
            xPos: 82 / 4, yPos: 143 / 4, preReqs: [79], nextPerk: -1,
            description: "Your higher level fire spells burn so ferociously that foes are set ablaze, often causing them to run away in gruesome agony as their very skin becomes molten."
        },
        //82
        {
            name: "Fire<br>Mastery", skill: 4, skillReq: 100,
            xPos: 80 / 4, yPos: 52 / 4, preReqs: [81], nextPerk: -1,
            description: "Your fascination for fire now grants you a natural resistance to it, while also increasing all your fire spells' power even further."
        },
        //83
        {
            name: "Cyromancy", skill: 4, skillReq: 25,
            xPos: 145 / 4, yPos: 196 / 4, preReqs: [67], nextPerk: 84,
            description: "You now are able to improve your ice spells and thereby increase their effectiveness."
        },
        //84
        {
            name: "Cyromancy", skill: 4, skillReq: 50,
            xPos: 145 / 4, yPos: 196 / 4, preReqs: [83], nextPerk: -1,
            description: "Your ice spells freeze even air in a trice and make the harsh winters of Skyrim look like a refreshing breeze."
        },
        //85
        {
            name: "Deep Freeze", skill: 4, skillReq: 75,
            xPos: 145 / 4, yPos: 109 / 4, preReqs: [83], nextPerk: -1,
            description: "Your higher level ice spells are colder than Skyrim's most ferocious blizzards, causing them to freeze foes with low resistance to frost."
        },
        //86
        {
            name: "Frost<br>Mastery", skill: 4, skillReq: 100,
            xPos: 153 / 4, yPos: 41 / 4, preReqs: [85], nextPerk: -1,
            description: "Your understanding of all that is cold grants you a natural resistance to it, while  increasing all your frost spells' power even further."
        },
        //87
        {
            name: "Electromancy", skill: 4, skillReq: 25,
            xPos: 210 / 4, yPos: 170 / 4, preReqs: [67], nextPerk: 88,
            description: "You can now energize your lightning spells more effectively, causing them to deal more damage."
        },
        //88
        {
            name: "Electromancy", skill: 4, skillReq: 50,
            xPos: 210 / 4, yPos: 170 / 4, preReqs: [87], nextPerk: -1,
            description: "Compared to your lightning spells, the worst tempests would look like a mild summer breeze."
        },
        //89
        {
            name: "Electrostatic<br>Discharge", skill: 4, skillReq: 75,
            xPos: 213 / 4, yPos: 93 / 4, preReqs: [87], nextPerk: -1,
            description: "Your lightning strikes pass through body and mind with thundering intensity. Thus, they now vaporize vast amounts of Magicka off your targets."
        },
        //90
        {
            name: "Lightning<br>Mastery", skill: 4, skillReq: 100,
            xPos: 220 / 4, yPos: 25 / 4, preReqs: [89], nextPerk: -1,
            description: "Your aptitude with lightning grants you a natural resistance to it, while also increasing all your shock spells' power even further."
        },
        //91
        {
            name: "Rune Mastery", skill: 4, skillReq: 50,
            xPos: 302 / 4, yPos: 204 / 4, preReqs: [68], nextPerk: -1,
            description: "By studying the arcane symbols of all three elements, you have developed more powerful rune spells and have unlocked the secret of maintaining three active runes instead of just one."
        },
        //92
        {
            name: "Empowered<br>Elements", skill: 4, skillReq: 25,
            xPos: 294 / 4, yPos: 316 / 4, preReqs: [67], nextPerk: -1,
            description: "You learned how to empower Destruction spells. Thus, you're able to overcharge their effects."
        },
        //93
        {
            name: "Impact", skill: 4, skillReq: 50,
            xPos: 360 / 4, yPos: 255 / 4, preReqs: [92], nextPerk: -1,
            description: "By intensifying the force of most of your overcharged Destruction spells, you're now capable of staggering your foes."
        },
        //94
        {
            name: "Enchanter's Insight", skill: 5, skillReq: 0,
            xPos: 183 / 4, yPos: 342 / 4, preReqs: [], nextPerk: 95,
            description: "You've acquired fundamental insights into how matter and magic intertwine. Thus, you can now infuse items with arcane energy at an enchanter and use soul gems to recharge enchanted items of all kinds."
        },
        //95
        {
            name: "Enchanter's Insight", skill: 5, skillReq: 20,
            xPos: 183 / 4, yPos: 342 / 4, preReqs: [94], nextPerk: -1,
            description: "Your advanced knowledge of arcane energy allows you to improve all your enchantments even more."
        },
        //96
        {
            name: "Soul Gem Mastery", skill: 5, skillReq: 25,
            xPos: 246 / 4, yPos: 218 / 4, preReqs: [94], nextPerk: -1,
            description: "You've learned how to draw more energy from soul gems and are now able to craft them at a smelter by transmuting and melting certain minerals."
        },
        //97
        {
            name: "Arcane Experimentation", skill: 5, skillReq: 50,
            xPos: 259 / 4, yPos: 160 / 4, preReqs: [96], nextPerk: -1,
            description: "Your studies have enabled you to research unique enchantments of your own and to craft better staves at the forge."
        },
        //98
        {
            name: "Artificer's Insight", skill: 5, skillReq: 75,
            xPos: 264 / 4, yPos: 80 / 4, preReqs: [97], nextPerk: -1,
            description: "You could fill grimoires with your newfound knowledge that allows you to create even better enchantments and staves."
        },
        //99
        {
            name: "Elemental Lore", skill: 5, skillReq: 25,
            xPos: 138 / 4, yPos: 219 / 4, preReqs: [94], nextPerk: -1,
            description: "You've learned how to tame the elements most efficiently.<br> Thus, all elemental enchantments are stronger."
        },
        //100
        {
            name: "Corpus Lore", skill: 5, skillReq: 50,
            xPos: 150 / 4, yPos: 150 / 4, preReqs: [99], nextPerk: -1,
            description: "You've become skilled in using enchantments to strengthen mind and body. Thus, all such enchantments are stronger."
        },
        //101
        {
            name: "Skill Lore", skill: 5, skillReq: 75,
            xPos: 191 / 4, yPos: 93 / 4, preReqs: [100], nextPerk: -1,
            description: "You've become a master of infusing enchantments that transfer knowledge and skill to the user, making all such ones stronger."
        },
        //102
        {
            name: "Enchantment Mastery", skill: 5, skillReq: 100,
            xPos: 258 / 4, yPos: 35 / 4, preReqs: [101, 98], nextPerk: -1,
            description: "You've found a way to bind even more energy into inanimate matter. Thus, you can bend the Law of Firsts to an extent and even create Daedric staves. Additionally, all enchanted items also consume less energy."
        },
        //103
        {
            name: "Arcane<br>Artificery", skill: 5, skillReq: 25,
            xPos: 280 / 4, yPos: 280 / 4, preReqs: [94], nextPerk: 104,
            description: "Your understanding of enchantments allows you to use them more effectively and efficiently. Enchantment charge cost x 0.9, recharge amount x 1.1, scroll magnitude and duration x 1.1."
        },
        //104
        {
            name: "Arcane<br>Artificery", skill: 5, skillReq: 50,
            xPos: 280 / 4, yPos: 280 / 4, preReqs: [103], nextPerk: 105,
            description: "Your understanding of enchantments allows you to use them more effectively and efficiently. Enchantment charge cost x 0.8, recharge amount x 1.2, scroll magnitude and duration x 1.2."
        },
        //105
        {
            name: "Arcane<br>Artificery", skill: 5, skillReq: 75,
            xPos: 280 / 4, yPos: 280 / 4, preReqs: [104], nextPerk: -1,
            description: "Your understanding of enchantments allows you to use them more effectively and efficiently. Enchantment charge cost x 0.7, recharge amount x 1.3, scroll magnitude and duration x 1.3."
        },
        //106
        {
            name: "Agility", skill: 6, skillReq: 0,
            xPos: 219 / 4, yPos: 345 / 4, preReqs: [], nextPerk: -1,
            description: "After some training you are now much more confident in your evasive movements. Your light armor and clothes will now hinder your movements less and you take less damage from falling."
        },
        //107
        {
            name: "Athletics", skill: 6, skillReq: 25,
            xPos: 115 / 4, yPos: 345 / 4, preReqs: [106], nextPerk: 108,
            description: "You are more agile and can recover from exhaustion faster. +3% movement speed, +5% movement speed when sprinting or swimming, +15% stamina regeneration."
        },
        //108
        {
            name: "Athletics", skill: 6, skillReq: 50,
            xPos: 115 / 4, yPos: 345 / 4, preReqs: [107], nextPerk: 109,
            description: "You are more agile and can recover from exhaustion faster. +6% movement speed, +10% movement speed when sprinting or swimming, +30% stamina regeneration."
        },
        //109
        {
            name: "Athletics", skill: 6, skillReq: 75,
            xPos: 115 / 4, yPos: 345 / 4, preReqs: [108], nextPerk: -1,
            description: "You are more agile and can recover from exhaustion faster. +10% movement speed, +15% movement speed when sprinting or swimming, +50% stamina regeneration."
        },
        //110
        {
            name: "Unarmored", skill: 6, skillReq: 25,
            xPos: 115 / 4, yPos: 300 / 4, preReqs: [106], nextPerk: 111,
            description: "Having no weight on your body allows you to control your moves better in combat. While unarmored, +50 armor rating, -2% incoming physical damage, +2% movement speed, damage x 1.05"
        },
        //111
        {
            name: "Unarmored", skill: 6, skillReq: 50,
            xPos: 115 / 4, yPos: 300 / 4, preReqs: [110], nextPerk: 112,
            description: "Having no weight on your body allows you to control your moves better in combat. While unarmored, +100 armor rating, -4% incoming physical damage, +4% movement speed, damage x 1.1"
        },
        //112
        {
            name: "Unarmored", skill: 6, skillReq: 50,
            xPos: 115 / 4, yPos: 300 / 4, preReqs: [111], nextPerk: -1,
            description: "Having no weight on your body allows you to control your moves better in combat. While unarmored, +150 armor rating, -6% incoming physical damage, +6% movement speed, damage x 1.15"
        },
        //113
        {
            name: "Agile Spellcasting", skill: 6, skillReq: 25,
            xPos: 115 / 4, yPos: 193 / 4, preReqs: [106], nextPerk: -1,
            description: "You learned how to avoid the limitations light armors bestow upon somatic spell components. Thus, you can cast spells in them unhindered."
        },
        //114
        {
            name: "Finesse", skill: 6, skillReq: 25,
            xPos: 192 / 4, yPos: 240 / 4, preReqs: [106], nextPerk: -1,
            description: "You inflict increased damage with all your power attacks, for you're able to hit more precisely."
        },
        //115
        {
            name: "Dexterity", skill: 6, skillReq: 50,
            xPos: 128 / 4, yPos: 148 / 4, preReqs: [114], nextPerk: -1,
            description: "You are able to balance your weapon better. Thus, you can decrease the effort to execute power attacks."
        },
        //116
        {
            name: "Windrunner", skill: 6, skillReq: 75,
            xPos: 142 / 4, yPos: 92 / 4, preReqs: [115], nextPerk: -1,
            description: "Your light armor and clothes have become your second skin. You can move faster in them and running no longer exhausts you. Furthermore, your light armor hinders you even less than before."
        },
        //117
        {
            name: "Vexing Flanker", skill: 6, skillReq: 50,
            xPos: 267 / 4, yPos: 159 / 4, preReqs: [114], nextPerk: -1,
            description: "You deal more damage with melee weapons while you are running, for you have learned to flank your enemies with ease. Furthermore, your reflexes will never betray you when an enemy attempts a lethal strike."
        },
        //118
        {
            name: "Combat Reflexes", skill: 6, skillReq: 75,
            xPos: 237 / 4, yPos: 80 / 4, preReqs: [114, 117], nextPerk: -1,
            description: "You've gained the ability to act faster in combat, though doing so will quickly exhaust you."
        },
        //119
        {
            name: "Meteoric Reflexes", skill: 6, skillReq: 100,
            xPos: 195 / 4, yPos: 35 / 4, preReqs: [118, 116], nextPerk: -1,
            description: "Your reflexes are lightning fast and grant you a chance to decrease the damage of incoming melee attacks while not wearing any Heavy Armor."
        },
        //120
        {
            name: "Dodge", skill: 6, skillReq: 20,
            xPos: 277 / 4, yPos: 254 / 4, preReqs: [106], nextPerk: -1,
            description: "Your trained reflexes allow you to dodge incoming blows when wearing no heavy armor. By sprinting a step or two away, you can attempt to dodge hostile attacks."
        },
        //121
        {
            name: "Conditioning", skill: 7, skillReq: 0,
            xPos: 249 / 4.5, yPos: 406 / 4.5, preReqs: [], nextPerk: -1,
            description: "You've accustomed yourself to using heavy armor. You no longer get tired just by wearing it and can cast Novice level spells without severe penalties."
        },
        //122
        {
            name: "Relentless Onslaught", skill: 7, skillReq: 20,
            xPos: 249 / 4.5, yPos: 280 / 4.5, preReqs: [121], nextPerk: -1,
            description: "After extensive training you now can sprint in heavy armor without problems. Your familiarity with your armor also allows you to deflect most melee attacks while bull rushing."
        },
        //123
        {
            name: "Combat Casting", skill: 7, skillReq: 25,
            xPos: 130 / 4.5, yPos: 301 / 4.5, preReqs: [121], nextPerk: -1,
            description: "You're able to keep concentrated enough in heavy armor to cast Apprentice level spells without severe penalties."
        },
        //124
        {
            name: "Combat Trance", skill: 7, skillReq: 50,
            xPos: 73 / 4.5, yPos: 200 / 4.5, preReqs: [123], nextPerk: -1,
            description: "Your heavy armor distracts you even less, allowing you to cast Adept level spells with almost no penalty."
        },
        //125
        {
            name: "Combat Meditation", skill: 7, skillReq: 75,
            xPos: 84 / 4.5, yPos: 110 / 4.5, preReqs: [124], nextPerk: -1,
            description: "You're accustomed to your heavy armor so much that you can now cast even Expert level spells with relative ease."
        },
        //126
        {
            name: "Battle Mage", skill: 7, skillReq: 100,
            xPos: 103 / 4.5, yPos: 36 / 4.5, preReqs: [125], nextPerk: -1,
            description: "You have mastered spellcasting while wearing heavy armor and now can even cast Master level spells with ease. Bolstered by wearing your full heavy armor, you can concentrate even more and cast all spells easier."
        },
        //127
        {
            name: "Combat Training", skill: 7, skillReq: 25,
            xPos: 355 / 4.5, yPos: 307 / 4.5, preReqs: [121], nextPerk: -1,
            description: "You require no extra stamina for power attacks when wearing heavy armor and are less hindered by your armor. Also, your gauntlets improve your unarmed damage."
        },
        //128
        {
            name: "Fortitude", skill: 7, skillReq: 50,
            xPos: 387 / 4.5, yPos: 216 / 4.5, preReqs: [127], nextPerk: -1,
            description: "Your training made you stronger and you are now less burdened by the rigidity of your armor. You also receive some additional stamina and carry weight. Getting hit does not disrupt your focus."
        },
        //129
        {
            name: "Power of<br>the Combatant", skill: 7, skillReq: 75,
            xPos: 400 / 4.5, yPos: 140 / 4.5, preReqs: [128], nextPerk: -1,
            description: "Once a day, you can now push yourself to continue fighting,  allowing you to regenerate stamina very fast. Furthermore, you learned some new tricks to overcome the mobility limitations of your armor."
        },
        //130
        {
            name: "Juggernaut", skill: 7, skillReq: 100,
            xPos: 366 / 4.5, yPos: 36 / 4.5, preReqs: [129], nextPerk: -1,
            description: "You've reached perfection in the skill of wearing heavy armor. Your armor can now be worn with less effort and protects you even more."
        },
        //131
        {
            name: "Novice Illusion", skill: 8, skillReq: 0,
            xPos: 180 / 3.5, yPos: 303 / 3.5, preReqs: [], nextPerk: -1,
            description: "You've taught yourself a few Novice level spells and learned how to cast them with decreased effort while your newfound knowledge also allows you to augment the strength and duration of all Illusion spells."
        },
        //132
        {
            name: "Apprentice<br>Illusion", skill: 8, skillReq: 20,
            xPos: 183 / 3.5, yPos: 198 / 3.5, preReqs: [131], nextPerk: -1,
            description: "By pursuing your apprenticeship in Illusion, you've gained knowledge of Apprentice level spells which you now augment while casting them with less effort."
        },
        //133
        {
            name: "Adept Illusion", skill: 8, skillReq: 40,
            xPos: 185 / 3.5, yPos: 142 / 3.5, preReqs: [132], nextPerk: -1,
            description: "By advancing further into the school of Illusion, you've gained some Adept level spells and learned how to augment and cast spells of this rank more easily."
        },
        //134
        {
            name: "Expert Illusion", skill: 8, skillReq: 60,
            xPos: 185 / 3.5, yPos: 80 / 3.5, preReqs: [133], nextPerk: -1,
            description: "You've unlocked almost every secret in the school of Illusion and you've acquired some Expert level spells. You can now cast spells of this level easier and augment them to an almost otherworldly extent."
        },
        //135
        {
            name: "Master Illusion", skill: 8, skillReq: 80,
            xPos: 186 / 3.5, yPos: 40 / 3.5, preReqs: [134], nextPerk: -1,
            description: "Your knowledge of Illusion has become all-encompassing. You taught yourself a Master level spell and you can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits."
        },
        //136
        {
            name: "Acoustic<br>Manipulation", skill: 8, skillReq: 25,
            xPos: 55 / 3.5, yPos: 226 / 3.5, preReqs: [131], nextPerk: -1,
            description: "After studying spells like Muffle, Arcane Resonance or Rune of Dampening, you are now familiar with manipulating sounds. Thus, you can empower these spells and their strength and duration are increased."
        },
        //137
        {
            name: "Visual<br>Manipulation", skill: 8, skillReq: 35,
            xPos: 110 / 3.5, yPos: 181 / 3.5, preReqs: [131], nextPerk: -1,
            description: "You've experimented with spells like Dark Vision, Invisibility and Blur to manipulate your surroundings. After a lot of training you can now empower such spells, and their strength and duration are increased."
        },
        //138
        {
            name: "Environmental<br>Manipulation", skill: 8, skillReq: 65,
            xPos: 65 / 3.5, yPos: 85 / 3.5, preReqs: [136, 137], nextPerk: -1,
            description: "After long training with spells like Shadow Stride, Veil of Silence, Fade Other, Invisibility Sphere and Muffling Sphere, you gained a deep insight into the connections between light and sound. You can now empower these spells and their strength and duration are increased."
        },
        //139
        {
            name: "Shadow Shaping", skill: 8, skillReq: 70,
            xPos: 125 / 3.5, yPos: 60 / 3.5, preReqs: [134], nextPerk: -1,
            description: "By studying spells like Shadow Shield, Shadow Wolf and Shadow Simulacrum, you gained even deeper insights into the weave of shadows. Thus, you can empower these spells, and their strength and duration are increased."
        },
        //140
        {
            name: "Phantasmagoria", skill: 8, skillReq: 90,
            xPos: 102 / 3.5, yPos: 10 / 3.5, preReqs: [139, 138, 135], nextPerk: -1,
            description: "You've mastered the most powerful forms of Shadow Magic. Therefore, spells like Veil of Shadows, Shadow Sanctuary and Mistress of the Dark can now be empowered and their strength and duration are increased."
        },
        //141
        {
            name: "Delusive<br>Phantasms", skill: 8, skillReq: 15,
            xPos: 300 / 3.5, yPos: 210 / 3.5, preReqs: [131], nextPerk: -1,
            description: "You have studied the most common spell formulae that affect basic emotions like fear, calmness and courage. Thus, you can empower related spells and increase their overall effectiveness."
        },
        //142
        {
            name: "Otherworldly<br>Phantasms", skill: 8, skillReq: 45,
            xPos: 285 / 3.5, yPos: 132 / 3.5, preReqs: [141], nextPerk: -1,
            description: "You have extended your knowledge of affecting emotions, being able to turn your foes into berserking maniacs or cause them to fall asleep with ease. You also learned how to empower related spells."
        },
        //143
        {
            name: "Pain and Agony", skill: 8, skillReq: 50,
            xPos: 240 / 3.5, yPos: 100 / 3.5, preReqs: [134], nextPerk: -1,
            description: "Having studied spells like Phantasmal Pain and Nightmare, you can now invoke terrible agony in your foes with ease. In addition, you also learned how to empower related spells."
        },
        //144
        {
            name: "Obliterate the Mind", skill: 8, skillReq: 70,
            xPos: 270 / 3.5, yPos: 72 / 3.5, preReqs: [143, 142], nextPerk: -1,
            description: "You have studied spells like Blackout, Command and Phantasmal Killer. Thus, you can now empower them and shatter your foes' minds with ease."
        },
        //145
        {
            name: "Domination", skill: 8, skillReq: 90,
            xPos: 267 / 3.5, yPos: 10 / 3.5, preReqs: [144, 135], nextPerk: -1,
            description: "Having studied spells like Phantasmal Miasma and Mind Maelstrom, there is no thinking being that can escape your influence. These spells can now be empowered and sustaining the Miasma is less demanding."
        },
        //146
        {
            name: "Cheap Tricks", skill: 9, skillReq: 0,
            xPos: 150 / 4, yPos: 357 / 4, preReqs: [], nextPerk: -1,
            description: "You have learned the basics of the art of picking locks. You can now pick novice locks without difficulty, but apprentice locks remain a challenge. If you apply some basic smithing techniques, you can even forge steel ingots into lockpicks."
        },
        //147
        {
            name: "Improved Lockpicking", skill: 9, skillReq: 25,
            xPos: 210 / 4, yPos: 280 / 4, preReqs: [146], nextPerk: -1,
            description: "You have mastered the basics of the art of picking locks. You can now pick apprentice locks without difficulty, but adept locks remain a challenge."
        },
        //148
        {
            name: "Locksmithing Lore", skill: 9, skillReq: 50,
            xPos: 250 / 4, yPos: 195 / 4, preReqs: [147], nextPerk: -1,
            description: "You have extended your repertoire of lockpicking tricks. Adept locks can be picked without effort and you can attempt to open expert locks."
        },
        //149
        {
            name: "Treasure Hunter", skill: 9, skillReq: 50,
            xPos: 150 / 4, yPos: 130 / 4, preReqs: [148], nextPerk: -1,
            description: "You are able to locate secret spaces in containers when you search them and can thereby find more loot."
        },
        //150
        {
            name: "Expert Lockpicking", skill: 9, skillReq: 75,
            xPos: 270 / 4, yPos: 130 / 4, preReqs: [148], nextPerk: -1,
            description: "You have nearly mastered the art of lockpicking. You can now pick expert locks without difficulty and even master locks are no longer safe from you."
        },
        //151
        {
            name: "Masterly Lockpicking", skill: 9, skillReq: 100,
            xPos: 280 / 4, yPos: 50 / 4, preReqs: [150], nextPerk: -1,
            description: "You learned everything there is to know about the art of lockpicking. You can now pick master locks without difficulty."
        },
        //152
        {
            name: "Ranged Combat Training", skill: 10, skillReq: 0,
            xPos: 314 / 4, yPos: 360 / 4, preReqs: [], nextPerk: -1,
            description: "After some training at the shooting range you can deal more damage with bows and crossbows. [damage x 1.2, -50% weapon weight penalties, ammunition grants armor penetration]"
        },
        //153
        {
            name: "Ranger", skill: 10, skillReq: 15,
            xPos: 177 / 4, yPos: 322 / 4, preReqs: [152], nextPerk: -1,
            description: "You improved your footwork when engaging in ranged combat with light weapons. [allows running while attacking with light bows and crossbows]"
        },
        //154
        {
            name: "Eagle Eye", skill: 10, skillReq: 25,
            xPos: 170 / 4, yPos: 250 / 4, preReqs: [152], nextPerk: -1,
            description: "By concentrating only on your target and holding your breath, you can now aim much more precisely. [zoom in by holding right mouse button]"
        },
        //155
        {
            name: "Marksman's<br>Focus", skill: 10, skillReq: 50,
            xPos: 83 / 4, yPos: 161 / 4, preReqs: [154], nextPerk: -1,
            description: "When fully focusing on your target, everything around you seems to slow down remarkably. [time slows down while zooming, -25% weapon weight penalties]"
        },
        //156
        {
            name: "Rapid Reload", skill: 10, skillReq: 60,
            xPos: 90 / 4, yPos: 119 / 4, preReqs: [154], nextPerk: -1,
            description: "Your have familiarized yourself with the mechanics of your crossbow and can use this knowledge to reload it significantly faster. [+50% reload speed with crossbows]"
        },
        //157
        {
            name: "Power Shot", skill: 10, skillReq: 75,
            xPos: 100 / 4, yPos: 78 / 4, preReqs: [154], nextPerk: -1,
            description: "You have discovered the art of aiming at tendons and joints. Your shots will now have a chance to stagger enemies [chance to stagger targets]"
        },
        //158
        {
            name: "Quick Shot", skill: 10, skillReq: 60,
            xPos: 175 / 4, yPos: 124 / 4, preReqs: [154], nextPerk: -1,
            description: "You have learned to draw and fire in one single movement, increasing your rate of fire with bows greatly. [+50% draw speed with bows]"
        },
        //159
        {
            name: "Precise Aim", skill: 10, skillReq: 20,
            xPos: 302 / 4, yPos: 288 / 4, preReqs: [152], nextPerk: -1,
            description: "Your aim is now precise enough to target weak spots in the enemy's defenses. [damage x 1.2 with bow and crossbow attacks]"
        },
        //160
        {
            name: "Piercing Shot", skill: 10, skillReq: 45,
            xPos: 284 / 4, yPos: 200 / 4, preReqs: [159], nextPerk: -1,
            description: "You've learned how to hit the weakest parts of armor, making armored foes more vulnerable to ranged weapons. [+50% armor penetration from ammunition]"
        },
        //161
        {
            name: "Penetrating Shot", skill: 10, skillReq: 80,
            xPos: 224 / 4, yPos: 67 / 4, preReqs: [160], nextPerk: -1,
            description: "You've mastered the technique of hitting weak armor parts, making armored foes even more vulnerable to ranged weapons. [+50% armor penetration from ammunition]"
        },
        //162
        {
            name: "Stunning Precision", skill: 10, skillReq: 100,
            xPos: 174 / 4, yPos: 27 / 4, preReqs: [161, 157], nextPerk: -1,
            description: "Any successful staggering shot will almost always stun the target momentarily. [staggering hits will also stun the target]"
        },
        //163
        {
            name: "Brawler", skill: 11, skillReq: 0,
            xPos: 100 / 4, yPos: 320 / 4, preReqs: [], nextPerk: -1,
            description: "You've trained on the basics of hand-to-hand combat, and can throw harder punches. [base unarmed damage +10, extra +3 when under 255 base Health+Stamina]"
        },
        //164
        {
            name: "Boxing<br>Focus", skill: 11, skillReq: 25,
            xPos: 40 / 4, yPos: 320 / 4, preReqs: [163], nextPerk: 165,
            description: "You've learned the basics of combat boxing, allowing you to increase your attack rate with cestuses slightly. [+3% attack speed, +1% movement speed, +7 armor penetration]"
        },
        //165
        {
            name: "Boxing<br>Focus", skill: 11, skillReq: 50,
            xPos: 40 / 4, yPos: 320 / 4, preReqs: [164], nextPerk: 166,
            description: "You've aquired the advanced techniques of combat boxing, further increasing your attack rate with them. [+6% attack speed, +2% movement speed, +14 armor penetration]"
        },
        //166
        {
            name: "Boxing<br>Focus", skill: 11, skillReq: 75,
            xPos: 40 / 4, yPos: 320 / 4, preReqs: [165], nextPerk: -1,
            description: "You've become a master of combat boxing, allowing you to swing your fists so fast that it's almost undectecable to the mortal eye. [+10% attack speed, +3% movement speed, +21 armor penetration]"
        },
        //167
        {
            name: "Grappling<br>Focus", skill: 11, skillReq: 25,
            xPos: 40 / 4, yPos: 280 / 4, preReqs: [163], nextPerk: 168,
            description: "You've learned the basics of grappling, allowing you to disarm your opponents and make them trip and fall. [+3% disarm chance, +3% knockdown chance with power attacks, +5 armor penetration]"
        },
        //168
        {
            name: "Grappling<br>Focus", skill: 11, skillReq: 50,
            xPos: 40 / 4, yPos: 280 / 4, preReqs: [167], nextPerk: 169,
            description: "You've aquired the advanced techniques of grappling, further increasing your chance of disarming and knockdown. [+6% disarm chance, +6% knockdown chance with power attacks, +10 armor penetration]"
        },
        //169
        {
            name: "Grappling<br>Focus", skill: 11, skillReq: 50,
            xPos: 40 / 4, yPos: 280 / 4, preReqs: [168], nextPerk: -1,
            description: "You've become a master of grappling, allowing you to deny enemies of thier ability to fight back. [+10% disarm chance, +10% knockdown chance with power attacks, +15 armor penetration]"
        },
        //170
        {
            name: "Weapon Mastery", skill: 11, skillReq: 0,
            xPos: 191 / 4, yPos: 351 / 4, preReqs: [], nextPerk: 171,
            description: "Your improved fighting techniques allow you to swing one-handed weapons and fists with less effort and deal more damage. [damage x 1.2, -50% weapon weight penalties]"
        },
        //171
        {
            name: "Weapon Mastery", skill: 11, skillReq: 0,
            xPos: 191 / 4, yPos: 351 / 4, preReqs: [170], nextPerk: -1,
            description: "Your improved fighting techniques increase your damage dealt with one-handed weapons and fists greatly. [damage x 1.4, -50% weapon weight penalties]"
        },
        //172
        {
            name: "Penetrating<br>Strikes", skill: 11, skillReq: 20,
            xPos: 195 / 4, yPos: 274 / 4, preReqs: [170], nextPerk: -1,
            description: "Your power attacks with one-handed weapons are now devastating enough to penetrate enemy armor and less exhausting. [-50% power attack stamina cost, +5 armor penetration]"
        },
        //173
        {
            name: "Dagger<br>Focus", skill: 11, skillReq: 25,
            xPos: 85 / 4, yPos: 240 / 4, preReqs: [172], nextPerk: 174,
            description: "You learned some dirty tricks for your dagger and are more likely to find weak spots in enemy armor. [irresistable sneak attack damage x 1.25, +10 armor penetration]"
        },
        //174
        {
            name: "Dagger<br>Focus", skill: 11, skillReq: 50,
            xPos: 85 / 4, yPos: 240 / 4, preReqs: [173], nextPerk: 175,
            description: "A dagger in your hand turns into a deadly weapon that will find a weakness in every armor. [irresistable sneak attack damage x 1.55, +20 armor penetration]"
        },
        //175
        {
            name: "Dagger<br>Focus", skill: 11, skillReq: 75,
            xPos: 85 / 4, yPos: 240 / 4, preReqs: [175], nextPerk: -1,
            description: "You have mastered the deadly art of the dagger and enemy armor stands no chance against your precision. [irresistable sneak attack damage x 2, +30 armor penetration]"
        },
        //176
        {
            name: "War Axe<br>Focus", skill: 11, skillReq: 25,
            xPos: 140 / 4, yPos: 200 / 4, preReqs: [172], nextPerk: 177,
            description: "You've become familiar with war axes, thereby increasing their damage and armor penetration. [damage x 1.05, +10 armor penetration]"
        },
        //177
        {
            name: "War Axe<br>Focus", skill: 11, skillReq: 50,
            xPos: 140 / 4, yPos: 200 / 4, preReqs: [176], nextPerk: 178,
            description: "You've become an advanced axe fighter, further increasing their damage and armor penetration. [damage x 1.15, +20 armor penetration]"
        },
        //178
        {
            name: "War Axe<br>Focus", skill: 11, skillReq: 75,
            xPos: 140 / 4, yPos: 200 / 4, preReqs: [178], nextPerk: -1,
            description: "Having mastered war axe combat, they start to feel like an almost natural extension of your arm. [damage x 1.3, +30 armor penetration]"
        },
        //179
        {
            name: "Mace<br>Focus", skill: 11, skillReq: 25,
            xPos: 260 / 4, yPos: 200 / 4, preReqs: [172], nextPerk: 180,
            description: "You've become familiar with war axes, thereby increasing their damage and armor penetration. [damage x 1.05, +10 armor penetration]"
        },
        //180
        {
            name: "Mace<br>Focus", skill: 11, skillReq: 50,
            xPos: 260 / 4, yPos: 200 / 4, preReqs: [179], nextPerk: 181,
            description: "You've become an advanced mace fighter and know how to find weak spots in enemy armor. [power attack damage x 1.1, +30 armor penetration]"
        },
        //181
        {
            name: "Mace<br>Focus", skill: 11, skillReq: 75,
            xPos: 260 / 4, yPos: 200 / 4, preReqs: [180], nextPerk: -1,
            description: "You've become a masterly mace fighter, rendering armor almost useless. [power attack damage x 1.15, +45 armor penetration]"
        },
        //182
        {
            name: "Sword<br>Focus", skill: 11, skillReq: 25,
            xPos: 285 / 4, yPos: 246 / 4, preReqs: [172], nextPerk: 183,
            description: "You've learned the basics of sword combat, allowing you to increase your attack rate with them slightly. [+8% attack speed, +7 armor penetration]"
        },
        //183
        {
            name: "Sword<br>Focus", skill: 11, skillReq: 50,
            xPos: 285 / 4, yPos: 246 / 4, preReqs: [182], nextPerk: 184,
            description: "You've acquired the advanced techniques of sword combat, further increasing your attack rate with them. [+16% attack speed, +14 armor penetration]"
        },
        //184
        {
            name: "Sword<br>Focus", skill: 11, skillReq: 75,
            xPos: 285 / 4, yPos: 246 / 4, preReqs: [183], nextPerk: -1,
            description: "You've become a master of sword combat, allowing you to swing swords so fast that it's almost undetectable to the mortal eye. [+24% attack speed, +21 armor penetration]"
        },
        //185
        {
            name: "Powerful Strike", skill: 11, skillReq: 50,
            xPos: 150 / 4, yPos: 150 / 4, preReqs: [172], nextPerk: -1,
            description: "You know how to put the maximum force into your power attacks which are now even more devastating. [power attack damage x 1.2]"
        },
        //186
        {
            name: "Powerful Charge", skill: 11, skillReq: 50,
            xPos: 250 / 4, yPos: 150 / 4, preReqs: [172], nextPerk: -1,
            description: "You have learned to perform a leaping power attack while sprinting, inflicting terrible wounds. [unlocks sprinting power attack, -25% weapon weight penalties]"
        },
        //187
        {
            name: "Stunning Charge", skill: 11, skillReq: 100,
            xPos: 200 / 4, yPos: 25 / 4, preReqs: [185, 186], nextPerk: -1,
            description: "Putting your whole weight behind your charge, your forward power attacks now have enough momentum to knock down opponent. [forward power attacks can knock down]"
        },
        //188
        {
            name: "Balanced<br>Wielding", skill: 11, skillReq: 25,
            xPos: 230 / 4, yPos: 310 / 4, preReqs: [171], nextPerk: 189,
            description: "With your off hand free you can balance your weapon better, swinging it even faster and stronger. [while having off hand free, damage x 1.06, 6% attack speed]"
        },
        //189
        {
            name: "Balanced<br>Wielding", skill: 11, skillReq: 50,
            xPos: 230 / 4, yPos: 310 / 4, preReqs: [188], nextPerk: 190,
            description: "With your off hand free you can balance your weapon better, swinging it even faster and stronger. [while having off hand free, damage x 1.12, 12% attack speed]"
        },
        //190
        {
            name: "Balanced<br>Wielding", skill: 11, skillReq: 75,
            xPos: 230 / 4, yPos: 310 / 4, preReqs: [189], nextPerk: -1,
            description: "With your off hand free you can balance your weapon better, swinging it even faster and stronger. [while having off hand free, damage x 1.2, 20% attack speed]"
        },
        //191
        {
            name: "Flurry", skill: 11, skillReq: 25,
            xPos: 350 / 4, yPos: 300 / 4, preReqs: [171], nextPerk: 192,
            description: "When fighting with one-handed weapons, you are able to attack faster than normal. [+10% attack speed]"
        },
        //192
        {
            name: "Flurry", skill: 11, skillReq: 50,
            xPos: 350 / 4, yPos: 300 / 4, preReqs: [191], nextPerk: -1,
            description: "When fighting with one-handed weapons, you're able to attack even faster. [+25% attack speed]"
        },
        //193
        {
            name: "Storm of Steel", skill: 11, skillReq: 75,
            xPos: 320 / 4, yPos: 100 / 4, preReqs: [191], nextPerk: -1,
            description: "You've become very skilled in wielding two weapons at once. [dual-wield power attack damage x 1.25]"
        },
        //194
        {
            name: "Nimble Fingers", skill: 12, skillReq: 0,
            xPos: 112 / 4, yPos: 337 / 4, preReqs: [], nextPerk: 195,
            description: "You've spent some time improving your sleight of hand, which gives you substantial chances when pickpocketing."
        },
        //195
        {
            name: "Nimble Fingers", skill: 12, skillReq: 0,
            xPos: 112 / 4, yPos: 337 / 4, preReqs: [194], nextPerk: -1,
            description: "People shouldn't burden themselves with purses and kys. Luckily, you now can free them from these burdens more easily."
        },
        //196
        {
            name: "Cutpurse", skill: 12, skillReq: 25,
            xPos: 161 / 4, yPos: 242 / 4, preReqs: [194], nextPerk: -1,
            description: "As you practice with your pickpocketing, you get better at avoiding discovery."
        },
        //197
        {
            name: "Deadly Gift", skill: 12, skillReq: 25,
            xPos: 257 / 4, yPos: 275 / 4, preReqs: [196], nextPerk: -1,
            description: "Your fingers have become very nimble, and they allow you to apply poisons on your victims. Why fight if a vial of deadly venom can also do the trick?"
        },
        //198
        {
            name: "Nightly Thief", skill: 12, skillReq: 50,
            xPos: 202 / 4, yPos: 146 / 4, preReqs: [196], nextPerk: -1,
            description: "You have learned how to avoid waking up targets during your \"nightly visits\", so you can free them from their worldly burdens with ease."
        },
        //199
        {
            name: "Misdirection", skill: 12, skillReq: 75,
            xPos: 221 / 4, yPos: 60 / 4, preReqs: [198], nextPerk: -1,
            description: "Why should someone own a nice weapon or piece of jewelry when it could be yours? Now you can sometimes adjust this inequity."
        },
        //200
        {
            name: "Perfected Art", skill: 12, skillReq: 100,
            xPos: 254 / 4, yPos: 20 / 4, preReqs: [199], nextPerk: -1,
            description: "After having learned everything there is to know about thievery, your legendary skill means you almost never get caught."
        },
        //201
        {
            name: "Aedric<br>Realignment", skill: 13, skillReq: 0,
            xPos: 330 / 4, yPos: 350 / 4, preReqs: [], nextPerk: -1,
            description: "You've performed rituals to the Aedra, sacrificing part of yourself as an offering. Some Aedra may show mercy - if you haven't transgressed too severely - but your misdeeds will not be forgotten..."
        },
        //202
        {
            name: "Novice<br>Restoration", skill: 13, skillReq: 0,
            xPos: 220 / 4, yPos: 350 / 4, preReqs: [], nextPerk: -1,
            description: "You've taught yourself a few Novice level spells and learned how to cast them with decreased effort while your newfound knowledge also allows you to augment all Restoration spells."
        },
        //203
        {
            name: "Apprentice<br>Restoration", skill: 13, skillReq: 25,
            xPos: 236 / 4, yPos: 268 / 4, preReqs: [202], nextPerk: -1,
            description: "By pursuing your apprenticeship in Restoration, you've gained knowledge of Apprentice level spells which you now augment while casting them with less effort."
        },
        //204
        {
            name: "Adept<br>Restoration", skill: 13, skillReq: 50,
            xPos: 220 / 4, yPos: 160 / 4, preReqs: [203], nextPerk: -1,
            description: "By advancing further into the school of Restoration, you've gained some Adept level spells and learned how to augment and cast spells of this rank more easily."
        },
        //205
        {
            name: "Expert Restoration", skill: 13, skillReq: 75,
            xPos: 219 / 4, yPos: 88 / 4, preReqs: [204], nextPerk: -1,
            description: "You've unlocked almost every secret in the school of Restoration and you've acquired some Expert level spells. You can now cast spells of this level easier and augment them to an almost otherworldly extent."
        },
        //206
        {
            name: "Master<br>Restoration", skill: 13, skillReq: 100,
            xPos: 178 / 4, yPos: 30 / 4, preReqs: [205], nextPerk: -1,
            description: "Your knowledge of Restoration has become all-encompassing.You taught yourself a Master level spell and you can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits."
        },
        //207
        {
            name: "Benefactor's<br>Insight", skill: 13, skillReq: 25,
            xPos: 306 / 4, yPos: 295 / 4, preReqs: [202], nextPerk: -1,
            description: "You learned how to empower Restoration spells. Therefore, you are now able to overcharge their effects."
        },
        //208
        {
            name: "Focused Mind", skill: 13, skillReq: 25,
            xPos: 336 / 4, yPos: 253 / 4, preReqs: [203], nextPerk: -1,
            description: "You've learned to focus your mind. Thus, you can keep your concentration even in stressful situations and regenerate your magicka faster."
        },
        //209
        {
            name: "Power of Life", skill: 13, skillReq: 50,
            xPos: 282 / 4, yPos: 160 / 4, preReqs: [208], nextPerk: -1,
            description: "Your studies of healing magic now grant you the power of making yourself almost invulnerable for a short duration once a day."
        },
        //210
        {
            name: "Essence of Life", skill: 13, skillReq: 75,
            xPos: 350 / 4, yPos: 201 / 4, preReqs: [209], nextPerk: -1,
            description: "Your understanding of healing and how magic and life are intertwined allows you to call upon your newfound power more often."
        },
        //211
        {
            name: "Improved Wards", skill: 13, skillReq: 75,
            xPos: 100 / 4, yPos: 350 / 4, preReqs: [202], nextPerk: -1,
            description: "Your arcane wards now absorb magicka from incoming spells and have slightly improved efficiency."
        },
        //212
        {
            name: "Ward Mastery", skill: 13, skillReq: 25,
            xPos: 100 / 4, yPos: 300 / 4, preReqs: [202], nextPerk: 213,
            description: "You are more proficient with ward spells, using them more efficiently to resist magic. [ward spell cost x 0.85, +5% magic resist while having ward spell on hand]"
        },
        //213
        {
            name: "Ward Mastery", skill: 13, skillReq: 25,
            xPos: 100 / 4, yPos: 300 / 4, preReqs: [212], nextPerk: 214,
            description: "You are more proficient with ward spells, using them more efficiently to resist magic. [ward spell cost x 0.7, +10% magic resist while having ward spell on hand]"
        },
        //214
        {
            name: "Ward Mastery", skill: 13, skillReq: 25,
            xPos: 100 / 4, yPos: 300 / 4, preReqs: [213], nextPerk: -1,
            description: "You are more proficient with ward spells, using them more efficiently to resist magic. [ward spell cost x 0.5, +15% magic resist while having ward spell on hand]"
        },
        //215
        {
            name: "Improved Healing", skill: 13, skillReq: 50,
            xPos: 120 / 4, yPos: 264 / 4, preReqs: [202], nextPerk: -1,
            description: "You've gained more knowledge about restorative magics, allowing you to heal wounds more efficiently with your healing spells."
        },
        //216
        {
            name: "Respite", skill: 13, skillReq: 75,
            xPos: 35 / 4, yPos: 238 / 4, preReqs: [215], nextPerk: -1,
            description: "In addition to curing wounds, your healing spells now reinvigorate the body itself, restoring the affected subject's stamina."
        },
        //217
        {
            name: "Divine<br>Light", skill: 13, skillReq: 25,
            xPos: 100 / 4, yPos: 200 / 4, preReqs: [202], nextPerk: 218,
            description: "You are able to intensify the heat of your sun spells. Thus, they now deal increased damage."
        },
        //218
        {
            name: "Divine<br>Light", skill: 13, skillReq: 50,
            xPos: 100 / 4, yPos: 200 / 4, preReqs: [217], nextPerk: -1,
            description: "Your sun spells burn with almost otherworldly heat and smite the undead with terrifying ease."
        },
        //219
        {
            name: "Blinding Light", skill: 13, skillReq: 50,
            xPos: 60 / 4, yPos: 130 / 4, preReqs: [217], nextPerk: -1,
            description: "Your higher level sun spells are so bright that all but the most powerful foes are stunned, living and dead."
        },
        //220
        {
            name: "Mysticism", skill: 13, skillReq: 100,
            xPos: 60 / 4, yPos: 30 / 4, preReqs: [219], nextPerk: -1,
            description: "You've learned the art of weaving mystical energies into your spells, making all of them more effective against the undead and Daedra."
        },
        //221
        {
            name: "Venomancer", skill: 13, skillReq: 25,
            xPos: 180 / 4, yPos: 230 / 4, preReqs: [202], nextPerk: 222,
            description: "You are able to intensify the potency of your poison spells. Thus, they now deal increased damage."
        },
        //222
        {
            name: "Venomancer", skill: 13, skillReq: 50,
            xPos: 180 / 4, yPos: 230 / 4, preReqs: [221], nextPerk: -1,
            description: "You are able to greatly intensify the potency of your poison spells. Thus, they now deal far more damage."
        },
        //223
        {
            name: "Sap Strength", skill: 13, skillReq: 75,
            xPos: 150 / 4, yPos: 170 / 4, preReqs: [221], nextPerk: -1,
            description: "Your poison spells now sap the strength from your foes, damaging stamina as well."
        },
        //224
        {
            name: "Poison<br>Master", skill: 13, skillReq: 100,
            xPos: 120 / 4, yPos: 30 / 4, preReqs: [223], nextPerk: -1,
            description: "Your fascination for poison now grants you a natural resistance to it, while also increasing all your poison spells power even further."
        },

        //225
        {
            name: "Craftsmanship", skill: 14, skillReq: 0,
            xPos: 230 / 5, yPos: 310 / 3.5, preReqs: [], nextPerk: -1,
            description: "You've acquired the basics of craftsmanship and know how to properly use all kinds of tools. Thus, you are able to craft and improve a wide variety of common goods."
        },
        //226
        {
            name: "Advanced<br>Blacksmithing", skill: 14, skillReq: 50,
            xPos: 280 / 5, yPos: 203 / 3.5, preReqs: [225], nextPerk: -1,
            description: "You've gained quite some finesse, allowing you to craft plate armor and fine jewelry. You have also found a way to melt and crush certain gems into alchemically usable dust."
        },
        //227
        {
            name: "Arcane<br>Craftsmanship", skill: 14, skillReq: 50,
            xPos: 180 / 5, yPos: 100 / 3.5, preReqs: [226], nextPerk: -1,
            description: "After reading a tome about the ancient secrets of explosive dwemer bolts, you've learned the necessary techniques to craft bolts and arrows that will explode with elemental fury upon impact."
        },
        //228
        {
            name: "Legendary<br>Blacksmithing", skill: 14, skillReq: 100,
            xPos: 300 / 5, yPos: 100 / 3.5, preReqs: [226], nextPerk: -1,
            description: "You make steel sing songs on the anvil. Your hammer is no longer a mere tool, but a loom that weaves the fabric of myths. You can even improve the divine artifacts of Aedra and Daedra."
        },
        //229
        {
            name: "Morrowind<br>Smithing", skill: 14, skillReq: 25,
            xPos: 180 / 5, yPos: 180 / 3.5, preReqs: [225], nextPerk: 230,
            description: "As a rule, Dunmer are masters of the processing of bone of the fauna of Morrowind, but you have mastered their knowledge with the help of this compendium written by the famous blacksmith of Morrowind."
        },
        //230
        {
            name: "Morrowind<br>Smithing", skill: 14, skillReq: 50,
            xPos: 180 / 5, yPos: 180 / 3.5, preReqs: [229], nextPerk: -1,
            description: "You have honed your bone processins skills and are now able to work with such complex material as chitin. Having read the compendium to the holes, you have become a amster of this technology."
        },
        //231
        {
            name: "Advanced<br>Light Armors", skill: 14, skillReq: 25,
            xPos: 115 / 5, yPos: 220 / 3.5, preReqs: [225], nextPerk: -1,
            description: "You've been able to learn more advanced techniques, allowing you to craft and efficiently improve scale armor."
        },
        //232
        {
            name: "Elven Smithing", skill: 14, skillReq: 50,
            xPos: 48 / 5, yPos: 150 / 3.5, preReqs: [231], nextPerk: -1,
            description: "You've gained enough finesse to create and improve Elven armor and weapons by studying the Elven craftmanship carefully."
        },
        //233
        {
            name: "Glass Smithing", skill: 14, skillReq: 75,
            xPos: 70 / 5, yPos: 66 / 3.5, preReqs: [232], nextPerk: -1,
            description: "Crafting and improving Glass equipment is not for the unskilled, but having studied intensely, you aren't one of them any more."
        },
        //234
        {
            name: "Dwarven<br>Smithing", skill: 14, skillReq: 25,
            xPos: 355 / 5, yPos: 240 / 3.5, preReqs: [225], nextPerk: -1,
            description: "You've studied some long-lost schematics of dwarven equipment and acquired the secret knowledge of how to create and improve them efficiently."
        },
        //235
        {
            name: "Orcish & Nordic<br>Smithing", skill: 14, skillReq: 50,
            xPos: 400 / 5, yPos: 172 / 3.5, preReqs: [234], nextPerk: 236,
            description: "Orcish equipment is hard to craft, but you've got what it takes. Especially the schematics! You can craft and improve it easily and most efficiently. [Requires Morrowind Smithing]"
        },
        //236
        {
            name: "Orcish & Nordic<br>Smithing", skill: 14, skillReq: 55,
            xPos: 400 / 5, yPos: 172 / 3.5, preReqs: [235], nextPerk: -1,
            description: "The key mixture found in Nordic equipment is the blend of Quicksilver and Ebony ore. The combination creates some of the hardest alloys on Nirn. In addition to working with Oricsh you can now work with Nordic materials."
        },
        //237
        {
            name: "Ebony & Stahlrim<br>Smithing", skill: 14, skillReq: 75,
            xPos: 390 / 5, yPos: 68 / 3.5, preReqs: [236], nextPerk: 238,
            description: "Ebony weapons and armor - some even fail at heating the metal. But not you. Now that you've studied the related schematics, you can craft and improve ebony equipment with ease."
        },
        //238
        {
            name: "Ebony & Stahlrim<br>Smithing", skill: 14, skillReq: 85,
            xPos: 390 / 5, yPos: 68 / 3.5, preReqs: [237], nextPerk: -1,
            description: "Around the world, only a few know the secret of properly processing enchanted ice, but you were lucky, for the help you provided to Skaals, they agreed to share their secrets. You can now work with Stalhrim in addition to working with Ebony. [Requires Glass Smithing]"
        },
        //239
        {
            name: "Daedric Smithing", skill: 14, skillReq: 100,
            xPos: 440 / 5, yPos: 35 / 3.5, preReqs: [237], nextPerk: -1,
            description: "The creation of daedric weapons and armor is a secret few mortals know - still, somehow you managed to acquire this knowledge..."
        },
        //240
        {
            name: "Draconic Blacksmithing", skill: 14, skillReq: 100,
            xPos: 251 / 5, yPos: 15 / 3.5, preReqs: [-233, -238], nextPerk: -1,
            description: "The scales and bones of dragons are probably the hardest material to work with, but you've mastered even this art since you studied that old compendium."
        },
        //241
        {
            name: "Stealth", skill: 15, skillReq: 0,
            xPos: 189 / 4, yPos: 349 / 4, preReqs: [], nextPerk: 242,
            description: "You know the basics of moving silently and are harder to detect when sneaking while not wearing any heavy armor."
        },
        //242
        {
            name: "Stealth", skill: 15, skillReq: 0,
            xPos: 189 / 4, yPos: 349 / 4, preReqs: [241], nextPerk: -1,
            description: "You are even harder to detect when sneaking while not wearing any heavy armor."
        },
        //243
        {
            name: "Deft Strike", skill: 15, skillReq: 25,
            xPos: 300 / 4, yPos: 252 / 4, preReqs: [241], nextPerk: -1,
            description: "You've learned to exploit weaknesses in your foes' armor when sneak attacking with daggers, bows or swords."
        },
        //244
        {
            name: "Anatomical Lore", skill: 15, skillReq: 50,
            xPos: 308 / 4, yPos: 174 / 4, preReqs: [243], nextPerk: -1,
            description: "Newfound knowledge of humanoid anatomy allows you to slay almost any human-like creature outright with sneak attacks."
        },
        //245
        {
            name: "Advanced Anatomical Lore", skill: 15, skillReq: 75,
            xPos: 260 / 4, yPos: 134 / 4, preReqs: [244], nextPerk: -1,
            description: "Your vast knowledge of anatomy allows you to perform devastating sneak attacks on almost any target."
        },
        //246
        {
            name: "Muffled Movement", skill: 15, skillReq: 25,
            xPos: 86 / 4, yPos: 245 / 4, preReqs: [241], nextPerk: -1,
            description: "Your newfound finesse allows you to move more quietly while not wearing any heavy armor."
        },
        //247
        {
            name: "Light Steps", skill: 15, skillReq: 50,
            xPos: 129 / 4, yPos: 147 / 4, preReqs: [246], nextPerk: -1,
            description: "By distributing your weight more consciously, you're able to avoid triggering pressure plates or similar mechanisms."
        },
        //248
        {
            name: "Acrobatics", skill: 15, skillReq: 75,
            xPos: 227 / 4, yPos: 79 / 4, preReqs: [247], nextPerk: -1,
            description: "Your improved balance allows you to silently roll forward, avoid getting knocked down except through magic and move even more quietly."
        },
        //249
        {
            name: "Shadowrunner", skill: 15, skillReq: 100,
            xPos: 324 / 4, yPos: 45 / 4, preReqs: [248], nextPerk: -1,
            description: "There's almost nothing you cannot evade. You are even harder to detect, more silent and all falling damage is decreased."
        },
        //250
        {
            name: "Haggling", skill: 16, skillReq: 0,
            xPos: 118 / 4, yPos: 335 / 4, preReqs: [], nextPerk: -1,
            description: "You've learned how to deal with Skyrim's greedy merchants and how to haggle for better prices."
        },
        //251
        {
            name: "Merchant", skill: 16, skillReq: 50,
            xPos: 98 / 4, yPos: 271 / 4, preReqs: [250], nextPerk: -1,
            description: "Your trading skills are good enough to sell almost anything to any merchant willing to trade with you, and you can invest some of your gold with a shopkeeper to increase his available gold permanently."
        },
        //252
        {
            name: "Fencing", skill: 16, skillReq: 100,
            xPos: 141 / 4, yPos: 246 / 4, preReqs: [251], nextPerk: -1,
            description: "You've become so persuasive that you could make almost anyone believe that your goods are of a legal origin."
        },
        //253
        {
            name: "Silver Tongue", skill: 16, skillReq: 25,
            xPos: 48 / 4, yPos: 333 / 4, preReqs: [250], nextPerk: -1,
            description: "You've spent quite some time improving your rhetorical skills and are now able to greatly influence any conversation and to fascinate the opposite gender. You also get better offers at respective vendors."
        },
        //254
        {
            name: "Leadership", skill: 16, skillReq: 75,
            xPos: 118 / 4, yPos: 174 / 4, preReqs: [253], nextPerk: -1,
            description: "Your rhetorical skill makes you the perfect leader. By inspiring all those who fight by your side, you encourage your followers to always push their abilities to their very limits."
        },
        //255
        {
            name: "Masquerade", skill: 16, skillReq: 50,
            xPos: 102 / 4, yPos: 93 / 4, preReqs: [253], nextPerk: 256,
            description: "You've become proficient at acting, and with the right equipment you can now disguise yourself, although sometimes people can still tell that you are not truly one of them."
        },
        //256
        {
            name: "Masquerade", skill: 16, skillReq: 100,
            xPos: 102 / 4, yPos: 93 / 4, preReqs: [255], nextPerk: -1,
            description: "There is no role you cannot play, and your acting is so believable that there is almost no way for others to see through your disguises."
        },
        //257
        {
            name: "Lore of the Thu'um", skill: 16, skillReq: 0,
            xPos: 340 / 4, yPos: 338 / 4, preReqs: [], nextPerk: -1,
            description: "You've been studying the lore and ancient script of dragons and the Thu'um. Thus, you can shout more often."
        },
        //258
        {
            name: "Destructive Urge", skill: 16, skillReq: 0,
            xPos: 250 / 4, yPos: 320 / 4, preReqs: [257], nextPerk: -1,
            description: "The horrors that the Thu'um can inflict are etched into your mind just as you have seen them etched into stone. Your Thu'um will wreak even greater havoc among your unfortunate foes."
        },
        //259
        {
            name: "Indomitable<br>Force", skill: 16, skillReq: 0,
            xPos: 265 / 4, yPos: 251 / 4, preReqs: [257], nextPerk: -1,
            description: "You know what it means to be called Ysmir, Dragon of the North. As you have withstood the test of Thu'um, so you will withstand the Thu'um of others."
        },
        //260
        {
            name: "Spiritual<br>Equilibrium", skill: 16, skillReq: 0,
            xPos: 273 / 4, yPos: 160 / 4, preReqs: [257], nextPerk: -1,
            description: "You have been guided in meditating on the Thu'um. Now your shouts linger, lasting longer than they did before."
        },
        //261
        {
            name: "The Way of<br>the Voice", skill: 16, skillReq: 0,
            xPos: 296 / 4, yPos: 96 / 4, preReqs: [257], nextPerk: -1,
            description: "You've meditated thoroughly, and acquired vast insights into the Way of the Voice. Thus, you can call upon the power of your Thu'um rapidly once each day."
        },
        //262
        {
            name: "Tongue's<br>Insight", skill: 16, skillReq: 0,
            xPos: 349 / 4, yPos: 71 / 4, preReqs: [257], nextPerk: -1,
            description: "You've spent time meditating on the Way of the Voice, unearthing more knowledge and gaining valuable insights. Thus, you can harness the might of yet another word of power."
        },
        //263
        {
            name: "Great Weapon Mastery", skill: 17, skillReq: 0,
            xPos: 200 / 4, yPos: 362 / 4, preReqs: [], nextPerk: 264,
            description: "Your improved fighting techniques increase your damage dealt with two-handed weapons. [damage x 1.2, -50% weapon weight penalties]"
        },
        //264
        {
            name: "Great Weapon Mastery", skill: 17, skillReq: 0,
            xPos: 200 / 4, yPos: 362 / 4, preReqs: [263], nextPerk: -1,
            description: "Your improved fighting techniques increase your damage dealt with two-handed weapons even more. [damage x 1.4, -50% weapon weight penalties]"
        },
        //265
        {
            name: "Barbaric Might", skill: 17, skillReq: 20,
            xPos: 200 / 4, yPos: 275 / 4, preReqs: [263], nextPerk: -1,
            description: "Your power attacks become mighty blows that will penetrate armor and are less tiring. [-50% power attack stamina cost, +5 armor penetration]"
        },
        //266
        {
            name: "Battle Axe Focus", skill: 17, skillReq: 25,
            xPos: 100 / 4, yPos: 260 / 4, preReqs: [265], nextPerk: 267,
            description: "You've become familiar with battle axes, thereby increasing their damage and armor penetration. [damage x 1.1, +10 armor penetration]"
        },
        //267
        {
            name: "Battle Axe Focus", skill: 17, skillReq: 50,
            xPos: 100 / 4, yPos: 260 / 4, preReqs: [266], nextPerk: 268,
            description: "You've become an advanced battle axe fighter, further increasing their damage and armor penetration. [damage x 1.2, +20 armor penetration]"
        },
        //268
        {
            name: "Battle Axe Focus", skill: 17, skillReq: 75,
            xPos: 100 / 4, yPos: 260 / 4, preReqs: [267], nextPerk: -1,
            description: "You've become a master of battle axe combat, allowing you to perform devastating attacks with them. [damage x 1.3, +30 armor penetration]"
        },
        //269
        {
            name: "Battlestaff Focus", skill: 17, skillReq: 25,
            xPos: 120 / 4, yPos: 230 / 4, preReqs: [265], nextPerk: 270,
            description: "You've learned the basics of battlestaff combat, allowing you to increase your attack rate with them slightly. [+8% attack speed with battlestaves, +7 armor penetration]"
        },
        //270
        {
            name: "Battlestaff Focus", skill: 17, skillReq: 50,
            xPos: 120 / 4, yPos: 230 / 4, preReqs: [269], nextPerk: 271,
            description: "You've acquired the advanced techniques of battlestaff combat, further increasing your attack rate with them. [+16% attack speed with battlestaves, +14 armor penetration]"
        },
        //271
        {
            name: "Battlestaff Focus", skill: 17, skillReq: 75,
            xPos: 120 / 4, yPos: 230 / 4, preReqs: [270], nextPerk: -1,
            description: "You're a master of battlestaff combat, making your swings even faster. [+24% attack speed with battlestaves, +21 armor penetration]"
        },
        //272
        {
            name: "Greatsword Focus", skill: 17, skillReq: 25,
            xPos: 280 / 4, yPos: 230 / 4, preReqs: [265], nextPerk: 273,
            description: "You've learned the basics of greatsword combat, allowing you to increase your attack rate with them slightly. [+8% attack speed with greatswords, +7 armor penetration]"
        },
        //273
        {
            name: "Greatsword Focus", skill: 17, skillReq: 50,
            xPos: 280 / 4, yPos: 230 / 4, preReqs: [272], nextPerk: 274,
            description: "You've acquired the advanced techniques of greatsword combat, further increasing your attack rate with them. [+16% attack speed with greatswords, +14 armor penetration]"
        },
        //274
        {
            name: "Greatsword Focus", skill: 17, skillReq: 75,
            xPos: 280 / 4, yPos: 230 / 4, preReqs: [273], nextPerk: -1,
            description: "You're a master of greatsword combat, making your swings even faster. [+24% attack speed with greatswords, +21 armor penetration]"
        },
        //275
        {
            name: "Warhammer Focus", skill: 17, skillReq: 25,
            xPos: 300 / 4, yPos: 260 / 4, preReqs: [265], nextPerk: 276,
            description: "You've become familiar with warhammers, enabling you to partly use their ability to penetrate your foes' armor. [power attack damage x 1.05, +15 armor penetration]"
        },
        //276
        {
            name: "Warhammer Focus", skill: 17, skillReq: 50,
            xPos: 300 / 4, yPos: 260 / 4, preReqs: [275], nextPerk: 277,
            description: "You've become an advanced warhammer fighter, further increasing your ability to penetrate armor with them. [power attack damage x 1.1, +30 armor penetration]"
        },
        //277
        {
            name: "Warhammer Focus", skill: 17, skillReq: 75,
            xPos: 300 / 4, yPos: 260 / 4, preReqs: [276], nextPerk: -1,
            description: "You've become a masterly warhammer fighter, rendering armor almost useless. [power attack damage x 1.15, +45 armor penetration]"
        },
        //278
        {
            name: "Devastating<br>Charge", skill: 17, skillReq: 50,
            xPos: 150 / 4, yPos: 183 / 4, preReqs: [265], nextPerk: -1,
            description: "You've learned to perform a leaping power attack while sprinting, reducing your enemies to smithereens. [unlocks sprinting power attack, -25% weapon weight penalties]"
        },
        //279
        {
            name: "Devastating<br>Strike", skill: 17, skillReq: 50,
            xPos: 250 / 4, yPos: 183 / 4, preReqs: [265], nextPerk: -1,
            description: "Your two-handed combat style has improved so much that all power attacks have become devastating. [power attack damage x 1.25]"
        },
        //280
        {
            name: "Cleave", skill: 17, skillReq: 75,
            xPos: 200 / 4, yPos: 91 / 4, preReqs: [278, 279], nextPerk: -1,
            description: "Your power attacks are truly devastating and you can cut down multiple foes with a single sweeping blow. [sideways power attack can hit multiple targets]"
        },
        //281
        {
            name: "Devastating Cleave", skill: 17, skillReq: 100,
            xPos: 200 / 4, yPos: 50 / 4, preReqs: [280], nextPerk: -1,
            description: "Putting your whole weight behind your swing, your sidewards power attacks are now powerful enough to knock down foes. [sideways power attacks can knock down]"
        },
        //282
        {
            name: "Mighty Strike", skill: 17, skillReq: 100,
            xPos: 200 / 4, yPos: 10 / 4, preReqs: [281], nextPerk: -1,
            description: "You can kill almost any foe with a single strike of your two-hander, as your blows even fell giants with ease. [damage x 1.25]"
        },
        //SKILLS AND FEATS
        //283
        {
            name: "Drunken<br>Combat", skill: 0, skillReq: 0,
            xPos: 40 / 4, yPos: 300 / 4, preReqs: [], nextPerk: 284,
            description: "Alchohol pumps you up, boosting your melee combat abilities. Also gain resistance to poison at all times. [while on alcohol, +1 stamina regeneration, +3% movement speed, melee damage x 1.03, +10% passive poison resist]"
        },
        //284
        {
            name: "Drunken<br>Combat", skill: 0, skillReq: 0,
            xPos: 40 / 4, yPos: 300 / 4, preReqs: [283], nextPerk: 285,
            description: "Alchohol pumps you up, boosting your melee combat abilities. Also gain resistance to poison at all times. [while on alcohol, +1.5 stamina regeneration, +6% movement speed, melee damage x 1.06, +20% passive poison resist]"
        },
        //285
        {
            name: "Drunken<br>Combat", skill: 0, skillReq: 0,
            xPos: 40 / 4, yPos: 300 / 4, preReqs: [284], nextPerk: -1,
            description: "Alchohol pumps you up, boosting your melee combat abilities. Also gain resistance to poison at all times. [while on alcohol, +2 stamina regeneration, +10% movement speed, melee damage x 1.1, +30% passive poison resist]"
        },
        //286
        {
            name: "Unskilled<br>Spellcasting", skill: 1, skillReq: 0,
            xPos: 50 / 4, yPos: 320 / 4, preReqs: [], nextPerk: 287,
            description: "Having learned over the shoulders, you can cast some spells that you are not very skilled at. [spell cost x 0.5, spell magnitude and duration x (1 + 0.005 x skill level), for spells up to Novice tier]"
        },
        //287
        {
            name: "Unskilled<br>Spellcasting", skill: 1, skillReq: 0,
            xPos: 50 / 4, yPos: 320 / 4, preReqs: [286], nextPerk: 288,
            description: "Having learned over the shoulders, you can cast some spells that you are not very skilled at. [spell cost x 0.5, spell magnitude and duration x (1 + 0.005 x skill level), for spells up to Apprentice tier]"
        },
        //288
        {
            name: "Unskilled<br>Spellcasting", skill: 1, skillReq: 0,
            xPos: 50 / 4, yPos: 320 / 4, preReqs: [287], nextPerk: -1,
            description: "Having learned over the shoulders, you can cast some spells that you are not very skilled at. [spell cost x 0.5, spell magnitude and duration x (1 + 0.005 x skill level), for spells up to Adept tier]"
        },
        //289
        {
            name: "Willpower", skill: 1, skillReq: 0,
            xPos: 320 / 4, yPos: 300 / 4, preReqs: [], nextPerk: 290,
            description: "Your strong willpower provides resistance to harmful magic. [+5% magic resist, when Magic Resistance perk is not taken]"
        },
        //290
        {
            name: "Willpower", skill: 1, skillReq: 0,
            xPos: 320 / 4, yPos: 300 / 4, preReqs: [289], nextPerk: 291,
            description: "Your strong willpower provides resistance to harmful magic. [+10% magic resist, when Magic Resistance perk is not taken]"
        },
        //291
        {
            name: "Willpower", skill: 1, skillReq: 0,
            xPos: 320 / 4, yPos: 300 / 4, preReqs: [290], nextPerk: -1,
            description: "Your strong willpower provides resistance to harmful magic. [+15% magic resist, when Magic Resistance perk is not taken]"
        },
        //292
        {
            name: "Metamagic", skill: 1, skillReq: 0,
            xPos: 320 / 4, yPos: 340 / 4, preReqs: [], nextPerk: 293,
            description: "By focusing on your Magicka, you can alter the effects of your spells in cost of more Magicka used to cast them. [Overpowered (magnitude), Extended (duration), Distant (range), Silenced (noise)]"
        },
        //293
        {
            name: "Metamagic", skill: 1, skillReq: 0,
            xPos: 320 / 4, yPos: 340 / 4, preReqs: [292], nextPerk: 294,
            description: "By focusing on your Magicka, you can alter the effects of your spells in cost of more Magicka used to cast them. [Overpowered (magnitude), Extended (duration), Distant (range), Silenced (noise)]"
        },
        //294
        {
            name: "Metamagic", skill: 1, skillReq: 0,
            xPos: 320 / 4, yPos: 340 / 4, preReqs: [293], nextPerk: -1,
            description: "By focusing on your Magicka, you can alter the effects of your spells in cost of more Magicka used to cast them. [Overpowered (magnitude), Extended (duration), Distant (range), Silenced (noise)]"
        },
        //295
        {
            name: "Torch<br>Combat", skill: 2, skillReq: 0,
            xPos: 330 / 4, yPos: 300 / 4, preReqs: [], nextPerk: 296,
            description: "You can use your torch more effectively in combat, causing stronger burns and blocking frost damage. [+2 light fire damage, +7 power bash fire damage, power bash staggers, +5% frost resist with torch equipped]"
        },
        //296
        {
            name: "Torch<br>Combat", skill: 2, skillReq: 0,
            xPos: 330 / 4, yPos: 300 / 4, preReqs: [295], nextPerk: 297,
            description: "You can use your torch more effectively in combat. Torch bashes do more damage and can put enemy off balance better."
        },
        //297
        {
            name: "Torch<br>Combat", skill: 2, skillReq: 0,
            xPos: 330 / 4, yPos: 300 / 4, preReqs: [296], nextPerk: -1,
            description: "You can use your torch more effectively in combat. Torch bashes do more damage and can put enemy off balance better."
        },
        //298
        {
            name: "Staff<br>Channeling", skill: 5, skillReq: 0,
            xPos: 320 / 4, yPos: 340 / 4, preReqs: [], nextPerk: 299,
            description: "You can use your magic staff to channel your own spells, making them more powerful and more efficient. [while having staff equipped, spell magnitude and duration x 1.05, spell cost x 0.9, for spells casted by yourself]"
        },
        //299
        {
            name: "Staff<br>Channeling", skill: 5, skillReq: 0,
            xPos: 320 / 4, yPos: 340 / 4, preReqs: [298], nextPerk: 300,
            description: "You can use your magic staff to channel your own spells, making them more powerful and more efficient. [while having staff equipped, spell magnitude and duration x 1.1, spell cost x 0.8, for spells casted by yourself]"
        },
        //300
        {
            name: "Staff<br>Channeling", skill: 5, skillReq: 0,
            xPos: 320 / 4, yPos: 340 / 4, preReqs: [299], nextPerk: -1,
            description: "You can use your magic staff to channel your own spells, making them more powerful and more efficient. [while having staff equipped, spell magnitude and duration x 1.15, spell cost x 0.7, for spells casted by yourself]"
        },
        //301
        {
            name: "Hunter", skill: 10, skillReq: 0,
            xPos: 70 / 4, yPos: 340 / 4, preReqs: [], nextPerk: 302,
            description: "You are more adapted to wildlife, and better understand it's inhabitants. [against animals, physical damage dealt x 1.1, physical damage taken x 0.9, +10% passive poison and disease resist]"
        },
        //302
        {
            name: "Hunter", skill: 10, skillReq: 0,
            xPos: 70 / 4, yPos: 340 / 4, preReqs: [301], nextPerk: 303,
            description: "You are more adapted to wildlife, and better understand it's inhabitants. [against animals, physical damage dealt x 1.2, physical damage taken x 0.8, +20% passive poison and disease resist]"
        },
        //303
        {
            name: "Hunter", skill: 10, skillReq: 0,
            xPos: 70 / 4, yPos: 340 / 4, preReqs: [302], nextPerk: -1,
            description: "You are more adapted to wildlife, and better understand it's inhabitants. [against animals, physical damage dealt x 1.3, physical damage taken x 0.7, +30% passive poison and disease resist]"
        },
        //304
        {
            name: "Bow Strike", skill: 10, skillReq: 0,
            xPos: 70 / 4, yPos: 280 / 4, preReqs: [], nextPerk: 305,
            description: "You can use your bow or crossbow as a melee weapon in close combat. [+15 bash damage, bash causes stagger, -3 bash stamina cost]"
        },
        //305
        {
            name: "Bow Strike", skill: 10, skillReq: 0,
            xPos: 70 / 4, yPos: 280 / 4, preReqs: [304], nextPerk: 306,
            description: "You can use your bow or crossbow as a melee weapon in close combat. [+30 bash damage, bash causes stagger, -6 bash stamina cost]"
        },
        //306
        {
            name: "Bow Strike", skill: 10, skillReq: 0,
            xPos: 70 / 4, yPos: 280 / 4, preReqs: [305], nextPerk: -1,
            description: "You can use your bow or crossbow as a melee weapon in close combat. [+45 bash damage, bash causes stagger, -10 bash stamina cost]"
        },
        //307
        {
            name: "Commander", skill: 16, skillReq: 0,
            xPos: 160 / 4, yPos: 60 / 4, preReqs: [], nextPerk: 308,
            description: "Your knowledge in combat tactics allow you to effectively lead your allies in combat. [nearby allies get +10% fortify skill, +3 unarmed damage, +50 magicka & stamina, +25% magicka & stamina regeneration]"
        },
        //308
        {
            name: "Commander", skill: 16, skillReq: 0,
            xPos: 160 / 4, yPos: 60 / 4, preReqs: [307], nextPerk: 309,
            description: "Your knowledge in combat tactics allow you to effectively lead your allies in combat. [nearby allies get +20 % fortify skill, +6 unarmed damage, +100 magicka & stamina, +50% magicka & stamina regeneration]"
        },
        //309
        {
            name: "Commander", skill: 16, skillReq: 0,
            xPos: 160 / 4, yPos: 60 / 4, preReqs: [308], nextPerk: -1,
            description: "Your knowledge in combat tactics allow you to effectively lead your allies in combat. [nearby allies get +30 % fortify skill, +10 unarmed damage, +150 magicka & stamina, +75% magicka & stamina regeneration]"
        },
        //310
        {
            name: "Shout Focus", skill: 16, skillReq: 0,
            xPos: 260 / 4, yPos: 60 / 4, preReqs: [], nextPerk: 311,
            description: "You meditate on the Thu'um for deeper understanding of the Words of Power, making them more powerful. [shout magnitude and duration x 1.05, -10% shout cooldown]"
        },
        //311
        {
            name: "Shout Focus", skill: 16, skillReq: 0,
            xPos: 260 / 4, yPos: 60 / 4, preReqs: [310], nextPerk: 312,
            description: "You meditate on the Thu'um for deeper understanding of the Words of Power, making them more powerful. [shout magnitude and duration x 1.1, -20% shout cooldown]"
        },
        //312
        {
            name: "Shout Focus", skill: 16, skillReq: 0,
            xPos: 260 / 4, yPos: 60 / 4, preReqs: [311], nextPerk: -1,
            description: "You meditate on the Thu'um for deeper understanding of the Words of Power, making them more powerful. [shout magnitude and duration x 1.15, -30% shout cooldown]"
        },
    ]
};

addPerkData(requiem402PerkData);
