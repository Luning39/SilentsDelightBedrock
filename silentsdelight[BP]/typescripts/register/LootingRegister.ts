import {
    EntityEquippableComponent,
    EntityHurtAfterEvent,
    EquipmentSlot,
    ItemStack,
    world
} from "@minecraft/server"
import {
    EventAPI
} from "../lib/EventAPI"
import {
    RandomAPI
} from "../lib/RandomAPI";
import {
    ItemAPI
} from "../lib/ItemAPI";

export class LootingRegister {
    @EventAPI.register(world.afterEvents.entityHurt)
    looting(args: EntityHurtAfterEvent) {
        const entity = args.damageSource.damagingEntity
        const hurtEntity = args.hurtEntity
        if (!entity || !hurtEntity)
            return;
        const equipment = entity.getComponent(EntityEquippableComponent.componentId);
        const mainHand = equipment?.getEquipmentSlot(EquipmentSlot.Mainhand);
        if (!mainHand?.hasTag('farmersdelight:is_knife')) return;
        const health = hurtEntity.getComponent('minecraft:health');
        if (!health?.currentValue && hurtEntity.typeId === 'minecraft:warden') {
            try {
                ItemAPI.spawn(hurtEntity, 'silentsdelight:warden_heart');
                ItemAPI.spawn(hurtEntity, 'silentsdelight:warden_ear', RandomAPI.RandomInt(3));
            } catch (error) {}
        }
    }
}