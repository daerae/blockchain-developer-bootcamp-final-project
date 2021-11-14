const DiAsMaTest = artifacts.require("DiAsMaTest");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("DiAsMaTest", function (accounts) {
  const [contractOwner, alice] = accounts;

  beforeEach(async () => {
    instance = await DiAsMaTest.new();
  });

  it("should assert true", async function () {
    // await DiAsMaTest.deployed();
    // return assert.isTrue(true);
  });
  it("test saving", async function () {
    await instance.saveLink("asdf", { from: contractOwner });
    const link = await instance.enroll({ from: contractOwner });
    return assert.equal("asdf", link, "should be the same");
  });
});
