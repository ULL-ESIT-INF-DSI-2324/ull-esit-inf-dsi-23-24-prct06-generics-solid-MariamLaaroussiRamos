import { expect } from "chai";
import { describe, it } from "mocha";
import { EmailService, ShortMessageService, Notifier, NotificationService } from "../src/ejercicio-5";

describe("Notifier tests", () => {
    it("Sends notification by email", () => {
        // Arrange
        const emailServiceMock: NotificationService = {
            notify: (message: string) => {
                expect(message).to.equal('Hello World!');
                console.log(`Mock email service sends notification: ${message}`);
            }
        };

        const notifier = new Notifier(emailServiceMock);

        // Act
        notifier.sendNotification('Hello World!');

        // Assert
        // We're using a mock service, so no assertion is needed here
    });

    it("Sends notification by SMS", () => {
        // Arrange
        const smsServiceMock: NotificationService = {
            notify: (message: string) => {
                expect(message).to.equal('Hello World!');
                console.log(`Mock SMS service sends notification: ${message}`);
            }
        };

        const notifier = new Notifier(smsServiceMock);

        // Act
        notifier.sendNotification('Hello World!');

        // Assert
        // We're using a mock service, so no assertion is needed here
    });
});
