import { HttpClient } from "../../../../shared/request/http/HttpClient";
import { ManagerGateway } from "../../gateway/ManagerGateway"
import { ManagerApiRoutes } from "../../application/routes/apiRoutes";

export class HttpManagerGateway implements ManagerGateway  {

    constructor(private client:HttpClient){}
    Manager(){
        return
    }
}