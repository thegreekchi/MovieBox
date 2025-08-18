import { BiSolidMessageAdd } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import TextareaAutosize from "react-textarea-autosize";
import { useAiRecommendation } from "./useAiRecommendation1";
// import { useAiRecommendation } from "./useAiRecommendation";
import { useEffect, useRef, useState } from "react";
import { parseAiResponse } from "./AiMessageParser";
const Chat = () => {
  const [input, setInput] = useState("");
  const { getRecommendation, loading, remaining, limit } = useAiRecommendation();
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("filmBoxChat");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("filmBoxChat", JSON.stringify(messages));
  }, [messages]);

  const chatRef = useRef(null);

  useEffect(() => {
    if(messages.length>1){
      chatRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const newChat = () => {
    localStorage.removeItem("filmBoxChat");
    setMessages([]);
  };

  const submit = async (e) => {
    e.preventDefault();
    // getRecommendation(input);
    // setInput("");
    if (!input.trim()) return;

    const userEntry = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userEntry]);
    setInput("");

    const response = await getRecommendation(input.trim());
    const aiEntry = { role: "assistant", content: response };
    setMessages((prev) => [...prev, aiEntry]);
  };

  const renderMessage = (msg, index) => {
    if (msg.role === "user") {
      return (
        <div
          key={index}
          className="flex gap-2 mb-4 mt-2 bg-gradient-to-r mr-2 from-blue-700 to-blue-900 text-white rounded-md rounded-br-none p-2 self-end sm:max-w-md max-w-[260px] shadow-md shadow-black/60 items-start font-Montserrat"
        >
          <FaUserCircle className="shrink-0 mt-1" size={20}/>
          <div className="">{msg.content}</div>
        </div>
      );
    } else {
      const parsed = parseAiResponse(msg.content);
      return (
        <div key={index} className="">
          <div className="flex gap-1 p-2 items-start  rounded-md rounded-bl-none my-1  sm:max-w-4xl max-w-[350px]">
            <img
              src="/chatgpt3.png"
              title="AI Chat"
              alt=""
              className="w-auto h-[18px] sm:h-[20px] mt-1"
            />
            <div className="font-Montserrat ">
              {parsed.map((p, i) =>
                p.type === "suggestion" ? (
                  <a
                    key={i}
                    href={p.link}
                    className="block p-3 rounded-xl hover:bg-gray-200 bg-gray-100 transition duration-300 md:my-3 my-2"
                  >
                    <span className="font-semibold">
                      {p.title}{" "}
                      <span className="text-xs">(click to search)</span>
                    </span>
                    <span className="block text-sm text-gray-700">
                      {p.description}
                    </span>
                  </a>
                ) : (
                  <div
                    key={i}
                    className="inline-block px-4 rounded-xl max-w-md"
                  >
                    {p.text}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="p-6 pb-0 sm:pb-2 sm:px-10 px-0  md:mt-20 mt-[52px] sm:mt-16 h-[100vh] font-Montserrat relative flex flex-col ">
      <div className="font-bold flex justify-between pb-3 text-sm sm:text-base text-red-600 px-4">
        <div>
          {" "}
          film<span className="text-blue-600">Box AI</span>
        </div>
        <div
          className="flex items-center gap-1 cursor-pointer text-red-600 sm:hover:text-red-500 sm:px-2 duration-150 sm:hover:shadow-md"
          onClick={newChat}
        >
          <BiSolidMessageAdd className="text-xl" /> <span>New Chat</span>
        </div>
      </div>
      <div className="mb-6 pb-3 overflow-y-auto flex-1 mt-2 scrollbar-hide px-4 text-base sm:text-lg">
        <div className="flex flex-col mb-10">
          <div className="flex gap-5 p-2 mr-4 mb-2">
            <img
              src="/chatgpt3.png"
              title="AI Chat"
              alt=""
              className="w-auto h-[18px] sm:h-[20px] mt-1"
            />
            <div className="font-medium">
              <span className="font-bold">
                Welcome to filmBox AI Chat. 
              </span>
               <br />
              Tell me your mood, a story, or a scenario, and i&apos;ll find the
              perfect movie for you. <br />
              <span className="italic">
                e.g., &quot;Recommend something lighthearted for a rainy
                day.&quot;{" "}
              </span>
            </div>
          </div>
          {messages.map((msg, idx) => renderMessage(msg, idx))}
          {loading && (
            <div className="text-left text-gray-400 text-sm italic">
              Thinking...
            </div>
          )}
          {remaining !== null && limit !== null && (
      <p className="text-center text-gray-500 mt-2">
        {remaining} of {limit} requests left today
      </p>
    )}
          <div className="text-center mt-2 font-light">Daily messages left : 3</div>
          <div ref={chatRef}  className="mb-4"/>
        </div>
      </div>
      <form action="" onSubmit={submit}>
        <div className=" px-3 py-1 fixed bottom-0 left-0 right-0 sm:right-10 sm:left-10  text-white text-sm sm:text-base focus-within:rounded-t-lg focus-within:sm:rounded-t-2xl bg-gray-700 border border-gray-700 rounded-t-lg sm:rounded-t-2xl focus:outline-none focus-within:ring-1 focus-within:ring-[#D2AC47] group flex items-center transition-all overflow-hidden scrollbar-hide">
          <TextareaAutosize
            minRows={1}
            maxRows={5}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Please type a message"
            className="resize-none w-[96%] h-full placeholder-gray-300 block bg-transparent focus:outline-none pt-3 pb-2 scrollbar-hide"
          />
          <button
            type="submit"
            className="duration-300 rotate-[40deg]  mr-3 sm:mr-2 text-2xl"
          >
            <IoIosSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
