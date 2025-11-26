import { RouteObject } from "react-router-dom";
import { AppStore } from "../../../../App/Store/Store";
import { ManagerPage } from '../../ui/components/ManagerPage'
import  { ManagerRoutes } from './routes'


//@ts-expect-error this line include unuse store variable it might be used late
export const ManagerRouter=(store:AppStore):RouteObject[]=>{
 return [ {
    path: ManagerRoutes.Manager(),
    element: < ManagerPage />

 } ] }