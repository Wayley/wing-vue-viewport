# wing-vue-viewport

a utility tool for viewport on Vue3.0

## Usage

### v0.1.0(latest)

```js

import { useViewportWidthStore } from 'wing-vue-viewport'
const viewportWidthStore = useViewportWidthStore()
const { width, isMediumViewPort } = storeToRefs(viewportWidthStore)

//
<h1>{{width}}--{{ isMobile }}--{{ isMediumViewPort }}</h1>
```

### v0.0.2

```js
import wingVueViewport from 'wing-vue-viewport';

app.use(wingVueViewport);

this.$viewport.isMobile();
this.$viewport.isExtraSmallViewPort();
this.$viewport.isMediumViewPort();
this.$viewport.isSmallViewPort();
this.$viewport.isLargeViewPort();
this.$viewport.isExtraLargeViewPort();
this.$viewport.isExtraExtraLargeViewPort();
```

## Methods

|              MethodName               |             Description              |
| :-----------------------------------: | :----------------------------------: |
|         `isMobile():boolean`          | Check whether it'is a mobile browser |
|   `isExtraSmallViewPort():boolean`    |          clientWidth < 576           |
|     `isMediumViewPort():boolean`      |          clientWidth >= 576          |
|      `isSmallViewPort():boolean`      |          clientWidth >= 768          |
|      `isLargeViewPort():boolean`      |          clientWidth >= 992          |
|   `isExtraLargeViewPort():boolean`    |         clientWidth >= 1200          |
| `isExtraExtraLargeViewPort():boolean` |         clientWidth >= 1400          |
