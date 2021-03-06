import {INotification} from "../../models/interfaces/notification.interface";

export class Notification implements INotification {

    private name: string;
    private body: any;
    private target: any;

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setBody(body: any): void {
        this.body = body;
    }

    public getBody(): string {
        return this.body;
    }

    public setTarget(target: any): void {
        this.target = target;
    }

    public getTarget(): string {
        return this.target;
    }
    
}