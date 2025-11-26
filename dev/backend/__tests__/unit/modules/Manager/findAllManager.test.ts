import { FindAllManagerCommand } from "../../../../src/modules/Manager/application/useCase/findAllManager/findAllManagerCommand";
import { FindAllManagerInterceptor } from "../../../../src/modules/Manager/application/useCase/findAllManager/findAllManagerInterceptor";
import { mockManager } from "../../mock/mockData";
import { mockManagerRepo } from "./mockManagerRepo";

const interceptor = new FindAllManagerInterceptor(mockManagerRepo);

describe("findAllManager Interception", () => {
  it("Should  FindAllManager with valid data", async () => {
    const ManagerData: FindAllManagerCommand = {}
    const result = await interceptor.execute(ManagerData);
    expect(result).toEqual(mockManager);
    expect(mockManagerRepo.findAllManager).toHaveBeenCalledWith(ManagerData);
  });
});
 