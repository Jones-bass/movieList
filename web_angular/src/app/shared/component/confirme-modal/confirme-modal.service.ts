import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ConfirmeModalService {
  constructor() {}
  confirmDeletion(title: string, text: string): Promise<any> {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Não, cancelar',
      confirmButtonText: 'Sim, deletar!',
      reverseButtons: true,
      customClass: {
        icon: 'custom-swal-icon',  // Classe para estilizar o ícone
        cancelButton: 'swal-cancel-button',
        confirmButton: 'swal-confirm-button'
      }
    });
  }

  showSuccessMessage(title: string, text: string): void {
    Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      confirmButtonText: 'Continuar',
      customClass: {
        confirmButton: 'swal-success-button-confirm'
      }
    });
  }

  showErrorMessage(title: string, text: string): void {
    Swal.fire({
      title: title,
      text: text,
      icon: 'error',
      confirmButtonText: 'Continuar',
      customClass: {
        icon: 'custom-swal-icon',  // Classe para estilizar o ícone
        confirmButton: 'swal-error-button-confirm'
      }
    });
  }
}
