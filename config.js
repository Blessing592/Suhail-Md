toconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_50_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDMxLFxuICAgICAgICA1MixcbiAgICAgICAgMTg5LFxuICAgICAgICA2MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyLFxuICAgICAgICA1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxODgsXG4gICAgICAgIDQsXG4gICAgICAgIDMzLFxuICAgICAgICAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDY3LFxuICAgICAgICA1OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzLFxuICAgICAgICA5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDkzLFxuICAgICAgICA3MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUzLFxuICAgICAgICA0MixcbiAgICAgICAgMzksXG4gICAgICAgIDQxLFxuICAgICAgICA3NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDY0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDU4LFxuICAgICAgICA0OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU3LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgODYsXG4gICAgICAgIDU1LFxuICAgICAgICA3MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMxLFxuICAgICAgICAzMixcbiAgICAgICAgMTYwLFxuICAgICAgICA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDExNixcbiAgICAgICAgMTIyLFxuICAgICAgICA5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDc0LFxuICAgICAgICA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTksXG4gICAgICAgIDI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImtvdnBzN0VPcFd4VjJ4RnRySzhmNHpoaHE1UFJCRmJON3BieEE5bFp4K1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEwMDc0MjM5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODQzMzYyQTU3MEIwODJFOTY4QTAzNkIwNTYwRUJERDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNTA3ODI1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndDb2RRSGJwU1ZlRWpUYjlQRUw5T0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjk1NjExNGMtYzAwOC00NjhmLTgwZWQtZjRjOGY5NDlhYTU1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OSxcbiAgICAgIDE4MCxcbiAgICAgIDIxNSxcbiAgICAgIDIxMSxcbiAgICAgIDYyLFxuICAgICAgMzgsXG4gICAgICA5NyxcbiAgICAgIDIwNixcbiAgICAgIDE4MCxcbiAgICAgIDExOCxcbiAgICAgIDEyMCxcbiAgICAgIDgyLFxuICAgICAgNzcsXG4gICAgICAxNDgsXG4gICAgICAxNTgsXG4gICAgICAxNCxcbiAgICAgIDE3MyxcbiAgICAgIDExMixcbiAgICAgIDExLFxuICAgICAgMjUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDE1OSxcbiAgICAgIDE4NCxcbiAgICAgIDE1OSxcbiAgICAgIDMsXG4gICAgICAzNCxcbiAgICAgIDIwMixcbiAgICAgIDI1NCxcbiAgICAgIDIzOCxcbiAgICAgIDI0LFxuICAgICAgMTMzLFxuICAgICAgNTIsXG4gICAgICAxNDUsXG4gICAgICA0LFxuICAgICAgMjgsXG4gICAgICAxMjAsXG4gICAgICAyMzIsXG4gICAgICAyNTMsXG4gICAgICAxNjQsXG4gICAgICAxNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFo1V1pGWTZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDA3NDIzOTE6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzMjk4NTE2NTA3MDU4MToyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZUE0S1FCRUtpN3M3UUdHQXNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImFzWCtSTUM3YlRUWkthVng3WVlNalA1ZmhnOWRpU1ZBWWxzZXJoeTRtaUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieFQ1SWJOZi9YTFhqL01ZOVArNVJmcUFzWGg4QWFKYmt4THpiUjB4UCtOaVMxRXpBN0oyQkVaU0tGbHVlT3JlbDY5L1NEWmE5eVVEcjkvT2FDaTJDQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwialluVXE1NUFrc3VXZjR5OTRoK0YxazNqRlJrZXk4WDBhYmJaZm1OYWVkOWlDSE5QUUlBK0xKYm1NRS9ScmwwRG9NbG1mUEN1bXhmNlVXQ1dCSEdYalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMDc0MjM5MToyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1MDc4MTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUJRQUFEdGxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQlFBQUR0bC5qc29uIjogIntcImtleURhdGFcIjpcImQrVS9TdmRXanVTenk5M3hialQ0c1FPNTcrYWJWMFgxNEcwcGVEL1FIQVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzQ1NTA1ODE1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwyLDIwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc5NTA4NDI0MjJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
