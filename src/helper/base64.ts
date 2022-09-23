
export class BASE64 {
    static encode(str: string): string {
        return Buffer.from(str).toString('base64')
    }
    static decode(str: string): string {
        return Buffer.from(str, 'base64').toString('ascii')
    }
}