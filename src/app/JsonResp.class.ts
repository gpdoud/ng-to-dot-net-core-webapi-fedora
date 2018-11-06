export class JsonResp {

    Code: number;
    Message: string;
    Data: any;
    Error: any;

    constructor(
        Code: number = 0,
        Message: string = 'Ok',
        Data: any = null,
        Error: any = null
    ) {
        this.Code = Code;
        this.Message = Message;
        this.Data = Data;
        this.Error = Error;
    }
}