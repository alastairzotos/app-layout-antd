
import { Space, Typography } from "antd";
import { HEADER_HEIGHT } from "components/sizes";
import { useAppLayout } from "contexts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const { Title } = Typography;

export const Logo: React.FC = () => {
  const { title, logo, logoAlt, homeUrl } = useAppLayout();

  return (
    <Link href={homeUrl}> 
      <Space style={{ display: 'flex', justifyContent: 'center', height: HEADER_HEIGHT - 1 }}>
        <Image
          src={logo}
          width={50}
          height={50}
          alt={logoAlt}
          style={{ paddingTop: 7 }}
        />
        <Title level={4} style={{ marginTop: 20, marginLeft: 4, fontSize: '1.4em' }}>
          {title}
        </Title>
      </Space>
    </Link>
  )
}
