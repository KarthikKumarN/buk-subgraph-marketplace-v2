import {
	DeletedListing as DeletedListingEvent,
	ListingCreated as ListingCreatedEvent,
	Relisted as RelistedEvent,
	RoomBought as RoomBoughtEvent,
} from "../generated/Marketplace/Marketplace";
import {
	DeletedListing,
	ListingCreated,
	Relisted,
	RoomBought,
} from "../generated/schema";

export function handleDeletedListing(event: DeletedListingEvent): void {
	let entity = new DeletedListing(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.tokenId = event.params.tokenId;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleListingCreated(event: ListingCreatedEvent): void {
	let entity = new ListingCreated(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.owner = event.params.owner;
	entity.tokenId = event.params.tokenId;
	entity.price = event.params.price;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleRelisted(event: RelistedEvent): void {
	let entity = new Relisted(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.tokenId = event.params.tokenId;
	entity.oldPrice = event.params.oldPrice;
	entity.newPrice = event.params.newPrice;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleRoomBought(event: RoomBoughtEvent): void {
	let entity = new RoomBought(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.tokenId = event.params.tokenId;
	entity.previousOwner = event.params.previousOwner;
	entity.newOwner = event.params.newOwner;
	entity.price = event.params.price;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}
