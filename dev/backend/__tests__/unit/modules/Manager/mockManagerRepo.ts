import { ManagerGateway } from "../../../../src/modules/Manager/gateway/ManagerGateway";
import { mockManager } from "../../mock/mockData";

export const mockManagerRepo: ManagerGateway = {
  createManager: jest.fn().mockReturnValue(mockManager),
  deleteManager: jest.fn().mockReturnValue(mockManager),
  findAllManager: jest.fn().mockReturnValue([mockManager]),
  updateManagerById: jest.fn().mockReturnValue(mockManager),
  // do-not-delete-or-change-this-helper
};
