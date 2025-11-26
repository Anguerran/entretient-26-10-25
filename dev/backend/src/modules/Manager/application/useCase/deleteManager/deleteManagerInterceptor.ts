import { AppError } from '../../../../../../shared/error/AppError';
import { ExeptionEnum } from './../../../../../../shared/error/ExeptionEnum';
import { HttpStatusEnum } from '../../../../../../shared/error/httpStatusEnum';
import { ManagerGateway } from '../../../gateway/ManagerGateway';
import { DeleteManagerCommand } from "./deleteManagerCommand";
import { DeleteManagerResponse } from "./deleteManagerResponse";
import { validateDeleteManager } from "../../validations/validateDeleteManager";

export class DeleteManagerInterceptor {
  private error = new AppError({
    message: "error at DeleteManager please Report to the team",
    status: HttpStatusEnum.S500,
    type: ExeptionEnum.INTERNAL_SERVER_ERROR,
  });
  constructor(private repository: ManagerGateway) {}

  async execute(command: DeleteManagerCommand): Promise<DeleteManagerResponse> {
    try {

   const  zodResult   =validateDeleteManager.safeParse(command)
      if(zodResult.error){
               this.error.data.data = zodResult.error.format()
               this.error.data.message = "invalide input at deleteManager"
               this.error.data.status=HttpStatusEnum.S400
               this.error.data.type=ExeptionEnum.VALIDATION_ERROR
               throw this.error
        }


      const res = await this.repository.deleteManager(zodResult.data);

      return res;
    } catch (error) {
      throw this.error.getError(error)
    }
  }
}
