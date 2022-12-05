# shall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 首页商品的数据结构设计
在`create`生命周期函数中把`流行、精选、热门`对应的`page页`的数据全部请求下来，数据结构如下:
```
# ESLint报错时，需要把`'pop'、'news'、'sell'`中的`''`去掉
goods: {
  'pop': {
    page: 1,
    list: []
  },
  'new': {
    page: 1,
    list: []
  },
  'sell': {
    page: 1,
    list: []
  }
}
```
