import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Chip
} from "@nextui-org/react";
import IconEvent from '../atom/IconEvent.jsx';
import ActionEvent from '../molecules/ActionEvent.jsx';

const TableEvent = () => {
    const events = [
        { id: 1, name: "Event 1", date: "1 September 2024", status: "Active" },
    ];

    return (
        <Table
            color="default"
            aria-label="List Event"
            selectionMode="multiple"
            removeWrapper
        >
            <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>TANGGAL</TableColumn>
                <TableColumn>STATUS</TableColumn>
                <TableColumn>ACTION</TableColumn>
            </TableHeader>
            <TableBody>
                {events.map((event) => (
                    <TableRow key={event.id}>
                        <TableCell>
                            <IconEvent />
                        </TableCell>
                        <TableCell>
                            <p>{event.date}</p>
                        </TableCell>
                        <TableCell>
                            <Chip color="success" variant="flat">{event.status}</Chip>
                        </TableCell>
                        <TableCell>
                            <ActionEvent />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TableEvent;
