import { View } from '@conflict/beta/view';
import Command from '@conflict/beta/commands';
import { Embed } from '@conflict/beta/components';
import { Client } from 'gpt-free';

const gptfree = new Client();

function fancyElapsedTime (ms) {
    return `${(ms / 1000).toFixed(2)}s`;
}

export default new Command({
    name: 'ask',
    description: 'Ask ThunderBot',
    options: [
        {
            name: 'question',
            description: 'The question you want to ask ThunderBot',
            type: 3,
            required: true
        }
    ],
    execute: async (command, options, utils) => {
        const start = Date.now();

        command.deferReply();

        const conversation = await gptfree.model("chat");

        const response = await conversation.ask(command.options.question);

        const end = Date.now();

        const view = new View(
            <message>
                <Embed color="#FFD45D" footer={{ text: `Generated ${response.length} characters in ${fancyElapsedTime(end - start)}`, icon_url: 'https://cdn.discordapp.com/attachments/785702152374321163/1087419518873239613/Frame_1_4.png' }}>
                    <description>{response}</description>
                </Embed>
            </message>
        );

        console.log(view);

        command.followUp(view);
    }
});
