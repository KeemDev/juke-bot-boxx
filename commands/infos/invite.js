module.exports = {
    name: 'invite',
    aliases: ['h'],
    category: 'Infos',
    utilisation: '{prefix}invite',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(c => c.category == 'Infos').map((c) => '`' + c.name + '`').join(', ');
            const music = message.client.commands.filter(c => c.category == 'Music').map((c) => '`' + c.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: '#0099ff',
                    author: { name: 'Invte Panel' },
                    footer: { text: 'Jukebox by Oqwus' },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Music', value: music },
                        { name: 'Filters', value: '`bassboost`, `8D`, `vaporwave`, `nightcore`, `phaser`, `tremolo`, `vibrato`, `reverse`, `treble`, `normalizer`, `surrounding`, `pulsator`, `subboost`, `karaoke`, `flanger`, `gate`, `haas`, `mcompand`' },
                    ],
                    timestamp: new Date(),
                    description: `To use filters, ${client.config.prefix}filter (the filter). Example : ${client.config.prefix}filter 8D.`,
                },
            });
        } 
    },
};