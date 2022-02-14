import { Permission } from "./permission.model";

export class CarrotruleUser {
  username?: string;
  email?: string;
  roles?: string[];
  viewPermission?: Permission[];
  otherPermission?: OtherPermission;
  user?: User;
  profileImg?: string;
  customerId?: string;
  tokenType?: string;
  accessToken?: string;
  Id?: number;
  CustomerId?: string;
  UserId?: string;
}

export class OtherPermission {
  div_edit?: boolean;
  div_customer?: boolean;
}
export class User {
  Username?: string;
  TeamSpaceRoleAllocation?: any;
  ViewPermission: any;
  OtherPermission: any;
  TeamSpaceRoleAllocations?: any;
  LastLogin?: Date;
  FailedAttempt?: number;
  AccountNonLocked?: string;
  LockTime?: string;
  AccountId?: string;
  EncPwd?: string;
  Password?: string;
  Id?: number;
  CustomerId?: string;
  ManagerId?: string;
  AtDate?: string;
  EmailId?: string;
  MobileNumber?: string;
  ConfrimPassword?: string;
  UserStatus?: string;
  LastConnectionDate?: Date;
  UserType?: string;
  UserId?: string;
  LastName?: string;
  Company?: string;
  Name?: string;
}
export class Roles {
  id?: number;
  name?: string;
}
export class LoginUser {
  username?: string;
  password?: string;
}
