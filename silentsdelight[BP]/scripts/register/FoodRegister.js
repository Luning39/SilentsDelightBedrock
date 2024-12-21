var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
import { ItemStopUseAfterEvent, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
export class FoodRegister {
    eat(args) {
        const itemStack = args.itemStack;
        const player = args.source;
        const useDuration = args.useDuration;
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
__decorate([
    EventAPI.register(world.afterEvents.itemStopUse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof ItemStopUseAfterEvent !== "undefined" && ItemStopUseAfterEvent) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], FoodRegister.prototype, "eat", null);
//# sourceMappingURL=FoodRegister.js.map