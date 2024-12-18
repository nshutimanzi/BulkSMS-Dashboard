import { Card, Group, SimpleGrid, Text, ThemeIcon } from "@mantine/core";
import { IconCircleCheck, IconMail, IconX } from "@tabler/icons-react";
import '../styles/stats.scss'

const StatisticsCard = () => {
    const stats = [
        { icon: IconMail, iconColor: 'yellow', label: 'Available SMS', value: 217, },
        { icon: IconCircleCheck, iconColor: 'green', label: 'Successful SMS', value: 350, },
        { icon: IconX, iconColor: 'red', label: 'Failed SMS', value: 82, },
        { label: 'Total SMS', value: 1250, },
    ];

    return (
        <Card className="statisticsCard" > 
            <Text fw={500} size="lg">Statistics</Text>
            <SimpleGrid cols={4} spacing="xl">
                {stats.map((statistic, index) => (
                    <Group key={index}>
                        {statistic.icon && (
                            <ThemeIcon color={statistic.iconColor} variant="light" size={40} radius={40}>
                                <statistic.icon size={18} />
                            </ThemeIcon>
                        )}
                        <div>
                            <Text fw={700} size="lg" mt="md">
                                {statistic.value}
                            </Text>
                            <Text fw={300} size="sm">
                                {statistic.label}
                            </Text>
                        </div>
                    </Group>
                ))}
            </SimpleGrid>
        </Card>
    );
};

export default StatisticsCard;