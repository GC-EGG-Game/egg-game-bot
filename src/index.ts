import { Markup, Telegraf } from "telegraf";
import { config } from "dotenv";

const main = async () => {
  config();

  const bot = new Telegraf(process.env.BOT_TOKEN!);

  bot.telegram.setMyCommands([{ command: "start", description: "게임 시작" }]);

  bot.command("start", async (ctx) => {
    await ctx.reply("GOSTON : Battle in Korea", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "게임 시작!",
              web_app: { url: process.env.WEB_APP_URL! },
            },
          ],
        ],
      },
    });
  });

  bot.launch();

  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
};

main();
