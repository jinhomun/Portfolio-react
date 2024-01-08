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