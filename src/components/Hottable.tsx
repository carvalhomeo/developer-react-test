import { HotTable } from '@handsontable/react';
import { textRenderer, registerRenderer } from 'handsontable/renderers';
import { findHighestLowest, mapCellInfo } from '../utils';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

registerAllModules();

interface HottableProps {
    data: (string | number)[][]
}

export default function Hottable({ data }: HottableProps) {
    const cells: number[][] = data.slice(1).map(cell => cell.slice(1)) as number[][]
    const { highest, lowest } = findHighestLowest(cells)
    const cellInfo = mapCellInfo(cells)

    registerRenderer('customRenderer', (hotInstance, TD, row, column, prop, value, ...rest) => {
        textRenderer(hotInstance, TD, row, column, prop, value, ...rest);

        const normalizedValue = (value - lowest) / (highest - lowest);
        const backgroundColor = `rgba(255, 0, 0, ${0.2 + normalizedValue})`;
    
        TD.style.fontWeight = 'bold';
        TD.style.background = backgroundColor;
    });
    
    return (
        <HotTable
            data={data}
            disableVisualSelection
            rowHeaders={false}
            colHeaders={false}
            height="auto"
            autoWrapRow={true}
            autoWrapCol={true}
            licenseKey="non-commercial-and-evaluation" // for non-commercial use only
            cell={cellInfo}
        />
    )
}
