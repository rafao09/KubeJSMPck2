onEvent('recipes', event => {
    event.shaped('minecraft:dirt', [
        'AAA',
        'AAA',
        'A A'
    ], {
        A: 'minecraft:cobblestone'
    })
})

onEvent('recipes', event => {
    event.remove({id: 'extendedcrafting:the_ultimate_catalyst'})
})

onEvent('recipes', event => {
    event.remove({id: 'extendedcrafting:ender_ingot'})
})

onEvent('recipes', event => {
    event.remove({output: 'ironcoals:aeon_coal'})
})

onEvent('recipes', event => {
    event.shapeless('storagedrawers:creative_storage_upgrade', [
        'mekanism:creative_bin'
    ])
})

onEvent('recipes', event => {
    event.shapeless('mekanism:creative_bin', [
        'storagedrawers:creative_storage_upgrade'
    ])
})

onEvent('recipes', event => {
    event.shapeless('storagedrawers:creative_vending_upgrade', [
        'cyclic:item_infinite'
    ])
})

onEvent('recipes', event => {
    event.shapeless('cyclic:item_infinite', [
        'storagedrawers:creative_vending_upgrade'
    ])
})

onEvent('recipes', event => {
    event.shaped('tconstruct:dragon_scale', [
        ' dd',
        'ddd',
        'dd '
    ], {
        d: 'mysticalagriculture:dragon_egg_essence'
    })
})

onEvent('recipes', event => {
    event.shaped('quark:dragon_scale', [
        'dd ',
        'ddd',
        ' dd'
    ], {
        d: 'mysticalagriculture:dragon_egg_essence'
    })
})

onEvent('recipes', event => {
    event.shaped('kubejs:white_shulker_shell', [
        'ddd',
        'ddd',
        'd d'
    ], {
        d: 'minecraft:glass'
    })
})

