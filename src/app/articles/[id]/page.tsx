import AddCommentForm from "@/components/Comments/AddCommentForm";
import CommentItem from "@/components/Comments/CommentItem";
import { Article } from "@/utils/types";

interface SingleArticleProps {
  //   params: { id: string };
  params: Promise<{ id: string }>;
}
const SingleArticlePage = async ({ params }: SingleArticleProps) => {
  const { id } = await params; // هنا بنفك الـ Promise
  console.log("Article ID:", id);
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch article");
  }
  const article: Article = await response.json();
  console.log("This is response", response);
  console.log("This is article", article.title);

  return (
    <section className="fix-height container m-auto w-full px-5 pt-8 md:w-3/4">
      <div className="bg-white p-7 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-700 mb-2">
          {article.title}
        </h1>
        <div className="text-gray-400">1/1/2026</div>
        <p className="text-gray-800 text-xl mt-5">{article.body}</p>
      </div>
      <AddCommentForm />
      <h4 className="text-xl text-green-800 ps-1 font-semibold mb-2 mt-7">
        Comments
      </h4>
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </section>
  );
};

export default SingleArticlePage;
