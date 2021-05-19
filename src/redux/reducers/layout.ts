
import { LAYOUT_SIDEBAR_COLLAPSE, LAYOUT_SIDEBAR_EXPAND } from '../actions/layout';

export default function (state: any = { sideBarOpen: false }, action: any) {
    switch (action.type) {
        case LAYOUT_SIDEBAR_COLLAPSE:
            return { sideBarOpen: false };
        case LAYOUT_SIDEBAR_EXPAND:
            return { sideBarOpen: true };
        default:
            return state;
    }
}