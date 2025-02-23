import { 
    ButtonBuilder, 
    ButtonStyle, 
    ActionRowBuilder,
    StringSelectMenuBuilder,
    UserSelectMenuBuilder,
    RoleSelectMenuBuilder,
    ChannelSelectMenuBuilder,
    ComponentType,
    SelectMenuBuilder
} from 'discord.js';

// Predefined button styles for common actions
export const ButtonStyles = {
    PRIMARY: ButtonStyle.Primary,
    SECONDARY: ButtonStyle.Secondary,
    SUCCESS: ButtonStyle.Success,
    DANGER: ButtonStyle.Danger,
    LINK: ButtonStyle.Link
} as const;

/**
 * Creates a button with predefined styling
 */
export function ButtonBuild(options: {
    label: string;
    style?: ButtonStyle;
    customId?: string;
    url?: string;
    emoji?: string;
    disabled?: boolean;
}) {
    const button = new ButtonBuilder()
        .setLabel(options.label)
        .setStyle(options.style || ButtonStyle.Primary);

    if (options.customId && options.style !== ButtonStyle.Link) {
        button.setCustomId(options.customId);
    }

    if (options.url && options.style === ButtonStyle.Link) {
        button.setURL(options.url);
    }

    if (options.emoji) {
        button.setEmoji(options.emoji);
    }

    if (options.disabled) {
        button.setDisabled(true);
    }

    return button;
}

// Base options for all select menus
interface BaseSelectMenuOptions {
    customId: string;
    placeholder?: string;
    minValues?: number;
    maxValues?: number;
    disabled?: boolean;
}

// Options specific to string select menus
interface StringSelectMenuOptions extends BaseSelectMenuOptions {
    options: Array<{
        label: string;
        value: string;
        description?: string;
        emoji?: string;
        default?: boolean;
    }>;
}

/**
 * Creates a string select menu
 */
export function StringSelectMenuBuild(options: StringSelectMenuOptions): StringSelectMenuBuilder {
    const menu = new StringSelectMenuBuilder()
        .setCustomId(options.customId)
        .addOptions(options.options);

    if (options.placeholder) menu.setPlaceholder(options.placeholder);
    if (typeof options.minValues === 'number') menu.setMinValues(options.minValues);
    if (typeof options.maxValues === 'number') menu.setMaxValues(options.maxValues);
    if (options.disabled) menu.setDisabled(true);

    return menu;
}

/**
 * Creates a user select menu
 */
export function UserSelectMenuBuild(options: BaseSelectMenuOptions): UserSelectMenuBuilder {
    const menu = new UserSelectMenuBuilder()
        .setCustomId(options.customId);

    if (options.placeholder) menu.setPlaceholder(options.placeholder);
    if (typeof options.minValues === 'number') menu.setMinValues(options.minValues);
    if (typeof options.maxValues === 'number') menu.setMaxValues(options.maxValues);
    if (options.disabled) menu.setDisabled(true);

    return menu;
}

/**
 * Creates a role select menu
 */
export function RoleSelectMenuBuild(options: BaseSelectMenuOptions): RoleSelectMenuBuilder {
    const menu = new RoleSelectMenuBuilder()
        .setCustomId(options.customId);

    if (options.placeholder) menu.setPlaceholder(options.placeholder);
    if (typeof options.minValues === 'number') menu.setMinValues(options.minValues);
    if (typeof options.maxValues === 'number') menu.setMaxValues(options.maxValues);
    if (options.disabled) menu.setDisabled(true);

    return menu;
}

/**
 * Creates a channel select menu
 */
export function ChannelSelectMenuBuild(options: BaseSelectMenuOptions): ChannelSelectMenuBuilder {
    const menu = new ChannelSelectMenuBuilder()
        .setCustomId(options.customId);

    if (options.placeholder) menu.setPlaceholder(options.placeholder);
    if (typeof options.minValues === 'number') menu.setMinValues(options.minValues);
    if (typeof options.maxValues === 'number') menu.setMaxValues(options.maxValues);
    if (options.disabled) menu.setDisabled(true);

    return menu;
}

/**
 * Creates an action row with components
 */
export function ActionRowBuild<T extends ButtonBuilder | SelectMenuBuilder>(components: T[]) {
    return new ActionRowBuilder<T>().addComponents(components);
}