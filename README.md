# wing-vue-viewport

a utility tool for viewport on Vue3.0

## Usage

```js
import wingVueViewport from 'wing-vue-viewport';

app.use(wingVueViewport);

this.$viewport[MethodName];
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
