import { Bytes } from "@graphprotocol/graph-ts";

/**
 * This function converts a bytes array to a string
 * @param {Bytes} bytes - The `bytes` parameter is of type `Bytes` and represents the bytes array to be converted to a string.
 * @returns The function `bytesToString` returns a string.
 */
export function bytesToString(bytes: Bytes): string {
	let result = "";
	for (let i = 0; i < bytes.length; i++) {
		let char = String.fromCharCode(bytes[i]);
		result += char;
	}
	return result;
}

//Get the status of the listing inactive active and sold
export function getStatus(status: i32): string {
	if (status === 0) {
		return "INACTIVE";
	} else if (status === 1) {
		return "ACTIVE";
	}
	return "UNKNOWN";
}
