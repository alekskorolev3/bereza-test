import React from 'react'

export const columns = [
    {
        title: 'Номер ББО',
        dataIndex: 'name'
    },
    {
        title: '1',
        dataIndex: '1',
        // render: (data) => checkParameter(data, 1)
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
export const initData = [
    {
        key: '1',
        name: 'Доза ила по массе в аэротенке, г/дм³',
        1: '3',
        2: '5',
        3: '4',
        4: '6'
    },
    {
        key: '2',
        name: 'Доза ила по объему, см³/дм³',
        1: '1',
        2: '2',
        3: '3',
        4: '4'
    },
    {
        key: '3',
        name: 'Зольность ила, %',
        1: '25',
        2: '26',
        3: '27',
        4: '28'
    },
    {
        key: '4',
        name: 'Концентрация избыточного активного ила, г/дм³',
        1: '456',
        2: '502',
        3: '482',
        4: '532'
    },
    {
        key: '5',
        name: 'Содержание взвешенных веществ в исходной воде, мг/дм³',
        1: '25',
        2: '27',
        3: '34',
        4: '18'
    },
    {
        key: '6',
        name: 'Содержание взвешенных веществ после п/о, мг/дм³ ',
        1: '12',
        2: '35',
        3: '17',
        4: '26'
    },
    {
        key: '7',
        name: 'Содержание взвешенных веществ в очищенной воде, мг/дм³ ',
        1: '257',
        2: '302',
        3: '285',
        4: '324'
    },
    {
        key: '8',
        name: 'БПК₅ на входе ОС, мгО₂/дм³ ',
        1: '257',
        2: '302',
        3: '285',
        4: '324'
    },
    {
        key: '9',
        name: 'ХПК на входе аэротенка, мгO₂/дм³ ',
        1: '257',
        2: '302',
        3: '285',
        4: '324'
    },
    {
        key: '10',
        name: 'БПК₅ на входе аэротенка, мгО₂/дм³ ',
        1: '257',
        2: '302',
        3: '285',
        4: '324'
    },
    {
        key: '11',
        name: 'БПК₅ на выходе аэротенка, мгО₂/дм³ ',
        1: '257',
        2: '302',
        3: '285',
        4: '324'
    },
    {
        key: '12',
        name: 'Азот аммонийный на входе аэротенка, мг/дм³ ',
        1: '257',
        2: '302',
        3: '285',
        4: '324'
    },
    {
        key: '13',
        name: 'Азот аммонийный на выходе аэротенка, мг/дм³ ',
        1: '257',
        2: '302',
        3: '285',
        4: '324'
    },
    {
        key: '14',
        name: 'Азот нитритов на входе аэротенка, мг/дм³ ',
        1: '257',
        2: '302',
        3: '285',
        4: '324'
    },
    {
        key: '15',
        name: 'Азот нитритов на выходе данного, мг/дм³ ',
        1: '257',
        2: '302',
        3: '285',
        4: '324'
    },
    {
        key: '16',
        name: 'Азот нитратов на входе аэротенка, мг/дм³ ',
        1: '257',
        2: '302',
        3: '285',
        4: '324'
    },
    {
        key: '17',
        name: 'Азот нитратов на выходе данного, мг/дм³ ',
        1: '257',
        2: '302',
        3: '285',
        4: '324'
    },
    {
        key: '18',
        name: 'Общий азот на входе БО, мг/дм³ ',
        1: '257',
        2: '302',
        3: '285',
        4: '324'
    },
    {
        key: '19',
        name: 'Органический азот на выходе аэротенков (азот по Кьельдалю), мг/дм³ ',
        1: '257',
        2: '302',
        3: '285',
        4: '324'
    },
    {
        key: '20',
        name: 'Общий фосфор после первичных отстойников (выход), мг/дм³ ',
        1: '257',
        2: '302',
        3: '285',
        4: '324'
    },
    {
        key: '21',
        name: 'Общий фосфор на выходе участка БО, мг/дм³ ',
        1: '257',
        2: '302',
        3: '285',
        4: '324'
    },
];

// let counter = -1
//
//
// const constraints = [
//     // [min, max, max2, ..., maxN]
//     ['doseFromWeight', [2, 5]],
//     ['doseFromVolume', [0, 5]],
//     ['ashPercent', [0, 30]],
//     ['concentrationExcessActive', [0, 30]],
//     ['suspendSubstSourceWater', [0, 800]],
//     ['suspendSubstAfterSettling', [0, 420]],
//     ['suspendSubstInPurified', [0, 20]],
//     ['bpkInputOS', [0, 500]],
//     ['xpkInputAero', [0, 1000]],
//     ['bpkInputAero', [0, 700]],
//     ['bpkOutputAero', [0, 20]],
//     ['nitrogenAmmoniumInputAero', [0, 64]],
//     ['nitrogenAmmoniumOutputAero', [0, 15]],
//     ['nitrogenNitriteInputAero', [0, 1]],
//     ['nitrogenNitriteOutputAero', [0, 1]],
//     ['nitrogenNitrateInputAero', [0, 1]],
//     ['nitrogenNitrateOutputAero', [0, 5]],
//     ['totalNitrogenInputBO', [0, 92]],
//     ['organicNitrogenOutputAero', [0, 10]],
//     ['totalPhosphorusOutput', [0, 13]],
//     ['totalPhosphorusOutputBO', [0, 3]]
// ]

export const convertTableData = (data) => {

    const {data_bbo_1, data_bbo_2, data_bbo_3, data_bbo_4} = data

    const list = [Object.entries(data_bbo_1), Object.entries(data_bbo_2), Object.entries(data_bbo_3), Object.entries(data_bbo_4)]


    return initData.map((row, j) => {
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
        doseFromWeight: data_bbo_1.doseFromWeight,
        doseFromVolume: data_bbo_1.doseFromVolume,
        ashPercent: data_bbo_1.ashPercent,
        concentrationExcessActive: data_bbo_1.concentrationExcessActive,
        suspendSubstSourceWater: data_bbo_1.suspendSubstSourceWater,
        suspendSubstAfterSettling: data_bbo_1.suspendSubstAfterSettling,
        suspendSubstInPurified: data_bbo_1.suspendSubstInPurified,
        bpkInputOS: data_bbo_1.bpkInputOS,
        xpkInputAero: data_bbo_1.xpkInputAero,
        bpkInputAero: data_bbo_1.bpkInputAero,
        bpkOutputAero: data_bbo_1.bpkOutputAero,
        nitrogenAmmoniumInputAero: data_bbo_1.nitrogenAmmoniumInputAero,
        nitrogenAmmoniumOutputAero: data_bbo_1.nitrogenAmmoniumOutputAero,
        nitrogenNitriteInputAero: data_bbo_1.nitrogenNitriteInputAero,
        nitrogenNitriteOutputAero: data_bbo_1.nitrogenNitriteOutputAero,
        nitrogenNitrateInputAero: data_bbo_1.nitrogenNitrateInputAero,
        nitrogenNitrateOutputAero: data_bbo_1.nitrogenNitrateOutputAero,
        totalNitrogenInputBO: data_bbo_1.totalNitrogenInputBO,
        organicNitrogenOutputAero: data_bbo_1.organicNitrogenOutputAero,
        totalPhosphorusOutput: data_bbo_1.totalPhosphorusOutput,
        totalPhosphorusOutputBO: data_bbo_1.totalPhosphorusOutputBO
    }
}

// const checkParameter = (data) => {
//     if (counter < constraints.length) {
//         counter = counter + 1
//     }
//     else counter = 0
//
//     console.log(data, counter, constraints.length, constraints[counter][1][1])
//
//     if (typeof constraints?.[counter][1][1] !== 'undefined' && data > constraints?.[counter][1][1]) {
//         return <div className={styles.redCell}><span>{data}</span></div>
//     }
//
//     else return data
//
// }
