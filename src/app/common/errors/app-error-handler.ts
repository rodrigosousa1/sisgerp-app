import { NotyMessages } from 'app/common/messages/noty-messages';
import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    
    handleError(error: any): void {
       NotyMessages.onError("Aconteceu um erro inesperado.");
       console.log(error);
    }

}