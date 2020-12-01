const transformUser = (user) => {
  return {
    ...user._doc,
    _id: user.id,
    createdAt: user._doc.createdAt.toString(),
    updatedAt: user._doc.updatedAt.toString(),
  };
};
