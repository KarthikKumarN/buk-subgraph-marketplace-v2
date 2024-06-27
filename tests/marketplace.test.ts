import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { BukNFTSet } from "../generated/schema"
import { BukNFTSet as BukNFTSetEvent } from "../generated/Marketplace/Marketplace"
import { handleBukNFTSet } from "../src/marketplace"
import { createBukNFTSetEvent } from "./marketplace-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let newAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newBukNFTSetEvent = createBukNFTSetEvent(newAddress)
    handleBukNFTSet(newBukNFTSetEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BukNFTSet created and stored", () => {
    assert.entityCount("BukNFTSet", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BukNFTSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
