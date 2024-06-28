import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import { BookRoom } from "../generated/schema"
import { BookRoom as BookRoomEvent } from "../generated/BukProtocol/BukProtocol"
import { handleBookRoom } from "../src/buk-protocol"
import { createBookRoomEvent } from "./buk-protocol-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let booking = BigInt.fromI32(234)
    let propertyId = Bytes.fromI32(1234567890)
    let checkin = BigInt.fromI32(234)
    let checkout = BigInt.fromI32(234)
    let adult = BigInt.fromI32(234)
    let child = BigInt.fromI32(234)
    let newBookRoomEvent = createBookRoomEvent(
      booking,
      propertyId,
      checkin,
      checkout,
      adult,
      child
    )
    handleBookRoom(newBookRoomEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BookRoom created and stored", () => {
    assert.entityCount("BookRoom", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BookRoom",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "booking",
      "234"
    )
    assert.fieldEquals(
      "BookRoom",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "propertyId",
      "1234567890"
    )
    assert.fieldEquals(
      "BookRoom",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "checkin",
      "234"
    )
    assert.fieldEquals(
      "BookRoom",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "checkout",
      "234"
    )
    assert.fieldEquals(
      "BookRoom",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "adult",
      "234"
    )
    assert.fieldEquals(
      "BookRoom",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "child",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
