onEvent('recipes', event => {
    event.custom({
        type: "extendedcrafting:combination",
        powerCost: 40000,
        input: {
            item: 'mysticalagradditions:insanium_essence'
        },
        ingredients: [
            {
                item: 'extendedcrafting:luminessence'
            },
            {
                item: 'extendedcrafting:luminessence'
            },
            {
                item: 'extendedcrafting:luminessence'
            },
            {
                item: 'extendedcrafting:luminessence'
            },
        ],
        result: {
            item: 'mysticalagradditions:creative_essence'
        }
    })
})

onEvent('recipes', event => {
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            'a   A   b',
            ' BcCdDeE ',
            ' fFgGhHi ',
            ' IjJkKlL ',
            'mMnNoOpPq',
            ' QrRsStT ',
            ' uUvVwWx ',
            ' XyYzZáÁ ',
            'é   É   í'
        ],
        key: {
            a: '#forge:ingots/constantan',
            A: '#forge:ingots/zinc',
            b: '#forge:ingots/iron',
            B: '#forge:ingots/electrum',
            c: 'industrialforegoing:pink_slime_ingot',
            C: '#forge:ingots/uranium',
            d: 'thermal_extra:twinite_ingot',
            D: 'mysticalagriculture:soulium_ingot',
            e: '#forge:ingots/cobalt',
            E: 'thermal:signalum_ingot',
            f: 'lazierae2:fluix_steel_ingot',
            F: 'tconstruct:amethyst_bronze_ingot',
            g: '#forge:ingots/steel',
            G: '#forge:ingots/tin',
            h: '#forge:ingots/lead',
            H: '#forge:ingots/rose_gold',
            i: '#forge:ingots/silver',
            I: 'extendedcrafting:black_iron_ingot',
            j: 'mekanism:ingot_refined_obsidian',
            J: 'tconstruct:pig_iron_ingot',
            k: 'minecraft:netherite_ingot',
            K: 'tconstruct:manyullyn_ingot',
            l: 'mekanism:ingot_refined_glowstone',
            L: '#forge:ingots/invar',
            m: '#forge:ingots/copper',
            M: 'thermal_extra:shellite_ingot',
            n: '#forge:ingots/osmium',
            N: 'mysticalagradditions:insanium_ingot',
            o: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
            O: 'mysticalagradditions:insanium_ingot',
            p: '#forge:ingots/osmium',
            P: 'thermal_extra:soul_infused_ingot',
            q: 'beyond_earth:calorite_ingot',
            Q: 'extendedcrafting:redstone_ingot',
            r: 'mekanism:ingot_refined_obsidian',
            R: 'tconstruct:queens_slime_ingot',
            s: 'minecraft:netherite_ingot',
            S: 'tconstruct:hepatizon_ingot',
            t: 'mekanism:ingot_refined_glowstone',
            T: '#forge:ingots/bronze',
            u: 'beyond_earth:ostrum_ingot',
            U: '#forge:ingots/rose_gold',
            v: '#forge:ingots/lead',
            V: '#forge:ingots/tin',
            w: '#forge:ingots/steel',
            W: 'tconstruct:slimesteel_ingot',
            x: '#forge:ingots/nickel',
            X: 'thermal:lumium_ingot',
            y: 'beyond_earth:desh_ingot',
            Y: 'extendedcrafting:crystaltine_ingot',
            z: 'thermal_extra:dragonsteel_ingot',
            Z: 'extendedcrafting:enhanced_ender_ingot',
            á: 'extendedcrafting:ender_ingot',
            Á: 'thermal:enderium_ingot',
            é: 'mysticalagriculture:prosperity_ingot',
            É: '#forge:ingots/gold',
            í: 'create:brass_ingot',
        },
        result: {
            item: 'extendedcrafting:the_ultimate_ingot'
        }
    })

})

onEvent('recipes', event => {
    event.custom({
        type: 'extendedcrafting:compressor',
        powerCost: 120000,
        inputCount: 1000,
        ingredient: {
            item: 'mysticalagradditions:creative_essence'
        },
        catalyst: {
            item: 'extendedcrafting:ultimate_catalyst'
        },
        result: {
            item: 'extendedcrafting:the_ultimate_catalyst'
        }
    })
})

onEvent('recipes', event => {
    event.custom({
        type: 'extendedcrafting:shapeless_ender_crafter',
        craftingTime: 20,
        ingredients: [{
            item: 'minecraft:iron_ingot',
        }],
        result: {
            item: 'extendedcrafting:ender_ingot'
        }
    })
})

onEvent('recipes', event => {
    event.custom({
        type:'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'uAs',
            'cSc',
            'CUu'
        ],
        key: {
            u: 'extendedcrafting:the_ultimate_ingot',
            A: 'mekanism:alloy_atomic',
            s: 'ae2:quantum_entangled_singularity',
            c: 'mekanism:ultimate_chemical_tank',
            S: 'extendedcrafting:ultimate_singularity',
            C: 'ironjetpacks:ultimate_coil',
            U: 'mekanism:ultimate_control_circuit'
        },
        result: {
            item: 'mekanism:creative_chemical_tank'
        }
    })
})

onEvent('recipes', event => {
    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'cCTCc',
            'CuEuC',
            'tESEw',
            'CuEuC',
            'cCTCc'
        ],
        key: {
            c: 'mekanism:ultimate_control_circuit',
            C: 'ironjetpacks:ultimate_coil',
            u: 'extendedcrafting:the_ultimate_ingot',
            E: 'mekanism:ultimate_energy_cube',
            t: 'mekanism:ultimate_induction_cell',
            S: 'extendedcrafting:ultimate_singularity',
            w: 'mekanism:ultimate_induction_provider',
            T: 'solarpanels:creative_energy_tablet'
        },
        result: {
            item: 'mekanism:creative_energy_cube'
        }
    })
})

onEvent('recipes', event => {
    event.custom({
        type:'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'uBc',
            'BSB',
            'uBo'
        ],
        key: {
            u: 'extendedcrafting:the_ultimate_ingot',
            B: 'mekanism:ultimate_bin',
            S: 'extendedcrafting:ultimate_singularity',
            o: 'ironchest:obsidian_chest',
            c: 'ae2:creative_item_cell'
        },
        result: {
            item: 'mekanism:creative_bin'
        }
    })
})

onEvent('recipes', event => {
    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'cduDc',
            'ecBce',
            'uUSUu',
            'ecBce',
            'cDudc'
        ],
        key: {
            c: 'create:fluid_tank',
            d: 'thermal_extra:fluid_tank_augment_6',
            u: 'extendedcrafting:the_ultimate_ingot',
            D: 'thermal_extra:fluid_tank_augment_5',
            e: 'enderstorage:ender_tank',
            B: 'industrialforegoing:supreme_black_hole_tank',
            U: 'mekanism:ultimate_fluid_tank',
            S: 'extendedcrafting:ultimate_singularity'
        },
        result: {
            item: 'mekanism:creative_fluid_tank'
        }
    })
})

onEvent('recipes', event => {
    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'iuP',
            'ISl',
            'usP'
        ],
        key: {
            i: 'ae2:item_storage_cell_256k',
            u: 'extendedcrafting:the_ultimate_ingot',
            P: 'lazierae2:parallel_processor',
            I: 'ae2things:disk_drive_256k',
            S: 'extendedcrafting:ultimate_singularity',
            l: 'lazierae2:logic_unit',
            s: 'ae2:quantum_entangled_singularity'
        },
        result: {
            item: 'ae2:creative_item_cell'
        }
    })
})

onEvent('recipes', event => {
    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'iuP',
            'iSl',
            'usP'
        ],
        key: {
            i: 'ae2:fluid_storage_cell_256k',
            u: 'extendedcrafting:the_ultimate_ingot',
            P: 'lazierae2:parallel_processor',
            S: 'extendedcrafting:ultimate_singularity',
            l: 'mekanism:ultimate_fluid_tank',
            s: 'ae2:quantum_entangled_singularity'
        },
        result: {
            item: 'ae2:creative_fluid_cell'
        }
    })
})

onEvent('recipes', event => {
    event.custom({
        type: 'extendedcrafting:compressor',
        powerCost: 173492,
        inputCount: 200,
        ingredient: {
            item: 'thermal_extra:rf_coil_augment_5'
        },
        catalyst: {
            item: 'extendedcrafting:the_ultimate_catalyst'
        },
        result: {
            item: 'thermal:rf_coil_creative_augment'
        }
    })
})

onEvent('recipes', event => {
    event.custom({
        type: 'extendedcrafting:compressor',
        powerCost: 173492,
        inputCount: 400,
        ingredient: {
            item: 'thermal_extra:machine_efficiency_augment_4'
        },
        catalyst: {
            item: 'extendedcrafting:the_ultimate_catalyst'
        },
        result: {
            item: 'thermal:machine_efficiency_creative_augment'
        }
    })
})

onEvent('recipes', event => {
    event.custom({
        type: 'extendedcrafting:compressor',
        powerCost: 173492,
        inputCount: 100,
        ingredient: {
            item: 'thermal_extra:fluid_tank_augment_6'
        },
        catalyst: {
            item: 'extendedcrafting:the_ultimate_catalyst'
        },
        result: {
            item: 'thermal:fluid_tank_creative_augment'
        }
    })
})

onEvent('recipes', event => {
    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            'IieeeiI',
            'iDiciEi',
            'eisrsie',
            'ucrSrcu',
            'eisrsie',
            'iGiciNi',
            'IieueiI'
        ],
        key: {
            I: 'mysticalagradditions:insanium_coal_block',
            i: 'mysticalagradditions:insanium_coal',
            e: 'mysticalagradditions:creative_essence',
            D: 'ironcoals:diamond_coal',
            c: 'ironcoals:iron_coal',
            E: 'ironcoals:emerald_coal',
            s: '#forge:storage_blocks/charcoal',
            r: 'ironfurnaces:rainbow_coal',
            u: 'extendedcrafting:the_ultimate_ingot',
            S: 'extendedcrafting:ultimate_singularity',
            G: 'ironcoals:gold_coal',
            N: 'ironcoals:netherite_coal'
        },
        result: {
            item: 'ironcoals:aeon_coal'
        }
    })
})

onEvent('recipes', event => {
    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'msu',
            'dSD',
            'igU'
        ],
        key: {
            m: 'industrialforegoing:mob_crusher',
            s: 'mysticalagriculture:soulium_ingot',
            u: 'extendedcrafting:the_ultimate_ingot',
            d: 'mysticalagriculture:hostile_soulium_dagger',
            S: 'extendedcrafting:ultimate_singularity',
            D: 'mysticalagriculture:passive_soulium_dagger',
            i: 'mysticaladaptations:insanium_sword',
            g: 'mysticalagriculture:soulium_gemstone',
            U: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_sword'
        },
        result: {
            item: 'mysticalagriculture:creative_soulium_dagger'
        }
    })
})

onEvent('recipes', event => {
    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'msu',
            'dSD',
            'igU'
        ],
        key: {
            m: 'solarpanels:carbone_solar_element',
            s: 'solarpanels:hybrid_solar_element',
            u: 'solarpanels:improved_hybrid_solar_element',
            d: 'solarpanels:photonic_solar_element',
            S: 'extendedcrafting:ultimate_singularity',
            D: 'solarpanels:quantum_solar_element',
            i: 'solarpanels:light_absorbing_solar_element',
            g: 'solarpanels:singular_solar_element',
            U: 'solarpanels:spectral_solar_element'
        },
        result: {
            item: 'solarpanels:creative_solar_element'
        }
    })
})

onEvent('recipes', event => {
    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            ' ata ',
            ' apa ',
            ' sSq ',
            ' iUl ',
            ' ara '
        ],
        key: {
            a: 'mekanism:alloy_atomic',
            t: 'mekanism:energy_tablet',
            p: 'solarpanels:photonic_energy_tablet',
            s: 'solarpanels:spectral_energy_tablet',
            S: 'extendedcrafting:ultimate_singularity',
            q: 'solarpanels:quantum_energy_tablet',
            i: 'solarpanels:improved_energy_tablet',
            U: 'extendedcrafting:the_ultimate_ingot',
            l: 'solarpanels:light_absorbing_energy_tablet',
            r: 'solarpanels:singular_energy_tablet'
        },
        result: {
            item: 'solarpanels:creative_energy_tablet'
        }
    })
})

onEvent('recipes', event => {
    event.custom({
        type: "extendedcrafting:combination",
        powerCost: 4000000,
        input: {
            item: 'solarpanels:photonic_solar_panel'
        },
        ingredients: [
            {
                item: 'solarpanels:creative_solar_element'
            },
            {
                item: 'solarpanels:creative_energy_tablet'
            },
        ],
        result: {
            item: 'solarpanels:creative_solar_panel'
        }
    })
})


onEvent('recipes', reload => [
    reload.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            ' GuF ',
            'BCuUP',
            'uusuu',
            'EUuCS',
            ' puW '
        ],
        key: {
            G: 'upgradednetherite:gold_upgraded_netherite_ingot',
            u: 'extendedcrafting:the_ultimate_ingot',
            F: 'upgradednetherite:feather_upgraded_netherite_ingot',
            B: 'upgradednetherite:fire_upgraded_netherite_ingot',
            C: 'upgradednetherite:corrupt_upgraded_netherite_ingot',
            U: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
            P: 'upgradednetherite:phantom_upgraded_netherite_ingot',
            s: 'extendedcrafting:ultimate_singularity',
            E: 'upgradednetherite:ender_upgraded_netherite_ingot',
            S: 'upgradednetherite:poison_upgraded_netherite_ingot',
            p: 'upgradednetherite:water_upgraded_netherite_ingot',
            W: 'upgradednetherite:wither_upgraded_netherite_ingot',
        },
        result: {
            item: 'upgradednetherite_creative:creative_upgraded_netherite_ingot',
        }
    })
])

onEvent('recipes', event => {
    event.custom({
        type: "extendedcrafting:combination",
        powerCost: 2500000,
        input: {
            item: 'ironfurnaces:augment_generator'
        },
        ingredients: [
            {
                item: 'irongenerators:certus_quartz_generator'
            },
            {
                item: 'irongenerators:steel_generator'
            },
            {
                item: 'irongenerators:refined_obsidian_generator'
            },
            {
                item: 'irongenerators:uranium_generator'
            },
            {
                item: 'irongenerators:diamond_generator'
            },
            {
                item: 'irongenerators:netherite_generator'
            },
            {
                item: 'irongenerators:signalum_generator'
            },
            {
                item: 'irongenerators:enderium_generator'
            },
        ],
        result: {
            item: 'irongenerators:infinity_generator'
        }
    })
})

onEvent('recipes', event => {
    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4, 
        pattern: [
            '   ubu   ',
            '  ufufu  ',
            ' ucuCutu ',
            'uDuFBGuDu',
            'UuIuSuiuU',
            'uAukjyuAu',
            ' utuEucu ',
            '  urupu  ',
            '   uRu   '
        ],
        key: {
            u: 'extendedcrafting:the_ultimate_ingot',
            b: 'botanypotstiers:creative_terracotta_botany_pot',
            f: 'thermal:machine_efficiency_creative_augment',
            c: 'thermal:rf_coil_creative_augment',
            C: 'mekanism:creative_energy_cube',
            t: 'thermal:fluid_tank_creative_augment',
            D: 'kubejs:defense_module',
            F: 'mekanism:creative_fluid_tank',
            B: 'mekanism:creative_bin',
            G: 'mekanism:creative_chemical_tank',
            U: 'kubejs:reinforcement_module',
            I: 'ae2:creative_item_cell',
            S: 'extendedcrafting:ultimate_singularity',
            i: 'ae2:creative_fluid_cell',
            A: 'kubejs:ability_module',
            k: 'create:creative_blaze_cake',
            j: 'create:creative_motor',
            y: 'cyclic:battery_infinite',
            E: 'ae2:creative_energy_cell',
            r: 'mysticalagriculture:creative_soulium_dagger',
            p: 'solarpanels:creative_solar_panel',
            R: 'upgradednetherite_creative:creative_upgraded_netherite_ingot'
        },
        result: {
            item: 'cyclic:item_infinite'
        }
    })
})