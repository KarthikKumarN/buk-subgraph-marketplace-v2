import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  BukNFTSet,
  BukProtocolSet,
  DeletedListing,
  ListingCreated,
  Paused,
  Relisted,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  RoomBought,
  StableTokenSet,
  Unpaused
} from "../generated/Marketplace/Marketplace"

export function createBukNFTSetEvent(newAddress: Address): BukNFTSet {
  let bukNftSetEvent = changetype<BukNFTSet>(newMockEvent())

  bukNftSetEvent.parameters = new Array()

  bukNftSetEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return bukNftSetEvent
}

export function createBukProtocolSetEvent(newAddress: Address): BukProtocolSet {
  let bukProtocolSetEvent = changetype<BukProtocolSet>(newMockEvent())

  bukProtocolSetEvent.parameters = new Array()

  bukProtocolSetEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return bukProtocolSetEvent
}

export function createDeletedListingEvent(tokenId: BigInt): DeletedListing {
  let deletedListingEvent = changetype<DeletedListing>(newMockEvent())

  deletedListingEvent.parameters = new Array()

  deletedListingEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return deletedListingEvent
}

export function createListingCreatedEvent(
  owner: Address,
  tokenId: BigInt,
  price: BigInt
): ListingCreated {
  let listingCreatedEvent = changetype<ListingCreated>(newMockEvent())

  listingCreatedEvent.parameters = new Array()

  listingCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return listingCreatedEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createRelistedEvent(
  tokenId: BigInt,
  oldPrice: BigInt,
  newPrice: BigInt
): Relisted {
  let relistedEvent = changetype<Relisted>(newMockEvent())

  relistedEvent.parameters = new Array()

  relistedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  relistedEvent.parameters.push(
    new ethereum.EventParam(
      "oldPrice",
      ethereum.Value.fromUnsignedBigInt(oldPrice)
    )
  )
  relistedEvent.parameters.push(
    new ethereum.EventParam(
      "newPrice",
      ethereum.Value.fromUnsignedBigInt(newPrice)
    )
  )

  return relistedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createRoomBoughtEvent(
  tokenId: BigInt,
  previousOwner: Address,
  newOwner: Address,
  price: BigInt
): RoomBought {
  let roomBoughtEvent = changetype<RoomBought>(newMockEvent())

  roomBoughtEvent.parameters = new Array()

  roomBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  roomBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  roomBoughtEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )
  roomBoughtEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return roomBoughtEvent
}

export function createStableTokenSetEvent(newAddress: Address): StableTokenSet {
  let stableTokenSetEvent = changetype<StableTokenSet>(newMockEvent())

  stableTokenSetEvent.parameters = new Array()

  stableTokenSetEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return stableTokenSetEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
