import Button from "./Button"
import Input from "./Input";

const ListItem = ({item}) => {
    return (
        <div className="d-flex justify-content-between align-items-center w-100 border border-black p-2 rounded-3">
            <div className="flex-grow-1">
                <h6>{item.medicineName}</h6>
                <p className="mb-0">{item.medicineDescription}</p>
            </div>
            <div className="d-flex align-items-center gap-2 me-3">
                <span className="mx-3">{item.price }</span>
                <input className="list-input" type="number" placeholder="Enter Quantity"/>
            </div>
            <Button
                extraCss=""
                icon={<i className="bi bi-bag-plus-fill" ></i>}
                // label="Add To Cart"
            />
            <Button
                extraCss="ms-2"
                icon={<i className="bi bi-trash-fill" ></i>}
                
                // label="Add To Cart"
            />
        </div>
    );
};

export default ListItem

