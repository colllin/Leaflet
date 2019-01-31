import React from 'react';
import Link from 'next/link';

class Page extends React.Component {
    // static async getInitialProps ({query}) {
    //   // query.slug
    // }
    render() {
        return (
            <div>
                <style jsx global>{`
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
                `}</style>
                {/* // this.props.url.query.slug */}
                <h1>
                    Leaflux Demos / Examples
                </h1>
                <section>
                    <h1>
                        Simple
                    </h1>
                    <ul>
                        <li>
                            <Link href="/simple/example">Example</Link>
                        </li>
                    </ul>
                </section>
                <section>
                    <h1>
                        Advanced
                    </h1>
                    <ul>
                        <li>
                            <Link href="/simple/example">Example</Link>
                        </li>
                    </ul>
                </section>
                <section>
                    <h1>
                        Every Feature
                    </h1>
                    <ul>
                        <li>
                            <Link href="/simple/example">Example</Link>
                        </li>
                    </ul>
                </section>
            </div>
        );
    }
}

export default Page;
