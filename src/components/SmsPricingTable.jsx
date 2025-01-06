import { Button, Group, Table, Text } from "@mantine/core";
import '../styles/pricing-table.scss';

const pricingData = [
    { min: '< 1,000', max: '999', price: '12 Rwf', total: 'No Cap' },
    { min: '1,000', max: '10,000', price: '10 Rwf', total: 'No Cap' },
    { min: '10,001', max: '100,000', price: '8 Rwf', total: 'No Cap' },
    { min: '100,001', max: '500,000', price: '6 Rwf', total: 'No Cap' }
];

export default function SmsPricingTable() {
    return (
        <div className="pricingTableContainer">
            <Group justify="space-between" className="buttonTitle">
                <Text size="lg" fw={600}>SMS Prices</Text>
                <Button variant="filled" color="rgba(0, 0, 0, 1)" size="md" radius="xl">Purchase SMS</Button>
            </Group>
            <Table className="table">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Minimum # of SMS</Table.Th>
                        <Table.Th>Maximum # of SMS</Table.Th>
                        <Table.Th>Price/SMS (Taxes Includ.)</Table.Th>
                        <Table.Th>Total Cap per Slab (Vat includ.)</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {pricingData.map((row, index) => (
                        <Table.Tr key={index}>
                            <Table.Td>{row.min}</Table.Td>
                            <Table.Td>{row.max}</Table.Td>
                            <Table.Td>{row.price}</Table.Td>
                            <Table.Td>{row.total}</Table.Td>
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>
        </div>
    );
}