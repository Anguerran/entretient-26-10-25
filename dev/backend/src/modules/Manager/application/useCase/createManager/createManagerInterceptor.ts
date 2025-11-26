import { AppError } from '../../../../../../shared/error/AppError';
import { ExeptionEnum } from './../../../../../../shared/error/ExeptionEnum';
import { HttpStatusEnum } from '../../../../../../shared/error/httpStatusEnum';
import { ManagerGateway } from '../../../gateway/ManagerGateway';
import { CreateManagerCommand } from "./createManagerCommand";
import { CreateManagerResponse } from "./createManagerResponse";
import { validateCreateManager } from "../../validations/validateCreateManager";

export class CreateManagerInterceptor {
  private error = new AppError({
    message: "error at CreateManager please Report to the team",
    status: HttpStatusEnum.S500,
    type: ExeptionEnum.INTERNAL_SERVER_ERROR,
  });
  constructor(private repository: ManagerGateway) {}

  async execute(command: CreateManagerCommand): Promise<CreateManagerResponse> {
    try {

   const  zodResult   =validateCreateManager.safeParse(command)
      if(zodResult.error){
               this.error.data.data = zodResult.error.format()
               this.error.data.message = "invalide input at createManager"
               this.error.data.status=HttpStatusEnum.S400
               this.error.data.type=ExeptionEnum.VALIDATION_ERROR
               throw this.error
        }


      const res = await this.repository.createManager(zodResult.data);

      return res;
    } catch (error) {
      throw this.error.getError(error)
    }
  }
}
