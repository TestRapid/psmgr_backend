import axios from "axios";

import { decrypt, encrypt } from "../utils/auth.js";

const api = axios.create({ baseURL: `http://localhost:5001` });

export const getList = async (req, res) => {
	try {
		const data = await (await api.get("/psmgr")).data;
		data.forEach((d) => {
			d.passwords.forEach((p) => {
				p.password = decrypt(p.password);
			});
		});
		res.json(data);
	} catch (err) {
		console.log(err);
	}
};

export const addNew = async (req, res) => {
	try {
		req.body.passwords.forEach((p) => {
			p.password = encrypt(p.password);
		});
		const data = await (await api.post("/psmgr", req.body)).data;
		data.passwords.forEach((p) => {
			p.password = decrypt(p.password);
		});
		res.status(201).json(data);
	} catch (err) {
		console.log(err);
	}
};

export const editItem = async (req, res) => {
	try {
		req.body.passwords.forEach((p) => {
			p.password = encrypt(p.password);
		});
		req.body.passwords = req.body.passwords.slice(0, 20);
		const data = await (
			await api.patch(`/psmgr/${req.params.id}`, req.body)
		).data;
		data.passwords.forEach((p) => {
			p.password = decrypt(p.password);
		});
		res.json(data);
	} catch (err) {
		console.log(err);
	}
};
