import {
  BukNFTSet as BukNFTSetEvent,
  BukProtocolSet as BukProtocolSetEvent,
  DeletedListing as DeletedListingEvent,
  ListingCreated as ListingCreatedEvent,
  Paused as PausedEvent,
  Relisted as RelistedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  RoomBought as RoomBoughtEvent,
  StableTokenSet as StableTokenSetEvent,
  Unpaused as UnpausedEvent
} from "../generated/Marketplace/Marketplace"
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
} from "../generated/schema"

export function handleBukNFTSet(event: BukNFTSetEvent): void {
  let entity = new BukNFTSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newAddress = event.params.newAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBukProtocolSet(event: BukProtocolSetEvent): void {
  let entity = new BukProtocolSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newAddress = event.params.newAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeletedListing(event: DeletedListingEvent): void {
  let entity = new DeletedListing(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleListingCreated(event: ListingCreatedEvent): void {
  let entity = new ListingCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRelisted(event: RelistedEvent): void {
  let entity = new Relisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.oldPrice = event.params.oldPrice
  entity.newPrice = event.params.newPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoomBought(event: RoomBoughtEvent): void {
  let entity = new RoomBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStableTokenSet(event: StableTokenSetEvent): void {
  let entity = new StableTokenSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newAddress = event.params.newAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
