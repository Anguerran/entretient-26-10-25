import { AppError } from '../../../../../../shared/error/AppError';
import { ExeptionEnum } from './../../../../../../shared/error/ExeptionEnum';
import { HttpStatusEnum } from '../../../../../../shared/error/httpStatusEnum';
import { ManagerGateway } from '../../../gateway/ManagerGateway';
import { FindAllManagerCommand } from "./findAllManagerCommand";
import { FindAllManagerResponse } from "./findAllManagerResponse";
import { validateFindAllManager } from "../../validations/validateFindAllManager";

export class FindAllManagerInterceptor {
  private error = new AppError({
    message: "error at FindAllManager please Report to the team",
    status: HttpStatusEnum.S500,
    type: ExeptionEnum.INTERNAL_SERVER_ERROR,
  });
  constructor(private repository: ManagerGateway) {}

  async execute(command: FindAllManagerCommand): Promise<FindAllManagerResponse> {
    try {

   const  zodResult   =validateFindAllManager.safeParse(command)
      if(zodResult.error){
               this.error.data.data = zodResult.error.format()
               this.error.data.message = "invalide input at findAllManager"
               this.error.data.status=HttpStatusEnum.S400
               this.error.data.type=ExeptionEnum.VALIDATION_ERROR
               throw this.error
        }


      const res = await this.repository.findAllManager(zodResult.data);

      return res;
    } catch (error) {
      throw this.error.getError(error)
    }
  }
}
