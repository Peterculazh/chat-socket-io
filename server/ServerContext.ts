declare global {
    namespace Express {
        interface Response {
            answer: (data: any, message?: any, status?: number) => void;
            pager: (data: any, count: number, page: number) => void;
            print: (pagePath: string, ssrData: any) => void;
        }
    }
}

export default class ServerContext {
    protected di: any;

    constructor(options: any) {
        this.di = options;
    }
}