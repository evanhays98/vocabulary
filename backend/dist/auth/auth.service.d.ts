import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { CreateUserDto } from '../users/dto/create-user.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    private readonly logger;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateLogin(mail: string, password: string): Promise<any>;
    login(user: User): Promise<{
        access_token: string;
        userInfo: User;
    }>;
    signup(signUpForm: CreateUserDto): Promise<{
        access_token: string;
    }>;
    getAuthInfoUser(currentUser: any): Promise<{
        userInfo: User;
    }>;
}
