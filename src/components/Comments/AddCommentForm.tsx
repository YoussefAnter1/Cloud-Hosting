"use client";
import { useState } from "react";
import { toast } from "react-toastify";
const AddCommentForm = () => {
  const [text, setText] = useState("");
  const formSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") return toast.error("Please write something");
  };
  return (
    // <form onSubmit={(e: SubmitEvent<HTMLFormElement>)=> {
    <form onSubmit={formSubmitHandler} className="my-5">
      <input
        className="rounded-lg text-xl p-2 w-full bg-white focus:shadow-md"
        type="text"
        placeholder="Add a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="bg-green-700 text-white mt-2 p-1 text-xl rounded-lg hover:bg-green-900 transition">Comment</button>
    </form>
  );
}; 

export default AddCommentForm;
