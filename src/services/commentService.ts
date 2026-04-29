import prisma from "../prisma";

export const createComment = async (data: {
  content: string;
  postId: number;
}) => {
  return prisma.comment.create({
    data,
  });
};

export const getComments = async () => {
  return prisma.comment.findMany({
    include: {
      post: true,
    },
  });
};