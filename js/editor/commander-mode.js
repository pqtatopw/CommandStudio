define( [ "codemirror", "codemirror/addon/mode/simple" ], function( CodeMirror ) {

  CodeMirror.defineSimpleMode( "commander", {
    start: [
      // Escaped characters
      { regex: /`.?/, token: "hr" },

      // Commander specific
      { regex: /(?:chain|include)\b/, token: "header", sol: true },
      { regex: /(\s*)(default|def|invert|marker|var|void)\b/, token: [ "quote", "header" ], sol: true },
      { regex: /(\s+)([01irc\?!]+)(:)/, token: [ null, "quote", "operator" ], sol: true },

      // Commander specific
      { regex: /\$\w+/, token: "variable" },
      { regex: /\^\w+/, token: "variable-2" },
      { regex: /\=\>.*/, token: "tag"},
      { regex: /\/\/.*/, token: "comment" },
      { regex: /\/\*/, token: "comment", next: "comment" },

      // Minecraft Specific
      { regex: /@[aeprs]\b/, token: "string" },
      { regex: /(?:area_effect_cloud|armor_stand|arrow|bat|blaze|boat|cave_spider|chest_minecart|chicken|commandblock_minecart|cow|creeper|donkey|dragon_fireball|egg|elder_guardian|ender_crystal|ender_dragon|ender_pearl|enderman|endermite|evocation_fangs|evocation_illager|eye_of_ender_signal|falling_block|fireball|fireworks_rocket|furnace_minecart|ghast|giant|guardian|hopper_minecart|horse|husk|illusion_illager|item|item_frame|leash_knot|lightning_bolt|llama|llama_spit|magma_cube|minecart|mooshroom|mule|ocelot|painting|parrot|pig|polar_bear|potion|rabbit|sheep|shulker|shulker_bullet|silverfish|skeleton|skeleton_horse|slime|small_fireball|snowball|snowman|spawner_minecart|spectral_arrow|spider|squid|stray|tnt|tnt_minecart|vex|villager|villager_golem|vindication_illager|witch|wither|wither_skeleton|wither_skull|wolf|xp_bottle|xp_orb|zombie|zombie_horse|zombie_pigman|zombie_villager)\b/,
        token: "property" },
      { regex: /\/?(?:achievement|advancement|ban|ban-ip|banlist|blockdata|clear|clone|debug|defaultgamemode|deop|difficulty|effect|enchant|entitydata|execute|fill|function|gamemode|gamerule|give|help|kick|kill|list|locate|me|msg|op|pardon|pardon-ip|particle|playsound|recipe|reload|replaceitem|save-all|save-off|save-on|say|scoreboard|seed|setblock|setidletimeout|setworldspawn|spawnpoint|spreadplayers|stats|stop|stopsound|summon|teleport|tell|tellraw|testfor|testforblock|testforblocks|time|title|toggledownfall|tp|trigger|w|weather|whitelist|worldborder|xp)\b/i,
        token: "keyword" },

      // Numbers
      { regex: /(?:~?-?(?:\.\d+|\d+\.?\d*)[bfs]?|~)/, token: "number" },

      // Ponctuation
      { regex: /[\[\]{}\(\)]/, token: "bracket" },
      { regex: /[\+-/*=%;:]/, token: "operator" },
      // { regex: /:$/, token: "operator", indent: true },

      // Pass
      { regex: /(?:\w+)/ }
    ],
    comment: [
    { regex: /.*?\*\//, token: "comment", next: "start" },
    { regex: /.*/, token: "comment" }
    ],
    meta: {
      dontIndentStates: [ "comment" ],
      lineComment: "//"
    }
  } );

} );
