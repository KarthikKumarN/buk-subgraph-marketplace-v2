import {
  BookRoom as BookRoomEvent,
  BookingRefund as BookingRefundEvent,
  CancelRoom as CancelRoomEvent,
  CheckinRooms as CheckinRoomsEvent,
  CheckoutRooms as CheckoutRoomsEvent,
  EmergencyCancellation as EmergencyCancellationEvent,
  MintedBookingNFT as MintedBookingNFTEvent,
  Paused as PausedEvent,
  SetAdminWallet as SetAdminWalletEvent,
  SetBukNFTs as SetBukNFTsEvent,
  SetBukPOSNFTs as SetBukPOSNFTsEvent,
  SetBukTreasury as SetBukTreasuryEvent,
  SetBukWallet as SetBukWalletEvent,
  SetCommission as SetCommissionEvent,
  SetRoyaltiesContract as SetRoyaltiesContractEvent,
  SetSignerVerifier as SetSignerVerifierEvent,
  SetStableToken as SetStableTokenEvent,
  ToggleTradeability as ToggleTradeabilityEvent,
  Unpaused as UnpausedEvent,
} from "../generated/BukProtocol/BukProtocol"
import {
  BookRoom,
  BookingRefund,
  CancelRoom,
  CheckinRooms,
  CheckoutRooms,
  EmergencyCancellation,
  MintedBookingNFT,
  Paused,
  SetAdminWallet,
  SetBukNFTs,
  SetBukPOSNFTs,
  SetBukTreasury,
  SetBukWallet,
  SetCommission,
  SetRoyaltiesContract,
  SetSignerVerifier,
  SetStableToken,
  ToggleTradeability,
  Unpaused,
} from "../generated/schema"

export function handleBookRoom(event: BookRoomEvent): void {
  let entity = new BookRoom(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.booking = event.params.booking
  entity.propertyId = event.params.propertyId
  entity.checkin = event.params.checkin
  entity.checkout = event.params.checkout
  entity.adult = event.params.adult
  entity.child = event.params.child

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBookingRefund(event: BookingRefundEvent): void {
  let entity = new BookingRefund(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.total = event.params.total
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCancelRoom(event: CancelRoomEvent): void {
  let entity = new CancelRoom(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.bookingIds = event.params.bookingIds
  entity.total = event.params.total
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCheckinRooms(event: CheckinRoomsEvent): void {
  let entity = new CheckinRooms(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.bookings = event.params.bookings
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCheckoutRooms(event: CheckoutRoomsEvent): void {
  let entity = new CheckoutRooms(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.bookings = event.params.bookings
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEmergencyCancellation(
  event: EmergencyCancellationEvent,
): void {
  let entity = new EmergencyCancellation(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.bookingId = event.params.bookingId
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintedBookingNFT(event: MintedBookingNFTEvent): void {
  let entity = new MintedBookingNFT(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.bookings = event.params.bookings
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetAdminWallet(event: SetAdminWalletEvent): void {
  let entity = new SetAdminWallet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newAdminWallet = event.params.newAdminWallet

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetBukNFTs(event: SetBukNFTsEvent): void {
  let entity = new SetBukNFTs(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newNFTContract = event.params.newNFTContract

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetBukPOSNFTs(event: SetBukPOSNFTsEvent): void {
  let entity = new SetBukPOSNFTs(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newNFTPOSContract = event.params.newNFTPOSContract

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetBukTreasury(event: SetBukTreasuryEvent): void {
  let entity = new SetBukTreasury(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newTreasuryContract = event.params.newTreasuryContract

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetBukWallet(event: SetBukWalletEvent): void {
  let entity = new SetBukWallet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newBukWalletContract = event.params.newBukWalletContract

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetCommission(event: SetCommissionEvent): void {
  let entity = new SetCommission(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newCommission = event.params.newCommission

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetRoyaltiesContract(
  event: SetRoyaltiesContractEvent,
): void {
  let entity = new SetRoyaltiesContract(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newRoyaltiesContract = event.params.newRoyaltiesContract

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetSignerVerifier(event: SetSignerVerifierEvent): void {
  let entity = new SetSignerVerifier(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newSignerVerifier = event.params.newSignerVerifier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetStableToken(event: SetStableTokenEvent): void {
  let entity = new SetStableToken(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newStableToken = event.params.newStableToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleToggleTradeability(event: ToggleTradeabilityEvent): void {
  let entity = new ToggleTradeability(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.tokenId = event.params.tokenId
  entity.tradeable = event.params.tradeable

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
