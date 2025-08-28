import {
    Block, Vector3, Player, world 
} from @minecraft/server;
import { EventAPI } from "../lib/EventAPI";

export class sculkCatalystPie {
    @EventAPI.register(world.afterEvents.entityDie)