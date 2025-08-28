import Form from "../components/Form"
import List from "../components/List"
import Topbar from "../components/Topbar"

const MainLayout = ()=>{
  return (
    <>
    <Topbar/>
    <div className="d-flex flex-column gap-5 justify-content-center h-100vh w-md-75 border mx-auto mt-5">        
      <Form />
      <List />
    </div>
    </>
  )
}
export default MainLayout