export type ProfileInput = {
  password: string;
  email: string;
  favourite:[];
};

export const normalizeProfile = (input: any) => {
  return {
    id: (input?.id || '') as string,
    email: (input?.email || '') as string,
    favourites: (input?.favourites || []) as string[],
  };
};

export type Profile = ReturnType<typeof normalizeProfile>;
