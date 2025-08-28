import {
    ItemStopUseAfterEvent,
    world
} from "@minecraft/server";
import {
    EventAPI
} from "../lib/EventAPI";
export class FoodRegister {
    @EventAPI.register(world.afterEvents.itemStopUse)
    eat(args: ItemStopUseAfterEvent) {
        const itemStack = args.itemStack;
        const player = args.source
        const useDuration = args.useDuration
        if (itemStack && useDuration == 0) {
            switch (itemStack.typeId) {
                case "silentsdelight:warden_heart":
                case "silentsdelight:minced_warden_heart":
                    player.addEffect('blindness', 30 * 20, {
                        amplifier: 0
                    });
                    player.addEffect('weakness', 30 * 20, {
                        amplifier: 0
                    });
                    break;
                case "silentsdelight:sculk_sensor_tendril":
                case "silentsdelight:warden_ear":
                case "silentsdelight:warden_ear_on_a_stick":
                case "silentsdelight:cut_warden_ear":
                    player.addEffect('blindness', 30 * 20, {
                        amplifier: 0
                    });
                    break;
                case "silentsdelight:sculk_shrieker_shake":
                    player.addEffect('absorption', 60 * 20, {
                        amplifier: 0
                    });
                    break;
                case "silentsdelight:plated_of_warden_heart":
                    player.addEffect('resistance', 30 * 20, {
                        amplifier: 3
                    });
                    break;
                case "silentsdelight:heartburger":
                    player.addEffect('resistance', 30 * 20, {
                        amplifier: 3
                    });
                    break;
                case "silentsdelight:sculk_soup":
                case "silentsdelight:warden_ear_fried_rice":
                    player.addEffect('saturation', 30 * 20, {
                        amplifier: 0
                    });
                    break;
                case "silentsdelight:sculk_vein_salad":
                    player.addEffect('regeneration', 5 * 20, {
                        amplifier: 0
                    });
                    break;
            }
        }
    }
}