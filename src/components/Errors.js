import { Alert } from 'antd';
import React from 'react';

export default function Errors({ mensaje }) {
    return (
        <Alert message={mensaje} type="error" />
    )
}