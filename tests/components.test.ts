import { describe, it, expect } from 'vitest';
import { 
    ButtonStyle,
    ButtonBuilder,
    StringSelectMenuBuilder,
    UserSelectMenuBuilder,
    RoleSelectMenuBuilder,
    ChannelSelectMenuBuilder,
    ActionRowBuilder,
    ComponentType
} from 'discord.js';
import {
    ButtonBuild,
    StringSelectMenuBuild,
    UserSelectMenuBuild,
    RoleSelectMenuBuild,
    ChannelSelectMenuBuild,
    ActionRowBuild,
    ButtonStyles
} from '../src/utils/components';

describe('Component Utilities', () => {
    describe('Button Builder', () => {
        it('should create a primary button', () => {
            const button = ButtonBuild({
                label: 'Click Me',
                customId: 'test-button'
            });

            expect(button).toBeInstanceOf(ButtonBuilder);
            expect(button.data.style).toBe(ButtonStyle.Primary);
            const buttonData = button.toJSON();
            expect(buttonData.label).toBe('Click Me');
            expect(buttonData.custom_id).toBe('test-button');
        });

        it('should create a link button', () => {
            const button = ButtonBuild({
                label: 'Visit Website',
                style: ButtonStyle.Link,
                url: 'https://discord.com'
            });

            expect(button).toBeInstanceOf(ButtonBuilder);
            expect(button.data.style).toBe(ButtonStyle.Link);
            const buttonData = button.toJSON();
            expect(buttonData.url).toBe('https://discord.com');
        });
    });

    describe('Select Menu Builders', () => {
        it('should create a string select menu', () => {
            const menu = StringSelectMenuBuild({
                customId: 'test-menu',
                placeholder: 'Select an option',
                options: [
                    { label: 'Option 1', value: '1' },
                    { label: 'Option 2', value: '2' }
                ]
            });

            expect(menu).toBeInstanceOf(StringSelectMenuBuilder);
            const menuData = menu.toJSON();
            expect(menuData.custom_id).toBe('test-menu');
            expect(menuData.placeholder).toBe('Select an option');
            expect(menuData.options?.length).toBe(2);
        });

        it('should create a user select menu', () => {
            const menu = UserSelectMenuBuild({
                customId: 'user-menu',
                placeholder: 'Select a user'
            });

            expect(menu).toBeInstanceOf(UserSelectMenuBuilder);
            const menuData = menu.toJSON();
            expect(menuData.custom_id).toBe('user-menu');
            expect(menuData.placeholder).toBe('Select a user');
        });

        it('should create a role select menu', () => {
            const menu = RoleSelectMenuBuild({
                customId: 'role-menu',
                placeholder: 'Select a role'
            });

            expect(menu).toBeInstanceOf(RoleSelectMenuBuilder);
            const menuData = menu.toJSON();
            expect(menuData.custom_id).toBe('role-menu');
            expect(menuData.placeholder).toBe('Select a role');
        });

        it('should create a channel select menu', () => {
            const menu = ChannelSelectMenuBuild({
                customId: 'channel-menu',
                placeholder: 'Select a channel'
            });

            expect(menu).toBeInstanceOf(ChannelSelectMenuBuilder);
            const menuData = menu.toJSON();
            expect(menuData.custom_id).toBe('channel-menu');
            expect(menuData.placeholder).toBe('Select a channel');
        });
    });

    describe('Action Row Builder', () => {
        it('should create an action row with components', () => {
            const button = ButtonBuild({ label: 'Click Me', customId: 'test-button' });
            const row = ActionRowBuild([button]);

            expect(row).toBeInstanceOf(ActionRowBuilder);
            expect(row.components.length).toBe(1);
            const rowData = row.toJSON();
            expect(rowData.components[0].type).toBe(ComponentType.Button);
        });
    });
});