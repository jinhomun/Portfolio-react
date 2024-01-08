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