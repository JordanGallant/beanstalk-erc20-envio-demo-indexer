/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Bean,
  Bean_Approval,
  Bean_EIP712DomainChanged,
  Bean_RoleAdminChanged,
  Bean_RoleGranted,
  Bean_RoleRevoked,
  Bean_Transfer,
} from "generated";

Bean.Approval.handler(async ({ event, context }) => {
  const entity: Bean_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.Bean_Approval.set(entity);
});

Bean.EIP712DomainChanged.handler(async ({ event, context }) => {
  const entity: Bean_EIP712DomainChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.Bean_EIP712DomainChanged.set(entity);
});

Bean.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: Bean_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };

  context.Bean_RoleAdminChanged.set(entity);
});

Bean.RoleGranted.handler(async ({ event, context }) => {
  const entity: Bean_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.Bean_RoleGranted.set(entity);
});

Bean.RoleRevoked.handler(async ({ event, context }) => {
  const entity: Bean_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.Bean_RoleRevoked.set(entity);
});

Bean.Transfer.handler(async ({ event, context }) => {
  const entity: Bean_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.Bean_Transfer.set(entity);
});
