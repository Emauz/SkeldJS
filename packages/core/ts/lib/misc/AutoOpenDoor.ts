import { SystemStatus } from "../system";
import { Door } from "./Door";

/**
 * Represents an auto opening door for the {@link AutoDoorsSystem}.
 *
 * See {@link DoorEvents} for events to listen to.
 */
export class AutoOpenDoor extends Door {
    private _timer: number;

    constructor(
        protected system: SystemStatus,
        readonly id: number,
        isOpen: boolean
    ) {
        super(system, id, isOpen);
    }

    DoUpdate(delta: number) {
        this._timer -= delta;

        if (this._timer < 0) {
            this.open();
            return true;
        }
        return false;
    }
}
