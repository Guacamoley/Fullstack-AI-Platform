import { MessageSquare } from "lucide-react";

import { Heading } from "@/components/heading";

const ConversationPage = () => {
  return (
    <div>
      <Heading
        title="Conversation"
        description="The pinnacle of our sophisticated conversational model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  );
};

export default ConversationPage;
