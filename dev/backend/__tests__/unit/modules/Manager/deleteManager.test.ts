import { DeleteManagerCommand } from "../../../../src/modules/Manager/application/useCase/deleteManager/deleteManagerCommand";
import { DeleteManagerInterceptor } from "../../../../src/modules/Manager/application/useCase/deleteManager/deleteManagerInterceptor";
import { mockManager } from "../../mock/mockData";
import { mockManagerRepo } from "./mockManagerRepo";

const interceptor = new DeleteManagerInterceptor(mockManagerRepo);

describe("deleteManager Interception", () => {
  it("Should  DeleteManager with valid data", async () => {
    const ManagerData: DeleteManagerCommand = {}
    const result = await interceptor.execute(ManagerData);
    expect(result).toEqual(mockManager);
    expect(mockManagerRepo.deleteManager).toHaveBeenCalledWith(ManagerData);
  });
});
 