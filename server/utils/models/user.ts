import mongoose, {Schema, Document} from "mongoose";

export const USER_TABLE = "User";
export interface User {
	name: string;
	email: string;
	password: string;
	mobile: string;
	role: string;
	avatar: string;
	verifyEmail: boolean;
	token: string;
	expireToken: string;
	active: boolean;
}
export interface UserDoc extends Document<User>, User {}

const schema = new Schema(
	{
		name: {type: String, required: true},
		email: {type: String, required: true, unique: true, index: true},
		password: {type: String, required: true, select: false},
		mobile: {type: String, required: true},
		avatar: {type: String, default: ""},
		role: {type: String, default: "user", enum: ["admin", "user"]},
		verifyEmail: {type: Boolean, default: false},
		token: {type: String, default: ""},
		expireToken: {type: String, default: ""},
		active: {type: Boolean, default: true},
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true,
			transform(doc, ret) {
				delete ret.__v;
				ret.id = ret._id;
			},
		},
	},
);

schema.pre("save", function cb(done) {
	if (this.isModified("password")) {
		this.set("password", Password.hash(this.get("password")));
	}
	this.role === "admin" ? this.set("verifyEmail", true) : null;
	done();
});

export const User = mongoose.model<UserDoc>(USER_TABLE, schema);
