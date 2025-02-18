import assert from "assert";
import { 
  TestHelpers,
  Bean_Approval
} from "generated";
const { MockDb, Bean } = TestHelpers;

describe("Bean contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Bean contract Approval event
  const event = Bean.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Bean_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Bean.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualBeanApproval = mockDbUpdated.entities.Bean_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedBeanApproval: Bean_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualBeanApproval, expectedBeanApproval, "Actual BeanApproval should be the same as the expectedBeanApproval");
  });
});
