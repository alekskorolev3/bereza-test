import React from 'react'
import styles from '../../styles/OxygenConcSensors.module.css'
import {Table} from "antd";

const AirMain = () => {

    const initialData = [
        {
            key: '1',
            number: 'В/а №1',
            performance: '7000',
            pressure: '5.0',
            activePower: '0.4',
            electricity: '20',
            enabled: '1'
        },
        {
            key: '2',
            number: 'В/а №2',
            performance: '8000',
            pressure: '57.0',
            activePower: '780.0',
            electricity: '50.0',
            enabled: '1'
        },
        {
            key: '3',
            number: 'В/а №3',
            performance: '7000',
            pressure: '58.0',
            activePower: '90.0',
            electricity: '49.0',
            enabled: '1'
        }
    ];

    const defaultColumns = [
        {
            title: ' ',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Производит., м³/ч',
            dataIndex: 'performance',
            key: 'performance',
        },
        {
            key: 'pressure',
            title: 'Давление, кПа',
            dataIndex: 'pressure',
        },
        {
            key: 'activePower',
            title: 'Активн. мощн., кВт',
            dataIndex: 'activePower',
        },
        {
            key: 'electricity',
            title: 'Электрич. ток, А',
            dataIndex: 'electricity',
        },
        {
            key: 'enabled',
            title: 'Режим/ Вкл. в упр.',
            dataIndex: 'enabled',
        }
    ]

    return (
        <div className={styles.oxygenConcSensorsContainer}>
            <h3 className={styles.title}>Затворы на воздуховодах</h3>
            <Table
                size='small'
                columns={defaultColumns}
                dataSource={initialData} bordered pagination={false}/>
        </div>
    )
}

export default AirMain
