// import { FindAllManagerCommand } from "../../application/useCase/findAllManager/FindAllManagerCommand";
import { FindAllManagerResponse } from "../../application/useCase/findAllManager/FindAllManagerResponse";
import { HttpClient } from "../../../../shared/request/http/HttpClient";
import { ManagerGateway } from "../../gateway/ManagerGateway";
import { ManagerApiRoutes } from "../../application/routes/apiRoutes";

export class HttpManagerGateway implements ManagerGateway {
  constructor(private client: HttpClient) {}
  Manager() {
    return;
  }

  async findAllManager(): // command: FindAllManagerCommand
  Promise<FindAllManagerResponse> {
    const res = await this.client.get<FindAllManagerResponse>(
      ManagerApiRoutes.findAllManager()
    );
    return res;
  }
}
