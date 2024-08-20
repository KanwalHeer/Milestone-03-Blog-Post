import blogPosts from "@/app/_lib/data";

export default function CommmentReplies({
  params,
}: {
  params: { blogid: string; commentid: string };
}) {
  const postid = parseInt(params.blogid, 10);
  const commentid = parseInt(params.commentid, 10);
  const post = blogPosts.find((p) => p.id === postid);
  const comment = post?.comments.find((c) => c.id === commentid);
  if (!post || !comment)
    return (
      <div className="justify-center size-full flex pt-40 bg-[#eee8e6] min-h-screen text-4xl">
        No Comment Found
      </div>
    );
  return (
    <div className="bg-[#eee8e6] min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto">
      <h1 className="font-bold text-3xl text-gray-900 mb-6">
          Comments Thread and Replies
        </h1>
        <p className="font-sm text-xl text-gray-900 mb-6 pt-10">
          Replies to <u>{comment.content}</u> by <b>{comment.author}</b>
        </p>
        <ol>
          {comment.replies.map((reply) => (
            <li key={reply.id}>

              {reply.content} by {reply.author}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}