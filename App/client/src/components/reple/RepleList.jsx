import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RepleContet from './RepleContet';
import RepleWrite from './RepleWrite'; // RepleWrite 컴포넌트 추가

const RepleList = (props) => {
    const [repleList, setRepleList] = useState([]);

    useEffect(() => {
        fetchRepleList();
    }, []);

    const fetchRepleList = () => {
        let body = {
            reple: props.reple,
            displayName: props.displayName,
        }

        axios.post("/api/reple/getReple", body)
            .then((response) => {
                if (response.data.success) {
                    setRepleList([...response.data.repleList]);
                }
            });
    };

    // RepleWrite에서 호출될 함수: 새로운 댓글을 추가하고 상태를 업데이트
    const handleNewRepleSubmit = (newReple) => {
        setRepleList([...repleList, newReple]);
    };

    return (
        <div>
            {/* ... 기존 댓글 렌더링 ... */}
            {repleList.map((reple, idx) => (
                <RepleContet reple={reple} key={idx} />
            ))}
            {/* RepleWrite 컴포넌트에 새로운 댓글 전달 */}
            <RepleWrite onNewRepleSubmit={handleNewRepleSubmit} />
        </div>
    );
}

export default RepleList;