/* eslint-disable react/prop-types */
import SabziCard from "./SabziCard"

const SabziContainer = ({sabziList, removeItem, updateStatus}) => {
  return (
    <div className="flex flex-col p-4 gap-4 ">
        {sabziList.map((item, index) => (
            <SabziCard key={index} {...item} removeItem={removeItem} updateStatus= {updateStatus} />
        ) )}

    </div>
  )
}

export default SabziContainer