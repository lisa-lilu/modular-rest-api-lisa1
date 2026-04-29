import { prisma } from "../prisma";

export const createPost = async (data: {
  title: string;
  content: string;
  userId: number;
}) => {
  return prisma.post.create({
    data,
  });
};

export const getPosts = async () => {
  return prisma.post.findMany({
    include: {
      user: true,
      comments: true,
    },
  });
};

export const getPostComments = async (postId: number) => {
  return prisma.comment.findMany({
    where: { postId },
  });
};