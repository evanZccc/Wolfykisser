const { EmbedBuilder } = require('discord.js');
const config = require("../config.js");
const musicIcons = require('../UI/icons/musicicons.js');

module.exports = {
    name: "support",
    description: "Get support server link",
    permissions: "0x0000000000000800",
    options: [],
    run: async (client, interaction, lang) => {
        try {
            const supportServerLink = "https://discord.gg/2nB9Vney5X";
            const githubLink = "https://x.com";
            const replitLink = "https://www.tiktok.com/@furryitalia_server_ds?_t=ZN-8tMmxYRtLLq&_r=1";
            const youtubeLink = "https://www.youtube.com";

            const embed = new EmbedBuilder()
                .setColor('#ff00cc')
                .setAuthor({
                    name: lang.support.embed.authorName,
                    iconURL: musicIcons.beats2Icon, 
                    url: config.SupportServer
                })
                .setDescription(lang.support.embed.description
                    .replace("{supportServerLink}", supportServerLink)
                    .replace("{githubLink}", githubLink)
                    .replace("{replitLink}", replitLink)
                    .replace("{youtubeLink}", youtubeLink)
                )
                .setImage('https://cdn.discordapp.com/attachments/1329968914423353425/1332726073267458109/xprUpjvO.jpg?ex=67964d60&is=6794fbe0&hm=368672e3b4334253587e913da84ff76d648c80607ee00ee5e1b6efb7b015e4e5&')
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (e) {
            console.error(e);
            const errorEmbed = new EmbedBuilder()
                .setColor('#ff00cc')
                .setAuthor({
                    name: lang.support.embed.error,
                    iconURL: musicIcons.alertIcon,
                    url: config.SupportServer
                })
                .setDescription(lang.support.embed.errorDescription)
                .setFooter({ text: lang.footer, iconURL: musicIcons.heartIcon });

            await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
        }
    },
};