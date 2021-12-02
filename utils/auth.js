import NodeRSA from "node-rsa";

import { key } from "../config/keys.js";

const private_key = new NodeRSA(key.private_key);
const public_key = new NodeRSA(key.public_key);

export const encrypt = (data) => {
	return public_key.encrypt(data, "base64");
};

export const decrypt = (data) => {
	return private_key.decrypt(data, "utf8");
};
