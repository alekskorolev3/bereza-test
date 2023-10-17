export const columns = [
    {
        title: 'Номер ББО',
        dataIndex: 'name',
    },
    {
        title: '1',
        dataIndex: '1',
    },
    {
        title: '2',
        dataIndex: '2',
    },
    {
        title: '3',
        dataIndex: '3',
    },
    {
        title: '4',
        dataIndex: '4',
    }
]
export const initialData = [
    {
        key: '1',
        name: 'Рабочая глубина аэротенка, м',
        1: '3',
        2: '5',
        3: '4',
        4: '6'
    },
    {
        key: '2',
        name: 'Гидравлическая схема функционирования аэротенка ',
        1: 'смес.',
        2: 'смес.',
        3: 'вытесн.',
        4: 'смес.'
    },
    {
        key: '3',
        name: 'Площадь аэротенка, м² ',
        1: '117',
        2: '121',
        3: '106',
        4: '112'
    },
    {
        key: '4',
        name: 'Объем аэротенка, м³ ',
        1: '456',
        2: '502',
        3: '482',
        4: '532'
    },
    {
        key: '5',
        name: 'Объем зон нитрификации, м³ ',
        1: '25',
        2: '27',
        3: '34',
        4: '18'
    },
    {
        key: '6',
        name: 'Объем зон денитрификации, м³ ',
        1: '12',
        2: '35',
        3: '17',
        4: '26'
    },
    {
        key: '7',
        name: 'Объем анаэробной зоны, м³ ',
        1: '257',
        2: '302',
        3: '285',
        4: '324'
    },
];

export const convertTableData = (data) => {

    const {data_bbo_1, data_bbo_2, data_bbo_3, data_bbo_4} = data

    const list = [Object.entries(data_bbo_1), Object.entries(data_bbo_2), Object.entries(data_bbo_3), Object.entries(data_bbo_4)]


    return initialData.map((row, j) => {
        for (let i = 1; i <= 4; i++) {
            row = {...row, [i]: list[i - 1][j + 1][1]}
        }
        return row
    })
}

export const convertFormValues = (data) => {
    const {data_bbo_1} = data

    return {
        bbo_id: parseInt(data_bbo_1.bbo_id),
        tankHeight: data_bbo_1.tankHeight,
        tankSchema: data_bbo_1.tankSchema,
        tankArea: data_bbo_1.tankArea,
        tankVolume: data_bbo_1.tankVolume,
        nitrificationVolume: data_bbo_1.nitrificationVolume,
        denitrificationVolume: data_bbo_1.denitrificationVolume,
        anaerobicsVolume: data_bbo_1.anaerobicsVolume
    }
}
