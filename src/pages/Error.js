import { Button, Result } from "antd";
import React from "react";

const Error = ({ history }) => {
    const volver = () => {
        history.push("/");
    }
    return (
        <Result
            status="404"
            title="404"
            subTitle="Mensaje de error prueba !!!!"
            extra={<Button onClick={() => volver()} type="primary">Volver</Button>}
        />
    );
};
export default Error;