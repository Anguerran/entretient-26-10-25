import { UpdateManagerByIdCommand } from "../../../../src/modules/Manager/application/useCase/updateManagerById/updateManagerByIdCommand";
import { UpdateManagerByIdInterceptor } from "../../../../src/modules/Manager/application/useCase/updateManagerById/updateManagerByIdInterceptor";
import { mockManager } from "../../mock/mockData";
import { mockManagerRepo } from "./mockManagerRepo";

const interceptor = new UpdateManagerByIdInterceptor(mockManagerRepo);

describe("updateManagerById Interception", () => {
  it("Should  UpdateManagerById with valid data", async () => {
    const ManagerData: UpdateManagerByIdCommand = {}
    const result = await interceptor.execute(ManagerData);
    expect(result).toEqual(mockManager);
    expect(mockManagerRepo.updateManagerById).toHaveBeenCalledWith(ManagerData);
  });
});
 