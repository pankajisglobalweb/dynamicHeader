"use client"
import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import axios from 'axios';

const { SubMenu } = Menu;


export default function DynamicMenu() {

    const [menuData, setMenuData] = useState([]);
    const Token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiOTE0Yzg1N2Y2NTIxYzk2NjEwODJiNDI5MGFiMjBlMTJlN2QxOGYxODNhOTdkYzY0YWRhYTgxNDBhYTZiOTExOGUwZGQ4NGY5ZmVkYTkwZmYiLCJpYXQiOjE3MTkyMjEwMjkuNTUxMjg4LCJuYmYiOjE3MTkyMjEwMjkuNTUxMjkyLCJleHAiOjE3NTA3NTcwMjkuNTQ1NTIyLCJzdWIiOiIyMTkiLCJzY29wZXMiOltdfQ.MriXw3dG2kwcJu9lgTHeSor1iCq0bMOaMJBUYA0whYB72pY_KQ0XYGh3VA2-_zqtStrdwehqlmr0_Ypnq6o5wf00BWuY0dnXsxoT-hQ1oaH9P7Vu5IAF5GLmi6AUhtOwz1JCs0JEFWHqrmY0qoaaNXOwGs-8tFDpYb5x1M5ZB4aSsX0HpJihd24Rfo0k-S8f16xHSaBsgWEpEpuVXNmgeEEt6_KtdvuaKVykGCmh3KMxFEvwqXp7PiwFgGxKITEHzWJD1JnNViqXmb_Uuoqew3rtNk3CRkqlxcXdX-NwxDA7W0l394pGhlJOYlpbo0X12_r8lfVufpZcnIRPAjP7OzaIci7hqKB63ndFamy_s3AUXdKI0UH2q0LpXcw2cerBJba7JwfgxFgrdRaSz3HIjG9f1frIlVCL7TBXWXAjfwNnU2wnUSY4H0BPeEodEhBs8_tGOtmTLdq3Y7LzRBUgLr6HBkX5_V7A32WvxLKaEnJKjsVYliZb9wxTJJ-3zBc7fWoiLRQNUbsx5O8KY_vRmoaYmYqH2V-Va_RXHiFAXsyOZFeSNDpS1e21dpc2odY0_1SQL4_O9g05Mjb22ArsCCdrqtGDhqXA_lbSNpR2SLQEaJLtSM1mCHf4jPJRMi3FbD2nF0DfwRFXnMS_iMBWnQkqr_Nw0_B_a4iEO1Svdes'

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                // const raw = JSON.stringify({
                //     user: 'AdminPro',
                //     password: 'Mnop@1234'
                // });

                // // Request options
                // const requestOptions = {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: raw
                // };
                // const loginResponse = await fetch('http://appnox-tm.it/api/login', requestOptions);
                // const loginResult = await loginResponse.json();


                // console.log(loginResult);


                // // Fetch menu tree
                const menuResponse = await axios.get('http://appnox-tm.it/api/v1/menu/tree', {
                    headers: {
                        Authorization: `Bearer ${Token}`
                    }
                });
                setMenuData(menuResponse.data.result.data);
                console.log(menuResponse.data.result.data);
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };

        fetchMenuData();
    }, []);


    const renderMenu = (menu) => {
        return menu.map((item) => {
            if (item.children && item.children.length > 0) {
                return (
                    <SubMenu key={item.menuId} title={item.item}>
                        {renderMenu(item.children)}
                    </SubMenu>
                );
            }
            return <Menu.Item key={item.menuId}>{item.item}</Menu.Item>;
        });
    };


    return (
        <Menu mode="horizontal" theme="dark">
            <div className="logo">
                <img className='h-[50px] w-[200px]' height={100} width={100} src="https://appnox.ai/wp-content/uploads/2024/05/Appnox_Transparent-e1718003907449.png" alt="Appnox Logo" />
            </div>
            {renderMenu(menuData)}
          
        </Menu>
    );
}
