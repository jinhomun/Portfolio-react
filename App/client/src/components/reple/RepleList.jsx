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