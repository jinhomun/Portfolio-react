import React, { useState } from 'react';
import axios from 'axios';

const RepleWrite = ({ onNewRepleSubmit }) => {
    const [reple, setReple] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");

    const SubmitHandler = async (e) => {
        e.preventDefault();

        if (password.length !== 4) {
            return alert("비밀번호는 4자리로 입력해주세요.");
        }

        if (!reple) {
            return alert("댓글 내용을 채워주세요!!!");
        }

        let body = {
            reple: reple,
            displayName: displayName,
            password: password,
        }

        try {
            const response = await axios.post("/api/reple/submit", body);
            if (response.data.success) {
                alert("댓글 작성이 성공하였습니다.");
                // 새로운 댓글을 부모 컴포넌트에 전달
                onNewRepleSubmit(response.data.newReple);
                // 입력 필드 초기화
                setReple("");
                setDisplayName("");
                setPassword("");
            } else {
                alert("댓글 작성이 실패했습니다.");
            }
        } catch (error) {
            console.error("댓글 작성 오류:", error);
            alert("댓글 작성 중 오류가 발생했습니다.");
        }
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