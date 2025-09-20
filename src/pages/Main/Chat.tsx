import { useState } from "react";
import ChatGuideModal from "../../components/Chat/ChatGuideModal";
import ChatLayout from "../../components/Chat/ChatLayout";
import ChatNav from "../../components/Chat/ChatNav";
import ChatFooter from "../../components/Chat/ChatFooter";

const Chat = () => {
  const [isClose, setIsClose] = useState(true);

  return (
    <div>
      <ChatNav />
      {isClose ? (
        <ChatGuideModal onClose={() => setIsClose(false)} />
      ) : (
        <ChatLayout />
      )}
      <ChatFooter />
    </div>
  );
};

export default Chat;
