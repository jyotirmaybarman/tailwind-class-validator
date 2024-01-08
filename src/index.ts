import tailwindcss from 'tailwindcss';
import postcss from 'postcss';
import typography from "@tailwindcss/typography"
import autoprefixer from 'autoprefixer';

export type Plugins = {
    typography: boolean
}

export const isValidTailwindClass = async (str: string, plugins?:Plugins): Promise<boolean> => {
    const css = `.cls{@apply ${str}}`;

    const processor = postcss([
        tailwindcss({
            darkMode: "class",
            content: ["*"],
            theme: {
                extend: {},
            },
            plugins: [
                plugins?.typography ? typography : undefined
            ],
        }),
        autoprefixer,
    ]);

    try {
        await processor.process(css, { from: undefined })
        return true
    } catch (error) {        
        return false
    }
}