import { CreateManagerCommand } from "../../../../src/modules/Manager/application/useCase/createManager/createManagerCommand";
import { CreateManagerInterceptor } from "../../../../src/modules/Manager/application/useCase/createManager/createManagerInterceptor";
import { mockManager } from "../../mock/mockData";
import { mockManagerRepo } from "./mockManagerRepo";

const interceptor = new CreateManagerInterceptor(mockManagerRepo);

describe("createManager Interception", () => {
  it("Should  CreateManager with valid data", async () => {
    const ManagerData: CreateManagerCommand = {
      email: "manager",
      firstName: "Name",
      lastName: "Name",
      role: "ADMIN",
    };
    const result = await interceptor.execute(ManagerData);
    expect(result).toEqual(mockManager);
    expect(mockManagerRepo.createManager).toHaveBeenCalledWith(ManagerData);
  });
});
