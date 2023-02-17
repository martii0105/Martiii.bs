let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
🧑🏻‍💻️ Elija una opción:
  ☣️ ${usedPrefix + command} cerrar
  ☣️ ${usedPrefix + command} abrir
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['grupo *abrir/cerrar*']
handler.tags = ['grupo']
handler.command = ['grupo', 'grupo'] 
handler.admin = true
handler.botAdmin = true

export default handler
