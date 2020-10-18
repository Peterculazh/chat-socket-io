import { GET, route } from "awilix-express";
import { Request, Response } from 'express';

@route('')
export default class RenderController {

    @GET()
    @route('/')
    async indexPage(req: Request, res: Response) {


        return res.print('/', { test: "test" })
    }
}