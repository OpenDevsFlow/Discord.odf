import { EmbedBuilder, ColorResolvable, APIEmbedField, APIEmbed } from 'discord.js';

// Predefined colors for different types of embeds
export const EmbedColors = {
    success: '#43B581',
    error: '#F04747',
    info: '#7289DA',
    warning: '#FAA61A',
    default: '#2F3136'
} as const;

export interface EmbedFooter {
    text: string;
    iconURL?: string;
}

/**
 * Creates a basic embed with consistent styling
 */
export function EmbedBuild(options: {
    title?: string;
    description?: string;
    color?: ColorResolvable;
    fields?: APIEmbedField[];
    thumbnail?: string;
    image?: string;
    footer?: EmbedFooter;
    timestamp?: boolean;
    type?: keyof typeof EmbedColors;
}): EmbedBuilder {
    const embed = new EmbedBuilder();

    if (options.title)
        embed.setTitle(options.title);
    if (options.description)
        embed.setDescription(options.description);
    if (options.fields)
        embed.addFields(options.fields);
    if (options.thumbnail)
        embed.setThumbnail(options.thumbnail);
    if (options.image)
        embed.setImage(options.image);
    if (options.footer)
        embed.setFooter(options.footer);
    if (options.timestamp)
        embed.setTimestamp();

    // Handle color setting with priority for type-based colors
    if (options.type) {
        embed.setColor(EmbedColors[options.type] as ColorResolvable);
    } else if (options.color) {
        embed.setColor(options.color);
    }

    return embed;
}