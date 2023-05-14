import { ReactNode } from "react";
import { Page } from "../components/page/Page";
import "./global.css";

export default function Layout({children} : {children: ReactNode}) {
    return (
        <html lang="en">
            <body>
                <Page>
                    {children}
                </Page>
            </body>
        </html>
    )
}
