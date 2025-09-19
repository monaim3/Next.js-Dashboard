

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
  company?: { name: string; catchPhrase?: string; bs?: string };
  address?: { street?: string; city?: string; zipcode?: string };
};
