import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly logger;
    constructor();
    validate(payload: any): Promise<{
        id: any;
        mail: any;
    }>;
}
export {};
