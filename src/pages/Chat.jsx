import { BiSolidMessageAdd } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import TextareaAutosize from "react-textarea-autosize";
const Chat = () => {
  return (
    <div className="p-6 pb-0 sm:pb-2 sm:px-10 px-0  md:mt-20 mt-[52px] sm:mt-16 h-[80vh] font-Montserrat relative flex flex-col ">
      <div className="font-bold flex justify-between pb-3 text-sm sm:text-base text-red-600 px-4">
        <div>
          {" "}
          film<span className="text-blue-600">Box AI</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer text-red-600 sm:hover:text-red-500 sm:px-2 duration-150 sm:hover:shadow-md">
          <BiSolidMessageAdd className="text-xl" /> <span>New Chat</span>
        </div>
      </div>
      <div className="mb-6 overflow-y-scroll flex-1 mt-2 scrollbar-hide px-4 text-sm sm:text-base">
        <div className="flex flex-col mb-10">
          <div className="flex gap-2 p-2">
            <img
              src="/chatgpt3.png"
              title="AI Chat"
              alt=""
              className="w-auto h-[20px] sm:h-[22px]"
            />
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              consequuntur doloremque odio tenetur explicabo sequi aspernatur,
              eaque officiis a? Velit reprehenderit, eaque iusto quo veniam
              voluptate temporibus assumenda sit rem non error, aut, sapiente
              recusandae consequatur asperiores debitis. Vero, nobis.
            </div>
          </div>
          <div className="flex gap-2 mb-4 mt-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-md rounded-br-none p-2 self-end sm:max-w-md max-w-[260px] shadow-md shadow-black/60">
            <FaUserCircle size={40} />
            {/* <img
              src="/Gpt11.png"
              title="AI Chat"
              alt=""
              className="w-auto h-[20px] sm:h-[22px]"
            /> */}
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              consequuntur doloremque odio tenetur explicabo sequi aspernatur,
            </div>
          </div>
          <div className="flex gap-2 p-2">
            <img
              src="/chatgpt3.png"
              title="AI Chat"
              alt=""
              className="w-auto h-[20px] sm:h-[22px]"
            />
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              consequuntur doloremque odio tenetur explicabo sequi aspernatur,
              eaque officiis a? Velit reprehenderit, eaque iusto quo veniam
              voluptate temporibus assumenda sit rem non error, aut, sapiente
              recusandae consequatur asperiores debitis. Vero, nobis.
            </div>
          </div>
          <div className="flex gap-2 mb-4 mt-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-md rounded-br-none p-2 self-end sm:max-w-md max-w-[260px] shadow-md shadow-black/60">
            <FaUserCircle size={40} />
            {/* <img
              src="/Gpt11.png"
              title="AI Chat"
              alt=""
              className="w-auto h-[20px] sm:h-[22px]"
            /> */}
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              consequuntur doloremque odio tenetur explicabo sequi aspernatur,
            </div>
          </div>
          <div className="flex gap-2 p-2">
            <img
              src="/chatgpt3.png"
              title="AI Chat"
              alt=""
              className="w-auto h-[20px] sm:h-[22px]"
            />
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              consequuntur doloremque odio tenetur explicabo sequi aspernatur,
              eaque officiis a? Velit reprehenderit, eaque iusto quo veniam
              voluptate temporibus assumenda sit rem non error, aut, sapiente
              recusandae consequatur asperiores debitis. Vero, nobis.
            </div>
          </div>
          <div className="flex gap-2 mb-4 mt-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-md rounded-br-none p-2 self-end sm:max-w-md max-w-[260px] shadow-md shadow-black/60">
            <FaUserCircle size={40} />
            {/* <img
              src="/Gpt11.png"
              title="AI Chat"
              alt=""
              className="w-auto h-[20px] sm:h-[22px]"
            /> */}
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              consequuntur doloremque odio tenetur explicabo sequi aspernatur,
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-[100%] sm:w-[80%] mx-auto mb-0"> */}
      <TextareaAutosize
        minRows={1}
        maxRows={5}
        placeholder="please type a message"
        className="resize-none w-full text-white placeholder-gray-400 p-3 text-sm sm:text-base focus:rounded-t-lg bg-gray-700 border border-[#5f5e5c] rounded-t-lg focus:outline-none focus:ring-1 focus:ring-[#D2AC47] "
      />
      {/* </div> */}
    </div>
  );
};

export default Chat;
