import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    private readonly logger;
    constructor(authService: AuthService);
    getHello(): string;
    getProfile(req: any): Promise<{
        userInfo: import("../users/entities/user.entity").User;
    }>;
    signIn(req: any): Promise<{
        access_token: string;
        userInfo: import("../users/entities/user.entity").User;
    }>;
    signUp(signUpForm: any): Promise<{
        access_token: string;
    }>;
}
