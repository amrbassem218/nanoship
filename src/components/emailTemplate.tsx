import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <div
      style={{
        backgroundColor: "#18181b",
        color: "#d9d9d9",
        fontFamily: '"Departure Mono", "Courier New", Courier, monospace',
        padding: "40px 20px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <pre
        style={{
          color: "#f97316",
          fontSize: "10px",
          lineHeight: "1.2",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        {String.raw`
$$\   $$\  $$$$$$\  $$\   $$\  $$$$$$\   $$$$$$\  $$\   $$\ $$$$$$\ $$$$$$$\  
$$$\  $$ |$$  __$$\ $$$\  $$ |$$  __$$\ $$  __$$\ $$ |  $$ |\_$$  _|$$  __$$\ 
$$$$\ $$ |$$ /  $$ |$$$$\ $$ |$$ /  $$ |$$ /  \__|$$ |  $$ |  $$ |  $$ |  $$ |
$$ $$\$$ |$$$$$$$$ |$$ $$\$$ |$$ |  $$ |\$$$$$$\  $$$$$$$$ |  $$ |  $$$$$$$  |
$$ \$$$$ |$$  __$$ |$$ \$$$$ |$$ |  $$ | \____$$\ $$  __$$ |  $$ |  $$  ____/ 
$$ |\$$$ |$$ |  $$ |$$ |\$$$ |$$ |  $$ |$$\   $$ |$$ |  $$ |  $$ |  $$ |      
$$ | \$$ |$$ |  $$ |$$ | \$$ | $$$$$$  |\$$$$$$  |$$ |  $$ |$$$$$$\ $$ |      
\__|  \__|\__|  \__|\__|  \__| \______/  \______/ \__|  \__|\______|\__|      
                                                                              
`}
      </pre>

      <div
        style={{
          borderLeft: "2px solid #f97316",
          paddingLeft: "20px",
          marginBottom: "30px",
        }}
      >
        <p style={{ margin: "0 0 10px 0", color: "#71717a" }}>
          {">"} root@nanoship:~$
        </p>
        <h1
          style={{
            margin: "0",
            fontSize: "24px",
            fontWeight: "normal",
            color: "#f97316",
          }}
        >
          RSVP_CONFIRMED.exe
        </h1>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <p style={{ margin: "0 0 20px 0" }}>
          <span style={{ color: "#f97316" }}>hola</span>,{" "}
          <span style={{ color: "#f97316" }}>{firstName}</span>
        </p>
        <p style={{ margin: "0 0 15px 0", lineHeight: "1.6" }}>
          you&apos;re officially on the list.
        </p>
        <p style={{ margin: "0 0 15px 0", lineHeight: "1.6" }}>
          we&apos;ll hit you up when the date drops.
        </p>
        <p style={{ margin: "0", lineHeight: "1.6" }}>
          keep an eye on your inbox, {`{spam}`} folder included.
        </p>
      </div>

      <div
        style={{
          borderTop: "1px solid #27272a",
          borderBottom: "1px solid #27272a",
          padding: "20px 0",
          marginBottom: "30px",
        }}
      >
        <pre
          style={{
            margin: "0",
            color: "#52525b",
            fontSize: "10px",
            lineHeight: "1.4",
          }}
        >
          {`+----------------------+----------------------+
|     STATUS           |     CONFIRMATION     |
+----------------------+----------------------+
|  [x] RSVP Accepted   |  #NS-2026-XXXX       |
|  [ ] Date Revealed   |  Timestamp: NOW()    |
|  [ ] Event Live      |  Attendee: ${firstName.padEnd(14)} |
+----------------------+----------------------+`}
        </pre>
      </div>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <span style={{ color: "#71717a" }}>[ </span>
        <span style={{ color: "#f97316" }}>see you there</span>
        <span style={{ color: "#71717a" }}> ]</span>
      </div>

      <div style={{ textAlign: "center" }}>
        <p style={{ margin: "0", fontSize: "10px", color: "#52525b" }}>
          {`>`.repeat(20)} end of transmission {`<`.repeat(20)}
        </p>
      </div>
    </div>
  );
}
