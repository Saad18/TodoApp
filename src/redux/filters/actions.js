import { COLORCHANGED, STATUSCHANGED } from "./actionsType"

export const colorChanged = (color, changeType) => ({
    type: COLORCHANGED,
    payload: {
        color,
        changeType,
    }
});

export const statusChanged = (status) => ({
    type: STATUSCHANGED,
    payload: status,
})