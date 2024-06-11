export interface UserMapper {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: "YES" | "NO";
}
