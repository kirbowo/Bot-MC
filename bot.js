const mineflayer = require('mineflayer');
const express = require('express');

// Servidor web simulado
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Bot activo'));
app.listen(PORT, () => console.log(`Puerto ${PORT}`));

const bot = mineflayer.createBot({
  host: 'mc.masivo.gg',
  port: 25565,
  auth: 'microsoft',
  version: false
});

bot.on('resourcePack', () => {
  setTimeout(() => bot.acceptResourcePack(), 2000);
});

bot.on('spawn', () => {
  console.log('Bot conectado al server');
});

setInterval(() => {
  if (!bot.entity) return;
  bot.swingArm();
}, 625);

bot.on('error', err => console.log('Error:', err.message));
bot.on('kicked', reason => console.log('Expulsado:', reason));
bot.on('end', () => console.log('Desconectado. Reconectando...'));
