import Button from "./Button"

const Topbar = ({setOpenModal})=>{
    
    const handleOpenModal = ()=>{
        setOpenModal(true)
    }
    return(
        <div className="topbar">
            <Button icon={<i class="bi bi-cart-fill"></i>} label="Cart"  onClick={handleOpenModal} />
        </div>
    )
}
export default Topbar