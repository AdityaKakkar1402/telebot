//5902361898:AAHPFRxpHEW5fIYipZpMZsDzSlWsX4Oq1BQ
//t.me/sortjavaBot
const { Telegraf } = require("telegraf");
const bot = new Telegraf("5902361898:AAHPFRxpHEW5fIYipZpMZsDzSlWsX4Oq1BQ");
bot.start((ctx) => ctx.reply("Welcome"));
bot.launch();
