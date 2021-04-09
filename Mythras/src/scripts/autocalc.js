// ##### Auto Calc #####
// STR Auto Calc
var calc_str = function() {
    getAttrs(["str_base", "str_training", "str_ageing", "str_other", "str_temp"], function(v) {
        setAttrs({str: parseInt(v.str_base) + parseInt(v.str_training) + parseInt(v.str_ageing) + parseInt(v.str_other) + parseInt(v.str_temp)});
    });
};
on("change:str_base change:str_training change:str_ageing change:str_other change:str_temp", function() { calc_str(); });

// CON Auto Calc
var calc_con = function() {
    getAttrs(["con_base", "con_training", "con_ageing", "con_other", "con_temp"], function(v) {
        setAttrs({con: parseInt(v.con_base) + parseInt(v.con_training) + parseInt(v.con_ageing) + parseInt(v.con_other) + parseInt(v.con_temp)});
    });
};
on("change:con_base change:con_training change:con_ageing change:con_other change:con_temp", function() { calc_con(); });

// SIZ Auto Calc
var calc_siz = function() {
    getAttrs(["siz_base", "siz_other", "siz_temp"], function(v) {
        setAttrs({siz: parseInt(v.siz_base) + parseInt(v.siz_other) + parseInt(v.siz_temp)});
    });
};
on("change:siz_base change:siz_other change:siz_temp", function() { calc_siz(); });

// DEX Auto Calc
var calc_dex = function() {
    getAttrs(["dex_base", "dex_training", "dex_ageing", "dex_other", "dex_temp"], function(v) {
        setAttrs({dex: parseInt(v.dex_base) + parseInt(v.dex_training) + parseInt(v.dex_ageing) + parseInt(v.dex_other) + parseInt(v.dex_temp)});
    });
};
on("change:dex_base change:dex_training change:dex_ageing change:dex_other change:dex_temp", function() { calc_dex(); });

// INT Auto Calc
var calc_int = function() {
    getAttrs(["int_base", "int_training", "int_ageing", "int_other", "int_temp"], function(v) {
        setAttrs({int: parseInt(v.int_base) + parseInt(v.int_training) + parseInt(v.int_ageing) + parseInt(v.int_other) + parseInt(v.int_temp)});
    });
};
on("change:int_base change:int_training change:int_ageing change:int_other change:int_temp", function() { calc_int(); });

// POW Auto Calc
var calc_pow = function() {
    getAttrs(["pow_base", "pow_training", "pow_ageing", "pow_other", "pow_temp"], function(v) {
        setAttrs({pow: parseInt(v.pow_base) + parseInt(v.pow_training) + parseInt(v.pow_ageing) + parseInt(v.pow_other) + parseInt(v.pow_temp)});
    });
};
on("change:pow_base change:pow_training change:pow_ageing change:pow_other change:pow_temp", function() { calc_pow(); });

// CHA Auto Calc
var calc_cha = function() {
    getAttrs(["cha_base", "cha_training", "cha_ageing", "cha_other", "cha_temp"], function(v) {
        setAttrs({cha: parseInt(v.cha_base) + parseInt(v.cha_training) + parseInt(v.cha_ageing) + parseInt(v.cha_other) + parseInt(v.cha_temp)});
    });
};
on("change:cha_base change:cha_training change:cha_ageing change:cha_other change:cha_temp", function() { calc_cha(); });

// Composure Auto Calc
var calc_composure = function() {
    getAttrs(["pow", "composure", "composure_max", "composure_other", "composure_temp"], function(v) {
        var base_value = Math.ceil(parseInt(v.pow)/3);
        var new_composure_max = base_value + parseInt(v.composure_other) + parseInt(v.composure_temp);
        var diff_composure_max = new_composure_max - parseInt(v.composure_max);
        setAttrs({
            composure_base: base_value,
            composure_max: new_composure_max,
            composure: parseInt(v.composure) + diff_composure_max
        });
    });
}
on("change:pow change:composure_other change:composure_temp", function() { calc_composure(); });

// Integrity Auto Calc
var calc_integrity = function() {
    getAttrs(["cha", "integrity", "integrity_max", "integrity_other", "integrity_temp"], function(v) {
        var base_value = Math.ceil(parseInt(v.cha)/3);
        var new_integrity_max = base_value + parseInt(v.integrity_other) + parseInt(v.integrity_temp);
        var diff_integrity_max = new_integrity_max - parseInt(v.integrity_max);
        setAttrs({
            integrity_base: base_value,
            integrity_max: new_integrity_max,
            integrity: parseInt(v.integrity) + diff_integrity_max
        });
    });
}
on("change:cha change:integrity_other change:integrity_temp", function() { calc_integrity(); });

// Resolve Auto Calc
var calc_resolve = function() {
    getAttrs(["int", "resolve", "resolve_max", "resolve_other", "resolve_temp"], function(v) {
        var base_value = Math.ceil(parseInt(v.int)/3);
        var new_resolve_max = base_value + parseInt(v.resolve_other) + parseInt(v.resolve_temp);
        var diff_resolve_max = new_resolve_max - parseInt(v.resolve_max);
        setAttrs({
            resolve_base: base_value,
            resolve_max: new_resolve_max,
            resolve: parseInt(v.resolve) + diff_resolve_max
        });
    });
}
on("change:int change:resolve_other change:resolve_temp", function() { calc_resolve(); });

// Action Points Auto Calc
var calc_action_points = function() {
    getAttrs(["dex", "int", "pow", "action_points_temp", "action_points_other", "action_points_add_one", "fatigue", "spirit", "spirit_ap", "spirit_ap_max", "action_points_calc", "action_points", "action_points_max", "action_points_mook1", "action_points_mook2", "action_points_mook3", "action_points_mook4", "action_points_mook5", "action_points_mook6", "action_points_mook7", "action_points_mook8", "action_points_mook9", "action_points_mook10"], function(v) {
        if (v["action_points_calc"] == "set_2") {
            var base_value = 2;
            var spirit_ap_base = 2;
        } else if (v["action_points_calc"] == "set_3") {
            var base_value = 3;
            var spirit_ap_base = 3;
        } else {
            if(v["spirit"] == "1") {
                var spirit_ap_base = Math.ceil((parseInt(v.int) + parseInt(v.pow)) / 12);
                var base_value = spirit_ap_base;
            } else {
                var base_value = Math.ceil((parseInt(v.int) + parseInt(v.dex)) / 12);
                var spirit_ap_base = Math.ceil((parseInt(v.int) + parseInt(v.pow)) / 12);
            }
        }

        var new_spirit_ap = spirit_ap_base + parseInt(v.action_points_add_one) + parseInt(v.action_points_temp) + parseInt(v.action_points_other);
        var fatigue = parseInt(v.fatigue);
        if (fatigue > 5) {
            var action_points_fatigue = getTranslationByKey("no-penalty-u");
            var new_action_points_max = base_value + parseInt(v.action_points_add_one) + parseInt(v.action_points_temp) + parseInt(v.action_points_other);
        } else if (fatigue == 5) {
            var action_points_fatigue = "-1";
            var new_action_points_max = base_value + parseInt(v.action_points_add_one) + parseInt(v.action_points_temp) + parseInt(v.action_points_other) - 1;
        } else if (fatigue == 4) {
            var action_points_fatigue = "-2";
            var new_action_points_max = base_value + parseInt(v.action_points_add_one) + parseInt(v.action_points_temp) + parseInt(v.action_points_other) - 2;
        } else if (fatigue == 3) {
            var action_points_fatigue = "-3";
            var new_action_points_max = base_value + parseInt(v.action_points_add_one) + parseInt(v.action_points_temp) + parseInt(v.action_points_other) - 3;
        } else {
            var action_points_fatigue = getTranslationByKey("no-activities-possible-u");
            var new_action_points_max = 0;
        }

        if (new_action_points_max < 0) {
            new_action_points_max = 0;
        }

        if (new_spirit_ap < 0) {
            new_spirit_ap = 0;
        }

        diff_action_points_max = new_action_points_max - parseInt(v.action_points_max);
        diff_spirit_ap = new_spirit_ap - parseInt(v.spirit_ap_max);
        setAttrs({
            action_points_max: new_action_points_max,
            action_points_fatigue: action_points_fatigue,
            action_points_base: base_value,
            action_points: parseInt(v.action_points) + diff_action_points_max,
            action_points_mook1: parseInt(v.action_points_mook1) + diff_action_points_max,
            action_points_mook2: parseInt(v.action_points_mook2) + diff_action_points_max,
            action_points_mook3: parseInt(v.action_points_mook3) + diff_action_points_max,
            action_points_mook4: parseInt(v.action_points_mook4) + diff_action_points_max,
            action_points_mook5: parseInt(v.action_points_mook5) + diff_action_points_max,
            action_points_mook6: parseInt(v.action_points_mook6) + diff_action_points_max,
            action_points_mook7: parseInt(v.action_points_mook7) + diff_action_points_max,
            action_points_mook8: parseInt(v.action_points_mook8) + diff_action_points_max,
            action_points_mook9: parseInt(v.action_points_mook9) + diff_action_points_max,
            action_points_mook10: parseInt(v.action_points_mook10) + diff_action_points_max,
            spirit_ap: parseInt(v.spirit_ap) + diff_spirit_ap,
            spirit_ap_max: new_spirit_ap,
        });
    });
};
on("change:dex change:int change:pow change:action_points_temp change:action_points_add_one change:action_points_other change:fatigue change:spirit change:action_points_calc", function() { calc_action_points(); });

// Confidence Auto Calc
var calc_confidence = function() {
    getAttrs(["willpower_experience", "willpower_other", "willpower_temp", "pow"], function(v) {
        var pow = parseInt(v.pow);
        var willpower = pow + pow + parseInt(v.willpower_experience) + parseInt(v.willpower_other) + parseInt(v.willpower_temp);

        setAttrs({
            confidence: Math.floor(willpower/20)
        });
    });
};
on("change:willpower_experience change:willpower_other change:willpower_temp change:pow", function() { calc_confidence(); });

// Spirit Damage Auto Calc + spirit_pow_max
var calc_spirit_damage = function() {
    getAttrs(["willpower_experience", "willpower_other", "willpower_temp", "binding_learned", "binding_base", "binding_experience", "binding_other", "binding_temp", "pow", "cha"], function(values) {
        var pow = parseInt(values.pow);
        var cha = parseInt(values.cha);
        var binding = (parseInt(values.binding_learned) * (pow + cha)) + parseInt(values.binding_experience) + parseInt(values.binding_other) + parseInt(values.binding_temp);
        var willpower = pow + pow + parseInt(values.willpower_experience) + parseInt(values.willpower_other) + parseInt(values.willpower_temp);
        if ((willpower/2) > binding) {
            var spirit_damage_table_value = Math.ceil((willpower/2)/20);
        } else {
            var spirit_damage_table_value = Math.ceil(binding/20);
        }

        var spirit_damage_result = '0';
        if (spirit_damage_table_value == 1) {
            spirit_damage_result = '1d2';
        } else if (spirit_damage_table_value == 2) {
            spirit_damage_result = '1d4';
        } else if (spirit_damage_table_value == 3) {
            spirit_damage_result = '1d6';
        } else if (spirit_damage_table_value == 4) {
            spirit_damage_result = '1d8';
        } else if (spirit_damage_table_value == 5) {
            spirit_damage_result = '1d10';
        } else if (spirit_damage_table_value == 6) {
            spirit_damage_result = '2d6';
        } else if (spirit_damage_table_value == 7) {
            spirit_damage_result = '1d8+1d6';
        } else if (spirit_damage_table_value == 8) {
            spirit_damage_result = '2d8';
        } else if (spirit_damage_table_value == 9) {
            spirit_damage_result = '1d10+1d8';
        } else if (spirit_damage_table_value == 10) {
            spirit_damage_result = '2d10';
        } else if (spirit_damage_table_value == 11) {
            spirit_damage_result = '2d10+1d2';
        } else if (spirit_damage_table_value == 12) {
            spirit_damage_result = '2d10+1d4';
        } else if (spirit_damage_table_value == 13) {
            spirit_damage_result = '2d10+1d6';
        } else if (spirit_damage_table_value == 14) {
            spirit_damage_result = '2d10+1d8';
        } else if (spirit_damage_table_value == 15) {
            spirit_damage_result = '3d10';
        } else {
            spirit_damage_result = '0';
        }

        setAttrs({
            spirit_damage: spirit_damage_result,
            spirit_pow_max: Math.ceil(binding/10)*3,
        });
    });
};
on("change:willpower_experience change:willpower_other change:willpower_temp change:binding_learned change:binding_base change:binding_experience change:binding_other change:binding_temp change:pow change:cha", function() { calc_spirit_damage(); });

// Damage Mod Auto Calc
var calc_damage_mod = function() {
    getAttrs(["str", "siz", "con", "pow", "damage_mod_calc", "damage_mod_other", "damage_mod_temp"], function(v) {
        if (v.damage_mod_calc == 1) {
            var damage_mod_table_value = parseInt(v.str) + parseInt(v.siz) + parseInt(v.pow);
        } else if (v.damage_mod_calc == 2) {
            var damage_mod_table_value = parseInt(v.str) + parseInt(v.siz) + parseInt(v.con);
        } else {
            var damage_mod_table_value = parseInt(v.str) + parseInt(v.siz);
        }

        var base_damage_mod_step = find_damage_mod_step(damage_mod_table_value);
        var base_damage_mod_value = find_damage_mod(base_damage_mod_step);

        var damage_mod_step = parseInt(base_damage_mod_step) + parseInt(v.damage_mod_other) + parseInt(v.damage_mod_temp);
        var damage_mod_value = find_damage_mod(damage_mod_step);

        setAttrs({
            damage_mod_base: base_damage_mod_value,
            damage_mod: damage_mod_value
        });
    });
};
on("change:str change:siz change:con change:pow change:damage_mod_calc change:damage_mod_other change:damage_mod_temp", function() { calc_damage_mod(); });

// Experience Mod Auto Calc
var calc_experience_mod = function() {
    getAttrs(["cha", "int", "experience_mod_calc", "experience_mod_other", "experience_mod_temp"], function(v) {
        if(v.experience_mod_calc == "1") {
            var base_value = Math.ceil(parseInt(v.int)/6)-2;
        } else {
            var base_value = Math.ceil(parseInt(v.cha)/6)-2;
        }

        setAttrs({
            experience_mod_base: base_value,
            experience_mod: base_value + parseInt(v.experience_mod_other) + parseInt(v.experience_mod_temp)
        });
    });
};
on("change:cha change:int change:experience_mod_calc change:experience_mod_temp change:experience_mod_other", function() { calc_experience_mod(); });

// Healing Rate Auto Calc
var calc_healing_rate = function() {
    getAttrs(["con", "pow", "healing_rate_calc", "healing_rate_other", "healing_rate_temp", "healing_rate_double"], function(v) {
        if (v.healing_rate_double == "1") {
            var base_multiplier = 2;
        } else {
            var base_multiplier = 1;
        }

        if (v.healing_rate_calc == "1") {
            var base_value = Math.ceil(Math.ceil(parseInt(v.con)+(parseInt(v.pow)/2))/6) * base_multiplier;
        } else {
            var base_value = Math.ceil(parseInt(v.con)/6) * base_multiplier;
        }

        setAttrs({
            healing_rate_base: base_value,
            healing_rate: base_value + parseInt(v.healing_rate_other) + parseInt(v.healing_rate_temp)
        });
    });
};
on("change:healing_rate_calc change:healing_rate_temp change:healing_rate_other change:con change:pow change:healing_rate_double", function() { calc_healing_rate(); });

// Initiative Auto Calc
var calc_initiative = function() {
    getAttrs(["athletics_experience", "athletics_other", "athletics_temp", "initiative_add_one_tenth_athletics", "str", "dex", "int", "cha", "initiative_bonus_temp", "armor_penalty", "fatigue", "initiative_bonus_other", "spirit"], function(v) {
        if(v["initiative_add_one_tenth_athletics"] == "1") {
            var athletics_bonus = Math.ceil((parseInt(v.str)+parseInt(v.dex)+parseInt(v.athletics_experience)+parseInt(v.athletics_other)+parseInt(v.athletics_temp))/10);
        } else {
            var athletics_bonus = 0;
        }

        if(v["spirit"] == "1") {
            var spirit_athletics_bonus = 0;
            var base_value = Math.ceil((parseInt(v.int) + parseInt(v.cha)) / 2);
            var spirit_ib = base_value;
        } else {
            var spirit_athletics_bonus = athletics_bonus;
            var base_value = Math.ceil((parseInt(v.int) + parseInt(v.dex)) / 2);
            var spirit_ib = Math.ceil((parseInt(v.int) + parseInt(v.cha)) / 2);
        }

        var fatigue = parseInt(v.fatigue);
        if (fatigue > 6) {
            var initiative_bonus_fatigue = getTranslationByKey("no-penalty-u");
            var initiative_bonus = base_value + spirit_athletics_bonus + parseInt(v.initiative_bonus_other) + parseInt(v.initiative_bonus_temp) + parseInt(v.armor_penalty);
        } else if (fatigue == 6) {
            var initiative_bonus_fatigue = "-2";
            var initiative_bonus = base_value + spirit_athletics_bonus + parseInt(v.initiative_bonus_other) + parseInt(v.initiative_bonus_temp) + parseInt(v.armor_penalty) - 2;
        } else if (fatigue == 5) {
            var initiative_bonus_fatigue = "-4";
            var initiative_bonus = base_value + spirit_athletics_bonus + parseInt(v.initiative_bonus_other) + parseInt(v.initiative_bonus_temp) + parseInt(v.armor_penalty) - 4;
        } else if (fatigue == 4) {
            var initiative_bonus_fatigue = "-6";
            var initiative_bonus = base_value + spirit_athletics_bonus + parseInt(v.initiative_bonus_other) + parseInt(v.initiative_bonus_temp) + parseInt(v.armor_penalty) - 6;
        } else if (fatigue == 3) {
            var initiative_bonus_fatigue = "-8";
            var initiative_bonus = base_value + spirit_athletics_bonus + parseInt(v.initiative_bonus_other) + parseInt(v.initiative_bonus_temp) + parseInt(v.armor_penalty) - 8;
        } else {
            var initiative_bonus_fatigue = getTranslationByKey("no-activities-possible-u");
            var initiative_bonus = base_value + spirit_athletics_bonus + parseInt(v.initiative_bonus_other) + parseInt(v.initiative_bonus_temp) + parseInt(v.armor_penalty) - 99;
        }

        setAttrs({
            initiative_athletics_bonus: athletics_bonus,
            initiative_bonus_base: base_value,
            initiative_bonus_fatigue: initiative_bonus_fatigue,
            initiative_bonus: initiative_bonus,
            spirit_ib: spirit_ib,
        });
    });
};
on("change:dex change:str change:int change:cha change:athletics_experience change:athletics_other change:athletics_temp change:initiative_add_one_tenth_athletics change:initiative_bonus_temp change:armor_penalty change:fatigue change:initiative_bonus_other change:spirit", function() { calc_initiative(); });

// Social Initiative Auto Calc
var calc_social_initiative = function() {
    getAttrs(["int", "cha", "social_initiative_temp", "social_initiative_other"], function(v) {
        var base_value = Math.ceil((parseInt(v.int) + parseInt(v.cha)) / 2);
        var social_initiative = base_value + parseInt(v.social_initiative_temp) + parseInt(v.social_initiative_other);
        setAttrs({
            social_initiative_base: base_value,
            social_initiative: social_initiative,
        });
    });
};
on("change:int change:cha change:social_initiative_temp change:social_initiative_other", function() { calc_social_initiative(); });

// Spirit Intensity Auto Calc
var calc_spirit_intensity = function() {
    getAttrs(["pow"], function(v) {
        setAttrs({ spirit_intensity: Math.ceil(parseInt(v.pow)/6) });
    });
};
on("change:pow", function() { calc_spirit_intensity(); });

// Luck Points Auto Calc
var calc_luck_points = function() {
    getAttrs(["pow", "cha", "luck_points_temp", "luck_points_other", "luck_points_rank", "rank", "luck_points", "luck_points_max", "luck_points_calc"], function(v) {
        if (v.luck_points_rank == "1") {
            var rank_bonus = parseInt(v.rank);
        } else {
            var rank_bonus = 0;
        }

        if (v.luck_points_calc == "1") {
            var base_value = Math.ceil(Math.ceil(parseInt(v.cha)+(parseInt(v.pow)/2))/6) + rank_bonus;
        } else {
            var base_value = Math.ceil(parseInt(v.pow)/6) + rank_bonus;
        }

        var new_luck_points_max = base_value + parseInt(v.luck_points_temp) + parseInt(v.luck_points_other);
        var diff_luck_points_max = new_luck_points_max - parseInt(v.luck_points_max);
        setAttrs({
            luck_points_base: base_value,
            luck_points_max: new_luck_points_max,
            luck_points: parseInt(v.luck_points) + diff_luck_points_max,
        });
    });
};
on("change:pow change:cha change:luck_points_calc change:luck_points_temp change:luck_points_other change:luck_points_rank change:rank", function() { calc_luck_points(); });


// Magic Points Auto Calc
var calc_magic_points = function() {
    getAttrs(["pow", "magic_points_temp", "magic_points_other", "magic_points", "magic_points_max", "magic_points_mook1", "magic_points_mook2", "magic_points_mook3", "magic_points_mook4", "magic_points_mook5", "magic_points_mook6", "magic_points_mook7", "magic_points_mook8", "magic_points_mook9", "magic_points_mook10"], function(v) {
        var new_magic_points_max = parseInt(v.pow) + parseInt(v.magic_points_temp) + parseInt(v.magic_points_other);
        var diff_magic_points_max = new_magic_points_max - parseInt(v.magic_points_max);

        setAttrs({
            magic_points_base: parseInt(v.pow),
            magic_points_max: new_magic_points_max,
            magic_points: parseInt(v.magic_points) + diff_magic_points_max,
            magic_points_mook1: parseInt(v.magic_points_mook1) + diff_magic_points_max,
            magic_points_mook2: parseInt(v.magic_points_mook2) + diff_magic_points_max,
            magic_points_mook3: parseInt(v.magic_points_mook3) + diff_magic_points_max,
            magic_points_mook4: parseInt(v.magic_points_mook4) + diff_magic_points_max,
            magic_points_mook5: parseInt(v.magic_points_mook5) + diff_magic_points_max,
            magic_points_mook6: parseInt(v.magic_points_mook6) + diff_magic_points_max,
            magic_points_mook7: parseInt(v.magic_points_mook7) + diff_magic_points_max,
            magic_points_mook8: parseInt(v.magic_points_mook8) + diff_magic_points_max,
            magic_points_mook9: parseInt(v.magic_points_mook9) + diff_magic_points_max,
            magic_points_mook10: parseInt(v.magic_points_mook10) + diff_magic_points_max,
        });
    });
};
on("change:pow change:magic_points_temp change:magic_points_other", function() { calc_magic_points(); });

// Movement Auto Calc
var calc_movement = function() {
    getAttrs(["height", "fatigue", "movement_rate_species", "movement_rate_enc", "movement_rate_species_swim", "movement_rate_species_fly", "movement_rate_other", "movement_rate_temp", "armor_penalty", "athletics_experience", "athletics_other", "athletics_temp", "str", "dex", "con", "swim_experience", "swim_other", "swim_temp"], function(v) {
        var swim_no_penalty = (parseInt(v.str) + parseInt(v.con) + parseInt(v.swim_experience)+parseInt(v.swim_other)+parseInt(v.swim_temp));
        var step1_land_movement = parseInt(v.movement_rate_species) + parseInt(v.movement_rate_other) + parseInt(v.movement_rate_temp);
        var step1_swim_movement = parseInt(v.movement_rate_species_swim) + parseInt(v.movement_rate_other) + parseInt(v.movement_rate_temp) + Math.floor(swim_no_penalty/20);
        var step1_fly_movement = parseInt(v.movement_rate_species_fly) + parseInt(v.movement_rate_other) + parseInt(v.movement_rate_temp);
        var athletics_no_penalty = (parseInt(v.str)+parseInt(v.dex)+parseInt(v.athletics_experience)+parseInt(v.athletics_other)+parseInt(v.athletics_temp));
        var armor_penalty = parseInt(v.armor_penalty);
        var height = parseInt(v.height);

        var fatigue = parseInt(v.fatigue);
        if (fatigue >= 8) {
            var step2_land_movement = step1_land_movement;
            var step2_swim_movement = step1_swim_movement;
            var step2_fly_movement = step1_fly_movement;
            var movement_rate_fatigue = "+0";
        } else if (fatigue == 7 ) {
            var step2_land_movement = step1_land_movement - 1;
            var step2_swim_movement = step1_swim_movement - 1;
            var step2_fly_movement = step1_fly_movement - 1;
            var movement_rate_fatigue = "-1";
        } else if (fatigue == 6 ) {
            var step2_land_movement = step1_land_movement - 2;
            var step2_swim_movement = step1_swim_movement - 2;
            var step2_fly_movement = step1_fly_movement - 2;
            var movement_rate_fatigue = "-2";
        } else if (fatigue >= 4 ) {
            var step2_land_movement = Math.ceil(step1_land_movement / 2);
            var step2_swim_movement = Math.ceil(step1_swim_movement / 2);
            var step2_fly_movement = Math.ceil(step1_fly_movement / 2);
            var movement_rate_fatigue = "*.5";
        } else {
            var step2_land_movement = 0;
            var step2_swim_movement = 0;
            var step2_fly_movement = 0;
            var movement_rate_fatigue = "*0";
        }

        if (v.movement_rate_enc == "+0") {
            var step3_land_movement = step2_land_movement;
            var step3_swim_movement = step2_swim_movement;
            var step3_fly_movement = step2_fly_movement;
        } else if (v.movement_rate_enc == "-2") {
            var step3_land_movement = step2_land_movement - 2;
            var step3_swim_movement = step2_swim_movement - 2;
            var step3_fly_movement = step2_fly_movement - 2;
        } else if (v.movement_rate_enc == "*.5") {
            var step3_land_movement = Math.ceil(step2_land_movement / 2);
            var step3_swim_movement = Math.ceil(step2_swim_movement / 2);
            var step3_fly_movement = Math.ceil(step2_fly_movement / 2);
        } else {
            var step3_land_movement = 0;
            var step3_swim_movement = 0;
            var step3_fly_movement = 0;
        }

        var run = Math.ceil((step3_land_movement+(Math.floor((athletics_no_penalty/25))*.5))*3)+armor_penalty;
        if (run < step3_land_movement) {
            run = step3_land_movement;
        }

        var spirit = ((step3_land_movement+(Math.floor(athletics_no_penalty/25)))*5)+armor_penalty;
        if (spirit < step3_land_movement) {
            spirit = step3_land_movement;
        }

        var climb_rough = step3_land_movement+Math.ceil(armor_penalty/2);
        if (climb_rough < 0) {
            climb_rough = 0;
        }

        var climb_steep = step3_land_movement+armor_penalty;
        if (climb_steep < 0) {
            climb_steep = 0;
        }

        var climb_sheer = step3_land_movement+(armor_penalty*2);
        if (climb_sheer < 0) {
            climb_sheer = 0;
        }

        // Rules say minium is one step, per google that is .762 meters, so if we adjust to cm set minium to height-100cm to account for short characters like halfling or dwarves
        var running_jump_horizontal = Math.ceil((((height/100)*2)+Math.floor(athletics_no_penalty/20))+(armor_penalty/2));
        if (running_jump_horizontal < 1) {
            running_jump_horizontal = 1;
        }
        var running_jump_vertical = Math.ceil(((((height/100)*.5)+(Math.floor(athletics_no_penalty/20)*.2))+(armor_penalty/2))*100);
        if (running_jump_vertical < 20) {
            running_jump_vertical = 20;
        }
        var standing_jump_horizontal = Math.ceil((height/100)+(armor_penalty/4));
        if (standing_jump_horizontal < 1) {
            standing_jump_horizontal = 1;
        }
        var standing_jump_vertical = Math.ceil((((height/100)*.25)+(armor_penalty/4))*100);
        if (standing_jump_vertical < 20) {
            standing_jump_vertical = 20;
        }

        var swim_sink = Math.ceil((step3_swim_movement/2)+armor_penalty);
        if (swim_sink > 0) {
            var step4_swim_movement = step3_swim_movement;
        } else if (swim_sink == 0) {
            var step4_swim_movement = getTranslationByKey("float-u");
        } else {
            var step4_swim_movement = getTranslationByKey("sink-u");
        }

        setAttrs({
            movement_rate_fatigue: movement_rate_fatigue,
            movement_rate: step3_land_movement,
            walk_move: step3_land_movement,
            run_move: run,
            sprint_move: spirit,
            climb_rough_move: climb_rough,
            climb_steep_move: climb_steep,
            climb_sheer_move: climb_sheer,
            fly_move: step3_fly_movement,
            running_jump_horizontal_move: running_jump_horizontal,
            running_jump_vertical_move: running_jump_vertical,
            standing_jump_horizontal_move: standing_jump_horizontal,
            standing_jump_vertical_move: standing_jump_vertical,
            swim_move: step4_swim_movement,
        });
    });
}
on("change:height change:fatigue change:movement_rate_species change:movement_rate_enc change:movement_rate_species_swim change:movement_rate_species_fly change:movement_rate_other change:movement_rate_temp change:armor_penalty change:str change:dex change:con change:athletics_experience change:athletics_other change:athletics_temp change:swim_experience change:swim_other change:swim_temp", function() { calc_movement(); });

// Power Points Auto Calc
var calc_power_points = function() {
    getAttrs(["pow", "power_points_temp", "power_points_other", "power_points", "power_points_max", "power_points_mook1", "power_points_mook2", "power_points_mook3", "power_points_mook4", "power_points_mook5", "power_points_mook6", "power_points_mook7", "power_points_mook8", "power_points_mook9", "power_points_mook10"], function(v) {
        var new_power_points_max = parseInt(v.pow) + parseInt(v.power_points_temp) + parseInt(v.power_points_other);
        var diff_power_points_max = new_power_points_max - parseInt(v.power_points_max);

        setAttrs({
            power_points_base: parseInt(v.pow),
            power_points_max: new_power_points_max,
            power_points: parseInt(v.power_points) + diff_power_points_max,
            power_points_mook1: parseInt(v.power_points_mook1) + diff_power_points_max,
            power_points_mook2: parseInt(v.power_points_mook2) + diff_power_points_max,
            power_points_mook3: parseInt(v.power_points_mook3) + diff_power_points_max,
            power_points_mook4: parseInt(v.power_points_mook4) + diff_power_points_max,
            power_points_mook5: parseInt(v.power_points_mook5) + diff_power_points_max,
            power_points_mook6: parseInt(v.power_points_mook6) + diff_power_points_max,
            power_points_mook7: parseInt(v.power_points_mook7) + diff_power_points_max,
            power_points_mook8: parseInt(v.power_points_mook8) + diff_power_points_max,
            power_points_mook9: parseInt(v.power_points_mook9) + diff_power_points_max,
            power_points_mook10: parseInt(v.power_points_mook10) + diff_power_points_max,
        });
    });
};
on("change:pow change:power_points_temp change:power_points_other", function() { calc_power_points(); });

// Prana Points Auto Calc
var calc_prana_points = function() {
    getAttrs(["pow", "prana_points_temp", "prana_points_other", "prana_points", "prana_points_max", "prana_points_mook1", "prana_points_mook2", "prana_points_mook3", "prana_points_mook4", "prana_points_mook5", "prana_points_mook6", "prana_points_mook7", "prana_points_mook8", "prana_points_mook9", "prana_points_mook10"], function(v) {
        var new_prana_points_max = parseInt(v.pow) + parseInt(v.prana_points_temp) + parseInt(v.prana_points_other);
        var diff_prana_points_max = new_prana_points_max - parseInt(v.prana_points_max);

        setAttrs({
            prana_points_base: parseInt(v.pow),
            prana_points_max: new_prana_points_max,
            prana_points: parseInt(v.prana_points) + diff_prana_points_max,
            prana_points_mook1: parseInt(v.prana_points_mook1) + diff_prana_points_max,
            prana_points_mook2: parseInt(v.prana_points_mook2) + diff_prana_points_max,
            prana_points_mook3: parseInt(v.prana_points_mook3) + diff_prana_points_max,
            prana_points_mook4: parseInt(v.prana_points_mook4) + diff_prana_points_max,
            prana_points_mook5: parseInt(v.prana_points_mook5) + diff_prana_points_max,
            prana_points_mook6: parseInt(v.prana_points_mook6) + diff_prana_points_max,
            prana_points_mook7: parseInt(v.prana_points_mook7) + diff_prana_points_max,
            prana_points_mook8: parseInt(v.prana_points_mook8) + diff_prana_points_max,
            prana_points_mook9: parseInt(v.prana_points_mook9) + diff_prana_points_max,
            prana_points_mook10: parseInt(v.prana_points_mook10) + diff_prana_points_max,
        });
    });
};
on("change:pow change:prana_points_temp change:prana_points_other", function() { calc_prana_points(); });

// Tenacity Auto Calc
var calc_tenacity = function() {
    var total_dependency_score = 0;
    var tenacity_dependencies = 0;
    getSectionIDs("repeating_dependency", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                getAttrs(["repeating_dependency_" + currentID + "_score"], function(v) {
                    if(v["repeating_dependency_" + currentID + "_score"] && isNaN(parseInt(v["repeating_dependency_" + currentID + "_score"], 10)) === false) {
                        total_dependency_score = total_dependency_score + parseInt(v["repeating_dependency_" + currentID + "_score"], 10);
                    }
                    if(i === idarray.length - 1) {
                        tenacity_dependencies = 0-Math.floor(total_dependency_score/20);
                    }
                });
            });
        }

        getAttrs(["pow", "tenacity_temp", "tenacity_other", "apply_dependencies_penalty", "tenacity_max", "tenacity", "tenacity_mook1", "tenacity_mook2", "tenacity_mook3", "tenacity_mook4", "tenacity_mook5", "tenacity_mook6", "tenacity_mook7", "tenacity_mook8", "tenacity_mook9", "tenacity_mook10"], function(val) {
            var new_tenacity_max = parseInt(val.pow) + parseInt(val.tenacity_temp) + parseInt(val.tenacity_other) + (tenacity_dependencies*parseInt(val.apply_dependencies_penalty));
            var diff_tenacity_max = new_tenacity_max - parseInt(val.tenacity_max);
            setAttrs({
                tenacity_dependencies: tenacity_dependencies,
                tenacity_base: parseInt(val.pow),
                tenacity_max: new_tenacity_max,
                tenacity: parseInt(val.tenacity) + diff_tenacity_max,
                tenacity_mook1: parseInt(val.tenacity_mook1) + diff_tenacity_max,
                tenacity_mook2: parseInt(val.tenacity_mook2) + diff_tenacity_max,
                tenacity_mook3: parseInt(val.tenacity_mook3) + diff_tenacity_max,
                tenacity_mook4: parseInt(val.tenacity_mook4) + diff_tenacity_max,
                tenacity_mook5: parseInt(val.tenacity_mook5) + diff_tenacity_max,
                tenacity_mook6: parseInt(val.tenacity_mook6) + diff_tenacity_max,
                tenacity_mook7: parseInt(val.tenacity_mook7) + diff_tenacity_max,
                tenacity_mook8: parseInt(val.tenacity_mook8) + diff_tenacity_max,
                tenacity_mook9: parseInt(val.tenacity_mook9) + diff_tenacity_max,
                tenacity_mook10: parseInt(val.tenacity_mook10) + diff_tenacity_max,
            });
        });
    });
};
on("change:pow change:tenacity_temp change:tenacity_other change:apply_dependencies_penalty change:repeating_dependency remove:repeating_dependency", function() { calc_tenacity(); });

// HP & Armor Auto Calc
var calc_hp_max_base = function() {
    getAttrs(["con", "siz", "pow", "str", "hp_calc"], function(v) {
        if (v.hp_calc == "1") {
            base_value = Math.ceil((parseInt(v.con) + parseInt(v.siz) + parseInt(v.pow))/5);
        } else if (v.hp_calc == "2") {
            base_value = Math.ceil((parseInt(v.con) + parseInt(v.siz) + parseInt(v.str))/5);
        } else {
            base_value = Math.ceil((parseInt(v.con) + parseInt(v.siz))/5);
        }

        setAttrs({
            hp_max_base: base_value,
        });
    });
};
on("change:con change:siz change:pow change:str change:hp_calc", function() { calc_hp_max_base(); });

var calc_location_hp = function(location) {
    var hp_max_base_mod = location + "_hp_max_base_mod";
    var hp_max_other = location + "_hp_max_other";
    var current_hp = location + "_hp";
    var armor_equipped = location + "_armor_equipped";
    var armor_ap = location + "_armor_ap";
    var other_ap = location + "_other_ap";
    var current_hp_mook1 = location + "_hp_mook1";
    var current_hp_mook2 = location + "_hp_mook2";
    var current_hp_mook3 = location + "_hp_mook3";
    var current_hp_mook4 = location + "_hp_mook4";
    var current_hp_mook5 = location + "_hp_mook5";
    var current_hp_mook6 = location + "_hp_mook6";
    var current_hp_mook7 = location + "_hp_mook7";
    var current_hp_mook8 = location + "_hp_mook8";
    var current_hp_mook9 = location + "_hp_mook9";
    var current_hp_mook10 = location + "_hp_mook10";
    var current_hp_max = location + "_hp_max";

    getAttrs(["all_armor_temp", "hp_max_base", "all_hp_temp", armor_equipped, armor_ap, other_ap, hp_max_base_mod, hp_max_other, current_hp, current_hp_mook1, current_hp_mook2, current_hp_mook3, current_hp_mook4, current_hp_mook5, current_hp_mook6, current_hp_mook7, current_hp_mook8, current_hp_mook9, current_hp_mook10, current_hp_max], function(v) {
        setObj = {};

        new_hp_max = parseInt(v["hp_max_base"]) + parseInt(v[hp_max_base_mod]) + parseInt(v[hp_max_other]) + parseInt(v["all_hp_temp"]);
        diff_hp_max = new_hp_max - parseInt(v[current_hp_max]);
        setObj[location + "_hp"] = parseInt(v[current_hp]) + diff_hp_max;
        setObj[location + "_ap"] = parseInt(v[armor_ap]) * parseInt(v[armor_equipped]) + parseInt(v[other_ap]) + parseInt(v["all_armor_temp"]);
        setObj[location + "_hp_mook1"] = parseInt(v[current_hp_mook1]) + diff_hp_max;
        setObj[location + "_hp_mook2"] = parseInt(v[current_hp_mook2]) + diff_hp_max;
        setObj[location + "_hp_mook3"] = parseInt(v[current_hp_mook3]) + diff_hp_max;
        setObj[location + "_hp_mook4"] = parseInt(v[current_hp_mook4]) + diff_hp_max;
        setObj[location + "_hp_mook5"] = parseInt(v[current_hp_mook5]) + diff_hp_max;
        setObj[location + "_hp_mook6"] = parseInt(v[current_hp_mook6]) + diff_hp_max;
        setObj[location + "_hp_mook7"] = parseInt(v[current_hp_mook7]) + diff_hp_max;
        setObj[location + "_hp_mook8"] = parseInt(v[current_hp_mook8]) + diff_hp_max;
        setObj[location + "_hp_mook9"] = parseInt(v[current_hp_mook9]) + diff_hp_max;
        setObj[location + "_hp_mook10"] = parseInt(v[current_hp_mook10]) + diff_hp_max;
        setObj[location + "_hp_max"] = new_hp_max;

        setAttrs(setObj);
    });
};
on("change:hp_max_base change:location1_armor_ap change:location1_armor_equipped change:location1_other_ap change:location1_hp_max_base_mod change:location1_hp_max_other change:all_hp_temp change:all_armor_temp", function() { calc_location_hp("location1"); });
on("change:hp_max_base change:location2_armor_ap change:location2_armor_equipped change:location2_other_ap change:location2_hp_max_base_mod change:location2_hp_max_other change:all_hp_temp change:all_armor_temp", function() { calc_location_hp("location2"); });
on("change:hp_max_base change:location3_armor_ap change:location3_armor_equipped change:location3_other_ap change:location3_hp_max_base_mod change:location3_hp_max_other change:all_hp_temp change:all_armor_temp", function() { calc_location_hp("location3"); });
on("change:hp_max_base change:location4_armor_ap change:location4_armor_equipped change:location4_other_ap change:location4_hp_max_base_mod change:location4_hp_max_other change:all_hp_temp change:all_armor_temp", function() { calc_location_hp("location4"); });
on("change:hp_max_base change:location5_armor_ap change:location5_armor_equipped change:location5_other_ap change:location5_hp_max_base_mod change:location5_hp_max_other change:all_hp_temp change:all_armor_temp", function() { calc_location_hp("location5"); });
on("change:hp_max_base change:location6_armor_ap change:location6_armor_equipped change:location6_other_ap change:location6_hp_max_base_mod change:location6_hp_max_other change:all_hp_temp change:all_armor_temp", function() { calc_location_hp("location6"); });
on("change:hp_max_base change:location7_armor_ap change:location7_armor_equipped change:location7_other_ap change:location7_hp_max_base_mod change:location7_hp_max_other change:all_hp_temp change:all_armor_temp", function() { calc_location_hp("location7"); });
on("change:hp_max_base change:location8_armor_ap change:location8_armor_equipped change:location8_other_ap change:location8_hp_max_base_mod change:location8_hp_max_other change:all_hp_temp change:all_armor_temp", function() { calc_location_hp("location8"); });
on("change:hp_max_base change:location9_armor_ap change:location9_armor_equipped change:location9_other_ap change:location9_hp_max_base_mod change:location9_hp_max_other change:all_hp_temp change:all_armor_temp", function() { calc_location_hp("location9"); });
on("change:hp_max_base change:location10_armor_ap change:location10_armor_equipped change:location10_other_ap change:location10_hp_max_base_mod change:location10_hp_max_other change:all_hp_temp change:all_armor_temp", function() { calc_location_hp("location10"); });
on("change:hp_max_base change:location11_armor_ap change:location11_armor_equipped change:location11_other_ap change:location11_hp_max_base_mod change:location11_hp_max_other change:all_hp_temp change:all_armor_temp", function() { calc_location_hp("location11"); });
on("change:hp_max_base change:location12_armor_ap change:location12_armor_equipped change:location12_other_ap change:location12_hp_max_base_mod change:location12_hp_max_other change:all_hp_temp change:all_armor_temp", function() { calc_location_hp("location12"); });

// Simplified HP Auto Calc
var calc_simplified_hp = function() {
    getAttrs(["con", "siz", "str", "pow", "hp_calc", "simplified_hp_max_other", "all_hp_temp", "simplified_hp", "simplified_hp_max", "simplified_hp_mook1", "simplified_hp_mook2", "simplified_hp_mook3", "simplified_hp_mook4", "simplified_hp_mook5", "simplified_hp_mook6", "simplified_hp_mook7", "simplified_hp_mook8", "simplified_hp_mook9", "simplified_hp_mook10", "simplified_hp_mook11", "simplified_hp_mook12"], function(v) {
        if (v.hp_calc == "1") {
            base_value = Math.ceil((parseInt(v.con) + parseInt(v.siz) + parseInt(v.pow))/2);
        } else if (v.hp_calc == "2") {
            base_value = Math.ceil((parseInt(v.con) + parseInt(v.siz) + parseInt(v.str))/2);
        } else {
            base_value = Math.ceil((parseInt(v.con) + parseInt(v.siz))/2);
        }

        new_hp_max = base_value + parseInt(v.simplified_hp_max_other) + parseInt(v.all_hp_temp);
        diff_hp_max = new_hp_max - parseInt(v.simplified_hp_max);

        setAttrs({
            simplified_hp_max_base: base_value,
            simplified_hp_max: new_hp_max,
            simplified_hp: parseInt(v.simplified_hp) + diff_hp_max,
            simplified_hp_mook1: parseInt(v.simplified_hp_mook1) + diff_hp_max,
            simplified_hp_mook2: parseInt(v.simplified_hp_mook2) + diff_hp_max,
            simplified_hp_mook3: parseInt(v.simplified_hp_mook3) + diff_hp_max,
            simplified_hp_mook4: parseInt(v.simplified_hp_mook4) + diff_hp_max,
            simplified_hp_mook5: parseInt(v.simplified_hp_mook5) + diff_hp_max,
            simplified_hp_mook6: parseInt(v.simplified_hp_mook6) + diff_hp_max,
            simplified_hp_mook7: parseInt(v.simplified_hp_mook7) + diff_hp_max,
            simplified_hp_mook8: parseInt(v.simplified_hp_mook8) + diff_hp_max,
            simplified_hp_mook9: parseInt(v.simplified_hp_mook9) + diff_hp_max,
            simplified_hp_mook10: parseInt(v.simplified_hp_mook10) + diff_hp_max
        });
    });
}
on("change:con change:siz change:pow change:str change:hp_calc change:simplified_hp_max_other change:all_hp_temp", function() { calc_simplified_hp(); });

// Fatigue Auto Calc
var calc_fatigue = function() {
    getAttrs(["fatigue", "healing_rate"], function(values) {
        var healing_rate = parseInt(values.healing_rate);
        if (values.fatigue == "9") {
            setAttrs({
                fatigue_skills: '0',
                movement_rate_fatigue: '+0',
                fatigue_recovery: 0,
            });
        } else if (values.fatigue == "8") {
            setAttrs({
                fatigue_skills: '1',
                movement_rate_fatigue: '+0',
                fatigue_recovery: .25 / healing_rate,
            });
        } else if (values.fatigue == "7") {
            setAttrs({
                fatigue_skills: '1',
                movement_rate_fatigue: '-1',
                fatigue_recovery: 3 / healing_rate,
            });
        } else if (values.fatigue == "6") {
            setAttrs({
                fatigue_skills: '2',
                movement_rate_fatigue: '-2',
                fatigue_recovery: 6 / healing_rate,
            });
        } else if (values.fatigue == "5") {
            setAttrs({
                fatigue_skills: '2',
                movement_rate_fatigue: '*.5',
                fatigue_recovery: 12 / healing_rate,
            });
        } else if (values.fatigue == "4") {
            setAttrs({
                fatigue_skills: '3',
                movement_rate_fatigue: '*.5',
                fatigue_recovery: 18  / healing_rate,
            });
        } else if (values.fatigue == "3") {
            setAttrs({
                fatigue_skills: '3',
                movement_rate_fatigue: '*0',
                fatigue_recovery: 24 / healing_rate,
            });
        } else if (values.fatigue == "2") {
            setAttrs({
                fatigue_skills: '4',
                movement_rate_fatigue: '*0',
                fatigue_recovery: 36 / healing_rate,
            });
        } else if (values.fatigue == "1") {
            setAttrs({
                fatigue_skills: '5',
                movement_rate_fatigue: '*0',
                fatigue_recovery: 48 / healing_rate,
            });
        } else if (values.fatigue == "0") {
            setAttrs({
                fatigue_skills: '5',
                movement_rate_fatigue: '*0',
                fatigue_recovery: "-"
            });
        } else {
            setAttrs({
                fatigue_skills: '0',
                movement_rate_fatigue: '+0',
                fatigue_recovery: 0,
            });
        }
    });
}
on("change:fatigue change:healing_rate", function() { calc_fatigue(); });

//Skills Auto Calc
var calc_skill = function(skill_name, char1, char2, learned) {
    //console.log("processing skill = " + skill_name);

    var skill_base = skill_name + "_base";
    var skill_xp = skill_name + "_experience";
    var skill_temp = skill_name + "_temp";
    var skill_other = skill_name + "_other";
    var skill_penalty = skill_name + "_penalty";
    var skill_veasy = skill_name + "_very_easy";
    var skill_easy = skill_name + "_easy";
    var skill_hard = skill_name + "_hard";
    var skill_form = skill_name + "_formidable";
    var skill_herc = skill_name + "_herculean";
    var skill_enc = skill_name + "_encumbered";
    if (skill_name.startsWith("repeating")) {
        var skill_total = skill_name + "_total"
    } else {
        var skill_total = skill_name;
    }

    getAttrs(["str", "con", "siz", "dex", "int", "pow", "cha", skill_base, skill_xp, skill_temp, skill_other, skill_penalty, "herculean_mod"], function(v) {
        setObj = {};
        var skill_enc_value = 0;
        if (char1 == "@{str}") {
            var char1_value = parseInt(v.str);
            skill_enc_value = 1;
        } else if (char1 == "@{con}") {
            var char1_value = parseInt(v.con);
        } else if (char1 == "@{dex}") {
            var char1_value = parseInt(v.dex);
            skill_enc_value = 1;
        } else if (char1 == "@{siz}") {
            var char1_value = parseInt(v.siz);
        } else if (char1 == "@{int}") {
            var char1_value = parseInt(v.int);
        } else if (char1 == "@{pow}") {
            var char1_value = parseInt(v.pow);
        } else if (char1 == "@{cha}") {
            var char1_value = parseInt(v.cha);
        } else {
            var char1_value = 0;
        }

        if (char2 == "@{str}") {
            var char2_value = parseInt(v.str);
            skill_enc_value = 1;
        } else if (char2 == "@{con}") {
            var char2_value = parseInt(v.con);
        } else if (char2 == "@{dex}") {
            var char2_value = parseInt(v.dex);
            skill_enc_value = 1;
        } else if (char2 == "@{siz}") {
            var char2_value = parseInt(v.siz);
        } else if (char2 == "@{int}") {
            var char2_value = parseInt(v.int);
        } else if (char2 == "@{pow}") {
            var char2_value = parseInt(v.pow);
        } else if (char2 == "@{cha}") {
            var char2_value = parseInt(v.cha);
        } else {
            var char2_value = 0;
        }

        if (skill_name == "superstition") {
            var base_value = 21 - char1_value + char2_value;
        } else if (skill_name.startsWith("repeating_affiliation")) {
            var base_value = parseInt(v[skill_base]);
        } else if (skill_name == "status") {
            var base_value = parseInt(v[skill_base]);
        } else if (skill_name == "strangeness") {
            var base_value = parseInt(v[skill_base]);
        } else if (skill_name == "the_soot") {
            var base_value = parseInt(v[skill_base]);
        } else {
            var base_value = char1_value + char2_value;
        }

        /*
        console.log("skill xp = " + v[skill_xp]);
        console.log("skill temp = " + v[skill_temp]);
        console.log("skill other = " + v[skill_other]);
        console.log("skill learned = " + learned);
        */
        var herc_mod = parseFloat(v.herculean_mod);
        var std = (base_value + parseInt(v[skill_xp]) + parseInt(v[skill_temp]) + parseInt(v[skill_other])) * parseInt(learned);
        var veasy = std * 2;
        var easy = Math.ceil(std * 1.5);
        var hard = Math.ceil(std * (2/3));
        var form = Math.ceil(std * .5);
        var herc = Math.ceil(std * herc_mod);

        setObj[skill_veasy] = veasy + parseInt(v[skill_penalty]);
        setObj[skill_easy] = easy + parseInt(v[skill_penalty]);
        setObj[skill_total] = std + parseInt(v[skill_penalty]);
        setObj[skill_hard] = hard + parseInt(v[skill_penalty]);
        setObj[skill_form] = form + parseInt(v[skill_penalty]);
        setObj[skill_herc] = herc + parseInt(v[skill_penalty]);
        setObj[skill_base] = base_value;
        setObj[skill_enc] = skill_enc_value;

        //console.log("skill values = " + setObj);
        setAttrs(setObj);
    });
};

// Skill Derived Auto Calc
var calc_arcane_casting_derived = function() {
    getAttrs(["int", "pow", "arcane_casting_experience", "arcane_casting_temp", "arcane_casting_other", "arcane_casting_learned"], function(v) {
        var arcane_casting = parseInt(v.arcane_casting_learned) * (parseInt(v.int) + parseInt(v.pow)) + parseInt(v.arcane_casting_experience) + parseInt(v.arcane_casting_temp) + parseInt(v.arcane_casting_other);
        setAttrs({
            arcane_intensity_max: Math.ceil(arcane_casting/10),
            arcane_magnitude: Math.ceil(arcane_casting/10),
        });
    });
};

var calc_arcane_knowledge_derived = function() {
    getAttrs(["int", "arcane_knowledge_experience", "arcane_knowledge_temp", "arcane_knowledge_other", "arcane_knowledge_learned"], function(v) {
        var arcane_knowledge = parseInt(v.arcane_knowledge_learned) * (parseInt(v.int) + parseInt(v.int)) + parseInt(v.arcane_knowledge_experience) + parseInt(v.arcane_knowledge_temp) + parseInt(v.arcane_knowledge_other);
        setAttrs({
            arcane_rank_0_known_max: Math.ceil(arcane_knowledge/5),
        });
    });
};

var calc_channel_derived = function() {
    getAttrs(["int", "cha", "channel_experience", "channel_temp", "channel_other", "channel_learned"], function(v) {
        var channel = parseInt(v.channel_learned) * (parseInt(v.int) + parseInt(v.cha)) + parseInt(v.channel_experience) + parseInt(v.channel_temp) + parseInt(v.channel_other);
        setAttrs({
            divine_intensity_max: Math.ceil(channel/10),
            divine_magnitude: Math.ceil(channel/10),
        });
    });
};

var calc_fata_derived = function() {
    getAttrs(["pow", "cha", "fata_experience", "fata_temp", "fata_other", "fata_learned"], function(v) {
        var fata = parseInt(v.fata_learned) * (parseInt(v.pow) + parseInt(v.cha)) + parseInt(v.fata_experience) + parseInt(v.fata_temp) + parseInt(v.fata_other);
        var fata_intensity = Math.ceil(fata/20);
        setAttrs({
            fata_intensity: fata_intensity,
            fata_simultaneous: Math.ceil(fata_intensity/2),
        });
    });
};

var calc_gnosis_derived = function() {
    getAttrs(["int", "pow", "gnosis_experience", "gnosis_temp", "gnosis_other", "gnosis_learned"], function(v) {
        var gnosis = parseInt(v.gnosis_learned) * (parseInt(v.int) + parseInt(v.pow) + parseInt(v.gnosis_experience) + parseInt(v.gnosis_temp) + parseInt(v.gnosis_other));

        setAttrs({
            artifice_max_shaping_points: Math.ceil(gnosis/10),
            artifice_max_complexity: Math.ceil(gnosis/10),
        });
    });
}

var calc_artifice_derived = function() {
    getAttrs(["int", "dex", "artifice_experience", "artifice_temp", "artifice_other", "artifice_learned"], function(v) {
        var artifice = parseInt(v.artifice_learned) * (parseInt(v.int) + parseInt(v.dex) + parseInt(v.artifice_experience) + parseInt(v.artifice_temp) + parseInt(v.artifice_other));

        setAttrs({
            artifice_extended_task_rounds: Math.ceil(artifice/20),
            artifice_max_intensity: Math.ceil(artifice/10),
        });
    });
}

// Known Skills Auto Calc
on("change:pow change:int change:arcane_casting_experience change:arcane_casting_other change:arcane_casting_temp change:arcane_casting_penalty change:arcane_casting_learned change:herculean_mod ", function() {
    getAttrs(["arcane_casting_learned"], function(v) {
        calc_skill("arcane_casting", "@{int}", "@{pow}", v.arcane_casting_learned);
        calc_arcane_casting_derived();
    });
});
on("change:int change:arcane_knowledge_experience change:arcane_knowledge_other change:arcane_knowledge_temp change:arcane_knowledge_penalty change:arcane_knowledge_learned change:herculean_mod ", function() {
    getAttrs(["arcane_knowledge_learned"], function(v) {
        calc_skill("arcane_knowledge", "@{int}", "@{int}", v.arcane_knowledge_learned);
        calc_arcane_knowledge_derived();
    });
});
on("change:int change:dex change:artifice_experience change:artifice_other change:artifice_temp change:artifice_penalty change:artifice_learned change:herculean_mod ", function() {
    getAttrs(["artifice_learned"], function(v) {
        calc_skill("artifice", "@{int}", "@{dex}", v.artifice_learned);
        calc_artifice_derived();
    });
});
on("change:str change:dex change:athletics_experience change:athletics_other change:athletics_temp change:athletics_penalty change:herculean_mod ", function() { calc_skill("athletics", "@{str}", "@{dex}", 1); });
on("change:cha change:pow change:binding_experience change:binding_other change:binding_temp change:binding_penalty change:binding_learned change:herculean_mod ", function() {
    getAttrs(["binding_learned"], function(v) {
        calc_skill("binding", "@{cha}", "@{pow}", v.binding_learned);
    });
});
on("change:str change:con change:boating_experience change:boating_other change:boating_temp change:boating_penalty change:herculean_mod ", function() { calc_skill("boating", "@{str}", "@{con}", 1); });
on("change:str change:siz change:brawn_experience change:brawn_other change:brawn_temp change:brawn_penalty change:herculean_mod ", function() { calc_skill("brawn", "@{str}", "@{siz}", 1); });
on("change:cha change:int change:channel_experience change:channel_other change:channel_temp change:channel_penalty change:channel_learned change:herculean_mod ", function() {
    getAttrs(["channel_learned"], function(v) {
        calc_skill("channel", "@{cha}", "@{int}", v.channel_learned);
        calc_channel_derived();
    });
});
on("change:dex change:pow change:conceal_experience change:conceal_other change:conceal_temp change:conceal_penalty change:herculean_mod ", function() { calc_skill("conceal", "@{dex}", "@{pow}", 1); });
on("change:dex change:int change:craft_alchemy_experience change:craft_alchemy_other change:craft_alchemy_temp change:craft_alchemy_penalty change:craft_alchemy_learned change:herculean_mod ", function() {
    getAttrs(["craft_alchemy_learned"], function(v) {
        calc_skill("craft_alchemy", "@{dex}", "@{int}", v.craft_alchemy_learned);
    });
});
on("change:pow change:cha change:cursing_experience change:cursing_other change:cursing_temp change:cursing_penalty change:cursing_learned change:herculean_mod ", function() {
    getAttrs(["cursing_learned"], function(v) {
        calc_skill("cursing", "@{pow}", "@{cha}", v.cursing_learned);
    });
});
on("change:int change:customs_experience change:customs_other change:customs_temp change:customs_penalty change:herculean_mod ", function() { calc_skill("customs", "@{int}", "@{int}", 1); });
on("change:dex change:cha change:dance_experience change:dance_other change:dance_temp change:dance_penalty change:herculean_mod ", function() { calc_skill("dance", "@{cha}", "@{dex}", 1); });
on("change:int change:cha change:deceit_experience change:deceit_other change:deceit_temp change:deceit_penalty change:herculean_mod ", function() { calc_skill("deceit", "@{int}", "@{cha}", 1); });
on("change:pow change:int change:divination_experience change:divination_other change:divination_temp change:divination_penalty change:divination_learned change:herculean_mod ", function() {
    getAttrs(["divination_learned"], function(v) {
        calc_skill("divination", "@{pow}", "@{int}", v.divination_learned);
    });
});
on("change:dex change:pow change:drive_experience change:drive_other change:drive_temp change:drive_penalty change:herculean_mod ", function() { calc_skill("drive", "@{dex}", "@{pow}", 1); });
on("change:con change:endurance_experience change:endurance_other change:endurance_temp change:endurance_penalty change:herculean_mod ", function() { calc_skill("endurance", "@{con}", "@{con}", 1); });
on("change:dex change:evade_experience change:evade_other change:evade_temp change:evade_penalty change:herculean_mod ", function() { calc_skill("evade", "@{dex}", "@{dex}", 1); });
on("change:cha change:int change:exhort_experience change:exhort_other change:exhort_temp change:exhort_penalty change:exhort_learned change:herculean_mod ", function() {
    getAttrs(["exhort_learned"], function(v) {
        calc_skill("exhort", "@{cha}", "@{int}", v.exhort_learned);
    });
});
on("change:cha change:pow change:fata_experience change:fata_other change:fata_temp change:fata_penalty change:fata_learned change:herculean_mod ", function() {
    getAttrs(["fata_learned"], function(v) {
        calc_skill("fata", "@{cha}", "@{pow}", v.fata_learned);
        calc_fata_derived();
    });
});
on("change:int change:dex change:first_aid_experience change:first_aid_other change:first_aid_temp change:first_aid_penalty change:herculean_mod ", function() { calc_skill("first_aid", "@{int}", "@{dex}", 1); });
on("change:cha change:pow change:folk_magic_experience change:folk_magic_other change:folk_magic_temp change:folk_magic_penalty change:folk_magic_learned change:herculean_mod ", function() {
    getAttrs(["folk_magic_learned"], function(v) {
        calc_skill("folk_magic", "@{cha}", "@{pow}", v.folk_magic_learned);
    });
});
on("change:int change:pow change:gnosis_experience change:gnosis_other change:gnosis_temp change:gnosis_penalty change:gnosis_learned change:herculean_mod ", function() {
    getAttrs(["gnosis_learned"], function(v) {
        calc_skill("gnosis", "@{int}", "@{pow}", v.gnosis_learned);
        calc_gnosis_derived();
    });
});
on("change:int change:home_parallel_experience change:home_parallel_other change:home_parallel_temp change:home_parallel_penalty change:herculean_mod ", function() { calc_skill("home_parallel", "@{int}", "@{int}", 1); });
on("change:cha change:influence_experience change:influence_other change:influence_temp change:influence_penalty change:herculean_mod ", function() { calc_skill("influence", "@{cha}", "@{cha}", 1); });
on("change:int change:pow change:insight_experience change:insight_other change:insight_temp change:insight_penalty change:herculean_mod ", function() { calc_skill("insight", "@{int}", "@{pow}", 1); });
on("change:int change:cha change:linguistics_experience change:linguistics_other change:linguistics_temp change:linguistics_penalty change:linguistics_learned change:herculean_mod ", function() {
    getAttrs(["linguistics_learned"], function(v) {
        calc_skill("linguistics", "@{cha}", "@{int}", v.linguistics_learned);
    });
});
on("change:int change:locale_experience change:locale_other change:locale_temp change:locale_penalty change:herculean_mod ", function() { calc_skill("locale", "@{int}", "@{int}", 1); });
on("change:int change:con change:meditation_experience change:meditation_other change:meditation_temp change:meditation_penalty change:meditation_learned change:herculean_mod ", function() {
    getAttrs(["meditation_learned"], function(v) {
        calc_skill("meditation", "@{con}", "@{int}", v.meditation_learned);
    });
});
on("change:int change:cha change:native_tongue_experience change:native_tongue_other change:native_tongue_temp change:native_tongue_penalty change:herculean_mod ", function() { calc_skill("native_tongue", "@{int}", "@{cha}", 1); });
on("change:cha change:int change:necromancy_experience change:necromancy_other change:necromancy_temp change:necromancy_penalty change:necromancy_learned change:herculean_mod ", function() {
    getAttrs(["necromancy_learned"], function(v) {
        calc_skill("necromancy", "@{cha}", "@{int}", v.necromancy_learned);
    });
});
on("change:int change:pharmacy_experience change:pharmacy_other change:pharmacy_temp change:pharmacy_penalty change:pharmacy_learned change:herculean_mod ", function() {
    getAttrs(["pharmacy_learned"], function(v) {
        calc_skill("pharmacy", "@{int}", "@{int}", v.pharmacy_learned);
    });
});
on("change:cha change:pow change:piety_experience change:piety_other change:piety_temp change:piety_penalty change:piety_learned change:herculean_mod ", function() {
    getAttrs(["piety_learned"], function(v) {
        calc_skill("piety", "@{cha}", "@{pow}", v.piety_learned);
    });
});
on("change:int change:pow change:perception_experience change:perception_other change:perception_temp change:perception_penalty change:herculean_mod ", function() { calc_skill("perception", "@{int}", "@{pow}", 1); });
on("change:dex change:pow change:ride_experience change:ride_other change:ride_temp change:ride_penalty change:herculean_mod ", function() { calc_skill("ride", "@{dex}", "@{pow}", 1); });
on("change:con change:pow change:shape_shifting_experience change:shape_shifting_other change:shape_shifting_temp change:shape_shifting_penalty change:shape_shifting_learned change:herculean_mod ", function() {
    getAttrs(["shape_shifting_learned"], function(v) {
        calc_skill("shape_shifting", "@{con}", "@{pow}", v.shape_shifting_learned);
    });
});
on("change:int change:pow change:shaping_experience change:shaping_other change:shaping_temp change:shaping_penalty change:shaping_learned change:herculean_mod ", function() {
    getAttrs(["shaping_learned"], function(v) {
        calc_skill("shaping", "@{int}", "@{pow}", v.shaping_learned);
    });
});
on("change:cha change:pow change:sing_experience change:sing_other change:sing_temp change:sing_penalty change:herculean_mod ", function() { calc_skill("sing", "@{cha}", "@{pow}", 1); });
on("change:status_base change:status_experience change:status_temp change:status_other change:status_penalty change:herculean_mod", function() { calc_skill("status", "0", "0", 1); });
on("change:int change:dex change:stealth_experience change:stealth_other change:stealth_temp change:stealth_penalty change:herculean_mod ", function() { calc_skill("stealth", "@{int}", "@{dex}", 1); });
on("change:strangeness_base change:strangeness_experience change:strangeness_temp change:strangeness_other change:strangeness_penalty change:herculean_mod", function() { calc_skill("strangeness", "0", "0", 1); });
on("change:int change:pow change:superstition_experience change:superstition_other change:superstition_temp change:superstition_penalty change:herculean_mod ", function() { calc_skill("superstition", "@{int}", "@{pow}", 1); });
on("change:str change:con change:swim_experience change:swim_other change:swim_temp change:swim_penalty change:herculean_mod ", function() { calc_skill("swim", "@{str}", "@{con}", 1); });
on("change:the_soot_base change:the_soot_experience change:the_soot_temp change:the_soot_other change:the_soot_penalty change:herculean_mod", function() { calc_skill("the_soot", "0", "0", 1); });
on("change:pow change:theology_experience change:theology_other change:theology_temp change:theology_penalty change:theology_learned change:herculean_mod ", function() {
    getAttrs(["theology_learned"], function(v) {
        calc_skill("theology", "@{pow}", "@{pow}", v.theology_learned);
    });
});
on("change:con change:pow change:trance_experience change:trance_other change:trance_temp change:trance_penalty change:trance_learned change:herculean_mod ", function() {
    getAttrs(["trance_learned"], function(v) {
        calc_skill("trance", "@{con}", "@{pow}", v.trance_learned);
    });
});
on("change:str change:dex change:unarmed_experience change:unarmed_other change:unarmed_temp change:unarmed_penalty change:herculean_mod ", function() { calc_skill("unarmed", "@{str}", "@{dex}", 1); });
on("change:pow change:willpower_experience change:willpower_other change:willpower_temp change:willpower_penalty change:herculean_mod ", function() { calc_skill("willpower", "@{pow}", "@{pow}", 1); });
// Repeating Language Auto Calc
on("change:int change:cha change:herculean_mod change:repeating_language", function() {
    getSectionIDs("repeating_language", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                calc_skill("repeating_language_" + currentID, "@{int}", "@{cha}", 1);
            });
        }
    });
});
// Repeating M-Space Psionic Power Auto Calc
on("change:pow change:herculean_mod change:repeating_psionicpower", function() {
    getSectionIDs("repeating_psionicpower", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                calc_skill("repeating_psionicpower_" + currentID, "@{pow}", "@{pow}", 1);
            });
        }
    });
});
// Repeating Odd Soot Magic Spell Auto Calc
on("change:pow change:herculean_mod change:repeating_magicspell", function() {
    getSectionIDs("repeating_magicspell", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                calc_skill("repeating_magicspell_" + currentID, "@{pow}", "@{pow}", 1);
            });
        }
    });
});
// Repeating Alchemical Tradition Auto Calc
on("change:int change:herculean_mod change:repeating_alchemicaltradition", function() {
    getSectionIDs("repeating_alchemicaltradition", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                calc_skill("repeating_alchemicaltradition_" + currentID, "@{int}", "@{int}", 1);
            });
        }
    });
});
// Repeating Mysticism Path Auto Calc
on("change:pow change:con change:herculean_mod change:repeating_path", function() {
    getSectionIDs("repeating_path", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                calc_skill("repeating_path_" + currentID, "@{pow}", "@{con}", 1);
            });
        }
    });
});
// Repeating Psionics Discipline Auto Calc
on("change:pow change:herculean_mod change:repeating_discipline", function() {
    getSectionIDs("repeating_discipline", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                calc_skill("repeating_discipline_" + currentID, "@{pow}", "@{pow}", 1);
            });
        }
    });
});
// Repeating Theism Devotion Auto Calc
on("change:pow change:cha change:herculean_mod change:repeating_devotion", function() {
    getSectionIDs("repeating_devotion", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                calc_skill("repeating_devotion_" + currentID, "@{pow}", "@{cha}", 1);
            });
        }
    });
});
// Repeating Affliation Auto Calc
on("change:repeating_affiliation", function(event_info) { calc_skill(event_info.triggerName, "0", "0", 1); });
// Repeating Combat Style Auto Calc
on("change:str change:con change:siz change:dex change:int change:cha change:pow change:herculean_mod change:repeating_combatstyle remove:repeating_combatstyle", function(eventInfo) {
    getSectionIDs("repeating_combatstyle", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                var char1 = "repeating_combatstyle_" + currentID + "_char1";
                var char2 = "repeating_combatstyle_" + currentID + "_char2";
                getAttrs([char1, char2], function(v) {
                    calc_skill("repeating_combatstyle_" + currentID, v[char1], v[char2], 1);
                });
            });
        }
    });
});
// Repeating Standard Skill Auto Calc
on("change:str change:con change:siz change:dex change:int change:cha change:pow change:herculean_mod change:repeating_standardskill", function() {
    getSectionIDs("repeating_standardskill", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                var char1 = "repeating_standardskill_" + currentID + "_char1";
                var char2 = "repeating_standardskill_" + currentID + "_char2";
                getAttrs([char1, char2], function(v) {
                    calc_skill("repeating_standardskill_" + currentID, v[char1], v[char2], 1);
                });
            });
        }
    });
});
// Repeating Professional Skill Auto Calc
on("change:str change:con change:siz change:dex change:int change:cha change:pow change:herculean_mod change:repeating_professionalskill", function() {
    getSectionIDs("repeating_professionalskill", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                var char1 = "repeating_professionalskill_" + currentID + "_char1";
                var char2 = "repeating_professionalskill_" + currentID + "_char2";
                getAttrs([char1, char2], function(v) {
                    calc_skill("repeating_professionalskill_" + currentID, v[char1], v[char2], 1);
                });
            });
        }
    });
});
// Repeating Invocation Auto Calc
on("change:str change:con change:siz change:dex change:int change:cha change:pow change:herculean_mod change:repeating_invocation", function() {
    getSectionIDs("repeating_invocation", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                var char1 = "repeating_invocation_" + currentID + "_char1";
                var char2 = "repeating_invocation_" + currentID + "_char2";
                getAttrs([char1, char2], function(v) {
                    calc_skill("repeating_invocation_" + currentID, v[char1], v[char2], 1);
                });
            });
        }
    });
});

// Passions and Dependencies  and Peculiarities Auto Calc
var calc_passion = function(skill_name) {
    var skill_total = skill_name + "_total";
    var skill_score = skill_name + "_score";
    var skill_temp = skill_name + "_temp";
    var skill_penalty = skill_name + "_penalty";
    var skill_veasy = skill_name + "_very_easy";
    var skill_easy = skill_name + "_easy";
    var skill_hard = skill_name + "_hard";
    var skill_form = skill_name + "_formidable";
    var skill_herc = skill_name + "_herculean";

    getAttrs([skill_score, skill_temp, skill_penalty, "herculean_mod"], function(v) {
        setObj = {};

        var herc_mod = parseFloat(v.herculean_mod);
        var std = parseInt(v[skill_score]) + parseInt(v[skill_temp]);
        var veasy = std * 2;
        var easy = Math.ceil(std * 1.5);
        var hard = Math.ceil(std * (2/3));
        var form = Math.ceil(std * .5);
        var herc = Math.ceil(std * herc_mod);

        setObj[skill_veasy] = veasy + parseInt(v[skill_penalty]);
        setObj[skill_easy] = easy + parseInt(v[skill_penalty]);
        setObj[skill_total] = std + parseInt(v[skill_penalty]);
        setObj[skill_hard] = hard + parseInt(v[skill_penalty]);
        setObj[skill_form] = form + parseInt(v[skill_penalty]);
        setObj[skill_herc] = herc + parseInt(v[skill_penalty]);

        setAttrs(setObj);
    });
};
on("change:repeating_passion change:repeating_peculiarity change:repeating_dependency", function(event_info) { calc_passion(event_info.triggerName); });

// Spirits Max Auto Calc
var calc_max_spirits = function() {
    getAttrs(["cha", "animism_cult_rank"], function(v) {
        var animism_cult_rank = parseInt(v.animism_cult_rank);
        var cha = parseInt(v.cha);
        if (animism_cult_rank == 1) {
            var spirits_max = Math.ceil(cha * .25);
        } else if (animism_cult_rank == 2) {
            var spirits_max = Math.ceil(cha * .5);
        } else if (animism_cult_rank == 3) {
            var spirits_max = Math.ceil(cha * .75);
        } else if (animism_cult_rank >= 4) {
            var spirits_max = cha;
        }
        setAttrs({spirits_max: spirits_max});
    });
};
on("change:cha change:animism_cult_rank", function() { calc_max_spirits(); });

function find_damage_mod_step(value) {
    if (value >= 171) {
        return 23;
    } else if (value >= 161) {
        return 22;
    } else if (value >= 151) {
        return 21;
    } else if (value >= 141) {
        return 20;
    } else if (value >= 131) {
        return 19;
    } else if (value >= 121) {
        return 18;
    } else if (value >= 111) {
        return 17;
    } else if (value >= 101) {
        return 16;
    } else if (value >= 91) {
        return 15;
    } else if (value >= 81) {
        return 14;
    } else if (value >= 71) {
        return 13;
    } else if (value >= 61) {
        return 12;
    } else if (value >= 51) {
        return 11;
    } else if (value >= 46) {
        return 10;
    } else if (value >= 41) {
        return 9;
    } else if (value >= 36) {
        return 8;
    } else if (value >= 31) {
        return 7;
    } else if (value >= 26) {
        return 6;
    } else if (value >= 21) {
        return 5;
    } else if (value >= 16) {
        return 4;
    } else if (value >= 11) {
        return 3;
    } else if (value >= 6) {
        return 2;
    } else {
        return 1;
    }
}

function find_damage_mod(step) {
    if (step == 1) {
        return "-1d8";
    } else if (step == 2) {
        return "-1d6";
    } else if (step == 3) {
        return "-1d4";
    } else if (step == 4) {
        return "-1d2";
    } else if (step == 5) {
        return "0";
    } else if (step == 6) {
        return "1d2";
    } else if (step == 7) {
        return "1d4";
    } else if (step == 8) {
        return "1d6";
    } else if (step == 9) {
        return "1d8";
    } else if (step == 10) {
        return "1d10";
    } else if (step == 11) {
        return "1d12";
    } else if (step == 12) {
        return "2d6";
    } else if (step == 13) {
        return "1d8+1d6";
    } else if (step == 14) {
        return "2d8";
    } else if (step == 15) {
        return "1d10+1d8";
    } else if (step == 16) {
        return "2d10";
    } else if (step == 17) {
        return "2d10+1d2";
    } else if (step == 18) {
        return "2d10+1d4";
    } else if (step == 19) {
        return "2d10+1d6";
    } else if (step == 20) {
        return "2d10+1d8";
    } else if (step == 21) {
        return "3d10";
    } else if (step == 22) {
        return "2d10+1d12";
    } else {
        return "2d10+2d6";
    }
}

//Simplified combat sets hit locations
on("change:simplified_combat_enabled", function() {
    getAttrs(["simplified_combat_enabled"], function(values) {
        if (values.simplified_combat_enabled == "1") {
            setAttrs({
                hit_locations: "simplified",
            });
        }
    });
});

// Mythras Vehicle Systems
on("change:vehicle_size", function() {
    getAttrs(["vehicle_size"], function(values) {
        setAttrs({
            vehicle_system1_hits: values.vehicle_size,
            vehicle_system2_hits: values.vehicle_size,
            vehicle_system3_hits: values.vehicle_size,
            vehicle_system4_hits: values.vehicle_size,
            vehicle_system5_hits: values.vehicle_size,
            vehicle_system6_hits: values.vehicle_size,
            vehicle_system7_hits: values.vehicle_size,
            vehicle_system8_hits: values.vehicle_size,
            vehicle_system9_hits: values.vehicle_size,
            vehicle_system10_hits: values.vehicle_size
        });
    });
});

on("change:mythras_vehicle_type", function() {
    getAttrs(["mythras_vehicle_type"], function(values) {
        if (values.mythras_vehicle_type === "spaceship") {
            setAttrs({
                vehicle_system1_roll: 1, vehicle_system1_name: getTranslationByKey('avionics-u'),
                vehicle_system2_roll: 2, vehicle_system2_name: getTranslationByKey('communications-u'),
                vehicle_system3_roll: 3, vehicle_system3_name: getTranslationByKey('crew-u') + "/" + getTranslationByKey('passengers-u'),
                vehicle_system4_roll: 4, vehicle_system4_name: getTranslationByKey('hold-u') + "/" + getTranslationByKey('hangar-bay-u'),
                vehicle_system5_roll: 5, vehicle_system5_name: getTranslationByKey('hyperdrive-u'),
                vehicle_system6_roll: 6, vehicle_system6_name: getTranslationByKey('reactor-core-u'),
                vehicle_system7_roll: 7, vehicle_system7_name: getTranslationByKey('sensors-u'),
                vehicle_system8_roll: 8, vehicle_system8_name: getTranslationByKey('shields-u'),
                vehicle_system9_roll: 9, vehicle_system9_name: getTranslationByKey('sublight-drive-u'),
                vehicle_system10_roll: 10, vehicle_system10_name: getTranslationByKey('weapons-u'),
                vehicle_system_die: "1d10"
            });
        } else {
            setAttrs({
                vehicle_system1_roll: 1, vehicle_system1_name: getTranslationByKey('cargo-compartment-u'),
                vehicle_system2_roll: 2, vehicle_system2_name: getTranslationByKey('communications-u'),
                vehicle_system3_roll: 3, vehicle_system3_name: getTranslationByKey('controls-u'),
                vehicle_system4_roll: 4, vehicle_system4_name: getTranslationByKey('drive-u') + "/" + getTranslationByKey('repulsorlift-u'),
                vehicle_system5_roll: 5, vehicle_system5_name: getTranslationByKey('crew-u') + "/" + getTranslationByKey('passengers-u'),
                vehicle_system6_roll: 6, vehicle_system6_name: getTranslationByKey('power-core-u'),
                vehicle_system7_roll: 7, vehicle_system7_name: getTranslationByKey('sensors-u'),
                vehicle_system8_roll: 8, vehicle_system8_name: getTranslationByKey('weapons-u'),
                vehicle_system9_roll: 0, vehicle_system9_name: "",
                vehicle_system10_roll: 0, vehicle_system10_name: "",
                vehicle_system_die: "1d8"
            });
        }
    });
});

// Hit Locations
on("change:hit_locations", function() {
    getAttrs(["hit_locations", "hp_max_base"], function(values) {
        var negative_hp_max_base = 0 - parseInt(values.hp_max_base);

        if (values.hit_locations === "rabble") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 20, location1_name: getTranslationByKey('hit-points-u'), location1_hp_max_base_mod: 0,
                location2_table_start: 0, location2_table_end: 0, location2_name: " ", location2_hp_max_base_mod: negative_hp_max_base,
                location3_table_start: 0, location3_table_end: 0, location3_name: " ", location3_hp_max_base_mod: negative_hp_max_base,
                location4_table_start: 0, location4_table_end: 0, location4_name: " ", location4_hp_max_base_mod: negative_hp_max_base,
                location5_table_start: 0, location5_table_end: 0, location5_name: " ", location5_hp_max_base_mod: negative_hp_max_base,
                location6_table_start: 0, location6_table_end: 0, location6_name: " ", location6_hp_max_base_mod: negative_hp_max_base,
                location7_table_start: 0, location7_table_end: 0, location7_name: " ", location7_hp_max_base_mod: negative_hp_max_base,
                location8_table_start: 0, location8_table_end: 0, location8_name: " ", location8_hp_max_base_mod: negative_hp_max_base,
                location9_table_start: 0, location9_table_end: 0, location9_name: " ", location9_hp_max_base_mod: negative_hp_max_base,
                location10_table_start: 0, location10_table_end: 0, location10_name: " ", location10_hp_max_base_mod: negative_hp_max_base,
                location11_table_start: 0, location11_table_end: 0, location11_name: " ", location11_hp_max_base_mod: negative_hp_max_base,
                location12_table_start: 0, location12_table_end: 0, location12_name: " ", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 0, location3_display: 0, location4_display: 0, location5_display: 0, location6_display: 0,
                location7_display: 0, location8_display: 0, location9_display: 0, location10_display: 0, location11_display: 0, location12_display: 0,
                location_notes_1_display: 1, location_notes_7_display: 0, location_notes_8_display: 0, location_notes_9_display: 0, location_notes_10_display: 0
            });
        } else if (values.hit_locations === "simplified") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 20, location1_name: getTranslationByKey('hit-points-u'), location1_hp_max_base_mod: 0,
                location2_table_start: 0, location2_table_end: 0, location2_name: " ", location2_hp_max_base_mod: negative_hp_max_base,
                location3_table_start: 0, location3_table_end: 0, location3_name: " ", location3_hp_max_base_mod: negative_hp_max_base,
                location4_table_start: 0, location4_table_end: 0, location4_name: " ", location4_hp_max_base_mod: negative_hp_max_base,
                location5_table_start: 0, location5_table_end: 0, location5_name: " ", location5_hp_max_base_mod: negative_hp_max_base,
                location6_table_start: 0, location6_table_end: 0, location6_name: " ", location6_hp_max_base_mod: negative_hp_max_base,
                location7_table_start: 0, location7_table_end: 0, location7_name: " ", location7_hp_max_base_mod: negative_hp_max_base,
                location8_table_start: 0, location8_table_end: 0, location8_name: " ", location8_hp_max_base_mod: negative_hp_max_base,
                location9_table_start: 0, location9_table_end: 0, location9_name: " ", location9_hp_max_base_mod: negative_hp_max_base,
                location10_table_start: 0, location10_table_end: 0, location10_name: " ", location10_hp_max_base_mod: negative_hp_max_base,
                location11_table_start: 0, location11_table_end: 0, location11_name: " ", location11_hp_max_base_mod: negative_hp_max_base,
                location12_table_start: 0, location12_table_end: 0, location12_name: " ", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 0, location3_display: 0, location4_display: 0, location5_display: 0, location6_display: 0,
                location7_display: 0, location8_display: 0, location9_display: 0, location10_display: 0, location11_display: 0, location12_display: 0,
                location_notes_1_display: 1, location_notes_7_display: 0, location_notes_8_display: 0, location_notes_9_display: 0, location_notes_10_display: 0
            });
        } else if (values.hit_locations === "arachnid") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 2, location1_name: getTranslationByKey('rear-right-leg-u'), location1_hp_max_base_mod: -1,
                location2_table_start: 3, location2_table_end: 4, location2_name: getTranslationByKey('rear-left-leg-u'), location2_hp_max_base_mod: -1,
                location3_table_start: 5, location3_table_end: 6, location3_name: getTranslationByKey('mid-right-leg-u'), location3_hp_max_base_mod: -1,
                location4_table_start: 7, location4_table_end: 8, location4_name: getTranslationByKey('mid-left-leg-u'), location4_hp_max_base_mod: -1,
                location5_table_start: 9, location5_table_end: 10, location5_name: getTranslationByKey('fore-right-leg-u'), location5_hp_max_base_mod: -1,
                location6_table_start: 11, location6_table_end: 12, location6_name: getTranslationByKey('fore-left-leg-u'), location6_hp_max_base_mod: -1,
                location7_table_start: 13, location7_table_end: 14, location7_name: getTranslationByKey('abdomen-u'), location7_hp_max_base_mod: 2,
                location8_table_start: 15, location8_table_end: 16, location8_name: getTranslationByKey('front-right-leg-u'), location8_hp_max_base_mod: -1,
                location9_table_start: 17, location9_table_end: 18, location9_name: getTranslationByKey('front-left-leg-u'), location9_hp_max_base_mod: -1,
                location10_table_start: 19, location10_table_end: 20, location10_name: getTranslationByKey('cephalothorax-u'), location10_hp_max_base_mod: 1,
                location11_table_start: 0, location11_table_end: 0, location11_name: "", location11_hp_max_base_mod: negative_hp_max_base,
                location12_table_start: 0, location12_table_end: 0, location12_name: "", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 1, location9_display: 1, location10_display: 1, location11_display: 0, location12_display: 0,
                location_notes_1_display: 0, location_notes_7_display: 0, location_notes_8_display: 0, location_notes_9_display: 0, location_notes_10_display: 1
            });
        } else if (values.hit_locations === "humanoid") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 3, location1_name: getTranslationByKey('right-leg-u'), location1_hp_max_base_mod: 0,
                location2_table_start: 4, location2_table_end: 6, location2_name: getTranslationByKey('left-leg-u'), location2_hp_max_base_mod: 0,
                location3_table_start: 7, location3_table_end: 9, location3_name: getTranslationByKey('abdomen-u'), location3_hp_max_base_mod: 1,
                location4_table_start: 10, location4_table_end: 12, location4_name: getTranslationByKey('chest-u'), location4_hp_max_base_mod: 2,
                location5_table_start: 13, location5_table_end: 15, location5_name: getTranslationByKey('right-arm-u'), location5_hp_max_base_mod: -1,
                location6_table_start: 16, location6_table_end: 18, location6_name: getTranslationByKey('left-arm-u'), location6_hp_max_base_mod: -1,
                location7_table_start: 19, location7_table_end: 20, location7_name: getTranslationByKey('head-u'), location7_hp_max_base_mod: 0,
                location8_table_start: 0, location8_table_end: 0, location8_name: " ", location8_hp_max_base_mod: negative_hp_max_base,
                location9_table_start: 0, location9_table_end: 0, location9_name: " ", location9_hp_max_base_mod: negative_hp_max_base,
                location10_table_start: 0, location10_table_end: 0, location10_name: " ", location10_hp_max_base_mod: negative_hp_max_base,
                location11_table_start: 0, location11_table_end: 0, location11_name: " ", location11_hp_max_base_mod: negative_hp_max_base,
                location12_table_start: 0, location12_table_end: 0, location12_name: " ", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 0, location9_display: 0, location10_display: 0, location11_display: 0, location12_display: 0,
                location_notes_1_display: 0, location_notes_7_display: 1, location_notes_8_display: 0, location_notes_9_display: 0, location_notes_10_display: 0

            });
        } else if (values.hit_locations === "centaurid") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 3, location1_name: getTranslationByKey('rear-right-leg-u'), location1_hp_max_base_mod: 0,
                location2_table_start: 4, location2_table_end: 6, location2_name: getTranslationByKey('rear-left-leg-u'), location2_hp_max_base_mod: 0,
                location3_table_start: 7, location3_table_end: 8, location3_name: getTranslationByKey('hindquarters-u'), location3_hp_max_base_mod: 1,
                location4_table_start: 9, location4_table_end: 10, location4_name: getTranslationByKey('forequarters-u'), location4_hp_max_base_mod: 2,
                location5_table_start: 11, location5_table_end: 12, location5_name: getTranslationByKey('front-right-leg-u'), location5_hp_max_base_mod: 0,
                location6_table_start: 13, location6_table_end: 14, location6_name: getTranslationByKey('front-left-leg-u'), location6_hp_max_base_mod: 0,
                location7_table_start: 15, location7_table_end: 16, location7_name: getTranslationByKey('chest-u'), location7_hp_max_base_mod: -1,
                location8_table_start: 17, location8_table_end: 17, location8_name: getTranslationByKey('right-arm-u'), location8_hp_max_base_mod: -4,
                location9_table_start: 18, location9_table_end: 18, location9_name: getTranslationByKey('left-arm-u'), location9_hp_max_base_mod: -4,
                location10_table_start: 19, location10_table_end: 20, location10_name: getTranslationByKey('head-u'), location10_hp_max_base_mod: -3,
                location11_table_start: 0, location11_table_end: 0, location11_name: " ", location11_hp_max_base_mod: negative_hp_max_base,
                location12_table_start: 0, location12_table_end: 0, location12_name: " ", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 1, location9_display: 1, location10_display: 1, location11_display: 0, location12_display: 0,
                location_notes_1_display: 0, location_notes_7_display: 0, location_notes_8_display: 0, location_notes_9_display: 0, location_notes_10_display: 1
            });
        } else if (values.hit_locations === "decapoda") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 1, location1_name: getTranslationByKey('rear-right-leg-u'), location1_hp_max_base_mod: -1,
                location2_table_start: 2, location2_table_end: 2, location2_name: getTranslationByKey('rear-left-leg-u'), location2_hp_max_base_mod: -1,
                location3_table_start: 3, location3_table_end: 3, location3_name: getTranslationByKey('mid-right-leg-u'), location3_hp_max_base_mod: -1,
                location4_table_start: 4, location4_table_end: 4, location4_name: getTranslationByKey('mid-left-leg-u'), location4_hp_max_base_mod: -1,
                location5_table_start: 5, location5_table_end: 5, location5_name: getTranslationByKey('fore-right-leg-u'), location5_hp_max_base_mod: -1,
                location6_table_start: 6, location6_table_end: 6, location6_name: getTranslationByKey('fore-left-leg-u'), location6_hp_max_base_mod: -1,
                location7_table_start: 7, location7_table_end: 7, location7_name: getTranslationByKey('front-right-leg-u'), location7_hp_max_base_mod: -1,
                location8_table_start: 8, location8_table_end: 8, location8_name: getTranslationByKey('front-left-leg-u'), location8_hp_max_base_mod: -1,
                location9_table_start: 9, location9_table_end: 10, location9_name: getTranslationByKey('abdomen-u'), location9_hp_max_base_mod: 1,
                location10_table_start: 11, location10_table_end: 16, location10_name: getTranslationByKey('cephalothorax-u'), location10_hp_max_base_mod: 2,
                location11_table_start: 17, location11_table_end: 18, location11_name: getTranslationByKey('right-pincer-u'), location11_hp_max_base_mod: 2,
                location12_table_start: 19, location12_table_end: 20, location12_name: getTranslationByKey('left-pincer-u'), location12_hp_max_base_mod: 0,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 1, location9_display: 1, location10_display: 1, location11_display: 1, location12_display: 1,
                location_notes_1_display: 0, location_notes_7_display: 0, location_notes_8_display: 0, location_notes_9_display: 0, location_notes_10_display: 0
            });
        } else if (values.hit_locations === "decapodiform") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 1, location1_name: getTranslationByKey('tentacle-1-u'), location1_hp_max_base_mod: -1,
                location2_table_start: 2, location2_table_end: 2, location2_name: getTranslationByKey('tentacle-2-u'), location2_hp_max_base_mod: -1,
                location3_table_start: 3, location3_table_end: 3, location3_name: getTranslationByKey('tentacle-3-u'), location3_hp_max_base_mod: -1,
                location4_table_start: 4, location4_table_end: 4, location4_name: getTranslationByKey('tentacle-4-u'), location4_hp_max_base_mod: -1,
                location5_table_start: 5, location5_table_end: 5, location5_name: getTranslationByKey('tentacle-5-u'), location5_hp_max_base_mod: -1,
                location6_table_start: 6, location6_table_end: 6, location6_name: getTranslationByKey('tentacle-6-u'), location6_hp_max_base_mod: -1,
                location7_table_start: 7, location7_table_end: 7, location7_name: getTranslationByKey('tentacle-7-u'), location7_hp_max_base_mod: -1,
                location8_table_start: 8, location8_table_end: 8, location8_name: getTranslationByKey('tentacle-8-u'), location8_hp_max_base_mod: -1,
                location9_table_start: 9, location9_table_end: 11, location9_name: getTranslationByKey('long-tentacle-1-u'), location9_hp_max_base_mod: 0,
                location10_table_start: 12, location10_table_end: 14, location10_name: getTranslationByKey('long-tentacle-2-u'), location10_hp_max_base_mod: 0,
                location11_table_start: 15, location11_table_end: 17, location11_name: getTranslationByKey('body-u'), location11_hp_max_base_mod: 2,
                location12_table_start: 18, location12_table_end: 20, location12_name: getTranslationByKey('head-u'), location12_hp_max_base_mod: 1,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 1, location9_display: 1, location10_display: 1, location11_display: 1, location12_display: 1,
                location_notes_1_display: 0, location_notes_7_display: 0, location_notes_8_display: 0, location_notes_9_display: 0, location_notes_10_display: 0
            });
        } else if (values.hit_locations === "dorsal_finned_aquatic") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 3, location1_name: getTranslationByKey('tail-u'), location1_hp_max_base_mod: 0,
                location2_table_start: 4, location2_table_end: 6, location2_name: getTranslationByKey('dorsal-fin-u'), location2_hp_max_base_mod: -1,
                location3_table_start: 7, location3_table_end: 10, location3_name: getTranslationByKey('hindquarters-u'), location3_hp_max_base_mod: 1,
                location4_table_start: 11, location4_table_end: 14, location4_name: getTranslationByKey('forequarters-u'), location4_hp_max_base_mod: 2,
                location5_table_start: 15, location5_table_end: 16, location5_name: getTranslationByKey('right-fin-u'), location5_hp_max_base_mod: -1,
                location6_table_start: 17, location6_table_end: 18, location6_name: getTranslationByKey('left-fin-u'), location6_hp_max_base_mod: -1,
                location7_table_start: 19, location7_table_end: 20, location7_name: getTranslationByKey('head-u'), location7_hp_max_base_mod: 0,
                location8_table_start: 0, location8_table_end: 0, location8_name: " ", location8_hp_max_base_mod: negative_hp_max_base,
                location9_table_start: 0, location9_table_end: 0, location9_name: " ", location9_hp_max_base_mod: negative_hp_max_base,
                location10_table_start: 0, location10_table_end: 0, location10_name: " ", location10_hp_max_base_mod: negative_hp_max_base,
                location11_table_start: 0, location11_table_end: 0, location11_name: " ", location11_hp_max_base_mod: negative_hp_max_base,
                location12_table_start: 0, location12_table_end: 0, location12_name: " ", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 0, location9_display: 0, location10_display: 0, location11_display: 0, location12_display: 0,
                location_notes_1_display: 0, location_notes_7_display: 1, location_notes_8_display: 0, location_notes_9_display: 0, location_notes_10_display: 0
            });
        } else if (values.hit_locations === "draconic") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 2, location1_name: getTranslationByKey('tail-u'), location1_hp_max_base_mod: 0,
                location2_table_start: 3, location2_table_end: 4, location2_name: getTranslationByKey('rear-right-leg-u'), location2_hp_max_base_mod: 0,
                location3_table_start: 5, location3_table_end: 6, location3_name: getTranslationByKey('rear-left-leg-u'), location3_hp_max_base_mod: 0,
                location4_table_start: 7, location4_table_end: 8, location4_name: getTranslationByKey('hindquarters-u'), location4_hp_max_base_mod: 1,
                location5_table_start: 9, location5_table_end: 10, location5_name: getTranslationByKey('right-wing-u'), location5_hp_max_base_mod: -1,
                location6_table_start: 11, location6_table_end: 12, location6_name: getTranslationByKey('left-wing-u'), location6_hp_max_base_mod: -1,
                location7_table_start: 13, location7_table_end: 14, location7_name: getTranslationByKey('forequarters-u'), location7_hp_max_base_mod: 2,
                location8_table_start: 15, location8_table_end: 16, location8_name: getTranslationByKey('front-right-leg-u'), location8_hp_max_base_mod: 0,
                location9_table_start: 17, location9_table_end: 18, location9_name: getTranslationByKey('front-left-leg-u'), location9_hp_max_base_mod: 0,
                location10_table_start: 19, location10_table_end: 20, location10_name: getTranslationByKey('head-u'), location10_hp_max_base_mod: 0,
                location11_table_start: 0, location11_table_end: 0, location11_name: " ", location11_hp_max_base_mod: negative_hp_max_base,
                location12_table_start: 0, location12_table_end: 0, location12_name: " ", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 1, location9_display: 1, location10_display: 1, location11_display: 0, location12_display: 0,
                location_notes_1_display: 0, location_notes_7_display: 0, location_notes_8_display: 0, location_notes_9_display: 0, location_notes_10_display: 1
            });
        } else if (values.hit_locations === "insect") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 1, location1_name: getTranslationByKey('right-rear-leg-u'), location1_hp_max_base_mod: -1,
                location2_table_start: 2, location2_table_end: 2, location2_name: getTranslationByKey('left-rear-leg-u'), location2_hp_max_base_mod: -1,
                location3_table_start: 3, location3_table_end: 3, location3_name: getTranslationByKey('mid-right-leg-u'), location3_hp_max_base_mod: -1,
                location4_table_start: 4, location4_table_end: 4, location4_name: getTranslationByKey('mid-left-leg-u'), location4_hp_max_base_mod: -1,
                location5_table_start: 5, location5_table_end: 9, location5_name: getTranslationByKey('abdomen-u'), location5_hp_max_base_mod: 1,
                location6_table_start: 10, location6_table_end: 13, location6_name: getTranslationByKey('thorax-u'), location6_hp_max_base_mod: 2,
                location7_table_start: 14, location7_table_end: 14, location7_name: getTranslationByKey('front-right-leg-u'), location7_hp_max_base_mod: -1,
                location8_table_start: 15, location8_table_end: 15, location8_name: getTranslationByKey('front-left-leg-u'), location8_hp_max_base_mod: -1,
                location9_table_start: 16, location9_table_end: 20, location9_name: getTranslationByKey('head-u'), location9_hp_max_base_mod: 0,
                location10_table_start: 0, location10_table_end: 0, location10_name: " ", location10_hp_max_base_mod: negative_hp_max_base,
                location11_table_start: 0, location11_table_end: 0, location11_name: " ", location11_hp_max_base_mod: negative_hp_max_base,
                location12_table_start: 0, location12_table_end: 0, location12_name: " ", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 1, location9_display: 1, location10_display: 0, location11_display: 0, location12_display: 0,
                location_notes_1_display: 0, location_notes_7_display: 0, location_notes_8_display: 0, location_notes_9_display: 1, location_notes_10_display: 0
            });
        } else if (values.hit_locations === "octopodiform") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 2, location1_name: getTranslationByKey('tentacle-1-u'), location1_hp_max_base_mod: 0,
                location2_table_start: 3, location2_table_end: 4, location2_name: getTranslationByKey('tentacle-2-u'), location2_hp_max_base_mod: 0,
                location3_table_start: 5, location3_table_end: 6, location3_name: getTranslationByKey('tentacle-3-u'), location3_hp_max_base_mod: 0,
                location4_table_start: 7, location4_table_end: 8, location4_name: getTranslationByKey('tentacle-4-u'), location4_hp_max_base_mod: 0,
                location5_table_start: 9, location5_table_end: 10, location5_name: getTranslationByKey('tentacle-5-u'), location5_hp_max_base_mod: 0,
                location6_table_start: 11, location6_table_end: 12, location6_name: getTranslationByKey('tentacle-6-u'), location6_hp_max_base_mod: 0,
                location7_table_start: 13, location7_table_end: 14, location7_name: getTranslationByKey('tentacle-7-u'), location7_hp_max_base_mod: 0,
                location8_table_start: 15, location8_table_end: 16, location8_name: getTranslationByKey('tentacle-8-u'), location8_hp_max_base_mod: 0,
                location9_table_start: 17, location9_table_end: 18, location9_name: getTranslationByKey('body-u'), location9_hp_max_base_mod: 1,
                location10_table_start: 19, location10_table_end: 20, location10_name: getTranslationByKey('head-u'), location10_hp_max_base_mod: 2,
                location11_table_start: 0, location11_table_end: 0, location11_name: " ", location11_hp_max_base_mod: negative_hp_max_base,
                location12_table_start: 0, location12_table_end: 0, location12_name: " ", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 1, location9_display: 1, location10_display: 1, location11_display: 0, location12_display: 0,
                location_notes_1_display: 0, location_notes_7_display: 0, location_notes_8_display: 0, location_notes_9_display: 0, location_notes_10_display: 1
            });
        } else if (values.hit_locations === "pachyderm") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 2, location1_name: getTranslationByKey('rear-right-leg-u'), location1_hp_max_base_mod: 0,
                location2_table_start: 3, location2_table_end: 4, location2_name: getTranslationByKey('rear-left-leg-u'), location2_hp_max_base_mod: 0,
                location3_table_start: 5, location3_table_end: 8, location3_name: getTranslationByKey('hindquarters-u'), location3_hp_max_base_mod: 1,
                location4_table_start: 9, location4_table_end: 12, location4_name: getTranslationByKey('forequarters-u'), location4_hp_max_base_mod: 2,
                location5_table_start: 13, location5_table_end: 14, location5_name: getTranslationByKey('front-right-leg-u'), location5_hp_max_base_mod: 0,
                location6_table_start: 15, location6_table_end: 16, location6_name: getTranslationByKey('front-left-leg-u'), location6_hp_max_base_mod: 0,
                location7_table_start: 17, location7_table_end: 17, location7_name: getTranslationByKey('trunk-u'), location7_hp_max_base_mod: -1,
                location8_table_start: 18, location8_table_end: 20, location8_name: getTranslationByKey('head-u'), location8_hp_max_base_mod: 0,
                location9_table_start: 0, location9_table_end: 0, location9_name: " ", location9_hp_max_base_mod: negative_hp_max_base,
                location10_table_start: 0, location10_table_end: 0, location10_name: " ", location10_hp_max_base_mod: negative_hp_max_base,
                location11_table_start: 0, location11_table_end: 0, location11_name: " ", location11_hp_max_base_mod: negative_hp_max_base,
                location12_table_start: 0, location12_table_end: 0, location12_name: " ", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 1, location9_display: 0, location10_display: 0, location11_display: 0, location12_display: 0,
                location_notes_1_display: 0, location_notes_7_display: 0, location_notes_8_display: 1, location_notes_9_display: 0, location_notes_10_display: 0
            });
        } else if (values.hit_locations === "quadruped") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 2, location1_name: getTranslationByKey('rear-right-leg-u'), location1_hp_max_base_mod: 0,
                location2_table_start: 3, location2_table_end: 4, location2_name: getTranslationByKey('rear-left-leg-u'), location2_hp_max_base_mod: 0,
                location3_table_start: 5, location3_table_end: 7, location3_name: getTranslationByKey('hindquarters-u'), location3_hp_max_base_mod: 1,
                location4_table_start: 8, location4_table_end: 10, location4_name: getTranslationByKey('forequarters-u'), location4_hp_max_base_mod: 2,
                location5_table_start: 11, location5_table_end: 13, location5_name: getTranslationByKey('front-right-leg-u'), location5_hp_max_base_mod: 0,
                location6_table_start: 14, location6_table_end: 16, location6_name: getTranslationByKey('front-left-leg-u'), location6_hp_max_base_mod: 0,
                location7_table_start: 17, location7_table_end: 20, location7_name: getTranslationByKey('head-u'), location7_hp_max_base_mod: 0,
                location8_table_start: 0, location8_table_end: 0, location8_name: " ", location8_hp_max_base_mod: negative_hp_max_base,
                location9_table_start: 0, location9_table_end: 0, location9_name: " ", location9_hp_max_base_mod: negative_hp_max_base,
                location10_table_start: 0, location10_table_end: 0, location10_name: " ", location10_hp_max_base_mod: negative_hp_max_base,
                location11_table_start: 0, location11_table_end: 0, location11_name: " ", location11_hp_max_base_mod: negative_hp_max_base,
                location12_table_start: 0, location12_table_end: 0, location12_name: " ", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 0, location9_display: 0, location10_display: 0, location11_display: 0, location12_display: 0,
                location_notes_1_display: 0, location_notes_7_display: 1, location_notes_8_display: 0, location_notes_9_display: 0, location_notes_10_display: 0
            });
        } else if (values.hit_locations === "serpentine") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 3, location1_name: getTranslationByKey('tail-tip-u'), location1_hp_max_base_mod: 0,
                location2_table_start: 4, location2_table_end: 5, location2_name: getTranslationByKey('mid-end-length-u'), location2_hp_max_base_mod: 0,
                location3_table_start: 6, location3_table_end: 7, location3_name: getTranslationByKey('fore-end-length-u'), location3_hp_max_base_mod: 0,
                location4_table_start: 8, location4_table_end: 9, location4_name: getTranslationByKey('rear-mid-length-u'), location4_hp_max_base_mod: 1,
                location5_table_start: 10, location5_table_end: 12, location5_name: getTranslationByKey('mid-mid-length-u'), location5_hp_max_base_mod: 1,
                location6_table_start: 13, location6_table_end: 14, location6_name: getTranslationByKey('fore-mid-length-u'), location6_hp_max_base_mod: 1,
                location7_table_start: 15, location7_table_end: 16, location7_name: getTranslationByKey('rear-fore-length-u'), location7_hp_max_base_mod: 0,
                location8_table_start: 17, location8_table_end: 18, location8_name: getTranslationByKey('mid-fore-length-u'), location8_hp_max_base_mod: 0,
                location9_table_start: 19, location9_table_end: 20, location9_name: getTranslationByKey('head-u'), location9_hp_max_base_mod: 0,
                location10_table_start: 0, location10_table_end: 0, location10_name: " ", location10_hp_max_base_mod: negative_hp_max_base,
                location11_table_start: 0, location11_table_end: 0, location11_name: " ", location11_hp_max_base_mod: negative_hp_max_base,
                location12_table_start: 0, location12_table_end: 0, location12_name: " ", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 1, location9_display: 1, location10_display: 0, location11_display: 0, location12_display: 0,
                location_notes_1_display: 0, location_notes_7_display: 0, location_notes_8_display: 0, location_notes_9_display: 1, location_notes_10_display: 0
            });
        } else if (values.hit_locations === "tailed_arachnid") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 2, location1_name: getTranslationByKey('tail-u'), location1_hp_max_base_mod: 0,
                location2_table_start: 3, location2_table_end: 3, location2_name: getTranslationByKey('rear-right-leg-u'), location2_hp_max_base_mod: -1,
                location3_table_start: 4, location3_table_end: 4, location3_name: getTranslationByKey('rear-left-leg-u'), location3_hp_max_base_mod: -1,
                location4_table_start: 5, location4_table_end: 5, location4_name: getTranslationByKey('mid-right-leg-u'), location4_hp_max_base_mod: -1,
                location5_table_start: 6, location5_table_end: 6, location5_name: getTranslationByKey('mid-left-leg-u'), location5_hp_max_base_mod: -1,
                location6_table_start: 7, location6_table_end: 7, location6_name: getTranslationByKey('fore-right-leg-u'), location6_hp_max_base_mod: -1,
                location7_table_start: 8, location7_table_end: 8, location7_name: getTranslationByKey('fore-left-leg-u'), location7_hp_max_base_mod: -1,
                location8_table_start: 9, location8_table_end: 12, location8_name: getTranslationByKey('thorax-u'), location8_hp_max_base_mod: 1,
                location9_table_start: 13, location9_table_end: 15, location9_name: getTranslationByKey('right-pincer-u'), location9_hp_max_base_mod: 0,
                location10_table_start: 16, location10_table_end: 18, location10_name: getTranslationByKey('left-pincer-u'), location10_hp_max_base_mod: 0,
                location11_table_start: 19, location11_table_end: 20, location11_name: getTranslationByKey('cephalothorax-u'), location11_hp_max_base_mod: 2,
                location12_table_start: 0, location12_table_end: 0, location12_name: " ", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 1, location9_display: 1, location10_display: 1, location11_display: 1, location12_display: 0,
                location_notes_1_display: 0, location_notes_7_display: 0, location_notes_8_display: 0, location_notes_9_display: 0, location_notes_10_display: 0
            });
        } else if (values.hit_locations === "tailed_biped") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 3, location1_name: getTranslationByKey('tail-u'), location1_hp_max_base_mod: 0,
                location2_table_start: 4, location2_table_end: 5, location2_name: getTranslationByKey('right-leg-u'), location2_hp_max_base_mod: 0,
                location3_table_start: 6, location3_table_end: 7, location3_name: getTranslationByKey('left-leg-u'), location3_hp_max_base_mod: 0,
                location4_table_start: 8, location4_table_end: 10, location4_name: getTranslationByKey('abdomen-u'), location4_hp_max_base_mod: 1,
                location5_table_start: 11, location5_table_end: 14, location5_name: getTranslationByKey('chest-u'), location5_hp_max_base_mod: 2,
                location6_table_start: 15, location6_table_end: 16, location6_name: getTranslationByKey('right-arm-u'), location6_hp_max_base_mod: -1,
                location7_table_start: 17, location7_table_end: 18, location7_name: getTranslationByKey('left-arm-u'), location7_hp_max_base_mod: -1,
                location8_table_start: 19, location8_table_end: 20, location8_name: getTranslationByKey('head-u'), location8_hp_max_base_mod: 0,
                location9_table_start: 0, location9_table_end: 0, location9_name: " ", location9_hp_max_base_mod: negative_hp_max_base,
                location10_table_start: 0, location10_table_end: 0, location10_name: " ", location10_hp_max_base_mod: negative_hp_max_base,
                location11_table_start: 0, location11_table_end: 0, location11_name: " ", location11_hp_max_base_mod: negative_hp_max_base,
                location12_table_start: 0, location12_table_end: 0, location12_name: " ", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 1, location9_display: 0, location10_display: 0, location11_display: 0, location12_display: 0,
                location_notes_1_display: 0, location_notes_7_display: 0, location_notes_8_display: 1, location_notes_9_display: 0, location_notes_10_display: 0
            });
        } else if (values.hit_locations === "tailed_quadruped") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 3, location1_name: getTranslationByKey('tail-u'), location1_hp_max_base_mod: 0,
                location2_table_start: 4, location2_table_end: 5, location2_name: getTranslationByKey('rear-right-leg-u'), location2_hp_max_base_mod: 0,
                location3_table_start: 6, location3_table_end: 7, location3_name: getTranslationByKey('rear-left-leg-u'), location3_hp_max_base_mod: 0,
                location4_table_start: 8, location4_table_end: 10, location4_name: getTranslationByKey('hindquarters-u'), location4_hp_max_base_mod: 1,
                location5_table_start: 11, location5_table_end: 14, location5_name: getTranslationByKey('forequarters-u'), location5_hp_max_base_mod: 2,
                location6_table_start: 15, location6_table_end: 16, location6_name: getTranslationByKey('front-right-leg-u'), location6_hp_max_base_mod: -1,
                location7_table_start: 17, location7_table_end: 18, location7_name: getTranslationByKey('front-left-leg-u'), location7_hp_max_base_mod: -1,
                location8_table_start: 19, location8_table_end: 20, location8_name: getTranslationByKey('head-u'), location8_hp_max_base_mod: 0,
                location9_table_start: 0, location9_table_end: 0, location9_name: " ", location9_hp_max_base_mod: negative_hp_max_base,
                location10_table_start: 0, location10_table_end: 0, location10_name: " ", location10_hp_max_base_mod: negative_hp_max_base,
                location11_table_start: 0, location11_table_end: 0, location11_name: " ", location11_hp_max_base_mod: negative_hp_max_base,
                location12_table_start: 0, location12_table_end: 0, location12_name: " ", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 1, location9_display: 0, location10_display: 0, location11_display: 0, location12_display: 0,
                location_notes_1_display: 0, location_notes_7_display: 0, location_notes_8_display: 1, location_notes_9_display: 0, location_notes_10_display: 0
            });
        } else if (values.hit_locations === "winged_biped") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 3, location1_name: getTranslationByKey('right-leg-u'), location1_hp_max_base_mod: 0,
                location2_table_start: 4, location2_table_end: 6, location2_name: getTranslationByKey('left-leg-u'), location2_hp_max_base_mod: 0,
                location3_table_start: 7, location3_table_end: 9, location3_name: getTranslationByKey('abdomen-u'), location3_hp_max_base_mod: 1,
                location4_table_start: 10, location4_table_end: 10, location4_name: getTranslationByKey('chest-u'), location4_hp_max_base_mod: 2,
                location5_table_start: 11, location5_table_end: 12, location5_name: getTranslationByKey('right-wing-u'), location5_hp_max_base_mod: 0,
                location6_table_start: 13, location6_table_end: 14, location6_name: getTranslationByKey('left-wing-u'), location6_hp_max_base_mod: 0,
                location7_table_start: 15, location7_table_end: 16, location7_name: getTranslationByKey('right-arm-u'), location7_hp_max_base_mod: -1,
                location8_table_start: 17, location8_table_end: 18, location8_name: getTranslationByKey('left-arm-u'), location8_hp_max_base_mod: -1,
                location9_table_start: 19, location9_table_end: 20, location9_name: getTranslationByKey('head-u'), location9_hp_max_base_mod: 0,
                location10_table_start: 0, location10_table_end: 0, location10_name: " ", location10_hp_max_base_mod: negative_hp_max_base,
                location11_table_start: 0, location11_table_end: 0, location11_name: " ", location11_hp_max_base_mod: negative_hp_max_base,
                location12_table_start: 0, location12_table_end: 0, location12_name: " ", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 1, location9_display: 1, location10_display: 0, location11_display: 0, location12_display: 0,
                location_notes_1_display: 0, location_notes_7_display: 0, location_notes_8_display: 0, location_notes_9_display: 1, location_notes_10_display: 0
            });
        } else if (values.hit_locations === "winged_insect") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 1, location1_name: getTranslationByKey('rear-right-leg-u'), location1_hp_max_base_mod: -1,
                location2_table_start: 2, location2_table_end: 2, location2_name: getTranslationByKey('rear-left-leg-u'), location2_hp_max_base_mod: -1,
                location3_table_start: 3, location3_table_end: 4, location3_name: getTranslationByKey('metathorax-u'), location3_hp_max_base_mod: 1,
                location4_table_start: 5, location4_table_end: 5, location4_name: getTranslationByKey('mid-right-leg-u'), location4_hp_max_base_mod: -1,
                location5_table_start: 6, location5_table_end: 6, location5_name: getTranslationByKey('mid-left-leg-u'), location5_hp_max_base_mod: -1,
                location6_table_start: 7, location6_table_end: 10, location6_name: getTranslationByKey('prothorax-u'), location6_hp_max_base_mod: 2,
                location7_table_start: 11, location7_table_end: 12, location7_name: getTranslationByKey('right-wing-u'), location7_hp_max_base_mod: -1,
                location8_table_start: 13, location8_table_end: 14, location8_name: getTranslationByKey('left-wing-u'), location8_hp_max_base_mod: -1,
                location9_table_start: 15, location9_table_end: 16, location9_name: getTranslationByKey('front-right-leg-u'), location9_hp_max_base_mod: -1,
                location10_table_start: 17, location10_table_end: 18, location10_name: getTranslationByKey('front-left-leg-u'), location10_hp_max_base_mod: -1,
                location11_table_start: 19, location11_table_end: 20, location11_name: getTranslationByKey('head-u'), location11_hp_max_base_mod: 0,
                location12_table_start: 0, location12_table_end: 0, location12_name: " ", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 1, location9_display: 1, location10_display: 1, location11_display: 1, location12_display: 0,
                location_notes_1_display: 0, location_notes_7_display: 0, location_notes_8_display: 0, location_notes_9_display: 0, location_notes_10_display: 0
            });
        } else if (values.hit_locations === "winged_quadruped") {
            setAttrs({
                location1_table_start: 1, location1_table_end: 2, location1_name: getTranslationByKey('rear-right-leg-u'), location1_hp_max_base_mod: 0,
                location2_table_start: 3, location2_table_end: 4, location2_name: getTranslationByKey('rear-left-leg-u'), location2_hp_max_base_mod: 0,
                location3_table_start: 5, location3_table_end: 7, location3_name: getTranslationByKey('hindquarters-u'), location3_hp_max_base_mod: 1,
                location4_table_start: 8, location4_table_end: 10, location4_name: getTranslationByKey('forequarters-u'), location4_hp_max_base_mod: 2,
                location5_table_start: 11, location5_table_end: 12, location5_name: getTranslationByKey('right-wing-u'), location5_hp_max_base_mod: -1,
                location6_table_start: 13, location6_table_end: 14, location6_name: getTranslationByKey('left-wing-u'), location6_hp_max_base_mod: -1,
                location7_table_start: 15, location7_table_end: 16, location7_name: getTranslationByKey('front-right-leg-u'), location7_hp_max_base_mod: 0,
                location8_table_start: 17, location8_table_end: 18, location8_name: getTranslationByKey('front-left-leg-u'), location8_hp_max_base_mod: 0,
                location9_table_start: 19, location9_table_end: 20, location9_name: getTranslationByKey('head-u'), location9_hp_max_base_mod: 0,
                location10_table_start: 0, location10_table_end: 0, location10_name: " ", location10_hp_max_base_mod: negative_hp_max_base,
                location11_table_start: 0, location11_table_end: 0, location11_name: " ", location11_hp_max_base_mod: negative_hp_max_base,
                location12_table_start: 0, location12_table_end: 0, location12_name: " ", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 1, location9_display: 1, location10_display: 0, location11_display: 0, location12_display: 0,
                location_notes_1_display: 0, location_notes_7_display: 0, location_notes_8_display: 0, location_notes_9_display: 1, location_notes_10_display: 0
            });
        } else {
            setAttrs({
                location1_table_start: 0, location1_table_end: 0, location1_name: "", location1_hp_max_base_mod: negative_hp_max_base,
                location2_table_start: 0, location2_table_end: 0, location2_name: "", location2_hp_max_base_mod: negative_hp_max_base,
                location3_table_start: 0, location3_table_end: 0, location3_name: "", location3_hp_max_base_mod: negative_hp_max_base,
                location4_table_start: 0, location4_table_end: 0, location4_name: "", location4_hp_max_base_mod: negative_hp_max_base,
                location5_table_start: 0, location5_table_end: 0, location5_name: "", location5_hp_max_base_mod: negative_hp_max_base,
                location6_table_start: 0, location6_table_end: 0, location6_name: "", location6_hp_max_base_mod: negative_hp_max_base,
                location7_table_start: 0, location7_table_end: 0, location7_name: "", location7_hp_max_base_mod: negative_hp_max_base,
                location8_table_start: 0, location8_table_end: 0, location8_name: "", location8_hp_max_base_mod: negative_hp_max_base,
                location9_table_start: 0, location9_table_end: 0, location9_name: "", location9_hp_max_base_mod: negative_hp_max_base,
                location10_table_start: 0, location10_table_end: 0, location10_name: "", location10_hp_max_base_mod: negative_hp_max_base,
                location11_table_start: 0, location11_table_end: 0, location11_name: "", location11_hp_max_base_mod: negative_hp_max_base,
                location12_table_start: 0, location12_table_end: 0, location12_name: "", location12_hp_max_base_mod: negative_hp_max_base,
                location1_display: 1, location2_display: 1, location3_display: 1, location4_display: 1, location5_display: 1, location6_display: 1,
                location7_display: 1, location8_display: 1, location9_display: 1, location10_display: 1, location11_display: 1, location12_display: 1,
                location_notes_1_display: 0, location_notes_7_display: 0, location_notes_8_display: 0, location_notes_9_display: 0, location_notes_10_display: 0
            });
        }
    });
});

//M-Space Spaceship Toggle
on("change:msvehicle_maneuvering_tr change:msvehicle_engines_tr change:msvehicle_type change:msvehicle_tractor_beam change:msvehicle_storage change:msvehicle_sickbay change:msvehicle_sensors change:msvehicle_self_repair change:msvehicle_robot_arm change:msvehicle_rescue_utilities change:msvehicle_passengers change:msvehicle_open_space change:msvehicle_maneuvering change:msvehicle_lab change:msvehicle_hyperspace change:msvehicle_hanger change:msvehicle_environment change:msvehicle_extra_sensors change:msvehicle_escape_pod change:msvehicle_engines change:msvehicle_crew change:msvehicle_cockpit change:msvehicle_cargo change:msvehicle_airlock change:msvehicle_weapons", function() {
    getAttrs(["msvehicle_engines_tr", "msvehicle_maneuvering_tr", "msvehicle_type", "msvehicle_tractor_beam", "msvehicle_storage", "msvehicle_sickbay", "msvehicle_sensors", "msvehicle_self_repair", "msvehicle_robot_arm", "msvehicle_rescue_utilities", "msvehicle_passengers", "msvehicle_open_space", "msvehicle_maneuvering", "msvehicle_lab", "msvehicle_hyperspace", "msvehicle_hanger", "msvehicle_environment", "msvehicle_extra_sensors", "msvehicle_escape_pod", "msvehicle_engines", "msvehicle_crew", "msvehicle_cockpit", "msvehicle_cargo", "msvehicle_airlock", "msvehicle_weapons"], function(values) {
        var weapons = parseFloat(values.msvehicle_weapons);
        var tractor_beam = parseFloat(values.msvehicle_tractor_beam);
        var storage = parseFloat(values.msvehicle_storage);
        var sickbay = parseFloat(values.msvehicle_sickbay);
        var sensors = parseFloat(values.msvehicle_sensors);
        var self_repair = parseFloat(values.msvehicle_self_repair);
        var robot_arms = parseFloat(values.msvehicle_robot_arm);
        var rescue_utilities = parseFloat(values.msvehicle_rescue_utilities);
        var passengers = parseFloat(values.msvehicle_passengers);
        var open_space = parseFloat(values.msvehicle_open_space);
        var maneuvering = parseFloat(values.msvehicle_maneuvering);
        var lab = parseFloat(values.msvehicle_lab);
        var hyperspace = parseFloat(values.msvehicle_hyperspace);
        var hanger = parseFloat(values.msvehicle_hanger);
        var environment = parseFloat(values.msvehicle_environment);
        var extra_sensors = parseFloat(values.msvehicle_extra_sensors);
        var escape_pod = parseFloat(values.msvehicle_escape_pod);
        var engines = parseFloat(values.msvehicle_engines);
        var crew = parseFloat(values.msvehicle_crew);
        var cockpit = parseFloat(values.msvehicle_cockpit);
        var cargo = parseFloat(values.msvehicle_cargo);
        var airlock = parseFloat(values.msvehicle_airlock);

        var engines_tr = parseInt(values.msvehicle_engines_tr);
        var maneuvering_tr = parseInt(values.msvehicle_maneuvering_tr);

        var total_modules = weapons + tractor_beam + storage + sickbay + sensors + self_repair + robot_arms + rescue_utilities + passengers + open_space + maneuvering + lab + hyperspace + hanger + environment + extra_sensors + escape_pod + engines + crew + cockpit + cargo + airlock;

        var speed_tr = Math.ceil((engines*engines_tr)/total_modules);
        var handling_tr = Math.ceil((maneuvering*maneuvering_tr)/total_modules);


        var cargo_ts = 0;
        var cargo_te = 0;
        var cockpit_ts = 0;
        var cockpit_te = 0;
        var crew_ts = 0;
        var crew_te = 0;
        var engines_ts = 0;
        var engines_te = 0;
        var escape_pod_ts = 0;
        var escape_pod_te = 0;
        var extra_sensors_ts = 0;
        var extra_sensors_te = 0;
        var hanger_ts = 0;
        var hanger_te = 0;
        var hyperspace_ts = 0;
        var hyperspace_te = 0;
        var lab_ts = 0;
        var lab_te = 0;
        var maneuvering_ts = 0;
        var maneuvering_te = 0;
        var open_space_ts = 0;
        var open_space_te = 0;
        var passengers_ts = 0;
        var passengers_te = 0;
        var robot_arms_ts = 0;
        var robot_arms_te = 0;
        var self_repair_ts = 0;
        var self_repair_te = 0;
        var sickbay_ts = 0;
        var sickbay_te = 0;
        var storage_ts = 0;
        var storage_te = 0;
        var tractor_beam_ts = 0;
        var tractor_beam_te = 0;
        var weapons_ts = 0;
        var weapons_te = 0;
        if (values.msvehicle_type == "spaceship") {
            var pct_values = {};

            pct_values['weapons'] = (weapons/total_modules)*100;
            if (pct_values['weapons'] < 1 && pct_values['weapons'] > 0) {
                pct_values['weapons'] = 1;
            } else {
                pct_values['weapons'] = Math.round(pct_values['weapons']);
            }
            pct_values['tractor_beam'] = (tractor_beam/total_modules)*100;
            if (pct_values['tractor_beam'] < 1 && pct_values['tractor_beam'] > 0) {
                pct_values['tractor_beam'] = 1;
            } else {
                pct_values['tractor_beam'] = Math.round(pct_values['tractor_beam']);
            }
            pct_values['storage'] = (storage/total_modules)*100;
            if (pct_values['storage'] < 1 && pct_values['storage'] > 0) {
                pct_values['storage'] = 1;
            } else {
                pct_values['storage'] = Math.round(pct_values['storage']);
            }
            pct_values['sickbay'] = (sickbay/total_modules)*100;
            if (pct_values['sickbay'] < 1 && pct_values['sickbay'] > 0) {
                pct_values['sickbay'] = 1;
            } else {
                pct_values['sickbay'] = Math.round(pct_values['sickbay']);
            }
            pct_values['self_repair'] = (self_repair/total_modules)*100;
            if (pct_values['self_repair'] < 1 && pct_values['self_repair'] > 0) {
                pct_values['self_repair'] = 1;
            } else {
                pct_values['self_repair'] = Math.round(pct_values['self_repair']);
            }
            pct_values['robot_arms'] = (robot_arms/total_modules)*100;
            if (pct_values['robot_arms'] < 1 && pct_values['robot_arms'] > 0) {
                pct_values['robot_arms'] = 1;
            } else {
                pct_values['robot_arms'] = Math.round(pct_values['robot_arms']);
            }
            pct_values['passengers'] = (passengers/total_modules)*100;
            if (pct_values['passengers'] < 1 && pct_values['passengers'] > 0) {
                pct_values['passengers'] = 1;
            } else {
                pct_values['passengers'] = Math.round(pct_values['passengers']);
            }
            pct_values['open_space'] = (open_space/total_modules)*100;
            if (pct_values['open_space'] < 1 && pct_values['open_space'] > 0) {
                pct_values['open_space'] = 1;
            } else {
                pct_values['open_space'] = Math.round(pct_values['open_space']);
            }
            pct_values['maneuvering'] = (maneuvering/total_modules)*100;
            if (pct_values['maneuvering'] < 1 && pct_values['maneuvering'] > 0) {
                pct_values['maneuvering'] = 1;
            } else {
                pct_values['maneuvering'] = Math.round(pct_values['maneuvering']);
            }
            pct_values['lab'] = (lab/total_modules)*100;
            if (pct_values['lab'] < 1 && pct_values['lab'] > 0) {
                pct_values['lab'] = 1;
            } else {
                pct_values['lab'] = Math.round(pct_values['lab']);
            }
            pct_values['hyperspace'] = (hyperspace/total_modules)*100;
            if (pct_values['hyperspace'] < 1 && pct_values['hyperspace'] > 0) {
                pct_values['hyperspace'] = 1;
            } else {
                pct_values['hyperspace'] = Math.round(pct_values['hyperspace']);
            }
            pct_values['hanger'] = (hanger/total_modules)*100;
            if (pct_values['hanger'] < 1 && pct_values['hanger'] > 0) {
                pct_values['hanger'] = 1;
            } else {
                pct_values['hanger'] = Math.round(pct_values['hanger']);
            }
            pct_values['extra_sensors'] = (extra_sensors/total_modules)*100;
            if (pct_values['extra_sensors'] < 1 && pct_values['extra_sensors'] > 0) {
                pct_values['extra_sensors'] = 1;
            } else {
                pct_values['extra_sensors'] = Math.round(pct_values['extra_sensors']);
            }
            pct_values['escape_pod'] = (escape_pod/total_modules)*100;
            if (pct_values['escape_pod'] < 1 && pct_values['escape_pod'] > 0) {
                pct_values['escape_pod'] = 1;
            } else {
                pct_values['escape_pod'] = Math.round(pct_values['escape_pod']);
            }
            pct_values['engines'] = (engines/total_modules)*100;
            if (pct_values['engines'] < 1 && pct_values['engines'] > 0) {
                pct_values['engines'] = 1;
            } else {
                pct_values['engines'] = Math.round(pct_values['engines']);
            }
            pct_values['crew'] = (crew/total_modules)*100;
            if (pct_values['crew'] < 1 && pct_values['crew'] > 0) {
                pct_values['crew'] = 1;
            } else {
                pct_values['crew'] = Math.round(pct_values['crew']);
            }
            pct_values['cockpit'] = (cockpit/total_modules)*100;
            if (pct_values['cockpit'] < 1 && pct_values['cockpit'] > 0) {
                pct_values['cockpit'] = 1;
            } else {
                pct_values['cockpit'] = Math.round(pct_values['cockpit']);
            }
            pct_values['cargo'] = (cargo/total_modules)*100;
            if (pct_values['cargo'] < 1 && pct_values['cargo'] > 0) {
                pct_values['cargo'] = 1;
            } else {
                pct_values['cargo'] = Math.round(pct_values['cargo']);
            }



            var total_pct = pct_values['cargo'] + pct_values['cockpit'] + pct_values['crew'] + pct_values['engines'] + pct_values['escape_pod'] + pct_values['extra_sensors'] + pct_values['hanger'] + pct_values['hyperspace'] + pct_values['lab'] + pct_values['maneuvering'] + pct_values['open_space'] + pct_values['passengers'] + pct_values['self_repair'] + pct_values['robot_arms'] + pct_values['sickbay'] + pct_values['storage'] + pct_values['tractor_beam'] + pct_values['weapons'];
            var pct_diff = total_pct - 100;
            if (pct_diff < 0) {
                while (pct_diff != 0) {
                    for (var key in pct_values) {
                        if (pct_values[key] != 0) {
                            pct_values[key] = pct_values[key] + 1;
                            pct_diff = pct_diff + 1;
                        }

                        if (pct_diff === 0) {
                            break;
                        }
                    }
                }
            }

            if (pct_diff > 0) {
                while (pct_diff != 0) {
                    for (var key in pct_values) {
                        if (pct_values[key] != 0 && pct_values[key] != 1) {
                            pct_values[key] = pct_values[key] - 1;
                            pct_diff = pct_diff - 1;
                        }

                        if (pct_diff === 0) {
                            break;
                        }
                    }
                }
            }

            var last_value = 0;

            if (pct_values['cargo'] != 0) {
                cargo_ts = last_value + 1;
                cargo_te = last_value + pct_values['cargo'];
                last_value = cargo_te;
            }
            if (pct_values['cockpit'] != 0) {
                cockpit_ts = last_value + 1;
                cockpit_te = last_value + pct_values['cockpit'];
                last_value = cockpit_te;
            }
            if (pct_values['crew'] != 0) {
                crew_ts = last_value + 1;
                crew_te = last_value + pct_values['crew'];
                last_value = crew_te;
            }
            if (pct_values['engines'] != 0) {
                engines_ts = last_value + 1;
                engines_te = last_value + pct_values['engines'];
                last_value = engines_te;
            }
            if (pct_values['escape_pod'] != 0) {
                escape_pod_ts = last_value + 1;
                escape_pod_te = last_value + pct_values['escape_pod'];
                last_value = escape_pod_te;
            }
            if (pct_values['extra_sensors'] != 0) {
                extra_sensors_ts = last_value + 1;
                extra_sensors_te = last_value + pct_values['extra_sensors'];
                last_value = extra_sensors_te;
            }
            if (pct_values['hanger'] != 0) {
                hanger_ts = last_value + 1;
                hanger_te = last_value + pct_values['hanger'];
                last_value = hanger_te;
            }
            if (pct_values['hyperspace'] != 0) {
                hyperspace_ts = last_value + 1;
                hyperspace_te = last_value + pct_values['hyperspace'];
                last_value = hyperspace_te;
            }
            if (pct_values['lab'] != 0) {
                lab_ts = last_value + 1;
                lab_te = last_value + pct_values['lab'];
                last_value = lab_te;
            }
            if (pct_values['maneuvering'] != 0) {
                maneuvering_ts = last_value + 1;
                maneuvering_te = last_value + pct_values['maneuvering'];
                last_value = maneuvering_te;
            }
            if (pct_values['open_space'] != 0) {
                open_space_ts = last_value + 1;
                open_space_te = last_value + pct_values['open_space'];
                last_value = open_space_te;
            }
            if (pct_values['passengers'] != 0) {
                passengers_ts = last_value + 1;
                passengers_te = last_value + pct_values['passengers'];
                last_value = passengers_te;
            }
            if (pct_values['robot_arms'] != 0) {
                robot_arms_ts = last_value + 1;
                robot_arms_te = last_value + pct_values['robot_arms'];
                last_value = robot_arms_te;
            }
            if (pct_values['self_repair'] != 0) {
                self_repair_ts = last_value + 1;
                self_repair_te = last_value + pct_values['self_repair'];
                last_value = self_repair_te;
            }
            if (pct_values['sickbay'] != 0) {
                sickbay_ts = last_value + 1;
                sickbay_te = last_value + pct_values['sickbay'];
                last_value = sickbay_te;
            }
            if (pct_values['storage'] != 0) {
                storage_ts = last_value + 1;
                storage_te = last_value + pct_values['storage'];
                last_value = storage_te;
            }
            if (pct_values['tractor_beam'] != 0) {
                tractor_beam_ts = last_value + 1;
                tractor_beam_te = last_value + pct_values['tractor_beam'];
                last_value = tractor_beam_te;
            }
            if (pct_values["weapons"] != 0) {
                weapons_ts = last_value + 1;
                weapons_te = last_value + pct_values["weapons"];
                last_value = weapons_te;
            }
        }


        var sails = 0;
        var lift_gas = 0;
        var visual_size = 0;
        var sails_toggle = 0;
        var gas_bag_toggle = 0;

        if (values.msvehicle_type == "spaceship") {
            var msvehicle_spaceship_toggle= 1;
            var speed = speed_tr;
            var handling = handling_tr;
            var size = total_modules;
        } else if (values.msvehicle_type == "regular") {
            var msvehicle_spaceship_toggle = 0;
            var speed = speed_tr;
            var handling = handling_tr;
            var size = (total_modules + Math.ceil(total_modules * .1)) * 10;
        } else if (values.msvehicle_type == "terrain") {
            var msvehicle_spaceship_toggle = 0;
            var speed = speed_tr;
            var handling = handling_tr;
            var size_mod = Math.ceil(total_modules * .2);
            if (size_mod < 2) {
                var size = (total_modules + 2) * 10;
            } else {
                var size = (total_modules + size_mod) * 10;
            }
        } else if (values.msvehicle_type == "walker") {
            var msvehicle_spaceship_toggle = 0;
            var speed = speed_tr;
            var handling = handling_tr;
            var size = total_modules * 2 * 10;
        } else if (values.msvehicle_type == "burrower") {
            var msvehicle_spaceship_toggle = 0;
            var speed = Math.ceil(speed_tr * .1);
            var handling = Math.ceil(handling_tr * .1);
            var size = total_modules * 3 * 10;
        } else if (values.msvehicle_type == "motor") {
            var msvehicle_spaceship_toggle = 0;
            var speed = Math.ceil(speed_tr * .5);
            var handling = Math.ceil(handling_tr * .5);
            var size = total_modules * 2 * 10;
        } else if (values.msvehicle_type == "sail") {
            var msvehicle_spaceship_toggle = 0;
            var speed = Math.ceil(speed_tr * .5);
            var handling = Math.ceil(handling_tr * .5);
            var size = total_modules * 2 * 10;
            visual_size = size * 2;
            sails_toggle = 1;
        } else if (values.msvehicle_type == "sub") {
            var msvehicle_spaceship_toggle = 0;
            var speed = Math.ceil(speed_tr * .5);
            var handling = Math.ceil(handling_tr * .5);
            var size = total_modules * 3 * 10;
        } else if (values.msvehicle_type == "wings") {
            var msvehicle_spaceship_toggle = 0;
            var speed = speed_tr;
            var handling = handling_tr;
            var size = total_modules * 3 * 10;
        } else if (values.msvehicle_type == "anti-grav") {
            var msvehicle_spaceship_toggle = 0;
            var speed = speed_tr;
            var handling = handling_tr;
            var size = (total_modules + Math.ceil(total_modules * .1)) * 10;
        } else if (values.msvehicle_type == "rotor_blades") {
            var msvehicle_spaceship_toggle = 0;
            var speed = speed_tr;
            var handling = handling_tr;
            var size = total_modules * 2 * 10;
        } else if (values.msvehicle_type == "hover_craft") {
            var msvehicle_spaceship_toggle = 0
            var speed = speed_tr;
            var handling = handling_tr;
            var size = total_modules * 2 * 10;
        } else if (values.msvehicle_type == "gas_bag") {
            var msvehicle_spaceship_toggle = 0;
            var speed = speed_tr;
            var handling = handling_tr;
            lift_gas = (total_modules / 10) * 1000;
            total_modules = total_modules + lift_gas;
            var size = total_modules;
            gas_bag_toggle = 1;
        } else {
            var msvehicle_spaceship_toggle = 0;
            var speed = speed_tr;
            var handling = handling_tr;
            var size = total_modules;
        }

        size_rating = Math.floor(Math.log2(size)) + 1;

        setAttrs({
            msvehicle_sails_toggle: sails_toggle,
            msvehicle_gas_bag_toggle: gas_bag_toggle,
            msvehicle_speed: speed,
            msvehicle_handling: handling,
            msvehicle_total_modules: total_modules,
            msvehicle_spaceship_toggle: msvehicle_spaceship_toggle,
            msvehicle_size: size,
            msvehicle_lift_gas: lift_gas,
            msvehicle_visual_size_sails_up: visual_size,
            msvehicle_size_rating: size_rating,
            msvehicle_weapons_table_start: weapons_ts,
            msvehicle_weapons_table_end: weapons_te,
            msvehicle_tractor_beam_table_start: tractor_beam_ts,
            msvehicle_tractor_beam_table_end: tractor_beam_te,
            msvehicle_storage_table_start: storage_ts,
            msvehicle_storage_table_end: storage_te,
            msvehicle_sickbay_table_start: sickbay_ts,
            msvehicle_sickbay_table_end: sickbay_te,
            msvehicle_self_repair_table_start: self_repair_ts,
            msvehicle_self_repair_table_end: self_repair_te,
            msvehicle_robot_arm_table_start: robot_arms_ts,
            msvehicle_robot_arm_table_end: robot_arms_te,
            msvehicle_passengers_table_start: passengers_ts,
            msvehicle_passengers_table_end: passengers_te,
            msvehicle_open_space_table_start: open_space_ts,
            msvehicle_open_space_table_end: open_space_te,
            msvehicle_maneuvering_table_start: maneuvering_ts,
            msvehicle_maneuvering_table_end: maneuvering_te,
            msvehicle_lab_table_start: lab_ts,
            msvehicle_lab_table_end: lab_te,
            msvehicle_hyperdrive_table_start: hyperspace_ts,
            msvehicle_hyperdrive_table_end: hyperspace_te,
            msvehicle_hanger_table_start: hanger_ts,
            msvehicle_hanger_table_end: hanger_te,
            msvehicle_extra_sensors_table_start: extra_sensors_ts,
            msvehicle_extra_sensors_table_end: extra_sensors_te,
            msvehicle_escape_pod_table_start: escape_pod_ts,
            msvehicle_escape_pod_table_end: escape_pod_te,
            msvehicle_engines_table_start: engines_ts,
            msvehicle_engines_table_end: engines_te,
            msvehicle_crew_table_start: crew_ts,
            msvehicle_crew_table_end: crew_te,
            msvehicle_cargo_table_start: cargo_ts,
            msvehicle_cargo_table_end: cargo_te,
            msvehicle_cockpit_table_start: cockpit_ts,
            msvehicle_cockpit_table_end: cockpit_te
        });
    });
});

//Ship Condition
on("change:ship_condition", function() {
    getAttrs(["ship_condition", "ship_seaworthiness"], function(values) {
        var ship_range = Math.ceil(values.ship_seaworthiness/10);

        if (values.ship_condition == "ship_shape") {
            setAttrs({
                ship_condition_skills: '1',
                ship_speed: '-',
                ship_condition_range: 0,
                ship_repair_mod: '-',
            });
        } else if (values.ship_condition == "seaworthy") {
            setAttrs({
                ship_condition_skills: '1',
                ship_speed: '-',
                ship_condition_range: parseFloat(ship_range * .25),
                ship_repair_mod: 'x1',
            });
        } else if (values.ship_condition == "battered") {
            setAttrs({
                ship_condition_skills: '2',
                ship_speed: '-25%',
                ship_condition_range: parseFloat(ship_range * .5),
                ship_repair_mod: 'x2',
            });
        } else if (values.ship_condition == "swamped") {
            setAttrs({
                ship_condition_skills: '3',
                ship_speed: '-50%',
                ship_condition_range: parseFloat(ship_range * .75),
                ship_repair_mod: 'x3',
            });
        } else if (values.ship_condition == "sinking") {
            setAttrs({
                ship_condition_skills: '4',
                ship_speed: '-100%',
                ship_condition_range: parseFloat(ship_range),
                ship_repair_mod: 'x4',
            });
        }  else {
            setAttrs({
                ship_condition_skills: '1',
                ship_speed: '-',
                ship_condition_range: 0,
                ship_repair_mod: '-',
            });
        }
    });
});

// Encumbrance Auto Calc
var calc_enc = function() {
    getAttrs(["avg_species_siz", "str", "effective_armor_enc", "melee_weapons_enc", "ranged_weapons_enc", "loadout_enc", "pack_enc", "pack_equipped", "currency_enc", "encumbrance_temp"], function(v) {
        var str = parseInt(v.str);
        var burdened = str * 2;
        var overloaded = str * 3;
        var enc_max = str * 4;
        var enc = (parseFloat(v.effective_armor_enc) + parseFloat(v.melee_weapons_enc) + parseFloat(v.ranged_weapons_enc) + parseFloat(v.loadout_enc) + (parseFloat(v.pack_enc) * parseFloat(v.pack_equipped)) + parseFloat(v.currency_enc) + parseFloat(v.encumbrance_temp)) * (parseInt(v.avg_species_siz) / 13);
        var maxTranslation = getTranslationByKey('max-u');
        var impossibleTranslation = getTranslationByKey('impossible-u');
        var strenuousTranslation = getTranslationByKey('strenuous-u');
        var mediumTranslation = getTranslationByKey('medium-u');
        var normalTranslation = getTranslationByKey('normal-u');
        var halvedTranslation = getTranslationByKey('halved-u');
        if (enc > enc_max) {
            setAttrs({
                encumbrance_load: maxTranslation,
                encumbrance_skills: "3",
                encumbrance_move: impossibleTranslation,
                burdened_enc: burdened,
                overloaded_enc: overloaded,
                encumbrance_current: enc,
                encumbrance_current_max: enc_max,
                movement_rate_enc: "*0",
            });
        } else if (enc > overloaded) {
            setAttrs({
                encumbrance_load: strenuousTranslation,
                encumbrance_skills: "2",
                encumbrance_move: halvedTranslation,
                burdened_enc: burdened,
                overloaded_enc: overloaded,
                encumbrance_current: enc,
                encumbrance_current_max: enc_max,
                movement_rate_enc: "*.5",
            });
        } else if (enc > burdened) {
            setAttrs({
                encumbrance_load: mediumTranslation,
                encumbrance_skills: "1",
                encumbrance_move: "-2",
                burdened_enc: burdened,
                overloaded_enc: overloaded,
                encumbrance_current: enc,
                encumbrance_current_max: enc_max,
                movement_rate_enc: "-2",
            });
        } else {
            setAttrs({
                encumbrance_current: enc,
                encumbrance_load: normalTranslation,
                encumbrance_skills: "0",
                encumbrance_move: normalTranslation,
                burdened_enc: burdened,
                overloaded_enc: overloaded,
                encumbrance_current: enc,
                encumbrance_current_max: enc_max,
                movement_rate_enc: "+0",
            });
        }
    });
};
on("change:avg_species_siz change:str change:effective_armor_enc change:melee_weapons_enc change:ranged_weapons_enc change:loadout_enc change:pack_enc change:pack_equipped change:currency_enc change:encumbrance_temp", function() { calc_enc(); });

// Armor ENC
var calc_armor_enc = function() {
    getAttrs(["location12_armor_equipped", "location12_armor_enc", "location11_armor_equipped", "location11_armor_enc", "location10_armor_equipped", "location10_armor_enc", "half_effective_armor_enc", "location9_armor_equipped", "location9_armor_enc", "location8_armor_equipped", "location8_armor_enc", "location7_armor_equipped", "location7_armor_enc", "location6_armor_equipped", "location6_armor_enc", "location5_armor_equipped", "location5_armor_enc", "location4_armor_equipped", "location4_armor_enc", "location3_armor_equipped", "location3_armor_enc", "location2_armor_equipped", "location2_armor_enc", "location1_armor_equipped", "location1_armor_enc"], function(v) {
        var total_armor_enc = 0;
        if (v.location12_armor_equipped == '1') {
            total_armor_enc = total_armor_enc + parseFloat(v.location12_armor_enc);
        }
        if (v.location11_armor_equipped == '1') {
            total_armor_enc = total_armor_enc + parseFloat(v.location11_armor_enc);
        }
        if (v.location10_armor_equipped == '1') {
            total_armor_enc = total_armor_enc + parseFloat(v.location10_armor_enc);
        }
        if (v.location9_armor_equipped == '1') {
            total_armor_enc = total_armor_enc + parseFloat(v.location9_armor_enc);
        }
        if (v.location8_armor_equipped == '1') {
            total_armor_enc = total_armor_enc + parseFloat(v.location8_armor_enc);
        }
        if (v.location7_armor_equipped == '1') {
            total_armor_enc = total_armor_enc + parseFloat(v.location7_armor_enc);
        }
        if (v.location6_armor_equipped == '1') {
            total_armor_enc = total_armor_enc + parseFloat(v.location6_armor_enc);
        }
        if (v.location5_armor_equipped == '1') {
            total_armor_enc = total_armor_enc + parseFloat(v.location5_armor_enc);
        }
        if (v.location4_armor_equipped == '1') {
            total_armor_enc = total_armor_enc + parseFloat(v.location4_armor_enc);
        }
        if (v.location3_armor_equipped == '1') {
            total_armor_enc = total_armor_enc + parseFloat(v.location3_armor_enc);
        }
        if (v.location2_armor_equipped == '1') {
            total_armor_enc = total_armor_enc + parseFloat(v.location2_armor_enc);
        }
        if (v.location1_armor_equipped == '1') {
            total_armor_enc = total_armor_enc + parseFloat(v.location1_armor_enc);
        }
        if (v.half_effective_armor_enc == '1') {
            armor_enc_multiplier = .25;
        } else {
            armor_enc_multiplier = .5;
        }
        var armor_penalty = 0-Math.ceil(total_armor_enc / 5);
        var casting_penalty = Math.ceil(armor_penalty/3);
        setAttrs({
            armor_enc: total_armor_enc,
            effective_armor_enc: total_armor_enc * armor_enc_multiplier,
            armor_penalty: armor_penalty,
            arcane_casting_penalty: casting_penalty,
            divine_casting_penalty: casting_penalty
        });
    });
};
on("change:location12_armor_equipped change:location12_armor_enc change:location11_armor_equipped change:location11_armor_enc change:location10_armor_equipped change:location10_armor_enc change:half_effective_armor_enc change:location9_armor_equipped change:location9_armor_enc change:location8_armor_equipped change:location_armor_enc change:location7_armor_equipped change:location7_armor_enc change:location6_armor_equipped change:location6_armor_enc change:location5_armor_equipped change:location5_armor_enc change:location4_armor_equipped change:location4_armor_enc change:location3_armor_equipped change:location3_armor_enc change:location2_armor_equipped change:location2_armor_enc change:location1_armor_equipped change:location1_armor_enc", function() {
    calc_armor_enc();
});

// Melee Weapons ENC
var calc_melee_enc = function() {
    var total_melee_weapons_enc = 0;
    getSectionIDs("repeating_meleeweapon", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                getAttrs(["repeating_meleeweapon_" + currentID + "_enc"], function(v) {
                    if(v["repeating_meleeweapon_" + currentID + "_enc"] && isNaN(parseFloat(v["repeating_meleeweapon_" + currentID + "_enc"])) === false) {
                        total_melee_weapons_enc = total_melee_weapons_enc + parseFloat(v["repeating_meleeweapon_" + currentID + "_enc"]);
                    }
                    if(i === idarray.length - 1) {
                        setAttrs({melee_weapons_enc: total_melee_weapons_enc});
                    }
                });
            });
        }
        else {
            setAttrs({melee_weapons_enc: total_melee_weapons_enc});
        }
    });
};
on("change:repeating_meleeweapon remove:repeating_meleeweapon", function() { calc_melee_enc(); });

// Ranged Weapons ENC
var calc_ranged_enc = function() {
    var total_ranged_weapons_enc = 0;
    getSectionIDs("repeating_rangedweapon", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                getAttrs(["repeating_rangedweapon_" + currentID + "_enc"], function(v) {
                    if(v["repeating_rangedweapon_" + currentID + "_enc"] && isNaN(parseFloat(v["repeating_rangedweapon_" + currentID + "_enc"])) === false) {
                        total_ranged_weapons_enc = total_ranged_weapons_enc + parseFloat(v["repeating_rangedweapon_" + currentID + "_enc"]);
                    }
                    if(i === idarray.length - 1) {
                        setAttrs({ranged_weapons_enc: total_ranged_weapons_enc});
                    }
                });
            });
        }
        else {
            setAttrs({ranged_weapons_enc: total_ranged_weapons_enc});
        }
    });
};
on("change:repeating_rangedweapon remove:repeating_rangedweapon", function() { calc_ranged_enc(); });

// Equipment ENC
var calc_equipment_enc = function() {
    var total_loadout_enc = 0;
    var total_pack_enc = 0;
    getSectionIDs("repeating_equipment", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                getAttrs(["repeating_equipment_" + currentID + "_enc", "repeating_equipment_" + currentID + "_location", "repeating_equipment_" + currentID + "_quantity"], function(v) {
                    if(v["repeating_equipment_" + currentID + "_enc"] && isNaN(parseFloat(v["repeating_equipment_" + currentID + "_enc"])) === false) {
                        count = v["repeating_equipment_" + currentID + "_quantity"] && isNaN(parseFloat(v["repeating_equipment_" + currentID + "_quantity"])) === false ? parseFloat(v["repeating_equipment_" + currentID + "_quantity"]) : 1;
                        if(v["repeating_equipment_" + currentID + "_location"] == "loadout") {
                            total_loadout_enc = total_loadout_enc + (parseFloat(v["repeating_equipment_" + currentID + "_enc"]) * count);
                        }
                        if(v["repeating_equipment_" + currentID + "_location"] == "pack") {
                            total_pack_enc = total_pack_enc + (parseFloat(v["repeating_equipment_" + currentID + "_enc"]) * count);
                        }
                    }
                    if(i === idarray.length - 1) {
                        setAttrs({
                            loadout_enc: total_loadout_enc,
                            pack_enc: total_pack_enc,
                        });
                    }
                });
            });
        }
        else {
            setAttrs({
                loadout_enc: total_loadout_enc,
                pack_enc: total_pack_enc,
            });
        }
    });
};
on("change:repeating_equipment remove:repeating_equipment", function() { calc_equipment_enc(); });

// Currency ENC
var calc_currency_enc = function() {
    var total_currency_enc = 0;
    getSectionIDs("repeating_currency", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                getAttrs(["repeating_currency_" + currentID + "_enc", "repeating_currency_" + currentID + "_quantity"], function(v) {
                    if(v["repeating_currency_" + currentID + "_enc"] && isNaN(parseFloat(v["repeating_currency_" + currentID + "_enc"])) === false) {
                        count = v["repeating_currency_" + currentID + "_quantity"] && isNaN(parseFloat(v["repeating_currency_" + currentID + "_quantity"])) === false ? parseFloat(v["repeating_currency_" + currentID + "_quantity"]) : 1;
                        total_currency_enc = total_currency_enc + (parseFloat(v["repeating_currency_" + currentID + "_enc"]) * count);
                    }
                    if(i === idarray.length - 1) {
                        setAttrs({currency_enc: total_currency_enc});
                    }
                });
            });
        }
        else {
            setAttrs({currency_enc: total_currency_enc});
        }
    });
};
on("change:repeating_currency remove:repeating_currency", function() { calc_currency_enc(); });

// Fetish Spirit Damage
on("change:repeating_fetish:fetish_spectral_combat", function() {
    getAttrs(["repeating_fetish_fetish_spectral_combat"], function(values) {
        var spectral_combat = parseInt(values.repeating_fetish_fetish_spectral_combat);
        var spirit_damage_table_value = Math.ceil(spectral_combat/20);

        var spirit_damage_result = '0';
        if (spirit_damage_table_value == 1) {
            spirit_damage_result = '1d2';
        } else if (spirit_damage_table_value == 2) {
            spirit_damage_result = '1d4';
        } else if (spirit_damage_table_value == 3) {
            spirit_damage_result = '1d6';
        } else if (spirit_damage_table_value == 4) {
            spirit_damage_result = '1d8';
        } else if (spirit_damage_table_value == 5) {
            spirit_damage_result = '1d10';
        } else if (spirit_damage_table_value == 6) {
            spirit_damage_result = '2d6';
        } else if (spirit_damage_table_value == 7) {
            spirit_damage_result = '1d8+1d6';
        } else if (spirit_damage_table_value == 8) {
            spirit_damage_result = '2d8';
        } else if (spirit_damage_table_value == 9) {
            spirit_damage_result = '1d10+1d8';
        } else if (spirit_damage_table_value == 10) {
            spirit_damage_result = '2d10';
        } else if (spirit_damage_table_value == 11) {
            spirit_damage_result = '2d10+1d2';
        } else if (spirit_damage_table_value == 12) {
            spirit_damage_result = '2d10+1d4';
        } else if (spirit_damage_table_value == 13) {
            spirit_damage_result = '2d10+1d6';
        } else if (spirit_damage_table_value == 14) {
            spirit_damage_result = '2d10+1d8';
        } else if (spirit_damage_table_value == 15) {
            spirit_damage_result = '3d10';
        } else {
            spirit_damage_result = '0';
        }

        setAttrs({
            repeating_fetish_fetish_spirit_damage: spirit_damage_result,
        });
    });
});

// Battle Unit Damage
on("change:unit_frontage", function() {
    getAttrs(["unit_frontage"], function(values) {
        var frontage = parseInt(values.unit_frontage);
        var unit_damage_table_value = Math.ceil(frontage/15);

        var unit_damage_result = '0';
        if (unit_damage_table_value == 1) {
            unit_damage_result = '1d2';
        } else if (unit_damage_table_value == 2) {
            unit_damage_result = '1d4';
        } else if (unit_damage_table_value == 3) {
            unit_damage_result = '1d6';
        } else if (unit_damage_table_value == 4) {
            unit_damage_result = '1d8';
        } else if (unit_damage_table_value == 5) {
            unit_damage_result = '1d10';
        } else if (unit_damage_table_value == 6) {
            unit_damage_result = '2d6';
        } else if (unit_damage_table_value == 7) {
            unit_damage_result = '1d8+1d6';
        } else if (unit_damage_table_value == 8) {
            unit_damage_result = '2d8';
        } else if (unit_damage_table_value == 9) {
            unit_damage_result = '1d10+1d8';
        } else if (unit_damage_table_value == 10) {
            unit_damage_result = '2d10';
        } else if (unit_damage_table_value == 11) {
            unit_damage_result = '2d10+1d2';
        } else if (unit_damage_table_value == 12) {
            unit_damage_result = '2d10+1d4';
        } else if (unit_damage_table_value == 13) {
            unit_damage_result = '2d10+1d6';
        } else if (unit_damage_table_value == 14) {
            unit_damage_result = '2d10+1d8';
        } else if (unit_damage_table_value == 15) {
            unit_damage_result = '3d10';
        } else {
            unit_damage_result = '0';
        }

        setAttrs({
            unit_damage: unit_damage_result,
        });
    });
});

// Arcane Magic Cost Reduction
on("change:arcane_caster_class change:arcane_magic_rank change:int", function() {
    getAttrs(["arcane_caster_class", "arcane_magic_rank", "int"], function(values) {
        var magic_rank = parseInt(values.arcane_magic_rank);
        var int = parseInt(values.int);
        var reductionmod = 0;
        var basememorizemax = 0;
        var memorizemod = 0;
        if (values.arcane_caster_class == "magic-user") {
            reductionmod = 2;
            memorizemod = 2;
            basememorizemax = Math.ceil(int/4);
        } else if (values.arcane_caster_class == "bard") {
            reductionmod = 1;
            memorizemod = 1;
            basememorizemax = Math.ceil(int/6);
        } else {
            console.log("Invalid arcane caster class")
        }

        var rank1reduction = 0;
        var rank2reduction = 0;
        var rank3reduction = 0;
        var rank4reduction = 0;
        var rank5reduction = 0;

        var rank1memmax = 0;
        var rank2memmax = 0;
        var rank3memmax = 0;
        var rank4memmax = 0;
        var rank5memmax = 0;

        if (magic_rank > 5) {
            rank5reduction = -((magic_rank - 5) * reductionmod);
            rank5memmax = basememorizemax + ((magic_rank - 5) * memorizemod);
        } else if (magic_rank == 5) {
            rank5memmax = basememorizemax;
        }

        if (magic_rank > 4) {
            rank4reduction = -((magic_rank - 4) * reductionmod);
            rank4memmax = basememorizemax + ((magic_rank - 4) * memorizemod);
        } else if (magic_rank == 4) {
            rank4memmax = basememorizemax;
        }

        if (magic_rank > 3) {
            rank3reduction = -((magic_rank - 3) * reductionmod);
            rank3memmax = basememorizemax + ((magic_rank - 3) * memorizemod);
        } else if (magic_rank == 3) {
            rank3memmax = basememorizemax;
        }

        if (magic_rank > 2) {
            rank2reduction = -((magic_rank - 2) * reductionmod);
            rank2memmax = basememorizemax + ((magic_rank - 2) * memorizemod);
        } else if (magic_rank == 2) {
            rank2memmax = basememorizemax;
        }

        if (magic_rank > 1) {
            rank1reduction = -((magic_rank - 1) * reductionmod);
            rank1memmax = basememorizemax + ((magic_rank - 1) * memorizemod);
        } else if (magic_rank == 1) {
            rank1memmax = basememorizemax;
        }

        setAttrs({
            arcane_rank_1_cost_reduction: rank1reduction,
            arcane_rank_2_cost_reduction: rank2reduction,
            arcane_rank_3_cost_reduction: rank3reduction,
            arcane_rank_4_cost_reduction: rank4reduction,
            arcane_rank_5_cost_reduction: rank5reduction,
            arcane_rank_1_memorized_max: rank1memmax,
            arcane_rank_2_memorized_max: rank2memmax,
            arcane_rank_3_memorized_max: rank3memmax,
            arcane_rank_4_memorized_max: rank4memmax,
            arcane_rank_5_memorized_max: rank5memmax,
        });
    });
});

// Divine Magic Cost Reduction
on("change:divine_caster_class change:divine_magic_rank change:int", function() {
    getAttrs(["divine_caster_class", "divine_magic_rank", "int"], function(values) {
        var magic_rank = parseInt(values.divine_magic_rank);
        var int = parseInt(values.int);
        var reductionmod = 0;
        var basememorizemax = 0;
        var memorizemod = 0;
        if ( (values.divine_caster_class == "cleric") || (values.divine_caster_class == "druid")) {
            reductionmod = 2;
            memorizemod = 2;
            basememorizemax = Math.ceil(int/4);
        } else if (values.divine_caster_class == "bard") {
            reductionmod = 1;
            memorizemod = 1;
            basememorizemax = Math.ceil(int/6);
        } else if ((values.divine_caster_class == "paladin") || (values.divine_caster_class == "ranger")) {
            reductionmod = 1;
            memorizemod = 1;
            basememorizemax = Math.ceil(int/6);
            magic_rank = magic_rank - 2;
        } else {
            console.log("Invalid divine caster class")
        }

        var rank1reduction = 0;
        var rank2reduction = 0;
        var rank3reduction = 0;
        var rank4reduction = 0;
        var rank5reduction = 0;

        var rank1memmax = 0;
        var rank2memmax = 0;
        var rank3memmax = 0;
        var rank4memmax = 0;
        var rank5memmax = 0;

        if (magic_rank > 5) {
            rank5reduction = -((magic_rank - 5) * reductionmod);
            rank5memmax = basememorizemax + ((magic_rank - 5) * memorizemod);
        } else if (magic_rank == 5) {
            rank5memmax = basememorizemax;
        }

        if (magic_rank > 4) {
            rank4reduction = -((magic_rank - 4) * reductionmod);
            rank4memmax = basememorizemax + ((magic_rank - 4) * memorizemod);
        } else if (magic_rank == 4) {
            rank4memmax = basememorizemax;
        }

        if (magic_rank > 3) {
            rank3reduction = -((magic_rank - 3) * reductionmod);
            rank3memmax = basememorizemax + ((magic_rank - 3) * memorizemod);
        } else if (magic_rank == 3) {
            rank3memmax = basememorizemax;
        }

        if (magic_rank > 2) {
            rank2reduction = -((magic_rank - 2) * reductionmod);
            rank2memmax = basememorizemax + ((magic_rank - 2) * memorizemod);
        } else if (magic_rank == 2) {
            rank2memmax = basememorizemax;
        }

        if (magic_rank > 1) {
            rank1reduction = -((magic_rank - 1) * reductionmod);
            rank1memmax = basememorizemax + ((magic_rank - 1) * memorizemod);
        } else if (magic_rank == 1) {
            rank1memmax = basememorizemax;
        }

        setAttrs({
            divine_rank_1_cost_reduction: rank1reduction,
            divine_rank_2_cost_reduction: rank2reduction,
            divine_rank_3_cost_reduction: rank3reduction,
            divine_rank_4_cost_reduction: rank4reduction,
            divine_rank_5_cost_reduction: rank5reduction,
            divine_rank_1_memorized_max: rank1memmax,
            divine_rank_2_memorized_max: rank2memmax,
            divine_rank_3_memorized_max: rank3memmax,
            divine_rank_4_memorized_max: rank4memmax,
            divine_rank_5_memorized_max: rank5memmax,
        });
    });
});

// Count Known Cantrips for Arcane Magic
on("change:repeating_arcanemagicrank0spell remove:repeating_arcanemagicrank0spell", function() {
    var total_cantrips_known = 0;
    getSectionIDs("repeating_arcanemagicrank0spell", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                total_cantrips_known = total_cantrips_known + 1;
                if(i === idarray.length - 1) {
                    setAttrs({arcane_rank_0_known: total_cantrips_known});
                }
            });
        }
        else {
            setAttrs({arcane_rank_0_known: total_cantrips_known});
        }
    });
});

// Count Memorized Rank 1 Arcane Spells
on("change:repeating_arcanemagicrank1spell remove:repeating_arcanemagicrank1spell", function() {
    var total_memorized = 0;
    getSectionIDs("repeating_arcanemagicrank1spell", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                getAttrs(["repeating_arcanemagicrank1spell_" + currentID + "_memorized"], function(v) {
                    if( ( v["repeating_arcanemagicrank1spell_" + currentID + "_memorized"] == 1 ) && isNaN(parseInt(v["repeating_arcanemagicrank1spell_" + currentID + "_memorized"])) === false) {
                        total_memorized = total_memorized + 1;
                    }
                    if(i === idarray.length - 1) {
                        setAttrs({arcane_rank_1_memorized: total_memorized});
                    }
                });
            });
        }
        else {
            setAttrs({arcane_rank_1_memorized: total_memorized});
        }
    });
});

// Count Memorized Rank 2 Arcane Spells
on("change:repeating_arcanemagicrank2spell remove:repeating_arcanemagicrank2spell", function() {
    var total_memorized = 0;
    getSectionIDs("repeating_arcanemagicrank2spell", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                getAttrs(["repeating_arcanemagicrank2spell_" + currentID + "_memorized"], function(v) {
                    if( ( v["repeating_arcanemagicrank2spell_" + currentID + "_memorized"] == 1 ) && isNaN(parseInt(v["repeating_arcanemagicrank2spell_" + currentID + "_memorized"])) === false) {
                        total_memorized = total_memorized + 1;
                    }
                    if(i === idarray.length - 1) {
                        setAttrs({arcane_rank_2_memorized: total_memorized});
                    }
                });
            });
        }
        else {
            setAttrs({arcane_rank_2_memorized: total_memorized});
        }
    });
});

// Count Memorized Rank 3 Arcane Spells
on("change:repeating_arcanemagicrank3spell remove:repeating_arcanemagicrank3spell", function() {
    var total_memorized = 0;
    getSectionIDs("repeating_arcanemagicrank3spell", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                getAttrs(["repeating_arcanemagicrank3spell_" + currentID + "_memorized"], function(v) {
                    if( ( v["repeating_arcanemagicrank3spell_" + currentID + "_memorized"] == 1 ) && isNaN(parseInt(v["repeating_arcanemagicrank3spell_" + currentID + "_memorized"])) === false) {
                        total_memorized = total_memorized + 1;
                    }
                    if(i === idarray.length - 1) {
                        setAttrs({arcane_rank_3_memorized: total_memorized});
                    }
                });
            });
        }
        else {
            setAttrs({arcane_rank_3_memorized: total_memorized});
        }
    });
});

// Count Memorized Rank 4 Arcane Spells
on("change:repeating_arcanemagicrank4spell remove:repeating_arcanemagicrank4spell", function() {
    var total_memorized = 0;
    getSectionIDs("repeating_arcanemagicrank4spell", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                getAttrs(["repeating_arcanemagicrank4spell_" + currentID + "_memorized"], function(v) {
                    if( ( v["repeating_arcanemagicrank4spell_" + currentID + "_memorized"] == 1 ) && isNaN(parseInt(v["repeating_arcanemagicrank4spell_" + currentID + "_memorized"])) === false) {
                        total_memorized = total_memorized + 1;
                    }
                    if(i === idarray.length - 1) {
                        setAttrs({arcane_rank_4_memorized: total_memorized});
                    }
                });
            });
        }
        else {
            setAttrs({arcane_rank_4_memorized: total_memorized});
        }
    });
});

// Count Memorized Rank 5 Arcane Spells
on("change:repeating_arcanemagicrank5spell remove:repeating_arcanemagicrank5spell", function() {
    var total_memorized = 0;
    getSectionIDs("repeating_arcanemagicrank5spell", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                getAttrs(["repeating_arcanemagicrank5spell_" + currentID + "_memorized"], function(v) {
                    if( ( v["repeating_arcanemagicrank5spell_" + currentID + "_memorized"] == 1 ) && isNaN(parseInt(v["repeating_arcanemagicrank5spell_" + currentID + "_memorized"])) === false) {
                        total_memorized = total_memorized + 1;
                    }
                    if(i === idarray.length - 1) {
                        setAttrs({arcane_rank_5_memorized: total_memorized});
                    }
                });
            });
        }
        else {
            setAttrs({arcane_rank_5_memorized: total_memorized});
        }
    });
});

// Count Memorized Rank 1 Divine Spells
on("change:repeating_divinemagicrank1spell remove:repeating_divinemagicrank1spell", function() {
    var total_memorized = 0;
    getSectionIDs("repeating_divinemagicrank1spell", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                getAttrs(["repeating_divinemagicrank1spell_" + currentID + "_memorized"], function(v) {
                    if( ( v["repeating_divinemagicrank1spell_" + currentID + "_memorized"] == 1 ) && isNaN(parseInt(v["repeating_divinemagicrank1spell_" + currentID + "_memorized"])) === false) {
                        total_memorized = total_memorized + 1;
                    }
                    if(i === idarray.length - 1) {
                        setAttrs({divine_rank_1_memorized: total_memorized});
                    }
                });
            });
        }
        else {
            setAttrs({divine_rank_1_memorized: total_memorized});
        }
    });
});

// Count Memorized Rank 2 Divine Spells
on("change:repeating_divinemagicrank2spell remove:repeating_divinemagicrank2spell", function() {
    var total_memorized = 0;
    getSectionIDs("repeating_divinemagicrank2spell", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                getAttrs(["repeating_divinemagicrank2spell_" + currentID + "_memorized"], function(v) {
                    if( ( v["repeating_divinemagicrank2spell_" + currentID + "_memorized"] == 1 ) && isNaN(parseInt(v["repeating_divinemagicrank2spell_" + currentID + "_memorized"])) === false) {
                        total_memorized = total_memorized + 1;
                    }
                    if(i === idarray.length - 1) {
                        setAttrs({divine_rank_2_memorized: total_memorized});
                    }
                });
            });
        }
        else {
            setAttrs({divine_rank_2_memorized: total_memorized});
        }
    });
});

// Count Memorized Rank 3 Divine Spells
on("change:repeating_divinemagicrank3spell remove:repeating_divinemagicrank3spell", function() {
    var total_memorized = 0;
    getSectionIDs("repeating_divinemagicrank3spell", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                getAttrs(["repeating_divinemagicrank3spell_" + currentID + "_memorized"], function(v) {
                    if( ( v["repeating_divinemagicrank3spell_" + currentID + "_memorized"] == 1 ) && isNaN(parseInt(v["repeating_divinemagicrank3spell_" + currentID + "_memorized"])) === false) {
                        total_memorized = total_memorized + 1;
                    }
                    if(i === idarray.length - 1) {
                        setAttrs({divine_rank_3_memorized: total_memorized});
                    }
                });
            });
        }
        else {
            setAttrs({divine_rank_3_memorized: total_memorized});
        }
    });
});

// Count Memorized Rank 4 Divine Spells
on("change:repeating_divinemagicrank4spell remove:repeating_divinemagicrank4spell", function() {
    var total_memorized = 0;
    getSectionIDs("repeating_divinemagicrank4spell", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                getAttrs(["repeating_divinemagicrank4spell_" + currentID + "_memorized"], function(v) {
                    if( ( v["repeating_divinemagicrank4spell_" + currentID + "_memorized"] == 1 ) && isNaN(parseInt(v["repeating_divinemagicrank4spell_" + currentID + "_memorized"])) === false) {
                        total_memorized = total_memorized + 1;
                    }
                    if(i === idarray.length - 1) {
                        setAttrs({divine_rank_4_memorized: total_memorized});
                    }
                });
            });
        }
        else {
            setAttrs({divine_rank_4_memorized: total_memorized});
        }
    });
});

// Count Memorized Rank 5 Divine Spells
on("change:repeating_divinemagicrank5spell remove:repeating_divinemagicrank5spell", function() {
    var total_memorized = 0;
    getSectionIDs("repeating_divinemagicrank5spell", function(idarray) {
        if(idarray.length > 0) {
            _.each(idarray, function(currentID, i) {
                getAttrs(["repeating_divinemagicrank5spell_" + currentID + "_memorized"], function(v) {
                    if( ( v["repeating_divinemagicrank5spell_" + currentID + "_memorized"] == 1 ) && isNaN(parseInt(v["repeating_divinemagicrank5spell_" + currentID + "_memorized"])) === false) {
                        total_memorized = total_memorized + 1;
                    }
                    if(i === idarray.length - 1) {
                        setAttrs({divine_rank_5_memorized: total_memorized});
                    }
                });
            });
        }
        else {
            setAttrs({divine_rank_5_memorized: total_memorized});
        }
    });
});

// Swap chars for spirit attrs
on("change:spirit", function() {
    getAttrs(["spirit"], function(v) {
        if (v.spirit == 1) {
            setAttrs({initiative_bonus_chars: "(@{int}+@{cha})"});
        } else {
            setAttrs({initiative_bonus_chars: "(@{int}+@{dex})"});
        }
    });
});

