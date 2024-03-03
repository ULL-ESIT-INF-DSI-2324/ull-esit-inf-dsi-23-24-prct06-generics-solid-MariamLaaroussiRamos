import { expect } from "chai";
import { describe, it } from "mocha";
import { EmailService, ShortMessageService, Notifier, NotificationService } from "../src/ejercicio-5";

describe("Notifier tests", () => {
    it("Sends notification by email", () => {
        const emailServiceMock: NotificationService = {
            notify: (message: string) => {
                expect(message).to.equal('Hello World!');
                console.log(`Mock email service sends notification: ${message}`);
            }
        };

        const notifier = new Notifier(emailServiceMock);

        notifier.sendNotification('Hello World!');

    });

    it("Sends notification by SMS", () => {
        const smsServiceMock: NotificationService = {
            notify: (message: string) => {
                expect(message).to.equal('Hello World!');
                console.log(`Mock SMS service sends notification: ${message}`);
            }
        };

        const notifier = new Notifier(smsServiceMock);

        notifier.sendNotification('Hello World!');

    });
});
