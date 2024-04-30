export class User {
    constructor(public email: string, public id: string, private _token: string, private _tokenExpirationDate: Date) {


    }
    //getter special type access it by user.token
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            //token expired  return null even if we have a token 
            return null;
        }
        return this._token;
    }
}