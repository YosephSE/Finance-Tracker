import { useUser } from "@clerk/clerk-react"
import Form from "./Form"
import Record from "./Record"
const DashBoard = () => {

  const {user} = useUser()
  return (
    <div>
      <h1>Welcome {user?.firstName}! Here are your finances</h1>
      <Form/>
      <Record/>
    </div>
  )
}

export default DashBoard
