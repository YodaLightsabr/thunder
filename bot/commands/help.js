import Command from '@conflict/beta/commands';
import { Embed } from '@conflict/beta/components';

export default new Command({
    name: 'help',
    description: 'Get help',
    options: [],
    execute: async (command, options, utils) => {
        command.view(
            <message>
                <Embed color="#FFD45D" thumbnail={{ url: "https://cdn.discordapp.com/attachments/785702152374321163/1087419518873239613/Frame_1_4.png" }}>
                    <title>ThunderBot AI</title>
                    <description>Ask me anything: {'</ask:1087420009585852436>'}</description>
                </Embed>
            </message>
        );
    }
});
