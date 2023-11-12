onEvent('recipes', event => {
	event.recipes.createMechanicalCrafting('kubejs:reinforcement_module', [
		'dds',
        'eDs',
        'ebb'
	], {
		d: 'minecraft:music_disc_13',
        s: 'minecraft:skeleton_skull',
        b: 'minecraft:writable_book',
        e: 'minecraft:end_crystal',
        D: 'thermal_extra:upgrade_augment'
	})
})

onEvent('recipes', event => {
	event.recipes.createMechanicalCrafting('kubejs:defense_module', [
		'abc',
        'def',
        ' g '
	], {
		a: 'tconstruct:iron_reinforcement',
        b: 'tconstruct:slimesteel_reinforcement',
        c: 'tconstruct:seared_reinforcement',
        d: 'tconstruct:gold_reinforcement',
        e: 'tconstruct:emerald_reinforcement',
        f: 'tconstruct:bronze_reinforcement',
        g: 'tconstruct:cobalt_reinforcement',
	})
})

onEvent('recipes', event => {
	event.recipes.createMechanicalCrafting('kubejs:ability_module', [
		'ddd',
        'ded',
        'ddd'
	], {
		e: 'extendedcrafting:ender_star',
        d: 'minecraft:dragon_head'
	})
})

onEvent('recipes', event => {
    event.recipes.create.mixing(Item.of('create:creative_blaze_cake'), [
        Fluid.of('industrialforegoing:pink_slime'),
        Item.of('mysticalagradditions:creative_essence'),
        Item.of('create:blaze_cake')
    ]).superheated()
})

onEvent('recipes', event => {
	event.recipes.createMechanicalCrafting('create:creative_motor', [
		'   b   ',
        'uwefawu',
        'weusuaw',
        'uwegawu',
        '   h   '
	], {
		b: 'create:windmill_bearing',
        u: 'extendedcrafting:the_ultimate_ingot',
        w: 'create:large_water_wheel',
        e: 'createaddition:electric_motor',
        f: 'create:encased_fan',
        a: 'createaddition:alternator',
        s: 'extendedcrafting:ultimate_singularity',
        g: 'create:gearbox',
        h: 'create:hand_crank'
	})
})

onEvent('recipes', event => {
    event.recipes.create.mixing(Item.of('minecraft:dragon_breath'), [
        Fluid.of('kubejs:dragon_foam', 125),
        Fluid.of('kubejs:dragon_breathing', 125),
        Item.of('minecraft:glass_bottle')
    ]).superheated()
})
