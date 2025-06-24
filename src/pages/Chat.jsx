import { BiSolidMessageAdd } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
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
              className="w-auto h-[14px] sm:h-[20px]"
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
              className="w-auto h-[14px] sm:h-[20px]"
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
              className="w-auto h-[14px] sm:h-[20px]"
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
              className="w-auto h-[14px] sm:h-[20px]"
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
              className="w-auto h-[14px] sm:h-[20px]"
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
              className="w-auto h-[14px] sm:h-[20px]"
            /> */}
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              consequuntur doloremque odio tenetur explicabo sequi aspernatur,
            </div>
          </div>
        </div>
      </div>
      <div className=" px-3 text-white text-sm sm:text-base focus-within:rounded-t-lg bg-gray-700 border border-gray-700 rounded-t-lg focus:outline-none focus-within:ring-1 focus-within:ring-[#D2AC47] group flex items-center transition-all">
        <TextareaAutosize
          minRows={1}
          maxRows={5}
          placeholder="Please type a message"
          className="resize-none w-[96%] h-full placeholder-gray-300 block bg-transparent focus:outline-none py-3"
        />
        <button className="duration-300 group-focus-within:rotate-[40deg] hover:rotate-[40deg] mr-3 sm:mr-2 text-xl">
          <IoIosSend />
        </button>
      </div>
    </div>
  );
};

export default Chat;
