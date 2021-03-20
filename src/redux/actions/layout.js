export const LAYOUT_SIDEBAR_EXPAND = Symbol();
export const LAYOUT_SIDEBAR_COLLAPSE = Symbol();

export const expandSidebar = () => ({ type: LAYOUT_SIDEBAR_EXPAND });

export const collapseSidebar = () => ({ type: LAYOUT_SIDEBAR_COLLAPSE });