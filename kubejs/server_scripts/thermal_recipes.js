onEvent('recipes', event => {
    event.recipes.thermal.smelter('minecraft:shulker_shell', [
        '5x minecraft:purple_dye',
        'kubejs:white_shulker_shell'
    ])
})

onEvent('recipes', event => {
    event.recipes.thermal.crucible(Fluid.of('kubejs:dragon_breathing', 250),
    'tconstruct:dragon_scale')
})

onEvent('recipes', event => {
    event.recipes.thermal.crucible(Fluid.of('kubejs:dragon_foam', 250),
    'quark:dragon_scale')
})