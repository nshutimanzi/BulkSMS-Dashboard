import { Avatar, Group, Menu, Text, UnstyledButton } from "@mantine/core";
import { IconChevronDown, IconLogout, IconSettings } from "@tabler/icons-react";
import '../styles/header.scss';
import { useState } from "react";
import cx from 'clsx';

export default function Header() {
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    return (
        <div className="header">
            <Group justify="space-between">
                <Text size="xl" fw={600}>Bulk SMS</Text> 
                <Menu
                width={200}
                position="bottom-end"
                transitionProps={{ transition: 'pop-bottom-right' }}
                onClose={() => setUserMenuOpened(false)}
                onOpen={() => setUserMenuOpened(true)}
                withinPortal
                >
                    <Menu.Target>
                        <UnstyledButton
                        className={cx("user", { "userActive": userMenuOpened })}
                        >
                            <Group gap={7}>
                                <Avatar color="yellow" radius="xl" size={30}>WS</Avatar>
                                <IconChevronDown size={20} stroke={1.5} color="black" />
                            </Group>
                        </UnstyledButton>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Label>Settings</Menu.Label>
                        <Menu.Item
                        leftSection={<IconSettings size={16} stroke={1.5} />}
                        >
                            Account settings
                        </Menu.Item>
                        <Menu.Item
                        leftSection={<IconLogout size={16} stroke={1.5} />}
                        >
                            Logout
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Group>
        </div>
    );
}

