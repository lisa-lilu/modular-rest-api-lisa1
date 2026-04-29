import prisma from "../prisma";

export const createUser = async (data: { name: string; email: string }) => {
  return prisma.user.create({
    data,
  });
};

export const getUsers = async () => {
  return prisma.user.findMany({
    include: {
      posts: true,
    },
  });
};

export const getUserPosts = async (userId: number) => {
  return prisma.post.findMany({
    where: { userId },
  });
};