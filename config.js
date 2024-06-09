const fs = require('fs-extra')
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348055900524";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_43_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgODksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1LFxuICAgICAgICA5OCxcbiAgICAgICAgODksXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMixcbiAgICAgICAgNTEsXG4gICAgICAgIDk1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzEsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzLFxuICAgICAgICA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDU4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDc0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMTMsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNixcbiAgICAgICAgMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDgyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyLFxuICAgICAgICAxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxLFxuICAgICAgICA2MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDY3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzksXG4gICAgICAgIDExNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDczLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFjODhUN1dMTE9tNVhGK21qdXF4ajlDY21lOUFNdUtOZC85bXRUWnFmUzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJacEhwLWF1UXF5Um5uSldLNlZWX2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmM1YTdjNGYtMTU3Zi00NDgxLThhM2UtYjgwYmIzZTYxOTBmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OCxcbiAgICAgIDE4NixcbiAgICAgIDE5MyxcbiAgICAgIDEzMixcbiAgICAgIDIxMixcbiAgICAgIDEwNixcbiAgICAgIDE4NSxcbiAgICAgIDgzLFxuICAgICAgMTMzLFxuICAgICAgMjEzLFxuICAgICAgNTMsXG4gICAgICAyMzIsXG4gICAgICAxOTMsXG4gICAgICAwLFxuICAgICAgMzcsXG4gICAgICAxMjAsXG4gICAgICAxMjcsXG4gICAgICAyNDksXG4gICAgICAyOCxcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM0LFxuICAgICAgMTE0LFxuICAgICAgMTA3LFxuICAgICAgMjMyLFxuICAgICAgMTA4LFxuICAgICAgMjAsXG4gICAgICAzNCxcbiAgICAgIDczLFxuICAgICAgNDYsXG4gICAgICAyMjYsXG4gICAgICA4MSxcbiAgICAgIDIzNSxcbiAgICAgIDIyOCxcbiAgICAgIDI0MSxcbiAgICAgIDExNyxcbiAgICAgIDE1MSxcbiAgICAgIDIxMCxcbiAgICAgIDIwMyxcbiAgICAgIDE2OCxcbiAgICAgIDIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRZQlM2R1JBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDU1OTAwNTI0OjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWZvc2V0IENvbmNlcHRzXCIsXG4gICAgXCJsaWRcIjogXCIyNTk1NDUyMDk3MzM3Nzo0MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPR1l3RUFRaGYrV3N3WVlCaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImFuNnIvQ2ZGVEc2d0ZidmlIdlpIN0cxZ2NaS2duM0ZEem00bzhraks0aE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR1J0eHJaUVdWN0x1Y3ZaQTlZV2V3bGZ6eThIQVlncC9ZYi8zYjJjN0p3WHNudFBHUjV3T1pQWVJqcXFKSXBqQ0FhOVppS2ZtU0pndEtYR3Qwdk5TQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaXVIcENNZGlHM3g4YmpLRDFmMzUrZ25CQTZaL0FLdi9iN1dpSVFKQXBDL0RGOVVOTHhQMDVaYkFEdkJoak1oaVlqTE0zWWwwU2VEbXZ4cVRTVlEwQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA1NTkwMDUyNDo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3OTQ0MjAyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
