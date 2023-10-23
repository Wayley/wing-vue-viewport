/*
 * @Author: Robben Wadlay
 * @Date: 2023-10-23 10:26:44
 * @Description:
 * @LastEditors: Robben Wadlay
 * @LastEditTime: 2023-10-23 11:27:03
 */
import wingViewport, { Viewport } from 'wing-viewport';
import { App } from '@vue/runtime-core';

// declare module 'vue' {
//   interface ComponentCustomProperties {
//     $viewport: typeof wingVueViewport;
//   }
// }

export declare interface WingVueViewport extends Viewport {
  install(app: App): void;
}

export const wingVueViewport: WingVueViewport = {
  install(app: App) {
    app.config.globalProperties.$viewport = this;
  },
  ...wingViewport,
};

export default wingVueViewport;
