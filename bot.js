const mineflayer = require('mineflayer');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Bot activo'));
app.listen(PORT, () => console.log(`Web viva en puerto ${PORT}`));

process.on('uncaughtException', (err) => {
  console.log('CRASH :', err.message);
});

const bot = mineflayer.createBot({
  host: 'mc.masivo.gg',
  port: 25565,
  auth: 'microsoft',
  version: false
});

bot.on('login', () => console.log('Bot autenticado. Entrando al server...'));

bot.on('resourcePack', () => {
  console.log('Resource Pack pedido. Aceptando...');
  setTimeout(() => bot.acceptResourcePack(), 2000);
});

bot.on('spawn', () => console.log('Spawn completo.'));

bot.on('message', (message) => {
  console.log('[ ]', message.toString());
});

setInterval(() => {
  if (!bot.entity) return;
  bot.swingArm();
}, 625);

bot.on('error', err => console.log(' Error:', err.message));
bot.on('kicked', reason => console.log(' Expulsado:', reason));
bot.on('end', reason => console.log(' Desconectado:', reason));
