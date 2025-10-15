"use client"

import { useState, useEffect } from "react"

export function ChatbotWidget() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load the Botpress webchat script
    const script = document.createElement("script")
    script.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js"
    script.async = true
    script.onload = () => {
      // Initialize the webchat after script loads
      const initScript = document.createElement("script")
      initScript.innerHTML = `
        window.botpressWebChat.init({
          composerPlaceholder: "Hỏi trợ lý lễ tân...",
          botConversationDescription: "Trợ lý lễ tân Khách sạn Địa Ngục",
          botId: "your-bot-id",
          hostUrl: "https://cdn.botpress.cloud/webchat/v3.3",
          messagingUrl: "https://messaging.botpress.cloud",
          clientId: "your-client-id",
          webhookId: "your-webhook-id",
          lazySocket: true,
          themeName: "prism",
          botName: "Trợ Lý Lễ Tân",
          stylesheet: "https://webchat-styler-css.botpress.app/prod/code/your-style-id/v12345/style.css",
          frontendVersion: "v3.3",
          useSessionStorage: true,
          theme: "prism",
          themeColor: "#8B0000"
        });
      `
      document.body.appendChild(initScript)
      setIsLoaded(true)
    }
    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      {/* Botpress webchat will be injected here */}
      <div id="webchat" />

      {/* Custom styling for the chatbot */}
      <style jsx global>{`
        #webchat {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
        }
        
        /* Custom chatbot button styling to match theme */
        .bpw-floating-button {
          background: linear-gradient(135deg, #8B0000 0%, #DC143C 100%) !important;
          box-shadow: 0 4px 20px rgba(139, 0, 0, 0.4) !important;
        }
        
        .bpw-floating-button:hover {
          background: linear-gradient(135deg, #A00000 0%, #FF1744 100%) !important;
          box-shadow: 0 6px 30px rgba(139, 0, 0, 0.6) !important;
        }
        
        /* Chat window styling */
        .bpw-chat-container {
          border: 1px solid rgba(139, 0, 0, 0.3) !important;
        }
        
        .bpw-header {
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%) !important;
          border-bottom: 2px solid #8B0000 !important;
        }
        
        .bpw-from-bot .bpw-chat-bubble {
          background: #1a1a1a !important;
          border: 1px solid rgba(139, 0, 0, 0.2) !important;
          color: #f5f5f5 !important;
        }
        
        .bpw-from-user .bpw-chat-bubble {
          background: linear-gradient(135deg, #8B0000 0%, #DC143C 100%) !important;
          color: #ffffff !important;
        }
      `}</style>
    </>
  )
}
