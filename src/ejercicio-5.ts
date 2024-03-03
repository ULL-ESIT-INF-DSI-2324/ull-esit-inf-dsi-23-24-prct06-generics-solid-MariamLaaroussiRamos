/**
 * Sí, el código propuesto no cumple el Principio de Inversión de Dependencias (DIP) de SOLID. La clase Notifier depende directamente de las implementaciones concretas EmailService y ShortMessageService, en lugar de depender de abstracciones.
 * Esto hace que Notifier esté fuertemente acoplado a estas implementaciones concretas, lo que dificulta la extensibilidad y la modificación del código en el futuro.
 * 
 * Para mejorar el diseño y cumplir con el principio DIP, podemos introducir una interfaz común para los servicios de notificación y hacer que Notifier dependa de esta interfaz en lugar de las implementaciones concretas.
 * Aquí tienes un diseño alternativo que cumple con el principio DIP:
 */

/**
 * Interface for notification services
 */
export interface NotificationService {
  /**
   * Sends a notification message.
   * @param message - The message to send.
   */
  notify(message: string): void;
}

/**
 * Class that allows notifications by email to be sent
 */
export class EmailService implements NotificationService {
  /**
   * Sends a notification message by email.
   * @param message - The message to send.
   */
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

/**
 * Class that allows notifications by SMS to be sent
 */
export class ShortMessageService implements NotificationService {
  /**
   * Sends a notification message by SMS.
   * @param message - The message to send.
   */
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

/**
 * Class that makes use of different types of services to perform notifications
 */
export class Notifier {
  /**
   * Constructor of Notifier class.
   * @param notificationService - The notification service to use.
   */
  constructor(private notificationService: NotificationService) {}

  /**
   * Sends a notification message using the provided notification service.
   * @param message - The message to send.
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

// Client code
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('Hello World!');

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('Hello World!');


/* Con este diseño, Notifier depende de la interfaz NotificationService, lo que permite que pueda utilizar cualquier implementación que cumpla con esta interfaz sin necesidad de modificar el código de Notifier.
 Esto sigue el Principio de Inversión de Dependencias (DIP) de SOLID y hace que el código sea más flexible y fácil de mantener.
 */
