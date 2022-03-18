import { User } from "../../domain";
import { UserDto, UserLookupDto } from "../dtos";

export function mapUserToLookupDto(user: User): UserLookupDto {
  return {
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
  };
}

export function mapUserToDto(user: User): UserDto {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
  };
}
