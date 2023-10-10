import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
    
    const [datas, setDatas] = useState([])

    useEffect(() => {
        axios.get(url).then(res => {
            setDatas(res.data)
        })

    }, [])

    return datas
}


export default useFetch

