import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Input,Button } from 'antd';
import React, { useState } from 'react';
const { Header, Content, Sider} = Layout;



const App = () => {


  const [items2, setItems2] = useState<any>(() => {
    const Menus = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
      const key = String(index + 1);
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `菜单 ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `子菜单${key}-${j + 1}`,
          };
        }),
      };
    });
    return Menus
  })

  const [clickMenu, setClickMenu] = useState<any>();

  const [content, setContent] = useState<any>(

  )
  const onClick = (item: any) => {

    const {keyPath} = item

    setClickMenu(keyPath);

    const clickItem =  items2.find((i: any) => {
      return i.key === keyPath[1]
    })

    
    const label =  clickItem.children.find((i: any) => {
      return String(i.key) === keyPath[0]
    }) 
    setContent(label.label)
  }

  const saveEdit = () => {

    const index =  items2.findIndex((i: any) => {
      return i.key === clickMenu[1]
    })
    items2[index].children.map((i: any) => {
      if(String(i.key) === clickMenu[0]) {
        i.label = content
      }
    })

    setItems2([...items2])
  }

  return (
  <Layout>
    <Header className="header">
      <div style={{color: '#fff'}}>
        react
      </div>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          theme='dark'
          mode="inline"
          
          onClick={onClick}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={items2}
        />
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
         <Input placeholder="Basic usage"  value={content} onChange={(value) => { console.log(value.target.value);
          setContent(value.target.value)}}/>
         <Button type="primary" onClick={saveEdit}>保存</Button>
        </Content>
      </Layout>
    </Layout>
  </Layout>
)};

export default App;