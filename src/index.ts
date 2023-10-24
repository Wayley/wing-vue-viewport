/*
 * @Author: Robben Wadlay
 * @Date: 2023-10-23 10:26:44
 * @Description:
 * @LastEditors: Robben Wadlay
 * @LastEditTime: 2023-10-24 17:26:41
 */

import { ref, computed, type Ref, type ComputedRef } from 'vue';
import { defineStore } from 'pinia';

const MEDIUM_WIDTH: number = 576;
const SMALL_WIDTH: number = 768;
const LARGE_WIDTH: number = 992;
const EXTRA_LARGE_WIDTH: number = 1200;
const EXTRA_EXTRA_LARGE_WIDTH: number = 1400;
const REG_EXP: RegExp = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;

function detectIsMobile(): boolean {
  const userAgent: string = window.navigator.userAgent;
  const matchResult: RegExpMatchArray | null = userAgent.match(REG_EXP);
  return matchResult ? matchResult.length > 0 : false;
}

function getClientWidth(): number {
  const visualViewport: VisualViewport | null = window.visualViewport;
  return visualViewport ? visualViewport.width : document.body.clientWidth;
}

function windowRegisteResizeEvent(callback: Function) {
  let runtime: Date;
  let timeout: boolean = false;
  const DELAY: number = 150;

  window.addEventListener('resize', function () {
    runtime = new Date();
    if (!timeout) {
      timeout = true;
      setTimeout(resizeend, DELAY);
    }
  });

  function resizeend(): void {
    const duration: number = new Date().valueOf() - runtime.valueOf();
    if (duration < DELAY) {
      setTimeout(resizeend, DELAY);
    } else {
      timeout = false;
      callback();
    }
  }
}

export const useViewportWidthStore = function () {
  return defineStore('viewport', () => {
    const isMobile: Ref<boolean> = ref(detectIsMobile());

    const clientWidth: number = getClientWidth();

    const width: Ref<number> = ref(clientWidth);
    const isExtraSmallViewPort: ComputedRef<boolean> = computed(() => width.value < MEDIUM_WIDTH);
    const isMediumViewPort: ComputedRef<boolean> = computed(() => width.value >= MEDIUM_WIDTH);
    const isSmallViewPort: ComputedRef<boolean> = computed(() => width.value >= SMALL_WIDTH);
    const isLargeViewPort: ComputedRef<boolean> = computed(() => width.value >= LARGE_WIDTH);
    const isExtraLargeViewPort: ComputedRef<boolean> = computed(() => width.value >= EXTRA_LARGE_WIDTH);
    const isExtraExtraLargeViewPort: ComputedRef<boolean> = computed(() => width.value >= EXTRA_EXTRA_LARGE_WIDTH);

    windowRegisteResizeEvent(() => {
      width.value = getClientWidth();
      isMobile.value = detectIsMobile();
    });

    return {
      isMobile,
      width,
      isExtraSmallViewPort,
      isMediumViewPort,
      isSmallViewPort,
      isLargeViewPort,
      isExtraLargeViewPort,
      isExtraExtraLargeViewPort,
    };
  })();
};

export const wingVueViewport = { useViewportWidthStore };

export default wingVueViewport;
