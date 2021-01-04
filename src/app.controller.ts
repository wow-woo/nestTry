import { Controller, Get } from "@nestjs/common";

@Controller()
export class appController{

    @Get('/')
    sayHello():string{
        return 'this is my first nest controller'
    }
}