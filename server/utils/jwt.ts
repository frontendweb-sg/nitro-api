import JWT, {JwtPayload, SignOptions} from "jsonwebtoken";

interface Option extends SignOptions {}
const DEFUALT_VALUE: Option = {
	expiresIn: "1H",
};

export class Jwt {
	static getToken(payload: JwtPayload, options: Option = DEFUALT_VALUE) {
		return JWT.sign(payload, process.env.SECRET_KEY, options);
	}
	static verify(token: string) {
		return JWT.verify(token, process.env.SECRET_KEY, (error, decode) => {
			if (error) {
				throw createError({
					status: 401,
					message: "Invalid token",
				});
			}
			return decode;
		});
	}
}
