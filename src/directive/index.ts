// ./directive/index.ts
export const focus = {
    // 当被绑定的元素插入到 DOM 中时……
    inserted(el: HTMLElement) {
        // 聚焦元素
        el.focus();
    },
};
