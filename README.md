# Portfolio-react
## 셋팅
`mkdir client` -> 클라이언트 폴더 생성   
`mkdir server` -> 서버 폴더 생성
### client
`npx create-react-app .`-> React 설치  
`npm i sass` -> sass 설치   
`npm i react-bootstrap bootstrap` -> React 컴포넌트를 쉽게 Bootstrap 스타일과 통합하여 사용   
`npm install react-router-dom` ->  React 애플리케이션에서 다양한 페이지 간의 전환 및 네비게이션을 효과적으로 관리할 수 있는 라우팅 시스템을 구축

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

