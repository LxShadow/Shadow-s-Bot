const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝑴𝒆𝒏𝒔𝒂𝒋𝒆: ${pesan}`;
  let teks = `𝑨𝑪𝑻𝑰𝑽𝑬𝑵𝑺𝑬 𝑨𝑳𝑽𝑽!!\n\n ${oi}\n\n 𝑴𝒆𝒏𝒄𝒊𝒐𝒏𝒆𝒔:\n\n`;
  for (const mem of participants) {
    teks += `🦔 @${mem.id.split('@')[0]}\n`;
  }
  teks += `𝑺𝒉𝒂𝒅𝒐𝒘𝒔 𝑩𝒐𝒕`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
