import { UpdateManagerByIdCommand } from "../application/useCase/updateManagerById/updateManagerByIdCommand";
import { UpdateManagerByIdResponse } from "../application/useCase/updateManagerById/updateManagerByIdResponse";
import { FindAllManagerCommand } from "../application/useCase/findAllManager/findAllManagerCommand";
import { FindAllManagerResponse } from "../application/useCase/findAllManager/findAllManagerResponse";
import { DeleteManagerCommand } from "../application/useCase/deleteManager/deleteManagerCommand";
import { DeleteManagerResponse } from "../application/useCase/deleteManager/deleteManagerResponse";
import { CreateManagerCommand } from "../application/useCase/createManager/createManagerCommand";
import { CreateManagerResponse } from "../application/useCase/createManager/createManagerResponse";
export interface ManagerGateway {
createManager:(command:CreateManagerCommand)=>Promise<CreateManagerResponse>
deleteManager:(command:DeleteManagerCommand)=>Promise<DeleteManagerResponse>
findAllManager:(command:FindAllManagerCommand)=>Promise<FindAllManagerResponse>
updateManagerById:(command:UpdateManagerByIdCommand)=>Promise<UpdateManagerByIdResponse> 
 }