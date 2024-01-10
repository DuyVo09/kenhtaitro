export interface ISignInResponse {
    accessToken: string;
    refreshToken: string;
    tokenType: string;
}

export interface ISignUpResponse {
    company: string;
    email: string;
    full_name: string;
    role_id: number;
    phone: string;
};

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