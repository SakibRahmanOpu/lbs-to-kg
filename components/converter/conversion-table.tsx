import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ConversionTableProps {
  title: string;
  leftHeader: string;
  rightHeader: string;
  data: { input: string; output: string }[];
}

export default function ConversionTable({
  title,
  leftHeader,
  rightHeader,
  data
}: ConversionTableProps) {
  return (
    <Card className="shadow-sm mb-8">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/2">{leftHeader}</TableHead>
              <TableHead className="w-1/2">{rightHeader}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.input}</TableCell>
                <TableCell>{row.output}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}