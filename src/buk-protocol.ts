import { BookRoom as BookRoomEvent } from "../generated/BukProtocol/BukProtocol";
import { BookRoom } from "../generated/schema";

export function handleBookRoom(event: BookRoomEvent): void {
	let entity = new BookRoom(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.booking = event.params.booking;
	entity.propertyId = event.params.propertyId;
	entity.checkin = event.params.checkin;
	entity.checkout = event.params.checkout;
	entity.adult = event.params.adult;
	entity.child = event.params.child;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}
