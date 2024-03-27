import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { TbReload } from "react-icons/tb";
import { completed } from "../store+slice/timerSlice";


function Result({ speed = 0, error = 0, length }) {

    const time = useSelector((state) => state.timerReducer.time);
    const iscompleted = useSelector((state) => state.timerReducer.iscompleted);

    const dispatch = useDispatch();
    const [acc, setAcc] = useState(100);
    useEffect(() => {
            const x = ((length-error)/length)*100
            setAcc(x.toFixed(3));
    })
    return (
        <div className=" w-4/5 gap-x-10 px-10 py-5 h-1/4 absolute top-1/2 rounded-xl border flex justify-center items-center flex-col border-[#303436] bg-gradient-to-r from-black to-slate-900">
        <div className="flex  justify-between h-full w-full gap-x-10">
            <div className="h-full w-1/2 bg-slate-800 text-white rounded-xl flex justify-center items-center">
                Speed : {speed*(60/time)} W/M
            </div>
            <div className="h-full w-1/2 bg-slate-800 text-white rounded-xl flex justify-center items-center">
                
                Accuracy : {acc}
            </div>
        </div>
        <button 
        className="text-white bg-slate-800 px-6 rounded-lg flex justify-center items-center py-2 my-2 w-[20%]"
        onClick={() => dispatch(completed(false))}
        ><TbReload /> {" "} Restart test </button>
        </div>
    );
}

export default Result