import Noty  from 'noty';

export abstract class NotyMessages {
    
   static onSuccess(message: string) {
        return new Noty({
          type: 'success',
          layout: 'top',
          theme: 'mint',
          text: message,
          timeout: 3000,
          progressBar: true,
          closeWith: ['click']
        }).show();
    }

    static onError(message: string) {
        return new Noty({
          type: 'error',
          layout: 'top',
          theme: 'mint',
          text: message,
          timeout: 3000,
          progressBar: true,
          closeWith: ['click']
        }).show();
    }
}