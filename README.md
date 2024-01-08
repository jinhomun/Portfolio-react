# Portfolio-react
## herocu 배포
### 파일 셋팅


## 트러블 슈팅
### npm run build 에러
- [eslint] Plugin "react" was conflicted between "package.json » eslint-config-react-app »     <br>C:\Users\line\Documents\GitHub\Portfolio-react\app\client\node_modules\eslint-config-react-app\base.js" and "BaseConfig » <br>C:\Users\line\Documents\GitHub\Portfolio-react\App\client\node_modules\eslint-config-react-app\base.js".<br>

```js
client -> package.json

  "eslintConfig": {
    "extends": [
      "react-app/jest"
    ]
  },
```
### herocku 배포 에러
- Error: ENOENT: no such file or directory, stat '/app/client/build/index.html'<br>
git 업로드 할때 client  -->  .gitignore -->  /build 부분을 지우고 업로드.<br>

