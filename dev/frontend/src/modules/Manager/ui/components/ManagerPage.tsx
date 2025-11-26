 import { useManagerPage } from "../hooks/useManagerPage"

export const ManagerPage=()=>{

const {states,actions} = useManagerPage()

console.log(states,actions)

    return <div>
        Manager
    </div>
}