
import { HttpClient } from "../../shared/request/http/HttpClient";
import { Dependencies } from "./Dependencies";
import { HttpManagerGateway } from '../../modules/Manager/infrastructure/repository/httpManagerGateway';
const repository = new HttpClient();
export const extraArgument: Dependencies = {
  ManagerGateway:new HttpManagerGateway(repository), 
 };