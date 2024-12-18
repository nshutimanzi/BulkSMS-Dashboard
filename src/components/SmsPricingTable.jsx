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
                <thead>
                    <tr>
                        <th>Minimum # of SMS</th>
                        <th>Maximum # of SMS</th>
                        <th>Price/SMS (Taxes Includ.)</th>
                        <th>Total Cap per Slab (Vat includ.)</th>
                    </tr>
                </thead>
                <tbody>
                    {pricingData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.min}</td>
                            <td>{row.max}</td>
                            <td>{row.price}</td>
                            <td>{row.total}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}