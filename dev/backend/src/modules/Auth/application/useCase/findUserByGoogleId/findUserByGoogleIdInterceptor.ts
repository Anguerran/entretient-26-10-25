import { AppError } from '../../../../../../shared/error/AppError';
import { ExeptionEnum } from './../../../../../../shared/error/ExeptionEnum';
import { HttpStatusEnum } from '../../../../../../shared/error/httpStatusEnum';
import { AuthGateway } from '../../../gateway/AuthGateway';
import { FindUserByGoogleIdCommand } from "./findUserByGoogleIdCommand";
import { FindUserByGoogleIdResponse } from "./findUserByGoogleIdResponse";
import { validateFindUserByGoogleId } from "../../validations/validateFindUserByGoogleId";

export class FindUserByGoogleIdInterceptor {
  private error = new AppError({
    message: "error at FindUserByGoogleId please Report to the team",
    status: HttpStatusEnum.S500,
    type: ExeptionEnum.INTERNAL_SERVER_ERROR,
  });
  constructor(private repository: AuthGateway) {}

  async execute(command: FindUserByGoogleIdCommand): Promise<FindUserByGoogleIdResponse> {
    try {

   const  zodResult   =validateFindUserByGoogleId.safeParse(command)
      if(zodResult.error){
               this.error.data.data = zodResult.error.format()
               this.error.data.message = "invalide input at findUserByGoogleId"
               this.error.data.status=HttpStatusEnum.S400
               this.error.data.type=ExeptionEnum.VALIDATION_ERROR
               throw this.error
        }


      const res = await this.repository.findUserByGoogleId(zodResult.data);

      return res;
    } catch (error) {
      throw this.error.getError(error)
    }
  }
}
