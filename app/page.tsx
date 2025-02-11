'use client';

import { ChatbotConfig, Message, OpenAssistantGPTChat } from 'openassistantgpt';
import { useEffect, useState } from 'react';
import { SupportInquiry } from './components/inquiry';
import { Button } from './components/ui/button';

export default function ChatPage() {
  const [count, setMessagesCount] = useState(0);
  const [defaultMessage, setDefaultMessage] = useState('');

  const chatbot: ChatbotConfig = {
    id: '1234567',
    name: 'The Tarot Bot',

    chatTitle: '',
    welcomeMessage:
      "Greetings! Would you like a tarot card reading?",
    chatMessagePlaceHolder: 'Send The Tarot Bot a message',

    rightToLeftLanguage: false,

    bubbleColor: 'linear-gradient(to top left, #003366, #336699)',
    bubbleTextColor: '#FFFFFF',

    chatHeaderBackgroundColor: '#a3774b',
    chatHeaderTextColor: '#FFFFFF',

    chatbotReplyBackgroundColor: '#e4e4e7',
    chatbotReplyTextColor: '#000000',

    userReplyBackgroundColor: '#a3774b',
    userReplyTextColor: '#FFFFFF',

    chatbotLogoURL:
      'https://thetarot.bot/images/tarot-bot-favicon.png',
    chatInputStyle: 'default',

    chatHistoryEnabled: true,
    chatFileAttachementEnabled: false,
    fontSize: '14px',
    displayFooterText: false,
    footerLink: 'https://www.openassistantgpt.io',
    footerTextName: 'OpenAssistantGPT',
  };

  useEffect(() => {
    console.log('Messages count:', count);
  }, [count]);

  function handleMessagesChange(messages: Message[]) {
    setMessagesCount(messages.length);
  }

  return (
    <OpenAssistantGPTChat
      chatbot={chatbot}
      path="/api/chat/assistant"
      defaultMessage={defaultMessage}
      withExitX={false}
      onMessagesChange={handleMessagesChange}
      extensions={[
        count == 0 && (
          <Button
            key="1"
            className="w-full bg-white"
            variant="outline"
            onClick={() =>
              setDefaultMessage('May I have a general tarot card reading?')
            }
          >
            May I have a general tarot card reading?
          </Button>
        ),
        count == 0 && (
          <Button
            key="2"
            className="w-full bg-white"
            variant="outline"
            onClick={() => setDefaultMessage('Will you please give me a prosperity reading?')}
          >
            Will you please give me a prosperity reading?
          </Button>
        ),
        count == 0 && (
          <Button
            key="3"
            className="w-full bg-white"
            variant="outline"
            onClick={() =>
              setDefaultMessage('I would like a love reading.')
            }
          >
            I would like a love reading.
          </Button>
        ),
        count == 0 && (
          <Button
            key="4"
            className="w-full bg-white"
            variant="outline"
            onClick={() => setDefaultMessage('Will you please give me a life path reading?')}
          >
            Will you please give me a life path reading?
          </Button>
        ),
        count > 1 && <SupportInquiry key="5" />,
      ]}
    />
  );
}
