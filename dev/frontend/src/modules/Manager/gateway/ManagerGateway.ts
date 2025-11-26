import { FindAllManagerCommand } from "../application/useCase/findAllManager/FindAllManagerCommand";
import { FindAllManagerResponse } from "../application/useCase/findAllManager/FindAllManagerResponse";

export interface ManagerGateway {
    Manager:()=>void,
findAllManager:(command:FindAllManagerCommand)=>Promise<FindAllManagerResponse> 
 }