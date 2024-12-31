/* eslint-disable react/prop-types */

const SabziCard = ({ name, id, completed, removeItem, updateStatus }) => {
    return (
        <div className="w-[600px] h-auto p-2 flex justify-between bg-slate-300 rounded-md transition-all ease-in-out duration-300 hover:bg-slate-400">
            <div>
                <input type="checkbox" name="checkbox" id={id} checked={completed} onChange={() => updateStatus(id)}/>
                <span className={`text-lg p-4 ${completed ? `line-through` : ``} `}>{name}</span>
            </div>
            <div>
                <button
                    className="bg-red-500 hover:bg-red-600 text-lg text-white py-1 px-2 rounded-md"
                    onClick={() => removeItem(id)}
                >
                    delete
                </button>
            </div>
        </div>
    );
};

export default SabziCard;
