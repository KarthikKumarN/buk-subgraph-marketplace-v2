import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
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
  Unpaused
} from "../generated/BukProtocol/BukProtocol"

export function createBookRoomEvent(
  booking: BigInt,
  propertyId: Bytes,
  checkin: BigInt,
  checkout: BigInt,
  adult: BigInt,
  child: BigInt
): BookRoom {
  let bookRoomEvent = changetype<BookRoom>(newMockEvent())

  bookRoomEvent.parameters = new Array()

  bookRoomEvent.parameters.push(
    new ethereum.EventParam(
      "booking",
      ethereum.Value.fromUnsignedBigInt(booking)
    )
  )
  bookRoomEvent.parameters.push(
    new ethereum.EventParam(
      "propertyId",
      ethereum.Value.fromFixedBytes(propertyId)
    )
  )
  bookRoomEvent.parameters.push(
    new ethereum.EventParam(
      "checkin",
      ethereum.Value.fromUnsignedBigInt(checkin)
    )
  )
  bookRoomEvent.parameters.push(
    new ethereum.EventParam(
      "checkout",
      ethereum.Value.fromUnsignedBigInt(checkout)
    )
  )
  bookRoomEvent.parameters.push(
    new ethereum.EventParam("adult", ethereum.Value.fromUnsignedBigInt(adult))
  )
  bookRoomEvent.parameters.push(
    new ethereum.EventParam("child", ethereum.Value.fromUnsignedBigInt(child))
  )

  return bookRoomEvent
}

export function createBookingRefundEvent(
  total: BigInt,
  owner: Address
): BookingRefund {
  let bookingRefundEvent = changetype<BookingRefund>(newMockEvent())

  bookingRefundEvent.parameters = new Array()

  bookingRefundEvent.parameters.push(
    new ethereum.EventParam("total", ethereum.Value.fromUnsignedBigInt(total))
  )
  bookingRefundEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return bookingRefundEvent
}

export function createCancelRoomEvent(
  bookingIds: Array<BigInt>,
  total: BigInt,
  status: boolean
): CancelRoom {
  let cancelRoomEvent = changetype<CancelRoom>(newMockEvent())

  cancelRoomEvent.parameters = new Array()

  cancelRoomEvent.parameters.push(
    new ethereum.EventParam(
      "bookingIds",
      ethereum.Value.fromUnsignedBigIntArray(bookingIds)
    )
  )
  cancelRoomEvent.parameters.push(
    new ethereum.EventParam("total", ethereum.Value.fromUnsignedBigInt(total))
  )
  cancelRoomEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return cancelRoomEvent
}

export function createCheckinRoomsEvent(
  bookings: Array<BigInt>,
  status: boolean
): CheckinRooms {
  let checkinRoomsEvent = changetype<CheckinRooms>(newMockEvent())

  checkinRoomsEvent.parameters = new Array()

  checkinRoomsEvent.parameters.push(
    new ethereum.EventParam(
      "bookings",
      ethereum.Value.fromUnsignedBigIntArray(bookings)
    )
  )
  checkinRoomsEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return checkinRoomsEvent
}

export function createCheckoutRoomsEvent(
  bookings: Array<BigInt>,
  status: boolean
): CheckoutRooms {
  let checkoutRoomsEvent = changetype<CheckoutRooms>(newMockEvent())

  checkoutRoomsEvent.parameters = new Array()

  checkoutRoomsEvent.parameters.push(
    new ethereum.EventParam(
      "bookings",
      ethereum.Value.fromUnsignedBigIntArray(bookings)
    )
  )
  checkoutRoomsEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return checkoutRoomsEvent
}

export function createEmergencyCancellationEvent(
  bookingId: BigInt,
  status: boolean
): EmergencyCancellation {
  let emergencyCancellationEvent = changetype<EmergencyCancellation>(
    newMockEvent()
  )

  emergencyCancellationEvent.parameters = new Array()

  emergencyCancellationEvent.parameters.push(
    new ethereum.EventParam(
      "bookingId",
      ethereum.Value.fromUnsignedBigInt(bookingId)
    )
  )
  emergencyCancellationEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return emergencyCancellationEvent
}

export function createMintedBookingNFTEvent(
  bookings: Array<BigInt>,
  status: boolean
): MintedBookingNFT {
  let mintedBookingNftEvent = changetype<MintedBookingNFT>(newMockEvent())

  mintedBookingNftEvent.parameters = new Array()

  mintedBookingNftEvent.parameters.push(
    new ethereum.EventParam(
      "bookings",
      ethereum.Value.fromUnsignedBigIntArray(bookings)
    )
  )
  mintedBookingNftEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return mintedBookingNftEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createSetAdminWalletEvent(
  newAdminWallet: Address
): SetAdminWallet {
  let setAdminWalletEvent = changetype<SetAdminWallet>(newMockEvent())

  setAdminWalletEvent.parameters = new Array()

  setAdminWalletEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminWallet",
      ethereum.Value.fromAddress(newAdminWallet)
    )
  )

  return setAdminWalletEvent
}

export function createSetBukNFTsEvent(newNFTContract: Address): SetBukNFTs {
  let setBukNfTsEvent = changetype<SetBukNFTs>(newMockEvent())

  setBukNfTsEvent.parameters = new Array()

  setBukNfTsEvent.parameters.push(
    new ethereum.EventParam(
      "newNFTContract",
      ethereum.Value.fromAddress(newNFTContract)
    )
  )

  return setBukNfTsEvent
}

export function createSetBukPOSNFTsEvent(
  newNFTPOSContract: Address
): SetBukPOSNFTs {
  let setBukPosnfTsEvent = changetype<SetBukPOSNFTs>(newMockEvent())

  setBukPosnfTsEvent.parameters = new Array()

  setBukPosnfTsEvent.parameters.push(
    new ethereum.EventParam(
      "newNFTPOSContract",
      ethereum.Value.fromAddress(newNFTPOSContract)
    )
  )

  return setBukPosnfTsEvent
}

export function createSetBukTreasuryEvent(
  newTreasuryContract: Address
): SetBukTreasury {
  let setBukTreasuryEvent = changetype<SetBukTreasury>(newMockEvent())

  setBukTreasuryEvent.parameters = new Array()

  setBukTreasuryEvent.parameters.push(
    new ethereum.EventParam(
      "newTreasuryContract",
      ethereum.Value.fromAddress(newTreasuryContract)
    )
  )

  return setBukTreasuryEvent
}

export function createSetBukWalletEvent(
  newBukWalletContract: Address
): SetBukWallet {
  let setBukWalletEvent = changetype<SetBukWallet>(newMockEvent())

  setBukWalletEvent.parameters = new Array()

  setBukWalletEvent.parameters.push(
    new ethereum.EventParam(
      "newBukWalletContract",
      ethereum.Value.fromAddress(newBukWalletContract)
    )
  )

  return setBukWalletEvent
}

export function createSetCommissionEvent(newCommission: BigInt): SetCommission {
  let setCommissionEvent = changetype<SetCommission>(newMockEvent())

  setCommissionEvent.parameters = new Array()

  setCommissionEvent.parameters.push(
    new ethereum.EventParam(
      "newCommission",
      ethereum.Value.fromUnsignedBigInt(newCommission)
    )
  )

  return setCommissionEvent
}

export function createSetRoyaltiesContractEvent(
  newRoyaltiesContract: Address
): SetRoyaltiesContract {
  let setRoyaltiesContractEvent = changetype<SetRoyaltiesContract>(
    newMockEvent()
  )

  setRoyaltiesContractEvent.parameters = new Array()

  setRoyaltiesContractEvent.parameters.push(
    new ethereum.EventParam(
      "newRoyaltiesContract",
      ethereum.Value.fromAddress(newRoyaltiesContract)
    )
  )

  return setRoyaltiesContractEvent
}

export function createSetSignerVerifierEvent(
  newSignerVerifier: Address
): SetSignerVerifier {
  let setSignerVerifierEvent = changetype<SetSignerVerifier>(newMockEvent())

  setSignerVerifierEvent.parameters = new Array()

  setSignerVerifierEvent.parameters.push(
    new ethereum.EventParam(
      "newSignerVerifier",
      ethereum.Value.fromAddress(newSignerVerifier)
    )
  )

  return setSignerVerifierEvent
}

export function createSetStableTokenEvent(
  newStableToken: Address
): SetStableToken {
  let setStableTokenEvent = changetype<SetStableToken>(newMockEvent())

  setStableTokenEvent.parameters = new Array()

  setStableTokenEvent.parameters.push(
    new ethereum.EventParam(
      "newStableToken",
      ethereum.Value.fromAddress(newStableToken)
    )
  )

  return setStableTokenEvent
}

export function createToggleTradeabilityEvent(
  tokenId: BigInt,
  tradeable: boolean
): ToggleTradeability {
  let toggleTradeabilityEvent = changetype<ToggleTradeability>(newMockEvent())

  toggleTradeabilityEvent.parameters = new Array()

  toggleTradeabilityEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  toggleTradeabilityEvent.parameters.push(
    new ethereum.EventParam("tradeable", ethereum.Value.fromBoolean(tradeable))
  )

  return toggleTradeabilityEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
