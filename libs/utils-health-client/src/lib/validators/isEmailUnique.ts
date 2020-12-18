import { User } from "@neighborly/models";

const isEmailUnique = async (email: any) => {
  let isUnique = true;
  await User.findOne({ email }, (e: any, dupe: any) => {
    if (dupe) isUnique = false;
  });
  return isUnique;
};

export { isEmailUnique };
