import { CREATE_MESSAGE } from "./types";

// CREATE Message
export const createMessage = (message) => {
	return {
		type: CREATE_MESSAGE,
		payload: message,
	};
};
