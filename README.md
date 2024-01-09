# Portfolio-react
## 셋팅
<details>
<summary>폴더 생성</summary>

`mkdir client` -> 클라이언트 폴더 생성   
`mkdir server` -> 서버 폴더 생성

</details>

<details>
<summary>client 설치</summary>


`npx create-react-app .`-> React 설치  
`npm i sass` -> sass 설치   
`npm i react-bootstrap bootstrap` -> React 컴포넌트를 쉽게 Bootstrap 스타일과 통합하여 사용   
`npm i react-router-dom` ->  React 애플리케이션에서 유연하고 효과적인 라우팅 시스템을 구축   
`npm i axios` -> React 또는 다른 JavaScript 프로젝트에서 서버와의 통신을 쉽게 처리할 수 있고, 코드의 가독성과 유지보수성을 향상   
`npm install http-proxy-middleware` ->  개발 환경에서의 API 호출 문제를 해결하고, 로컬 개발 서버에서도 외부 API와의 통신을 쉽게 관리   
`npm i gsap` -> Gsap 효과를 사용하기 위해서 설치   
`npm i highlight` -> 코드 구문을 강조하기 위해 설치     

</details>

<details>
<summary>server 설치</summary>

`npm init -y;`->  Node.js 프로젝트를 초기화하는 명령어로, 기본 설정으로 자동으로 프로젝트의 package.json 파일을 생성   
`npm i express --save;` -> Express는 웹 애플리케이션을 쉽게 개발하기 위한 빠르고 유연한 웹 프레임워크로 널리 사용  
`npm i nodemon --save;` -> 개발자가 코드를 수정하고 저장할 때마다 서버를 자동으로 다시 시작, 코드 변경을 즉시 확인 가능.  
`npm i path --save;` ->  Node.js에서 파일 경로와 관련된 작업을 수행   
`npm install mongoose --save;` -> MongoDB를 사용하기 위해서 설치  

</details>

## client
### 디자인
- Grid를 이용해서 디자인

### 애니메이션
- Gsap와 linkClickHandler를 이용한 애니메이션
- SliderScript를 이용한 이미지 슬라이드 애니메이션

### 댓글 기능
- 사용자로부터 작성자 이름, 댓글 내용, 비밀번호를 받아 MongoDB에 관리
- 서버와 연결하여 댓글 업로드, 댓글 수정, 댓글 삭제 기능 구현.

### 댓글 CODE
<details>

<summary>RepleWrite.jsx (댓글 작성)</summary>

```js
import React, { useState } from 'react'
// import { useSelector } from 'react-redux';
import axios from 'axios';

const RepleWrite = () => {
    const [reple, setReple] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("")
    // const user = useSelector((state) => state.user);

    const SubmitHandler = (e) => {
        e.preventDefault();

        // 비밀번호 길이 검증
        if (password.length < 4 || password.length > 4) {
            return alert("비밀번호는 4자리로 입력해주세요.");
        }

        if (!reple) {
            return alert("댓글 내용을 채워주세요!!!");
        }

        let body = {
            reple: reple,
            displayName: displayName,
            password: password
            // uid: user.uid,
            // postId: props.postId
        }

        axios.post("/api/reple/submit", body).then((response) => {
            if (response.data.success) {
                alert("댓글 작성이 성공하였습니다.");
                window.location.reload();
            } else {
                alert("댓글 작성이 실패했습니다.");
            }
        })
    }

    return (
        <>
            <input
                className="name-input"
                placeholder="Your Name"
                value={displayName}
                onChange={(e) => { setDisplayName(e.currentTarget.value) }}
            />
            <textarea
                className="comment-input"
                placeholder="Input Comment"
                value={reple}
                onChange={(e) => { setReple(e.currentTarget.value) }}
            ></textarea>
            <input
                className="name-input"
                placeholder="Password(4자리)"
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.currentTarget.value) }}
            />
            <button className="submit" onClick={(e) => { SubmitHandler(e) }}>등록</button>
        </>
    );
}

export default RepleWrite
```
</details>

<details>

<summary>RepleList.jsx (댓글 리스트)</summary>

```js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RepleContet from './RepleContet';

const RepleList = (props) => {
    const [repleList, setRepleList] = useState([]);

    useEffect(() => {
        let body = {
            reple: props.reple,
            displayName: props.displayName,
        }

        axios.post("/api/reple/getReple", body).then((response) => {
            if (response.data.success) {
                setRepleList([...response.data.repleList]);
            }
        });
    }, [props.reple, props.displayName]); // 의존성 배열 추가

    return (
        <div>
            {repleList.map((reple, idx) => {
                return (
                    <RepleContet reple={reple} key={idx} />
                )
            })}
        </div>
    )
}

export default RepleList;
```
</details>

<details>

<summary>RepleContent.jsx (댓글 수정,삭제)</summary>

```js
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { FiMoreHorizontal } from "react-icons/fi";

const RepleContet = (props) => {
    const [reple, setReple] = useState(props.reple.reple)
    const [editFlag, setEditFlag] = useState(false);
    const [modalFlag, setModalFlag] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setModalFlag(false));


    const SubmitHandler = (e) => {
        e.preventDefault();
        const userPassword = prompt("댓글을 수정하려면 패스워드를 입력하세요.😀");

        let body = {
            reple_id: props.reple._id,
            reple: reple,
            displayName: props.displayName,
            password: String(userPassword),  // Explicitly convert to string
        };

        axios.post("/api/reple/edit", body)
            .then((response) => {
                if (response.data.success) {
                    alert("댓글 수정 성공하였습니다.");
                    setEditFlag(false);
                    window.location.reload();

                    if (response.data.updatedReple) {
                        setReple(response.data.updatedReple.reple);
                        // Additional state updates if needed
                    } else {
                        console.error("Updated reple is undefined or null.");
                    }
                } else {
                    alert("댓글 수정 실패했습니다.");
                }
            })
            .catch((error) => {
                console.error("Error in SubmitHandler:", error);
                alert("댓글 수정 중 오류가 발생했습니다."); // 실패할 때도 알림을 표시
            });
    };

    // 클라이언트 reple 댓글 삭제
    const DeleteHandler = (e) => {
        e.preventDefault();
        const userPassword = prompt("댓글을 삭제하려면 패스워드를 입력하세요.");

        if (userPassword) {
            let body = {
                repleId: props.reple._id,
                displayName: props.reple.displayName,
                password: userPassword  // 사용자가 입력한 패스워드 추가
            };

            axios.post("/api/reple/delete", body)
                .then((response) => {
                    if (response.data.success) {
                        alert("댓글이 삭제되었습니다.");
                        window.location.reload();
                    } else {
                        alert("댓글 삭제에 실패했습니다.");
                    }
                })
                .catch((err) => {
                    console.log(err);
                    alert("댓글 삭제에 실패했습니다.");
                });
        }
    };



    return (
        <div>
            <div className="comment__container">
                <p className="name">작성자: {props.reple.displayName}</p>
                <p className="text">댓글: {props.reple.reple} </p>
                <span className="more-icon" onClick={() => setModalFlag(true)}><FiMoreHorizontal /></span>
                {modalFlag && (
                    <div className='modal' ref={ref}>
                        <button className='edit' onClick={() => {
                            setEditFlag(true);
                            setModalFlag(false);
                        }}>수정</button>
                        <button className='remove' onClick={(e) => DeleteHandler(e)}>삭제</button>
                    </div>
                )}
            </div>


            {editFlag ? (
                <div>
                    <form>
                        <input
                            className="edit-input"
                            placeholder="Input Comment"
                            text="text"
                            value={reple}
                            onChange={(e) => { setReple(e.currentTarget.value) }}
                        />
                        <button className='edit' onClick={(e) => { SubmitHandler(e) }}>수정</button>
                        <button className='cancel'
                            onClick={(e) => {
                                e.preventDefault();
                                setEditFlag(false);
                            }}
                        >취소</button>
                    </form>
                </div>
            ) : (
                <p></p>
            )}
        </div >
    )
}

function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

export default RepleContet
```
</details>



### 프록시 설정
- 프론트엔드 개발 서버에서 API 요청을 백엔드 서버로 투명하게 전달할 수 있어, 개발 과정을 더 효율적으로 만듬

## server
### 서버 구성

<details>

<summary>index.js </summary>

express : Node.js 웹 애플리케이션 프레임워크. <br>
mongoose : MongoDB를 위한 ODM(Object Data Mapping) 라이브러리.<br>
환경변수(process.env.PORT) 또는 기본 포트(5050)에서 서버 실행.<br>
mongoose.connect를 사용하여 MongoDB와 연결<br>
config -> dev.js 다른 사람에게 노출 되면 안됨.<br>
express.static을 사용하여 React 애플리케이션의 빌드 파일 제공.<br>

```js
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5050;
const config = require("./server/config/key.js");

app.use(express.static(path.join(__dirname, "./client/build")));;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// express router
app.use("/api/reple", require("./server/router/reple.js"));


app.listen(port, () => {
    mongoose
        .connect(config.mongoURI)
        .then(() => {
            console.log("listening  --> " + port);
            console.log("mongoose --> connecting");
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
```
</details>

### 댓글 구성(Reple)
<details>
Reple 모델을 사용하여 댓글 데이터 관리.<br>

<summary>model - Reple.js</summary>

```js
const mongoose = require("mongoose");

const repleSchema = new mongoose.Schema(
    {
        reple: String,   --> 댓글
        displayName: String,  --> 작성자
        password: String  --> 댓글 삭제,수정할때 사용할 비밀번호
    },
    { collection: "reples" }
);

const Reple = mongoose.model("Reple", repleSchema);

module.exports = { Reple };
```

</details>

<details>
MongoDB와 상호 작용하면서 댓글 관리 기능(댓글 입력, 댓글 출력, 댓글 수정, 댓글 삭제)을 구현한 router <br>

<summary>router - reple.js</summary>

```js
const express = require("express");
const router = express.Router();

// 스키마 만들기
// const { Post } = require("../model/Post.js");
// const { User } = require("../model/User.js");
const { Reple } = require("../model/Reple.js");


// 댓글 전송버튼 누르면 몽고db에 들어감.
router.post("/submit", async (req, res) => {
    let temp = {
        reple: req.body.reple,
        displayName: req.body.displayName,
        password: req.body.password
    }

    try {
        const NewReple = new Reple(temp);
        await NewReple.save();

        // await Post.findOneAndUpdate(
        //     { _id: req.body.postId },
        //     { $inc: { repleNum: 1 } }
        // ).exec();

        return res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false });
    }


});
// 몽고db reple에서 댓글 데이터 가져오기
router.post("/getReple", (req, res) => {
    Reple.find({})
        .exec()
        .then((repleInfo) => {
            return res.status(200).json({ success: true, repleList: repleInfo })
        })
        .catch((err) => {
            console.log(err);
            return res.status(400).json({ success: false })
        })
})

router.post("/edit", (req, res) => {
    const repleId = req.body.reple_id;
    const inputPassword = req.body.password; // 추가: 입력된 password

    // 먼저 해당 댓글을 가져옴
    Reple.findById(repleId)
        .exec()
        .then((reple) => {
            if (!reple) {
                return res.status(404).json({ success: false, message: "댓글을 찾을 수 없습니다." });
            }

            // 입력된 password와 저장된 password 비교
            if (inputPassword !== reple.password) {
                return res.status(401).json({ success: false, message: "비밀번호가 일치하지 않습니다." });
            }

            // 비밀번호가 일치하면 댓글 업데이트
            let temp = {
                reple: req.body.reple,
            };

            Reple.findOneAndUpdate({ _id: repleId }, { $set: temp }, { new: true })
                .exec()
                .then((updatedReple) => {
                    return res.status(200).json({ success: true, updatedReple });
                })
                .catch((err) => {
                    return res.status(400).json({ success: false, error: err.message });
                });
        })
        .catch((err) => {
            return res.status(500).json({ success: false, error: err.message });
        });
});

// 댓글 작성할때 사용했던 비밀번호로 댓글 삭제 가능.
router.post("/delete", (req, res) => {
    const repleId = req.body.repleId;
    const userPassword = req.body.password;

    if (!repleId || !userPassword) {
        return res.status(400).json({ success: false, message: "유효하지 않은 요청" });
    }

    Reple.findOne({ _id: repleId })
        .exec()
        .then((reple) => {
            if (!reple) {
                return res.status(404).json({ success: false, message: "댓글을 찾을 수 없습니다." });
            }

            // 패스워드 비교
            if (reple.password !== userPassword) {
                return res.status(401).json({ success: false, message: "패스워드가 일치하지 않습니다." });
            }

            // 패스워드 일치 시 삭제
            Reple.deleteOne({ _id: repleId })
                .exec()
                .then(() => {
                    // 필요한 경우 추가 로직
                    return res.status(200).json({ success: true });
                })
                .catch((err) => {
                    console.error(err);
                    return res.status(400).json({ success: false, message: "댓글 삭제 실패" });
                });
        })
        .catch((err) => {
            console.error(err);
            return res.status(500).json({ success: false, message: "서버 오류" });
        });
});

module.exports = router;
```

</details>

## heroku 배포

### 파일 셋팅
- App 폴더를 만든다.   
- clinet 폴더와 server 폴더를 App 폴더 안으로 넣는다.   
- server 폴더 안에서 index.js , package.json, package-lock.json폴더를 꺼내서 client폴더, server 폴더와 같은 위치한다.
- Procfile 파일을 만들고 `web: node index.js` Procfile 파일 안에 넣는다.   
- index.js에서 경로를 수정해주고, port를  `const port = 5050;` 에서 `const port = process.env.PORT || 5050;` 로 바꿔준다.  
- npm run build를 하고, github에 commit 한다.  

### heroku 셋팅
- heroku 홈페이지에 들어가서, 회원가입후 2차보안까지 설정하고, 카드등록을 까지 한다.      
- Create new app를 누르고, App name 작성, 그전에 Heroku CLI 부터 설치 해야한다.   
- CLI 설치후 , VSC코드로 돌아와서 터미널 열고, + 옆 화살표 모양을 누른다음 Command Prompt를 누른다.  
- Command Prompt에 `heroku login` 넣고 ~~exit문구가 뜨면 엔터 누르면 로그인창이 뜨면 로그인 한다.  
- 로그인하고 VSC코드로 돌아오면 초록색 글씨로 로그인 되었다고 초록색 글씨가 떠있을것이다.  
- 순서대로, 코드를 입력하거나 복사하면 되는데, `git init`  -> `heroku git:remote -a Appname` -> `git add .` -> `git commit -am "make it better"` ->  `git subtree push --prefix App heroku main` 이 순서대로 코드를 입력하면 배포가 될것이다.
- 배포가 안되고, 오류가 떴을땐, `heroku logs --tail` 오류검사를 해보면 된다.  

## 트러블 슈팅
### nodemon 에러
server -> package.json
```js
"scripts": {
    "start": "node index.js"  ---> nodemon index.js 으로 수정
  },
```

### npm run build 에러
[eslint] Plugin "react" was conflicted between "package.json » eslint-config-react-app »     <br>C:\Users\line\Documents\GitHub\Portfolio-react\app\client\node_modules\eslint-config-react-app\base.js" and "BaseConfig » <br>C:\Users\line\Documents\GitHub\Portfolio-react\App\client\node_modules\eslint-config-react-app\base.js".<br>

client -> package.json
```js
  "eslintConfig": {   ---> 코드를 삭제하면 build가 됨.
    "extends": [
      "react-app/jest"
    ]
  },
```
### herocku 배포 에러
- Error: ENOENT: no such file or directory, stat '/app/client/build/index.html'<br>
git 업로드 할때 client  -->  .gitignore -->  /build 부분을 지우고 업로드.<br>

