import { Layout, Spin } from "antd";
import React from 'react';

const Loading = () => {
    const { Content } = Layout;
    return (
        <Layout style={{ height: "100vh" }}>
            <Content
                style={{
                    padding: "0 50px",
                    marginTop: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}
            >
                <Spin size="large" />
            </Content>
        </Layout>
    )
}

export default Loading;