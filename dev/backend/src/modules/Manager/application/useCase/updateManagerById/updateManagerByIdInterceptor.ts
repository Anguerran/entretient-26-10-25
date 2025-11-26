import { AppError } from '../../../../../../shared/error/AppError';
import { ExeptionEnum } from './../../../../../../shared/error/ExeptionEnum';
import { HttpStatusEnum } from '../../../../../../shared/error/httpStatusEnum';
import { ManagerGateway } from '../../../gateway/ManagerGateway';
import { UpdateManagerByIdCommand } from "./updateManagerByIdCommand";
import { UpdateManagerByIdResponse } from "./updateManagerByIdResponse";
import { validateUpdateManagerById } from "../../validations/validateUpdateManagerById";

export class UpdateManagerByIdInterceptor {
  private error = new AppError({
    message: "error at UpdateManagerById please Report to the team",
    status: HttpStatusEnum.S500,
    type: ExeptionEnum.INTERNAL_SERVER_ERROR,
  });
  constructor(private repository: ManagerGateway) {}

  async execute(command: UpdateManagerByIdCommand): Promise<UpdateManagerByIdResponse> {
    try {

   const  zodResult   =validateUpdateManagerById.safeParse(command)
      if(zodResult.error){
               this.error.data.data = zodResult.error.format()
               this.error.data.message = "invalide input at updateManagerById"
               this.error.data.status=HttpStatusEnum.S400
               this.error.data.type=ExeptionEnum.VALIDATION_ERROR
               throw this.error
        }


      const res = await this.repository.updateManagerById(zodResult.data);

      return res;
    } catch (error) {
      throw this.error.getError(error)
    }
  }
}
