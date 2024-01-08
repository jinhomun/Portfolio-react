import React, { useState } from 'react';
import axios from 'axios';

const RepleWrite = () => {
    const [reple, setReple] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [password, setPassword] = useState('');

    const SubmitHandler = async (e) => {
        e.preventDefault();

        // 비밀번호 길이 검증
        if (password.length !== 4) {
            return alert('비밀번호는 4자리로 입력해주세요.');
        }

        if (!reple) {
            return alert('댓글 내용을 채워주세요!!!');
        }

        try {
            const response = await axios.post('/api/reple/submit', {
                reple: reple,
                displayName: displayName,
                password: password,
            });

            if (response.data.success) {
                alert('댓글 작성이 성공하였습니다.');
                // 여기에서 페이지 리로드를 하지 않고, 상태를 업데이트할 수 있습니다.
            } else {
                alert('댓글 작성이 실패했습니다.');
            }
        } catch (error) {
            console.error('댓글 제출 중 오류:', error);
            alert('댓글 작성 중 오류가 발생했습니다.');
        }
    };

    return (
        <form onSubmit={SubmitHandler}>
            <input
                className="name-input"
                placeholder="Your Name"
                value={displayName}
                onChange={(e) => {
                    setDisplayName(e.currentTarget.value);
                }}
            />
            <textarea
                className="comment-input"
                placeholder="Input Comment"
                value={reple}
                onChange={(e) => {
                    setReple(e.currentTarget.value);
                }}
            ></textarea>
            <input
                className="name-input"
                placeholder="Password(4자리)"
                type="password"
                value={password}
                onChange={(e) => {
                    setPassword(e.currentTarget.value);
                }}
            />
            <button className="submit" type="submit">등록</button>
        </form>
    );
};

export default RepleWrite;
