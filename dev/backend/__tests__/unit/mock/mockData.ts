import { ManagerModel } from "../../../src/modules/Manager/model/ManagerModel";
import { DirectionModel } from "../../../src/modules/Direction/model/DirectionModel";
import { ClientModel } from "../../../src/modules/Client/model/ClientModel";
export const mockClient: ClientModel = { id: "" };
export const mockDirection: DirectionModel = { id: "" };
export const mockManager: ManagerModel = {
  email: "manager",
  id: "123",
  branchManagedId: "managerBranch",
  firstName: "Name",
  googleId: "id000",
  lastName: "Name",
  role: "ADMIN",
  profilImage: "img.tm",
  passwordHash: "lorem",
};
// do-not-delete-or-change-this-helper
