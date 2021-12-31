import sections from "../../components/directory/data";
const INITIAL_STATE = {
    sections
}

const directoryReducer = (state=INITIAL_STATE)=>(
    {
        ...state
    }
    );
export default directoryReducer;