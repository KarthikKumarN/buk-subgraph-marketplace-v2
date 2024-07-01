import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { BukProtocol } from "../generated/BukProtocol/BukProtocol";
import { BukNFTs } from "../generated/Marketplace/BukNFTs";
import {
	DeletedListing as DeletedListingEvent,
	ListingCreated as ListingCreatedEvent,
	Marketplace,
	Relisted as RelistedEvent,
	RoomBought as RoomBoughtEvent,
} from "../generated/Marketplace/Marketplace";
import { Booking } from "../generated/schema";
import { bytesToString, getStatus } from "./helper";

// FIXME Before production, replace the address with the correct one
const BUK_PROTOCOL = "0x32a20C3f1386CDAC2103056E26b5e9B4b8501E5F";
const BUK_NFTs = "0x4DA96a1821D6A0b2BE6Cd33899a738B0C64A6d6D";
const BUK_MARKETPLACE = "0xe19D79B31278B65Aa7b77F3AEA260A3e21A5a618";
const DEFAULT_ADDRESS = "0x0000000000000000000000000000000000000000";

/**
 * This function handles the event when a listing is created
 * @param {ListingCreatedEvent} event - The `event` parameter is of type `ListingCreatedEvent` and represents the event emitted by the Buk Marketplace smart contract when a listing is created.
 * @returns The function `handleListingCreated` does not return anything.
 * @dev The function `handleListingCreated` creates a new Booking entity and saves it to the datastore.
 */
export function handleListingCreated(event: ListingCreatedEvent): void {
	// Create a new Booking entity using the transaction hash and log index
	let entity = new Booking(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);

	// Bind the BukProtocol contract to an instance
	let bukProtocol = BukProtocol.bind(Address.fromString(BUK_PROTOCOL));

	// Bind the BukNFTs contract to an instance
	let bukNfts = BukNFTs.bind(Address.fromString(BUK_NFTs));

	// Bind the Marketplace contract to an instance
	let marketplace = Marketplace.bind(Address.fromString(BUK_MARKETPLACE));

	// Get the tokenId from the event parameters
	const tokenId = event.params.tokenId;

	// Try to get the booking details for the given tokenId
	let booking = bukProtocol.try_getBookingDetails(tokenId);

	// Try to get the booking details for the given tokenId
	let listing = marketplace.try_getListingDetails(tokenId);

	// Check if the booking details were not reverted
	if (!booking.reverted) {
		// Convert the propertyId from bytes to string
		const propertyId = bytesToString(booking.value.propertyId);

		// Set the properties of the Booking entity
		entity.id = event.transaction.hash.concatI32(event.logIndex.toI32());
		entity.nftId = tokenId;
		entity.propertyId = propertyId;
		entity.adult = booking.value.adult;
		entity.child = booking.value.child;
		entity.checkIn = booking.value.checkin;
		entity.checkOut = booking.value.checkout;
		entity.owner = listing.value.owner;
		entity.price = listing.value.price;
		entity.index = listing.value.index;
		entity.transactionHash = event.transaction.hash;
		entity.status = getStatus(listing.value.status);

		// Try to get the IPFS URI for the tokenId
		const ipfsUri = bukNfts.try_uri(tokenId);
		if (!ipfsUri.reverted) {
			// Set the IPFS URI for the Booking entity if it was not reverted
			entity.ipfsUri = ipfsUri.value;
		}
		// Save the Booking entity to the datastore
		entity.save();
	}
}

/**
 * This function handles the event when a listing is relisted
 * @param {RelistedEvent} event - The `event` parameter is of type `RelistedEvent` and represents the event emitted by the Marketplace smart contract when a listing is relisted.
 * @returns The function `handleRelisting` does not return anything.
 * @dev The function `handleRelisting` creates a new Booking entity and saves it to the datastore.
 */
export function handleRelisted(event: RelistedEvent): void {
	// Create a new Booking entity using the transaction hash and log index
	let entity = new Booking(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);

	// Bind the BukProtocol contract to an instance
	let bukProtocol = BukProtocol.bind(Address.fromString(BUK_PROTOCOL));

	// Bind the BukNFTs contract to an instance
	let bukNfts = BukNFTs.bind(Address.fromString(BUK_NFTs));

	// Bind the Marketplace contract to an instance
	let bukTrips = Marketplace.bind(Address.fromString(BUK_MARKETPLACE));

	// Get the tokenId from the event parameters
	const tokenId = event.params.tokenId;

	// Try to get the booking details for the given tokenId
	let booking = bukProtocol.try_getBookingDetails(tokenId);

	// Try to get the booking details for the given tokenId
	let listing = bukTrips.try_getListingDetails(tokenId);

	// Check if the booking details were not reverted
	if (!booking.reverted) {
		// Convert the propertyId from bytes to string
		const propertyId = bytesToString(booking.value.propertyId);

		// Set the properties of the Booking entity
		entity.id = event.transaction.hash.concatI32(event.logIndex.toI32());
		entity.nftId = tokenId;
		entity.propertyId = propertyId;
		entity.adult = booking.value.adult;
		entity.child = booking.value.child;
		entity.checkIn = booking.value.checkin;
		entity.checkOut = booking.value.checkout;
		entity.owner = listing.value.owner;
		entity.price = listing.value.price;
		entity.index = listing.value.index;
		entity.transactionHash = event.transaction.hash;
		entity.status = getStatus(listing.value.status);

		// Try to get the IPFS URI for the tokenId
		const ipfsUri = bukNfts.try_uri(tokenId);
		if (!ipfsUri.reverted) {
			// Set the IPFS URI for the Booking entity if it was not reverted
			entity.ipfsUri = ipfsUri.value;
		}

		// Save the Booking entity to the datastore
		entity.save();
	}
}

/**
 * This function handles the event when a listing is deleted
 * @param {DeletedListingEvent} event - The `event` parameter is of type `DeletedListingEvent` and represents the event emitted by the Marketplace smart contract when a listing is deleted.
 * @returns The function `handleDeletion` does not return anything.
 * @dev The function `handleDeletion` creates a new Booking entity and saves it to the datastore.
 */
export function handleDeletedListing(event: DeletedListingEvent): void {
	// Create a new Booking entity using the transaction hash and log index
	let entity = new Booking(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);

	// Bind the BukProtocol contract to an instance
	let bukProtocol = BukProtocol.bind(Address.fromString(BUK_PROTOCOL));

	// Bind the BukNFTs contract to an instance
	let bukNfts = BukNFTs.bind(Address.fromString(BUK_NFTs));

	// Bind the Marketplace contract to an instance
	let bukTrips = Marketplace.bind(Address.fromString(BUK_MARKETPLACE));

	// Get the tokenId from the event parameters
	const tokenId = event.params.tokenId;

	// Try to get the booking details for the given tokenId
	let booking = bukProtocol.try_getBookingDetails(tokenId);

	// Try to get the booking details for the given tokenId
	let listing = bukTrips.try_getListingDetails(tokenId);

	// Check if the booking details were not reverted
	if (!booking.reverted) {
		// Convert the propertyId from bytes to string
		const propertyId = bytesToString(booking.value.propertyId);

		// Set the properties of the Booking entity
		entity.id = event.transaction.hash.concatI32(event.logIndex.toI32());
		entity.nftId = tokenId;
		entity.propertyId = propertyId;
		entity.adult = booking.value.adult;
		entity.child = booking.value.child;
		entity.checkIn = booking.value.checkin;
		entity.checkOut = booking.value.checkout;
		entity.owner = Bytes.fromHexString(DEFAULT_ADDRESS);
		entity.price = BigInt.fromI32(0);
		entity.index = listing.value.index;
		entity.status = getStatus(listing.value.status);
		entity.transactionHash = event.transaction.hash;

		// Try to get the IPFS URI for the tokenId
		const ipfsUri = bukNfts.try_uri(tokenId);
		if (!ipfsUri.reverted) {
			// Set the IPFS URI for the Booking entity if it was not reverted
			entity.ipfsUri = ipfsUri.value;
		}

		// Save the Booking entity to the datastore
		entity.save();
	}
}

export function handleRoomBought(event: RoomBoughtEvent): void {
	// Create a new Booking entity using the transaction hash and log index
	let entity = new Booking(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);

	// Bind the BukProtocol contract to an instance
	let bukProtocol = BukProtocol.bind(Address.fromString(BUK_PROTOCOL));

	// Bind the BukNFTs contract to an instance
	let bukNfts = BukNFTs.bind(Address.fromString(BUK_NFTs));

	// Bind the Marketplace contract to an instance
	let bukTrips = Marketplace.bind(Address.fromString(BUK_MARKETPLACE));

	// Get the tokenId from the event parameters
	const tokenId = event.params.tokenId;

	// Try to get the booking details for the given tokenId
	let booking = bukProtocol.try_getBookingDetails(tokenId);

	// Try to get the booking details for the given tokenId
	let listing = bukTrips.try_getListingDetails(tokenId);

	// Check if the booking details were not reverted
	if (!booking.reverted) {
		// Convert the propertyId from bytes to string
		const propertyId = bytesToString(booking.value.propertyId);

		// Set the properties of the Booking entity
		entity.id = event.transaction.hash.concatI32(event.logIndex.toI32());
		entity.nftId = tokenId;
		entity.propertyId = propertyId;
		entity.adult = booking.value.adult;
		entity.child = booking.value.child;
		entity.checkIn = booking.value.checkin;
		entity.checkOut = booking.value.checkout;
		entity.owner = Bytes.fromHexString(DEFAULT_ADDRESS);
		entity.price = BigInt.fromI32(0);
		entity.index = listing.value.index;
		entity.transactionHash = event.transaction.hash;

		// Try to get the IPFS URI for the tokenId
		const ipfsUri = bukNfts.try_uri(tokenId);
		if (!ipfsUri.reverted) {
			// Set the IPFS URI for the Booking entity if it was not reverted
			entity.ipfsUri = ipfsUri.value;
		}

		// Save the Booking entity to the datastore
		entity.save();
	}
}
