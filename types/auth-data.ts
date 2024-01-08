export interface ISignInResponse {
    accessToken: string;
    refreshToken: string;
    tokenType: string;
}

export interface IUserProfile {
    full_name: string;
    email: string;
    phone: string;
    company: string;
    role_id: number;
}

export interface IAuthContext {
    isAuth: boolean;
    userProfile: IUserProfile | null;
}